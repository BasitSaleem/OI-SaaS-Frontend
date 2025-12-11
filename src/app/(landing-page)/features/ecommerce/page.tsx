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

const ecommerceIndustries = [
  {
    id: 1,
    title: "Retail Stores",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Extend your retail presence on the web with live inventory and pricing. Our ecommerce POS integration ensures that inventory is correct and customers are satisfied in all locations.",
    image: "/assets/industry-type/retail-store.webp",
    mobileImage: "/assets/industry-type/retail-store-mobile.webp",
  },
  {
    id: 2,
    title: "Restaurant",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Have one platform that manages dine-in, takeout, and online orders. By integrating point of sale ecommerce, menus, orders and payment remain in perfect harmony.",
    image: "/assets/industry-type/restaurant.webp",
    mobileImage: "/assets/industry-type/restaurant-mobile.webp",
  },
  {
    id: 3,
    title: "Wholesalers",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Automate sales in large quantities by price and inventory adjustment. POS system ecommerce integration provides standardization between warehouses and internet portals.",
    image: "/assets/industry-type/whole-sale.webp",
    mobileImage: "/assets/industry-type/whole-sale-mobile.webp",
  },
  {
    id: 4,
    title: "Pharmacies",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)",
    description:
      "Easily access prescriptions, expiry notifications, and online refills. Our integrated POS and ecommerce system maintains accurate and compliance records in real time.",
    image: "/assets/industry-type/pharmacy.webp",
    mobileImage: "/assets/industry-type/pharmacy-mobile.webp",
  },
  {
    id: 5,
    title: "Fashion & Apparel",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Easily track styles, colors, and sizes. The ecommerce POS system harmonizes inventory between online and in-store collections to provide a seamless way of managing seasons.",
    image: "/assets/industry-type/fashion.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp",
  },
  {
    id: 6,
    title: "Brands",
    gradient: "linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)",
    description:
      "Keep track of specs, warranties, and inventory changes. Your product listings and orders will always be in sync with POS and ecommerce integration.",
    image: "/assets/industry-type/brands.webp",
    mobileImage: "/assets/industry-type/fashion-mobile.webp",
  },
];

const FeaturesCards = [
  {
    id: 1,
    title: "Product Catalog, Filters and Variations",
    description:
      "Present all your products, complete collections, smart filters, and color, size, or brand variations. Create a product discovery that is fast and easy to all customers.",
    imageSrc:
      "/assets/features-page/ecommerce-page/features-section/product-catalog.webp",
  },
  {
    id: 2,
    title: "Smooth Cart. Safe Checkout",
    description:
      "Offer a user-friendly process to shopping with a trusted shopping cart and checkout. Accept various payment gateways, such as credit cards and mobile wallets, with secure payment gateways.",
    imageSrc:
      "/assets/features-page/ecommerce-page/features-section/safe-checkout.webp",
  },
  {
    id: 3,
    title: "Orders, Discounts and Shipping Management",
    description:
      "Enhance all orders in a single dashboard since placing through delivery. Issue discounts, issue invoices, and keep track of shipping with ease to maintain correctness and customer satisfaction.",
    imageSrc:
      "/assets/features-page/ecommerce-page/features-section/shiping-management.webp",
  },
  {
    id: 4,
    title: "Pages, Blog, FAQs & Company Info",
    description:
      "Establish brand trust through deep content- develop custom pages, blog, host FAQs, and communicate company news right on your platform.",
    imageSrc:
      "/assets/features-page/ecommerce-page/features-section/company-info.webp",
  },
  {
    id: 5,
    title: "Product, Category and Brand Grouping",
    description:
      "Arrange your catalog effectively. Sort products into groups by brand, category or style so that your customers can easily browse and your staff can easily track inventory.",
    imageSrc:
      "/assets/features-page/ecommerce-page/features-section/brand-grouping.webp",
  },
  {
    id: 6,
    title: "Sliders, Banners & Promotions",
    description:
      "Create some eye-catching banners and sliders to showcase your best products, current sales, and updated offers, all of which can be easily customized.",
    imageSrc:
      "/assets/features-page/ecommerce-page/features-section/sliders-production.webp",
  },
  {
    id: 7,
    title: "Workflow & Status Tracking",
    description:
      "Make all operations transparent. Monitor product status, order updates and fulfillment workflows in real time to reduce errors and delays.",
    imageSrc:
      "/assets/features-page/people-page/features-section/integrated-module.webp",
  },
  {
    id: 8,
    title: "Maps, Contacts & Subscribers",
    description:
      "Reach out to your customers with ease. Showcase the locations of display stores on maps, manage contact forms, and expand your subscriber list using built-in email collection features.",
    imageSrc:
      "/assets/features-page/people-page/features-section/categorization-and-segmentation.webp",
  },
  {
    id: 9,
    title: "Theme and Template Customization",
    description:
      "Customize your online store to your brand. Select a template, customize colors, layouts, and fonts, and make a store that feels and looks unique to you.",
    imageSrc:
      "/assets/features-page/people-page/features-section/transaction-history.webp",
  },
];

