import NewsroomSection from "../about/NewsroomSection";

export const metadata = {
  title: "Contact Us | Blooming-Cart",
  description:
    "Learn more about Blooming-Cart – your trusted flower gifting destination.",
};

export default function ContactPage() {
  return (
    <section className="w-full bg-[#fffaf7]">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Blooming-Cart Hero"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-16">
            <nav className="text-sm text-gray-200 mb-4">
              Home / News & Media / Media Contact
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Media Contact
            </h1>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="w-full bg-[#0158BA] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-[60px] font-bold mb-6">
            Welcome to Blooming Cart
          </h2>

          <div className="space-y-4 text-lg md:text-xl">
            <p>
              At <span className="font-medium">Blooming Cart</span>, every
              flower tells a story of love, joy, and care.
            </p>

            <p>
              Our team hand-picks fresh flowers and crafts elegant arrangements
              for every occasion.
            </p>

            <p>
              From celebrations to heartfelt moments, Bloomify makes memories
              bloom.
            </p>
          </div>

          <button className="mt-10 bg-white text-[#0158BA] font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition">
            Our Business
          </button>
        </div>
      </div>

      <NewsroomSection />
    </section>
  );
}
