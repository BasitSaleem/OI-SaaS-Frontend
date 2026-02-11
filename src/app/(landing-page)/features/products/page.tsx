"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/products-page/products-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/integration-page/why-chose-banner.webp";
import {
  PRODUCT_FAQS,
  PRODUCT_FEATURES_CARDS,
  PRODUCT_INDUSTRIES,
  PRODUCT_TESTIMONIALS,
  PRODUCT_WHY_CHOOSE_CARDS,
} from "@/constant/subfeatures/productData";
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
        title="Manage Your Products Seamlessly with Owners Inventory"
        description="Create, manage, and monitor all your products effectively through the Product Management Feature in Owners Inventory. Organize stock levels, set prices, SKUs, and barcodes with complete transparency and accuracy."
        image={heroBanner}
        imageClassName="lg:my-14 my-11 max-w-[1040px]"
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Our Trusted Companies"
        paragraph="Trusted by innovative retail, wholesale, and service brands, our solutions bring precision, simplicity, and speed to daily operations. We power businesses like Al-Asif and ASK Food Industries with smart cataloging and reliable data."
      />
      <KeyHighlights
        heading="Our Key Features"
        features={PRODUCT_FEATURES_CARDS}
        layoutPatterns={POS_LAYOUT_PATTERNS}
      />

      <WhyChoosePOS
        heading="Why Choose Product Management System?"
        paragraph="Choose Owners Inventory because of its accuracy, scalability, and efficiency. It's not about stocks, but about smartly managing your business."
        cards={PRODUCT_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Industry-Ready Product Dashboard Solutions"
          paragraph="It does not matter whether you are a manufacturer, wholesaler, distributor, or retailer, our Product Management feature helps you manage your product operations with complete transparency and accuracy. From pricing to performance, Owners Inventory makes sure that every product in your catalog is organized, and optimized for your business."
          buttonText="Explore All Industries"
          industries={PRODUCT_INDUSTRIES}
        />
      </div>

      <FeaturesCallToAction
        title="Empower Products Elevate Businesses"
        description="With Owners Inventory, you have complete control over your POS System Product Listing, inventory, and pricing. Organizing and optimizing every aspect of your business is made easier with our platform."
      />
      <FeaturesTestimonials
        testimonials={PRODUCT_TESTIMONIALS}
        heading="Clients Voices"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart Product Management"
        secondDescription="Everything you need to manage products, organize catalogs, track availability, and scale your offerings with complete control and efficiency."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Everything You Need to Know About Owners Inventory"
          paragraph="Here are some things you should know, whether you are automating your stock system or setting up your catalog."
          faqs={PRODUCT_FAQS}
        />
      </div>
    </div>
  );
};

export default Page;
