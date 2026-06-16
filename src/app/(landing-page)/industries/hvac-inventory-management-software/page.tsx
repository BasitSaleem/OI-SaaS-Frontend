import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/hvac-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/hvac-inventory-management-software/why-chose-banner.webp";

import {
  HVAC_INVENTORY_KEY_FEATURES_CARDS,
  HVAC_INVENTORY_WHY_CHOOSE_CARDS,
  HVAC_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/hvacInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  HVAC_INVENTORY_UNIFIED_CARDS,
  HVAC_INVENTORY_UNIFIED_HEADING,
  HVAC_INVENTORY_UNIFIED_PARAGRAPH,
  HVAC_INVENTORY_WORKFLOW_DATA,
  HVAC_INVENTORY_TESTIMONIALS,
  HVAC_INVENTORY_FAQS,
  HVAC_INVENTORY_TESTIMONIAL_DATA,
  HVAC_INVENTORY_TESTIMONIAL_FEATURES,
  HVAC_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/hvacInventoryManagementSoftwareData";
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
        id="schema-hvac-inventory"
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
                "description": "HVAC inventory management software that gives contractors real-time visibility into parts stock across every van and warehouse, so technicians arrive prepared and first-time fix rates stay where they should be.",
                "featureList": [
                  "Real-time parts tracking across vans and warehouses",
                  "Van and warehouse stock in one view",
                  "Automated reorder triggers and low-stock alerts",
                  "Seasonal reorder point adjustments",
                  "Structured purchase order approvals",
                  "Work order parts tracking",
                  "Barcode and SKU-based item tracking",
                  "Bulk parts import via Excel or CSV",
                  "Parts usage and cost reporting",
                  "Accounting software integration (QuickBooks, Xero)"
                ]
              },
              {
                "@type": "WebPage",
                "name": "HVAC Inventory Management Software | Owners Inventory",
                "url": "https://ownersinventory.com/industries/hvac-inventory-management-software",
                "description": "Stop losing money to missing parts and unplanned return trips. Owners Inventory gives HVAC contractors real-time visibility into parts stock across every van and warehouse.",
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
                      "name": "HVAC Inventory Management Software",
                      "item": "https://ownersinventory.com/industries/hvac-inventory-management-software"
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
                "name": "HVAC Inventory Management Software",
                "description": "Inventory management software designed for HVAC businesses to track parts across vans and warehouses, manage purchase orders, control project costs, and monitor stock in real time from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/hvac-inventory-management-software",
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
                    "name": "Can I track van stock and warehouse stock as separate locations in one account?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Each service vehicle and storage location is managed as a distinct stock point within a single account. Managers see parts levels for every van and every warehouse from the same dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I adjust reorder points based on seasonal demand shifts?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Each part carries a reorder point that can be updated at any time. The system sends alerts based on whatever minimum level is currently active for that item, so stocking stays calibrated to the time of year."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Owners Inventory connect with accounting software used by HVAC businesses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Parts costs, supplier invoices, and purchase order data sync with QuickBooks, Xero, and other supported accounting platforms. There is no manual re-entry of data between systems."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How quickly can an HVAC business get the system running?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most operations are fully set up within a single day. The parts catalog is imported from an existing Excel or CSV file rather than entered one item at a time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What happens when a technician uses the last available unit of a critical part?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "When a part reaches zero or drops below its minimum threshold, the system sends an automated alert to the assigned manager. Because the alert triggers at the threshold rather than at zero, there is usually enough lead time to source the part before the next job requiring it is dispatched."
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
          title="HVAC Inventory Management Software, No More Stockouts"
          description="A 10-truck operation averaging one stockout per day can lose upward of $375,000 a year on avoidable return trips alone. Owners Inventory gives HVAC contractors real-time visibility into parts stock across every van and warehouse, so technicians arrive prepared and first-time fix rates stay where they should be."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={HVAC_INVENTORY_UNIFIED_HEADING}
          paragraph={HVAC_INVENTORY_UNIFIED_PARAGRAPH}
          cards={HVAC_INVENTORY_UNIFIED_CARDS}
          iconSet="hvacInventory"
        />

        <WhyChoosePOS
          heading="How Owners Inventory Solves HVAC Parts Management"
          paragraph="Owners Inventory connects parts tracking, purchase order management, van stock replenishment, and supplier records into one system. Service managers get the information they need to keep technicians equipped and purchasing decisions rooted in real consumption data rather than estimates."
          cards={HVAC_INVENTORY_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="hvacInventory"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory for HVAC Parts Tracking"
          features={HVAC_INVENTORY_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={HVAC_INVENTORY_WORKFLOW_DATA.heading}
          paragraph={HVAC_INVENTORY_WORKFLOW_DATA.paragraph}
          steps={HVAC_INVENTORY_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Manage Your HVAC Parts Inventory With Confidence"
          description="HVAC companies using Owners Inventory report fewer stockout incidents, lower emergency procurement costs, and better parts visibility across every vehicle and storage location. Start for free and measure the difference on your next dispatch cycle."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={HVAC_INVENTORY_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance."
          description="Every stock movement, purchase order, and parts adjustment is recorded with a timestamp and tied to the user who made it. Nothing is edited or deleted without a traceable record. For HVAC businesses that deal with warranty audits or maintenance contract reviews, every transaction is stored and ready to produce when needed."
          secondDescription="Access is assigned by role. A technician logging parts on a job cannot touch purchase orders or financial data. A procurement staff member managing supplier orders works within their own scope and nothing beyond it. All data backs up automatically to encrypted cloud storage and is never shared with third parties. Records stay protected regardless of what happens to any device in the field."
        />

        <ToolsSection
          heading={HVAC_INVENTORY_TOOLS_DATA.heading}
          description={HVAC_INVENTORY_TOOLS_DATA.paragraph}
          tools={HVAC_INVENTORY_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={HVAC_INVENTORY_TESTIMONIALS}
          heading={HVAC_INVENTORY_TESTIMONIAL_DATA.heading}
          paragraph={HVAC_INVENTORY_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={HVAC_INVENTORY_TESTIMONIAL_DATA.secondHeading}
          secondDescription={HVAC_INVENTORY_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={HVAC_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={HVAC_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
          features={HVAC_INVENTORY_TESTIMONIAL_FEATURES}
          iconSet="hvacInventory"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="Got questions about managing HVAC inventory with Owners Inventory? Here are straightforward answers to what contractors, service managers, and field teams ask most."
            faqs={HVAC_INVENTORY_FAQS}
            buttonText="Start Now"
          />
        </div>

        <IndustriesHardwareControl
          title="Build a More Reliable HVAC Service Operation"
          description="Disorganized parts management costs HVAC businesses more than just stockouts and rush orders. It costs technician time, dispatch accuracy, and the kind of customer experience that drives repeat service agreements. Owners Inventory gives your operation the structure it needs to stock accurately, dispatch with confidence, and keep every part accounted for from the warehouse to the job site."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
