export const metadata = {
  title: "Advertising | Blooming-Cart",
  description:
    "Advertise with Blooming-Cart and reach a highly engaged audience through creative advertising solutions.",
};

const advertisingBenefits = [
  {
    id: 1,
    icon: "🎯",
    title: "Targeted Audience",
    description:
      "Reach customers who are actively looking for gifting solutions.",
  },
  {
    id: 2,
    icon: "📊",
    title: "High Visibility",
    description: "Get premium placement across our platform.",
  },
  {
    id: 3,
    icon: "🤝",
    title: "Trusted Platform",
    description: "Advertise on a brand trusted by thousands of customers.",
  },
];

export default function AdvertisingPage() {
  return (
    <section className="w-full bg-[#fffaf7]">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Blooming Hero"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-16">
            <nav className="text-sm text-gray-200 mb-4">Home / Advertising</nav>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Grow With Blooming-Cart
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl">
              Discover how Blooming-Cart connects brands with a loyal audience
              through impactful advertising and meaningful customer experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B63C6]">
            Advertising With Us 📢
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Promote your brand with Bloomify and connect with customers at the
            perfect moment.
          </p>
        </div>

        {/* Advertising Benefits – Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          {advertisingBenefits.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0158BA] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-black mb-3">
            Start Advertising With Us 🚀
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Want to grow your brand with Bloomify? Get in touch with our
            advertising team today.
          </p>

          <button className="px-8 py-3 bg-black text-white rounded-lg transition">
            Contact Advertising Team
          </button>
        </div>
      </div>
    </section>
  );
}
