"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Categories_Data } from "../assets/Data";
import CategoryItem from "./CategoryItem";
import PriceFilter from "./PriceFilter";

export default function DiscountsPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* ================= TOP BAR ================= */}
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center md:justify-between justify-between gap-4">
          {/* ===== LEFT SIDE ===== */}
          <div>
            <h1 className="text-xl font-semibold">Discounted Products</h1>
            <p className="text-sm text-gray-500">1 Items found</p>
          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div className="flex items-center gap-3 md:flex-nowrap">
            {/* Search */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search for items..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 pr-14 border rounded-md text-sm
               focus:outline-none focus:ring-1 focus:ring-green-500"
              />

              {/* Search Icon */}
              <div
                className="absolute right-2 top-1/2 -translate-y-1/2
               bg-green-500 px-3 py-2 rounded-md cursor-pointer"
              >
                <FaSearch className="text-black text-sm" />
              </div>
            </div>

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
            <h1 className="text-lg font-semibold">Filter By</h1>

            {/* Price Filter */}
            <PriceFilter />

            {/* Categories */}
            <div className="mt-6">
              <h3 className="font-semibold">Categories</h3>

              <ul className="space-y-2 text-sm text-gray-700 mt-6">
                {Categories_Data.map((cat) => (
                  <CategoryItem key={cat.category} category={cat} />
                ))}
              </ul>
            </div>

            {/* Brands */}
            <div>
              <h3 className="font-semibold mb-2">Brands</h3>

              {/* Search Input */}
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search by brand"
                  className="w-full border px-3 pr-10 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                />

                {/* Search Icon on Right Side */}
                <div className="absolute inset-y-0 right-0 top-3 right-4 flex items-center pr-3 pointer-events-none">
                  <FaSearch className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Brand List */}
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
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Product Card */}
            <div className="w-[280px] h-[360px] bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Image */}
              <div className="relative w-full h-[180px]">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
                  alt="Premium Chocolate Cake"
                  className="w-full h-full object-cover"
                />

                {/* Price Badge */}
                <span className="absolute top-3 left-3 bg-green-500 text-white text-[12px] font-semibold px-3 py-1 rounded-md">
                  ≤₹400.00
                </span>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col h-[180px]">
                <h3 className="text-[15px] font-semibold text-gray-900 leading-tight mb-4">
                  Premium Chocolate Cake
                </h3>

                <div className="mt-auto">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 line-through text-sm">
                      ₹999.00
                    </span>
                    <span className="text-[18px] font-bold text-gray-900">
                      ₹599.00
                    </span>
                  </div>
                  <p className="text-[12px] text-gray-600 mt-2">
                    Classic chocolate cake with premium ingredients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
