import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/supermarket-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/supermarket-pos/why-chose-banner.webp";

import {
  SUPERMARKET_KEY_FEATURES_CARDS,
  SUPERMARKET_WHY_CHOOSE_CARDS,
  SUPERMARKET_FEATURE_CARDS
} from "@/constant/subindustries/posSupermarketData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  SUPERMARKET_UNIFIED_CARDS,
  SUPERMARKET_UNIFIED_HEADING,
  SUPERMARKET_UNIFIED_PARAGRAPH,
  SUPERMARKET_WORKFLOW_DATA,
  SUPERMARKET_TESTIMONIALS,
  SUPERMARKET_FAQS,
  SUPERMARKET_TESTIMONIAL_DATA,
  SUPERMARKET_TESTIMONIAL_FEATURES,
  SUPERMARKET_TOOLS_DATA,
} from "@/constant/subindustries/posSupermarketData";
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
        title="Complete POS System for Supermarkets with Stock Tracking"
        description="The Owners Inventory POS System for supermarkets is the way to control your store’s inventory. It helps you run your supermarket quickly and accurately. Our POS System keeps track of all sales and stock updates in one place. This is great for supermarkets that need to bill customers quickly and keep track of their inventory in real time."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={SUPERMARKET_UNIFIED_HEADING}
        paragraph={SUPERMARKET_UNIFIED_PARAGRAPH}
        cards={SUPERMARKET_UNIFIED_CARDS}
        iconSet="superMarket"
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges"
        paragraph="The Owners Inventory POS System has features that help supermarkets, including:"
        cards={SUPERMARKET_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="superMarket"
      />

      <KeyHighlights
        heading="Key Features of Our POS System That Help Supermarkets"
        features={SUPERMARKET_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={SUPERMARKET_WORKFLOW_DATA.heading}
        paragraph={SUPERMARKET_WORKFLOW_DATA.paragraph}
        steps={SUPERMARKET_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Manage Your Inventory Efficiently"
        description="You can take control of the supermarket with our system. It is made for stores."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={SUPERMARKET_FEATURE_CARDS} />

      <SecurityCompliance
        title="Speed, Accuracy, and Reliability."
        description="Our system works with other tools like accounting software, customer management, online stores and payment systems. This lets you manage the supermarket from one place."
        secondDescription="These tools make things easier, reduce work and make the supermarket run faster and more efficiently."
      />

      <ToolsSection
        heading={SUPERMARKET_TOOLS_DATA.heading}
        description={SUPERMARKET_TOOLS_DATA.paragraph}
        tools={SUPERMARKET_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={SUPERMARKET_TESTIMONIALS}
        heading={SUPERMARKET_TESTIMONIAL_DATA.heading}
        paragraph={SUPERMARKET_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={SUPERMARKET_TESTIMONIAL_DATA.secondHeading}
        secondDescription={SUPERMARKET_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={SUPERMARKET_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={SUPERMARKET_TESTIMONIAL_DATA.whyChooseDescription}
        features={SUPERMARKET_TESTIMONIAL_FEATURES}
        iconSet="superMarket"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading= "FAQS"
          paragraph= "Our supermarket store POS solution is built in such a way that it makes everyday operations easy and effective. These are the responses to some of the most frequent questions of the store owners in supermarkets."
          faqs={SUPERMARKET_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title= "Take Control of Your Supermarket"
        description= "Supermarkets can lose money because of stock errors and inefficient processes. Our system helps reduce losses, keeps inventory accurate and makes operations faster. It helps with tracking and billing which leads to profit and growth."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
