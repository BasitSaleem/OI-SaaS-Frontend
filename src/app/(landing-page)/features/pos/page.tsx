"use client";
import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/pos-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/why-chose-banners/pos-whychose.webp";

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

import {
  POS_FAQS,
  POS_FEATURES_CARDS,
  POS_INDUSTRIES,
  POS_LAYOUT_PATTERNS,
  POS_TESTIMONIALS,
  POS_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/posData";

const Page = () => {
  return (
    <div>
      <SubFeaturesHero
        title="Empower Your Business with POS"
        description="Sell smarter with our POS system. Intended to be fast, accurate, and the best point of sale, it simplifies all transactions, operates inventory in real-time, and provides you with complete control over your business, all through a simple, easy-to-use interface."
        image={heroBanner}
        imageClassName= "lg:my-14 my-11 max-w-[880px]"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection 
      heading="Trusted by Leading Brands" 
      paragraph="Owners Inventory POS empowers businesses to simplify billing, automate inventory, and grow 
across multiple locations."
      />
      <KeyHighlights
        heading="Power-Packed Features at Your Fingertips"
        features={POS_FEATURES_CARDS}
        layoutPatterns={POS_LAYOUT_PATTERNS}
      />

      <WhyChoosePOS
        heading="Revolutionize Sales with Our Smarter POS"
        paragraph="Select the Owners Inventory POS because of reliability, efficiency, and innovativeness that help your business remain ahead of the curve. We do not simply assist you in selling, we assist you in being smarter, faster and more profitable."
        cards={POS_WHY_CHOOSE_CARDS}
        mainImage= {whyChoseBanner}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        {/* <IndustryPOSShowcase
        heading="Industry-Ready POS to Power Your Sales"
  description="There is no single business like another; then why use generic point-of-sale systems? Owners Inventory offers a customized point of sale software and point of sale solution to meet your industry specifications."
         industries={posIndustries} /> */}
        <IndustryPosShowcase
          mainHeading="Industry-Ready POS to Power Your Sales"
          paragraph="There is no single business like another; then why use generic point-of-sale systems? Owners Inventory offers a customized point of sale software and point of sale solution to meet your industry specifications."
          buttonText="Explore All Industries"
          industries={POS_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Sell Smarter. Run Your Business Better"
        description="Get a POS system to make your business smooth and trouble-free in practice by having complete control of sales, inventory, and operations."
      />
      <FeaturesTestimonials
        testimonials={POS_TESTIMONIALS}
        heading="What Clients Say About Us?"
        showSmartTools={true}
        secondDescription="Everything you need to manage sales, track inventory in real time, and run your business smoothly from a single point of sale system."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-[100]">
        <FaqSection
        heading="Everything You Need to Know About Owners' Inventory"
        paragraph="We’ve gathered the most common questions about Owners Inventory from setup and features to pricing and support. Still have doubts? Our team is ready to guide you every step of the way." 
        faqs={POS_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;
