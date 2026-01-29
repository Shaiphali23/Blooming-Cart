"use client";

import CardSection from "./components/landingPage/CardSection";
import ImageSection from "./components/landingPage/ImageSection";
import SearchSection from "./components/landingPage/SearchSection";
import TopSection from "./components/landingPage/TopSection";
import ReviewSection from "./components/landingPage/ReviewSection";
import ValentineSection from "./components/landingPage/ValentineSection";
import TwoColumnsLayout from "./components/landingPage/TwoColumnsLayout";
import FeatureGrid from "./components/landingPage/FeatureGrid";
import InfoNavigationGrid from "./components/landingPage/InfoNavigationGrid";

import Flower_Data1, {
  Flower_Data2,
  Flower_Data3,
} from "./assets/Data";

export default function HomePage() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=00000000000&text=Hello+there%21&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <>
      {/* ================= FLOATING ACTION BUTTONS ================= */}
      <div className="fixed bottom-6 right-6 z-[99999] flex flex-col gap-4">
        {/* Scroll To Top */}
        <button
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center shadow-lg hover:bg-gray-700 transition"
        >
          {/* UP ARROW SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 4l-7 7h4v9h6v-9h4z" />
          </svg>
        </button>

        {/* WhatsApp */}
        <button
          onClick={handleWhatsAppClick}
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition"
        >
          {/* WHATSAPP SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M16.003 3.2c-7.1 0-12.8 5.6-12.8 12.5 0 2.2.6 4.3 1.7 6.1L3 29l7.4-1.9c1.8 1 3.9 1.6 6.1 1.6 7.1 0 12.8-5.6 12.8-12.5S23.1 3.2 16.003 3.2zm6.9 17.4c-.3.8-1.7 1.5-2.4 1.6-.6.1-1.4.2-4.6-1-3.8-1.5-6.2-5.3-6.4-5.6-.2-.3-1.6-2.1-1.6-4 0-1.9 1-2.9 1.4-3.3.4-.4.8-.5 1.1-.5h.8c.2 0 .5-.1.8.6.3.7 1.1 2.6 1.2 2.8.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.6.6-.2.2-.4.4-.2.8.2.4.9 1.5 1.9 2.4 1.3 1.1 2.3 1.4 2.7 1.6.4.2.6.1.9-.1.3-.3 1-1.2 1.3-1.6.3-.4.6-.3.9-.2.4.1 2.5 1.2 2.9 1.4.4.2.6.3.7.5.1.2.1.9-.2 1.7z" />
          </svg>
        </button>
      </div>

      {/* ================= PAGE CONTENT ================= */}
      <div className="container mx-auto px-4 mb-[100px]">
        <TopSection />
        <SearchSection />

        <CardSection
          details={Flower_Data1}
          title="Send Flowers & Exclusive Gifts"
        />

        <ImageSection img="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt64459623f6fc0d1d/63c6bd5c1bb5c94c86d1ce46/deal-of-the-day-floral-embrace-zone-10-banner-fy23-3999.jpg?quality=70&auto=webp&optimize={medium}" />

        <CardSection
          details={Flower_Data2}
          title="Offer Comfort With Sympathy Flowers & Gifts"
        />

        <ImageSection img="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc6be2f7123f7d41d/63a5fb562735331089d8a157/marketplace-gifts-and-more-zone-10-banner-spa-fy23.jpg?quality=70&auto=webp&optimize={medium}" />

        <CardSection
          details={Flower_Data3}
          title="Explore Our Self-Care Essentials"
        />

        <ImageSection img="https://images.contentstack.io/v3/assets/blt89dbf1c763ec00a6/bltfa36f70965e48481/6222b7ed6f0333490a0e7fd1/1400x200_IMCBnr_NonMem2.jpg?quality=80&auto=webp&optimze={medium}" />

        <ReviewSection />
        <ValentineSection />
        <TwoColumnsLayout />
        <FeatureGrid />
        <InfoNavigationGrid />
      </div>
    </>
  );
}
