"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaUserPlus,
  FaStore,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import toast from "react-hot-toast";

export default function VendorRegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    vendorName: "",
    shopName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      const res = await fetch("/api/vendor/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vendorName: formData.vendorName,
          shopName: formData.shopName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Vendor registered successfully 🎉");
      router.push("/vendor/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 my-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-6">
          <FaStore className="text-green-600 text-4xl mx-auto mb-2" />
          <h1 className="text-2xl font-bold text-gray-800">
            Vendor Registration
          </h1>
          <p className="text-sm text-gray-500">Start selling with us</p>
        </div>

        {error && (
          <p className="text-red-600 text-sm text-center mb-3">{error}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Vendor Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Vendor Name
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <FaUserPlus className="text-gray-400 mr-2" />
              <input
                name="vendorName"
                value={formData.vendorName}
                onChange={handleChange}
                type="text"
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
                name="shopName"
                value={formData.shopName}
                onChange={handleChange}
                type="text"
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                className="w-full outline-none text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
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
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type={showConfirmPassword ? "text" : "password"}
                className="w-full outline-none text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700"
          >
            {loading ? "Registering..." : "Register as Vendor"}
          </button>
        </form>

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
