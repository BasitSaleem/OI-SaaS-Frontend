import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/food-truck-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/food-truck-pos/why-chose-banner.webp";

import {
  FOOD_TRUCK_KEY_FEATURES_CARDS,
  FOOD_TRUCK_WHY_CHOOSE_CARDS,
  FOOD_TRUCK_FEATURE_CARDS
} from "@/constant/subindustries/foodTruckPosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  FOOD_TRUCK_UNIFIED_CARDS,
  FOOD_TRUCK_UNIFIED_HEADING,
  FOOD_TRUCK_UNIFIED_PARAGRAPH,
  FOOD_TRUCK_WORKFLOW_DATA,
  FOOD_TRUCK_TESTIMONIALS,
  FOOD_TRUCK_FAQS,
  FOOD_TRUCK_TESTIMONIAL_DATA,
  FOOD_TRUCK_TESTIMONIAL_FEATURES,
  FOOD_TRUCK_TOOLS_DATA,
} from "@/constant/subindustries/foodTruckPosData";
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
        id="schema-food-truck"
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
                "description": "Food truck POS software that tracks every menu item, food ingredient count, side, and packaging box in real time, speeds up counter billing, manages suppliers and restock purchases, syncs inventory across multiple carts and locations, and provides detailed sales analytics.",
                "featureList": [
                  "Portion control and food waste tracking",
                  "Touchscreen order layout for quick menu modifiers",
                  "Real-time food ingredient and packaging box alerts",
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
                "name": "POS System for Food Trucks | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/food-truck-pos-system",
                "description": "Protect your margins and speed up queues with real-time ingredient tracking, portion control, touchscreen modifiers, and register cash audits using Owners Inventory.",
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
                      "name": "Food Truck POS System",
                      "item": "https://www.ownersinventory.com/industries/food-truck-pos-system"
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
                "name": "Food Truck POS System",
                "description": "POS software designed for food trucks, mobile kitchens, and street food carts to manage ingredient inventories, track food waste, accelerate counter checkouts, and coordinate food distributors.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/food-truck-pos-system",
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
                      "reviewBody": "During summer rushes, lines go out the door. The simple touchscreen setup lets cashiers punch in meal combos with extra sides in a single tap. It's incredibly fast.",
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
                      "reviewBody": "I manage three kiosks from my phone. I get real-time sales reports and know exactly when a location is running low on packaging boxes without being there.",
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
                      "reviewBody": "Deploying seasonal menu updates used to take forever across our four shops. Now, I edit prices and push new flavors in just one click.",
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
                    "name": "Can I customize the POS screen for seasonal menu changes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can edit your menu layout, add seasonal items, and adjust sides and options from the central catalog, which updates cashier screens instantly."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does ingredient tracking work for custom orders and combos?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can link menu items to specific ingredients (e.g. buns, patties, sauces, packaging). The system automatically deducts them from inventory upon checkout."
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
                    "name": "How much does the Food Truck POS system cost?",
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
                "name": "How Owners Inventory Manages Food Truck Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines ice cream parlor inventory and counter operations from cold supply receiving to sales reports.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Receiving Fresh Supplies",
                    "text": "Verify raw materials, fresh ingredients, sauces, packaging, and supplies against supplier orders. Record expiration dates on delivery."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Menu & Variant Setup",
                    "text": "Organize products by category (menu categories, items, sides, beverages). Group variants by flavor profiles and cup/cone sizes for quick entry."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Real-Time Ingredient Deduction",
                    "text": "Deduct ingredients, sides, and packaging in real time at checkout. Low-stock alerts notify you when essential ingredients are running dry."
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
                    "text": "Compare sold meals against physical stock levels at shift change. Track portions and waste to audit cashier accuracy."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Sales & Margin Analysis",
                    "text": "Analyze dish popularity, hourly peak sales, and menu margins. Drive profitability by focusing on high-velocity, high-margin desserts."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Food Truck POS System Built for Every Service Stop"
          description="Food trucks run on tight margins, short service windows, and constant location changes. You manage payments, track ingredients, and handle staff in a space smaller than most restaurant kitchens. Owners Inventory is a platform that gives you a food truck POS system, which covers order management, ingredient stock tracking, payment processing, and end-of-service reporting in one place, so nothing gets missed between stops."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={FOOD_TRUCK_UNIFIED_HEADING}
          paragraph={FOOD_TRUCK_UNIFIED_PARAGRAPH}
          cards={FOOD_TRUCK_UNIFIED_CARDS}
          iconSet="foodTruck"
        />

        <WhyChoosePOS
          heading="How Owners Inventory Solves These Challenges "
          paragraph="Owners Inventory connects ingredient stock, order management, payment processing, location-based reporting, and staff accountability into one system, so the same problems stop repeating at every service."
          cards={FOOD_TRUCK_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="foodTruck"
        />

        <KeyHighlights
          heading="Key Features of Our Food Truck POS System"
          features={FOOD_TRUCK_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={FOOD_TRUCK_WORKFLOW_DATA.heading}
          paragraph={FOOD_TRUCK_WORKFLOW_DATA.paragraph}
          steps={FOOD_TRUCK_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Manage Your Food Truck Operations With Confidence"
          description="Food truck operators using the Owners Inventory food truck POS system report fewer ingredient shortages mid-service, more accurate end-of-day cash counts, and a clearer picture of which locations actually make money. Get started for free and see the difference it makes within your first week of service."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={FOOD_TRUCK_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance"
          description="Every transaction in our food truck POS is logged under the staff member who handled it, with an exact timestamp. No sale, void, or refund goes unrecorded. Role-based access control keeps each role limited to what it needs. Staff taking orders and processing payments can't edit stock counts, adjust prices, or view sales reports. Owners and managers have full access to session summaries, food cost data, and payment records."
          secondDescription="After every session, your sales data, ingredient records, and payment history back up automatically to encrypted cloud storage. A lost or damaged tablet won't take your records with it. Payments run through PCI DSS-compliant infrastructure, so customer payment data stays protected. "
        />

        <ToolsSection
          heading={FOOD_TRUCK_TOOLS_DATA.heading}
          description={FOOD_TRUCK_TOOLS_DATA.paragraph}
          tools={FOOD_TRUCK_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={FOOD_TRUCK_TESTIMONIALS}
          heading={FOOD_TRUCK_TESTIMONIAL_DATA.heading}
          paragraph={FOOD_TRUCK_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={FOOD_TRUCK_TESTIMONIAL_DATA.secondHeading}
          secondDescription={FOOD_TRUCK_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={FOOD_TRUCK_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={FOOD_TRUCK_TESTIMONIAL_DATA.whyChooseDescription}
          features={FOOD_TRUCK_TESTIMONIAL_FEATURES}
          iconSet="foodTruck"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="Have questions about Owners Inventory for food trucks? Here are answers to the most common questions from food truck owners, mobile food vendors, and multi-truck operators."
            faqs={FOOD_TRUCK_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Take Control of Your Food Truck Today"
          description="Food truck operators using Owners Inventory report fewer ingredient shortages mid-service, tighter cash control at every service close, and a clearer picture of which stops actually make money. Start today and put your entire operation in one place."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
