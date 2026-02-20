"use client";

import React from "react";
import imageOne from "../../../../../public/assets/marketing-assets/Frame1.png";
import {
  MARKETING_FAQS,
  MARKETING_FEATURES_CARDS,
  MARKETING_INDUSTRIES,
  MARKETING_TESTIMONIALS,
  MARKETING_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/marketingData";

import TrustedBySection from "@/components/common-components/TrustedBySection";
import FeaturesCallToAction from "@/components/pages/features-page/FeaturesCallToAction";
import FeaturesTestimonials from "@/components/pages/features-page/FeaturesTestimonials";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubFeaturesHero from "@/components/pages/features-page/SubFeaturesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryPosShowcase from "@/components/pages/landing-page/IndustryPosShowcase";

// Function to get layout patterns based on card count
const getLayoutPatterns = (cardCount: number) => {
  switch (cardCount) {
    case 2:
      return [
        {
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
        {
          className: "col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
      ];
    case 4:
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
          className:
            "col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-4 xl:col-span-6 xl:col-start-4",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
      ];
    default:
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
          className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
      ];
  }
};

const Page = () => {
  // Get layout patterns based on FeaturesCards length
  const layoutPatterns = getLayoutPatterns(MARKETING_FEATURES_CARDS.length);
  return (
    <div>
      <SubFeaturesHero
        title="Power Your Business with Smart Marketing Tools"
        description="Owner's Inventory Marketing helps you boost customer engagement and sales. It's simple, highly effective and works perfectly. Whether you want to reward your most loyal customers or easily attract new ones, it’s all taken care of under a single platform."
        image={imageOne}
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      <TrustedBySection
        heading="Trusted by Leading Brands"
        paragraph="Businesses like Al-Asif and Bright Home rely on Owners Inventory Marketing to get better at customer retention and growth. From small shops to large retailers, owners inventory help brands increase repeat purchases and engage customers more effectively."
      />
      <KeyHighlights
        heading="Smart Marketing Features"
        features={MARKETING_FEATURES_CARDS}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Our Marketing Features?"
        paragraph="Choose Owner's Inventory because we offer simplicity, smart automation and real time data you can trust. We give you more than just marketing tools. We actively help you engage customers, increase their loyalty and grow your revenue in a much smarter way."
        cards={MARKETING_WHY_CHOOSE_CARDS}
        mainImage="/assets/marketing-assets/Frame2.png"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Industry Ready Marketing"
          paragraph="The Marketing module is designed to support your business whether you are a manufacturer, wholesaler, distributor or retailer. It helps you attract customers, retain them, and promote your brand with complete clarity."
          buttonText="Explore All Industries"
          industries={MARKETING_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Reward Customers. Grow Your Business."
        description="Owners Inventory Marketing makes creating coupons and loyalty programs simple, automated and effective. So you can focus on growing your business."
      />
      <FeaturesTestimonials
        testimonials={MARKETING_TESTIMONIALS}
        heading="What Clients Say About Us?"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart Marketing Tools"
        secondDescription="Everything you need to reach the right audience, run effective campaigns, and grow your business through data-driven marketing strategies."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-[100]">
        <FaqSection
          heading="Everything You Need to Know About Marketing Features"
          paragraph="Our marketing tools help you reach the right customers, increase engagement, and grow sales. Find answers below to the most frequently asked questions about marketing in Owners Inventory."
          faqs={MARKETING_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;
