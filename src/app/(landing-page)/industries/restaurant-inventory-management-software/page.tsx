import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/restaurant-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/restaurant-inventory-management-software/why-chose-banner.webp";

import {
  RESTAURANT_INVENTORY_KEY_FEATURES_CARDS,
  RESTAURANT_INVENTORY_WHY_CHOOSE_CARDS,
  RESTAURANT_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/restaurantInventoryManagementSoftwareData";

import dynamic from "next/dynamic";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

const IndustriesCallToAction = dynamic(() => import("@/components/pages/industries-page/IndustriesCallToAction"), { ssr: true });
const KeyHighlights = dynamic(() => import("@/components/pages/features-page/point-of-sale/KeyHighlights"), { ssr: true });
const WhyChoosePOS = dynamic(() => import("@/components/pages/features-page/point-of-sale/WhyChoosePOS"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/pages/landing-page/FAQSection"), { ssr: true });
const IndustryUnifiedPlatform = dynamic(() => import("@/components/pages/industries-page/IndustryUnifiedPlatform"), { ssr: true });
import {
  RESTAURANT_INVENTORY_UNIFIED_CARDS,
  RESTAURANT_INVENTORY_UNIFIED_HEADING,
  RESTAURANT_INVENTORY_UNIFIED_PARAGRAPH,
  RESTAURANT_INVENTORY_WORKFLOW_DATA,
  RESTAURANT_INVENTORY_TESTIMONIALS,
  RESTAURANT_INVENTORY_FAQS,
  RESTAURANT_INVENTORY_TESTIMONIAL_DATA,
  RESTAURANT_INVENTORY_TESTIMONIAL_FEATURES,
  RESTAURANT_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/restaurantInventoryManagementSoftwareData";
const InventoryWorkflow = dynamic(() => import("@/components/pages/industries-page/InventoryWorkflow"), { ssr: true });
const IndustriesTestimonial = dynamic(() => import("@/components/pages/industries-page/IndustriesTestimonial"), { ssr: true });
const IndustriesFeaturesSection = dynamic(() => import("@/components/pages/industries-page/IndustriesFeaturesSection"), { ssr: true });
const ToolsSection = dynamic(() => import("@/components/pages/landing-page/ToolsSection"), { ssr: true });
const VoicesRealBusiness = dynamic(() => import("@/components/pages/landing-page/VoicesRealBusiness"), { ssr: true });
const SecurityCompliance = dynamic(() => import("@/components/pages/industries-page/securityCompliance"), { ssr: true });
const IndustriesHardwareControl = dynamic(() => import("@/components/pages/industries-page/IndustriesHardwareControl"), { ssr: true });

const Page = () => {
  return (
    <div>
      <SubIndustriesHero
        title="Restaurant Inventory Management Software for Better Inventory Control"
        description="Our restaurant inventory management software handles complex inventories with precision. It automates processes and streamlines restaurant operations while providing real-time inventory insights. With food cost control and COG tracking, it boosts profitability. The software keeps everything visible in real time across your kitchen and storage."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={RESTAURANT_INVENTORY_UNIFIED_HEADING}
        paragraph={RESTAURANT_INVENTORY_UNIFIED_PARAGRAPH}
        cards={RESTAURANT_INVENTORY_UNIFIED_CARDS}
        iconSet="restaurantInventory"
      />

      <WhyChoosePOS
        heading="How Owners Inventory Solves Restaurant Challenges"
        paragraph="Owners Inventory streamlines restaurant operations, automates inventory management, and reduces waste. It improves accuracy and kitchen efficiency with advanced management features."
        cards={RESTAURANT_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="restaurantInventory"
      />

      <KeyHighlights
        heading="Key Features of Our Restaurant Inventory Software"
        features={RESTAURANT_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={RESTAURANT_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={RESTAURANT_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={RESTAURANT_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title= "Simplify Inventory and Maximize Results"
        description= "Bring clarity to your inventory, improve stock control, and reduce unnecessary losses. Manage your restaurant operations with a system built to support real kitchen workflows."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={RESTAURANT_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance"
        description= "It provides controlled access to staff based on their roles. The system records transactions securely. Maintaining detailed logs promotes transparency in inventory and sales activities."
        secondDescription= "The inventory control software for restaurants helps them reduce errors, prevent unauthorized access to sensitive data, and maintain accurate records of all operations for better internal control or compliance purposes."
      />

      <ToolsSection
        heading={RESTAURANT_INVENTORY_TOOLS_DATA.heading}
        description={RESTAURANT_INVENTORY_TOOLS_DATA.paragraph}
        tools={RESTAURANT_INVENTORY_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={RESTAURANT_INVENTORY_TESTIMONIALS}
        heading={RESTAURANT_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={RESTAURANT_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={RESTAURANT_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={RESTAURANT_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={RESTAURANT_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={RESTAURANT_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={RESTAURANT_INVENTORY_TESTIMONIAL_FEATURES}
        iconSet="restaurantInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="The Restaurant Inventory Management Software is aimed at ensuring the ease of daily operations and efficiency. The following are some of the responses to typical questions by Restaurant Inventory Management Software."
          faqs={RESTAURANT_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>

      <IndustriesHardwareControl
        title= "Take Control of Your Kitchen Inventory Today"
        description= "Gain real-time insights and make smarter decisions for every dish you serve. Streamline your restaurant operations, reduce food waste, and boost profitability with our restaurant inventory management software."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
