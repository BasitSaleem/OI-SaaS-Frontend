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
      "See the whole picture with point of sale reporting systems that monitor daily sales, high-moving products, and inventory turnover - so you can maximize efficiency and profit margin.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp",
  },
  {
    id: 2,
    title: "Restaurant",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Dynamic inventory management reporting helps keep your operations lean and profitable by tracking menu item performance, managing ingredient usage, and analyzing daily revenue trends.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp",
  },
  {
    id: 3,
    title: "Wholesalers",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Streamline bulk order analysis through inventory management reports that indicate the stock flow, customer demand, and the accuracy of pricing among various warehouses.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp",
  },
  {
    id: 4,
    title: "Pharmacies",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Get accurate inventory management reports, batch tracking, expiry summaries, and POS transaction logs to stay compliant and aid in a successful flow of operations.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp",
  },
  {
    id: 5,
    title: "Fashion & Apparel",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Receive specific point of sale system reports of best-selling styles, seasonal performance, and size-based inventory- making stock planning easy and evidence-based.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp",
  },
];

const FeaturesCards = [
  {
    id: 1,
    title: "Comprehensive Inventory Reporting",
    description:
      "You can manage and get detailed inventory reports for both your store and your warehouse.  You can view everything that happens with each product in one place.",
    imageSrc:
      "/assets/features-page/reports-page/features-section/comprehensive-reporting.webp",
  },
  {
    id: 2,
    title: "Stock Visibility in Real Time",
    description:
      "Display the right amount of stock, how many items are in stock, and where they are available.  Get updates right away that help you avoid running out of stock or having an excessive amount of it.",
    imageSrc:
      "/assets/features-page/reports-page/features-section/stock-visibility.webp",
  },
  {
    id: 3,
    title: "Data Visualization with Interaction",
    description:
      "Dynamic charts and graphs can help you understand your inventory more quickly.  It's easy to see patterns and make decisions based on data when you use visual breakdowns.",
    imageSrc:
      "/assets/features-page/reports-page/features-section/data-visualization.webp",
  },
  {
    id: 4,
    title: "Warehouse vs. Store Comparison",
    description:
      "Look at the stock levels in the warehouse and the store next to each other.  Get a better idea of how your inventory is distributed out and make transfers between locations more efficient.",
    imageSrc:
      "/assets/features-page/reports-page/features-section/store-comparison.webp",
  },
  {
    id: 5,
    title: "Advanced Filtering & Quick Insights",
    description:
      "You can narrow down your search for the exact data you need by filtering reports by product, category, or location. Get key insights right away without having to scroll through a lot of data.",
    imageSrc:
      "/assets/features-page/reports-page/features-section/advance-filtering.webp",
  },
  {
    id: 6,
    title: "Live Data with Search & Sorting",
    description:
      "With advanced search and sorting tools, you can report in real time. Find things quickly, see updates, and organize your data in a smart way.",
    imageSrc:
      "/assets/features-page/reports-page/features-section/live-data.webp",
  },
  {
    id: 7,
    title: "Intuitive and Organized Interface",
    description:
      "You can use the dashboard easily and enjoy a clean look with tables and charts that are well-organized.  Easily find your way around and make better choices about your inventory.",
    imageSrc:
      "/assets/features-page/people-page/features-section/integrated-module.webp",
  },
 
];

