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
      "Add and maintain products in POS quickly with comprehensive listings, categories, and barcodes to maintain your shelves and online catalog flawlessly.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp",
  },
  {
    id: 2,
    title: "Restaurant",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Control menu items, ingredients, and combos with our POS product management feature and make sure that all branches are operating off the same menu.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp",
  },
  {
    id: 3,
    title: "Wholesalers",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Manage product catalogs easily with efficient bulk item organization, level pricing, and supplier catalogs with robust product catalog management software.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp",
  },
  {
    id: 4,
    title: "Pharmacies",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Monitor batch and expiry of medicines with inventory product management software, ensuring that the stock in your pharmacy is secure, legally compliant, and reliable.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp",
  },
  {
    id: 5,
    title: "Fashion & Apparel",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Keep track of all sizes, colors, and styles, with product variants, seasonal collections, and stock coordination between online and physical stores, whether you sell streetwear, shoes, or high fashion.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp",
  },
];

const FeaturesCards = [
  {
    id: 1,
    title: "Transfer Orders",
    description:
      "Simple movement of products across warehouses, stores, or branches. Monitor every step so that your products can be delivered on time and correctly. Transfer orders keep your stock flowing problem-free.",
    imageSrc:
      "/assets/features-page/inventory-operations-page/features-section/tranfer-order.webp",
  },
  {
    id: 2,
    title: "Stock Issuing",
    description:
      "Efficiently issue stock at your warehouse or store with full records. Stock issuing ensures that outgoing products are accurately tracked and inventory levels are current at all times.",
    imageSrc:
      "/assets/features-page/inventory-operations-page/features-section/stock-issuing.webp",
  },
  {
    id: 3,
    title: "Stock Receiving",
    description:
      "Get inventory fast and correctly, and check on all incoming goods. Verify product inclusions against supplier invoices and update the inventory instantly in the process of correct stock control.",
    imageSrc:
      "/assets/features-page/inventory-operations-page/features-section/stock-recieving.webp",
  },
  {
    id: 4,
    title: "Stock Adjustment",
    description:
      "Quickly change and correct stock levels to record damaged items or update quantities. Make sure that your inventory is trustworthy, legal, and up-to-date.",
    imageSrc:
      "/assets/features-page/inventory-operations-page/features-section/stock-adjustment.webp",
  },
];

const productFaqs = [
  {
    id: 1,
    question:
      "What is a product management feature in a POS system?",
    answer:
      "It is a solution that allows you to add and maintain goods in POS, such as pricing, stock availability, barcodes, and variants, all in a single centralized dashboard.",
  },
  {
    id: 2,
    question: "How does Owners Inventory simplify product catalog management?",
    answer:
      "With our product catalog management software, you can sort items by category, collection, and attribute, and maintain a uniform catalog across stores and the Internet.",
  },
  {
    id: 3,
    question:
      "Can I track stock in real-time with this system?",
    answer:
      "Yes! The inventory product management software automatically updates the stock levels on every sale, every return, and every restock taking place, and therefore, it is absolutely accurate.",
  },
  {
    id: 4,
    question: "Is this POS product management feature suitable for multiple industries?",
    answer:
      "Absolutely. Our system is designed to handle objects in POS systems of any kind of business, starting with retail and fashion, and down to restaurants and pharmacies.",
  },
  {
    id: 5,
    question: "What makes Owners Inventory better than other POS solutions?",
    answer:
      "In comparison to generic tools, our POS system product listing will provide enhanced customization, analytics, and simple scaling to assist you in selling smarter and managing better.",
  },
];


