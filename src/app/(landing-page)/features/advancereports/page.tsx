"use client";

import dynamic from "next/dynamic";
import React from "react";

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

const advancereportingIndustries = [
  {
    id: 1,
    title: "Retail Stores",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Get clear insight into store performance and customer demand with advanced POS reports that enable you to realize sales growth and better inventory management.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp",
  },
  {
    id: 2,
    title: "Restaurant",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "With our POS reporting system, you can use daily sales, menu items that do well, and peak times to increase efficiency and profits.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp",
  },
  {
    id: 3,
    title: "Wholesalers",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Monitor supply, production, and delivery statistics using a POS with an advanced reporting system that allows better planning and cost control.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp",
  },
  {
    id: 4,
    title: "Pharmacies",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Our advanced POS reports will help you to easily sell and track the sales of medicines, stock levels and expiry date so that you will be accurate and operate smoothly.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp",
  },
  {
    id: 5,
    title: "Fashion & Apparel",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Know customer purchasing patterns and sales hotspot products through advanced POS reporting that can make you smarter in planning your stock.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp",
  },
];

const FeaturesCards = [
  {
    id: 1,
    title: "Inventory Aging Report",
    description:
      "Monitor the time of product retention in your inventory and determine slow moving products. Make sound choices when it comes to reordering, discounts, or clearance strategies to maximize the stock turnover.",
    imageSrc:
      "/assets/features-page/advancereport-page/features-section/aging-report.webp",
  },
  {
    id: 2,
    title: "ID",
    description:
      "Each product has its own unique ID in order to track it accurately. This prevents mix up of similar items and also keeps uniformity among all reports.",
    imageSrc:
      "/assets/features-page/advancereport-page/features-section/id.webp",
  },
  {
    id: 3,
    title: "UPC",
    description:
      "Track products with Universal Product Codes to effectively monitor and normalize tracking across locations. UPC tracking contributes to the simplification of sales analysis and inventory management.",
    imageSrc:
      "/assets/features-page/advancereport-page/features-section/upc.webp",
  },
  {
    id: 4,
    title: "SKU",
    description:
      "Sort and filter by SKU to obtain detailed performance information. With SKU-based reporting, it is simple to analyze trends and deal with huge inventories.",
    imageSrc:
      "/assets/features-page/advancereport-page/features-section/sku.webp",
  },
  {
    id: 5,
    title: "Name",
    description:
      "Search and browse stock and sales of products by name. This characteristic makes reporting easy and detects inventory performance rapidly.",
    imageSrc:
      "/assets/features-page/advancereport-page/features-section/name.webp",
  },
  {
    id: 6,
    title: "Open Stock",
    description:
      "View the beginning stock positions at any time to see starting inventory positions. This assists in trend comparison and the determination of true stock movement.",
    imageSrc:
      "/assets/features-page/advancereport-page/features-section/open-stock.webp",
  },
  {
    id: 7,
    title: "Purchased Stock",
    description:
      "Record every stock purchase and addition to your inventory. A detailed record of stock bought assists with planning, budgeting and examination of supplier performance.",
    imageSrc:
      "/assets/features-page/people-page/features-section/integrated-module.webp",
  },
  {
    id: 8,
    title: "Sold Stock",
    description:
      "Examine sales volumes and product demand to see best-sellers. This aids in optimization of inventory, enhanced replenishment and increased revenue.",
    imageSrc:
      "/assets/features-page/people-page/features-section/categorization-and-segmentation.webp",
  },
  {
    id: 9,
    title: "Current Stock",
    description:
      "See your available inventory in real-time. The knowledge of the current stock enables us to avoid stockouts, minimize surplus, and enhance order fulfillment.",
    imageSrc:
      "/assets/features-page/people-page/features-section/transaction-history.webp",
  },
  {
    id: 10,
    title: "Total Stock",
    description:
      "Combine all movements, purchases, sales, and adjustments to see the entire stock position. The total stock reporting will guarantee effective inventory control and smarter decisions.",
    imageSrc:
      "/assets/features-page/people-page/features-section/transaction-history.webp",
  },
];

const advancereportingFaqs = [
  {
    id: 1,
    question:
      "What is the Advanced Reporting feature?",
    answer:
      "Advanced Reporting feature gives you in-depth details on your sales, inventory, and product performance. It enables you to create your own reports, follow trends, and make evidence-based decisions. It is all displayed in a simple dashboard.",
  },
  {
    id: 2,
    question: "Can I track sales across multiple stores?",
    answer:
      "Yes! Owners Inventory enables you to track sales performance in all of your outlets. You are able to compare the stores, analyze trends, and see the best performing stores in real time. This assists you to streamline operations effectively.",
  },
  {
    id: 3,
    question:
      "Does it support inventory aging reports?",
    answer:
      "Absolutely. You can monitor the time of stocks and find slow moving merchandise. This knowledge can be used to minimize overstocks, control expiry dates, and make smarter reorders.",
  },
  {
    id: 4,
    question: "Can reports be customized?",
    answer:
      "Yes, you can filter and customize reports according to product, date, store, etc. You are able to create reports that are sales specific. Exporting options are easy to share or print.",
  },
  {
    id: 5,
    question: "Is the dashboard easy to use?",
    answer:
      "Definitely. The dashboard is simple and easy to understand. You do not require any technical knowledge to see the level of POS reports, monitor inventory, or analyze sales, all that is intuitive and easy-to-use.",
  },
];

