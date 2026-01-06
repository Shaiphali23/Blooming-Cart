"use client";

import { useParams } from "next/navigation";
import { productData } from "@/app/assets/data/products";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/slices/cartSlice";
import toast from "react-hot-toast";

export default function CategoryPage() {
  const { category } = useParams();
  const dispatch = useDispatch();

  const filteredProducts = productData.filter(
    (product) => product.category === category
  );

  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-semibold mb-6 capitalize">
        {category?.replace("-", " ") || "Loading..."}
      </h2>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.productname}
                className="w-full h-[250px] object-cover"
              />

              <div className="p-4">
                {/* Size Badge */}
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  {item.size}
                </span>

                {/* Product Name */}
                <h3 className="font-semibold text-lg mt-2">
                  {item.productname}
                </h3>

                {/* Price */}
                <div className="flex gap-2 items-center mt-2">
                  <span className="text-red-600 font-bold">${item.price}</span>
                  <span className="line-through text-gray-400 text-sm">
                    ${item.strike_price}
                  </span>
                </div>

                {/* Button */}
                <div className="flex gap-2 mt-4">
                  {/* View Product */}
                  <Link href={`/product/${item.id}`} className="flex-1">
                    <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition cursor-pointer">
                      View Product
                    </button>
                  </Link>

                  {/* Add to Cart */}
                  <button
                    onClick={() => {
                      dispatch(
                        addToCart({
                          product: item,
                          quantity: 1,
                        })
                      );
                      toast.success("Item added to cart");
                    }}
                    className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
