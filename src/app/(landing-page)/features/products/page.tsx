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
      "Easily handle hundreds of SKUs and seasonal products. Manage prices, track sales and monitor moving inventory. Perfect for retail establishments like supermarkets, cosmetics stores, etc.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp",
  },
  {
    id: 2,
    title: "Restaurant",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Accurately create and manage menu items, combos, and track food items. Keep your menu aligned with availability and instantly update pricing.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp",
  },
  {
    id: 3,
    title: "Wholesalers",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Manage supplier catalogs and bulk inventory with complete accuracy. Minimize manual labor without compromising organization and audit-readiness.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp",
  },
  {
    id: 4,
    title: "Pharmacies",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Effectively manage medication batches and expiration dates. Maintain the accuracy and full  traceability of your pharmacy’s product data.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp",
  },
  {
    id: 5,
    title: "Fashion & Apparel",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Effortlessly arrange sizes, colors, and styles. Collection-based management for apparel and accessories is all supported by the Product Catalog Management Software.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp",
  },
];

const FeaturesCards = [
  {
    id: 1,
    title: "Product Management and Creation",
    description:
      "Add and Manage Products in Inventory Management without any difficulty. Enter information such as the name, price, description, barcode, SKU, and product name. Activate or deactivate your products at any time to maintain consistency and up-to-date cataloging.",
    imageSrc:
      "/assets/features-page/products-page/features-section/product-management.webp",
  },
  {
    id: 2,
    title: "Bulk Imports and Uploads",
    description:
      "Utilize the bulk upload tool to save significant time. Through Excel and CSV files, easily import a number of items, and then export them as needed. Handle updates easily without any additional changes or errors.",
    imageSrc:
      "/assets/features-page/products-page/features-section/bulk-imports.webp",
  },
  {
    id: 3,
    title: "Search & Filters",
    description:
      "Dynamic charts and graphs can help you understand your inventory more quickly.  It's easy to see patterns and make decisions based on data when you use visual breakdowns.",
    imageSrc:
      "/assets/features-page/products-page/features-section/search-filter.webp",
  },
  {
    id: 4,
    title: "Price Management",
    description:
      "It’s easy to manage and update cost, selling, and discount prices, all at one place. Easily set active or inactive listings and promotions.",
    imageSrc:
      "/assets/features-page/products-page/features-section/price-management.webp",
  },
  {
    id: 5,
    title: "Barcodes and SKUs Management",
    description:
      "You can create SKUs and barcodes for each and every item. For faster sales and reporting, instantly scan, update, and track products.",
    imageSrc:
      "/assets/features-page/products-page/features-section/barcode-management.webp",
  },
  {
    id: 6,
    title: "Visibility and Stock Status",
    description:
      "Monitor stock levels in real time. Quickly spot products that are running low, overstocked or out of stock and take appropriate actions before they affect overall sales. ",
    imageSrc:
      "/assets/features-page/products-page/features-section/visibility-status.webp",
  },
  {
    id: 7,
    title: "Categories",
    description:
      "Effortlessly organize your entire product catalog into categories to simplify inventory management and boost the efficiency of your store.",
    imageSrc:
      "/assets/features-page/people-page/features-section/integrated-module.webp",
  },
  {
    id: 8,
    title: "Brands",
    description:
      "Manage and highlight brands efficiently to manage your product catalog, enhance reporting, and make brand based filtering easy. Proper brand management ensures consistency, recognition, and easier stock control across your inventory.",
    imageSrc:
      "/assets/features-page/people-page/features-section/integrated-module.webp",
  },
];

