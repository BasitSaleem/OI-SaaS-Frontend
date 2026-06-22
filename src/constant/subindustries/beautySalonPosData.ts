import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Beauty Salon POS — UnifiedPlatform Section ──────────────────────────────
export const BEAUTY_SALON_UNIFIED_HEADING =
  "Challenges that Modern Beauty Salons and Spas Face";

export const BEAUTY_SALON_UNIFIED_PARAGRAPH =
  "Without an efficient POS system for beauty salons, businesses face challenges in managing services, product sales, and checkouts, ultimately making daily operations disorganized and affecting overall business performance.";

export const BEAUTY_SALON_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Time-Consuming Payment Processing",
    description:
      "During busy time periods, checkout counters become congested if the payment process becomes lengthy and erroneous. As a result, staff members have to process all payments manually, causing delays.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Booking Gaps",
    description:
      "Without proper appointment scheduling and sales alignment, salons struggle to manage service flows and transactions at the same time. This creates operational gaps and reduces efficiency.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Mixed Sales Handling",
    description:
      "Beauty salons often sell products along with their services, including retail sales, which requires precise tracking. Lack of point-of-sale software leads to confusion and mismanaged sales records.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Stock Inaccuracies",
    description:
      "Salons cannot monitor product usage properly without integrated inventory tracking, which results in overuse of products and shortages of stock while affecting retail operations and supplier coordination.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Payment Methods Limitations ",
    description:
      "With several options available for payment, but with a POS that is not modern enough, the entire process becomes tough to handle. This results in inconvenience for customers.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Using Separate Tools",
    description:
      "When businesses use separate management tools instead of a single POS, it disrupts workflows. This increases manual work, errors, and makes it difficult to maintain operational consistency.",
  },
];

export const BEAUTY_SALON_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Seamless Transactions",
    description:
      "The salon POS provides efficient checkout features, which means quick and easy transaction processing. It ensures smooth payment handling, allowing staff to serve more customers efficiently.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Easy Sales Monitoring",
    description:
      "The POS system monitors all types of sales data made, both from products and services. It allows you to keep track of all your salon activities effectively.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Connected Booking Flow",
    description:
      "The system supports structured booking alignment with sales. It maintains better service flow. The POS ensures that each client visit connects properly with billing and transaction records.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Stock Update Accuracy",
    description:
      "The Owners Inventory module automatically updates stocks as goods are sold out. This helps beauty salons maintain accurate stock levels while reducing the chances of shortages and overuse of beauty products.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Flexible Payment Handling",
    description:
      "It supports multiple payment methods, allowing salons to handle transactions smoothly and providing customers with a better service experience. It makes sure the entire transaction process is quick and secure.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Efficient Daily Processes",
    description:
      "The software makes it easy for users to run the salon’s workflow process through one system as it integrates all essential management modules. This helps manage operations in an organized way without relying on multiple systems or tools.",
  },
];

