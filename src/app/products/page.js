"use client";

import { useState, useEffect, useMemo } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import PriceFilter from "../discounts/PriceFilter";
import { Categories_Data } from "../assets/Data";
import { productData } from "../assets/data/products";

// Function to get category name by ID from Categories_Data
const getCategoryNameById = (id) => {
  const category = Categories_Data.find((cat) => cat.id === parseInt(id));
  return category ? category.category.toLowerCase() : "all";
};

// Function to extract unique brands from products
const extractUniqueBrands = (products) => {
  const brands = new Set();
  products.forEach((product) => {
    const brandMatch = product.productname.match(/^(.*?)\s/);
    if (brandMatch && brandMatch[1]) {
      brands.add(brandMatch[1]);
    }
  });
  return Array.from(brands).sort();
};

const getNumericPrice = (product) => {
  const rawPrice = product.strike_price ?? product.price ?? 0;
  return Number(String(rawPrice).replace(/[^0-9.]/g, ""));
};

const getMinMaxPrice = (products) => {
  const prices = products.map((p) => getNumericPrice(p));
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
};

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [filterBy, setFilterBy] = useState("default");
  const [brandSearch, setBrandSearch] = useState("");
  const [showBrands, setShowBrands] = useState(true);
  const PRODUCTS_PER_PAGE = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const { min, max } = useMemo(() => getMinMaxPrice(productData), []);
  const [priceRange, setPriceRange] = useState([min, max]);

  useEffect(() => {
    setPriceRange([min, max]);
  }, [min, max]);

  const router = useRouter();
  const searchParams = useSearchParams();

  // Get all unique brands from product data
  const allBrands = useMemo(() => extractUniqueBrands(productData), []);

  // Filter brands based on search
  const filteredBrands = useMemo(() => {
    return allBrands.filter((brand) =>
      brand.toLowerCase().includes(brandSearch.toLowerCase()),
    );
  }, [allBrands, brandSearch]);

  // Get category_id from URL
  useEffect(() => {
    const categoryId = searchParams.get("category_id");
    if (categoryId) {
      const categoryName = getCategoryNameById(categoryId);
      setSelectedCategory(categoryName);
    }
  }, [searchParams]);

  // Apply all filters
  useEffect(() => {
    let filtered = [...productData];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase(),
      );
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (product) =>
          product.productname
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          (product.description &&
            product.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase())) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => {
        const brandMatch = product.productname.match(/^(.*?)\s/);
        return (
          brandMatch && brandMatch[1] && selectedBrands.includes(brandMatch[1])
        );
      });
    }

    // PRICE RANGE FILTER
    filtered = filtered.filter((product) => {
      const price = getNumericPrice(product);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Apply sorting
    if (sortBy !== "default") {
      filtered.sort((a, b) => {
        const priceA = getNumericPrice(a);
        const priceB = getNumericPrice(b);

        switch (sortBy) {
          case "price-low-high":
            return priceA - priceB;

          case "price-high-low":
            return priceB - priceA;

          case "name-a-z":
            return a.productname.localeCompare(b.productname);

          case "name-z-a":
            return b.productname.localeCompare(a.productname);

          default:
            return 0;
        }
      });
    }

    // Apply additional filters
    if (filterBy !== "default") {
      switch (filterBy) {
        case "best-selling":
          // Sort by highest discount percentage
          filtered.sort((a, b) => {
            const discountA =
              ((a.price - (a.strike_price || a.price)) / a.price) * 100;
            const discountB =
              ((b.price - (b.strike_price || b.price)) / b.price) * 100;
            return discountB - discountA;
          });
          break;
        case "top-rated":
          // Sort by price (lower is better for rating)
          filtered.sort((a, b) => {
            const priceA = a.strike_price || a.price || 0;
            const priceB = b.strike_price || b.price || 0;
            return priceA - priceB;
          });
          break;
        case "most-favorite":
          // Sort by name (alphabetical)
          filtered.sort((a, b) => a.productname.localeCompare(b.productname));
          break;
      }
    }

    setCurrentPage(1);
    setFilteredProducts(filtered);
  }, [
    selectedCategory,
    searchQuery,
    selectedBrands,
    priceRange,
    sortBy,
    filterBy,
  ]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.toLowerCase());

    const categoryObj = Categories_Data.find(
      (cat) => cat.category.toLowerCase() === category.toLowerCase(),
    );

    if (categoryObj) {
      router.push(
        `/products?category_id=${categoryObj.id}&data_from=category&offer_type=&page=1`,
        { shallow: true },
      );
    } else {
      router.push("/products", { shallow: true });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(search);
  };

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSearch("");
    setSearchQuery("");
    setSelectedBrands([]);
    setPriceRange([min, max]);
    setSortBy("default");
    setFilterBy("default");
    setBrandSearch("");
    router.push("/products", { shallow: true });
  };

  const handleBrandToggle = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const handleClearBrands = () => {
    setSelectedBrands([]);
    setBrandSearch("");
  };

  const handleClearSearch = () => {
    setSearch("");
    setSearchQuery("");
  };

  const hasActiveFilters = () => {
    return (
      selectedCategory !== "all" ||
      searchQuery.trim() !== "" ||
      selectedBrands.length > 0 ||
      priceRange[0] > min ||
      priceRange[1] < max ||
      sortBy !== "default" ||
      filterBy !== "default"
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* ================= TOP BAR ================= */}
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center md:justify-between justify-between gap-4">
          {/* ===== LEFT SIDE ===== */}
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-xl font-semibold">
                {selectedCategory === "all"
                  ? "All Products"
                  : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products`}
              </h1>
              <p className="text-sm text-gray-500">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "Item" : "Items"} found
              </p>
            </div>
          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div className="flex items-center gap-3 md:flex-nowrap">
            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="relative flex items-center"
            >
              <input
                type="text"
                placeholder="Search for items..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 pr-14 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              {search && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaTimes className="text-sm" />
                </button>
              )}
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 px-3 py-2 rounded-md cursor-pointer hover:bg-green-600"
              >
                <FaSearch className="text-black text-sm" />
              </button>
            </form>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border px-5 py-3 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
            >
              <option value="default">Sort By</option>
              <option value="price-low-high">Price: (Low to High)</option>
              <option value="price-high-low">Price: (High to Low)</option>
              <option value="name-a-z">Alphabetical: (A To Z)</option>
              <option value="name-z-a">Alphabetical: (Z To A)</option>
            </select>

            {/* Filter By */}
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="border px-5 py-3 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
            >
              <option value="default">Filter By</option>
              <option value="best-selling">Best Selling</option>
              <option value="top-rated">Top Rated</option>
              <option value="most-favorite">Most Favorite</option>
            </select>
          </div>
        </div>

        {/* ================= ACTIVE FILTERS ================= */}
        {(searchQuery ||
          selectedCategory.length > 0 ||
          selectedBrands.length > 0 ||
          priceRange[0] > min ||
          priceRange[1] < max) && (
          <div className="mt-4 p-3 bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-sm">Active Filters:</h3>
              <button
                onClick={handleResetFilters}
                className="text-xs text-green-600 hover:text-green-800 cursor-pointer"
              >
                Clear All
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {/* Search by items */}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                  Search: "{searchQuery}"
                  <button
                    onClick={handleClearSearch}
                    className="hover:text-green-600"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}

              {/* Sort By */}
              {sortBy !== "default" && (
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">
                  Sort: {sortBy.replaceAll("-", " ")}
                  <button
                    onClick={() => setSortBy("default")}
                    className="hover:text-orange-600"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}

              {/* Filter By */}
              {filterBy !== "default" && (
                <span className="inline-flex items-center gap-1 bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">
                  Filter: {filterBy.replaceAll("-", " ")}
                  <button
                    onClick={() => setFilterBy("default")}
                    className="hover:text-pink-600"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}

              {/* Category */}
              {selectedCategory !== "all" && (
                <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                  Category: {selectedCategory}
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      router.push("/products", { shallow: true });
                    }}
                    className="hover:text-yellow-600"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}

              {/* Search by brands */}
              {selectedBrands.map((brand) => (
                <span
                  key={brand}
                  className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                >
                  {brand}
                  <button
                    onClick={() => handleBrandToggle(brand)}
                    className="hover:text-blue-600"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              ))}

              {/* Search by price */}
              {(priceRange[0] > min || priceRange[1] < max) && (
                <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                  Price: ${priceRange[0]} - ${priceRange[1]}
                  <button
                    onClick={() => setPriceRange([min, max])}
                    className="hover:text-purple-600"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}
            </div>
          </div>
        )}

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-6 mt-6">
          {/* ================= LEFT FILTER ================= */}
          <div className="bg-white p-4 rounded-lg shadow-sm space-y-6 lg:sticky lg:top-6 h-fit">
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold">Filter By</h1>
              {hasActiveFilters() && (
                <button
                  onClick={handleResetFilters}
                  className="text-sm text-green-600 hover:text-green-800 cursor-pointer"
                >
                  Reset All
                </button>
              )}
            </div>

            {/* Price Filter */}
            <div>
              <PriceFilter
                min={min}
                max={max}
                value={priceRange}
                onChange={setPriceRange}
              />
              <div className="flex justify-between text-sm mt-2">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>

            {/* Categories */}
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Categories</h3>

              <div className="space-y-1 max-h-60 overflow-y-auto">
                <button
                  onClick={() => handleCategorySelect("all")}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                    selectedCategory === "all"
                      ? "bg-green-500 text-white font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  All Products
                </button>

                {Categories_Data.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.category)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      selectedCategory === cat.category.toLowerCase()
                        ? "bg-green-100 text-green-700 font-medium border-l-4 border-green-500"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Brands</h3>
                <button
                  onClick={() => setShowBrands(!showBrands)}
                  className="text-sm text-green-600 hover:text-green-800 cursor-pointer"
                >
                  {showBrands ? "Hide" : "Show"}
                </button>
              </div>

              {showBrands && (
                <>
                  <div className="relative mb-3">
                    <input
                      type="text"
                      placeholder="Search by brand"
                      value={brandSearch}
                      onChange={(e) => setBrandSearch(e.target.value)}
                      className="w-full border px-3 pr-16 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                    />

                    {/* Search Icon */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <FaSearch className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* Clear Icon */}
                    {brandSearch && (
                      <button
                        onClick={() => setBrandSearch("")}
                        className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                      >
                        <FaTimes className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  {filteredBrands.length > 0 ? (
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {filteredBrands.map((brand) => (
                        <div
                          key={brand}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandToggle(brand)}
                            className="rounded text-green-500 focus:ring-green-500"
                          />
                          <span
                            className={
                              selectedBrands.includes(brand)
                                ? "font-medium text-green-700"
                                : ""
                            }
                          >
                            {brand}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No brands found</p>
                  )}

                  {selectedBrands.length > 0 && (
                    <button
                      onClick={handleClearBrands}
                      className="mt-3 text-sm text-green-600 hover:text-green-800"
                    >
                      Clear selected brands
                    </button>
                  )}
                </>
              )}
            </div>
          </div>

          {/* ================= PRODUCTS ================= */}
          <div className="w-full">
            {paginatedProducts.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  No products found
                </h3>
                <p className="text-gray-500 mt-2">
                  {searchQuery ||
                  selectedBrands.length > 0 ||
                  priceRange[0] > 0 ||
                  priceRange[1] < 1000
                    ? "Try adjusting your filters or search terms."
                    : "Try selecting a different category."}
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  View All Products
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => router.push(`/product/${product?.id}`)}
                      className="w-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
                    >
                      {/* ===== IMAGE ===== */}
                      <div className="relative w-full h-48 bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.productname}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* ===== CONTENT ===== */}
                      <div className="p-4 flex flex-col flex-grow">
                        {/* Title */}
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2">
                          {product.productname}
                        </h3>

                        {/* Description */}
                        {product.description && (
                          <p className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-2">
                            {product.description}
                          </p>
                        )}

                        {/* Price */}
                        <div className="mt-3 flex items-center gap-3">
                          {product.price && (
                            <span className="text-sm text-gray-400 line-through">
                              ₹{product.price.toFixed(2)}
                            </span>
                          )}
                          <span className="text-lg font-bold text-gray-900">
                            ₹{product.strike_price}
                          </span>
                        </div>

                        {/* Size */}
                        {product.size && (
                          <p className="text-xs text-green-600 mt-1">
                            {product.size}
                          </p>
                        )}

                        {/* Footer */}
                        <div className="mt-auto pt-4 flex justify-between items-center">
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                            {product.category}
                          </span>

                          <button className="text-sm text-green-600 hover:text-green-800 font-medium">
                            View Details →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex justify-center mt-10 gap-2">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => p - 1)}
                      className="px-4 py-2 border rounded disabled:opacity-50"
                    >
                      Prev
                    </button>

                    {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded ${
                          currentPage === index + 1
                            ? "bg-green-500 text-white"
                            : "border"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => p + 1)}
                      className="px-4 py-2 border rounded disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
