import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/small-businesses-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/small-businesses-inventory-management-software/why-chose-banner.webp";

import {
  SMALL_BUSINESS_INVENTORY_KEY_FEATURES_CARDS,
  SMALL_BUSINESS_INVENTORY_WHY_CHOOSE_CARDS,
  SMALL_BUSINESS_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/smallBusinessesInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  SMALL_BUSINESS_INVENTORY_UNIFIED_CARDS,
  SMALL_BUSINESS_INVENTORY_UNIFIED_HEADING,
  SMALL_BUSINESS_INVENTORY_UNIFIED_PARAGRAPH,
  SMALL_BUSINESS_INVENTORY_WORKFLOW_DATA,
  SMALL_BUSINESS_INVENTORY_TESTIMONIALS,
  SMALL_BUSINESS_INVENTORY_FAQS,
  SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA,
  SMALL_BUSINESS_INVENTORY_TESTIMONIAL_FEATURES,
  SMALL_BUSINESS_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/smallBusinessesInventoryManagementSoftwareData";
import InventoryWorkflow from "@/components/pages/industries-page/InventoryWorkflow";
import IndustriesTestimonial from "@/components/pages/industries-page/IndustriesTestimonial";
import IndustriesFeaturesSection from "@/components/pages/industries-page/IndustriesFeaturesSection";
import ToolsSection from "@/components/pages/landing-page/ToolsSection";
import VoicesRealBusiness from "@/components/pages/landing-page/VoicesRealBusiness";
import SecurityCompliance from "@/components/pages/industries-page/securityCompliance";
import IndustriesHardwareControl from "@/components/pages/industries-page/IndustriesHardwareControl";
import DisclaimerHotel from "@/components/pages/industries-page/DisclaimerHotel";

const Page = () => {
  return (
    <>
      <Script
        id="schema-small-business"
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
                "description": "Inventory management software for small businesses that tracks stock in real time, automates billing and reporting, manages multiple sales channels, and streamlines daily operations for retail stores, grocery shops, and small restaurants.",
                "featureList": [
                  "Real-time inventory updates after every sale, purchase, or return",
                  "Barcode scanning for accurate product tracking",
                  "Warehouse and multi-location inventory control",
                  "Billing and invoicing connected to inventory",
                  "Reporting and inventory insights",
                  "Omnichannel sales integration with POS, online store, and delivery platforms",
                  "Unified dashboard for all inventory activities",
                  "Smart stock alerts to prevent shortages",
                  "Automated workflows for billing and stock management",
                  "Role-based access control for staff"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Inventory Management Software for Small Business | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/small-businesses-inventory-management-software",
                "description": "Manage stock, track orders, and streamline daily operations with Owners Inventory's inventory management software built for small businesses. Start free today.",
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
                      "name": "Small Business",
                      "item": "https://www.ownersinventory.com/industries/small-businesses-inventory-management-software"
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
                "name": "Inventory Management Software for Small Business",
                "description": "Inventory management software designed for small businesses to track stock in real time, automate billing and workflows, manage multiple sales channels, reduce overstocking, and generate accurate reports to support better business decisions.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/small-businesses-inventory-management-software",
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
                        "name": "Hassan R"
                      },
                      "reviewBody": "We were struggling to keep our inventory organized as our business grew. Owners Inventory gave us a structured way to handle stocks without making things complicated. It is simple to use and perfectly supports our operations efficiently.",
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
                        "name": "Anabiya K"
                      },
                      "reviewBody": "Managing inventory across different product categories used to take a lot of time. With Owners Inventory, everything feels more streamlined now.",
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
                        "name": "Rebecca S"
                      },
                      "reviewBody": "The system helped us stay organized without adding extra workload. It just perfectly fits our workflow.",
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
                    "name": "How long does it take to set up inventory management software?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The setup time of Owners Inventory depends on your business size. However, it is easy to set up for most businesses. You can quickly add products and categories while tracking other operations without disrupting your existing workflow."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage different product types under one system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, our inventory software allows you to organize different product types with categories, making it easier to handle varied items within one system."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the software support pricing management for products?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, it allows you to update product pricing within the system. It helps maintain pricing consistency across stores and online platforms while ensuring accurate billing during checkout procedures."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does inventory software help during busy sales periods?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The software keeps stocks updated automatically, allowing businesses to handle high transaction volumes without losing track of inventory or creating confusion in records."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I customize the system based on my business needs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, our inventory management system offers flexibility. It allows businesses to adjust workflows, categories, and processes based on their unique operational requirements."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Small Business Inventory Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines small business inventory management from product setup to performance review and restocking.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Product Catalog Setup",
                    "text": "Products are added to the system with categorization including variants, pricing, and opening stock quantities. Every item is organized in one place, making it easy for staff to find items and manage everything accurately, which speeds up the sales process."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Connect Sales Channels",
                    "text": "The system links POS, online store, and delivery platforms to a single inventory system. All channels use the same stock so sales from any source are recorded instantly without creating separate records, reducing reliance on manual processes."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Sales Processing and Stock Updates",
                    "text": "The system automatically adjusts inventory levels whenever sales occur. This ensures accurate tracking of stock levels while helping businesses avoid human errors and keeping operational activities streamlined."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Stock Coordination",
                    "text": "Incoming orders are processed efficiently while inventory is checked for availability. This helps small businesses fulfill orders on time and maintain proper coordination between stock levels and customer demands."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Performance Review and Restock",
                    "text": "Built-in reports show which products are selling well, which are slow-moving, and where stock levels stand. This ensures accurate restock decisions and better order planning while helping businesses grow without guesswork and with fewer losses."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
        title="Inventory Management Software for Small Businesses for Better Task Control"
        description="Running a small business requires simple and reliable control over daily operations to boost efficiency. Our inventory management software tracks inventory, manages stock levels, and streamlines daily business tasks. The software is built to save time, whether you run a retail store, a grocery shop, or a small restaurant. It improves accuracy and supports better business decisions."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={SMALL_BUSINESS_INVENTORY_UNIFIED_HEADING}
        paragraph={SMALL_BUSINESS_INVENTORY_UNIFIED_PARAGRAPH}
        cards={SMALL_BUSINESS_INVENTORY_UNIFIED_CARDS}
        iconSet="smallBusinessInventory"
      />

      <WhyChoosePOS
        heading= "How Owners Inventory Software Solves These Challenges"
        paragraph="Owners Inventory is designed to simplify small business operations by providing real-time updates and visibility. It aligns business processes and maintains operational efficiency without complexity."
        cards={SMALL_BUSINESS_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="smallBusinessInventory"
      />

      <KeyHighlights
        heading="Key Features of Owners Inventory that Improve Small Business Tasks"
        features={SMALL_BUSINESS_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={SMALL_BUSINESS_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={SMALL_BUSINESS_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={SMALL_BUSINESS_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title= "Next Step for Small Business Growth"
        description= "Switch to a structured inventory management software and reduce reliance on scattered records. Our system helps small businesses stay organized, reduce errors, and improve daily operational clarity."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={SMALL_BUSINESS_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description= "Access to inventory data is controlled based on staff roles. Each transaction is recorded with a clear audit trail, making it easy to view activities and identify errors. It ensures that sensitive business data is protected."
        secondDescription="The system maintains accurate financial records and supports internal accountability across daily operations."
      />
      
       <ToolsSection
        heading={SMALL_BUSINESS_INVENTORY_TOOLS_DATA.heading}
        description={SMALL_BUSINESS_INVENTORY_TOOLS_DATA.paragraph}
        tools={SMALL_BUSINESS_INVENTORY_TOOLS_DATA.tools}
      /> 

      <IndustriesTestimonial
        testimonials={SMALL_BUSINESS_INVENTORY_TESTIMONIALS}
        heading={SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={SMALL_BUSINESS_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={SMALL_BUSINESS_INVENTORY_TESTIMONIAL_FEATURES}
        iconSet="smallBusinessInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="The following are some of the important questions that are asked about our inventory management software."
          faqs={SMALL_BUSINESS_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>

      <IndustriesHardwareControl
        title= "Build a More Organized and Reliable Business Workflow"
        description= "Move away from scattered processes and bring consistency into how your inventory is handled. Create a smoother workflow, reduce daily friction, and support steady business growth with a system that keeps everything aligned."
        ctaDesc="Start Today"
      />
    </div>
    </>
  );
};

export default Page;
