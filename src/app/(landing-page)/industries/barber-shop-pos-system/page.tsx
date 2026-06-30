import React from "react";
import Script from "next/script";
const heroBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/barber-shop-pos/hero-banner.webp";
const whyChoseBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/barber-shop-pos/why-chose-banner.webp";

import {
  BARBER_SHOP_KEY_FEATURES_CARDS,
  BARBER_SHOP_WHY_CHOOSE_CARDS,
  BARBER_SHOP_FEATURE_CARDS
} from "@/constant/subindustries/barberShopPosData";


import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  BARBER_SHOP_UNIFIED_CARDS,
  BARBER_SHOP_UNIFIED_HEADING,
  BARBER_SHOP_UNIFIED_PARAGRAPH,
  BARBER_SHOP_WORKFLOW_DATA,
  BARBER_SHOP_TESTIMONIALS,
  BARBER_SHOP_FAQS,
  BARBER_SHOP_TESTIMONIAL_DATA,
  BARBER_SHOP_TESTIMONIAL_FEATURES,
  BARBER_SHOP_TOOLS_DATA,
} from "@/constant/subindustries/barberShopPosData";
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
        id="schema-barber-shop"
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
                "description": "Barber shop POS system that speeds up checkout, manages appointments and walk-ins, tracks grooming retail products, processes multiple payment methods, handles tips and commissions, and keeps daily sales organized from one connected dashboard.",
                "featureList": [
                  "Fast checkout for services and retail products",
                  "Appointment and walk-in booking management",
                  "Barber commission and tip tracking",
                  "Retail product inventory tracking",
                  "Multiple payment options including cards and contactless",
                  "Customer profiles and loyalty programs",
                  "Flexible discounts and service bundles",
                  "Multi-chair and multi-location management",
                  "Role-based access for staff",
                  "Daily sales and performance reports"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Barber Shop POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/barber-shop-pos-system",
                "description": "Speed up barber shop billing, manage appointments and walk-ins, track retail products, and handle commissions and payments using Owners Inventory's barber shop POS system.",
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
                      "name": "Barber Shop POS System",
                      "item": "https://ownersinventory.com/industries/barber-shop-pos-system"
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
                "name": "Barber Shop POS System",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "POS software designed for barber shops to handle fast checkout, appointment and walk-in management, barber commissions and tips, retail product tracking, multi-payment processing, and multi-location operations from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/barber-shop-pos-system",
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
                    "name": "Can the system handle both services and retail product sales?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The barber shop POS records service and retail product sales separately, making it easy to track performance for each category without mixing data."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it track barber commissions and tips?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system tracks commissions and tips per barber automatically, keeping payouts accurate and transparent at the end of each day or pay period."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage both appointments and walk-in customers?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The POS supports scheduled appointments and walk-in customers in one system, keeping the chair flow organized during busy periods."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it support multiple payment methods?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system accepts cash, cards, and contactless payments, allowing fast and secure checkout for every client."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for staff to learn and use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The interface is simple and intuitive, so barbers and front-desk staff can use it confidently with minimal training."
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
          title="POS System for Barber Shops for Faster Service and Management"
          description="Managing a barber shop without the right point of sale system means slow payment processing, untracked retail stock, and booking confusion that costs you clients. Owners Inventory is an easy-to-use barber shop POS software, trusted by over 120+ barber shops. It handles payments with ease, keeps every product accounted for, and gives your barbers the counter setup that actually keeps up with workflows."
          image={heroBanner}
          imageClassName="max-w-[1000px]"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={BARBER_SHOP_UNIFIED_HEADING}
          paragraph={BARBER_SHOP_UNIFIED_PARAGRAPH}
          cards={BARBER_SHOP_UNIFIED_CARDS}
          iconSet="barberShop"
        />

        <WhyChoosePOS
          heading="How Our POS Solves These Challenges"
          paragraph="Owners Inventory works as the best barber shop POS system to streamline daily operations, automate repetitive tasks, and help reduce manual workload by up to 40% while giving the control needed to run your barber shop without guesswork."
          cards={BARBER_SHOP_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="barberShop"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory that Transform Barber Shop Operations"
          features={BARBER_SHOP_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={BARBER_SHOP_WORKFLOW_DATA.heading}
          paragraph={BARBER_SHOP_WORKFLOW_DATA.paragraph}
          steps={BARBER_SHOP_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Run Your Barber Shop Without the Guesswork"
          description="Stop losing time to slow payment processing, untracked stock, and scattered client records. Owners Inventory works as the best POS for barbers as it keeps your barber shop operations fast, your retail stock visible, and your business operations running without operational gaps."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={BARBER_SHOP_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance"
          description="Staff permissions inside the salon POS system are assigned according to roles. All barbers can access only the information that is required to complete their assigned tasks. It provides owners with full control of the shop workflows. Every transaction is logged with a complete audit record, keeping business data protected at all times."
        />

        <ToolsSection
          heading={BARBER_SHOP_TOOLS_DATA.heading}
          description={BARBER_SHOP_TOOLS_DATA.paragraph}
          tools={BARBER_SHOP_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={BARBER_SHOP_TESTIMONIALS}
          heading={BARBER_SHOP_TESTIMONIAL_DATA.heading}
          paragraph={BARBER_SHOP_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={BARBER_SHOP_TESTIMONIAL_DATA.secondHeading}
          secondDescription={BARBER_SHOP_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={BARBER_SHOP_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={BARBER_SHOP_TESTIMONIAL_DATA.whyChooseDescription}
          features={BARBER_SHOP_TESTIMONIAL_FEATURES}
          iconSet="barberShop"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="The following are some of the most commonly asked questions about our barber shop POS system."
            faqs={BARBER_SHOP_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Power Your Barber Shop with Our Efficient POS"
          description="Our POS helps barber shops handle faster checkouts, manage appointments, track inventory, and organize customer details in one simple system built to support daily operations."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
