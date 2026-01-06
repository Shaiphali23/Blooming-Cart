export const metadata = {
  title: "Newsroom | Bloomify",
  description:
    "Stay updated with the latest news, announcements, and updates from Bloomify.",
};

export default function NewsroomPage() {
  const newsData = [
    {
      id: 1,
      title: "Bloomify Launches Same-Day Flower Delivery",
      date: "March 15, 2025",
      description:
        "We’re excited to announce our new same-day delivery service, making flower gifting faster and easier than ever.",
    },
    {
      id: 2,
      title: "Bloomify Expands to 10 New Cities",
      date: "February 28, 2025",
      description:
        "Bloomify is now available in 10 additional cities, bringing fresh flowers closer to more customers.",
    },
    {
      id: 3,
      title: "Partnership with Local Florists",
      date: "January 10, 2025",
      description:
        "We’ve partnered with local florists to support small businesses and ensure premium-quality arrangements.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#fffaf7] px-4 py-12 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Newsroom 📰
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Get the latest updates, announcements, and stories from Bloomify.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-sm text-gray-500 mb-2">{news.date}</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {news.title}
              </h3>
              <p className="text-sm text-gray-600">{news.description}</p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-14 text-center">
          <p className="text-gray-600">For press inquiries, contact us at</p>
          <p className="font-medium text-pink-500">press@bloomify.com</p>
        </div>
      </div>
    </section>
  );
}
