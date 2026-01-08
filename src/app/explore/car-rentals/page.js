import React from "react";
import Link from "next/link";

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
            <nav className="text-sm text-gray-200 mb-4">Home / Car Rentals</nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Thoughtful Gifts, Beautifully Delivered
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Celebrate every moment with Blooming-Cart’s handcrafted gift
              baskets.
            </p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Rent a Car with Ease</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Choose from a wide range of vehicles for business trips, family
          vacations, or weekend getaways. Enjoy affordable pricing, flexible
          rental plans, and 24/7 support.
        </p>
      </section>

      {/* Car Types */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["Hatchback", "Sedan", "SUV", "Luxury Cars"].map((type, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow text-center hover:shadow-md transition"
            >
              <p className="font-medium">{type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">Book Your Ride Today</h2>
        <p className="text-gray-300 mb-6">
          Safe, affordable, and hassle-free car rentals
        </p>
        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </section>

      {/* Footer Note */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Your Travel Company. All rights reserved.
      </footer>
    </div>
  );
};

export default page;
