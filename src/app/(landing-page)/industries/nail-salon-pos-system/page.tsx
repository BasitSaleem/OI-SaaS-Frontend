import React from "react";
import Script from "next/script";
const heroBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/hero-banner.webp";
const whyChoseBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/nail-salon-pos/why-chose-banner.webp";

import {
  NAIL_SALON_KEY_FEATURES_CARDS,
  NAIL_SALON_WHY_CHOOSE_CARDS,
  NAIL_SALON_FEATURE_CARDS
} from "@/constant/subindustries/posNailSalonData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  NAIL_SALON_UNIFIED_CARDS,
  NAIL_SALON_UNIFIED_HEADING,
  NAIL_SALON_UNIFIED_PARAGRAPH,
  NAIL_SALON_WORKFLOW_DATA,
  NAIL_SALON_TESTIMONIALS,
  NAIL_SALON_FAQS,
  NAIL_SALON_TESTIMONIAL_DATA,
  NAIL_SALON_TESTIMONIAL_FEATURES,
  NAIL_SALON_TOOLS_DATA,
} from "@/constant/subindustries/posNailSalonData";
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
        id="schema-nailsalon"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "name": "Owners Inventory",
                "url": "https://www.ownersinventory.com",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "description": "Free trial available"
                },
                "description": "Nail salon POS system built to manage appointments, split commissions, track retail gel or polish stock, and schedule technician shifts dynamically.",
                "featureList": [
                  "Interactive booking calendar",
                  "Automated technician commission splitting",
                  "Retail product stock updates",
                  "Service packages and bundle pricing",
                  "Client database and CRM profiles",
                  "Expense and rent tracking",
                  "Online booking widgets and sync",
                  "Multi-salon operations from a single dashboard",
                  "Staff performance and service reports",
                  "Access permissions for stylists and receptionists",
                  "Integrations with accounting tools and payment processors"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Nail Salons | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/nail-salon-pos-system",
                "description": "Manage your nail salon with appointment scheduling, automated commission splitting, retail inventory tracking, and online booking sync using Owners Inventory.",
                "inLanguage": "en",
                "isPartOf": {
                  "@type": "WebSite",
                  "name": "Owners Inventory",
                  "url": "https://www.ownersinventory.com"
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://www.ownersinventory.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Industries",
                      "item": "https://www.ownersinventory.com/industries"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Nail Salon",
                      "item": "https://www.ownersinventory.com/industries/nail-salon-pos-system"
                    }
                  ]
                }
              },
              {
                "@type": "Organization",
                "name": "Owners Inventory",
                "url": "https://www.ownersinventory.com",
                "logo": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Support",
                  "availableLanguage": "English",
                  "url": "https://www.ownersinventory.com/contact"
                },
                "sameAs": [
                  "https://www.facebook.com/ownersinventory",
                  "https://www.instagram.com/ownersinventory",
                  "https://www.linkedin.com/company/owners-inventory"
                ]
              },
              {
                "@type": "Product",
                "name": "Nail Salon POS System",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "Specialized nail salon software to manage booking schedules, calculate technician commissions, track polish stock, and manage walk-ins.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/nail-salon-pos-system",
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
                        "name": "Nail Salon Owner"
                      },
                      "reviewBody": "This system has made calendar scheduling and commission calculations quick and precise. Salon management is finally stress-free.",
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
                        "name": "Salon Manager"
                      },
                      "reviewBody": "The best system we have implemented. It schedules appointments, tracks stylist shifts, and splits tips automatically.",
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
                    "name": "What is a POS system for a nail salon?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A nail salon point of sale system helps manage appointments, client records, technician schedules, commission rates, and retail checkouts from one unified software."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can it calculate commissions and tips?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system automatically tracks commissions, tip percentages, and booth rent payouts for each technician during checkout."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for nail artists to use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. The layout is simple and designed for quick booking lookups, and checking schedules on tablets or phones."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it support online booking sync?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, your website booking widgets and phone reservations sync instantly with the central receptionist calendar."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage retail product sales?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, you can scan and sell retail items like nail files, polishes, and lotions, keeping retail stock counts automatically in sync."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Nail Salon Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines nail salon operations and staff scheduling.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Appointment Booking",
                    "text": "Clients book appointments online or call the salon. The system assigns a time slot, chair, and technician."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Client Check-In",
                    "text": "Welcome clients, verify booking details, and update the schedule status to 'In Service' as styling starts."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Service Delivery",
                    "text": "Technicians perform manicure, pedicure, or art services, noting any retail products used or purchased."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Product Inventory",
                    "text": "Retail products and nail polish stock levels are tracked and updated automatically to avoid running out."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Checkout & Tip Split",
                    "text": "Process payments quickly, add tips, calculate commission splits, and log details into the client's CRM history."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reporting & Insights",
                    "text": "Review detailed insights to understand what services and technicians are most profitable. Transform your nail salon today."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Complete POS System for Nail Salons and Booking Management"
          description="The Owners Inventory POS System for nail salons is designed to streamline client bookings, technician schedules, and commission payouts. Track retail product inventory, manage client histories, and sync walk-ins dynamically from a single receptionist console."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={NAIL_SALON_UNIFIED_HEADING}
          paragraph={NAIL_SALON_UNIFIED_PARAGRAPH}
          cards={NAIL_SALON_UNIFIED_CARDS}
          iconSet="beautySalon"
        />

        <WhyChoosePOS
          heading="How Our Inventory Software Solves These Challenges"
          paragraph="The Owners Inventory POS System has features tailored for salons, including:"
          cards={NAIL_SALON_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="beautySalon"
        />

        <KeyHighlights
          heading="Key Features of Our POS System That Help Nail Salons"
          features={NAIL_SALON_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={NAIL_SALON_WORKFLOW_DATA.heading}
          paragraph={NAIL_SALON_WORKFLOW_DATA.paragraph}
          steps={NAIL_SALON_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Manage Your Nail Salon Operations Efficiently"
          description="Take control of client appointments, staff commission rates, and checkout billing with our specialized salon system."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={NAIL_SALON_FEATURE_CARDS} />

        <SecurityCompliance
          title="Speed, Reliability, and Salon Operations"
          description="Our system connects with online booking engines, local receipt printers, receipt drawers, card terminals, and accounting packages to manage your salon efficiently."
          secondDescription="Eliminate scheduling conflicts, simplify tip splits, and optimize your retail polish stock levels easily."
        />

        <ToolsSection
          heading={NAIL_SALON_TOOLS_DATA.heading}
          description={NAIL_SALON_TOOLS_DATA.paragraph}
          tools={NAIL_SALON_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={NAIL_SALON_TESTIMONIALS}
          heading={NAIL_SALON_TESTIMONIAL_DATA.heading}
          paragraph={NAIL_SALON_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={NAIL_SALON_TESTIMONIAL_DATA.secondHeading}
          secondDescription={NAIL_SALON_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={NAIL_SALON_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={NAIL_SALON_TESTIMONIAL_DATA.whyChooseDescription}
          features={NAIL_SALON_TESTIMONIAL_FEATURES}
          iconSet="beautySalon"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="Our nail salon POS solution is built to simplify booking registers and staff commission splits. Here are answers to common questions."
            faqs={NAIL_SALON_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Take Control of Your Nail Salon"
          description="Salons can lose revenue due to booking conflicts and slow receptionist checkouts. Our software updates schedules, splits commissions, and tracks retail sales to drive salon growth."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
