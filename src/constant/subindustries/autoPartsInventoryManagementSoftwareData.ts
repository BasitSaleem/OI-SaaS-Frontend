import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Auto Parts Inventory Management — UnifiedPlatform Section ─────────────────
export const AUTO_PARTS_INVENTORY_UNIFIED_HEADING =
  "Challenges Auto Parts Businesses Face in Managing Inventory";

export const AUTO_PARTS_INVENTORY_UNIFIED_PARAGRAPH =
  "Most auto parts businesses deal with complex inventories that contain different vehicle parts, work with different suppliers, and operate across multiple locations. This makes it difficult to maintain consistent operational efficiency.";

export const AUTO_PARTS_INVENTORY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Managing Part Variations",
    description:
      "Auto parts shops contain various vehicle parts with different brands, models, and years. Without an organized inventory system, it becomes difficult to maintain accuracy, efficiency, and consistent operations.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Tracking Stock Levels",
    description:
      "Manual inventory tracking makes it difficult to know the exact inventory levels and parts in stock. This results in overstocking or shortages of automotive parts, affecting daily operations and reducing overall business efficiency.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Parts Compatibility Issue",
    description:
      "Selling incorrect car parts due to compatibility confusion leads to returns and wasted time. Without clear data, staff struggle to identify which parts match specific vehicle and repair requirements. This leads to dissatisfied customers and damaged brand reputation.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Supplier Order Delays",
    description:
      "Managing multiple suppliers slows down the purchase process. Supplier records are crucial to make purchase decisions. Without proper performance reports, delays occur in ordering and receiving vehicle parts, which disrupts workflows and impacts the service timelines.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Handling Bulk Orders",
    description:
      "Auto shops and garages often order parts in bulk, and without inventory management software, processing these orders becomes slow. This results in errors and negatively affects delivery accuracy.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Multi-location Inventory Check",
    description:
      "Automotive businesses with warehouses and multiple stores lack real-time visibility of inventory. This leads to mismatched records, delays in delivering orders, and ineffective management across locations.",
  },
];

export const AUTO_PARTS_INVENTORY_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Centralized Inventory Tracking",
    description:
      "Our inventory monitoring system tracks all auto parts in stock to avoid misplacement. It provides visibility across warehouses and shop inventory without relying on manual processes, which reduces human errors like miscalculations.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Easy Parts Compatibility ",
    description:
      "Structured product data helps staff identify the right parts for vehicles. This ensures accurate part selection for repair and fulfillment of customer orders. This speeds up selling processes and improves accuracy.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Automated Purchase Orders",
    description:
      "The system helps automate purchase workflows by generating orders based on low stock levels, ensuring timely restocking without delays or manual tracking.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Real-time Stock Updates",
    description:
      "The system updates your automotive inventory in real time with every transaction, return, or adjustment. This improves accuracy. Its real-time update feature helps automotive businesses monitor inventory levels without confusion.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Streamlined Order Management",
    description:
      "Our inventory management software processes and manages every order efficiently. Every order is accurately tracked, including both retail and wholesale. It ensures faster fulfillment to enhance customer satisfaction.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Smart Business Reporting",
    description:
      "Owner's Inventory provides detailed reports and insights into stock movements, sales trends, and supplier performance. It ensures better decision-making for future orders while keeping inventory filled with in-demand items.",
  },
];

