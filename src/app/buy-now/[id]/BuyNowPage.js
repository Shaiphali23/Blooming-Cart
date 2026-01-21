"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { productData } from "@/app/assets/data/productData";

export default function BuyNowPage({ id }) {
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productData.find(
      (item) => String(item.id) === String(id),
    );
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Product not found</h2>
          <button
            onClick={() => router.push("/products")}
            className="mt-4 px-6 py-2 bg-black text-white rounded-lg cursor-pointer"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="text-3xl font-semibold mb-6">₹{product.price}</div>

          {/* Address (static for now) */}
          <div className="border rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-2">Delivery Address</h3>
            <p className="text-sm text-gray-600">Shaiphali Jaiswal</p>
          </div>

          {/* Actions */}
          <button
            className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:opacity-90 transition"
            onClick={() => alert("Order placed successfully 🎉")}
          >
            Place Order
          </button>

          <button
            className="w-full py-3 mt-3 border border-black rounded-lg font-semibold"
            onClick={() => router.back()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
