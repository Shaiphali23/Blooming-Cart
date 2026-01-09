import React from "react";

const Page = () => {
  return (
    <section className="min-h-screen w-full bg-[#fffaf7]">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Footer Links Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-16">
            <nav className="text-sm text-gray-200 mb-4">
              Home / Track Your Order
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Track Your Order
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Everything you need to know about Blooming-Cart, all in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <p className="text-gray-600 mb-8">
            Track your Blooming-Cart flower order in just a few steps. Whether
            it’s a birthday bouquet, anniversary roses, or a surprise delivery,
            we’ll help you stay updated every step of the way.
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                🌸 How to Track Your Order
              </h2>
              <p className="text-gray-600 mt-1">
                Enter your <strong>Order ID</strong> and the{" "}
                <strong>email address</strong>
                used during checkout to view real-time updates on your flower
                delivery.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                🚚 Delivery Status Updates
              </h2>
              <p className="text-gray-600 mt-1">
                See when your flowers are being prepared, dispatched, and
                delivered. Same-day and midnight deliveries are updated
                frequently for accuracy.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                ⏰ Delayed or Missed Delivery?
              </h2>
              <p className="text-gray-600 mt-1">
                Occasionally weather conditions or address issues may cause
                delays. Don’t worry — our team actively monitors every order to
                ensure safe delivery.
              </p>
            </div>

            {/* Step 4 */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                💬 Need Help With Your Order?
              </h2>
              <p className="text-gray-600 mt-1">
                If you’re unable to track your order or need immediate
                assistance, please contact our support team. We’re here to help
                you make every moment special.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
