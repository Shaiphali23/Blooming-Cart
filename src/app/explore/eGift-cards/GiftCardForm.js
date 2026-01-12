"use client";

import { useState } from "react";

const GiftCardForm = () => {
  const [activeTab, setActiveTab] = useState("friend");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white shadow-md border rounded-md p-8">
        {/* Info */}
        <p className="text-xs text-center text-gray-600 mb-4">
          All fields are required, unless they are marked optional.
        </p>

        {/* Heading */}
        <div className="border border-black rounded-md py-4 mb-6">
          <h1 className="text-2xl font-bold text-center">
            Who is the gift card for?
          </h1>
        </div>

        {/* Helper text */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-700 mb-8">
          <span>📄</span>
          <p>
            Choose <strong>‘for me’</strong> to download and print digital cards
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center border-b mb-8 gap-6">
          <button
            onClick={() => setActiveTab("friend")}
            className={`pb-2 font-semibold ${
              activeTab === "friend"
                ? "border-b-2 border-purple-600 text-black"
                : "text-gray-400"
            }`}
          >
            A FRIEND
          </button>

          <button
            onClick={() => setActiveTab("me")}
            className={`pb-2 font-semibold ${
              activeTab === "me"
                ? "border-b-2 border-purple-600 text-black"
                : "text-gray-400"
            }`}
          >
            FOR ME
          </button>
        </div>

        {/* Inputs → ONLY for A FRIEND */}
        {activeTab === "friend" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Their name</label>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-md px-4 py-3 focus:outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Your name</label>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-md px-4 py-3 focus:outline-none focus:border-purple-600"
              />
            </div>
          </div>
        )}

        {/* Button → ALWAYS visible */}
        <div className="mt-10 flex justify-center">
          <button className="bg-purple-700 hover:bg-purple-800 text-black font-semibold px-10 py-3 rounded-md tracking-wide">
            SEND A DIGITAL CARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCardForm;