export const AUTO_PARTS_INVENTORY_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel Sales Integration for Auto Parts Business",
    description:
      "Auto parts businesses manage sales across different channels. The auto parts management software provides an integrated single system where every activity is recorded in one place, ensuring accurate inventory tracking. It integrates sales, bulk workshop orders, and external sales channels into a single workflow.",
    subDescription:
      "This helps businesses manage processes automatically, reducing the reliance on manual processes.",
    imageSrc:
      "/assets/industries-pages/auto-parts-inventory-management-software/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/inventory-management",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Sales Counter",
        listdescription:
          "Every sale in the POS is processed accurately by selecting the required automotive parts. The system updates the inventory after completing a transaction. It provides accurate counting of stock levels with each stock adjustment, which promotes accurate reporting and prevents miscalculations.",
      },
      {
        listheading: "Order Synchronization ",
        listdescription:
          "Bulk order requests or orders received from external channels are entered as structured orders within the system. It verifies parts in stock, allocates quantities, and records transactions. This ensures orders are processed without affecting inventory accuracy or creating stock conflicts.",
        listSubDescription:
          "The system captures each order, checks availability, and updates stock while reducing duplications and ensuring consistent inventory records.",
      },
      {
        listheading: "Centralized Sales Dashboard",
        listdescription:
          "All store activities are recorded in one system. The dashboard makes it easy to track all updates related to inventory management and other store operations. This creates a unified view that improves visibility.",
        listSubDescription:
          "Automotive businesses gain complete insights into operations and workflows without switching systems or relying on disconnected data sources.",
      },
    ],
  },
  {
    id: "2",
    title: "Analytics and Reporting",
    description:
      "Owners Inventory provides detailed analytics reports for auto parts stores. These reports include auto parts performance, stock movement, and demand. It highlights slow-moving parts, identifies frequently sold vehicle components, and supports better restocking decisions. With accurate insights, auto parts store owners improve overall business efficiency.",
    imageSrc:
      "/assets/industries-pages/auto-parts-inventory-management-software/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const AUTO_PARTS_INVENTORY_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Detailed Parts Catalog",
    description:
      "With detailed parts catalogs, it organizes vehicle parts by specifications, categories, and compatibility information. This makes it easy to provide the right product to the customer.",
    imageSrc:
      "/assets/industries-pages/auto-parts-inventory-management-software/key-features-section/key-features-card1.webp",
  },
  {
    id: 2,
    title: "Barcode Inventory Tracking",
    description:
      "It uses barcode scanning to track items accurately, reducing operational errors and data inconsistencies. The system promotes stock visibility to keep store owners aware.",
    imageSrc:
      "/assets/industries-pages/auto-parts-inventory-management-software/key-features-section/key-features-card2.webp",
  },
  {
    id: 3,
    title: "Supplier Purchase Management",
    description:
      "The software tracks supplier data and order details. The insights, such as delivery time, stock quality, and item prices, help owners compare suppliers and choose the right ones for future partnerships.",
    imageSrc:
      "/assets/industries-pages/auto-parts-inventory-management-software/key-features-section/key-features-card3.webp",
  },
  {
    id: 4,
    title: "Stock Adjustment Control",
    description:
      "It easily adjusts stock counts during returns, inspections, and transfers, which ensures your inventory levels remain accurate. It effectively manages stock in case of in-store or online purchases.",
    imageSrc:
      "/assets/industries-pages/auto-parts-inventory-management-software/key-features-section/key-features-card4.webp",
  },
  {
    id: 5,
    title: "Multi-channel Order Monitoring",
    description:
      "Owners Inventory can keep a precise stock record of multiple auto stores in different locations. It ensures efficient inventory management and updates across your auto parts business.",
    imageSrc:
      "/assets/industries-pages/auto-parts-inventory-management-software/key-features-section/key-features-card5.webp",
  },
  {
    id: 6,
    title: "Customer Order Management",
    description:
      "The automotive inventory management software maintains data on customer purchases, returns, and buying behavior, which helps businesses improve their service and build long-term relationships with customers.",
    imageSrc:
      "/assets/industries-pages/auto-parts-inventory-management-software/key-features-section/key-features-card6.webp",
  },
];

