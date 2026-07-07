import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Garden Center POS — UnifiedPlatform Section ──────────────────────────
export const GARDEN_CENTER_UNIFIED_HEADING =
  "Challenges Holding Back Garden Centers";

export const GARDEN_CENTER_UNIFIED_PARAGRAPH =
  "Garden centers and nurseries handle unique inventory items, such as living plants, bulk soil, landscaping materials, and tools, creating specific operational challenges. These include:";

export const GARDEN_CENTER_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Live Plant & Perishable Inventory",
    description:
      "Tracking the health, watering schedules, and seasonal shelf life of diverse plant species is hard. Manual logs lead to stock inaccuracies that can cost your business up to 20% in lost profits annually.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Bulk & Loose Material Billing",
    description:
      "Ringing up bulk items sold by weight, volume (cubic yards), or bags—like mulch, gravel, and topsoil—often causes cashier errors and slows down checkout lines.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Supplier & Vendor Coordination",
    description:
      "It is difficult to manage multiple plant nurseries, tool manufacturers, and seed suppliers without a centralized purchasing dashboard. The Owners Inventory POS simplifies supplier orders.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Lack of Seasonal Insights",
    description:
      "Without detailed reporting, center owners must guess which plant varieties or landscaping products perform best during spring or autumn spikes.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Fluctuating Seasonal Pricing",
    description:
      "Prices for soil, fertilizers, and plants change based on season and availability. Manually updating tags is error-prone. The Owners Inventory POS automates pricing updates.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Limited Online Inventory Sync",
    description:
      "Many garden centers miss out on online orders because local plant stock counts do not sync in real time with their web shop. The Owners Inventory POS keeps everything in sync.",
  },
];

export const GARDEN_CENTER_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-Time Plant Tracking",
    description:
      "Monitor stock levels of flowers, shrubs, and trees dynamically, ensuring accurate quantities across categories.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Bulk Billing & Weights",
    description:
      "Easily process bulk materials by yard, bag, or weight with custom buttons to keep checkout lanes moving fast.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Intelligent Supplier Orders",
    description:
      "Manage purchase orders for nurseries and wholesalers, and receive alerts when high-demand seeds or soils run low.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Centralized Price Control",
    description:
      "Instantly adjust seasonal pricing, bundle items, and launch promotions across all nursery locations from one dashboard.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Data-Driven Purchase Decisions",
    description:
      "Analyze live reports showing top-selling plant categories and profit margins to plan your seasonal growing orders.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Integrated Ecommerce Shop",
    description:
      "Sync nursery inventory with online platforms, allowing customers to check plant availability online and buy web orders.",
  },
];

export const GARDEN_CENTER_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel and Sales Integration",
    description:
      "Our system connects all of your sales points—including the physical garden center, landscape sales, and online orders—into one simple console. Manage local stock and web orders in one place.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Sales Management",
        listdescription:
          "Keep nursery checkouts simple, support barcodes and custom labels, and trace stock levels automatically.",
        listSubDescription:
          "This helps garden centers operate smoothly, reduce cashier errors, and handle high-volume spring customer crowds with ease.",
      },
      {
        listheading: "Ecommerce Operations and Online Sales",
        listdescription:
          "Accept online payments, schedule plant pickups, and coordinate delivery routes from a centralized console.",
      },
      {
        listheading: "Single Multi-Channel Control",
        listdescription:
          "View live stock levels, check plant health notes, and monitor sales trends across all store departments.",
        listSubDescription:
          "This allows you to manage nursery resources efficiently, reducing plant loss and enhancing seasonal margins.",
      },
    ],
  },
  {
    id: "2",
    title: "Better Decision Reporting and Analytics",
    description:
      "Our system delivers detailed sales metrics, seasonal demand curves, and inventory turnover reports, enabling nursery managers to optimize wholesale orders.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    list: [
      { listheading: "Track high-demand plant species" },
      { listheading: "Monitor fertilizer and tool stock levels" },
      {
        listheading:
          "Generate seasonal profit reports to plan next year's nursery orders",
      },
    ],
  },
];

export const GARDEN_CENTER_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Fast Barcode & Bulk Billing",
    description:
      "Quickly scan pots and seeds, or key in cubic yard quantities of soil and mulch. The Owners Inventory POS simplifies garden center billing.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Live Plant Inventory",
    description:
      "Stock levels update immediately with every checkout, keeping plant counts accurate and helping you manage plant care.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Nursery Purchases & Orders",
    description:
      "Create purchase orders quickly, track wholesale plant deliveries, and manage multiple supplier accounts.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Bulk & Variant Plant Support",
    description:
      "Deal with variations in size (e.g. 1-gallon vs 5-gallon pots), soil type, and packaging options.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Customer & Loyalty Accounts",
    description:
      "Track landscaping accounts and amateur gardener buying histories. Push custom discounts and gardening tips.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Expense & Finance Tracking",
    description:
      "Monitor operational costs, water bills, and employee shifts to maintain financial transparency.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card6.webp",
  },
  {
    id: 7,
    title: "Nursery Web Store Sync",
    description:
      "Publish plants online with live stock counts and coordinate pickups or deliveries directly from your POS.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card7.webp",
  },
  {
    id: 8,
    title: "Multi-Location Control",
    description:
      "Manage inventory, sales, and employee permissions across multiple garden centers and nurseries from one screen.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card8.webp",
  },
  {
    id: 9,
    title: "Seasonal Sales Reports",
    description:
      "Analyze sales trends, tax details, and margins during busy spring or fall gardening months.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card9.webp",
  },
  {
    id: 10,
    title: "Staff Permission Levels",
    description:
      "Limit register access for seasonal staff while granting supervisor privileges for price overrides and stock counts.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/garden-center-pos/key-features-section/key-feature-card10.webp",
  },
];

