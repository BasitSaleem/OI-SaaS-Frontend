import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/clothing-inventory-management-software/clothing-store-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/clothing-inventory-management-software/clothing-store-why-chose-banner.webp";

import {
  CLOTHING_INVENTORY_KEY_FEATURES_CARDS,
  CLOTHING_INVENTORY_WHY_CHOOSE_CARDS,
  CLOTHING_INVENTORY_FEATURE_CARDS
} from "@/constant/subindustries/clothingInventoryManagementSoftwareData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  CLOTHING_INVENTORY_UNIFIED_CARDS,
  CLOTHING_INVENTORY_UNIFIED_HEADING,
  CLOTHING_INVENTORY_UNIFIED_PARAGRAPH,
  CLOTHING_INVENTORY_WORKFLOW_DATA,
  CLOTHING_INVENTORY_TESTIMONIALS,
  CLOTHING_INVENTORY_FAQS,
  CLOTHING_INVENTORY_TESTIMONIAL_DATA,
  CLOTHING_INVENTORY_TESTIMONIAL_FEATURES,
  CLOTHING_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/clothingInventoryManagementSoftwareData";
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
        title="Clothing Inventory Management Software That Controls Stock"
        description="Run your clothing store with speed, accuracy, and complete control using Owners Inventory, the clothing inventory management software. Every sale and stock update is synced in one system. This software is designed for fashion retailers who need billing, size-based tracking and real-time inventory visibility."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Rated on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={CLOTHING_INVENTORY_UNIFIED_HEADING}
        paragraph={CLOTHING_INVENTORY_UNIFIED_PARAGRAPH}
        cards={CLOTHING_INVENTORY_UNIFIED_CARDS}
        iconSet="clothingInventory"
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges"
        paragraph="Owner’s Inventory simplifies clothing store operations by connecting sales, stock, suppliers, and reporting into one smart system. Every activity is automatically tracked and updated in real time."
        cards={CLOTHING_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
         iconSet="clothingInventory"
      />

      <KeyHighlights
        heading="Key Features of Our Clothing Inventory Management Software"
        features={CLOTHING_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={CLOTHING_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={CLOTHING_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={CLOTHING_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Get Control of Your Inventory Now"
        description="Our clothing inventory management software makes managing stock easier. It reduces mistakes and improves efficiency. Start today to simplify operations and improve performance."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={CLOTHING_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="The system ensures that all transactions are recorded and monitored accurately. It restricts data access to authorized staff only. This reduces mistakes and prevents unauthorized actions."
        secondDescription="The system keeps a record of all changes. This ensures compliance and accountability. Real-time tracking gives transparency into stock movements. Automated reports improve accuracy and reliability."
      />

      <ToolsSection
        heading={CLOTHING_INVENTORY_TOOLS_DATA.heading}
        description={CLOTHING_INVENTORY_TOOLS_DATA.paragraph}
        tools={CLOTHING_INVENTORY_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={CLOTHING_INVENTORY_TESTIMONIALS}
        heading={CLOTHING_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={CLOTHING_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={CLOTHING_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={CLOTHING_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={CLOTHING_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={CLOTHING_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={CLOTHING_INVENTORY_TESTIMONIAL_FEATURES}
         iconSet="clothingInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our Clothing Store inventory software is designed to make daily operations smooth and easy. Here are answers to some common questions from clothing store owners."
          faqs={CLOTHING_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Take Control of Your Clothing Store"
        description="Many clothing stores lose money because of mistakes with stock and inefficient ways of doing things. The clothing inventory management software helps reduce losses and improve accuracy. It also speeds up operations. The billing process is smarter and faster which leads to profitability and growth."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
