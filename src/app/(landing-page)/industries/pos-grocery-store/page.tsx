"use client";

import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/pos-grocery/grocery-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/why-chose-banners/acouting-finance-whychose.webp";
import {
  FINANCE_FAQS,
  FINANCE_FEATURES_CARDS,
  FINANCE_INDUSTRIES,
  FINANCE_TESTIMONIALS,
  FINANCE_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/financeData";

import {
 Grocery_WHY_CHOOSE_CARDS
} from "@/constant/subindustries/posGroceryData";


import TrustedBySection from "@/components/common-components/TrustedBySection";
import FeaturesCallToAction from "@/components/pages/features-page/FeaturesCallToAction";
import FeaturesTestimonials from "@/components/pages/features-page/FeaturesTestimonials";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryPosShowcase from "@/components/pages/landing-page/IndustryPosShowcase";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  GROCERY_UNIFIED_CARDS,
  GROCERY_UNIFIED_HEADING,
  GROCERY_UNIFIED_PARAGRAPH,
} from "@/constant/subindustries/posGroceryData";

// Function to get layout patterns based on card count
const getLayoutPatterns = (cardCount: number) => {
  switch (cardCount) {
    case 2:
      return [
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
      ];
    case 4:
      return [
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className:
            "col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-4 xl:col-span-6 xl:col-start-4",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
      ];
    default:
      // Return the 4-card layout as default
      return [
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
      ];
  }
};

const Page = () => {
  // Get layout patterns based on FeaturesCards length
  const layoutPatterns = getLayoutPatterns(FINANCE_FEATURES_CARDS.length);

  return (
    <div>
      <SubIndustriesHero
        title="POS System for Hardware Stores That Controls Inventory"
        description="Run your hardware store with speed, accuracy, and full control with Owners Inventory, the ultimate POS system for hardware stores. Every sale and stock update stays synced in one smart POS. Designed for busy stores that need quick billing and real-time inventory tracking."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      <TrustedBySection
        heading="Rated on Leading Review Platforms"
        paragraph="Big supermarkets, mini-marts, and wholesale stores trust Owners Inventory for fast, accurate, and error-free checkout. Brands like ASK Food Industries and Al-Asif use our POS to bill in real time, monitor stock, and deliver better customer service."
      />

      <IndustryUnifiedPlatform
        heading={GROCERY_UNIFIED_HEADING}
        paragraph={GROCERY_UNIFIED_PARAGRAPH}
        cards={GROCERY_UNIFIED_CARDS}
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges"
        paragraph="The Owners Inventory removes operational confusion by linking sales, stock, suppliers and reports into a single intelligent system. All the activities in your store are automatically updated and kept."
        cards={Grocery_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />


      <KeyHighlights
        heading="Key Features"
        features={FINANCE_FEATURES_CARDS}
        layoutPatterns={layoutPatterns}
      />

      
      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Built for Every Industry That Runs on Numbers"
          paragraph="Sell, serve, supply, whatever you do, proper accounting and finance management will keep your business on the right track. Owners Inventory is flexible and fits all workflows, provides real-time reporting of sales, costs, and performance."
          buttonText="Explore All Industries"
          industries={FINANCE_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Control Your Business Finances"
        description="Simplify your accounting, track every sale, and make smarter financial decisions with one powerful POS system. Join hundreds of growing businesses already managing their money in a smart way."
      />
      <FeaturesTestimonials
        testimonials={FINANCE_TESTIMONIALS}
        heading="What Our Clients Say"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart Accounts & Finance Tools"
        secondDescription="Everything you need to manage finances, track transactions, monitor cash flow, and maintain accurate financial records with confidence."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Your Accounting Questions, Clearly Answered"
          paragraph="Running business finances does not need to be stressful. Owners Inventory unites your sales, accounting, and reporting into a single convenient system. Some frequent questions are listed here to help you understand how Owners Inventory simplifies all aspects of your financial management."
          faqs={FINANCE_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;