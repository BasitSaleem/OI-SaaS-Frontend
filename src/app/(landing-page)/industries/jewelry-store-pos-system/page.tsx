import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/jewelry-store-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/jewelry-store-pos/why-chose-banner.webp";

import {
  JEWELRY_STORE_KEY_FEATURES_CARDS,
  JEWELRY_STORE_WHY_CHOOSE_CARDS,
  JEWELRY_STORE_FEATURE_CARDS
} from "@/constant/subindustries/posJewelryStoreData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  JEWELRY_STORE_UNIFIED_CARDS,
  JEWELRY_STORE_UNIFIED_HEADING,
  JEWELRY_STORE_UNIFIED_PARAGRAPH,
  JEWELRY_STORE_WORKFLOW_DATA,
  JEWELRY_STORE_TESTIMONIALS,
  JEWELRY_STORE_FAQS,
  JEWELRY_STORE_TESTIMONIAL_DATA,
  JEWELRY_STORE_TESTIMONIAL_FEATURES,
  JEWELRY_STORE_TOOLS_DATA,
} from "@/constant/subindustries/posJewelryStoreData";
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
                "description": "Jewellery store POS system that manages high-value inventory by weight, purity, and design, automates billing with making charges and live gold and silver rates, tracks repairs and custom orders, secures transactions with role-based access, and connects multi-branch operations from a single dashboard.",
                "featureList": [
                  "Fast and accurate jewellery billing with barcode scanning",
                  "Live inventory management by weight, carat, and design",
                  "Automated making charges, wastage, and tax calculations",
                  "Live gold and silver rate updates",
                  "Repair, resizing, and custom order tracking",
                  "Purchase order and supplier management",
                  "Multi-branch management from a centralized dashboard",
                  "Customer profiles and credit management",
                  "Role-based access control with full audit trails",
                  "Expense and cash flow tracking",
                  "Smart sales and profit reports by category and metal type",
                  "Online catalog and ecommerce integration"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Jewellery Stores | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/jewelry-store-pos-system",
                "description": "Run your jewellery store with precise billing, live gold and silver rates, secure inventory tracking, repair and custom order management, and multi-branch control using Owners Inventory's jewellery store POS system.",
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
                      "name": "Jewellery Stores",
                      "item": "https://www.ownersinventory.com/industries/jewelry-store-pos-system"
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
                "name": "Jewellery Store POS System",
                "description": "POS software designed for jewellery stores to handle smart billing with making charges and live metal rates, track inventory by weight and purity, manage repairs and custom orders, secure high-value transactions with role-based access, and connect multi-branch operations from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/jewelry-store-pos-system",
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
                        "name": "Sana K"
                      },
                      "reviewBody": "Many thanks to Owners Inventory as they help us deliver a powerful jewellery POS system that made our entire workflow easy and daily operations effortlessly smooth.",
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
                        "name": "Alice R"
                      },
                      "reviewBody": "We opened 3 new branches efficiently all thanks to the centralized POS for jewellery stores that Owners Inventory catered for us.",
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
                        "name": "Marie A"
                      },
                      "reviewBody": "Our inventory accuracy improved drastically. With real-time tracking and detailed reporting, we now finally have full control over our high-value items.",
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
                    "name": "How long does it take to build a jewellery POS system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Time depends on the size of your catalog, custom features, and integration requirements. The majority of jewellery point-of-sale systems go live within 6 to 12 weeks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you customize the POS for multi-branch stores?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Our POS for jewellery stores supports unlimited branches and gives you centralized control over stock, pricing, staff, reporting, and transfers across different locations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you integrate barcodes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can tag, scan, and track gold, diamond, and gemstone jewellery pieces thanks to our POS's compatibility with barcode systems."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can your POS manage custom orders and repairs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Our jewellery point of sale system offers full repair and custom order management along with status tracking and automated updates for a flawless customer experience."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can multiple branches operate under one system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. All jewellery branches can be connected under one centralized dashboard for unified control."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Jewellery Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines jewellery store inventory management from procurement to insight tracking.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Precious Inventory Procurement",
                    "text": "Jewellery store owners source products such as gold, diamonds, and custom pieces based on demand and customer preferences. Each item is carefully inspected for weight, purity, and certification, then added to the system with detailed attributes like carat, stone type, and design category."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Categorization and Secure Storage",
                    "text": "All items are organized by type such as rings, necklaces, and gemstones, and further classified by metal, weight, or collection. Proper labeling and secure storage make it easy for staff to locate items quickly while maintaining strict control over high-value inventory."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Real-Time Stock Monitoring",
                    "text": "Every action such as sales, exchange, repair, intake, or transfer is recorded instantly. Owners Inventory allows store owners to maintain accurate stock levels, avoid mismatches, and keep track of individual pieces, reducing dependence on manual logs."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Vendor Management and Smart Purchasing",
                    "text": "The system manages multiple suppliers by tracking purchase orders, pricing variations, and delivery timelines. Owners can evaluate supplier reliability and ensure timely restocking of fast-selling or high-demand jewellery items."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Sales Processing and Order Handling",
                    "text": "When a product is sold, reserved, or customized, the inventory is updated automatically. The POS ensures accurate billing based on weight, making charges, and taxes, and streamlines packaging and delivery for a smooth customer experience."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Insight and Performance Tracking",
                    "text": "Detailed reports provide clarity on best-selling designs, dead stock, profit margins, and seasonal demand. These inventory insights help business owners make informed decisions about pricing, purchasing, and inventory optimization."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
      <SubIndustriesHero
        title="Result-Oriented POS Solutions for jewelry Stores"
        description="Owners Inventory is the ultimate jewelry store POS system that can be used to run your store with precision, elegance, and total control. All sales, repair orders, and stock-related activities remain synchronized within a single intelligent platform. It is designed for high-value goods, comprehensive tracking, and safe billing."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={JEWELRY_STORE_UNIFIED_HEADING}
        paragraph={JEWELRY_STORE_UNIFIED_PARAGRAPH}
        cards={JEWELRY_STORE_UNIFIED_CARDS}
        iconSet="jewelry"
      />

      <WhyChoosePOS
        heading="How Our Inventory Software Solves These Challenges"
        paragraph="Sales, stock, gold rates, suppliers, and reports are connected to one safe POS system by Owners Inventory. It eradicates human errors and holds all the departments in tune with each other."
        cards={JEWELRY_STORE_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="jewelry"
      />

      <KeyHighlights
        heading="Our Key Features"
        features={JEWELRY_STORE_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={JEWELRY_STORE_WORKFLOW_DATA.heading}
        paragraph={JEWELRY_STORE_WORKFLOW_DATA.paragraph}
        steps={JEWELRY_STORE_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Take Control of Your Jewelry Inventory Now"
        description="The Best POS for jewelry stores will make your inventory easier and will help minimize mistakes during pricing and make daily work more effective. Begin today and find out how our solution will make doing business in the jewelry business a lot easier and profitability of your store maximized."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={JEWELRY_STORE_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="An advanced jewelry POS system makes sure that all the transactions are duly managed and tracked. Role-based access controls access to sensitive financial, and inventory information minimizing risks and avoiding internal losses."
        secondDescription="The system has full audit trails and facilitates compliance needs in protection of jewelry assets which have high-values. Live tracking will guarantee clear stock movement while automated reports will minimize errors in tracking and assist in maintaining proper financial records with certainty."
      />

      <ToolsSection
        heading={JEWELRY_STORE_TOOLS_DATA.heading}
        description={JEWELRY_STORE_TOOLS_DATA.paragraph}
        tools={JEWELRY_STORE_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={JEWELRY_STORE_TESTIMONIALS}
        heading={JEWELRY_STORE_TESTIMONIAL_DATA.heading}
        paragraph={JEWELRY_STORE_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={JEWELRY_STORE_TESTIMONIAL_DATA.secondHeading}
        secondDescription={JEWELRY_STORE_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={JEWELRY_STORE_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={JEWELRY_STORE_TESTIMONIAL_DATA.whyChooseDescription}
        features={JEWELRY_STORE_TESTIMONIAL_FEATURES}
        iconSet="jewelry"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our POS Solutions for Jewelry Stores is designed to make daily operations smooth and easy."
          secondParagraph = "Here are answers to some common questions from POS Solutions for Jewelry Stores owners."
          faqs={JEWELRY_STORE_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Take Control of Your Jewelry Store"
        description="Many jewelry stores lose a lot of money annually because of inaccuracies in stock and price mistakes. Our jewelry store POS system removes risks, protects inventory, and accelerates day-to-day operations. Better tracking and correct billing make every day a profitable one."
        ctaDesc="Start Today"
      />
    </div>
    </>
  );
};

export default Page;
