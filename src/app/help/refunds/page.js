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
              Home / Refunds & Returns
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Refunds & Returns
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
            At <strong>Blooming-Cart</strong>, we strive to deliver fresh and
            beautiful flowers every time. If you’re not satisfied, we’re here to
            help.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Refund Eligibility
            </h2>
            <p className="text-gray-600 mt-1">
              Refunds or replacements are applicable if flowers arrive damaged,
              wilted, incorrect, or are not delivered on the selected date.
              Please report the issue within <strong>24 hours</strong> of
              delivery.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Non-Refundable Situations
            </h2>
            <p className="text-gray-600 mt-1">
              Refunds are not applicable for minor color variations, incorrect
              delivery details provided by the customer, or refused deliveries.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Refund Processing Time
            </h2>
            <p className="text-gray-600 mt-1">
              Approved refunds are processed to the original payment method
              within
              <strong> 5–7 business days</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Customized Orders
            </h2>
            <p className="text-gray-600 mt-1">
              Personalized bouquets and special occasion arrangements are
              non-refundable once preparation has begun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
