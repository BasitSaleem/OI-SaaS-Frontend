"use client";

import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/grocery-store-pos/jewelary-store-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/grocery-store-pos/jewelary-store-why-chose-banner.webp";

import {
  GROCERY_STORE_KEY_FEATURES_CARDS,
  GROCERY_STORE_WHY_CHOOSE_CARDS,
  GROCERY_STORE_FEATURE_CARDS
} from "@/constant/subindustries/posGroceryStoreData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import posGroceryStorePageIcons from "@/components/icons/posGroceryStorePageIcons";
import {
  GROCERY_STORE_UNIFIED_CARDS,
  GROCERY_STORE_UNIFIED_HEADING,
  GROCERY_STORE_UNIFIED_PARAGRAPH,
  GROCERY_STORE_WORKFLOW_DATA,
  GROCERY_STORE_TESTIMONIALS,
  GROCERY_STORE_FAQS,
  GROCERY_STORE_TESTIMONIAL_DATA,
  GROCERY_STORE_TESTIMONIAL_FEATURES,
  GROCERY_STORE_TOOLS_DATA,
} from "@/constant/subindustries/posGroceryStoreData";
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
        title="POS System for Grocery Store That Controls Inventory"
        description="Owners Inventory, the best POS system for grocery stores, allows you to run your grocery store fast, accurately and with full control. All sales and stock remain updated in a single smart POS. The product is designed to fit busy supermarkets, and minimarts that require the quick billing and real-time monitoring of inventory."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Rated on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={GROCERY_STORE_UNIFIED_HEADING}
        paragraph={GROCERY_STORE_UNIFIED_PARAGRAPH}
        cards={GROCERY_STORE_UNIFIED_CARDS}
        IconsComponent={posGroceryStorePageIcons}
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges"
        paragraph="Owner Inventory integrates the sales, stock, suppliers and reports together into a single smart grocery POS. All the store operations are automatically updated and kept in sync."
        cards={GROCERY_STORE_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        IconsComponent={posGroceryStorePageIcons}
      />

      <KeyHighlights
        heading="Our Key Features"
        features={GROCERY_STORE_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={GROCERY_STORE_WORKFLOW_DATA.heading}
        paragraph={GROCERY_STORE_WORKFLOW_DATA.paragraph}
        steps={GROCERY_STORE_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Get Control of Your Grocery Inventory Now"
        description="The Best POS system for grocery stores improves waste reduction, eradicates billing mistakes, and improves daily efficiency."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={GROCERY_STORE_FEATURE_CARDS} />

      <SecurityCompliance
        title="Speed, Accuracy, & Reliability."
        description="An effective grocery POS system is one that ensures that all the transactions are logged and tracked correctly. User roles and permissions restrict access to sensitive information, which minimizes internal errors and theft."
        secondDescription="Accountability is also ensured by audit trails which aid in adherence to financial regulations. Live tracking tracks all the stock movements in a transparent manner, and automated reporting provides proper bookkeeping and financial assurance."
      />

      <ToolsSection
        heading={GROCERY_STORE_TOOLS_DATA.heading}
        description={GROCERY_STORE_TOOLS_DATA.paragraph}
        tools={GROCERY_STORE_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={GROCERY_STORE_TESTIMONIALS}
        heading={GROCERY_STORE_TESTIMONIAL_DATA.heading}
        paragraph={GROCERY_STORE_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={GROCERY_STORE_TESTIMONIAL_DATA.secondHeading}
        secondDescription={GROCERY_STORE_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={GROCERY_STORE_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={GROCERY_STORE_TESTIMONIAL_DATA.whyChooseDescription}
        features={GROCERY_STORE_TESTIMONIAL_FEATURES}
        IconsComponent={posGroceryStorePageIcons}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our Grocery Store POS system is designed to make daily operations smooth and easy. Here are answers to some common questions from grocery store owners."
          faqs={GROCERY_STORE_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Take Control of Your Grocery Store"
        description="Grocery stores lose thousands annually as a result of wastage, billing mistakes and stock mismanagement. Our POS system for grocery stores minimizes losses, increases the checkout speed and maintains the inventory records. Smarter tracking and quicker billing are useful to make each day more profitable."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
