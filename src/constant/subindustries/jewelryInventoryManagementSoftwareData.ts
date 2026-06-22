import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Jewelry Inventory Management — UnifiedPlatform Section ──────────────────────────────
export const JEWELRY_INVENTORY_UNIFIED_HEADING =
  "Challenges Faced by Jewelry Stores Today";

export const JEWELRY_INVENTORY_UNIFIED_PARAGRAPH =
  "Items in jewelry stores require precise tracking to ensure everything is organized. Without an efficient Point of Sale system, it becomes difficult to keep stock records, which affects revenue negatively.";

export const JEWELRY_INVENTORY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "High-value Item Misplacement",
    description:
      "High-value items such as gold, diamonds, and rare gemstones are always at risk. Manual logging increases errors. Each asset should be tracked to improve security and prevent loss.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Complex Vendor Tracking",
    description:
      "Jewelry stores often sell on consignment or source from multiple manufacturers, which requires accurate syncing of purchase orders and vendor stocks. It makes it difficult for stores to avoid double-selling and maintain accurate commissions.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Seasonal Sales Surges",
    description:
      "Different seasonal events create spikes in demand. For example, during wedding seasons and festivals, without proper forecasting, jewelry stores can run out of best-selling items. ",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Warranty and Certification Management",
    description:
      "Every jewelry piece must have accurate certification and warranty information. This is crucial to gain customer trust. Storing official paperwork is necessary to sell items with authenticity for every bracelet and ring.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Multi-branch Coordination",
    description:
      "Stores with multiple branches struggle to keep stock details synchronized. Without real-time inventory updates across branches, stock availability reports are never accurate, which results in duplicate orders.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Tracking Custom Orders",
    description:
      "Customized rings, necklaces, and jewelry sets require precise tracking to ensure the end product matches the exact customer requirements. Lack of recorded specifications, delivery dates, and payment methods causes inaccurate fulfillment. It negatively affects customer experience.",
  },
];

export const JEWELRY_INVENTORY_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-time Inventory Tracking",
    description:
      "Owners Inventory software provides real-time inventory tracking features, keeping store owners updated about stock levels and transactions, reducing the need for manual counts and human errors in reports.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Automated Purchase Orders",
    description:
      "It allows you to generate and track purchase orders. It tracks vendor performance, including delivery time, stock quality, and pricing, which helps you make better order decisions for future purchases.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Product and Variant Management",
    description:
      "The system manages jewelry by type, price, size, and style, making it easy for staff to find items and speed up selling procedures without making customers wait. It allows you to adjust stock and categorize new arrivals simply, without confusion.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Custom Order Module",
    description:
      "You can track orders with all specifications, such as delivery deadlines and partial payments. The accurate tracking helps maintain accurate records of custom orders, preventing errors and mishandling.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Multi-Channel Sync",
    description:
      "Our stock control system keeps all inventory synced across multiple channels. It helps store owners to avoid overselling and maintain accurate stock availability for every sales channel.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Reporting and Analytics",
    description:
      "Real-time reporting and analytics help you gain insights into best-selling items, seasonal trends, and profitability. Owners can adjust pricing and procurement strategies based on data-driven reports.",
  },
];

