import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/jewelry-inventory-management-software/jewelary-store-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/jewelry-inventory-management-software/jewelary-store-why-chose-banner.webp";

import {
  JEWELRY_INVENTORY_KEY_FEATURES_CARDS,
  JEWELRY_INVENTORY_WHY_CHOOSE_CARDS,
  JEWELRY_INVENTORY_FEATURE_CARDS
} from "@/constant/subindustries/jewelryInventoryManagementSoftwareData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  JEWELRY_INVENTORY_UNIFIED_CARDS,
  JEWELRY_INVENTORY_UNIFIED_HEADING,
  JEWELRY_INVENTORY_UNIFIED_PARAGRAPH,
  JEWELRY_INVENTORY_WORKFLOW_DATA,
  JEWELRY_INVENTORY_TESTIMONIALS,
  JEWELRY_INVENTORY_FAQS,
  JEWELRY_INVENTORY_TESTIMONIAL_DATA,
  JEWELRY_INVENTORY_TESTIMONIAL_FEATURES,
  JEWELRY_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/jewelryInventoryManagementSoftwareData";
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
        title="Jewelry Inventory Management Software that Simplifies Tracking and Sales "
        description="Streamline your inventory management, track items, sync stocks across multiple locations, and efficiently manage purchase orders. Owners Inventory maintains accurate records of jewelry stock. Our reliable jewelry management software makes operations efficient and enhances customer satisfaction."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Rated on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={JEWELRY_INVENTORY_UNIFIED_HEADING}
        paragraph={JEWELRY_INVENTORY_UNIFIED_PARAGRAPH}
        cards={JEWELRY_INVENTORY_UNIFIED_CARDS}
        iconSet="jewelaryInventory"
      />

      <WhyChoosePOS
        heading="How Our Jewelry Inventory Management Software Solves These Challenges"
        paragraph="Our inventory software efficiently handles jewelry inventory management, helps store owners view store activities, and reduces errors. It keeps accurate records of every item and transaction made."
        cards={JEWELRY_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
         iconSet="jewelaryInventory"
      />

      <KeyHighlights
        heading="Key Features that Transform Jewelry Store Operations"
        features={JEWELRY_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={JEWELRY_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={JEWELRY_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={JEWELRY_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Manage Your Jewelry Store Efficiently"
        description="Simplify daily operations, improve inventory accuracy, and handle every order with confidence using our jewelry inventory management software."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={JEWELRY_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance"
        description="Security, accuracy, and compliance are crucial for businesses. Every transaction is recorded securely with time-stamped data. This ensures transparency and accountability in all transactions."
        secondDescription="The point of sale system has role-based access control. This means authorized staff can access information. Automated processes maintain inventory records."
      />

      <ToolsSection
        heading={JEWELRY_INVENTORY_TOOLS_DATA.heading}
        description={JEWELRY_INVENTORY_TOOLS_DATA.paragraph}
        tools={JEWELRY_INVENTORY_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={JEWELRY_INVENTORY_TESTIMONIALS}
        heading={JEWELRY_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={JEWELRY_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={JEWELRY_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={JEWELRY_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={JEWELRY_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={JEWELRY_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={JEWELRY_INVENTORY_TESTIMONIAL_FEATURES}
         iconSet="jewelaryInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Below are some of the most frequently asked questions about the jewelry inventory management software we provide."
          faqs={JEWELRY_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Experience Smarter Jewelry Management"
        description="Upgrade your store with our jewelry management system designed to handle the complexities of jewelry inventory management and sales."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
