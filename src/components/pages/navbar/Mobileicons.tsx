'use client';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Link from 'next/link';

const Mobileicons = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleClick = () => {
    setOpenMobileMenu(prev => !prev);
  };

  return (
    <div className="flex items-center justify-end gap-2 p-1.5 rounded-full bg-white shadow-[0px_0px_10px_0px_rgba(var(--text-dark-rgb),0.15)] lg:hidden mobile-iventory" style={{ opacity: 0, transform: "translateY(-150px)" }}>
      <Link
        href="https://app.ownersinventory.com/sign-up?app=OG"
        className="px-4 py-2 text-sm font-bold text-white bg-[var(--text-dark)] rounded-full whitespace-nowrap"
      >
        Start for Free
      </Link>

      <button
        id="burger-toggle"
        className="relative z-[1100]"
        onClick={handleClick}
        aria-expanded={openMobileMenu}
        aria-controls="mobile-menu"
      >
        <img
          src="/assets/header-images/burger-icon.svg"
          alt="Menu"
          width={22}
          height={20}
          className={`w-5.5 h-5 me-4 md:me-5 ${openMobileMenu ? 'hidden' : ''}`}
        />
        <img
          src="/assets/header-images/cross-icon.png"
          alt="Close"
          width={18}
          height={16}
          className={`w-4.5 h-4 ${openMobileMenu ? '' : 'hidden'}`}
        />
      </button>


      {openMobileMenu && <MobileMenu open={openMobileMenu} onClose={() => setOpenMobileMenu(false)} />}



    </div>
  );
};

export default Mobileicons;
