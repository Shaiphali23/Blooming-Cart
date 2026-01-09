"use client";

import { useParams } from "next/navigation";
import { useState, useMemo } from "react";
import CategoryBar from "./CategoryBar";
import CategorySidebar from "./CategorySidebar";
import DeliveryCountdown from "./DeliveryCountdown";
import { categories } from "@/app/assets/data/categories";
import flowers from "@/app/assets/images/flower.jpg";
import birthdayFlower from "@/app/assets/images/birthday-flower.jpg";
import Image from "next/image";

export const products = [
  {
    id: 1,
    categorySlug: "flowers-same-day-delivery",
    name: "Red Roses Bouquet",
    image: flowers,
    price: 49.99,
    deliveryType: "Local Florist Delivery",
    assortment: "Flowers",
    brand: "1-800-Flowers",
  },
  {
    id: 2,
    categorySlug: "flowers-same-day-delivery",
    name: "Pink Tulips Bouquet",
    image: flowers,
    price: 39.99,
    deliveryType: "Local Florist Delivery",
    assortment: "Flowers",
    brand: "1-800-Flowers",
  },
  {
    id: 3,
    categorySlug: "birthday-same-day-delivery",
    name: "Birthday Chocolate Box",
    image: birthdayFlower,
    price: 69.99,
    deliveryType: "Shipped in a Gift Box",
    assortment: "Chocolate",
    brand: "Shari's Berries",
  },
  {
    id: 4,
    categorySlug: "birthday-same-day-delivery",
    name: "Birthday Cupcake Gift",
    image: birthdayFlower,
    price: 59.99,
    deliveryType: "Shipped in a Gift Box",
    assortment: "Bakery",
    brand: "Cheryl’s Cookies",
  },
  {
    id: 5,
    categorySlug: "sympathy-same-day-delivery",
    name: "White Sympathy Flowers",
    image: birthdayFlower,
    price: 79.99,
    deliveryType: "Local Florist Delivery",
    assortment: "Sympathy",
    brand: "1-800-Flowers",
  },
  {
    id: 6,
    categorySlug: "sympathy-same-day-delivery",
    name: "Peace Lily Plant",
    image: birthdayFlower,
    price: 64.99,
    deliveryType: "Local Florist Delivery",
    assortment: "Plants",
    brand: "1-800-Flowers",
  },
  {
    id: 7,
    categorySlug: "gifts-same-day-delivery",
    name: "Luxury Snack Basket",
    image: flowers,
    price: 54.99,
    deliveryType: "Shipped in a Gift Box",
    assortment: "Gifts",
    brand: "Harry & David",
  },
  {
    id: 8,
    categorySlug: "gifts-same-day-delivery",
    name: "Assorted Chocolate Gift",
    image: flowers,
    price: 44.99,
    deliveryType: "Shipped in a Gift Box",
    assortment: "Chocolate",
    brand: "Shari's Berries",
  },
  {
    id: 9,
    categorySlug: "plants-same-day-delivery",
    name: "Green Indoor Plant",
    image: flowers,
    price: 49.99,
    deliveryType: "Local Florist Delivery",
    assortment: "Plants",
    brand: "1-800-Flowers",
  },
  {
    id: 10,
    categorySlug: "plants-same-day-delivery",
    name: "Succulent Garden",
    image: flowers,
    price: 34.99,
    deliveryType: "Local Florist Delivery",
    assortment: "Plants",
    brand: "1-800-Flowers",
  },
  {
    id: 11,
    categorySlug: "sale-same-day",
    name: "Sale Rose Bouquet",
    image: flowers,
    price: 29.99,
    deliveryType: "Local Florist Delivery",
    assortment: "Flowers",
    brand: "1-800-Flowers",
  },
  {
    id: 12,
    categorySlug: "sale-same-day",
    name: "Sale Gift Basket",
    image: flowers,
    price: 39.99,
    deliveryType: "Shipped in a Gift Box",
    assortment: "Gifts",
    brand: "Harry & David",
  },
];

export default function ExploreCategoryPage() {
  const { slug } = useParams();

  const selectedCategory =
    categories.find((cat) => cat.slug === slug) || categories[0];

  // Filters state
  const [filters, setFilters] = useState({
    deliveryType: [],
    priceRange: [],
    assortment: [],
    brand: [],
  });

  // Filter products based on category and sidebar filters
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Filter by category
      if (product.categorySlug !== selectedCategory.slug) return false;

      // Delivery Type Filter
      if (
        filters.deliveryType.length > 0 &&
        !filters.deliveryType.includes(product.deliveryType)
      )
        return false;

      // Assortment Filter
      if (
        filters.assortment.length > 0 &&
        !filters.assortment.includes(product.assortment)
      )
        return false;

      // Brand Filter
      if (filters.brand.length > 0 && !filters.brand.includes(product.brand))
        return false;

      // Price Range Filter
      if (filters.priceRange.length > 0) {
        let priceMatched = false;
        for (const range of filters.priceRange) {
          if (range === "Under $50" && product.price < 50) priceMatched = true;
          else if (
            range === "$50 to $75" &&
            product.price >= 50 &&
            product.price <= 75
          )
            priceMatched = true;
          else if (
            range === "$75 to $100" &&
            product.price > 75 &&
            product.price <= 100
          )
            priceMatched = true;
          else if (range === "Above $100" && product.price > 100)
            priceMatched = true;
        }
        if (!priceMatched) return false;
      }

      return true;
    });
  }, [filters, selectedCategory.slug]);

  return (
    <section className="min-h-screen w-full bg-[#fffaf7]">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Blooming Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-16">
            <nav className="text-sm text-gray-200 mb-4">
              Home / Gift Baskets / Same-Day Flower Delivery
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Same-Day Flower Delivery
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Celebrate every moment with Blooming-Cart’s handcrafted gift
              baskets.
            </p>
          </div>
        </div>
      </div>

      <DeliveryCountdown />
      <CategoryBar activeSlug={selectedCategory.slug} />

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <CategorySidebar filters={filters} setFilters={setFilters} />

        {/* Products Section */}
        <div className="md:col-span-3">
          <h1 className="text-2xl font-semibold mb-6 text-gray-900">
            {selectedCategory.title}
          </h1>

          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
                >
                  <div className="relative">
                    <span className="absolute top-3 left-3 bg-[#E9F5EE] text-[#1E7F4E] text-xs font-semibold px-3 py-1 rounded">
                      BEST SELLER
                    </span>
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold text-gray-900 mt-2">
                      ${product.price}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {product.deliveryType}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
