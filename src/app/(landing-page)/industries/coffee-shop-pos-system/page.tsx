import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/coffee-shop-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/coffee-shop-pos/why-chose-banner.webp";

import {
  COFFEE_SHOP_KEY_FEATURES_CARDS,
  COFFEE_SHOP_WHY_CHOOSE_CARDS,
  COFFEE_SHOP_FEATURE_CARDS
} from "@/constant/subindustries/coffeeShopPosData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  COFFEE_SHOP_UNIFIED_CARDS,
  COFFEE_SHOP_UNIFIED_HEADING,
  COFFEE_SHOP_UNIFIED_PARAGRAPH,
  COFFEE_SHOP_WORKFLOW_DATA,
  COFFEE_SHOP_TESTIMONIALS,
  COFFEE_SHOP_FAQS,
  COFFEE_SHOP_TESTIMONIAL_DATA,
  COFFEE_SHOP_TESTIMONIAL_FEATURES,
  COFFEE_SHOP_TOOLS_DATA,
} from "@/constant/subindustries/coffeeShopPosData";
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
        title="Point of Sale System for Coffee Shops: Promoting Smooth Operations"
        description="Every coffee shop requires fast, clear, and organized operations during busy hours at its counters. Our all-in-one POS program helps simplify orders, payments, and workflows for coffee shops and cafes. It improves efficiency, reduces order delays, and keeps shop operations smooth while helping you grow your business with ease and improving customer experience."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={COFFEE_SHOP_UNIFIED_HEADING}
        paragraph={COFFEE_SHOP_UNIFIED_PARAGRAPH}
        cards={COFFEE_SHOP_UNIFIED_CARDS}
        iconSet="coffeeShop"
      />

      <WhyChoosePOS
        heading="How Owners Inventory Point-of-Sale System Solves These Challenges"
        paragraph="Our system connects POS, software, and hardware to improve the operational efficiency of coffee shops. It enables cafe owners to streamline their workflows. Cafe owners can leverage smooth and accurate operations across the shop with our coffee point of sale system."
        cards={COFFEE_SHOP_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="coffeeShop"
      />

      <KeyHighlights
        heading="Key Features of Owners Inventory POS"
        features={COFFEE_SHOP_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={COFFEE_SHOP_WORKFLOW_DATA.heading}
        paragraph={COFFEE_SHOP_WORKFLOW_DATA.paragraph}
        steps={COFFEE_SHOP_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Smarter POS for Busy Coffee Shops"
        description="Simplify your coffee shop operations with an all-in-one POS that improves order management, speeds up transactions, and boosts daily task efficiency."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={COFFEE_SHOP_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance"
        description="Every transaction is recorded securely. The private financial data of customers is protected with security protocols. It ensures accurate payment tracking and controlled system usage with role-based access features."
        secondDescription="It promotes privacy and keeps cafes and bakeries compliant with operational standards while maintaining reliable data across all POS activities."
      />

      <ToolsSection
        heading={COFFEE_SHOP_TOOLS_DATA.heading}
        description={COFFEE_SHOP_TOOLS_DATA.paragraph}
        tools={COFFEE_SHOP_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={COFFEE_SHOP_TESTIMONIALS}
        heading={COFFEE_SHOP_TESTIMONIAL_DATA.heading}
        paragraph={COFFEE_SHOP_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={COFFEE_SHOP_TESTIMONIAL_DATA.secondHeading}
        secondDescription={COFFEE_SHOP_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={COFFEE_SHOP_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={COFFEE_SHOP_TESTIMONIAL_DATA.whyChooseDescription}
        features={COFFEE_SHOP_TESTIMONIAL_FEATURES}
        iconSet="coffeeShop"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading= "FAQS"
          paragraph= "The following are some of the common questions that are asked about our coffee shop point-of-sale system."
          faqs={COFFEE_SHOP_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title= "Operational Clarity for Modern Coffee Shops"
        description= "Upgrade your coffee shop with a POS that keeps orders, payments, and tasks connected in one place. Improve daily operations, reduce delays, and handle every transaction with confidence."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
