import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/bakery-pos/bakery-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/bakery-pos/why-chose-banner.webp";

import {
  BAKERY_KEY_FEATURES_CARDS,
  BAKERY_WHY_CHOOSE_CARDS,
  BAKERY_FEATURE_CARDS
} from "@/constant/subindustries/posBakeryData";


import dynamic from "next/dynamic";

const VoicesRealBusiness = dynamic(() => import("@/components/pages/landing-page/VoicesRealBusiness"), { ssr: true });
const IndustryUnifiedPlatform = dynamic(() => import("@/components/pages/industries-page/IndustryUnifiedPlatform"), { ssr: true });
const WhyChoosePOS = dynamic(() => import("@/components/pages/features-page/point-of-sale/WhyChoosePOS"), { ssr: true });
const KeyHighlights = dynamic(() => import("@/components/pages/features-page/point-of-sale/KeyHighlights"), { ssr: true });
const InventoryWorkflow = dynamic(() => import("@/components/pages/industries-page/InventoryWorkflow"), { ssr: true });
const IndustriesCallToAction = dynamic(() => import("@/components/pages/industries-page/IndustriesCallToAction"), { ssr: true });
const IndustriesFeaturesSection = dynamic(() => import("@/components/pages/industries-page/IndustriesFeaturesSection"), { ssr: true });
const SecurityCompliance = dynamic(() => import("@/components/pages/industries-page/securityCompliance"), { ssr: true });
const ToolsSection = dynamic(() => import("@/components/pages/landing-page/ToolsSection"), { ssr: true });
const IndustriesTestimonial = dynamic(() => import("@/components/pages/industries-page/IndustriesTestimonial"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/pages/landing-page/FAQSection"), { ssr: true });
const IndustriesHardwareControl = dynamic(() => import("@/components/pages/industries-page/IndustriesHardwareControl"), { ssr: true });

import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import {
  BAKERY_UNIFIED_CARDS,
  BAKERY_UNIFIED_HEADING,
  BAKERY_UNIFIED_PARAGRAPH,
  BAKERY_WORKFLOW_DATA,
  BAKERY_TESTIMONIALS,
  BAKERY_FAQS,
  BAKERY_TESTIMONIAL_DATA,
  BAKERY_TESTIMONIAL_FEATURES,
  BAKERY_TOOLS_DATA,
} from "@/constant/subindustries/posBakeryData";


const Page = () => {
  return (
    <div>
      <SubIndustriesHero
        title="POS System For Bakeries Controlling Orders & Inventory"
        description="Manage your bakery with complete precision and control using Owners Inventory, the ultimate POS system for bakeries. Every sale, including the latest ingredient updates and fresh batches of morning cakes to orders for custom-made cake designs are synced into one intelligent system. This system is designed for bakeries who need to track inventory in real time and bill quickly."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      {/* <TrustedBySection
        heading="Rated on Leading Review Platforms"
        paragraph="Big bakerys, specialty book shops, and wholesale book businesses trust Owners Inventory for fast, accurate, and error-free checkout."
      /> */}

      <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={BAKERY_UNIFIED_HEADING}
        paragraph={BAKERY_UNIFIED_PARAGRAPH}
        cards={BAKERY_UNIFIED_CARDS}
        iconSet="bakery"
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges?"
        paragraph="Every feature of our Bakery POS System was created to help take the pressure off and streamline your processes."
        cards={BAKERY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="bakery"
      />

      <KeyHighlights
        heading="Our Key Features"
        features={BAKERY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={BAKERY_WORKFLOW_DATA.heading}
        paragraph={BAKERY_WORKFLOW_DATA.paragraph}
        steps={BAKERY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Take Full Control of Your Bakery Operations"
        description="Our bakery POS reduces waste, accelerates billing and maintains accurate ingredient stocks. Simplify your day-to-day operations today."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={BAKERY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="Each transaction in the Owners Inventory has a time stamp and is recorded securely. Each staff member has access to only the information relevant to his or her responsibilities."
        secondDescription="Audit trails increase transparency, and they reduce the possibility of errors within an organization or unauthorized changes. Automated reports reduce manual errors and help ensure that financial records are accurate and in compliance."
      />

      <ToolsSection
        heading={BAKERY_TOOLS_DATA.heading}
        description={BAKERY_TOOLS_DATA.paragraph}
        tools={BAKERY_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={BAKERY_TESTIMONIALS}
        heading={BAKERY_TESTIMONIAL_DATA.heading}
        paragraph={BAKERY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={BAKERY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={BAKERY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={BAKERY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={BAKERY_TESTIMONIAL_DATA.whyChooseDescription}
        features={BAKERY_TESTIMONIAL_FEATURES}
        iconSet="bakery"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our bakery POS system is designed to make daily operations smooth and easy. Here are answers to some common questions from bakery owners."
          faqs={BAKERY_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Take Charge of Your Bakery Business Today"
        description="Due to stock mistakes, slow billing, and wastage, bakeries lose significant revenue. Owners Inventory reduces losses, helps manage orders efficiently, and keeps ingredient tracking accurate."
        ctaDesc="Start Today"
      />
    </div>
  );
};

export default Page;