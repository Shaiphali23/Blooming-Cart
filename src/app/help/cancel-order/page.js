import React from "react";

const page = () => {
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
              Home / Cancel an Order
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Cancel an Order
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Everything you need to know about Blooming-Cart, all in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 space-y-6">
          <p className="text-gray-600">
            Plans changed? We understand. Blooming-Cart allows order
            cancellations within a specific time frame to ensure smooth delivery
            and the freshness of our flowers.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              How to Cancel Your Order
            </h2>
            <p className="text-gray-600 mt-1">
              To cancel your order, please keep your <strong>Order ID</strong>{" "}
              and the <strong>email address</strong> used during checkout ready.
              Orders can only be canceled before they are prepared or
              dispatched.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Cancellation Time Limits
            </h2>
            <p className="text-gray-600 mt-1">
              Same-day and midnight delivery orders must be canceled shortly
              after placing the order. Once an order is out for delivery,
              cancellation is no longer possible.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Refund Information
            </h2>
            <p className="text-gray-600 mt-1">
              Approved cancellations will be refunded to the original payment
              method within <strong>5–7 business days</strong>. Delivery charges
              may not be refundable for late cancellations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Custom & Special Orders
            </h2>
            <p className="text-gray-600 mt-1">
              Customized bouquets, personalized messages, and special occasion
              arrangements cannot be canceled once preparation has started.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Need Assistance?
            </h2>
            <p className="text-gray-600 mt-1">
              If you’re unsure whether your order can be canceled, our customer
              support team is here to help. Contact us as soon as possible for
              the best assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
