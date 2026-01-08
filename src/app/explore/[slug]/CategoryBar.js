import Link from "next/link";
import { categories } from "@/app/assets/data/categories";

export default function CategoryBar({ activeSlug }) {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {categories.map((cat) => {
            const isActive = cat.slug === activeSlug;

            return (
              <Link
                key={cat.id}
                href={`/explore/${cat.slug}`}
                className="text-center cursor-pointer group"
              >
                <div
                  className={`w-24 h-24 mx-auto rounded-full overflow-hidden border transition
                    ${
                      isActive
                        ? "ring-2 ring-purple-600 shadow-lg"
                        : "group-hover:shadow-lg"
                    }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition"
                  />
                </div>

                <p className="mt-3 text-sm font-medium text-gray-800">
                  Same-Day
                </p>
                <p
                  className={`text-sm ${
                    isActive ? "text-purple-600 font-semibold" : "text-gray-600"
                  }`}
                >
                  {cat.title.replace("Same-Day ", "")}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
