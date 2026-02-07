import { NextResponse } from "next/server";

let cart = [];

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(req) {
  const item = await req.json();
  cart.push(item);
  return NextResponse.json(cart);
}

export async function DELETE(req) {
  const { id } = await req.json();
  cart = cart.filter((item) => item._id !== id);
  return NextResponse.json(cart);
}
