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
                "description": "Owners Inventory's nail salon POS system manages appointments, product inventory, technician schedules, client accounts, and business performance from a single platform.",
                "featureList": [
                  "Real-time product inventory tracking",
                  "Appointment and scheduling management",
                  "Service menu and custom add-on builder",
                  "Multi-channel order management",
                  "Client account and loyalty management",
                  "Mobile-friendly interface",
                  "Automated low-stock alerts",
                  "Gift cards and membership management",
                  "Detailed sales and waste reporting"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Nail Salon POS System for Appointment, Bookings, and Client Management | Owners Inventory",
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
                        "name": "Emily R."
                      },
                      "reviewBody": "What used to be a lot of emails, sticky notes and spreadsheets is now all in a single location, and our clients receive a much more professional experience when booking a bridal party.",
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
                        "name": "Claire M."
                      },
                      "reviewBody": "It saved our technicians a lot of hours each week as they used to be asking us constantly for booking details and client notes etc., but now it's all on their phone and clients are notified automatically.",
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
                    "name": "Can the system track nail products and supply inventory in real time?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. All stock transactions are automatically captured, such as deliveries from suppliers, service provision and stock sold in the retail outlets and items written off as waste, eliminating the need to manually count stock and ensuring the accuracy of stock levels at all times."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system support appointment booking and technician scheduling?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The nail salon point of sale allows walk-in bookings, advance reservations, phone appointments, and online bookings, all on one calendar view. It also automatically eliminates conflicts and double bookings based on the availability of technicians, duration of service, and client preferences."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I manage both retail product sales and services from the same system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. All walk-in service sales, retail product sales, gift cards, and memberships go through the same checkout and fulfillment system, and inventory and client records are updated in real-time for each sale."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How quickly can I set up the Owners Inventory for my nail salon?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "In most nail salons, the salon is open and operating within a couple of hours. Your team can start using the system the same day, as you can upload service menus, client records, supplier information, and product catalogs en masse."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can different staff members have different access levels?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. For the front desk, nail technician and manager, roles based permissions can be set to provide access to only the areas applicable to their role. Data and reporting is only for business owners and authorized managers."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the system support client loyalty programs and membership packages?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Loyalty points, membership allowances, gift card balances and promotional discounts are all held within each of the clients' profiles and automatically applied at checkout, reducing the manual tracking of loyalty and minimizing the possibility of error at the front desk."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Nail Salon Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines nail salon operations.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Set Up Your Service Menu and Inventory",
                    "text": "Include all services, pricing levels, technician levels, add-ons and product costs into the system. Organize group services in order of type, occasion and length of service making them easily accessible to clients when they are consulting and booking online."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Receive and Track Incoming Stock",
                    "text": "Record all supplier deliveries of products, quantities, batch information and notes on condition. Stock levels are automatically updated and discrepancies between quantity ordered and quantity received are marked in the system."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Manage Bookings and Walk-In Appointments",
                    "text": "Create bookings for walk-ins, phone calls, and online reservations from a single calendar. The system can match the availability of technicians, confirm the time of the service and schedule the appointment to the appropriate technician without needing to make handoffs."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Process Checkout and Client Payments",
                    "text": "Create itemized invoices, apply loyalty points or memberships, accept all payments and automatically update the client profile. Front desk receipts are sent digitally, maintaining a fast and paper-free front desk."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Handle Client Accounts and Loyalty Rewards",
                    "text": "Monitor client loyalty points, memberships, gift card balances and upcoming appointments. Automated reminders are sent out prior to appointments and follow-up post-visits are sent afterwards to encourage re-booking."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Monitor Daily Performance and Stock Health",
                    "text": "Live data for revenue, product stock, utilization of technicians, pending appointments and loss of product is visible at a glance for the owner of the salon. Automated reporting identifies which services are most profitable and on which services performance may be improved."
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
          ctaDesc="Book a Demo"
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
          description="Say goodbye to lost bookings, lost products due to poor visibility and lost revenue due to variations in price. Owners Inventory is a comprehensive nail salon point of sale solution, enabling salons to manage bookings, nail services, products, client accounts and business performance from one single location."
          ctaDesc="Book a Demo"
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
