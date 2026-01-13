"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronRight, FaLeaf } from "react-icons/fa";
import { Categories_Data } from "@/app/assets/Data";
import VendorZoneDropdown from "./VendorZoneDropdown";

export default function CategoriesDropdown() {
  const [open, setOpen] = useState(false);
//   const [zoneOpen, setZoneOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="relative">
      {/* ================= CATEGORY BUTTON ================= */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer flex items-center gap-2 
               bg-white text-green-600 
               text-sm font-semibold 
               px-4 py-3 
               border border-green-600 
               rounded-lg hover:bg-green-50 transition"
        >
          <FaLeaf className="text-lg" />
          Categories
          <FaChevronDown className="text-sm ml-1" />
        </button>

        {/* ================= NAV LINKS ================= */}
        <Link
          href="/"
          className="text-md font-medium text-gray-700 hover:text-green-600 transition"
        >
          Home
        </Link>

        <Link
          href="/brands"
          className="text-md font-medium text-gray-700 hover:text-green-600 transition"
        >
          Brand
        </Link>

        <Link
          href="/discounts"
          className="text-md font-medium text-gray-700 hover:text-green-600 transition"
        >
          Discounted Products
        </Link>

        <Link
          href="/vendors"
          className="text-md font-medium text-gray-700 hover:text-green-600 transition"
        >
          All Vendors
        </Link>

        <VendorZoneDropdown />
      </div>

      {/* ================= MAIN DROPDOWN ================= */}
      {open && (
        <div
          className="absolute top-full left-0 mt-2 flex bg-white shadow-lg rounded-lg z-50"
          onMouseLeave={() => setHoveredCategory(null)}
        >
          {/* ===== LEFT: MAIN CATEGORIES ===== */}
          <ul className="w-64 border-r">
            {Categories_Data.map((el) => (
              <li
                key={el.category}
                onMouseEnter={() => setHoveredCategory(el)}
                className="flex justify-between items-center 
                     px-4 py-3 text-sm cursor-pointer 
                     hover:bg-gray-100"
              >
                <Link href={el.url} className="flex-1">
                  {el.category}
                </Link>
                <FaChevronRight className="text-xs text-gray-400" />
              </li>
            ))}
          </ul>

          {/* ===== RIGHT: SUB CATEGORIES ===== */}
          {hoveredCategory && (
            <ul className="w-64 bg-gray-50">
              {hoveredCategory.subCategories.map((sub) => (
                <li
                  key={sub.name}
                  className="px-4 py-3 text-sm cursor-pointer hover:bg-gray-200"
                >
                  <Link href={sub.url}>{sub.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
