"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";
import signup_cover from "../assets/images/signup_cover.jpg";
import signup_backcover from "../assets/images/signup_backcover.jpg";
import navbar_img from "../assets/images/navbar_img.jpg";
import logo from "../assets/images/Blooming Cart.png";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (user.password.length < 8) {
      return alert("Password should be at least 8 characters long");
    }

    try {
      const res = await axios.post(`${API_URL}/users/signup`, {
        name: user.firstname,
        email: user.email,
        password: user.password,
      });

      if (res.data === "Signup Successfully") {
        alert("Account created successfully!");
        router.push("/login");
      } else if (
        res.data === `User with Email Id ${user.email} already exist`
      ) {
        alert("Email is already registered");
      } else if (res.data.error) {
        setError(res.data.error);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
      console.error(err);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${signup_backcover.src})` }}
    >
      <div className="flex flex-col md:flex-row w-11/12 max-w-6xl mx-auto mt-5 border border-gray-300 rounded-lg overflow-hidden">
        {/* Form Section */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white p-8">
          <Link href="/">
            <Image
              src={logo}
              alt="Blooming Cart"
              width={150}
              height={50}
              className="mb-4"
            />
          </Link>
          <h2 className="text-2xl font-semibold text-black mb-6">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <label className="text-sm text-orange-400">First Name</label>
              <input
                type="text"
                name="firstname"
                value={user.firstname}
                onChange={handleChange}
                placeholder="Enter your First Name"
                className="w-full h-9 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm text-orange-400">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={user.lastname}
                onChange={handleChange}
                placeholder="Enter your Last Name"
                className="w-full h-9 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm text-orange-400">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full h-9 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm text-orange-400">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                  className="w-full h-9 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={togglePassword}
                >
                  {showPassword ? (
                    <AiOutlineEye size={20} />
                  ) : (
                    <AiOutlineEyeInvisible size={20} />
                  )}
                </span>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">
                <span className="text-blue-500 font-semibold">
                  Email me about special offers, new products and promotions.
                </span>
              </span>
            </div>

            <button
              type="submit"
              className="w-full h-9 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
            >
              Create your Account
            </button>
          </form>

          <div className="my-4 border-t"></div>

          {/* Social Login */}
          <div className="space-y-2 w-full">
            <button className="w-full h-9 flex items-center justify-center gap-2 border rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer">
              <FcGoogle size={20} />
              Sign Up with Google
            </button>

            <button className="w-full h-9 flex items-center justify-center gap-2 border rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer">
              <FaFacebook size={20} />
              Sign Up with Facebook
            </button>
          </div>

          <div className="mt-4 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative hidden md:block">
          <Link href="/">
            <Image
              src={signup_cover}
              alt="Signup Image"
              layout="responsive"
              objectFit="cover"
              className="rounded-r-lg"
            />
          </Link>
        </div>
      </div>

      {/* Navbar Bottom Image */}
      <div className="mt-4">
        <Image src={navbar_img} alt="Navbar Image" layout="responsive" />
      </div>
    </div>
  );
}
