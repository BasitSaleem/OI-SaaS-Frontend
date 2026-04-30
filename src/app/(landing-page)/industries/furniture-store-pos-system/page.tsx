import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/furniture-store-pos/furniture-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/bakery-pos/why-chose-banner.webp";

import {
  FURNITURE_STORE_KEY_FEATURES_CARDS,
  FURNITURE_STORE_WHY_CHOOSE_CARDS,
  FURNITURE_STORE_FEATURE_CARDS
} from "@/constant/subindustries/posFurnitureStoreData";


import TrustedBySection from "@/components/common-components/TrustedBySection";
import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  FURNITURE_STORE_UNIFIED_CARDS,
  FURNITURE_STORE_UNIFIED_HEADING,
  FURNITURE_STORE_UNIFIED_PARAGRAPH,
  FURNITURE_STORE_WORKFLOW_DATA,
  FURNITURE_STORE_TESTIMONIALS,
  FURNITURE_STORE_FAQS,
  FURNITURE_STORE_TESTIMONIAL_DATA,
  FURNITURE_STORE_TESTIMONIAL_FEATURES,
  FURNITURE_STORE_TOOLS_DATA,
} from "@/constant/subindustries/posFurnitureStoreData";
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
      <script
        type="application/ld+json"
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
                "description": "Furniture store POS software that handles bulk inventory, custom orders, advance payments, deliveries, and multi-branch operations. Tracks variants such as size, color, material, and finish in real time across showrooms and warehouses, with mobile POS, online order syncing, and detailed sales reporting.",
                "featureList": [
                  "Real-time inventory tracking for furniture variants",
                  "Fast invoicing with taxes, delivery charges, and partial payments",
                  "Custom order and advance payment tracking",
                  "Multi-branch and warehouse management",
                  "Variant management for size, color, material, and finish",
                  "Delivery and installation status tracking",
                  "Supplier and purchase order management",
                  "Barcode labeling for large furniture items",
                  "After-sales, returns, and warranty tracking",
                  "Mobile POS for on-floor showroom selling",
                  "Online and in-store sales syncing",
                  "Role-based access control for staff",
                  "Detailed sales, stock, and profitability reports"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Furniture Stores | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/furniture-store-pos-system",
                "description": "Run your furniture store with accurate inventory, faster billing, custom order tracking, delivery management, and multi-branch control using Owners Inventory's furniture store POS system.",
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
                      "name": "Furniture Stores",
                      "item": "https://www.ownersinventory.com/industries/furniture-store-pos-system"
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
                "name": "Furniture Store POS Software",
                "description": "POS software designed for furniture stores to manage bulk inventory, custom orders, advance payments, delivery and installation tracking, multi-branch showrooms, supplier purchasing, and online order syncing from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/furniture-store-pos-system",
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
                        "name": "Furniture Store Owner"
                      },
                      "reviewBody": "Before Owners Inventory, it was always difficult to handle bulky products and custom orders. Monitoring stock, deliveries, and product variations was time consuming and subject to mistakes. With this furniture POS system, our team can check real-time stock, track deliveries, and manage variants, saving a lot of time daily.",
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
                        "name": "Showroom Manager"
                      },
                      "reviewBody": "We also have the mobile POS option, which lets our sales personnel make sales on the showroom floor. Customers love the instant quotes and invoices, and transactions are fast, precise, and professional. This has modernized our store operations and improved the customer experience.",
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
                      "reviewBody": "Managing multiple locations is now easy. Stock transfers, custom orders, and deliveries are synchronized across three showrooms and a warehouse linked by the furniture store POS. This has made operations more efficient, reduced errors, and given us complete visibility and control across all locations.",
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
                    "name": "What is a POS system for a furniture store?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It is software used to process sales, inventory, deliveries, and custom orders. Bulky products, colors, sizes, and materials are tracked correctly, and showrooms and warehouses stay connected in real time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it able to manage several branches?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The furniture store POS system keeps all locations in sync. Reports, inventory, and stock transfers stay aligned across branches, and managers can monitor everything on a single dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it support mobile sales?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The furniture mobile POS software enables on-floor billing and quotations. Salespeople can monitor inventory and close transactions in real time, and customers receive prompt and precise invoices."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can it manage custom orders?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The furniture POS captures bespoke sizes, finishes, and materials. Detailed information is shared with production teams, which minimizes errors and confusion."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it provide reports and analytics?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The furniture POS software generates sales, inventory, and performance reports. Slow-moving and aging products can be identified easily, helping owners make better purchasing and stocking decisions."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Furniture Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines furniture store inventory management from supplier procurement to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Inventory Procurement",
                    "text": "Prepare purchase orders with manufacturers and suppliers. Items are received with complete variant information, and accurate records of costs, quantities, and supplier timelines are maintained for better planning."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Stock Organization",
                    "text": "Categorize items by type, material, collection, or room category for easy tracking. Well-structured storage reduces confusion and improves showroom efficiency."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Real-Time Inventory Tracking",
                    "text": "All stock movements are updated in real time. There is no need to check stock levels manually, ensuring accurate availability across showrooms and warehouses."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Order and Delivery Management",
                    "text": "Track customer orders from booking to final delivery and installation. Avoid late deliveries and ensure orders are fulfilled on time and in an organized manner."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Returns and Damage Control",
                    "text": "Returned, exchanged, and damaged items are entered into the system properly. Stock adjustments are recorded accurately to prevent variances and losses."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reporting and Analysis",
                    "text": "Generate reports on stock value, pending deliveries, profits, and seasonal demand trends to make better purchasing decisions and reduce excess inventory."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="POS System for Furniture Stores That Controls Inventory & Sales"
        description="Owners Inventory is a POS system that enables you to run your furniture store accurately, fast, and in full control. Order large quantities, manage custom orders, deliveries and payments all within a single intelligent system. All sales and stock movements remain updated in real time."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={FURNITURE_STORE_UNIFIED_HEADING}
        paragraph={FURNITURE_STORE_UNIFIED_PARAGRAPH}
        cards={FURNITURE_STORE_UNIFIED_CARDS}
        iconSet="furniture"
      />

      <WhyChoosePOS
        heading="How Our Furniture Store POS Solves These Challenges"
        paragraph="Owners Inventory integrates your sales, inventory, suppliers, custom orders and reports into a single smart platform."
        cards={FURNITURE_STORE_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="furniture"
      />

      <KeyHighlights
        heading="Our Key Features"
        features={FURNITURE_STORE_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={FURNITURE_STORE_WORKFLOW_DATA.heading}
        paragraph={FURNITURE_STORE_WORKFLOW_DATA.paragraph}
        steps={FURNITURE_STORE_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Get Full Control of Your Furniture Store"
        description="Our POS system of high-tech furniture stores will assist you in avoiding stock errors, speeding up the billing process, and making deliveries without any issues. Enhance efficiency in operations and provide a smooth customer experience."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={FURNITURE_STORE_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="Our system is secure and ensures controlled access and transactions through organized data management and constant monitoring. Role-based permissions allow you to determine the degree of access of cashiers, managers, and administrators, reducing the possibility of unauthorized actions. All sales, returns, and inventory adjustments are kept in full audit trails which are completely transparent."
        secondDescription="Proper financial documentation makes reconciliation and reporting easier and real-time inventory tracking eliminates discrepancies and manipulation of stocks. Your business data is securely backed up, system controls are reliable, and your business data is compliant and reliable, and you have confidence in every transaction and operational decision."
      />

      <ToolsSection
        heading={FURNITURE_STORE_TOOLS_DATA.heading}
        description={FURNITURE_STORE_TOOLS_DATA.paragraph}
        tools={FURNITURE_STORE_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={FURNITURE_STORE_TESTIMONIALS}
        heading={FURNITURE_STORE_TESTIMONIAL_DATA.heading}
        paragraph={FURNITURE_STORE_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={FURNITURE_STORE_TESTIMONIAL_DATA.secondHeading}
        secondDescription={FURNITURE_STORE_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={FURNITURE_STORE_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={FURNITURE_STORE_TESTIMONIAL_DATA.whyChooseDescription}
        features={FURNITURE_STORE_TESTIMONIAL_FEATURES}
        iconSet="furniture"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our POS system for furniture stores is designed to make daily operations smooth and easy."
          secondParagraph="Here are answers to some common questions from POS system furniture stores owners."
          faqs={FURNITURE_STORE_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Take Control of Your Furniture Store"
        description="Furniture businesses lose significant revenue each year due to stock errors, delivery delays, and poor order tracking. Our furniture store POS system helps reduce losses, maintain accurate inventory, and streamline billing and delivery operations. Smarter management and faster processes make every day more profitable."
        ctaDesc="Start Today"
      />
    </div>
    </>
  );
};

export default Page;
