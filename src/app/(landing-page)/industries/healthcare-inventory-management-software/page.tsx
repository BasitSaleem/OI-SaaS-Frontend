import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/healthcare-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/healthcare-inventory-management-software/why-chose-banner.webp";

import {
  HEALTHCARE_INVENTORY_KEY_FEATURES_CARDS,
  HEALTHCARE_INVENTORY_WHY_CHOOSE_CARDS,
  HEALTHCARE_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/healthcareInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  HEALTHCARE_INVENTORY_UNIFIED_CARDS,
  HEALTHCARE_INVENTORY_UNIFIED_HEADING,
  HEALTHCARE_INVENTORY_UNIFIED_PARAGRAPH,
  HEALTHCARE_INVENTORY_WORKFLOW_DATA,
  HEALTHCARE_INVENTORY_TESTIMONIALS,
  HEALTHCARE_INVENTORY_FAQS,
  HEALTHCARE_INVENTORY_TESTIMONIAL_DATA,
  HEALTHCARE_INVENTORY_TESTIMONIAL_FEATURES,
  HEALTHCARE_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/healthcareInventoryManagementSoftwareData";
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
        title="Healthcare Inventory Management Software Built for Operational Accuracy"
        description="Managing inventory based on guesswork causes healthcare facilities to face issues like expired medications, missing surgical equipment, and stock errors. But with an inventory management system, you can accurately identify the availability of medical supplies across departments. Our healthcare inventory management software keeps critical items available, reduces inefficiencies, and supports better healthcare services for hospitals, clinics, and pharmacies."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={HEALTHCARE_INVENTORY_UNIFIED_HEADING}
        paragraph={HEALTHCARE_INVENTORY_UNIFIED_PARAGRAPH}
        cards={HEALTHCARE_INVENTORY_UNIFIED_CARDS}
        iconSet="healthCareInventory"
      />

      <WhyChoosePOS
        heading="How Owners Inventory Solves Healthcare Management Challenges"
        paragraph="Owners Inventory simplifies inventory management of medical supplies by providing accuracy, visibility, and real-time updates. The inventory management tool controls everything within one system. The system reduces errors and improves decision-making."
        cards={HEALTHCARE_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="healthCareInventory"
      />

      <KeyHighlights
        heading="Key Features of Owners Inventory that Transform Healthcare Operations"
        features={HEALTHCARE_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={HEALTHCARE_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={HEALTHCARE_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={HEALTHCARE_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title= "Smarter Control for Critical Healthcare Inventory"
        description= "Move beyond manual tracking and manage healthcare inventory with precision. Improve oversight of medical supplies, reduce operational risks, and ensure uninterrupted availability of medicines when they are needed the most."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={HEALTHCARE_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance"
        description= "Healthcare inventory requires accountability. The system records actions like who handled what, when, and where, creating a clear usage trail. This helps teams investigate discrepancies, maintain internal discipline, and stay prepared for audits without scrambling through scattered records. It ensures each record is complete and accurate."
      />

      <ToolsSection
        heading={HEALTHCARE_INVENTORY_TOOLS_DATA.heading}
        description={HEALTHCARE_INVENTORY_TOOLS_DATA.paragraph}
        tools={HEALTHCARE_INVENTORY_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={HEALTHCARE_INVENTORY_TESTIMONIALS}
        heading={HEALTHCARE_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={HEALTHCARE_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={HEALTHCARE_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={HEALTHCARE_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={HEALTHCARE_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={HEALTHCARE_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={HEALTHCARE_INVENTORY_TESTIMONIAL_FEATURES}
        iconSet="healthCareInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="The Health care invenotry managemnt software is aimed at ensuring the ease of daily operations and efficiency. The following are some of the responses to typical questions by Health care invenotry managemnt software."
          faqs={HEALTHCARE_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>

      <IndustriesHardwareControl
        title= "Experience Faster Healthcare Inventory Control"
        description= "Take the next step toward structured, error-free healthcare management with Owners Inventory. Improve how you handle medical supplies, reduce operational gaps, and bring consistency across your processes with a system built for real-world healthcare demands."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
