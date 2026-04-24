import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/small-businesses-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/small-businesses-inventory-management-software/why-chose-banner.webp";

import {
  SMALL_BUSINESS_INVENTORY_KEY_FEATURES_CARDS,
  SMALL_BUSINESS_INVENTORY_WHY_CHOOSE_CARDS,
  SMALL_BUSINESS_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/smallBusinessesInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  SMALL_BUSINESS_INVENTORY_UNIFIED_CARDS,
  SMALL_BUSINESS_INVENTORY_UNIFIED_HEADING,
  SMALL_BUSINESS_INVENTORY_UNIFIED_PARAGRAPH,
  SMALL_BUSINESS_INVENTORY_WORKFLOW_DATA,
  SMALL_BUSINESS_INVENTORY_TESTIMONIALS,
  SMALL_BUSINESS_INVENTORY_FAQS,
  SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA,
  SMALL_BUSINESS_INVENTORY_TESTIMONIAL_FEATURES,
  SMALL_BUSINESS_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/smallBusinessesInventoryManagementSoftwareData";
import InventoryWorkflow from "@/components/pages/industries-page/InventoryWorkflow";
import IndustriesTestimonial from "@/components/pages/industries-page/IndustriesTestimonial";
import IndustriesFeaturesSection from "@/components/pages/industries-page/IndustriesFeaturesSection";
import ToolsSection from "@/components/pages/landing-page/ToolsSection";
import VoicesRealBusiness from "@/components/pages/landing-page/VoicesRealBusiness";
import SecurityCompliance from "@/components/pages/industries-page/securityCompliance";
import IndustriesHardwareControl from "@/components/pages/industries-page/IndustriesHardwareControl";
import DisclaimerHotel from "@/components/pages/industries-page/DisclaimerHotel";

const Page = () => {
  return (
    <div>
      <SubIndustriesHero
        title="Inventory Management Software for Small Businesses for Better Task Control"
        description="Running a small business requires simple and reliable control over daily operations to boost efficiency. Our inventory management software tracks inventory, manages stock levels, and streamlines daily business tasks. The software is built to save time, whether you run a retail store, a grocery shop, or a small restaurant. It improves accuracy and supports better business decisions."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={SMALL_BUSINESS_INVENTORY_UNIFIED_HEADING}
        paragraph={SMALL_BUSINESS_INVENTORY_UNIFIED_PARAGRAPH}
        cards={SMALL_BUSINESS_INVENTORY_UNIFIED_CARDS}
        iconSet="smallBusinessInventory"
      />

      <WhyChoosePOS
        heading= "How Owners Inventory Software Solves These Challenges"
        paragraph="Owners Inventory is designed to simplify small business operations by providing real-time updates and visibility. It aligns business processes and maintains operational efficiency without complexity."
        cards={SMALL_BUSINESS_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="smallBusinessInventory"
      />

      <KeyHighlights
        heading="Key Features of Owners Inventory that Improve Small Business Tasks"
        features={SMALL_BUSINESS_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={SMALL_BUSINESS_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={SMALL_BUSINESS_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={SMALL_BUSINESS_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title= "Next Step for Small Business Growth"
        description= "Switch to a structured inventory management software and reduce reliance on scattered records. Our system helps small businesses stay organized, reduce errors, and improve daily operational clarity."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={SMALL_BUSINESS_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description= "Access to inventory data is controlled based on staff roles. Each transaction is recorded with a clear audit trail, making it easy to view activities and identify errors. It ensures that sensitive business data is protected. The system maintains accurate financial records and supports internal accountability across daily operations."
      />
      
       <ToolsSection
        heading={SMALL_BUSINESS_INVENTORY_TOOLS_DATA.heading}
        description={SMALL_BUSINESS_INVENTORY_TOOLS_DATA.paragraph}
        tools={SMALL_BUSINESS_INVENTORY_TOOLS_DATA.tools}
      /> 

      <IndustriesTestimonial
        testimonials={SMALL_BUSINESS_INVENTORY_TESTIMONIALS}
        heading={SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={SMALL_BUSINESS_INVENTORY_TESTIMONIAL_FEATURES}
        iconSet="smallBusinessInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="The following are some of the important questions that are asked about our inventory management software."
          faqs={SMALL_BUSINESS_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>

      <IndustriesHardwareControl
        title= "Build a More Organized and Reliable Business Workflow"
        description= "Move away from scattered processes and bring consistency into how your inventory is handled. Create a smoother workflow, reduce daily friction, and support steady business growth with a system that keeps everything aligned."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
