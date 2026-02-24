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
          <FaqSection/>
          </div>

          <CalltoActionBottom/>
        
    </div>
  );
};

export default PricingPage;
