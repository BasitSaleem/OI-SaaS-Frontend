import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Florist POS — UnifiedPlatform Section ──────────────────────────────
export const FLORIST_UNIFIED_HEADING =
  "Challenges Holding Back Florists";

export const FLORIST_UNIFIED_PARAGRAPH =
  "Florist shops deal with perishable stock and custom arrangements, presenting unique challenges that can impact margins and lead to waste. Key challenges include:";

export const FLORIST_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Spoilage & Freshness Management",
    description:
      "Tracking the shelf life of fresh-cut flowers and plants is difficult. Failing to manage perishability leads to high waste rates and lost revenue, costing up to 20% of your business profits annually.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Custom Bouquet Assembly Tracking",
    description:
      "Pricing custom arrangements accurately while deducting individual stems from raw inventory is complex. Manual entry at checkout causes mistakes and slows down service.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Delivery & Event Coordination",
    description:
      "Scheduling orders for birthdays, weddings, and local deliveries without a central calendar can lead to missed shipments or incorrect bouquet preparation.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Lack of Product Insights",
    description:
      "Without detailed reports, florist shop owners must guess which flower types or pre-made arrangements sell best during seasonal holidays.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Holiday Demand Fluctuations",
    description:
      "Flower prices and supply fluctuate dramatically during Valentine's Day or Mother's Day. Updating pricing tags across systems manually leads to mistakes.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Inconsistent Online Ordering",
    description:
      "Florist shops rely heavily on web orders, but without real-time inventory sync, you risk selling arrangements that cannot be fulfilled due to missing stems.",
  },
];

export const FLORIST_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Perishable Inventory Control",
    description:
      "Monitor freshness dates and receive alerts before floral stock spoils, helping you minimize waste and optimize ordering.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Flexible Bouquet Builder",
    description:
      "Instantly bill custom orders and deduct used flowers, wrapping materials, and vases from your live inventory counts.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Integrated Delivery Scheduling",
    description:
      "Organize local deliveries, manage driver schedules, and collect recipient notes directly at the point of sale.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Seasonal Price Control",
    description:
      "Easily update pricing, launch holiday promotions, and bundle arrangements across all sales channels instantly.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Data-Driven Purchase Reports",
    description:
      "Review sales trends to know which blooms are top-sellers, helping you make smart purchases from your wholesalers.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Real-Time Online Sync",
    description:
      "Sync online web orders and phone orders with your physical storefront inventory, keeping stock levels always accurate.",
  },
];

export const FLORIST_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel and Sales Integration",
    description:
      "Our system connects your flower shop, online ordering website, and event pre-orders into a single dashboard. Manage in-store sales and online deliveries in one place.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Sales Management",
        listdescription:
          "Streamline checkouts, process custom florist items, and update raw flower inventory counts immediately.",
        listSubDescription:
          "This helps florist shops reduce mistakes, keep checkout lines moving fast during busy flower holidays, and provide a premium customer experience.",
      },
      {
        listheading: "Ecommerce Operations and Online Sales",
        listdescription:
          "Accept online payments for bouquets, schedule delivery dates, and coordinate delivery routes from one platform.",
      },
      {
        listheading: "Single Multi-Channel Control",
        listdescription:
          "See what floral varieties are available, track custom orders in progress, and monitor total store sales in real time.",
        listSubDescription:
          "This lets you run your florist shop efficiently, reducing waste and ensuring customers receive fresh arrangements.",
      },
    ],
  },
  {
    id: "2",
    title: "Better Decision Reporting and Analytics",
    description:
      "Our system provides reports showing sales margins, seasonal demand spikes, and perishability rates, helping you make smarter decisions on bulk purchases.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    list: [
      { listheading: "Track seasonal flower popularity" },
      { listheading: "Monitor spoilage patterns to minimize waste" },
      {
        listheading:
          "Generate reports to understand holiday order patterns",
      },
    ],
  },
];

export const FLORIST_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Fast Custom Bouquet Billing",
    description:
      "Rings up loose stems, foliage, wrapping paper, and card notes quickly. The Owners Inventory POS is great for florist shops.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Perishables Tracking",
    description:
      "Tracks freshness dates and updates inventory after sales to keep flower quality high and reduce inventory loss.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Pre-Orders & Delivery Scheduling",
    description:
      "Enables pre-ordering for weddings, funerals, and local deliveries. Organize your calendar directly in the software.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Bundle & Stem Variations",
    description:
      "Handles item variants for flower arrangements including stem count, size, vase additions, and gift card upsells.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Customer CRM & Anniversaries",
    description:
      "Saves customer purchase history, birthday/anniversary reminders, and contact details to prompt repeat sales.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Operational Cost Management",
    description:
      "Tracks store expenses, delivery mileage costs, and staff shifts to ensure optimal profitability of the business.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card6.webp",
  },
  {
    id: 7,
    title: "Online Store Integration",
    description:
      "Enables online bouquet orders with live stock counts and synchronized updates between website and physical store.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card7.webp",
  },
  {
    id: 8,
    title: "Multi-Store Florist Control",
    description:
      "Manage inventory, bulk orders, and delivery dispatches across multiple florist shops from a single dashboard.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card8.webp",
  },
  {
    id: 9,
    title: "Holiday Profit Reports",
    description:
      "Understand sales volume, tax reports, and profit margins during peak events like Mother's Day and Valentine's.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card9.webp",
  },
  {
    id: 10,
    title: "Role-Based Staff Access",
    description:
      "Assign roles for cashiers, florists, and managers to protect financial transactions and limit system changes.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/florist-pos/key-features-section/key-feature-card10.webp",
  },
];

