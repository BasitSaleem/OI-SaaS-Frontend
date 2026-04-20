import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/retail-store-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/retail-store-inventory-management-software/why-chose-banner.webp";

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
        iconSet="retailInventory"
      />

      <WhyChoosePOS
        heading="How Our Inventory Management Software Solves These Challenges"
        paragraph="Our retail inventory software connects stock, sales, and reporting into one automated system, ensuring accuracy, efficiency, and better control over daily operations."
        cards={RETAIL_STORE_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
         iconSet="retailInventory"
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
        title="Manage Your Retail Store Efficiently"
        description="The system is designed to improve accuracy, reduce errors and make store operations more efficient. Retailers can manage their store with our software. It helps them to increase efficiency and make their store operations smooth."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={RETAIL_STORE_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="Security, accuracy, and compliance are crucial for businesses. Every transaction is recorded securely with time-stamped data. This ensures transparency and accountability in all transactions."
        secondDescription="The point of sale system has role-based access control. This means authorized staff can access information. Automated processes maintain inventory records."
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
         iconSet="retailInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="The Inventory Management Software for Retail Store  is aimed at ensuring the ease of daily operations and efficiency. The following are some of the responses to typical questions by Inventory Management Software for Retail Store."
          faqs={RETAIL_STORE_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Ready to Simplify Your Retail Store?"
        description="Get rid of inefficiencies and be confident in controlling your inventory. With precise tracking of stock, quick billing and more, it all comes together to assist you in operating a more profitable retail business."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
