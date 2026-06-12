import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/pos-hardware/hardware-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/pos-hardware/why-chose-banner.webp";
// Remove unused finance data imports

import {
  POS_KEY_FEATURES_CARDS,
  Hardware_WHY_CHOOSE_CARDS,
  HARDWARE_FEATURE_CARDS
} from "@/constant/subindustries/posHardwareData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  HARDWARE_UNIFIED_CARDS,
  HARDWARE_UNIFIED_HEADING,
  HARDWARE_UNIFIED_PARAGRAPH,
  HARDWARE_WORKFLOW_DATA,
  HARDWARE_TESTIMONIALS,
  HARDWARE_FAQS,
  HARDWARE_TESTIMONIAL_DATA,
  HARDWARE_TESTIMONIAL_FEATURES,
  HARDWARE_TOOLS_DATA,
} from "@/constant/subindustries/posHardwareData";
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
        id="schema-hardware"
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
                "description": "Hardware store POS system that handles thousands of SKUs with fast barcode billing, real-time inventory tracking, multi-unit and variant support, supplier and purchase order management, customer credit handling, online sales integration, and centralized control across multiple branches.",
                "featureList": [
                  "Fast and accurate barcode billing",
                  "Live inventory management with automatic stock updates",
                  "Purchase order and supplier management",
                  "Multi-unit and variant support for sizes, materials, and packaging",
                  "Customer profiles and credit management",
                  "Expense and cash flow tracking",
                  "Online commerce with synced inventory",
                  "Unified multi-branch control from one dashboard",
                  "Smart sales, stock, and profit reports",
                  "Centralized price control across branches",
                  "Role-based staff permissions for cashiers, managers, and admins",
                  "Low-stock alerts and automated reordering"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Hardware Stores | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/hardware-pos-system",
                "description": "Run your hardware store with fast barcode billing, real-time stock tracking, supplier management, multi-branch control, and online sales sync using Owners Inventory's POS system for hardware stores.",
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
                      "name": "Hardware Stores",
                      "item": "https://www.ownersinventory.com/industries/hardware-pos-system"
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
                "name": "Hardware Store POS System",
                "description": "POS software designed for hardware stores to handle fast barcode billing, real-time inventory tracking, supplier and purchase order management, multi-unit and variant selling, customer credit, online ordering, and centralized multi-branch operations from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/hardware-pos-system",
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
                        "name": "Al-Asif Hardware"
                      },
                      "reviewBody": "The POS system has simplified our day-to-day work. Billing is quick and stock is never wrong. This system is making Al-Asif run well.",
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
                        "name": "Bright Homes"
                      },
                      "reviewBody": "This is the best POS we have tried previously. It keeps our store in order and assists us in decision-making. Since we started using it, Bright Homes has experienced fewer errors and increased its checkout speed.",
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
                        "name": "Hardware Store Owner"
                      },
                      "reviewBody": "Our hardware store required a system that could manage thousands of items and keep them in order. This POS provides exactly that. It is easy for staff to use and provides daily reports.",
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
                        "name": "Tools & Supplies Retailer"
                      },
                      "reviewBody": "Before using this system, I was concerned about mistakes and wasted time. Now all sales and stock updates are monitored flawlessly. It saves time, minimizes errors, and makes running the store less stressful. I would strongly recommend it to anyone who wants a reliable hardware store POS software.",
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
                    "name": "What is a POS system for a hardware store?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A hardware store POS system is software that helps manage sales, inventory, and customers all in a single location. It keeps stock in order and supports prompt billing, allowing stores to trace items easily and minimize mistakes."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can this POS system handle large inventories?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. It can handle thousands of products with various units, sizes, and variants. Stock is automatically updated after every sale or purchase, helping stores prevent errors and stockouts."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is the system easy to use for staff?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The interface is easy to navigate and use for any staff member. Billing, inventory, and reporting tasks can be performed quickly without extensive training."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it provide reports and insights?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system provides clear sales, profit, and stock reports. Store owners can see what sells quickly and what needs replenishment, with real-time data supporting better decisions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can multiple staff members use the system safely?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. User roles and permissions protect data. Access is granted to cashiers, managers, and admins according to their roles, preventing unauthorized changes to important records."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Hardware Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines hardware store inventory management from acquisition to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Inventory Acquisition",
                    "text": "Owners begin by ordering products from reliable suppliers based on demand and inventory levels. Every item received is checked for quality and quantity, then entered into the system for accurate tracking."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Stock Organization and Storage",
                    "text": "Products are kept on shelves, in bins, or in warehouses based on type, size, or category. Proper labeling and organization make items easy to find, save staff time, and eliminate stock confusion."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Inventory Tracking",
                    "text": "All inventory movements such as sales, transfers, and returns are updated in real time, ensuring owners always have accurate visibility of stock levels."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Supplier and Purchasing",
                    "text": "Owners can manage multiple suppliers effectively by creating purchase orders and tracking deliveries. Maintaining records of lead times, prices, and supplier performance ensures timely stock replenishment."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Order Fulfillment",
                    "text": "When products are sold or allocated, the inventory system updates automatically. Orders are picked, packed, and shipped accurately, reducing errors and improving customer satisfaction."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reporting and Analysis",
                    "text": "Periodic reports provide insights into stock movement, fast and slow-moving products, and profitability. Owners can analyze trends to make smarter purchasing and inventory decisions."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="POS System for Hardware Stores That Controls Inventory"
          description="Run your hardware store with speed, accuracy, and full control with Owners Inventory, the ultimate POS system for hardware stores. Every sale and stock update stays synced in one smart POS. Designed for busy stores that need quick billing and real-time inventory tracking."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Rated on Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={HARDWARE_UNIFIED_HEADING}
          paragraph={HARDWARE_UNIFIED_PARAGRAPH}
          cards={HARDWARE_UNIFIED_CARDS}
          iconSet="hardware"
        />

        <WhyChoosePOS
          heading="How Our Inventory Software Solves These Challenges"
          paragraph="The Owners Inventory removes operational confusion by linking sales, stock, suppliers and reports into a single intelligent system. All the activities in your store are automatically updated and kept."
          cards={Hardware_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="hardware"
        />

        <KeyHighlights
          heading="Our Key Features"
          features={POS_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={HARDWARE_WORKFLOW_DATA.heading}
          paragraph={HARDWARE_WORKFLOW_DATA.paragraph}
          steps={HARDWARE_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Get Control of Your Inventory Now"
          description="Our Best POS system for hardware stores will streamline your inventory, eliminate mistakes, and increase efficiency. Start now and discover how our solution can streamline your operations and make the most out of your business."
          ctaDesc="Request a Free Demo"
        />


        <IndustriesFeaturesSection features={HARDWARE_FEATURE_CARDS} />


        <SecurityCompliance
          title="Security, Accuracy, and Compliance."
          description="An effective inventory system will make sure that all the transactions are properly documented and monitored. The user roles and permissions restrict access to sensitive information, minimizing errors and theft. All details will be secured with us."
          secondDescription="It also keeps audit trails and aids in regulatory compliance, which keep businesses accountable and safeguard inventory and financial data. Live tracking will make sure that all the stock movements are documented in a transparent manner. Automated reports minimize errors in manual reports and enable store owners to keep accurate financial records with confidence."
        />


        <ToolsSection
          heading={HARDWARE_TOOLS_DATA.heading}
          description={HARDWARE_TOOLS_DATA.paragraph}
          tools={HARDWARE_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={HARDWARE_TESTIMONIALS}
          heading={HARDWARE_TESTIMONIAL_DATA.heading}
          paragraph={HARDWARE_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={HARDWARE_TESTIMONIAL_DATA.secondHeading}
          secondDescription={HARDWARE_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={HARDWARE_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={HARDWARE_TESTIMONIAL_DATA.whyChooseDescription}
          features={HARDWARE_TESTIMONIAL_FEATURES}
          iconSet="hardware"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="Our hardware store POS system is designed to make daily operations smooth and easy. Here are answers to some common questions from hardware store owners."
            faqs={HARDWARE_FAQS}
            buttonText="Start Now"
          />
        </div>

        <IndustriesHardwareControl
          title="Take Control of Your Hardware Store"
          description="Hardware stores lose an average of $30,000 per year due to stock errors and mismanagement. Our hardware store POS system helps reduce losses, keep inventory accurate, and speed up daily operations. Smarter tracking and faster billing make every day more profitable."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;