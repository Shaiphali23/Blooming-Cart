import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <div className="relative w-full h-[180px]">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <h3 className="mt-3 font-semibold">{product.name}</h3>
      <p className="text-green-600 font-bold mt-1">₹{product.price}</p>

      <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}
