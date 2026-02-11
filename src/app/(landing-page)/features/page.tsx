"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// 🔥 Dynamic Initializing Components
const EmpoweredSection = dynamic(() => import('@/components/pages/features-page/EmpoweredSection'), { ssr: false });
const FeaturesCoreOperations = dynamic(() => import('@/components/pages/features-page/FeaturesCoreOperations'), { ssr: false });
const FeaturesssSection = dynamic(() => import('@/components/pages/features-page/FeaturesssSection'), { ssr: false });
const SmartIntegration = dynamic(() => import('@/components/pages/features-page/SmartIntegration'), { ssr: false });
const FeaturesTestimonials = dynamic(() => import('@/components/pages/features-page/FeaturesTestimonials'), { ssr: false });
const CalltoActionBottom = dynamic(() => import('@/components/pages/landing-page/CalltoActionBottom'), { ssr: false });
const FaqSection = dynamic(() => import('@/components/pages/landing-page/FAQSection'), { ssr: false });
const HeroSection = dynamic(() => import('@/components/pages/landing-page/HeroSection'), { ssr: false });
const SellerClubSection = dynamic(() => import('@/components/pages/landing-page/SellerClubSection'), { ssr: false });

import { 
  FINANCE_FEATURES, 
  MAIN_FEATURES_HERO, 
  TEAM_FEATURES, 
  UTILITIES_DATA 
} from '@/constant/featuresPageData';

const Page = () => {
  return (
    <>
      <HeroSection
        title={MAIN_FEATURES_HERO.title}
        description={MAIN_FEATURES_HERO.description}
        video={MAIN_FEATURES_HERO.video}
        showButtons={false}
      />

      <FeaturesCoreOperations />

      <EmpoweredSection
        title="Your Team, Organized & Empowered"
        description="Empower your team, build customer loyalty, and manage resources with ease."
        features={TEAM_FEATURES}
        wrapperClass="bg-[#F3F4F6] rounded-[40px] py-10 lg:py-[100px] px-5 lg:px-[60px] mx-0"
      />
      
      <div className="overflow-hidden h-full">
        <FeaturesssSection />
      </div>

      <SellerClubSection
        mediaType="video"
        mediaSrc={UTILITIES_DATA.mediaSrc}
        heading={UTILITIES_DATA.heading}
        description={UTILITIES_DATA.description}
        buttonText={UTILITIES_DATA.buttonText}
        buttonUrl={UTILITIES_DATA.buttonUrl}
      />

      <SmartIntegration />

      <EmpoweredSection
        title="Finance & Reporting Made Simple"
        description="Empower your team, build customer loyalty, and manage resources with ease."
        features={FINANCE_FEATURES}
        wrapperClass="finance-reporting-shadow mx-10"
      />
      
      <div className="lg:mt-[100px] md:mt-28 mt-20">
        <FaqSection />
      </div>
      
      <CalltoActionBottom />
    </>
  );
};

export default Page;
