"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Categories_Data } from "../../assets/Data";

const SearchSection = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  return (
    <div className="relative z-10">
      <div
        className="
          w-[80%] mx-auto mt-[-50px]
          bg-black text-white
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5
          gap-[5px]
          items-center justify-center
          px-[20px] py-[30px]
          rounded-[10px]
        "
      >
        {/* Title */}
        <p className="font-semibold text-sm md:text-base">
          FIND THE PERFECT GIFT
        </p>

        {/* Zip Code */}
        <input
          type="text"
          placeholder="Zip Code"
          className="
            w-full px-3 py-2
            text-black bg-white
            rounded outline-none
          "
        />

        {/* Categories */}
        <select
          onChange={(e) => setInput(e.target.value)}
          className="
            w-full px-3 py-2
            text-black bg-white
            rounded outline-none
            text-xs sm:text-sm md:text-base lg:text-lg
          "
        >
          <option value="">Categories</option>
          {Categories_Data.map((el) => (
            <option key={el.category} value={el.url}>
              {el.category}
            </option>
          ))}
        </select>

        {/* Date */}
        <input
          type="date"
          className="
            w-full px-3 py-2
            text-black bg-white
            rounded outline-none
          "
        />

        {/* Button */}
        <button
          onClick={() => input && router.push(input)}
          className="
            w-full px-4 py-2
            bg-green-600 hover:bg-green-700
            text-white font-semibold
            rounded transition cursor-pointer
          "
        >
          Find a Gift Now
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
