"use client";

import React from "react";

import PricingTabs from "./PricingTabs";
import PricingCards from "./PricingCards";
import IndustryTabs from "./IndustryTabs";
import {
  pricingConfig,
  BusinessType,
  PRICING_HERO_CONTENT,
} from "./tableConfig";
import Paragraph from "../typography/Paragraph";
import PricingSecurityNote from "./PricingSecurityNote";
import { usePricingHeroScroll } from "@/hooks/usePricingHeroScroll";

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
  usePricingHeroScroll();

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

                <PricingSecurityNote />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingHero;

