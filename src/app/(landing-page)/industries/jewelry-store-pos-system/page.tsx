"use client";

import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/jewelry-store-pos/jewelary-store-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/jewelry-store-pos/jewelary-store-why-chose-banner.webp";

import {
  JEWELRY_STORE_KEY_FEATURES_CARDS,
  JEWELRY_STORE_WHY_CHOOSE_CARDS,
  JEWELRY_STORE_FEATURE_CARDS
} from "@/constant/subindustries/posJewelryStoreData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import posJewelryStorePageIcons from "@/components/icons/posJewelryStorePageIcons";
import {
  JEWELRY_STORE_UNIFIED_CARDS,
  JEWELRY_STORE_UNIFIED_HEADING,
  JEWELRY_STORE_UNIFIED_PARAGRAPH,
  JEWELRY_STORE_WORKFLOW_DATA,
  JEWELRY_STORE_TESTIMONIALS,
  JEWELRY_STORE_FAQS,
  JEWELRY_STORE_TESTIMONIAL_DATA,
  JEWELRY_STORE_TESTIMONIAL_FEATURES,
  JEWELRY_STORE_TOOLS_DATA,
} from "@/constant/subindustries/posJewelryStoreData";
import InventoryWorkflow from "@/components/pages/industries-page/InventoryWorkflow";
import IndustriesTestimonial from "@/components/pages/industries-page/IndustriesTestimonial";
import IndustriesFeaturesSection from "@/components/pages/industries-page/IndustriesFeaturesSection";
import ToolsSection from "@/components/pages/landing-page/ToolsSection";
import VoicesRealBusiness from "@/components/pages/landing-page/VoicesRealBusiness";
import SecurityCompliance from "@/components/pages/industries-page/securityCompliance";
import IndustriesHardwareControl from "@/components/pages/industries-page/IndustriesHardwareControl";


const Page = () => {
  return (
    <div>
      <SubIndustriesHero
        title="Jewelry Store POS System for Tracking High-Value Inventory"
        description="Owners Inventory provides a specialized POS system for jewelry stores to manage high-value items, track repairs, and automate billing based on live metal rates. Keep your inventory secure and your operations transparent with our intelligent system."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={JEWELRY_STORE_UNIFIED_HEADING}
        paragraph={JEWELRY_STORE_UNIFIED_PARAGRAPH}
        cards={JEWELRY_STORE_UNIFIED_CARDS}
        IconsComponent={posJewelryStorePageIcons}
      />

      <WhyChoosePOS
        heading="How Our Jewelry Store POS Solves These Challenges"
        paragraph="Owners Inventory integrates your sales, high-value inventory, repairs, and custom orders into a single secure platform."
        cards={JEWELRY_STORE_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        IconsComponent={posJewelryStorePageIcons}
      />

      <KeyHighlights
        heading="Our Key Features"
        features={JEWELRY_STORE_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={JEWELRY_STORE_WORKFLOW_DATA.heading}
        paragraph={JEWELRY_STORE_WORKFLOW_DATA.paragraph}
        steps={JEWELRY_STORE_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Take Full Control of Your Jewelry Store"
        description="Our specialized jewelry POS minimizes inventory discrepancies, simplifies complex billing, and enhances security for your high-value assets. Build customer trust with transparency and accuracy."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={JEWELRY_STORE_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, & Compliance."
        description="The jewelry industry requires the highest level of security. Our system ensures controlled access with role-based permissions and detailed audit trails for every transaction. Protect your inventory and maintain financial transparency."
        secondDescription="Automated reporting and real-time tracking reduce manual errors and ensure compliance. Your business data is securely backed up, giving you confidence in every operational decision and high-value sale."
      />

      <ToolsSection
        heading={JEWELRY_STORE_TOOLS_DATA.heading}
        description={JEWELRY_STORE_TOOLS_DATA.paragraph}
        tools={JEWELRY_STORE_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={JEWELRY_STORE_TESTIMONIALS}
        heading={JEWELRY_STORE_TESTIMONIAL_DATA.heading}
        paragraph={JEWELRY_STORE_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={JEWELRY_STORE_TESTIMONIAL_DATA.secondHeading}
        secondDescription={JEWELRY_STORE_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={JEWELRY_STORE_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={JEWELRY_STORE_TESTIMONIAL_DATA.whyChooseDescription}
        features={JEWELRY_STORE_TESTIMONIAL_FEATURES}
        IconsComponent={posJewelryStorePageIcons}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our Jewelry Store POS system is designed to make daily operations smooth and easy. Here are answers to some common questions from jewelry store owners."
          faqs={JEWELRY_STORE_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Secure Your Jewelry Business Today"
        description="Avoid losses due to stock errors and inaccurate valuation. Owners Inventory helps you track every gram and every gemstone with precision. Smarter management for a more profitable jewelry store."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
