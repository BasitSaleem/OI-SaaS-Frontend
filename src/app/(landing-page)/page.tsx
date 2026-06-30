import "../globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";
import { caseStudiesData } from "@/constant/caseStudiesData/caseStudiesData";

// Above-fold: static imports so they appear in the initial HTML + hydration bundle
import HeroSection2 from "@/components/common-components/HeroSection2";
import TrustedBySection from "@/components/common-components/TrustedBySection";

// Below-fold: dynamic imports create separate JS chunks that load after the hero is interactive.
// SSR is kept (default) so the HTML is still server-rendered for SEO.
const TurningChaos = dynamic(() => import("@/components/pages/landing-page/TurningChaos"));
const CaseStudies = dynamic(() => import("@/components/pages/landing-page/CaseStudy"));
const FeaturesTabSection = dynamic(() => import("@/components/pages/landing-page/FeaturesTabSection"));
const SmartWaytoSyncndSellSection = dynamic(() => import("@/components/pages/landing-page/SmartWaytoSyncndSellSection"));
const UnifiedPlatform = dynamic(() => import("@/components/pages/landing-page/UnifiedPlatform"));
const VoicesRealBusiness = dynamic(() => import("@/components/pages/landing-page/VoicesRealBusiness"));
const IndustryPosShowcase = dynamic(() => import("@/components/pages/landing-page/IndustryPosShowcase"));
const PosIconsSection = dynamic(() => import("@/components/pages/landing-page/Smartway"));
const ToolsSection = dynamic(() => import("@/components/pages/landing-page/ToolsSection"));
const SmartTools = dynamic(() => import("@/components/pages/landing-page/SmartTools"));
const FaqSection = dynamic(() => import("@/components/pages/landing-page/FAQSection"));
const CalltoActionBottom = dynamic(() => import("@/components/pages/landing-page/CalltoActionBottom"));

import {
  HOME_UNIFIED_CARDS,
  HOME_UNIFIED_HEADING,
  HOME_UNIFIED_PARAGRAPH,
} from "@/constant/landingPage/unifiedPlatformData";

import {
  HOME_FAQS,
  HOME_INDUSTRIES,
  HOME_PAGE_CONTENT,
} from "@/constant/landingPageData";



export default function Home() {
  return (
    <>
      {/*
        Preload the two most critical above-the-fold images so the browser
        fetches them immediately from the HTML response — before parsing any JS.
        React 19 + Next.js App Router hoists <link> tags from Server Components
        into <head> automatically.
      */}
      <link
        rel="preload"
        as="image"
        href="https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/hero-bg.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/hero-animation/animation-img1.webp"
        type="image/webp"
        fetchPriority="high"
      />

      <Script
        id="schema-home"
        type="application/ld+json"
        strategy="afterInteractive"
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
                  "email": "sales@ownersinventory.com",
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

        <UnifiedPlatform
          heading={HOME_UNIFIED_HEADING}
          paragraph={HOME_UNIFIED_PARAGRAPH}
          cards={HOME_UNIFIED_CARDS}
        />

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
