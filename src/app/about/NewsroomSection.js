export default function NewsroomSection() {
  const newsData = [
    {
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
      title: "Bloomify Expands Nationwide",
      description:
        "Bloomify continues its journey of spreading happiness by expanding flower delivery services across major cities, ensuring freshness and care in every order.",
    },
    {
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      title: "Sustainability at Our Core",
      description:
        "We are committed to eco-friendly practices, from responsibly sourced flowers to sustainable packaging that protects both nature and beauty.",
    },
    {
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      title: "Crafting Moments with Flowers",
      description:
        "Our expert florists create handcrafted arrangements designed to turn life’s special moments into lasting memories.",
    },
  ];

  return (
    <section className="w-full bg-[#fffaf7] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0158BA] mb-14">
          From Our Newsroom
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
  );
}
