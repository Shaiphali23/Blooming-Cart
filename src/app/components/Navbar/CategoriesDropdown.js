"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronRight, FaLeaf } from "react-icons/fa";
import { Categories_Data } from "@/app/assets/Data";
import VendorZoneDropdown from "./VendorZoneDropdown";

export default function CategoriesDropdown() {
  const [open, setOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
        setHoveredCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* ================= CATEGORY BUTTON ================= */}
      <div className="flex items-center gap-6">
        <button
          onMouseEnter={() => setOpen(true)}
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
          className="text-md font-medium text-gray-700 hover:text-green-600"
        >
          Home
        </Link>

        <div className="relative group pb-2">
          <Link
            href="/brands"
            className="text-md font-medium text-gray-700 hover:text-green-600 block py-2"
          >
            Brand
          </Link>

          <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
            <ul className="py-2">
              <li>
                <Link className="block px-4 py-2 text-sm hover:bg-green-50">
                  WishWagon
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 text-sm hover:bg-green-50">
                  WishElectrics
                </Link>
              </li>
              <li className="border-t mt-2 pt-2">
                <Link className="block px-4 py-2 text-sm font-semibold text-green-600">
                  View More →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link
          href="/discounts"
          className="text-md font-medium text-gray-700 hover:text-green-600"
        >
          Discounted Products
        </Link>

        <Link
          href="/vendors"
          className="text-md font-medium text-gray-700 hover:text-green-600"
        >
          All Vendors
        </Link>

        <VendorZoneDropdown />
      </div>

      {/* ================= MAIN DROPDOWN ================= */}
      {open && (
        <div
          className="absolute top-full left-0 mt-2 flex bg-white shadow-lg rounded-lg z-50"
          onMouseLeave={() => {
            setOpen(false);
            setHoveredCategory(null);
          }}
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