export const AUTO_PARTS_INVENTORY_WORKFLOW_DATA = {
  heading: "Workflow to Streamline Inventory in an Auto Parts Business",
  paragraph:
    "Our stock control system connects purchasing, sales, inventory, and reporting with a structured workflow. It helps auto parts businesses reduce delays and maintain complete operational control.",
  steps: [
    {
      number: 1,
      title: "Managing Purchase Orders",
      description:
        "The system creates purchase orders based on demand, supplier schedules, and low stock triggers. It helps order parts efficiently, tracks incoming shipments, and ensures that the right automotive parts are received on time without manual follow-ups or missing restocking cycles.",
    },
    {
      number: 2,
      title: "Organizing Inventory",
      description:
        "After items are received, they are categorized within the inventory system. The system organizes them based on part name, compatibility, functionality, and price. This structured storage improves inventory tracking while ensuring correct shelf placement and easy part locating. Correct categorization streamlines daily operations.",
    },
    {
      number: 3,
      title: "Real-time Updates",
      description:
        "With a real-time dashboard, it provides updates relevant to inventory management, stock levels, sales, returns, and delivery. This eliminates dependency on manual reports. It provides complete visibility of parts in stock, helping owners avoid stockouts and operational confusion.",
    },
    {
      number: 4,
      title: "Processing Sales and Repair Orders",
      description:
        "The system handles bulk requests, retail transactions, and repair orders within a single workflow. Each order is processed with accurate part selection, ensuring compatibility. This improves efficiency in repair shops and ensures faster delivery for customers.",
    },
    {
      number: 5,
      title: "Reporting and Inventory Optimization",
      description:
        "Our inventory tracking software generates detailed reports of store activities. These reports are based on stock movements, sales trends, supplier performance, and operational workflows. It makes it easy for automotive businesses to track demand patterns and low-stock items while optimizing purchase decisions. This ensures long-term efficiency and better control over automotive inventory.",
    },
  ],
};

export const AUTO_PARTS_INVENTORY_TESTIMONIALS = [
  {
    id: "1",
    name: "Caden Reed",
    title: "Auto Parts Store Owner",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image46.webp",
    text: "We used to lose track between our shop and the warehouse all the time. Since switching to Owner’s Inventory, everything is organized and easy to find. It has made our daily operations smoother.",
  },
  {
    id: "2",
    name: "Easton Morris",
    title: "Auto Spare Parts Dealer",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image47.webp",
    text: "What I like most is how simple it is to keep track of inventory without spreadsheets. I can quickly check what's available and make decisions without second-guessing.",
  },
  {
    id: "3",
    name: "Hannah Morris",
    title: "Automotive Parts Shop Owner",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image46.webp",
    text: "Their system has helped us stay more consistent and manage bulk orders effectively during busy weeks. Truly amazing and reliable inventory management software.",
  },
];

export const AUTO_PARTS_INVENTORY_FAQS = [
  {
    id: "1",
    question: "How long does it take to set up the system?",
    answer:
      "The setup of the Owners Inventory is quite simple because of its navigation and easy-to-understand features. You can set up your automotive inventory quickly in the POS and start organizing data.",
  },
  {
    id: "2",
    question: "Can I migrate my existing inventory data into the system?",
    answer:
      "Yes, Owners Inventory allows you to import existing data using Excel or CSV files. This helps you transfer data without manual entry.",
  },
  {
    id: "3",
    question: "How does the system handle damaged or returned parts?",
    answer:
      "You can maintain records of returns, defective items, and adjustments separately, ensuring inventory accuracy while keeping proper reports for audits or supplier communication.",
  },
  {
    id: "4",
    question: "How does it improve overall business efficiency?",
    answer:
      "The system automates inventory tracking, order processing, and reporting. It provides a unified dashboard to view store activities without switching systems. Owners Inventory reduces manual work, minimizes errors, and streamlines operations while enhancing business efficiency.",
  },
  {
    id: "5",
    question: "Is the software suitable for large auto parts businesses?",
    answer:
      "Yes, our software is designed to handle large inventories of auto parts stores. It efficiently manages items, orders, sales, and returns, which makes it best for large automotive stores.",
  },
];

