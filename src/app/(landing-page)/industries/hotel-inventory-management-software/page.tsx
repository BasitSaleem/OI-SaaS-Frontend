import React from "react";
import Script from "next/script";
import heroBanner from "../../../../../public/assets/industries-pages/hotel-inventory-management-software/hero-banner.webp";
import whyChoseBanner from "../../../../../public/assets/industries-pages/hotel-inventory-management-software/why-chose-banner.webp";

import {
  HOTEL_INVENTORY_KEY_FEATURES_CARDS,
  HOTEL_INVENTORY_WHY_CHOOSE_CARDS,
  HOTEL_INVENTORY_FEATURE_CARDS,
} from "@/constant/subindustries/hotelInventoryManagementSoftwareData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  HOTEL_INVENTORY_UNIFIED_CARDS,
  HOTEL_INVENTORY_UNIFIED_HEADING,
  HOTEL_INVENTORY_UNIFIED_PARAGRAPH,
  HOTEL_INVENTORY_WORKFLOW_DATA,
  HOTEL_INVENTORY_TESTIMONIALS,
  HOTEL_INVENTORY_FAQS,
  HOTEL_INVENTORY_TESTIMONIAL_DATA,
  HOTEL_INVENTORY_TESTIMONIAL_FEATURES,
  HOTEL_INVENTORY_TOOLS_DATA,
} from "@/constant/subindustries/hotelInventoryManagementSoftwareData";
import InventoryWorkflow from "@/components/pages/industries-page/InventoryWorkflowNoSSR";
import IndustriesTestimonial from "@/components/pages/industries-page/IndustriesTestimonial";
import IndustriesFeaturesSection from "@/components/pages/industries-page/IndustriesFeaturesSection";
import ToolsSection from "@/components/pages/landing-page/ToolsSection";
import VoicesRealBusiness from "@/components/pages/landing-page/VoicesRealBusiness";
import SecurityCompliance from "@/components/pages/industries-page/securityCompliance";
import IndustriesHardwareControl from "@/components/pages/industries-page/IndustriesHardwareControl";
import DisclaimerHotel from "@/components/pages/industries-page/DisclaimerHotel";