export const BEAUTY_SALON_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel Sales and Integration for Salon and Spas",
    description:
      "Owners Inventory connects in-house and digital sales into one unified system flow. Transactions from both the physical checkout counter and external booking sources are counted in real time. This ensures consistent payment tracking and accurate sales records across all salon operations without duplication or manual listings. ",
    imageSrc: "/assets/industries-pages/beauty-salon-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Counter Sales",
        listdescription:
          "At the salon counter, POS features let you handle services and product sales quickly and accurately. Each checkout is processed with instant billing and transaction recording.",
        listSubDescription:
          "This helps salon staff manage peak-hour customers efficiently while keeping daily sales data precisely documented and organized.",
      },
      {
        listheading: "Digital Order Sync",
        listdescription:
          "When salon services or products are booked from external channels, the system updates records instantly. The payments and orders are recorded in real-time to ensure that the salon's POS reflects accurate inventory and sales data without manual errors or delays.",
      },
      {
        listheading: "Unified Dashboard View",
        listdescription:
          "All salon management activities are displayed in one centralized dashboard. From checkout to transactions, everything is visible in real time.",
        listSubDescription:
          "The dashboard helps salon owners monitor operations, track performance, and manage daily business workflows without needing to switch between multiple tools or systems.",
      },
    ],
  },
  {
    id: "2",
    title: "Better Analytics and Reporting",
    description:
      "The system organizes sales and transaction data into clear reports. Instead of displaying raw numbers, it highlights patterns in services and product sales, helping salon owners understand what drives revenue and where improvements are needed to enhance overall business performance.",
    imageSrc: "/assets/industries-pages/beauty-salon-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const BEAUTY_SALON_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Product Filter Module",
    description:
      "The POS categorizes products into different groups or allows employees to filter items either by their names or categories. This ensures smooth checkout processing without any lags.",
    imageSrc:
      "/assets/industries-pages/beauty-salon-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Loyalty Points Management",
    description:
      "The system tracks the accumulated loyalty points per client and applies them during checkouts without requiring users to input data manually.",
    imageSrc:
      "/assets/industries-pages/beauty-salon-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Flexible Discounts",
    description:
      "Service bundles, promotional offers, and price adjustments are handled inside the same billing screen, reducing the need to calculate anything separately before the client pays.",
    imageSrc:
      "/assets/industries-pages/beauty-salon-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Out of Stock Alerts",
    description:
      "When any retail product runs out of stock, the system sends automatic alerts. It helps staff to be aware of what is available in the inventory before making any recommendations or providing a service.",
    imageSrc:
      "/assets/industries-pages/beauty-salon-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Split Payments",
    description:
      "Clients paying with more than one method are processed within a single transaction. The system processes cash, cards, and mobile wallets correctly without the need to input them separately.",
    imageSrc:
      "/assets/industries-pages/beauty-salon-pos/key-features-section/key-feature-card5.webp",
  },
];

export const BEAUTY_SALON_WORKFLOW_DATA = {
  heading: "Workflow of the Owners Inventory Salon POS System",
  paragraph:
    "The salon POS system adopts a well-structured process through which checkouts, billing, and payments are made in real time using its powerful AI features.  It ensures that all sales transactions are made while synchronizing all inventory transactions throughout the process.",
  steps: [
    {
      number: 1,
      title: "Sales Entry Point",
      description:
        "The process begins at the POS machine, where any chosen product or service has been entered into the system. It triggers live transaction processing that ensures accurate recording of sales before billing.",
    },
    {
      number: 2,
      title: "Bill Generation",
      description:
        "The system generates a bill following the addition of products or services. It precisely calculates the cost of services or products while generating the bill that will appear during the checkout process. This ensures the customer receives precise billing information before payment is initiated.",
    },
    {
      number: 3,
      title: "Payment Completion",
      description:
        "Checkout involves processing the payment through different means, such as cash, debit card, or credit card. Each transaction is recorded instantly, which helps maintain financial records accurately and update the salon's daily sales records.",
    },
    {
      number: 4,
      title: "Stock Adjustment",
      description:
        "After payment confirmation, the system updates the inventory automatically. Every product that is used or sold is deducted from inventory in real time. This ensures that stock levels remain accurate, aligned with actual salon product usage. ",
    },
    {
      number: 5,
      title: "Reporting Summary Layer",
      description:
        "All completed transactions are compiled into structured reports within the beauty salon POS system. These insights help salon owners review sales performance, monitor revenue, and understand operational trends for better decision-making and control.",
    },
  ],
};

export const BEAUTY_SALON_TESTIMONIALS = [
  {
    id: "1",
    name: "Chloe Parker",
    title: "Beauty Salon Owner",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image14.webp",
    text: "We used to experience lag in the checkouts during busy days. However, since implementing their salon POS system, the billing process has improved tremendously, and every transaction is now done with proper recordkeeping.",
  },
  {
    id: "2",
    name: "Stella Allen",
    title: "Spa Owner",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image15.webp",
    text: "It has enabled us to be organized and streamlined all our operations into one place. The system also makes our payment tracking more efficient and accurate.",
  },
  {
    id: "3",
    name: "Dylan Foster",
    title: "Beauty & Wellness Center Owner​",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image14.webp",
    text: "Their salon POS software is user-friendly. Our team picked it up quickly, and now we are able to handle every salon management operation quickly.",
  },
];

