import React from "react";
import Script from "next/script";
const heroBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/hero-banner.webp";
const whyChoseBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/why-chose-banner.webp";

import {
  FLORIST_KEY_FEATURES_CARDS,
  FLORIST_WHY_CHOOSE_CARDS,
  FLORIST_FEATURE_CARDS
} from "@/constant/subindustries/posFloristData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  FLORIST_UNIFIED_CARDS,
  FLORIST_UNIFIED_HEADING,
  FLORIST_UNIFIED_PARAGRAPH,
  FLORIST_WORKFLOW_DATA,
  FLORIST_TESTIMONIALS,
  FLORIST_FAQS,
  FLORIST_TESTIMONIAL_DATA,
  FLORIST_TESTIMONIAL_FEATURES,
  FLORIST_TOOLS_DATA,
} from "@/constant/subindustries/posFloristData";
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
        id="schema-florist"
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
                "description": "Owners Inventory's florist POS system helps florists manage custom orders, flower inventory, local deliveries, and customer accounts from a single platform.",
                "featureList": [
                  "Real-time flower inventory tracking",
                  "Custom order and arrangement builder",
                  "Multi-channel order management",
                  "Delivery management and driver dispatch",
                  "Supplier and purchase order management",
                  "Customer account and loyalty management",
                  "Role-based staff access",
                  "Mobile-friendly interface",
                  "Automated low-stock alerts",
                  "Detailed sales and waste reporting"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Florist POS System for Smarter Sales, Inventory, and Order Management | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/florist-pos-system",
                "description": "Manage flower sales, track fresh stem inventory, schedule local deliveries, and run your florist shop efficiently using Owners Inventory.",
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
                      "name": "Florist",
                      "item": "https://www.ownersinventory.com/industries/florist-pos-system"
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
                "name": "Florist POS System",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "Specialized florist POS software to manage fresh flowers, price custom arrangements, organize event schedules, and coordinate local deliveries.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/florist-pos-system",
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
                        "name": "Emily R."
                      },
                      "reviewBody": "Before switching, we were throwing away flowers every week because we had no idea what was actually in the cooler. Now our stock levels are always accurate and waste has dropped dramatically.",
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
                        "name": "Claire M."
                      },
                      "reviewBody": "Managing wedding orders used to mean juggling emails, sticky notes, and spreadsheets. Now everything is in one place and our clients get a much more professional experience.",
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
                    "name": "Can the system track flowers and supply inventory in real time?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Every stock movement is recorded automatically, including supplier deliveries, sales, waste write-offs, and adjustments, so inventory levels are always accurate without manual counting."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system support custom order and event management?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The pos system for florist will enable you to create in-depth custom orders for weddings, corporate clients, subscription services, as well as special occasions with complete ingredient, rates and delivery information linked to every purchase."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage both walk-in sales and advance orders from the same system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The operations of all order types, such as counter sales, phone orders, online store orders, and event packages all pass through the same queue and fulfilment process, and all occur in the same platform."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How quickly can I set up the Owners Inventory for my florist shop?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most florist shops are fully set up within a few hours. Customer records, supplier information and flower varieties and arrangements can be uploaded in bulk, meaning your team can start using the system the same day."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can different staff members have different access levels?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Roletype permissions can be set to allow access to counter staff, floral designers, delivery drivers, and managers to only the areas they need to access for their job."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Florist Operations",
                "description": "A step-by-step workflow showing how Owners Inventory automates florist operations and delivery calendars.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Set Up Your Flower Menu and Inventory",
                    "text": "Record all costs, suppliers, storage information, and allergen/care notes for all flowers, foliage, materials, and packaging. Group and sort arrangements according to their category, occasions, seasons and/or prices, so that they can be easily retrieved during customer consultations."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Receive and Track Incoming Stock",
                    "text": "Record all supplier deliveries including quantities, supplier batch information and conditions notes. The stock level is automatically updated and the system flags any discrepancy between the quantity ordered and what was received."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Process Walk-In and Custom Orders",
                    "text": "Create individual custom orders for retail, events, subscriptions and delivery customers. The system verifies stock, ensures pricing and provides order information directly to the design team, eliminating manual handoffs."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Manage Delivery Scheduling and Dispatch",
                    "text": "Assign orders to available drivers, create delivery windows, add instructions and photos, and track order completion in real-time. Automated customer notifications ensure customers are kept up-to-date, avoiding delays at the door."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Handle Billing and Customer Accounts",
                    "text": "Create invoices, handle deposits, process all kinds of payments and track all of the customer finances. Separate billing for corporate accounts and wedding clients with complete track of payments."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Monitor Daily Performance and Stock Health",
                    "text": "Florist owners see live data on sales, inventory levels, pending deliveries, flower waste, and revenue at a glance. Automated reports highlight which arrangements are most profitable, which flowers need attention, and where operational improvements can be made."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Florist POS System for Smarter Sales, Inventory, and Order Management"
          description="If a florist shop doesn't have the right point of sale system, they will find it hard to generate sales, keep track of their flowers, provide timely deliveries, and handle seasonal demand. Manual processes can result in wilted flower stock, long checkout lines, inaccurate custom orders and poor customer communication for flower businesses."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Book a Demo"
          variant="animation2"
        />

        <VoicesRealBusiness title="Rated on leading review platforms" />

        <IndustryUnifiedPlatform
          heading={FLORIST_UNIFIED_HEADING}
          paragraph={FLORIST_UNIFIED_PARAGRAPH}
          cards={FLORIST_UNIFIED_CARDS}
          iconSet="florist"
        />

        <WhyChoosePOS
          heading="How Our Florist POS System Solves These Challenges"
          paragraph="Owners Inventory is the all-in-one florist POS system that allows florists to manage, custom orders, flower inventory, deliveries, and customer accounts from a single platform."
          cards={FLORIST_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="florist"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory That Improve Florist Operations"
          features={FLORIST_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={FLORIST_WORKFLOW_DATA.heading}
          paragraph={FLORIST_WORKFLOW_DATA.paragraph}
          steps={FLORIST_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Run Your Florist Business Without the Guesswork"
          description="Minimise waste from poor inventory visibility, missed orders due to manual handling and delivery failures from a lack of connection with scheduling tools. Owners Inventory is an all-in-one florist point of sale system that allows shops to control their sales, custom orders, flower inventory, deliveries, customer accounts and business performance all from a single place."
          ctaDesc="Book a Demo"
        />

        <IndustriesFeaturesSection features={FLORIST_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security and Role-Based Access"
          description="Each team member can access only the information they need. Each member of the counter staff, delivery personnel, florist and manager has clear permission levels, keeping financial data secure and ensuring accurate financial records."
        />

        <ToolsSection
          heading={FLORIST_TOOLS_DATA.heading}
          description={FLORIST_TOOLS_DATA.paragraph}
          tools={FLORIST_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={FLORIST_TESTIMONIALS}
          heading={FLORIST_TESTIMONIAL_DATA.heading}
          paragraph={FLORIST_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={FLORIST_TESTIMONIAL_DATA.secondHeading}
          secondDescription={FLORIST_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={FLORIST_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={FLORIST_TESTIMONIAL_DATA.whyChooseDescription}
          features={FLORIST_TESTIMONIAL_FEATURES}
          iconSet="florist"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="Find answers to common questions about inventory tracking, order management, staff permissions, setup, and day-to-day florist shop operations."
            faqs={FLORIST_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Improve Order Accuracy and Florist Efficiency"
          description="Our florist point of sale software consolidates inventory management, sales processing, custom order processing, delivery coordination, customer relationship tools, and business reporting into a single easy-to-use system, simplifying daily business operations in your flower shop to make it more profitable and organized."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
