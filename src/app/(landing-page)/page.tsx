"use client";
import "../globals.css";
import React, { useEffect, Suspense } from "react";
import Image from "next/image";
import { caseStudiesData } from "@/constant/caseStudiesData/caseStudiesData";
import dynamic from "next/dynamic";


// Lazy load all components
const HeroSection2 = dynamic(
  () => import("@/components/common-components/HeroSection2"),
);
const TrustedBySection = dynamic(
  () => import("@/components/common-components/TrustedBySection"),
);
const TurningChaos = dynamic(
  () => import("@/components/pages/landing-page/TurningChaos"),
);
const CaseStudies = dynamic(
  () => import("@/components/pages/landing-page/CaseStudy"),
);
const SmartWaytoSyncndSellSection = dynamic(
  () => import("@/components/pages/landing-page/SmartWaytoSyncndSellSection"),
);
const UnifiedPlatform = dynamic(
  () => import("@/components/pages/landing-page/UnifiedPlatform"),
);
const VoicesRealBusiness = dynamic(
  () => import("@/components/pages/landing-page/VoicesRealBusiness"),
);
const IndustryPosShowcase = dynamic(
  () => import("@/components/pages/landing-page/IndustryPosShowcase"),
);
const PosIconsSection = dynamic(
  () => import("@/components/pages/landing-page/Smartway"),
);
const ToolsSection = dynamic(
  () => import("@/components/pages/landing-page/ToolsSection"),
);
const SmartTools = dynamic(
  () => import("@/components/pages/landing-page/SmartTools"),
);
// const InsightsSection = dynamic(
//   () => import("@/components/pages/landing-page/InsightsSection"),
// );
const FaqSection = dynamic(
  () => import("@/components/pages/landing-page/FAQSection"),
);
const CalltoActionBottom = dynamic(
  () => import("@/components/pages/landing-page/CalltoActionBottom"),
);
// const FeaturesTabSection = dynamic(
//   () => import("@/components/pages/landing-page/FeaturesSection"),
// );
const FeaturesTabSection = dynamic(
  () => import("@/components/pages/landing-page/FeaturesTabSection")
);

const homeFaqs = [
  {
    id: 1,
    question: "How does Owners Inventory sync across multiple platforms?",
    answer:
      "Our intelligent syncing engine automatically updates stock, pricing and product information in real time across all the linked stores, online marketplaces and POS systems.",
  },
  {
    id: 2,
    question: "Can I integrate Owners Inventory with my e-commerce store?",
    answer:
      "Yes! It is easy to sell on multiple channels with us, and we provide easy integrations with large e-commerce articles such as Shopify, WooCommerce, and others.",
  },
  {
    id: 3,
    question: "Is Owners Inventory suitable for small businesses?",
    answer:
      "Absolutely. Our inventory for small business provides small stores up to big chain stores with flexible features and affordable plans depending on the size of your business.",
  },
  {
    id: 4,
    question: "Who is Owners Inventory designed for?",
    answer:
      "It’s built for retailers, wholesalers, distributors, manufacturers, and ecommerce businesses who want complete control over sales, inventory, staff, and multi-location operations.",
  },
  {
    id: 5,
    question: "What support options are available if I face issues?",
    answer:
      "We have a committed support staff on chat, email, and phone. We also have some excellent tutorials, video instructions and FAQs so that you can solve problems fast.",
  },
  {
    id: 6,
    question: "Does Owners Inventory support Integrations?",
    answer:
      "Yes. You can sync products, inventory, orders, customers, and financials across Shopify, WooCommerce, QuickBooks, Stripe, and marketing platforms like HubSpot or Mailchimp.",
  },
];

const homeIndustries = [
  {
    id: 1,
    title: "Retail Stores",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "See the whole picture with point of sale reporting systems that monitor daily sales, high-moving products, and inventory turnover - so you can maximize efficiency and profit margin.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp",
  },
  {
    id: 2,
    title: "Restaurant Types",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Speed up service with quick-bill POS, manage tables and menus with ease, and track ingredients or stock levels in real-time — ensuring smooth operations from kitchen to counter.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp",
  },
  {
    id: 3,
    title: "Wholesalers",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Handle bulk orders with custom pricing, manage multi-location stock, and keep fulfillment smooth. Streamline sales, purchases, and inventory operations. All in one system built for high-volume wholesalers.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp",
  },
  {
    id: 4,
    title: "Pharmacies",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Ensure safety and compliance with batch tracking, expiry alerts, and detailed logs, all while managing walk-in sales and digital prescriptions effortlessly.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp",
  },
  {
    id: 5,
    title: "Fashion & Apparel",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Track every size, color, and style with product variants, manage seasonal collections, and keep stock aligned across online and physical stores, whether you sell streetwear, shoes, or high fashion.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp",
  },
];

// Full page loading component
const FullPageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading Owners Inventory...</p>
    </div>
  </div>
);

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      try {
        history.scrollRestoration = "manual";
      } catch (e) {}
    }
  }, []);

  return (
    <>
      <div className="font-onset">
        <HeroSection2
          title="haider ali"
          description="Turn all assets to advantage. Our Owners Inventory platform assist you in managing, examining and displaying your inventory in a single, smart, interconnected environment - created to respond to real expansion."
          video="/assets/Manual.mp4"
          variant="animation2"
        />

        <TrustedBySection heading="Preferred to businesses who demand precision and performance" />

        <TurningChaos
          title="Turning Chaos Into Clarity"
          miniTitle="One Inventory at a Time"
          description="Owners Inventory assists any business to manage its assets with accuracy regardless of their size. Everything is quicker, easier, and smarter, in terms of tracking and publishing with our inventory management system.
            Made by the owners, owned by the owners - since you need the tools that can think like you. Let us simplify the management of what belongs to you."
        />

        <CaseStudies caseStudies={caseStudiesData} />

        <FeaturesTabSection />

        <SmartWaytoSyncndSellSection />

        <UnifiedPlatform />

        <VoicesRealBusiness />

        <IndustryPosShowcase
          mainHeading="Built for Every Industry"
          paragraph="No matter what you sell, the Owners Inventory management program adapts to you."
          buttonText="Explore All Industries"
          industries={homeIndustries}
        />

        <PosIconsSection />

        <ToolsSection />

        <div className="wrapper">
          <SmartTools />
        </div>

        {/* <InsightsSection /> */}
 

      <div className="lg:pt-[100px] md:pt-40 pt-28">
        <FaqSection faqs={homeFaqs} />

        </div>

        <CalltoActionBottom />
      </div>
    </>
  );
}
