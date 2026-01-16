"use client";

import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

export default function CategoryItem({ category }) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between cursor-pointer"
      >
        <label className="flex items-center gap-2">
          <span>{category.category}</span>
        </label>

        {open ? (
          <FaChevronDown className="text-gray-500 text-xs" />
        ) : (
          <FaChevronRight className="text-gray-500 text-xs" />
        )}
      </div>

      {open && (
        <ul className="ml-6 mt-2 space-y-1">
          {category.subCategories.map((sub) => (
            <li key={sub.name} className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-gray-600">{sub.name}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
