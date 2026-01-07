export const metadata = {
  title: "Newsroom | Blooming-Cart",
  description:
    "Stay updated with the latest news, announcements, and updates from Bloomify.",
};

export default function NewsroomPage() {
  const newsData = [
    {
      id: 1,
      title: "Bloomify Launches Same-Day Flower Delivery",
      date: "March 15, 2025",
      image:
        "https://images.unsplash.com/photo-1524593166156-312f362cada0?auto=format&fit=crop&w=800&q=80",
      description:
        "We’re excited to announce our new same-day delivery service, making flower gifting faster and easier than ever.",
    },
    {
      id: 2,
      title: "Bloomify Expands to 10 New Cities",
      date: "February 28, 2025",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
      description:
        "Bloomify is now available in 10 additional cities, bringing fresh flowers closer to more customers.",
    },
    {
      id: 3,
      title: "Partnership with Local Florists",
      date: "January 10, 2025",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
      description:
        "We’ve partnered with local florists to support small businesses and ensure premium-quality arrangements.",
    },
  ];

  return (
    <section className="w-full bg-[#fffaf7]">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Bloomify Hero"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-16">
            <nav className="text-sm text-gray-200 mb-4">Home / Newsroom</nav>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Inside Blooming-Cart
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl">
              Discover company news, product updates, announcements, and stories
              shaping the future of Blooming-Cart.
            </p>
          </div>
        </div>
      </div>

      <section className="w-full bg-[#fffaf7] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B63C6] mb-10">
            Latest News
          </h2>

          {/* Content Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Image */}
            <div className="w-full h-[300px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                alt="Latest News"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <span className="text-sm text-gray-500">January 2026</span>

              <h3 className="text-2xl md:text-3xl font-semibold text-[#0B63C6] mt-2 mb-4">
                Blooming-Cart Expands Its Digital Marketplace
              </h3>

              <p className="text-gray-600 mb-6">
                Blooming-Cart continues its journey of innovation by expanding
                its digital marketplace, bringing more sellers and customers
                together through seamless shopping experiences.
              </p>

              <button className="px-6 py-3 bg-[#333] text-white rounded-md transition">
                Read More
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {newsData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0158BA] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0B63C6] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            By the Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center text-white">
            {/* Stat 1 */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-[#FFCE3F]">
                3,300+
              </h3>
              <p className="text-lg opacity-90">Employees</p>
            </div>

            {/* Stat 2 */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-[#FFCE3F]">
                $2.21B
              </h3>
              <p className="text-lg opacity-90">In Annual Sales (FY2022)</p>
            </div>

            {/* Stat 3 */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-[#FFCE3F]">
                17
              </h3>
              <p className="text-lg opacity-90">Brands</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
