"use client";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface FooterProps {
  gradientBackground?: string;
}

const DEFAULT_GRADIENT_BACKGROUND = `
 
  radial-gradient(900px 650px at 12% 8%,
    rgba(207, 181, 249, 0.55) 0%,
    rgba(207, 181, 249, 0.18) 45%,
    rgba(207, 181, 249, 0.00) 75%
  ),
  radial-gradient(900px 650px at 88% 10%,
    rgba(160, 215, 255, 0.55) 0%,
    rgba(160, 215, 255, 0.18) 45%,
    rgba(160, 215, 255, 0.00) 75%
  ),
  linear-gradient(
    135deg,
    rgba(210, 185, 255, 0.75) 0%,
    rgba(175, 205, 255, 0.70) 45%,
    rgba(160, 230, 245, 0.65) 100%
  )
`;

const Footer: React.FC<FooterProps> = ({ gradientBackground }) => {
  const pathname = usePathname();
   const isContactPage = pathname.includes("/contact") || pathname.includes("coming-soon");

  return (
    <footer
      className={`owner-inventory-footer relative pb-10 bg-white/50 backdrop-blur-xl ${
        isContactPage
          ? "pt-10 mt-12"
          : "-mt-[131px] pt-[251px] lg:pt-[291px]"
      }`}
      style={{ background: gradientBackground || DEFAULT_GRADIENT_BACKGROUND }}
    >
      <div className="flex wrapper flex-col gap-10 bg-[var(--white-color)] px-6 py-10 xl:px-[60px] xl:py-[60px] rounded-[40px]">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          {/* Logo */}
          <Link href={'/'} className="owner-inventery-footer__logo">
            <Image
              src="/assets/owner-inventory-logo.svg"
              alt="Owner's logo"
              width={130}
              height={40}
              className="w-[130px] h-10 md:w-[97px] md:h-[30px] lg:w-[110px] xl:w-[130px] lg:h-10"
              loading="lazy"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 xl:gap-6">
            {[
              { text: "Privacy Policy", href: "/privacy-policy" },
              { text: "Terms & Conditions", href: "/terms-and-conditions" },
              { text: "About Us", href: "/about" },
              { text: "Contact Us", href: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-sm whitespace-nowrap md:text-[12px] lg:text-xs xl:text-sm font-semibold font-['Onest'] text-[var(--text-dark)] cursor-pointer"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 md:gap-[10px] lg:gap-4 xl:gap-6">
            {[
              { platform: "facebook", href: "https://www.facebook.com/ownersinventory/" },
              { platform: "instagram", href: "https://www.instagram.com/ownersinventory/" },
              // { platform: "twitter", href: "#" },
              { platform: "linkdn", href: "https://www.linkedin.com/company/owners-inventory/" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-7 h-7 md:w-[17px] md:h-[17px] lg:w-7 lg:h-7"
              >
                <Image
                  src={`/assets/footer/${social.platform}-logo.svg`}
                  alt={`${social.platform} logo`}
                  width={28}
                  height={28}
                  className="w-full"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[var(--text-dark)] rounded-full" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
          <p className="text-xs lg:text-base font-normal font-['Onest'] text-[var(--text-dark)]">
            ©2026 Owners Inventory - All rights reserved
          </p>
          {/* <p className="text-xs lg:text-base font-normal font-['Onest'] text-[var(--text-dark)]">
            A product of{" "}
            <Link href="#" className="font-semibold font-['Onest'] underline cursor-pointer">
              Owners Universe
            </Link>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;