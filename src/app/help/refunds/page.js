import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gray-800 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Refund Policy
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-8">
        <p>
          At <strong>Luxury Stay Hotel</strong>, we understand that plans can
          change unexpectedly. Our refund policy ensures transparency and
          fairness for our guests.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Eligibility for Refund
          </h2>
          <p>
            - Refunds are applicable for cancellations made according to our
            booking and cancellation policy.
            <br />
            - Refunds will be processed for any overpayments or duplicate
            bookings.
            <br />- Certain special packages or non-refundable bookings may not
            be eligible for a refund.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Refund Process</h2>
          <ol className="mt-2 list-decimal list-inside space-y-2">
            <li>
              Submit a refund request via the{" "}
              <Link href="/support" className="text-blue-600 hover:underline">
                Support
              </Link>{" "}
              page or contact our support team directly.
            </li>
            <li>
              Provide your booking details and reason for the refund request.
            </li>
            <li>
              Our team will review and approve the refund according to our
              policies.
            </li>
            <li>
              Refunds will be issued to the original payment method within 5-7
              business days.
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Need Assistance?</h2>
          <p>
            For questions or help regarding refunds, please reach out to our
            support team:
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>Email: support@luxurystay.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Live Chat: Available 9 AM – 9 PM IST</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default page;
