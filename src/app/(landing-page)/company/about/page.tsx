"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../public/assets/features-page/hero-section-banners/purchases-banner.webp";
import whyChoseBanner from "../../../../../public/assets/about-us/who-we-banner.webp";
import WhoWeAre from "@/components/pages/contact-us/whoWeAre";
import PhilosophyIcons from "@/components/icons/philosophyIcons";

// 🔥 Dynamic Imports
const TrustedBySection = dynamic(
  () => import("@/components/common-components/TrustedBySection"),
);
const FeaturesCallToAction = dynamic(
  () => import("@/components/pages/features-page/FeaturesCallToAction"),
);
const FeaturesTestimonials = dynamic(
  () => import("@/components/pages/features-page/FeaturesTestimonials"),
);
const KeyHighlights = dynamic(
  () => import("@/components/pages/features-page/point-of-sale/KeyHighlights"),
);
const WhyChoosePOS = dynamic(
  () => import("@/components/pages/features-page/point-of-sale/WhyChoosePOS"),
);
const SubFeaturesHero = dynamic(
  () => import("@/components/pages/features-page/SubFeaturesHero"),
);
const MapComponent = dynamic(
  () => import("@/components/pages/contact-us/MapComponent"),
  { ssr: false },
);
const FaqSection = dynamic(
  () => import("@/components/pages/landing-page/FAQSection"),
);
const IndustryPosShowcase = dynamic(
  () => import("@/components/pages/landing-page/IndustryPosShowcase"),
);
const ContactHero = dynamic(
  () => import("@/components/pages/contact-us/contactHero"),
);
const OurPhilosophy = dynamic(
  () => import("@/components/pages/contact-us/ourPhilosophy"),
);

const WhoWeServe = dynamic(
  () => import("@/components/pages/contact-us/whoWeServe"),
);

const purchasesIndustries = [
  {
    id: 1,
    title: "Retail Stores",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Reorder your fast moving products automatically. Also, easily manages supplier discounts and tracks incoming shipments in real time.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp",
  },
  {
    id: 2,
    title: "Restaurant",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "For restaurants, easily track ingredient purchases, manage multiple vendors and use smart controls to prevent expensive overstocking or wastage.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp",
  },
  {
    id: 3,
    title: "Wholesalers",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Handle bulk procurement efficiently with supplier catalogs, multi warehouse support, and automated reorder levels.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp",
  },
  {
    id: 4,
    title: "Pharmacies",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Ensure accuracy and compliance with expiry monitoring and batch tracking. Supplier authentication for all medicine purchases is also provided.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp",
  },
  {
    id: 5,
    title: "Fashion & Apparel",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Order fabrics, accessories and finished goods efficiently by tracking supplier performance. Works according to seasonal demand and material availability.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp",
  },
];

const FeaturesCards = [
  {
    id: 1,
    title: "Centralized Purchase Management",
    description:
      "By Centralized Purchase Management, We manage purchase orders, bills and all supplier details in one spot. This simple system ensures procurement and inventory are always in sync. Our Purchase Order Management Software is the single source of truth for your business.",
    imageSrc:
      "/assets/features-page/purchases-page/features-section/centralized-purchase.webp",
  },
  {
    id: 2,
    title: "Supplier Directory & Management",
    description:
      "Keep all your supplier records organized like contact information and past transactions. Having this complete history makes it much easier and more reliable to manage your relationships with them.",
    imageSrc:
      "/assets/features-page/purchases-page/features-section/supplier-directory.webp",
  },
  {
    id: 3,
    title: "Automated Purchase Orders",
    description:
      "The system automatically generates and sends purchase orders based on stock levels and sales trends, preventing inventory shortages and missed sales, a key function of our Automated Purchase Management Solution.",
    imageSrc:
      "/assets/features-page/purchases-page/features-section/automated-purchase.webp",
  },
  {
    id: 4,
    title: "Bill Management and Tracking",
    description:
      "This function allows users to easily create and manage bills and purchase orders. Get instant access to all financial data for transparent and simple accounting.",
    imageSrc:
      "/assets/features-page/purchases-page/features-section/bill-management.webp",
  },
  {
    id: 5,
    title: "Purchase Approval Workflow",
    description:
      "Easily define approval steps for purchases. This guarantees compliance and accountability which gives you control without creating any hurdles.",
    imageSrc:
      "/assets/features-page/purchases-page/features-section/purchase-approval.webp",
  },
  {
    id: 6,
    title: "Import & Export Options",
    description:
      "Quickly imports data in bulk and exports reports to Excel. This is used for accounting and audits. Get the data flexibility that perfectly adapts to your workflow.",
    imageSrc:
      "/assets/features-page/purchases-page/features-section/import-option.webp",
  },
  {
    id: 7,
    title: "Comprehensive Dashboard",
    description:
      "Gain real-time visibility into purchase activity, supplier performance and pending bills. This is the power of a dedicated Purchase Tracking Software.",
    imageSrc:
      "/assets/features-page/people-page/features-section/performance-tracking.webp",
  },
  {
    id: 8,
    title: "Search & Filter Options",
    description:
      "Gain instant, real time clarity! Track all purchase activity, monitor supplier performance, and see pending bills right on a single, easy-to-use, interactive dashboard.",
    imageSrc:
      "/assets/features-page/sales-order/features-section/filter-option.webp",
  },
  {
    id: 9,
    title: "User-Friendly Interface",
    description:
      "A clean, interactive design means managing purchases is quick and easy. Spend less time struggling with software and more time improving your business.",
    imageSrc:
      "/assets/features-page/sales-order/features-section/user-friendly-interface.webp",
  },
];

