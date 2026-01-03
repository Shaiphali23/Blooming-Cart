import Image from "next/image";
import Link from "next/link";
import BloomingCart from "../../assets/images/BloomingCart.png";

const Footer = () => {
  return (
    <footer className="bg-[#B026FF] pt-12 overflow-x-hidden">
      {/* Main Footer Grid */}
      <div
        className="grid w-[95%] mx-auto gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-5"
      >
        {/* LOGO */}
        <div className="flex justify-center mx-auto lg:justify-start">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              src={BloomingCart}
              alt="Blooming Cart Logo"
              width={120}
              height={120}
              className="object-cover"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-lg font-bold tracking-wider mb-3">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-white">
            {[
              "About",
              "Jobs",
              "List your property",
              "Partnerships",
              "Newsroom",
              "Investor Relations",
              "Roaming Gnome Store",
              "Advertising",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white text-lg font-bold tracking-wider mb-3">
            Explore
          </h3>
          <ul className="space-y-2 text-sm text-white">
            {[
              "Hotels in United States",
              "Vacation Rentals in United States",
              "Vacation Packages in United States",
              "Domestic Flights",
              "Car Rentals in United States",
              "Travelocity Reviews",
              "Travelocity Coupons",
              "Unique Places to Stay",
              "Travel Blog",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-white text-lg font-bold tracking-wider mb-3">
            Policies
          </h3>
          <ul className="space-y-2 text-sm text-white">
            {[
              "Privacy Policy",
              "Terms of Use",
              "Accessibility",
              "Do not sell my personal information",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white text-lg font-bold tracking-wider mb-3">
            Help
          </h3>
          <ul className="space-y-2 text-sm text-white">
            {[
              "Support",
              "Cancel your hotel or vacation rental booking",
              "Cancel your flight",
              "Refund timelines, policies & processes",
              "Use a Travelocity coupon",
              "Coronavirus Disease (COVID-19)",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="my-6 border-white/30" />

      {/* License */}
      <div className="w-[90%] mx-auto text-center text-white text-sm pb-6">
        <p>
          © {new Date().getFullYear()} 1-800-Flowers.com, Inc., Jericho, NY
          Family of Brands
        </p>
        <p>
          Design are trademarks or registered trademarks of Blooming Cart LLC.
          CST# 2056372-50.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
