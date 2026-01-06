import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">About Our Hotel</h1>

        <p className="text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
          Welcome to Luxury Stay Hotel, where comfort meets elegance. We are
          dedicated to providing world-class hospitality, premium rooms, and
          unforgettable experiences for every guest.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver exceptional service and create memorable stays for
              every guest.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be a trusted name in luxury hospitality across the globe.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Comfort, transparency, customer satisfaction, and excellence.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
