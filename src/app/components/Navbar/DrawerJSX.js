"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Categories_Data } from "../../assets/Data";

const DrawerJSX = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faBars} size="lg" />
        <p className="text-xs font-bold">Menu</p>
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="bg-white w-72 h-full p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Blooming Cart</h2>
              <button onClick={() => setOpen(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter Keyword"
              className="w-full border px-3 py-2 mb-4"
            />

            {Categories_Data.map((el) => (
              <Link
                key={el.category}
                href={el.url}
                onClick={() => setOpen(false)}
                className="flex justify-between py-2 border-b"
              >
                <span>{el.category}</span>
                <span>&gt;</span>
              </Link>
            ))}

            <button className="mt-4 w-full bg-purple-900 text-white py-2">
              SHOP LAST MINUTES DEALS
            </button>

            <div className="mt-4">
              <Link href="/login" className="block py-2 font-semibold">
                Login
              </Link>
              <Link href="#" className="block py-2 font-semibold">
                Track My Order
              </Link>
              <Link href="#" className="block py-2 font-semibold">
                International Delivery
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DrawerJSX;
