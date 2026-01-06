import React from "react";
import Link from "next/link";

const page = () => {
  // Example blog posts (replace with dynamic data if needed)
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Travel Destinations for 2026",
      excerpt:
        "Discover the most amazing travel spots to visit this year and plan your perfect getaway.",
      date: "Jan 6, 2026",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 2,
      title: "How to Travel on a Budget",
      excerpt:
        "Learn smart tips and tricks to explore the world without breaking the bank.",
      date: "Jan 2, 2026",
      image:
        "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    },
    {
      id: 3,
      title: "Luxury Stays Worth Every Penny",
      excerpt:
        "Experience premium hotels and resorts that offer world-class comfort and amenities.",
      date: "Dec 28, 2025",
      image:
        "https://images.unsplash.com/photo-1542317854-5e1dfb6f2335",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Blog"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Blog
            </h1>
            <p className="max-w-2xl mx-auto text-lg">
              Insights, tips, and stories from our travel experts
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Latest Posts
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
                  className="text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">
          Want More Travel Tips?
        </h2>
        <p className="text-gray-300 mb-6">
          Subscribe to our newsletter and stay updated with the latest blog posts
        </p>
        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default page;

