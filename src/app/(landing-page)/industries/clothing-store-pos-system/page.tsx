import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/clothing-store-pos/clothing-store-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/clothing-store-pos/clothing-store-why-chose-banner.webp";

import {
  CLOTHING_STORE_KEY_FEATURES_CARDS,
  CLOTHING_STORE_WHY_CHOOSE_CARDS,
  CLOTHING_STORE_FEATURE_CARDS
} from "@/constant/subindustries/posClothingStoreData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  CLOTHING_STORE_UNIFIED_CARDS,
  CLOTHING_STORE_UNIFIED_HEADING,
  CLOTHING_STORE_UNIFIED_PARAGRAPH,
  CLOTHING_STORE_WORKFLOW_DATA,
  CLOTHING_STORE_TESTIMONIALS,
  CLOTHING_STORE_FAQS,
  CLOTHING_STORE_TESTIMONIAL_DATA,
  CLOTHING_STORE_TESTIMONIAL_FEATURES,
  CLOTHING_STORE_TOOLS_DATA,
} from "@/constant/subindustries/posClothingStoreData";
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
        title="The Best POS System for Clothing Stores"
        description="Over 72% of clothing retailers face stock inconsistencies across sizes and colors. Our advanced POS systems for clothing stores eliminate errors, improve checkout speed, and give complete visibility across all branches."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Rated on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={CLOTHING_STORE_UNIFIED_HEADING}
        paragraph={CLOTHING_STORE_UNIFIED_PARAGRAPH}
        cards={CLOTHING_STORE_UNIFIED_CARDS}
        iconSet="clothing"
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solve These Challenges"
        paragraph="Owners inventory software allows clothing stores to manage their sales operations efficiently. The stock remains visible accurately. Customers can check out easily  without being stuck during peak hours."
        cards={CLOTHING_STORE_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="clothing"
      />

      <KeyHighlights
        heading="Our Key Features"
        features={CLOTHING_STORE_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={CLOTHING_STORE_WORKFLOW_DATA.heading}
        paragraph={CLOTHING_STORE_WORKFLOW_DATA.paragraph}
        steps={CLOTHING_STORE_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Get Control of Your Inventory Now"
        description="Gain complete visibility over your clothing inventory with real-time tracking, variant control, and a centralized dashboard for accurate management. With owners inventory, eliminate stock confusion and make smarter decisions for growing your clothing brand."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={CLOTHING_STORE_FEATURE_CARDS} />

      <SecurityCompliance
        title="Speed, Accuracy, & Reliability."
        description="Clothing stores need POS systems that are secure and accurate. Our owners inventory POS constantly handles transactions, returns, and discounts safely. This protects sales data, private customer information, and financial records with role-based access and limited permissions."
        secondDescription="With accurate transaction records, it reduces billing errors and fraud. Organized data helps brands stay compliant with tax regulations and audit requirements without operational stress."
      />

      <ToolsSection
        heading={CLOTHING_STORE_TOOLS_DATA.heading}
        description={CLOTHING_STORE_TOOLS_DATA.paragraph}
        tools={CLOTHING_STORE_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={CLOTHING_STORE_TESTIMONIALS}
        heading={CLOTHING_STORE_TESTIMONIAL_DATA.heading}
        paragraph={CLOTHING_STORE_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={CLOTHING_STORE_TESTIMONIAL_DATA.secondHeading}
        secondDescription={CLOTHING_STORE_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={CLOTHING_STORE_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={CLOTHING_STORE_TESTIMONIAL_DATA.whyChooseDescription}
        features={CLOTHING_STORE_TESTIMONIAL_FEATURES}
        iconSet="clothing"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our Clothing Store POS system is designed to make daily operations smooth and easy. Here are answers to some common questions from clothing store owners."
          faqs={CLOTHING_STORE_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Take Control of Your Clothing Store"
        description="Each year, clothing stores lose a substantial segment of revenue as a result of stock mismatches, confusion of sizes, and imprecise billing processes. Our clothing store's POS system assists in minimizing these losses, keeping a correctly maintained inventory of all variants, and simplifying daily operations. Every sale is easier and more lucrative with smarter tracking and quicker checkouts."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
