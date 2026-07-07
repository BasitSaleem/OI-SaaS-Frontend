import React from "react";
import Script from "next/script";
const heroBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/bakery-pos-system/hero-banner.webp";
const whyChoseBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/bakery-pos-system/why-chose-banner.webp";

import {
  GARDEN_CENTER_KEY_FEATURES_CARDS,
  GARDEN_CENTER_WHY_CHOOSE_CARDS,
  GARDEN_CENTER_FEATURE_CARDS
} from "@/constant/subindustries/posGardenCenterData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  GARDEN_CENTER_UNIFIED_CARDS,
  GARDEN_CENTER_UNIFIED_HEADING,
  GARDEN_CENTER_UNIFIED_PARAGRAPH,
  GARDEN_CENTER_WORKFLOW_DATA,
  GARDEN_CENTER_TESTIMONIALS,
  GARDEN_CENTER_FAQS,
  GARDEN_CENTER_TESTIMONIAL_DATA,
  GARDEN_CENTER_TESTIMONIAL_FEATURES,
  GARDEN_CENTER_TOOLS_DATA,
} from "@/constant/subindustries/posGardenCenterData";
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
        id="schema-gardencenter"
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
                "description": "Garden center and plant nursery POS system that handles loose materials, monitors live plant stocks, automates reordering from suppliers, manages landscaping commercial clients, and syncs offline and online inventories.",
                "featureList": [
                  "Live plant inventory tracking",
                  "Bulk billing by volume and weight",
                  "Purchase order management for nurseries",
                  "Pots, fertilizers, and tools variation support",
                  "Customer database and landscaping profiles",
                  "Expense and financial cost reports",
                  "Online plant availability and web shop sync",
                  "Unified multi-branch control dashboard",
                  "Seasonal profit and margin summaries",
                  "Cashier and supervisor permission configurations",
                  "Integrations with accounting software and payment gateways"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Garden Centers | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/garden-center-pos-system",
                "description": "Run your garden center and nursery with plant inventory, bulk material pricing, landscaper discounts, and online store sync using Owners Inventory's POS software.",
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
                      "name": "Garden Center",
                      "item": "https://www.ownersinventory.com/industries/garden-center-pos-system"
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
                "name": "Garden Center POS System",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "Nursery POS software to manage bulk items (soil, mulch), track live plants, and configure landscaper pricing packages from a unified console.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/garden-center-pos-system",
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
                        "name": "Garden Center Owner"
                      },
                      "reviewBody": "This system has made billing bulk materials and tracking plant counts simple. Garden center management is finally stress-free.",
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
                        "name": "Nursery Manager"
                      },
                      "reviewBody": "The best system we have implemented. It organizes bulk material billing, tracks plant quantities, and integrates with our website.",
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
                    "name": "What is a garden center POS system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A garden center point of sale system helps manage plant inventories, bulk material sales (soil, mulch), landscaper accounts, and supplier orders from one central software."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I sell bulk materials by volume?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the system allows you to build custom billing buttons to sell soil, gravel, and mulch by bag, weight, or cubic yards easily."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does it handle plant variants?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can define variations for plant sizes, colors, and pot types, ensuring accurate stock records and prices at checkout."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it support online sales?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, you can sync your in-store stock levels automatically with your online store so customers can purchase items online."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I limit access for seasonal employees?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, you can configure staff roles so seasonal cashiers can only run checkouts, while supervisors manage price changes and purchase orders."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Garden Center Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines garden center and nursery operations.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Plant Acquisition",
                    "text": "Log wholesale plant arrivals and seeds, noting pot size, varieties, and supplier accounts."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Storage & Layout",
                    "text": "Organize inventory in greenhouses or outdoor yards, grouping plants by category and care requirements."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Inventory Tracking",
                    "text": "Monitor stock levels, record plant losses or damage, and coordinate bulk yard items."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Nursery Ordering",
                    "text": "Automate purchase orders for pots, soils, and popular plant lines ahead of seasonal spikes."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Order Checkout",
                    "text": "Scan barcodes, bill bulk materials by volume, apply landscaping discounts, and process payments."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reporting & Insights",
                    "text": "Review detailed insights to understand what garden categories are most profitable and make smart business decisions."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Complete POS System for Garden Centers and Nurseries"
          description="The Owners Inventory POS System for garden centers is the smartest way to manage live plant categories and loose materials. Track trees, flowers, tools, bulk mulch yards, and landscape pricing from a single centralized console."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={GARDEN_CENTER_UNIFIED_HEADING}
          paragraph={GARDEN_CENTER_UNIFIED_PARAGRAPH}
          cards={GARDEN_CENTER_UNIFIED_CARDS}
          iconSet="retail"
        />

        <WhyChoosePOS
          heading="How Our Inventory Software Solves These Challenges"
          paragraph="The Owners Inventory POS System has features designed for garden centers, including:"
          cards={GARDEN_CENTER_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="retail"
        />

        <KeyHighlights
          heading="Key Features of Our POS System That Help Garden Centers"
          features={GARDEN_CENTER_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={GARDEN_CENTER_WORKFLOW_DATA.heading}
          paragraph={GARDEN_CENTER_WORKFLOW_DATA.paragraph}
          steps={GARDEN_CENTER_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Manage Your Nursery Inventory Efficiently"
          description="Take control of your nursery with our system. Specially designed for landscaping and plant retail."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={GARDEN_CENTER_FEATURE_CARDS} />

        <SecurityCompliance
          title="Speed, Accuracy, and Seasonal Success"
          description="Our system integrates with barcode scanners, receipt printers, accounting platforms, card terminals, and online e-commerce shops to keep your garden center organized."
          secondDescription="Minimize plant losses, manage landscaper accounts, and streamline seasonal bulk sales easily."
        />

        <ToolsSection
          heading={GARDEN_CENTER_TOOLS_DATA.heading}
          description={GARDEN_CENTER_TOOLS_DATA.paragraph}
          tools={GARDEN_CENTER_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={GARDEN_CENTER_TESTIMONIALS}
          heading={GARDEN_CENTER_TESTIMONIAL_DATA.heading}
          paragraph={GARDEN_CENTER_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={GARDEN_CENTER_TESTIMONIAL_DATA.secondHeading}
          secondDescription={GARDEN_CENTER_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={GARDEN_CENTER_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={GARDEN_CENTER_TESTIMONIAL_DATA.whyChooseDescription}
          features={GARDEN_CENTER_TESTIMONIAL_FEATURES}
          iconSet="retail"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="Our garden center POS solution is built to simplify daily checkout and nurseries tracking. Here are answers to common questions."
            faqs={GARDEN_CENTER_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Take Control of Your Garden Center"
          description="Garden centers can lose margin due to unrecorded plant shrinkage and slow bulk material billing. Our system ensures stock accuracy, speeds up spring checkouts, and tracks margins dynamically to drive growth."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
