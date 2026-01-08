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
              Home / Privacy Policy
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl">
              Your privacy matters to us. This policy explains how Blooming-Cart
              collects, uses, and protects your personal information.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-10 text-gray-700 leading-relaxed">
        <p>
          At <strong>Your Flower Brand</strong>, your privacy is important to
          us. This Privacy Policy explains how we collect, use, protect, and
          share your personal information when you visit our website or place an
          order with us. By using our services, you consent to the practices
          described in this policy.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, phone number, delivery address, and payment details when
            you place an order, contact us, or interact with our website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            How We Use Your Information
          </h2>
          <p>
            The information we collect is used to process orders, arrange
            deliveries, communicate order updates, improve our services, and
            provide customer support. We may also use your information to send
            promotional offers, only if you choose to receive them.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Payment Information</h2>
          <p>
            We do not store your payment card details. All transactions are
            processed securely through trusted third-party payment gateways that
            comply with industry security standards.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Sharing of Information
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. Your data may be shared only with trusted partners such as
            delivery providers and payment processors, strictly for fulfilling
            your orders.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Cookies & Tracking Technologies
          </h2>
          <p>
            Our website may use cookies to enhance user experience, analyze
            website traffic, and improve functionality. You can choose to
            disable cookies through your browser settings, though some features
            may not work as intended.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the internet is completely secure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
          <p>
            You have the right to access, update, or request deletion of your
            personal information. If you wish to exercise these rights, please
            contact us using the details provided below.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page and will take effect immediately upon
            posting. Continued use of our website indicates acceptance of the
            updated policy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            you may contact us at:
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
