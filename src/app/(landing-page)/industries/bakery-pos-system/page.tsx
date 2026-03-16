"use client";

import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/bakery-pos/bakery-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/bakery-pos/why-chose-banner.webp";

import {
  BAKERY_KEY_FEATURES_CARDS,
  BAKERY_WHY_CHOOSE_CARDS,
  BAKERY_FEATURE_CARDS
} from "@/constant/subindustries/posBakeryData";


import TrustedBySection from "@/components/common-components/TrustedBySection";
import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import posBakeryPageIcons from "@/components/icons/posBakeryPageIcons";
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
        title="POS System For Bakeries Controlling 
Orders & Inventory"
        description="Manage your bakery with complete precision and control using Owners Inventory, the ultimate POS system for bakeries. Every sale, including the latest ingredient updates and fresh batches of morning cakes to orders for custom-made cake designs are synced into one intelligent system. This system is designed for bakeries who need to track inventory in real time and bill quickly."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      {/* <TrustedBySection
        heading="Rated on Leading Review Platforms"
        paragraph="Big bakerys, specialty book shops, and wholesale book businesses trust Owners Inventory for fast, accurate, and error-free checkout."
      /> */}

      <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={BAKERY_UNIFIED_HEADING}
        paragraph={BAKERY_UNIFIED_PARAGRAPH}
        cards={BAKERY_UNIFIED_CARDS}
        IconsComponent={posBakeryPageIcons}
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges?"
        paragraph="Every feature of our Bakery POS System was created to help take the pressure off and streamline your processes."
        cards={BAKERY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <KeyHighlights
        heading="Our Key Features"
        features={BAKERY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={BAKERY_WORKFLOW_DATA.heading}
        paragraph={BAKERY_WORKFLOW_DATA.paragraph}
        steps={BAKERY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Take Full Control of Your Bakery Operations"
        description="Our bakery POS reduces waste, accelerates billing and maintains accurate ingredient stocks. Simplify your day-to-day operations today."
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
          paragraph="Our bakery POS system is designed to make daily operations smooth and easy.
Here are answers to some common questions from bakery owners."
          faqs={BAKERY_FAQS}
          buttonText="Start Now"
        />
      </div>
    </div>
  );
};

export default Page;