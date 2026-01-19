"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/integration-page/integration-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/integration-page/why-chose-banner.webp";

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



const FeaturesCards = [
  {
    id: 1,
    title: "Strong Integrations for All Types of Businesses",
      description:
      "Connect with top third-party platforms through Owners Inventory, which are essential for expanding and improving modern businesses. Integrations that make Owners Inventory a connected, and future-ready solution are listed below. ",
    imageSrc:
      "/assets/features-page/integration-page/features-section/strong-integration.webp",
    
  },
  {
    id: 2,
    title: "Shopify Integration",
      description:
      "Connect your Shopify store with Owners Inventory to sync products, stock, orders, and customer data in real time. Keep inventory updated automatically, manage orders easily, and track sales performance across all channels from one place.",
    imageSrc:
      "/assets/features-page/integration-page/features-section/shopify-integration.webp",
    
  },
  {
    id: 3,
    title: "WooCommerce Integration",
    description:
      "Connect WooCommerce with Owners Inventory to sync products, stock, pricing, and orders in real time. Manage inventory, orders, and sales insights from one unified dashboard.",
    imageSrc:
      "/assets/features-page/integration-page/features-section/woocommerce-integration.webp",
      
  },
  {
    id: 4,
    title: "Quickbooks Integration",
    description:
      "Integrate QuickBooks with Owners Inventory to automatically sync sales, purchases, and expenses, reduce manual errors, and get real-time financial reports for better control.",
    imageSrc:
      "/assets/features-page/integration-page/features-section/quickbook-integration.webp",
     
  },
   {
    id: 5,
    title: "Payment Getaway Integration",
    description:
      "Owners Inventory integrates with trusted payment gateways to accept secure online and in-store payments, track transactions in real time, automate reconciliation, and maintain full control over revenue.",
    imageSrc:
      "/assets/features-page/integration-page/features-section/payment-gateway.webp",
      
  },
   {
    id: 6,
    title: "Marketing Tools Integration",
    description:
      "Owners Inventory integrates with marketing tools to sync customer data, track campaign performance, and use real-time sales insights for targeted promotions and follow-ups.",
    imageSrc:
      "/assets/features-page/integration-page/features-section/marketing-tools.webp",
      
  },
  
];

const integrationFaqs = [
  {
    id: 1,
    question:
      "If an integration error occurs, will my data be recoverable?",
    answer:
      "Although it is unlikely that your data will be lost, we will help you recover it if it does. To guarantee that any affected data can be promptly restored, Owners Inventory keeps thorough activity logs and safe backups. Our staff will help you right away to fix the problem and get your data back without causing any long-term effects.",
  },
  {
    id: 2,
    question: "Does integration help reduce manual errors?",
    answer:
      "Yes. Inaccurate financial entries, duplicate records, stock mismatches, and human errors are all greatly decreased by automated syncing. This guarantees that your company runs more precisely and effectively.",
  },
  {
    id: 3,
    question:
      "Is it possible to simultaneously sync several eCommerce sites?",
    answer:
      "Yes, it is indeed. To centrally manage inventory, products, and sales, you can link several Shopify or WooCommerce stores. This allows you to operate with proper consistency and control.",
  },
  {
    id: 4,
    question: "How safe is the Integration process?",
    answer:
      "Strict permission controls and encrypted APIs are used by Owners Inventory to safeguard your data and guarantee safe communication with external platforms. This stops unwanted data access and offers enterprise-level protection.",
  },
  {
    id: 5,
    question: "Can I request a custom Integration?",
    answer:
      "Yes, you can. Custom tool integration tailored to your company’s operations can be created by our team. We customize integration to fit your long-term objectives, industry demands, and workflows. If there is any specific tool or platform you want to integrate, we can build that for you as well.",
  },
];

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
  className: "col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-4 xl:col-span-6 xl:col-start-4",
  mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
  paddingClass: "px-0",
}
      ];
    default:
      // Return the 4-card layout as default
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

