import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import Vendor from "@/app/models/Vendor";

export async function POST(req) {
  try {
    await dbConnect();

    const { vendorName, shopName, email, phone, password } = await req.json();

    if (!vendorName || !shopName || !email || !phone || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    const existingVendor = await Vendor.findOne({ email });
    if (existingVendor) {
      return NextResponse.json(
        { message: "Vendor already exists" },
        { status: 409 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const vendor = await Vendor.create({
      vendorName,
      shopName,
      email,
      phone,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "Vendor registered successfully",
        vendor: {
          id: vendor._id,
          vendorName: vendor.vendorName,
          email: vendor.email,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Vendor Register Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
