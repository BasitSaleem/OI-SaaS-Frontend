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
                "url": "https://ownersinventory.com",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "description": "Free trial available"
                },
                "description": "Food truck POS system built for mobile vendors with fast order taking, custom menu modifiers, offline billing, real-time ingredient tracking, multiple payment methods including contactless, and sales reporting accessible from any mobile device.",
                "featureList": [
                  "Fast mobile order taking with custom modifiers",
                  "Offline billing that syncs when back online",
                  "Real-time ingredient and stock tracking",
                  "Multiple payment options including cards and contactless",
                  "Custom menu and price adjustment tools",
                  "Digital and printed receipts",
                  "Customer loyalty and rewards programs",
                  "Sales and inventory reporting",
                  "Multi-location management from one dashboard",
                  "Supplier and purchase order management"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Food Truck POS System | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/food-truck-pos-system",
                "description": "Manage your food truck with fast mobile order taking, offline billing, real-time ingredient tracking, and multi-location reporting using Owners Inventory.",
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
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "POS system built for food trucks and mobile vendors with offline billing, ingredient tracking, custom modifiers, and contactless payment support.",
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
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Does the food truck POS work offline?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system supports offline billing that continues to process orders and syncs all data automatically when your connection is restored."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I customize the menu for different locations or days?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can set up custom menus, modifiers, and pricing adjustments for different stops or seasonal demand from a central dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What payment methods does the food truck POS support?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The system accepts cards, contactless payments, mobile wallets, and cash, giving your customers flexibility at every stop."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does ingredient tracking work for a food truck?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ingredients are deducted in real time with each order. Low-stock alerts notify you before you run out so you can restock between service stops."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage multiple food trucks from one account?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Owners Inventory lets you monitor sales, inventory, and staff across multiple trucks and locations from a single dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does the food truck POS system cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can start with a free trial to test the system on real shifts. Flexible plans are available based on your operation size and feature needs."
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
          title="Food Truck POS System Built for Every Service Stop"
          description="Food trucks run on tight margins, short service windows, and constant location changes. You manage payments, track ingredients, and handle staff in a space smaller than most restaurant kitchens. Owners Inventory is a platform that gives you a food truck POS system, which covers order management, ingredient stock tracking, payment processing, and end-of-service reporting in one place, so nothing gets missed between stops."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
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