const getLayoutPatterns = (cardCount: number) => {
  switch (cardCount) {
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
    name: "Daniel Smith",
    title: "Operations Manager",
    image: "/assets/pfp.avif",
    text: `"Owners' Inventory has changed the way we manage our stock in a big way. Their inventory management software makes it easy to keep track of and restock items. Our whole inventory operations process has gotten more accurate and faster. Our team can now make quick, smart decisions more easily every day."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Muhammad Qureshi",
    title: "Co-Founder, The Brew Café",
    image: "/assets/pfp.avif",
    text: `"Managing more than one branch was always hard, but Owners Inventory made it easier.  The system makes everything easier, from keeping an eye on things to making reports.  Their inventory management services help us stay on top of things and save us a lot of time.  The support team is always there for us and ready to help when we need it."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Angela Liam",
    title: "Business Owner",
    image: "/assets/100.jpeg",
    text: `"We use Owners Inventory every day to keep track of the products in our warehouse and store.  Our team finds it easy to use the platform's inventory operations software for everyday tasks. It keeps everything in sync. It's a really useful tool that grows with our business."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Patric Tomlinson",
    title: "Managing Director, CityMed Pharmacies",
    image: "/assets/100.jpeg",
    text: `"With Owners Inventory, we can finally see all of our products. Now, the process of managing inventory is easier, faster, and more reliable. For any business that wants to better manage its inventory, this is a game-changer. We've made fewer mistakes by hand and made our sales flow better overall."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
];

const Page = () => {
  
  const layoutPatterns = getLayoutPatterns(FeaturesCards.length);
  
  return (
    <div>
      <SubFeaturesHero
        title="Smart Product Management for Smarter Sales"
        description="Easily manage and organize your catalog with a single, intuitive POS console. Transform chaos into clarity for faster, smarter product management."
        video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Trusted by Leading Businesses"
        paragraph="We work with trusted brands like Al-Asif, and many growing companies to help them manage products, generate reports, and improve overall performance with fast, reliable tools."
      />
      <KeyHighlights
        heading="Key Highlights"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Us?"
        paragraph="Take full control of your inventory with Owners' Inventory. Our POS system makes product management easy, accurate, and efficient, helping your business grow smarter and faster."
        cards={[
          {
            icon: "/assets/features-page/inventory-operations-page/why-chose/designed-every-business.svg",
            title: "Designed for Every Business Type",
            description:
              "Our POS product management fits smoothly into any workflow retail, wholesale, or hospitality.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/scalable-for-growth.svg",
            title: "Real-Time Control & Accuracy",
            description:
              "Get real-time updates on stock, pricing, and product information using smart inventory product management software.",
          },
          {
            icon: "/assets/features-page/inventory-operations-page/why-chose/effortless-setup.svg",
            title: "Effortless Setup & Scalability",
            description:
              "Our POS product management feature enables you to easily add and expand your catalog and is designed to scale with your business.",
          },
          {
            icon: "/assets/features-page/human-resource-page/why-chose/scalable-for-growth.svg",
            title: "Insight-Driven Decisions",
            description:
              "Get easy access to clear analytics on your POS system product listing to determine top performers and increase profitability.",
          },
         
        ]}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Built for Every Industry That Sells Smarter"
          paragraph="Whether it is inventory product management software or flexible catalog tools, Owners Inventory makes it easier to add, organize, and manage products in any industry."
          buttonText="Explore All Industries"
          industries={productIndustries}
        />
      </div>

      <FeaturesCallToAction
        title="Simplify. Scale. Sell Smarter"
        description="Feel the convenience of inventory products management software that adds order, speed, and precision to each sale. On retail counters, in warehouses, store each product where it belongs, under your watch."
        ctaDesc="Get Started Now"
      />
      <FeaturesTestimonials
        testimonials={productTestimonials}
        heading="What Clients Say About Us"
        showSmartTools={true}
        secondHeading="Contact Us"
        secondDescription="Have questions or want to see how Owners Inventory can simplify your business? Contact our team for setup help, pricing, or a personalized demo—we’re here to support you every step of the way."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Everything You Need to Know About Managing Products in POS"
          paragraph="Find the most frequently asked questions regarding how to use Owners Inventory to organize, track, and grow your business using smart product management in POS system tools."
          faqs={productFaqs}
        />
      </div>
    </div>
  );
};

export default Page;