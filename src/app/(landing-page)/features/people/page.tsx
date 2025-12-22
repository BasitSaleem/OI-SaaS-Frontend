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
    title: "Retail Stores",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Make everyday tasks easier with intelligent scheduling, time-tracking, and shift arrangements. Make your sales team structured, improve customer service, and make each store operate efficiently.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp",
  },
  {
    id: 2,
    title: "Restaurant",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Easily coordinate kitchen, waitstaff, and delivery teams. Organize shift rotations, keep attendance, and ensure a smooth service even in the busiest periods.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp",
  },
  {
    id: 3,
    title: "Wholesalers",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Standardize human resource operations in warehouses and logistics units. Monitor attendance, delegate tasks, and preserve uniformity in your supply chain.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp",
  },
  {
    id: 4,
    title: "Pharmacies",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Maintain consistency and accuracy in ensuring that all shifts are properly staffed. Monitor attendance, performance, and rotations to ensure your pharmacy is operating effectively.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp",
  },
  {
    id: 5,
    title: "Fashion & Apparel",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Coordinate design, retail, and production departments on a single platform. Monitor attendance and performance in outlets to secure a smooth coordination and on-brand implementation.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp",
  },
];

const FeaturesCards = [
  {
    id: 1,
    title: "User & Contact Management",
    description:
      "Easily coordinate your business contacts with just a single dashboard. Add, edit or delete old records in a few clicks, which is important to maintain a clean database and stay updated.",
    imageSrc:
      "/assets/features-page/people-page/features-section/user-contact-management.webp",
  },
  {
    id: 2,
    title: "Smart Search & Filters",
    description:
      "Search and filter any user, customer, or supplier in real time. Filter results by name, role, or category to find information faster.",
    imageSrc:
      "/assets/features-page/people-page/features-section/smart-search-filter.webp",
  },
  {
    id: 3,
    title: "Role-Based Permissions",
    description:
      "Access who is allowed to read, edit or manipulate certain data on your system. Grant role permissions to ensure data safety and accountability.",
    imageSrc:
      "/assets/features-page/people-page/features-section/role-based-permision.webp",
  },
  {
    id: 4,
    title: "Secure Logins & Password",
    description:
      "Secure confidential data with password-recovery and high-level authentication. Provide secure access to all users without disrupting convenience.",
    imageSrc:
      "/assets/features-page/people-page/features-section/secure-login-password.webp",
  },
  {
    id: 5,
    title: "Activity Logs & Audits",
    description:
      "Keep track of all the changes that occur in the system using detailed activity logs. Edits, deletion and amendments of tracks to guarantee complete visibility and transparency.",
    imageSrc:
      "/assets/features-page/people-page/features-section/activity-logs.webp",
  },
  {
    id: 6,
    title: "Bulk Import & Export",
    description:
      "Save time by importing or exporting large datasets in Excel or PDF format. Share data, reporting as well as system migration easily.",
    imageSrc:
      "/assets/features-page/people-page/features-section/bulk-imports.webp",
  },
  {
    id: 7,
    title: "Integrated Module Connection",
    description:
      "Link your people data to sales purchase and reporting systems. Single integration improves accuracy, time-saving and alignment of operations.",
    imageSrc:
      "/assets/features-page/people-page/features-section/integrated-module.webp",
  },
  {
    id: 8,
    title: "Categorization & Segmentation",
    description:
      "The group users, customers and suppliers can be better organized and categorized into structured categories. Generate customer type or supplier groups to simplify reporting and management.",
    imageSrc:
      "/assets/features-page/people-page/features-section/categorization-and-segmentation.webp",
  },
  {
    id: 9,
    title: "Transaction & Payment History",
    description:
      "See all transactions connected to the user, customer or supplier in one location. Check purchase history and payment records to come up with the right decisions.",
    imageSrc:
      "/assets/features-page/people-page/features-section/transaction-history.webp",
  },
  {
    id: 10,
    title: "Balance & Performance Tracking",
    description:
      "Easily keep track of the pending payments and performance trends. Get connected insights that enhance financial control and build relationships.",
    imageSrc:
      "/assets/features-page/people-page/features-section/performance-tracking.webp",
  },
  {
    id: 11,
    title: "Intuitive Single Interface",
    description:
      "Switch between records and modules with a clean, modern interface. Control your people, customers, and suppliers more quickly and effectively than ever before.",
    imageSrc:
      "/assets/features-page/people-page/features-section/single-interface.webp",
  },
];

