import { IoIosArrowRoundForward } from "react-icons/io";

export default function ExperienceHistorySection() {
  return (
    <section className="w-full bg-[#fffaf7] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Our Customer Experience */}
          <div className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-[#0158BA] mb-4">
              Our Customer Experience
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Blooming-Cart, customer happiness is at the heart of everything
              we do. From easy ordering to timely delivery, we ensure every
              floral experience feels personal, joyful, and unforgettable.
            </p>

            <button className="inline-flex items-center gap-2 text-[#0158BA] font-semibold hover:gap-4 transition-all">
              Learn More
              <IoIosArrowRoundForward size={20} />
            </button>
          </div>

          {/* Our History */}
          <div className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-[#0158BA] mb-4">
              Our History
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Blooming-Cart began with a simple idea — to spread happiness
              through flowers. Over the years, we’ve grown from a small local
              florist into a trusted flower gifting brand loved across regions.
            </p>

            <button className="inline-flex items-center gap-2 text-[#0158BA] font-semibold hover:gap-4 transition-all">
              Learn More
              <IoIosArrowRoundForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
