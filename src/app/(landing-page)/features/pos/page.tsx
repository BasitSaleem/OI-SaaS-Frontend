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
const IndustryPosShowcase = dynamic(() => import('@/components/pages/landing-page/IndustryPosShowcase'));



const posIndustries = [
  {
    title: 'Retail Stores',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Barcode scanning, price overrides, and detailed sales reports help you move faster at the counter while keeping inventory and revenue under control.',
    image: '/assets/industry-type/retail-store.webp',
    mobileImage: '/assets/industry-type/retail-store-mobile.webp',
  },
  {
    title: 'Restaurant Types',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
    description: 'Speed up service with quick-bill POS, manage tables and menus with ease, and track ingredients or stock levels in real-time.',
    image: '/assets/industry-type/restaurant.webp',
    mobileImage: '/assets/industry-type/restaurant-mobile.webp',
  },
  {
    title: 'Wholesalers',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Handle bulk orders with customer-specific pricing, manage multi-location inventory, and keep fulfillment running efficiently.',
    image: '/assets/industry-type/whole-sale.webp',
    mobileImage: '/assets/industry-type/whole-sale-mobile.webp',
  },
  {
    title: 'Pharmacies',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
    description: 'Ensure safety and compliance with batch tracking, expiry alerts, and detailed logs, all while managing walk-in sales effortlessly.',
    image: '/assets/industry-type/pharmacy.webp',
    mobileImage: '/assets/industry-type/pharmacy-mobile.webp',
  },
  {
    title: 'Service Business',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Track every size, color, and style with product variants, manage seasonal collections, and keep stock aligned across stores.',
    image: '/assets/industry-type/fashion.webp',
    mobileImage: '/assets/industry-type/fashion-mobile.webp',
  },
];

const posTestimonials = [
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





const FeaturesCards = [
  {
    title: "Customer Management",
    description: "Switch to registered and walk-in customers easily to generate a seamless checkout experience. Our software point of sale allows you to monitor purchase history, loyalty points, and preferences to engage your customers better.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/quick-billing.webp",
  },
  {
    title: "Barcode & SKU Search",
    description: "Search products by barcode or SKU. Best point of sale systems make the process of scanning and lookup accurate, fast and reliable.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/intigrated-with-inventory.webp",
  },
  {
    title: "Product Selection Table",
    description: "Quickly add items to the sale with customizable quantity, discount, and price. The flexibility of this point of sales system allows you to make changes to transactions within seconds.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/multi-store.webp",
  },
  {
    title: "Category & Product Filters",
    description: "Use filters to browse products by name or category. You can save time on peak hours with our best point of sale software and maintain check out lines running smoothly.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/offline-support.webp",
  },
  {
    title: "Billing Summary",
    description: "Create automatic billing summaries with auto-calculated items, discounts, taxes, payable amounts, and customer change. Our point of sale systems minimize human error and enhance accuracy of transactions.",
    imageSrc: "/assets/features-page/point-of-sale/key-highlights/flexible-payments.webp",
  },
  {
    title: "Stock Visibility",
    description: "Do not miss out on a sale because the stock is not there. The point of sale solution automatically shows the Out of Stock tags, which keeps real time inventory visible.",
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
      <TrustedBySection 
       heading="Trusted by Leading Global Enterprises"
      />
      <KeyHighlights
        heading="Power-Packed Features at Your Fingertips"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Revolutionize Sales with Our Smarter POS"
        paragraph='Select the Owners Inventory POS because of reliability, efficiency, and innovativeness that help your business remain ahead of the curve. We do not simply assist you in selling, we assist you in being smarter, faster and more profitable.'
        cards={[
          { icon: "/assets/features-page/point-of-sale/why-chose/speed-accuracy.svg", title: "Fast & Flawless Transactions", description: "Sell processes in seconds, reduce mistakes, and ensure your checkout is fast and efficient." },
          { icon: "/assets/features-page/point-of-sale/why-chose/all-integration.svg", title: "Unified Business Control", description: "Operate POS, inventory, accounting, and reporting on one platform." },
          { icon: "/assets/features-page/point-of-sale/why-chose/scalable.svg", title: "Flexible & Scalable", description: "Our system scales with your business, no matter whether you have one store or a multi-location chain." },
          { icon: "/assets/features-page/point-of-sale/why-chose/smarter-decision.svg", title: "Insight-Driven Decisions", description: "Use real-time sales analytics and detailed reports to make smarter and data-driven business decisions." },
        ]}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        {/* <IndustryPOSShowcase
        heading="Industry-Ready POS to Power Your Sales"
  description="There is no single business like another; then why use generic point-of-sale systems? Owners Inventory offers a customized point of sale software and point of sale solution to meet your industry specifications."
         industries={posIndustries} /> */}
          <IndustryPosShowcase industries={posIndustries} />
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
        <FaqSection />
      </div>
    </div>
  )
}

export default page;
