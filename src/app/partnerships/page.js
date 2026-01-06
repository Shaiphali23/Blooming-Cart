export const metadata = {
  title: "Partnerships | Bloomify",
  description:
    "Partner with Bloomify and grow together through meaningful collaborations.",
};

export default function PartnershipsPage() {
  return (
    <section className="min-h-screen bg-[#fffaf7] px-4 py-12 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Partnerships 🤝
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Collaborate with us to create value, expand reach, and grow
            together.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">🏪</span>
            <h3 className="mt-3 font-semibold text-gray-800">
              Florist Partners
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Join our network of trusted florists and reach more customers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">🚚</span>
            <h3 className="mt-3 font-semibold text-gray-800">
              Delivery Partners
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Partner with us to ensure fast and reliable deliveries.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">💼</span>
            <h3 className="mt-3 font-semibold text-gray-800">
              Corporate Partners
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Collaborate on corporate gifting and bulk orders.
            </p>
          </div>
        </div>

        {/* Why Partner */}
        <div className="bg-white rounded-2xl shadow p-8 max-w-4xl mx-auto mb-14">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Why Partner With Us?
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Access to a growing customer base</li>
            <li>✔ Transparent and fair partnership model</li>
            <li>✔ Marketing and promotional support</li>
            <li>✔ Dedicated partner support team</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Let’s Grow Together 🌱
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Interested in partnering with us? Get in touch and our team will
            reach out to you shortly.
          </p>

          <button className="px-8 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}
