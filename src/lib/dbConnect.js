import mongoose from "mongoose";
import dns from "node:dns";

// Force Node.js to use Google DNS for SRV lookups (fixes ISP DNS blocking)
dns.setServers(["8.8.8.8", "8.8.4.4"]);

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    throw new Error("MONGO_URI not defined in .env.local");
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
