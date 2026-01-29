"use client";

import React from "react";
import { productData } from "@/app/assets/data/products";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { FaFire, FaStar } from "react-icons/fa";

const TwoColumnsLayout = () => {
  const router = useRouter();

  // Filter Valentine products
  const valentineProducts = productData.filter(
    (product) => product.category === "valentine",
  );

  // Safety check
  if (valentineProducts.length < 2) return null;

  return (
    <div className="grid grid-cols-2 gap-6 w-full">
      {/* ================= LEFT CARD ================= */}
      <div className="group border rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FaFire className="text-red-500" />
            <h2 className="text-lg font-semibold">Best Selling</h2>
          </div>

          <div className="flex items-center gap-1 text-blue-600">
            <span
              className="text-sm"
              onClick={() =>
                router.push("/products?data_from=best-selling&page=1")
              }
            >
              View All
            </span>
            <IoIosArrowForward />
          </div>
        </div>

        {/* Product */}
        <div
          className="flex items-center gap-4"
          onClick={() => router.push(`/product/${valentineProducts[0].id}`)}
        >
          {/* Image */}
          <div className="w-28 h-28 overflow-hidden rounded">
            <img
              src={valentineProducts[0].image}
              alt={valentineProducts[0].productname}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div>
            <h3 className="font-medium line-clamp-2">
              {valentineProducts[0].productname}
            </h3>
            <p className="text-red-600 font-semibold mt-2">
              ₹{valentineProducts[0].price}
            </p>
          </div>
        </div>
      </div>

      {/* ================= RIGHT CARD ================= */}
      <div className="group border rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <h2 className="text-lg font-semibold">Top Rated</h2>
          </div>

          <div className="flex items-center gap-1 text-blue-600">
            <span
              className="text-sm"
              onClick={() =>
                router.push("/products?data_from=top-rated&page=1")
              }
            >
              View All
            </span>
            <IoIosArrowForward />
          </div>
        </div>

        {/* Product */}
        <div
          className="flex items-center gap-4"
          onClick={() => router.push(`/product/${valentineProducts[1].id}`)}
        >
          {/* Image */}
          <div className="w-28 h-28 overflow-hidden rounded">
            <img
              src={valentineProducts[1].image}
              alt={valentineProducts[1].productname}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div>
            <h3 className="font-medium line-clamp-2">
              {valentineProducts[1].productname}
            </h3>
            <p className="text-red-600 font-semibold mt-2">
              ₹{valentineProducts[1].price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnsLayout;
