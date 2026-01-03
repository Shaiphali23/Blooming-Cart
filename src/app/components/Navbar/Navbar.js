"use client";

import WebNavbar from "./WebNavbar";
import MobNavbar from "./MobNavbar";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[999] w-full">
      <WebNavbar />
      <MobNavbar />
    </div>
  );
};

export default Navbar;
