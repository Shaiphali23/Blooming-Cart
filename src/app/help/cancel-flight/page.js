import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gray-800 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Cancel Flight
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-8">
        <p>
          At <strong>Luxury Stay Flights</strong>, we understand that travel
          plans can change. You can cancel your flight according to our
          cancellation policy.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Cancellation Policy</h2>
          <p>
            - Free cancellation is available up to 48 hours before your
            scheduled flight.
            <br />
            - Cancellations made within 48 hours of departure may incur charges.
            <br />- Refunds, if applicable, will be processed within 5-7
            business days.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">How to Cancel</h2>
          <p>To cancel your flight, please follow these steps:</p>
          <ol className="mt-2 list-decimal list-inside space-y-2">
            <li>
              Go to the{" "}
              <Link
                href="/my-flights"
                className="text-blue-600 hover:underline"
              >
                My Flights
              </Link>{" "}
              page.
            </li>
            <li>Select the flight you want to cancel.</li>
            <li>
              Click on the "Cancel Flight" button and follow the instructions.
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Need Assistance?</h2>
          <p>
            If you face any issues while cancelling your flight, please contact
            our support team:
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
