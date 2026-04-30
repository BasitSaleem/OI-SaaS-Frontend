import React from "react";
import heroBanner from "../../../../../public/assets/industries-pages/bookstore-pos/bookstore-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/bookstore-pos/bookstore-why-chose-banner.webp";

import {
  BOOKSTORE_KEY_FEATURES_CARDS,
  BOOKSTORE_WHY_CHOOSE_CARDS,
  BOOKSTORE_FEATURE_CARDS
} from "@/constant/subindustries/posBookstoreData";


import TrustedBySection from "@/components/common-components/TrustedBySection";
import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  BOOKSTORE_UNIFIED_CARDS,
  BOOKSTORE_UNIFIED_HEADING,
  BOOKSTORE_UNIFIED_PARAGRAPH,
  BOOKSTORE_WORKFLOW_DATA,
  BOOKSTORE_TESTIMONIALS,
  BOOKSTORE_FAQS,
  BOOKSTORE_TESTIMONIAL_DATA,
  BOOKSTORE_TESTIMONIAL_FEATURES,
  BOOKSTORE_TOOLS_DATA,
} from "@/constant/subindustries/posBookstoreData";
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
                "description": "Bookstore POS software that manages books and stationery inventory in real time, handles ISBN-based billing, tracks author and genre sales, syncs online and in-store orders, and connects multiple branches from a single dashboard.",
                "featureList": [
                  "Real-time book and stationery inventory tracking",
                  "ISBN barcode scanning for fast and accurate billing",
                  "Author-wise and genre-wise sales insights",
                  "Supplier and purchase order management",
                  "Customer profiles and loyalty tracking",
                  "Online order and in-store sales syncing",
                  "Real-time sales and stock reports",
                  "Multi-branch connectivity from one dashboard",
                  "Flexible discount management by author, genre, or publisher",
                  "Role-based access control for staff"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Bookstore POS Software | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/bookstore-pos-system",
                "description": "Track book and stationery inventory in real time, manage ISBN billing, sync online and in-store sales, and connect multiple branches with Owners Inventory's bookstore POS software.",
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
                      "name": "Bookstore",
                      "item": "https://www.ownersinventory.com/industries/bookstore-pos-system"
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
                "name": "Bookstore POS Software",
                "description": "POS software designed for bookstores to track books and stationery inventory in real time, handle ISBN-based billing, manage author and genre sales insights, sync online and walk-in orders, handle multi-branch operations, and manage supplier purchase orders from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/bookstore-pos-system",
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
                        "name": "Sarah M"
                      },
                      "reviewBody": "Everything is easy with Owners Inventory Bookstore POS Software. Billing is quicker and books remain organised. Stationery inventory management is also very easy now.",
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
                        "name": "Ahmed R"
                      },
                      "reviewBody": "The software assists us in tracking all titles and stationery. Our operations are smooth with multi-branch syncing and online order integration. Owners Inventory is convenient and dependable.",
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
                        "name": "Priya K"
                      },
                      "reviewBody": "Discounts, author-wise sales and stationery inventory management have become easy to handle. The bookstore POS software offers simple to understand reports which help us make superior decisions and plan promotions better.",
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
                        "name": "Daniel S"
                      },
                      "reviewBody": "Owners Inventory has transformed our bookstore. ISBN tracking, inventory updates and stationery management work without interruption. Billing is fast and accurate even during peak school seasons.",
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
                    "name": "What is Owners Inventory Bookstore POS Software?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Owners Inventory Bookstore POS Software is a program designed to manage books, stationery, sales, and customer information under a single platform. It helps bookstores monitor inventory accurately and perform smooth checkouts."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can the system handle stationery inventory management?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The software incorporates stationery inventory management. All pens, notebooks, and school supplies are kept up to date with stock quantities always accurately tracked."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it support online orders and multiple branches?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Online and in-store sales stay in sync and there is real-time data sharing across all branches. Stock, prices, and sales are automatically updated across all locations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage discounts by author or genre?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Discounts for specific authors, genres, or publishers can be managed easily. The bookstore POS software simplifies the process of running promotions and eliminates pricing errors."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is the system easy for staff to use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The software has a simple interface, quick billing, and clear stock views. Employees can scan ISBN codes, sell bundles, and manage stationery supplies quickly without confusion."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Bookstore Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines bookstore inventory management from book acquisition to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Inventory Acquisition",
                    "text": "Books are ordered from publishers and distributors based on demand forecasts. Quantities and conditions are verified and added to the system to ensure only the right and saleable inventory is maintained."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Stock Organization and Storage",
                    "text": "Books are sorted into genres, authors, publishers, or sections for easy identification and faster handling. Proper organization saves time during searches and enhances the in-store shopping experience."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Inventory Tracking",
                    "text": "Sales, returns, and transfers are automatically updated in real time to keep availability accurate. This avoids stock mismatches and assists in preventing lost sales due to incorrect stock information."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Supplier and Purchasing",
                    "text": "Supplier records, lead times, and purchase cycles are maintained accurately. Improved supplier management guarantees timely replenishment of bestsellers and popular titles."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Order Fulfillment",
                    "text": "When a book is sold or reserved, the system updates stock immediately to reduce overselling. This ensures customers always receive accurate information about book availability."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reporting and Analysis",
                    "text": "Genre, author, and pricing trends are examined to make better stocking decisions. Data-driven insights are used to maximize inventory investment and improve profitability."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Smart Bookstore POS Software for Better Selling"
        description="Bookstores lose nearly 18% of sales due to poor inventory tracking and slow checkout experiences. Our Bookstore POS system transforms your store into a fast, organized, and fully connected space. Manage books, customers, sales, suppliers, and online orders from a single, clean dashboard. Make each transaction smooth and every book easy to find."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={BOOKSTORE_UNIFIED_HEADING}
        paragraph={BOOKSTORE_UNIFIED_PARAGRAPH}
        cards={BOOKSTORE_UNIFIED_CARDS}
        iconSet="bookstore"
      />

      <WhyChoosePOS
        heading="How Our POS Software Solves These Challenges"
        paragraph="Owners Inventory eliminates operational confusion by connecting sales, stock, suppliers, and reporting in one unified platform."
        cards={BOOKSTORE_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
        iconSet="bookstore"
      />

      <KeyHighlights
        heading="Our Features Designed for Modern Bookstores"
        features={BOOKSTORE_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={BOOKSTORE_WORKFLOW_DATA.heading}
        paragraph={BOOKSTORE_WORKFLOW_DATA.paragraph}
        steps={BOOKSTORE_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Get Control of Your Inventory Now"
        description="Our bookstore POS will simplify your inventory and eliminate errors and make it more efficient. Start now and discover how our solution can simplify the operations of the bookstores and enable you to maximize your sales potential."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={BOOKSTORE_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="A good bookstore POS system will make sure that all the transactions are well-documented and tracked. The user roles and permissions restrict access to sensitive information and minimize errors and misuse. All data in the bookstores is safe and secure."
        secondDescription="The system also keeps audit trails and facilitates compliance needs, protecting inventory and financial records. The real-time tracking will provide a clear view of stock movement and automated reports will reduce the number of mistakes made by the manual process and keep the books accurate."
      />

      <ToolsSection
        heading={BOOKSTORE_TOOLS_DATA.heading}
        description={BOOKSTORE_TOOLS_DATA.paragraph}
        tools={BOOKSTORE_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={BOOKSTORE_TESTIMONIALS}
        heading={BOOKSTORE_TESTIMONIAL_DATA.heading}
        paragraph={BOOKSTORE_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={BOOKSTORE_TESTIMONIAL_DATA.secondHeading}
        secondDescription={BOOKSTORE_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={BOOKSTORE_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={BOOKSTORE_TESTIMONIAL_DATA.whyChooseDescription}
        features={BOOKSTORE_TESTIMONIAL_FEATURES}
        iconSet="bookstore"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Our bookstore POS system is designed to make daily operations smooth and easy. Here are answers to some common questions from bookstore owners."
          faqs={BOOKSTORE_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Boost Your Bookstore"
        description="Turn every sale into a smooth, organised experience. Owners' Inventory keeps books, stationery, and online orders perfectly in sync, saving time and increasing revenue."
        ctaDesc="Start Today"
      />
    </div>
    </>
  );
};

export default Page;
