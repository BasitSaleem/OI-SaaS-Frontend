import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/ecommerce-store-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/ecommerce-store-inventory-management-software/why-chose-banner.webp";

import {
  ECOMMERCE_INVENTORY_KEY_FEATURES_CARDS,
  ECOMMERCE_INVENTORY_WHY_CHOOSE_CARDS,
  ECOMMERCE_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/ecommerceStoreInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  ECOMMERCE_INVENTORY_UNIFIED_CARDS,
  ECOMMERCE_INVENTORY_UNIFIED_HEADING,
  ECOMMERCE_INVENTORY_UNIFIED_PARAGRAPH,
  ECOMMERCE_INVENTORY_WORKFLOW_DATA,
  ECOMMERCE_INVENTORY_TESTIMONIALS,
  ECOMMERCE_INVENTORY_FAQS,
  ECOMMERCE_INVENTORY_TESTIMONIAL_DATA,
  ECOMMERCE_INVENTORY_TESTIMONIAL_FEATURES,
  ECOMMERCE_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/ecommerceStoreInventoryManagementSoftwareData";
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
        id="schema-ecommerce"
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
                "description": "Ecommerce inventory management software that helps online businesses sync stock in real time, manage multi-channel orders, automate fulfillment, and prevent overselling across all platforms.",
                "featureList": [
                  "Real-time inventory sync across platforms",
                  "Centralized inventory management dashboard",
                  "Smart demand forecasting",
                  "Automated order processing",
                  "Multi-channel integration",
                  "Product and SKU management",
                  "Location and warehouse management",
                  "Returns management",
                  "Sales and inventory reports",
                  "Automated stock alerts"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Ecommerce Inventory Management Software | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/ecommerce-store-inventory-management-software",
                "description": "Sync ecommerce stock in real time, manage multi-channel orders, and automate fulfillment across all platforms with Owners Inventory's ecommerce inventory management software.",
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
                      "name": "Ecommerce",
                      "item": "https://www.ownersinventory.com/industries/ecommerce-store-inventory-management-software"
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
                "name": "Ecommerce Inventory Management Software",
                "description": "Inventory management software designed for ecommerce businesses to sync stock across multiple platforms in real time, manage orders, automate fulfillment, prevent overselling, and gain data-driven insights.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/ecommerce-store-inventory-management-software",
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
                        "name": "Ecommerce Customer 1"
                      },
                      "reviewBody": "Our inventory has been synchronized across platforms. We no longer have stock problems.",
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
                        "name": "Ecommerce Customer 2"
                      },
                      "reviewBody": "Order processing has become faster and more precise. We have saved a great deal of time. Managing multiple channels of sales is easy now. Everything is all in one place.",
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
                        "name": "Ecommerce Customer 3"
                      },
                      "reviewBody": "Our inventory is organized and clear. It has greatly improved our business operation.",
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
                    "name": "What is inventory management software for ecommerce?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ecommerce inventory management software is an online system which helps manage orders and sales on different platforms. The software automatically tracks inventory, updates inventory levels, and minimizes manual labor to make your online business run more efficiently."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can it handle multiple channels of sales?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the system can manage your mobile app, website, and marketplaces. Inventory is synced across platforms in real time so that you do not have to worry about issues such as overselling and stock mismatches."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it make the job of staff easy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the system is easy to use. Staff can learn to track orders, manage inventory, and make sales easily without needing any advanced technical knowledge. It saves time by reducing the training effort."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it provide insights and reports?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the system provides real-time information on stock, sales, and performance. This information helps you understand what products sell well, how often to stock up, and improve business decisions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system allow multiple users to access it?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the system includes role-based security. You can give different permissions for staff like administrators, managers, and operators. This keeps data secure and only allows authorized users to access information."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Ecommerce Inventory Operations",
                "description": "A step-by-step workflow showing how Owners Inventory automates ecommerce inventory management from stock acquisition to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Inventory Acquisition",
                    "text": "Products are added from suppliers based on demand. The system records each product for accurate tracking from the moment it enters the inventory."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Stock Organization and Storage",
                    "text": "The inventory is structured in a way that makes it easy to manage and find. Products are kept well-organized to reduce handling time and improve overall efficiency."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Inventory Tracking",
                    "text": "Stock is tracked in real time across all platforms and warehouses. Instant updates are made for sales, returns, and transfers to keep inventory always accurate."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Order Fulfillment",
                    "text": "All orders are accurately picked, packaged, and sent. The streamlined workflow reduces errors and increases speed to deliver orders faster and improve customer satisfaction."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Reporting and Analysis",
                    "text": "Detailed information on sales, inventory levels, and revenue is provided. Actionable insights help identify trends and make smarter business decisions."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
      <SubIndustriesHero
        title="Inventory Management System for Ecommerce Stores"
        description="The Owners Inventory eCommerce inventory management software is the software that helps you control your online business inventory. It helps you to manage your online store accurately and quickly. Our system tracks all sales, orders, and stock updates across various platforms. It's perfect for businesses who need to update their inventory in real-time and fulfill orders across multiple channels."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={ECOMMERCE_INVENTORY_UNIFIED_HEADING}
        paragraph={ECOMMERCE_INVENTORY_UNIFIED_PARAGRAPH}
        cards={ECOMMERCE_INVENTORY_UNIFIED_CARDS}
        iconSet="ecommerceStoreInventory"
      />

      <WhyChoosePOS
        heading="What Our Inventory Software Can Do to Help You"
        paragraph="This software can help you overcome these problems with its powerful features, such as:"
        cards={ECOMMERCE_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="ecommerceStoreInventory"
      />

      <KeyHighlights
        heading="Key Features of our Ecommerce Inventory Software"
        features={ECOMMERCE_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={ECOMMERCE_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={ECOMMERCE_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={ECOMMERCE_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Manage Your Online Store Smarter and Faster"
        description="Keep your inventory synced, reduce errors, and fulfill orders efficiently with a centralized system designed to support your growth."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={ECOMMERCE_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="It ensures accurate tracking of inventory and secure handling of data across all online operations. This system helps to maintain reliability and consistency."
      />

      <ToolsSection
        heading={ECOMMERCE_INVENTORY_TOOLS_DATA.heading}
        description={ECOMMERCE_INVENTORY_TOOLS_DATA.paragraph}
        tools={ECOMMERCE_INVENTORY_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={ECOMMERCE_INVENTORY_TESTIMONIALS}
        heading={ECOMMERCE_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={ECOMMERCE_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={ECOMMERCE_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={ECOMMERCE_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={ECOMMERCE_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={ECOMMERCE_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={ECOMMERCE_INVENTORY_TESTIMONIAL_FEATURES}
        iconSet="ecommerceStoreInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="The eCommerce inventory management software is aimed at ensuring the ease of daily operations and efficiency. The following are some of the responses to typical questions by eCommerce inventory management software."
          faqs={ECOMMERCE_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>

      <IndustriesHardwareControl
        title="Streamline Your Ecommerce Inventory with Confidence"
        description="Take full control of your stock, orders, and sales across all platforms with a system built for modern ecommerce businesses. Improve accuracy and scale without stress."
        ctaDesc="Start Today"
      />
    </div>
    </>
  );
};

export default Page;