const integrationTestimonials = [
  {
    name: "Sadia Noor",
    title: "Operations Manager, Bright Home",
    image: "/assets/pfp.avif",
    text: `Connecting our Shopify store with Owners Inventory has completely changed our process. Orders, customers, and stock sync instantly, and our team no longer needs to update anything manually. It’s smooth, reliable, and saves us hours daily.`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Alexa Catherine",
    title: "Co-Founder, The Brew Café",
    image: "/assets/pfp.avif",
    text: `We integrated WooCommerce and QuickBooks together through Owners Inventory, and it has made all the difference. Reports are accurate, payments flow properly, and financial tasks are far easier to manage. Everything works in real time across our team.`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Alice Marshall",
    title: "Owner, Al-Asif Supermart",
    image: "/assets/100.jpeg",
    text: `What stands out the most is how easy the system makes complex work feel. Our payment gateway and marketing tools work together without any confusion. The integration is stable, and the support team always guides us when we need help.`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
 
];

const Page = () => {
  // Get layout patterns based on FeaturesCards length
  const layoutPatterns = getLayoutPatterns(FeaturesCards.length);
  
  return (
    <div>
      <SubFeaturesHero
        title="Connect Businesses through Smart Integrations"
        description="Integrate operations with smooth third-party platforms and tools to unify your business with Owners Inventory’s Integration Module. Accounting, payments and marketing are all connected together by our integration-ready service."
        // video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        image={heroBanner}
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Trusted by Leading Companies"
        paragraph="Owners Inventory helps brands like Al-Asif, Sportify, and ASK Food Industries connect their stores, manage inventory, and streamline financial processes, enabling them to scale smoothly with powerful integrations."
      />
      <KeyHighlights
        heading="Why Integrations Matters"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
        
      />

      <WhyChoosePOS
        heading="Why Choose Owners Inventory Integration?"
        paragraph="Automated, integrated reporting designed to give you clear insights, better visibility, and full control over your daily operations."
        cards={[
          {
            icon: "/assets/features-page/intigration-page/why-chose/unified-business.svg",
            title: "Unified Business Control",
            description:
              "Manage marketing, accounting, and operations in one connected system with full visibility.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/seamless-automation.svg",
            title: "Error-Free Automation",
            description:
              "Get rid of human errors and duplicate data. Give repetitive tasks to automated workflows so that your team can concentrate in expansion.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/scalable-for-growth.svg",
            title: "Faster Decision Making",
            description:
              "Get real-time data from all channels to make accurate, informed decisions.",
          },
          {
            icon: "/assets/features-page/intigration-page/why-chose/easy-to-scale.svg",
            title: "Easy to Scale",
            description:
              "Easily add or expand integrations as you grow, staying flexible with a system that adapts to changing needs.",
          },
          
         
        ]}
        mainImage= {whyChoseBanner}
      />

     

      <FeaturesCallToAction
        title="Elevate Businesses Through Our Integration"
        description="With Owners Inventory, integrate all platforms, optimize data, and simplify daily tasks. Our integration module unifies marketing, sales, accounting, and payments for full team visibility."
        ctaDesc="Get Started Now"
      />
      <FeaturesTestimonials
        testimonials={integrationTestimonials}
        heading="Clients’ Voices"
        showSmartTools={true}
        secondHeading="Contact Us"
        secondDescription="We’re available 24/7 for any questions about integration or setup. Contact us for a free demo and see how Owners Inventory fits smoothly into your system."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Everything You Should Know About Owners Inventory Integration"
          paragraph="Gain the clarity you require regarding the powerful inventory management reporting tools of Owners Inventory. We have also addressed the most frequently asked questions, so you can make the most of your point of sale reporting system, from setup to insights."
          faqs={integrationFaqs}
        />
      </div>
    </div>
  );
};

export default Page;