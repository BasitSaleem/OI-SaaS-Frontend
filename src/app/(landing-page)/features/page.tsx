"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// 🔥 Dynamic Initializing Components
const EmpoweredSection = dynamic(() => import('@/components/pages/features-page/EmpoweredSection'));
const FeaturesCoreOperations = dynamic(() => import('@/components/pages/features-page/FeaturesCoreOperations'));
const FeaturesssSection = dynamic(() => import('@/components/pages/features-page/FeaturesssSection'));
const SmartIntegration = dynamic(() => import('@/components/pages/features-page/SmartIntegration'));
const FeaturesTestimonials = dynamic(() => import('@/components/pages/features-page/FeaturesTestimonials'));
const CalltoActionBottom = dynamic(() => import('@/components/pages/landing-page/CalltoActionBottom'));
const FaqSection = dynamic(() => import('@/components/pages/landing-page/FAQSection'));
const HeroSection = dynamic(() => import('@/components/pages/landing-page/HeroSection'));
const SellerClubSection = dynamic(() => import('@/components/pages/landing-page/SellerClubSection'));

import { 
  FINANCE_FEATURES, 
  FINANCE_SECTION_DATA, 
  MAIN_FEATURES_HERO, 
  TEAM_FEATURES, 
  TEAM_SECTION_DATA, 
  UTILITIES_DATA 
} from '@/constant/featuresPageData';

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "@id": "https://ownersinventory.com/#software",
                "name": "Owners Inventory",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "url": "https://ownersinventory.com/",
                "description": "Owners Inventory helps business owners track stock, manage products, monitor sales, and get real-time inventory alerts easily.",
                "publisher": {
                  "@id": "https://ownersinventory.com/#organization"
                }
              },
              {
                "@type": "Organization",
                "@id": "https://ownersinventory.com/#organization",
                "name": "Owners Inventory",
                "url": "https://ownersinventory.com/",
                "logo": "https://ownersinventory.com/assets/owner-inventory-logo.svg"
              },
              {
                "@type": "FAQPage",
                "@id": "https://ownersinventory.com/features#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What can I manage with Owners Inventory?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Owners Inventory gives you full control over your business operations from tracking stock and managing products to processing in-store sales, handling supplier purchases, monitoring customer activity, and even running a fully synced online store."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system support multi-location inventory?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, Owners Inventory supports multi-location inventory management. You can track stock across multiple stores or warehouses from a single dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I create an online store with this platform?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, Owners Inventory includes a fully integrated online store builder that syncs seamlessly with your inventory and point-of-sale system."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      <HeroSection
        title={MAIN_FEATURES_HERO.title}
        description={MAIN_FEATURES_HERO.description}
        // video={MAIN_FEATURES_HERO.video}
        image={MAIN_FEATURES_HERO.image}
        showButtons={false}
         variant = "animation2"
      />

      <FeaturesCoreOperations />

      <EmpoweredSection
        title={TEAM_SECTION_DATA.title}
        description={TEAM_SECTION_DATA.description}
        features={TEAM_FEATURES}
        wrapperClass={TEAM_SECTION_DATA.wrapperClass}
      />
      
      <div className="overflow-hidden h-full">
        <FeaturesssSection />
      </div>

      <SellerClubSection
        // mediaSrc={UTILITIES_DATA.mediaSrc}
        imageSrc={UTILITIES_DATA.imageSrc}
        heading={UTILITIES_DATA.heading}
        description={UTILITIES_DATA.description}
        buttonText={UTILITIES_DATA.buttonText}
        buttonUrl={UTILITIES_DATA.buttonUrl}
        buttonColor={UTILITIES_DATA.buttonColor}
        marginClasses='lg:mt-0 md:mt-0 mt-0'
      />

      <SmartIntegration />

      <EmpoweredSection
        title={FINANCE_SECTION_DATA.title}
        description={FINANCE_SECTION_DATA.description}
        features={FINANCE_FEATURES}
        wrapperClass={FINANCE_SECTION_DATA.wrapperClass}
      />
      
      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <FaqSection />
      </div>
      
      <CalltoActionBottom />
    </>
  );
};

export default Page;
