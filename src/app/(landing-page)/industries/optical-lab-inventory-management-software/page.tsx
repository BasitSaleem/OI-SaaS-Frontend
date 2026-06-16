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
                "description": "Optical lab inventory management software to track lens blanks, frame stocks, and consumables, monitor lens breakages, match jobs to trays, and optimize lab workflow from surfacing to edging.",
                "featureList": [
                  "Real-time lens blank and frame stock tracking",
                  "Tray and job matching with barcode tracking",
                  "Lens breakage and scrap cost monitoring",
                  "Optical consumables and alloy chemical tracking",
                  "Multi-station workflow status updates",
                  "Low-stock alerts and automated reordering",
                  "Supplier purchase order management",
                  "Bulk lens matrix import capability",
                  "Role-based access controls for technicians",
                  "Detailed production yield and wastage reporting"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Optical Lab Inventory Management Software | Owners Inventory",
                "url": "https://ownersinventory.com/industries/optical-lab-inventory-management-software",
                "description": "Track lens blanks, frame stocks, and consumables, monitor breakages, and optimize lab workflow with Owners Inventory.",
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
                      "name": "Optical Lab Inventory Management Software",
                      "item": "https://ownersinventory.com/industries/optical-lab-inventory-management-software"
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
                "name": "Optical Lab Inventory Management Software",
                "description": "Inventory management software designed for optical laboratories to track lenses, frames, and consumables, trace jobs, and monitor breakage yield rates from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/optical-lab-inventory-management-software",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "description": "Free trial available. Book a demo to get started."
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can I manage massive lens matrices (Sphere/Cylinder combinations)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Owners Inventory supports bulk imports via CSV, allowing you to upload complete power matrices (Sphere, Cylinder, Addition, Material, Diameter) at once. You don't need to manually create thousands of separate product records."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the system track and report lens breakages?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "When a lens breaks during processing, technicians log the breakage code (e.g., surfacing, polishing, edging) directly from the station. The system writes off the lens, prompts stockroom staff to issue a replacement, and logs the scrap cost for monthly yield reports."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can we track customer-owned frames sent for lenses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Customer-owned frames can be registered as temporary inventory, linked to a specific job ticket, and assigned to a barcode tray. Once the lenses are mounted and the job is completed, the system automatically checks the frame out of inventory."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the software support multiple lab locations or retail store links?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can manage multiple lab facilities or link a central surfacing lab to retail optician shops. Transferred stock, finished jobs, and inventory levels are tracked across all locations under a single dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can we set minimum stock alerts for optical consumables?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, you can set reorder thresholds for any consumable including polishing pads, alloy blocks, blocking tape, and safety labels. The system alerts you immediately when stock falls below safety margins."
                    }
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
          title="Security, Accuracy, and Compliance."
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
