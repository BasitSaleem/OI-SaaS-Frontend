import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/furniture-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/furniture-inventory-management-software/why-chose-banner.webp";

import {
  FURNITURE_INVENTORY_KEY_FEATURES_CARDS,
  FURNITURE_INVENTORY_WHY_CHOOSE_CARDS,
  FURNITURE_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/furnitureInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  FURNITURE_INVENTORY_UNIFIED_CARDS,
  FURNITURE_INVENTORY_UNIFIED_HEADING,
  FURNITURE_INVENTORY_UNIFIED_PARAGRAPH,
  FURNITURE_INVENTORY_WORKFLOW_DATA,
  FURNITURE_INVENTORY_TESTIMONIALS,
  FURNITURE_INVENTORY_FAQS,
  FURNITURE_INVENTORY_TESTIMONIAL_DATA,
  FURNITURE_INVENTORY_TESTIMONIAL_FEATURES,
  FURNITURE_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/furnitureInventoryManagementSoftwareData";
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
                "description": "Furniture inventory management software that helps furniture businesses track stock in real time, manage product variations, handle billing, coordinate multi-location showrooms and warehouses, and integrate online and offline sales channels.",
                "featureList": [
                  "Real-time inventory tracking with size, material, and design variation support",
                  "Smart billing system with barcode scanning",
                  "Purchase and supplier management",
                  "Product categorization by category, type, and material",
                  "Customer and order management",
                  "Cost and cash flow monitoring",
                  "Multi-store and warehouse management",
                  "Advanced sales and inventory reporting",
                  "Role-based access control",
                  "Online and showroom sales integration"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Furniture Inventory Management Software | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/furniture-inventory-management-software",
                "description": "Track furniture stock in real time, manage product variations, coordinate multi-location showrooms, and integrate online sales with Owners Inventory's furniture inventory management software.",
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
                      "name": "Furniture",
                      "item": "https://www.ownersinventory.com/industries/furniture-inventory-management-software"
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
                "name": "Furniture Inventory Management Software",
                "description": "Inventory management software designed for furniture businesses to track stock across showrooms and warehouses in real time, manage product variations by size, material and design, handle billing, coordinate supplier orders, and integrate online and offline sales channels.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/furniture-inventory-management-software",
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
                        "name": "Furniture Customer 1"
                      },
                      "reviewBody": "Our process of producing furniture has become much more organized than previously. We are always aware of what materials we have in stock and what we need to order next, which has made our process much less confusing and has helped us plan better.",
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
                        "name": "Furniture Customer 2"
                      },
                      "reviewBody": "This system has greatly enhanced our overall efficiency. It has provided us with a well-structured approach to managing raw materials and finished furniture products. The reports are easy to comprehend and very helpful in planning and decision making.",
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
                        "name": "Furniture Customer 3"
                      },
                      "reviewBody": "We used to face a lot of problems with stock shortages and mismanagement before installing this system. Now all items are well-controlled in real time, which saves us time and effort and allows us to operate without difficulties.",
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
                    "name": "What is furniture inventory management software?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It is a system that assists in controlling raw materials, the production process, and finished furniture products altogether. It guarantees effective monitoring and control of inventory and production across all operations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can this software handle large-scale furniture manufacturing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, it can handle extensive inventories, multiple production lines, and complicated workflows with real-time updates across all locations and departments."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for staff to use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the system is easy and convenient. With minimum training, staff can handle production, inventory, and reports without needing advanced technical knowledge."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it provide reports and insights?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, it provides real-time reports on production, inventory, and costs to enable manufacturers and store owners to make informed decisions about procurement, pricing, and stock planning."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can multiple users access the system securely?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, role-based permissions enable access to the system by several users while preventing unauthorized access to sensitive business data."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Furniture Business Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines furniture inventory management from procurement to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Inventory Procurement",
                    "text": "Furniture is procured according to demand and market trends. Before adding products into inventory, they are inspected for quality and quantity to ensure accurate records from the start."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Stock Organization",
                    "text": "Each transaction is automatically updated in the inventory to provide a clear and accurate view of available stock across all showrooms and warehouse locations."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Inventory Tracking",
                    "text": "Inventory levels are updated in real time after every sale and return. Stock records remain accurate across all locations without relying on manual counting or spreadsheets."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Order Processing",
                    "text": "Orders are handled effectively and inventory is adjusted automatically for both showroom and online sales. This ensures accurate fulfillment and prevents stock mismatches."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Reporting and Analysis",
                    "text": "The system offers detailed information on product performance, sales trends, and profitability to assist furniture businesses in making smarter decisions about stock, pricing, and procurement."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Furniture Inventory Management System for Real-Time Stock Control"
        description="A furniture business needs accuracy, speed, and absolute control of inventory and sales. Furniture products are usually large, have various forms, and need to be tracked appropriately. Manual stock handling may cause errors, delays and loss of revenue. The furniture inventory management software makes life easier with the stock tracking, sales updates and reporting in one system."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={FURNITURE_INVENTORY_UNIFIED_HEADING}
        paragraph={FURNITURE_INVENTORY_UNIFIED_PARAGRAPH}
        cards={FURNITURE_INVENTORY_UNIFIED_CARDS}
        iconSet="furnitureInventory"
      />

      <WhyChoosePOS
        heading= "How Our Furniture Inventory Management Software Solves These Challenges"
        paragraph="Our furniture inventory software links stock, sales, and reporting into a single automated system enhancing accuracy, control and efficiency of operations."
        cards={FURNITURE_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="furnitureInventory"
      />

      <KeyHighlights
        heading="Key Features of Our Furniture Inventory Management Software"
        features={FURNITURE_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={FURNITURE_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={FURNITURE_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={FURNITURE_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title= "Start Efficiently Managing Your Furniture Business"
        description= "Your growth can be limited by manual tracking, mismatch of stock and delays in operations. Our inventory management software is a structured furniture inventory management system that helps you make accurate inventory management, order processing and have full visibility in your furniture business."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={FURNITURE_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy and Compliance."
        description= "All production and inventory activities are recorded effectively by the system. Only authorized personnel will have access, minimizing mistakes and unauthorized activities."
        secondDescription="It maintains a comprehensive audit trail for accountability and compliance. Real-time tracking improves stock and production tracking. Accuracy and reliability are improved by automated reporting."
      />
      
       <ToolsSection
        heading={FURNITURE_INVENTORY_TOOLS_DATA.heading}
        description={FURNITURE_INVENTORY_TOOLS_DATA.paragraph}
        tools={FURNITURE_INVENTORY_TOOLS_DATA.tools}
      /> 

      <IndustriesTestimonial
        testimonials={FURNITURE_INVENTORY_TESTIMONIALS}
        heading={FURNITURE_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={FURNITURE_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={FURNITURE_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={FURNITURE_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={FURNITURE_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={FURNITURE_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={FURNITURE_INVENTORY_TESTIMONIAL_FEATURES}
        iconSet="furnitureInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Here are some commonly asked questions about our furniture inventory management software to help you better understand how the system works."
          faqs={FURNITURE_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>

      <IndustriesHardwareControl
        title= "Improve Efficiency Across Your Furniture Business"
        description= "Stop losing time and money to manual errors and disorganized inventory. Simplify your workflow, improve accuracy, and keep your production running smoothly with smarter furniture inventory management. Get started now and take full control of your operations."
        ctaDesc="Start Today"
      />
    </div>
    </>
  );
};

export default Page;
