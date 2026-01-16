import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const PriceFilter = () => {
  const MIN_PRICE = 0;
  const MAX_PRICE = 5000;

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);

  return (
    <div>
      <h3 className="font-semibold mb-4">Price</h3>

      {/* Min / Max Labels */}
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Min</span>
        <span>Max</span>
      </div>

      {/* Inputs */}
      <div className="flex items-center gap-3 my-4">
        {/* Min Input */}
        <div className="relative w-full">
          <input
            type="number"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(Math.min(Number(e.target.value), maxPrice))
            }
            className="w-full border px-3 pr-10 py-2 rounded-md text-sm
            focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <span
            className="absolute top-1/2 right-1 -translate-y-1/2
           bg-green-500 text-white p-2 rounded-md"
          >
            <FaChevronRight size={12} />
          </span>
        </div>

        {/* Max Input */}
        <div className="relative w-full">
          <input
            type="number"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Math.max(Number(e.target.value), minPrice))
            }
            className="w-full border px-3 pr-10 py-2 rounded-md text-sm
            focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <span
            className="absolute top-1/2 right-1 -translate-y-1/2
           bg-green-500 text-white p-2 rounded-md"
          >
            <FaChevronRight size={12} />
          </span>
        </div>
      </div>

      {/* Dual Range Slider */}
      <div className="relative h-6">
        {/* Min Slider */}
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          value={minPrice}
          onChange={(e) =>
            setMinPrice(Math.min(Number(e.target.value), maxPrice - 100))
          }
          className="absolute w-full pointer-events-auto accent-green-500 my-4"
        />

        {/* Max Slider */}
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Math.max(Number(e.target.value), minPrice + 100))
          }
          className="absolute w-full pointer-events-auto accent-green-500 my-4"
        />
      </div>

      {/* Price Range Text */}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>₹{minPrice}</span>
        <span>₹{maxPrice}</span>
      </div>
    </div>
  );
};

export default PriceFilter;
