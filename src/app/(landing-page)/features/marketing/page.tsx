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
      "For pharmacies, you can encourage customers to return for essentials by offering loyalty points on non prescription items. You can also send them coupons for health and wellness products based on their past purchases.",
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
      "Easily create and manage exciting coupons to boost sales immediately. Our coupon system is flexible. It allows you to run any promotion easily across your entire business.",
    imageSrc:
      "/assets/features-page/sales-order/features-section/manage-all-sales-doc.webp",
    listItems: [
      "It generates discount codes easily for specific products or entire orders.",
      "Sets the rules you need, including fixed amounts, expiration dates and usage limits.",
      "Tracks comprehensive data for every coupon, including its ID, Expiry date, the Store where it was used, Sold By details, Created at date, total Amount, Amount used and the Amount Left.",
      "You can track results to see exactly how well each coupon campaign is performing.",
    ],
  },
  {
    id: 2,
    title: "Loyalty Programs",
    description:
      "Build strong, long term relationships with your best customers by automatically rewarding them for their purchases. Our programs encourage repeat business and help you track retention flawlessly.",
    imageSrc:
      "/assets/features-page/sales-order/features-section/smart-record-view.webp",
    listItems: [
      "It helps with rewarding regular customers automatically with points or exclusive discounts to thank them for their business.",
      "Builds powerful rules based on customer purchase history to give higher incentives.",
      "Boosts retention by encouraging repeat business and building long term customer relationships.",
    ],
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
        heading="Key Marketing Features for Smarter Engagement"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Our Marketing Features?"
        paragraph="Choose Owner's Inventory because we offer simplicity, smart automation and real time data you can trust. We give you more than just marketing tools. We actively help you engage customers, increase their loyalty and grow your revenue in a much smarter way."
        cards={[
          {
            icon: "/assets/features-page/people-page/why-chose/all-in-one-platform.svg",
            title: "Automated and Hassle Free",
            description:
              "Setting up your promotions is really fast. You can launch coupons and loyalty programs in minutes. Then watch them run automatically without any daily manual work.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/real-time-insights.svg",
            title: "Retaining Customers",
            description:
              "It's easy to keep your best customers happy by rewarding them often. This helps you build stronger relationships. Our tools are built to help you keep customers longer and get them to buy again and again.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/seamless-automation.svg",
            title: "Insight Driven Decisions",
            description:
              "You can stop guessing about which promotions actually work. You can watch every coupon used and all loyalty activities happen in real time. To get better results, this helps you quickly adjust your marketing campaigns and sales plans.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/scalable-for-growth.svg",
            title: "All-in-One Marketing Platform",
            description:
              "Everything you need to run promotions, rewards, and tracking is in one spot. This keeps your marketing simple and ensures all your sales data works together perfectly.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/scalable-for-growth.svg",
            title: "24/7 Expert Support",
            description:
              "If you ever get stuck or have a question, our team is always ready to help. We are available all the time. We help you set up and manage your marketing programs.",
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
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-[100]">
        <FaqSection
          heading="Everything You Need to Know About Marketing Features"
          paragraph="We have collected the most frequently asked questions regarding Marketing, the workforce management feature of Owners Inventory. Whether you are setting up and automating or tracking performance and analytics, here is all you need to know."
          faqs={marketingFaqs}
        />
      </div>
    </div>
  );
};

export default page;
