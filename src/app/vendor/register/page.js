"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaUserPlus,
  FaStore,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function VendorRegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <FaStore className="text-green-600 text-4xl mx-auto mb-2" />
          <h1 className="text-2xl font-bold text-gray-800">
            Vendor Registration
          </h1>
          <p className="text-sm text-gray-500">Start selling with us</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Vendor Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Vendor Name
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <FaUserPlus className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Your name"
                className="w-full outline-none text-sm"
                required
              />
            </div>
          </div>

          {/* Shop Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Shop Name
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <FaStore className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Your shop name"
                className="w-full outline-none text-sm"
                required
              />
            </div>
          </div>

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
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <FaPhone className="text-gray-400 mr-2" />
              <input
                type="tel"
                placeholder="9876543210"
                className="w-full outline-none text-sm"
                required
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
                type={showPassword ? "text" : "password"}
                placeholder="Minimum 8 characters"
                className="w-full outline-none text-sm"
                minLength={8}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 ml-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter password"
                className="w-full outline-none text-sm"
                minLength={8}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-gray-400 ml-2"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Register as Vendor
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            href="/vendor/login"
            className="text-green-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
