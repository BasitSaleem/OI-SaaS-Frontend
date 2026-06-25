import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/gym-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/gym-pos/why-chose-banner.webp";

import {
  GYM_KEY_FEATURES_CARDS,
  GYM_WHY_CHOOSE_CARDS,
  GYM_FEATURE_CARDS
} from "@/constant/subindustries/gymPosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  GYM_UNIFIED_CARDS,
  GYM_UNIFIED_HEADING,
  GYM_UNIFIED_PARAGRAPH,
  GYM_WORKFLOW_DATA,
  GYM_TESTIMONIALS,
  GYM_FAQS,
  GYM_TESTIMONIAL_DATA,
  GYM_TESTIMONIAL_FEATURES,
  GYM_TOOLS_DATA,
} from "@/constant/subindustries/gymPosData";
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
        id="schema-gym"
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
                "description": "Gym POS system that tracks membership statuses, recurring drafts, class bookings, personal trainers, and pro shop retail transactions from a centralized cloud dashboard.",
                "featureList": [
                  "Real-time member check-in monitoring and barcode lookup",
                  "Automated monthly recurring membership billing",
                  "Class capacity roster and trainer schedule calendar",
                  "Integrated juice bar and pro shop retail POS",
                  "Automated trainer session commission tracking",
                  "Waivers and digital agreement logging",
                  "Supplier purchase orders for gym accessories",
                  "Member portal class booking sync",
                  "Comprehensive member retention analytics",
                  "Multi-club data and revenue dashboards"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Gym POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/gym-pos-system",
                "description": "Manage memberships and schedules with real-time check-in monitoring, automated recurring billing, pro shop checkout, and trainer bookings using Owners Inventory's gym POS system.",
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
                      "name": "Gym POS System",
                      "item": "https://ownersinventory.com/industries/gym-pos-system"
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
                "name": "Gym POS System",
                "description": "POS software designed for gyms, fitness clubs, and wellness studios to coordinate members, schedule trainers, record retail transactions, and monitor multi-facility sales.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/gym-pos-system",
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
                    "name": "Can the system manage recurring membership billing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The POS coordinates recurring monthly, bi-weekly, or annual membership billing via credit card, tracking card updates to reduce transaction failures."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it support keytag barcode check-ins?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Members can scan barcode keytags or display digital member cards on their phones at checkout to verify check-in statuses and active accounts."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can we manage booking schedules for personal trainers?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can manage trainer booking availabilities, assign them to specific clients, and track class attendance on a central, shared calendar."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I track retail sales for a juice bar or shop?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The pro shop retail interface allows you to sell gym apparel, shakes, energy drinks, and supplements alongside main gym memberships."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it automate trainer commissions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can associate specific trainers with group classes or training sessions and automatically generate commission payouts based on hour metrics."
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
          title="POS System for Gym: Memberships, Payments, and Retail Sales"
          description="A gym runs on billing cycles, class schedules, and front-desk transactions that must all stay organized simultaneously. When those run through different tools, the front desk slows down, billing errors build up, and members notice. Owners Inventory brings your gym point-of-sale software, membership billing, retail inventory, and payment processing into one connected system so your staff can focus on members, not paperwork."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={GYM_UNIFIED_HEADING}
          paragraph={GYM_UNIFIED_PARAGRAPH}
          cards={GYM_UNIFIED_CARDS}
          iconSet="gym"
        />

        <WhyChoosePOS
          heading= "How Owners Inventory Solves Gym POS Challenges"
          paragraph= "Owners Inventory connects your gym's payment processing, membership management, retail inventory, and reporting into one gym POS system. Front desk staff get faster checkouts. Gym owners get accurate financial data. Members get a consistent experience from the moment they sign up to every transaction that follows."
          cards={GYM_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="gym"
        />

        <KeyHighlights
          heading="Key Features of Our Gym Point of Sale Software"
          features={GYM_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={GYM_WORKFLOW_DATA.heading}
          paragraph={GYM_WORKFLOW_DATA.paragraph}
          steps={GYM_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title= "Take Control of Every Gym Operation"
          description= "Upgrade your gym with a POS system that keeps billing, membership records, and retail sales organized in one place. Work faster, reduce errors, and run daily operations with confidence."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={GYM_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance."
          description= "Every transaction processed through the gym billing system carries a timestamp and a record of which staff member completed it. Payment records, membership changes, discount applications, and refunds are all logged with a traceable history. Nothing is edited or removed without leaving an audit trail, which matters when a member disputes a charge or when an end-of-period financial review is underway."
          secondDescription= "Access within the system is assigned by role. Front desk staff process transactions and view member profiles. Managers access the reporting and billing configuration. Owners see the full account. Nobody operates outside the scope of their role permits. Member payment data is stored and transmitted with encryption. Records back up automatically so no transaction history is lost if a device fails."
        />

        <ToolsSection
          heading={GYM_TOOLS_DATA.heading}
          description={GYM_TOOLS_DATA.paragraph}
          tools={GYM_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={GYM_TESTIMONIALS}
          heading={GYM_TESTIMONIAL_DATA.heading}
          paragraph={GYM_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={GYM_TESTIMONIAL_DATA.secondHeading}
          secondDescription={GYM_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={GYM_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={GYM_TESTIMONIAL_DATA.whyChooseDescription}
          features={GYM_TESTIMONIAL_FEATURES}
          iconSet="gym"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="Got questions about managing your gym with Owners Inventory? Here are clear answers to what gym owners, studio managers, and front desk teams ask most."
            faqs={GYM_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Control Gym Operations with a Reliable POS"
          description="Disconnected billing tools and unresolved payment failures are not fixed by working harder at the front desk. Owners Inventory connects your payments, membership records, and retail stock into one gym point of sale system. Start today and measure the difference from your first billing cycle."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
