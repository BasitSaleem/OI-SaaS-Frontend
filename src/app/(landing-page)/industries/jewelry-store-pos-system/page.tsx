"use client";

import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/bookstore-pos/bookstore-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/bakery-pos/why-chose-banner.webp";

import {
  JEWELRY_STORE_KEY_FEATURES_CARDS,
  JEWELRY_STORE_WHY_CHOOSE_CARDS,
  JEWELRY_STORE_FEATURE_CARDS
} from "@/constant/subindustries/posJewelryStoreData";


import TrustedBySection from "@/components/common-components/TrustedBySection";
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
        title="Result-Oriented POS Solutions for Jewellery Stores"
        description="Owners Inventory is the ultimate jewellery store POS system that can be used to run your store with precision, elegance, and total control. All sales, repair orders, and stock-related activities remain synchronized within a single intelligent platform. It is designed for high-value goods, comprehensive tracking, and safe billing."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Rated on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={JEWELRY_STORE_UNIFIED_HEADING}
        paragraph={JEWELRY_STORE_UNIFIED_PARAGRAPH}
        cards={JEWELRY_STORE_UNIFIED_CARDS}
        IconsComponent={posJewelryStorePageIcons}
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges"
        paragraph="Sales, stock, gold rates, suppliers, and reports are connected to one safe POS system by Owners Inventory. It eradicates human errors and holds all the departments in tune with each other."
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
        title="Get Full Control of Your Jewelry Store"
        description="Our POS system of high-tech jewelry stores will assist you in avoiding stock errors, speeding up the billing process, and making deliveries without any issues. Enhance efficiency in operations and provide a smooth customer experience."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={JEWELRY_STORE_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, & Compliance."
        description="Our system is secure and ensures controlled access and transactions through organized data management and constant monitoring. Role-based permissions allow you to determine the degree of access of cashiers, managers, and administrators, reducing the possibility of unauthorized actions. All sales, returns, and inventory adjustments are kept in full audit trails which are completely transparent."
        secondDescription="Proper financial documentation makes reconciliation and reporting easier and real-time inventory tracking eliminates discrepancies and manipulation of stocks. Your business data is securely backed up, system controls are reliable, and your business data is compliant and reliable, and you have confidence in every transaction and operational decision."
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
          paragraph="Our POS System for Jewelry Stores is designed to make daily operations smooth and easy."
          secondParagraph="Here are answers to some common questions from POS System for Jewelry Stores owners."
          faqs={JEWELRY_STORE_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Take Control of Your Jewelry Store"
        description="Jewelry businesses lose significant revenue each year due to stock errors, delivery delays, and poor order tracking. Our jewelry store POS system helps reduce losses, maintain accurate inventory, and streamline billing and delivery operations. Smarter management and faster processes make every day more profitable."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