const layoutPatterns = [
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

const advancereportingTestimonials = [
  {
    name: "Ahmed",
    title: "HR Manager at Al-Asif",
    image: "/assets/pfp.avif",
    text: `Advanced reporting of Owners Inventory has transformed the way we operate our store entirely. I am able to monitor sales trends, stock levels and customer preferences under a single location. It saves me hours per week and makes me make wiser decisions. Definitely recommend it to all retail business owners!`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Sana",
    title: "the Head of the operations, Bright Home.",
    image: "/assets/pfp.avif",
    text: `The inventory aging and sales reports are fantastic. I am able to easily tell which products are selling and which are not. It has actually assisted us in overstock reduction and better purchasing decisions. The dashboard is easy and simple to interpret as well.`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Rizwan",
    title: "Director of HR",
    image: "/assets/100.jpeg",
    text: `We have changed to Owners Inventory because of its sophisticated POS reporting features and it has transformed the game. It is always clear and precise whether it is daily sales tracking or a report on the product. It makes me confident in my ability to plan and expand our business.`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Mehwish",
    title: "Business Owner",
    image: "/assets/100.jpeg",
    text: `The best thing about owning inventory is how quick and easy it is to make detailed reports. The enhanced reporting tool provides me with insights that I did not have previously, such as what products sell fastest and which require a push. It is easy, quick, and makes the operation of the store a lot easier.`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
];

const page = () => {
  return (
    <div>
      <SubFeaturesHero
        title="See Beyond the Numbers"
        description="Transform everyday transactions into meaningful insights. Our POS Advance Reporting System helps you track, analyze, and grow with precision."
        video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        variant="animation2"
        ctaDesc="Get Started for Free"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Trusted by Growing Businesses"
        paragraph="Businesses of all sizes from local retailers to enterprises like Al-Asif trust Owners Inventory to manage inventory, sales, and reports with ease. We help every client achieve smarter control, productive workflows, and measurable growth."
      />
      <KeyHighlights
        heading="Key Features"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Our Advanced Reporting"
        paragraph="Owners Inventory transforms your sales data into smart insights that help you plan better, sell smarter, and grow faster."
        cards={[
          {
            icon: "/assets/features-page/people-page/why-chose/real-time-insights.svg",
            title: "Real-Time Data Insights",
            description:
              "Monitor real-time performance data and be on top of all sales trends.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/seamless-automation.svg",
            title: "Customizable POS Reports",
            description:
              "Generate detailed, filter-based reports that are customized to your business objectives.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/scalable-for-growth.svg",
            title: "Visual Dashboards",
            description:
              "Transform complicated information into simple charts and summaries.",
          },
          {
            icon: "/assets/features-page/human-resource-page/why-chose/scalable-for-growth.svg",
            title: "Multi-Outlet Analysis",
            description:
              "Compare store and location performance in a single dashboard.",
          },
          {
            icon: "/assets/features-page/human-resource-page/why-chose/reliable-support.svg",
            title: "Smart Decision Support",
            description:
              "Optimize inventory, pricing, and customer strategy using evidence-based insights.",
          },
        ]}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Industries We Serve"
          paragraph="Regardless of whether you are a manufacturer, distributor or retailer, our Advanced Reporting feature will enable you to transform business data into valuable insights. The best POS system with advanced reports will allow you to monitor performance, identify trends, and make a confident decision in any industry."
          buttonText="Explore All Industries"
          industries={advancereportingIndustries}
        />
      </div>

      <FeaturesCallToAction
        title="Turn Data Into Decisions"
        description="Your data holds the answers, we help you uncover them. Experience the best POS system with advanced reports and make every number count."
        ctaDesc="Get Started Now"
      />
      <FeaturesTestimonials
        testimonials={advancereportingTestimonials}
        heading="What Clients Say About Us"
        showSmartTools={true}
        secondHeading="Contact Us"
        secondDescription="Contact us to find out how Owners Inventory will make your business easier and larger. Complete the form below, and our team will follow up to book a free demo and address any questions that you have. Together, let's create smarter, faster, and more connected sales."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQs About Advanced Reporting"
          paragraph="With our sophisticated reporting, you can monitor inventory, sales, and make better business decisions. The following are some of the frequently asked questions by our users:"
          faqs={advancereportingFaqs}
        />
      </div>
    </div>
  );
};

export default page;
