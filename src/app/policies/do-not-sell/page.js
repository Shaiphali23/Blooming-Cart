import React from "react";

const page = () => {
  return (
    <section className="min-h-screen w-full bg-[#fffaf7]">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Privacy Protection at Blooming-Cart"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-16">
            <nav className="text-sm text-gray-200 mb-4">
              Home / Do Not Sell My Personal Information
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Do Not Sell My Personal Information
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Your privacy matters to us. Blooming-Cart does not sell your
              personal information and respects your right to control how your
              data is used.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-8 text-gray-700 leading-relaxed">
        <p>
          At <strong>Blooming-Cart</strong>, we respect your privacy and are
          committed to protecting your personal information. This page explains
          your right to request that your personal information is not sold or
          shared, in accordance with applicable privacy laws.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Your Right to Opt Out</h2>
          <p>
            You have the right to request that Blooming-Cart does not sell your
            personal information to third parties. Blooming-Cart does not sell
            personal information for monetary gain and only shares data when
            necessary to provide our services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            How to Submit a Request
          </h2>
          <p>
            If you would like to submit a “Do Not Sell My Personal Information”
            request, please contact us using the details below. To help us
            process your request efficiently, include sufficient information to
            verify your identity.
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>Email: support@blooming-cart.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Delhi, India</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Request Verification</h2>
          <p>
            For your protection, we may need to verify your identity before
            fulfilling your request. This helps ensure that personal information
            is not accessed or modified by unauthorized individuals.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">No Discrimination</h2>
          <p>
            Submitting a “Do Not Sell My Personal Information” request will not
            affect your access to our services, pricing, or offers.
            Blooming-Cart does not discriminate against users who exercise their
            privacy rights.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Additional Information
          </h2>
          <p>
            We maintain records of opt-out requests as required by law and
            handle all personal information in accordance with our Privacy
            Policy.
          </p>
        </div>
      </section>
    </section>
  );
};

export default page;