export const JEWELRY_INVENTORY_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel and Sales Integration",
    description:
      "Our AI-powered inventory software helps jewelry stores manage sales across physical counters, custom orders, and digital channels. It ensures every order and sale updates the inventory accurately. The software minimizes manual errors in handling multiple orders from different platforms. It makes sure that accurate stock levels are shown on the dashboard for better visibility.",
    imageSrc:
      "/assets/industries-pages/jewelry-inventory-management-software/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/inventory-management",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Sales Counter",
        listdescription:
          "The POS sales counter helps customers compare designs, metals, and pricing before purchasing. It provides quick access to item details, checks availability, and ensures smooth billing while helping staff provide accurate information to customers about products.",
        listSubDescription:
          "This improves customer satisfaction. Our inventory automation software sends immediate stock updates after every purchase to ensure accurate counting of jewelry items available in inventory.",
      },
      {
        listheading: "Online and Wholesale Integration",
        listdescription:
          "The system records precise order details separately for wholesale dealers, online buyers, and contractors. It efficiently handles bulk and custom orders for events or online sales. With insights into stock availability, it ensures correct order fulfillment.",
        listSubDescription:
          "It minimizes the confusion between showroom and external orders, making daily operations easy to perform.",
      },
      {
        listheading: "Unified Dashboard",
        listdescription:
          "Owners Inventory provides a single multi-channel dashboard. The dashboard allows store owners to switch between channels, helping monitor showroom sales, product performance, bulk orders, consignments, and inventory updates.",
        listSubDescription:
          "You can check store activities from one place. The transparency helps you adjust inventory and identify which channels are driving revenue.",
      },
    ],
  },
  {
    id: "2",
    title: "Advanced Analytics and Reporting",
    description:
      "Our inventory tracking system handles expensive jewelry item management by providing real-time analytics reports. These reports highlight demand patterns for different items such as gold, diamonds, and silver jewelry. It keeps track of best-selling products and dead stock. The system helps store owners restock inventory based on buyer demand and modern trends. Accurate decision-making helps promote sales and business growth.",
    imageSrc:
      "/assets/industries-pages/jewelry-inventory-management-software/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const JEWELRY_INVENTORY_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Consignment and Vendor Tracking",
    description:
      "Jewelry consignments and vendor-delivered items are tracked separately. The system provides accurate details of each vendor and consignment. Ownership, commission percentages, and payment schedules are managed automatically, reducing miscommunication with suppliers and ensuring accurate stock and financial records.",
    imageSrc:
      "/assets/industries-pages/jewelry-inventory-management-software/key-features-section/key-features-card1.webp",
  },
  {
    id: 2,
    title: "Display Management",
    description:
      "Each product is categorized by type, size, price, and collection.  Our software ensures accurate placement in displays, allowing staff to quickly find items and maintain a well-organized showcase. This improves customer experience and boosts sales.",
    imageSrc:
      "/assets/industries-pages/jewelry-inventory-management-software/key-features-section/key-features-card2.webp",
  },
  {
    id: 3,
    title: "Stock Receiving and Inspection",
    description:
      "Jewelry items arriving from suppliers are logged immediately. Weights, certifications, and quality checks are recorded. The system updates inventory automatically, reducing manual errors and providing real-time visibility of stocks available for display or sale.",
    imageSrc:
      "/assets/industries-pages/jewelry-inventory-management-software/key-features-section/key-features-card3.webp",
  },
  {
    id: 4,
    title: "Custom Order and Repair Tracking",
    description:
      "The inventory control system records special orders or repair requests with all specifications, such as included engravings, gemstone selection, and delivery deadline. It tracks progress payments and order completion dates to maintain transparency. This keeps staff and customers updated with accurate order and repair details.",
    imageSrc:
      "/assets/industries-pages/jewelry-inventory-management-software/key-features-section/key-features-card4.webp",
  },
  // {
  //     id: 5,
  //     title: "Expense and Cash Flow Tracking",
  //     description:
  //         "You can see what you spend every day and track money coming in and going out. This helps you control your jewelry business finances.",
  //     imageSrc: "/assets/industries-pages/jewelry-inventory-management-software/key-features-section/key-features-card5.webp",
  // },
  {
    id: 5,
    title: "Analytics and Decision Support",
    description:
      "Owners Inventory automatically analyzes daily sales, stock movements, product trends, and slow-moving items. It provides analytics reports to keep store owners updated. These reports help them make decisions based on actual data that proves beneficial for increasing sales and growing their business. It ensures that your store runs without any guesswork.",
    imageSrc:
      "/assets/industries-pages/jewelry-inventory-management-software/key-features-section/key-features-card5.webp",
  },
];

export const JEWELRY_INVENTORY_WORKFLOW_DATA = {
  heading: "jewelry Store Inventory Workflow of Owners Inventory",
  paragraph:
    "Our software streamlines jewelry inventory management by precisely tracking every item. The high-value jewelry in stores is managed safely to prevent issues like misplacement. This ensures accurate stock management. It also simplifies custom order management and optimizes sales performance.",
  steps: [
    {
      number: 1,
      title: "Stock Intake and Item Registration",
      description:
        "After stock intake, every jewelry item is registered according to its metal type, price, and design. They are assigned a unique identity for tracking. This process ensures that each item entering the store is properly documented and monitored consistently.",
    },
    {
      number: 2,
      title: "Display Management",
      description:
        "Jewelry is categorized and showcased in its specific storage areas with clear attributes like necklaces, rings, and earrings. The system maintains visibility for each item to help staff find them quickly. It ensures stock availability for customer interactions.",
    },
    {
      number: 3,
      title: "Sales Processing",
      description:
        "Owners Inventory helps process orders according to customer requirements. When a jewelry product is sold or returned, the system updates stock instantly. It prevents order mismatch and maintains consistency between displayed items and system data.",
    },
    {
      number: 4,
      title: "Custom Orders and Stock Allocation",
      description:
        "Custom orders with special engravings or designs are recoded separately while linking the required material. The system ensures that each custom item is handled exactly as the customers demand. It manages these orders without affecting available inventory and prevents stock confusion.",
    },
    {
      number: 5,
      title: "Inventory Reconciliation",
      description:
        "Our inventory planning software records stock movements and sales activity and provides accurate reports. This helps identify in-demand items, slow-moving products, and trending jewelry pieces. It helps align restocking with customer demand and seasonal trends. This boosts sales and increases revenue.",
    },
  ],
};

