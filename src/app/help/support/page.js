import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gray-800 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Support</h1>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-8">
        <p>
          At <strong>Luxury Stay Hotel</strong>, we are here to help you with
          any questions or issues you may have. Our support team is available to
          assist you with bookings, inquiries, or any technical problems related
          to our website and services.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Support</h2>
          <p>You can reach our support team using the following methods:</p>
          <ul className="mt-2 list-disc list-inside">
            <li>Email: support@luxurystay.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Live Chat: Available on our website from 9 AM to 9 PM IST</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">FAQs</h2>
          <p>
            Before contacting support, you might find answers to common
            questions in our FAQ section. This helps resolve most issues
            quickly.
          </p>
          <Link
            href="/faq"
            className="text-white bg-black px-4 py-2 rounded-lg mt-2 inline-block hover:bg-gray-800 transition"
          >
            Visit FAQ
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Feedback</h2>
          <p>
            We value your feedback! If you have suggestions for improving our
            services, please send us your comments.
          </p>
          <Link
            href="/contact"
            className="text-white bg-black px-4 py-2 rounded-lg mt-2 inline-block hover:bg-gray-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
