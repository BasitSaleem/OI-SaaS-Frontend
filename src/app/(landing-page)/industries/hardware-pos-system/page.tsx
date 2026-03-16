"use client";

import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/pos-hardware/hardware-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/pos-hardware/why-chose-banner.webp";
// Remove unused finance data imports

import {
  POS_KEY_FEATURES_CARDS,
  Hardware_WHY_CHOOSE_CARDS,
  HARDWARE_FEATURE_CARDS
} from "@/constant/subindustries/posHardwareData";


import TrustedBySection from "@/components/common-components/TrustedBySection";
import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryPosShowcase from "@/components/pages/landing-page/IndustryPosShowcase";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import PosHardwarePageIcons from "@/components/icons/posHardwarePageIcons";
import {
  HARDWARE_UNIFIED_CARDS,
  HARDWARE_UNIFIED_HEADING,
  HARDWARE_UNIFIED_PARAGRAPH,
  HARDWARE_WORKFLOW_DATA,
  HARDWARE_TESTIMONIALS,
  HARDWARE_FAQS,
  HARDWARE_TESTIMONIAL_DATA,
  HARDWARE_TESTIMONIAL_FEATURES,
  HARDWARE_TOOLS_DATA,
} from "@/constant/subindustries/posHardwareData";
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
        title="POS System for Hardware Stores That Controls Inventory"
        description="Run your hardware store with speed, accuracy, and full control with Owners Inventory, the ultimate POS system for hardware stores. Every sale and stock update stays synced in one smart POS. Designed for busy stores that need quick billing and real-time inventory tracking."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      {/* <TrustedBySection
        heading="Rated on Leading Review Platforms"
        paragraph="Big supermarkets, mini-marts, and wholesale stores trust Owners Inventory for fast, accurate, and error-free checkout. Brands like ASK Food Industries and Al-Asif use our POS to bill in real time, monitor stock, and deliver better customer service."
      /> */}

      <VoicesRealBusiness title="Rated on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={HARDWARE_UNIFIED_HEADING}
        paragraph={HARDWARE_UNIFIED_PARAGRAPH}
        cards={HARDWARE_UNIFIED_CARDS}
        IconsComponent={PosHardwarePageIcons}
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges"
        paragraph="The Owners Inventory removes operational confusion by linking sales, stock, suppliers and reports into a single intelligent system. All the activities in your store are automatically updated and kept."
        cards={Hardware_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <KeyHighlights
        heading="Our Key Features"
        features={POS_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={HARDWARE_WORKFLOW_DATA.heading}
        paragraph={HARDWARE_WORKFLOW_DATA.paragraph}
        steps={HARDWARE_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Get Control of Your Inventory Now"
        description="Our Best POS system for hardware stores will streamline your inventory, eliminate mistakes, and increase efficiency. Start now and discover how our solution can streamline your operations and make the most out of your business."
        ctaDesc="Request a Free Demo"
      />


      <IndustriesFeaturesSection features={HARDWARE_FEATURE_CARDS} />


      <SecurityCompliance 
          title="Security, Accuracy, & Compliance."
        description="An effective inventory system will make sure that all the transactions are properly documented and monitored. The user roles and permissions restrict access to sensitive information, minimizing errors and theft. All details will be secured with us."
        secondDescription="It also keeps audit trails and aids in regulatory compliance, which keep businesses accountable and safeguard inventory and financial data. Live tracking will make sure that all the stock movements are documented in a transparent manner. Automated reports minimize errors in manual reports and enable store owners to keep accurate financial records with confidence."
      />


      <ToolsSection
        heading={HARDWARE_TOOLS_DATA.heading}
        description={HARDWARE_TOOLS_DATA.paragraph}
        tools={HARDWARE_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={HARDWARE_TESTIMONIALS}
        heading={HARDWARE_TESTIMONIAL_DATA.heading}
        paragraph={HARDWARE_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={HARDWARE_TESTIMONIAL_DATA.secondHeading}
        secondDescription={HARDWARE_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={HARDWARE_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={HARDWARE_TESTIMONIAL_DATA.whyChooseDescription}
        features={HARDWARE_TESTIMONIAL_FEATURES}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our hardware store POS system is designed to make daily operations smooth and easy. Here are answers to some common questions from hardware store owners."
          faqs={HARDWARE_FAQS}
          buttonText="Start Now"
        />
      </div>

      <IndustriesHardwareControl
        title="Take Control of Your Hardware Store"
        description="Hardware stores lose an average of $30,000 per year due to stock errors and mismanagement. Our hardware store POS system helps reduce losses, keep inventory accurate, and speed up daily operations. Smarter tracking and faster billing make every day more profitable."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;