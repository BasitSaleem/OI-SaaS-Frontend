"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/operation-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/inventory-operations-page/why-chose-banner.webp";
import {
  MANUFACTURING_FAQS,
  MANUFACTURING_FEATURES_CARDS,
  MANUFACTURING_INDUSTRIES,
  MANUFACTURING_TESTIMONIALS,
  MANUFACTURING_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/manufacturingData";

// 🔥 Dynamic Imports
const TrustedBySection = dynamic(
  () => import("@/components/common-components/TrustedBySection")
);
const FeaturesCallToAction = dynamic(
  () => import("@/components/pages/features-page/FeaturesCallToAction")
);
const FeaturesTestimonials = dynamic(
  () => import("@/components/pages/features-page/FeaturesTestimonials")
);
const KeyHighlights = dynamic(
  () => import("@/components/pages/features-page/point-of-sale/KeyHighlights")
);
const WhyChoosePOS = dynamic(
  () => import("@/components/pages/features-page/point-of-sale/WhyChoosePOS")
);
const SubFeaturesHero = dynamic(
  () => import("@/components/pages/features-page/SubFeaturesHero")
);
const FaqSection = dynamic(
  () => import("@/components/pages/landing-page/FAQSection")
);
const IndustryPosShowcase = dynamic(
  () => import("@/components/pages/landing-page/IndustryPosShowcase")
);

const getLayoutPatterns = (cardCount: number) => {
  return [
    {
      className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
      mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
      paddingClass: "px-0",
    },
    {
      className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
      mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
      paddingClass: "px-0",
    },
    {
      className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3",
      mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
      paddingClass: "px-0",
    },
    {
      className: "col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-4 xl:col-span-6 xl:col-start-4",
      mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
      paddingClass: "px-0",
    },
  ];
};

const Page = () => {
  const layoutPatterns = getLayoutPatterns(MANUFACTURING_FEATURES_CARDS.length);

  return (
    <div>
      <SubFeaturesHero
        title="Smart Manufacturing Control for Real Growth"
        description="Streamline your production process, manage raw materials, and oversee every manufacturing stage with precision and ease."
        image={heroBanner}
        imageClassName="max-w-[1050px]"
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      <TrustedBySection
        heading="Trusted by Production Leaders"
        paragraph="We work with manufacturers across industries to help them streamline operations, track production orders, and maintain high-quality standards."
      />
      <KeyHighlights
        heading="Production Highlights"
        features={MANUFACTURING_FEATURES_CARDS}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Our Manufacturing Tools?"
        paragraph="Gain complete control over your production floor. Our system is designed to provide visibility, efficiency, and scalability for manufacturers of all sizes."
        cards={MANUFACTURING_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Built for Diverse Manufacturing Sectors"
          paragraph="From garments to food processing, Owners Inventory adapts to your specific manufacturing workflows and requirements."
          buttonText="Explore All Industries"
          industries={MANUFACTURING_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Optimize. Automate. Grow."
        description="Experience the power of manufacturing management software that brings order and efficiency to your production lines."
      />
      <FeaturesTestimonials
        testimonials={MANUFACTURING_TESTIMONIALS}
        heading="Owner Success Stories"
        showSmartTools={true}
        secondHeading="Stay Competitive with Smart Manufacturing"
        secondDescription="Track everything from raw materials to finished goods with integrated workflows and real-time reporting."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Manufacturing Management FAQs"
          paragraph="Learn more about how Owners Inventory can help you manage and grow your manufacturing operations."
          faqs={MANUFACTURING_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;
