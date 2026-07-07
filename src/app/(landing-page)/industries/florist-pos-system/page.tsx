import React from "react";
import Script from "next/script";
const heroBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/bakery-pos-system/hero-banner.webp";
const whyChoseBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/bakery-pos-system/why-chose-banner.webp";

import {
  FLORIST_KEY_FEATURES_CARDS,
  FLORIST_WHY_CHOOSE_CARDS,
  FLORIST_FEATURE_CARDS
} from "@/constant/subindustries/posFloristData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  FLORIST_UNIFIED_CARDS,
  FLORIST_UNIFIED_HEADING,
  FLORIST_UNIFIED_PARAGRAPH,
  FLORIST_WORKFLOW_DATA,
  FLORIST_TESTIMONIALS,
  FLORIST_FAQS,
  FLORIST_TESTIMONIAL_DATA,
  FLORIST_TESTIMONIAL_FEATURES,
  FLORIST_TOOLS_DATA,
} from "@/constant/subindustries/posFloristData";
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
        id="schema-florist"
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
                "description": "Florist POS system designed to track perishable stem counts, manage bouquet recipe details, coordinate local deliveries, handle pre-orders, and sync online flower sales with raw stock.",
                "featureList": [
                  "Perishables and freshness tracking",
                  "Custom bouquet recipe builder",
                  "Integrated delivery scheduling",
                  "Loose stem and ribbon packaging support",
                  "Anniversary and birthday CRM reminders",
                  "Expense and operational cost tracking",
                  "Online ecommerce bouquet sync",
                  "Multi-store florist dashboard controls",
                  "Holiday margin and sales reports",
                  "Role-based stylist and cashier access",
                  "Integrations with accounting tools and payment gateways"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Florist Shops | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/florist-pos-system",
                "description": "Streamline flower sales, manage perishables, build custom bouquets, schedule deliveries, and track web orders using Owners Inventory's POS for florist shops.",
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
                      "name": "Florist",
                      "item": "https://www.ownersinventory.com/industries/florist-pos-system"
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
                "name": "Florist POS System",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "Specialized florist POS software to manage fresh flowers, price custom arrangements, organize event schedules, and coordinate local deliveries.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/florist-pos-system",
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
                        "name": "Flower Shop Owner"
                      },
                      "reviewBody": "Our system has made billing custom orders and tracking stem counts simple. Flower shop management is finally stress-free.",
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
                        "name": "Florist Boutique Manager"
                      },
                      "reviewBody": "This is the best system we have used. It schedules local deliveries, tracks florist details, and coordinates web sales.",
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
                    "name": "What is a POS system for a florist?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A florist point of sale system helps manage fresh stem inventory, custom arrangement pricing, event scheduling, and local deliveries from one unified tool."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage delivery orders?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, you can schedule delivery dates, add recipient messages, track delivery drivers, and record addresses directly at checkout."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does it handle perishables?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can enter freshness warnings and expiration dates for flowers, allowing you to prioritize selling older blooms and reduce waste."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it support custom arrangement billing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, you can create a custom item at checkout, selecting the specific stems, ribbons, and vases used to automatically adjust raw inventory levels."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is the system secure for multiple cashiers?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. You can assign different access levels to cashiers, design staff, and supervisors to keep financial data secure."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Florist Operations",
                "description": "A step-by-step workflow showing how Owners Inventory automates florist operations and delivery calendars.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Stem Acquisition",
                    "text": "Wholesalers deliver fresh flowers. Log them with supplier details and freshness dates to track product shelf life."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Freshness Storage",
                    "text": "Sort flowers in refrigerators or displays, noting storage locations and expected freshness windows."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Inventory Control",
                    "text": "Check stock levels, record spoilage, and coordinate custom orders for upcoming weddings or events."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Wholesale Purchasing",
                    "text": "Manage purchase orders to restock popular blooms ahead of holiday demand spikes."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Custom Assembly & Checkout",
                    "text": "Scan barcodes, add card notes, select delivery options, and process payments for custom florist orders."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Analytics & Spoilage Reports",
                    "text": "View reports on sales performance, waste rates, and holiday earnings. Enhance florist shop operations today."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Complete POS System for Florist Shops with Stem Tracking"
          description="The Owners Inventory POS System for florists is designed to handle perishable flowers and custom arrangements. Price bouquets accurately, manage delivery dates, organize events, and track stem quantities dynamically from one centralized dashboard."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={FLORIST_UNIFIED_HEADING}
          paragraph={FLORIST_UNIFIED_PARAGRAPH}
          cards={FLORIST_UNIFIED_CARDS}
          iconSet="retail"
        />

        <WhyChoosePOS
          heading="How Our Inventory Software Solves These Challenges"
          paragraph="The Owners Inventory POS System has features built for florists, including:"
          cards={FLORIST_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="retail"
        />

        <KeyHighlights
          heading="Key Features of Our POS System That Help Florists"
          features={FLORIST_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={FLORIST_WORKFLOW_DATA.heading}
          paragraph={FLORIST_WORKFLOW_DATA.paragraph}
          steps={FLORIST_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Manage Your Flower Shop Inventory Efficiently"
          description="Take control of your fresh stems, custom events, and holiday orders with our custom florist software."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={FLORIST_FEATURE_CARDS} />

        <SecurityCompliance
          title="Freshness, Speed, and Compliance"
          description="Our system connects with local receipt printers, barcode scanners, card terminals, and online e-commerce channels so you can manage your florist shop from one place."
          secondDescription="Reduce floral waste, coordinate driver schedules, and optimize wholesale flower ordering easily."
        />

        <ToolsSection
          heading={FLORIST_TOOLS_DATA.heading}
          description={FLORIST_TOOLS_DATA.paragraph}
          tools={FLORIST_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={FLORIST_TESTIMONIALS}
          heading={FLORIST_TESTIMONIAL_DATA.heading}
          paragraph={FLORIST_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={FLORIST_TESTIMONIAL_DATA.secondHeading}
          secondDescription={FLORIST_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={FLORIST_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={FLORIST_TESTIMONIAL_DATA.whyChooseDescription}
          features={FLORIST_TESTIMONIAL_FEATURES}
          iconSet="retail"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="Our florist POS solution is built to optimize daily workflows and fresh stem tracking. Here are answers to some of the most common questions."
            faqs={FLORIST_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Take Control of Your Florist Shop"
          description="Flower shops can lose profits due to rapid plant spoilage and inaccurate event pricing. Our system minimizes waste, simplifies bouquet billing, and optimizes purchasing to drive growth."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
