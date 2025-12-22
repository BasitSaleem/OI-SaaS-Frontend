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
    id: 1,
    title: 'Retail Stores',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Quickly scan barcodes, offer a wide range of discount options, and real-time inventory display - ideal in electronics, grocery, cosmetics, or other fast-moving retail environments.',
    image: '/assets/industry-type/retail-store.webp',
    mobileImage: '/assets/industry-type/retail-store-mobile.webp',
  },
  {
    id: 2,
    title: 'Restaurant',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
    description: 'Speed up orders, divide bills, and coordinate kitchen activities easily. Whether dining in or delivering, handle all sales and ingredients precisely.',
    image: '/assets/industry-type/restaurant.webp',
    mobileImage: '/assets/industry-type/restaurant-mobile.webp',
  },
  {
    id: 3,
    title: 'Wholesalers',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Streamline big orders with tiered pricing, bulk billing, and automated tracking with multiple warehouses, designed to make your supply chain robust and reliable.',
    image: '/assets/industry-type/whole-sale.webp',
    mobileImage: '/assets/industry-type/whole-sale-mobile.webp',
  },
  {
    id: 4,
    title: 'Pharmacies',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
    description: 'Remain compliant and precise regarding expiry alerts, prescription monitoring, and safe batch control. Build customer trust and a trustworthy service.',
    image: '/assets/industry-type/pharmacy.webp',
    mobileImage: '/assets/industry-type/pharmacy-mobile.webp',
  },
  {
    id: 5,
    title: 'Fashion & Apparel',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Easily manage all designs, sizes, and colors. Coordinate collections by season in stores and maintain your sales on and offline.',
    image: '/assets/industry-type/fashion.webp',
    mobileImage: '/assets/industry-type/fashion-mobile.webp',
  },
];


const FeaturesCards = [
  {
    id: 1,
    title: "Manage All Sales Documents",
    description: "Our sales and order management software enables you to easily manage quotations, sales orders, and invoices in a single location. Be efficient and maintain a seamless flow between enquiry and delivery.",
    imageSrc: "/assets/features-page/sales-order/features-section/manage-all-sales-doc.webp",
  },
  {
    id: 2,
    title: "Smart Record Viewing",
    description: "See everything in a simple dashboard with search, filters, page breaks, and column visibility. Our current POS point of sale and stock management system maintains your data uncluttered and reachable.",
    imageSrc: "/assets/features-page/sales-order/features-section/smart-record-view.webp",
  },
  {
    id: 3,
    title: "Manage Sales Docs",
    description: "Add or delete quotes, orders, and invoices with ease. This is to enable businesses to maintain accuracy and control in their sales management software environment.",
    imageSrc: "/assets/features-page/sales-order/features-section/manage-sales-doc.webp",
  },
  {
    id: 4,
    title: "Export Data to Excel",
    description: "Export your data to analyze, report, or account. The best sales and order management system is easy and flexible to simplify record-keeping and financial tracking.",
    imageSrc: "/assets/features-page/sales-order/features-section/export-data.webp",
  },
  {
    id: 5,
    title: "Order Stages",
    description: "Keep track of each order by using a visual board that has distinct statuses - To Do, In Progress, and Done. Ideal to control workflow in your sales and order management system.",
    imageSrc: "/assets/features-page/sales-order/features-section/order-stage.webp",
  },
  {
    id: 6,
    title: "Quick Action Buttons",
    description: "Swiftly transfer orders between stages with smart action buttons. These controls improve productivity and optimize the flow of orders within your sales management software.",
    imageSrc: "/assets/features-page/sales-order/features-section/quick-action-button.webp",
  },
  {
    id: 7,
    title: "Detailed Order View",
    description: "In every order, essential details such as Order ID, User, Customer, Date, and Status are shown. We have a sales and order management software that provides transparency and real-time following of all transactions.",
    imageSrc: "/assets/features-page/sales-order/features-section/detailed-order-view.webp",
  },
  {
    id: 8,
    title: "Search and Filter Options",
    description: "Filter and easily search orders by customer, date, amount and status. This smart filtering assists your team to make faster and data-driven choices in a contemporary POS point of sale with inventory management framework.",
    imageSrc: "/assets/features-page/sales-order/features-section/filter-option.webp",
  },
  {
    id: 9,
    title: "User-Friendly Interface",
    description: "Experience a clear, interactive, and intuitive design that makes working with documents easier and improves work visibility. It simplified and streamlined its invoice management and billing services..",
    imageSrc: "/assets/features-page/sales-order/features-section/user-friendly-interface.webp",
  },
];

const  salesFaqs = [
  {
    id: 1,
    question: "What is sales and order management, and why is it important?",
    answer:
      "Sales and order management is the process of monitoring all sales made on the orders placed from delivery. An effective system guarantees precision, minimizes delays, and aids in customer satisfaction.",
  },
  {
    id: 2,
    question: "How does your sales and order management software improve daily operations?",
    answer:
      "Our software brings together your whole workflow, from sales entry to stock updates. It makes it easier to take orders, handle customers, and make real-time business decisions.",
  },
  {
    id: 3,
    question: "Is this a modern POS point of sale with a stock management system?",
    answer:
      "Yes. Owners Inventory is a combination of powerful POS and full inventory control capabilities, which provides you with one platform to bill, track sales, and manage products.",
  },
  {
    id: 4,
    question: "How does your sales management software handle billing and invoices?",
    answer:
      "It automates the whole process, creates invoices immediately, documents payments, and tracks all transactions by using built-in billing and invoice management services.",
  },
  {
    id: 5,
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
    text: `We have been using Owners Inventory for more than a year and it has really changed the way we do business. Orders, returns and stock levels are so much easier to track now. The system provides us with total control of our inventory operations process and makes everything transparent. Moreover, their support team is never too slow to render assistance whenever we get stuck. It has been a wonderful experience since the beginning.`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Faisal Rehman",
    title: "Prime Traders",
    image: "/assets/pfp.avif",
    text: `As a wholesaler, it was difficult to monitor big orders and various warehouses. Owners Inventory sorted that out with its automation and intelligent inventory operations software. It has made our work much more organized.`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Hina Ahmed",
    title: "StyleMart",
    image: "/assets/100.jpeg",
    text: `Our retail store is more efficiently managed now. We are able to view real-time stock levels, issue invoices on-the-fly and learn about customer requirements. The system actually assists us to keep on top of each sale.`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Adeel Khan",
    title: "Al-Asif",
    image: "/assets/100.jpeg",
    text: `Owners Inventory has totally transformed the manner of sale and stockings. We had to deal with incomplete records and handwritten updates before we used it. Everything is now synchronized and can be seen in real time. The single dashboard identifies each and every sale and order without any beat. It is easy, trustworthy and has genuinely eased our overall workflow.`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
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
        {/* <IndustryPOSShowcase
        heading="Sales and Orders Tailored for Your Industry"
        description="All businesses sell differently, and your sales system needs to realize that. Whatever you sell, Owners Inventory offers flexible, industry-ready tools to make transactions easier, more accurate, and enable your team to make sales more quickly."
         industries={posIndustries} /> */}
         <IndustryPosShowcase 
          mainHeading='Sales and Orders Tailored for Your Industry'
           paragraph='All businesses sell differently, and your sales system needs to realize that. Whatever you sell, Owners Inventory offers flexible, industry-ready tools to make transactions easier, more accurate, and enable your team to make sales more quickly.'
           buttonText='Explore All Industries'
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
