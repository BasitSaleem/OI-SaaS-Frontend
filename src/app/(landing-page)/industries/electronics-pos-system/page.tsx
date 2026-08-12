import React from "react";
import Script from "next/script";
const heroBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/hero-banner.webp";
const whyChoseBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/why-chose-banner.webp";

import {
  ELECTRONICS_KEY_FEATURES_CARDS,
  ELECTRONICS_WHY_CHOOSE_CARDS,
  ELECTRONICS_FEATURE_CARDS
} from "@/constant/subindustries/posElectronicsData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  ELECTRONICS_UNIFIED_CARDS,
  ELECTRONICS_UNIFIED_HEADING,
  ELECTRONICS_UNIFIED_PARAGRAPH,
  ELECTRONICS_WORKFLOW_DATA,
  ELECTRONICS_TESTIMONIALS,
  ELECTRONICS_FAQS,
  ELECTRONICS_TESTIMONIAL_DATA,
  ELECTRONICS_TESTIMONIAL_FEATURES,
  ELECTRONICS_TOOLS_DATA,
} from "@/constant/subindustries/posElectronicsData";
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
        id="schema-electronics"
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
                "description": "Owners Inventory's electronics store POS system tracks unique serial numbers and IMEIs, manages warranties, syncs inventory in real time between in-store and online channels, and matches purchase orders.",
                "featureList": [
                  "Offline POS terminal mode",
                  "IMEI and unit-level tracking",
                  "Role-based staff permissions",
                  "Trade-in and buyback processing",
                  "Purchase order and vendor management",
                  "Omni-channel selling and digital order sync",
                  "Sales and inventory margin reports by variant",
                  "Stripe payment integration"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS Software Built for Electronics Retail | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/electronics-pos-system",
                "description": "Manage your electronics store with serial number tracking, warranty controls, supplier management, multi-branch dashboard, and online store sync using Owners Inventory.",
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
                      "name": "Electronics",
                      "item": "https://www.ownersinventory.com/industries/electronics-pos-system"
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
                "name": "Electronics Store POS System",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "POS software designed for electronics retailers to manage IMEI and serial numbers, track warranties, handle supplier orders, and run multi-branch retail operations seamlessly.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/electronics-pos-system",
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
                        "name": "Daniel Reyes"
                      },
                      "reviewBody": "We were tracking serial numbers in a spreadsheet that three people updated inconsistently. We had warranty claims we couldn't verify and returns we couldn't confirm. After switching to Owners Inventory, every unit is logged at receiving and tied to the sale. Our first warranty dispute after the switch took four minutes to resolve instead of a full afternoon of digging.",
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
                        "name": "Priya Shetty"
                      },
                      "reviewBody": "We run two locations and a Shopify store. Before, we had no reliable way to know what stock we had where, and we'd oversell online twice a month at minimum. Owners Inventory synced everything. Overselling stopped in the first week. We now transfer stock between locations through the platform instead of driving units over without any record.",
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
                    "name": "Can I track devices by IMEI, not just barcode or serial number?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "IMEI logging is supported at the unit level. When a device comes in through a purchase order or a trade-in, you can record the IMEI alongside the serial number. Both get tied to the sale at checkout. If a customer returns a device, the IMEI on the unit gets checked against the original transaction before the return is processed."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "A distributor sent the wrong model last month. Would the system have caught that?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It would have flagged it at receiving. When stock arrives, the receiving workflow matches incoming units against the original purchase order at the variant level. A 512GB unit arriving against a 256GB order shows as a discrepancy immediately. You decide whether to accept the substitution or reject it, and either way the record reflects what actually came in."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "We carry refurbished devices alongside new stock. Can the system handle both in the same catalog?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Refurbished and new units can exist as separate variants under the same product, each with its own SKU, stock count, and pricing. A refurbished iPhone 14 and a new iPhone 14 are tracked independently. When a refurbished unit comes in through a trade-in or a supplier, it enters inventory as its own item with its own serial number and condition record."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "We have over 200 SKUs across multiple brands. How long does the pos system for an electronics store setup actually take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Based on onboarding data from Owners Inventory customers, most electronics retailers with large catalogs are operational within a day. Products can be imported in bulk via CSV, and variants are built out from the parent product rather than entered one by one. If you're migrating from another system, the support team helps with the data transfer."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What happens when a customer returns a device we can't verify was sold by us?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The transaction record tied to that device's serial number and IMEI is the verification. If the unit in front of you doesn't match the record attached to the receipt, the system surfaces that before the return is approved. Staff don't need to make a judgment call. The mismatch is documented either way, so if a dispute follows, you have the record to back your decision."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Electronics Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines electronics store operations and serial tracking.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "IMEIs and Serials Logged at Receiving",
                    "text": "A shipment arrives and each device is scanned individually. Serial numbers and IMEIs are logged against the purchase order as units come in. If a distributor sent a 512GB model instead of the 256GB you ordered, the discrepancy shows up at this step, before the wrong product enters your active inventory."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "A Customer Asks for a Specific Variant",
                    "text": "A customer wants a particular phone in 128GB, blue, unlocked. The staff member searches by those attributes, sees one unit in stock, and confirms the IMEI before pulling it from the shelf. No guessing, no checking a separate spreadsheet."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Sale Closes With a Full Unit Record",
                    "text": "The variant is added to the sale, payment is processed, and the receipt is generated with the serial number and IMEI attached to the transaction. That record is retrievable instantly if the customer comes back with a warranty claim or a return."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Stock Updates Before Overselling Happens",
                    "text": "The moment that unit sells at the counter, the same SKU updates across your Shopify or WooCommerce store. If a web order for that exact configuration was placed seconds earlier, the system flags the conflict rather than confirming both sales."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "A Trade-In Comes Across the Counter",
                    "text": "A customer brings in a used device. You log it as a received item with its serial number, condition, and the price you're paying. It enters inventory as a tracked unit from that moment. When it sells, the margin between what you paid and what you received is on record."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="POS Software Built for Electronics Retail"
          description="Electronics retail doesn't fit neatly into a generic POS. You're tracking hundreds of SKUs across multiple configurations, managing serial numbers at the unit level, syncing inventory between your counter and your online store, and reconciling supplier invoices against actual stock received. Most retail software handles a fraction of that. Owners Inventory's electronics store POS system handles all of it from one platform."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Rated on leading review platforms" />

        <IndustryUnifiedPlatform
          heading={ELECTRONICS_UNIFIED_HEADING}
          paragraph={ELECTRONICS_UNIFIED_PARAGRAPH}
          cards={ELECTRONICS_UNIFIED_CARDS}
          iconSet="electronics"
        />

        <WhyChoosePOS
          heading="How Owners Inventory Solves Electronics Store POS Challenges"
          paragraph="Each of these challenges has a direct solution in the Owners Inventory platform. The system is built around operational precision, not surface-level convenience."
          cards={ELECTRONICS_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="electronics"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory Electronics Store POS Software"
          features={ELECTRONICS_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={ELECTRONICS_WORKFLOW_DATA.heading}
          paragraph={ELECTRONICS_WORKFLOW_DATA.paragraph}
          steps={ELECTRONICS_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="You Can't Run A Precise Operation On Imprecise Data"
          description="Owners Inventory gives electronics retailers the stock accuracy and transaction records they need to operate with confidence."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={ELECTRONICS_FEATURE_CARDS} />

        <SecurityCompliance
          title="Data Security and Transaction Accuracy"
          description="Electronics retail involves high-value transactions and product records that need to hold up to scrutiny. Owners Inventory uses encrypted APIs and a complete activity log so you know who did what and when."
          secondDescription="Payment processing through Stripe is PCI-compliant, and customer data is accessible only to authorized users. If a pricing error shows up in your records, the activity log traces it to a specific user and timestamp without any manual digging."
        />

        <ToolsSection
          heading={ELECTRONICS_TOOLS_DATA.heading}
          description={ELECTRONICS_TOOLS_DATA.paragraph}
          tools={ELECTRONICS_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={ELECTRONICS_TESTIMONIALS}
          heading={ELECTRONICS_TESTIMONIAL_DATA.heading}
          paragraph={ELECTRONICS_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={ELECTRONICS_TESTIMONIAL_DATA.secondHeading}
          secondDescription={ELECTRONICS_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={ELECTRONICS_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={ELECTRONICS_TESTIMONIAL_DATA.whyChooseDescription}
          features={ELECTRONICS_TESTIMONIAL_FEATURES}
          iconSet="electronics"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="Common questions from electronics store owners evaluating Owners Inventory before making a decision."
            faqs={ELECTRONICS_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Owners Inventory gives electronics retailers the tools to run a tight operation"
          description="Serial tracking, variant inventory, supplier management, multi-location stock control, and real-time eCommerce sync are all included. Setup takes hours, not weeks. No contract required."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