export const GARDEN_CENTER_WORKFLOW_DATA = {
  heading: "Garden Center Inventory Workflow",
  paragraph:
    "Our POS software automates backend inventory control for garden centers and nurseries. It streamlines plant arrivals, bulk item billing, local deliveries, and seasonal ordering.",
  steps: [
    {
      number: 1,
      title: "Plant Acquisition",
      description:
        "Log wholesale plant arrivals and seeds, noting pot size, varieties, and supplier accounts.",
    },
    {
      number: 2,
      title: "Storage & Layout",
      description:
        "Organize inventory in greenhouses or outdoor yards, grouping plants by category and care requirements.",
    },
    {
      number: 3,
      title: "Inventory Tracking",
      description:
        "Monitor stock levels, record plant losses or damage, and coordinate bulk yard items.",
    },
    {
      number: 4,
      title: "Nursery Ordering",
      description:
        "Automate purchase orders for pots, soils, and popular plant lines ahead of seasonal spikes.",
    },
    {
      number: 5,
      title: "Order Checkout",
      description:
        "Scan barcodes, bill bulk materials by volume, apply landscaping discounts, and process payments.",
    },
    {
      number: 6,
      title: "Reporting & Insights",
      description:
        "Review detailed insights to understand what garden categories are most profitable and make smart business decisions.",
    },
  ],
};

export const GARDEN_CENTER_TESTIMONIALS = [
  {
    id: "1",
    name: "Zoey Scott",
    title: "Garden Center Owner",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image12.webp",
    text: "This system has made billing bulk materials and tracking plant counts simple. Garden center management is finally stress-free.",
  },
  {
    id: "2",
    name: "Tyler Mitchell",
    title: "Nursery Manager",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image12.webp",
    text: "The best system we have implemented. It organizes bulk material billing, tracks plant quantities, and integrates with our website.",
  },
  {
    id: "3",
    name: "Brandon Howard",
    title: "Nursery & Landscaping Owner",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image13.webp",
    text: "We used to have trouble tracking thousands of plant varieties. Now everything is logged perfectly, and billing is fast.",
  },
  {
    id: "4",
    name: "Aisha Malik",
    title: "Multi-Store Center Franchise",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image13.webp",
    text: "Shrinkage has dropped and spring billing is much faster. It saves time and makes our nurseries much more efficient.",
  },
];

export const GARDEN_CENTER_FAQS = [
  {
    id: "1",
    question: "What is a garden center POS system?",
    answer:
      "A garden center point of sale system helps manage plant inventories, bulk material sales (soil, mulch), landscaper accounts, and supplier orders from one central software.",
  },
  {
    id: "2",
    question: "Can I sell bulk materials by volume?",
    answer:
      "Yes, the system allows you to build custom billing buttons to sell soil, gravel, and mulch by bag, weight, or cubic yards easily.",
  },
  {
    id: "3",
    question: "How does it handle plant variants?",
    answer:
      "You can define variations for plant sizes, colors, and pot types, ensuring accurate stock records and prices at checkout.",
  },
  {
    id: "4",
    question: "Does it support online sales?",
    answer:
      "Yes, you can sync your in-store stock levels automatically with your online store so customers can purchase items online.",
  },
  {
    id: "5",
    question: "Can I limit access for seasonal employees?",
    answer:
      "Yes, you can configure staff roles so seasonal cashiers can only run checkouts, while supervisors manage price changes and purchase orders.",
  },
];

export const GARDEN_CENTER_TESTIMONIAL_DATA = {
  heading: "What Do Our Clients Say About Owners Inventory?",
  paragraph: "",
  secondHeading: "Nursery Inventory Management Made Easy",
  secondDescription:
    "Control your nursery stock, simplify bulk material billing, and manage landscaping orders with our system designed specifically for garden centers.",
  whyChooseTitle: "Why Choose Our System?",
  whyChooseDescription:
    "Our system gives you plant-level tracking, fast bulk billing, and control over your garden business.",
};

export const GARDEN_CENTER_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Simple Setup",
    description:
      "Set up your plant catalog and store inventory quickly without interrupting daily operations. Easy to learn for seasonal staff.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Stable Performance",
    description:
      "Rings up sales and manages high customer traffic without slowing down during busy spring gardening seasons.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Clear Inventory Counts",
    description:
      "Know exactly how many trees, flowers, and tools are available, preventing stock issues.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Accurate Reports",
    description:
      "Generate detailed sales and margin reports to understand what garden categories are most profitable.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Flexible Page Settings",
    description:
      "Adapts to your nursery's needs, supporting landscaper discounts, bulk pricing, and supplier ordering.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Secure Cash Registers",
    description:
      "Configure staff roles, restrict voids, and manage drawer access to safeguard your garden center's revenue.",
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

export const GARDEN_CENTER_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Our point of sale system integrates with accounting, ecommerce platforms, and payment systems to streamline garden center operations and reduce manual work.",
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
