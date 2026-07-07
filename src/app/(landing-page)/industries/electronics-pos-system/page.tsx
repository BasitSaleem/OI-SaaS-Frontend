import React from "react";
import Script from "next/script";
const heroBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/bakery-pos-system/hero-banner.webp";
const whyChoseBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/bakery-pos-system/why-chose-banner.webp";

import {
  ELECTRONICS_KEY_FEATURES_CARDS,
  ELECTRONICS_WHY_CHOOSE_CARDS,
  ELECTRONICS_FEATURE_CARDS
} from "@/constant/subindustries/posElectronicsData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  ELECTRONICS_UNIFIED_CARDS,
  ELECTRONICS_UNIFIED_HEADING,
  ELECTRONICS_UNIFIED_PARAGRAPH,
  ELECTRONICS_WORKFLOW_DATA,
  ELECTRONICS_TESTIMONIALS,
  ELECTRONICS_FAQS,
  ELECTRONICS_TESTIMONIAL_DATA,
  ELECTRONICS_TESTIMONIAL_FEATURES,
  ELECTRONICS_TOOLS_DATA,
} from "@/constant/subindustries/posElectronicsData";
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
        id="schema-electronics"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "name": "Owners Inventory",
                "url": "https://www.ownersinventory.com",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "description": "Free trial available"
                },
                "description": "Electronics store POS system that tracks unique serial numbers, manages warranties, processes high-value billing quickly, maintains real-time stock levels, handles purchase orders, and syncs in-store and online channels.",
                "featureList": [
                  "Serial number tracking and lookup",
                  "Warranty and returns validation",
                  "Fast barcode scanner billing",
                  "Real-time inventory updates across locations",
                  "Purchase order and supplier management",
                  "Customer CRM and history logs",
                  "Expense and cash flow tracking",
                  "Online ecommerce storefront sync",
                  "Multi-branch operations from one dashboard",
                  "Sales, tax, and inventory turnover reports",
                  "Role-based staff permissions",
                  "Integrations with accounting tools and payment gateways"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Electronics Stores | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/electronics-pos-system",
                "description": "Manage your electronics store with serial number tracking, warranty controls, supplier management, multi-branch dashboard, and online store sync using Owners Inventory.",
                "inLanguage": "en",
                "isPartOf": {
                  "@type": "WebSite",
                  "name": "Owners Inventory",
                  "url": "https://www.ownersinventory.com"
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://www.ownersinventory.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Industries",
                      "item": "https://www.ownersinventory.com/industries"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Electronics",
                      "item": "https://www.ownersinventory.com/industries/electronics-pos-system"
                    }
                  ]
                }
              },
              {
                "@type": "Organization",
                "name": "Owners Inventory",
                "url": "https://www.ownersinventory.com",
                "logo": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Support",
                  "availableLanguage": "English",
                  "url": "https://www.ownersinventory.com/contact"
                },
                "sameAs": [
                  "https://www.facebook.com/ownersinventory",
                  "https://www.instagram.com/ownersinventory",
                  "https://www.linkedin.com/company/owners-inventory"
                ]
              },
              {
                "@type": "Product",
                "name": "Electronics Store POS System",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "POS software designed for electronics retailers to manage serial numbers, track warranties, handle supplier orders, and run multi-branch retail operations seamlessly.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/electronics-pos-system",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "description": "Free trial available. Book a demo to get started."
                }
              },
              {
                "@type": "ItemList",
                "name": "Customer Reviews",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Electronics Store Owner"
                      },
                      "reviewBody": "This system has made serial number lookup and billing quick and precise. Managing store inventory is finally stress-free.",
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5",
                        "worstRating": "1"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Owners Inventory"
                      }
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Electronics Retailer"
                      },
                      "reviewBody": "The best system we have implemented. It organizes warranties, scans serials instantly, and integrates with our website.",
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5",
                        "worstRating": "1"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Owners Inventory"
                      }
                    }
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is an electronics POS system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It is a specialized point of sale system designed to manage unique serial numbers, warranty details, customer information, and multi-store inventories from one centralized database."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can this system track individual serial numbers?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can scan or type unique serial numbers during receiving and checkout to ensure precise tracking and simplify future warranty claims."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for store cashiers to learn?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. The layout is intuitive, allowing cashiers to ring up sales, process card payments, and add warranties with minimal training."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it support online store integration?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the system synchronizes your local inventory directly with leading ecommerce channels so you can manage offline and online channels in one place."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage multiple electronics outlets?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, Owners Inventory provides centralized control so you can monitor sales, transfers, and inventory levels across all store branches."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Electronics Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines electronics store operations and serial tracking.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Inventory Acquisition",
                    "text": "Receive new shipments, scan barcodes, and log unique serial numbers for each item into the system database."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Stock Organization",
                    "text": "Catalog items with clear category structures, brands, models, and specifications to optimize display and lookup."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Inventory Tracking",
                    "text": "Continuously monitor stock levels, pending customer orders, and warranty periods automatically."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Supplier Ordering",
                    "text": "Auto-generate purchase orders based on custom reorder points for key product lines."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Order Fulfillment",
                    "text": "Scan barcodes, assign serial numbers to sales, print warranty conditions on receipts, and complete transactions."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reporting & Insights",
                    "text": "Review detailed insights to understand what electronics categories are most profitable and make smart business decisions."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Complete POS System for Electronics Stores with Serial Tracking"
          description="The Owners Inventory POS System for electronics stores is the ultimate way to control high-value inventory. It helps you run your retail business quickly, securely, and accurately. Track serial numbers, warranties, cash flow, and multi-store transfers in real time from a single unified dashboard."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={ELECTRONICS_UNIFIED_HEADING}
          paragraph={ELECTRONICS_UNIFIED_PARAGRAPH}
          cards={ELECTRONICS_UNIFIED_CARDS}
          iconSet="applianceStore"
        />

        <WhyChoosePOS
          heading="How Our Inventory Software Solves These Challenges"
          paragraph="The Owners Inventory POS System has features tailored for electronics stores, including:"
          cards={ELECTRONICS_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="applianceStore"
        />

        <KeyHighlights
          heading="Key Features of Our POS System for Electronics Retailers"
          features={ELECTRONICS_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={ELECTRONICS_WORKFLOW_DATA.heading}
          paragraph={ELECTRONICS_WORKFLOW_DATA.paragraph}
          steps={ELECTRONICS_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Manage Your Electronics Inventory Efficiently"
          description="Take control of your electronics retail operations. Keep serial numbers accurate and customers happy."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={ELECTRONICS_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Integrations"
          description="Our system connects with accounting packages, payment gateways, barcode scanners, and online marketplaces to keep your electronics business unified."
          secondDescription="Minimize operational overhead, reduce errors, and scale your business effortlessly."
        />

        <ToolsSection
          heading={ELECTRONICS_TOOLS_DATA.heading}
          description={ELECTRONICS_TOOLS_DATA.paragraph}
          tools={ELECTRONICS_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={ELECTRONICS_TESTIMONIALS}
          heading={ELECTRONICS_TESTIMONIAL_DATA.heading}
          paragraph={ELECTRONICS_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={ELECTRONICS_TESTIMONIAL_DATA.secondHeading}
          secondDescription={ELECTRONICS_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={ELECTRONICS_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={ELECTRONICS_TESTIMONIAL_DATA.whyChooseDescription}
          features={ELECTRONICS_TESTIMONIAL_FEATURES}
          iconSet="applianceStore"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="Our electronics store POS solution is built to optimize daily operations and protect assets. Here are answers to some frequently asked questions."
            faqs={ELECTRONICS_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Take Control of Your Electronics Store"
          description="High-value electronics stores can lose profits due to warranty fraud and serial tracking errors. Our software secures stock levels, speeds checkouts, and tracks margins dynamically to drive growth."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
