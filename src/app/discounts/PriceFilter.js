import { FaChevronRight } from "react-icons/fa";

const PriceFilter = ({ min, max, value, onChange }) => {
  const [minPrice, maxPrice] = value;

  const handleMinChange = (val) => {
    const newMin = Math.min(val, maxPrice);
    onChange([newMin, maxPrice]);
  };

  const handleMaxChange = (val) => {
    const newMax = Math.max(val, minPrice);
    onChange([minPrice, newMax]);
  };

  return (
    <div>
      <h3 className="font-semibold mb-4">Price</h3>

      {/* Number Inputs */}
      <div className="flex gap-3 my-4">
        <div className="relative w-full">
          <input
            type="number"
            min={min}
            max={maxPrice}
            value={minPrice}
            onChange={(e) => handleMinChange(Number(e.target.value))}
            className="w-full border px-3 pr-10 py-2 rounded-md text-sm"
          />
          <span className="absolute top-1/2 right-1 -translate-y-1/2 bg-green-500 text-white p-2 rounded-md">
            <FaChevronRight size={12} />
          </span>
        </div>

        <div className="relative w-full">
          <input
            type="number"
            min={minPrice}
            max={max}
            value={maxPrice}
            onChange={(e) => handleMaxChange(Number(e.target.value))}
            className="w-full border px-3 pr-10 py-2 rounded-md text-sm"
          />
          <span className="absolute top-1/2 right-1 -translate-y-1/2 bg-green-500 text-white p-2 rounded-md">
            <FaChevronRight size={12} />
          </span>
        </div>
      </div>

      {/* Sliders */}
      <div className="space-y-3">
        <div>
          <label className="text-xs text-gray-500">Min Price</label>
          <input
            type="range"
            min={min}
            max={max}
            value={minPrice}
            onChange={(e) => handleMinChange(Number(e.target.value))}
            className="w-full accent-green-500"
          />
        </div>

        <div>
          <label className="text-xs text-gray-500">Max Price</label>
          <input
            type="range"
            min={min}
            max={max}
            value={maxPrice}
            onChange={(e) => handleMaxChange(Number(e.target.value))}
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
