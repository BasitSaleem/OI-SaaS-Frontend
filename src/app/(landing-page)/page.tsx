"use client";
import '../globals.css'
import React, { useEffect, Suspense,  } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';


// Lazy load all components
const HeroSection2 = dynamic(() => import('@/components/common-components/HeroSection2'));
const TrustedBySection = dynamic(() => import('@/components/common-components/TrustedBySection'));
const TurningChaos = dynamic(() => import('@/components/pages/landing-page/TurningChaos'));
const CaseStudies = dynamic(() => import('@/components/pages/landing-page/CaseStudy'));
const SmartWaytoSyncndSellSection = dynamic(() => import('@/components/pages/landing-page/SmartWaytoSyncndSellSection'));
const UnifiedPlatform = dynamic(() => import('@/components/pages/landing-page/UnifiedPlatform'));
const VoicesRealBusiness = dynamic(() => import('@/components/pages/landing-page/VoicesRealBusiness'));
const IndustryPosShowcase = dynamic(() => import('@/components/pages/landing-page/IndustryPosShowcase'));
const PosIconsSection = dynamic(() => import('@/components/pages/landing-page/Smartway'));
const ToolsSection = dynamic(() => import('@/components/pages/landing-page/ToolsSection'));
const SmartTools = dynamic(() => import('@/components/pages/landing-page/SmartTools'));
const InsightsSection = dynamic(() => import('@/components/pages/landing-page/InsightsSection'));
const FaqSection = dynamic(() => import('@/components/pages/landing-page/FAQSection'));
const CalltoActionBottom = dynamic(() => import('@/components/pages/landing-page/CalltoActionBottom'));
const FeaturesTabSection = dynamic(() => import('@/components/pages/landing-page/FeaturesSection'));




const caseStudiesData = [
  {
    id: "1",
    title: "Al-Asif",
    overview:
      "We helped Al-Asif optimize operations by integrating sales, inventory, and finance into a unified POS system. The solution automated billing, enabled real-time stock tracking, and enhanced profit visibility—empowering the team to make faster, data-driven decisions and operate more efficiently.",
    quote:
      "Owners Inventory completely transformed our retail operations. Real-time sync keeps all locations updated and minimizes stock errors. The dashboards give clear sales insights, and automation saves us hours every week — it's like having a full operations team in one system.",
    author: "Faique Asif",
    position: "AL-Asif CEO",
    image: "/assets/home-page-images/client-image-1.webp",
    backgroundImage: "/assets/home-page-images/isolation-mode.webp",
    ctaText: "Read Case Study",
  },
  {
    id: "2",
    title: "Retail Pro",
    overview:
      "Streamlined inventory management and improved customer experience with integrated POS solutions across multiple locations.",
    quote:
      "The real-time synchronization feature has been a game-changer for our multi-store operations. Stock errors reduced by 85% and decision-making became instantaneous.",
    author: "Sarah Johnson",
    position: "Retail Pro COO",
    image: "/assets/home-page-images/client-image-1.webp",
    backgroundImage: "/assets/home-page-images/isolation-mode.webp",
    ctaText: "Read Case Study",
  },
  {
    id: "3",
    title: "Tech Gear",
    overview:
      "Implemented automated billing and real-time analytics for better decision making and operational efficiency.",
    quote:
      "Our operational efficiency improved by 40% after implementing this solution. The automated reporting saves us countless hours every month.",
    author: "Mike Chen",
    position: "Tech Gear Founder",
    image: "/assets/home-page-images/client-image-1.webp",
    backgroundImage: "/assets/home-page-images/isolation-mode.webp",
    ctaText: "Read Case Study",
  },
  {
    id: "4",
    title: "Fashion Hub",
    overview:
      "Enhanced profit visibility and operational efficiency across all retail locations with comprehensive dashboards.",
    quote:
      "The dashboards provide incredible insights that help us make data-driven decisions instantly. Our team can now focus on strategy instead of manual data entry.",
    author: "Emma Davis",
    position: "Fashion Hub Director",
    image: "/assets/home-page-images/client-image-1.webp",
    backgroundImage: "/assets/home-page-images/isolation-mode.webp",
    ctaText: "Read Case Study",
  },
  {
    id: "5",
    title: "Global Mart",
    overview:
      "Scaled operations across international borders with unified inventory management and financial tracking.",
    quote:
      "Managing multiple currencies and locations became seamless. The system handles complexity so we can focus on growth.",
    author: "Robert Wilson",
    position: "Global Mart CEO",
    image: "/assets/home-page-images/client-image-1.webp",
    backgroundImage: "/assets/home-page-images/isolation-mode.webp",
    ctaText: "Read Case Study",
  },
];

