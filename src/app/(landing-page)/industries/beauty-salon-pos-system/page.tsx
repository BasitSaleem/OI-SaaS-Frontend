import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/beauty-salon-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/beauty-salon-pos/why-chose-banner.webp";

import {
  BEAUTY_SALON_KEY_FEATURES_CARDS,
  BEAUTY_SALON_WHY_CHOOSE_CARDS,
  BEAUTY_SALON_FEATURE_CARDS
} from "@/constant/subindustries/beautySalonPosData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  BEAUTY_SALON_UNIFIED_CARDS,
  BEAUTY_SALON_UNIFIED_HEADING,
  BEAUTY_SALON_UNIFIED_PARAGRAPH,
  BEAUTY_SALON_WORKFLOW_DATA,
  BEAUTY_SALON_TESTIMONIALS,
  BEAUTY_SALON_FAQS,
  BEAUTY_SALON_TESTIMONIAL_DATA,
  BEAUTY_SALON_TESTIMONIAL_FEATURES,
  BEAUTY_SALON_TOOLS_DATA,
} from "@/constant/subindustries/beautySalonPosData";
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
                "description": "Beauty salon POS system that speeds up checkouts, manages retail product and service sales, tracks loyalty points, applies flexible discounts, supports split payments across cash, cards, and mobile wallets, and keeps stock levels accurate from one connected dashboard.",
                "featureList": [
                  "Fast checkout with seamless transaction processing",
                  "Service and retail product sales tracking",
                  "Connected booking and billing flow",
                  "Real-time retail stock updates",
                  "Loyalty points management with auto-apply at checkout",
                  "Flexible discounts, bundles, and promotional offers",
                  "Out-of-stock alerts for retail products",
                  "Split payment handling across cash, cards, and mobile wallets",
                  "Centralized dashboard for all salon activities",
                  "Multi-counter billing support",
                  "Role-based access for staff",
                  "Integrations with Stripe, PayPal, Mailchimp, Zapier, and WooCommerce"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Beauty Salon POS System | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/beauty-salon-pos-system",
                "description": "Speed up salon billing, track retail stock, manage loyalty points, handle split payments, and connect bookings with sales using Owners Inventory's beauty salon POS system.",
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
                      "name": "Beauty Salons",
                      "item": "https://www.ownersinventory.com/industries/beauty-salon-pos-system"
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
                "name": "Beauty Salon POS System",
                "description": "POS software designed for beauty salons to handle fast checkout, service and retail product sales, loyalty points, flexible discounts, split payments, real-time stock updates, multi-counter billing, and connected booking flows from a single unified dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/beauty-salon-pos-system",
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
                        "name": "Hira M"
                      },
                      "reviewBody": "We used to experience lag in checkouts during busy days. However, since implementing their salon POS system, the billing process has improved tremendously, and every transaction is now done with proper recordkeeping.",
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
                        "name": "Jenna B"
                      },
                      "reviewBody": "It has enabled us to be organized and streamlined all our operations into one place. The system also makes our payment tracking more efficient and accurate.",
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
                        "name": "Georgie K"
                      },
                      "reviewBody": "Their salon POS software is user-friendly. Our team picked it up quickly, and now we are able to handle every salon management operation quickly.",
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
                    "name": "Can the system handle both retail products and services separately?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system allows salons to record services and product sales separately, making it easy to track performance for each category without mixing data."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system support discount handling during billing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Discounts can be applied during billing to help salons manage promotions, special offers, or customer-specific pricing without disrupting the transaction flow."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I track daily revenue without manual calculation?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system automatically compiles daily sales, allowing salon owners to view revenue summaries without needing to calculate totals manually."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it possible to manage multiple counters in one salon?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The POS system supports multiple billing counters, allowing salons to handle more customers simultaneously without creating data inconsistencies."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system require frequent maintenance or updates?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. The system is designed to run smoothly without consistent manual maintenance, allowing salon teams to focus on daily operations instead of system management."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory POS Manages Beauty Salon Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines beauty salon operations from sales entry to reporting.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Sales Entry Point",
                    "text": "The process begins at the POS machine, where any chosen product or service is entered into the system. This triggers live transaction processing and ensures accurate recording of sales before billing."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Bill Generation",
                    "text": "The system generates a bill following the addition of products or services. It precisely calculates the total cost and produces the bill that appears during checkout, ensuring customers receive accurate billing information before payment."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Payment Completion",
                    "text": "Checkout involves processing payment through different methods such as cash, debit card, or credit card. Each transaction is recorded instantly, helping maintain accurate financial records and updated daily sales data."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Stock Adjustment",
                    "text": "After payment confirmation, the system updates inventory automatically. Every product used or sold is deducted from inventory in real time, keeping stock levels aligned with actual salon product usage."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Reporting Summary Layer",
                    "text": "All completed transactions are compiled into structured reports within the beauty salon POS system. These insights help salon owners review sales performance, monitor revenue, and understand operational trends."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
      <SubIndustriesHero
        title="Beauty Salon POS System for Seamless Transactions and Retail Management"
        description="A crowded counter makes stylists lose their clients faster than poor quality services. To ensure that the billing process does not become slow, retail inventory is kept at bay, and the records of clients are not scattered around, an efficient POS system is required. The POS helps in managing day-to-day sales processes seamlessly. Our beauty salon's point-of-sale system ensures that customers get quick services while avoiding messy counters."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={BEAUTY_SALON_UNIFIED_HEADING}
        paragraph={BEAUTY_SALON_UNIFIED_PARAGRAPH}
        cards={BEAUTY_SALON_UNIFIED_CARDS}
        iconSet="beautySalon"
      />

      <WhyChoosePOS
        heading="How Owners Inventory Solves Beauty Salon POS Challenges"
        paragraph="Owners Inventory provides a structured salon POS system that connects sales, payments, and inventory in one place, helping beauty salon owners prevent confusion and handle daily operations with clarity."
        cards={BEAUTY_SALON_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="beautySalon"
      />

      <KeyHighlights
        heading="Key Features of Our Beauty Salon Point of Sale System"
        features={BEAUTY_SALON_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={BEAUTY_SALON_WORKFLOW_DATA.heading}
        paragraph={BEAUTY_SALON_WORKFLOW_DATA.paragraph}
        steps={BEAUTY_SALON_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Take Control of Every Salon Operation"
        description="Upgrade your beauty salon with a POS system that keeps billing, sales, and services organized in one place. Work faster, reduce errors, and manage daily operations with confidence and clarity."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={BEAUTY_SALON_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="With accurate details of recorded transactions, the system creates a reliable activity trail. This improves data accuracy, reduces discrepancies in payment records, and helps salon businesses maintain organized documentation. This helps beauty salon owners to perform internal checks and promotes financial clarity."
      />

      <ToolsSection
        heading={BEAUTY_SALON_TOOLS_DATA.heading}
        description={BEAUTY_SALON_TOOLS_DATA.paragraph}
        tools={BEAUTY_SALON_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={BEAUTY_SALON_TESTIMONIALS}
        heading={BEAUTY_SALON_TESTIMONIAL_DATA.heading}
        paragraph={BEAUTY_SALON_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={BEAUTY_SALON_TESTIMONIAL_DATA.secondHeading}
        secondDescription={BEAUTY_SALON_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={BEAUTY_SALON_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={BEAUTY_SALON_TESTIMONIAL_DATA.whyChooseDescription}
        features={BEAUTY_SALON_TESTIMONIAL_FEATURES}
        iconSet="beautySalon"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading= "FAQS"
          paragraph= "The following are some of the common questions that are asked about our beauty salon point of sale system."
          faqs={BEAUTY_SALON_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title= "Control Salon Operations with a Reliable POS"
        description= "Manage all your salon activities with an effective POS system. Make things consistent by ensuring that every operation at the salon will perfectly align. Improve efficiency and ensure accuracy in every task without experiencing any delay with our beauty salon point-of-sale system."
        ctaDesc="Start Today"
      />
    </div>
    </>
  );
};

export default Page;
