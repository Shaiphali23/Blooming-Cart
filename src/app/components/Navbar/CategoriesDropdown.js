"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Categories_Data } from "@/app/assets/Data";
import VendorZoneDropdown from "./VendorZoneDropdown";
import { useRouter } from "next/navigation";

export default function CategoriesDropdown() {
  const [open, setOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Handle main category click
  const handleCategoryClick = (id, e) => {
    e.stopPropagation();
    setOpen(false);
    setHoveredCategory(null);
    router.push(
      `/products?category_id=${id}&data_from=category&offer_type=&page=1`,
    );
  };

  // Handle subcategory click
  const handleSubCategoryClick = (id, e) => {
    e.stopPropagation(); // Prevent event bubbling
    setOpen(false); // Close dropdown
    setHoveredCategory(null); // Clear hover state
    router.push(`/products?sub_category_id=${id}&data_from=category&page=1`);
  };

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

  // Optional: Add keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setHoveredCategory(null);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* ================= CATEGORY BUTTON ================= */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setOpen(true)}
          className="cursor-pointer flex items-center gap-2 bg-white text-green-600 text-sm font-semibold px-4 py-3 border border-green-600 rounded-lg hover:bg-green-50 transition"
          aria-expanded={open}
          aria-haspopup="true"
        >
          Categories
          <FaChevronDown
            className={`text-sm ml-1 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* ================= NAV LINKS ================= */}
        <Link
          href="/"
          className="text-md font-medium text-gray-700 hover:text-green-600"
        >
          Home
        </Link>

        <Link
          href="/brands"
          className="text-md font-medium text-gray-700 hover:text-green-600 block py-2"
        >
          Brand
        </Link>

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
          className="absolute top-full left-0 mt-2 flex bg-white shadow-lg rounded-lg z-50 border border-gray-200"
          onMouseLeave={() => {
            setOpen(false);
            setHoveredCategory(null);
          }}
        >
          {/* ===== LEFT: MAIN CATEGORIES ===== */}
          <ul className="w-64 border-r rounded-l-lg overflow-hidden">
            {Categories_Data.map((el) => (
              <li
                key={el.id}
                onMouseEnter={() => setHoveredCategory(el)}
                onClick={(e) => handleCategoryClick(el.id, e)}
                className="flex justify-between items-center px-4 py-3 text-sm cursor-pointer hover:bg-gray-100 transition-colors"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCategoryClick(el.id, e);
                  }
                }}
              >
                <span className="flex-1 font-medium text-gray-800">
                  {el.category}
                </span>
                <FaChevronRight className="text-xs text-gray-400" />
              </li>
            ))}
          </ul>

          {/* ===== RIGHT: SUB CATEGORIES ===== */}
          {hoveredCategory && (
            <div className="w-64 rounded-r-lg overflow-hidden">
              <div className="px-4 py-2 bg-gray-100 border-b">
                <h3 className="font-semibold text-gray-800">
                  {hoveredCategory.category}
                </h3>
              </div>
              <ul className="bg-gray-50 max-h-80 overflow-y-auto">
                {hoveredCategory.subCategories.map((sub) => (
                  <li
                    key={sub.id}
                    onClick={(e) => handleSubCategoryClick(sub.id, e)}
                    className="px-4 py-3 text-sm cursor-pointer hover:bg-gray-200 transition-colors"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleSubCategoryClick(sub.id, e);
                      }
                    }}
                  >
                    <span className="text-gray-700 hover:text-green-600">
                      {sub.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
