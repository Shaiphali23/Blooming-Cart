"use client";

import { useSelector } from "react-redux";

export default function OrdersPage() {
  const orders = useSelector((state) => state.orders.orders);

  if (orders.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-semibold">No Orders Yet 🛒</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">My Orders</h1>

      {orders.map((order) => (
        <div
          key={order.id}
          className="border rounded-xl p-6 bg-white shadow-sm"
        >
          <p className="text-sm text-gray-500 mb-2">
            Ordered on: {order.orderedAt}
          </p>

          <div className="mb-4">
            <h3 className="font-semibold">Delivery Address</h3>
            <p className="text-sm text-gray-600">
              {order.address.name}, {order.address.phone}
            </p>
            <p className="text-sm text-gray-600">
              {order.address.addressLine}, {order.address.city},{" "}
              {order.address.state} - {order.address.pincode}
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Payment</h3>
            <p className="text-sm text-gray-600">{order.paymentMode}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Items</h3>
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-sm text-gray-700"
              >
                <span>{item.title}</span>
                <span>₹{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
