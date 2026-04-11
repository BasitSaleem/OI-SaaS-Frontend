import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/ecommerce-store-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/ecommerce-store-inventory-management-software/why-chose-banner.webp";

import {
  ECOMMERCE_INVENTORY_KEY_FEATURES_CARDS,
  ECOMMERCE_INVENTORY_WHY_CHOOSE_CARDS,
  ECOMMERCE_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/ecommerceStoreInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  ECOMMERCE_INVENTORY_UNIFIED_CARDS,
  ECOMMERCE_INVENTORY_UNIFIED_HEADING,
  ECOMMERCE_INVENTORY_UNIFIED_PARAGRAPH,
  ECOMMERCE_INVENTORY_WORKFLOW_DATA,
  ECOMMERCE_INVENTORY_TESTIMONIALS,
  ECOMMERCE_INVENTORY_FAQS,
  ECOMMERCE_INVENTORY_TESTIMONIAL_DATA,
  ECOMMERCE_INVENTORY_TESTIMONIAL_FEATURES,
  ECOMMERCE_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/ecommerceStoreInventoryManagementSoftwareData";
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
        title="Inventory Management System for Ecommerce Stores"
        description="The Owners Inventory ecommerce inventory management software is the software that helps you control your online business inventory. It helps you to manage your online store accurately and quickly. Our system tracks all sales, orders, and stock updates across various platforms. It's perfect for businesses who need to update their inventory in real-time and fulfill orders across multiple channels."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={ECOMMERCE_INVENTORY_UNIFIED_HEADING}
        paragraph={ECOMMERCE_INVENTORY_UNIFIED_PARAGRAPH}
        cards={ECOMMERCE_INVENTORY_UNIFIED_CARDS}
        iconSet="ecommerceStoreInventory"
      />

      <WhyChoosePOS
        heading="What Our Inventory Software Can Do to Help You"
        paragraph="This software can help you overcome these problems with its powerful features, such as:"
        cards={ECOMMERCE_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="ecommerceStoreInventory"
      />

      <KeyHighlights
        heading="Key Features of our Ecommerce Inventory Software"
        features={ECOMMERCE_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={ECOMMERCE_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={ECOMMERCE_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={ECOMMERCE_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Manage Your Online Store Smarter and Faster"
        description="Keep your inventory synced, reduce errors, and fulfill orders efficiently with a centralized system designed to support your growth."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={ECOMMERCE_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance"
        description="It ensures accurate tracking of inventory and secure handling of data across all online operations. This system helps to maintain reliability and consistency."
        secondDescription="By improving data accuracy, the system supports better operational control and consistency."
      />

      <ToolsSection
        heading={ECOMMERCE_INVENTORY_TOOLS_DATA.heading}
        description={ECOMMERCE_INVENTORY_TOOLS_DATA.paragraph}
        tools={ECOMMERCE_INVENTORY_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={ECOMMERCE_INVENTORY_TESTIMONIALS}
        heading={ECOMMERCE_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={ECOMMERCE_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={ECOMMERCE_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={ECOMMERCE_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={ECOMMERCE_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={ECOMMERCE_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={ECOMMERCE_INVENTORY_TESTIMONIAL_FEATURES}
        iconSet="ecommerceStoreInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="The ecommerce inventory management software is aimed at ensuring the ease of daily operations and efficiency. The following are some of the responses to typical questions by ecommerce inventory management software."
          faqs={ECOMMERCE_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>

      <IndustriesHardwareControl
        title="Streamline Your Ecommerce Inventory with Confidence"
        description="Take full control of your stock, orders, and sales across all platforms with a system built for modern ecommerce businesses. Improve accuracy and scale without stress."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
