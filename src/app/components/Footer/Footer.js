import Image from "next/image";
import Link from "next/link";
import BloomingCart from "../../assets/images/BloomingCart.png";
import { footerLinks } from "@/app/assets/data/footerLinks";

const Footer = () => {
  return (
    <footer className="bg-[#B026FF] pt-12 overflow-x-hidden">
      <div className="grid w-[95%] mx-auto gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-[120px] h-[120px] rounded-full bg-white flex items-center justify-center shadow-lg">
            <Image src={BloomingCart} alt="Blooming Cart Logo" width={120} />
          </div>
        </div>

        {/* Company */}
        <FooterColumn title="Company" links={footerLinks.company} />

        {/* Explore */}
        <FooterColumn title="Explore" links={footerLinks.explore} />

        {/* Policies */}
        <FooterColumn title="Policies" links={footerLinks.policies} />

        {/* Help */}
        <FooterColumn title="Help" links={footerLinks.help} />
      </div>

      <hr className="my-6 border-white/30" />

      <div className="w-[90%] mx-auto text-center text-white text-sm pb-6">
        <p>© {new Date().getFullYear()} Blooming Cart. All rights reserved.</p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-white text-[22px] font-bold mb-3">{title}</h3>
    <ul className="space-y-2 text-md text-white">
      {links.map(({ label, href }) => (
        <li key={label}>
          <Link href={href} className="hover:underline">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
