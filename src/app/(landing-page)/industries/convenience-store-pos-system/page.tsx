import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/convenience-store-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/convenience-store-pos/why-chose-banner.webp";

import {
  CONVENIENCE_STORE_KEY_FEATURES_CARDS,
  CONVENIENCE_STORE_WHY_CHOOSE_CARDS,
  CONVENIENCE_STORE_FEATURE_CARDS
} from "@/constant/subindustries/convenienceStorePosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  CONVENIENCE_STORE_UNIFIED_CARDS,
  CONVENIENCE_STORE_UNIFIED_HEADING,
  CONVENIENCE_STORE_UNIFIED_PARAGRAPH,
  CONVENIENCE_STORE_WORKFLOW_DATA,
  CONVENIENCE_STORE_TESTIMONIALS,
  CONVENIENCE_STORE_FAQS,
  CONVENIENCE_STORE_TESTIMONIAL_DATA,
  CONVENIENCE_STORE_TESTIMONIAL_FEATURES,
  CONVENIENCE_STORE_TOOLS_DATA,
} from "@/constant/subindustries/convenienceStorePosData";
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
        id="schema-convenience-store"
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
                "description": "Convenience store POS system that handles fast barcode billing, real-time inventory updates, multi-unit selling, expiry tracking, supplier management, multiple payment methods, and centralized control across single or multiple store locations.",
                "featureList": [
                  "Fast barcode billing for quick checkout",
                  "Real-time inventory updates after every sale",
                  "Expiry and batch tracking for perishables",
                  "Multi-unit and pack selling support",
                  "Supplier and purchase order management",
                  "Multiple payment options including cards and contactless",
                  "Customer loyalty and credit management",
                  "Multi-branch connectivity from one dashboard",
                  "Low-stock alerts and reordering",
                  "Sales and profit reports",
                  "Role-based access for staff"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Convenience Store POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/convenience-store-pos-system",
                "description": "Run your convenience store with fast barcode billing, real-time stock tracking, multi-payment support, and centralized multi-branch control using Owners Inventory's convenience store POS system.",
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
                      "name": "Convenience Store POS System",
                      "item": "https://ownersinventory.com/industries/convenience-store-pos-system"
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
                "name": "Convenience Store POS System",
                "description": "POS software designed for convenience stores to handle fast barcode billing, real-time inventory tracking, expiry and batch management, multi-unit selling, supplier management, multi-payment processing, and multi-branch operations from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/convenience-store-pos-system",
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
                    "name": "What is a POS system for a convenience store?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A convenience store POS system manages billing, inventory, and customers in one place. It supports fast barcode checkout and keeps stock accurate across single or multiple locations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it track product expiry dates?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system tracks batch numbers and expiry dates and sends alerts for items nearing expiry, helping reduce waste on perishable goods."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can it handle multiple payment methods?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system accepts cash, cards, and contactless payments within seconds for smooth, error-free checkout."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage more than one store location?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can manage multiple convenience store branches from one centralized dashboard with synced inventory, pricing, and reports."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for staff to learn?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The interface is simple and fast, so staff can handle billing and inventory with minimal training."
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
          title="Smart Convenience Store POS System for Stock Control"
          description="Managing a convenience store means handling hundreds of transactions every day while keeping stock on shelves, staff accountable, and cash balanced at every shift change. Owners Inventory gives you a POS system built around how a c-store actually runs. Billing, real-time inventory tracking, shift-level reporting, and staff access control all sit in a single dashboard, so nothing gets missed and nothing goes unrecorded."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={CONVENIENCE_STORE_UNIFIED_HEADING}
          paragraph={CONVENIENCE_STORE_UNIFIED_PARAGRAPH}
          cards={CONVENIENCE_STORE_UNIFIED_CARDS}
          iconSet="convenienceStore"
        />

        <WhyChoosePOS
          heading="How Owners Inventory Solves These Challenges"
          paragraph="Our convenience store POS connects billing, inventory count, staff access, and reporting into one system, so these problems stop repeating."
          cards={CONVENIENCE_STORE_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="convenienceStore"
        />

        <KeyHighlights
          heading="Our Key Features"
          features={CONVENIENCE_STORE_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={CONVENIENCE_STORE_WORKFLOW_DATA.heading}
          paragraph={CONVENIENCE_STORE_WORKFLOW_DATA.paragraph}
          steps={CONVENIENCE_STORE_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Manage Your Convenience Store Today"
          description="Owners working with Owners Inventory report better control over cash, fewer times running out of stock, and faster checkouts throughout every shift. Get started for free and see the difference it makes within your first week."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={CONVENIENCE_STORE_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance."
          description="The security of a POS system is a key factor when choosing one for a small retail store. Our POS system records every transaction under a specific employee ID with the exact timestamp. Role-based access control prevents a cashier from opening the cash drawer outside of an actual transaction. Any drawer opening without a transaction is automatically flagged in the system so it can be reviewed immediately. Our system automatically maintains a full audit record across every shift without any extra effort from your team."
          secondDescription="Payment data is protected through end-to-end encryption and secure data handling, with built-in security standards that keep card transactions safe and compliant. No customer or transaction data is ever shared with third parties, and all records are stored securely in compliance with relevant data protection standards. Your data is automatically backed up to the cloud so your records can be preserved, even if your hardware breaks down. For age-restricted products like tobacco and alcohol, every sale is recorded separately, giving you a clean and organized compliance report that is ready whenever an official check or audit is required."
        />

        <ToolsSection
          heading={CONVENIENCE_STORE_TOOLS_DATA.heading}
          description={CONVENIENCE_STORE_TOOLS_DATA.paragraph}
          tools={CONVENIENCE_STORE_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={CONVENIENCE_STORE_TESTIMONIALS}
          heading={CONVENIENCE_STORE_TESTIMONIAL_DATA.heading}
          paragraph={CONVENIENCE_STORE_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={CONVENIENCE_STORE_TESTIMONIAL_DATA.secondHeading}
          secondDescription={CONVENIENCE_STORE_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={CONVENIENCE_STORE_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={CONVENIENCE_STORE_TESTIMONIAL_DATA.whyChooseDescription}
          features={CONVENIENCE_STORE_TESTIMONIAL_FEATURES}
          iconSet="convenienceStore"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="Have questions about Owners Inventory?"
            secondParagraph="Here are answers to some of the most common questions from convenience store owners to help you understand how our POS system works and what it can do for your store."
            faqs={CONVENIENCE_STORE_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Boost Your Store Today"
          description="Convenience store owners using Owners Inventory report fewer stockouts, tighter cash control, and faster checkout across every shift. Start today and put the whole operation in one place."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
