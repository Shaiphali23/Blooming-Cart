import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[35vh] bg-gray-800 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Accessibility
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-8">
        <p>
          At <strong>Luxury Stay Hotel</strong>, we are committed to making our
          website and services accessible to everyone, including individuals
          with disabilities. We strive to follow best practices and
          accessibility guidelines to ensure that all users can navigate, read,
          and interact with our content easily.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Keyboard Navigation</h2>
          <p>
            Our website can be fully navigated using a keyboard, allowing users
            to access all menus, links, and forms without requiring a mouse.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Screen Readers</h2>
          <p>
            We provide semantic HTML and ARIA labels to ensure compatibility
            with screen readers, allowing visually impaired users to interact
            with our website efficiently.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Color Contrast</h2>
          <p>
            Our website uses high contrast colors to improve readability for
            users with visual impairments. Text, buttons, and interactive
            elements are designed to be distinguishable and easy to read.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Accessible Forms</h2>
          <p>
            All forms on our website include proper labels, error messages, and
            focus indicators to ensure they are accessible to everyone.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Feedback & Assistance</h2>
          <p>
            We welcome feedback regarding accessibility issues. If you encounter
            any difficulties, please contact us and we will assist you promptly.
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
