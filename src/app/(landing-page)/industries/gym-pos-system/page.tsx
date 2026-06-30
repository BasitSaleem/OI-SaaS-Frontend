import React from "react";
import Script from "next/script";
const heroBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/gym-pos/hero-banner.webp";
const whyChoseBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/gym-pos/why-chose-banner.webp";

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
                "description": "Gym POS system that combines membership billing, automated recurring payments, class pack sales, retail inventory, loyalty tracking, and reporting in one connected platform, with unified member profiles, multi-method payments, and multi-location support from a single dashboard.",
                "featureList": [
                  "Membership and plan management with freezes, upgrades, and cancellations",
                  "Automated recurring billing with payment retry and dunning",
                  "Class pack, day pass, and guest visit transaction handling",
                  "Retail product catalog connected to every sale",
                  "Real-time inventory tracking with low-stock alerts",
                  "Unified member profiles with billing and attendance history",
                  "Loyalty points tracking and redemption",
                  "Flexible discount and promotion application",
                  "Multi-method payments including split and partial payments",
                  "Online membership and order syncing",
                  "Role-based access control for staff",
                  "Detailed revenue and sales reporting",
                  "Integrations with Shopify, WooCommerce, QuickBooks, Xero, and Stripe"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Gym POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/gym-pos-system",
                "description": "Run your gym with membership billing, automated recurring payments, retail inventory, loyalty tracking, and unified reporting using Owners Inventory's gym POS system.",
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
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "POS software designed for gyms and fitness studios to handle membership billing, automated recurring payments, class pack and day pass sales, retail inventory, loyalty tracking, multi-method payments, and reporting from a single connected dashboard.",
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
                "@type": "ItemList",
                "name": "Customer Reviews",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Jordan Mercer"
                      },
                      "reviewBody": "We had three different tools handling memberships, retail, and payments, and switching between them during a busy morning was slowing everything down. After setting up Owners Inventory, the entire front desk runs through one screen. Checkouts are faster, billing errors have dropped significantly, and I can see what the business is doing without pulling reports from two places.",
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5",
                        "worstRating": "1"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Owners Inventory"
                      }
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Rachel Kimani"
                      },
                      "reviewBody": "Failed payments were something we just lived with. By the time we noticed a member had a declined charge, they had already stopped coming in. The automated retry and notification system recovered a number of accounts we would have written off completely. The difference in monthly recurring revenue was noticeable within the first billing cycle.",
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5",
                        "worstRating": "1"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Owners Inventory"
                      }
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Derek Huang"
                      },
                      "reviewBody": "Retail was always an afterthought for us because tracking stock manually was too time-consuming. Products would run out and nobody would notice until a member asked. The low stock alerts and real-time count updates changed how we manage retail entirely. We have not had an empty shelf situation since we started using the system.",
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5",
                        "worstRating": "1"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Owners Inventory"
                      }
                    }
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can the gym POS handle membership sales and retail product sales in the same transaction?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. A member can pay for a class pack and pick up a supplement in the same checkout. The system processes both within one transaction flow, updates the membership record and retail stock count simultaneously, and produces a single receipt."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the system handle a member whose recurring payment fails?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The gym billing system flags the failed payment immediately, initiates an automated retry sequence, and sends the member a notification with a link to update their card. Staff are alerted only if the automated process does not resolve the payment within the configured timeframe."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage multiple membership tiers with different billing cycles?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Monthly plans, annual memberships, class packs, and drop-in rates are all configurable as separate membership types with their own pricing and renewal rules. Each can carry a different billing cycle, managed concurrently without mixing records."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system connect with accounting software?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Transaction data, membership revenue, and retail sales sync with QuickBooks, Xero, and other supported platforms, keeping financial records consistent without manual data entry on either side."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the POS system for gyms work for boutique studios and smaller operations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system scales to the size of the operation. A single-location studio with 80 members uses the same platform as a multi-location gym with several hundred, and pricing adjusts to the scope of the business."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory POS Manages Gym Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines gym operations from member check-in to end-of-day reconciliation.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Member Check-In and Transaction Start",
                    "text": "When a member arrives, their profile pulls up by name, membership number, or barcode scan. Staff can see their active plan, outstanding balance, and account notes before the transaction begins, whether it's a day pass, renewal, or retail purchase."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Processing the Sale",
                    "text": "Membership payments, class pack purchases, and retail sales are added to the same transaction. Discount codes apply in the same step. The system calculates the total, applies any redeemed loyalty points, and presents the final amount before payment."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Collecting Payment",
                    "text": "The gym payment software accepts the selected payment method and confirms the transaction. A receipt generates automatically. If a payment fails, the system records the decline, notifies the member, and schedules a retry."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Updating Membership and Inventory Records",
                    "text": "Every completed transaction updates the relevant records immediately. A renewal extends the active period, a product purchase reduces retail stock, and a class pack sale logs against the member's booking entitlement, with no separate update step."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Monitoring Active Membership Status",
                    "text": "Between transactions, the system tracks upcoming renewals, flagged payment failures, and expiring plans. Alerts surface on the dashboard so staff can reach out proactively rather than discovering lapsed members after the fact."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "End-of-Day Reconciliation",
                    "text": "At the close of the business day, the system generates a summary of all transactions, payment method totals, retail sales, and membership activity, available to export directly to connected accounting software."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="POS System for Gym: Run Billing, Retail, and Members from One Place"
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
          title="Security, Accuracy, and Compliance"
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