export const AUTO_PARTS_INVENTORY_KEY_FEATURES = [
  {
    id: "autoparts-billing",
    title: "Auto Parts Store Billing",
    description:
      "Speed up your store sales with integrated billing and custom part number entry for a smoother customer experience.",
    imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
  },
  {
    id: "autoparts-stock-control",
    title: "Real-Time Parts Stock",
    description:
      "Know exactly what's in stock. Every part sold is instantly deducted from your inventory.",
    imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
  },
  {
    id: "autoparts-vendor-mgmt",
    title: "Manufacturer & Supplier Management",
    description:
      "Keep track of all your auto parts manufacturers, manage purchase orders, and monitor shipment statuses effortlessly.",
    imageSrc:
      "/assets/features-page/featurescard-banners/purchases-banner.webp",
  },
  {
    id: "autoparts-variants",
    title: "Make, Model & Year Tracking",
    description:
      "Manage different vehicle makes, models, and part variants in one easy-to-navigate catalog.",
    imageSrc:
      "/assets/features-page/featurescard-banners/inventory-banner.webp",
  },
  {
    id: "autoparts-loyalty",
    title: "Client & Loyalty Management",
    description:
      "Build relationships with your auto parts clients using integrated CRM tools to track their preferences and order history.",
    imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
  },
  {
    id: "autoparts-finances",
    title: "Financial Reporting",
    description:
      "Monitor your store's financial health with detailed reports on sales, deposits, and operating expenses.",
    imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
  },
  {
    id: "autoparts-ecommerce",
    title: "Online Auto Parts Store Integration",
    description:
      "Sync your physical store with your online auto parts store to manage all inventory and orders in one place.",
    imageSrc:
      "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
  },
];

export const AUTO_PARTS_INVENTORY_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Owners Inventory?",
  paragraph: "",
  secondHeading: "Run Your Retail Store With Precision",
  secondDescription:
    "Stay in control of inventory, sales and operations with a system designed for retail businesses. Simplify and improve accuracy.",
  whyChooseTitle: "Why Choose Our Inventory Management Software?",
  whyChooseDescription:
    "Owners Inventory is designed to support automotive store operations. It helps them manage complex inventory with different auto part variants, streamline workflows, and improve operational performance.",
};

export const AUTO_PARTS_INVENTORY_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Streamlined Operations",
    description:
      "Owners Inventory connects your shop, warehouses, and online channels, giving you a single platform to organize stocks while improving workflows.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Real-time Stock Control",
    description:
      "It helps you monitor auto parts. The system sends alerts for low stock and automates replenishment, ensuring the availability of essential vehicle parts.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Effective Management",
    description:
      "It helps you generate purchase orders based on customer demands and trends. It ensures that automotive parts are stocked and delivered without delays.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Actionable Insights",
    description:
      "Owners Inventory helps automotive store owners make the right purchase decisions for restocking vehicle parts and plan inventory based on real-time data.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Flexible Platform",
    description:
      "Our software adapts to growing business needs. It manages multiple outlets, syncs stocks, and enhances store growth, making it a scalable platform.",
    icon: "testWhychoseIcon5",
  },
  // {
  //     id: "6",
  //     title: "Safe Access",
  //     description: "The clothing store staff can only see what they need to see because of user roles and permissions. This keeps the business information safe.",
  //     icon: "testWhychoseIcon6",
  // },
  // {
  //     id: "7",
  //     title: "Integration and Addons",
  //     description: "Integrates with accounting applications, e-commerce applications, barcodes, and online payment gateways. Loyalty programs, SMS notifications, multi-branch management, and supplier tracking are some of the add-ons that facilitate easy expansion of the business.",
  //     icon: "testWhychoseIcon7",
  // },
];

export const AUTO_PARTS_INVENTORY_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "It integrates with essential business tools such as CRM, accounting tools, barcode systems, and payment gateways. It creates a powerful connected system that improves efficiency. These integrations simplify daily operations and reduce duplicate work. With these tools connected in one system, businesses can manage inventory, sales, and financial data.",
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
