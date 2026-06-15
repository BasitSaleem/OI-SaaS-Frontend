import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/candy-store-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/candy-store-pos/why-chose-banner.webp";

import {
  CANDY_STORE_KEY_FEATURES_CARDS,
  CANDY_STORE_WHY_CHOOSE_CARDS,
  CANDY_STORE_FEATURE_CARDS
} from "@/constant/subindustries/candyStorePosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  CANDY_STORE_UNIFIED_CARDS,
  CANDY_STORE_UNIFIED_HEADING,
  CANDY_STORE_UNIFIED_PARAGRAPH,
  CANDY_STORE_WORKFLOW_DATA,
  CANDY_STORE_TESTIMONIALS,
  CANDY_STORE_FAQS,
  CANDY_STORE_TESTIMONIAL_DATA,
  CANDY_STORE_TESTIMONIAL_FEATURES,
  CANDY_STORE_TOOLS_DATA,
} from "@/constant/subindustries/candyStorePosData";
import InventoryWorkflow from "@/components/pages/industries-page/InventoryWorkflowNoSSR";
import IndustriesTestimonial from "@/components/pages/industries-page/IndustriesTestimonial";
import IndustriesFeaturesSection from "@/components/pages/industries-page/IndustriesFeaturesSection";
import ToolsSection from "@/components/pages/landing-page/ToolsSection";
import VoicesRealBusiness from "@/components/pages/landing-page/VoicesRealBusiness";
import SecurityCompliance from "@/components/pages/industries-page/securityCompliance";
import IndustriesHardwareControl from "@/components/pages/industries-page/IndustriesHardwareControl";

const Page = () => {
  return (
    <>
      <Script
        id="schema-candy-store"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "name": "Owners Inventory",
                "url": "https://ownersinventory.com",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "description": "Free trial available"
                },
                "description": "Candy store POS system that handles fast billing, weight-based and unit-based selling, real-time inventory tracking, bulk and pick-and-mix sales, supplier management, multiple payment methods, and seasonal promotions from one connected dashboard.",
                "featureList": [
                  "Fast checkout with weight-based and unit-based pricing",
                  "Pick-and-mix and bulk candy sales support",
                  "Real-time inventory tracking",
                  "Expiry and batch tracking for confectionery",
                  "Supplier and purchase order management",
                  "Multiple payment options including cards and contactless",
                  "Customer loyalty and rewards programs",
                  "Seasonal promotions and discount management",
                  "Multi-location management from one dashboard",
                  "Sales and stock reports",
                  "Role-based access for staff"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Candy Store POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/candy-store-pos-system",
                "description": "Run your candy store with fast billing, weight and unit-based selling, real-time inventory tracking, and easy promotions using Owners Inventory's candy store POS system.",
                "inLanguage": "en",
                "isPartOf": {
                  "@type": "WebSite",
                  "name": "Owners Inventory",
                  "url": "https://ownersinventory.com"
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://ownersinventory.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Industries",
                      "item": "https://ownersinventory.com/industries"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Candy Store POS System",
                      "item": "https://ownersinventory.com/industries/candy-store-pos-system"
                    }
                  ]
                }
              },
              {
                "@type": "Organization",
                "name": "Owners Inventory",
                "url": "https://ownersinventory.com",
                "logo": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Support",
                  "availableLanguage": "English",
                  "url": "https://ownersinventory.com/contact"
                },
                "sameAs": [
                  "https://www.facebook.com/ownersinventory/",
                  "https://www.instagram.com/ownersinventory/",
                  "https://www.linkedin.com/company/owners-inventory/"
                ]
              },
              {
                "@type": "Product",
                "name": "Candy Store POS System",
                "description": "POS software designed for candy and confectionery stores to handle fast billing, weight-based and unit-based selling, pick-and-mix sales, real-time inventory tracking, supplier management, multi-payment processing, and seasonal promotions from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/candy-store-pos-system",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "description": "Free trial available. Book a demo to get started."
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can the POS handle weight-based and pick-and-mix sales?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system supports weight-based pricing, unit pricing, and pick-and-mix sales, so you can sell candy loose, by the bag, or as packaged items."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it track inventory in real time?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Stock updates automatically after every sale, giving you accurate inventory levels and low-stock alerts to keep popular items in stock."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I run seasonal promotions and discounts?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can create seasonal offers, bundles, and discounts directly in the system, which are applied automatically during billing."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it support multiple payment methods?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system accepts cash, cards, and contactless payments for quick, secure checkout."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for staff to learn?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The interface is simple and intuitive, so staff can manage checkout and inventory with minimal training."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Candy Store POS System: Sell More, Waste Less, and Track Better"
          description="Candy stores lose revenue to expired stock, empty shelves before peak season, and slow checkout lines. Owners Inventory gives candy stores a POS system that tracks inventory in real time, boosts sales through smarter restocking, and keeps every candy shop transaction accurate. It ensures that your customers get their favorite items with accurate order processing."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={CANDY_STORE_UNIFIED_HEADING}
          paragraph={CANDY_STORE_UNIFIED_PARAGRAPH}
          cards={CANDY_STORE_UNIFIED_CARDS}
          iconSet="candyStore"
        />

        <WhyChoosePOS
          heading= "How Our POS System for Candy Stores Solves These Challenges"
          paragraph= "Owners Inventory works as the best POS system for candy stores. It streamlines store operations, manages inventory accurately, and runs your business from a single platform without requiring separate third-party integration tools."
          cards={CANDY_STORE_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="candyStore"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory POS"
          features={CANDY_STORE_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={CANDY_STORE_WORKFLOW_DATA.heading}
          paragraph={CANDY_STORE_WORKFLOW_DATA.paragraph}
          steps={CANDY_STORE_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title= "Break Free from Candy Inventory Guesswork"
          description="Candy stores that track inventory, process checkouts faster, and give customer loyalty rewards consistently build the kind of candy store business that keeps customers coming back season after season. Owners Inventory gives you the tools to make that happen from day one."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={CANDY_STORE_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security and Access Control."
          description="Our POS maintains complete security of the store's private data. With role-based access, staff get limited access to information that is only relevant to their assigned job. Each transaction is processed with secure payment gateways that keep the financial data of customers protected."
        />

        <ToolsSection
          heading={CANDY_STORE_TOOLS_DATA.heading}
          description={CANDY_STORE_TOOLS_DATA.paragraph}
          tools={CANDY_STORE_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={CANDY_STORE_TESTIMONIALS}
          heading={CANDY_STORE_TESTIMONIAL_DATA.heading}
          paragraph={CANDY_STORE_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={CANDY_STORE_TESTIMONIAL_DATA.secondHeading}
          secondDescription={CANDY_STORE_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={CANDY_STORE_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={CANDY_STORE_TESTIMONIAL_DATA.whyChooseDescription}
          features={CANDY_STORE_TESTIMONIAL_FEATURES}
          iconSet="candyStore"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="The following are some of the frequently asked questions about our candy store POS system."
            faqs={CANDY_STORE_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="The Sweetest Move You Will Make for Your Business"
          description="Stop running your candy store on outdated tools, and start building the kind of store that brings customers back every single time they want sweet treats done right."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
