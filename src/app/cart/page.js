"use client";

import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "@/app/redux/slices/cartSlice";
import Link from "next/link";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <Link
          href="/"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border rounded-xl p-4 bg-white shadow-sm"
            >
              <img
                src={item.image}
                alt={item.productname}
                className="w-28 h-28 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.productname}</h3>
                <p className="text-gray-600 mt-1">₹ {item.price}</p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => {
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        );
                        toast.success("Quantity decreased");
                      }}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      <FaMinus />
                    </button>

                    <span className="px-4 font-medium">{item.quantity}</span>

                    <button
                      onClick={() => {
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        );
                        toast.success("Quantity Increased");
                      }}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => {
                      dispatch(removeFromCart(item.id));
                      toast.error("Item removed from cart");
                    }}
                    className="text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                  >
                    <FaTrash />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border rounded-xl p-6 bg-white shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2 text-gray-700">
            <span>Subtotal</span>
            <span>₹ {totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-4 text-gray-700">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between text-lg font-semibold mb-6">
            <span>Total</span>
            <span>₹ {totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
