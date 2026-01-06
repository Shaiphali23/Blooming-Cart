import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[55vh]">
        <img
          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
          alt="Flights"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Flights</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Book domestic and international flights at the best prices
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Easy & Secure Flight Booking
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We help you find affordable flights with trusted airlines. Enjoy
          flexible booking options, competitive prices, and 24/7 support for a
          smooth travel experience.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Domestic Flights",
            "International Flights",
            "Best Price Guarantee",
            "24/7 Customer Support",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow text-center hover:shadow-md transition"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">Ready to Fly?</h2>
        <p className="text-gray-300 mb-6">
          Book your next flight with confidence and ease
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
