import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/barber-shop-pos/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/barber-shop-pos/why-chose-banner.webp";

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
                "url": "https://www.ownersinventory.com",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "description": "Free trial available"
                },
                "description": "Barber shop POS software that tracks every service, stylist, and appointment in real time, speeds up checkout with integrated payments, manages retail sales, syncs schedules across multiple branches, and provides detailed performance analytics for grooming businesses.",
                "featureList": [
                  "Complete appointment management for services and stylists",
                  "Fast checkout with integrated payments and smart item search",
                  "Real-time schedule tracking and walk-in sync",
                  "Seamless booking and cancellation handling",
                  "Client profiles with service history and loyalty points",
                  "Multi-branch schedule and pricing sync",
                  "Online booking integration with automatic updates",
                  "Smart sales and peak hour trend reports",
                  "Employee roles, permissions, and activity tracking",
                  "Discount and promotion management across branches",
                  "Supplier and retail product management",
                  "Centralized service control from a single dashboard"
                ]
              },
              {
                "@type": "WebPage",
                "name": "POS System for Barber Shops | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/barber-shop-pos-system",
                "description": "Manage every service and stylist with real-time appointment tracking, fast checkout, smooth bookings, and multi-branch sync using Owners Inventory's POS system for barber shops.",
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
                      "name": "Barber Shop Pos System",
                      "item": "https://www.ownersinventory.com/industries/barber-shop-pos-system"
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
                "name": "Barber Shop POS System",
                "description": "POS software designed for barber shops and grooming businesses to manage services, stylists, and appointment variants, speed up billing with integrated payments, handle bookings and cancellations, sync schedules across branches and online channels, manage suppliers, and generate detailed performance reports from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/barber-shop-pos-system",
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
                        "name": "Barber Shop Owner"
                      },
                      "reviewBody": "This POS enabled us to bill faster and handle service and stylist changes without confusion. It is simple for our staff and quick for our clients.",
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
                        "name": "Shop Manager"
                      },
                      "reviewBody": "Our shop had problems with booking management and cancellations. Owners Inventory POS keeps everything current, bookings are simple to handle, and reports are clear and easy to understand.",
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
                        "name": "Multi-Branch Barber Shop"
                      },
                      "reviewBody": "It used to take hours to sync schedules across multiple branches, but the POS system for barber shops reflects bookings immediately, and billing is quick even during peak time. Reports clearly show top-performing stylists.",
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
                    "position": 4,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Grooming Boutique Owner"
                      },
                      "reviewBody": "It was difficult to keep track of hundreds of appointments and services, but with Owners Inventory POS, everything is organized, all bookings can be tracked, and client profiles help us understand preferences.",
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
                    "name": "How does this POS system handle services and appointments?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our POS system for grooming businesses tracks individual services, stylists, and appointment slots separately, ensuring that schedules remain updated and errors are reduced."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it able to handle multiple branches?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Schedules, sales, prices, and reports stay synchronized across all branches. Staff transfers can take place on demand from a single dashboard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the POS support online bookings?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Online bookings and cancellations are handled efficiently, and every action is documented to ensure nothing is lost or overlooked."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it possible to track retail sales?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Our barber shop POS keeps online and retail inventory updated in real time, preventing duplication and overselling."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it easy for staff to learn?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The interface is simple, and employees can pick it up in a few hours, saving training time and avoiding disruption to operations."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Barber Shop Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines barber shop management from booking to reporting and analysis.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Service Setup",
                    "text": "When new services are added, the POS system captures type, price, and stylist information. This prevents scheduling conflicts and pricing mistakes."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Schedule Organization",
                    "text": "The POS system organizes bookings clearly. Appointments are sorted by stylist, service type, and time, making them easy to locate and manage."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Performance Tracking",
                    "text": "The POS tracks stylist performance in real time across sales, bookings, and tips, ensuring accurate visibility at every location."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Retail and Purchasing",
                    "text": "Shops can manage suppliers, purchase orders for grooming products, and delivery schedules to make smarter restocking decisions."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Client Check-out",
                    "text": "Clients are processed accurately, ensuring the correct service and product charges are applied. This reduces errors and improves satisfaction."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reporting and Analysis",
                    "text": "The system generates reports on popular services, low stock, profits, and branch performance, supporting smarter staffing and inventory decisions."
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
          title="Security and Access Control."
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
