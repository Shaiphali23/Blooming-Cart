"use client";

import React from "react";
import { useState } from "react";

const page = () => {
  const faqs = [
    {
      question: "How does the Marketplace work?",
      answer:
        "The Marketplace is a self service portal, for unique sellers to upload their one-of-a-kind products. Products are approved based on their fit into the 1800Flower.com Marketplace assortment. Sellers manage product set up, price, shipping and inventory all on the platforms.",
    },
    {
      question: "What is the commission structure to participate?",
      answer:
        "The Marketplace is 25% commission. If there’s a promotional discount, that’s deducted first and then the 25% is calculated — i.e. selling price + shipping amount x .25 = commission or selling price + shipping amount – discount x .25 = commission.",
    },
    {
      question: "How do I get paid?",
      answer:
        "Sellers are paid net 30. When setting up your account on the platform, you will complete your bank information where you would like to be direct deposited.",
    },
    {
      question: "What can I sell on 1800Flowers?",
      answer:
        "With 1800Flowers.com marketplace we are looking for unique products to offer to our customers. Products that tell a story, send a heartfelt message to the special people in their lives. Baby, children and food products require additional insurance along with compliance documentation before being uploaded.",
    },
    {
      question: "What is Celebrations Passport?",
      answer:
        "The Passport program is our enterprise shipping program. Customers in the Passport program receive free ground shipping. Not all products are Passport eligible. By opting in for Passport, your products become Passport eligible. If you opt in for Passport you would absorb the shipping cost. As you can expect, Passport customers look for Passport eligible items before non-eligible items for purchase.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-[#e0c7b8]">
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
              Home / Marketplace Sellers
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Marketplace Sellers
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Celebrate every moment with Blooming-Cart’s handcrafted gift
              baskets.
            </p>
          </div>
        </div>
      </div>

      {/* Seller Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center md:text-left">
          Our Trusted Sellers
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side Image */}
          <div className="md:w-1/2 w-full">
            <img
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7d4d5a342c285147/60c910920504174955a9708f/marketplace-dt-hero-img-500x334.jpg"
              alt="Trusted Sellers"
              className="w-full h-auto rounded-3xl shadow-xl object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Side Content */}
          <div className="md:w-1/2 w-full flex flex-col items-center text-center gap-6 bg-[#C6E665] p-10 rounded-3xl shadow-lg">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Meet Our Sellers
            </h3>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-md">
              Express, connect, and celebrate with millions of customers through
              our trusted seller community.
            </p>

            <button className="uppercase mt-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-all duration-300 font-semibold shadow-md hover:shadow-xl tracking-wide">
              Start Selling
            </button>
          </div>
        </div>
      </div>

      {/* billion Section */}
      <div className="my-10 max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-start">
        {/* LEFT CONTENT */}
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl md:text-xl font-serif text-gray-900 leading-tight">
              # Join our exclusive iconic brands & community of sellers, backed
              by more than
            </h2>

            <h3 className="text-5xl md:text-5xl font-serif mt-4 text-gray-900">
              2 billion in annual sales.
              <sup className="text-base align-super">*</sup>
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              *trailing twelve months
            </p>
          </div>

          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf300fcc2c254b65a/60c90fa6b085be4819b86cd2/marketplace-dt-logos-800x77.jpg"
            alt="Brand logos"
            className="w-full max-w-3xl"
          />

          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
            With an all-star family of brands behind you, you’ll gain valuable
            exposure while building on our mission to deliver smiles!
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-end">
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt9239764a29c90d84/60c90fb05a50fc37590b19ee/marketplace-dt-side-img-400x580.jpg"
            alt="Seller Community"
            className="w-[260px] md:w-[300px] object-cover"
          />
        </div>
      </div>

      {/* Content Section  */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Section Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Benefits & Community
          </h3>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-4 gap-10">
            {/* Benefit Item */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Reach new customers
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Reach new customers on our multi-brand portal with your
                one-of-a-kind creations and grow your business. And that’s just
                the beginning…
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                All Eyes on You
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Increase brand awareness and leverage marketing power that
                drives millions of visitors to our multi-branded e-commerce
                portal.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Boost It Up
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Opportunity to drive revenue & profit growth and experience
                sustainable long-term growth.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Tools of the Trade
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Cutting-edge technology, marketing and easy-to-manage seller
                portal to drive discovery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="my-20 max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-y-10 md:gap-x-12 items-start">
        {/* LEFT IMAGE */}
        <div className="flex justify-end">
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt5ed66375ac50429e/60c911074e87de56c81228cc/marketplace-dt-share-story-top-left-600x600.jpg"
            alt="Seller Community"
            className="w-[260px] md:w-[300px] object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-10">
          <h3 className="text-5xl md:text-5xl font-serif mt-4 text-gray-900">
            We want to share your story
          </h3>

          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
            Whether you’re just starting out, or already have a loyal customer
            base, we’ll help you broaden your reach even further. By featuring
            you and your unique designs on our site, you can grow your audience,
            while showcasing the passion you have for your craft.
          </p>

          <button className="bg-[#E3F3E3] px-6 py-4 font-semibold">
            START SELLING
          </button>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-[#d7bcd7] my-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-14 flex flex-col gap-10">
          {/* Title */}
          <div className="mx-auto">
            <h2 className="text-3xl font-bold text-black">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-gray-700 text-sm">
              Find answers to the most common questions about our services.
            </p>
          </div>

          {/* Right FAQs */}
          <div className="md:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden bg-white shadow-sm">
                <button
                  className="w-full text-left px-5 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                  onClick={() => toggleIndex(index)}
                >
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-xl font-bold cursor-pointer">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-5 py-4 text-gray-600 border-t">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 bg-gray-50 py-12 px-6 text-center rounded-lg shadow-md max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Ready to grow your brand with us?
        </h2>
        <button className="mt-2 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
          Start Selling
        </button>
      </div>
    </div>
  );
};

export default page;
