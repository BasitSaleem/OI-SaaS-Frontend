import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/construction-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/construction-inventory-management-software/why-chose-banner.webp";

import {
  CONSTRUCTION_INVENTORY_KEY_FEATURES_CARDS,
  CONSTRUCTION_INVENTORY_WHY_CHOOSE_CARDS,
  CONSTRUCTION_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/constructionInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  CONSTRUCTION_INVENTORY_UNIFIED_CARDS,
  CONSTRUCTION_INVENTORY_UNIFIED_HEADING,
  CONSTRUCTION_INVENTORY_UNIFIED_PARAGRAPH,
  CONSTRUCTION_INVENTORY_WORKFLOW_DATA,
  CONSTRUCTION_INVENTORY_TESTIMONIALS,
  CONSTRUCTION_INVENTORY_FAQS,
  CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA,
  CONSTRUCTION_INVENTORY_TESTIMONIAL_FEATURES,
  CONSTRUCTION_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/constructionInventoryManagementSoftwareData";
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
        id="schema-construction-inventory"
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
                "description": "Construction inventory management software that helps construction businesses track stock in real time, manage product variations, handle billing, coordinate multi-location showrooms and warehouses, and integrate online and offline sales channels.",
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
                "name": "Construction Inventory Management Software | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/construction-inventory-management-software",
                "description": "Track construction stock in real time, manage product variations, coordinate multi-location showrooms, and integrate online sales with Owners Inventory's construction inventory management software.",
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
                      "name": "Construction",
                      "item": "https://www.ownersinventory.com/industries/construction-inventory-management-software"
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
                "name": "Construction Inventory Management Software",
                "description": "Inventory management software designed for construction businesses to track stock across showrooms and warehouses in real time, manage product variations by size, material and design, handle billing, coordinate supplier orders, and integrate online and offline sales channels.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/construction-inventory-management-software",
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
                        "name": "Construction Customer 1"
                      },
                      "reviewBody": "Our process of producing construction has become much more organized than previously. We are always aware of what materials we have in stock and what we need to order next, which has made our process much less confusing and has helped us plan better.",
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
                        "name": "Construction Customer 2"
                      },
                      "reviewBody": "This system has greatly enhanced our overall efficiency. It has provided us with a well-structured approach to managing raw materials and finished construction products. The reports are easy to comprehend and very helpful in planning and decision making.",
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
                        "name": "Construction Customer 3"
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
                    "name": "What is construction inventory management software?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It is a system that assists in controlling raw materials, the production process, and finished construction products altogether. It guarantees effective monitoring and control of inventory and production across all operations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can this software handle large-scale construction manufacturing?",
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
                "name": "How Owners Inventory Manages Construction Business Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines construction inventory management from procurement to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Inventory Procurement",
                    "text": "Construction is procured according to demand and market trends. Before adding products into inventory, they are inspected for quality and quantity to ensure accurate records from the start."
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
                    "text": "The system offers detailed information on product performance, sales trends, and profitability to assist construction businesses in making smarter decisions about stock, pricing, and procurement."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Construction Inventory Management Software That Saves Money"
          description="Materials account for 40-50% of project costs, yet 10-15% of those materials are wasted. Owners Inventory helps construction companies reduce that waste by giving teams real-time visibility into what they have, where it is, and when to reorder, so every dollar spent on materials is accounted for. "
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={CONSTRUCTION_INVENTORY_UNIFIED_HEADING}
          paragraph={CONSTRUCTION_INVENTORY_UNIFIED_PARAGRAPH}
          cards={CONSTRUCTION_INVENTORY_UNIFIED_CARDS}
          iconSet="constructionInventory"
        />

        <WhyChoosePOS
          heading="How Owners Inventory Solves These Challenges"
          paragraph="Owners Inventory connects material tracking, purchase order management, site-level stock control, and supplier records into one system so construction teams always know what they have, what has been ordered, and what needs attention."
          cards={CONSTRUCTION_INVENTORY_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="constructionInventory"
        />

        <KeyHighlights
          heading="Key Features of Our Construction Inventory Management Software"
          features={CONSTRUCTION_INVENTORY_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={CONSTRUCTION_INVENTORY_WORKFLOW_DATA.heading}
          paragraph={CONSTRUCTION_INVENTORY_WORKFLOW_DATA.paragraph}
          steps={CONSTRUCTION_INVENTORY_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Manage Your Construction Inventory Efficiently"
          description="Construction companies using Owners Inventory report fewer material shortages, better control over project spending, and less time lost to manual stock tracking. Get started for free and see the difference it makes on your next project."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={CONSTRUCTION_INVENTORY_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance."
          description="Every stock movement, purchase order, and material adjustment in Owners Inventory is recorded with a timestamp and tied to the user who made the change. Nothing is edited or deleted without a record of it. This gives project owners a full audit trail across every site and every project without any extra effort from the team."
          secondDescription="Role-based access control means each person on the project only sees and does what their role requires. A site worker logging material usage cannot edit purchase orders or view financial reports. A procurement officer can manage supplier orders without accessing data from other projects. Access is assigned based on each person's role and kept within those boundaries."
        />

        <ToolsSection
          heading={CONSTRUCTION_INVENTORY_TOOLS_DATA.heading}
          description={CONSTRUCTION_INVENTORY_TOOLS_DATA.paragraph}
          tools={CONSTRUCTION_INVENTORY_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={CONSTRUCTION_INVENTORY_TESTIMONIALS}
          heading={CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA.heading}
          paragraph={CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA.secondHeading}
          secondDescription={CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
          features={CONSTRUCTION_INVENTORY_TESTIMONIAL_FEATURES}
          iconSet="constructionInventory"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="Have questions about Owners Inventory for construction? Here are answers to the most common questions from project owners, site managers, and procurement teams."
            faqs={CONSTRUCTION_INVENTORY_FAQS}
            buttonText="Start Now"
          />
        </div>

        <IndustriesHardwareControl
          title="Take Control of Your Construction Inventory Today"
          description="Construction companies using Owners Inventory report fewer material shortages, less money lost to waste, and better visibility across every active site. Start today and put your entire operation in one place."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
