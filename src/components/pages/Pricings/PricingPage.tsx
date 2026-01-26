'use client';
import React, { useState } from 'react';

import PricingCards from './PricingCards';
import ComparisonTable from './ComparisonTable';
import { pricingPlans, featureCategories } from './tableConfig';
import PricingHero from './PricingHero';
import FaqSection from '../landing-page/FAQSection';
import CalltoActionBottom from '../landing-page/CalltoActionBottom';
import FeaturesTabSection from '../landing-page/FeaturesTabSection';

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');

  const handleTabChange = (tab: 'monthly' | 'yearly') => {
    console.log("tab", tab);
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen">
     
      
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <PricingHero
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
        />

        
        {/* Comparison Table */}
        <ComparisonTable categories={featureCategories} tab={activeTab} onTabChange={setActiveTab} />

        <section className="">
          <FeaturesTabSection />
          <FaqSection/>
          <CalltoActionBottom/>
        
         
        </section>
      </main>
    </div>
  );
};

export default PricingPage;
