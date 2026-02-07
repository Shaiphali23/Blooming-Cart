import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
    items: Array,
    totalAmount: Number,
    status: { type: String, default: "Pending" },
  },
  { timestamps: true },
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
