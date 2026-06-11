import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/pet-store-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/pet-store-pos/why-chose-banner.webp";

import {
  PET_STORE_KEY_FEATURES_CARDS,
  PET_STORE_WHY_CHOOSE_CARDS,
  PET_STORE_FEATURE_CARDS
} from "@/constant/subindustries/petStorePosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  PET_STORE_UNIFIED_CARDS,
  PET_STORE_UNIFIED_HEADING,
  PET_STORE_UNIFIED_PARAGRAPH,
  PET_STORE_WORKFLOW_DATA,
  PET_STORE_TESTIMONIALS,
  PET_STORE_FAQS,
  PET_STORE_TESTIMONIAL_DATA,
  PET_STORE_TESTIMONIAL_FEATURES,
  PET_STORE_TOOLS_DATA,
} from "@/constant/subindustries/petStorePosData";
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
        id="schema-pet-store"
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
                "description": "Pet store POS system that tracks sizes, flavors, species types, and variants across food, accessories, and medications, speeds up checkout with barcode scanning, manages returns and exchanges, syncs inventory across branches and online channels, and provides detailed sales analytics.",
                "featureList": [
                  "Variant management for sizes, flavors, and species types",
                  "Fast checkout with barcode scanning",
                  "Real-time inventory tracking across food and accessories",
                  "Seamless returns and exchange handling",
                  "Customer profiles and loyalty programs",
                  "Multi-branch inventory and pricing sync",
                  "E-commerce integration with automatic stock updates",
                  "Supplier and purchase order management",
                  "Seasonal and promotional discount management",
                  "Employee roles, permissions, and activity tracking",
                  "Smart sales and trend reports"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Pet Store POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/pet-store-pos-system",
                "description": "Manage pet food, accessories, and medications with real-time variant tracking, fast checkout, smooth returns, and multi-branch sync using Owners Inventory's pet store POS system.",
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
                      "name": "Pet Store POS System",
                      "item": "https://ownersinventory.com/industries/pet-store-pos-system"
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
                "name": "Pet Store POS System",
                "description": "POS software designed for pet store retailers to manage food, accessories, and medication variants by size, flavor, and species type, speed up billing with barcode scanning, handle returns and exchanges, sync inventory across branches and online channels, and generate detailed sales reports from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/pet-store-pos-system",
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
                    "name": "How does this POS handle sizes, flavors, and variants?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The system tracks every size, flavor, and species type separately across food, accessories, and medications, keeping stock accurate and reducing errors."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can it manage multiple branches?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Inventory, sales, pricing, and reports stay synced across all branches, and you can transfer stock between locations on demand."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the POS support returns and exchanges?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Returns and exchanges are processed clearly, with every action recorded to keep inventory and revenue accurate."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I connect my online store?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Your online and retail inventory update in real time, preventing overselling and duplicate records across channels."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for staff to learn?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The interface is simple and clear, so staff can use it confidently within a few hours of training."
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
          title="Pet Store POS System for Smarter Inventory and Better Pet Care"
          description="Pet stores must constantly manage their stock of food, grooming products, toys, health products, and other essentials while maintaining customer trust and encouraging repeat purchases. Owners Inventory software offers a dedicated Pet Store Point of Sale solution to monitor real-time inventory, speed up the checkout process and accurately manage all products."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={PET_STORE_UNIFIED_HEADING}
          paragraph={PET_STORE_UNIFIED_PARAGRAPH}
          cards={PET_STORE_UNIFIED_CARDS}
          iconSet="petStore"
        />

        <WhyChoosePOS
          heading="How Our POS System for Pet Stores Solves These Challenges"
          paragraph="Owners Inventory is a powerful pet store POS system that simplifies store operations, improves inventory management, and centralizes all business activities on a single platform."
          cards={PET_STORE_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="petStore"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory POS"
          features={PET_STORE_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={PET_STORE_WORKFLOW_DATA.heading}
          paragraph={PET_STORE_WORKFLOW_DATA.paragraph}
          steps={PET_STORE_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Break Free from Pet Inventory Guesswork"
          description= "Pet stores that maintain accurate inventory tracking, faster checkout processes, and consistent customer engagement build stronger long-term customer loyalty. Owners Inventory provides everything needed to manage operations efficiently from day one."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={PET_STORE_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security and Access Control."
          description= "Owners Inventory ensures secure operations – with role-based access control. Staff are only provided with information relevant to their roles and all transactions are carried out via secure payment methods to ensure that customer and business information is kept safe."
        />

        <ToolsSection
          heading={PET_STORE_TOOLS_DATA.heading}
          description={PET_STORE_TOOLS_DATA.paragraph}
          tools={PET_STORE_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={PET_STORE_TESTIMONIALS}
          heading={PET_STORE_TESTIMONIAL_DATA.heading}
          paragraph={PET_STORE_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={PET_STORE_TESTIMONIAL_DATA.secondHeading}
          secondDescription={PET_STORE_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={PET_STORE_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={PET_STORE_TESTIMONIAL_DATA.whyChooseDescription}
          features={PET_STORE_TESTIMONIAL_FEATURES}
          iconSet="petStore"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="The following are some of the frequently asked questions about our pet store POS system."
            faqs={PET_STORE_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="The Smartest Move for Your Pet Business"
          description="Stop relying on outdated tools and disconnected systems. Get a faster, more efficient way to manage the shelves, customers and operations for your pet shop!"
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