const productFaqs = [
  {
    id: 1,
    question:
      "What is the Products feature in the Owners Inventory?",
    answer:
      "Products is a management system for catalog, stock and pricing. It brings all of the tools you need to organize and maintain your inventory together in one place.",
  },
  {
    id: 2,
    question: "Can I track my stock automatically?",
    answer:
      "Yes. The system pulls your stock figures in real time, so as soon as you sell or buy an item your quantity available is updated immediately.",
  },
  {
    id: 3,
    question:
      "Does it support bulk pricing and discount management?",
    answer:
      "Absolutely. You can implement bulk price adjustments, develop promotions and work with several price lists in a snap.",
  },
  {
    id: 4,
    question: "Is it suitable for my business type?",
    answer:
      "Yes. Owners Inventory is designed to accommodate all types of business models, whether you’re the single store owner or a mega retail chain.",
  },
  {
    id: 5,
    question: "Can I import my existing product data?",
    answer:
      "Yes. Your product catalog can be easily imported from Excel or CSV files to start without any delay.",
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

const productTestimonials = [
  {
    name: "Daniel Smith",
    title: "Operations Manager",
    image: "/assets/pfp.avif",
    text: `"It used to take hours and hours of manual entry to Manage Items in the POS System. But now with the help of Owners Inventory, we can upload or modify products in seconds. And because of that the process is now very easy and reliable."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Muhammad Qureshi",
    title: "Co-Founder, The Brew Café",
    image: "/assets/pfp.avif",
    text: `"The bulk upload feature in inventory management has been a lifesaver for my business. We can now manage hundreds and thousands of SKUs across multiple stores without any errors, which has saved us so much time and hassle."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Angela Liam",
    title: "Business Owner",
    image: "/assets/100.jpeg",
    text: `"The product tracking tools make it so much easier to see what’s selling and what’s not. It really helps us plan our inventory and make smarter decisions for better results."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Patric Tomlinson",
    title: "Managing Director, CityMed Pharmacies",
    image: "/assets/100.jpeg",
    text: `"This software keeps our product data consistent and accurate. It’s simple to use but very efficient, a perfect blend for growing our business."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
];

const page = () => {
  return (
    <div>
      <SubFeaturesHero
        title="Manage Your Products Seamlessly with Owners Inventory"
        description="Create, manage, and monitor all your products effectively through the Product Management Feature in Owners Inventory. Organize stock levels, set prices, SKUs, and barcodes with complete transparency and accuracy."
        video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection
        heading="Our Trusted Companies"
        paragraph="Trusted by innovative retail, wholesale, and service brands, our solutions bring precision, simplicity, and speed to daily operations. We power businesses like Al-Asif and ASK Food Industries with smart cataloging and reliable data."
      />
      <KeyHighlights
        heading="Our Key Features"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Product Management System"
        paragraph="Choose Owners Inventory because of its accuracy, scalability, and efficiency. It's not about stocks, but about smartly managing your business."
        cards={[
          {
            icon: "/assets/features-page/people-page/why-chose/all-in-one-platform.svg",
            title: "Smooth Automation",
            description:
              "For optimal productivity, automate routine processes like imports, updates, and syncs.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/seamless-automation.svg",
            title: "Adaptable to Growth",
            description:
              "Owners Inventory expands as your business grows, whether you are a startup or a multinational corporation.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/scalable-for-growth.svg",
            title: "Secure Data Management",
            description:
              "Owners Inventory safeguards your product data, guaranteeing transparency and confidentiality.",
          },
          {
            icon: "/assets/features-page/products-page/product-control.svg",
            title: "Product Control",
            description:
              "Manage all product details from every retailer in one dashboard, no switching systems.",
          },
            {
            icon: "/assets/features-page/people-page/why-chose/real-time-insights.svg",
            title: "Real-Time Updates",
            description:
              "Instant updates sync system-wide, removing errors and ensuring everyone has accurate, up-to-date information.",
          },
        
        ]}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Industry-Ready Product Dashboard Solutions"
          paragraph="It does not matter whether you are a manufacturer, wholesaler, distributor, or retailer, our Product Management feature helps you manage your product operations with complete transparency and accuracy. From pricing to performance, Owners Inventory makes sure that every product in your catalog is organized, and optimized for your business."
          buttonText="Explore Now"
          industries={productIndustries}
        />
      </div>

      <FeaturesCallToAction
        title="Empower Products Elevate Businesses"
        description="With Owners Inventory, you have complete control over your POS System Product Listing, inventory, and pricing. Organizing and optimizing every aspect of your business is made easier with our platform."
        ctaDesc="Get Started Now"
      />
      <FeaturesTestimonials
        testimonials={productTestimonials}
        heading="Clients Voices"
        showSmartTools={true}
        secondHeading="Contact Us"
        secondDescription="Owners Inventory makes managing your product data easy and efficient. Contact our 24/7 team for a free demo and discover how we can streamline your business."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Everything You Need to Know About Owners Inventory"
          paragraph="Here are some things you should know, whether you are automating your stock system or setting up your catalog."
          faqs={productFaqs}
        />
      </div>
    </div>
  );
};

export default page;
