import React from "react";
import Link from "next/link";

const page = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top Flower Trends for 2026",
      excerpt:
        "From pastel palettes to bold arrangements, explore the flower trends that will dominate celebrations this year.",
      date: "Jan 6, 2026",
      image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Flowers for Any Occasion",
      excerpt:
        "Birthdays, anniversaries, or just because — learn how to pick blooms that say it all.",
      date: "Jan 2, 2026",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      id: 3,
      title: "Caring for Fresh Flowers: Make Them Last Longer",
      excerpt:
        "Simple care tips to keep your bouquets fresh, vibrant, and beautiful for days.",
      date: "Dec 28, 2025",
      image: "https://images.unsplash.com/photo-1508747703725-719777637510",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#fffaf7]">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946"
          alt="Flower Blog Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-16">
            <nav className="text-sm text-gray-200 mb-4">
              Home / Flower Blogs
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Flower Stories & Gifting Guides
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Inspiration, tips, and stories to help you celebrate life’s
              moments with flowers.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Latest From Our Blog
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-block text-white bg-pink-600 px-4 py-2 rounded-lg hover:bg-pink-700 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-700 text-black py-16 text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">
          Never Miss a Flower Story 🌸
        </h2>
        <p className="text-pink-100 mb-6">
          Get flower care tips, gifting ideas, and exclusive offers straight to
          your inbox.
        </p>
        <button className="bg-white text-pink-700 px-6 py-3 rounded-lg font-medium hover:bg-pink-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default page;
