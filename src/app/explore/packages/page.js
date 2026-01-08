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
            <nav className="text-sm text-gray-200 mb-4">
              Home / Vacation Packages
            </nav>
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

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Choose Your Perfect Package
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our travel packages are designed to give you the best experiences,
          comfort, and value. From relaxing beach holidays to adventurous
          mountain escapes, we have something for everyone.
        </p>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Romantic Getaway",
              price: "₹25,000",
              duration: "3 Nights / 4 Days",
              image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            },
            {
              title: "Family Vacation",
              price: "₹40,000",
              duration: "5 Nights / 6 Days",
              image:
                "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
            },
            {
              title: "Adventure Trip",
              price: "₹30,000",
              duration: "4 Nights / 5 Days",
              image:
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            },
          ].map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{pkg.duration}</p>
                <p className="text-lg font-medium mb-4">{pkg.price}</p>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Book Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">
          Plan Your Dream Trip Today
        </h2>
        <p className="text-gray-300 mb-6">
          Exclusive packages designed for unforgettable memories
        </p>
        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default page;
