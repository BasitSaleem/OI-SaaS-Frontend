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
                "@type": "BreadcrumbList",
                "@id": "https://ownersinventory.com/industries/nail-salon-pos-system/#breadcrumb",
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
                    "name": "Nail Salon POS System",
                    "item": "https://ownersinventory.com/industries/nail-salon-pos-system"
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://ownersinventory.com/industries/nail-salon-pos-system/#webpage",
                "url": "https://ownersinventory.com/industries/nail-salon-pos-system",
                "name": "Nail Salon POS System for Appointment, Bookings, and Client Management | Owners Inventory",
                "description": "Nail salon POS software with real-time product inventory tracking, appointment booking, technician scheduling, and client loyalty management in one platform.",
                "isPartOf": {
                  "@id": "https://ownersinventory.com/#website"
                },
                "about": {
                  "@id": "https://ownersinventory.com/#software"
                },
                "breadcrumb": {
                  "@id": "https://ownersinventory.com/industries/nail-salon-pos-system/#breadcrumb"
                },
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
                "publisher": {
                  "@id": "https://ownersinventory.com/#organization"
                }
              },
              {
                "@type": "Product",
                "@id": "https://ownersinventory.com/industries/nail-salon-pos-system/#product",
                "name": "Nail Salon POS System by Owners Inventory",
                "description": "A point of sale and inventory system built for nail salons, with real-time product inventory tracking, appointment booking and technician scheduling, service and pricing management, and client loyalty and membership tracking.",
                "brand": {
                  "@id": "https://ownersinventory.com/#organization"
                },
                "category": "Point of Sale Software for Nail Salons",
                "audience": {
                  "@type": "BusinessAudience",
                  "audienceType": "Nail salon owners and operators"
                },
                "isRelatedTo": {
                  "@id": "https://ownersinventory.com/#software"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://ownersinventory.com/industries/nail-salon-pos-system/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can the system track nail products and supply inventory in real time?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. All stock transactions are automatically captured, including deliveries from suppliers, product used in services, retail sales, and items written off as waste, eliminating the need to manually count stock and ensuring stock levels stay accurate at all times."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system support appointment booking and technician scheduling?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The nail salon point of sale supports walk-in bookings, advance reservations, phone appointments, and online bookings, all on one calendar view. It automatically flags conflicts and double bookings based on technician availability, service duration, and client preferences."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage both retail product sales and services from the same system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Walk-in service sales, retail product sales, gift cards, and memberships all go through the same checkout and fulfillment system, with inventory and client records updated in real time for each sale."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How quickly can I set up Owners Inventory for my nail salon?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most nail salons are up and running within a couple of hours. Service menus, client records, supplier information, and product catalogs can be uploaded in bulk, so your team can start using the system the same day."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can different staff members have different access levels?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Role-based permissions can be set for front desk staff, nail technicians, and managers so each has access only to the areas relevant to their role. Data and reporting access is limited to business owners and authorized managers."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system support client loyalty programs and membership packages?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Loyalty points, membership allowances, gift card balances, and promotional discounts are all held within each client's profile and applied automatically at checkout, reducing manual tracking and the chance of error at the front desk."
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
          title="Nail Salon POS System for Appointment, Bookings, and Client Management"
          description="A nail salon that doesn't have the proper point of sale system will find it difficult to manage appointments, track product inventory, keep track of the technician's schedule, and retain customers. Manual systems result in double bookings, product shortages, pricing inaccuracies, and front desks that can't keep up with the volume of business."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Rated on Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={NAIL_SALON_UNIFIED_HEADING}
          paragraph={NAIL_SALON_UNIFIED_PARAGRAPH}
          cards={NAIL_SALON_UNIFIED_CARDS}
          iconSet="nailSalon"
        />

        <WhyChoosePOS
          heading="How Our Nail Salon POS System Solves These Challenges"
          paragraph="Owners Inventory is the all-in-one nail salon POS system that allows salon owners to manage bookings, product inventory, technician schedules, client accounts, and business performance from a single platform."
          cards={NAIL_SALON_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="nailSalon"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory That Improve Nail Salon Operations"
          features={NAIL_SALON_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={NAIL_SALON_WORKFLOW_DATA.heading}
          paragraph={NAIL_SALON_WORKFLOW_DATA.paragraph}
          steps={NAIL_SALON_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Run Your Nail Salon Business Without the Guesswork"
          description="Say goodbye to lost bookings, lost products due to poor visibility and lost revenue due to variations in price. Owners Inventory is a fully comprehensive nail salon point of sale solution, enabling salons to manage bookings, nail services, products, client accounts and business performance from one single location."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={NAIL_SALON_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security and Role-Based Access"
          description="Each team member has access to only the information he needs. Counter employees, nail technicians, and managers each have defined permission levels."
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
          iconSet="nailSalon"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="Find answers to common questions about inventory tracking, appointment management, staff permissions, setup, and day-to-day nail salon operations."
            faqs={NAIL_SALON_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="Improve Booking Accuracy and Nail Salon Efficiency"
          description="Our nail salon point of sale software will streamline and simplify your salon's daily operations with a single convenient solution, including appointment management, inventory, service pricing, and salon scheduling, plus client relations and business reporting tools."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
