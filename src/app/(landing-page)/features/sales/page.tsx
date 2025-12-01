'use client'

import dynamic from "next/dynamic";
import React from 'react';

// 🔥 Dynamic Imports
const TrustedBySection = dynamic(() => import('@/components/common-components/TrustedBySection'));
const FeaturesCallToAction = dynamic(() => import('@/components/pages/features-page/FeaturesCallToAction'));
const FeaturesTestimonials = dynamic(() => import('@/components/pages/features-page/FeaturesTestimonials'));
const KeyHighlights = dynamic(() => import('@/components/pages/features-page/point-of-sale/KeyHighlights'));
const WhyChoosePOS = dynamic(() => import('@/components/pages/features-page/point-of-sale/WhyChoosePOS'));
const SubFeaturesHero = dynamic(() => import('@/components/pages/features-page/SubFeaturesHero'));
const FaqSection = dynamic(() => import('@/components/pages/landing-page/FAQSection'));
const IndustryPOSShowcase = dynamic(() => import('@/components/pages/landing-page/IndustryPosShowcase'));


const posIndustries = [
  {
    title: "Retail Stores",
    description:
      "Barcode scanning, price overrides, and detailed sales reports help you move faster at the counter while keeping inventory and revenue under control, perfect for convenience stores, electronics, cosmetics, and more.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp",
  },
  {
    title: "Restaurant Types",
    description:
      "Speed up service with quick-bill POS, manage tables and menus with ease, and track ingredients or stock levels in real-time — ensuring smooth operations from kitchen to counter.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp", // Add mobile image
  },
  {
    title: "Wholesalers",
    description:
      "Handle bulk orders with customer-specific pricing, manage multi-location inventory, and keep fulfillment running efficiently with a system built for volume.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp", 
  },
  {
    title: "Pharmacies",
    description:
      "Ensure safety and compliance with batch tracking, expiry alerts, and detailed logs, all while managing walk-in sales and digital prescriptions effortlessly.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp",
  },
  {
    title: "Fashion & Apparel",
    description:
      "Track every size, color, and style with product variants, manage seasonal collections, and keep stock aligned across online and physical stores, whether you sell streetwear, shoes, or high fashion.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp", // Add mobile image
  },
];


const FeaturesCards = [
  {
    title: "Manage All Sales Documents",
    description: "Our sales and order management software enables you to easily manage quotations, sales orders, and invoices in a single location. Be efficient and maintain a seamless flow between enquiry and delivery.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/quick-billing.webp",
  },
  {
    title: "Smart Record Viewing",
    description: "See everything in a simple dashboard with search, filters, page breaks, and column visibility. Our current POS point of sale and stock management system maintains your data uncluttered and reachable.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/intigrated-with-inventory.webp",
  },
  {
    title: "Manage Sales Docs",
    description: "Add or delete quotes, orders, and invoices with ease. This is to enable businesses to maintain accuracy and control in their sales management software environment.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/multi-store.webp",
  },
  {
    title: "Export Data to Excel",
    description: "Export your data to analyze, report, or account. The best sales and order management system is easy and flexible to simplify record-keeping and financial tracking.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/offline-support.webp",
  },
  {
    title: "Order Stages",
    description: "Keep track of each order by using a visual board that has distinct statuses - To Do, In Progress, and Done. Ideal to control workflow in your sales and order management system.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/flexible-payments.webp",
  },
  {
    title: "Quick Action Buttons",
    description: "Swiftly transfer orders between stages with smart action buttons. These controls improve productivity and optimize the flow of orders within your sales management software.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/customer-engagement.webp",
  },
  {
    title: "Quick Billing & Checkout",
    description: "Process sales in seconds with barcode scanning, quick search, and easy product selection.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/quick-billing.webp",
  },
  {
    title: "Integrated with Inventory",
    description: "Automatic stock updates with every transaction—no more manual adjustments.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/intigrated-with-inventory.webp",
  },
  {
    title: "Multi-Store & Multi-Device Ready",
    description: "Manage product catalogs, variants, pricing, and stock in one place.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/multi-store.webp",
  },
  {
    title: "Offline Mode Support",
    description: "Continue selling even without internet; data syncs automatically when you’re back online.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/offline-support.webp",
  },
  {
    title: "Flexible Payments",
    description: "Accept cash, cards, mobile wallets, and split payments—all in one system.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/flexible-payments.webp",
  },
  {
    title: "Customer Engagement",
    description: "Build loyalty with discounts, promotions, and customer profiles directly from the POS.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/customer-engagement.webp",
  },
];

