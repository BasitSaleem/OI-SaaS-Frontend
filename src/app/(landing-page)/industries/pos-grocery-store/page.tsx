"use client";

import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/pos-grocery/grocery-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/why-chose-banners/acouting-finance-whychose.webp";
// Remove unused finance data imports

import {
  Grocery_WHY_CHOOSE_CARDS,
  GROCERY_FEATURE_CARDS
} from "@/constant/subindustries/posGroceryData";


import TrustedBySection from "@/components/common-components/TrustedBySection";
import FeaturesCallToAction from "@/components/pages/features-page/FeaturesCallToAction";

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
  GROCERY_WORKFLOW_DATA,
  GROCERY_TESTIMONIALS,
  GROCERY_FAQS
} from "@/constant/subindustries/posGroceryData";
import InventoryWorkflow from "@/components/pages/industries-page/InventoryWorkflow";
import IndustriesTestimonial from "@/components/pages/industries-page/IndustriesTestimonial";
import IndustriesFeaturesSection from "@/components/pages/industries-page/IndustriesFeaturesSection";
import ToolsSection from "@/components/pages/landing-page/ToolsSection";


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
  return (
    <div>
      <SubIndustriesHero
        title="POS System for Hardware Stores That Controls Inventory"
        description="Run your hardware store with speed, accuracy, and full control with Owners Inventory, the ultimate POS system for hardware stores. Every sale and stock update stays synced in one smart POS. Designed for busy stores that need quick billing and real-time inventory tracking."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
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

      <InventoryWorkflow
        heading={GROCERY_WORKFLOW_DATA.heading}
        paragraph={GROCERY_WORKFLOW_DATA.paragraph}
        steps={GROCERY_WORKFLOW_DATA.steps}
      />

      <FeaturesCallToAction
        title="Get Control of Your Inventory Now"
        description="Our Best POS system for hardware stores will streamline your inventory, eliminate mistakes, and increase efficiency. Start now and discover how our solution can streamline your operations and make the most out of your business."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={GROCERY_FEATURE_CARDS} />

      <ToolsSection />

      <IndustriesTestimonial
        testimonials={GROCERY_TESTIMONIALS}
        heading="Clients' Voices"
        showSmartTools={true}
        secondHeading="Manage Your Inventory Efficiently"
        secondDescription="Get complete control of your stock, sales and operations with a system that is geared towards modern business."
        whyChooseShow={true}
        whyChooseTitle="Why Choose Our System?"
        whyChooseDescription="Our POS system for Hardware stores ensures transparent control, fast billing, and accurate inventory, making daily operations seamless."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our hardware store POS system is designed to make daily operations smooth and easy. Here are answers to some common questions from hardware store owners."
          faqs={GROCERY_FAQS}
          buttonText="Start Now"
        />
      </div>
    </div>
  );
};

export default Page;