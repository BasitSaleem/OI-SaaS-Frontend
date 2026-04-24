import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/furniture-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/furniture-inventory-management-software/why-chose-banner.webp";

import {
  FURNITURE_INVENTORY_KEY_FEATURES_CARDS,
  FURNITURE_INVENTORY_WHY_CHOOSE_CARDS,
  FURNITURE_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/furnitureInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  FURNITURE_INVENTORY_UNIFIED_CARDS,
  FURNITURE_INVENTORY_UNIFIED_HEADING,
  FURNITURE_INVENTORY_UNIFIED_PARAGRAPH,
  FURNITURE_INVENTORY_WORKFLOW_DATA,
  FURNITURE_INVENTORY_TESTIMONIALS,
  FURNITURE_INVENTORY_FAQS,
  FURNITURE_INVENTORY_TESTIMONIAL_DATA,
  FURNITURE_INVENTORY_TESTIMONIAL_FEATURES,
  FURNITURE_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/furnitureInventoryManagementSoftwareData";
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
        title="Furniture Inventory Management System for Real-Time Stock Control"
        description="A furniture business needs accuracy, speed, and absolute control of inventory and sales. Furniture products are usually large, have various forms, and need to be tracked appropriately. Manual stock handling may cause errors, delays and loss of revenue. The furniture inventory management software makes life easier with the stock tracking, sales updates and reporting in one system."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={FURNITURE_INVENTORY_UNIFIED_HEADING}
        paragraph={FURNITURE_INVENTORY_UNIFIED_PARAGRAPH}
        cards={FURNITURE_INVENTORY_UNIFIED_CARDS}
        iconSet="furnitureInventory"
      />

      <WhyChoosePOS
        heading= "How Our Furniture Inventory Management Software Solves These Challenges"
        paragraph="Our furniture inventory software links stock, sales, and reporting into a single automated system enhancing accuracy, control and efficiency of operations."
        cards={FURNITURE_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="furnitureInventory"
      />

      <KeyHighlights
        heading="Key Features of Our Furniture Inventory Management Software"
        features={FURNITURE_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={FURNITURE_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={FURNITURE_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={FURNITURE_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title= "Take the Next Step in Furniture Business Growth"
        description= "Upgrade to a structured inventory management system and eliminate the chaos of manual tracking. Our software helps furniture businesses stay organized, minimize stock discrepancies, and scale operations with confidence."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={FURNITURE_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Accuracy, Security, and Seamless Operations."
        description= "Maintain high standards of accuracy with role-based access controls and detailed activity logs. Every transaction is tracked, ensuring accountability and data protection across your entire furniture business. Our system keeps your financial records precise and your operations compliant."
      />
      
       <ToolsSection
        heading={FURNITURE_INVENTORY_TOOLS_DATA.heading}
        description={FURNITURE_INVENTORY_TOOLS_DATA.paragraph}
        tools={FURNITURE_INVENTORY_TOOLS_DATA.tools}
      /> 

      <IndustriesTestimonial
        testimonials={FURNITURE_INVENTORY_TESTIMONIALS}
        heading={FURNITURE_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={FURNITURE_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={FURNITURE_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={FURNITURE_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={FURNITURE_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={FURNITURE_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={FURNITURE_INVENTORY_TESTIMONIAL_FEATURES}
        iconSet="furnitureInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Find answers to frequently asked questions about our furniture inventory management solution."
          faqs={FURNITURE_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>

      <IndustriesHardwareControl
        title= "Build a More Structured Furniture Business Workflow"
        description= "Say goodbye to scattered spreadsheets and hello to a unified inventory system. Create a more efficient environment for your team, reduce operational friction, and drive business growth with Owners Inventory."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
