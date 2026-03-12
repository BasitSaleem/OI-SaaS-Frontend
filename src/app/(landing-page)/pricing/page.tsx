import PricingPage from '@/components/pages/Pricings/PricingPage';
import { PRICING_FAQS } from '@/constant/pricingFaqData';
import React from 'react';


const Page: React.FC = () => {
  return(
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              ...[
                { industry: 'Retail', plans: [{ id: 'basic', name: 'Basic', price: '25' }, { id: 'pro', name: 'Pro', price: '75' }, { id: 'enterprise', name: 'Enterprise', price: '115' }] },
                { industry: 'Manufacturing', plans: [{ id: 'basic', name: 'Basic', price: '65' }, { id: 'pro', name: 'Pro', price: '115' }, { id: 'enterprise', name: 'Enterprise', price: '155' }] },
                { industry: 'Ecommerce', plans: [{ id: 'basic', name: 'Basic', price: '25' }, { id: 'pro', name: 'Pro', price: '50' }, { id: 'enterprise', name: 'Enterprise', price: '115' }] },
                { industry: 'Hybrid', plans: [{ id: 'pro', name: 'Pro', price: '210' }, { id: 'enterprise', name: 'Enterprise', price: '315' }] }
              ].flatMap(ind => ind.plans.map(plan => ({
                "@type": "Product",
                "@id": `https://ownersinventory.com/pricing#${ind.industry.toLowerCase()}-${plan.id}`,
                "name": `${plan.name} Plan (${ind.industry})`,
                "description": `Owners Inventory ${plan.name} plan tailored for the ${ind.industry} industry.`,
                "offers": {
                  "@type": "Offer",
                  "price": plan.price,
                  "priceCurrency": "USD",
                  "url": "https://ownersinventory.com/pricing",
                  "availability": "https://schema.org/InStock"
                },
                "publisher": {
                  "@id": "https://ownersinventory.com/#organization"
                }
              }))),
              {
                "@type": "FAQPage",
                "@id": "https://ownersinventory.com/pricing#faq",
                "mainEntity": PRICING_FAQS.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />
      <PricingPage />
     
    </div>
  );
};

export default Page;
