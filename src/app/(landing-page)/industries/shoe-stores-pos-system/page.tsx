import React from "react";
import Script from "next/script";
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
      <Script
        id="schema-shoe-stores"
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
                "description": "Shoe store POS software that tracks every size, style, brand, and category in real time, speeds up checkout with barcode scanning, manages returns and exchanges, syncs inventory across multiple branches and online channels, and provides detailed sales and trend analytics for footwear retailers.",
                "featureList": [
                  "Complete variant management for sizes, styles, brands, and categories",
                  "Fast checkout with barcode scanning and smart item search",
                  "Real-time inventory tracking across all variants",
                  "Seamless returns and exchange handling",
                  "Customer profiles with sizes, history, and loyalty points",
                  "Multi-branch inventory and pricing sync",
                  "E-commerce integration with automatic stock updates",
                  "Smart sales and seasonal trend reports",
                  "Employee roles, permissions, and activity tracking",
                  "Discount and promotion management across branches",
                  "Supplier and purchase order management",
                  "Centralized price control from a single dashboard"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Shoe Stores | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/shoe-stores-pos-system",
                "description": "Manage every size, style, and brand with real-time variant tracking, fast checkout, smooth returns, and multi-branch sync using Owners Inventory's POS system for shoe stores.",
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
                      "name": "Shoe Stores Pos System",
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
                "name": "Shoe Store POS System",
                "description": "POS software designed for shoe and footwear stores to manage size, style, and brand variants, speed up billing with barcode scanning, handle returns and exchanges, sync inventory across branches and online channels, manage suppliers, and generate detailed sales and trend reports from a single dashboard.",
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
                        "name": "Footwear Retailer"
                      },
                      "reviewBody": "This POS enabled us to bill faster and handle size and style changes without confusion. It is simple for our staff and quick for our customers.",
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
                        "name": "Shoe Store Owner"
                      },
                      "reviewBody": "Our shoe store had problems with stock management and returns. Owners Inventory POS keeps everything current, returns are simple to handle, and reports are clear and easy to understand.",
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
                        "name": "Multi-Branch Footwear Retailer"
                      },
                      "reviewBody": "It used to take hours to sync stock across multiple branches, but the POS system for shoe stores reflects inventory immediately, and billing is quick even during peak time. Reports clearly show top-selling shoes.",
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
                        "name": "Shoe Boutique Owner"
                      },
                      "reviewBody": "It was difficult to keep track of hundreds of shoes, sizes, and styles, but with Owners Inventory POS, everything is organized, all variants can be tracked, exchanges are easy, and customer profiles help us understand preferences.",
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
                    "name": "How does this POS system handle sizes and styles?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our POS system for footwear stores tracks individual sizes, styles, and brands separately, ensuring that stock remains updated and errors are reduced."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it able to handle multiple branches?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Inventory, sales, prices, and reports stay synchronized across all branches. Stock transfers can take place on demand from a single dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the POS support returns and exchanges?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Returns and exchanges are handled efficiently, and every action is documented to ensure nothing is lost or overlooked."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it possible to integrate my online shop?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Our shoe store POS keeps online and retail inventory updated in real time, preventing duplication and overselling."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for staff to learn?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The interface is simple, and employees can pick it up in a few hours, saving training time and avoiding disruption to operations."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Shoe Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines shoe store inventory management from acquisition to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Inventory Acquisition",
                    "text": "When new shoes are added, the POS system captures size, style, price, and supplier information. This prevents stock shortages and pricing mistakes."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Stock Organization and Storage",
                    "text": "The POS system organizes inventory clearly. Products are sorted by brand, category, and season, making them easy to locate and manage."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Inventory Tracking",
                    "text": "The POS tracks stock movement in real time across sales, returns, and transfers between branches, ensuring accurate visibility at every location."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Supplier and Purchasing",
                    "text": "Stores can manage suppliers, purchase orders, and delivery schedules to make smarter restocking decisions for fast-moving and seasonal footwear."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Order Fulfillment",
                    "text": "Orders are processed accurately, ensuring the correct size and style are delivered to customers. This reduces returns and improves satisfaction."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reporting and Analysis",
                    "text": "The system generates reports on best-selling products, low stock, profits, and branch performance, supporting smarter buying and inventory decisions."
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
          imageClassName="max-w-[1000px] mt-10"
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
          title="Security, Accuracy, and Compliance."
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
            heading="FAQs"
            paragraph="The following are some of the common questions that are asked about our POS system for shoe stores."
            faqs={SHOES_STORE_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Take Full Control of Your Shoe Store"
          description="Shoe stores miss out on revenue because of the erroneous stock records, confusion of sizes, and slow billing. Our shoe store POS systems reduce these losses, maintain inventory records, and facilitate day to day operations. Every sale is easier and more profitable with faster checkout and better tracking."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