const purchasesFaqs = [
  {
    id: 1,
    question: "What is the Purchases feature in Owners Inventory?",
    answer:
      "The Purchases feature helps you manage suppliers, create purchase orders, record stock receipts, and track costs from a single system. It ensures accurate inventory and better control over spending.",
  },
  {
    id: 2,
    question: "Can I manage multiple suppliers and vendor pricing?",
    answer:
      "Absolutely. You can add unlimited suppliers, assign vendor-specific prices, track purchase history, and manage outstanding balances easily.",
  },
  {
    id: 3,
    question: "How does your Purchase Management System improve efficiency?",
    answer:
      "Efficiency is enhanced through the automation of administrative tasks. This includes the automatic generation of purchase orders, the creation of bills and supplier tracking.",
  },
  {
    id: 4,
    question: "Can I integrate purchase management with inventory tracking?",
    answer:
      "Absolutely. Owners Inventory is designed to integrate fully, synchronizing all purchase data directly with your inventory records.",
  },
  {
    id: 5,
    question: "Is this suitable for multi-location businesses?",
    answer:
      "Yes. Whether managing a single location or a complex network of branches, Owners Inventory facilitates centralized purchasing control.",
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
          className:
            "col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-4 xl:col-span-6 xl:col-start-4",
          mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover",
          paddingClass: "px-0",
        },
      ];
    default:
      // Updated to handle 9 cards properly
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
      ];
  }
};

const purchasesTestimonials = [
  {
    name: "David Lawson",
    title: "Procurement Head, TradePoint",
    image: "/assets/features-page/testimonial-images/testinomial-boy10.webp",
    text: `Before Owners Inventory, managing our materials purchases was a difficult task. Now, the entire automated process is easy. We have completely eliminated manual errors and saved hours for our team.`,
  },
  {
    name: "Megan Scott",
    title: "Inventory Analyst, StockBridge",
    image: "/assets/features-page/testimonial-images/testinomial-girl10.webp",
    text: `Switching to this system has changed how we handle procurement. We no longer worry about late payments or missed orders.`,
  },
  {
    name: "Chris Bennett",
    title: "CEO, OmniRetail Solutions",
    image: "/assets/features-page/testimonial-images/testinomial-boy11.webp",
    text: `We are impressed with how the system handles everything, from supplier management to automated bill generation. It simplifies buying, tracking and managing everything.`,
  },
];

