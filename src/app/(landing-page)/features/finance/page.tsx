"use client";

import dynamic from "next/dynamic";
import React from "react";

import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/acounting-finance-banner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/why-chose-banners/acouting-finance-whychose.webp";

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

const financeIndustries = [
  {
    id: 1,
    title: 'Retail Stores',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Owners Inventory retail brands ko finances aur operations manage karne mein madad deta hai. Al-Asif, Brights Home jaisi companies hum par trust karti hain. Hum efficiency, transparency aur growth ko support karte hain.',
    image: '/assets/industry-type/retail-store.webp',
    mobileImage: '/assets/industry-type/retail-store-mobile.webp',
  },
  {
    id: 2,
    title: 'Restaurant',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
    description: 'Automatically track daily sales, ingredient costs, and supplier invoices. Get transparent financial statements to control expenses, cut wastage, and boost profitability without manual bookkeeping.',
    image: '/assets/industry-type/restaurant.webp',
    mobileImage: '/assets/industry-type/restaurant-mobile.webp',
  },
  {
    id: 3,
    title: 'Wholesalers',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Manage bulk purchases, customer invoices, and supplier payments with speed and accuracy. The system simplifies your entire cash flow process, keeping financial statements and stock transfers perfectly aligned.',
    image: '/assets/industry-type/whole-sale.webp',
    mobileImage: '/assets/industry-type/whole-sale-mobile.webp',
  },
  {
    id: 4,
    title: 'Pharmacies',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
    description: 'Manage your healthcare inventory, sales, and accounts in one POS platform. Keep complete transaction records that meet financial and inventory standards.',
    image: '/assets/industry-type/pharmacy.webp',
    mobileImage: '/assets/industry-type/pharmacy-mobile.webp',
  },
  {
    id: 5,
    title: 'Fashion & Apparel',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Track real-time profits, discounts, and seasonal trends. Get your accounting sorted with automated cost-tracking and a thorough financial overview of each collection cycle.',
    image: '/assets/industry-type/fashion.webp',
    mobileImage: '/assets/industry-type/fashion-mobile.webp',
  },
 
];


const FeaturesCards = [
  {
    id: 1,
    title: "Comprehensive Financial Accounting",
    description: "Our integrated POS and accounting software allows you to manage all accounting and finance functions easily. Through Chart of Accounts to Journal Entries and Reports, all transactions are properly trailed and recorded in real time.",
    imageSrc:
      "/assets/features-page/finance-page/features-section/comprehensive-financial.webp",
     
  },
  {
    id: 2,
    title: "Organized Chart of Accounts",
    description:
      "Design and organize account heads in a simple hierarchical system. Streamline your business finance management POS processes by organizing assets, liabilities, income and expenses effectively.",
    imageSrc:
      "/assets/features-page/finance-page/features-section/organized-chart.webp",
      
  },
  {
    id: 3,
    title: "Journal Entry Management",
    description:
      "Create, edit and publish journal entries with embedded debit-credit validation. Keep proper records that will directly match your POS accounts and finance system.",
    imageSrc:
      "/assets/features-page/finance-page/features-section/journal-entry.webp",
     
  },
   {
    id: 4,
    title: "Financial Statements & Reports",
    description:
      "Prepare required reports such as Trial Balance, Balance Sheet and Journal Reports. Get actionable insights with a powerful financial reporting POS system that transforms complex data into easy-to-understand financial summaries.",
    imageSrc:
      "/assets/features-page/finance-page/features-section/financial-statement.webp",
      
  },
   {
    id: 5,
    title: "Payables & Receivables Tracking",
    description:
      "Track pending payments and due dues real-time. Cash flow management is easier and smarter with detailed ledgers and aging analysis.",
    imageSrc:
      "/assets/features-page/finance-page/features-section/recievable-tracking.webp",
      
  },
  {
    id: 6,
    title: "Fixed Assets Management",
    description:
      "Manage all fixed assets, depreciation, and other related aspects with ease. Maintain your asset records in accordance with your general accounting and finance.",
    imageSrc:
      "/assets/features-page/finance-page/features-section/fixed-assets.webp",
      
  },
   {
    id: 7,
    title: "Project and Departmental Costing",
    description:
      "Assign revenues or expenses to departments, projects or cost centers. Enhance financial transparency throughout your organization through a single centralized business finance management POS.",
    imageSrc:
      "/assets/features-page/finance-page/features-section/departmental-costing.webp",
      
  },
   {
    id: 8,
    title: "User-Friendly Financial Interface",
    description:
      "Experience a user-friendly, streamlined interface to conveniently input transactions and see all financial information immediately. Keep track of your sales and expense tracking POS system in real-time.",
    imageSrc:
      "/assets/features-page/people-page/features-section/single-interface.webp",
      
  },
  
];