const ecommerceFaqs = [
  {
    id: 1,
    question:
      "What is the Owners Inventory eCommerce system and how does it work?",
    answer:
      "With our Ecommerce POS, you can operate your whole online business with a single dashboard, products, inventory, payments, and customer data, and all in real-time. It integrates with your POS and ecommerce integration easily, to sell easily both online and in-store.",
  },
  {
    id: 2,
    question: "Can I integrate my POS with the eCommerce store?",
    answer:
      "Yes. Our POS ecommerce system maintains sales, stocks and customer records updated at all locations. You can sell in-store, on-line or across a variety of different marketplaces and our point of sale ecommerce integration keeps your stock levels and order management accurate.",
  },
  {
    id: 3,
    question:
      "Does the eCommerce feature support multiple payment and shipping options?",
    answer:
      "Absolutely. With our built-in ecommerce solutions, you can provide a wide range of payment options such as credit cards and electronic wallets, as well as split payments, and also integrate with various shipping companies that can deliver your orders promptly and accurately.",
  },
  {
    id: 4,
    question: "Can I customize my online store through the system?",
    answer:
      "Yes, pos system ecommerce integration is fully customized. You are able to create product pages, create pricing rules, handle promotions, and analytics all in one, integrated platform that fits your brand identity and business objectives.",
  },
  {
    id: 5,
    question: "How secure is the Owners Inventory eCommerce platform?",
    answer:
      "Our ecommerce POS integration provides security at all levels. Your transactions, customer information and inventory are fully secure with our high-level encryption, safeguarded backup, and fraud protection services.",
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

const ecommerceTestimonials = [
  {
    name: "Ahmed",
    title: "HR Manager at Al-Asif",
    image: "/assets/pfp.avif",
    text: `"Owners Inventory has simplified running our business significantly. Our online and store inventory used to be very hard to maintain, but now it is automatically maintained. The dashboard is easy and user-friendly and we can monitor the sales real-time without any fuss. It is as though the entire business operates itself."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Sana",
    title: "the Head of the operations, Bright Home.",
    image: "/assets/pfp.avif",
    text: `"Our sales process has been expedited and made more trustworthy since we use Owners Inventory. Orders, payments, and reports are updated in real-time, which saves our team much work. Our data is now accurate through all channels and customers are pleased with the fact that their shopping experience has become so easy."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Rizwan",
    title: "Director of HR",
    image: "/assets/100.jpeg",
    text: `"Owners Inventory totally transformed our store operation. We save hours daily by handling our online and in-store sales on a single dashboard. It is easy, smooth and even enjoyable to use."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Mehwish",
    title: "Business Owner",
    image: "/assets/100.jpeg",
    text: `"Our non-technical personnel learned it within a short time. The system is quick, easy to navigate and customer care is readily available. We could not have a better solution."`,
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
        paragraph="Owners Inventory simplifies complex facility operations into one connected platform. We help you monitor performance, standardize processes, and achieve full operational visibility across every location."
        cards={[
          {
            icon: "/assets/features-page/ecommerce-page/why-chose/unified-sale.svg",
            title: "Unified Sales Experience",
            description:
              "Sync online and in-store sales effortlessly with real-time POS integration.",
          },
          {
            icon: "/assets/features-page/ecommerce-page/why-chose/centralized-inventory.svg",
            title: "Centralized Inventory Control",
            description:
              "Manage all your inventory from one dashboard with automatic multi-channel updates.",
          },
          {
            icon: "/assets/features-page/ecommerce-page/why-chose/smarter-customer.svg",
            title: "Smarter Customer Insights",
            description:
              "Understand your customers with POS-integrated profiles, order history, and personalized offers.",
          },
          {
            icon: "/assets/features-page/people-page/why-chose/scalable-for-growth.svg",
            title: "Scalable for Every Business",
            description:
              "Whether you’re a startup or a multi-store brand, our POS and eCommerce solution scales with you.",
          },
        ]}
        mainImage="/assets/features-page/point-of-sale/why-chose/why-chose-main.webp"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <IndustryPosShowcase
          mainHeading="Ecommerce That Adapts to Every Industry"
          paragraph="All businesses sell differently, yet they all require one integrated system. Owners Inventory provides unified ecommerce solutions that allow your store, inventory, and sales to be synchronized in all channels with seamless POS ecommerce integration."
          buttonText="Explore All Industries"
          industries={ecommerceIndustries}
        />
      </div>

      <FeaturesCallToAction
        title="Your Store, Everywhere"
        description="Owners Inventory POS eCommerce integration turns your products into a global business. Connect with more customers, streamline your sales, and maintain contact with all channels, all in a single powerful dashboard."
        ctaDesc="Get Started Now"
      />
      <FeaturesTestimonials
        testimonials={ecommerceTestimonials}
        heading="What Clients Say About Us?"
        showSmartTools={true}
        secondHeading="Contact Us"
        secondDescription="Contact us to find out how Owners Inventory will make your business easier and larger. Complete the form below, and our team will follow up to book a free demo and address any questions that you have. Together, let's create smarter, faster, and more connected sales."
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="Everything You Need to Know"
          paragraph="We’ve gathered the most common questions about our ecommerce POS system and POS ecommerce integration to help you understand how Owners Inventory transforms online business management."
          faqs={ecommerceFaqs}
        />
      </div>
    </div>
  );
};

export default page;
