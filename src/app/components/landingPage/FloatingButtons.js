"use client";

import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const FloatingButtons = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send/?phone=00000000000&text=Hello+there%21&type=phone_number&app_absent=0`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
      {/* Scroll to Top */}
      <button
        onClick={handleScrollToTop}
        className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shadow-xl hover:bg-gray-700 transition cursor-pointer"
      >
        <IoIosArrowUp className="text-white text-2xl" />
      </button>

      {/* WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:bg-green-600 transition cursor-pointer"
      >
        <img
          src="https://wishwagon.in/public/assets/front-end/img/whatsapp.svg"
          alt="WhatsApp"
          className="w-6 h-6"
        />
      </button>
    </div>
  );
};

export default FloatingButtons;
