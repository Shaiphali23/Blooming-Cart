"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import logo from "../../assets/images/Blooming Cart.png";
import avatar from "../../assets/images/icons8-customer.gif";
import cart from "../../assets/images/icons8-shopping-cart.gif";
import orders from "../../assets/images/icons8-truck.gif";
import { Categories_Data } from "../../assets/Data";

const WebNavbar = () => {
  const router = useRouter();
  const [scrollTop, setScrollTop] = useState(0);
  //   console.log("Categories Data", Categories_Data);

  const name =
    typeof window !== "undefined" ? localStorage.getItem("userName") : null;
  const role =
    typeof window !== "undefined" ? localStorage.getItem("role") : null;

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollTop((winScroll / height) * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="hidden lg:block bg-white sticky top-0">
      {/* Top Section */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-40 cursor-pointer" />
        </Link>

        {/* Search */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter Title or Keyword"
            autoComplete="off"
            className="min-h-[40px] w-[500px] px-4 text-black text-[15px] border border-[#200589] rounded-l-[6px] bg-transparent focus:border-[#b026ff] focus:outline-none"
          />

          <button
            type="submit"
            className="min-h-[40px] px-4 py-2 bg-[#200589] text-white text-[15px]
      rounded-r-[6px]
      cursor-pointer
      transition-colors 
      duration-300 
      ease-in-out
      hover:bg-[#b026ff]
    "
          >
            SEARCH
          </button>
        </div>

        {/* User */}
        <div className="flex items-center gap-6">
          {/* <div className="text-center cursor-pointer relative">
            <Image src={avatar} alt="avatar" className="w-10 mx-auto" />

            <p
              className="text-xs font-bold"
              onClick={() => {
                if (!name) {
                  router.push("/login");
                }
              }}
            >
              {name || "Login"}
            </p>

            {name && (
              <div className="absolute right-0 bg-white shadow-md mt-2 p-3 z-50">
                {role === "Admin" && (
                  <button
                    onClick={() => router.push("/admin")}
                    className="block w-full bg-purple-900 text-white px-3 py-1 mb-2"
                  >
                    Admin Panel
                  </button>
                )}
                <button
                  onClick={handleLogout}
                  className="block w-full bg-purple-900 text-white px-3 py-1"
                >
                  Logout
                </button>
              </div>
            )}
          </div> */}

          <Link href="/login" className="text-center">
            <Image src={avatar} alt="avatar" className="w-10 mx-auto" />
            <p className="text-xs font-bold">Login</p>
          </Link>

          <Link href="#" className="text-center">
            <Image src={orders} alt="orders" className="w-10 mx-auto" />
            <p className="text-xs font-bold">My Orders</p>
          </Link>

          <Link href="/shopping" className="text-center">
            <Image src={cart} alt="cart" className="w-10 mx-auto" />
            <p className="text-xs font-bold">Cart</p>
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="flex justify-between items-center py-[5px] px-[10px] bg-white/70 backdrop-blur-[5px]">
        {Categories_Data.map((el) => (
          <Link
            key={el.category}
            href={el.url}
            className="text-sm font-medium hover:underline decoration-2"
          >
            {el.category}
          </Link>
        ))}
      </div>

      {/* Scroll Progress */}
      <div className="h-1 bg-gray-200">
        <div className="h-1 bg-purple-900" style={{ width: `${scrollTop}%` }} />
      </div>
    </div>
  );
};

export default WebNavbar;
