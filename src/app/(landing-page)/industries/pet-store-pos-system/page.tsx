import React from "react";
import Script from "next/script";
const heroBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/pet-store-pos/hero-banner.webp";
const whyChoseBanner = "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/pet-store-pos/why-chose-banner.webp";

import {
  PET_STORE_KEY_FEATURES_CARDS,
  PET_STORE_WHY_CHOOSE_CARDS,
  PET_STORE_FEATURE_CARDS
} from "@/constant/subindustries/petStorePosData";

import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import KeyHighlights from "@/components/pages/features-page/point-of-sale/KeyHighlights";
import WhyChoosePOS from "@/components/pages/features-page/point-of-sale/WhyChoosePOS";
import SubIndustriesHero from "@/components/pages/industries-page/subIndustriesHero";

import FaqSection from "@/components/pages/landing-page/FAQSection";
import IndustryUnifiedPlatform from "@/components/pages/industries-page/IndustryUnifiedPlatform";
import {
  PET_STORE_UNIFIED_CARDS,
  PET_STORE_UNIFIED_HEADING,
  PET_STORE_UNIFIED_PARAGRAPH,
  PET_STORE_WORKFLOW_DATA,
  PET_STORE_TESTIMONIALS,
  PET_STORE_FAQS,
  PET_STORE_TESTIMONIAL_DATA,
  PET_STORE_TESTIMONIAL_FEATURES,
  PET_STORE_TOOLS_DATA,
} from "@/constant/subindustries/petStorePosData";
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
        id="schema-pet-store"
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
                "description": "Pet store POS system that manages diverse product categories including food, grooming, toys, and healthcare with real-time inventory tracking, expiry and batch management, fast barcode checkout, subscription and auto-ship orders, customer purchase insights, and multi-location control from one dashboard.",
                "featureList": [
                  "Multi-category product management for food, accessories, grooming, and healthcare",
                  "Expiry and batch tracking with stock rotation alerts",
                  "Real-time inventory updates after every sale",
                  "Fast barcode checkout and automated billing",
                  "Customer purchase history and loyalty tracking",
                  "Subscription and auto-ship recurring orders",
                  "Custom discount and bundle management",
                  "Supplier and purchase order management",
                  "Multi-location store management from one dashboard",
                  "Multiple payment options including split payment",
                  "Online and in-store order syncing",
                  "Role-based access control for staff",
                  "Detailed sales and inventory reporting"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Pet Store POS System | Owners Inventory",
                "url": "https://ownersinventory.com/industries/pet-store-pos-system",
                "description": "Manage pet food, grooming, toys, and healthcare with real-time inventory, expiry tracking, fast checkout, and loyalty insights using Owners Inventory's pet store POS system.",
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
                      "name": "Pet Store POS System",
                      "item": "https://ownersinventory.com/industries/pet-store-pos-system"
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
                "name": "Pet Store POS System",
                "image": "https://ownersinventory.com/assets/owner-inventory-logo.svg",
                "description": "POS software designed for pet stores to manage diverse product categories, track expiry and batches, handle fast barcode checkout, set up subscription and auto-ship orders, track customer purchase history, manage suppliers, and run multi-location operations from a single dashboard.",
                "brand": {
                  "@type": "Brand",
                  "name": "Owners Inventory"
                },
                "url": "https://ownersinventory.com/industries/pet-store-pos-system",
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
                        "name": "Sarah L"
                      },
                      "reviewBody": "Previously, it was a headache to manage the expiry dates of pet food, but with the system we are alerted automatically and there is a lot less waste.",
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
                        "name": "Daniel M"
                      },
                      "reviewBody": "It used to be difficult to keep track of various pet products like food, toys, and grooming supplies. Now they're all in one place and easy to keep track of.",
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
                        "name": "Ayesha K"
                      },
                      "reviewBody": "Before Owners Inventory, we used to experience stockouts on our best sellers, but since the change we are always prepared to reorder the items selling out in our store.",
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
                        "name": "Omar R"
                      },
                      "reviewBody": "When customers used to purchase lots of pet items, checkout would be quite slow, but now we scan barcodes and bill quickly and smoothly, even during peak hours.",
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
                    "position": 5,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Jessica P"
                      },
                      "reviewBody": "We now truly know what our customers are purchasing for their pets, and the sales information enabled us to tweak our offerings and improve sales.",
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
                    "position": 6,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Hassan A"
                      },
                      "reviewBody": "Managing multiple pet store locations used to be confusing. Now we can see all branches in one dashboard without switching systems.",
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
                    "position": 7,
                    "item": {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Michael B"
                      },
                      "reviewBody": "The loyalty feature actually made a difference for us. Pet owners come back more often because their rewards are tracked automatically.",
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
                    "name": "Can I manage pet food expiry dates in the system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system tracks expiry dates and batch numbers for effective stock rotation, helping minimize product waste and keep only fresh items on the shelves."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the POS handle discounts and promotions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Discounts and special offers are set up in the system and applied automatically at checkout, calculated correctly without any manual work."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I upload my full pet product catalog at once?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can import your full product catalog using Excel or CSV files for quick, efficient setup without manually entering each product."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can the system manage multiple pet store locations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can manage inventory, sales, and performance for each branch from a centralized dashboard without switching systems."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it track customer purchase history for pet products?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Customers' purchasing patterns and preferences are recorded and used to make tailored recommendations, helping enhance repeat sales."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Owners Inventory POS Manages Pet Store Operations",
                "description": "A step-by-step workflow showing how Owners Inventory streamlines pet store operations from catalog setup to performance review and restocking.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Catalog Setup and Organization",
                    "text": "Pet products are added with all relevant details such as name, SKU, category, price, and expiry. Categories include pet food, grooming tools, toys, medicines, and accessories, with bulk import options for large catalogs."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Customer Identification at the Counter",
                    "text": "When a customer arrives at the counter, the cashier can access their profile, viewing their pets' purchase history, preferences, and loyalty points on screen."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Transaction Building and Pricing",
                    "text": "Staff scan pet products via barcode or select them from the system, including variations like size, brand, or formula type. Discounts, bundles, and promotional pricing are applied within the same interface."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Seamless Payment Processing",
                    "text": "The POS supports several payment options including cash, card, mobile wallets, and split payment, allowing fast and simple transaction completion without switching between tools."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Performance Review and Restocking",
                    "text": "At the end of the day, the dashboard provides a clear view of sales activity and stock turnover, showing top-selling products, slow-moving items, and items running low for smarter restocking."
                  }
                ]
              }
            ]
          })
        }}
      />
      <div>
        <SubIndustriesHero
          title="Pet Store POS System for Smarter Inventory and Better Pet Care"
          description="Pet stores must constantly manage their stock of food, grooming products, toys, health products, and other essentials while maintaining customer trust and encouraging repeat purchases. Owners Inventory software offers a dedicated pet store point of sale solution to monitor real-time inventory, speed up the checkout process and accurately manage all products."
          image={heroBanner}
          imageClassName="max-w-[1000px] mt-10"
          ctaDesc="Start Free Today"
          variant="animation2"
        />

        <VoicesRealBusiness title="Ratings on the Leading Review Platforms" />

        <IndustryUnifiedPlatform
          heading={PET_STORE_UNIFIED_HEADING}
          paragraph={PET_STORE_UNIFIED_PARAGRAPH}
          cards={PET_STORE_UNIFIED_CARDS}
          iconSet="petStore"
        />

        <WhyChoosePOS
          heading="How Our POS System for Pet Stores Solves These Challenges"
          paragraph="Owners Inventory is a powerful pet store POS system that simplifies store operations, improves inventory management, and centralizes all business activities on a single platform."
          cards={PET_STORE_WHY_CHOOSE_CARDS}
          mainImage={whyChoseBanner}
          iconSet="petStore"
        />

        <KeyHighlights
          heading="Key Features of Owners Inventory POS"
          features={PET_STORE_KEY_FEATURES_CARDS}
        />

        <InventoryWorkflow
          heading={PET_STORE_WORKFLOW_DATA.heading}
          paragraph={PET_STORE_WORKFLOW_DATA.paragraph}
          steps={PET_STORE_WORKFLOW_DATA.steps}
        />

        <IndustriesCallToAction
          title="Break Free from Pet Inventory Guesswork"
          description= "Pet stores that maintain accurate inventory tracking, faster checkout processes, and consistent customer engagement build stronger long-term customer loyalty. Owners Inventory provides everything needed to manage operations efficiently from day one."
          ctaDesc="Request a Free Demo"
        />

        <IndustriesFeaturesSection features={PET_STORE_FEATURE_CARDS} />

        <SecurityCompliance
          title="Security and Access Control"
          description= "Owners Inventory ensures secure operations with role-based access control. Staff are only provided with information relevant to their roles and all transactions are carried out via secure payment methods to ensure that customer and business information is kept safe."
        />

        <ToolsSection
          heading={PET_STORE_TOOLS_DATA.heading}
          description={PET_STORE_TOOLS_DATA.paragraph}
          tools={PET_STORE_TOOLS_DATA.tools}
        />

        <IndustriesTestimonial
          testimonials={PET_STORE_TESTIMONIALS}
          heading={PET_STORE_TESTIMONIAL_DATA.heading}
          paragraph={PET_STORE_TESTIMONIAL_DATA.paragraph}
          showSmartTools={true}
          secondHeading={PET_STORE_TESTIMONIAL_DATA.secondHeading}
          secondDescription={PET_STORE_TESTIMONIAL_DATA.secondDescription}
          whyChooseShow={true}
          whyChooseTitle={PET_STORE_TESTIMONIAL_DATA.whyChooseTitle}
          whyChooseDescription={PET_STORE_TESTIMONIAL_DATA.whyChooseDescription}
          features={PET_STORE_TESTIMONIAL_FEATURES}
          iconSet="petStore"
        />

        <div className="lg:mt-[100px] md:mt-28 mt-20 relative z-100">
          <FaqSection
            heading="FAQs"
            paragraph="The following are some of the frequently asked questions about our pet store POS system."
            faqs={PET_STORE_FAQS}
            buttonText="Start Now"
          />
        </div>
        <IndustriesHardwareControl
          title="The Smartest Move for Your Pet Business"
          description="Stop relying on outdated tools and disconnected systems. Get a faster, more efficient way to manage the shelves, customers and operations for your pet shop."
          ctaDesc="Start Today"
        />
      </div>
    </>
  );
};

export default Page;
