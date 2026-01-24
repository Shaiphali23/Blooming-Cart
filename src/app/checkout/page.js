"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  FaMapMarkerAlt,
  FaCreditCard,
  FaCheckCircle,
  FaLock,
} from "react-icons/fa";
import { addOrder } from "../redux/slices/ordersSlice";
import { clearCart } from "../redux/slices/cartSlice";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [paymentMode, setPaymentMode] = useState("");
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    addressLine: "",
    city: "",
    state: "",
    pincode: "",
  });

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const isAddressValid = Object.values(address).every(
    (value) => value.trim() !== "",
  );

  const handlePlaceOrder = () => {
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      address,
      paymentMode,
      orderedAt: new Date().toLocaleString(),
    };

    dispatch(addOrder(newOrder));
    dispatch(clearCart());

    toast.success("Order Placed Successfully 🎉");
    router.push("/orders");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <FaLock className="text-green-600" />
        Secure Checkout
      </h1>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* STEP INDICATOR */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center font-semibold border-b pb-4">
            <div
              className={`flex items-center gap-2 ${
                step >= 1 ? "text-black text-lg" : "text-gray-400"
              }`}
            >
              <FaMapMarkerAlt /> Address
            </div>

            <div
              className={`flex items-center gap-2 ${
                step >= 2 ? "text-black text-lg" : "text-gray-400"
              }`}
            >
              <FaCreditCard /> Payment
            </div>

            <div
              className={`flex items-center gap-2 ${
                step === 3 ? "text-black text-lg" : "text-gray-400"
              }`}
            >
              <FaCheckCircle /> Review
            </div>
          </div>
        </div>

        {/* EMPTY CELL to keep grid alignment */}
        <div className="hidden lg:block" />

        {/* LEFT SIDE (FORMS) */}
        <div className="lg:col-span-2 space-y-8">
          {/* STEP 1 – ADDRESS */}
          {step === 1 && (
            <div className="bg-white border rounded-xl p-6 shadow-sm space-y-6">
              <h2 className="text-xl font-semibold">Delivery Address</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(address).map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field.replace(/([A-Z])/g, " $1")}
                    value={address[field]}
                    onChange={(e) =>
                      setAddress({ ...address, [field]: e.target.value })
                    }
                    className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-black outline-none"
                  />
                ))}
              </div>

              <button
                disabled={!isAddressValid}
                onClick={() => setStep(2)}
                className={`cursor-pointer w-full py-3 rounded-lg text-white font-semibold ${
                  isAddressValid
                    ? "bg-black hover:bg-gray-900"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Continue to Payment →
              </button>
            </div>
          )}

          {/* STEP 2 – PAYMENT */}
          {step === 2 && (
            <div className="bg-white border rounded-xl p-6 shadow-sm space-y-6">
              <h2 className="text-xl font-semibold">Payment Method</h2>

              <div className="space-y-3">
                {["Card", "UPI", "Cash on Delivery"].map((mode) => (
                  <label
                    key={mode}
                    className={`flex items-center justify-between border rounded-lg p-4 cursor-pointer ${
                      paymentMode === mode
                        ? "border-black bg-gray-50"
                        : "hover:border-gray-400"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value={mode}
                        checked={paymentMode === mode}
                        onChange={(e) => setPaymentMode(e.target.value)}
                      />
                      <span className="font-medium">{mode}</span>
                    </div>
                  </label>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="cursor-pointer w-full py-3 border rounded-lg font-semibold"
                >
                  ← Back
                </button>

                <button
                  disabled={!paymentMode}
                  onClick={() => setStep(3)}
                  className={`cursor-pointer w-full py-3 rounded-lg text-white font-semibold ${
                    paymentMode
                      ? "bg-black hover:bg-gray-900"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  Review Order →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 – REVIEW */}
          {step === 3 && (
            <div className="bg-white border rounded-xl p-6 shadow-sm space-y-6">
              <h2 className="text-xl font-semibold">Review Your Order</h2>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Delivery Address</h3>
                <p className="text-sm text-gray-600">
                  {address.name}, {address.phone}
                </p>
                <p className="text-sm text-gray-600">
                  {address.addressLine}, {address.city}, {address.state} -{" "}
                  {address.pincode}
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Payment Method</h3>
                <p className="text-sm text-gray-600">{paymentMode}</p>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="cursor-pointer w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900"
              >
                Place Order
              </button>
            </div>
          )}
        </div>

        {/* RIGHT SIDE (ORDER SUMMARY) */}
        <div className="bg-white border rounded-xl p-6 shadow-sm h-fit sticky top-24">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-sm text-gray-700 mb-2"
            >
              <span>
                {item.productname} × {item.quantity}
              </span>
              <span>₹ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span>₹ {totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
