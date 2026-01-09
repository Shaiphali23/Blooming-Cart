import React from "react";

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
            <nav className="text-sm text-gray-200 mb-4">Home / Contact Us</nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Celebrate every moment with Blooming-Cart’s handcrafted gift
              baskets.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 space-y-10">
          {/* Intro */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              We’d Love to Hear From You
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Have questions about your order, delivery, or need help choosing
              the perfect flowers? Our friendly support team is always here to
              help make your gifting experience smooth and memorable.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Email:{" "}
                <span className="font-medium text-gray-800">
                  support@blooming-cart.com
                </span>
              </p>
              <p className="text-gray-600">
                Phone:{" "}
                <span className="font-medium text-gray-800">
                  +91 9XXXXXXXXX
                </span>
              </p>
              <p className="text-gray-600">
                Support Hours: 9:00 AM – 8:00 PM (Mon–Sun)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Our Office</h3>
              <p className="text-gray-600">Blooming-Cart Pvt. Ltd.</p>
              <p className="text-gray-600">New Delhi, India</p>
            </div>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Order & Delivery Assistance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For help with order tracking, same-day delivery, cancellations,
              refunds, or product availability, please reach out to our support
              team or visit the Help Center through the footer links.
            </p>
          </div>

          {/* Corporate Orders */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Bulk & Corporate Orders
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Planning corporate gifting or bulk flower orders? Email us at{" "}
              <span className="font-medium text-gray-800">
                business@blooming-cart.com
              </span>{" "}
              and our team will get back to you within 24 hours.
            </p>
          </div>

          {/* Why Us */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Why Choose Blooming-Cart?
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Fresh & handpicked flowers</li>
              <li>Reliable and on-time delivery</li>
              <li>Beautifully curated gift baskets</li>
              <li>Trusted by thousands of happy customers</li>
            </ul>
          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t text-center">
            <p className="text-gray-500 text-sm">
              Follow us on social media for exclusive offers, new collections,
              and daily floral inspiration 🌸
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
