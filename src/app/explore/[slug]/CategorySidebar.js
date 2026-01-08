"use client";

import { useState } from "react";

const FilterSection = ({ title, options, selectedOptions, onChange }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b pb-4 mb-4">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-sm font-semibold text-gray-900"
      >
        {title}
        <span className="text-lg">{open ? "−" : "+"}</span>
      </button>

      {/* Options */}
      {open && (
        <div className="mt-3 space-y-2">
          {options.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                checked={selectedOptions.includes(item)}
                onChange={() => onChange(item)}
              />
              {item}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default function CategorySidebar({ filters, setFilters }) {
  // Function to handle checkbox toggle
  const handleChange = (filterType, value) => {
    const current = filters[filterType];
    let updated = [];

    if (current.includes(value)) {
      updated = current.filter((item) => item !== value);
    } else {
      updated = [...current, value];
    }

    setFilters({ ...filters, [filterType]: updated });
  };

  return (
    <aside className="w-full md:w-64 bg-white border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-6 text-gray-900">Filter</h3>

      <FilterSection
        title="Delivery Type"
        options={["Shipped in a Gift Box", "Local Shop Delivery"]}
        selectedOptions={filters.deliveryType}
        onChange={(value) => handleChange("deliveryType", value)}
      />

      <FilterSection
        title="Price Range"
        options={["Under $50", "$50 to $75", "$75 to $100", "Above $100"]}
        selectedOptions={filters.priceRange}
        onChange={(value) => handleChange("priceRange", value)}
      />

      <FilterSection
        title="Assortment Contains"
        options={["Flowers", "Plants", "Chocolate", "Balloon"]}
        selectedOptions={filters.assortment}
        onChange={(value) => handleChange("assortment", value)}
      />

      <FilterSection
        title="Brand"
        options={[
          "1-800-Flowers",
          "Shari's Berries",
          "1-800-Baskets",
          "Fruit Bouquets",
        ]}
        selectedOptions={filters.brand}
        onChange={(value) => handleChange("brand", value)}
      />
    </aside>
  );
}
