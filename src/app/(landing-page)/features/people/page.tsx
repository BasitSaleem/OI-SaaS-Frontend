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


const salesIndustries = [
  {
    title: 'Retail Stores',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Quickly scan barcodes, offer a wide range of discount options, and real-time inventory display - ideal in electronics, grocery, cosmetics, or other fast-moving retail environments.',
    image: '/assets/industry-type/retail-store.webp',
    mobileImage: '/assets/industry-type/retail-store-mobile.webp',
  },
  {
    title: 'Restaurant',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
    description: 'Speed up orders, divide bills, and coordinate kitchen activities easily. Whether dining in or delivering, handle all sales and ingredients precisely.',
    image: '/assets/industry-type/restaurant.webp',
    mobileImage: '/assets/industry-type/restaurant-mobile.webp',
  },
  {
    title: 'Wholesalers',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Streamline big orders with tiered pricing, bulk billing, and automated tracking with multiple warehouses, designed to make your supply chain robust and reliable.',
    image: '/assets/industry-type/whole-sale.webp',
    mobileImage: '/assets/industry-type/whole-sale-mobile.webp',
  },
  {
    title: 'Pharmacies',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
    description: 'Remain compliant and precise regarding expiry alerts, prescription monitoring, and safe batch control. Build customer trust and a trustworthy service.',
    image: '/assets/industry-type/pharmacy.webp',
    mobileImage: '/assets/industry-type/pharmacy-mobile.webp',
  },
  {
    title: 'Fashion & Apparel',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Easily manage all designs, sizes, and colors. Coordinate collections by season in stores and maintain your sales on and offline.',
    image: '/assets/industry-type/fashion.webp',
    mobileImage: '/assets/industry-type/fashion-mobile.webp',
  },
  {
    title: 'Integrated Module Connection',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Link your people data to sales purchase and reporting systems. Single integration improves accuracy, time-saving and alignment of operations.',
    image: '/assets/industry-type/fashion.webp',
    mobileImage: '/assets/industry-type/fashion-mobile.webp',
  },
  {
    title: 'Categorization & Segmentation',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'The group users, customers and suppliers can be better organized and categorized into structured categories. Generate customer type or supplier groups to simplify reporting and management.',
    image: '/assets/industry-type/fashion.webp',
    mobileImage: '/assets/industry-type/fashion-mobile.webp',
  },
  {
    title: 'Transaction & Payment History',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'See all transactions connected to the user, customer or supplier in one location. Check purchase history and payment records to come up with the right decisions.',
    image: '/assets/industry-type/fashion.webp',
    mobileImage: '/assets/industry-type/fashion-mobile.webp',
  },
  {
    title: 'Balance & Performance Tracking',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Easily keep track of the pending payments and performance trends. Get connected insights that enhance financial control and build relationships',
    image: '/assets/industry-type/fashion.webp',
    mobileImage: '/assets/industry-type/fashion-mobile.webp',
  },
  {
    title: 'Intuitive Single Interface',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Switch between records and modules with a clean, modern interface. Control your people, customers, and suppliers more quickly and effectively than ever before.',
    image: '/assets/industry-type/fashion.webp',
    mobileImage: '/assets/industry-type/fashion-mobile.webp',
  },
  
];


const FeaturesCards = [
  {
    title: "User & Contact Management",
    description: "Easily coordinate your business contacts with just a single dashboard. Add, edit or delete old records in a few clicks, which is important to maintain a clean database and stay updated.",
    imageSrc: "/assets/features-page/sales-order/features-section/manage-all-sales-doc.webp",
  },
  {
    title: "Smart Search & Filters",
    description: "Search and filter any user, customer, or supplier in real time. Filter results by name, role, or category to find information faster.",
    imageSrc: "/assets/features-page/sales-order/features-section/smart-record-view.webp",
  },
  {
    title: "Role-Based Permissions",
    description: "Access who is allowed to read, edit or manipulate certain data on your system. Grant role permissions to ensure data safety and accountability.",
    imageSrc: "/assets/features-page/sales-order/features-section/manage-sales-doc.webp",
  },
  {
    title: "Secure Logins & Password",
    description: "Secure confidential data with password-recovery and high-level authentication. Provide secure access to all users without disrupting convenience.",
    imageSrc: "/assets/features-page/sales-order/features-section/export-data.webp",
  },
  {
    title: "Activity Logs & Audits",
    description: "Keep track of all the changes that occur in the system using detailed activity logs. Edits, deletion and amendments of tracks to guarantee complete visibility and transparency.",
    imageSrc: "/assets/features-page/sales-order/features-section/order-stage.webp",
  },
  {
    title: "Bulk Import & Export",
    description: "Save time by importing or exporting large datasets in Excel or PDF format. Share data, reporting as well as system migration easily.",
    imageSrc: "/assets/features-page/sales-order/features-section/quick-action-button.webp",
  },
];

