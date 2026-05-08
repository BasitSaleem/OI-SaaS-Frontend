import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/coffee-shop-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/coffee-shop-pos/why-chose-banner.webp";

import {
  COFFEE_SHOP_KEY_FEATURES_CARDS,
  COFFEE_SHOP_WHY_CHOOSE_CARDS,
  COFFEE_SHOP_FEATURE_CARDS
} from "@/constant/subindustries/coffeeShopPosData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  COFFEE_SHOP_UNIFIED_CARDS,
  COFFEE_SHOP_UNIFIED_HEADING,
  COFFEE_SHOP_UNIFIED_PARAGRAPH,
  COFFEE_SHOP_WORKFLOW_DATA,
  COFFEE_SHOP_TESTIMONIALS,
  COFFEE_SHOP_FAQS,
  COFFEE_SHOP_TESTIMONIAL_DATA,
  COFFEE_SHOP_TESTIMONIAL_FEATURES,
  COFFEE_SHOP_TOOLS_DATA,
} from "@/constant/subindustries/coffeeShopPosData";
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
        id="schema-coffee-shop"
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
                "description": "Coffee shop POS system that speeds up counter orders, captures custom drink details, automates kitchen routing, syncs inventory in real time, processes multiple payment methods, and connects in-store, online, and delivery channels from one unified dashboard.",
                "featureList": [
                  "Fast counter order capture with custom drink modifiers",
                  "Automatic order routing to preparation stations",
                  "Real-time inventory tracking for ingredients",
                  "Multiple payment options including cards and contactless",
                  "Built-in digital and printed receipt system",
                  "Custom menu and price adjustment tools",
                  "Multi-location management from one dashboard",
                  "Centralized sales dashboard with real-time visibility",
                  "Role-based access for staff",
                  "Online order and delivery platform integration",
                  "Detailed sales and peak-hour analytics",
                  "Integrations with CRM, analytics, and payment gateways"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Point of Sale System for Coffee Shops | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/coffee-shop-pos-system",
                "description": "Run your coffee shop with fast counter ordering, real-time inventory tracking, multi-payment processing, and unified online and delivery sales using Owners Inventory's POS system for coffee shops.",
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
                      "name": "Coffee Shops",
                      "item": "https://www.ownersinventory.com/industries/coffee-shop-pos-system"
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
                "name": "Coffee Shop POS System",
                "description": "POS software designed for coffee shops and cafes to handle fast counter ordering, custom drink modifiers, automated order routing, real-time ingredient tracking, multi-payment processing, online and delivery integration, and multi-location management from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/coffee-shop-pos-system",
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
                        "name": "Ayesha M"
                      },
                      "reviewBody": "Managing the peak morning rush became easier. Orders move faster from counters to the kitchen, and the setup keeps everything organized without confusion.",
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
                        "name": "Amanda K"
                      },
                      "reviewBody": "Our payments, orders, and inventory stay in sync. The software helped us reduce manual effort and simplified daily operational management.",
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
                        "name": "Samantha B"
                      },
                      "reviewBody": "As our coffee shop expanded, the software scaled smoothly. Managing multiple orders is now much simpler than before.",
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
                    "name": "What makes your POS suitable for coffee shops?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our POS for coffee shops handles fast data entry, custom order details, and quick checkout procedures at the counter. It provides consistent performance during the morning rush and keeps daily cafe tasks streamlined."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does Owners Inventory manage custom coffee orders?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It captures every order detail precisely, such as coffee type, milk, size, sugar quantity, and other modifiers. This helps staff deliver the exact order the customer has asked for, which increases satisfaction."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does it handle inventory for coffee shops?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Owners Inventory effectively manages inventory operations by providing real-time visibility into stock levels, organizing items by category, and automating stock deduction after each order is completed."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How will your POS help my coffee shop grow?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "By improving process flow, reducing errors, and managing customer data, it helps coffee shops increase efficiency, revenue, and overall growth. The system supports long-term goals with advanced features to handle large volumes of data."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for staff to learn and use the system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Our coffee shop POS is well-designed and easy to use. Staff do not require specific technical training to use Owners Inventory effectively."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory POS Manages Coffee Shop Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines coffee shop operations from counter ordering to inventory sync.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Ordering from the Counter",
                    "text": "Customers place orders at the counter using the POS system. Staff capture orders quickly with a few clicks, including custom drink modifiers, ensuring precise order entry from the start."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Automatic Order Routing",
                    "text": "After the order is confirmed, it is automatically sent to the correct preparation station, whether for coffee brewing or other items. This removes verbal coordination and improves staff efficiency."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Preparation Tracking",
                    "text": "Kitchen and barista staff monitor orders from the dashboard in real time. This keeps preparation status visible and improves coordination between counter and prep teams."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Payment Processing",
                    "text": "Customers complete payment using cash, cards, or contactless methods. The system records transaction details instantly and updates daily sales data for accurate financial records."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Inventory Data Sync",
                    "text": "Once the order is completed, the system automatically updates inventory levels for ingredients, providing real-time data for better stock management."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reporting and Analysis",
                    "text": "Detailed reports show sales performance, stock movement, and peak hour insights, helping coffee shop owners plan smarter purchases and improve profitability."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
      <SubIndustriesHero
        title="Point of Sale System for Coffee Shops: Promoting Smooth Operations"
        description="Every coffee shop requires fast, clear, and organized operations during busy hours at its counters. Our all-in-one POS program helps simplify orders, payments, and workflows for coffee shops and cafes. It improves efficiency, reduces order delays, and keeps shop operations smooth while helping you grow your business with ease and improving customer experience."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={COFFEE_SHOP_UNIFIED_HEADING}
        paragraph={COFFEE_SHOP_UNIFIED_PARAGRAPH}
        cards={COFFEE_SHOP_UNIFIED_CARDS}
        iconSet="coffeeShop"
      />

      <WhyChoosePOS
        heading="How Owners Inventory Point-of-Sale System Solves These Challenges"
        paragraph="Our system connects POS, software, and hardware to improve the operational efficiency of coffee shops. It enables cafe owners to streamline their workflows. Cafe owners can leverage smooth and accurate operations across the shop with our coffee point of sale system."
        cards={COFFEE_SHOP_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="coffeeShop"
      />

      <KeyHighlights
        heading="Key Features of Owners Inventory POS"
        features={COFFEE_SHOP_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={COFFEE_SHOP_WORKFLOW_DATA.heading}
        paragraph={COFFEE_SHOP_WORKFLOW_DATA.paragraph}
        steps={COFFEE_SHOP_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Smarter POS for Busy Coffee Shops"
        description="Simplify your coffee shop operations with an all-in-one POS that improves order management, speeds up transactions, and boosts daily task efficiency."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={COFFEE_SHOP_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="Every transaction is recorded securely. The private financial data of customers is protected with security protocols. It ensures accurate payment tracking and controlled system usage with role-based access features."
        secondDescription="It promotes privacy and keeps cafes and bakeries compliant with operational standards while maintaining reliable data across all POS activities."
      />

      <ToolsSection
        heading={COFFEE_SHOP_TOOLS_DATA.heading}
        description={COFFEE_SHOP_TOOLS_DATA.paragraph}
        tools={COFFEE_SHOP_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={COFFEE_SHOP_TESTIMONIALS}
        heading={COFFEE_SHOP_TESTIMONIAL_DATA.heading}
        paragraph={COFFEE_SHOP_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={COFFEE_SHOP_TESTIMONIAL_DATA.secondHeading}
        secondDescription={COFFEE_SHOP_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={COFFEE_SHOP_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={COFFEE_SHOP_TESTIMONIAL_DATA.whyChooseDescription}
        features={COFFEE_SHOP_TESTIMONIAL_FEATURES}
        iconSet="coffeeShop"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading= "FAQS"
          paragraph= "The following are some of the common questions that are asked about our coffee shop point-of-sale system."
          faqs={COFFEE_SHOP_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title= "Operational Clarity for Modern Coffee Shops"
        description= "Upgrade your coffee shop with a POS that keeps orders, payments, and tasks connected in one place. Improve daily operations, reduce delays, and handle every transaction with confidence."
        ctaDesc="Start Today"
      />
    </div>
    </>
  );
};

export default Page;
