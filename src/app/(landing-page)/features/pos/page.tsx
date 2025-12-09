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

const posIndustries = [
  {
    id: 1,
    title: "Retail Stores",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Quicken checkout with barcode scanning and detailed reports as our POS system streamlines inventory and revenue control with industry-specific insights.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp",
  },
  {
    id: 2,
    title: "Restaurants",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Serve customers faster with quick-bill POS software that manages tables, menus, and real-time stock while seamlessly connecting kitchen and counter operations for accurate, efficient service.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp",
  },
  {
    id: 3,
    title: "Wholesalers",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Easily manage large orders, special pricing, and multi-location stock with wholesaler-focused POS features that streamline bulk transactions and boost efficiency for high-volume businesses.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp",
  },
  {
    id: 4,
    title: "Pharmacies",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Ensure adherence to various batch tracking, expiry notifications, and detailed records whilst handling walk-in sales and electronic prescriptions with ease using our best point of sale software.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp",
  },
  {
    id: 5,
    title: "Fashion & Apparel",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Keep track of all sizes, colors, and styles using product variants, seasonal collections, and matching stock in both online and physical stores using our best point of sale systems-the best in streetwear, shoe, or high fashion.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp",
  },
];

const posTestimonials = [
  {
    name: "Fatima A.",
    title: "Boutique Owner",
    image: "/assets/pfp.avif",
    text: `"The transition to Owners Inventory has totally transformed the manner in which we conduct our retail business. It used to be a mess to manage sales and stock in the past but now everything is updated in real time."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Hassan Malik",
    title: "Fashion & Apparel Seller",
    image: "/assets/pfp.avif",
    text: `"Managing a busy restaurant, we have to count every second and this POS has created that difference. There is no confusion in sending orders to the kitchen and there is no problem with managing menus or tables. The speed of our service has increased and customers have felt the difference. It has become an element of our workflow."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "David Martinez",
    title: "HOD Supply Chain, PureSip Beverages",
    image: "/assets/100.jpeg",
    text: `"The process of managing multiple store locations would have involved countless spreadsheets and phone calls. With Owners Inventory, all is linked together. It is comforting when we finally get a system that works, regardless of our location."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Ali R.",
    title: "Electronics Shop Manager",
    image: "/assets/100.jpeg",
    text: `"Everything in the pharmacy business is accuracy and compliance and this system provides both. Owners Inventory provides us with the reassurance to concentrate on our customers rather than work."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },

];

const FeaturesCards = [
  {
    id: 1,
    title: "Customer Management",
    description:
      "Switch to registered and walk-in customers easily to generate a seamless checkout experience. Our software point of sale allows you to monitor purchase history, loyalty points, and preferences to engage your customers better.",
    imageSrc:
      "/assets/features-page/point-of-sale/features-section/customer-management.webp",
  },
  {
    id: 2,
    title: "Barcode & SKU Search",
    description:
      "Search products by barcode or SKU. Best point of sale systems make the process of scanning and lookup accurate, fast and reliable.",
    imageSrc:
      "/assets/features-page/point-of-sale/features-section/barcode-sku.webp",
  },
  {
    id: 3,
    title: "Product Selection Table",
    description:
      "Quickly add items to the sale with customizable quantity, discount, and price. The flexibility of this point of sales system allows you to make changes to transactions within seconds.",
    imageSrc:
      "/assets/features-page/point-of-sale/features-section/product-selection.webp",
  },
  {
    id: 4,
    title: "Category & Product Filters",
    description:
      "Use filters to browse products by name or category. You can save time on peak hours with our best point of sale software and maintain check out lines running smoothly.",
    imageSrc:
      "/assets/features-page/point-of-sale/features-section/product-filter.webp",
  },
  {
    id: 5,
    title: "Billing Summary",
    description:
      "Create automatic billing summaries with auto-calculated items, discounts, taxes, payable amounts, and customer change. Our point of sale systems minimize human error and enhance accuracy of transactions.",
    imageSrc:
      "/assets/features-page/point-of-sale/features-section/billing-summary.webp",
  },
  {
    id: 6,
    title: "Stock Visibility",
    description:
      "Do not miss out on a sale because the stock is not there. The point of sale solution automatically shows the Out of Stock tags, which keeps real time inventory visible.",
    imageSrc:
      "/assets/features-page/point-of-sale/features-section/stock-viability.webp",
  },
  {
    id: 7,
    title: "User-Friendly Interface",
    description:
      "Get a clean, color-coded layout that is easy to use. Whether it is a single store or numerous stores, our optimal point of sales system guarantees steady and effective work.",
    imageSrc:
      "/assets/features-page/point-of-sale/features-section/user-friendly-interface.webp",
  },
  {
    id: 8,
    title: "Payment Options",
    description:
      "Managing various payment options, such as Cash, Payment, Invoice, Order, Hold, and Coupon actions. Owners Inventory offers a one-stop point of sale to serve all customers.",
    imageSrc:
      "/assets/features-page/point-of-sale/features-section/payment-option.webp",
  },
  {
    id: 9,
    title: "Quick Navigation",
    description:
      "Easily switch between Sales, Orders, Hold, and Shift management. The user-friendly point of sales software improves the operational flow and reduces training time.",
    imageSrc:
      "/assets/features-page/point-of-sale/features-section/quick-navigation.webp",
  },
];

