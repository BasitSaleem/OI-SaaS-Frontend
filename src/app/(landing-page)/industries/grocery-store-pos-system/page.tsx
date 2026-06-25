import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/grocery-store-pos/grocery-store-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/grocery-store-pos/grocery-store-why-chose-banner.webp";

import {
  GROCERY_STORE_KEY_FEATURES_CARDS,
  GROCERY_STORE_WHY_CHOOSE_CARDS,
  GROCERY_STORE_FEATURE_CARDS
} from "@/constant/subindustries/posGroceryStoreData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  GROCERY_STORE_UNIFIED_CARDS,
  GROCERY_STORE_UNIFIED_HEADING,
  GROCERY_STORE_UNIFIED_PARAGRAPH,
  GROCERY_STORE_WORKFLOW_DATA,
  GROCERY_STORE_TESTIMONIALS,
  GROCERY_STORE_FAQS,
  GROCERY_STORE_TESTIMONIAL_DATA,
  GROCERY_STORE_TESTIMONIAL_FEATURES,
  GROCERY_STORE_TOOLS_DATA,
} from "@/constant/subindustries/posGroceryStoreData";
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
        id="schema-grocery"
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
                "description": "Grocery store POS software that manages thousands of SKUs, tracks expiry and batch numbers, supports multi-unit selling, automates supplier reordering, syncs online and in-store sales, and handles fast barcode billing across single or multi-branch grocery operations.",
                "featureList": [
                  "Fast barcode billing for high-volume checkout",
                  "Real-time inventory updates after every sale, return, or purchase",
                  "Expiry date and batch tracking for perishable goods",
                  "Smart reordering with low-stock alerts",
                  "Multi-unit and variant support (kg, gram, pack, carton)",
                  "Centralized price management across counters and branches",
                  "Supplier and purchase order management",
                  "Customer profiles, loyalty programs, and credit management",
                  "Expense and cash flow tracking",
                  "Online grocery and home delivery integration",
                  "Multi-branch connectivity from one dashboard",
                  "Smart sales reports and analytics",
                  "Role-based access control for cashiers, supervisors, and managers"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Grocery Store | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/grocery-store-pos-system",
                "description": "Run your grocery store with fast barcode billing, real-time inventory, expiry tracking, smart reordering, and online and multi-branch sync using Owners Inventory's POS system for grocery stores.",
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
                      "name": "Grocery Store",
                      "item": "https://www.ownersinventory.com/industries/grocery-store-pos-system"
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
                "name": "Grocery Store POS System",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "POS software designed for grocery stores, supermarkets, and minimarts to handle fast barcode billing, real-time inventory updates, expiry and batch tracking, multi-unit selling, supplier and purchase management, online ordering, and multi-branch operations from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/grocery-store-pos-system",
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
                      "reviewBody": "The POS system has made our supermarket operations easy. Billing has become quicker, and the mistakes in stock have been diminished considerably. Our daily sales are now handled with a lot of confidence.",
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
                        "name": "Grocery Store Manager"
                      },
                      "reviewBody": "This grocery POS helps to keep everything in order and simplifies the restocking process. Our checkout time was immediately increased and customers are pleased with the quicker service.",
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
                        "name": "Mini Mart Owner"
                      },
                      "reviewBody": "We handle thousands of products each day and we do not get mixed up. Reports enable us to make improved purchasing choices, minimize wastage, and have adequate stocks.",
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
                        "name": "Neighborhood Grocer"
                      },
                      "reviewBody": "Prior to using this system, expiry items were stressful to manage. All sales and stock updates are now tracked flawlessly. It saves time, mistakes are minimized, and it is much easier to run our grocery store.",
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
                    "name": "What is Grocery POS in Owners Inventory?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Grocery POS in Owners Inventory is a complete system designed to help grocery businesses manage billing, inventory, and products all in one place. Whether you run a small neighborhood shop or a large supermarket chain, it helps you track stock, manage prices, and handle checkout smoothly."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the software automatically update stock?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system updates your stock levels automatically and instantly every time a sale is made or new items are added through purchase. You don't have to adjust anything manually as quantities are reduced or increased on their own, helping you avoid mistakes."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it support discounts and promotions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can easily create and manage deals, combo offers, price drops, and percentage discounts whenever you want. The system applies them correctly during billing, making it simple to run promotions and attract more customers."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it fit my store size?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Owners Inventory is built to work for all types of stores, from small grocery setups to multi-branch supermarkets. You can start with basic features and expand as your business grows."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I import my existing product list?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can bring all your current products into the system easily using Excel or CSV files. Thousands of items can be uploaded within minutes, so you don't have to enter each product manually."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Grocery Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines grocery store inventory management from procurement to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Inventory Procurement",
                    "text": "Order goods from reputable suppliers according to demand forecasts. Check received goods for quality and quantity, then add them into the system for accurate record-keeping."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Organized Storage",
                    "text": "Classify products according to type, brand, or expiry date. Proper labeling enhances shelf management, reduces confusion, and helps staff locate items quickly."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Real-Time Tracking",
                    "text": "Any stock movement, sale, return, or transfer is automatically updated in the system. This ensures accurate inventory monitoring and prevents stock discrepancies."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Supplier Coordination",
                    "text": "Track lead times, prices, and supplier performance to ensure timely replenishment. Reliable supplier records help avoid stockouts and overstocking."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Order Processing",
                    "text": "Online and in-store orders update stock immediately and are fulfilled correctly. This keeps showroom and digital channels perfectly synchronized."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reporting and Analysis",
                    "text": "Detailed reports analyze fast-selling goods, wastage levels, and profit margins. These insights help grocery owners make smarter purchasing and pricing decisions."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="POS System for Grocery Store That Controls Inventory"
          description="Owners Inventory, the best POS system for grocery stores, allows you to run your grocery store fast, accurately and with full control. All sales and stock remain updated in a single smart POS. The product is designed to fit busy supermarkets, and minimarts that require the quick billing and real-time monitoring of inventory."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Rated on Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={GROCERY_STORE_UNIFIED_HEADING}
          paragraph={GROCERY_STORE_UNIFIED_PARAGRAPH}
          cards={GROCERY_STORE_UNIFIED_CARDS}
          iconSet="grocery"
        />

        <WhyChoosePOS
          heading="How Our Inventory Software Solves These Challenges"
          paragraph="Owner Inventory integrates the sales, stock, suppliers and reports together into a single smart grocery POS. All the store operations are automatically updated and kept in sync."
          cards={GROCERY_STORE_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="grocery"
        />

        <KeyHighlights
          heading="Our Key Features"
          features={GROCERY_STORE_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={GROCERY_STORE_WORKFLOW_DATA.heading}
          paragraph={GROCERY_STORE_WORKFLOW_DATA.paragraph}
          steps={GROCERY_STORE_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Get Control of Your Grocery Inventory Now"
          description="The Best POS system for grocery stores improves waste reduction, eradicates billing mistakes, and improves daily efficiency."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={GROCERY_STORE_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance."
          description="An effective grocery POS system is one that ensures that all the transactions are logged and tracked correctly. User roles and permissions restrict access to sensitive information, which minimizes internal errors and theft."
          secondDescription="Accountability is also ensured by audit trails which aid in adherence to financial regulations. Live tracking tracks all the stock movements in a transparent manner, and automated reporting provides proper bookkeeping and financial assurance."
        />

        <ToolsSection
          heading={GROCERY_STORE_TOOLS_DATA.heading}
          description={GROCERY_STORE_TOOLS_DATA.paragraph}
          tools={GROCERY_STORE_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={GROCERY_STORE_TESTIMONIALS}
          heading={GROCERY_STORE_TESTIMONIAL_DATA.heading}
          paragraph={GROCERY_STORE_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={GROCERY_STORE_TESTIMONIAL_DATA.secondHeading}
          secondDescription={GROCERY_STORE_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={GROCERY_STORE_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={GROCERY_STORE_TESTIMONIAL_DATA.whyChooseDescription}
          features={GROCERY_STORE_TESTIMONIAL_FEATURES}
          iconSet="grocery"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="The POS system for our grocery store is aimed at ensuring the ease of daily operations and efficiency. The following are some of the responses to typical questions by grocery store owners."
            faqs={GROCERY_STORE_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Take Control of Your Grocery Store"
          description="Grocery stores lose thousands annually as a result of wastage, billing mistakes and stock mismanagement. Our POS system for grocery stores minimizes losses, increases the checkout speed and maintains the inventory records. Smarter tracking and quicker billing are useful to make each day more profitable."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
