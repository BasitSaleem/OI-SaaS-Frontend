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


const ecommerceIndustries = [
  {
    title: 'Retail Stores',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Extend your retail presence on the web with live inventory and pricing. Our ecommerce POS integration ensures that inventory is correct and customers are satisfied in all locations.',
    image: '/assets/industry-type/retail-store.webp',
    mobileImage: '/assets/industry-type/retail-store-mobile.webp',
  },
  {
    title: 'Restaurant',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
    description: 'Have one platform that manages dine-in, takeout, and online orders. By integrating point of sale ecommerce, menus, orders and payment remain in perfect harmony.',
    image: '/assets/industry-type/restaurant.webp',
    mobileImage: '/assets/industry-type/restaurant-mobile.webp',
  },
  {
    title: 'Wholesalers',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Automate sales in large quantities by price and inventory adjustment. POS system ecommerce integration provides standardization between warehouses and internet portals.',
    image: '/assets/industry-type/whole-sale.webp',
    mobileImage: '/assets/industry-type/whole-sale-mobile.webp',
  },
  {
    title: 'Pharmacies',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
    description: 'Easily access prescriptions, expiry notifications, and online refills. Our integrated POS and ecommerce system maintains accurate and compliance records in real time.',
    image: '/assets/industry-type/pharmacy.webp',
    mobileImage: '/assets/industry-type/pharmacy-mobile.webp',
  },
  {
    title: 'Fashion & Apparel',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Easily track styles, colors, and sizes. The ecommerce POS system harmonizes inventory between online and in-store collections to provide a seamless way of managing seasons.',
    image: '/assets/industry-type/fashion.webp',
    mobileImage: '/assets/industry-type/fashion-mobile.webp',
  },
  {
    title: 'Brands',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Keep track of specs, warranties, and inventory changes. Your product listings and orders will always be in sync with POS and ecommerce integration.',
    image: '/assets/industry-type/brands.webp',
    mobileImage: '/assets/industry-type/fashion-mobile.webp',
  },
 
];


const FeaturesCards = [
  {
    title: "Product Catalog, Filters and Variations",
    description: "Present all your products, complete collections, smart filters, and color, size, or brand variations. Create a product discovery that is fast and easy to all customers.",
    imageSrc: "/assets/features-page/people-page/features-section/user-contact-management.webp",
  },
  {
    title: "Smooth Cart. Safe Checkout",
    description: "Offer a user-friendly process to shopping with a trusted shopping cart and checkout. Accept various payment gateways, such as credit cards and mobile wallets, with secure payment gateways.",
    imageSrc: "/assets/features-page/people-page/features-section/smart-search-filter.webp",
  },
  {
    title: "Orders, Discounts and Shipping Management",
    description: "Enhance all orders in a single dashboard since placing through delivery. Issue discounts, issue invoices, and keep track of shipping with ease to maintain correctness and customer satisfaction.",
    imageSrc: "/assets/features-page/people-page/features-section/role-based-permision.webp",
  },
  {
    title: "Pages, Blog, FAQs & Company Info",
    description: "Establish brand trust through deep content- develop custom pages, blog, host FAQs, and communicate company news right on your platform.",
    imageSrc: "/assets/features-page/people-page/features-section/secure-login-password.webp",
  },
  {
    title: "Product, Category and Brand Grouping",
    description: "Arrange your catalog effectively. Sort products into groups by brand, category or style so that your customers can easily browse and your staff can easily track inventory.",
    imageSrc: "/assets/features-page/people-page/features-section/activity-logs.webp",
  },
  {
    title: "Sliders, Banners & Promotions",
    description: "Create some eye-catching banners and sliders to showcase your best products, current sales, and updated offers, all of which can be easily customized.",
    imageSrc: "/assets/features-page/people-page/features-section/bulk-imports.webp",
  },
  {
    title: "Workflow & Status Tracking",
    description: "Make all operations transparent. Monitor product status, order updates and fulfillment workflows in real time to reduce errors and delays.",
    imageSrc: "/assets/features-page/people-page/features-section/integrated-module.webp",
  },
  {
    title: "Maps, Contacts & Subscribers",
    description: "Reach out to your customers with ease. Showcase the locations of display stores on maps, manage contact forms, and expand your subscriber list using built-in email collection features.",
    imageSrc: "/assets/features-page/people-page/features-section/categorization-and-segmentation.webp",
  },
  {
    title: "Theme and Template Customization",
    description: "Customize your online store to your brand. Select a template, customize colors, layouts, and fonts, and make a store that feels and looks unique to you.",
    imageSrc: "/assets/features-page/people-page/features-section/transaction-history.webp",
  },
  
];

