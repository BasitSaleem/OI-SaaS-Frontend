import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/candy-store-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/candy-store-pos/why-chose-banner.webp";

import {
  CANDY_STORE_KEY_FEATURES_CARDS,
  CANDY_STORE_WHY_CHOOSE_CARDS,
  CANDY_STORE_FEATURE_CARDS
} from "@/constant/subindustries/candyStorePosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  CANDY_STORE_UNIFIED_CARDS,
  CANDY_STORE_UNIFIED_HEADING,
  CANDY_STORE_UNIFIED_PARAGRAPH,
  CANDY_STORE_WORKFLOW_DATA,
  CANDY_STORE_TESTIMONIALS,
  CANDY_STORE_FAQS,
  CANDY_STORE_TESTIMONIAL_DATA,
  CANDY_STORE_TESTIMONIAL_FEATURES,
  CANDY_STORE_TOOLS_DATA,
} from "@/constant/subindustries/candyStorePosData";
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
        id="schema-candy-store"
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
                "description": "Candy store POS software that tracks every candy jar variety, ingredient count, chocolate, and gift box in real time, speeds up counter billing, manages suppliers and restock purchases, syncs inventory across multiple carts and locations, and provides detailed sales analytics.",
                "featureList": [
                  "Portion control and weight tracking",
                  "Touchscreen order layout for quick menu modifiers",
                  "Real-time candy jar and gift bag alerts",
                  "Cashier shift handover and register cash reconciliation",
                  "Multi-branch catalog updates and flavor sync",
                  "Split bill and digital wallet payment integration",
                  "Ingredient waste and melted tub tracking",
                  "Peak hour sales velocity analytics",
                  "Offline counter billing capability",
                  "Online pick-up orders synchronization",
                  "Customer loyalty punch-card software",
                  "Role-based cashier drawer security"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Candy Stores & Shops | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/candy-store-pos-system",
                "description": "Protect your margins and speed up queues with real-time candy tracking, portions control, touchscreen modifiers, and register cash audits using Owners Inventory.",
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
                      "name": "Candy Store POS System",
                      "item": "https://www.ownersinventory.com/industries/candy-store-pos-system"
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
                "name": "Candy Store POS System",
                "description": "POS software designed for candy stores, sweet shops, and confectionery kiosks to manage candy inventories, track weights, accelerate counter checkouts, and coordinate candy distributors.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/candy-store-pos-system",
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
                      "reviewBody": "Portion control was a massive issue before. Now, with accurate waste tracking and checkout logs, we slashed ingredient shrinkage by 15% in our first month.",
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
                      "reviewBody": "During summer rushes, lines go out the door. The simple touchscreen setup lets cashiers punch in custom candy bags with chocolates in a single tap. It's incredibly fast.",
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
                      "reviewBody": "I manage three kiosks from my phone. I get real-time sales reports and know exactly when a location is running low on gift boxes without being there.",
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
                      "reviewBody": "Deploying seasonal holiday candy updates used to take forever across our four shops. Now, I edit prices and push new flavors in just one click.",
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
                    "name": "Can I customize the POS screen for seasonal candy updates?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can edit your menu layout, add seasonal candies, and adjust packaging options from the central catalog, which updates cashier screens instantly."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does ingredient tracking work for custom mixes and candy bags?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can link menu items to specific ingredients (e.g. bags, jars, bulk candy stock). The system automatically deducts them from inventory upon checkout."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage multiple shops or mobile trucks?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Track sales, inventory levels, and transfer stock across multiple parlors, carts, and trucks from one cloud account."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does the Candy Store POS system cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can start for free with our 3-month trial to test the system during real shifts. After the trial, flexible plans are based on your shop's size and feature requirements."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system support split bills for families or groups?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The checkout system allows splitting transactions among multiple card, cash, or mobile payments with a single tap."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is training difficult for seasonal or new staff?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Not at all. The interface is visual and highly intuitive. Cashiers can master the billing system in under 15 minutes, reducing onboarding effort."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Candy Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines ice cream parlor inventory and counter operations from cold supply receiving to sales reports.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Receiving Candy Supplies",
                    "text": "Verify raw materials, gummies, chocolates, packaging, and candy jars against supplier orders. Record expiration dates on delivery."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Menu & Variant Setup",
                    "text": "Organize products by category (jars, bags, boxes, beverages). Group variants by flavor profiles and cup/cone sizes for quick entry."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Real-Time Ingredient Deduction",
                    "text": "Deduct jars, bags, and chocolates in real time at checkout. Low-stock alerts notify you when essential ingredients are running dry."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Supplier Ordering",
                    "text": "Generate purchase orders directly from the dashboard when stock drops. Track supplier fulfillment status and delivery history."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Shift Stock Auditing",
                    "text": "Compare sold candy weight against physical jar levels at shift change. Track portions and waste to audit cashier accuracy."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Sales & Margin Analysis",
                    "text": "Analyze candy popularity, hourly peak sales, and menu margins. Drive profitability by focusing on high-velocity, high-margin desserts."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Candy Store POS System: Sell More, Waste Less, and Track Better"
          description="Candy stores lose revenue to expired stock, empty shelves before peak season, and slow checkout lines. Owners Inventory gives candy stores a POS system that tracks inventory in real time, boosts sales through smarter restocking, and keeps every candy shop transaction accurate. It ensures that your customers get their favorite items with accurate order processing."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={CANDY_STORE_UNIFIED_HEADING}
          paragraph={CANDY_STORE_UNIFIED_PARAGRAPH}
          cards={CANDY_STORE_UNIFIED_CARDS}
          iconSet="candyStore"
        />

        <WhyChoosePOS
          heading= "How Our POS System for Candy Stores Solves These Challenges"
          paragraph= "Owners Inventory works as the best POS system for candy stores. It streamlines store operations, manages inventory accurately, and runs your business from a single platform without requiring separate third-party integration tools."
          cards={CANDY_STORE_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="candyStore"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory POS"
          features={CANDY_STORE_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={CANDY_STORE_WORKFLOW_DATA.heading}
          paragraph={CANDY_STORE_WORKFLOW_DATA.paragraph}
          steps={CANDY_STORE_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title= "Break Free from Candy Inventory Guesswork"
          description="Candy stores that track inventory, process checkouts faster, and give customer loyalty rewards consistently build the kind of candy store business that keeps customers coming back season after season. Owners Inventory gives you the tools to make that happen from day one."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={CANDY_STORE_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security and Access Control."
          description="Our POS maintains complete security of the store's private data. With role-based access, staff get limited access to information that is only relevant to their assigned job. Each transaction is processed with secure payment gateways that keep the financial data of customers protected."
        />

        <ToolsSection
          heading={CANDY_STORE_TOOLS_DATA.heading}
          description={CANDY_STORE_TOOLS_DATA.paragraph}
          tools={CANDY_STORE_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={CANDY_STORE_TESTIMONIALS}
          heading={CANDY_STORE_TESTIMONIAL_DATA.heading}
          paragraph={CANDY_STORE_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={CANDY_STORE_TESTIMONIAL_DATA.secondHeading}
          secondDescription={CANDY_STORE_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={CANDY_STORE_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={CANDY_STORE_TESTIMONIAL_DATA.whyChooseDescription}
          features={CANDY_STORE_TESTIMONIAL_FEATURES}
          iconSet="candyStore"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="The following are some of the frequently asked questions about our candy store POS system."
            faqs={CANDY_STORE_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="The Sweetest Move You Will Make for Your Business"
          description="Stop running your candy store on outdated tools, and start building the kind of store that brings customers back every single time they want sweet treats done right."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
