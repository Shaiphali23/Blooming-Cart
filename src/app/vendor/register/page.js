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
import toast from "react-hot-toast";

export default function VendorRegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    vendorName: "",
    shopName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/vendor/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast(data.message);
        return;
      }

      toast("Vendor registered successfully");
      setFormData({
        vendorName: "",
        shopName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
      toast("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Vendor Name */}
          <Input
            icon={<FaUserPlus />}
            label="Vendor Name"
            name="vendorName"
            value={formData.vendorName}
            onChange={handleChange}
            placeholder="Your name"
          />

          {/* Shop Name */}
          <Input
            icon={<FaStore />}
            label="Shop Name"
            name="shopName"
            value={formData.shopName}
            onChange={handleChange}
            placeholder="Your shop name"
          />

          {/* Email */}
          <Input
            icon={<FaEnvelope />}
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="vendor@email.com"
          />

          {/* Phone */}
          <Input
            icon={<FaPhone />}
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876543210"
          />

          {/* Password */}
          <PasswordInput
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            show={showPassword}
            toggle={() => setShowPassword(!showPassword)}
          />

          {/* Confirm Password */}
          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            show={showConfirmPassword}
            toggle={() => setShowConfirmPassword(!showConfirmPassword)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition disabled:opacity-60"
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

/* ---------------- Reusable Inputs ---------------- */
function Input({ label, icon, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
        <span className="text-gray-400 mr-2">{icon}</span>
        <input {...props} className="w-full outline-none text-sm" required />
      </div>
    </div>
  );
}

function PasswordInput({ label, show, toggle, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
        <FaLock className="text-gray-400 mr-2" />
        <input
          type={show ? "text" : "password"}
          className="w-full outline-none text-sm"
          minLength={8}
          required
          {...props}
        />
        <button type="button" onClick={toggle} className="text-gray-400 ml-2">
          {show ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
}