const  hrFaqs = [
  {
    question: "What does the Human Resource feature in Owners Inventory do?",
    answer:
      "It assists you in managing the employee data, attendance, payroll, and performance under a single easy dashboard that saves time and minimizes errors.",
  },
  {
    question: "Is this HR system suitable for small businesses?",
    answer:
      "Absolutely. Owners Inventory is designed to serve any size of team, be it a small retail store or a large company, and as your company grows, so will your inventory.",
  },
  {
    question: "Can I manage multiple branches or locations with one account?",
    answer:
      "Yes, it is possible to deal with employees in various branches or locations with a single system, and all data is stored there and is accessible.",
  },
  {
    question: "Is my employee data secure in the system?",
    answer:
      "Yes. We offer state-of-the-art encryption and secure servers to guarantee that the information belonging to your team remains absolutely safe and confidential.",
  },
  {
    question: "Does the HR feature integrate with other tools in the Owners Inventory?",
    answer:
      "Definitely. It integrates well with inventory, sales, and accounting features and provides you with a total picture of your business activities.",
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

const hrTestimonials = [
  {
    name: "Ahmed",
    title: "HR Manager at Al-Asif",
    image: "/assets/pfp.avif",
    text: `"Owners Inventory has entirely transformed our approach to staff management. All the payroll, attendance, and department tracking are under one roof. The system is quick, precise and saves us hours a week. It really seems as though we have an additional player on our team that keeps us straight."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Sana",
    title: "the Head of the operations, Bright Home.",
    image: "/assets/pfp.avif",
    text: `"We have tried a number of HR tools previously, but none were as convenient and dependable as Owners Inventory. It is well organised and our non technical staff can easily use it. We have found the best HR management software in it, efficient, clear, and tailored to the actual business needs."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Rizwan",
    title: "Director of HR",
    image: "/assets/100.jpeg",
    text: `"Owners Inventory provides us with complete control of employee information, payroll, and titles. The best thing about it is that it runs smoothly even when it has many branches. The system of human resource management is a game changer to a growing company."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Mehwish",
    title: "Business Owner",
    image: "/assets/100.jpeg",
    text: `"As our business grew, it became difficult to maintain HR activities. Owners Inventory assisted us to have it all in one platform- attendance to payslips. It is safe, adaptable, and quite frankly the best HR software 2025 to handle people and performance jointly."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
 
];

const page = () => {
  return (
    <div>
      <SubFeaturesHero
        title="Sell Everywhere, Manage from One Platform"
        description="Owners Inventory ecommerce links your online store, inventory, and POS together. Operate your business on web, mobile and social channels seamlessly with full control and real time view."
        video="https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/pos-system-hero.webm"
        variant="animation2"
      />

      {/* 🔥 Custom layout + cards */}
      <TrustedBySection 
       heading="Brands that Trust Us"
       paragraph="Trusted by brands like Al-Asif and, Owners Inventory empowers businesses to manage their online stores in real time. Our all-in-one eCommerce solution streamlines listings, payments, and customer interactions for smarter, faster selling"
      />
      <KeyHighlights
        heading="Ecommerce Engine for Modern Growth"
        features={FeaturesCards}
        layoutPatterns={layoutPatterns}
      />

      <WhyChoosePOS
        heading="Why Choose Us?"
        paragraph='Owners Inventory simplifies complex facility operations into one connected platform. We help you monitor performance, standardize processes, and achieve full operational visibility across every location.'
        cards={[
          { icon: "/assets/features-page/ecommerce-page/why-chose/unified-sale.svg", title: "Unified Sales Experience", description: "Sync online and in-store sales effortlessly with real-time POS integration." },
          { icon: "/assets/features-page/ecommerce-page/why-chose/centralized-inventory.svg", title: "Centralized Inventory Control", description: "Manage all your inventory from one dashboard with automatic multi-channel updates." },
          { icon: "/assets/features-page/ecommerce-page//why-chose/smarter-customer.svg", title: "Smarter Customer Insights", description: "Understand your customers with POS-integrated profiles, order history, and personalized offers." },
          { icon: "/assets/features-page/people-page/why-chose/scalable-for-growth.svg", title: "Scalable for Every Business", description: "Whether you’re a startup or a multi-store brand, our POS and eCommerce solution scales with you." },
        ]}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
      
        <IndustryPosShowcase
           mainHeading='Ecommerce That Adapts to Every Industry'
           paragraph='All businesses sell differently, yet they all require one integrated system. Owners Inventory provides unified ecommerce solutions that allow your store, inventory, and sales to be synchronized in all channels with seamless POS ecommerce integration.'
           buttonText='Explore Now'
           industries={ecommerceIndustries} />
      </div>

      <FeaturesCallToAction
        title="Your Store, Everywhere"
        description="Owners Inventory POS eCommerce integration turns your products into a global business. Connect with more customers, streamline your sales, and maintain contact with all channels, all in a single powerful dashboard."
        ctaDesc="Get Started Now"
      />
      <FeaturesTestimonials
  testimonials={hrTestimonials}
  heading="What Clients Say About Us?"
  showSmartTools={true}
  secondHeading="Contact Us"
  secondDescription="Contact us to find out how Owners Inventory will make your business easier and larger. Complete the form below, and our team will follow up to book a free demo and address any questions that you have. Together, let's create smarter, faster, and more connected sales."
/>

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-[100]">
        <FaqSection 
        heading="Everything You Need to Know"
        paragraph="We understand that deciding on the appropriate HR system is a huge decision; this is why we have simplified it. These are the answers to the most frequently asked questions of our Human Resource feature, so that you know exactly how it helps your business run more smoothly and intelligently."
        faqs={hrFaqs}
        />
      </div>
    </div>
  )
}

export default page;
