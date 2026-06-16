import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/warehouses-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/warehouses-pos/why-chose-banner.webp";

import {
  WAREHOUSES_KEY_FEATURES_CARDS,
  WAREHOUSES_WHY_CHOOSE_CARDS,
  WAREHOUSES_FEATURE_CARDS
} from "@/constant/subindustries/warehousesPosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  WAREHOUSES_UNIFIED_CARDS,
  WAREHOUSES_UNIFIED_HEADING,
  WAREHOUSES_UNIFIED_PARAGRAPH,
  WAREHOUSES_WORKFLOW_DATA,
  WAREHOUSES_TESTIMONIALS,
  WAREHOUSES_FAQS,
  WAREHOUSES_TESTIMONIAL_DATA,
  WAREHOUSES_TESTIMONIAL_FEATURES,
  WAREHOUSES_TOOLS_DATA,
} from "@/constant/subindustries/warehousesPosData";
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
        id="schema-warehouses"
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
                "description": "Warehouse POS system that tracks SKUs, dimensions, and unit types across all product categories, speeds up order processing with barcode scanning, manages returns and shipments, syncs inventory across facilities and sales channels, and provides detailed operational analytics.",
                "featureList": [
                  "SKU management for dimensions, unit types, and categories",
                  "Fast order processing with barcode scanning",
                  "Real-time inventory tracking across all product lines",
                  "Seamless returns and shipment handling",
                  "Customer order profiles and history tracking",
                  "Multi-facility inventory and pricing sync",
                  "E-commerce integration with automatic stock updates",
                  "Supplier and purchase order management",
                  "Seasonal and promotional discount management",
                  "Employee roles, permissions, and activity tracking",
                  "Smart operational and demand trend reports"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Warehouses POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/warehouses-pos-system",
                "description": "Manage warehouse inventory with real-time SKU tracking, fast order processing, smooth returns, and multi-facility sync using Owners Inventory's warehouse POS system.",
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
                      "name": "Warehouses POS System",
                      "item": "https://ownersinventory.com/industries/warehouses-pos-system"
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
                "name": "Warehouses POS System",
                "description": "POS software designed for warehouse operators to manage product SKUs by dimension and unit type, speed up order processing with barcode scanning, handle returns and shipments, sync inventory across facilities and sales channels, and generate detailed operational reports from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/warehouses-pos-system",
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
                    "name": "How does this POS handle SKUs, dimensions, and variants?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The system tracks every SKU, dimension, and unit type separately across all product categories, keeping stock accurate and reducing fulfillment errors."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can it manage multiple warehouse facilities?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Inventory, orders, pricing, and reports stay synced across all facilities, and you can transfer stock between locations on demand."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the POS support returns and shipment tracking?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Returns and shipments are processed clearly, with every action recorded to keep inventory and revenue accurate."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I connect my online sales channels?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Your online and warehouse inventory update in real time, preventing overselling and duplicate records across all channels."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for warehouse staff to learn?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The interface is simple and clear, so staff can use it confidently within a few hours of training."
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
          title= "POS System for Warehouses for Faster Operations and Better Inventory Control"
          description= "If a warehouse business doesn't have the right point-of-sale system, it may encounter inventory inaccuracies, delayed order processing, mismanagement of inventory and struggle with high product volume. Without a reliable warehouse POS system, businesses typically suffer from shipment delays, tracking errors, lost inventory, and inefficient warehouse operations."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={WAREHOUSES_UNIFIED_HEADING}
          paragraph={WAREHOUSES_UNIFIED_PARAGRAPH}
          cards={WAREHOUSES_UNIFIED_CARDS}
          iconSet="warehouses"
        />

        <WhyChoosePOS
          heading="How Our POS System Solves These Challenges"
          paragraph="Owners Inventory is a single solution for warehouse POS systems that lets you manage inventory and handle all your warehouse activities from one platform."
          cards={WAREHOUSES_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="warehouses"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory That Improve Warehouse Operations"
          features={WAREHOUSES_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={WAREHOUSES_WORKFLOW_DATA.heading}
          paragraph={WAREHOUSES_WORKFLOW_DATA.paragraph}
          steps={WAREHOUSES_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Run Your Warehouse Operations Without the Guesswork"
          description="Reduce delays associated with manual stock management, inaccurate inventory and disconnected warehouse operation. Owners Inventory is a full-featured POS solution for warehouses that enables businesses to manage and control inventory, ordering, stock movement, and warehouse performance from a single platform."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={WAREHOUSES_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security and Role-Based Access."
          description= "Access to system sections is limited based on employees’ roles and responsibilities. Employees in the warehouse, as well as supervisors, accountants and managers can work with restricted access to reduce unauthorized changes and maintain security."
          secondDescription= "This helps keep warehouses up to date with records and ensure safe and organized operations."
        />

        <ToolsSection
          heading={WAREHOUSES_TOOLS_DATA.heading}
          description={WAREHOUSES_TOOLS_DATA.paragraph}
          tools={WAREHOUSES_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={WAREHOUSES_TESTIMONIALS}
          heading={WAREHOUSES_TESTIMONIAL_DATA.heading}
          paragraph={WAREHOUSES_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={WAREHOUSES_TESTIMONIAL_DATA.secondHeading}
          secondDescription={WAREHOUSES_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={WAREHOUSES_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={WAREHOUSES_TESTIMONIAL_DATA.whyChooseDescription}
          features={WAREHOUSES_TESTIMONIAL_FEATURES}
          iconSet="warehouses"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="Below are some of the most commonly asked questions about our warehouse POS system."
            faqs={WAREHOUSES_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Improve Inventory Accuracy and Warehouse Efficiency"
          description="Our warehouse pos system streamlines inventory management, order fulfillment, stock monitoring and operational reporting on a single platform designed for efficient, effective and reliable warehouse operations day after day. "
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
