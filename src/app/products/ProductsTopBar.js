export default function ProductsTopBar() {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h2 className="text-lg font-bold">Products</h2>

      <select className="border rounded-lg px-3 py-2 text-sm">
        <option>Sort By</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Newest</option>
      </select>
    </div>
  );
}
