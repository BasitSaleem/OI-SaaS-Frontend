import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/warehouses-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/warehouses-pos/why-chose-banner.webp";

import {
  WAREHOUSES_KEY_FEATURES_CARDS,
  WAREHOUSES_WHY_CHOOSE_CARDS,
  WAREHOUSES_FEATURE_CARDS
} from "@/constant/subindustries/warehousesPosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  WAREHOUSES_UNIFIED_CARDS,
  WAREHOUSES_UNIFIED_HEADING,
  WAREHOUSES_UNIFIED_PARAGRAPH,
  WAREHOUSES_WORKFLOW_DATA,
  WAREHOUSES_TESTIMONIALS,
  WAREHOUSES_FAQS,
  WAREHOUSES_TESTIMONIAL_DATA,
  WAREHOUSES_TESTIMONIAL_FEATURES,
  WAREHOUSES_TOOLS_DATA,
} from "@/constant/subindustries/warehousesPosData";
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
        id="schema-warehouses"
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
                "description": "Warehouse POS system that manages large inventories across multiple storage locations with real-time stock tracking, barcode scanning, fast order processing and dispatch, supplier and purchase order management, role-based access, and detailed reporting from one centralized dashboard.",
                "featureList": [
                  "Real-time inventory tracking across receiving, transfers, sales, and dispatch",
                  "Barcode scanning for fast picking, packing, and stock checks",
                  "Multi-location and multi-section stock management",
                  "Order processing and dispatch management",
                  "Supplier and purchase order management",
                  "Role-based employee access control",
                  "Mobile-friendly warehouse interface",
                  "Automated low-stock alerts",
                  "Detailed warehouse and inventory reporting",
                  "Centralized business management dashboard",
                  "Integrations with Shopify, Stripe, QuickBooks, and more"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Warehouse POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/warehouse-pos-system",
                "description": "Manage large inventories, multi-location stock, fast order processing, and barcode-driven dispatch with Owners Inventory's warehouse POS system. Real-time tracking from one dashboard.",
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
                      "name": "Warehouse POS System",
                      "item": "https://ownersinventory.com/industries/warehouse-pos-system"
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
                "name": "Warehouse POS System",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "POS software designed for warehouses to manage large inventories across multiple storage locations, with real-time stock tracking, barcode scanning, order processing and dispatch, supplier and purchase order management, role-based access, and detailed reporting from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/warehouse-pos-system",
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
                        "name": "Daniel H"
                      },
                      "reviewBody": "Before using this system, we used to have mismatching inventory and late shipments, but now our warehouse is managed much more efficiently and is far better organized.",
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
                        "name": "Sarah M"
                      },
                      "reviewBody": "We can now track every product movement in real time, which has greatly reduced stock errors and missing inventory.",
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
                        "name": "Ahmed T"
                      },
                      "reviewBody": "Order processing is significantly faster now. Our staff can manage bulk shipments and dispatches without confusion.",
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
                        "name": "Jason R"
                      },
                      "reviewBody": "Installation was straightforward and our warehouse staff adapted to the system easily. Day-to-day stock tracking has become so much simpler.",
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
                        "name": "Fatima K"
                      },
                      "reviewBody": "We manage inventory across multiple storage locations, and this system keeps everything synchronized without extra manual work.",
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
                        "name": "Michael D"
                      },
                      "reviewBody": "Our receiving and stock checking has been much easier with the barcode scanning feature, and operations are smoother each day.",
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
                        "name": "Sophie L"
                      },
                      "reviewBody": "This warehouse POS system fits perfectly with the way we work. It is reliable, fast, and keeps our inventory accurate at all times.",
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
                    "name": "Can the system track inventory in real time?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. All stock movements such as receiving, transfers, dispatches, and returns are recorded automatically in real time, keeping inventory records accurate at all times."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system support barcode scanning?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The warehouse POS system supports barcode scanning for quicker stock retrieval, inventory verification, receiving incoming goods, and order processing."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage multiple warehouse locations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. It is a multi-location warehouse management system. Owners and managers can track inventory, transfers, orders, and warehouse performance across all locations from one central dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How quickly can I set up Owners Inventory for my warehouse?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most warehouses are up and running within hours. Products, SKUs, suppliers, and stock categories can be imported in bulk so teams can get started quickly."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can different warehouse employees have different access levels?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Warehouse workers, supervisors, accountants, and managers can be given role-based permissions, helping maintain security and control over warehouse operations."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory POS Manages Warehouse Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines warehouse operations from inventory setup to performance monitoring.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Add and Organize Warehouse Inventory",
                    "text": "Add products, raw materials, spare parts, and packaged goods with SKUs, barcodes, categories, supplier information, and storage locations. Organize inventory by racks, shelves, or sections for easy access and control."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Manage Incoming and Outgoing Stock",
                    "text": "All incoming deliveries and outgoing shipments are recorded in real time. Stock levels update automatically while receiving, transferring, dispatching, or returning stock, with no paperwork required."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Process Orders and Bulk Shipments",
                    "text": "Warehouse staff create and manage customer orders, wholesale shipments, and bulk dispatches from one dashboard. The system automatically checks quantities and stock availability to eliminate picking and packing mistakes."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Fast Barcode Scanning and Stock Lookup",
                    "text": "Barcode scanners let employees quickly search products, confirm inventory, and process orders, improving warehouse efficiency and reducing delays during peak times."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Secure Billing and Transaction Management",
                    "text": "The system handles invoice creation, payment monitoring, supplier interactions, and customer accounts. All records are stored securely and remain readily available when needed."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Monitor Inventory and Warehouse Performance",
                    "text": "Warehouse owners get live data on stock movement, low-stock alerts, fast-moving items, pending orders, and daily operating reports, helping prevent stockouts, overstocking, and order delays."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title= "Warehouse POS System for Faster Operations and Better Inventory Control"
          description= "If a warehouse business doesn't have the right point-of-sale system, it may encounter inventory inaccuracies, delayed order processing, mismanagement of inventory and struggle with high product volume. Without a reliable warehouse POS system, businesses typically suffer from shipment delays, tracking errors, lost inventory, and inefficient warehouse operations."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={WAREHOUSES_UNIFIED_HEADING}
          paragraph={WAREHOUSES_UNIFIED_PARAGRAPH}
          cards={WAREHOUSES_UNIFIED_CARDS}
          iconSet="warehouses"
        />

        <WhyChoosePOS
          heading="How Our POS System Solves These Challenges"
          paragraph="Owners Inventory is a single solution for warehouse POS systems that lets you manage inventory and handle all your warehouse activities from one platform."
          cards={WAREHOUSES_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="warehouses"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory That Improve Warehouse Operations"
          features={WAREHOUSES_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={WAREHOUSES_WORKFLOW_DATA.heading}
          paragraph={WAREHOUSES_WORKFLOW_DATA.paragraph}
          steps={WAREHOUSES_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Run Your Warehouse Operations Without the Guesswork"
          description="Reduce delays associated with manual stock management, inaccurate inventory and disconnected warehouse operation. Owners Inventory is a full-featured POS solution for warehouses that enables businesses to manage and control inventory, ordering, stock movement, and warehouse performance from a single platform."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={WAREHOUSES_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security and Role-Based Access"
          description= "Access to system sections is limited based on employee's roles and responsibilities. Employees in the warehouse, as well as supervisors, accountants and managers can work with restricted access to reduce unauthorized changes and maintain security."
          secondDescription= "This helps keep warehouses up to date with records and ensure safe and organized operations."
        />

        <ToolsSection
          heading={WAREHOUSES_TOOLS_DATA.heading}
          description={WAREHOUSES_TOOLS_DATA.paragraph}
          tools={WAREHOUSES_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={WAREHOUSES_TESTIMONIALS}
          heading={WAREHOUSES_TESTIMONIAL_DATA.heading}
          paragraph={WAREHOUSES_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={WAREHOUSES_TESTIMONIAL_DATA.secondHeading}
          secondDescription={WAREHOUSES_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={WAREHOUSES_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={WAREHOUSES_TESTIMONIAL_DATA.whyChooseDescription}
          features={WAREHOUSES_TESTIMONIAL_FEATURES}
          iconSet="warehouses"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="Below are some of the most commonly asked questions about our warehouse POS system."
            faqs={WAREHOUSES_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Improve Inventory Accuracy and Warehouse Efficiency"
          description="Our warehouse POS system streamlines inventory management, order fulfillment, stock monitoring and operational reporting on a single platform designed for efficient, effective and reliable warehouse operations day after day. "
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
