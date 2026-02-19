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
      <HeroSection
        title={MAIN_FEATURES_HERO.title}
        description={MAIN_FEATURES_HERO.description}
        video={MAIN_FEATURES_HERO.video}
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
        mediaSrc={UTILITIES_DATA.mediaSrc}
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