const financeFaqs = [
  {
    id: 1,
    question:
      "How does the accounting and finance feature work in Owners Inventory?",
    answer:
      "The system automatically links up your sales, purchases, and payments made through the POS. It synchronizes your accounts automatically so you do not have to enter something manually. This provides you with correct financial information at any time you need it.",
  },
  {
    id: 2,
    question: "Can I use it for both small and large businesses?",
    answer:
      "Yes, Owners Inventory is designed to match your business size and requirements. It adapts readily, whether you are running a small retail store or a large distribution process. As you expand, you can add users, branches, or features.",
  },
  {
    id: 3,
    question:
      "Does it support financial reporting and tax management?",
    answer:
      "Absolutely. The system produces in-depth financial reports such as profit and loss statements, balance sheets, or cash flow summaries. You also have the time to prepare tax-ready data in real time, which saves time and accuracy on audit.",
  },
  {
    id: 4,
    question: "How secure is my financial data?",
    answer:
      "Your accounting data is secured using advanced encryption and automatic cloud backup. Your financial records can only be accessed by authorized users. This keeps your business information secure and confidential. It is also recoverable.",
  },
  {
    id: 5,
    question: "Can I track expenses and payments through the POS?",
    answer:
      "Yes, everything, including expenditures, payments, and sales, is automatically synchronized via the POS. Your transactions are all visible in your reports in a few seconds. This provides you with a complete and uptodate view of your financial performance on a daily basis.",
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

const financeTestimonials = [
  {
    name: "Ali R",
    title: "Brights Home",
    image: "/assets/pfp.avif",
    text: `Owners Inventory made our accounting a lot easier. We are able to monitor all our sales and expenditures in a single location without moving through systems. The financial reports are straightforward, fast, and valid - it actually saves us time daily.`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Sara M",
    title: "Al-Asif Stores",
    image: "/assets/pfp.avif",
    text: `We began using Owners Inventory primarily to use in sales but its accounting and finance capabilities have been a great addition. Posting journal entries, monitoring payments, and looking at profit and loss statements can be done in minutes by our team. It is the real financial reporting POS system that ensures our data is correct and our operations clear.`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Hassan K",
    title: "Retail Partner",
    image: "/assets/100.jpeg",
    text: `Business finance management is so easy with this software. We can see all the receivables, expenses, and cash flow in a single location through the POS accounts and finance dashboard. I like it best because it is precise and easy, it is powerful enough to use by accountants and easy enough to use by managers like me.`,
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
        title="Accounting Made Effortless, Finances Made Clear"
        description="Gain control of your business by having an integrated POS and accounting system that monitors every sale, expense, and profit in real-time. Streamline finance, reduce errors, and make smarter financial decisions all in one dashboard."
        // video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Get Started for Free"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Our Brands, Our Partners in Growth"
        paragraph="Owners Inventory helps retail brands manage their finances and operations. Trusted by Al-Asif, Brights Home, and others, we support efficiency, transparency, and sustainable growth."
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
            title: "All-in-One Platform",
            description:
              "Automate sales, inventory, and accounting without adding switches between systems.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/scalable-for-growth.svg",
            title: "Real-Time Financial Insights",
            description:
              "Get real-time reports and updates and make smarter business decisions.",
          },
          {
            icon: "/assets/features-page/finance-page/why-chose/easy-to-use.svg",
            title: "Easy to Use",
            description:
              "Clean, easy-to-use interface that any person can use - no accounting background required.",
          },
          {
            icon: "/assets/features-page/finance-page/why-chose/secure-reliable.svg",
            title: "Secure & Reliable",
            description:
              "Your financial information remains secure, correct, and constantly supported.",
          },
        ]}
        mainImage= {whyChoseBanner}
      />

       <div className="lg:mt-[100px] md:mt-28 mt-20">
      
        <IndustryPosShowcase
           mainHeading='Built for Every Industry That Runs on Numbers'
           paragraph='Sell, serve, supply, whatever you do, proper accounting and finance management will keep your business on the right track. Owners Inventory is flexible and fits all workflows, provides real-time reporting of sales, costs, and performance.'
           buttonText='Explore All Industries'
           industries={financeIndustries} />
      </div>


      <FeaturesCallToAction
        title="Control Your Business Finances"
        description="Simplify your accounting, track every sale, and make smarter financial decisions with one powerful POS system. Join hundreds of growing businesses already managing their money in a smart way."
        ctaDesc="Get Started Now"
      />
      <FeaturesTestimonials
        testimonials={financeTestimonials}
        heading="What Our Clients Say"
        showSmartTools={true}
        secondHeading="Contact Us"
        secondDescription="We make your business smarter and easier. Whether you want to explore Owners Inventory or learn how our POS and accounting tools simplify finances, our team will guide you with demos and personalized support."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Your Accounting Questions, Clearly Answered"
          paragraph="Running business finances does not need to be stressful. Owners Inventory unites your sales, accounting, and reporting into a single convenient system. Some frequent questions are listed here to help you understand how Owners Inventory simplifies all aspects of your financial management."
          faqs={financeFaqs}
        />
      </div>
    </div>
  );
};

export default Page;