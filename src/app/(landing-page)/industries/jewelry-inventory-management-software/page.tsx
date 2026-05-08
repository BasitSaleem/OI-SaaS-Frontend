import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/jewelry-inventory-management-software/jewelary-store-hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/jewelry-inventory-management-software/jewelary-store-why-chose-banner.webp";

import {
  JEWELRY_INVENTORY_KEY_FEATURES_CARDS,
  JEWELRY_INVENTORY_WHY_CHOOSE_CARDS,
  JEWELRY_INVENTORY_FEATURE_CARDS
} from "@/constant/subindustries/jewelryInventoryManagementSoftwareData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  JEWELRY_INVENTORY_UNIFIED_CARDS,
  JEWELRY_INVENTORY_UNIFIED_HEADING,
  JEWELRY_INVENTORY_UNIFIED_PARAGRAPH,
  JEWELRY_INVENTORY_WORKFLOW_DATA,
  JEWELRY_INVENTORY_TESTIMONIALS,
  JEWELRY_INVENTORY_FAQS,
  JEWELRY_INVENTORY_TESTIMONIAL_DATA,
  JEWELRY_INVENTORY_TESTIMONIAL_FEATURES,
  JEWELRY_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/jewelryInventoryManagementSoftwareData";
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
        id="schema-jewelry-inventory"
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
                "description": "Jewelry inventory management software that helps jewelry stores track stock, manage custom orders, sync multi-location inventory, and automate purchase orders.",
                "featureList": [
                  "Real-time jewelry inventory tracking",
                  "Custom order and repair tracking",
                  "Multi-location stock synchronization",
                  "Consignment and vendor tracking",
                  "Automated purchase orders",
                  "Warranty and certification management",
                  "Sales and inventory reports",
                  "Omnichannel sales integration",
                  "Role-based access control",
                  "Display and showcase management"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Jewelry Inventory Management Software | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/jewelry-inventory-management-software",
                "description": "Track jewelry stock, manage custom orders, sync multi-location inventory, and automate purchase orders with Owners Inventory's jewelry store inventory management software.",
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
                      "name": "Jewelry",
                      "item": "https://www.ownersinventory.com/industries/jewelry-inventory-management-software"
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
                "name": "Jewelry Inventory Management Software",
                "description": "Inventory management software designed for jewelry stores to track high-value stock, manage custom orders and repairs, sync inventory across multiple locations, and automate purchase orders from suppliers and consignments.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/jewelry-inventory-management-software",
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
                        "name": "Imran S"
                      },
                      "reviewBody": "Tracking gold and diamond inventory used to be stressful. Now everything is clear, and we always know exactly what's in the stock.",
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
                        "name": "Howard K"
                      },
                      "reviewBody": "Managing custom orders has become much easier because of recorded details. Every order is now delivered on time.",
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
                        "name": "Trevor N"
                      },
                      "reviewBody": "The system gave us a clear view of sales and stocks. It helps us make better purchasing decisions.",
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
                    "name": "How can jewelry inventory management software improve accuracy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The system automatically updates inventory after every sale, return, or adjustment. It ensures that store records always match actual inventory without manual counting."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it suitable for small jewelry stores?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, Owners Inventory is suitable for both large organizations and small shops. It provides efficient features that keep your store organized and automate routine tasks to save time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I track inventory across multiple store branches?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, you can easily track every jewelry item in inventory across multiple store locations with a centralized dashboard. It provides visibility and allows you to monitor stocks available in different branches."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does it help with purchase and supplier management?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The system tracks purchase orders, supplier details, and inventory flow, which helps create an accurate record of order fulfillment, returns, and repairs. It allows you to view supplier delivery times, stock quality, and pricing."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does it manage custom orders?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Owners Inventory manages custom orders effectively. It records all specifications, requirements, delivery dates, and payment details. It ensures that the order is completed accurately according to the customer's demand and delivered on time."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Jewelry Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines jewelry inventory management from stock intake to sales and reconciliation.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Stock Intake and Item Registration",
                    "text": "After stock intake, every jewelry item is registered according to its metal type, price, and design. Items are assigned a unique identity for tracking, ensuring each item entering the store is properly documented and monitored consistently."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Display Management",
                    "text": "Jewelry is categorized and showcased in its specific storage areas with clear attributes like necklaces, rings, and earrings. The system maintains visibility for each item to help staff find them quickly."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Sales Processing",
                    "text": "Owners Inventory helps process orders according to customer requirements. When a jewelry product is sold or returned, the system updates stock instantly, preventing order mismatch and maintaining consistency between displayed items and system data."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Custom Orders and Stock Allocation",
                    "text": "Custom orders with special engravings or designs are recorded separately while linking the required material. The system ensures that each custom item is handled exactly as customers demand without affecting available inventory."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Inventory Reconciliation",
                    "text": "The system records stock movements and sales activity and provides accurate reports. This helps identify in-demand items, slow-moving products, and trending jewelry pieces, aligning restocking with customer demand and seasonal trends."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
      <SubIndustriesHero
        title="Jewelry Inventory Management Software that Simplifies Tracking and Sales "
        description="Streamline your inventory management, track items, sync stocks across multiple locations, and efficiently manage purchase orders. Owners Inventory maintains accurate records of jewelry stock. Our reliable jewelry management software makes operations efficient and enhances customer satisfaction."
        image={heroBanner}
        imageClassName="max-w-[1000px]"
        ctaDesc="Start Free Today"
        variant="animation2"
      />

      <VoicesRealBusiness title="Rated on Leading Review Platforms" />

      <IndustryUnifiedPlatform
        heading={JEWELRY_INVENTORY_UNIFIED_HEADING}
        paragraph={JEWELRY_INVENTORY_UNIFIED_PARAGRAPH}
        cards={JEWELRY_INVENTORY_UNIFIED_CARDS}
        iconSet="jewelaryInventory"
      />

      <WhyChoosePOS
        heading="How Our Jewelry Inventory Management Software Solves These Challenges"
        paragraph="Our inventory software efficiently handles jewelry inventory management, helps store owners view store activities, and reduces errors. It keeps accurate records of every item and transaction made."
        cards={JEWELRY_INVENTORY_WHY_CHOOSE_CARDS}
        mainImage={whyChoseBanner}
         iconSet="jewelaryInventory"
      />

      <KeyHighlights
        heading="Key Features that Transform Jewelry Store Operations"
        features={JEWELRY_INVENTORY_KEY_FEATURES_CARDS}
      />

      <InventoryWorkflow
        heading={JEWELRY_INVENTORY_WORKFLOW_DATA.heading}
        paragraph={JEWELRY_INVENTORY_WORKFLOW_DATA.paragraph}
        steps={JEWELRY_INVENTORY_WORKFLOW_DATA.steps}
      />

      <IndustriesCallToAction
        title="Manage Your Jewelry Store Efficiently"
        description="Simplify daily operations, improve inventory accuracy, and handle every order with confidence using our jewelry inventory management software."
        ctaDesc="Request a Free Demo"
      />

      <IndustriesFeaturesSection features={JEWELRY_INVENTORY_FEATURE_CARDS} />

      <SecurityCompliance
        title="Security, Accuracy, and Compliance."
        description="With high security controls and accurate tracking, our secure jewelry inventory software makes it convenient for jewelry stores to handle expensive items. Every transaction is recorded, ensuring accountability at each stage. The role-based access feature of Owners Inventory limits access to sensitive data, while detailed logs identify discrepancies and maintain operational transparency across inventory, sales, and financial records."
      />

      <ToolsSection
        heading={JEWELRY_INVENTORY_TOOLS_DATA.heading}
        description={JEWELRY_INVENTORY_TOOLS_DATA.paragraph}
        tools={JEWELRY_INVENTORY_TOOLS_DATA.tools}
      />

      <IndustriesTestimonial
        testimonials={JEWELRY_INVENTORY_TESTIMONIALS}
        heading={JEWELRY_INVENTORY_TESTIMONIAL_DATA.heading}
        paragraph={JEWELRY_INVENTORY_TESTIMONIAL_DATA.paragraph}
        showSmartTools={true}
        secondHeading={JEWELRY_INVENTORY_TESTIMONIAL_DATA.secondHeading}
        secondDescription={JEWELRY_INVENTORY_TESTIMONIAL_DATA.secondDescription}
        whyChooseShow={true}
        whyChooseTitle={JEWELRY_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
        whyChooseDescription={JEWELRY_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
        features={JEWELRY_INVENTORY_TESTIMONIAL_FEATURES}
         iconSet="jewelaryInventory"
      />

      <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
        <FaqSection
          heading="FAQS"
          paragraph="Below are some of the most frequently asked questions about the jewelry inventory management software we provide."
          faqs={JEWELRY_INVENTORY_FAQS}
          buttonText="Start Now"
        />
      </div>
       <IndustriesHardwareControl
        title="Experience Smarter Jewelry Management"
        description="Upgrade your store with our jewelry management system designed to handle the complexities of jewelry inventory management and sales."
        ctaDesc="Start Today"
      />
    </div>
    </>
  );
};

export default Page;
