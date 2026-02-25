'use client';
import React, { useState } from 'react';
import "../../../app/globals.css"

import PricingCards from './PricingCards';
import ComparisonTable from './ComparisonTable';
import { PRICING_DATA, featureCategories, BusinessType } from './tableConfig';
import PricingHero from './PricingHero';
import FaqSection from '../landing-page/FAQSection';
import CalltoActionBottom from '../landing-page/CalltoActionBottom';
import FeaturesTabSection from '../landing-page/FeaturesTabSection';
import { PRICING_FAQS } from '@/constant/pricingFaqData';

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');
  const [activeBusinessTab, setActiveBusinessTab] = useState<BusinessType>('Retail');

  const handleTabChange = (tab: 'monthly' | 'yearly') => {
    console.log("tab", tab);
    setActiveTab(tab);
  };

  const businessData = PRICING_DATA[activeBusinessTab];

  return (
    <div className="min-h-screen">
     
      
      
      {/* Main Content */}
        {/* Hero Section */}
        <PricingHero
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
          activeBusinessTab={activeBusinessTab}
          onBusinessTabChange={setActiveBusinessTab}
        />


        {/* <FeaturesTabSection /> */}

        
        {/* Comparison Table */}
        <ComparisonTable 
          categories={businessData.categories && businessData.categories.length > 0 ? businessData.categories : featureCategories} 
          tab={activeTab} 
          onTabChange={setActiveTab} 
          plans={businessData.plans}
        />

        
          <div className="lg:pt-[100px] md:pt-40 pt-28">
          <FaqSection 
           heading='Everything You Were About to Ask'
           paragraph='We’ve compiled the most common questions about Owners Inventory — from setup and features to pricing and support. If you’re still unsure, our team is here to help.'
           faqs={PRICING_FAQS}
          />
          </div>

          <CalltoActionBottom 
          title='Grow with a platform trusted by businesses worldwide.'
          description="Join a growing community of retailers, wholesalers, and entrepreneurs who are transforming how they manage inventory, sales, and growth. With Owners Inventory, you're not just using another tool — you're becoming part of a forward-thinking ecosystem that’s built to scale with your ambition. Let’s build smarter, together."
          showDemoButton={false}/>
        
    </div>
  );
};

export default PricingPage;
