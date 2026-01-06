import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gray-800 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Privacy Policy
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-8">
        <p>
          At <strong>Luxury Stay Hotel</strong>, we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and safeguard your data when you visit
          our website or use our services.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, phone number, and payment details when you make a booking
            or contact us. Non-personal information, such as your IP address,
            browser type, and pages visited, may also be collected for analytics
            purposes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            How We Use Your Information
          </h2>
          <p>
            Your information is used to provide services, process bookings,
            communicate with you, and improve our website and offerings. We may
            also use data for marketing purposes with your consent.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Data Sharing & Security
          </h2>
          <p>
            We do not sell your personal data to third parties. We may share
            information with trusted service providers to operate our website or
            deliver services. We implement appropriate security measures to
            protect your data from unauthorized access or disclosure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience,
            analyze website traffic, and personalize content. You can manage
            cookies through your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
          <p>
            You have the right to access, update, or request deletion of your
            personal data. You may also opt out of marketing communications at
            any time by contacting us.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us at:
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>Email: support@luxurystay.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Delhi, India</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default page;
