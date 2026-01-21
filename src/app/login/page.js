"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import blooming_cart from "../assets/images/Blooming Cart.png";

export default function LoginPage() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(`${API_URL}/users/login`, {
        email: user.email,
        password: user.password,
      });

      if (res.data.flowerToken) {
        localStorage.setItem("token", res.data.flowerToken);
        localStorage.setItem("userName", res.data.userData.name);
        localStorage.setItem("role", res.data.userData.role);
        router.push("/");
      } else {
        setError("Invalid Credentials");
      }
    } catch (err) {
      setError("Authentication Failed. Try Again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/signup_backcover.jpg')",
      }}
    >
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200 my-4">
        {/* Header */}
        <div className="bg-[#F2F5FC] rounded-t-xl pt-12 pb-6 text-center">
          <Link href="/">
            <Image
              src={blooming_cart}
              alt="Blooming Cart"
              width={180}
              height={60}
              className="mx-auto"
            />
          </Link>

          <h2 className="mt-4 text-[26px] font-semibold text-black">
            Login Into Blooming Cart
          </h2>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={user.email}
                onChange={handleChange}
                className="w-full h-[34px] px-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleChange}
                className="w-full h-[34px] px-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full h-[34px] bg-[#3070f0] text-white text-sm rounded-md hover:bg-blue-600 transition cursor-pointer"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 border-t" />

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full h-[34px] flex items-center justify-center gap-2 border rounded-md text-sm text-gray-600 hover:bg-gray-100 cursor-pointer">
              <FcGoogle size={20} />
              Sign in with Google
            </button>

            <button className="w-full h-[34px] flex items-center justify-center gap-2 border rounded-md text-sm text-gray-600 hover:bg-gray-100 cursor-pointer">
              <FaFacebook size={20} />
              Sign in with Facebook
            </button>
          </div>

          {/* Footer */}
          <div className="flex justify-between mt-6 text-sm">
            <span className="text-[#3070F0]">Not Registered?</span>
            <Link href="/signup" className="text-[#3070F0] hover:underline">
              Create Your Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
