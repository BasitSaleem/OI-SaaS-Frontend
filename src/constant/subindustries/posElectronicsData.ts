import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Electronics POS — UnifiedPlatform Section ──────────────────────────────
export const ELECTRONICS_UNIFIED_HEADING =
  "Challenges Holding Back Electronics Stores";

export const ELECTRONICS_UNIFIED_PARAGRAPH =
  "Electronics retailers face unique challenges daily that can hinder growth, cause leakage, and increase operational costs. Key challenges include:";

export const ELECTRONICS_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Serial Number & Warranty Tracking",
    description:
      "Managing individual serial numbers for high-value items, warranties, and return dates is complex. Tracking these manually or with a basic system leads to errors that can cost your business up to 20% each year.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Slow Checkout Lines",
    description:
      "Complex checkouts involving warranties, serial number validation, and customer info can cause long lines during peak hours. The Owners Inventory POS System simplifies billing to keep checkout fast.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Supplier & Vendor Coordination",
    description:
      "It is difficult to manage multiple electronics distributors, purchase orders, and lead times without a centralized dashboard. The Owners Inventory POS solves coordination issues.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Lack of Sales Insights",
    description:
      "Without detailed reports, store owners must guess which electronics brands or models are performing well. The Owners Inventory POS provides clear, actionable insights.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Frequent Pricing Updates",
    description:
      "Pricing for electronics fluctuates frequently with new releases. Updating tags and prices manually across branches is error-prone. The Owners Inventory POS automates price controls.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Limited Omni-channel Syncing",
    description:
      "Many stores miss out on online orders because in-store stock doesn't sync with their website. The Owners Inventory POS bridges this gap with real-time stock sync.",
  },
];

export const ELECTRONICS_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-Time Serial Number Tracking",
    description:
      "Automatically track serial numbers from receiving to checkout, reducing returns fraud and maintaining 100% stock accuracy.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Faster & Smoother Billing",
    description:
      "Scan barcodes, verify serial numbers, and add warranties instantly to complete transactions and prevent queues.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Intelligent Purchase Orders",
    description:
      "Track suppliers, manage purchase orders, and get alerts when high-demand electronics are running low to prevent stockouts.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Centralized Price Control",
    description:
      "Instantly update prices, promotional discounts, and bundles across all outlets from a single master dashboard.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Data-Driven Decisions",
    description:
      "Review live reports detailing best-selling items, profit margins, and slow-moving models to optimize inventory spend.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Seamless Ecommerce Sync",
    description:
      "Synchronize your in-store inventory automatically with online stores to capture digital sales effortlessly.",
  },
];

export const ELECTRONICS_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel and Sales Integration",
    description:
      "Our system connects all the places where customers buy electronics—whether in-store, online, or on mobile apps—into a unified platform. Manage all inventory and sales in one place.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Sales Management",
        listdescription:
          "Make checkouts straightforward, track stock in real time, and gain precise sales data for every checkout lane.",
        listSubDescription:
          "This helps electronics stores operate smoothly, minimize cashier errors, and ensure customer satisfaction by keeping lines short and managing serial numbers seamlessly.",
      },
      {
        listheading: "Ecommerce Operations and Online Sales",
        listdescription:
          "Securely accept credit cards and alternative payments, run online promotions, and coordinate order dispatch from your warehouses.",
      },
      {
        listheading: "Single Multi-Channel Control",
        listdescription:
          "Gain immediate visibility into what products are in stock, which electronics are trending, and overall performance across all sites.",
        listSubDescription:
          "Make informed purchasing decisions and maintain a uniform customer experience online and offline.",
      },
    ],
  },
  {
    id: "2",
    title: "Better Decision Reporting and Analytics",
    description:
      "Our system delivers granular metrics on sales performance, category performance, and profit margins, enabling store managers to invest inventory budgets in high-margin products.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    list: [
      { listheading: "Track high-margin and slow-moving models" },
      { listheading: "Receive smart reorder alerts before stock runs out" },
      {
        listheading:
          "Analyze product returns, warranties, and store performance",
      },
    ],
  },
];

export const ELECTRONICS_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Serial Number Management",
    description:
      "Scan and associate unique serial numbers with sales for warranty tracking. The Owners Inventory POS is built for high-value asset protection.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Real-Time Stock Updates",
    description:
      "Inventory updates immediately with every purchase and sale, ensuring precise stock counts at all times.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Supplier & Purchase Orders",
    description:
      "Generate purchase orders, trace partial shipments, and handle multiple suppliers inside a unified system.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Warranty & Return Validation",
    description:
      "Check warranty status during returns by searching serial numbers, preventing returns fraud and reducing loss.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Customer & Loyalty Programs",
    description:
      "Keep customer purchase histories and contact details. Launch promotional campaigns and loyalty rewards.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Expense & Finance Tracking",
    description:
      "Monitor operational expenses and daily cash registers to keep accounting transparent and audit-ready.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card6.webp",
  },
  {
    id: 7,
    title: "Online Sales Sync",
    description:
      "Publish items to online storefronts and receive web orders directly on your POS console.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card7.webp",
  },
  {
    id: 8,
    title: "Multi-Store Management",
    description:
      "Synchronize inventory levels, customer database, and staff shifts across all of your electronics outlets.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card8.webp",
  },
  {
    id: 9,
    title: "Actionable Reporting",
    description:
      "Create immediate summaries on sales, inventory turnover, tax collection, and employee productivity.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card9.webp",
  },
  {
    id: 10,
    title: "Cashier Access Levels",
    description:
      "Configure cash drawer permissions and void rights for cashiers, store supervisors, and system administrators.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card10.webp",
  },
];

