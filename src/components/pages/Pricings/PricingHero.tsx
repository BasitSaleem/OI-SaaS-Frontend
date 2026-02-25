"use client"; // ✅ Required if you're in Next.js App Router

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PricingTabs from "./PricingTabs";
import PricingCards from "./PricingCards";
import IndustryTabs from "./IndustryTabs";
import {
  PRICING_DATA,
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

    // ✅ Tablet
    // heroBreak.add("(min-width: 768px) and (max-width: 1023px)", () => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       scroller: "body",
    //       start: "top top",
    //       end: "+=" + window.innerHeight * 1,
    //       trigger: ".pinned-section-1",
    //       scrub: 2,
    //     },
    //   });

    //   tl.to("header", { y: -20, duration: 1.5, ease: "power2.out" }, 0);
    //   tl.to(".inventory-menu", { width: "100%", duration: 1 }, 0);
    //   tl.to(".header-right-col", { x: "0%", duration: 1 }, 0);
    //   tl.to(".header-left-col", { x: "0%", duration: 1 }, 0);
    //   tl.to(".top-section", { autoAlpha: 0, duration: 1 }, 0);
    //   tl.to(".owner-inventory-hero", {
    //     y: -150,
    //     paddingLeft: 0,
    //     paddingRight: 0,
    //     duration: 1.5,
    //     ease: "power2.out",
    //   }, 0);
    // });

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

      tl.to("header", { y: -20, duration: 1.5, ease: "power2.out" }, 0);
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
            <div className="relative w-40 rounded-tr-[40px] rounded-tr-[40px] rounded-tl-[40px] lg:rounded-tl-none h-20 md:w-1/2 2xl:w-[400px] lg:h-20 bg-[var(--background-halfwhite)] ">
              <div className="absolute right-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_var(--background-halfwhite)]" />
            </div>
          </div>

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
            <div className="relative z-[2] owner-inventory-hero__content flex flex-col items-center justify-center w-full wrapper">
             
               <h1 className="text-center xl:text-[64px] lg:text-5xl md:text-[40px] text-4xl xl:leading-[76px] lg:leading-[60px] leading-[48px] font-semibold text-[var(--text-dark)] font-['Onest'] lg:mt-[70px] xl:mb-8 lg:mb-6 mb-5">
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
              <div className="w-full mt-10 md:mt-14 xl:mt-20">
                <PricingCards
                  plans={PRICING_DATA[activeBusinessTab].plans}
                  isYearly={activeTab === "yearly"}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingHero;
