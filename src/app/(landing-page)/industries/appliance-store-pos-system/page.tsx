import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/appliance-store-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/appliance-store-pos/why-chose-banner.webp";

import {
  APPLIANCE_STORE_KEY_FEATURES_CARDS,
  APPLIANCE_STORE_WHY_CHOOSE_CARDS,
  APPLIANCE_STORE_FEATURE_CARDS
} from "@/constant/subindustries/applianceStorePosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  APPLIANCE_STORE_UNIFIED_CARDS,
  APPLIANCE_STORE_UNIFIED_HEADING,
  APPLIANCE_STORE_UNIFIED_PARAGRAPH,
  APPLIANCE_STORE_WORKFLOW_DATA,
  APPLIANCE_STORE_TESTIMONIALS,
  APPLIANCE_STORE_FAQS,
  APPLIANCE_STORE_TESTIMONIAL_DATA,
  APPLIANCE_STORE_TESTIMONIAL_FEATURES,
  APPLIANCE_STORE_TOOLS_DATA,
} from "@/constant/subindustries/applianceStorePosData";
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
        id="schema-appliance-store"
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
                "description": "Appliance store POS system that tracks model inventory, serial numbers, and warranties, manages customer deliveries and installation dispatching, syncs stock across showrooms and warehouses, and provides detailed sales commission reports.",
                "featureList": [
                  "Model and serial number tracking for high-value appliances",
                  "Integrated home delivery and installation scheduling",
                  "Real-time stock lookup across showrooms and warehouses",
                  "Flexible payment options, deposits, and layaways",
                  "Automated sales commission logs and rep tracking",
                  "Manufacturer warranty validation and returns tracking",
                  "Supplier purchase order and brand management",
                  "E-commerce sync for online orders",
                  "Customer profile history and address records",
                  "Detailed gross margin and profitability reporting"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Appliance Store POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/appliance-store-pos-system",
                "description": "Manage showrooms and warehouses with real-time model inventory, serial number warranty tracking, home delivery scheduling, and sales commissions using Owners Inventory's appliance store POS system.",
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
                      "name": "Appliance Store POS System",
                      "item": "https://ownersinventory.com/industries/appliance-store-pos-system"
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
                "name": "Appliance Store POS System",
                "description": "POS software designed for appliance retailers to manage product models by serial numbers, schedule home deliveries, record warranty details, track sales commissions, and sync showroom floors with backend warehouses.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/appliance-store-pos-system",
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
                    "name": "Can the system track serial numbers for manufacturer warranties?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can capture and track serial numbers during stock entry and tie them directly to sales invoices. This makes verifying warranty coverage and managing returns simple."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the POS support delivery and installation scheduling?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can input customer shipping details, schedule deliveries, and track installer notes directly through the invoice generation interface."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I look up stock levels at other showrooms or warehouses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The POS operates on a multi-location architecture, giving your staff instant visibility into stock levels across all showrooms and warehouses."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can we handle deposits and customer layaways?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can configure partial payments, collect deposits, reserve the appliance, and allow customers to pay the remaining balance upon delivery or installment schedules."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system automatically calculate sales commissions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can associate sales reps with invoices and track commissions based on product margins or flat rates, which simplifies payroll calculations."
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
          title="Appliance Store POS System for Faster Sales and Better Inventory Control"
          description= "The Appliance Store Point of Sale System allows you to sell appliances faster and manage your inventory more effectively. Without a proper point-of-sale solution, appliance stores can suffer from stock problems, slow sales processing, pricing errors and problems with selling high dollar products."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={APPLIANCE_STORE_UNIFIED_HEADING}
          paragraph={APPLIANCE_STORE_UNIFIED_PARAGRAPH}
          cards={APPLIANCE_STORE_UNIFIED_CARDS}
          iconSet="applianceStore"
        />

        <WhyChoosePOS
          heading="How Our Appliance Store POS System Solves These Challenges"
          paragraph="Owners Inventory is a complete appliance store point of sale system for retailers, which enables them to handle inventory, sales, warranties and customer data from one place."
          cards={APPLIANCE_STORE_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="applianceStore"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory That Improve Appliance Store Operations"
          features={APPLIANCE_STORE_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={APPLIANCE_STORE_WORKFLOW_DATA.heading}
          paragraph={APPLIANCE_STORE_WORKFLOW_DATA.paragraph}
          steps={APPLIANCE_STORE_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Run Your Appliance Store with Greater Efficiency and Control"
          description= "Minimize stock accuracy problems, streamline sales processes, and enhance customer support with a robust Appliance Store POS System. Owners Inventory gives appliance retailers the tools to control inventory, sales, warranties, suppliers and store performance all in one location, streamlining, simplifying and speeding up the day-to-day processes."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={APPLIANCE_STORE_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security and Role-Based Access."
          description="Different access levels can be assigned within the system and can be provided to the users based on their roles and responsibilities. Appropriate access can be granted to each member of the sales staff, store managers, accounting teams, inventory controllers and business owners to ensure security and operational control."
          secondDescription="This helps to protect sensitive business information, restrict unauthorized editing or changes, and enable correct record keeping throughout the organisation."
        />

        <ToolsSection
          heading={APPLIANCE_STORE_TOOLS_DATA.heading}
          description={APPLIANCE_STORE_TOOLS_DATA.paragraph}
          tools={APPLIANCE_STORE_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={APPLIANCE_STORE_TESTIMONIALS}
          heading={APPLIANCE_STORE_TESTIMONIAL_DATA.heading}
          paragraph={APPLIANCE_STORE_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={APPLIANCE_STORE_TESTIMONIAL_DATA.secondHeading}
          secondDescription={APPLIANCE_STORE_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={APPLIANCE_STORE_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={APPLIANCE_STORE_TESTIMONIAL_DATA.whyChooseDescription}
          features={APPLIANCE_STORE_TESTIMONIAL_FEATURES}
          iconSet="applianceStore"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="Below are some of the most commonly asked questions about our appliance store POS system."
            faqs={APPLIANCE_STORE_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title= "Power Your Appliance Store with Smarter Inventory Management"
          description= "Control inventory, manage sales, follow warranties, coordinate suppliers and track performance, through a single POS solution designed to help your business grow."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
