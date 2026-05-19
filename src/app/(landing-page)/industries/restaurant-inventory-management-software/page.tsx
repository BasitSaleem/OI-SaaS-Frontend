import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/restaurant-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/restaurant-inventory-management-software/why-chose-banner.webp";

import {
  RESTAURANT_INVENTORY_KEY_FEATURES_CARDS,
  RESTAURANT_INVENTORY_WHY_CHOOSE_CARDS,
  RESTAURANT_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/restaurantInventoryManagementSoftwareData";

import dynamic from "next/dynamic";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

const IndustriesCallToAction = dynamic(() => import("@/components/pages/industries-page/IndustriesCallToAction"), { ssr: true });
const KeyHighlights = dynamic(() => import("@/components/pages/features-page/point-of-sale/KeyHighlights"), { ssr: true });
const WhyChoosePOS = dynamic(() => import("@/components/pages/features-page/point-of-sale/WhyChoosePOS"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/pages/landing-page/FAQSection"), { ssr: true });
const IndustryUnifiedPlatform = dynamic(() => import("@/components/pages/industries-page/IndustryUnifiedPlatform"), { ssr: true });
import {
  RESTAURANT_INVENTORY_UNIFIED_CARDS,
  RESTAURANT_INVENTORY_UNIFIED_HEADING,
  RESTAURANT_INVENTORY_UNIFIED_PARAGRAPH,
  RESTAURANT_INVENTORY_WORKFLOW_DATA,
  RESTAURANT_INVENTORY_TESTIMONIALS,
  RESTAURANT_INVENTORY_FAQS,
  RESTAURANT_INVENTORY_TESTIMONIAL_DATA,
  RESTAURANT_INVENTORY_TESTIMONIAL_FEATURES,
  RESTAURANT_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/restaurantInventoryManagementSoftwareData";
const InventoryWorkflow = dynamic(() => import("@/components/pages/industries-page/InventoryWorkflow"), { ssr: true });
const IndustriesTestimonial = dynamic(() => import("@/components/pages/industries-page/IndustriesTestimonial"), { ssr: true });
const IndustriesFeaturesSection = dynamic(() => import("@/components/pages/industries-page/IndustriesFeaturesSection"), { ssr: true });
const ToolsSection = dynamic(() => import("@/components/pages/landing-page/ToolsSection"), { ssr: true });
const VoicesRealBusiness = dynamic(() => import("@/components/pages/landing-page/VoicesRealBusiness"), { ssr: true });
const SecurityCompliance = dynamic(() => import("@/components/pages/industries-page/securityCompliance"), { ssr: true });
const IndustriesHardwareControl = dynamic(() => import("@/components/pages/industries-page/IndustriesHardwareControl"), { ssr: true });

const Page = () => {
  return (
    <>
      <Script
        id="schema-restaurant"
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
                "logo": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "description": "Free trial available"
                },
                "description": "Restaurant inventory management software that automates ingredient tracking, controls food costs, reduces waste, manages supplier orders, and provides real-time inventory visibility across kitchen and storage.",
                "featureList": [
                  "Ingredient-level inventory tracking",
                  "Recipe and menu costing",
                  "Food cost and cost of goods tracking",
                  "Vendor and purchase order management",
                  "Stock adjustment and transfer tracking",
                  "Expiry date alerts and waste reduction tools",
                  "Automated inventory updates",
                  "Omnichannel sales integration for dine-in, takeaway, and delivery",
                  "Reporting and analytics for food cost and inventory",
                  "Role-based access control"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Restaurant Inventory Management Software | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/restaurant-inventory-management-software",
                "description": "Track ingredients in real time, control food costs, reduce waste, and manage supplier orders with Owners Inventory's restaurant inventory management software.",
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
                      "name": "Restaurant",
                      "item": "https://www.ownersinventory.com/industries/restaurant-inventory-management-software"
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
                "name": "Restaurant Inventory Management Software",
                "description": "Inventory management software designed for restaurants to automate ingredient tracking, manage recipe-level food costs, reduce waste, track supplier orders, and sync inventory across dine-in, takeaway, and delivery channels in real time.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/restaurant-inventory-management-software",
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
                        "name": "Liam C"
                      },
                      "reviewBody": "Inventory used to be something we checked at the end of the day. Now it is already updated while we are working. Their software has made things a lot easier without changing how our kitchen operates.",
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
                        "name": "Noah B"
                      },
                      "reviewBody": "We had issues with food cost inconsistency, especially across busy days. Since using the system, we have been able to track usage better and avoid unnecessary over-ordering. It definitely improved how we manage our stock.",
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
                        "name": "Tessa J"
                      },
                      "reviewBody": "What I like most is the clarity. We are not second-guessing stock levels or relying on manual notes anymore. It has led us to practical improvement.",
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
                    "name": "How does Owners Inventory handle ingredient-level tracking?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The software tracks ingredient-level inventory based on recipe usage. It tracks usage accurately and provides visibility of what exactly is being used in the kitchen with advanced AI features."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can Owners Inventory track actual and theoretical food costs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the system compares actual usage with theoretical usage based on recipes. This helps identify variances, control food cost, and reduce losses caused by overuse, waste, or untracked consumption."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the system manage inventory across multiple locations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "With centralized control access, Owners Inventory provides visibility into stocks across multiple locations. It monitors inventory, tracks transfers, and provides consistent real-time updates from a single dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does Owners Inventory reduce dependency on manual counting?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Inventory is automatically updated through usage tracking. These features reduce the need for manual counting and improve accuracy across different restaurant operations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is Owners Inventory suitable for a small restaurant?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the system is suitable for restaurants of every size. It keeps both small and large inventories efficiently managed, simplifies routine operations, and improves accuracy in reports. It provides restaurant owners with better control over stock."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Restaurant Inventory Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines restaurant inventory management from ingredient procurement to reporting and optimization.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Ingredient Procurement",
                    "text": "The system creates purchase orders based on stock levels and demand. It tracks and keeps accurate records of incoming inventory, ensuring timely delivery of essential kitchen items to support smooth restaurant operations."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Stock Organization",
                    "text": "Every item in inventory is categorized by name, storage area, and kitchen section, which helps staff find items quickly. This ensures real-time visibility across all stock locations and keeps restaurant operations smooth."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Recipe-Based Deduction",
                    "text": "Menu items are linked with ingredient usage in the system. When an order is processed, inventory is automatically deducted based on recipes. This keeps stock levels accurate and shows real-time ingredient consumption without manual calculation."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Order and POS Processing",
                    "text": "Orders are recorded accurately and synced with inventory in real time to ensure accurate stock counts on reports. After every order, inventory is updated instantly without disrupting restaurant operation workflows."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Reporting and Optimization",
                    "text": "The system generates reports on inventory usage, food costs, and variances, which help restaurants identify inefficiencies. Reports provide accurate insights that support better decision-making, reduce waste, and eliminate operational inefficiencies."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Restaurant Inventory Management Software for Better Inventory Control"
          description="Our restaurant inventory management software handles complex inventories with precision. It automates processes and streamlines restaurant operations while providing real-time inventory insights. With food cost control and COG tracking, it boosts profitability. The software keeps everything visible in real time across your kitchen and storage."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={RESTAURANT_INVENTORY_UNIFIED_HEADING}
          paragraph={RESTAURANT_INVENTORY_UNIFIED_PARAGRAPH}
          cards={RESTAURANT_INVENTORY_UNIFIED_CARDS}
          iconSet="restaurantInventory"
        />

        <WhyChoosePOS
          heading="How Owners Inventory Solves Restaurant Challenges"
          paragraph="Owners Inventory streamlines restaurant operations, automates inventory management, and reduces waste. It improves accuracy and kitchen efficiency with advanced management features."
          cards={RESTAURANT_INVENTORY_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="restaurantInventory"
        />

        <KeyHighlights
          heading="Key Features of Our Restaurant Inventory Software"
          features={RESTAURANT_INVENTORY_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={RESTAURANT_INVENTORY_WORKFLOW_DATA.heading}
          paragraph={RESTAURANT_INVENTORY_WORKFLOW_DATA.paragraph}
          steps={RESTAURANT_INVENTORY_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Simplify Inventory and Maximize Results"
          description="Bring clarity to your inventory, improve stock control, and reduce unnecessary losses. Manage your restaurant operations with a system built to support real kitchen workflows."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={RESTAURANT_INVENTORY_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance."
          description="It provides controlled access to staff based on their roles. The system records transactions securely. Maintaining detailed logs promotes transparency in inventory and sales activities."
          secondDescription="The inventory control software for restaurants helps them reduce errors, prevent unauthorized access to sensitive data, and maintain accurate records of all operations for better internal control or compliance purposes."
        />

        <ToolsSection
          heading={RESTAURANT_INVENTORY_TOOLS_DATA.heading}
          description={RESTAURANT_INVENTORY_TOOLS_DATA.paragraph}
          tools={RESTAURANT_INVENTORY_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={RESTAURANT_INVENTORY_TESTIMONIALS}
          heading={RESTAURANT_INVENTORY_TESTIMONIAL_DATA.heading}
          paragraph={RESTAURANT_INVENTORY_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={RESTAURANT_INVENTORY_TESTIMONIAL_DATA.secondHeading}
          secondDescription={RESTAURANT_INVENTORY_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={RESTAURANT_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={RESTAURANT_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
          features={RESTAURANT_INVENTORY_TESTIMONIAL_FEATURES}
          iconSet="restaurantInventory"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="The Restaurant Inventory Management Software is aimed at ensuring the ease of daily operations and efficiency. The following are some of the responses to typical questions by Restaurant Inventory Management Software."
            faqs={RESTAURANT_INVENTORY_FAQS}
            buttonText="Start Now"
          />
        </div>

        <IndustriesHardwareControl
          title="Take Control of Your Kitchen Inventory Today"
          description="Gain real-time insights and make smarter decisions for every dish you serve. Streamline your restaurant operations, reduce food waste, and boost profitability with our restaurant inventory management software."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
