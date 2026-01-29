"use client";

import React from "react";
import { FaTruck, FaGift, FaShieldAlt, FaHeadset } from "react-icons/fa";

const FeatureGrid = () => {
  const features = [
    {
      id: 1,
      title: "Free Delivery",
      icon: <FaTruck />,
    },
    {
      id: 2,
      title: "Gift Packaging",
      icon: <FaGift />,
    },
    {
      id: 3,
      title: "Secure Payment",
      icon: <FaShieldAlt />,
    },
    {
      id: 4,
      title: "24/7 Support",
      icon: <FaHeadset />,
    },
  ];

  return (
    <div className="w-full bg-[#9cbddd] rounded-lg overflow-hidden p-5">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {features.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col items-center justify-between
              p-6 gap-4 text-center
              bg-[#9cbddd]
              text-[#1f2937]
              hover:bg-[#8fb2d6] transition
              ${
                index !== features.length - 1
                  ? "md:border-r border-[#7fa3c7]"
                  : ""
              }
            `}
          >
            {/* Icon */}
            <div className="text-3xl text-[#c0392b]">{item.icon}</div>

            {/* Title */}
            <h3 className="text-sm font-medium tracking-wide">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
