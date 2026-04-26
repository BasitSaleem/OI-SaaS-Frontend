import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/beauty-salon-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/beauty-salon-pos/why-chose-banner.webp";

import {
  BEAUTY_SALON_KEY_FEATURES_CARDS,
  BEAUTY_SALON_WHY_CHOOSE_CARDS,
  BEAUTY_SALON_FEATURE_CARDS
} from "@/constant/subindustries/beautySalonPosData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  BEAUTY_SALON_UNIFIED_CARDS,
  BEAUTY_SALON_UNIFIED_HEADING,
  BEAUTY_SALON_UNIFIED_PARAGRAPH,
  BEAUTY_SALON_WORKFLOW_DATA,
  BEAUTY_SALON_TESTIMONIALS,
  BEAUTY_SALON_FAQS,
  BEAUTY_SALON_TESTIMONIAL_DATA,
  BEAUTY_SALON_TESTIMONIAL_FEATURES,
  BEAUTY_SALON_TOOLS_DATA,
} from "@/constant/subindustries/beautySalonPosData";
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
        title="Beauty Salon Point-of-Sale System for Smooth Checkout and Product Handling"
        description="Busy counters make stylists lose clients more quickly than bad service. To prevent slow billing, missing retail stock, and scattered client records, a reliable salon POS system is necessary. The POS smoothly handles daily sales operations. Our beauty salon's point-of-sale system ensures that customers get quick services while avoiding messy counters."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={BEAUTY_SALON_UNIFIED_HEADING}
        paragraph={BEAUTY_SALON_UNIFIED_PARAGRAPH}
        cards={BEAUTY_SALON_UNIFIED_CARDS}
        iconSet="beautySalon"
      />

      <WhyChoosePOS
        heading="How Owners Inventory Solves Beauty Salon POS Challenges"
        paragraph="Owners Inventory provides a structured salon POS system that connects sales, payments, and inventory in one place, helping beauty salon owners prevent confusion and handle daily operations with clarity."
        cards={BEAUTY_SALON_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="beautySalon"
      />

      <KeyHighlights
        heading="Key Features of Our Beauty Salon Point of Sale System"
        features={BEAUTY_SALON_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={BEAUTY_SALON_WORKFLOW_DATA.heading}
        paragraph={BEAUTY_SALON_WORKFLOW_DATA.paragraph}
        steps={BEAUTY_SALON_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Take Control of Every Salon Operation"
        description="Upgrade your beauty salon with a POS system that keeps billing, sales, and services organized in one place. Work faster, reduce errors, and manage daily operations with confidence and clarity."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={BEAUTY_SALON_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="With accurate details of recorded transactions, the system creates a reliable activity trail. This improves data accuracy, reduces discrepancies in payment records, and helps salon businesses maintain organized documentation. This helps beauty salon owners to perform internal checks and promotes financial clarity."
      />

      <ToolsSection
        heading={BEAUTY_SALON_TOOLS_DATA.heading}
        description={BEAUTY_SALON_TOOLS_DATA.paragraph}
        tools={BEAUTY_SALON_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={BEAUTY_SALON_TESTIMONIALS}
        heading={BEAUTY_SALON_TESTIMONIAL_DATA.heading}
        paragraph={BEAUTY_SALON_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={BEAUTY_SALON_TESTIMONIAL_DATA.secondHeading}
        secondDescription={BEAUTY_SALON_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={BEAUTY_SALON_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={BEAUTY_SALON_TESTIMONIAL_DATA.whyChooseDescription}
        features={BEAUTY_SALON_TESTIMONIAL_FEATURES}
        iconSet="beautySalon"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading= "FAQS"
          paragraph= "The following are some of the common questions that are asked about our beauty salon point of sale system."
          faqs={BEAUTY_SALON_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title= "Control Salon Operations with a Reliable POS"
        description= "Manage all your salon activities with an effective POS system. Make things consistent by ensuring that every operation at the salon will perfectly align. Improve efficiency and ensure accuracy in every task without experiencing any delay with our beauty salon point-of-sale system."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
