"use client";

import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/bookstore-pos/bookstore-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/bookstore-pos/bookstore-why-chose-banner.webp";

import {
  BOOKSTORE_KEY_FEATURES_CARDS,
  BOOKSTORE_WHY_CHOOSE_CARDS,
  BOOKSTORE_FEATURE_CARDS
} from "@/constant/subindustries/posBookstoreData";


import TrustedBySection from "@/components/common-components/TrustedBySection";
import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import posBookstorePageIcons from "@/components/icons/posBookstorePageIcons";
import {
  BOOKSTORE_UNIFIED_CARDS,
  BOOKSTORE_UNIFIED_HEADING,
  BOOKSTORE_UNIFIED_PARAGRAPH,
  BOOKSTORE_WORKFLOW_DATA,
  BOOKSTORE_TESTIMONIALS,
  BOOKSTORE_FAQS,
  BOOKSTORE_TESTIMONIAL_DATA,
  BOOKSTORE_TESTIMONIAL_FEATURES,
  BOOKSTORE_TOOLS_DATA,
} from "@/constant/subindustries/posBookstoreData";
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
        title="Smart Bookstore POS Software for Better Selling"
        description="Bookstores lose nearly 18% of sales due to poor inventory tracking and slow checkout experiences. Our Bookstore POS system transforms your store into a fast, organized, and fully connected space. Manage books, customers, sales, suppliers, and online orders from a single, clean dashboard. Make each transaction smooth and every book easy to find."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={BOOKSTORE_UNIFIED_HEADING}
        paragraph={BOOKSTORE_UNIFIED_PARAGRAPH}
        cards={BOOKSTORE_UNIFIED_CARDS}
        IconsComponent={posBookstorePageIcons}
      />

      <WhyChoosePOS
        heading="How Our POS Software Solves These Challenges"
        paragraph="Owners Inventory eliminates operational confusion by connecting sales, stock, suppliers, and reporting in one unified platform."
        cards={BOOKSTORE_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        IconsComponent={posBookstorePageIcons}
      />

      <KeyHighlights
        heading="Our Key Features"
        features={BOOKSTORE_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={BOOKSTORE_WORKFLOW_DATA.heading}
        paragraph={BOOKSTORE_WORKFLOW_DATA.paragraph}
        steps={BOOKSTORE_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Get Control of Your Inventory Now"
        description="Our bookstore POS will simplify your inventory and eliminate errors and make it more efficient. Start now and discover how our solution can simplify the operations of the bookstores and enable you to maximize your sales potential."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={BOOKSTORE_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, & Compliance."
        description="A good bookstore POS system will make sure that all the transactions are well-documented and tracked. The user roles and permissions restrict access to sensitive information and minimize errors and misuse. All data in the bookstores is safe and secure."
        secondDescription="The system also keeps audit trails and facilitates compliance needs, protecting inventory and financial records. The real-time tracking will provide a clear view of stock movement and automated reports will reduce the number of mistakes made by the manual process and keep the books accurate."
      />

      <ToolsSection
        heading={BOOKSTORE_TOOLS_DATA.heading}
        description={BOOKSTORE_TOOLS_DATA.paragraph}
        tools={BOOKSTORE_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={BOOKSTORE_TESTIMONIALS}
        heading={BOOKSTORE_TESTIMONIAL_DATA.heading}
        paragraph={BOOKSTORE_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={BOOKSTORE_TESTIMONIAL_DATA.secondHeading}
        secondDescription={BOOKSTORE_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={BOOKSTORE_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={BOOKSTORE_TESTIMONIAL_DATA.whyChooseDescription}
        features={BOOKSTORE_TESTIMONIAL_FEATURES}
        IconsComponent={posBookstorePageIcons}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our bookstore POS system is designed to make daily operations smooth and easy.
Here are answers to some common questions from bookstore owners."
          faqs={BOOKSTORE_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Take Charge of Your Bookstore Business Today"
        description="Due to stock mistakes, slow billing, and inaccuracies, bookstores lose significant revenue. Owners Inventory reduces losses, helps manage orders efficiently, and keeps title tracking accurate."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;
