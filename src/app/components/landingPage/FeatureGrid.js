"use client";

import React from "react";
import { FaTruck, FaGift, FaShieldAlt, FaHeadset } from "react-icons/fa";

const FeatureGrid = () => {
  const features = [
    {
      id: 1,
      title: "Fast Delivery all across the country",
      image:
        "https://wishwagon.in/public/assets/front-end/img/delivery_info.png",
    },
    {
      id: 2,
      title: "Safe Payment",
      image:
        "https://wishwagon.in/public/assets/front-end/img/safe_payment.png",
    },
    {
      id: 3,
      title: "7 Days Return Policy",
      image:
        "https://wishwagon.in/public/assets/front-end/img/return_policy.png",
    },
    {
      id: 4,
      title: "100% Authentic Products",
      image:
        "https://wishwagon.in/public/assets/front-end/img/authentic_product.png",
    },
  ];

  return (
    <div className="w-full bg-[#9cbddd] rounded-lg overflow-hidden py-5 px-5 my-8">
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
            <div>
              <img src={item.image} alt="featureImg" />
            </div>

            {/* Title */}
            <h3 className="text-md font-medium tracking-wide">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