const advancereportingFaqs = [
  {
    id: 1,
    question:
      "What kind of reports can I generate with Owners Inventory?",
    answer:
      "You can generate extensive inventory management reports such as sales summary reports, stock movement reports, profit margin reports, and supplier performance reports, all of which can be customized to your business requirements.",
  },
  {
    id: 2,
    question: "Does the system include POS reports as well?",
    answer:
      "Yes. Our point-of-sale report solution provides daily sales reports, high-selling items, employee performance, and transaction records to maintain every sale transparent and traceable.",
  },
  {
    id: 3,
    question:
      "Can I customize the reports based on my business type?",
    answer:
      "Absolutely. Regardless of whether you operate a retail store, restaurant, or pharmacy, you can customize your inventory management reporting to reveal only the data you care most about.",
  },
  {
    id: 4,
    question: "Are the reports downloadable or shareable?",
    answer:
      "Yes. Any inventory management reports are exportable to a variety of formats, can be shared with your team, or integrated with accounting and analytics tools.",
  },
  {
    id: 5,
    question: "How often are the reports updated?",
    answer:
      "Our inventory management reports and point of sale reporting systems always keep all their data up to date in real time, so your decision is informed with the most up-to-date information available.",
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
    name: "Ayesha Khan",
    title: "Operations Manager, Bright Home",
    image: "/assets/pfp.avif",
    text: `"Prior to Owners Inventory, we were operating on spread sheets and manual tracking that is prone to confusion and overstocking. Everything is now centralized and real time visible. The reporting dashboard provides us with an excellent opportunity to see what sells, what does not, and where to optimize. That is as though we had a data analyst embedded within our day-to-day processes."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Sana Malik",
    title: "Co-Founder, The Brew Café",
    image: "/assets/pfp.avif",
    text: `"Managing a cafe that is busy implies that every ingredient and each order counts. Owners Inventory allows us to monitor menu performance, food waste, and plan foods to prepare on the following day. The real-time POS reports are unbelievably accurate - the system seems to know about our rhythm of business."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Imran Qureshi",
    title: "Owner, Al-Asif Supermart",
    image: "/assets/100.jpeg",
    text: `"We operate several pharmacies and this system maintains all these updated- stock, expiry dates, and daily sales. The support team is attentive and professional."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Dr. Kamran Iqbal",
    title: "Managing Director, CityMed Pharmacies",
    image: "/assets/100.jpeg",
    text: `"The system has made it easy to manage several outlets. All reports, including the sales summary and the stock movement, are accurate and understandable. It has allowed us to make informed decisions based on data instead of making assumptions."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
];

const page = () => {
  return (
    <div>
      <SubFeaturesHero
        title="Turn Data into Decisions with Inventory Management Reports"
        description="Transform data into actionable insights by using powerful inventory management reports and point of sale reporting systems, all at one location."
        video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Trusted by Leading Brands"
        paragraph="Leading brands like Al-Asif trust Owners Inventory to manage sales, stock, and performance with smart insights that boost efficiency and reduce waste. Join the businesses using our advanced inventory system for clearer decisions and sustainable growth."
      />
      <KeyHighlights
        heading="Key Features"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Our Reporting Feature"
        paragraph="Automated, integrated reporting designed to give you clear insights, better visibility, and full control over your daily operations."
        cards={[
          {
            icon: "/assets/features-page/reports-page/why-chose/actionable-data.svg",
            title: "Actionable Data at a Glance",
            description:
              "Turn complex numbers into easy-to-understand data with intuitive reports on inventory management that enable real-time decisions.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/seamless-automation.svg",
            title: "Seamless POS Integration",
            description:
              "Link sales, inventory, and client data with ease, and use our integrated point of sale reporting system to find full visibility.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/scalable-for-growth.svg",
            title: "Unique Reports to Each Requirement",
            description:
              "Design custom inventory management reports to suit your objectives, such as daily summaries or detailed trend analysis.",
          },
          {
            icon: "/assets/features-page/reports-page/why-chose/smart-automation.svg",
            title: "Smart Automation & Exports",
            description:
              "Save time with automated inventory management reporting that you can immediately export and share with your team or accountants.",
          },
        
        ]}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Industries We Serve"
          paragraph="Each business has a different story to tell- so should your reports. Owners' Inventory provides inventory management reports and point of sale system reports that are tailored to your industry. Gain valuable insights, smarter analytics, and clear data visualization that enable you to make decisive business choices."
          buttonText="Explore Now"
          industries={advancereportingIndustries}
        />
      </div>

      <FeaturesCallToAction
        title="Make Every Report Count"
        description="Stop guessing and start knowing. With Owners Inventory’s inventory management reporting and point of sale report system, every decision is backed by real data."
        ctaDesc="Get Started Now"
      />
      <FeaturesTestimonials
        testimonials={advancereportingTestimonials}
        heading="What Clients Say About Us"
        showSmartTools={true}
        secondHeading="Contact Us"
        secondDescription="Retailer, wholesaler, or business owner and want to make things easier - our team is on hand to turn your inventory data into growth. Complete the form below and we will respond to you soon."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Your Reporting Questions, Answered"
          paragraph="Gain the clarity you require regarding the powerful inventory management reporting tools of Owners Inventory. We have also addressed the most frequently asked questions, so you can make the most of your point of sale reporting system, from setup to insights."
          faqs={advancereportingFaqs}
        />
      </div>
    </div>
  );
};

export default page;
