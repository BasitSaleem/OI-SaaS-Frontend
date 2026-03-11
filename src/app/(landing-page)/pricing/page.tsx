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
              {
                "@type": "Product",
                "@id": "https://ownersinventory.com/pricing#pro",
                "name": "Pro Plan",
                "description": "Ideal for growing businesses. Includes 5 Stores, 10 POS Terminals, and more.",
                "offers": {
                  "@type": "Offer",
                  "price": "210",
                  "priceCurrency": "USD",
                  "url": "https://ownersinventory.com/pricing",
                  "availability": "https://schema.org/InStock"
                },
                "publisher": {
                  "@id": "https://ownersinventory.com/#organization"
                }
              },
              {
                "@type": "Product",
                "@id": "https://ownersinventory.com/pricing#enterprise",
                "name": "Enterprise Plan",
                "description": "For established businesses scaling up. Includes Unlimited Stores, Unlimited POS Terminals, and more.",
                "offers": {
                  "@type": "Offer",
                  "price": "315",
                  "priceCurrency": "USD",
                  "url": "https://ownersinventory.com/pricing",
                  "availability": "https://schema.org/InStock"
                },
                "publisher": {
                  "@id": "https://ownersinventory.com/#organization"
                }
              },
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
