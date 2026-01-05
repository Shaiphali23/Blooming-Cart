import Image from "next/image";
import Link from "next/link";

const COLOR = process.env.NEXT_PUBLIC_BG_COLOR;

const TopSection = () => {
  return (
    <div className="w-full">
      <div className="bg-[#f4f2f7]">
        {/* Offer Text */}
        <Link href="#" className="block">
          <p
            className="py-[25px] text-lg font-bold text-center cursor-pointer"
            style={{ color: COLOR }}
          >
            SAVE UP TO 40% ON TOP FLOWERS & GIFTS! | SHOP NOW &gt;
          </p>
        </Link>

        {/* Hero Image */}
        <div className="w-[95%] mx-auto">
          <Image
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0e98fd147de5199a/631a53cd10c00a57bb0cd53d/birthday-flowers-hero-fy23-fall.jpg?quality=75&auto=webp&optimize={medium}"
            alt="Birthday flowers"
            width={1400}
            height={280}
            className="w-full h-[280px] object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
