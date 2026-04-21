import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/hotel-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/hotel-inventory-management-software/why-chose-banner.webp";

import {
  HOTEL_INVENTORY_KEY_FEATURES_CARDS,
  HOTEL_INVENTORY_WHY_CHOOSE_CARDS,
  HOTEL_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/hotelInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  HOTEL_INVENTORY_UNIFIED_CARDS,
  HOTEL_INVENTORY_UNIFIED_HEADING,
  HOTEL_INVENTORY_UNIFIED_PARAGRAPH,
  HOTEL_INVENTORY_WORKFLOW_DATA,
  HOTEL_INVENTORY_TESTIMONIALS,
  HOTEL_INVENTORY_FAQS,
  HOTEL_INVENTORY_TESTIMONIAL_DATA,
  HOTEL_INVENTORY_TESTIMONIAL_FEATURES,
  HOTEL_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/hotelInventoryManagementSoftwareData";
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
        title="Hotel Inventory Management Software For Effortless Operations"
        description="Our hotel inventory management software is designed to help hotels, resorts, and guesthouses manage their inventory efficiently and effectively. It helps track, control, and optimize your hotel's supplies, such as linens, toiletries, and operational stock. A centralized dashboard allows hotels to eliminate errors and waste, as well as ensure smooth operations in all departments."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={HOTEL_INVENTORY_UNIFIED_HEADING}
        paragraph={HOTEL_INVENTORY_UNIFIED_PARAGRAPH}
        cards={HOTEL_INVENTORY_UNIFIED_CARDS}
        iconSet="hotelInventory"
      />

      <WhyChoosePOS
        heading="How Our Hotel Inventory Management Software Can Help"
        paragraph="Our hotel inventory management software can help you overcome these problems by automating processes, providing real-time visibility, and improving inventory control."
        cards={HOTEL_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="hotelInventory"
      />

      <KeyHighlights
        heading="Key Features of Our Hotel Inventory Management Software"
        features={HOTEL_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={HOTEL_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={HOTEL_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={HOTEL_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title= "Managing Your Hotel Operations Smarter and faster"
        description= "A centralized system designed specifically for the hospitality industry can help you organize your hotel's inventory, cut down on unnecessary waste, and increase operational efficiency."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={HOTEL_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description= "This system provides a secure way to handle inventory data, while maintaining the accuracy of all hotel operations. Each transaction is documented, creating an audit trail which helps to maintain accountability."
      />
      
      <DisclaimerHotel
       title="All-in-One Hotel Inventory Platform"
        description= "An all in one hotel inventory platform centralizes stock control purchasing and reporting in one system. It ensures consistent data, reduces errors, improves visibility, and eliminates reliance on external tools or integrations."
        list={[
            { listheading: "No third-party dependency"},
            { listheading: "Centralized operations" },
            { listheading: "Unified data across modules"},
            { listheading: "Reduced integration costs"},
        ]}
      />
      

      <IndustriesTestimonial
        testimonials={HOTEL_INVENTORY_TESTIMONIALS}
        heading={HOTEL_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={HOTEL_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={HOTEL_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={HOTEL_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={HOTEL_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={HOTEL_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={HOTEL_INVENTORY_TESTIMONIAL_FEATURES}
        iconSet="hotelInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="The following are some of the common questions that are asked about our hotel inventory management software."
          faqs={HOTEL_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>

      <IndustriesHardwareControl
        title= "Streamline Your Hotel Inventory Management With Confidence"
        description= "With a modern system for hospitality management, you can take complete control over your hotel inventory, improve operational efficiency, reduce waste, and increase profitability."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
