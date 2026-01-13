"use client";

import Link from "next/link";
import { FaEnvelope, FaLock, FaStore } from "react-icons/fa";

export default function VendorLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <FaStore className="text-green-600 text-4xl mx-auto mb-2" />
          <h1 className="text-2xl font-bold text-gray-800">Vendor Login</h1>
          <p className="text-sm text-gray-500">Access your vendor dashboard</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="vendor@email.com"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have a vendor account?{" "}
          <Link
            href="/vendor/register"
            className="text-green-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
