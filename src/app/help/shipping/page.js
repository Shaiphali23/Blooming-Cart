import React from "react";

const page = () => {
  return (
    <section className="min-h-screen w-full bg-[#fffaf7]">
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
              Home / Shipping & Delivery
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Shipping & Delivery
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Celebrate every moment with Blooming-Cart’s handcrafted gift
              baskets.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 space-y-6">
          <p className="text-gray-600">
            Blooming-Cart ensures timely and safe delivery so your flowers
            arrive fresh and full of life.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Delivery Options
            </h2>
            <p className="text-gray-600 mt-1">
              We offer same-day, next-day, and scheduled delivery options
              depending on your location and order time.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Same-Day Delivery
            </h2>
            <p className="text-gray-600 mt-1">
              Orders placed before the cut-off time are eligible for same-day
              delivery. Availability may vary based on location.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Delivery Charges
            </h2>
            <p className="text-gray-600 mt-1">
              Delivery charges are calculated at checkout based on location,
              delivery type, and order value.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Delivery Issues
            </h2>
            <p className="text-gray-600 mt-1">
              Delays caused by incorrect address details, recipient
              unavailability, or unforeseen circumstances are beyond our
              control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
