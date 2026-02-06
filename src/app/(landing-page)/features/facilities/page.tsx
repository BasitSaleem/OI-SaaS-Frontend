"use client";

import dynamic from "next/dynamic";
import React from "react";
import heroBanner from "../../../../../public/assets/features-page/hero-section-banners/facilities-herobanner.webp";
import whyChoseBanner from "../../../../../public/assets/features-page/why-chose-banners/facilities-whychose.webp";

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

const facilitiesIndustries = [
  {
    id: 1,
    title: "Retail Stores",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Manage multiple outlets from a single dashboard POS, track stock movement, and monitor staff activity with live updates ensuring smooth operations and higher customer satisfaction across all locations.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp",
  },
  {
    id: 2,
    title: "Restaurant",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Manage your dining rooms, kitchens, and storage areas from a single facility management dashboard, monitoring ingredient usage, occupancy, and staff movement to keep your restaurant running efficiently.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp",
  },
  {
    id: 3,
    title: "Wholesalers",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Manage multiple distribution centers and warehouses at a single platform. Coordinate incoming shipments, control loading zones, and optimize storage and delivery schedules with facility analytics.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp",
  },
  {
    id: 4,
    title: "Pharmacies",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Maintain full oversight of your pharmacy network and wholesale operations. Track multiple store locations, ensure facility-wide compliance, and receive temperature, expiry, and inventory alerts directly on your facility monitoring dashboard.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp",
  },
  {
    id: 5,
    title: "Fashion & Apparel",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Organize your outlets, stores, and warehouses easily. The POS facility dashboard guarantees uniform inventory, visual merchandising, and monitoring performance of all their stores, online or offline.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp",
  },
];

const FeaturesCards = [
  {
    id: 1,
    title: "Facility Management Dashboard",
    description:
      "Control all your physical premises, stores, warehouses, production floors, etc with a single, integrated facility management dashboard. Bring complete visibility and control without changing systems.",
    imageSrc:
      "/assets/features-page/facilities-page/features-section/facility-management.webp",
  },
  {
    id: 2,
    title: "Comprehensive Facility List with Smart Filters",
    description:
      "See and keep the full list of every store, warehouse, and production floor. Quick search and filter options on your facility monitoring dashboard enable you to find any location or record in real-time.",
    imageSrc:
      "/assets/features-page/facilities-page/features-section/comprehensive-facility.webp",
  },
  {
    id: 3,
    title: "Add and Configure New Stores Easily",
    description:
      "Add new stores with well-developed data such as name, whereabouts, and manager contact details. The facility dashboard POS is simple to set up and integrates with your business.",
    imageSrc:
      "/assets/features-page/facilities-page/features-section/stores-easily.webp",
  },
  {
    id: 4,
    title: "Personalized Store Preferences",
    description:
      "Set up store options including invoice notes, logo on tattoos, and product image on POS. You can customize your facility management dashboard to reflect your brand and workflow.",
    imageSrc:
      "/assets/features-page/facilities-page/features-section/personalized-store.webp",
  },
  {
    id: 5,
    title: "Efficient Warehouse Management",
    description:
      "Operate numerous warehouses within one platform to achieve efficient distribution of stocks and tracking inventory in real-time. The facility monitoring dashboard maintains all locations updated and synchronized.",
    imageSrc:
      "/assets/features-page/facilities-page/features-section/efficient-warehouse.webp",
  },
  {
    id: 6,
    title: "Production Floor Oversight",
    description:
      "Manage your manufacturing, assembly, or day-to-day operations easily. Monitor performance and optimize workflow by using a live facility dashboard POS environment.",
    imageSrc:
      "/assets/features-page/facilities-page/features-section/production-store.webp",
  },
  {
    id: 7,
    title: "Scalable and User-friendly Interface",
    description:
      "Experience an easy and user-friendly interface that simplifies the process of setting up and customizing facilities and control. The facility management dashboard is built to expand as your business expands.",
    imageSrc:
      "/assets/features-page/facilities-page/features-section/scalable-interface.webp",
  },
];

