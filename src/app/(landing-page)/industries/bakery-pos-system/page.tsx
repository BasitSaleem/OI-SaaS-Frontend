import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/bakery-pos/bakery-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/bakery-pos/why-chose-banner.webp";

import {
  BAKERY_KEY_FEATURES_CARDS,
  BAKERY_WHY_CHOOSE_CARDS,
  BAKERY_FEATURE_CARDS
} from "@/constant/subindustries/posBakeryData";


import dynamic from "next/dynamic";

const VoicesRealBusiness = dynamic(() => import("@/components/pages/landing-page/VoicesRealBusiness"), { ssr: true });
const IndustryUnifiedPlatform = dynamic(() => import("@/components/pages/industries-page/IndustryUnifiedPlatform"), { ssr: true });
const WhyChoosePOS = dynamic(() => import("@/components/pages/features-page/point-of-sale/WhyChoosePOS"), { ssr: true });
const KeyHighlights = dynamic(() => import("@/components/pages/features-page/point-of-sale/KeyHighlights"), { ssr: true });
const InventoryWorkflow = dynamic(() => import("@/components/pages/industries-page/InventoryWorkflow"), { ssr: true });
const IndustriesCallToAction = dynamic(() => import("@/components/pages/industries-page/IndustriesCallToAction"), { ssr: true });
const IndustriesFeaturesSection = dynamic(() => import("@/components/pages/industries-page/IndustriesFeaturesSection"), { ssr: true });
const SecurityCompliance = dynamic(() => import("@/components/pages/industries-page/securityCompliance"), { ssr: true });
const ToolsSection = dynamic(() => import("@/components/pages/landing-page/ToolsSection"), { ssr: true });
const IndustriesTestimonial = dynamic(() => import("@/components/pages/industries-page/IndustriesTestimonial"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/pages/landing-page/FAQSection"), { ssr: true });
const IndustriesHardwareControl = dynamic(() => import("@/components/pages/industries-page/IndustriesHardwareControl"), { ssr: true });

import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import {
  BAKERY_UNIFIED_CARDS,
  BAKERY_UNIFIED_HEADING,
  BAKERY_UNIFIED_PARAGRAPH,
  BAKERY_WORKFLOW_DATA,
  BAKERY_TESTIMONIALS,
  BAKERY_FAQS,
  BAKERY_TESTIMONIAL_DATA,
  BAKERY_TESTIMONIAL_FEATURES,
  BAKERY_TOOLS_DATA,
} from "@/constant/subindustries/posBakeryData";


const Page = () => {
  return (
    <>
      <Script
        id="schema-bakery"
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
                "description": "POS system for bakeries that tracks ingredients in real time, manages custom cake orders and pre-bookings, handles multi-channel sales, automates stock deductions, and provides real-time analytics for bakery owners.",
                "featureList": [
                  "Ultra-fast billing with smart product search and barcode scanning",
                  "Ingredient-level inventory tracking with automatic deductions",
                  "Menu and variant management for cakes, pastries, and breads",
                  "Custom order and pre-order module with delivery tracking",
                  "Multi-channel sales sync for walk-ins, online, and delivery orders",
                  "Real-time analytics dashboard with daily and weekly reports",
                  "Role-based staff access control",
                  "Smart inventory alerts for low stock ingredients",
                  "Recipe-based automated stock deduction",
                  "Multi-branch management from a single dashboard"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Bakeries | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/bakery-pos-system",
                "description": "Track ingredients in real time, manage custom cake orders, sync multi-channel sales, and automate stock deductions with Owners Inventory's POS system for bakeries.",
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
                      "name": "Bakery",
                      "item": "https://www.ownersinventory.com/industries/bakery-pos-system"
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
                "name": "POS System for Bakeries",
                "description": "Bakery POS software that tracks ingredients at recipe level, manages custom cake and event orders, syncs walk-in, online, and delivery sales in one platform, automates stock deductions, and provides real-time analytics for smarter bakery management.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/bakery-pos-system",
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
                        "name": "Bakery Customer 1"
                      },
                      "reviewBody": "The POS system has made billing faster and more efficient. We no longer have to struggle at rush hour.",
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
                        "name": "Bakery Customer 2"
                      },
                      "reviewBody": "Managing cake orders has never been easier. Every detail is properly recorded and nothing gets overlooked.",
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
                        "name": "Bakery Customer 3"
                      },
                      "reviewBody": "Our bakery now has a clear view of its sales and stock. We can make confident purchasing and pricing decisions.",
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
                    "name": "Does the POS support custom orders?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the POS seamlessly handles custom orders. Sizes, notes, designs, and payments can all be recorded. It also lets you store templates for custom orders that are frequently requested."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage my ingredients individually?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. With every sale, each ingredient is automatically updated based on recipe usage. You can also set low-stock alerts to prevent shortages during peak hours."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system work well for small bakeries?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, it works well for both small and large setups. Because of its modular features, you can start small and grow without needing to switch systems."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide support for several branches?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, it is possible to oversee every branch from one single dashboard. You can quickly compare performance across locations with centralized reporting."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Bakery Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines bakery inventory management from ingredient procurement to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Ingredient Procurement",
                    "text": "Owners Inventory helps generate purchase orders based on current inventory levels. Quantities of ingredients delivered by suppliers are recorded and tracked, allowing bakery owners to make informed purchase decisions."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Stock Organization",
                    "text": "Inventory is categorized by product type, ingredient, size, flavor, or season. This ensures billing and kitchen staff are always aware of what is available, reducing confusion and speeding up production."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Automatic Deduction",
                    "text": "Recipe-based automated deduction connects products to ingredients. The system calculates precisely which ingredients were used to make each item and makes stock adjustments automatically to ensure accurate inventory and prevent overuse."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Allocate Custom Orders",
                    "text": "When a custom or pre-order is placed, Owners Inventory records all details including flavors, sizes, notes, delivery dates, and payment methods. All information is clearly documented, eliminating the possibility of missing deadlines."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Reporting and Analysis",
                    "text": "The system monitors production output, ingredient consumption trends, peak sales hours, and profitability. Accurate reports help optimize pricing and adjust production volume based on real data rather than assumptions."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="POS System For Bakeries Controlling Orders & Inventory"
        description="Manage your bakery with complete precision and control using Owners Inventory, the ultimate POS system for bakeries. Every sale, including the latest ingredient updates and fresh batches of morning cakes to orders for custom-made cake designs are synced into one intelligent system. This system is designed for bakeries who need to track inventory in real time and bill quickly."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      {/* <TrustedBySection
        heading="Rated on Leading Review Platforms"
        paragraph="Big bakerys, specialty book shops, and wholesale book businesses trust Owners Inventory for fast, accurate, and error-free checkout."
      /> */}

      <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={BAKERY_UNIFIED_HEADING}
        paragraph={BAKERY_UNIFIED_PARAGRAPH}
        cards={BAKERY_UNIFIED_CARDS}
        iconSet="bakery"
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges?"
        paragraph="Every feature of our Bakery POS System was created to help take the pressure off and streamline your processes."
        cards={BAKERY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="bakery"
      />

      <KeyHighlights
        heading="Our Key Features"
        features={BAKERY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={BAKERY_WORKFLOW_DATA.heading}
        paragraph={BAKERY_WORKFLOW_DATA.paragraph}
        steps={BAKERY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Take Full Control of Your Bakery Operations"
        description="Our bakery POS reduces waste, accelerates billing and maintains accurate ingredient stocks. Simplify your day-to-day operations today."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={BAKERY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="Each transaction in the Owners Inventory has a time stamp and is recorded securely. Each staff member has access to only the information relevant to his or her responsibilities."
        secondDescription="Audit trails increase transparency, and they reduce the possibility of errors within an organization or unauthorized changes. Automated reports reduce manual errors and help ensure that financial records are accurate and in compliance."
      />

      <ToolsSection
        heading={BAKERY_TOOLS_DATA.heading}
        description={BAKERY_TOOLS_DATA.paragraph}
        tools={BAKERY_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={BAKERY_TESTIMONIALS}
        heading={BAKERY_TESTIMONIAL_DATA.heading}
        paragraph={BAKERY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={BAKERY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={BAKERY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={BAKERY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={BAKERY_TESTIMONIAL_DATA.whyChooseDescription}
        features={BAKERY_TESTIMONIAL_FEATURES}
        iconSet={["bakery"]}
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our bakery POS system is designed to make daily operations smooth and easy. Here are answers to some common questions from bakery owners."
          faqs={BAKERY_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Take Charge of Your Bakery Business Today"
        description="Due to stock mistakes, slow billing, and wastage, bakeries lose significant revenue. Owners Inventory reduces losses, helps manage orders efficiently, and keeps ingredient tracking accurate."
        ctaDesc="Start Today"
      />
    </div>
    </>
  );
};

export default Page;