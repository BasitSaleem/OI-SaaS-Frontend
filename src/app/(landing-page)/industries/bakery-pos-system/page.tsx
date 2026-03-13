"use client";

import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/bakery-pos/hardware-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/bakery-pos/why-chose-banner.webp";

import {
  BAKERY_KEY_FEATURES_CARDS,
  BAKERY_WHY_CHOOSE_CARDS,
  BAKERY_FEATURE_CARDS
} from "@/constant/subindustries/posBakeryData";


import TrustedBySection from "@/components/common-components/TrustedBySection";
import FeaturesCallToAction from "@/components/pages/features-page/FeaturesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  BAKERY_UNIFIED_CARDS,
  BAKERY_UNIFIED_HEADING,
  BAKERY_UNIFIED_PARAGRAPH,
  BAKERY_WORKFLOW_DATA,
  BAKERY_TESTIMONIALS,
  BAKERY_FAQS,
  BAKERY_TESTIMONIAL_DATA,
  BAKERY_TESTIMONIAL_FEATURES,
  BAKERY_TOOLS_DATA,
} from "@/constant/subindustries/posBakeryData";
import InventoryWorkflow from "@/components/pages/industries-page/InventoryWorkflow";
import IndustriesTestimonial from "@/components/pages/industries-page/IndustriesTestimonial";
import IndustriesFeaturesSection from "@/components/pages/industries-page/IndustriesFeaturesSection";
import ToolsSection from "@/components/pages/landing-page/ToolsSection";
import VoicesRealBusiness from "@/components/pages/landing-page/VoicesRealBusiness";


const Page = () => {
  return (
    <div>
      <SubIndustriesHero
        title="Bakery POS System for Complete Freshness and Inventory Control"
        description="Run your bakery with speed, accuracy, and full control with Owners Inventory. Our smart bakery POS system ensures that your billing is quick and stock updates are automatic. Designed for bakeries that need real-time inventory and wastage tracking."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      {/* <TrustedBySection
        heading="Rated on Leading Review Platforms"
        paragraph="Big bakeries, pastry shops, and wholesale dessert businesses trust Owners Inventory for fast, accurate, and error-free checkout. Brands like Sweet Delights and Fresh Bakes use our POS to bill in real time, monitor fresh stock, and deliver better customer service."
      /> */}

      <VoicesRealBusiness title="Trusted by Bakeries Globally" />

      <IndustryUnifiedPlatform
        heading={BAKERY_UNIFIED_HEADING}
        paragraph={BAKERY_UNIFIED_PARAGRAPH}
        cards={BAKERY_UNIFIED_CARDS}
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges"
        paragraph="The Owners Inventory removes operational confusion by linking sales, production stock, suppliers and reports into a single intelligent system. All activities in your bakery are automatically tracked."
        cards={BAKERY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <KeyHighlights
        heading="Power-Packed Features for Your Bakery"
        features={BAKERY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={BAKERY_WORKFLOW_DATA.heading}
        paragraph={BAKERY_WORKFLOW_DATA.paragraph}
        steps={BAKERY_WORKFLOW_DATA.steps}
      />

      <FeaturesCallToAction
        title="Get Control of Your Bakery Now"
        description="The best POS system for bakeries will streamline your inventory, eliminate wastage, and increase efficiency. Start now and discover how our solution can streamline your bakery operations."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={BAKERY_FEATURE_CARDS} />

      <ToolsSection
        heading={BAKERY_TOOLS_DATA.heading}
        tools={BAKERY_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={BAKERY_TESTIMONIALS}
        heading={BAKERY_TESTIMONIAL_DATA.heading}
        paragraph={BAKERY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={BAKERY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={BAKERY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={BAKERY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={BAKERY_TESTIMONIAL_DATA.whyChooseDescription}
        features={BAKERY_TESTIMONIAL_FEATURES}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our bakery POS system is designed to make daily operations smooth and easy. Here are answers to some common questions from bakery owners."
          faqs={BAKERY_FAQS}
          buttonText="Start Now"
        />
      </div>
    </div>
  );
};

export default Page;