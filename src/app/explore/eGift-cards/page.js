import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full bg-[#fffaf7]">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Blooming Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-16">
            <nav className="text-sm text-gray-200 mb-4">
              Home / E-Gift Cards
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              E-Gift Cards
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Celebrate every moment with Blooming-Cart’s handcrafted gift
              baskets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