const  salesFaqs = [
  {
    question: "What is sales and order management, and why is it important?",
    answer:
      "Sales and order management is the process of monitoring all sales made on the orders placed from delivery. An effective system guarantees precision, minimizes delays, and aids in customer satisfaction.",
  },
  {
    question: "How does your sales and order management software improve daily operations?",
    answer:
      "Our software brings together your whole workflow, from sales entry to stock updates. It makes it easier to take orders, handle customers, and make real-time business decisions.",
  },
  {
    question: "Is this a modern POS point of sale with a stock management system?",
    answer:
      "Yes. Owners Inventory is a combination of powerful POS and full inventory control capabilities, which provides you with one platform to bill, track sales, and manage products.",
  },
  {
    question: "How does your sales management software handle billing and invoices?",
    answer:
      "It automates the whole process, creates invoices immediately, documents payments, and tracks all transactions by using built-in billing and invoice management services.",
  },
  {
    question: "Why is Owners Inventory considered the best sales and order management system?",
    answer:
      "It is fast, dependable, and designed to suit contemporary businesses. It will fit into any industry, align all sales channels, and make sure your team spends less time managing and more time selling.",
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
    name: "Sana Iqbal",
    title: "Bright Home Owner",
    image: "/assets/pfp.avif",
    text: `"We have been using Owners Inventory for more than a year and it has really changed the way we do business. Orders, returns and stock levels are so much easier to track now. The system provides us with total control of our inventory operations process and makes everything transparent. Moreover, their support team is never too slow to render assistance whenever we get stuck. It has been a wonderful experience since the beginning."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Faisal Rehman",
    title: "Prime Traders",
    image: "/assets/pfp.avif",
    text: `"As a wholesaler, it was difficult to monitor big orders and various warehouses. Owners Inventory sorted that out with its automation and intelligent inventory operations software. It has made our work much more organized."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Hina Ahmed",
    title: "StyleMart",
    image: "/assets/100.jpeg",
    text: `"Our retail store is more efficiently managed now. We are able to view real-time stock levels, issue invoices on-the-fly and learn about customer requirements. The system actually assists us to keep on top of each sale."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Adeel Khan",
    title: "Al-Asif",
    image: "/assets/100.jpeg",
    text: `"Owners Inventory has totally transformed the manner of sale and stockings. We had to deal with incomplete records and handwritten updates before we used it. Everything is now synchronized and can be seen in real time. The single dashboard identifies each and every sale and order without any beat. It is easy, trustworthy and has genuinely eased our overall workflow."`,
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
        {/* <IndustryPOSShowcase
        heading="Sales and Orders Tailored for Your Industry"
        description="All businesses sell differently, and your sales system needs to realize that. Whatever you sell, Owners Inventory offers flexible, industry-ready tools to make transactions easier, more accurate, and enable your team to make sales more quickly."
         industries={posIndustries} /> */}
         <IndustryPosShowcase 
          mainHeading='Sales and Orders Tailored for Your Industry'
           paragraph='All businesses sell differently, and your sales system needs to realize that. Whatever you sell, Owners Inventory offers flexible, industry-ready tools to make transactions easier, more accurate, and enable your team to make sales more quickly.'
           buttonText='Explore Now'
         industries={salesIndustries} />
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
        <FaqSection 
        heading="Everything You Need to Know about Sales and Orders"
        paragraph="Sales management should not be complex. Our modern POS point of sale with a stock management system will give you everything you will need to manage billing, invoices, and orders easily. Here is what you need to know about how our sales and order management software can help businesses like yours grow faster and smarter."
        faqs={salesFaqs}
        />
      </div>
    </div>
  )
}

export default page;
