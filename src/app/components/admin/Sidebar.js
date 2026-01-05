"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faGift,
  faTruck,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-[#11071F] text-white">
      <div className="p-6">
        <div className="flex flex-col gap-6">
          <Link
            href="/admin"
            className="flex items-center gap-3 hover:text-[#ff6347]"
          >
            <FontAwesomeIcon icon={faHouse} />
            <span>DASHBOARD</span>
          </Link>

          <Link
            href="/admin/users"
            className="flex items-center gap-3 hover:text-[#ff6347]"
          >
            <FontAwesomeIcon icon={faUser} />
            <span>ALL USERS</span>
          </Link>

          <Link
            href="/admin/products"
            className="flex items-center gap-3 hover:text-[#ff6347]"
          >
            <FontAwesomeIcon icon={faGift} />
            <span>ALL PRODUCTS</span>
          </Link>

          <Link
            href="/admin/orders"
            className="flex items-center gap-3 hover:text-[#ff6347]"
          >
            <FontAwesomeIcon icon={faTruck} />
            <span>ORDERS</span>
          </Link>

          <Link
            href="/admin/adding"
            className="flex items-center gap-3 hover:text-[#ff6347]"
          >
            <FontAwesomeIcon icon={faSliders} />
            <span>ADD DATA</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
