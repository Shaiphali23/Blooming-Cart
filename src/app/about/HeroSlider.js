"use client";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    text: "Flowers That Speak Love",
  },
  {
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
    text: "Fresh Blooms Everyday",
  },
  {
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    text: "Crafted With Care",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.text}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
              <h1 className="text-[60px] md:text-[60px] font-bold text-white leading-tight">
                {slide.text}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
