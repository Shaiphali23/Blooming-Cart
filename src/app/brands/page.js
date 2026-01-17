"use client";

import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { products } from "../vendors/products";

const page = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* ================= TOP BAR ================= */}
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center md:justify-between justify-between gap-4">
          {/* ===== LEFT SIDE ===== */}
          <div>
            <h1 className="text-xl font-semibold">Brands</h1>
            <p className="text-sm text-gray-500">
              Find your favourite brands and products
            </p>
          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div className="flex items-center gap-3 md:flex-nowrap">
            {/* Search Store */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search Brands"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 pr-14 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />

              {/* Search Icon */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 px-3 py-2 rounded-md cursor-pointer">
                <FaSearch className="text-black text-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
          {/* ================= PRODUCTS ================= */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-[480px] h-[360px] bg-white rounded-2xl shadow-md overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-[180px]">
                  <img
                    src={product.imageUrl}
                    alt={product.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Price Badge */}
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-[12px] font-semibold px-3 py-1 rounded-md">
                    {product.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col h-[180px]">
                  <h3 className="text-[15px] font-semibold text-gray-900 leading-tight mb-4">
                    {product.name}
                  </h3>
                  <div className="mt-auto">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 line-through text-sm">
                        {product.originalPrice}
                      </span>
                      <span className="text-[18px] font-bold text-gray-900">
                        {product.discountedPrice}
                      </span>
                    </div>
                    <p className="text-[12px] text-gray-600 mt-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
