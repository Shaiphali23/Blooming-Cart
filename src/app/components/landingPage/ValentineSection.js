"use client";

import { productData } from "@/app/assets/data/products";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ValentineSection() {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);

  // Filter products by category
  const valentineProducts = productData.filter(
    (product) => product.category === "valentine",
  );

  // Show only 4 cards initially
  const visibleProducts = showAll
    ? valentineProducts
    : valentineProducts.slice(0, 4);

  return (
    <section className="py-16">
      <h3 className="text-2xl font-bold mb-8 text-start">New Arrivals</h3>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => router.push(`/product/${product.id}`)}
            className="group border rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
          >
            {/* Card Layout */}
            <div className="flex items-center gap-4">
              {/* Image */}
              <div className="w-28 h-28 overflow-hidden rounded">
                <img
                  src={product.image}
                  alt={product.productname}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-base font-semibold line-clamp-2">
                  {product.productname}
                </h3>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-red-600">
                    ${product.price}
                  </span>
                  <span className="text-sm line-through text-gray-400">
                    ${product.strike_price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {valentineProducts.length > 4 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer px-6 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      )}
    </section>
  );
}
