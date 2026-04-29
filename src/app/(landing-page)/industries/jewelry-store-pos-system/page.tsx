import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/jewelry-store-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/jewelry-store-pos/why-chose-banner.webp";

import {
  JEWELRY_STORE_KEY_FEATURES_CARDS,
  JEWELRY_STORE_WHY_CHOOSE_CARDS,
  JEWELRY_STORE_FEATURE_CARDS
} from "@/constant/subindustries/posJewelryStoreData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  JEWELRY_STORE_UNIFIED_CARDS,
  JEWELRY_STORE_UNIFIED_HEADING,
  JEWELRY_STORE_UNIFIED_PARAGRAPH,
  JEWELRY_STORE_WORKFLOW_DATA,
  JEWELRY_STORE_TESTIMONIALS,
  JEWELRY_STORE_FAQS,
  JEWELRY_STORE_TESTIMONIAL_DATA,
  JEWELRY_STORE_TESTIMONIAL_FEATURES,
  JEWELRY_STORE_TOOLS_DATA,
} from "@/constant/subindustries/posJewelryStoreData";
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
        title="Result-Oriented POS Solutions for jewelry Stores"
        description="Owners Inventory is the ultimate jewelry store POS system that can be used to run your store with precision, elegance, and total control. All sales, repair orders, and stock-related activities remain synchronized within a single intelligent platform. It is designed for high-value goods, comprehensive tracking, and safe billing."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={JEWELRY_STORE_UNIFIED_HEADING}
        paragraph={JEWELRY_STORE_UNIFIED_PARAGRAPH}
        cards={JEWELRY_STORE_UNIFIED_CARDS}
        iconSet="jewelry"
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges"
        paragraph="Sales, stock, gold rates, suppliers, and reports are connected to one safe POS system by Owners Inventory. It eradicates human errors and holds all the departments in tune with each other."
        cards={JEWELRY_STORE_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="jewelry"
      />

      <KeyHighlights
        heading="Our Key Features"
        features={JEWELRY_STORE_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={JEWELRY_STORE_WORKFLOW_DATA.heading}
        paragraph={JEWELRY_STORE_WORKFLOW_DATA.paragraph}
        steps={JEWELRY_STORE_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Take Control of Your Jewelry Inventory Now"
        description="The Best POS for jewelry stores will make your inventory easier and will help minimize mistakes during pricing and make daily work more effective. Begin today and find out how our solution will make doing business in the jewelry business a lot easier and profitability of your store maximized."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={JEWELRY_STORE_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="An advanced jewelry POS system makes sure that all the transactions are duly managed and tracked. Role-based access controls access to sensitive financial, and inventory information minimizing risks and avoiding internal losses."
        secondDescription="The system has full audit trails and facilitates compliance needs in protection of jewelry assets which have high-values. Live tracking will guarantee clear stock movement while automated reports will minimize errors in tracking and assist in maintaining proper financial records with certainty."
      />

      <ToolsSection
        heading={JEWELRY_STORE_TOOLS_DATA.heading}
        description={JEWELRY_STORE_TOOLS_DATA.paragraph}
        tools={JEWELRY_STORE_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={JEWELRY_STORE_TESTIMONIALS}
        heading={JEWELRY_STORE_TESTIMONIAL_DATA.heading}
        paragraph={JEWELRY_STORE_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={JEWELRY_STORE_TESTIMONIAL_DATA.secondHeading}
        secondDescription={JEWELRY_STORE_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={JEWELRY_STORE_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={JEWELRY_STORE_TESTIMONIAL_DATA.whyChooseDescription}
        features={JEWELRY_STORE_TESTIMONIAL_FEATURES}
        iconSet="jewelry"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our POS Solutions for Jewelry Stores is designed to make daily operations smooth and easy."
          secondParagraph = "Here are answers to some common questions from POS Solutions for Jewelry Stores owners."
          faqs={JEWELRY_STORE_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Take Control of Your Jewelry Store"
        description="Many jewelry stores lose a lot of money annually because of inaccuracies in stock and price mistakes. Our jewelry store POS system removes risks, protects inventory, and accelerates day-to-day operations. Better tracking and correct billing make every day a profitable one."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