const  homeFaqs = [
  {
    question: "How does Owners Inventory sync across multiple platforms?",
    answer:
      "Our intelligent syncing engine automatically updates stock, pricing and product information in real time across all the linked stores, online marketplaces and POS systems.",
  },
  {
    question: "Can I integrate Owners Inventory with my e-commerce store?",
    answer:
      "Yes! It is easy to sell on multiple channels with us, and we provide easy integrations with large e-commerce articles such as Shopify, WooCommerce, and others.",
  },
  {
    question: "Is Owners Inventory suitable for small businesses?",
    answer:
      "Absolutely. Our inventory for small business provides small stores up to big chain stores with flexible features and affordable plans depending on the size of your business.",
  },
  {
    question: "Does the system offer reporting and analytics?",
    answer:
      "Yes. Owner Inventory offers real-time dashboards, predictive analytics, and customizable reports to assist you in effortlessly monitoring sales, performance and inventory trends.",
  },
  {
    question: "What support options are available if I face issues?",
    answer:
      "We have a committed support staff on chat, email, and phone. We also have some excellent tutorials, video instructions and FAQs so that you can solve problems fast.",
  },
];


const homeIndustries = [
  {
    title: 'Retail Stores',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'See the whole picture with point of sale reporting systems that monitor daily sales, high-moving products, and inventory turnover - so you can maximize efficiency and profit margin.',
    image: '/assets/industry-type/retail-store.webp',
    mobileImage: '/assets/industry-type/retail-store-mobile.webp',
  },
  {
    title: 'Restaurant Types',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
    description: 'Speed up service with quick-bill POS, manage tables and menus with ease, and track ingredients or stock levels in real-time — ensuring smooth operations from kitchen to counter.',
    image: '/assets/industry-type/restaurant.webp',
    mobileImage: '/assets/industry-type/restaurant-mobile.webp',
  },
  {
    title: 'Wholesalers',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Handle bulk orders with customer-specific pricing, manage multi-location inventory, and keep fulfillment running efficiently with a system built for volume.',
    image: '/assets/industry-type/whole-sale.webp',
    mobileImage: '/assets/industry-type/whole-sale-mobile.webp',
  },
  {
    title: 'Pharmacies',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
    description: 'Ensure safety and compliance with batch tracking, expiry alerts, and detailed logs, all while managing walk-in sales and digital prescriptions effortlessly.',
    image: '/assets/industry-type/pharmacy.webp',
    mobileImage: '/assets/industry-type/pharmacy-mobile.webp',
  },
  {
    title: 'Fashion & Apparel',
    gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
    description: 'Track every size, color, and style with product variants, manage seasonal collections, and keep stock aligned across online and physical stores, whether you sell streetwear, shoes, or high fashion.',
    image: '/assets/industry-type/fashion.webp',
    mobileImage: '/assets/industry-type/fashion-mobile.webp',
  },
];

// Full page loading component
const FullPageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading Owners Inventory...</p>
    </div>
  </div>
);

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      try {
        history.scrollRestoration = "manual";
      } catch (e) {}
    }
  }, []);

  return (
    <>
      <div className="font-onset">
          <HeroSection2
            title="Take Control. Gain Clarity. Grow with Owners Inventory."
            description="Turn all assets to advantage. Our Owners Inventory services assist you in managing, examining and displaying your inventory in a single, smart, interconnected environment - created to respond to real expansion."
            video="/assets/Manual.mp4"
            variant="animation2"
          />

          <TrustedBySection
           heading="Preferred to businesses who demand precision and performance"
          />

          <TurningChaos
            title="Turning Chaos Into Clarity One Inventory at a Time."
            description="With Owners Inventory, everything you need—inventory, POS, e-commerce, customer management, and reporting—works together seamlessly in one place. Simplify your operations, reduce manual errors, and scale your business faster with a platform built to unify, automate, and grow alongside you."
          />

          <CaseStudies caseStudies={caseStudiesData} />


          <FeaturesTabSection/>

          <SmartWaytoSyncndSellSection />

          <UnifiedPlatform />

          <VoicesRealBusiness />
          
           <IndustryPosShowcase industries={homeIndustries} />

          <PosIconsSection />

          <ToolsSection />

          <SmartTools />

          <InsightsSection />

          <FaqSection  faqs={homeFaqs}/>

          <CalltoActionBottom />
      </div>
    </>
  );
}