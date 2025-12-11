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

const productIndustries = [
  {
    id: 1,
    title: "Retail Stores",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Manage product catalogs and suppliers effectively. Check stock levels and stocking up of high demand items.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp",
  },
  {
    id: 2,
    title: "Restaurant",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Check the ingredients, track stock consumption, and minimize waste on a cross-location basis. Keep stocks clean and efficient kitchens.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp",
  },
  {
    id: 3,
    title: "Wholesalers",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Optimize bulk inventory within warehouses and stores. Maintain efficient supply chains and satisfy customers in time.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp",
  },
  {
    id: 4,
    title: "Pharmacies",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Track medications, report expiry dates, and have proper supplier records easily. This guarantees safety, compliance, and operations.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp",
  },
  {
    id: 5,
    title: "Fashion & Apparel",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Operate seasonal inventory, various sizes, and SKUs with real-time visibility. Be ahead of trends and maintain control over inventory.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp",
  },
];

const FeaturesCards = [
  {
    id: 1,
    title: "Activity Log",
    description:
      "Have full access to all activities carried out in your inventory system. The Activity Log assists you in tracking, reviewing, and ensuring changes with detailed records- keeping your operations transparent and well-documented.",
    imageSrc:
      "/assets/features-page/general-tools/features-section/activity-log.webp",
  },
  {
    id: 2,
    title: "Stock Alert",
    description:
      "Automatically track inventory levels and avoid overstocking with warnings. The Stock Alert feature tracks product levels in all stores and warehouses and notifies you in real time when there is a requirement to adjust the stock.",
    imageSrc:
      "/assets/features-page/general-tools/features-section/stock-alert.webp",
  },
  
  
];

