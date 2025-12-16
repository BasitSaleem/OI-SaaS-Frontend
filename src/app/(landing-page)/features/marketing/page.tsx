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

const marketingIndustries = [
  {
    id: 1,
    title: "Retail Stores",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "For Retail Stores, you can work on both traffic and sales. Here, offering fun seasonal coupons and rewarding your regular shoppers with loyalty points can be helpful.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp",
  },
  {
    id: 2,
    title: "Restaurant",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "For Restaurants, you will want to encourage repeat visits. Loyalty programs for both dine in customers and takeaway orders are encouraged.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp",
  },
  {
    id: 3,
    title: "Wholesalers",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "The focus is on large, valuable orders. You can drive bigger bulk purchases and reward your most important, long term clients with custom loyalty programs and targeted discounts.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp",
  },
  {
    id: 4,
    title: "Pharmacies",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Pharmacies can encourage customers to return for essentials by offering loyalty points on non-prescription items and sending personalized coupons for health and wellness products based on past purchases.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp",
  },
  {
    id: 5,
    title: "Fashion & Apparel",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "In the Fashion And Apparel Industry, offering exciting promo codes when you drop new collections and establishing a strong reward system will boost repeat purchases.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp",
  },
];

const FeaturesCards = [
  {
    id: 1,
    title: "Coupons",
    description:
      "Create and manage powerful coupons effortlessly to boost sales. Generate discount codes for products or full orders, set rules like amounts and expiry dates, and track all usage details in one place. Get clear insights to see how well each coupon campaign performs.",
    imageSrc:
      "/assets/features-page/marketing-page/features-section/coupons.webp",
   
  },
  {
    id: 2,
    title: "Loyalty Programs",
    description:
      "Build long-term customer relationships by automatically rewarding buyers for their loyalty. Our system makes it easy to give regular customers points or exclusive discounts based on their purchase history. With smart rules and personalized incentives, you can encourage repeat business, strengthen retention, and keep your best customers coming back.",
    imageSrc:
      "/assets/features-page/marketing-page/features-section/loyalty-programs.webp",
    
  },
];

