"use client";

import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import PriceFilter from "../discounts/PriceFilter";
import { Categories_Data } from "../assets/Data";
import { productData } from "../assets/data/products";

// Function to get category name by ID from Categories_Data
const getCategoryNameById = (id) => {
  const category = Categories_Data.find((cat) => cat.id === parseInt(id));
  return category ? category.category.toLowerCase() : "all";
};

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get category_id from URL
  useEffect(() => {
    const categoryId = searchParams.get("category_id");
    if (categoryId) {
      const categoryName = getCategoryNameById(categoryId);
      setSelectedCategory(categoryName);
    }
  }, [searchParams]);

  // Filter products based on selected category and search
  useEffect(() => {
    let filtered = productData;

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

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery]);

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
    router.push("/products", { shallow: true });
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
            {selectedCategory !== "all" && (
              <button
                onClick={handleResetFilters}
                className="text-sm text-green-600 hover:text-green-800 underline"
              >
                Clear Filter
              </button>
            )}
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
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 px-3 py-2 rounded-md cursor-pointer hover:bg-green-600"
              >
                <FaSearch className="text-black text-sm" />
              </button>
            </form>

            {/* Sort By */}
            <select className="border px-5 py-3 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-green-500">
              <option>Sort By</option>
              <option>Price: (Low to High)</option>
              <option>Price: (High to Low)</option>
              <option>Rating: (Low to High)</option>
              <option>Rating: (High to Low)</option>
              <option>Alphabetical: (A To Z)</option>
              <option>Alphabetical: (Z To A)</option>
            </select>

            {/* Filter By */}
            <select className="border px-5 py-3 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-green-500">
              <option>Filter By</option>
              <option>Best Selling</option>
              <option>Top Rated</option>
              <option>Most Favorite</option>
            </select>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
          {/* ================= LEFT FILTER ================= */}
          <div className="bg-white p-4 rounded-lg shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">Filter By</h1>
              {selectedCategory !== "all" && (
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="text-sm text-green-600 hover:text-green-800"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Price Filter */}
            <PriceFilter />

            {/* Categories */}
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="space-y-1">
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
              <h3 className="font-semibold mb-2">Brands</h3>
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search by brand"
                  className="w-full border px-3 pr-10 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <div className="absolute inset-y-0 right-0 top-3 right-4 flex items-center pr-3 pointer-events-none">
                  <FaSearch className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <input type="checkbox" /> Brand A
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" /> Brand B
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" /> Brand C
                </li>
              </ul>
            </div>
          </div>

          {/* ================= PRODUCTS ================= */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  No products found
                </h3>
                <p className="text-gray-500 mt-2">
                  {searchQuery
                    ? `No results for "${searchQuery}"`
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
                {/* Search Results Info */}
                {searchQuery && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      Showing results for:{" "}
                      <span className="font-semibold">"{searchQuery}"</span>
                    </p>
                  </div>
                )}

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      onClick={() => router.push(`/product/${product.id}`)} // Add product detail page navigation
                    >
                      {/* Image */}
                      <div className="relative w-full h-48">
                        <img
                          src={product.image}
                          alt={product.productname}
                          className="w-full h-full object-cover"
                        />
                        {product.strike_price && (
                          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
                            ≤₹{product.strike_price.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-2 line-clamp-2">
                          {product.productname}
                        </h3>

                        {product.description && (
                          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                            {product.description}
                          </p>
                        )}

                        <div className="mt-4">
                          <div className="flex items-center gap-2">
                            {product.price && (
                              <span className="text-gray-400 line-through text-sm">
                                ₹{product.price.toFixed(2)}
                              </span>
                            )}
                            {product.strike_price && (
                              <span className="text-lg font-bold text-gray-900">
                                ₹{product.strike_price.toFixed(2)}
                              </span>
                            )}
                          </div>

                          {product.size && (
                            <p className="text-xs text-green-600 mt-1">
                              {product.size}
                            </p>
                          )}
                        </div>

                        {/* Category Badge */}
                        <div className="mt-4 flex justify-between items-center">
                          <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
