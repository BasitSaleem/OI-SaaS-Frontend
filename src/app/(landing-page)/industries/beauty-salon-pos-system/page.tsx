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
        title="Beauty Salon POS System with Advanced Stock Management"
        description="Owners Inventory offers a high-performance Beauty Salon POS System designed to simplify your salon's daily operations. From tracking high-demand beauty products to managing service appointments and billing, our POS system ensures everything runs smoothly. It's the perfect solution for beauty salons looking to increase efficiency and maintain accurate stock records in real time."
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
        heading="How Our Inventory Software Solves These Challenges"
        paragraph="Owners Inventory Beauty Salon POS system provides features specifically built for the beauty and wellness industry, including:"
        cards={BEAUTY_SALON_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="beautySalon"
      />

      <KeyHighlights
        heading="Key Features of Our Beauty Salon POS System"
        features={BEAUTY_SALON_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={BEAUTY_SALON_WORKFLOW_DATA.heading}
        paragraph={BEAUTY_SALON_WORKFLOW_DATA.paragraph}
        steps={BEAUTY_SALON_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Elevate Your Salon's Efficiency"
        description="Take complete control of your beauty salon operations with our specialized system. Built for growth and precision."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={BEAUTY_SALON_FEATURE_CARDS} />

      <SecurityCompliance
        title="Reliable, Secure, and Efficient."
        description="Our system integrates seamlessly with appointment booking tools, customer management platforms, online stores, and payment processors. Manage your entire salon from a single, unified interface."
        secondDescription="Automate routine tasks, reduce manual errors, and let your team focus on providing exceptional beauty services."
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
          paragraph= "Our beauty salon POS solution is designed to make your everyday business operations effortless. Find answers to common questions below."
          faqs={BEAUTY_SALON_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title= "Take Complete Control of Your Salon"
        description= "Inaccurate stock counts and slow checkout processes can cost your salon money. Owners Inventory helps you minimize losses, maintain precise records, and speed up client billing for better business growth."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
