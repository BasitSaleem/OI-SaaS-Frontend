import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/sporting-goods-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/sporting-goods-pos/why-chose-banner.webp";

import {
  SPORTING_GOODS_KEY_FEATURES_CARDS,
  SPORTING_GOODS_WHY_CHOOSE_CARDS,
  SPORTING_GOODS_FEATURE_CARDS
} from "@/constant/subindustries/sportingGoodsPosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  SPORTING_GOODS_UNIFIED_CARDS,
  SPORTING_GOODS_UNIFIED_HEADING,
  SPORTING_GOODS_UNIFIED_PARAGRAPH,
  SPORTING_GOODS_WORKFLOW_DATA,
  SPORTING_GOODS_TESTIMONIALS,
  SPORTING_GOODS_FAQS,
  SPORTING_GOODS_TESTIMONIAL_DATA,
  SPORTING_GOODS_TESTIMONIAL_FEATURES,
  SPORTING_GOODS_TOOLS_DATA,
} from "@/constant/subindustries/sportingGoodsPosData";
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
        id="schema-sporting-goods"
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
                "description": "Sporting goods POS system that tracks sizes, brands, models, and variants across equipment, apparel, and accessories, speeds up checkout with barcode scanning, manages returns and exchanges, syncs inventory across branches and online channels, and provides detailed sales analytics.",
                "featureList": [
                  "Variant management for sizes, brands, models, and categories",
                  "Fast checkout with barcode scanning",
                  "Real-time inventory tracking across equipment and apparel",
                  "Seamless returns and exchange handling",
                  "Customer profiles and loyalty programs",
                  "Multi-branch inventory and pricing sync",
                  "E-commerce integration with automatic stock updates",
                  "Supplier and purchase order management",
                  "Seasonal and promotional discount management",
                  "Employee roles, permissions, and activity tracking",
                  "Smart sales and seasonal trend reports"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Sporting Goods POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/sporting-goods-pos-system",
                "description": "Manage equipment, apparel, sizes, and brands with real-time variant tracking, fast checkout, smooth returns, and multi-branch sync using Owners Inventory's sporting goods POS system.",
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
                      "name": "Sporting Goods POS System",
                      "item": "https://ownersinventory.com/industries/sporting-goods-pos-system"
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
                "name": "Sporting Goods POS System",
                "description": "POS software designed for sporting goods retailers to manage equipment, apparel, and accessory variants by size, brand, and model, speed up billing with barcode scanning, handle returns and exchanges, sync inventory across branches and online channels, and generate detailed sales reports from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/sporting-goods-pos-system",
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
                    "name": "How does this POS handle sizes, brands, and variants?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The system tracks every size, brand, model, and category separately across equipment, apparel, and accessories, keeping stock accurate and reducing errors."
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
          title="Sporting Goods POS Software for Better Inventory Visibility"
          description="Sporting goods retailers managing inventory manually across seasons deal with stock gaps, overselling, and slow checkout that quietly drains revenue every trading day. Owners Inventory is a sporting goods POS built to streamline every aspect of inventory management and syncing in-store and online channels in real-time. It gives sporting goods retailers the point-of-sale control needed to run their stores at peak performance."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={SPORTING_GOODS_UNIFIED_HEADING}
          paragraph={SPORTING_GOODS_UNIFIED_PARAGRAPH}
          cards={SPORTING_GOODS_UNIFIED_CARDS}
          iconSet="sportingGoods"
        />

        <WhyChoosePOS
          heading="How Our Sporting Goods POS Software Solves These Challenges"
          paragraph="Our software is built specifically for sporting goods retail. It has a powerful management system that tracks inventory accurately in real time and helps you run your sporting goods store operations efficiently."
          cards={SPORTING_GOODS_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="sportingGoods"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory that Transform Sporting Goods Store Operations"
          features={SPORTING_GOODS_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={SPORTING_GOODS_WORKFLOW_DATA.heading}
          paragraph={SPORTING_GOODS_WORKFLOW_DATA.paragraph}
          steps={SPORTING_GOODS_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Organize Your Sporting Goods Inventory Effectively"
          description="Every empty shelf during peak season and every over-sold e-commerce listing is revenue the sporting goods business absorbs silently. Owners Inventory keeps stock levels accurate, channels synced, and customer loyalty rewarded so the store performs at its best every season."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={SPORTING_GOODS_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance."
          description="Staff permissions are assigned according to their duty roles. Counter staff handle transactions only, while higher-level employees, such as managers, handle crucial tasks like managing financial reports and making purchase decisions for restocking. The POS helps maintain security protocols by limiting access to sensitive information."
        />

        <ToolsSection
          heading={SPORTING_GOODS_TOOLS_DATA.heading}
          description={SPORTING_GOODS_TOOLS_DATA.paragraph}
          tools={SPORTING_GOODS_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={SPORTING_GOODS_TESTIMONIALS}
          heading={SPORTING_GOODS_TESTIMONIAL_DATA.heading}
          paragraph={SPORTING_GOODS_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={SPORTING_GOODS_TESTIMONIAL_DATA.secondHeading}
          secondDescription={SPORTING_GOODS_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={SPORTING_GOODS_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={SPORTING_GOODS_TESTIMONIAL_DATA.whyChooseDescription}
          features={SPORTING_GOODS_TESTIMONIAL_FEATURES}
          iconSet="sportingGoods"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="The following are some of the common questions asked about our sporting goods POS software."
            faqs={SPORTING_GOODS_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Stock Smart and Sell Every Season"
          description="Our sporting goods software helps businesses track inventory accurately, reward customer loyalty consistently, and restock based on sales trends, building a retail system that grows stronger every season."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
