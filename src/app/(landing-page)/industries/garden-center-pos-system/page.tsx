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
                "@type": "BreadcrumbList",
                "@id": "https://ownersinventory.com/industries/garden-center-pos-system/#breadcrumb",
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
                    "name": "Garden Center POS System",
                    "item": "https://ownersinventory.com/industries/garden-center-pos-system"
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://ownersinventory.com/industries/garden-center-pos-system/#webpage",
                "url": "https://ownersinventory.com/industries/garden-center-pos-system",
                "name": "Garden Center POS System Built for Nursery and Plant Retail Operations | Owners Inventory",
                "description": "Garden center POS software with variant-level plant inventory tracking, seasonal catalog management, multi-supplier purchase orders, and real-time sync across in-store and online sales.",
                "isPartOf": {
                  "@id": "https://ownersinventory.com/#website"
                },
                "about": {
                  "@id": "https://ownersinventory.com/#software"
                },
                "breadcrumb": {
                  "@id": "https://ownersinventory.com/industries/garden-center-pos-system/#breadcrumb"
                },
                "inLanguage": "en-US"
              },
              {
                "@type": "Organization",
                "@id": "https://ownersinventory.com/#organization",
                "name": "Owners Inventory",
                "url": "https://ownersinventory.com",
                "description": "Owners Inventory is an all-in-one business management platform for retail, wholesale, manufacturing, and ecommerce businesses. It combines POS, inventory management, purchasing, ecommerce, HR, and finance in one system.",
                "foundingDate": "2025",
                "areaServed": "Worldwide",
                "sameAs": [
                  "https://www.facebook.com/ownersinventory/",
                  "https://www.instagram.com/ownersinventory/",
                  "https://www.linkedin.com/company/owners-inventory/"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Support",
                  "email": "sales@ownersinventory.com",
                  "availableLanguage": "English"
                }
              },
              {
                "@type": "SoftwareApplication",
                "@id": "https://ownersinventory.com/#software",
                "name": "Owners Inventory",
                "applicationCategory": "BusinessApplication",
                "applicationSubCategory": "Inventory Management Software",
                "operatingSystem": "Web, iOS, Android",
                "url": "https://ownersinventory.com",
                "description": "Owners Inventory is an all-in-one platform combining POS, inventory management, ecommerce, purchasing, HR, accounts and finance for retail, wholesale, and manufacturing businesses.",
                "publisher": {
                  "@id": "https://ownersinventory.com/#organization"
                }
              },
              {
                "@type": "Product",
                "@id": "https://ownersinventory.com/industries/garden-center-pos-system/#product",
                "name": "Garden Center POS System by Owners Inventory",
                "description": "A point of sale and inventory system built for garden centers and nurseries, with variant-level plant and container tracking, seasonal catalog management, multi-supplier purchase orders, and multi-location support.",
                "brand": {
                  "@id": "https://ownersinventory.com/#organization"
                },
                "category": "Point of Sale Software for Garden Centers and Nurseries",
                "audience": {
                  "@type": "BusinessAudience",
                  "audienceType": "Garden centers, nurseries, and plant retailers"
                },
                "isRelatedTo": {
                  "@id": "https://ownersinventory.com/#software"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://ownersinventory.com/industries/garden-center-pos-system/#faq",
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

        <VoicesRealBusiness title="Rated on Leading Review Platforms" />

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
