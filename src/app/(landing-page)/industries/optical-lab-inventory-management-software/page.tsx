import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/optical-lab-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/optical-lab-inventory-management-software/why-chose-banner.webp";

import {
  OPTICAL_LAB_INVENTORY_KEY_FEATURES_CARDS,
  OPTICAL_LAB_INVENTORY_WHY_CHOOSE_CARDS,
  OPTICAL_LAB_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/opticalLabInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  OPTICAL_LAB_INVENTORY_UNIFIED_CARDS,
  OPTICAL_LAB_INVENTORY_UNIFIED_HEADING,
  OPTICAL_LAB_INVENTORY_UNIFIED_PARAGRAPH,
  OPTICAL_LAB_INVENTORY_WORKFLOW_DATA,
  OPTICAL_LAB_INVENTORY_TESTIMONIALS,
  OPTICAL_LAB_INVENTORY_FAQS,
  OPTICAL_LAB_INVENTORY_TESTIMONIAL_DATA,
  OPTICAL_LAB_INVENTORY_TESTIMONIAL_FEATURES,
  OPTICAL_LAB_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/opticalLabInventoryManagementSoftwareData";
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
        id="schema-optical-lab-inventory"
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
                "description": "Optical lab management software that streamlines prescription intake and verification, tracks lens and frame inventory in real time, manages production work orders through every stage, records quality checks, and synchronizes orders across stores, clinics, and online channels from one dashboard.",
                "featureList": [
                  "Electronic prescription intake and verification",
                  "Real-time lens, frame, coating, and accessory inventory tracking",
                  "Production and work order management through cutting, coating, and assembly",
                  "Quality assurance tracking at multiple production stages",
                  "Custom prescription and special order handling",
                  "Multi-location inventory and order synchronization",
                  "Retail store, clinic, wholesale, and online order integration",
                  "Unified dashboard for production, inventory, and orders",
                  "Role-based access control with audit logs",
                  "Production efficiency and turnaround reporting",
                  "Integrations with CRM, ERP, accounting, and barcode systems"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Optical Lab Management Software | Owners Inventory",
                "url": "https://ownersinventory.com/industries/optical-lab-management-software",
                "description": "Streamline prescription processing, track lens and frame inventory, manage production workflows, and synchronize orders across locations with Owners Inventory's optical lab management software.",
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
                      "name": "Optical Lab Management Software",
                      "item": "https://ownersinventory.com/industries/optical-lab-management-software"
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
                "name": "Optical Lab Management Software",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "Lab management software designed for optical labs to handle prescription intake and verification, lens and frame inventory control, production work order tracking, quality assurance, custom orders, and multi-channel order management from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/optical-lab-management-software",
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
                        "name": "David R"
                      },
                      "reviewBody": "It used to be hard to order prescriptions, particularly during peak times, but now we can do it without any confusion and track the job from start to finish.",
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
                        "name": "Michael T"
                      },
                      "reviewBody": "The inventory tracking system is highly effective in ensuring proper stock of lenses and frames at all times. We no longer face unforeseen shortages.",
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
                        "name": "Sarah L"
                      },
                      "reviewBody": "The reporting tools provide us with a clear insight into production performance and order volumes, which has enabled us to be much more efficient.",
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
                    "name": "How can optical lab management software improve operational accuracy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Prescription tracking, production activities, and inventory movement are tracked automatically in the system. This minimizes human error and ensures each order is fulfilled in line with the customer's needs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it suitable for small optical labs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Owners Inventory works for optical labs and production facilities of all sizes, helping streamline operations and automate repetitive tasks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage multiple lab locations with the software?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The software offers centralized views for multiple locations, managing stock levels, production status, and order fulfillment from one dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does it help with inventory management?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The system provides real-time monitoring of lenses, frames, coatings, and accessories. It automatically updates stock after use, purchase, and adjustment, keeping inventory records accurate."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can it track custom prescriptions and special orders?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Owners Inventory records prescription details, custom requirements, production steps, delivery dates, and payment information, ensuring accurate fulfillment and shipment."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Optical Lab Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines optical lab operations from prescription intake to quality inspection.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Prescription Intake and Order Registration",
                    "text": "Upon receipt of prescriptions, all relevant information such as lens specifications, coatings, frame choices, and customer needs is entered into the system. Each order is assigned an order number for full traceability during production."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Inventory and Material Management",
                    "text": "The system classifies and records lenses, frames, coatings, and accessories. Stock levels are monitored in real time so staff can easily find the materials needed for production, minimizing delays from shortages."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Production Workflow Management",
                    "text": "Owners Inventory monitors all stages of production for each order, from lens cutting to coating, edging, fitting, and assembly. Staff can follow progress in real time and prioritize urgent orders."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Custom Prescription and Special Order Handling",
                    "text": "Special lenses, coatings, and custom frame modifications are handled case by case with detailed specifications. All customer needs and production instructions are recorded to guarantee accurate production without disrupting standard flows."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Quality Inspection and Verification",
                    "text": "Completed glasses are checked for prescription accuracy and product standards before delivery. Inspection results are entered into the system to help minimize remakes and ensure the product meets customer needs."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Optical Lab Management Software That Simplifies Workflow and Order Tracking"
          description="Simplify the processing of prescriptions; Monitor lens and frame inventories; Organize lab orders and streamline lens production. Owners Inventory provides optical labs with accurate records, minimizes errors, streamlines turnaround and provides exceptional service to customers."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={OPTICAL_LAB_INVENTORY_UNIFIED_HEADING}
          paragraph={OPTICAL_LAB_INVENTORY_UNIFIED_PARAGRAPH}
          cards={OPTICAL_LAB_INVENTORY_UNIFIED_CARDS}
          iconSet="opticalLabInventory"
        />

        <WhyChoosePOS
          heading="How Our Optical Lab Management Software Solves These Challenges"
          paragraph="Our software streamlines optical lab operations, improves accuracy, and provides complete visibility into production and inventory activities. It helps lab managers monitor workflows and reduce manual effort."
          cards={OPTICAL_LAB_INVENTORY_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="opticalLabInventory"
        />

        <KeyHighlights
          heading="Key Features That Transform Optical Lab Operations"
          features={OPTICAL_LAB_INVENTORY_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={OPTICAL_LAB_INVENTORY_WORKFLOW_DATA.heading}
          paragraph={OPTICAL_LAB_INVENTORY_WORKFLOW_DATA.paragraph}
          steps={OPTICAL_LAB_INVENTORY_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Start Efficiently Managing Your Optical Lab"
          description="Manually tracking orders, facing production delays, and dealing with inaccurate inventories can impact productivity and customer satisfaction. The structured optical lab management software allows you to control prescriptions and production processes with absolute accuracy and visibility."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={OPTICAL_LAB_INVENTORY_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance"
          description="Prescriptions, production activities, inventory movement, and customer transactions are all fully documented in the system. Data is shielded from unauthorized access by role-based controls and audit logs are kept to track activity and uphold operational standards."
        />

        <ToolsSection
          heading={OPTICAL_LAB_INVENTORY_TOOLS_DATA.heading}
          description={OPTICAL_LAB_INVENTORY_TOOLS_DATA.paragraph}
          tools={OPTICAL_LAB_INVENTORY_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={OPTICAL_LAB_INVENTORY_TESTIMONIALS}
          heading={OPTICAL_LAB_INVENTORY_TESTIMONIAL_DATA.heading}
          paragraph={OPTICAL_LAB_INVENTORY_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={OPTICAL_LAB_INVENTORY_TESTIMONIAL_DATA.secondHeading}
          secondDescription={OPTICAL_LAB_INVENTORY_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={OPTICAL_LAB_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={OPTICAL_LAB_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
          features={OPTICAL_LAB_INVENTORY_TESTIMONIAL_FEATURES}
          iconSet="opticalLabInventory"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="Below are some of the most frequently asked questions about the optical lab management software we provide."
            faqs={OPTICAL_LAB_INVENTORY_FAQS}
            buttonText="Start Now"
          />
        </div>

        <IndustriesHardwareControl
          title="Experience Smarter Optical Lab Management"
          description="Improve your operations with our optical lab management software that eases prescription processing, inventory control, production tracking, and order management."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
