"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/Blooming Cart.png";
import DrawerJSX from "./DrawerJSX";

const MobNavbar = () => {
  const router = useRouter();

  return (
    <div className="lg:hidden bg-purple-900 text-white">
      <div className="flex items-center justify-between px-4 h-20">
        <DrawerJSX />

        <Image
          src={logo}
          alt="logo"
          className="w-24 cursor-pointer"
          onClick={() => router.push("/")}
        />

        <Link href="/cart" className="text-center">
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
          <p className="text-xs font-bold">Cart</p>
        </Link>
      </div>
    </div>
  );
};

export default MobNavbar;
