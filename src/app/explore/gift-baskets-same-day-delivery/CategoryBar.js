import { categories } from "@/app/assets/data/categories";

export default function CategoryBar({ onSelectCategory }) {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="text-center cursor-pointer group"
              onClick={() => onSelectCategory(cat)}
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border group-hover:shadow-lg transition">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition"
                />
              </div>

              <p className="mt-3 text-sm font-medium text-gray-800">Same-Day</p>
              <p className="text-sm text-gray-600">
                {cat.title.replace("Same-Day ", "")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
