import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/supermarket-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/supermarket-pos/why-chose-banner.webp";

import {
  SUPERMARKET_KEY_FEATURES_CARDS,
  SUPERMARKET_WHY_CHOOSE_CARDS,
  SUPERMARKET_FEATURE_CARDS
} from "@/constant/subindustries/posSupermarketData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  SUPERMARKET_UNIFIED_CARDS,
  SUPERMARKET_UNIFIED_HEADING,
  SUPERMARKET_UNIFIED_PARAGRAPH,
  SUPERMARKET_WORKFLOW_DATA,
  SUPERMARKET_TESTIMONIALS,
  SUPERMARKET_FAQS,
  SUPERMARKET_TESTIMONIAL_DATA,
  SUPERMARKET_TESTIMONIAL_FEATURES,
  SUPERMARKET_TOOLS_DATA,
} from "@/constant/subindustries/posSupermarketData";
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
        id="schema-supermarket"
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
                "description": "Supermarket POS system that handles thousands of SKUs with fast barcode billing, real-time inventory updates, supplier and purchase management, multi-unit selling, customer loyalty tracking, online sales integration, and centralized control across multiple branches.",
                "featureList": [
                  "Fast and accurate barcode billing",
                  "Live inventory management with automatic updates",
                  "Purchase order and supplier management",
                  "Multi-unit and variant support for sizes, weights, and packaging",
                  "Customer profiles and loyalty management",
                  "Expense and cash flow tracking",
                  "Online commerce with synced inventory",
                  "Unified multi-branch control from one dashboard",
                  "Smart sales and stock reports",
                  "Centralized price control across all branches",
                  "Role-based staff permissions for cashiers, managers, and admins",
                  "Integrations with accounting software, CRM, and payment gateways"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Supermarkets | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/supermarket-pos-system",
                "description": "Run your supermarket with fast barcode billing, real-time stock tracking, supplier management, multi-branch control, and online sales sync using Owners Inventory's POS system for supermarkets.",
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
                      "name": "Supermarkets",
                      "item": "https://www.ownersinventory.com/industries/supermarket-pos-system"
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
                "name": "Supermarket POS System",
                "description": "POS software designed for supermarkets to handle fast barcode billing, real-time inventory tracking, supplier and purchase management, multi-unit selling, customer loyalty programs, online ordering, and centralized multi-branch operations from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/supermarket-pos-system",
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
                        "name": "Supermarket Owner"
                      },
                      "reviewBody": "We have been very pleased with Owners Inventory. It has made billing a lot quicker and more precise, and inventory tracking is automated, making the daily routine of the store easier, orderly, and stress-free.",
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
                        "name": "Store Manager"
                      },
                      "reviewBody": "This is among the best systems we have used in our supermarket. It keeps our data in order, helps us monitor stock in real time, and supports better decisions. The checkout process is now faster and our customers are served more quickly.",
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
                    "position": 3,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Multi-Branch Retailer"
                      },
                      "reviewBody": "Previously, we had problems handling many products and categories, but now everything is well monitored and readily available. The system is easy for staff to use and has enhanced efficiency across all store operations.",
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
                    "position": 4,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Hypermarket Operator"
                      },
                      "reviewBody": "We used to have stock errors and delays. Now everything is accurate. It saves time and makes the supermarket more efficient.",
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
                    "name": "What is a POS system for a supermarket?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A supermarket POS system helps manage sales, inventory, and customers from one place. It makes billing and inventory tracking more accurate while streamlining daily operations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can this POS system handle large inventories?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. It is designed to manage thousands of products with categories, sizes, and variations, making it suitable for supermarkets and hypermarkets of any scale."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for staff to use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system is simple and easy to use. Staff can perform their jobs quickly without a lot of training, which reduces onboarding time and improves efficiency."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it provide reports and insights?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. It provides real-time reports on sales, stock, and profits, which help with smarter purchasing, pricing, and inventory decisions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is the system secure for multiple users?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Role-based controls ensure that only the right people can access specific parts of the system, keeping data safe across different staff roles."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Supermarket Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines supermarket inventory management from acquisition to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Inventory Acquisition",
                    "text": "Suppliers send products based on customer demand. Each item is checked for quality and quantity, then added to the system to begin accurate tracking from intake."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Stock Organization and Storage",
                    "text": "Products are stored and arranged in a way that makes them easy to find and manage. Proper organization improves shelf efficiency and reduces handling errors."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Inventory Tracking",
                    "text": "Stock movements such as sales, returns, and transfers are updated in real time, giving supermarket owners an always-accurate view of available inventory."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Supplier and Purchasing",
                    "text": "Track deliveries, manage suppliers, and restock items on time. Reliable supplier coordination prevents stockouts and supports better purchasing decisions."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Order Fulfillment",
                    "text": "Picking, packing, and billing products correctly reduces mistakes and keeps in-store and online orders running smoothly."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reporting and Analysis",
                    "text": "Detailed reports show sales performance, stock movement, and revenue insights, helping supermarket owners plan smarter purchases and improve profitability."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
      <SubIndustriesHero
        title="Complete POS System for Supermarkets with Stock Tracking"
        description="The Owners Inventory POS System for supermarkets is the way to control your store’s inventory. It helps you run your supermarket quickly and accurately. Our POS System keeps track of all sales and stock updates in one place. This is great for supermarkets that need to bill customers quickly and keep track of their inventory in real time."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={SUPERMARKET_UNIFIED_HEADING}
        paragraph={SUPERMARKET_UNIFIED_PARAGRAPH}
        cards={SUPERMARKET_UNIFIED_CARDS}
        iconSet="superMarket"
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges"
        paragraph="The Owners Inventory POS System has features that help supermarkets, including:"
        cards={SUPERMARKET_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="superMarket"
      />

      <KeyHighlights
        heading="Key Features of Our POS System That Help Supermarkets"
        features={SUPERMARKET_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={SUPERMARKET_WORKFLOW_DATA.heading}
        paragraph={SUPERMARKET_WORKFLOW_DATA.paragraph}
        steps={SUPERMARKET_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Manage Your Inventory Efficiently"
        description="You can take control of the supermarket with our system. It is made for stores."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={SUPERMARKET_FEATURE_CARDS} />

      <SecurityCompliance
        title="Speed, Accuracy, and Compliance."
        description="Our system works with other tools like accounting software, customer management, online stores and payment systems. This lets you manage the supermarket from one place."
        secondDescription="These tools make things easier, reduce work and make the supermarket run faster and more efficiently."
      />

      <ToolsSection
        heading={SUPERMARKET_TOOLS_DATA.heading}
        description={SUPERMARKET_TOOLS_DATA.paragraph}
        tools={SUPERMARKET_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={SUPERMARKET_TESTIMONIALS}
        heading={SUPERMARKET_TESTIMONIAL_DATA.heading}
        paragraph={SUPERMARKET_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={SUPERMARKET_TESTIMONIAL_DATA.secondHeading}
        secondDescription={SUPERMARKET_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={SUPERMARKET_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={SUPERMARKET_TESTIMONIAL_DATA.whyChooseDescription}
        features={SUPERMARKET_TESTIMONIAL_FEATURES}
        iconSet="superMarket"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading= "FAQS"
          paragraph= "Our supermarket store POS solution is built in such a way that it makes everyday operations easy and effective. These are the responses to some of the most frequent questions of the store owners in supermarkets."
          faqs={SUPERMARKET_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title= "Take Control of Your Supermarket"
        description= "Supermarkets can lose money because of stock errors and inefficient processes. Our system helps reduce losses, keeps inventory accurate and makes operations faster. It helps with tracking and billing which leads to profit and growth."
        ctaDesc="Start Today"
      />
    </div>
    </>
  );
};

export default Page;