const layoutPatterns = [
  { className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
  { className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
  { className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
  { className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
  { className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
  { className: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6", mediaClassName: "w-full h-[220px] xl:h-[260px] object-cover", paddingClass: "px-0" },
];

const salesTestimonials = [
  {
    name: "Fatima A.",
    title: "Boutique Owner",
    image: "/assets/pfp.avif",
    text: `"Before Owners Inventory, I had to switch between spreadsheets, my POS app, and an online
    store backend just to track what I was selling. I constantly oversold items or ran out of
    stock without realizing. Now everything is synced, my stock levels, sales
    reports, customer data, even my online store runs from the same system. I have time to focus
    on styling my store, not fixing my backend."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Hassan Malik",
    title: "Fashion & Apparel Seller",
    image: "/assets/pfp.avif",
    text: `"I run a small bakery from home, and I thought inventory tools were just for big stores. But Owners Inventory helps me track ingredients, handle custom orders, and even take online payments through my synced storefront. It feels like I have a full back office — without hiring anyone."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "David Martinez",
    title: "HOD Supply Chain, PureSip Beverages",
    image: "/assets/100.jpeg",
    text: `"As a beverage company managing retail, wholesale, and DTC channels, stock coordination was our biggest pain. Owners Inventory brought everything into one place — real-time tracking,
    automated reordering, mobile sales integration. We cut out-of-stocks
    by over 60% and reduced fulfillment lead time dramatically. It's agile, scalable, and
    surprisingly easy to roll out across departments."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Ali R.",
    title: "Electronics Shop Manager",
    image: "/assets/100.jpeg",
    text: `"I'm not a tech expert, and my staff definitely isn't. What I love about Owners Inventory is that it's super intuitive. My staff handles billing and stock without needing constant help, and I get all the reports I need to make smart decisions. It's simple where it needs to be — and powerful where it matters."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Zainab Batool",
    title: "Home Bakery Owner",
    image: "/assets/pfp.avif",
    text: `"I run a small bakery from home, and I thought inventory tools were just for big stores. But Owners Inventory helps me track ingredients, handle custom orders, and even take online payments through my synced storefront. It feels like I have a full back office — without hiring anyone."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Rachel Collins",
    title: "Head of Digital Strategy, NovaMall",
    image: "/assets/100.jpeg",
    text: `"We operate a fast-growing online marketplace and needed better sync between sellers,
    warehouse, and customer front-end. With Owners Inventory, real-time stock visibility and
    automated workflows keep us agile. We grew from 2K to 20K monthly orders without
    breaking our operations. It's the ERP alternative we didn't know we needed."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Michael Thompson",
    title: "COO, UrbanMart Superstores",
    image: "/assets/pfp.avif",
    text: `"When we opened our second branch, I thought we'd need a new system just to keep things in
    sync. But Owners Inventory just scaled with us. We now have three locations, and I can check
    all sales, inventory, and purchases from a single dashboard. We've
    saved hours of manual work every week and reduced stockouts by nearly 40%. Owners Inventory
    made it so easy — I can now track every SKU, run sales, and launch limited collections
    online in minutes. It's changed the way I do business."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Emma Harris",
    title: "MD WovenWardrobe Apparel",
    image: "/assets/pfp.avif",
    text: `"Managing seasonal apparel launches with multiple variants used to take forever. With Owners
    Inventory, I can sync products across stores and online within hours. It's intuitive, clean,
    and built for people who want things done right."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Jonathan Brooks",
    title: "CEO, SafetyPro Equipment Co",
    image: "/assets/pfp.avif",
    text: `"We deal in regulated safety gear across Europe, and our operations rely on accuracy and
    compliance. Owners Inventory handles everything — expiry tracking, order history, user-level
    access, audit logs — and it's intuitive for the team. We integrated purchasing
    and finance in under a week, and our reporting is 5x faster. What impressed me most is that
    we didn't need to overhaul our workflows; the system just fits into how we already work."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
];

const page = () => {
  return (
    <div>
      <SubFeaturesHero
        title="Turn Every Sale into a Success Story"
        description="Make it easier to sell, monitor, and process orders all under one roof. Manage sales channels, automate invoices, and stay focused on the driving power of your business with Owners Inventory."
        video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection 
       heading="Our Valued Clients"
       paragraph="We proudly work with trusted brands like Al-Asif and Bright Home, helping them streamline sales and inventory management. Our platform automates stock updates and daily operations, enabling smarter, faster, and more efficient business growth."
      />
      <KeyHighlights
        heading="Key Features"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      {/* <WhyChoosePOS
        heading="Revolutionize Sales with Our Smarter POS"
        paragraph='Select the Owners Inventory POS because of reliability, efficiency, and innovativeness that help your business remain ahead of the curve. We do not simply assist you in selling, we assist you in being smarter, faster and more profitable.'
        cards={[
          { icon: "/assets/features-page/point-of-sale/why-chose/speed-accuracy.svg", title: "Fast & Flawless Transactions", description: "Sell processes in seconds, reduce mistakes, and ensure your checkout is fast and efficient." },
          { icon: "/assets/features-page/point-of-sale/why-chose/all-integration.svg", title: "Unified Business Control", description: "Operate POS, inventory, accounting, and reporting on one platform." },
          { icon: "/assets/features-page/point-of-sale/why-chose/scalable.svg", title: "Flexible & Scalable", description: "Our system scales with your business, no matter whether you have one store or a multi-location chain." },
          { icon: "/assets/features-page/point-of-sale/why-chose/smarter-decision.svg", title: "Insight-Driven Decisions", description: "Use real-time sales analytics and detailed reports to make smarter and data-driven business decisions." },
        ]}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      /> */}

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPOSShowcase
        heading="Sales and Orders Tailored for Your Industry"
        description="All businesses sell differently, and your sales system needs to realize that. Whatever you sell, Owners Inventory offers flexible, industry-ready tools to make transactions easier, more accurate, and enable your team to make sales more quickly."
         industries={posIndustries} />
      </div>

      <FeaturesCallToAction
        title="Sell Smarter. Deliver Faster. Grow Bigger."
        description="Take control of every sale, from order to delivery, with tools that help you work faster, track better, and scale confidently with Owners Inventory."
      />
      <FeaturesTestimonials
  testimonials={salesTestimonials}
  heading="Words That Inspire Our Work"
  showSmartTools={true}
/>

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-[100]">
        <FaqSection />
      </div>
    </div>
  )
}

export default page;
