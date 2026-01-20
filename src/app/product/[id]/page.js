"use client";

import { useParams } from "next/navigation";
import { productData } from "@/app/assets/data/products";
import { useState } from "react";
import {
  FaStar,
  FaHeart,
  FaTruck,
  FaShieldAlt,
  FaShoppingBag,
  FaShareAlt,
  FaRegHeart,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/slices/cartSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();

  const product = productData.find((item) => item.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(product.image);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Product Not Found
          </h2>
          <p className="text-gray-600 mt-2">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>Home</li>
            <li className="text-gray-400">/</li>
            <li>Products</li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">
              {product.category || "Category"}
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={selectedImage}
                  alt={product.productname}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />

                {/* Favorite Button */}
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all hover:scale-110"
                >
                  {isFavorite ? (
                    <FaHeart className="w-5 h-5 fill-red-500 text-red-500" />
                  ) : (
                    <FaRegHeart className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {[product.image, ...(product.multi_image || [])].map(
                  (img, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all
        ${
          selectedImage === img
            ? "border-black"
            : "border-transparent hover:border-gray-300"
        }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category & Size */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    {product.size}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-1">
                    (128 reviews)
                  </span>
                </div>
              </div>

              {/* Product Name */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {product.productname}
              </h1>

              {/* Price Section */}
              <div className="flex items-center gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.strike_price && (
                    <>
                      <span className="text-2xl line-through text-gray-400">
                        ${product.strike_price.toFixed(2)}
                      </span>
                      <span className="text-lg font-semibold text-red-600">
                        Save $
                        {(product.strike_price - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Full Description */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Full Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description ||
                    "This premium product combines exceptional quality with timeless design. Perfect for both everyday use and special occasions, it offers unmatched durability and style."}
                </p>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 text-gray-600 hover:text-black transition-colors"
                    >
                      <FaMinus className="w-3 h-3" />
                    </button>
                    <span className="px-4 py-3 w-12 text-center font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 text-gray-600 hover:text-black transition-colors"
                    >
                      <FaPlus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    className="flex-1 bg-black text-white py-3.5 rounded-lg font-semibold hover:bg-gray-900 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    onClick={() => {
                      dispatch(addToCart({ product, quantity }));
                      toast.success("Item added to cart");
                    }}
                  >
                    <FaShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Add to Cart
                  </button>

                  {/* Share Button */}
                  <button className="p-3.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <FaShareAlt className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Buy Now */}
                <button
                  className="w-full py-3.5 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-all cursor-pointer"
                  onClick={() => router.push("/billing")}
                >
                  Buy Now
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <FaTruck className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Free Shipping</p>
                    <p className="text-sm text-gray-500">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <FaShieldAlt className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Secure Payment</p>
                    <p className="text-sm text-gray-500">
                      100% secure & encrypted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
