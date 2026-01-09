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
            <nav className="text-sm text-gray-200 mb-4">Home / faqs</nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Faqs
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
            Find quick answers to common questions about ordering, delivery, and
            payments.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              How do I track my order?
            </h2>
            <p className="text-gray-600 mt-1">
              Once your order is confirmed, you’ll receive tracking details via
              email and SMS.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Can I cancel my order?
            </h2>
            <p className="text-gray-600 mt-1">
              Orders can be canceled before they are prepared or dispatched.
              Same-day orders must be canceled shortly after placing them.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Do you offer midnight delivery?
            </h2>
            <p className="text-gray-600 mt-1">
              Yes, midnight delivery is available for select locations and
              occasions with an additional charge.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              What payment methods are accepted?
            </h2>
            <p className="text-gray-600 mt-1">
              We accept UPI, debit cards, credit cards, net banking, and popular
              digital wallets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
