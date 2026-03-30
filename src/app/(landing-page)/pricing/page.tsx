import PricingPage from '@/components/pages/Pricings/PricingPage';
import { PRICING_FAQS } from '@/constant/pricingFaqData';
import React from 'react';


const Page: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://ownersinventory.com/#software",
        "name": "Owners Inventory",
        "url": "https://ownersinventory.com/",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Owners Inventory is a cloud-based POS and inventory management software designed for retail, ecommerce, and multi-location businesses.",
        "offers": [
          {
            "@type": "Offer",
            "name": "Basic Plan - Monthly",
            "url": "https://ownersinventory.com/pricing#basic",
            "price": "25",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Pro Plan - Monthly",
            "url": "https://ownersinventory.com/pricing#pro",
            "price": "75",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Enterprise Plan - Monthly",
            "url": "https://ownersinventory.com/pricing#enterprise",
            "price": "115",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Basic Plan - Yearly",
            "url": "https://ownersinventory.com/pricing#basic",
            "price": "20",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Pro Plan - Yearly",
            "url": "https://ownersinventory.com/pricing#pro",
            "price": "60",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Enterprise Plan - Yearly",
            "url": "https://ownersinventory.com/pricing#enterprise",
            "price": "92",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://ownersinventory.com/pricing#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is there a free plan available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Owners Inventory offers a free plan so you can explore core features before upgrading."
            }
          },
          {
            "@type": "Question",
            "name": "Can I upgrade or downgrade my plan anytime?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You can upgrade or downgrade your subscription at any time based on your business needs."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a contract or long-term commitment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Owners Inventory works on a flexible subscription model and you can cancel anytime."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer a free trial for paid plans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You can start with a free trial to explore premium features before upgrading."
            }
          },
          {
            "@type": "Question",
            "name": "Are there any hidden charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. All pricing is transparent with no hidden fees."
            }
          },
          {
            "@type": "Question",
            "name": "Are integrations included in all plans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Basic integrations may be included while advanced integrations are available in higher plans."
            }
          },
          {
            "@type": "Question",
            "name": "Can I customize a plan for my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Custom plans are available for enterprise and multi-location businesses."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I cancel my subscription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can cancel anytime and your access continues until the end of your billing period."
            }
          },
          {
            "@type": "Question",
            "name": "Does Owners Inventory support multiple locations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You can manage multiple stores and warehouses from one dashboard depending on your plan."
            }
          },
          {
            "@type": "Question",
            "name": "Is onboarding support included?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All plans include onboarding assistance to help you get started."
            }
          },
          {
            "@type": "Question",
            "name": "Is the software cloud-based?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Owners Inventory is a cloud-based software accessible from anywhere."
            }
          }
        ]
      }
    ]
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingPage />
    </div>
  );
};

export default Page;
