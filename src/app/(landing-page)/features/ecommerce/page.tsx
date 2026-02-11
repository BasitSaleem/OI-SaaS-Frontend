"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/ecommerce-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/why-chose-banners/ecommerce-whychose.webp";
import {
  ECOMMERCE_FAQS,
  ECOMMERCE_FEATURES_CARDS,
  ECOMMERCE_INDUSTRIES,
  ECOMMERCE_TESTIMONIALS,
  ECOMMERCE_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/ecommerceData";
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
        title="Sell Everywhere, Manage from One Platform"
        description="Owners Inventory eCommerce links your online store, inventory, and POS together. Operate your business on web, mobile and social channels seamlessly with full control and real time view."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      <TrustedBySection
        heading="Brands that Trust Us"
        paragraph="Well-established companies such as Al-Asif and Bright Home use Owners Inventory ecommerce to operate their online stores in full control and in real time."
      />
      <KeyHighlights
        heading="Ecommerce Engine for Modern Growth"
        features={ECOMMERCE_FEATURES_CARDS}
        layoutPatterns={POS_LAYOUT_PATTERNS}
      />

      <WhyChoosePOS
        heading="Why Choose Our Ecommerce Powerhouse?"
        paragraph="Experience Seamless Selling with Powerful POS & eCommerce Integration."
        cards={ECOMMERCE_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Ecommerce That Adapts to Every Industry"
          paragraph="All businesses sell differently, yet they all require one integrated system. Owners Inventory provides unified eCommerce solutions that allow your store, inventory, and sales to be synchronized in all channels with seamless POS eCommerce integration."
          buttonText="Explore All Industries"
          industries={ECOMMERCE_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Your Store, Everywhere"
        description="Owners Inventory POS eCommerce integration turns your products into a global business. Connect with more customers, streamline your sales, and maintain contact with all channels, all in a single powerful dashboard."
      />
      <FeaturesTestimonials
        testimonials={ECOMMERCE_TESTIMONIALS}
        heading="What Clients Say About Us?"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart eCommerce Tools"
        secondDescription="Everything you need to sell online, manage products, streamline orders, and grow your eCommerce business with confidence."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Everything You Need to Know"
          paragraph="We’ve gathered the most common questions about our eCommerce POS system and POS eCommerce integration to help you understand how Owners Inventory transforms online business management."
          faqs={ECOMMERCE_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;
