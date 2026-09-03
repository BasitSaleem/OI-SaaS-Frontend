import PricingPage from '@/components/pages/Pricings/PricingPage';
import React from 'react';

// Reuses the exact same PricingPage component/layout as /pricing — only the
// `currency` prop changes, which flips price formatting (see
// src/utils/currency.ts) all the way down through PricingHero -> PricingCards
// -> PricingCard, ComparisonTable, and AddOnsSection.
//
// No JSON-LD/schema block here on purpose: this page's canonical points at
// /pricing (see layout.tsx), so we don't want search engines indexing a
// second, competing set of Offer/FAQ structured data for the same product.
const Page: React.FC = () => {
  return (
    <div>
      <PricingPage
        currency="PKR"
        allowedBusinessTabs={["Retail"]}
        aggregateComparisonCategories={false}
      />
    </div>
  );
};

export default Page;
