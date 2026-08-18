import React from "react";
import Script from "next/script";
const heroBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/hero-banner.webp";
const whyChoseBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/why-chose-banner.webp";

import {
  FLORIST_KEY_FEATURES_CARDS,
  FLORIST_WHY_CHOOSE_CARDS,
  FLORIST_FEATURE_CARDS
} from "@/constant/subindustries/posFloristData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  FLORIST_UNIFIED_CARDS,
  FLORIST_UNIFIED_HEADING,
  FLORIST_UNIFIED_PARAGRAPH,
  FLORIST_WORKFLOW_DATA,
  FLORIST_TESTIMONIALS,
  FLORIST_FAQS,
  FLORIST_TESTIMONIAL_DATA,
  FLORIST_TESTIMONIAL_FEATURES,
  FLORIST_TOOLS_DATA,
} from "@/constant/subindustries/posFloristData";
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
        id="schema-florist"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https://ownersinventory.com/industries/florist-pos-system/#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ownersinventory.com" },
                  { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://ownersinventory.com/industries" },
                  { "@type": "ListItem", "position": 3, "name": "Florist POS System", "item": "https://ownersinventory.com/industries/florist-pos-system" }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://ownersinventory.com/industries/florist-pos-system/#webpage",
                "url": "https://ownersinventory.com/industries/florist-pos-system",
                "name": "Florist POS System for Smarter Sales, Inventory, and Order Management | Owners Inventory",
                "description": "Florist POS software to manage flower inventory, custom orders, delivery scheduling, and customer loyalty in one platform. Reduce waste, speed up checkout, and keep every order accurate.",
                "isPartOf": { "@id": "https://ownersinventory.com/#website" },
                "about": { "@id": "https://ownersinventory.com/#software" },
                "breadcrumb": { "@id": "https://ownersinventory.com/industries/florist-pos-system/#breadcrumb" },
                "inLanguage": "en-US"
              },
              {
                "@type": "Organization",
                "@id": "https://ownersinventory.com/#organization",
                "name": "Owners Inventory",
                "url": "https://ownersinventory.com",
                "description": "Owners Inventory is an all-in-one business management platform for retail, wholesale, manufacturing, and ecommerce businesses. It combines POS, inventory management, purchasing, ecommerce, HR, and finance in one system.",
                "foundingDate": "2025",
                "areaServed": "Worldwide",
                "sameAs": [
                  "https://www.facebook.com/ownersinventory/",
                  "https://www.instagram.com/ownersinventory/",
                  "https://www.linkedin.com/company/owners-inventory/"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Support",
                  "email": "sales@ownersinventory.com",
                  "availableLanguage": "English"
                }
              },
              {
                "@type": "SoftwareApplication",
                "@id": "https://ownersinventory.com/#software",
                "name": "Owners Inventory",
                "applicationCategory": "BusinessApplication",
                "applicationSubCategory": "Inventory Management Software",
                "operatingSystem": "Web, iOS, Android",
                "url": "https://ownersinventory.com",
                "description": "Owners Inventory is an all-in-one platform combining POS, inventory management, ecommerce, purchasing, HR, accounts and finance for retail, wholesale, and manufacturing businesses.",
                "publisher": { "@id": "https://ownersinventory.com/#organization" }
              },
              {
                "@type": "Product",
                "@id": "https://ownersinventory.com/industries/florist-pos-system/#product",
                "name": "Florist POS System by Owners Inventory",
                "description": "A point of sale and inventory system built for florists, with real-time flower stock tracking, custom order and event management, delivery scheduling and route coordination, and customer loyalty tracking.",
                "brand": { "@id": "https://ownersinventory.com/#organization" },
                "category": "Point of Sale Software for Florists",
                "audience": {
                  "@type": "BusinessAudience",
                  "audienceType": "Florists and flower shop owners"
                },
                "isRelatedTo": { "@id": "https://ownersinventory.com/#software" }
              },
              {
                "@type": "FAQPage",
                "@id": "https://ownersinventory.com/industries/florist-pos-system/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can the system track flowers and supply inventory in real time?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Every stock movement is recorded automatically, including supplier deliveries, sales, waste write-offs, and adjustments, so inventory levels are always accurate without manual counting."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system support custom order and event management?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The POS system for florists will enable you to create in-depth custom orders for weddings, corporate clients, subscription services, as well as special occasions with complete ingredient, rates and delivery information linked to every purchase."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage both walk-in sales and advance orders from the same system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The operations of all order types, such as counter sales, phone orders, online store orders, and event packages all pass through the same queue and fulfillment process, and all occur in the same platform."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How quickly can I set up Owners Inventory for my florist shop?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most florist shops are fully set up within a few hours. Customer records, supplier information, and flower varieties and arrangements can be uploaded in bulk, meaning your team can start using the system the same day."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can different staff members have different access levels?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Role-based permissions can be set to allow counter staff, floral designers, delivery drivers, and managers access only to the areas they need for their job."
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
          title="Florist POS System for Smarter Sales, Inventory, and Order Management"
          description="If a florist shop doesn't have the right point of sale system, they will find it hard to generate sales, keep track of their flowers, provide timely deliveries, and handle seasonal demand. Manual processes can result in wilted flower stock, long checkout lines, inaccurate custom orders and poor customer communication for flower businesses."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Rated on Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={FLORIST_UNIFIED_HEADING}
          paragraph={FLORIST_UNIFIED_PARAGRAPH}
          cards={FLORIST_UNIFIED_CARDS}
          iconSet="florist"
        />

        <WhyChoosePOS
          heading="How Our Florist POS System Solves These Challenges"
          paragraph="Owners Inventory is the all-in-one florist POS system that allows florists to manage, custom orders, flower inventory, deliveries, and customer accounts from a single platform."
          cards={FLORIST_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="florist"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory That Improve Florist Operations"
          features={FLORIST_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={FLORIST_WORKFLOW_DATA.heading}
          paragraph={FLORIST_WORKFLOW_DATA.paragraph}
          steps={FLORIST_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Run Your Florist Business Without the Guesswork"
          description="Minimise waste from poor inventory visibility, missed orders due to manual handling and delivery failures from a lack of connection with scheduling tools. Owners Inventory is an all-in-one florist point of sale system that allows shops to control their sales, custom orders, flower inventory, deliveries, customer accounts and business performance all from a single place."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={FLORIST_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security and Role-Based Access"
          description="Each team member can access only the information they need. Each member of the counter staff, delivery personnel, florist and manager has clear permission levels, keeping financial data secure and ensuring accurate financial records."
        />

        <ToolsSection
          heading={FLORIST_TOOLS_DATA.heading}
          description={FLORIST_TOOLS_DATA.paragraph}
          tools={FLORIST_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={FLORIST_TESTIMONIALS}
          heading={FLORIST_TESTIMONIAL_DATA.heading}
          paragraph={FLORIST_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={FLORIST_TESTIMONIAL_DATA.secondHeading}
          secondDescription={FLORIST_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={FLORIST_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={FLORIST_TESTIMONIAL_DATA.whyChooseDescription}
          features={FLORIST_TESTIMONIAL_FEATURES}
          iconSet="florist"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="Find answers to common questions about inventory tracking, order management, staff permissions, setup, and day-to-day florist shop operations."
            faqs={FLORIST_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Improve Order Accuracy and Florist Efficiency"
          description="Our florist point of sale software consolidates inventory management, sales processing, custom order processing, delivery coordination, customer relationship tools, and business reporting into a single easy-to-use system, simplifying daily business operations in your flower shop to make it more profitable and organized."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
