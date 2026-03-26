"use client";

import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/retail-store-pos/retail-store-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/retail-store-pos/retail-store-why-chose-banner.webp";

import {
  RETAIL_STORE_KEY_FEATURES_CARDS,
  RETAIL_STORE_WHY_CHOOSE_CARDS,
  RETAIL_STORE_FEATURE_CARDS
} from "@/constant/subindustries/posRetailStoreData";


import TrustedBySection from "@/components/common-components/TrustedBySection";
import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import posRetailStorePageIcons from "@/components/icons/posRetailStorePageIcons";
import {
  RETAIL_STORE_UNIFIED_CARDS,
  RETAIL_STORE_UNIFIED_HEADING,
  RETAIL_STORE_UNIFIED_PARAGRAPH,
  RETAIL_STORE_WORKFLOW_DATA,
  RETAIL_STORE_TESTIMONIALS,
  RETAIL_STORE_FAQS,
  RETAIL_STORE_TESTIMONIAL_DATA,
  RETAIL_STORE_TESTIMONIAL_FEATURES,
  RETAIL_STORE_TOOLS_DATA,
} from "@/constant/subindustries/posRetailStoreData";
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
        title="The Best POS System for Small Retail Stores"
        description="Running a small shop requires speed, control, and accuracy. Our POS system for small retail store owners is designed to simplify billing, inventory management, employee tracking, and reporting in one centralized system. Instead of juggling spreadsheets or manual registers, retailers can manage their entire store from a single dashboard."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={RETAIL_STORE_UNIFIED_HEADING}
        paragraph={RETAIL_STORE_UNIFIED_PARAGRAPH}
        cards={RETAIL_STORE_UNIFIED_CARDS}
        IconsComponent={posRetailStorePageIcons}
      />

      <WhyChoosePOS
        heading="How Our POS System for Small Retail Stores Solves These Challenges?"
        paragraph="Our POS system for small retail stores centralizes billing, inventory, payments, reports, and employee management, giving owners full control and reducing operational confusion."
        cards={RETAIL_STORE_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        IconsComponent={posRetailStorePageIcons}
      />

      <KeyHighlights
        heading="Our Key Features"
        features={RETAIL_STORE_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={RETAIL_STORE_WORKFLOW_DATA.heading}
        paragraph={RETAIL_STORE_WORKFLOW_DATA.paragraph}
        steps={RETAIL_STORE_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Manage Your Small Retail Business Today"
        description="Control your store efficiently with the best POS system for small retail stores. Retailers using our best point of sale software for small retail business report faster checkouts, smarter inventory management, and happier customers every day."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={RETAIL_STORE_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, & Compliance."
        description="The security of a POS system is a key factor when choosing one for a small retail store. Our system uses encrypted transaction processing and secure cloud storage to protect sensitive data about customers and stores. Backups are automatically created to ensure that your business data is safe, even if the hardware fails. Access controls based on roles prevent unauthorized use of the system and maintain operational integrity."
        secondDescription="The POS system is designed to be simple and easy to use, but still offers enterprise-level security. Retailers must have confidence that each transaction is accurately and securely recorded. As the best point of sale software for small retailers, our platform ensures accurate financial reporting, compliance-ready records, and protected payment processing. This level of reliability is the reason why many businesses consider this to be the best small business POS software for long-term operation stability."
      />

      <ToolsSection
        heading={RETAIL_STORE_TOOLS_DATA.heading}
        description={RETAIL_STORE_TOOLS_DATA.paragraph}
        tools={RETAIL_STORE_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={RETAIL_STORE_TESTIMONIALS}
        heading={RETAIL_STORE_TESTIMONIAL_DATA.heading}
        paragraph={RETAIL_STORE_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={RETAIL_STORE_TESTIMONIAL_DATA.secondHeading}
        secondDescription={RETAIL_STORE_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={RETAIL_STORE_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={RETAIL_STORE_TESTIMONIAL_DATA.whyChooseDescription}
        features={RETAIL_STORE_TESTIMONIAL_FEATURES}
        IconsComponent={posRetailStorePageIcons}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our POS system Small Retail Stores is designed to make daily operations smooth and easy."
          secondParagraph="Here are answers to some common questions from POS system Small Retail Stores owners."
          faqs={RETAIL_STORE_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Boost Your Store Today"
        description="Take control of your small retail business with the best POS system for small retail stores. Retailers using our best point of sale software for small retail business report 30% faster checkouts and happier customers every day."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
