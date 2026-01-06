export const metadata = {
  title: "List Your Property | Bloomify Homes",
  description:
    "List your property with Bloomify Homes and reach thousands of potential buyers and renters.",
};

export default function ListPropertyPage() {
  return (
    <section className="min-h-screen bg-[#fffaf7] px-4 py-12 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            List Your Property 🏡
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Reach genuine buyers and tenants by listing your property with us.
            Simple, fast, and secure.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">📢</span>
            <h3 className="mt-3 font-semibold text-gray-800">
              Maximum Visibility
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Your property gets exposure to thousands of users.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">📝</span>
            <h3 className="mt-3 font-semibold text-gray-800">
              Easy Listing
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              List your property in just a few simple steps.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">🔒</span>
            <h3 className="mt-3 font-semibold text-gray-800">
              Secure & Trusted
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Your details are safe with our trusted platform.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Property Details
          </h2>

          <form className="space-y-6">
            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Type
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400">
                <option>Apartment</option>
                <option>Independent House</option>
                <option>Villa</option>
                <option>Commercial</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                placeholder="City, Area"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Price & Area */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expected Price (₹)
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Area (sq ft)
                </label>
                <input
                  type="number"
                  placeholder="Enter area"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="Enter contact number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Description
              </label>
              <textarea
                rows="4"
                placeholder="Describe your property"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
              >
                Submit Property
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-600">
          <p>
            Need help? Contact our support team for assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