const productFaqs = [
  {
    id: 1,
    question:
      "What are General Tools in Owners Inventory?",
    answer:
      "General Tools are a group of features that can be used to streamline daily inventory work. They assist you with tracking activities, update control, and keeping clean and organized records. This simplifies your workflow and makes it much more reliable.",
  },
  {
    id: 2,
    question: "How does the Activity Log help my business?",
    answer:
      "Activity Log maintains a comprehensive log of all activities that occur in your system. You are able to see the person who changed, the date when it was changed, and what has been changed. This enhances accountability, transparency, and control within your team.",
  },
  {
    id: 3,
    question:
      "Can I get alerts for low or critical stock levels?",
    answer:
      "Yes, Stock Alerts allow you to be notified when products are at significant levels. You would be able to see such information as SKU, supplier, location, and current quantity. This will make sure you replenish in time and never run out of things.",
  },
  {
    id: 4,
    question: "Is the interface easy for new team members to learn?",
    answer:
      "Definitely, General Tools are simple in design. New users do not require long durations of training to navigate features. The design is accurate and transparent, and constructed in such a way that teams can operate with confidence at the outset.",
  },
  {
    id: 5,
    question: "Do General Tools work for all types of businesses?",
    answer:
      "Yes, they are flexible to accommodate different industries such as retail, pharmacy, food, fashion, etc. All tools are easily compatible with your workflow, and they can help you organize inventory in a manner that best suits your company.",
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
    name: "Sara M",
    title: "Bright Home",
    image: "/assets/pfp.avif",
    text: `"The General Tools of Owners Inventory have totally changed our way of handling our inventory. Everything can be easily followed and the interface is highly intuitive. Stock levels are monitored in real time and that saves us much work. My favorite feature is the automated alerts, which avoid errors prior to occurrence. It has simplified our daily work process and made it smoother and more efficient."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Ahmed K",
    title: "Al-Asif",
    image: "/assets/pfp.avif",
    text: `"I used to have a headache trying to manage more than one store, but now, thanks to the General Tools of Owners Inventory, everything is easy. The logs of activity will enable us to view the specific changes made and by whom they were made. We are informed immediately through stock alerts, and therefore we do not run out of stock. The system is quick, dependable and simple to use by the entire team. It has actually made our entire inventory control much better than before."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Lina R",
    title: "Trendy Fashion",
    image: "/assets/100.jpeg",
    text: `"Owners Inventory General Tools are a life savior to our fashion business. Processing of seasonal collections and handling of multiple SKUs previously consumed hours, but it is now quicker. With its user-friendly design, it is easy to use by anyone. All is organized and controlled, even bulk updates and stock checks. It has certainly streamlined our business processes."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Omar S",
    title: "FreshBite Cafe",
    image: "/assets/100.jpeg",
    text: `"The General Tools of Owners Inventory have made significant contributions to our restaurant. Automated notifications and real-time stock updates enable us not to run out of ingredients. We are able to trace all products in our outlets conveniently. It is time-saving and stress-free to our employees. In general, it has simplified our inventory management greatly and increased accuracy."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
];

const Page = () => {
  // Get layout patterns based on FeaturesCards length
  const layoutPatterns = getLayoutPatterns(FeaturesCards.length);
  
  return (
    <div>
      <SubFeaturesHero
        title="General Tools: Simplify Your Inventory Management"
        description="Take control of your inventory with smart, easy-to-use tools designed for efficiency. From quick edits to bulk updates, General Tools help you save time, reduce errors, and keep your inventory organized effortlessly."
        video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Our Valued Clients"
        paragraph="Owners Inventory helps businesses like Al-Asif and Bright Home manage inventory smarter and more efficiently. It simplifies operations, increases visibility, and improves decision making driving their success."
      />
      <KeyHighlights
        heading="Key Highlights"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Our Tools?"
        paragraph="Our tools are designed to help inventory management be more intelligent, quicker, and simpler. They are created with accuracy and performance in mind allowing you to save time, minimize errors and keep full control of your business activities."
        cards={[
          {
            icon: "/assets/features-page/point-of-sale/why-chose/speed-accuracy.svg",
            title: "Intelligent Automation",
            description:
              "Eliminate manual work with real-time automation, so you can focus on growth instead of routine tasks.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/scalable-for-growth.svg",
            title: "Real-time insights",
            description:
              "Stay updated with precise, real-time data so you can make smarter decisions and always know what’s happening in your inventory.",
          },
          {
            icon: "/assets/features-page/general-tools/user-friendly-design.svg",
            title: "User Friendly Design",
            description:
              "Enjoy a clean, intuitive interface that’s easy to navigate, making every feature simple and smooth for all users.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/seamless-automation.svg",
            title: "Fluent Integration",
            description:
              "Easily connect with other modules and systems for a unified workflow, keeping all your business data on one platform.",
          },
           {
            icon: "/assets/features-page/human-resource-page/why-chose/scalable-for-growth.svg",
            title: "Stable Performance",
            description:
              "Enjoy fast, stable performance even with large data—our tools are built for accuracy and reliability without interruption.",
          },
         
        ]}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Industries We Empower"
          paragraph="General Tools are meant to help ease inventory management in a vast array of industries. These tools aid businesses in maintaining order, efficiency, and control of operations, including tracking of fast-moving products as well as maintaining complex stock records."
          buttonText="Explore All Industries"
          industries={productIndustries}
        />
      </div>

      <FeaturesCallToAction
        title="Supercharge Your Workflow"
        description="Handle updates, track actions, and manage stock changes in seconds without any confusion. Step into a faster, cleaner, and more controlled way of working with tools built to keep you ahead, always."
        ctaDesc="Get Started Now"
      />
      <FeaturesTestimonials
        testimonials={productTestimonials}
        heading="What Our Clients Say"
        showSmartTools={true}
        secondHeading="Contact Us"
        secondDescription="Manage updates, track actions, and control stock changes in seconds with fast, simple, and organized tools built to keep you ahead."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQs"
          paragraph="The following are some of the typical inquiries that businesses have with regard to our General Tools. These responses will guide you in learning how the feature operates and how it can assist in making inventory management smoother, faster, and more precise."
          faqs={productFaqs}
        />
      </div>
    </div>
  );
};

export default Page;