const facilitiesFaqs = [
  {
    id: 1,
    question: "What is a facility management dashboard in Owners Inventory?",
    answer:
      "It is a centralized system that allows you to see, manage and control all your facilities under a single platform. You can track operations, stock and performance by warehouses, stores or offices easily.",
  },
  {
    id: 2,
    question: "How does the facility monitoring dashboard help my business?",
    answer:
      "It provides you real-time information on staff performance, stock movement, and the health of the facilities. This serves to minimize delays, check errors and keep your operations running well.",
  },
  {
    id: 3,
    question: "Can I integrate my POS system with the facility dashboard?",
    answer:
      "Yes. The facility dashboard POS enables you to integrate sales information, inventory and store reports at all of your stores, providing you with all the visibility you need at the counter to the warehouse.",
  },
  {
    id: 4,
    question:
      "Is it suitable for businesses with multiple branches or outlets?",
    answer:
      "Definitely. Owners Inventory is used in multi-location businesses that allow centralized monitoring, standardization of reporting, and the management of all branches or stores.",
  },
  {
    id: 5,
    question: "Can I track user roles and permissions across facilities?",
    answer:
      "Yes, it is possible to provide certain access levels to employees. This makes sure that sensitive data is only managed or viewed by the authorized users in your connected facilities.",
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

const facilitiesTestimonials = [
  {
    name: "Olivia Harris",
    title: "Procurement Manager, SmartTrade",
    image: "/assets/features-page/testimonial-images/testinomial-girl8.webp",
    text: `Owners Inventory has totally transformed our approach to handling our business. We would manage every store individually, and it led to delays and mistakes. We are now able to monitor every place, every stock and every team performance on a single dashboard. It saves us a lot of hours daily and makes us have real mastery of our operations.`,
    // icon: "/assets/review-section/double-coma-icon.svg",
    // color: "#795CF5",
  },
  {
    name: "Jason Miller",
    title: "Managing Partner, Miller & Co.",
    image: "/assets/features-page/testimonial-images/testinomial-boy9.webp",
    text: `Prior to using Owners Inventory, it was a real challenge to track out our inventory, and staff activity across branches. The system simplified everything - stock management, performance reports, etc. It is user-friendly to our team, and we are able to make decisions faster with real-time updates. It truly improved how we work.`,
    // icon: "/assets/review-section/coma-green.svg",
    // color: "#1AD1B9",
  },
  {
    name: "Hannah Lewis",
    title: "Retail Operations Head, CityMart",
    image: "/assets/features-page/testimonial-images/testinomial-girl9.webp",
    text: `Our logistics department used to be under strain trying to manage multiple shipments and warehouses. Owners Inventory put it all on one platform, which makes it far easier to track what is being delivered, where the stock moves, and what employees are doing. The analytics option helps us to plan better, minimize errors, and become more efficient.`,
    // icon: "/assets/review-section/double-coma-icon.svg",
    // color: "#795CF5",
  },
];

const page = () => {
  return (
    <div>
      <SubFeaturesHero
        title="Smart Facilities, Seamless Operations"
        description="Owners Inventory will give you complete control of all stores, warehouses and work areas. Whether it is the management of various locations or the monitoring of stock and employee performance, our platform maintains the entire operation running smoothly all through a single user-friendly dashboard."
        // video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        imageClassName= "max-w-[1000px]"
        image={heroBanner}
        ctaDesc= "Get Started for Free"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Brands That Trust Us"
        paragraph="Owners Inventory empowers leading brands like Al-Asif to streamline operations, monitor performance, and expand efficiently  building lasting partnerships founded on trust and results."
      />
      <KeyHighlights
        heading="Key Features"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Us?"
        paragraph="Owners Inventory simplifies complex facility operations into one connected platform. We help you monitor performance, standardize processes, and achieve full operational visibility across every location."
        cards={[
          {
            icon: "/assets/features-page/facilities-page/why-chose/facility-control.svg",
            title: "All-in-One Facility Control",
            description:
              "Operate all warehouses, stores and work areas through a single connected system.",
          },
          {
            icon: "/assets/features-page/facilities-page/why-chose/real-time-monitoring.svg",
            title: "Real-Time Monitoring",
            description:
              "Monitor performance and operations in real-time by accessing a live facility monitoring dashboard.",
          },
          {
            icon: "/assets/features-page/facilities-page/why-chose/seamless-pos.svg",
            title: "Seamless POS Integration",
            description:
              "Connect your facility dashboard POS to facilitate sales, stock and reporting across stores.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/scalable-for-growth.svg",
            title: "Scalable for Any Industry",
            description:
              "Retail, wholesale or hospitality - our system expands with your business.",
          },
        ]}
        mainImage= {whyChoseBanner}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Facility Management Built for Every Industry"
          paragraph="Owners Inventory simplifies facility management by connecting warehouses and retail floors under one smart dashboard. Track operations, inventory, and staff in real time. Keep all locations efficient, connected, and ready to perform."
          buttonText="Explore All Industries"
          industries={facilitiesIndustries}
        />
      </div>

      <FeaturesCallToAction
        title="Take Control of Every Facility Today"
        description="Unify your operations, track performance, and manage all locations effortlessly with Owners Inventory. Get the visibility and control your business deserves — all in one platform."
        ctaDesc="Get Started Now"
      />
      <FeaturesTestimonials
        testimonials={facilitiesTestimonials}
        heading="Voices of Our Partners"
        showSmartTools={true}
        secondHeading="Stay Ahead with Smart Tools"
        secondDescription="Everything you need to manage your locations, monitor operations, and stay connected with your team efficiently."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Everything You Need to Know"
          paragraph="There is no need to complicate the management of various facilities. Owners Inventory allows you to track all the locations, streamline operations and make better decisions using a single connected facility management dashboard. Here are the most important questions answered for your ease to start the process of facility management."
          faqs={facilitiesFaqs}
        />
      </div>
    </div>
  );
};

export default page;
