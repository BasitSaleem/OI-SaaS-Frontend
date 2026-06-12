import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/retail-store-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/retail-store-inventory-management-software/why-chose-banner.webp";

import {
  RETAIL_STORE_INVENTORY_KEY_FEATURES_CARDS,
  RETAIL_STORE_INVENTORY_WHY_CHOOSE_CARDS,
  RETAIL_STORE_INVENTORY_FEATURE_CARDS
} from "@/constant/subindustries/retailStoreInventoryManagementSoftwareData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  RETAIL_STORE_INVENTORY_UNIFIED_CARDS,
  RETAIL_STORE_INVENTORY_UNIFIED_HEADING,
  RETAIL_STORE_INVENTORY_UNIFIED_PARAGRAPH,
  RETAIL_STORE_INVENTORY_WORKFLOW_DATA,
  RETAIL_STORE_INVENTORY_TESTIMONIALS,
  RETAIL_STORE_INVENTORY_FAQS,
  RETAIL_STORE_INVENTORY_TESTIMONIAL_DATA,
  RETAIL_STORE_INVENTORY_TESTIMONIAL_FEATURES,
  RETAIL_STORE_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/retailStoreInventoryManagementSoftwareData";
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
        id="schema-retail-inventory"
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
                "description": "Inventory management software for retail stores that helps track stock and sales in real time, automate billing, manage suppliers, handle multi-location inventory, and integrate online and offline sales channels.",
                "featureList": [
                  "Smart billing system with barcode scanning",
                  "Live inventory management with real-time stock updates",
                  "Purchase and supplier management",
                  "Product categorization by type, brand, size, and category",
                  "Customer and loyalty management",
                  "Expense and cash flow tracking",
                  "Multi-branch management",
                  "Advanced sales and inventory reporting",
                  "Role-based access control",
                  "Omnichannel sales integration"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Inventory Management Software for Retail Store | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/retail-store-inventory-management-software",
                "description": "Inventory management software for retail stores with real-time stock tracking, fast billing, multi-location control, and online sales integration. Try it free or book a demo today.",
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
                      "name": "Retail Store",
                      "item": "https://www.ownersinventory.com/industries/retail-store-inventory-management-software"
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
                "name": "Inventory Management Software for Retail Store",
                "description": "Retail inventory management software that helps store owners track stock in real time, automate billing with barcode scanning, manage multiple store locations, integrate online sales channels, and generate detailed sales and profit reports.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/retail-store-inventory-management-software",
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
                        "name": "Retail Customer 1"
                      },
                      "reviewBody": "The way we operate in our store is much easier now. Billing is fast and inventory is always current. This system has made a tremendous difference in the way we conduct business in our retail store.",
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
                        "name": "Retail Customer 2"
                      },
                      "reviewBody": "We needed a system that could be able to control various products and different categories. This software does that perfectly well because it is easy to use and gives clear reports on a daily basis.",
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
                        "name": "Retail Customer 3"
                      },
                      "reviewBody": "Before this system, we used to have stock errors and slow procedures. Now all are recorded in real time, time is saved, and store management is a lot easier.",
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
                    "name": "What is retail inventory management software and how does it help my store?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Retail inventory management software is a tool that helps you keep track of inventory, sales, and purchases all in one place. It automates stock updates, speeds up billing, and gives you real-time insights to help run your store more efficiently."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage multiple store locations with this software?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, you can use this software to manage more than one store from the same place. You can see stock levels, sales, pricing, and performance for each store all at the same time from a single dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the software support barcode scanning and fast billing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the software supports barcode scanning and smart product search to make checkout faster. This reduces customer wait times and improves the overall shopping experience in your retail store."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I integrate my online store with this system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the software works with ecommerce platforms so you can manage products sold in your physical store and online from one place. Stock numbers stay up to date whether someone buys in person or online."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Will I get reports and insights to improve my business?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the software provides detailed reports on sales, inventory, revenue, and profitability. These reports help you make better decisions, plan stock purchases, and grow your retail business."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Retail Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines retail inventory management from procurement to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Inventory Procurement",
                    "text": "Retailers purchase products based on customer demand and current trends. Each item is checked for quality, quantity, and accuracy before being added to the inventory system."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Stock Organization",
                    "text": "Stock levels are updated every time a transaction happens. This gives a real-time picture of what is available in inventory across all store locations."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Inventory Tracking",
                    "text": "When sales are made, the inventory gets updated automatically. This ensures that stock levels are always accurate whether orders are made in-store or online."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Order Processing",
                    "text": "Sales transactions automatically update inventory while ensuring accurate order handling for both in-store and online purchases, reducing errors and improving fulfillment speed."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Reporting and Analysis",
                    "text": "The system provides detailed reports on product performance, sales trends, and profitability. This helps retailers make smarter decisions about inventory planning and stock purchasing."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Inventory Management Software for Retail Store That Simplifies Operations"
          description="Managing a store is a big job that requires being accurate, fast and having complete control over stock and sales. Our inventory management software for stores helps make operations smooth and efficient. It also tracks stock automatically and handles sales in one smart system."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Rated on Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={RETAIL_STORE_INVENTORY_UNIFIED_HEADING}
          paragraph={RETAIL_STORE_INVENTORY_UNIFIED_PARAGRAPH}
          cards={RETAIL_STORE_INVENTORY_UNIFIED_CARDS}
          iconSet="retailInventory"
        />

        <WhyChoosePOS
          heading="How Our Inventory Management Software Solves These Challenges"
          paragraph="Our retail inventory software connects stock, sales, and reporting into one automated system, ensuring accuracy, efficiency, and better control over daily operations."
          cards={RETAIL_STORE_INVENTORY_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="retailInventory"
        />

        <KeyHighlights
          heading="Key Features of Our Retail Inventory Management Software"
          features={RETAIL_STORE_INVENTORY_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={RETAIL_STORE_INVENTORY_WORKFLOW_DATA.heading}
          paragraph={RETAIL_STORE_INVENTORY_WORKFLOW_DATA.paragraph}
          steps={RETAIL_STORE_INVENTORY_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Manage Your Retail Store Efficiently"
          description="The system is designed to improve accuracy, reduce errors and make store operations more efficient. Retailers can manage their store with our software. It helps them to increase efficiency and make their store operations smooth."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={RETAIL_STORE_INVENTORY_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance."
          description="Security, accuracy, and compliance are crucial for businesses. Every transaction is recorded securely with time-stamped data. This ensures transparency and accountability in all transactions."
          secondDescription="The point of sale system has role-based access control. This means authorized staff can access information. Automated processes maintain inventory records."
        />

        <ToolsSection
          heading={RETAIL_STORE_INVENTORY_TOOLS_DATA.heading}
          description={RETAIL_STORE_INVENTORY_TOOLS_DATA.paragraph}
          tools={RETAIL_STORE_INVENTORY_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={RETAIL_STORE_INVENTORY_TESTIMONIALS}
          heading={RETAIL_STORE_INVENTORY_TESTIMONIAL_DATA.heading}
          paragraph={RETAIL_STORE_INVENTORY_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={RETAIL_STORE_INVENTORY_TESTIMONIAL_DATA.secondHeading}
          secondDescription={RETAIL_STORE_INVENTORY_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={RETAIL_STORE_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={RETAIL_STORE_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
          features={RETAIL_STORE_INVENTORY_TESTIMONIAL_FEATURES}
          iconSet="retailInventory"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="The Inventory Management Software for Retail Store  is aimed at ensuring the ease of daily operations and efficiency. The following are some of the responses to typical questions by Inventory Management Software for Retail Store."
            faqs={RETAIL_STORE_INVENTORY_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Ready to Simplify Your Retail Store?"
          description="Get rid of inefficiencies and be confident in controlling your inventory. With precise tracking of stock, quick billing and more, it all comes together to assist you in operating a more profitable retail business."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
