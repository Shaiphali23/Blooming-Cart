import React from "react";

const page = () => {
  return (
    <section className="min-h-screen w-full bg-[#fffaf7]">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Accessibility at Blooming-Cart"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-16">
            <nav className="text-sm text-gray-200 mb-4">
              Home / Accessibility
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Accessibility Commitment
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Blooming-Cart is committed to providing a website experience that
              is inclusive, accessible, and easy to use for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-8 text-gray-700 leading-relaxed">
        <p>
          At <strong>Blooming-Cart</strong>, we are committed to providing an
          accessible and inclusive online experience for all users, including
          individuals with disabilities. We continuously work to improve the
          usability of our website by following recognized accessibility
          standards and best practices.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Keyboard Navigation</h2>
          <p>
            Our website is designed to be fully navigable using a keyboard.
            Users can access menus, links, buttons, and forms without the need
            for a mouse, ensuring a smooth browsing experience for all.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Screen Reader Compatibility
          </h2>
          <p>
            We use semantic HTML, meaningful headings, and appropriate ARIA
            labels to support screen readers and assistive technologies, making
            our content accessible to visually impaired users.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Color Contrast & Readability
          </h2>
          <p>
            Our design follows appropriate color contrast ratios to ensure text
            and interactive elements are easy to read. Fonts, buttons, and icons
            are carefully styled to improve clarity and visual accessibility.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Accessible Forms</h2>
          <p>
            All forms on our website include clear labels, helpful error
            messages, and visible focus indicators, allowing users to complete
            actions easily and accurately.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Ongoing Improvements</h2>
          <p>
            Accessibility is an ongoing effort at Blooming-Cart. We regularly
            review our website and make updates to improve accessibility and
            usability based on user feedback and evolving standards.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Feedback & Support</h2>
          <p>
            If you experience any difficulty accessing our website or have
            suggestions for improvement, we encourage you to reach out to us.
            Your feedback helps us create a better experience for everyone.
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>Email: support@blooming-cart.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Delhi, India</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default page;
