import React from "react";

const page = () => {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800">
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
              Home / Terms & Conditions
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl">
              These terms outline the rules and regulations for using
              Blooming-Cart’s website, products, and services. By accessing our
              site, you agree to comply with these terms.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-10 text-gray-700 leading-relaxed">
        <p>
          Welcome to <strong>Your Flower Brand</strong>. By accessing or using
          our website and services, you agree to comply with and be legally
          bound by the following Terms & Conditions. Please read them carefully
          before placing an order.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Orders & Availability</h2>
          <p>
            All products displayed on our website are subject to availability.
            While we strive to ensure accurate product listings, availability
            may vary due to seasonal demand or unforeseen circumstances. We
            reserve the right to substitute flowers or products of equal or
            greater value when necessary.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Pricing & Payments</h2>
          <p>
            All prices listed on the website are in Indian Rupees (INR) and
            inclusive of applicable taxes unless stated otherwise. Payments must
            be completed at the time of checkout using the available payment
            methods. Orders will be processed only after successful payment
            confirmation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Delivery Policy</h2>
          <p>
            Delivery times provided are estimates and may vary based on
            location, traffic conditions, weather, or other factors beyond our
            control. Same-day delivery is subject to order cut-off times and
            service availability in the selected area.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Cancellations & Refunds
          </h2>
          <p>
            Orders once placed may only be cancelled within the specified
            cancellation window mentioned at checkout. Refunds, if applicable,
            will be processed according to our refund policy and credited to the
            original payment method within a reasonable timeframe.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">User Responsibilities</h2>
          <p>
            Users agree to provide accurate and complete information while
            placing an order. Any misuse of the website, including fraudulent
            activity or violation of applicable laws, may result in suspension
            or termination of access without prior notice.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Limitation of Liability
          </h2>
          <p>
            <strong>Your Flower Brand</strong> shall not be liable for any
            indirect, incidental, or consequential damages arising from the use
            of our website or services. We do not guarantee that the website
            will be uninterrupted or error-free at all times.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
          <p>
            All content, images, logos, and materials available on this website
            are the intellectual property of <strong>Your Flower Brand</strong>{" "}
            and may not be copied, reproduced, or used without prior written
            permission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
          <p>
            We reserve the right to modify or update these Terms & Conditions at
            any time without prior notice. Continued use of the website after
            changes are posted constitutes acceptance of the revised terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms &
            Conditions, please contact us:
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>Email: support@yourflowerbrand.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Delhi, India</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default page;