const peopleFaqs = [
  {
    id: 1,
    question: "What is the People feature in the Owners Inventory?",
    answer:
      "People is a full-fledged employee management system that helps you to handle attendance, performance, and scheduling in a single, easy-to-use platform.",
  },
  {
    id: 2,
    question: "Can I track attendance automatically?",
    answer:
      "Yes. The employee attendance management system records check-ins, leaves, and working hours, which are accurate during reporting because it is quickly recorded in real-time.",
  },
  {
    id: 3,
    question:
      "Does the People feature of Owners Inventory support performance evaluations?",
    answer:
      "Absolutely. The employee performance management system enables you to establish goals, monitor performance, and measure performance so as to reward your best employees.",
  },
  {
    id: 4,
    question: "Is the People feature suitable for all business types?",
    answer:
      "Yes. People can fit into your workflows and team size, whether you are operating a retail store, restaurant, pharmacy, or wholesale business.",
  },
  {
    id: 5,
    question: "Can my employees access their own data?",
    answer:
      "Yes. The self-service dashboard also allows employees to check attendance, book leave, and update information, saving time on the part of the administration and enhancing transparency.",
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

const peopleTestimonials = [
  {
    name: "Sana Iqbal",
    title: "Bright Home Owner",
    image: "/assets/pfp.avif",
    text: `Owners Inventory has completely transformed the way we manage our staff. Scheduling shifts and tracking attendance used to take hours, but now it’s all automated and accurate. Our team coordination has improved, and productivity is at an all-time high. It truly makes management effortless.`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Faisal Rehman",
    title: "Prime Traders",
    image: "/assets/pfp.avif",
    text: `Since switching to Owners Inventory, we’ve been able to organize our workforce far more efficiently. Our employees love the self-service dashboard — it’s simple, transparent, and saves so much time.`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Hina Ahmed",
    title: "StyleMart",
    image: "/assets/100.jpeg",
    text: `Owners Inventory has been a game-changer for our business operations. Managing multiple departments and shifts across locations is now easy and error-free.`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Adeel Khan",
    title: "Al-Asif",
    image: "/assets/100.jpeg",
    text: `We were looking for a workforce tool that was powerful yet easy to use, and Owners Inventory delivered exactly that. The automation features save us countless hours every week, and the analytics help us spot trends before they become problems. It’s reliable, intuitive, and worth every penny.`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
];

const page = () => {
  return (
    <div>
      <SubFeaturesHero
        title="Empower Your People, Power Your Business"
        description="Experience the future of business management, quick, unified, and growth-oriented. Powerful automation, real-time insights, and seamless integrations will allow you to work smarter, scale faster, and save more, all within one intelligent platform, with Owners Inventory."
        video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Our Trusted Brands"
        paragraph="We take pride in partnering with leading brands like Al-Asif and Bright Home, along with many global retail and service companies. Our platform drives smarter operations, seamless management, and sustainable growth. Together, we’re shaping a future of faster, more efficient businesses."
      />
      <KeyHighlights
        heading="Our Key Features"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Us"
        cards={[
          {
            icon: "/assets/features-page/people-page/why-chose/all-in-one-platform.svg",
            title: "All-in-One Platform",
            description:
              "Combine people, inventory, and performance, without having to use multiple tools.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/real-time-insights.svg",
            title: "Real-Time Insights",
            description:
              "Use real-time data on attendance, productivity, and growth to make smarter decisions",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/seamless-automation.svg",
            title: "Seamless Automation",
            description:
              "Automate scheduling, tracking and reporting of your workforce.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/scalable-for-growth.svg",
            title: "Scalable for Growth",
            description:
              "Owners Inventory scales with you, whether you have a small shop or a growing chain.",
          },
        ]}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Built for Every Industry"
          paragraph="The People feature of Owners Inventory is built to fit the way any business operates, be it a retail store or a restaurant, wholesaler or pharmacy, or a fashion brand. Whatever your business is, Owners Inventory can put your operation in a better place to run smoothly, faster, and smarter."
          buttonText="Explore All Industries"
          industries={peopleIndustries}
        />
      </div>

      <FeaturesCallToAction
        title="Turn Teams into Powerhouses"
        description="Start managing your team with data-driven efficiency and effortless control — all through Owners Inventory’s People feature."
        ctaDesc="Get Started Now"
      />
      <FeaturesTestimonials
        testimonials={peopleTestimonials}
        heading="Words That Inspire Our Work"
        showSmartTools={true}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-[100]">
        <FaqSection
          heading="Everything You Were About to Ask"
          paragraph="We have collected the most frequently asked questions regarding People, the workforce management feature of Owners Inventory. Whether you are setting up and automating or tracking performance and analytics, here is all you need to know."
          faqs={peopleFaqs}
        />
      </div>
    </div>
  );
};

export default page;
