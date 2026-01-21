"use client";

import { useParams, useRouter } from "next/navigation";
import BuyNowPage from "./BuyNowPage";

export default function BuyNowWrapper() {
  const { id } = useParams();
  const router = useRouter();

  if (!id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            No Product Selected
          </h2>
          <button
            onClick={() => router.push("/products")}
            className="mt-4 px-6 py-2 bg-black text-white rounded-lg"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return <BuyNowPage id={id} />;
}
