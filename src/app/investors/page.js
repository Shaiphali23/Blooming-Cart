export const metadata = {
  title: "Investor Relations | Bloomify",
  description:
    "Investor relations information, financial highlights, and company updates from Bloomify.",
};

export default function InvestorPage() {
  return (
    <section className="min-h-screen bg-[#fffaf7] px-4 py-12 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Investor Relations 📊
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Transparency, growth, and long-term value creation.
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-2xl shadow p-8 mb-14">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Company Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Bloomify is a fast-growing floral and gifting platform focused on
            delivering premium-quality flowers with exceptional customer
            experience. Our technology-driven approach and strong partner
            network enable us to scale sustainably while maintaining quality and
            trust.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">📈</span>
            <h3 className="mt-3 font-semibold text-gray-800">
              Consistent Growth
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Year-on-year growth driven by innovation and customer trust.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">🌍</span>
            <h3 className="mt-3 font-semibold text-gray-800">
              Expanding Reach
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Serving customers across multiple cities and regions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">🤝</span>
            <h3 className="mt-3 font-semibold text-gray-800">
              Strong Partnerships
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Collaborating with trusted florists and delivery partners.
            </p>
          </div>
        </div>

        {/* Investor Info */}
        <div className="bg-white rounded-2xl shadow p-8 mb-14">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Investor Information
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>• Annual Reports & Financial Statements</li>
            <li>• Corporate Governance</li>
            <li>• Press Releases & Company Announcements</li>
            <li>• Shareholder Communications</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Investor Contact
          </h3>
          <p className="text-gray-600">
            For investor-related queries, please contact us at
          </p>
          <p className="font-medium text-pink-500 mt-1">
            investors@bloomify.com
          </p>
        </div>
      </div>
    </section>
  );
}