export const FLORIST_WORKFLOW_DATA = {
  heading: "Florist Inventory Workflow",
  paragraph:
    "Our florist POS system automates stem tracking and sales so you can focus on creativity. It coordinates flower arrivals, custom assemblies, local deliveries, and seasonal planning.",
  steps: [
    {
      number: 1,
      title: "Stem Acquisition",
      description:
        "Wholesalers deliver fresh flowers. Log them with supplier details and freshness dates to track product shelf life.",
    },
    {
      number: 2,
      title: "Freshness Storage",
      description:
        "Sort flowers in refrigerators or displays, noting storage locations and expected freshness windows.",
    },
    {
      number: 3,
      title: "Inventory Control",
      description:
        "Check stock levels, record spoilage, and coordinate custom orders for upcoming weddings or events.",
    },
    {
      number: 4,
      title: "Wholesale Purchasing",
      description:
        "Manage purchase orders to restock popular blooms ahead of holiday demand spikes.",
    },
    {
      number: 5,
      title: "Custom Assembly & Checkout",
      description:
        "Scan barcodes, add card notes, select delivery options, and process payments for custom florist orders.",
    },
    {
      number: 6,
      title: "Analytics & Spoilage Reports",
      description:
        "View reports on sales performance, waste rates, and holiday earnings. Enhance florist shop operations today.",
    },
  ],
};

export const FLORIST_TESTIMONIALS = [
  {
    id: "1",
    name: "Zoey Scott",
    title: "Flower Shop Owner",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image12.webp",
    text: "Our system has made billing custom orders and tracking stem counts simple. Flower shop management is finally stress-free.",
  },
  {
    id: "2",
    name: "Tyler Mitchell",
    title: "Florist Boutique Manager",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image12.webp",
    text: "This is the best system we have used. It schedules local deliveries, tracks florist details, and coordinates web sales.",
  },
  {
    id: "3",
    name: "Brandon Howard",
    title: "Event Florist Owner",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image13.webp",
    text: "We used to have trouble tracking stem counts for weddings. Now everything is logged perfectly, and billing is fast.",
  },
  {
    id: "4",
    name: "Aisha Malik",
    title: "Multi-Store Florist Franchise",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image13.webp",
    text: "Spoilage rates dropped and holiday billing became smoother. It saves time and makes our florists much more efficient.",
  },
];

export const FLORIST_FAQS = [
  {
    id: "1",
    question: "What is a POS system for a florist?",
    answer:
      "A florist point of sale system helps manage fresh stem inventory, custom arrangement pricing, event scheduling, and local deliveries from one unified tool.",
  },
  {
    id: "2",
    question: "Can I manage delivery orders?",
    answer:
      "Yes, you can schedule delivery dates, add recipient messages, track delivery drivers, and record addresses directly at checkout.",
  },
  {
    id: "3",
    question: "How does it handle perishables?",
    answer:
      "You can enter freshness warnings and expiration dates for flowers, allowing you to prioritize selling older blooms and reduce waste.",
  },
  {
    id: "4",
    question: "Does it support custom arrangement billing?",
    answer:
      "Yes, you can create a custom item at checkout, selecting the specific stems, ribbons, and vases used to automatically adjust raw inventory levels.",
  },
  {
    id: "5",
    question: "Is the system secure for multiple cashiers?",
    answer:
      "Absolutely. You can assign different access levels to cashiers, design staff, and supervisors to keep financial data secure.",
  },
];

export const FLORIST_TESTIMONIAL_DATA = {
  heading: "What Do Our Clients Say About Owners Inventory?",
  paragraph: "",
  secondHeading: "Florist Inventory Management Made Easy",
  secondDescription:
    "Control your fresh stock, manage customer delivery calendars, and simplify holiday sales using our system designed specifically for florists.",
  whyChooseTitle: "Why Choose Our System?",
  whyChooseDescription:
    "Our system gives you stem-level tracking, fast custom billing, and control over your floral business.",
};

export const FLORIST_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Fast Setup",
    description:
      "Quickly set up your flower catalog, including stems, soil, wrapping paper, and pots. Easy for florists of all tech levels.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Stable & Reliable",
    description:
      "Rings up sales and manages high customer traffic without slowing down during busy flower holidays like Mother's Day.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Clear Inventory Counts",
    description:
      "Know exactly how many roses, lilies, and tulips you have in stock in real time, preventing double-selling.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Accurate Holiday Reports",
    description:
      "Generate detailed sales and margin reports for key holidays, helping you prepare inventory for the next season.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Flexible Page Settings",
    description:
      "Adapts to your flower shop's requirements, supporting local deliveries, custom events, and bulk supplier ordering.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Secure Cash Registers",
    description:
      "Enforce cashier permissions, restrict refunds, and manage drawer access to safeguard your shop's revenue.",
    icon: "testWhychoseIcon6",
  },
  {
    id: "7",
    title: "Advanced Integrations",
    description:
      "Integrates with barcode scanners, receipt printers, card terminals, online stores, and accounting software.",
    icon: "testWhychoseIcon7",
  },
];

export const FLORIST_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Our point of sale system integrates with accounting, ecommerce platforms, and payment systems to streamline florist shop operations and reduce manual work.",
  tools: [
    {
      id: 1,
      name: "Shopify",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/shopify.svg",
    },
    {
      id: 2,
      name: "WooCommerce",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/woocomerce.svg",
    },
    {
      id: 3,
      name: "QuickBooks",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/quick-book.svg",
    },
    {
      id: 4,
      name: "Xero",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/xero.svg",
    },
    {
      id: 5,
      name: "Stripe",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/stripe.svg",
    },
  ],
};
