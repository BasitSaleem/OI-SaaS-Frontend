import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/sporting-goods-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/sporting-goods-pos/why-chose-banner.webp";

import {
  SPORTING_GOODS_KEY_FEATURES_CARDS,
  SPORTING_GOODS_WHY_CHOOSE_CARDS,
  SPORTING_GOODS_FEATURE_CARDS
} from "@/constant/subindustries/sportingGoodsPosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  SPORTING_GOODS_UNIFIED_CARDS,
  SPORTING_GOODS_UNIFIED_HEADING,
  SPORTING_GOODS_UNIFIED_PARAGRAPH,
  SPORTING_GOODS_WORKFLOW_DATA,
  SPORTING_GOODS_TESTIMONIALS,
  SPORTING_GOODS_FAQS,
  SPORTING_GOODS_TESTIMONIAL_DATA,
  SPORTING_GOODS_TESTIMONIAL_FEATURES,
  SPORTING_GOODS_TOOLS_DATA,
} from "@/constant/subindustries/sportingGoodsPosData";
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
        id="schema-sporting-goods"
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
                "description": "Sporting goods POS software that tracks every catalog item, variant (size, color, brand) and stock level in real time, speeds up register checkouts, manages distributors and purchase orders, syncs inventory across multiple store locations, and provides detailed sales margin analytics.",
                "featureList": [
                  "SKU-level stock and variant tracking",
                  "Touchscreen order layout for quick product customisation",
                  "Real-time stock alerts and automated reorder points",
                  "Cashier shift handover and drawer cash reconciliation",
                  "Multi-branch catalog updates and database sync",
                  "Split bill and digital wallet payment integration",
                  "Defective items and returns tracking",
                  "Peak hour sales velocity analytics",
                  "Offline register billing capability",
                  "Online pick-up orders synchronization",
                  "Customer loyalty programs and store credit software",
                  "Role-based cashier drawer security"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Sporting Goods Stores | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/sporting-goods-pos-system",
                "description": "Protect your retail margins and speed up queues with real-time stock tracking, variant matrix control, touchscreen billing, and register cash audits using Owners Inventory.",
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
                      "name": "Sporting Goods POS System",
                      "item": "https://www.ownersinventory.com/industries/sporting-goods-pos-system"
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
                "name": "Sporting Goods POS System",
                "description": "POS software designed for sporting goods stores, athletic wear boutiques, and sports gear retailers to manage variant-level inventory, track store performance, accelerate register checkouts, and coordinate purchase orders.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/sporting-goods-pos-system",
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
                        "name": "Marcus G."
                      },
                      "reviewBody": "Inventory tracking by variant size and color was a massive issue before. Now, with barcode scanning and checkout logs, we slashed product shrinkage by 15% in our first month.",
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
                        "name": "Elena K."
                      },
                      "reviewBody": "During busy retail rushes, lines go out the door. The simple touchscreen setup lets cashiers scan barcodes and apply discounts in a single tap. It's incredibly fast.",
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
                        "name": "Rayan S."
                      },
                      "reviewBody": "I manage three retail stores from my phone. I get real-time sales reports and know exactly when a location is running low on popular catalog variants without being there.",
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
                        "name": "Maya L."
                      },
                      "reviewBody": "Deploying catalog pricing updates used to take forever across our four stores. Now, I edit wholesale costs and push retail prices in just one click.",
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
                    "name": "Can I customize the POS screen for seasonal catalog changes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can edit your product catalog, add seasonal items, and adjust sizes and colors from the central dashboard, updating register screens instantly."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does inventory tracking work for custom variants and bundles?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can link items to specific variant barcodes (e.g. sizes, colors, material types). The system automatically deducts them from your stock upon checkout."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage multiple retail shops or online channels?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Track sales, inventory levels, and transfer stock across multiple store locations and online storefronts from one cloud account."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does the Sporting Goods POS system cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can start for free with our 3-month trial to test the system during real shifts. After the trial, flexible plans are based on your shop's size and feature requirements."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system support gift cards and promotional campaigns?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The checkout system allows managing gift cards, store credit, and applying promotional discounts with role-based cashier limits."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is training difficult for seasonal or new staff?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Not at all. The interface is highly visual and intuitive. Cashiers can master barcode scanning and billing in under 15 minutes, reducing onboarding effort."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Sporting Goods Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines sporting goods inventory and counter operations from receiving to sales reports.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Receiving Warehouse Shipments",
                    "text": "Verify raw stock, clothing apparel, sports gear, and equipment against supplier orders. Record variants on delivery."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Catalog & Variant Setup",
                    "text": "Organize products by category (apparel, equipment, accessories). Group variants by size, color, and model for quick scanning."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Real-Time SKU Deduction",
                    "text": "Deduct sizes, colors, and stock in real time at checkout. Low-stock alerts notify you when essential items are running dry."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Supplier Reordering",
                    "text": "Generate purchase orders directly from the dashboard when stock drops. Track supplier fulfillment status and delivery history."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Shift Stock Auditing",
                    "text": "Compare sold products against physical stock levels at shift change. Track damaged items and returns to audit cashier accuracy."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Sales & Margin Analysis",
                    "text": "Analyze product popularity, daily peak sales, and catalog margins. Drive profitability by focusing on high-velocity, high-margin gears."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Sporting Goods POS Software for Better Inventory Visibility"
          description="Sporting goods retailers managing inventory manually across seasons deal with stock gaps, overselling, and slow checkout that quietly drains revenue every trading day. Owners Inventory is a sporting goods POS built to streamline every aspect of inventory management and syncing in-store and online channels in real-time. It gives sporting goods retailers the point-of-sale control needed to run their stores at peak performance."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={SPORTING_GOODS_UNIFIED_HEADING}
          paragraph={SPORTING_GOODS_UNIFIED_PARAGRAPH}
          cards={SPORTING_GOODS_UNIFIED_CARDS}
          iconSet="sportingGoods"
        />

        <WhyChoosePOS
          heading="How Our Sporting Goods POS Software Solves These Challenges"
          paragraph="Our software is built specifically for sporting goods retail. It has a powerful management system that tracks inventory accurately in real time and helps you run your sporting goods store operations efficiently."
          cards={SPORTING_GOODS_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="sportingGoods"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory that Transform Sporting Goods Store Operations"
          features={SPORTING_GOODS_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={SPORTING_GOODS_WORKFLOW_DATA.heading}
          paragraph={SPORTING_GOODS_WORKFLOW_DATA.paragraph}
          steps={SPORTING_GOODS_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Organize Your Sporting Goods Inventory Effectively"
          description="Every empty shelf during peak season and every over-sold e-commerce listing is revenue the sporting goods business absorbs silently. Owners Inventory keeps stock levels accurate, channels synced, and customer loyalty rewarded so the store performs at its best every season."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={SPORTING_GOODS_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance."
          description="Staff permissions are assigned according to their duty roles. Counter staff handle transactions only, while higher-level employees, such as managers, handle crucial tasks like managing financial reports and making purchase decisions for restocking. The POS helps maintain security protocols by limiting access to sensitive information."
        />

        <ToolsSection
          heading={SPORTING_GOODS_TOOLS_DATA.heading}
          description={SPORTING_GOODS_TOOLS_DATA.paragraph}
          tools={SPORTING_GOODS_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={SPORTING_GOODS_TESTIMONIALS}
          heading={SPORTING_GOODS_TESTIMONIAL_DATA.heading}
          paragraph={SPORTING_GOODS_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={SPORTING_GOODS_TESTIMONIAL_DATA.secondHeading}
          secondDescription={SPORTING_GOODS_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={SPORTING_GOODS_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={SPORTING_GOODS_TESTIMONIAL_DATA.whyChooseDescription}
          features={SPORTING_GOODS_TESTIMONIAL_FEATURES}
          iconSet="sportingGoods"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="The following are some of the common questions asked about our sporting goods POS software."
            faqs={SPORTING_GOODS_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Stock Smart and Sell Every Season"
          description="Our sporting goods software helps businesses track inventory accurately, reward customer loyalty consistently, and restock based on sales trends, building a retail system that grows stronger every season."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
