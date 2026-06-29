import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/construction-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/construction-inventory-management-software/why-chose-banner.webp";

import {
  CONSTRUCTION_INVENTORY_KEY_FEATURES_CARDS,
  CONSTRUCTION_INVENTORY_WHY_CHOOSE_CARDS,
  CONSTRUCTION_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/constructionInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  CONSTRUCTION_INVENTORY_UNIFIED_CARDS,
  CONSTRUCTION_INVENTORY_UNIFIED_HEADING,
  CONSTRUCTION_INVENTORY_UNIFIED_PARAGRAPH,
  CONSTRUCTION_INVENTORY_WORKFLOW_DATA,
  CONSTRUCTION_INVENTORY_TESTIMONIALS,
  CONSTRUCTION_INVENTORY_FAQS,
  CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA,
  CONSTRUCTION_INVENTORY_TESTIMONIAL_FEATURES,
  CONSTRUCTION_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/constructionInventoryManagementSoftwareData";
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
        id="schema-construction-inventory"
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
                "description": "Construction inventory management software that tracks materials, tools, and equipment across multiple job sites and warehouses, manages suppliers and purchase orders, controls project costs, monitors stock transfers, and provides real-time visibility to prevent delays and waste.",
                "featureList": [
                  "Real-time material, tool, and equipment tracking",
                  "Multi-site and warehouse inventory management",
                  "Supplier and purchase order management",
                  "Stock transfer tracking between job sites",
                  "Project-based cost and usage monitoring",
                  "Low-stock alerts and automated reordering",
                  "Equipment check-in and check-out tracking",
                  "Barcode scanning for fast inventory updates",
                  "Role-based access control for site teams",
                  "Detailed reporting on usage, costs, and waste"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Construction Inventory Management Software | Owners Inventory",
                "url": "https://ownersinventory.com/industries/construction-inventory-management-software",
                "description": "Track materials, tools, and equipment across job sites, manage suppliers, control costs, and prevent delays with Owners Inventory's construction inventory management software.",
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
                      "name": "Construction Inventory Management Software",
                      "item": "https://ownersinventory.com/industries/construction-inventory-management-software"
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
                "name": "Construction Inventory Management Software",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "Inventory management software designed for construction businesses to track materials, tools, and equipment across multiple job sites and warehouses, manage suppliers and purchase orders, control project costs, and monitor stock transfers from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/construction-inventory-management-software",
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
                    "name": "Can the software track materials across multiple job sites?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system tracks materials, tools, and equipment across multiple job sites and warehouses, giving you real-time visibility from one central dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it manage tools and equipment check-in and check-out?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The software tracks equipment check-in and check-out, so you always know which tools are on which site and who is responsible for them."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage suppliers and purchase orders?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can create purchase orders, track deliveries, and monitor supplier performance to ensure timely material restocking and avoid project delays."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it help control project costs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system monitors material usage and costs per project, helping you stay on budget and identify waste early."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can multiple team members access the system securely?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Role-based access control lets you grant site managers, purchasers, and admins the right level of access while keeping sensitive data secure."
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
          title="Construction Inventory Management Software That Saves Money"
          description="Materials account for 40-50% of project costs, yet 10-15% of those materials are wasted. Owners Inventory helps construction companies reduce that waste by giving teams real-time visibility into what they have, where it is, and when to reorder, so every dollar spent on materials is accounted for. "
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={CONSTRUCTION_INVENTORY_UNIFIED_HEADING}
          paragraph={CONSTRUCTION_INVENTORY_UNIFIED_PARAGRAPH}
          cards={CONSTRUCTION_INVENTORY_UNIFIED_CARDS}
          iconSet="constructionInventory"
        />

        <WhyChoosePOS
          heading="How Owners Inventory Solves These Challenges"
          paragraph="Owners Inventory connects material tracking, purchase order management, site-level stock control, and supplier records into one system so construction teams always know what they have, what has been ordered, and what needs attention."
          cards={CONSTRUCTION_INVENTORY_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="constructionInventory"
        />

        <KeyHighlights
          heading="Key Features of Our Construction Inventory Management Software"
          features={CONSTRUCTION_INVENTORY_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={CONSTRUCTION_INVENTORY_WORKFLOW_DATA.heading}
          paragraph={CONSTRUCTION_INVENTORY_WORKFLOW_DATA.paragraph}
          steps={CONSTRUCTION_INVENTORY_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Manage Your Construction Inventory Efficiently"
          description="Construction companies using Owners Inventory report fewer material shortages, better control over project spending, and less time lost to manual stock tracking. Get started for free and see the difference it makes on your next project."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={CONSTRUCTION_INVENTORY_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance"
          description="Every stock movement, purchase order, and material adjustment in Owners Inventory is recorded with a timestamp and tied to the user who made the change. Nothing is edited or deleted without a record of it. This gives project owners a full audit trail across every site and every project without any extra effort from the team."
          secondDescription="Role-based access control means each person on the project only sees and does what their role requires. A site worker logging material usage cannot edit purchase orders or view financial reports. A procurement officer can manage supplier orders without accessing data from other projects. Access is assigned based on each person's role and kept within those boundaries. Data is backed up automatically to encrypted cloud storage, so records are protected even if a device is lost or damaged on site. Your data is never shared with third parties or accessed outside your account. For construction companies subject to contract audits or compliance checks, every transaction record, adjustment log, and purchase history is stored and ready to be pulled up when needed."
        />

        <ToolsSection
          heading={CONSTRUCTION_INVENTORY_TOOLS_DATA.heading}
          description={CONSTRUCTION_INVENTORY_TOOLS_DATA.paragraph}
          tools={CONSTRUCTION_INVENTORY_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={CONSTRUCTION_INVENTORY_TESTIMONIALS}
          heading={CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA.heading}
          paragraph={CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA.secondHeading}
          secondDescription={CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={CONSTRUCTION_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
          features={CONSTRUCTION_INVENTORY_TESTIMONIAL_FEATURES}
          iconSet="constructionInventory"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="Have questions about Owners Inventory for construction? Here are answers to the most common questions from project owners, site managers, and procurement teams."
            faqs={CONSTRUCTION_INVENTORY_FAQS}
            buttonText="Start Now"
          />
        </div>

        <IndustriesHardwareControl
          title="Take Control of Your Construction Inventory Today"
          description="Construction companies using Owners Inventory report fewer material shortages, less money lost to waste, and better visibility across every active site. Start today and put your entire operation in one place."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
