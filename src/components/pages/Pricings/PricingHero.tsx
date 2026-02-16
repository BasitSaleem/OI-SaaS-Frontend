"use client"; // ✅ Required if you're in Next.js App Router

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PricingTabs from "./PricingTabs";
import PricingCards from "./PricingCards";
import { pricingPlans, PRICING_HERO_CONTENT } from "./tableConfig";

gsap.registerPlugin(ScrollTrigger);

interface PricingHeroProps {
  activeTab: "monthly" | "yearly";
  onTabChange: (tab: "monthly" | "yearly") => void;
}

const PricingHero: React.FC<PricingHeroProps> = ({
  activeTab,
  onTabChange,
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
      tl.to(".owner-inventory-hero", {
        y: -150,
        paddingLeft: 0,
        paddingRight: 0,
        duration: 1.5,
        ease: "power2.out",
      }, 0);
    });

    return () => {
      heroBreak.revert(); // ✅ cleanup on unmount
    };
  }, []);

  return (
    <>
    <div className="">
      <div className="top-section md:h-6 h-8"></div>
       <section className="owner-inventory-hero rounded-b-[40px] px-3 md:px-5 lg:px-10 overflow-hidden">
        <div className="owner-inventory-hero__home flex items-center justify-start lg:justify-center lg:items-center w-[63%] ml-0 lg:mx-auto relative inset-x-0">
          {/* Left Shape (only visible on md+) */}
          <div className="hidden lg:block relative w-1/2 2xl:w-[400px] h-20 bg-[#F3F4F6] rounded-tl-[40px]">
            <div className="absolute left-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-br-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
          </div>

          {/* Right Shape */}
          <div className="relative w-40 rounded-tr-[40px] rounded-tr-[40px] rounded-tl-[40px] lg:rounded-tl-none h-20 md:w-1/2 2xl:w-[400px] lg:h-20 bg-[#F3F4F6] ">
            <div className="absolute right-[-6rem] bottom-0 w-24 h-full bg-transparent rounded-bl-[40px] shadow-[0_2.5rem_0_0_#f3f4f6]" />
          </div>
        </div>

        <div
          style={{
            backgroundImage:
              "linear-gradient(180deg, #F3F4F6 0%, transparent 40%), linear-gradient(90deg, rgba(26, 209, 185, 0.3) 0%, rgba(121, 92, 245, 0.3) 100%)",
          }}
          className="relative flex flex-col items-center justify-center w-full overflow-hidden pt-10 pb-6 md:py-[76px] lg:py-0 lg:pb-[150px] bg-[#F3F4F6] rounded-tr-[20px] rounded-b-[20px] lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:rounded-tl-[40px] backdrop-blur-[374px] "
        >
          <h1 className="text-4xl px-6 md:text-[60px] xl:text-7xl leading-[48px] md:leading-[66px] xl:leading-[90px] text-center font-['Onest'] font-semibold mx-auto md:max-w-screen-sm xl:max-w-5xl lg:mt-[150px] text-[#231F20]">
            {PRICING_HERO_CONTENT.title}
          </h1>

          <p className="font-['Onest'] px-6 text-xl leading-9 font-normal text-[#231F20] text-center w-full max-w-4xl mt-10">
            {PRICING_HERO_CONTENT.description}
          </p>

          {/* Tabs */}
         <PricingTabs activeTab={activeTab} onTabChange={onTabChange} variant="tabs" />

          {/* Pricing Cards */}
          <div className="w-full mt-10 md:mt-14 xl:mt-20">
            <PricingCards
              plans={pricingPlans}
              isYearly={activeTab === "yearly"}
            />
          </div>
        </div>
      </section>
    </div>
     
    </>
  );
};

export default PricingHero;
