import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gray-800 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Terms & Conditions
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-8">
        <p>
          Welcome to <strong>Luxury Stay Hotel</strong>. By using our website or
          services, you agree to comply with and be bound by the following terms
          and conditions.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Booking & Reservations
          </h2>
          <p>
            All bookings are subject to availability. Confirmation is provided
            via email. We reserve the right to cancel or modify bookings under
            certain circumstances, such as overbooking or unforeseen events.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Payment & Cancellation
          </h2>
          <p>
            Payments must be made according to the instructions at the time of
            booking. Cancellation policies vary depending on the room/package
            and will be communicated during booking. Refunds, if applicable,
            will be processed according to the policy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">User Conduct</h2>
          <p>
            Users must not misuse the website or services, including posting
            false information, violating laws, or infringing intellectual
            property rights. We reserve the right to restrict access for any
            violation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Limitation of Liability
          </h2>
          <p>
            Luxury Stay Hotel is not liable for any indirect, incidental, or
            consequential damages arising from the use of our services. While we
            strive for accuracy, we do not guarantee all information is
            error-free.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
          <p>
            All content, images, and materials on this website are the property
            of Luxury Stay Hotel or its partners and may not be used without
            permission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms & Conditions at any time.
            Changes will be effective immediately upon posting, and continued
            use of our website constitutes acceptance of the revised terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            For any questions regarding these Terms & Conditions, please contact
            us at:
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
