import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gray-800 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Do Not Sell My Information
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-8">
        <p>
          At <strong>Luxury Stay Hotel</strong>, we respect your privacy and
          your rights under applicable privacy laws, including the California
          Consumer Privacy Act (CCPA). This page explains how you can request
          that we do not sell your personal information.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Your Right to Opt-Out</h2>
          <p>
            You have the right to request that Luxury Stay Hotel does not sell
            your personal information to third parties. We do not sell personal
            information without your consent and provide clear options for
            opting out.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            How to Submit a Request
          </h2>
          <p>
            To request that we do not sell your personal information, you can
            contact us using the methods below. Please provide sufficient
            information to process your request.
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>Email: support@luxurystay.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Delhi, India</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Verification</h2>
          <p>
            We may need to verify your identity before processing your request
            to ensure that personal information is not disclosed to unauthorized
            individuals.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Additional Information
          </h2>
          <p>
            Submitting a “Do Not Sell My Information” request will not affect
            your access to services or result in discrimination. We maintain
            records of all opt-out requests in compliance with privacy laws.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
