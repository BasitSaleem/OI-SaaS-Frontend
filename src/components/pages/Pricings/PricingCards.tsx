import React, { useRef, useEffect, useState } from 'react';
import PricingCard from './PricingCard';
import { PricingPlan, FeatureRow } from './types';

interface PricingCardsProps {
  plans: PricingPlan[];
  isYearly: boolean;
  industryKeyFeatures?: FeatureRow[];
}

const PricingCards: React.FC<PricingCardsProps> = ({ plans, isYearly, industryKeyFeatures }) => {
  return (
    <div className="">
      <div className="owner-inventory-hero-section__pricing-cards mt-10 pt-4 md:mt-10 xl:mt-16 w-full max-w-[1312px] flex lg:grid lg:grid-cols-3 items-stretch overflow-x-auto lg:overflow-x-visible gap-4 xl:gap-6 no-scrollbar snap-x snap-mandatory">
        {plans.map((plan, index) => (
          <div key={plan.id} className="min-w-[280px] sm:min-w-[340px] md:min-w-[300px] lg:min-w-0 snap-center flex flex-col">
            <PricingCard
              plan={plan}
              isYearly={isYearly}
              allPlans={plans}
              planIndex={index}
              industryKeyFeatures={industryKeyFeatures}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
