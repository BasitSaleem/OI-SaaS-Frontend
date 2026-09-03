'use client';
import React, { useState } from 'react';
import "../../../app/globals.css"

import PricingCards from './PricingCards';
import ComparisonTable from './ComparisonTable';
import { pricingConfig, commonCategories, BusinessType, getAggregatedCategories } from './tableConfig';
import PricingHero from './PricingHero';
import FaqSection from '../landing-page/FAQSection';
import CalltoActionBottom from '../landing-page/CalltoActionBottom';
import FeaturesTabSection from '../landing-page/FeaturesTabSection';
import AddOnsSection from './AddOnsSection';
import { PRICING_FAQS } from '@/constant/pricingFaqData';
import { getPackageLink } from '@/utils/getPackageLink';
import { Currency } from '@/utils/currency';
import Link from 'next/link';

interface PricingPageProps {
  currency?: Currency;
  // Restricts which industry/business-type tabs are selectable — e.g. the
  // /pk/pricing page currently only offers Retail. Omit to show all of them.
  allowedBusinessTabs?: BusinessType[];
  // When false, the comparison table shows only the active industry's own
  // feature set instead of the categories merged across all four industries.
  // /pk/pricing sets this false so it only ever shows Retail's data.
  aggregateComparisonCategories?: boolean;
}

const PricingPage: React.FC<PricingPageProps> = ({
  currency = 'USD',
  allowedBusinessTabs,
  aggregateComparisonCategories = true,
}) => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');
  const [activeBusinessTab, setActiveBusinessTab] = useState<BusinessType>(
    allowedBusinessTabs?.[0] ?? 'Retail'
  );

  const handleTabChange = (tab: 'monthly' | 'yearly') => {
    console.log("tab", tab);
    setActiveTab(tab);
  };

  const businessData = pricingConfig[activeBusinessTab];

  return (
    <div className="min-h-screen">



      {/* Main Content */}
      {/* Hero Section */}
      <PricingHero
        activeTab={activeTab}
        onTabChange={handleTabChange}
        activeBusinessTab={activeBusinessTab}
        onBusinessTabChange={setActiveBusinessTab}
        currency={currency}
        allowedBusinessTabs={allowedBusinessTabs}
      />

      {/* Region switch: /pricing -> /pk/pricing is manual (still useful since
          the geo-redirect only fires from /pricing); the reverse is removed —
          region detection (src/proxy.ts) handles routing PK visitors to this
          page automatically, so no "View global pricing" escape hatch here. */}
      {currency === 'USD' && (
        <div className="wrapper flex justify-center mt-6">
          <Link
            href="/pk/pricing"
            className="text-sm font-medium font-['Onest'] text-[var(--primary-purple)] hover:underline"
          >
            View PKR pricing
          </Link>
        </div>
      )}

      {/* <FeaturesTabSection /> */}
      <AddOnsSection currency={currency} />

      {/* Comparison Table */}
      <ComparisonTable
        categories={
          aggregateComparisonCategories
            ? getAggregatedCategories(activeBusinessTab)
            : businessData.categories
        }
        tab={activeTab}
        onTabChange={setActiveTab}
        plans={businessData.plans}
        industry={activeBusinessTab}
        currency={currency}
      />



      <div className="lg:pt-[100px] md:pt-40 pt-28">
        <FaqSection
          heading='Everything You Were About to Ask'
          paragraph='We’ve compiled the most common questions about Owners Inventory from setup and features to pricing and support. If you’re still unsure, our team is here to help.'
          faqs={PRICING_FAQS}
          buttonText='Start Now'
          buttonUrl={getPackageLink('signup')}
        />
      </div>

      <CalltoActionBottom
        title='Grow with a platform trusted by businesses worldwide.'
        description="Join a growing community of retailers, wholesalers, and entrepreneurs who are transforming how they manage inventory and sales while driving growth. With Owners Inventory, you're not just using another tool you're becoming part of a forward-thinking ecosystem that’s built to scale with your ambition. Let’s build smarter, together."
        showDemoButton={false}
      />

    </div>
  );
};

export default PricingPage;
