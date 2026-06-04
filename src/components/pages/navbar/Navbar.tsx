"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import RightIcons from "./RightIcons";
import Mobileicons from "./Mobileicons";
import SearchField from "./SearchField";

const HEADER_SELECTORS = [
  ".header-left-col",
  ".header-right-col",
  ".inventory-menu",
  ".mobile-iventory",
];

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Pages without a hero section (pricing, privacy, resources, etc.) never call
    // useHeaderAnimation, so the header elements — which start at opacity:0 / translateY(-150px)
    // via CSS inline styles — would stay hidden. Reveal them immediately here.
    if (!document.querySelector(".pinned-section-1")) {
      HEADER_SELECTORS.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "none";
        });
      });
    }
  }, []);

  return (
    <div className="header-animation relative z-[200]">
      <header className="fixed md:top-8 top-8 z-20 w-full transition-colors duration-300 ease-in-out">
        <div className="wrapper relative">
          <nav className="relative flex items-center justify-end lg:justify-center py-2">
            <Logo />
            <Mobileicons />
            <NavItems />
            <RightIcons
              searchOpen={searchOpen}
              setSearchOpen={setSearchOpen}
              setSearchQuery={setSearchQuery}
            />
          </nav>

          <SearchField
            variant="navbar"
            searchOpen={searchOpen}
            setSearchOpen={setSearchOpen}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
