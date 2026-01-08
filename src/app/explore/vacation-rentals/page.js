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
              Home / Vacation Rentals
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

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Comfortable Stays, Anywhere
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover hand-picked vacation rentals offering comfort, privacy, and
          luxury. Whether you’re planning a family trip, a romantic getaway, or
          a solo adventure, we have the perfect space for you.
        </p>
      </section>

      {/* Rentals Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Beachside Villa",
              price: "₹12,000 / night",
              image:
                "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
            },
            {
              title: "Mountain Cabin",
              price: "₹8,500 / night",
              image:
                "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
            },
            {
              title: "Luxury Apartment",
              price: "₹10,000 / night",
              image:
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
            },
          ].map((rental, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={rental.image}
                alt={rental.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{rental.title}</h3>
                <p className="text-gray-600 mb-4">{rental.price}</p>
                <Link
                  href="/contact"
                  className="inline-block px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">
          Ready for Your Next Getaway?
        </h2>
        <p className="text-gray-300 mb-6">
          Book your dream vacation rental today
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
