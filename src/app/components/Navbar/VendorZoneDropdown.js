"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  FaChevronDown,
  FaStore,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const VendorZoneDropdown = () => {
  const [zoneOpen, setZoneOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setZoneOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setZoneOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setZoneOpen(false), 150);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ================= BUTTON ================= */}
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:border-green-500 hover:shadow-md transition-all cursor-pointer">
        <FaStore className="text-green-600 text-sm" />
        <span className="text-sm font-semibold text-gray-800">Vendor Zone</span>
        <motion.span
          animate={{ rotate: zoneOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown className="text-gray-500 text-xs" />
        </motion.span>
      </button>

      {/* ================= DROPDOWN ================= */}
      <AnimatePresence>
        {zoneOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden"
          >
            {/* ===== ACTIONS ===== */}
            <div className="p-3 space-y-1">
              <Link
                href="/vendor/register"
                onClick={() => setZoneOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-50 transition"
              >
                <FaUserPlus className="text-green-600 text-lg" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    Become a Vendor
                  </p>
                  <p className="text-xs text-gray-500">Start selling with us</p>
                </div>
              </Link>

              <Link
                href="/vendor/login"
                onClick={() => setZoneOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition"
              >
                <FaSignInAlt className="text-blue-600 text-lg" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    Vendor Login
                  </p>
                  <p className="text-xs text-gray-500">Access your dashboard</p>
                </div>
              </Link>
            </div>

            {/* ===== FOOTER ===== */}
            <div className="px-4 py-3 bg-gray-50 border-t text-center">
              <p className="text-xs text-gray-500">
                Need help?{" "}
                <Link
                  href="/contacts"
                  className="text-green-600 font-medium hover:underline"
                >
                  Contact Support
                </Link>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VendorZoneDropdown;
