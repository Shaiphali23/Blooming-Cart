"use client";

import React from "react";
import flowers from "@/app/assets/images/flower.jpg";
import {
  FaUser,
  FaBoxOpen,
  FaStar,
  FaQuestionCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { useState } from "react";

const cards = [
  {
    title: "Manage Account",
    icon: FaUser,
    items: [
      "Update payment info",
      "Manage my Celebrations Passport",
      "Account settings",
    ],
  },
  {
    title: "My Orders",
    icon: FaBoxOpen,
    items: [
      "View delivery status",
      "Change or modify an order",
      "View order history",
    ],
  },
  {
    title: "Celebrations Passport®",
    icon: FaStar,
    items: [
      "What is Celebrations Passport?",
      "Free shipping & no service fees",
      "Passport account benefits",
    ],
  },
  {
    title: "FAQs",
    icon: FaQuestionCircle,
    items: [
      "Shipping and delivery",
      "Payments, billing & promo codes",
      "How do I cancel an order?",
    ],
  },
  {
    title: "Issue With My Order",
    icon: FaExclamationTriangle,
    items: [
      "My order is late or missing",
      "Item is different than what I ordered",
      "I have another issue",
    ],
  },
];

const faqData = [
  {
    question: "What Happens After I Place An Order?",
    answer:
      "Once your order is placed on the site, you'll see a Thank You Page, which will include your order confirmation number on it. Please make sure to hold onto this number in case you have any questions or issues.",
  },
  {
    question:
      "Is it possible to reduce contact with drivers when they deliver my order?",
    answer:
      "Yes, you can choose contactless delivery during checkout where available.",
  },
  {
    question: "How Do I Use A Promotion Code?",
    answer:
      "You can enter your promotion code during checkout in the promo code field before completing payment.",
  },
  {
    question: "When will my order be delivered?",
    answer:
      "Delivery timing depends on the product and delivery option selected during checkout.",
  },
];

const page = () => {
  // const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="min-h-screen w-full bg-[#fffaf7]">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Blooming Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-16">
            <nav className="text-sm text-gray-200 mb-4">
              Home / Customer Support
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Customer Support
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              We’re here to help with orders, deliveries, and everything in
              between. Reach out to Blooming-Cart anytime for friendly and
              reliable assistance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Need Help? We’re Here for You
            </h2>

            <p className="text-gray-600 mb-6 max-w-md">
              Our customer support team is available to assist you with orders,
              delivery updates, refunds, and any questions about our flowers and
              gifts.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Order Tracking & Updates</li>
              <li>✔ Same-Day Delivery Support</li>
              <li>✔ Easy Returns & Refunds</li>
              <li>✔ 24/7 Customer Assistance</li>
            </ul>
          </div>

          {/* Right Side Logo */}
          <div className="flex md:justify-end justify-center gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img
                src={`${flowers.src}`}
                alt="Blooming Cart Logo"
                className="w-32 h-32 object-contain"
              />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <img
                src={`${flowers.src}`}
                alt="Blooming Cart Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="p-6 bg-white shadow-sm hover:shadow-md transition"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Icon className="text-purple-600 text-lg" />
                  </div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </div>

                {/* Items */}
                <ul className="space-y-2 text-sm text-gray-600">
                  {card.items.map((item, i) => (
                    <li
                      key={i}
                      className="hover:text-purple-600 hover:underline cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div>
          <p className="py-4 text-lg">Popular Questions & Answers</p>

          <div className="p-6 bg-white shadow-sm max-w-7xl">
            {/* Questions */}
            <ul className="space-y-3 text-sm flex flex-row gap-4">
              {faqData.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer text-xl transition ${
                    activeIndex === index
                      ? "text-purple-600"
                      : "text-gray-700 hover:text-purple-600"
                  }`}
                >
                  {item.question}
                </li>
              ))}
            </ul>

            {/* Answer */}
            <div className="mt-6 pt-4 border-t">
              <p className="text-lg text-gray-600 leading-relaxed">
                {faqData[activeIndex].answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
