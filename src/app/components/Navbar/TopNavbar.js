import Image from "next/image";
import { Brand_Images } from "../../assets/Data";

const BG_COLOR = process.env.NEXT_PUBLIC_BG_COLOR;

const TopNavbar = () => {
  return (
    <div className="w-full">
      {/* Top Announcement Bar */}
      <div
        className="h-[25px] flex items-center justify-center"
        style={{ backgroundColor: BG_COLOR }}
      >
        <div className="w-[95%] text-white text-xs">
          <span
            className="cursor-pointer relative group"
            title="We are working on it"
          >
            INTERNATIONAL DELIVERY
          </span>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center gap-6 py-4">
        {Brand_Images.map((el) => (
          <div key={el.img} className="flex items-center justify-center">
            <Image
              src={el.img}
              alt="Brand Logo"
              width={80}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNavbar;
