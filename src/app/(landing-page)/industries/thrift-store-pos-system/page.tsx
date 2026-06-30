import React from "react";
import Script from "next/script";
const heroBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/thrift-store-pos/hero-banner.webp";
const whyChoseBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/thrift-store-pos/why-chose-banner.webp";

import {
  THRIFT_STORE_KEY_FEATURES_CARDS,
  THRIFT_STORE_WHY_CHOOSE_CARDS,
  THRIFT_STORE_FEATURE_CARDS,
} from "@/constant/subindustries/thriftStorePosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  THRIFT_STORE_UNIFIED_CARDS,
  THRIFT_STORE_UNIFIED_HEADING,
  THRIFT_STORE_UNIFIED_PARAGRAPH,
  THRIFT_STORE_WORKFLOW_DATA,
  THRIFT_STORE_TESTIMONIALS,
  THRIFT_STORE_FAQS,
  THRIFT_STORE_TESTIMONIAL_DATA,
  THRIFT_STORE_TESTIMONIAL_FEATURES,
  THRIFT_STORE_TOOLS_DATA,
} from "@/constant/subindustries/thriftStorePosData";
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
        id="schema-thrift-store"
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
                "description": "Thrift store POS system that tracks constantly changing donated, consigned, and second-hand inventory in real time, manages one-of-a-kind items, supports flexible condition-based pricing, speeds up checkout with barcode scanning, and centralizes donations, sales, and reporting from one dashboard.",
                "featureList": [
                  "Unique and one-of-a-kind item inventory management",
                  "Real-time tracking of donated, consigned, and purchased stock",
                  "Flexible condition-based pricing and tag management",
                  "Custom discount, clearance, and seasonal sale management",
                  "Fast barcode checkout and automated billing",
                  "Donation logging and inventory tracking",
                  "Multiple payment options including split payment",
                  "Multi-location store management from one dashboard",
                  "Online and in-store order syncing",
                  "Role-based access control for staff",
                  "Detailed sales, inventory turnover, and category reports"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Thrift Store POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/thrift-store-pos-system",
                "description": "Manage donated, consigned, and one-of-a-kind stock with real-time inventory, flexible pricing, fast checkout, and multi-location control using Owners Inventory's thrift store POS system.",
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
                      "name": "Thrift Store POS System",
                      "item": "https://ownersinventory.com/industries/thrift-store-pos-system"
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
                "name": "Thrift Store POS System",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "POS software designed for thrift stores to track donated, consigned, and one-of-a-kind inventory in real time, set flexible condition-based pricing, speed up checkout with barcode scanning, manage donations, and run multi-location operations from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/thrift-store-pos-system",
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
                        "name": "Sarah L"
                      },
                      "reviewBody": "Previously, tens of thousands of donated and second-hand items were extremely difficult to keep track of. Now they are all organized and accessible in a matter of seconds.",
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
                        "name": "Daniel M"
                      },
                      "reviewBody": "New products come in daily, and the system lets us know exactly where each piece is at all times, from the time it arrives until the sale.",
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
                        "name": "Ayesha K"
                      },
                      "reviewBody": "Owners Inventory has helped us keep track of unique items we had lost before, and inventory discrepancies have been reduced significantly.",
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
                        "name": "Omar R"
                      },
                      "reviewBody": "Checkout used to be very slow on busy weekends, but with barcode scanning and automated pricing it is much quicker, with significantly less time spent waiting.",
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
                    "position": 5,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Jessica P"
                      },
                      "reviewBody": "The reporting tools enabled us to know what works best in each category and which products sit on our shelves for too long, which has helped us make better pricing decisions.",
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
                    "position": 6,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Hassan A"
                      },
                      "reviewBody": "Managing multiple thrift store locations was difficult before. Now we can monitor inventory and sales across all branches from one dashboard.",
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
                    "position": 7,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Michael B"
                      },
                      "reviewBody": "The centralized inventory system has saved us countless hours of manual work and made daily operations much more efficient.",
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
                    "name": "Can I track donated inventory in the system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system lets you track incoming inventory, manage donated merchandise, and keep a record of it, making donation handling convenient and transparent."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the POS handle discounts and promotions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Discounts, clearance, seasonal offers, and special offers can be set up in the system and applied automatically at checkout without any manual calculations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I upload my existing inventory all at once?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can import product information from an Excel or CSV file, setting up your inventory quickly without entering products one by one."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can the system manage multiple thrift store locations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system lets you track stock, sales, and performance across multiple locations from one central dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it track sales history and item performance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system tracks sales activity and produces detailed reports on product performance, inventory turnover, and popular categories to support sound business decisions."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory POS Manages Thrift Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines thrift store operations from catalog setup to performance review.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Catalog Setup and Organization",
                    "text": "Products are added by relevant attributes such as name, category, condition, price, SKU, and barcode. This includes clothing, furniture, home decor, books, electronics, accessories, and collectibles."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Item Identification at Checkout",
                    "text": "Staff locate products at the counter by scanning a barcode or searching for the item. Product details, prices, and promotional offers are immediately available for accurate transactions."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Transaction Building and Pricing",
                    "text": "Staff scan products or select them from the inventory database. Discounts, promotional pricing, clearance offers, and special sales events are applied automatically in the checkout interface."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Seamless Payment Processing",
                    "text": "The POS offers numerous payment options such as cash, credit and debit cards, mobile wallets, and split payments, with no need to switch between different systems."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Performance Review and Inventory Monitoring",
                    "text": "At the end of the day, store owners review detailed reports on sales performance, stock turnover, popular categories, and slow-moving items to make better pricing and inventory decisions."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Thrift Store POS System for Smarter Inventory and Efficient Management"
          description="The items that are donated to thrift stores are constantly changing from second hand and vintage to unique items. Creating a pricing strategy, keeping track of inventory, and ensuring efficient customer service can be difficult when handling these products. Owners Inventory provides the dedicated Thrift Store Point of Sale solution to enable tracking of inventory in real time, streamline checkout procedures, and efficiently manage the store's inventory."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={THRIFT_STORE_UNIFIED_HEADING}
          paragraph={THRIFT_STORE_UNIFIED_PARAGRAPH}
          cards={THRIFT_STORE_UNIFIED_CARDS}
          iconSet="thriftStore"
        />

        <WhyChoosePOS
          heading="How Our POS System for Thrift Stores Solves These Challenges"
          paragraph="Owners Inventory provides a powerful thrift store POS system that streamlines daily operations, improves inventory accuracy, and centralizes business management in one easy-to-use platform."
          cards={THRIFT_STORE_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="thriftStore"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory POS"
          features={THRIFT_STORE_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={THRIFT_STORE_WORKFLOW_DATA.heading}
          paragraph={THRIFT_STORE_WORKFLOW_DATA.paragraph}
          steps={THRIFT_STORE_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Stop Losing Time Managing Thrift Store Inventory"
          description="Having well organized inventory records, efficient checkout lines, and accurate sales tracking creates a better customer experience and boosts profits at thrift stores. Owners Inventory includes everything you want to have in place to run your thrifts in an efficient fashion and still have inventory, sales, and reporting all in one system."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={THRIFT_STORE_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security and Access Control"
          description="Role-based access controls are an integral part of Owners Inventory to help safeguard business operations. Staff members have access only to information pertinent to their job functions and secure payment processing will help ensure customer and business information is well protected."
          secondDescription=""
        />

        <ToolsSection
          heading={THRIFT_STORE_TOOLS_DATA.heading}
          description={THRIFT_STORE_TOOLS_DATA.paragraph}
          tools={THRIFT_STORE_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={THRIFT_STORE_TESTIMONIALS}
          heading={THRIFT_STORE_TESTIMONIAL_DATA.heading}
          paragraph={THRIFT_STORE_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={THRIFT_STORE_TESTIMONIAL_DATA.secondHeading}
          secondDescription={THRIFT_STORE_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={THRIFT_STORE_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={THRIFT_STORE_TESTIMONIAL_DATA.whyChooseDescription}
          features={THRIFT_STORE_TESTIMONIAL_FEATURES}
          iconSet="thriftStore"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="The following are some of the most frequently asked questions about our thrift store POS system."
            faqs={THRIFT_STORE_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="The Smartest Move for Your Thrift Store"
          description="Eliminate spreadsheets, guesswork, and disconnected systems. Owners Inventory delivers a more efficient and effective inventory management, sales processing, store performance monitoring and simplified daily life inventory store experience."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
