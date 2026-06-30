"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeroAnimations } from "@/hooks/useHeroAnimations";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import Paragraph from "../typography/Paragraph";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C12.6667 5.66667 14 7.83333 16 9.5C18 11.1667 19 13 19 15C19 16.8565 18.2625 18.637 16.9497 19.9497C15.637 21.2625 13.8565 22 12 22C10.1435 22 8.36301 21.2625 7.05025 19.9497C5.7375 18.637 5 16.8565 5 15C5 13.9181 5.35089 12.8655 6 12C6 12.663 6.26339 13.2989 6.73223 13.7678C7.20107 14.2366 7.83696 14.5 8.5 14.5C9.16304 14.5 9.79893 14.2366 10.2678 13.7678C10.7366 13.2989 11 12.663 11 12C11 10 9.5 9 9.5 7C9.5 5.66667 10.3333 4.33333 12 3Z" stroke="#F95C5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "12,500+ readers",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.74V4.67001C22 3.47001 21.02 2.58001 19.83 2.68001H19.77C17.67 2.86001 14.48 3.93001 12.7 5.05001L12.53 5.16001C12.24 5.34001 11.76 5.34001 11.47 5.16001L11.22 5.01001C9.44 3.90001 6.26 2.84001 4.16 2.67001C2.97 2.57001 2 3.47001 2 4.66001V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z" stroke="#F95C5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 5.48999V20.49" stroke="#F95C5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.75 8.48999H5.5" stroke="#F95C5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.5 11.49H5.5" stroke="#F95C5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "150+ articles",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2V5" stroke="#F95C5B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 2V5" stroke="#F95C5B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.5 9.08997H20.5" stroke="#F95C5B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#F95C5B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.6937 13.7H15.7027" stroke="#F95C5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.6937 16.7H15.7027" stroke="#F95C5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.9945 13.7H12.0035" stroke="#F95C5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.9945 16.7H12.0035" stroke="#F95C5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.29529 13.7H8.30427" stroke="#F95C5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.29529 16.7H8.30427" stroke="#F95C5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Weekly updates",
  },
];

interface BlogHeroProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}

