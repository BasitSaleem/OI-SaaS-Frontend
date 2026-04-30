"use client"; // ✅ Required if you're in Next.js App Router

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PricingTabs from "./PricingTabs";
import PricingCards from "./PricingCards";
import IndustryTabs from "./IndustryTabs";
import {
  pricingConfig,
  BusinessType,
  PRICING_HERO_CONTENT,
} from "./tableConfig";
import Paragraph from "../typography/Paragraph";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PricingHeroProps {
  activeTab: "monthly" | "yearly";
  onTabChange: (tab: "monthly" | "yearly") => void;
  activeBusinessTab: BusinessType;
  onBusinessTabChange: (tab: BusinessType) => void;
}

const PricingHero: React.FC<PricingHeroProps> = ({
  activeTab,
  onTabChange,
  activeBusinessTab,
  onBusinessTabChange,
}) => {
  useEffect(() => {
    let heroBreak = gsap.matchMedia();

    // ✅ Mobile
    heroBreak.add("(min-width: 320px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          start: "top top",
          end: "+=" + window.innerHeight * 1,
          trigger: ".pinned-section-1",
          scrub: 2,
        },
      });

      tl.to(".mobile-iventory", { width: "100%", duration: 1 }, 0);
      tl.to("header", { y: -30, duration: 1 }, 1);
    });


    // ✅ Desktop
    heroBreak.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          start: "top top",
          end: "+=" + window.innerHeight * 1,
          trigger: ".pinned-section-1",
          scrub: 2,
        },
      });

      // tl.to("header", { y: -20, duration: 1.5, ease: "power2.out" }, 0);
      tl.to(".inventory-menu", { width: "100%", duration: 1 }, 0);
      tl.to(".header-right-col", { x: "0%", duration: 1 }, 0);
      tl.to(".header-left-col", { x: "0%", duration: 1 }, 0);
      tl.to(".top-section", { autoAlpha: 0, duration: 1 }, 0);
      tl.to(
        ".owner-inventory-hero",
        {
          y: -10,
          paddingLeft: 0,
          paddingRight: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        0,
      );
    });

    return () => {
      heroBreak.revert();
    };
  }, []);

  return (
    <>
      <div className="">
        <div className="top-section md:h-6 h-8"></div>
        <section className="owner-inventory-hero  rounded-b-[40px] px-3 md:px-5 lg:px-10 overflow-hidden">
          <div className="owner-inventory-hero__home flex items-center justify-start lg:justify-center lg:items-center w-[63%] ml-0 lg:mx-auto relative inset-x-0">
            {/* Left Shape (only visible on md+) */}
            <div className="hidden lg:block relative w-1/2 2xl:w-[400px] h-20 bg-[var(--background-halfwhite)] rounded-tl-[40px]">
              <div className="absolute left-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-br-[40px] shadow-[0_2.5rem_0_0_var(--background-halfwhite)]" />
            </div>

            {/* Right Shape */}
            <div className="relative w-40 rounded-tr-[30px] lg:rounded-tr-[40px] rounded-tl-[20px] lg:rounded-tl-none h-20 md:w-1/2 2xl:w-[400px] lg:h-20 bg-[var(--background-halfwhite)] ">
              <div className="absolute right-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_var(--background-halfwhite)]" />
            </div>
          </div>

          <div className="p-[1px] bg-[var(--background-halfwhite)] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] ">
            <div
              className="relative hero-bg-circle  flex flex-col items-center justify-center w-full overflow-hidden pt-10 pb-6 md:py-14 lg:py-0 lg:pb-10 bg-[var(--background-halfwhite)] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] backdrop-blur-[374px] "
              style={
                {
                  // background image is painted in CSS ::before using this variable
                  ["--hero-bg" as any]:
                    "url('/assets/home-page-images/hero-bg.webp')",
                } as React.CSSProperties
              }
            >
              <div className="relative z-[2] owner-inventory-hero__content flex flex-col items-center justify-center w-full wrapper px-4">
                <h1 className="text-center xl:text-[64px] md:text-5xl  text-4xl xl:leading-[76px] lg:leading-[60px] leading-[48px] font-semibold text-[var(--text-dark)] font-['Onest'] lg:mt-[70px] xl:mb-8 lg:mb-6 mb-5">
                  {PRICING_HERO_CONTENT.title}
                </h1>

                <Paragraph className="text-center max-w-[946px]">
                  {PRICING_HERO_CONTENT.description}
                </Paragraph>

                {/* Tabs */}
                <PricingTabs
                  activeTab={activeTab}
                  onTabChange={onTabChange}
                  variant="tabs"
                />

                {/* Industry Tabs */}
                <IndustryTabs
                  activeTab={activeBusinessTab}
                  onTabChange={onBusinessTabChange}
                />

                {/* Pricing Cards */}
                <div className="w-full mt-3 md:mt-5 xl:mt-5">
                  <PricingCards
                    plans={pricingConfig[activeBusinessTab].plans}
                    isYearly={activeTab === "yearly"}
                    industryKeyFeatures={
                      pricingConfig[activeBusinessTab].categories.find(
                        (c: any) => c.name === "Key Features",
                      )?.features
                    }
                    industry={activeBusinessTab}
                  />
                </div>

                <div className="bg-white/24 w-full flex items-center justify-center border border-white backdrop-blur-md rounded-[16px] lg:rounded-[24px] p-2 lg:px-6 py-4 overflow-x-auto lg:overflow-x-visible gap-4 no-scrollbar snap-x snap-mandatory lg:snap-none mt-[60px]">
                  <Paragraph className="flex items-start md:items-center justify-center  gap-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.1375 13.9C26.1375 20.0125 21.7 25.7375 15.6375 27.4125C15.225 27.525 14.775 27.525 14.3625 27.4125C8.29998 25.7375 3.86249 20.0125 3.86249 13.9V8.41248C3.86249 7.38748 4.63751 6.22498 5.60001 5.83748L12.5625 2.98752C14.125 2.35002 15.8875 2.35002 17.45 2.98752L24.4125 5.83748C25.3625 6.22498 26.15 7.38748 26.15 8.41248L26.1375 13.9Z"
                        stroke="url(#paint0_linear_6938_17787)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 15.625C16.3807 15.625 17.5 14.5057 17.5 13.125C17.5 11.7443 16.3807 10.625 15 10.625C13.6193 10.625 12.5 11.7443 12.5 13.125C12.5 14.5057 13.6193 15.625 15 15.625Z"
                        stroke="url(#paint1_linear_6938_17787)"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 15.625V19.375"
                        stroke="url(#paint2_linear_6938_17787)"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_6938_17787"
                          x1="15.0062"
                          y1="2.5094"
                          x2="15.0062"
                          y2="27.4969"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#795CF5" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_6938_17787"
                          x1="15"
                          y1="10.625"
                          x2="15"
                          y2="15.625"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#795CF5" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_6938_17787"
                          x1="15.5"
                          y1="15.625"
                          x2="15.5"
                          y2="19.375"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#795CF5" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <span className="text-[var(--text-dark)]"><span className="font-semibold">Payments are processed securely.</span> Subscriptions renew automatically unless canceled.</span>
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingHero;