const marketingFaqs = [
  {
    id: 1,
    question: "Can coupons be applied to online and in-store sales?",
    answer:
      "Yes. Our coupon system is designed for complete flexibility and a seamless customer experience. Coupons work in both conditions, whether a customer is checking out at a physical Store or completing a purchase through your online storefront. This ensures you can run unified campaigns across all your sales channels.",
  },
  {
    id: 2,
    question: "How do loyalty points work?",
    answer:
      "Points or discounts are automatically applied based on your rules. You can create rules and reward levels for regular customers.",
  },
  {
    id: 3,
    question: "Can the performance of coupons and loyalty programs be tracked?",
    answer:
      "Yes, comprehensive tracking is a core feature, allowing you to gain deep insights into your marketing efforts. You can track how your campaigns are performing by tracking key metrics which helps you effectively manage, organize and optimize future campaigns for better results.",
  },
  {
    id: 4,
    question: "Does the system prevent customers from abusing coupons?",
    answer:
      "Yes, we provide controls to protect your revenue. Coupon misuse is easily prevented. For instance, you can limit a coupon to one use per customer or a total number of redemptions overall. This feature helps you in maintaining control over your promotions and protecting your profit margins.",
  },
  {
    id: 5,
    question: "How secure is my customer data within the marketing platform?",
    answer:
      "We prioritize data security. All customer and sales information is protected using security measures and remains private within your dedicated platform. Your data remains strictly private and isolated within your dedicated platform environment.",
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

const marketingTestimonials = [
  {
    name: "Carol Bush",
    title: "Bright Home Owner",
    image: "/assets/pfp.avif",
    text: `"Implementing the loyalty points system through Owner's Inventory was honestly  one of the best decisions we made last year. Our customers genuinely love the points, which has increased how often they buy from us. We couldn't be happier with the results."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Yasir Khan",
    title: "Prime Traders",
    image: "/assets/pfp.avif",
    text: `"Before Owner's Inventory, running sales with coupons was a mess. Now, the coupon feature is so simple to set up and use. We have consistently seen a huge boost in sales."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Ginny Victoria",
    title: "StyleMart",
    image: "/assets/100.jpeg",
    text: `"As a growing business, we needed a way to reward our best and most loyal customers. Setting up a special loyalty program for them has never been easier. It has given us a professional way to build strong client relationships."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
];

const page = () => {
  // Get layout patterns based on FeaturesCards length
  const layoutPatterns = getLayoutPatterns(FeaturesCards.length);
  return (
    <div>
      <SubFeaturesHero
        title="Power Your Business with Smart Marketing Tools"
        description="Owner's Inventory Marketing helps you boost customer engagement and sales. It's simple, highly effective and works perfectly. Whether you want to reward your most loyal customers or easily attract new ones, it’s all taken care of under a single platform."
        video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Trusted by Leading Brands"
        paragraph="Businesses like Al-Asif and Bright Home rely on Owners Inventory Marketing to get better at customer retention and growth. From small shops to large retailers, owners inventory help brands increase repeat purchases and engage customers more effectively."
      />
      <KeyHighlights
        heading="Smart Marketing Features"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Our Marketing Features?"
        paragraph="Choose Owner's Inventory because we offer simplicity, smart automation and real time data you can trust. We give you more than just marketing tools. We actively help you engage customers, increase their loyalty and grow your revenue in a much smarter way."
        cards={[
          {
            icon: "/assets/features-page/purchases-page/why-chose/grow-business.svg",
            title: "Automated and Hassle Free",
            description:
              "Create promotions in minutes and let them run automatically no daily work needed.",
          },
          {
            icon: "/assets/features-page/purchases-page/why-chose/smarter-decision.svg",
            title: "Retaining Customers",
            description:
              "Keep top customers happy with regular rewards, strengthen relationships, and boost repeat purchases.",
          },
          {
            icon: "/assets/features-page/human-resource-page/why-chose/scalable-for-growth.svg",
            title: "Insight Driven Decisions",
            description:
              "Track every coupon and loyalty activity in real time. See what works and adjust your marketing quickly for better results.",
          },
          {
            icon: "/assets/features-page/purchases-page/why-chose/automated-buying.svg",
            title: "All-in-One Marketing Platform",
            description:
              "Run promotions, rewards, and tracking all in one place, keeping marketing simple and sales data unified.",
          },
          {
            icon: "/assets/features-page/purchases-page/why-chose/dedicated-support.svg",
            title: "24/7 Expert Support",
            description:
              "Our team is always ready to help you set up and manage your marketing programs.",
          },
        ]}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Industry Ready Marketing"
          paragraph="The Marketing module is designed to support your business whether you are a manufacturer, wholesaler, distributor or retailer. It helps you attract customers, retain them, and promote your brand with complete clarity."
          buttonText="Explore All Industries"
          industries={marketingIndustries}
        />
      </div>

      <FeaturesCallToAction
        title="Reward Customers. Grow Your Business."
        description="Owners Inventory Marketing makes creating coupons and loyalty programs simple, automated and effective. So you can focus on growing your business."
        ctaDesc="Get Started Now"
      />
      <FeaturesTestimonials
        testimonials={marketingTestimonials}
        heading="What Clients Say About Us?"
        showSmartTools={true}
        secondHeading="Contact Us"
        secondDescription="We make your business smarter and easier. Whether you want to explore Owners Inventory or learn how our POS and accounting tools simplify finances, our team will guide you with demos and personalized support."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-[100]">
        <FaqSection
          heading="Everything You Need to Know About Marketing Features"
          paragraph="Running business finances does not need to be stressful. Owners Inventory unites your sales, accounting, and reporting into a single convenient system. Some frequent questions are listed here to help you understand how Owners Inventory simplifies all aspects of your financial management."
          faqs={marketingFaqs}
        />
      </div>
    </div>
  );
};

export default page;