export const JEWELRY_INVENTORY_TESTIMONIALS = [
  {
    id: "1",
    name: "Brielle Perry",
    title: "Jewelry Store Owner",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image39.webp",
    text: "Tracking gold and diamond inventory used to be stressful. Now everything is clear, and we always know exactly what's in the stock.",
  },
  {
    id: "2",
    name: "Ryder Coleman",
    title: "Fine Jewelry Shop Owner",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image40.webp",
    text: "Managing custom orders has become much easier because of recorded details. Every order is now delivered on time.",
  },
  {
    id: "3",
    name: "Piper Russell",
    title: "Jewelry & Accessories Store Owner",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image40.webp",
    text: "The system gave us a clear view of sales and stocks. It helps us make better purchasing decisions.",
  },
];

export const JEWELRY_INVENTORY_FAQS = [
  {
    id: "1",
    question: "How can jewelry inventory management software improve accuracy?",
    answer:
      "The system automatically updates inventory after every sale, return, or adjustment. It ensures that store records always match actual inventory without manual counting.",
  },
  {
    id: "2",
    question: "Is it suitable for small jewelry stores?",
    answer:
      "Yes, Owners Inventory is suitable for both large organizations and small shops. It provides efficient features that keep your store organized and automate routine tasks to save time.",
  },
  {
    id: "3",
    question: "Can I track inventory across multiple store branches?",
    answer:
      "Yes, you can easily track every jewelry item in inventory across multiple store locations with a centralized dashboard. It provides visibility and allows you to monitor stocks available in different branches.",
  },
  {
    id: "4",
    question: "How does it help with purchase and supplier management?",
    answer:
      "The system tracks purchase orders, supplier details, and inventory flow, which helps create an accurate record of order fulfillment, returns, and repairs. It allows you to view supplier delivery times, stock quality, and pricing.",
  },
  {
    id: "5",
    question: "How does it manage custom orders?",
    answer:
      "Owners Inventory manages custom orders effectively. It records all specifications, requirements, delivery dates, and payment details. It ensures that the order is completed accurately according to the customer's demand and delivered on time.",
  },
];

export const JEWELRY_INVENTORY_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Owners Inventory?",
  paragraph: "", // Optional paragraph
  secondHeading: "Start Efficiently Managing Your Jewelry Business",
  secondDescription:
    "Manual tracking, stock inconsistencies, and operational delays can limit your growth. Our structured jewelry business software helps you manage inventory accurately, handle orders efficiently, and maintain complete visibility across your jewelry business.",
  whyChooseTitle: "Why Choose Our Inventory Management Software?",
  whyChooseDescription:
    "Owners Inventory is more than just a basic management tool. The system is designed to support precision, control, and flexibility, which helps jewelry store owners manage complex operations without manual effort.",
};

export const JEWELRY_INVENTORY_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Built for High-Value Inventory",
    description:
      "Every item in inventory is tracked to ensure accurate updates of the stock levels. The software keeps a record of every purchase detail to reduce the risk of loss.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Support Custom and Repair Workflows",
    description:
      "The system ensures that every personalized order and repair request is documented correctly, which helps complete customer orders without missing any special requirements.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Handles Multi-Source Inventory",
    description:
      "The stock from in-house production, suppliers, and consignments is managed in one place with separate reports. It makes it easy to count the items in inventory from different sources.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Adapts to Store Growth",
    description:
      "The software can adapt to your growing business needs without requiring major adjustments. It does not disrupt existing operations or data while helping your business expand freely.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Ensures Controlled Access",
    description:
      "Our software provides full control to the owners of jewelry stores. They can assign different roles to employees, limit access, maintain security, and keep an eye on the store’s activity while ensuring smooth daily operations.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Integration and Addons",
    description:
      "Integrates with accounting applications, eCommerce applications, barcodes, and online payment gateways. Loyalty programs, SMS notifications, multi-branch management, and supplier tracking are some of the add-ons that facilitate easy expansion of the business.",
    icon: "testWhychoseIcon6",
  },
];

export const JEWELRY_INVENTORY_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Our jewelry inventory management software connects tools and systems to make operations efficient. The software integrates with CRM, ERP, accounting tools, barcode systems, and different payment gateways, which ensure smooth business processes. These integrations reduce manual effort and maintain consistency between inventory, billing, and sales tasks. It keeps records error-free without duplication or confusion.",
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