const BlogHero: React.FC<BlogHeroProps> = ({ searchQuery = "", onSearchChange }) => {
  useHeaderAnimation();
  useHeroAnimations("animation2");

  const homeHeroSecRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroEl = homeHeroSecRef.current;

    // Fallback — ensure clip-path fully opens even if GSAP is slow
    const fallbackTimer = setTimeout(() => {
      if (heroEl && heroEl.style.clipPath !== "inset(0% 0% 0% 0%)") {
        heroEl.style.clipPath = "inset(0% 0% 0% 0%)";
        [badgeRef, headingRef, paragraphRef, searchRef, statsRef].forEach((r) => {
          if (r.current) {
            r.current.style.opacity = "1";
            r.current.style.transform = "none";
          }
        });
      }
    }, 2500);

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Clip-path wipe — reveal the hero section from top
    tl.to(heroEl, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power2.inOut" }, 0);

    // 2. Staggered content entrance
    tl.to(badgeRef.current,     { opacity: 1, y: 0, duration: 0.6 }, 0.3);
    tl.to(headingRef.current,   { opacity: 1, y: 0, duration: 0.75 }, 0.45);
    tl.to(paragraphRef.current, { opacity: 1, y: 0, duration: 0.65 }, 0.6);
    tl.to(searchRef.current,    { opacity: 1, y: 0, scale: 1, duration: 0.6 }, 0.72);
    tl.to(statsRef.current,     { opacity: 1, y: 0, duration: 0.6 }, 0.85);

    return () => {
      clearTimeout(fallbackTimer);
      tl.kill();
    };
  }, []);

  return (
    <div ref={homeHeroSecRef} style={{ clipPath: "inset(0% 0% 100% 0%)" }}>
      <div className="pinned-section-1">
        <div className="top-section md:h-6 h-8" />

        <section className="owner-inventory-hero rounded-b-[40px] px-3 md:px-5 lg:px-10 w-full z-50">
          {/* Corner shapes — same as about hero */}
          <div className="owner-inventory-hero__home flex items-center justify-start lg:justify-center lg:items-center w-[63%] ml-0 lg:mx-auto relative inset-x-0">
            <div className="owner-inventory-hero__shape-left hidden lg:block relative w-1/2 2xl:w-[400px] h-20 bg-[#F3F4F6] rounded-tl-[40px] owner-inventory-hero__border-left-top">
              <div className="absolute left-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-br-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>
            <div className="owner-inventory-hero__shape-right relative w-40 rounded-tr-[40px] rounded-tl-[40px] lg:rounded-tl-none h-20 md:w-1/2 2xl:w-[400px] lg:h-20 bg-[#F3F4F6] lg:rounded-tr-[40px] owner-inventory-hero__border-right-top top-right">
              <div className="absolute right-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
            </div>
          </div>

          {/* Hero body */}
          <div className="md:py-[1px] bg-[#F3F4F6] rounded-[20px] lg:rounded-[40px]">
            <div
              className="owner-inventory-hero__bottom hero-bg-circle relative overflow-hidden flex flex-col items-center justify-center w-full pt-10 pb-10 md:py-[76px] lg:py-16 px-3.5 md:px-7 bg-[#F3F4F6] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] backdrop-blur-[374px]"
              style={{ ["--hero-bg" as any]: "url('/assets/home-page-images/hero-bg.webp')" } as React.CSSProperties}
            >
              <div className="relative z-[2] owner-inventory-hero__content flex flex-col items-center justify-center w-full wrapper gap-7 md:gap-8">


                {/* Main heading */}
                <h1
                  ref={headingRef}
                  style={{ opacity: 0, transform: "translateY(50px)" }}
                  className="text-center xl:text-[64px] lg:text-5xl md:text-[40px] text-4xl xl:leading-[76px] lg:leading-[60px] leading-[48px] font-semibold text-[#231F20] font-['Onest']"
                >
                  Insights for{" "}
                  <span className="text-[#795CF5]">Inventory</span>{" "}
                  Excellence
                </h1>

                {/* Description */}
                <div
                  ref={paragraphRef}
                  style={{ opacity: 0, transform: "translateY(30px)" }}
                >
                  <Paragraph className="text-center mx-auto max-w-2xl">
                    Discover expert strategies, industry trends, and practical tips to optimize
                    your inventory management and accelerate business growth.
                  </Paragraph>
                </div>

                {/* Search bar — glassmorphism pill */}
                <div
                  ref={searchRef}
                  style={{ opacity: 0, transform: "translateY(20px) scale(0.97)" }}
                  className="backdrop-blur-[11px] bg-[rgba(255,255,255,0.6)] border-[2.5px] border-white flex gap-3 h-14 items-center px-6 rounded-full w-full max-w-[516px] shadow-[0_4px_24px_0_rgba(121,92,245,0.08)] transition-shadow duration-200 hover:shadow-[0_4px_32px_0_rgba(121,92,245,0.18)]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#795CF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 22L20 20" stroke="#795CF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange?.(e.target.value)}
                    placeholder="Search articles, topics, or keywords..."
                    className="flex-1 bg-transparent text-base font-['Onest'] text-[#231F20] placeholder:text-[#888] outline-none min-w-0"
                  />
                </div>

                {/* Stats row */}
                <div
                  ref={statsRef}
                  style={{ opacity: 0, transform: "translateY(20px)" }}
                  className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
                >
                  {STATS.map(({ icon, label }, i) => (
                    <div key={label} className="flex items-center gap-2.5">
                      {/* Divider between stats */}
                      {i > 0 && (
                        <span className="hidden md:block w-px h-4 bg-[#D1D5DB] mr-4" />
                      )}
                      {icon}
                      <span className="text-base font-medium font-['Onest'] text-[#231F20] whitespace-nowrap">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogHero;
