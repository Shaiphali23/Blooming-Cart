export const metadata = {
  title: "Advertising | Bloomify",
  description:
    "Advertise with Bloomify and reach a highly engaged audience through creative advertising solutions.",
};

export default function AdvertisingPage() {
  return (
    <section className="min-h-screen bg-[#fffaf7] px-4 py-12 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Advertising With Us 📢
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Promote your brand with Bloomify and connect with customers at the
            perfect moment.
          </p>
        </div>

        {/* Advertising Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">🎯</span>
            <h3 className="mt-3 font-semibold text-gray-800">
              Targeted Audience
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Reach customers who are actively looking for gifting solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">📊</span>
            <h3 className="mt-3 font-semibold text-gray-800">
              High Visibility
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Get premium placement across our platform.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">🤝</span>
            <h3 className="mt-3 font-semibold text-gray-800">
              Trusted Platform
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Advertise on a brand trusted by thousands of customers.
            </p>
          </div>
        </div>

        {/* Advertising Options */}
        <div className="bg-white rounded-2xl shadow p-8 max-w-4xl mx-auto mb-14">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Advertising Options
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>• Homepage banner advertisements</li>
            <li>• Featured product promotions</li>
            <li>• Seasonal campaign sponsorships</li>
            <li>• Email & push notification campaigns</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Start Advertising With Us 🚀
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Want to grow your brand with Bloomify? Get in touch with our
            advertising team today.
          </p>

          <button className="px-8 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
            Contact Advertising Team
          </button>
        </div>
      </div>
    </section>
  );
}
