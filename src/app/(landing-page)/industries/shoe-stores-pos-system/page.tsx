import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/shoes-store-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/shoes-store-pos/why-chose-banner.webp";

import {
  SHOES_STORE_KEY_FEATURES_CARDS,
  SHOES_STORE_WHY_CHOOSE_CARDS,
  SHOES_STORE_FEATURE_CARDS
} from "@/constant/subindustries/shoesStorePosData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  SHOES_STORE_UNIFIED_CARDS,
  SHOES_STORE_UNIFIED_HEADING,
  SHOES_STORE_UNIFIED_PARAGRAPH,
  SHOES_STORE_WORKFLOW_DATA,
  SHOES_STORE_TESTIMONIALS,
  SHOES_STORE_FAQS,
  SHOES_STORE_TESTIMONIAL_DATA,
  SHOES_STORE_TESTIMONIAL_FEATURES,
  SHOES_STORE_TOOLS_DATA,
} from "@/constant/subindustries/shoesStorePosData";
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
      <script
        type="application/ld+json"
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
                "name": "Point of Sale System for Shoes Stores | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/shoe-stores-pos-system",
                "description": "Run your shoes store with fast counter ordering, real-time inventory tracking, multi-payment processing, and unified online and delivery sales using Owners Inventory's POS system for shoes stores.",
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
                      "name": "Shoes Stores",
                      "item": "https://www.ownersinventory.com/industries/shoe-stores-pos-system"
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
                "name": "Shoes Store POS System",
                "description": "POS software designed for shoes stores and shoes stores to handle fast counter ordering, custom drink modifiers, automated order routing, real-time ingredient tracking, multi-payment processing, online and delivery integration, and multi-location management from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/shoe-stores-pos-system",
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
                      "reviewBody": "As our shoes store expanded, the software scaled smoothly. Managing multiple orders is now much simpler than before.",
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
                    "name": "What makes your POS suitable for shoes stores?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our POS for shoes stores handles fast data entry, custom order details, and quick checkout procedures at the counter. It provides consistent performance during the morning rush and keeps daily shoes store tasks streamlined."
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
                    "name": "How does it handle inventory for shoes stores?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Owners Inventory effectively manages inventory operations by providing real-time visibility into stock levels, organizing items by category, and automating stock deduction after each order is completed."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How will your POS help my shoes store grow?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "By improving process flow, reducing errors, and managing customer data, it helps shoes stores increase efficiency, revenue, and overall growth. The system supports long-term goals with advanced features to handle large volumes of data."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for staff to learn and use the system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Our shoes store POS is well-designed and easy to use. Staff do not require specific technical training to use Owners Inventory effectively."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory POS Manages Shoes Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines shoes store operations from counter ordering to inventory sync.",
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
                    "text": "Detailed reports show sales performance, stock movement, and peak hour insights, helping shoes store owners plan smarter purchases and improve profitability."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
      <SubIndustriesHero
        title="The Best POS System for Shoe Stores"
        description="Most footwear stores experience confusion while stocking sizes and styles, especially when dealing with multiple brands, categories, and frequent inventory updates. This often leads to misplaced stock, inaccurate records, and missed sales opportunities. Our advanced POS system for shoe stores eliminates errors, increases billing speed, and provides complete control across all branches."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Rated on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={SHOES_STORE_UNIFIED_HEADING}
        paragraph={SHOES_STORE_UNIFIED_PARAGRAPH}
        cards={SHOES_STORE_UNIFIED_CARDS}
        iconSet="shoesStore"
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges"
        paragraph="Owners’ inventory software helps manage sales efficiently with a powerful POS system for shoe stores. Inventory remains accurate, and customers enjoy a seamless checkout experience."
        cards={SHOES_STORE_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="shoesStore"
      />

      <KeyHighlights
        heading="Features of Our POS System for Shoe Stores"
        features={SHOES_STORE_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={SHOES_STORE_WORKFLOW_DATA.heading}
        paragraph={SHOES_STORE_WORKFLOW_DATA.paragraph}
        steps={SHOES_STORE_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Take Control of Your Inventory Now"
        description="Experience complete visibility in the POS system that is utilized in footwear stores through real-time tracking and centralized control. Eliminate stock issues and make improved choices in your shoe business."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={SHOES_STORE_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance"
        description="Footwear stores require a POS system that is safe and precise. Sales, returns and discounts are safely managed in the owner's Inventory POS. It secures financial information, customer information, and transactions by granting permission access according to role. Proper records decrease billing errors and fraud, and well-arranged data keep stores abreast with taxation and audit standards."
      />

      <ToolsSection
        heading={SHOES_STORE_TOOLS_DATA.heading}
        description={SHOES_STORE_TOOLS_DATA.paragraph}
        tools={SHOES_STORE_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={SHOES_STORE_TESTIMONIALS}
        heading={SHOES_STORE_TESTIMONIAL_DATA.heading}
        paragraph={SHOES_STORE_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={SHOES_STORE_TESTIMONIAL_DATA.secondHeading}
        secondDescription={SHOES_STORE_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={SHOES_STORE_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={SHOES_STORE_TESTIMONIAL_DATA.whyChooseDescription}
        features={SHOES_STORE_TESTIMONIAL_FEATURES}
        iconSet="shoesStore"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading= "FAQS"
          paragraph= "The following are some of the common questions that are asked about our POS system for shoe stores."
          faqs={SHOES_STORE_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title= "Take Full Control of Your Shoe Store"
        description= "Shoe stores miss out on revenue because of the erroneous stock records, confusion of sizes, and slow billing. Our shoe store POS systems reduce these losses, maintain inventory records, and facilitate day to day operations. Every sale is easier and more profitable with faster checkout and better tracking."
        ctaDesc="Start Today"
      />
    </div>
    </>
  );
};

export default Page;
