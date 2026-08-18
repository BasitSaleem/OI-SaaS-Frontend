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
                "@type": "BreadcrumbList",
                "@id": "https://ownersinventory.com/industries/electronics-pos-system/#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ownersinventory.com" },
                  { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://ownersinventory.com/industries" },
                  { "@type": "ListItem", "position": 3, "name": "Electronics POS System", "item": "https://ownersinventory.com/industries/electronics-pos-system" }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://ownersinventory.com/industries/electronics-pos-system/#webpage",
                "url": "https://ownersinventory.com/industries/electronics-pos-system",
                "name": "POS Software Built for Electronics Retail | Owners Inventory",
                "description": "POS software for electronics retailers. Track serial numbers and IMEI at the unit level, manage refurbished and new stock in the same catalog, and reconcile supplier orders at receiving.",
                "isPartOf": { "@id": "https://ownersinventory.com/#website" },
                "about": { "@id": "https://ownersinventory.com/#software" },
                "breadcrumb": { "@id": "https://ownersinventory.com/industries/electronics-pos-system/#breadcrumb" },
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
                "publisher": { "@id": "https://ownersinventory.com/#organization" }
              },
              {
                "@type": "Product",
                "@id": "https://ownersinventory.com/industries/electronics-pos-system/#product",
                "name": "Electronics POS System by Owners Inventory",
                "description": "A point of sale and inventory system built for electronics retailers, with serial number and IMEI tracking at the unit level, refurbished and new stock managed as separate variants under the same product, and receiving workflows that match incoming stock against purchase orders at the variant level.",
                "brand": { "@id": "https://ownersinventory.com/#organization" },
                "category": "Point of Sale Software for Electronics Retailers",
                "audience": {
                  "@type": "BusinessAudience",
                  "audienceType": "Electronics retailers and repair shops"
                },
                "isRelatedTo": { "@id": "https://ownersinventory.com/#software" },
                "offers": {
                  "@type": "Offer",
                  "url": "https://ownersinventory.com/pricing",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/OnlineOnly",
                  "hasMerchantReturnPolicy": {
                    "@type": "MerchantReturnPolicy",
                    "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
                  },
                  "eligibleDuration": {
                    "@type": "QuantitativeValue",
                    "value": "30",
                    "unitCode": "DAY"
                  },
                  "description": "30-day free trial, no contracts required."
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://ownersinventory.com/industries/electronics-pos-system/#faq",
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
                    "name": "We have over 200 SKUs across multiple brands. How long does setting up the POS system for an electronics store actually take?",
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

        <VoicesRealBusiness title="Rated on Leading Review Platforms" />

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
          title="Owners Inventory Gives Electronics Retailers the Tools to Run a Tight Operation"
          description="Serial tracking, variant inventory, supplier management, multi-location stock control, and real-time eCommerce sync are all included. Setup takes hours, not weeks. No contract required."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
