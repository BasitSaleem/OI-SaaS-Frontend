import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/furniture-store-pos/furniture-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/bakery-pos/why-chose-banner.webp";

import {
  FURNITURE_STORE_KEY_FEATURES_CARDS,
  FURNITURE_STORE_WHY_CHOOSE_CARDS,
  FURNITURE_STORE_FEATURE_CARDS
} from "@/constant/subindustries/posFurnitureStoreData";


import TrustedBySection from "@/components/common-components/TrustedBySection";
import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  FURNITURE_STORE_UNIFIED_CARDS,
  FURNITURE_STORE_UNIFIED_HEADING,
  FURNITURE_STORE_UNIFIED_PARAGRAPH,
  FURNITURE_STORE_WORKFLOW_DATA,
  FURNITURE_STORE_TESTIMONIALS,
  FURNITURE_STORE_FAQS,
  FURNITURE_STORE_TESTIMONIAL_DATA,
  FURNITURE_STORE_TESTIMONIAL_FEATURES,
  FURNITURE_STORE_TOOLS_DATA,
} from "@/constant/subindustries/posFurnitureStoreData";
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
        title="POS System for Furniture Stores That Controls Inventory & Sales"
        description="Owners Inventory is a POS system that enables you to run your furniture store accurately, fast, and in full control. Order large quantities, manage custom orders, deliveries and payments all within a single intelligent system. All sales and stock movements remain updated in real time."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={FURNITURE_STORE_UNIFIED_HEADING}
        paragraph={FURNITURE_STORE_UNIFIED_PARAGRAPH}
        cards={FURNITURE_STORE_UNIFIED_CARDS}
        iconSet="furniture"
      />

      <WhyChoosePOS
        heading="How Our Furniture Store POS Solves These Challenges"
        paragraph="Owners Inventory integrates your sales, inventory, suppliers, custom orders and reports into a single smart platform."
        cards={FURNITURE_STORE_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="furniture"
      />

      <KeyHighlights
        heading="Our Key Features"
        features={FURNITURE_STORE_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={FURNITURE_STORE_WORKFLOW_DATA.heading}
        paragraph={FURNITURE_STORE_WORKFLOW_DATA.paragraph}
        steps={FURNITURE_STORE_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Get Full Control of Your Furniture Store"
        description="Our POS system of high-tech furniture stores will assist you in avoiding stock errors, speeding up the billing process, and making deliveries without any issues. Enhance efficiency in operations and provide a smooth customer experience."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={FURNITURE_STORE_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, & Compliance."
        description="Our system is secure and ensures controlled access and transactions through organized data management and constant monitoring. Role-based permissions allow you to determine the degree of access of cashiers, managers, and administrators, reducing the possibility of unauthorized actions. All sales, returns, and inventory adjustments are kept in full audit trails which are completely transparent."
        secondDescription="Proper financial documentation makes reconciliation and reporting easier and real-time inventory tracking eliminates discrepancies and manipulation of stocks. Your business data is securely backed up, system controls are reliable, and your business data is compliant and reliable, and you have confidence in every transaction and operational decision."
      />

      <ToolsSection
        heading={FURNITURE_STORE_TOOLS_DATA.heading}
        description={FURNITURE_STORE_TOOLS_DATA.paragraph}
        tools={FURNITURE_STORE_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={FURNITURE_STORE_TESTIMONIALS}
        heading={FURNITURE_STORE_TESTIMONIAL_DATA.heading}
        paragraph={FURNITURE_STORE_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={FURNITURE_STORE_TESTIMONIAL_DATA.secondHeading}
        secondDescription={FURNITURE_STORE_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={FURNITURE_STORE_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={FURNITURE_STORE_TESTIMONIAL_DATA.whyChooseDescription}
        features={FURNITURE_STORE_TESTIMONIAL_FEATURES}
        iconSet="furniture"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our POS System for Furniture Stores is designed to make daily operations smooth and easy."
          secondParagraph="Here are answers to some common questions from POS System for Furniture Stores owners."
          faqs={FURNITURE_STORE_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Take Control of Your Furniture Store"
        description="Furniture businesses lose significant revenue each year due to stock errors, delivery delays, and poor order tracking. Our furniture store POS system helps reduce losses, maintain accurate inventory, and streamline billing and delivery operations. Smarter management and faster processes make every day more profitable."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
