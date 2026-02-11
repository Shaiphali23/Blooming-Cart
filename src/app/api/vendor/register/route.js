import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Vendor from "@/models/Vendor";
import dbConnect  from "@/lib/dbConnect";

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

    await Vendor.create({
      vendorName,
      shopName,
      email,
      phone,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "Vendor registered successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Vendor register error:", error);
    return NextResponse.json(
      { message: error.message || "Server error" },
      { status: 500 }
    );
  }
}