const  posFaqs = [
  {
    id: 1,
    question: "What can I manage with Owners Inventory POS?",
    answer:
      "Our POS allows you to make all your sales effectively, stock in real-time, manage clients profiles, offer discounts or promotions, and produce detailed sales reports, all in one simple to use system.",
  },
  {
    id: 2,
    question: "Does the POS support multi-location inventory?",
    answer:
      "Yes. It coordinates the stock between several stores or warehouses, monitors the amount of stock in stock in real-time, and minimizes the difference, so operations go smoothly at all stations.",
  },
  {
    id: 3,
    question: "Can I integrate the POS with an online store?",
    answer:
      "Absolutely. The POS integrates perfectly with your online store and maintains inventory, prices, and orders in a coordinated way so that you can easily do business both online and offline.",
  },
  {
    id: 4,
    question: "Does the POS handle multiple payment types?",
    answer:
      "Yes. It accepts cash, credit/debit cards, mobile wallets, and split payments and ensures transactions are fast, correct, and adaptable to all customers.",
  },
  {
    id: 5,
    question: "How long does it take to start using the POS?",
    answer:
      "It is quick and easy to set up. The majority of businesses are willing to sell in under a couple of days to a few hours and provide full onboarding and support to help the business get started in a smooth manner.",
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

const page = () => {
  return (
    <div>
      <SubFeaturesHero
        title="Empower Your Business with POS"
        description="Sell smarter with our POS system. Intended to be fast, accurate, and the best point of sale, it simplifies all transactions, operates inventory in real-time, and provides you with complete control over your business, all through a simple, easy-to-use interface."
        video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection heading="Trusted by Leading Brands" />
      <KeyHighlights
        heading="Power-Packed Features at Your Fingertips"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Revolutionize Sales with Our Smarter POS"
        paragraph="Select the Owners Inventory POS because of reliability, efficiency, and innovativeness that help your business remain ahead of the curve. We do not simply assist you in selling, we assist you in being smarter, faster and more profitable."
        cards={[
          {
            icon: "/assets/features-page/point-of-sale/why-chose/speed-accuracy.svg",
            title: "Fast & Flawless Transactions",
            description:
              "Sell processes in seconds, reduce mistakes, and ensure your checkout is fast and efficient.",
          },
          {
            icon: "/assets/features-page/point-of-sale/why-chose/all-integration.svg",
            title: "Unified Business Control",
            description:
              "Operate POS, inventory, accounting, and reporting on one platform.",
          },
          {
            icon: "/assets/features-page/point-of-sale/why-chose/scalable.svg",
            title: "Flexible & Scalable",
            description:
              "Our system scales with your business, no matter whether you have one store or a multi-location chain.",
          },
          {
            icon: "/assets/features-page/point-of-sale/why-chose/smarter-decision.svg",
            title: "Insight-Driven Decisions",
            description:
              "Use real-time sales analytics and detailed reports to make smarter and data-driven business decisions.",
          },
        ]}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        {/* <IndustryPOSShowcase
        heading="Industry-Ready POS to Power Your Sales"
  description="There is no single business like another; then why use generic point-of-sale systems? Owners Inventory offers a customized point of sale software and point of sale solution to meet your industry specifications."
         industries={posIndustries} /> */}
        <IndustryPosShowcase
          mainHeading="Industry-Ready POS to Power Your Sales"
          paragraph="There is no single business like another; then why use generic point-of-sale systems? Owners Inventory offers a customized point of sale software and point of sale solution to meet your industry specifications."
          buttonText="Explore Now"
          industries={posIndustries}
        />
      </div>

      <FeaturesCallToAction
        title="Sell Smarter. Run Your Business Better"
        description="Get a POS system to make your business smooth and trouble-free in practice by having complete control of sales, inventory, and operations."
      />
      <FeaturesTestimonials
        testimonials={posTestimonials}
        heading="What Clients Say About Us?"
        showSmartTools={true}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-[100]">
        <FaqSection
        heading="Everything You Need to Know About Owners' Inventory"
        paragraph="We’ve gathered the most common questions about Owners Inventory from setup and features to pricing and support. Still have doubts? Our team is ready to guide you every step of the way." 
        faqs={posFaqs}
        />
      </div>
    </div>
  );
};

export default page;
