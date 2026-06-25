import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/healthcare-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/healthcare-inventory-management-software/why-chose-banner.webp";

import {
  HEALTHCARE_INVENTORY_KEY_FEATURES_CARDS,
  HEALTHCARE_INVENTORY_WHY_CHOOSE_CARDS,
  HEALTHCARE_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/healthcareInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  HEALTHCARE_INVENTORY_UNIFIED_CARDS,
  HEALTHCARE_INVENTORY_UNIFIED_HEADING,
  HEALTHCARE_INVENTORY_UNIFIED_PARAGRAPH,
  HEALTHCARE_INVENTORY_WORKFLOW_DATA,
  HEALTHCARE_INVENTORY_TESTIMONIALS,
  HEALTHCARE_INVENTORY_FAQS,
  HEALTHCARE_INVENTORY_TESTIMONIAL_DATA,
  HEALTHCARE_INVENTORY_TESTIMONIAL_FEATURES,
  HEALTHCARE_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/healthcareInventoryManagementSoftwareData";
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
        id="schema-healthcare"
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
                "description": "Healthcare inventory management software that helps hospitals, clinics, and pharmacies track medical supplies, monitor expiry dates, and manage multi-location inventory in real time.",
                "featureList": [
                  "Real-time medical inventory tracking",
                  "Batch and expiry date tracking",
                  "Smart stock alerts and notifications",
                  "Multi-location inventory control",
                  "Barcode-based tracking",
                  "Automated stock updates",
                  "Compliance and audit support",
                  "Smart reporting system",
                  "Role-based access control",
                  "Centralized inventory dashboard"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Healthcare Inventory Management Software | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/healthcare-inventory-management-software",
                "description": "Track medical supplies, monitor expiry dates, and manage multi-location healthcare inventory in real time with Owners Inventory's healthcare inventory management software.",
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
                      "name": "Healthcare",
                      "item": "https://www.ownersinventory.com/industries/healthcare-inventory-management-software"
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
                "name": "Healthcare Inventory Management Software",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "Inventory management software designed for hospitals, clinics, and pharmacies to track medical supplies, monitor batch and expiry dates, manage multi-location inventory, and maintain compliance and audit records.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/healthcare-inventory-management-software",
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
                        "name": "Adeel K"
                      },
                      "reviewBody": "We needed something that could handle expiry tracking without making things complicated. Owners Inventory helped us organize our medical supplies properly. It is simple and reliable, which helped us prevent the mistakes we used to make with manual records.",
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
                        "name": "Petric M"
                      },
                      "reviewBody": "After using Owners Inventory, we finally have a system that keeps things structured. Stock handling is smoother now, and we do not have to double-check things anymore.",
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
                        "name": "Oliver P"
                      },
                      "reviewBody": "What I like the most about it is the control this software provides over inventory management. It fits into our workflows easily without slowing anything down, which was our biggest concern initially.",
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
                    "name": "How does your inventory software handle large inventory?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Owners Inventory handles large inventory by organizing data in a structured format such as categorization based on medicine name, usage details, and purpose. It allows quick access, faster updates, and smoother handling of bulk medicine supplies."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it possible to migrate existing inventory data into the system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, it supports data migrations from existing financial records, inventory details, and stock usage, which help healthcare teams continue operations without starting from scratch."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the system help reduce inventory discrepancies?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It maintains consistent records and minimizes manual intervention. This helps our inventory management system reduce mismatches between physical stock and recorded data over time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can multiple users access the system at the same time?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, our inventory software supports multi-user access. It allows different team members to work collaboratively while maintaining data consistency and controlled usage."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the software support inventory management for multiple locations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the system manages healthcare inventory across multiple facilities. It provides full control and oversight of inventory in different branches through a centralized dashboard and improves coordination between healthcare organizations in different locations."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Healthcare Inventory Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines healthcare inventory management from stock entry to performance tracking.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Stock Entry and Setup",
                    "text": "Setup starts by adding items using a barcode or manual entry. Each item's details are recorded such as batch number, expiry date, and quantity, which keeps healthcare inventory structured for accurate tracking and easy future management across different departments."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Centralized Inventory",
                    "text": "All supplies and medical equipment are categorized and stored in their designated place. The centralized system sends real-time updates so healthcare teams can efficiently view stock availability across locations, reducing confusion and boosting coordination."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Usage and Stock Deduction",
                    "text": "Whenever medical supplies are issued or used, the system deducts the used quantity from the inventory. This maintains accurate tracking of consumption, prevents manual errors, and ensures awareness of available resources."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Alerts and Replenishment Management",
                    "text": "The system sends automatic alerts and notifications when item expiry dates are near or stock levels are low, which helps healthcare facilities reorder supplies and equipment on time to avoid shortages and wastage."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Performance Tracking",
                    "text": "The healthcare inventory management reports help staff analyze demand patterns. It helps in procurement planning and provides better control over medical supplies for long-term operational efficiency and cost management."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Healthcare Inventory Management Software Built for Operational Accuracy"
          description="Managing inventory based on guesswork causes healthcare facilities to face issues like expired medications, missing surgical equipment, and stock errors. But with an inventory management system, you can accurately identify the availability of medical supplies across departments. Our healthcare inventory management software keeps critical items available, reduces inefficiencies, and supports better healthcare services for hospitals, clinics, and pharmacies."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={HEALTHCARE_INVENTORY_UNIFIED_HEADING}
          paragraph={HEALTHCARE_INVENTORY_UNIFIED_PARAGRAPH}
          cards={HEALTHCARE_INVENTORY_UNIFIED_CARDS}
          iconSet="healthCareInventory"
        />

        <WhyChoosePOS
          heading="How Owners Inventory Solves Healthcare Management Challenges"
          paragraph="Owners Inventory simplifies inventory management of medical supplies by providing accuracy, visibility, and real-time updates. The inventory management tool controls everything within one system. The system reduces errors and improves decision-making."
          cards={HEALTHCARE_INVENTORY_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="healthCareInventory"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory that Transform Healthcare Operations"
          features={HEALTHCARE_INVENTORY_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={HEALTHCARE_INVENTORY_WORKFLOW_DATA.heading}
          paragraph={HEALTHCARE_INVENTORY_WORKFLOW_DATA.paragraph}
          steps={HEALTHCARE_INVENTORY_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Smarter Control for Critical Healthcare Inventory"
          description="Move beyond manual tracking and manage healthcare inventory with precision. Improve oversight of medical supplies, reduce operational risks, and ensure uninterrupted availability of medicines when they are needed the most."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={HEALTHCARE_INVENTORY_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance."
          description="Healthcare inventory requires accountability. The system records actions like who handled what, when, and where, creating a clear usage trail. This helps teams investigate discrepancies, maintain internal discipline, and stay prepared for audits without scrambling through scattered records. It ensures each record is complete and accurate."
        />

        <ToolsSection
          heading={HEALTHCARE_INVENTORY_TOOLS_DATA.heading}
          description={HEALTHCARE_INVENTORY_TOOLS_DATA.paragraph}
          tools={HEALTHCARE_INVENTORY_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={HEALTHCARE_INVENTORY_TESTIMONIALS}
          heading={HEALTHCARE_INVENTORY_TESTIMONIAL_DATA.heading}
          paragraph={HEALTHCARE_INVENTORY_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={HEALTHCARE_INVENTORY_TESTIMONIAL_DATA.secondHeading}
          secondDescription={HEALTHCARE_INVENTORY_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={HEALTHCARE_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={HEALTHCARE_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
          features={HEALTHCARE_INVENTORY_TESTIMONIAL_FEATURES}
          iconSet="healthCareInventory"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="The healthcare inventory management software is aimed at ensuring the ease of daily operations and efficiency. The following are some of the responses to typical questions by healthcare inventory management software."
            faqs={HEALTHCARE_INVENTORY_FAQS}
            buttonText="Start Now"
          />
        </div>

        <IndustriesHardwareControl
          title="Experience Faster Healthcare Inventory Control"
          description="Take the next step toward structured, error-free healthcare management with Owners Inventory. Improve how you handle medical supplies, reduce operational gaps, and bring consistency across your processes with a system built for real-world healthcare demands."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
