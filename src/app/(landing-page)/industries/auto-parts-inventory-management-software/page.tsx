import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/auto-parts-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/auto-parts-inventory-management-software/why-chose-banner.webp";

import {
  AUTO_PARTS_INVENTORY_KEY_FEATURES_CARDS,
  AUTO_PARTS_INVENTORY_WHY_CHOOSE_CARDS,
  AUTO_PARTS_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/autoPartsInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  AUTO_PARTS_INVENTORY_UNIFIED_CARDS,
  AUTO_PARTS_INVENTORY_UNIFIED_HEADING,
  AUTO_PARTS_INVENTORY_UNIFIED_PARAGRAPH,
  AUTO_PARTS_INVENTORY_WORKFLOW_DATA,
  AUTO_PARTS_INVENTORY_TESTIMONIALS,
  AUTO_PARTS_INVENTORY_FAQS,
  AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA,
  AUTO_PARTS_INVENTORY_TESTIMONIAL_FEATURES,
  AUTO_PARTS_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/autoPartsInventoryManagementSoftwareData";
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
        title="Auto Parts Inventory Management Software to Organize and Track Stocks"
        description="Our auto parts inventory management software provides smarter ways to track stock, manage inventory, and order parts efficiently. Get real-time visibility into stocks; automate purchases; and manage repair workflows or service orders. The POS improves reporting with quick alerts. It simplifies operations and lets automotive store owners run their business with assurance."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Rated on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={AUTO_PARTS_INVENTORY_UNIFIED_HEADING}
        paragraph={AUTO_PARTS_INVENTORY_UNIFIED_PARAGRAPH}
        cards={AUTO_PARTS_INVENTORY_UNIFIED_CARDS}
        iconSet="autoStoreInventory"
      />

      <WhyChoosePOS
        heading="How Our Automotive Inventory Management Software Simplifies Operations"
        paragraph="Our automotive inventory management software is designed to streamline operations such as organizing auto parts and ensuring that the right parts are delivered to customers. It provides complete visibility of stocks from a single dashboard."
        cards={AUTO_PARTS_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="autoStoreInventory"
      />

      <KeyHighlights
        heading="Key Features of Our Automotive Parts Inventory Software"
        features={AUTO_PARTS_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={AUTO_PARTS_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={AUTO_PARTS_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={AUTO_PARTS_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Drive Efficiency for Your Auto Parts Business"
        description="Simplify your auto parts store’s workflows, track every component in real time, and reduce errors. Owner's Inventory keeps your stock perfectly synchronized. Request a demo today and start making better purchase decisions."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={AUTO_PARTS_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance"
        description="Managing automotive inventory requires strict control over data and transactions. The system records every activity, ensuring transparency and reducing risks of errors or unauthorized changes. Role-based access improves security across operations. Owners' inventory provides a secure environment for automotive store operations."
        secondDescription="By improving data accuracy, the system supports better operational control and consistency."
      />

      <ToolsSection
        heading={AUTO_PARTS_INVENTORY_TOOLS_DATA.heading}
        description={AUTO_PARTS_INVENTORY_TOOLS_DATA.paragraph}
        tools={AUTO_PARTS_INVENTORY_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={AUTO_PARTS_INVENTORY_TESTIMONIALS}
        heading={AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={AUTO_PARTS_INVENTORY_TESTIMONIAL_FEATURES}
        iconSet="autoStoreInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="The Auto Parts Inventory Management Software is aimed at ensuring the ease of daily operations and efficiency. The following are some of the responses to typical questions by Auto Parts Inventory Management Software."
          faqs={AUTO_PARTS_INVENTORY_FAQS}
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
