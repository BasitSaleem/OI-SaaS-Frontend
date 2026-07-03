import React from "react";
import Script from "next/script";
const heroBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/ice-cream-shop-pos/hero-banner.webp";
const whyChoseBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/ice-cream-shop-pos/why-chose-banner.webp";

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
                "url": "https://ownersinventory.com",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "description": "Free trial available"
                },
                "description": "Ice cream shop POS system that speeds up counter service, captures custom flavor and topping combinations, tracks ingredient inventory in real time, processes multiple payment methods, and manages seasonal demand from one connected dashboard.",
                "featureList": [
                  "Fast counter checkout with custom flavor and topping modifiers",
                  "Real-time ingredient and stock tracking",
                  "Seasonal menu and price adjustment tools",
                  "Multiple payment options including cards and contactless",
                  "Built-in digital and printed receipts",
                  "Customer loyalty and rewards programs",
                  "Multi-location management from one dashboard",
                  "Online ordering and delivery integration",
                  "Role-based access for staff",
                  "Sales and peak-hour analytics"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Ice Cream Shop POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/ice-cream-shop-pos-system",
                "description": "Run your ice cream shop with fast counter service, flavor and topping tracking, real-time inventory, and multi-payment processing using Owners Inventory's ice cream shop POS system.",
                "inLanguage": "en",
                "isPartOf": {
                  "@type": "WebSite",
                  "name": "Owners Inventory",
                  "url": "https://ownersinventory.com"
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
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
                      "name": "Ice Cream Shop POS System",
                      "item": "https://ownersinventory.com/industries/ice-cream-shop-pos-system"
                    }
                  ]
                }
              },
              {
                "@type": "Organization",
                "name": "Owners Inventory",
                "url": "https://ownersinventory.com",
                "logo": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Support",
                  "availableLanguage": "English",
                  "url": "https://ownersinventory.com/contact"
                },
                "sameAs": [
                  "https://www.facebook.com/ownersinventory/",
                  "https://www.instagram.com/ownersinventory/",
                  "https://www.linkedin.com/company/owners-inventory/"
                ]
              },
              {
                "@type": "Product",
                "name": "Ice Cream Shop POS System",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "POS software designed for ice cream shops to handle fast counter service, custom flavor and topping orders, real-time ingredient tracking, multi-payment processing, loyalty programs, and multi-location management from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/ice-cream-shop-pos-system",
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
                    "name": "Can the POS handle custom flavor and topping combinations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system captures custom flavors, toppings, scoops, and add-ons quickly, so staff serve the exact order customers request without confusion."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it track ingredient inventory?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The POS tracks ingredient stock in real time and deducts items automatically after each sale, helping you avoid shortages and reduce waste."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I update my menu and prices for seasonal items?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can customize your menu, set prices, and add seasonal flavors or promotions directly within the system."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it support multiple payment methods?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system accepts cash, cards, and contactless payments for fast, secure checkout during busy periods."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for staff to learn?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The interface is simple and intuitive, allowing staff to take orders confidently with minimal training."
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
          title="POS System for Ice Cream Shops for Faster Service and Better Store Management"
          description="Without the proper POS system in place, an ice cream business will experience slow checkout lines, inventory issues, order inaccuracies, and a challenge to handle peak-season demand. It can also lead to poor customer experiences, increased product wastage, and difficulty tracking sales and stock in real time."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
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
          title="Security and Role-Based Access"
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
