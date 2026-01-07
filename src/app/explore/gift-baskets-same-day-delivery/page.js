"use client";

import { useState } from "react";
import CategoryBar from "./CategoryBar";
import DeliveryCountdown from "./DeliveryCountdown";
import { categories } from "@/app/assets/data/categories";
import CategorySidebar from "./CategorySidebar";
import Link from "next/link";

// Sample products data
const products = [
  {
    id: 1,
    categorySlug: "flowers-same-day-delivery",
    name: "Red Roses Bouquet",
    image:
      "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/192247mpcv4n5ch28x.jpg",
    optionsCount: 5,
    startingText: "starting at",
    price: "$49.99",
    badge: "Passport Eligible",
  },
  {
    id: 2,
    categorySlug: "flowers-same-day-delivery",
    name: "Red Roses Bouquet",
    image:
      "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/192247mpcv4n5ch28x.jpg",
    optionsCount: 5,
    startingText: "starting at",
    price: "$49.99",
    badge: "Passport Eligible",
  },
  {
    id: 3,
    categorySlug: "flowers-same-day-delivery",
    name: "Red Roses Bouquet",
    image:
      "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/192247mpcv4n5ch28x.jpg",
    optionsCount: 5,
    startingText: "starting at",
    price: "$49.99",
    badge: "Passport Eligible",
  },
  {
    id: 4,
    categorySlug: "flowers-same-day-delivery",
    name: "Red Roses Bouquet",
    image:
      "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/192247mpcv4n5ch28x.jpg",
    optionsCount: 5,
    startingText: "starting at",
    price: "$49.99",
    badge: "Passport Eligible",
  },
  {
    id: 5,
    categorySlug: "birthday-same-day-delivery",
    name: "Birthday Gift Basket",
    image:
      "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/104403srdv5n5ch28x.jpg",
    optionsCount: 5,
    startingText: "starting at",
    price: "$49.99",
    badge: "Passport Eligible",
  },
  {
    id: 6,
    categorySlug: "sympathy-same-day-delivery",
    name: "Same-Day Sympathy Gifts",
    image:
      "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/104403srdv5n5ch28x.jpg",
    optionsCount: 5,
    startingText: "starting at",
    price: "$49.99",
    badge: "Passport Eligible",
  },
  {
    id: 7,
    categorySlug: "gifts-same-day-delivery",
    name: "Same-Day Get Well Gifts",
    image:
      "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/104403srdv5n5ch28x.jpg",
    optionsCount: 5,
    startingText: "starting at",
    price: "$49.99",
    badge: "Passport Eligible",
  },
  {
    id: 8,
    categorySlug: "plants-same-day-delivery",
    name: "Same-Day Plants",
    image:
      "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/104403srdv5n5ch28x.jpg",
    optionsCount: 5,
    startingText: "starting at",
    price: "$49.99",
    badge: "Passport Eligible",
  },
  {
    id: 9,
    categorySlug: "sale-same-day",
    name: "Sale",
    image:
      "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/104403srdv5n5ch28x.jpg",
    optionsCount: 5,
    startingText: "starting at",
    price: "$49.99",
    badge: "Passport Eligible",
  },
  {
    id: 10,
    categorySlug: "sale-same-day",
    name: "Sale",
    image:
      "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/104403srdv5n5ch28x.jpg",
    optionsCount: 5,
    startingText: "starting at",
    price: "$49.99",
    badge: "Passport Eligible",
  },
  {
    id: 11,
    categorySlug: "sale-same-day",
    name: "Sale",
    image:
      "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/104403srdv5n5ch28x.jpg",
    optionsCount: 5,
    startingText: "starting at",
    price: "$49.99",
    badge: "Passport Eligible",
  },
  {
    id: 12,
    categorySlug: "sale-same-day",
    name: "Sale",
    image:
      "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/104403srdv5n5ch28x.jpg",
    optionsCount: 5,
    startingText: "starting at",
    price: "$49.99",
    badge: "Passport Eligible",
  },
];

export default function GiftBasketsPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.categorySlug === selectedCategory.slug)
    : [];

  return (
    <section className="w-full bg-[#fffaf7]">
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
              Home / Gift Baskets Same Day Delivery
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Thoughtfully Curated Gift Baskets
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Make every occasion special with Blooming-Cart’s beautifully
              curated gift baskets, filled with premium flowers, treats, and
              heartfelt surprises.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Bottom Content */}
      <div className="w-full bg-white/95 py-12">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Birthday Gifts Delivered Same Day
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Send birthday wishes to someone special with a same day delivery
              gift, including fresh flower arrangements, blooming plants, gift
              baskets, balloons and other truly original surprises, all designed
              to deliver a smile today!
            </p>
          </div>
        </div>
      </div>

      <DeliveryCountdown />

      {/* Category Bar with callback */}
      <CategoryBar onSelectCategory={setSelectedCategory} />

      {/* Products Section */}
      {selectedCategory && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <CategorySidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            {/* Products Grid */}
            <div className="md:col-span-3">
              <h2 className="text-2xl font-semibold mb-6">
                Products in "{selectedCategory.title}"
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="block"
                  >
                    <div className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition cursor-pointer">
                      {/* Image */}
                      <div className="relative">
                        {product.badge && (
                          <span className="absolute top-3 left-3 bg-[#E9F5EE] text-[#1E7F4E] text-xs font-semibold px-3 py-1 rounded">
                            {product.badge}
                          </span>
                        )}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="text-lg font-medium text-black">
                          {product.name}
                        </h3>

                        <p className="text-sm text-gray-600 mt-1">
                          {product.optionsCount} options available
                        </p>

                        <p className="text-sm text-gray-600 mt-3">
                          starting at
                        </p>

                        <p className="text-xl font-bold text-black">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}

                {filteredProducts.length === 0 && (
                  <p className="text-gray-600 col-span-full">
                    No products available in this category.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
