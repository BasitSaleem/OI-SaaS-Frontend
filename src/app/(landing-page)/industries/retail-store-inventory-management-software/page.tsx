import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/retail-store-inventory-management-software/clothing-store-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/retail-store-inventory-management-software/clothing-store-why-chose-banner.webp";

import {
  RETAIL_STORE_INVENTORY_KEY_FEATURES_CARDS,
  RETAIL_STORE_INVENTORY_WHY_CHOOSE_CARDS,
  RETAIL_STORE_INVENTORY_FEATURE_CARDS
} from "@/constant/subindustries/retailStoreInventoryManagementSoftwareData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  RETAIL_STORE_INVENTORY_UNIFIED_CARDS,
  RETAIL_STORE_INVENTORY_UNIFIED_HEADING,
  RETAIL_STORE_INVENTORY_UNIFIED_PARAGRAPH,
  RETAIL_STORE_INVENTORY_WORKFLOW_DATA,
  RETAIL_STORE_INVENTORY_TESTIMONIALS,
  RETAIL_STORE_INVENTORY_FAQS,
  RETAIL_STORE_INVENTORY_TESTIMONIAL_DATA,
  RETAIL_STORE_INVENTORY_TESTIMONIAL_FEATURES,
  RETAIL_STORE_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/retailStoreInventoryManagementSoftwareData";
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
        title="Inventory Management Software for Retail Store That Simplifies Operations"
        description="Managing a store is a big job that requires being accurate, fast and having complete control over stock and sales. Our inventory management software for stores helps make operations smooth and efficient. It also tracks stock automatically and handles sales in one smart system."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Rated on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={RETAIL_STORE_INVENTORY_UNIFIED_HEADING}
        paragraph={RETAIL_STORE_INVENTORY_UNIFIED_PARAGRAPH}
        cards={RETAIL_STORE_INVENTORY_UNIFIED_CARDS}
        iconSet="clothingInventory"
      />

      <WhyChoosePOS
        heading="How Our Inventory Management Software Solves These Challenges"
        paragraph="Our retail inventory software connects stock, sales, and reporting into one automated system, ensuring accuracy, efficiency, and better control over daily operations."
        cards={RETAIL_STORE_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
         iconSet="clothingInventory"
      />

      <KeyHighlights
        heading="Key Features of Our Retail Inventory Management Software"
        features={RETAIL_STORE_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={RETAIL_STORE_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={RETAIL_STORE_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={RETAIL_STORE_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Get Control of Your Inventory Now"
        description="Our retail store inventory management software makes managing stock easier. It reduces mistakes and improves efficiency. Start today to simplify operations and improve performance."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={RETAIL_STORE_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance"
        description="The system ensures that all transactions are recorded and monitored accurately. It restricts data access to authorized staff only. This reduces mistakes and prevents unauthorized actions."
        secondDescription="The system keeps a record of all changes. This ensures compliance and accountability. Real-time tracking gives transparency into stock movements. Automated reports improve accuracy and reliability."
      />

      <ToolsSection
        heading={RETAIL_STORE_INVENTORY_TOOLS_DATA.heading}
        description={RETAIL_STORE_INVENTORY_TOOLS_DATA.paragraph}
        tools={RETAIL_STORE_INVENTORY_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={RETAIL_STORE_INVENTORY_TESTIMONIALS}
        heading={RETAIL_STORE_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={RETAIL_STORE_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={RETAIL_STORE_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={RETAIL_STORE_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={RETAIL_STORE_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={RETAIL_STORE_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={RETAIL_STORE_INVENTORY_TESTIMONIAL_FEATURES}
         iconSet="clothingInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our Retail Store inventory software is designed to make daily operations smooth and easy. Here are answers to some common questions from retail store owners."
          faqs={RETAIL_STORE_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Take Control of Your Retail Store"
        description="Many retail stores lose money because of mistakes with stock and inefficient ways of doing things. The retail store inventory management software helps reduce losses and improve accuracy. It also speeds up operations. The billing process is smarter and faster which leads to profitability and growth."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
