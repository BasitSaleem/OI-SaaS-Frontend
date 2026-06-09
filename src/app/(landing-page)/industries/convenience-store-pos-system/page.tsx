import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/convenience-store-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/convenience-store-pos/why-chose-banner.webp";

import {
  CONVENIENCE_STORE_KEY_FEATURES_CARDS,
  CONVENIENCE_STORE_WHY_CHOOSE_CARDS,
  CONVENIENCE_STORE_FEATURE_CARDS
} from "@/constant/subindustries/convenienceStorePosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  CONVENIENCE_STORE_UNIFIED_CARDS,
  CONVENIENCE_STORE_UNIFIED_HEADING,
  CONVENIENCE_STORE_UNIFIED_PARAGRAPH,
  CONVENIENCE_STORE_WORKFLOW_DATA,
  CONVENIENCE_STORE_TESTIMONIALS,
  CONVENIENCE_STORE_FAQS,
  CONVENIENCE_STORE_TESTIMONIAL_DATA,
  CONVENIENCE_STORE_TESTIMONIAL_FEATURES,
  CONVENIENCE_STORE_TOOLS_DATA,
} from "@/constant/subindustries/convenienceStorePosData";
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
        id="schema-convenience-store"
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
                "description": "Convenience store POS software that tracks every expiration date, barcode, category, and shelf stock in real time, speeds up counter checkout, manages suppliers and restock purchases, syncs inventory across multiple mart branches, and provides detailed sales analytics.",
                "featureList": [
                  "Complete barcode scanning and quick search features",
                  "Real-time stock alerts and expiration date tracking",
                  "Automated supplier purchase order dispatching",
                  "Customer loyalty points and purchase histories",
                  "Multi-branch synchronization and price controls",
                  "Mix-and-match bundle pricing configurations",
                  "Category performance and margin analytics",
                  "Employee role authorization and drawer control",
                  "Offline billing capability",
                  "E-commerce integration with automatic stock updates",
                  "Promotion and customized bundle management",
                  "Live register cash tracking"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Convenience Stores | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/convenience-store-pos-system",
                "description": "Track every barcode and expiration date with real-time stock alerts, speedy checkout, supplier integrations, and multi-branch sync using Owners Inventory's POS system for convenience stores.",
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
                      "name": "Convenience Store Pos System",
                      "item": "https://www.ownersinventory.com/industries/convenience-store-pos-system"
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
                "name": "Convenience Store POS System",
                "description": "POS software designed for convenience stores and marts to manage expiration dates, track shelf stock, accelerate counter billing, coordinate distributors, and review sales reports from a single cloud dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/convenience-store-pos-system",
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
                        "name": "Convenience Store Owner"
                      },
                      "reviewBody": "This POS allowed cashiers to bill customers rapidly and manage hundreds of item variations without confusion. Quick scanner compatibility.",
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
                        "name": "Mart Manager"
                      },
                      "reviewBody": "We had problems with stock mismatches and expiration tracking. Owners Inventory POS keeps everything current, and reports are simple and easy to understand.",
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
                        "name": "Multi-Store Mart Owner"
                      },
                      "reviewBody": "It used to take hours to check stock across multiple marts, but the POS system for convenience stores updates inventory immediately. Centralized pricing is a lifesaver.",
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
                        "name": "Convenience Store Operator"
                      },
                      "reviewBody": "Managing items with expiry dates was difficult, but with Owners Inventory POS, everything is automated. Employee access controls have also eliminated shrinkage.",
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
                    "name": "How does this POS system track expiration dates?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our POS system for convenience stores tracks individual batches and shelf life dates. It triggers alerts for products nearing expiry so you can run quick clearance promotions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can it handle promotional discounts like multi-buy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, you can easily configure complex promotions such as 'Buy 2 Get 1 Free', mix-and-match deals, bundle pricing, and automatic discounts at checkout."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the POS support quick barcode scanning?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, our POS is fully optimized for speed, supporting standard USB, Bluetooth, and wireless barcode scanners for high-speed counter checkouts."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage multiple convenience store branches?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, Owners' POS keeps pricing, stock levels, and sales data synchronized across all locations. Stock transfers are easy to process from the dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for cashiers to learn?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. The checkout screen is highly intuitive and user-friendly. Cashiers can master the billing interface in less than 30 minutes, minimizing training downtime."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Convenience Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines convenience store inventory management from acquisition to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Inventory Acquisition",
                    "text": "Receive new shipments, scan barcodes, record expiration dates, and set cost and retail prices directly inside the POS database."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Shelf Stock Organization",
                    "text": "Organize products by category, aisle, brand, and type. The system makes it simple to search and retrieve products during checkout."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Real-Time Tracking",
                    "text": "The cloud POS records every checkout transaction, return, and branch transfer to maintain live, branch-level stock records."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Supplier Management",
                    "text": "Manage multiple distributors, generate purchase orders, and monitor order delivery status from a single window."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Accurate Fulfillment",
                    "text": "Process daily customer sales quickly, print/email receipts, and handle payments smoothly to maintain absolute transaction transparency."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reports and Analysis",
                    "text": "Access live reports on best-selling snacks, beverages, daily revenue, inventory turns, and profit margins to plan smarter."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Smart Convenience Store POS System for Stock Control"
          description="Managing a convenience store means handling hundreds of transactions every day while keeping stock on shelves, staff accountable, and cash balanced at every shift change. Owners Inventory gives you a POS system built around how a c-store actually runs. Billing, real-time inventory tracking, shift-level reporting, and staff access control all sit in a single dashboard, so nothing gets missed and nothing goes unrecorded."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={CONVENIENCE_STORE_UNIFIED_HEADING}
          paragraph={CONVENIENCE_STORE_UNIFIED_PARAGRAPH}
          cards={CONVENIENCE_STORE_UNIFIED_CARDS}
          iconSet="convenienceStore"
        />

        <WhyChoosePOS
          heading="How Owners Inventory Solves These Challenges"
          paragraph="Our convenience store POS connects billing, inventory count, staff access, and reporting into one system, so these problems stop repeating."
          cards={CONVENIENCE_STORE_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="convenienceStore"
        />

        <KeyHighlights
          heading="Our Key Features"
          features={CONVENIENCE_STORE_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={CONVENIENCE_STORE_WORKFLOW_DATA.heading}
          paragraph={CONVENIENCE_STORE_WORKFLOW_DATA.paragraph}
          steps={CONVENIENCE_STORE_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Manage Your Convenience Store Today"
          description="Owners working with Owners Inventory report better control over cash, fewer times running out of stock, and faster checkouts throughout every shift. Get started for free and see the difference it makes within your first week."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={CONVENIENCE_STORE_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance."
          description="The security of a POS system is a key factor when choosing one for a small retail store. Our POS system records every transaction under a specific employee ID with the exact timestamp. Role-based access control prevents a cashier from opening the cash drawer outside of an actual transaction. Any drawer opening without a transaction is automatically flagged in the system so it can be reviewed immediately. Our system automatically maintains a full audit record across every shift without any extra effort from your team."
          secondDescription="Payment data is protected through end-to-end encryption and secure data handling, with built-in security standards that keep card transactions safe and compliant. No customer or transaction data is ever shared with third parties, and all records are stored securely in compliance with relevant data protection standards. Your data is automatically backed up to the cloud so your records can be preserved, even if your hardware breaks down. For age-restricted products like tobacco and alcohol, every sale is recorded separately, giving you a clean and organized compliance report that is ready whenever an official check or audit is required."
        />

        <ToolsSection
          heading={CONVENIENCE_STORE_TOOLS_DATA.heading}
          description={CONVENIENCE_STORE_TOOLS_DATA.paragraph}
          tools={CONVENIENCE_STORE_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={CONVENIENCE_STORE_TESTIMONIALS}
          heading={CONVENIENCE_STORE_TESTIMONIAL_DATA.heading}
          paragraph={CONVENIENCE_STORE_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={CONVENIENCE_STORE_TESTIMONIAL_DATA.secondHeading}
          secondDescription={CONVENIENCE_STORE_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={CONVENIENCE_STORE_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={CONVENIENCE_STORE_TESTIMONIAL_DATA.whyChooseDescription}
          features={CONVENIENCE_STORE_TESTIMONIAL_FEATURES}
          iconSet="convenienceStore"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="Have questions about Owners Inventory?"
            secondParagraph="Here are answers to some of the most common questions from convenience store owners to help you understand how our POS system works and what it can do for your store."
            faqs={CONVENIENCE_STORE_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Boost Your Store Today"
          description="Convenience store owners using Owners Inventory report fewer stockouts, tighter cash control, and faster checkout across every shift. Start today and put the whole operation in one place."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