export const BEAUTY_SALON_FAQS = [
  {
    id: "1",
    question:
      "Can the system handle both retail products and services separately?",
    answer:
      "Yes, the system allows salons to record services and product sales separately. It makes it easy to track performance for each category without mixing data.",
  },
  {
    id: "2",
    question: "Does the system support discount handling during billing?",
    answer:
      "Discounts can be applied during billing to help salons manage promotions, special offers, or customer-specific pricing without disrupting the transaction flow.",
  },
  {
    id: "3",
    question: "Can I track daily revenue without manual calculation?",
    answer:
      "The system automatically compiles daily sales, allowing salon owners to view revenue summaries without needing to calculate totals manually.",
  },
  {
    id: "4",
    question: "Is it possible to manage multiple counters in one salon?",
    answer:
      "Yes, the POS system can support multiple billing counters. It allows salons to handle more customers simultaneously without creating data inconsistencies.",
  },
  {
    id: "5",
    question: "Does the system require frequent maintenance or updates?",
    answer:
      "No, the system is designed to run smoothly without consistent manual maintenance. The software allows salon teams to focus on daily operations instead of system management.",
  },
];

export const BEAUTY_SALON_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say?",
  paragraph: "", // Optional paragraph
  secondHeading: "Prevent Delays in Beauty Salon Operations",
  secondDescription:
    "Use our salon POS system that keeps every transaction organized, speeds up checkout, and helps your team handle daily operations with better consistency and control.",
  whyChooseTitle: "Why Choose Owners Inventory Salon POS Software?",
  whyChooseDescription:
    "Owners Inventory is built for beauty salons that need reliable billing and smooth daily operations. The system helps manage critical inventory management tasks and recordkeeping while improving daily workflows.",
};

export const BEAUTY_SALON_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "User-Friendly Interface",
    description:
      "The system comes with a simple and user-friendly interface for salon employees to operate effectively without undergoing any intensive training sessions.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Independent Agreements",
    description:
      "Owners Inventory provides salons a flexible subscription model. You can subscribe anytime and cancel anytime based on your convenience and financial needs.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Dedicated Client Support",
    description:
      "Our support remains available in case of emergency guidance. We provide continuous support whenever any issue shows up during operations.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Disruption-Free Setup",
    description:
      "The software is easy to set up, as it allows salons to be fully operational within hours. It loads products quickly through bulk import, and teams can start processing transactions without technical delays.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Scales with Growth",
    description:
      "Our salon POS handles salons whether they operate from one location or scale expands to multiple. It can effectively handle increased service or product volume and more staff without complicated upgrades.",
    icon: "testWhychoseIcon5",
  },
];

export const BEAUTY_SALON_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Owners Inventory connects with the payment, accounting, and marketing tools your salon team already relies on. No switching between systems. No duplicate data entry. Just one connected workflow that keeps billing, client records, and financial reporting fully aligned.",
  tools: [
    {
      id: 1,
      name: "Shopify",
      image: "/assets/home-page-images/tools-section/shopify.svg",
    },
    {
      id: 2,
      name: "WooCommerce",
      image: "/assets/home-page-images/tools-section/woocomerce.svg",
    },
    {
      id: 3,
      name: "QuickBooks",
      image: "/assets/home-page-images/tools-section/quick-book.svg",
    },
    {
      id: 4,
      name: "Xero",
      image: "/assets/home-page-images/tools-section/xero.svg",
    },
    {
      id: 5,
      name: "Stripe",
      image: "/assets/home-page-images/tools-section/stripe.svg",
    },
  ],
};
