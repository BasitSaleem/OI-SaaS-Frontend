"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/sales-order-banner.webp";
import {
  SALES_FAQS,
  SALES_FEATURES_CARDS,
  SALES_INDUSTRIES,
  SALES_TESTIMONIALS,
} from "@/constant/subfeatures/salesData";
import { POS_LAYOUT_PATTERNS } from "@/constant/subfeatures/posData";

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

const Page = () => {
  return (
    <div>
      <SubFeaturesHero
        title="Turn Every Sale into a Success Story"
        description="Make it easier to sell, monitor, and process orders all under one roof. Manage sales channels, automate invoices, and stay focused on the driving power of your business with Owners Inventory."
        image={heroBanner}
         video="/assets/features-page/hero-section-banners/sales-order-anim.webm"
        imageClassName="max-w-[930px]"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Our Valued Clients"
        paragraph="We proudly work with trusted brands like Al-Asif and Bright Home, helping them streamline sales and inventory management. Our platform automates stock updates and daily operations, enabling smarter, faster, and more efficient business growth."
      />
      <KeyHighlights
        heading="Key Features"
        features={SALES_FEATURES_CARDS}
        layoutPatterns={POS_LAYOUT_PATTERNS}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Sales and Orders Tailored for Your Industry"
          paragraph="All businesses sell differently, and your sales system needs to realize that. Whatever you sell, Owners Inventory offers flexible, industry-ready tools to make transactions easier, more accurate, and enable your team to make sales more quickly."
          buttonText="Explore All Industries"
          industries={SALES_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Sell Smarter. Deliver Faster. Grow Bigger."
        description="Take control of every sale, from order to delivery, with tools that help you work faster, track better, and scale confidently with Owners Inventory."
      />
      <FeaturesTestimonials
        testimonials={SALES_TESTIMONIALS}
        heading="Words That Inspire Our Work"
        showSmartTools={true}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-[100]">
        <FaqSection
          heading="Everything You Need to Know About Sales and Orders"
          paragraph="Sales management should not be complex. Our modern POS point of sale with a stock management system will give you everything you will need to manage billing, invoices, and orders easily. Here is what you need to know about how our sales and order management software can help businesses like yours grow faster and smarter."
          faqs={SALES_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;
