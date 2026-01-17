import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const PriceFilter = () => {
  const MIN_PRICE = 0;
  const MAX_PRICE = 5000;

  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

  return (
    <div>
      <h3 className="font-semibold mb-4">Price</h3>

      {/* Inputs */}
      <div className="flex gap-3 my-4">
        <div className="relative w-full">
          <input
            type="number"
            value={minPrice}
            min={MIN_PRICE}
            max={maxPrice}
            onChange={(e) =>
              setMinPrice(Math.min(Number(e.target.value), maxPrice))
            }
            className="w-full border px-3 pr-10 py-2 rounded-md text-sm"
          />
          <span className="absolute top-1/2 right-1 -translate-y-1/2 bg-green-500 text-white p-2 rounded-md">
            <FaChevronRight size={12} />
          </span>
        </div>

        <div className="relative w-full">
          <input
            type="number"
            value={maxPrice}
            min={minPrice}
            max={MAX_PRICE}
            onChange={(e) =>
              setMaxPrice(Math.max(Number(e.target.value), minPrice))
            }
            className="w-full border px-3 pr-10 py-2 rounded-md text-sm"
          />
          <span className="absolute top-1/2 right-1 -translate-y-1/2 bg-green-500 text-white p-2 rounded-md">
            <FaChevronRight size={12} />
          </span>
        </div>
      </div>

      {/* Sliders (NO OVERLAP = WORKS) */}
      <div className="space-y-3">
        {/* Min Slider */}
        <div>
          <label className="text-xs text-gray-500">Min Price</label>
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={minPrice}
            onChange={(e) =>
              setMinPrice(Math.min(Number(e.target.value), maxPrice))
            }
            className="w-full accent-green-500"
          />
        </div>

        {/* Max Slider */}
        <div>
          <label className="text-xs text-gray-500">Max Price</label>
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Math.max(Number(e.target.value), minPrice))
            }
            className="w-full accent-green-500"
          />
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>₹{minPrice}</span>
        <span>₹{maxPrice}</span>
      </div>
    </div>
  );
};

export default PriceFilter;
