"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  FaInfoCircle,
  FaPhoneAlt,
  FaQuestionCircle,
  FaBlog,
} from "react-icons/fa";

const InfoNavigationGrid = () => {
  const router = useRouter();

  const sections = [
    {
      id: 1,
      title: "About Us",
      Icon: FaInfoCircle,
      path: "/about",
    },
    {
      id: 2,
      title: "Contact Us",
      Icon: FaPhoneAlt,
      path: "/contact",
    },
    {
      id: 3,
      title: "FAQ",
      Icon: FaQuestionCircle,
      path: "/faq",
    },
    {
      id: 4,
      title: "Blog",
      Icon: FaBlog,
      path: "/blog",
    },
  ];

  return (
    <div className="w-full mt-10 border border-gray-700 rounded-lg bg-[#262D34] overflow-hidden p-5">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {sections.map((item, index) => {
          const Icon = item.Icon;

          return (
            <div
              key={item.id}
              onClick={() => router.push(item.path)}
              className={`cursor-pointer flex flex-col items-center justify-center
                min-h-[140px] gap-4 text-center text-white
                hover:bg-[#2f3740] active:bg-[#39434e]
                transition-all
                ${
                  index !== sections.length - 1
                    ? "md:border-r border-gray-600"
                    : ""
                }
              `}
            >
              {/* Icon */}
              <Icon className="text-3xl text-red-400" />

              {/* Title */}
              <h3 className="text-sm font-medium tracking-wide">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoNavigationGrid;
