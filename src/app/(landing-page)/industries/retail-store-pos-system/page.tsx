import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/retail-store-pos/retail-store-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/retail-store-pos/retail-store-why-chose-banner.webp";

import {
  RETAIL_STORE_KEY_FEATURES_CARDS,
  RETAIL_STORE_WHY_CHOOSE_CARDS,
  RETAIL_STORE_FEATURE_CARDS
} from "@/constant/subindustries/posRetailStoreData";


import TrustedBySection from "@/components/common-components/TrustedBySection";
import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  RETAIL_STORE_UNIFIED_CARDS,
  RETAIL_STORE_UNIFIED_HEADING,
  RETAIL_STORE_UNIFIED_PARAGRAPH,
  RETAIL_STORE_WORKFLOW_DATA,
  RETAIL_STORE_TESTIMONIALS,
  RETAIL_STORE_FAQS,
  RETAIL_STORE_TESTIMONIAL_DATA,
  RETAIL_STORE_TESTIMONIAL_FEATURES,
  RETAIL_STORE_TOOLS_DATA,
} from "@/constant/subindustries/posRetailStoreData";
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
        id="schema-retail-pos"
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
                "description": "POS software for small retail stores that simplifies billing, inventory management, employee tracking, multi-payment processing, and reporting from one centralized dashboard. Real-time stock updates, fast checkout, customer loyalty, and cloud-secured data for everyday small retail operations.",
                "featureList": [
                  "Smart real-time inventory tracking",
                  "Fast and error-free billing with barcode scanning",
                  "Clear sales reports and business insights",
                  "Employee performance and shift management",
                  "Multiple payment options (cash, card, digital)",
                  "Centralized control across multiple devices",
                  "Customer management and loyalty programs",
                  "Low-stock alerts and notifications",
                  "Barcode and label printing",
                  "Daily expense tracking",
                  "Cloud backup and encrypted security",
                  "Promotions and discount management"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Small Retail Stores | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/retail-store-pos-system",
                "description": "Manage billing, inventory, employees, and payments from one dashboard with Owners Inventory's POS system for small retail stores. Faster checkouts, smarter stock control, and clear sales insights for growing shops.",
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
                      "name": "Small Retail Stores",
                      "item": "https://www.ownersinventory.com/industries/retail-store-pos-system"
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
                "name": "POS System for Small Retail Stores",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "POS software designed for small retail stores to handle billing, real-time inventory tracking, multiple payment methods, employee management, customer loyalty, expense tracking, and centralized reporting from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/retail-store-pos-system",
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
                        "name": "Ayesha"
                      },
                      "reviewBody": "Owners Inventory POS changed how we manage our store. Billing is far quicker, and keeping track of stock is easy. It saves me a lot of time each day.",
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
                        "name": "Ellen"
                      },
                      "reviewBody": "Now our boutique moves so smoothly. All inventory notifications, sales data, and employee tracking are centralized. It actually makes us plan more and helps us avoid errors.",
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
                        "name": "Sara"
                      },
                      "reviewBody": "Since we began using the POS system of Owners Inventory, everything is in one place. I can use the real-time stock reporting and sales data to make smarter decisions on a daily basis. It actually seems like the system is working with me.",
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
                        "name": "Bilal"
                      },
                      "reviewBody": "Our boutique has increased the pace after we adopted this POS. Billing is fast, stock management is easy, and even monitoring staff performance is easier. Customers can feel the difference in quicker checkouts.",
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
                    "name": "What makes this POS suitable for small retail stores?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "This is a small retail POS system built for small shops. It is easy to operate with minimal setup and manages billing, inventory, and staff effectively. Small retailers receive all the necessary features without the need to purchase complicated extras."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage inventory easily with this system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The POS shows real-time inventory changes and provides low-stock notifications. You can trace items, view best sellers, and prevent overstocking or shortages, making inventory management simple and error-free."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it support multiple payment methods?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system accepts cash, card, and digital payments within seconds. Customers enjoy a smooth checkout process and store owners can handle all forms of payment without errors."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I access reports and insights remotely?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can check sales, inventory, and employee performance from anywhere. The POS offers easy-to-read reports that help you make informed decisions even when you are not physically present in the store."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is this POS suitable for shops with a small budget?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. This is one of the most suitable small business POS systems for small retail stores, offering high-quality features at a low cost so small retailers get a professional system without overspending."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Small Retail Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines small retail store inventory management from product acquisition to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Inventory Acquisition",
                    "text": "Store owners source products based on demand and stock requirements. Each item is checked for quality and quantity before being added to the system, ensuring accurate inventory records from the beginning."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Stock Organization and Storage",
                    "text": "Products are organized on shelves or storage areas according to category, type, or usage. Proper labeling and arrangement make it easier for staff to locate items quickly, reducing errors and saving time."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Inventory Tracking",
                    "text": "All stock movements, including sales, returns, and adjustments, are updated in real time. This allows store owners to always have an accurate view of available inventory and avoid stock discrepancies."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Supplier and Purchasing",
                    "text": "Manage suppliers efficiently by creating purchase orders and tracking deliveries. Keeping records of supplier performance, pricing, and lead times helps ensure timely restocking and better purchasing decisions."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Order Fulfillment",
                    "text": "As products are sold, the system automatically updates inventory levels. This ensures accurate order handling, reduces manual errors, and improves the overall customer experience."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reporting and Analysis",
                    "text": "Detailed reports provide insights into stock movement, fast and slow-selling products, and overall profitability. These insights help small store owners make smarter decisions about restocking, pricing, and inventory optimization."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="The Best POS System for Small Retail Stores"
          description="Running a small shop requires speed, control, and accuracy. Our POS system for small retail store owners is designed to simplify billing, inventory management, employee tracking, and reporting in one centralized system. Instead of juggling spreadsheets or manual registers, retailers can manage their entire store from a single dashboard."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={RETAIL_STORE_UNIFIED_HEADING}
          paragraph={RETAIL_STORE_UNIFIED_PARAGRAPH}
          cards={RETAIL_STORE_UNIFIED_CARDS}
          iconSet="retail"
        />

        <WhyChoosePOS
          heading="How Our POS System for Small Retail Stores Solves These Challenges?"
          paragraph="Our POS system for small retail stores centralizes billing, inventory, payments, reports, and employee management, giving owners full control and reducing operational confusion."
          cards={RETAIL_STORE_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="retail"
        />

        <KeyHighlights
          heading="Our Key Features"
          features={RETAIL_STORE_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={RETAIL_STORE_WORKFLOW_DATA.heading}
          paragraph={RETAIL_STORE_WORKFLOW_DATA.paragraph}
          steps={RETAIL_STORE_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Manage Your Small Retail Business Today"
          description="Control your store efficiently with the best POS system for small retail stores. Retailers using our best point of sale software for small retail business report faster checkouts, smarter inventory management, and happier customers every day."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={RETAIL_STORE_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance"
          description="The security of a POS system is a key factor when choosing one for a small retail store. Our system uses encrypted transaction processing and secure cloud storage to protect sensitive data about customers and stores. Backups are automatically created to ensure that your business data is safe, even if the hardware fails. Access controls based on roles prevent unauthorized use of the system and maintain operational integrity."
          secondDescription="The POS system is designed to be simple and easy to use, but still offers enterprise-level security. Retailers must have confidence that each transaction is accurately and securely recorded. As the best point of sale software for small retailers, our platform ensures accurate financial reporting, compliance-ready records, and protected payment processing. This level of reliability is the reason why many businesses consider this to be the best small business POS software for long-term operation stability."
        />

        <ToolsSection
          heading={RETAIL_STORE_TOOLS_DATA.heading}
          description={RETAIL_STORE_TOOLS_DATA.paragraph}
          tools={RETAIL_STORE_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={RETAIL_STORE_TESTIMONIALS}
          heading={RETAIL_STORE_TESTIMONIAL_DATA.heading}
          paragraph={RETAIL_STORE_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={RETAIL_STORE_TESTIMONIAL_DATA.secondHeading}
          secondDescription={RETAIL_STORE_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={RETAIL_STORE_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={RETAIL_STORE_TESTIMONIAL_DATA.whyChooseDescription}
          features={RETAIL_STORE_TESTIMONIAL_FEATURES}
          iconSet="retail"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="Our POS system Small Retail Stores is designed to make daily operations smooth and easy."
            secondParagraph="Here are answers to some common questions from POS system Small Retail Stores owners."
            faqs={RETAIL_STORE_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Boost Your Store Today"
          description="Take control of your small retail business with the best POS system for small retail stores. Retailers using our best point of sale software for small retail business report 30% faster checkouts and happier customers every day."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
