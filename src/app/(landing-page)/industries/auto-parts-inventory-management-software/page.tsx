import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/auto-parts-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/auto-parts-inventory-management-software/why-chose-banner.webp";

import {
  AUTO_PARTS_INVENTORY_KEY_FEATURES_CARDS,
  AUTO_PARTS_INVENTORY_WHY_CHOOSE_CARDS,
  AUTO_PARTS_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/autoPartsInventoryManagementSoftwareData";

import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import dynamic from "next/dynamic";

const VoicesRealBusiness = dynamic(() => import("@/components/pages/landing-page/VoicesRealBusiness"), { ssr: true });
const IndustryUnifiedPlatform = dynamic(() => import("@/components/pages/industries-page/IndustryUnifiedPlatform"), { ssr: true });
const WhyChoosePOS = dynamic(() => import("@/components/pages/features-page/point-of-sale/WhyChoosePOS"), { ssr: true });
const KeyHighlights = dynamic(() => import("@/components/pages/features-page/point-of-sale/KeyHighlights"), { ssr: true });
const InventoryWorkflow = dynamic(() => import("@/components/pages/industries-page/InventoryWorkflow"), { ssr: true });
const IndustriesCallToAction = dynamic(() => import("@/components/pages/industries-page/IndustriesCallToAction"), { ssr: true });
const IndustriesFeaturesSection = dynamic(() => import("@/components/pages/industries-page/IndustriesFeaturesSection"), { ssr: true });
const SecurityCompliance = dynamic(() => import("@/components/pages/industries-page/securityCompliance"), { ssr: true });
const ToolsSection = dynamic(() => import("@/components/pages/landing-page/ToolsSection"), { ssr: true });
const IndustriesTestimonial = dynamic(() => import("@/components/pages/industries-page/IndustriesTestimonial"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/pages/landing-page/FAQSection"), { ssr: true });
const IndustriesHardwareControl = dynamic(() => import("@/components/pages/industries-page/IndustriesHardwareControl"), { ssr: true });

import {
  AUTO_PARTS_INVENTORY_UNIFIED_CARDS,
  AUTO_PARTS_INVENTORY_UNIFIED_HEADING,
  AUTO_PARTS_INVENTORY_UNIFIED_PARAGRAPH,
  AUTO_PARTS_INVENTORY_WORKFLOW_DATA,
  AUTO_PARTS_INVENTORY_TESTIMONIALS,
  AUTO_PARTS_INVENTORY_FAQS,
  AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA,
  AUTO_PARTS_INVENTORY_TESTIMONIAL_FEATURES,
  AUTO_PARTS_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/autoPartsInventoryManagementSoftwareData";

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
                "description": "Auto parts inventory management software that helps automotive businesses track stock, manage supplier orders, streamline repair workflows, and maintain real-time visibility across multiple locations.",
                "featureList": [
                  "Centralized auto parts inventory tracking",
                  "Parts compatibility management",
                  "Automated purchase orders",
                  "Real-time stock updates",
                  "Barcode inventory tracking",
                  "Supplier purchase management",
                  "Multi-channel order monitoring",
                  "Stock adjustment control",
                  "Customer order management",
                  "Smart business reporting"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Auto Parts Inventory Management Software | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/auto-parts-inventory-management-software",
                "description": "Track auto parts stock in real time, manage supplier orders, and streamline multi-location workflows with Owners Inventory's auto parts inventory management software.",
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
                      "name": "Auto Parts",
                      "item": "https://www.ownersinventory.com/industries/auto-parts-inventory-management-software"
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
                "name": "Auto Parts Inventory Management Software",
                "description": "Inventory management software designed for auto parts stores and automotive businesses to track vehicle parts, manage supplier orders, handle bulk orders, and maintain real-time stock visibility across multiple locations.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/auto-parts-inventory-management-software",
                "image": "https://www.ownersinventory.com/images/auto-parts-inventory-software.png",
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
                        "name": "Jason Miller"
                      },
                      "reviewBody": "We used to lose track between our shop and the warehouse all the time. Since switching to Owners Inventory, everything is organized and easy to find. It has made our daily operations smoother.",
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
                        "name": "Brandon Clark"
                      },
                      "reviewBody": "What I like most is how simple it is to keep track of inventory without spreadsheets. I can quickly check what is available and make decisions without second-guessing.",
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
                        "name": "Anthony Rodriguez"
                      },
                      "reviewBody": "Their system has helped us stay more consistent and manage bulk orders effectively during busy weeks. Truly amazing and reliable inventory management software.",
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
                    "name": "How long does it take to set up the system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The setup of Owners Inventory is quite simple because of its navigation and easy-to-understand features. You can set up your automotive inventory quickly and start organizing data right away."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I migrate my existing inventory data into the system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, Owners Inventory allows you to import existing data using Excel or CSV files. This helps you transfer data without manual entry."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the system handle damaged or returned parts?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can maintain records of returns, defective items, and adjustments separately, ensuring inventory accuracy while keeping proper reports for audits or supplier communication."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does it improve overall business efficiency?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The system automates inventory tracking, order processing, and reporting. It provides a unified dashboard to view store activities without switching systems. Owners Inventory reduces manual work, minimizes errors, and streamlines operations while enhancing business efficiency."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is the software suitable for large auto parts businesses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, our system is designed to handle large inventories of auto parts stores. It efficiently manages items, orders, sales, and returns, which makes it best for large automotive stores."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Auto Parts Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines auto parts inventory management from purchase orders to reporting and optimization.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Managing Purchase Orders",
                    "text": "The system creates purchase orders based on demand, supplier schedules, and low stock triggers. It helps order parts efficiently, tracks incoming shipments, and ensures that the right automotive parts are received on time without manual follow-ups."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Organizing Inventory",
                    "text": "After items are received, they are categorized within the inventory system based on part name, compatibility, functionality, and price. This structured storage improves inventory tracking while ensuring correct shelf placement and easy part locating."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Real-time Updates",
                    "text": "With a real-time dashboard, the system provides updates relevant to inventory management, stock levels, sales, returns, and delivery. This eliminates dependency on manual reports and provides complete visibility of parts in stock."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Processing Sales and Repair Orders",
                    "text": "The system handles bulk requests, retail transactions, and repair orders within a single workflow. Each order is processed with accurate part selection ensuring compatibility, improving efficiency in repair shops and ensuring faster delivery for customers."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Reporting and Inventory Optimization",
                    "text": "The system generates detailed reports of store activities based on stock movements, sales trends, supplier performance, and operational workflows. It makes it easy for automotive businesses to track demand patterns and optimize purchase decisions."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
      <SubIndustriesHero
        title="Auto Parts Inventory Management Software to Organize and Track Stocks"
        description="Our auto parts inventory management software provides smarter ways to track stock, manage inventory, and order parts efficiently. Get real-time visibility into stocks, automate purchases, and manage repair workflows or service orders. The software improves reporting with quick alerts. It simplifies operations and lets automotive store owners run their business with assurance."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Rated on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={AUTO_PARTS_INVENTORY_UNIFIED_HEADING}
        paragraph={AUTO_PARTS_INVENTORY_UNIFIED_PARAGRAPH}
        cards={AUTO_PARTS_INVENTORY_UNIFIED_CARDS}
        iconSet="autoStoreInventory"
      />

      <WhyChoosePOS
        heading="How Our Automotive Inventory Management Software Simplifies Operations"
        paragraph="Our automotive inventory management software is designed to streamline operations such as organizing auto parts and ensuring that the right parts are delivered to customers. It provides complete visibility of stocks from a single dashboard."
        cards={AUTO_PARTS_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="autoStoreInventory"
      />

      <KeyHighlights
        heading="Key Features of Our Automotive Parts Inventory Software"
        features={AUTO_PARTS_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={AUTO_PARTS_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={AUTO_PARTS_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={AUTO_PARTS_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Drive Efficiency for Your Auto Parts Business"
        description="Simplify your auto parts store’s workflows, track every component in real time, and reduce errors. Owner's Inventory keeps your stock perfectly synchronized. Request a demo today and start making better purchase decisions."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={AUTO_PARTS_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="Managing automotive inventory requires strict control over data and transactions. The system records every activity, ensuring transparency and reducing risks of errors or unauthorized changes. Role-based access improves security across operations. Owners' inventory provides a secure environment for automotive store operations."
        secondDescription="By improving data accuracy, the system supports better operational control and consistency."
      />

      <ToolsSection
        heading={AUTO_PARTS_INVENTORY_TOOLS_DATA.heading}
        description={AUTO_PARTS_INVENTORY_TOOLS_DATA.paragraph}
        tools={AUTO_PARTS_INVENTORY_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={AUTO_PARTS_INVENTORY_TESTIMONIALS}
        heading={AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={AUTO_PARTS_INVENTORY_TESTIMONIAL_FEATURES}
        iconSet="autoStoreInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="The Auto Parts Inventory Management Software is aimed at ensuring the ease of daily operations and efficiency. The following are some of the responses to typical questions by Auto Parts Inventory Management Software."
          faqs={AUTO_PARTS_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>

      <IndustriesHardwareControl
        title="Streamline Your Auto Parts Inventory with Confidence"
        description="Take full control of your stock, orders, and sales with a system built for modern automotive businesses. Improve accuracy and scale without stress."
        ctaDesc="Start Today"
      />
    </div>
    </>
  );
};

export default Page;