const Page = () => {
  // Get layout patterns based on FeaturesCards length
  const layoutPatterns = getLayoutPatterns(FeaturesCards.length);

  return (
    <div>
      <ContactHero
        title="Empowering Businesses with Complete Inventory Control"
        description="Owners Inventory integrates POS, eCommerce, and inventory management into one system, streamlining operations and giving retailers confidence, clarity, and control."
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      {/* Fixed: Using capitalized component name */}
      <WhoWeAre />

      <OurPhilosophy
        heading="Our Philosophy"
        paragraph="At Owners Inventory, we are of the opinion that visibility and control are the real owners. Business owners can make smarter decisions, minimize inefficiencies, and scale with confidence when they have a clear picture of what is going on in their business. We have a couple of principles that our platform is based on."
        cards={[
          {
            icon: <PhilosophyIcons name="complication" size={40} />,
            title: "Power without complication",
            description:
              "Power without being complicated: Simple to operate, yet able to perform complicated tasks.",
          },
          {
            icon: <PhilosophyIcons name="centralized" size={40} />,
            title: "Reliable & Centralized",
            description:
              "Reliable updates and centralized data can be trusted by businesses to make informed decisions.",
          },
          {
            icon: <PhilosophyIcons name="scalabilityExpension" size={40} />,
            title: "Scalability for Expansion",
            description:
              "Built to scale grow from a single store to multi-location operations with Owners Inventory.",
          },
          {
            icon: <PhilosophyIcons name="ownerControl" size={40} />,
            title: "Owner Control",
            description:
              "Power squarely in the hands of the business owners: Flexibility to run operations at your own will.",
          },
        ]}
      />

      <FeaturesCallToAction
        title="Looking Ahead"
        description="The retail landscape is ever-evolving, and so are we. We are committed to continuous innovation, developing forward-looking tools that help you navigate changes in consumer behavior and technology. With Owners Inventory, you aren't just managing today's sales; you are preparing for tomorrow's growth."
        ctaDesc="Get Started Now"
      />

      <WhyChoosePOS
        heading="What We Do"
        paragraph="Owners Inventory offers a single platform that simplifies business operations for retailers, wholesalers, distributors, manufacturers, and eCommerce sellers, integrating inventory management, purchasing and POS into one system."
        cards={[
          {
            icon: "/assets/about-us/why-chose/stock-levels.svg",
            title: "Accurate Stock Levels",
            description:
              "Eliminate over-selling and stockout with precise, real-time tracking.",
          },
          {
            icon: "/assets/about-us/why-chose/simplified-perchasing.svg",
            title: "Simplified Purchasing",
            description:
              "Streamlined PO creation and vendor management to keep inventory flowing.",
          },
          {
            icon: "/assets/about-us/why-chose/real-time-insights.svg",
            title: "Real-time Insights",
            description:
              "Performance analytics that help you view, manage, and optimize margins.",
          },
          {
            icon: "/assets/about-us/why-chose/growth-management.svg",
            title: "Growth Management",
            description:
              "Tools designed to help you expand locations without expanding complexity.",
          },
        ]}
        mainImage={whyChoseBanner}
      />

      {/* <KeyHighlights
        heading="Key Features"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      /> */}

      <WhyChoosePOS
        heading="Why Choose Us?"
        paragraph="By choosing Owners Inventory, you are not just adopting software. You are implementing a complete purchasing strategy designed for control and growth. Our platform transforms purchasing from a cost center into a strategic advantage, ensuring every transaction is accurate."
        cards={[
          {
            icon: "/assets/features-page/purchases-page/why-chose/automated-buying.svg",
            title: "Automated Buying, Zero Effort",
            description:
              "We automate your purchase process from receiving items to bill approval, reducing errors and boosting efficiency.",
          },
          {
            icon: "/assets/features-page/purchases-page/why-chose/everything-in-oneplace.svg",
            title: "Everything in One Place",
            description:
              "Stay updated with precise, real-time data so you can make smarter decisions and always know what's happening in your inventory.",
          },
          {
            icon: "/assets/features-page/purchases-page/why-chose/smarter-decision.svg",
            title: "Smarter Decisions, Faster",
            description:
              "Our system gives you real-time analytics and easy dashboards, helping you instantly see trends and supplier performance for faster decisions.",
          },
          {
            icon: "/assets/features-page/purchases-page/why-chose/grow-business.svg",
            title: "Grows With Your Business",
            description:
              "Whether you're a small team or a large operation, Owners Inventory scales effortlessly and adapts to your business without any hassle.",
          },
          {
            icon: "/assets/features-page/purchases-page/why-chose/dedicated-support.svg",
            title: "Dedicated Support, 24/7",
            description:
              "Our dedicated support team is available 24/7, ensuring your purchasing operations run smoothly without interruption.",
          },
        ]}
        mainImage={whyChoseBanner}
      />

      <WhoWeServe
        heading="Who We Serve"
        paragraph="Our platform offers the flexibility needed for various retail models. From single storefronts to complex warehouse networks, we provide the operational backbone."
        cards={[
          {
            icon: <PhilosophyIcons name="cashCarry" size={40} />,
            title: "Cash & Carry",
            description:
              "Fast-paced environments requiring instant checkout and stock updates.",
          },
          {
            icon: <PhilosophyIcons name="multiLocation" size={40} />,
            title: "Multi-Location",
            description:
              "Retailers managing stock transfers and unified reporting across branches.",
          },
          {
            icon: <PhilosophyIcons name="centralizedWarehouses" size={40} />,
            title: "Centralized Warehouses",
            description:
              "Distributors needing robust picking, packing, and shipping logic.",
          },
        ]}
      />

      {/* <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Purchases Tailored for Your Industry"
          paragraph="Whether you operate as a Manufacturer, a Wholesaler or a Retailer, our Purchases Function is specifically designed to manage your unique operations with perfection. Whether you are managing huge bulk supplies or delicate goods, Owners Inventory adapts to your unique purchasing needs."
          buttonText="Explore All Industries"
          industries={purchasesIndustries}
        />
      </div> */}

      {/* <FeaturesTestimonials
        testimonials={purchasesTestimonials}
        heading="Words That Inspire Us"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart Purchasing Tools"
        secondDescription="Everything you need to manage purchases, track suppliers, control costs, and streamline procurement for better business efficiency."
      /> */}

<div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
      <MapComponent />
      </div>

      {/* <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Everything You Need to Know About Purchases Management"
          paragraph="Learn how Owners Inventory can simplify procurement and strengthen your business with intelligent purchasing tool."
          faqs={purchasesFaqs}
        />
      </div> */}
    </div>
  );
};

export default Page;
