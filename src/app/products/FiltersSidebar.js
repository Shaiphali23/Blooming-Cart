export default function FiltersSidebar() {
  return (
    <aside className="w-[260px] bg-white p-6 shadow hidden md:block">
      <h3 className="font-bold text-lg mb-4">Filters</h3>

      {/* Price Filter */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Price</p>
        <input type="range" min="0" max="5000" className="w-full" />
      </div>

      {/* Category Filter */}
      <div>
        <p className="font-semibold mb-2">Category</p>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Love & Romance
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Get Well
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            New Baby
          </label>
        </div>
      </div>
    </aside>
  );
}
