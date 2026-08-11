import React from "react";
import Script from "next/script";
const heroBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/hero-banner.webp";
const whyChoseBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/why-chose-+banner.webp";

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
                "description": "Owners Inventory's garden center POS system tracks seasonal items, plant variants, bulk products, and supplier purchase orders from one unified dashboard.",
                "featureList": [
                  "Variant-level inventory tracking",
                  "Bulk import and seasonal catalogs",
                  "Purchase order management",
                  "Real-time inventory sync",
                  "Staff access controls",
                  "Shift reports by category"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Garden Center POS System Built for Nursery and Plant Retail Operations | Owners Inventory",
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
                        "name": "Rachel Kowalski"
                      },
                      "reviewBody": "We were placing supplier orders based on what we remembered selling last spring. Switched to Owners Inventory and pulled actual SKU movement reports for the first time. Our overstock on slow-turn perennials dropped by about 30% the first season.",
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
                        "name": "Marcus Obi"
                      },
                      "reviewBody": "Variant tracking changed how we manage our container inventory. Before, we'd reorder 1-gallon shrubs not realizing we had 40 units of the 3-gallon sitting in the back. Now each size has its own count and its own alert. We haven't had a duplicate overstock issue since we set it up.",
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
                    "name": "Can I track different container sizes for the same plant as separate inventory items?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Each container size is set up as a variant under the parent product. A 4\" petunia and a 1-gallon petunia carry separate SKUs, stock counts, and reorder thresholds. Low-stock alerts fire at the variant level, so you're reordering the right size rather than a blended total."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the system handle seasonal catalog changes between spring and fall?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Products can be deactivated at the end of a season without losing their sales history. When the same variety comes back the following year, you reactivate the product and set new opening stock counts. Bulk import handles large catalog additions at the start of each season."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage purchase orders for multiple nursery suppliers in one place?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Each supplier has its own record inside the purchases module. Purchase orders are created per supplier and tied to specific SKUs. When stock is received, it's matched against the open order and inventory updates immediately, with quantity discrepancies flagged before the stock enters your active count."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system support online sales alongside in-store?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Your Shopify store, WooCommerce site, or the built-in Owners Inventory online store all pull from the same inventory pool as your register. A sale at the counter reduces the online count in real time, so you can't oversell across channels once the sync is active."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I run two garden center locations from one account?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "All plans support multiple locations. Stock at each site is visible from one dashboard, and transfer orders move inventory between locations with a complete movement record. Customer profiles and purchase history are shared across both sites."
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
                    "name": "Starting the Day",
                    "text": "The manager opens the dashboard and checks stock alerts. Two varieties flagged overnight: 4-inch herbs are below reorder threshold, and a premium soil blend has four bags left. A purchase order is ready to send before the first customer walks in, based on the movement report from the past two weekends."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Customer Check-In and Product Lookup",
                    "text": "A customer comes in asking for the specific tomato variety she planted two years ago. The staff member searches her profile by name or phone number, pulls up her purchase history, and locates the variety in under a minute. It's in stock in the 1-gallon size."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Mixed Transaction at Checkout",
                    "text": "She picks up two tomato plants, a bag of fertilizer, and a set of garden stakes. The cashier processes one transaction covering all four items across three product categories. Tax rates apply correctly per category. Inventory updates for each SKU the moment the sale closes."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Receiving Supplier Stock",
                    "text": "An afternoon delivery arrives from the wholesale nursery. The receiving team opens the pending purchase order, confirms quantities received, and logs the shipment. Stock counts update immediately. Any line item short on delivery is flagged against the original order."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "End-of-Day Reporting",
                    "text": "The shift report takes about two minutes to close. It shows total revenue by product category, refunds processed, payment types, and any stock adjustments made during the day. Weekend movement data is ready to inform Monday's purchasing decisions."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Garden Center POS System Built for Nursery and Plant Retail Operations"
          description="Running a garden center means selling perishable plants, bulk soil, seasonal décor, hardscape materials, and fertilizer all from the same checkout. Most generic POS systems weren't built for that mix. Owners Inventory's garden center point of sale system handles it from one platform."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Rated on leading review platforms" />

        <IndustryUnifiedPlatform
          heading={GARDEN_CENTER_UNIFIED_HEADING}
          paragraph={GARDEN_CENTER_UNIFIED_PARAGRAPH}
          cards={GARDEN_CENTER_UNIFIED_CARDS}
          iconSet="gardenCenter"
        />

        <WhyChoosePOS
          heading="How Owners Inventory Solves Garden Center POS Challenges"
          paragraph="Each problem above maps directly to a capability inside the platform. Built for how nurseries and garden centers actually operate, not generic retail."
          cards={GARDEN_CENTER_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="gardenCenter"
        />

        <KeyHighlights
          heading="Key Features of Garden Center POS Software"
          features={GARDEN_CENTER_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={GARDEN_CENTER_WORKFLOW_DATA.heading}
          paragraph={GARDEN_CENTER_WORKFLOW_DATA.paragraph}
          steps={GARDEN_CENTER_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Take Control of Every Garden Center Operation"
          description="Keep seasonal inventory, bulk product tracking, and retail sales organized in one place. Know what's moving before it runs out and reorder from suppliers without leaving your POS."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={GARDEN_CENTER_FEATURE_CARDS} />

        <SecurityCompliance
          title="Data Security and Transaction Accuracy"
          description="Owners Inventory uses encrypted APIs and a complete activity log where every action is tied to a specific user and timestamp."
          secondDescription="Payment processing through Stripe is PCI-compliant, and customer data, including purchase history tied to a specific rose or tomato variety, is accessible only to authorized users. If a refund on a bulk soil order gets processed outside your policy, or a stock adjustment on a pallet of fertilizer goes through without a reason code, the log shows exactly who made the change and when."
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
          iconSet="gardenCenter"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="Common questions garden center owners ask before switching POS systems."
            faqs={GARDEN_CENTER_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Garden Center Management Software That Runs Accurately"
          description="Variant-level inventory tracking, seasonal catalog management, supplier purchase order generation, multi-channel stock sync, customer purchase history, and real-time sales reporting are all included. Setup takes hours. No contract required."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
