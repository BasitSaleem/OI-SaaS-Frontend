import "../globals.css";
import React from "react";
import { caseStudiesData } from "@/constant/caseStudiesData/caseStudiesData";

import HeroSection2 from "@/components/common-components/HeroSection2";
import TrustedBySection from "@/components/common-components/TrustedBySection";
import TurningChaos from "@/components/pages/landing-page/TurningChaos";
import CaseStudies from "@/components/pages/landing-page/CaseStudy";
import FeaturesTabSection from "@/components/pages/landing-page/FeaturesTabSection";
import SmartWaytoSyncndSellSection from "@/components/pages/landing-page/SmartWaytoSyncndSellSection";
import UnifiedPlatform from "@/components/pages/landing-page/UnifiedPlatform";
import VoicesRealBusiness from "@/components/pages/landing-page/VoicesRealBusiness";
import IndustryPosShowcase from "@/components/pages/landing-page/IndustryPosShowcase";
import PosIconsSection from "@/components/pages/landing-page/Smartway";
import ToolsSection from "@/components/pages/landing-page/ToolsSection";
import SmartTools from "@/components/pages/landing-page/SmartTools";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import CalltoActionBottom from "@/components/pages/landing-page/CalltoActionBottom";

import {
  HOME_FAQS,
  HOME_INDUSTRIES,
  HOME_PAGE_CONTENT,
} from "@/constant/landingPageData";



export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://ownersinventory.com/#organization",
                "name": "Owners Inventory",
                "url": "https://ownersinventory.com/",
                "logo": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "Owners Inventory is a home inventory management software that helps users document and manage personal property for insurance and organizational purposes.",
                "sameAs": [
                  "https://www.facebook.com/ownersinventory/",
                  "https://www.instagram.com/ownersinventory/",
                  "https://www.linkedin.com/company/owners-inventory/"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Support",
                  "email": "support@ownersinventory.com",
                  "areaServed": "US",
                  "availableLanguage": "English"
                }
              },
              {
                "@type": "SoftwareApplication",
                "@id": "https://ownersinventory.com/#software",
                "name": "Owners Inventory",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "url": "https://ownersinventory.com/",
                "description": "Owners Inventory helps business owners track stock, manage products, monitor sales, and get real-time inventory alerts easily.",
                "offers": {
                  "@type": "Offer",
                  "price": "210",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/OnlineOnly"
                },
                "publisher": {
                  "@id": "https://ownersinventory.com/#organization"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "125"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://ownersinventory.com/#faq",
                "mainEntity": HOME_FAQS.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              },
              {
                "@type": "Review",
                "@id": "https://ownersinventory.com/#review",
                "itemReviewed": {
                  "@id": "https://ownersinventory.com/#software"
                },
                "author": {
                  "@type": "Person",
                  "name": "John D."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Owners Inventory makes tracking personal property simple and efficient. The reporting tools are especially helpful for insurance purposes."
              }
            ]
          })
        }}
      />
      <div className="font-onest overflow-x-hidden">
          <HeroSection2
            title={HOME_PAGE_CONTENT.hero.title}
            description={HOME_PAGE_CONTENT.hero.description}
            video={HOME_PAGE_CONTENT.hero.video}
            variant={HOME_PAGE_CONTENT.hero.variant}
          />

          <TrustedBySection heading={HOME_PAGE_CONTENT.trustedBy.heading} />

          <TurningChaos
            title={HOME_PAGE_CONTENT.turningChaos.title}
            miniTitle={HOME_PAGE_CONTENT.turningChaos.miniTitle}
            description={HOME_PAGE_CONTENT.turningChaos.description}
          />

          <CaseStudies caseStudies={caseStudiesData} />

          <FeaturesTabSection />

          <SmartWaytoSyncndSellSection />

          <UnifiedPlatform />

          <VoicesRealBusiness />

          <IndustryPosShowcase
            mainHeading={HOME_PAGE_CONTENT.industryShowcase.mainHeading}
            paragraph={HOME_PAGE_CONTENT.industryShowcase.paragraph}
            buttonText={HOME_PAGE_CONTENT.industryShowcase.buttonText}
            industries={HOME_INDUSTRIES}
          />

          <PosIconsSection />

          <ToolsSection />

          <div className="wrapper">
            <SmartTools />
          </div>

          <div className="lg:pt-[100px] md:pt-40 pt-28">
            <FaqSection faqs={HOME_FAQS} />
          </div>

          <CalltoActionBottom />
      </div>
    </>
  );
}