export const ELECTRONICS_WORKFLOW_DATA = {
  heading: "Electronics Inventory Workflow",
  paragraph:
    "Our POS software automates backend inventory control for electronics stores. It tracks serial numbers, purchase orders, sales, and multi-location transfers effortlessly.",
  steps: [
    {
      number: 1,
      title: "Inventory Acquisition",
      description:
        "Receive new shipments, scan barcodes, and log unique serial numbers for each item into the system database.",
    },
    {
      number: 2,
      title: "Stock Organization",
      description:
        "Catalog items with clear category structures, brands, models, and specifications to optimize display and lookup.",
    },
    {
      number: 3,
      title: "Inventory Tracking",
      description:
        "Continuously monitor stock levels, pending customer orders, and warranty periods automatically.",
    },
    {
      number: 4,
      title: "Supplier Ordering",
      description:
        "Auto-generate purchase orders based on custom reorder points for key product lines.",
    },
    {
      number: 5,
      title: "Order Fulfillment",
      description:
        "Scan barcodes, assign serial numbers to sales, print warranty conditions on receipts, and complete transactions.",
    },
    {
      number: 6,
      title: "Reporting & Insights",
      description:
        "Review detailed insights to understand what electronics categories are most profitable and make smart business decisions.",
    },
  ],
};

export const ELECTRONICS_TESTIMONIALS = [
  {
    id: "1",
    name: "Zoey Scott",
    title: "Electronics Store Owner",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image12.webp",
    text: "This system has made serial number lookup and billing quick and precise. Managing store inventory is finally stress-free.",
  },
  {
    id: "2",
    name: "Tyler Mitchell",
    title: "Electronics Retailer",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image12.webp",
    text: "The best system we have implemented. It organizes warranties, scans serials instantly, and integrates with our website.",
  },
  {
    id: "3",
    name: "Brandon Howard",
    title: "Multi-Store Owner",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image13.webp",
    text: "We struggled to track high-value stock across branches. Now, we have real-time serial tracking. Very user-friendly.",
  },
  {
    id: "4",
    name: "Aisha Malik",
    title: "Franchise Owner",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image13.webp",
    text: "Stock errors and shrinkage have dropped significantly. Owners Inventory keeps our electronics outlets running efficiently.",
  },
];

export const ELECTRONICS_FAQS = [
  {
    id: "1",
    question: "What is an electronics POS system?",
    answer:
      "It is a specialized point of sale system designed to manage unique serial numbers, warranty details, customer information, and multi-store inventories from one centralized database.",
  },
  {
    id: "2",
    question: "Can this system track individual serial numbers?",
    answer:
      "Yes. You can scan or type unique serial numbers during receiving and checkout to ensure precise tracking and simplify future warranty claims.",
  },
  {
    id: "3",
    question: "Is it easy for store cashiers to learn?",
    answer:
      "Absolutely. The layout is intuitive, allowing cashiers to ring up sales, process card payments, and add warranties with minimal training.",
  },
  {
    id: "4",
    question: "Does it support online store integration?",
    answer:
      "Yes, the system synchronizes your local inventory directly with leading ecommerce channels so you can manage offline and online channels in one place.",
  },
  {
    id: "5",
    question: "Can I manage multiple electronics outlets?",
    answer:
      "Yes, Owners Inventory provides centralized control so you can monitor sales, transfers, and inventory levels across all store branches.",
  },
];

export const ELECTRONICS_TESTIMONIAL_DATA = {
  heading: "What Do Our Clients Say About Owners Inventory?",
  paragraph: "",
  secondHeading: "Inventory Management Made Easy",
  secondDescription:
    "Take full control over your electronics retail operations with a system built to secure high-value stock, manage supplier orders, and streamline multi-channel sales.",
  whyChooseTitle: "Why Choose Our System?",
  whyChooseDescription:
    "Our system provides real-time tracking, serial number management, and unified control over your electronics store.",
};

export const ELECTRONICS_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Simple Setup",
    description:
      "Install the system and import your product catalog quickly without interrupting daily operations. Cashiers can adapt within minutes.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Robust Performance",
    description:
      "Process transactions and scan barcodes quickly during peak hours. Built to maintain high speed and reliability.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Precise Inventory",
    description:
      "Ensure all electronic devices are recorded with serials, giving you a clear view of current stock, sales, and returns.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Advanced Analytics",
    description:
      "Access custom reports showing brand-wise sales, itemized profits, and customer purchase trends to optimize stock spend.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Scalable Infrastructure",
    description:
      "Whether you run one local electronics boutique or a national franchise, the platform grows with your store count.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Secured Access Control",
    description:
      "Restrict sensitive cashier actions (voids, custom discounts, return approvals) with strict manager permission overrides.",
    icon: "testWhychoseIcon6",
  },
  {
    id: "7",
    title: "Seamless Integrations",
    description:
      "Works with barcode scanners, label printers, online stores, accounting tools, and leading payment processors.",
    icon: "testWhychoseIcon7",
  },
];

export const ELECTRONICS_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Our point of sale system integrates with accounting tools, ecommerce platforms, payment providers, and customer databases to reduce manual entry and save time.",
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
