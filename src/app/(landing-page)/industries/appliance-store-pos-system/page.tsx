import React from "react";
import Script from "next/script";
const heroBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/hero-banner.webp";
const whyChoseBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/appliance-store-pos/why-chose-banner.webp";

import {
  APPLIANCE_STORE_KEY_FEATURES_CARDS,
  APPLIANCE_STORE_WHY_CHOOSE_CARDS,
  APPLIANCE_STORE_FEATURE_CARDS
} from "@/constant/subindustries/applianceStorePosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  APPLIANCE_STORE_UNIFIED_CARDS,
  APPLIANCE_STORE_UNIFIED_HEADING,
  APPLIANCE_STORE_UNIFIED_PARAGRAPH,
  APPLIANCE_STORE_WORKFLOW_DATA,
  APPLIANCE_STORE_TESTIMONIALS,
  APPLIANCE_STORE_FAQS,
  APPLIANCE_STORE_TESTIMONIAL_DATA,
  APPLIANCE_STORE_TESTIMONIAL_FEATURES,
  APPLIANCE_STORE_TOOLS_DATA,
} from "@/constant/subindustries/applianceStorePosData";
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
        id="schema-appliance-store"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "name": "Owners Inventory",
                "url": "https://ownersinventory.com",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "description": "Free trial available"
                },
                "description": "Appliance store POS system that manages large multi-brand product catalogs, tracks inventory in real time, handles warranty and service records, speeds up checkout with barcode scanning, automates stock replenishment, and centralizes sales, suppliers, and reporting across multiple locations from one dashboard.",
                "featureList": [
                  "Real-time inventory tracking across purchases, sales, transfers, and returns",
                  "Centralized product management for brands, models, and specifications",
                  "Fast checkout with barcode scanning and auto-billing",
                  "Warranty and after-sales service tracking",
                  "Automated stock replenishment alerts",
                  "Multi-location inventory management from one dashboard",
                  "Supplier and purchase order management",
                  "Role-based employee access control",
                  "Mobile-friendly store interface",
                  "Detailed sales, inventory, and profit reporting",
                  "Online and in-store order syncing"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Appliance Store POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/appliance-store-pos-system",
                "description": "Manage large multi-brand catalogs, track inventory, handle warranties, and speed up checkout with multi-location control using Owners Inventory's appliance store POS system.",
                "inLanguage": "en",
                "isPartOf": {
                  "@type": "WebSite",
                  "name": "Owners Inventory",
                  "url": "https://ownersinventory.com"
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://ownersinventory.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Industries",
                      "item": "https://ownersinventory.com/industries"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Appliance Store POS System",
                      "item": "https://ownersinventory.com/industries/appliance-store-pos-system"
                    }
                  ]
                }
              },
              {
                "@type": "Organization",
                "name": "Owners Inventory",
                "url": "https://ownersinventory.com",
                "logo": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Support",
                  "availableLanguage": "English",
                  "url": "https://ownersinventory.com/contact"
                },
                "sameAs": [
                  "https://www.facebook.com/ownersinventory/",
                  "https://www.instagram.com/ownersinventory/",
                  "https://www.linkedin.com/company/owners-inventory/"
                ]
              },
              {
                "@type": "Product",
                "name": "Appliance Store POS System",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "POS software designed for appliance stores to manage large multi-brand catalogs, track inventory in real time, handle warranty and service records, automate stock replenishment, manage suppliers, and run multi-location operations from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/appliance-store-pos-system",
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
                        "name": "Daniel H"
                      },
                      "reviewBody": "Managing appliance inventory used to be difficult, especially with multiple brands and models. This system keeps our stock accurate and organized at all times.",
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
                        "name": "Sarah M"
                      },
                      "reviewBody": "We can instantly see product availability and inventory levels, which has helped us avoid running out of products and deliver great customer service.",
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
                        "name": "Ahmed T"
                      },
                      "reviewBody": "Billing is much quicker these days, and our salespeople can complete transactions fast even during the busy shopping season.",
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
                        "name": "Jason R"
                      },
                      "reviewBody": "Our staff quickly learned how to use the system, and setup was simple, making product and sales management much easier.",
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
                    "position": 5,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Fatima K"
                      },
                      "reviewBody": "We have a few appliance stores in our business, and this system has helped us keep the same inventory accurate across all our stores.",
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
                    "position": 6,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Michael D"
                      },
                      "reviewBody": "Warranty tracking is now much more organized, and we can easily access customer purchase records to offer improved after-sales service.",
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
                    "position": 7,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Sophie L"
                      },
                      "reviewBody": "This appliance store POS system is an ideal solution for our needs. It is reliable, user-friendly, and lets us track our inventory and sales more efficiently.",
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
                    "name": "Can the system track inventory in real time?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. All inventory activities are updated automatically in real time. Records update on the fly for purchases, sales, returns, transfers, and incoming stock to keep levels accurate."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system support barcode scanning?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The appliance store POS supports barcode scanning for quick product identification, billing, stocktaking, stock verification, and sales."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage multiple appliance store locations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Multi-location management is supported. Owners and managers can view inventory, sales, transfers, and store performance for multiple stores from a single dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How quickly can I set up Owners Inventory for my appliance store?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most appliance stores can begin using the system within a few hours. Product catalogs, inventory records, supplier information, and customer data can be imported in bulk for a faster setup."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can different employees have different access levels?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Role-based permissions let owners assign different access levels for salespeople, managers, inventory supervisors, accountants, and administrators, ensuring security and control."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can the system manage product warranties?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Warranties, purchase history, and customer information are stored in the POS so warranty tracking and after-sales support are readily available."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory POS Manages Appliance Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines appliance store operations from inventory setup to performance monitoring.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Add and Organize Appliance Inventory",
                    "text": "Quickly add products, brands, models, categories, barcodes, supplier information, specifications, and warranty details. Sort stock for easy access and efficient management."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Manage Incoming and Outgoing Inventory",
                    "text": "Keep a running tally of all stock received and sales made. Inventory updates automatically whenever products are received, sold, transferred, or returned."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Process Sales and Customer Orders",
                    "text": "Store staff manage sales orders, invoices, payment processing, and customer transactions from one dashboard, reducing billing errors and increasing transaction speed."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Fast Barcode Scanning and Product Lookup",
                    "text": "Employees use barcode scanners to quickly find products, check stock levels, and process transactions efficiently, minimizing wait times during peak hours."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Secure Billing and Transaction Management",
                    "text": "The system creates invoices, tracks payments, manages customer accounts, and keeps financial records. All transaction information is stored securely and remains readily accessible."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Monitor Inventory and Store Performance",
                    "text": "Store owners get real-time updates on stock, low-stock alerts, fast-selling products, sales performance, and pending orders, with automated insights to improve planning and profitability."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Appliance Store POS System for Faster Sales and Better Inventory Control"
          description= "The Appliance Store Point of Sale System allows you to sell appliances faster and manage your inventory more effectively. Without the right point-of-sale system, appliance stores struggle with stock inaccuracies, slow billing, pricing errors, and managing warranties across hundreds of high-value products."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={APPLIANCE_STORE_UNIFIED_HEADING}
          paragraph={APPLIANCE_STORE_UNIFIED_PARAGRAPH}
          cards={APPLIANCE_STORE_UNIFIED_CARDS}
          iconSet="applianceStore"
        />

        <WhyChoosePOS
          heading="How Our Appliance Store POS System Solves These Challenges"
          paragraph="Owners Inventory is a complete appliance store point of sale system for retailers, which enables them to handle inventory, sales, warranties and customer data from one place."
          cards={APPLIANCE_STORE_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="applianceStore"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory That Improve Appliance Store Operations"
          features={APPLIANCE_STORE_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={APPLIANCE_STORE_WORKFLOW_DATA.heading}
          paragraph={APPLIANCE_STORE_WORKFLOW_DATA.paragraph}
          steps={APPLIANCE_STORE_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Run Your Appliance Store with Greater Efficiency and Control"
          description= "Minimize stock accuracy problems, streamline sales processes, and enhance customer support with a robust Appliance Store POS System. Owners Inventory gives appliance retailers the tools to control inventory, sales, warranties, suppliers and store performance all in one location, streamlining, simplifying and speeding up the day-to-day processes."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={APPLIANCE_STORE_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security and Role-Based Access"
          description="Different access levels can be assigned within the system and can be provided to the users based on their roles and responsibilities. Appropriate access can be granted to each member of the sales staff, store managers, accounting teams, inventory controllers and business owners to ensure security and operational control."
          secondDescription="This helps to protect sensitive business information, restrict unauthorized editing or changes, and enable correct record keeping throughout the organization."
        />

        <ToolsSection
          heading={APPLIANCE_STORE_TOOLS_DATA.heading}
          description={APPLIANCE_STORE_TOOLS_DATA.paragraph}
          tools={APPLIANCE_STORE_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={APPLIANCE_STORE_TESTIMONIALS}
          heading={APPLIANCE_STORE_TESTIMONIAL_DATA.heading}
          paragraph={APPLIANCE_STORE_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={APPLIANCE_STORE_TESTIMONIAL_DATA.secondHeading}
          secondDescription={APPLIANCE_STORE_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={APPLIANCE_STORE_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={APPLIANCE_STORE_TESTIMONIAL_DATA.whyChooseDescription}
          features={APPLIANCE_STORE_TESTIMONIAL_FEATURES}
          iconSet="applianceStore"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="Below are some of the most commonly asked questions about our appliance store POS system."
            faqs={APPLIANCE_STORE_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title= "Power Your Appliance Store with Smarter Inventory Management"
          description= "Control inventory, manage sales, track warranties, coordinate suppliers, and track performance, through a single POS solution designed to help your business grow."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
