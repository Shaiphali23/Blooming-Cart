"use client";

import React from "react";
import { useRouter } from "next/navigation";
import aboutSvg from "../../assets/images/about-us-svg-img.svg";
import contactSvg from "../../assets/images/contacts-svg-img.svg";
import faqSvg from "../../assets/images/faq-svg-img.svg";
import blogSvg from "../../assets/images/blog-svg-img.svg";
import Image from "next/image";

const InfoNavigationGrid = () => {
  const router = useRouter();

  const sections = [
    {
      id: 1,
      title: "About Us",
      para: "Know about our company more",
      Icon: aboutSvg,
      path: "/about",
    },
    {
      id: 2,
      title: "Contact Us",
      para: "We are here to help",
      Icon: contactSvg,
      path: "/explore/contact-us",
    },
    {
      id: 3,
      title: "FAQ",
      para: "Get All Answers",
      Icon: faqSvg,
      path: "/help/faqs",
    },
    {
      id: 4,
      title: "Blog",
      para: "Check Latest Blogs",
      Icon: blogSvg,
      path: "/blog",
    },
  ];

  return (
    <div className="w-full mt-10 rounded-lg bg-[#FFFFFF] overflow-hidden p-5">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {sections.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => router.push(item.path)}
              className={`cursor-pointer flex flex-col items-center justify-center
                min-h-[140px] gap-4 text-center text-white
                transition-all`}
            >
              <div className="border border-[#262D34] rounded-sm px-16 py-16 flex flex-col justify-center items-center mx-auto">
                {/* Icon */}
                <Image
                  src={item.Icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="text-3xl text-green-400"
                />

                <div className="mt-4">
                  {/* Title */}
                  <h3 className="text-md font-bold tracking-wide text-[#262D34]">
                    {item.title}
                  </h3>

                  {/* Para */}
                  <p className="text-sm font-medium tracking-wide text-[#262D34CC]">
                    {item.para}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoNavigationGrid;
