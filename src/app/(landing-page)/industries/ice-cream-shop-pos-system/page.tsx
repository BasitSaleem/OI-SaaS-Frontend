import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/ice-cream-shop-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/ice-cream-shop-pos/why-chose-banner.webp";

import {
  ICE_CREAM_SHOP_KEY_FEATURES_CARDS,
  ICE_CREAM_SHOP_WHY_CHOOSE_CARDS,
  ICE_CREAM_SHOP_FEATURE_CARDS
} from "@/constant/subindustries/iceCreamShopPosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  ICE_CREAM_SHOP_UNIFIED_CARDS,
  ICE_CREAM_SHOP_UNIFIED_HEADING,
  ICE_CREAM_SHOP_UNIFIED_PARAGRAPH,
  ICE_CREAM_SHOP_WORKFLOW_DATA,
  ICE_CREAM_SHOP_TESTIMONIALS,
  ICE_CREAM_SHOP_FAQS,
  ICE_CREAM_SHOP_TESTIMONIAL_DATA,
  ICE_CREAM_SHOP_TESTIMONIAL_FEATURES,
  ICE_CREAM_SHOP_TOOLS_DATA,
} from "@/constant/subindustries/iceCreamShopPosData";
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
        id="schema-ice-cream-shop"
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
                "description": "Ice cream shop POS software that tracks every tub flavor, ingredient count, topping, and waffle cone in real time, speeds up counter billing, manages suppliers and restock purchases, syncs inventory across multiple carts and locations, and provides detailed sales analytics.",
                "featureList": [
                  "Portion control and scoop weight tracking",
                  "Touchscreen order layout for quick menu modifiers",
                  "Real-time ice cream tub and waffle cone alerts",
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
                "name": "POS System for Ice Cream Shops & Parlors | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/ice-cream-shop-pos-system",
                "description": "Protect your margins and speed up queues with real-time flavor tracking, portions control, touchscreen modifiers, and register cash audits using Owners Inventory.",
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
                      "name": "Ice Cream Shop POS System",
                      "item": "https://www.ownersinventory.com/industries/ice-cream-shop-pos-system"
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
                "name": "Ice Cream Shop POS System",
                "description": "POS software designed for ice cream shops, gelato parlors, and dessert kiosks to manage flavor inventories, track portion weights, accelerate counter checkouts, and coordinate dairy distributors.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/ice-cream-shop-pos-system",
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
                      "reviewBody": "During summer rushes, lines go out the door. The simple touchscreen setup lets cashiers punch in double scoops with toppings in a single tap. It's incredibly fast.",
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
                      "reviewBody": "I manage three kiosks from my phone. I get real-time sales reports and know exactly when a location is running low on waffle cones without being there.",
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
                      "reviewBody": "Deploying seasonal summer menu updates used to take forever across our four shops. Now, I edit prices and push new flavors in just one click.",
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
                    "name": "Can I customize the POS screen for seasonal flavor changes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can edit your menu layout, add seasonal flavors, and adjust toppings options from the central catalog, which updates cashier screens instantly."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does ingredient tracking work for custom sundaes and scoops?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can link menu items to specific ingredients (e.g. cups, cones, ice cream tubs). The system automatically deducts them from inventory upon checkout."
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
                    "name": "How much does the Ice Cream Shop POS system cost?",
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
                "name": "How Owners Inventory Manages Ice Cream Shop Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines ice cream parlor inventory and counter operations from cold supply receiving to sales reports.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Receiving Cold Supplies",
                    "text": "Verify raw materials, milk, cream, packaging, and ice cream tubs against supplier orders. Record expiration dates on delivery."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Menu & Variant Setup",
                    "text": "Organize products by category (tubs, cones, sundaes, beverages). Group variants by flavor profiles and cup/cone sizes for quick entry."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Real-Time Ingredient Deduction",
                    "text": "Deduct tubs, cones, and toppings in real time at checkout. Low-stock alerts notify you when essential ingredients are running dry."
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
                    "text": "Compare sold scoops against physical tub levels at shift change. Track portions and waste to audit cashier accuracy."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Sales & Margin Analysis",
                    "text": "Analyze flavor popularity, hourly peak sales, and menu margins. Drive profitability by focusing on high-velocity, high-margin desserts."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="POS System for Ice Cream Shops for Faster Service and Better Store Management"
          description="Without the proper POS system in place, an ice cream business will experience slow checkout lines, inventory issues, order inaccuracies, and a challenge to handle peak-season demand. It can also lead to poor customer experiences, increased product wastage, and difficulty tracking sales and stock in real time."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={ICE_CREAM_SHOP_UNIFIED_HEADING}
          paragraph={ICE_CREAM_SHOP_UNIFIED_PARAGRAPH}
          cards={ICE_CREAM_SHOP_UNIFIED_CARDS}
          iconSet="iceCreamShop"
        />

        <WhyChoosePOS
          heading="How Our POS Solves These Challenges"
          paragraph="Owners Inventory is an all-in-one POS system designed to make ice cream businesses more efficient, less labor-intensive, and more customer-friendly, while offering a single place to handle everything."
          cards={ICE_CREAM_SHOP_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="iceCreamShop"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory That Improve Ice Cream Shop Operations"
          features={ICE_CREAM_SHOP_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={ICE_CREAM_SHOP_WORKFLOW_DATA.heading}
          paragraph={ICE_CREAM_SHOP_WORKFLOW_DATA.paragraph}
          steps={ICE_CREAM_SHOP_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Run Your Ice Cream Shop Without the Guesswork"
          description="End the delays caused by cumbersome checkouts, inconsistent stock information and inaccurate order tracking. Owners Inventory is a full-fledged point-of-sale solution for ice cream parlors that have all the elements required to ensure quick service, menu organization and daily control."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={ICE_CREAM_SHOP_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security and Role-Based Access."
          description="Employees can only access information relevant to their role. The information is only visible to the employee when it is relevant to their tasks, helping to ensure smooth and secure functioning."
        />

        <ToolsSection
          heading={ICE_CREAM_SHOP_TOOLS_DATA.heading}
          description={ICE_CREAM_SHOP_TOOLS_DATA.paragraph}
          tools={ICE_CREAM_SHOP_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={ICE_CREAM_SHOP_TESTIMONIALS}
          heading={ICE_CREAM_SHOP_TESTIMONIAL_DATA.heading}
          paragraph={ICE_CREAM_SHOP_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={ICE_CREAM_SHOP_TESTIMONIAL_DATA.secondHeading}
          secondDescription={ICE_CREAM_SHOP_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={ICE_CREAM_SHOP_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={ICE_CREAM_SHOP_TESTIMONIAL_DATA.whyChooseDescription}
          features={ICE_CREAM_SHOP_TESTIMONIAL_FEATURES}
          iconSet="iceCreamShop"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="Below are some of the most commonly asked questions about our ice cream shop POS system."
            faqs={ICE_CREAM_SHOP_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Power Your Ice Cream Shop with Our Efficient POS"
          description="In a single easy-to-use platform, optimized for daily use, our POS system enables ice cream parlors to improve checkouts, customizing orders, tracking inventory in real-time, and reporting business data."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
