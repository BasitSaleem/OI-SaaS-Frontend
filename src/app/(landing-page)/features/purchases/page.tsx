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

const peopleIndustries = [
  {
    id: 1,
    title: 'Retail Stores',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Reorder your fast moving products automatically. Also, easily manages supplier discounts and tracks incoming shipments in real time.',
    image: '/assets/industry-type/retail-store.webp',
    mobileImage: '/assets/industry-type/retail-store-mobile.webp',
  },
  {
    id: 2,
    title: 'Restaurant',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
    description: 'For restaurants, easily track ingredient purchases, manage multiple vendors and use smart controls to prevent expensive overstocking or wastage.',
    image: '/assets/industry-type/restaurant.webp',
    mobileImage: '/assets/industry-type/restaurant-mobile.webp',
  },
  {
    id: 3,
    title: 'Wholesalers',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Handle bulk procurement efficiently with supplier catalogs, multi warehouse support, and automated reorder levels.',
    image: '/assets/industry-type/whole-sale.webp',
    mobileImage: '/assets/industry-type/whole-sale-mobile.webp',
  },
  {
    id: 4,
    title: 'Pharmacies',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
    description: 'Ensure accuracy and compliance with expiry monitoring and batch tracking. Supplier authentication for all medicine purchases is also provided.',
    image: '/assets/industry-type/pharmacy.webp',
    mobileImage: '/assets/industry-type/pharmacy-mobile.webp',
  },
  {
    id: 5,
    title: 'Fashion & Apparel',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Order fabrics, accessories and finished goods efficiently by tracking supplier performance. Works according to seasonal demand and material availability.',
    image: '/assets/industry-type/fashion.webp',
    mobileImage: '/assets/industry-type/fashion-mobile.webp',
  },
 
];


const FeaturesCards = [
  {
    id: 1,
    title: "Centralized Purchase Management",
    description: "By Centralized Purchase Management, We manage purchase orders, bills and all supplier details in one spot. This simple system ensures procurement and inventory are always in sync.Our Purchase Order Management Software is the single source of truth for your business.",
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
    title: "Comprehensive Dashboard ",
    description:
      "Gain real-time visibility into purchase activity, supplier performance and pending bills. This is the power of a dedicated Purchase Tracking Software.",
    imageSrc:
      "/assets/features-page/general-tools/features-section/stock-alert.webp",
      
  },
   {
    id: 8,
    title: "Search & Filter Options",
    description:
      "Gain instant, real time clarity! Track all purchase activity, monitor supplier performance, and see pending bills right on a single, easy-to-use, interactive dashboard.",
    imageSrc:
      "/assets/features-page/general-tools/features-section/stock-alert.webp",
      
  },
  {
    id: 9,
    title: "User-Friendly Interface",
    description:
      "A clean, interactive design means managing purchases is quick and easy. Spend less time struggling with software and more time improving your business.",
    imageSrc:
      "/assets/features-page/general-tools/features-section/stock-alert.webp",
      
  },
  
  
];

const productFaqs = [
  {
    id: 1,
    question:
      "What is purchase management, and why is it important?",
    answer:
      "Purchase management systematically oversees the entire buying lifecycle, from the initiation of an order through to final payment. Its importance lies in ensuring timely restocking, and a smooth, uninterrupted supply chain flow.",
  },
  {
    id: 2,
    question: "How does your Purchase Management System improve efficiency?",
    answer:
      "Efficiency is enhanced through the automation of administrative tasks. This includes the automatic generation of purchase orders, the creation of bills and supplier tracking.",
  },
  {
    id: 3,
    question:
      "Can I integrate purchase management with inventory tracking?",
    answer:
      "Absolutely. Owners Inventory is designed to integrate fully, synchronizing all purchase data directly with your inventory records.",
  },
  {
    id: 4,
    question: "Is this suitable for multi-location businesses?",
    answer:
      "Yes. Whether managing a single location or a complex network of branches,Owners Inventory facilitates centralized purchasing control.",
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

const productTestimonials = [
  {
    name: "Ahmed Khan",
    title: "HR Manager",
    image: "/assets/pfp.avif",
    text: `"Before Owners Inventory, managing our materials purchases was a difficult task. Now, the entire automated process is easy. We have completely eliminated manual errors and saved hours for our team."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Sarah Collins",
    title: "Bright Home.",
    image: "/assets/pfp.avif",
    text: `"Switching to this system has changed how we handle procurement. We no longer worry about late payments or missed orders."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Omer Hassan",
    title: "Owner, Al-Asif Supermart",
    image: "/assets/100.jpeg",
    text: `"We are impressed with how the system handles everything, from supplier management to automated bill generation. It simplifies buying, tracking and managing everything."`,
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
        title="Handle All Your Purchases in One Place"
        description="Owners Inventory automates your entire purchasing process, from managing suppliers to generating bills, all in one place. Track, buy, and manage everything with ease through our intelligent Automated Purchase Management system."
        video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Our Valued Clients"
        paragraph="Businesses like Al-Asif and ASK Food Industries rely on Owners Inventory to automate and simplify their purchasing operations. Our system improves efficiency, reduces manual work, and ensures accuracy throughout the entire process."
      />
      <KeyHighlights
        heading="Key Features "
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
        
      />

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
              "Stay updated with precise, real-time data so you can make smarter decisions and always know what’s happening in your inventory.",
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
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />

       <div className="lg:mt-[100px] md:mt-28 mt-20">
      
        <IndustryPosShowcase
           mainHeading='Purchases Tailored for Your Industry'
           paragraph='Whether you operate as a Manufacturer, a Wholesaler or a Retailer, our Purchases Function is specifically designed to manage your unique operations with perfection. Whether you are managing huge bulk supplies or delicate goods, Owners Inventory adapts to your unique purchasing needs.'
           buttonText='Explore All Industries'
           industries={peopleIndustries} />
      </div>


      <FeaturesCallToAction
        title="Buy Smarter. Manage Better. Grow Faster"
        description="Streamline every purchase step with our intelligent Purchase Order Processing System. Using tools that help you stay organized, cost efficient and ready for growth with Owners Inventory."
        ctaDesc="Get Started Now"
      />
      <FeaturesTestimonials
        testimonials={productTestimonials}
        heading="Words That Inspire Us"
        showSmartTools={true}
        secondHeading="Contact Us"
        secondDescription="See how Owners Inventory can simplify your purchasing with our Purchase Order Management Software. Contact us for a demo or pricing to build a smarter, faster procurement system."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Everything You Need to Know about Purchases Management"
          paragraph="Learn how Owners Inventory can simplify procurement and strengthen your business with intelligent purchasing tool"
          faqs={productFaqs}
        />
      </div>
    </div>
  );
};

export default Page;