const Page = () => {
  return (
    <>
      <Script
        id="schema-hotel"
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
                "logo": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "description": "Free trial available"
                },
                "description": "Hotel inventory management software that helps hotels and guesthouses track, control, and optimize supplies across all departments including housekeeping, maintenance, and laundry with real-time visibility from a centralized dashboard.",
                "featureList": [
                  "Real-time stock tracking across all departments",
                  "Housekeeping inventory management",
                  "Multi-department inventory system",
                  "SKU-based inventory organization",
                  "Warehouse and storage room management",
                  "Purchase order and supplier tracking",
                  "Consumption and usage reports",
                  "Automatic alerts and notifications",
                  "Role-based access control",
                  "Inventory transfer tracking"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Hotel Inventory Management Software | Owners Inventory",
                "url": "https://www.ownersinventory.com/industries/hotel-inventory-management-software",
                "description": "Track hotel supplies in real time, manage multi-department inventory, reduce waste, and control purchasing across all locations with Owners Inventory's hotel inventory management software.",
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
                      "name": "Hotel",
                      "item": "https://www.ownersinventory.com/industries/hotel-inventory-management-software"
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
                "name": "Hotel Inventory Management Software",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "Inventory management software designed for hotels and guesthouses to track supplies across housekeeping, maintenance, and laundry departments, manage purchase orders, reduce waste, and maintain real-time visibility from a single centralized dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://www.ownersinventory.com/industries/hotel-inventory-management-software",
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
                        "name": "Hotel Customer 1"
                      },
                      "reviewBody": "Our operations are now completely organized all thanks to their hotel inventory management software.",
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
                        "name": "Hotel Customer 2"
                      },
                      "reviewBody": "Real-time tracking has made a significant improvement in the coordination of housekeeping and maintenance.",
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
                        "name": "Hotel Customer 3"
                      },
                      "reviewBody": "With their help, we have significantly improved cost control and reduced waste across all departments.",
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
                    "name": "What is hotel inventory management software?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Hotel inventory management software is a system that helps track and manage inventory in real time, including housekeeping materials, maintenance supplies, and operational stocks. It provides full visibility and reduces errors. All departments can access accurate data to make better decisions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can it manage different departments within a hotel or resort?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, it supports several departments including laundry, housekeeping, maintenance, and storage so that management can maintain full control and visibility into all departments. Each department has its own tracking system within the unified platform."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can it reduce manual labor?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, it automates stock tracking, alerts, and reporting which reduces the need for manual spreadsheets and logs. This saves time and minimizes human error in day-to-day operations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it reduce the cost of inventory?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the system helps make better purchasing decisions by providing accurate data on usage and waste. This ensures correct stock levels are maintained and reduces unnecessary expenditures caused by emergency purchases or overstocking."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it work for hotels with large chains?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, it is designed for multi-location operations and is fully scalable. A centralized inventory system allows large hotel chains to manage multiple properties while still maintaining control in each individual property."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory Manages Hotel Inventory Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines hotel inventory management from procurement planning to reporting and optimization.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Planning for Inventory Procurement",
                    "text": "Stock is planned based on seasonality, occupancy, and operational requirements. This ensures inventory levels are aligned with actual business needs, reducing both overstocking and understocking while maintaining a balance of cost and availability."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Structured Storage and Categorization",
                    "text": "Inventory is organized by type and frequency of use, making items easy to find and manage. An organized storage system saves time, reduces confusion, and improves efficiency across all hotel departments."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Live Monitoring and Updates",
                    "text": "Stock levels are updated continuously as items are transferred or used, ensuring accurate tracking at all times. Real-time transparency allows managers to react quickly to changes in inventory and ensure operational continuity."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Supplier Coordination and Reordering",
                    "text": "The system manages vendor relationships, tracks delivery timelines, and ensures timely restocking to avoid interruptions. It helps maintain a consistent supply chain and improves communication with suppliers."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Internal Distribution and Usage Tracking",
                    "text": "Inventory is distributed among departments and tracked to ensure accountability. The system identifies which departments consume the most resources and highlights areas where improvements can be made."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Reporting, Insights and Optimization",
                    "text": "Analysis of inventory data improves purchasing decisions, decreases waste, and optimizes operations. Continuous monitoring and reporting helps businesses adapt to changes in demand and improve overall efficiency."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Hotel Inventory Management Software For Effortless Operations"
          description="Our hotel inventory management software is designed to help hotels, resorts, and guesthouses manage their inventory efficiently and effectively. It helps track, control, and optimize your hotel's supplies, such as linens, toiletries, and operational stock. A centralized dashboard allows hotels to eliminate errors and waste, as well as ensure smooth operations in all departments."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={HOTEL_INVENTORY_UNIFIED_HEADING}
          paragraph={HOTEL_INVENTORY_UNIFIED_PARAGRAPH}
          cards={HOTEL_INVENTORY_UNIFIED_CARDS}
          iconSet="hotelInventory"
        />

        <WhyChoosePOS
          heading="How Our Hotel Inventory Management Software Can Help"
          paragraph="Our hotel inventory management software can help you overcome these problems by automating processes, providing real-time visibility, and improving inventory control."
          cards={HOTEL_INVENTORY_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="hotelInventory"
        />

        <KeyHighlights
          heading="Key Features of Our Hotel Inventory Management Software"
          features={HOTEL_INVENTORY_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={HOTEL_INVENTORY_WORKFLOW_DATA.heading}
          paragraph={HOTEL_INVENTORY_WORKFLOW_DATA.paragraph}
          steps={HOTEL_INVENTORY_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Managing Your Hotel Operations Smarter and faster"
          description="A centralized system designed specifically for the hospitality industry can help you organize your hotel's inventory, cut down on unnecessary waste, and increase operational efficiency."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={HOTEL_INVENTORY_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security, Accuracy, and Compliance"
          description="This system provides a secure way to handle inventory data, while maintaining the accuracy of all hotel operations. Each transaction is documented, creating an audit trail which helps to maintain accountability."
        />

        <DisclaimerHotel
          title="All-in-One Hotel Inventory Platform"
          description="An all in one hotel inventory platform centralizes stock control purchasing and reporting in one system. It ensures consistent data, reduces errors, improves visibility, and eliminates reliance on external tools or integrations."
          list={[
            { listheading: "No third-party dependency" },
            { listheading: "Centralized operations" },
            { listheading: "Unified data across modules" },
            { listheading: "Reduced integration costs" },
          ]}
        />


        <IndustriesTestimonial
          testimonials={HOTEL_INVENTORY_TESTIMONIALS}
          heading={HOTEL_INVENTORY_TESTIMONIAL_DATA.heading}
          paragraph={HOTEL_INVENTORY_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={HOTEL_INVENTORY_TESTIMONIAL_DATA.secondHeading}
          secondDescription={HOTEL_INVENTORY_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={HOTEL_INVENTORY_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={HOTEL_INVENTORY_TESTIMONIAL_DATA.whyChooseDescription}
          features={HOTEL_INVENTORY_TESTIMONIAL_FEATURES}
          iconSet="hotelInventory"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQS"
            paragraph="The following are some of the common questions that are asked about our hotel inventory management software."
            faqs={HOTEL_INVENTORY_FAQS}
            buttonText="Start Now"
          />
        </div>

        <IndustriesHardwareControl
          title="Streamline Your Hotel Inventory Management With Confidence"
          description="With a modern system for hospitality management, you can take complete control over your hotel inventory, improve operational efficiency, reduce waste, and increase profitability."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
