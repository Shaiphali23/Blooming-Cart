import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gray-800 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Covid-19 Guidelines
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-8">
        <p>
          At <strong>Luxury Stay Hotel</strong>, the safety and well-being of
          our guests and staff is our top priority. We follow strict Covid-19
          guidelines to ensure a safe and comfortable stay.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Health & Safety Measures
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Enhanced cleaning and sanitization of rooms and public areas.
            </li>
            <li>
              Mandatory mask-wearing for staff and guests in common areas.
            </li>
            <li>Hand sanitizer stations placed throughout the property.</li>
            <li>Regular temperature checks and health screenings for staff.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Booking Flexibility</h2>
          <p>
            We offer flexible cancellation and rescheduling options to
            accommodate changes due to Covid-19 travel restrictions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Guest Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Follow all local health guidelines during your stay.</li>
            <li>Practice social distancing where possible.</li>
            <li>
              Inform the hotel staff if you experience any Covid-19 symptoms.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Need Assistance?</h2>
          <p>
            For any questions regarding our Covid-19 policies or your stay,
            please contact our support team:
          </p>
          <ul className="list-disc list-inside mt-2">
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
