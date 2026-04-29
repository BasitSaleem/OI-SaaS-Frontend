import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/clothing-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/clothing-inventory-management-software/why-chose-banner.webp";

import {
  CLOTHING_INVENTORY_KEY_FEATURES_CARDS,
  CLOTHING_INVENTORY_WHY_CHOOSE_CARDS,
  CLOTHING_INVENTORY_FEATURE_CARDS
} from "@/constant/subindustries/clothingInventoryManagementSoftwareData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  CLOTHING_INVENTORY_UNIFIED_CARDS,
  CLOTHING_INVENTORY_UNIFIED_HEADING,
  CLOTHING_INVENTORY_UNIFIED_PARAGRAPH,
  CLOTHING_INVENTORY_WORKFLOW_DATA,
  CLOTHING_INVENTORY_TESTIMONIALS,
  CLOTHING_INVENTORY_FAQS,
  CLOTHING_INVENTORY_TESTIMONIAL_DATA,
  CLOTHING_INVENTORY_TESTIMONIAL_FEATURES,
  CLOTHING_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/clothingInventoryManagementSoftwareData";
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
                "description": "Clothing inventory management software that helps fashion retailers track stock by size, color, and style, manage billing, handle supplier orders, and sync inventory across in-store and online sales channels in real time.",
                "featureList": [
                  "Fast and accurate billing with barcode scanning",
                  "Live inventory management with real-time stock updates",
                  "Multi-unit and variant support for sizes, colors, and designs",
                  "Purchase management and supplier tracking",
                  "Customer and loyalty management",
                  "Expense and cash flow control",
                  "Online commerce integration",
                  "Unified multi-branch management",
                  "Smart sales and stock reports",
                  "Staff permissions and user roles"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Clothing Inventory Management Software | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/clothing-inventory-management-software",
                "description": "Clothing inventory management software with fast billing, stock tracking, and reports. Manage sizes, sales, and suppliers easily. Book a demo or try it for free.",
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
                      "name": "Clothing Inventory Management Software",
                      "item": "https://www.ownersinventory.com/industries/clothing-inventory-management-software"
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
                "name": "Clothing Inventory Management Software",
                "description": "Inventory management software designed for clothing and fashion retailers to track stock by size, color, and style, manage supplier orders, handle fast billing, sync online and in-store sales, and generate real-time reports.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/clothing-inventory-management-software",
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
                        "name": "Kirsten Larson"
                      },
                      "reviewBody": "Our daily operations are much easier now. Billing is fast and inventory is always accurate. This system has really improved how our clothing store runs.",
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
                        "name": "Linda K"
                      },
                      "reviewBody": "This is one of the best systems that we have used. It keeps everything organized and helps owners make better decisions. Our checkout process is now much faster.",
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
                        "name": "Michael R"
                      },
                      "reviewBody": "We needed a system to manage sizes and styles efficiently. This software does that. It is easy for staff to use and provides clear daily reports.",
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
                        "name": "James T"
                      },
                      "reviewBody": "Before using this system, we struggled with stock errors and delays. Now everything is tracked accurately. It saves time and makes managing the store stress-free.",
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
                    "name": "What is clothing inventory management software?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It is a tool that helps manage the stock, sales and customers all in one place. It helps keep track of the clothing items, including the sizes and types. It also makes the billing process easy."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can this software handle large inventories?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, it can handle thousands of products with sizes, colors and styles. The inventory is updated automatically after every sale."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for staff to use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the clothing inventory management software is easy to use. The staff can do billing, manage inventory and look at reports without needing to be trained."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it provide reports and insights?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the clothing inventory management software provides reports on sales, stock and profits in real time. This helps store owners make better decisions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can multiple users access the system securely?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the clothing inventory management software has role-based permissions. This means that different staff members can use the software while keeping business information safe."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Clothing Store Inventory",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines clothing inventory management from stock acquisition to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Inventory Acquisition",
                    "text": "Store owners source clothing items from trusted suppliers based on demand and seasonal trends. Every product is checked for quality, correct sizes, and accurate quantities before being added to the system."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Stock Organization and Storage",
                    "text": "The system organizes clothing items by type, size, color, or brand with clear labels. Items are arranged logically so staff can find products quickly, reducing confusion and saving time during busy hours."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Inventory Tracking",
                    "text": "Stock levels are updated continuously after every sale, return, or stock movement. Store owners always have full visibility into what is in stock across all locations and channels."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Supplier and Purchasing",
                    "text": "Store owners can create purchase orders, track deliveries, and monitor supplier performance directly in the system. This ensures clothing items are restocked on time without delays."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Order Fulfillment",
                    "text": "When a purchase is made in store or online, the inventory updates immediately. Orders are picked, packed, and processed accurately to ensure a smooth experience for every customer."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reporting and Analysis",
                    "text": "The system generates detailed reports showing what is selling well, what is slow-moving, and how much profit is being made. This helps store owners make smarter decisions about buying and pricing."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
      <SubIndustriesHero
        title="Clothing Inventory Management Software That Controls Stock"
        description="Run your clothing store with speed, accuracy, and complete control using Owners Inventory, the clothing inventory management software. Every sale and stock update is synced in one system. This software is designed for fashion retailers who need billing, size-based tracking and real-time inventory visibility."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Rated on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={CLOTHING_INVENTORY_UNIFIED_HEADING}
        paragraph={CLOTHING_INVENTORY_UNIFIED_PARAGRAPH}
        cards={CLOTHING_INVENTORY_UNIFIED_CARDS}
        iconSet="clothingInventory"
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges"
        paragraph="Owner’s Inventory simplifies clothing store operations by connecting sales, stock, suppliers, and reporting into one smart system. Every activity is automatically tracked and updated in real time."
        cards={CLOTHING_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
         iconSet="clothingInventory"
      />

      <KeyHighlights
        heading="Key Features of Our Clothing Inventory Management Software"
        features={CLOTHING_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={CLOTHING_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={CLOTHING_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={CLOTHING_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Get Control of Your Inventory Now"
        description="Our clothing inventory management software makes managing stock easier. It reduces mistakes and improves efficiency. Start today to simplify operations and improve performance."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={CLOTHING_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="The system ensures that all transactions are recorded and monitored accurately. It restricts data access to authorized staff only. This reduces mistakes and prevents unauthorized actions."
        secondDescription="The system keeps a record of all changes. This ensures compliance and accountability. Real-time tracking gives transparency into stock movements. Automated reports improve accuracy and reliability."
      />

      <ToolsSection
        heading={CLOTHING_INVENTORY_TOOLS_DATA.heading}
        description={CLOTHING_INVENTORY_TOOLS_DATA.paragraph}
        tools={CLOTHING_INVENTORY_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={CLOTHING_INVENTORY_TESTIMONIALS}
        heading={CLOTHING_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={CLOTHING_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={CLOTHING_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={CLOTHING_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={CLOTHING_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={CLOTHING_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={CLOTHING_INVENTORY_TESTIMONIAL_FEATURES}
         iconSet="clothingInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our Clothing Store inventory software is designed to make daily operations smooth and easy. Here are answers to some common questions from clothing store owners."
          faqs={CLOTHING_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Take Control of Your Clothing Store"
        description="Many clothing stores lose money because of mistakes with stock and inefficient ways of doing things. The clothing inventory management software helps reduce losses and improve accuracy. It also speeds up operations. The billing process is smarter and faster which leads to profitability and growth."
        ctaDesc="Start Today"
      />
    </div>
    </>
  );
};

export default Page;
