import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/thrift-store-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/thrift-store-pos/why-chose-banner.webp";

import {
  THRIFT_STORE_KEY_FEATURES_CARDS,
  THRIFT_STORE_WHY_CHOOSE_CARDS,
  THRIFT_STORE_FEATURE_CARDS,
} from "@/constant/subindustries/thriftStorePosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  THRIFT_STORE_UNIFIED_CARDS,
  THRIFT_STORE_UNIFIED_HEADING,
  THRIFT_STORE_UNIFIED_PARAGRAPH,
  THRIFT_STORE_WORKFLOW_DATA,
  THRIFT_STORE_TESTIMONIALS,
  THRIFT_STORE_FAQS,
  THRIFT_STORE_TESTIMONIAL_DATA,
  THRIFT_STORE_TESTIMONIAL_FEATURES,
  THRIFT_STORE_TOOLS_DATA,
} from "@/constant/subindustries/thriftStorePosData";
import InventoryWorkflow from "@/components/pages/industries-page/InventoryWorkflow";
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
        id="schema-thrift-store"
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
                "description": "Specialized thrift store POS system to track unique SKU inventories, consignment payouts, donor records, and color-tag markdowns from a centralized cloud dashboard.",
                "featureList": [
                  "Unique SKU creation and barcode tag printing",
                  "Automated consignment splits and payment tracking",
                  "Donor CRM profile management and database tracking",
                  "Automated tax-deductible donation receipt generation",
                  "Color-coded discount tag markdown scheduler",
                  "Layaways, holds, and partial payment processing",
                  "Multi-store inventory synchronization and transfers",
                  "Mobile-friendly volunteer and staff register screens",
                  "Consignor payouts via cash, check, or store credits",
                  "Integrated online catalog and e-commerce sync"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Thrift Store POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/thrift-store-pos-system",
                "description": "Coordinate second-hand retail and consignment sales with unique barcoded tag generation, donor CRM profiles, automated tax receipts, and color-tag discounts using Owners Inventory's thrift store POS system.",
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
                      "name": "Thrift Store POS System",
                      "item": "https://ownersinventory.com/industries/thrift-store-pos-system"
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
                "name": "Thrift Store POS System",
                "description": "POS software designed for thrift stores, consignment shops, charity resale stores, and vintage boutiques to manage unique SKU inventories, consignor splits, and donor profiles.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/thrift-store-pos-system",
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
                    "name": "Can I track donated inventory in the system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, it offers you the ability to track the incoming inventory, manage the merchandise that you have donated and keep a record of it, which is very convenient."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the POS handle discounts and promotions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Discounts, clearance, seasonal offers, special offers can be set up in the system and automatically applied at checkout without the need for manual calculations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I upload my existing inventory all at once?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, you can import product information from an excel or CSV file, which enables you to set up your inventory very fast without having to enter the products manually one by one."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can the system manage multiple thrift store locations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. The system enables you to track your stock, sales, and performance at various locations in one place."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it track sales history and item performance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The system keeps track of sales activity, and detailed reports on product performance, inventory turnover and popular categories will be produced to help make sound business decisions."
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
          title="Thrift Store POS System for Smarter Inventory and Efficient Management"
          description="The items that are donated to thrift stores are constantly changing from second hand and vintage to unique items. Creating a pricing strategy, keeping track of inventory, and ensuring efficient customer service can be difficult when handling these products. Owners Inventory provides the dedicated Thrift Store Point of Sale solution to enable tracking of inventory in real time, streamline checkout procedures, and efficiently manage the store's inventory."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={THRIFT_STORE_UNIFIED_HEADING}
          paragraph={THRIFT_STORE_UNIFIED_PARAGRAPH}
          cards={THRIFT_STORE_UNIFIED_CARDS}
          iconSet="thriftStore"
        />

        <WhyChoosePOS
          heading="How Our POS System for Thrift Stores Solves These Challenges"
          paragraph="Owners Inventory provides a powerful thrift store POS system that streamlines daily operations, improves inventory accuracy, and centralizes business management in one easy-to-use platform."
          cards={THRIFT_STORE_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="thriftStore"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory POS"
          features={THRIFT_STORE_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={THRIFT_STORE_WORKFLOW_DATA.heading}
          paragraph={THRIFT_STORE_WORKFLOW_DATA.paragraph}
          steps={THRIFT_STORE_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Stop Losing Time Managing Thrift Store Inventory"
          description="Having well organized inventory records, efficient checkout lines, and accurate sales tracking creates a better customer experience and boosts profits at thrift stores. Owners Inventory includes everything you want to have in place to run your thrifts in an efficient fashion and still have inventory, sales, and reporting all in one system."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={THRIFT_STORE_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security and Access Control"
          description="Role-based access controls are an integral part of Owners Inventory to help safeguard business operations. Staff members have access only to information pertinent to their job functions and secure payment processing will help ensure customer and business information is well protected."
          secondDescription=""
        />

        <ToolsSection
          heading={THRIFT_STORE_TOOLS_DATA.heading}
          description={THRIFT_STORE_TOOLS_DATA.paragraph}
          tools={THRIFT_STORE_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={THRIFT_STORE_TESTIMONIALS}
          heading={THRIFT_STORE_TESTIMONIAL_DATA.heading}
          paragraph={THRIFT_STORE_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={THRIFT_STORE_TESTIMONIAL_DATA.secondHeading}
          secondDescription={THRIFT_STORE_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={THRIFT_STORE_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={THRIFT_STORE_TESTIMONIAL_DATA.whyChooseDescription}
          features={THRIFT_STORE_TESTIMONIAL_FEATURES}
          iconSet="thriftStore"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="The following are some of the most frequently asked questions about our thrift store POS system."
            faqs={THRIFT_STORE_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="The Smartest Move for Your Thrift Store"
          description="Eliminate spreadsheets, guesswork, and disconnected systems. Owners Inventory delivers a more efficient and effective inventory management, sales processing, store performance monitoring and simplified daily life inventory store experience."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
