import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Warehouses POS — UnifiedPlatform Section ──────────────────────────
export const WAREHOUSES_UNIFIED_HEADING = "Challenges That Warehouse Owners Face Today";

export const WAREHOUSES_UNIFIED_PARAGRAPH = "Manual warehouse management introduces many operational challenges. Here are some of the most common problems that are encountered by warehouse owners and managers on a day-to-day basis.";

export const WAREHOUSES_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Inaccurate Inventory Tracking",
    description: "Thousands of products are stored in warehouses, and manual stock management can be problematic. If there is no inventory tracking system, there can be problems, such as discrepancies, loss of stock, and incorrect stock counts, which cause operational delays.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Delayed Order Processing",
    description: "Manual order processing delays picking, packing and dispatching. The delay in receiving customers' orders may affect delivery schedules and customer satisfaction.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Difficulty Managing Multiple Stock Locations",
    description:
      "Products are frequently stored on several shelves, racks, or multiple sections in large warehouses. With no centralized warehouse management system, employees waste time and struggle to locate products quickly.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Errors in Receiving and Dispatching",
    description:
      "Product receiving, picking, and shipping errors can lead to customer complaints, returns, and loss of money. Manual procedures mean higher risks of human error during the warehouse operations.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "Limited Visibility into Warehouse Operations",
    description:
      "If there isn't a way to monitor inventory activity, warehouse managers would not be able to know what is in motion, be it inventory or employees, or how well the operation is going in real time.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Lack of Real-Time Business Reporting",
    description: "Having accurate data is essential for warehouse owners in making informed decisions. Without the right reporting tools, businesses are hard-pressed to analyze stock movements, fast-selling items, order fulfillment rates and the operational efficiency.",
  },
];

export const WAREHOUSES_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-Time Inventory Management",
    description:
      "Stock levels in our warehouse is always updated in real-time, when products are received or transferred to and from the warehouse, when they are sold and dispatched. Real-time inventory tracking helps prevent stock shortages, overstocking, and inventory inaccuracies.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Faster Order Processing",
    description:
      "The system automates the order management process, making it easier to pick, pack, bill and dispatch orders. Staff can handle orders more quickly and efficiently, ensuring timely deliveries and customer satisfaction. ",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Multi-Location Stock Tracking",
    description:
      "Businesses can use our POS software to monitor stock across various parts of the warehouse, racks, and storage areas. Staff can easily find products, minimizing delays and enhancing efficiency.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Accurate Receiving and Dispatching",
    description:
      "Manual errors are minimized in receiving and shipping with barcode scanning and automated product verification. This helps to enhance order accuracy and reduce problems associated with returns.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Staff Performance Monitoring",
    description:
      "A centralized dashboard allows warehouse managers to track employee activities, tasks completed, and operational productivity. This helps improve accountability and warehouse performance.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Real-Time Reports and Insights",
    description: "It provides in-depth knowledge of what is moving in and out of stock, stock values, orders fulfilled, sales history, and performance of the warehouse. Real time data provides business owners with better and more accurate data to make informed decisions rather than estimate.",
  },
];

export const WAREHOUSES_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omnichannel Inventory and Warehouse Integration",
    description: "Owners Inventory syncs all aspects of warehouse operations. All inventory activity is updated in real-time on a single dashboard, from stock being ordered from suppliers, to moved between stores and dispatched to customers.",
    imageSrc: "/assets/industries-pages/warehouses-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "Inventory Receiving and Stock Entry",
        listdescription:
          "Products are automatically recorded as they arrive at the warehouse. Barcodes, SKUs, categories, batch numbers and storage locations can be used to add items. The system automatically updates the stock levels to minimize manual entry mistakes and stocks discrepancies.",
        listSubDescription: "No delays with paperwork when checking deliveries or updating quantities or tracking damaged or returned items at the warehouse."
      },
      {
        listheading: "Order Processing and Dispatch Management",
        listdescription:
          "All customer orders, wholesale shipments, and internal transfers can be handled from a single system. Warehouse employees can generate pick lists, check stock availability, and accurately process dispatches to minimize shipping errors.",
        listSubDescription: "The POS system automatically updates the stock whenever packed, moved or delivered."
      },
      {
        listheading: "Unified Multi-Location Warehouse Dashboard",
        listdescription:
          "All warehouse operations can be tracked from a single dashboard which includes stock transfers, order fulfilment, supplier deliveries, returns and inventory movements. Warehouse performance can be monitored across multiple storage sites without switching between systems, and the system can be accessed by the owners and managers.",
        listSubDescription: "This centralized approach can minimize confusion in the operational process and keep inventory accurate across all channels."
      },
    ],
  },
  {
    id: "2",
    title: "Analytics and Reporting",
    description:
      "The warehouse POS solution translates the warehouse activities into organized warehouse reports that display stock movement, fast-moving product, low stock alerts, order fulfillment rate, and inventory turnover.",
    subDescription: "Managers can determine which products need to be replenished, which products are overstocked, and what improvements can be made to the warehouse processes. This can minimize storage expenses, avert stockouts, and optimize overall performance.",
    imageSrc: "/assets/industries-pages/warehouses-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const WAREHOUSES_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Real-Time Inventory Tracking",
    description:
      "Product, raw material and stock quantities are automatically updated after each receiving, transfer, sale and dispatch. Real time inventory tracking helps warehouse managers to prevent stock shortage, overstocking, and stock discrepancies.",
    imageSrc:
      "/assets/industries-pages/warehouses-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Barcode Scanning Support",
    description:
      "The POS system supports the use of barcode scanning to speed the receiving, picking, packing and stock checking of products. Staff can complete warehouse tasks quickly and with minimal manual entry errors.",
    imageSrc:
      "/assets/industries-pages/warehouses-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Multi-Location Stock Management",
    description:
      "Multiple warehouses and stock sections can be tracked from a single point of view: stock level, transfers, and movement. The system offers 100% visibility of all the warehouse locations in real-time.",
    imageSrc:
      "/assets/industries-pages/warehouses-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Order Processing and Dispatch Management",
    description:
      "Orders can be received, packed, and processed on the POS system. The warehouse personnel can easily handle customer orders and minimize delays and shipping errors.",
    imageSrc:
      "/assets/industries-pages/warehouses-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Supplier and Purchase Order Management",
    description:
      "Warehouse managers can generate purchase orders, monitor supplier transactions, and receive stock from suppliers from a single platform. The system makes the procurement process easy and enhances the planning of replenishment of the stock.",
    imageSrc:
      "/assets/industries-pages/warehouses-pos/key-features-section/key-feature-card5.webp",
  },
   {
    id: 6,
    title: "Role-Based Employee Access",
    description:
      "The user-friendly warehouse POS system allows managers to assign role-based permissions to employees.  Business owners have complete inventory permissions, reporting access, and operational settings.",
    imageSrc:
      "/assets/industries-pages/warehouses-pos/key-features-section/key-feature-card6.webp",
  },
  {
    id: 7,
    title: "Mobile-Friendly Warehouse Interface",
    description:
      "The mobile optimised warehouse interface ensures managers and staff have access to inventory data, monitor stock levels, process orders, and manage the warehouse from anywhere. The easy-to-use mobile dashboard provides flexibility, accelerates decision making and ensures seamless warehouse management. ",
    imageSrc:
      "/assets/industries-pages/warehouses-pos/key-features-section/key-feature-card7.webp",
  },
  {
    id: 8,
    title: "Automated Stock Alerts",
    description:
      "The system automatically notifies managers when stock levels fall below minimum thresholds. This helps businesses reorder products on time and avoid operational disruptions.",
    imageSrc:
      "/assets/industries-pages/warehouses-pos/key-features-section/key-feature-card8.webp",
  },
  {
    id: 9,
    title: "Detailed Warehouse Reporting",
    description:
      "Track warehouse performance through comprehensive reporting, which offers valuable information on inventory movement, stock value, quickly moving items, order fulfillment and operational efficiency.",
    imageSrc:
      "/assets/industries-pages/warehouses-pos/key-features-section/key-feature-card9.webp",
  },
  {
    id: 10,
    title: "Centralized Business Management",
    description:
      "Control stock, suppliers, warehouse processes, employees and reporting all from a single point, to boost productivity and make warehouse management easier.",
    imageSrc:
      "/assets/industries-pages/warehouses-pos/key-features-section/key-feature-card10.webp",
  },
];

export const WAREHOUSES_WORKFLOW_DATA = {
  heading: "Workflow of Owners Inventory POS for Warehouse",
  paragraph:
    "We have an integrated warehouse POS which is designed to cater large inventories, rapid turnover, and precise order processing. The system ensures that the warehouse functions smoothly and efficiently.",
  steps: [
    {
      number: 1,
      title: "Add and Organize Warehouse Inventory",
      description:
        "SKUs, barcodes, product categories, supplier information, storage locations, and products, raw materials, spare parts, and packaged goods can all be added. Inventory can be organized in the warehouse by racks, shelves, or sections for easy access and inventory control.",
    },
    {
      number: 2,
      title: "Manage Incoming and Outgoing Stock",
      description:
        "All incoming deliveries and outgoing shipments are real-time recorded in the POS system. Stock levels can be updated automatically while receiving, transferring, dispatching or returning stock without the use of paper.",
    },
    {
      number: 3,
      title: "Process Orders and Bulk Shipments",
      description:
        "Customer order, wholesale shipments and bulk dispatches can be created and managed from one dashboard by the warehouse staff. The system eliminates picking and packing mistakes by automatically checking the quantities and stock availability.",
    },
    {
      number: 4,
      title: "Fast Barcode Scanning and Stock Lookup",
      description:
        "Barcode scanners enable employees to quickly search products, confirm inventory and process orders. This can help to improve warehouse efficiency and reduce delays during peak working times.",
    },
    {
      number: 5,
      title: "Secure Billing and Transaction Management",
      description:
        "The system provides features for invoice creation, payment monitoring, supplier interactions and customer accounts. All records are stored securely and readily available when necessary.",
    },
     {
      number: 6,
      title: "Monitor Inventory and Warehouse Performance",
      description:
        "The Warehouse Owner can get live data on stock movement, low inventory alerts, fast moving items, pending orders and daily operating reports. Automated stock evaluation helps prevent stockouts, overstocking, and order delays.",
    },
  ],
};

export const WAREHOUSES_TESTIMONIALS = [
  {
    id: "1",
    name: "Camden Foster",
    title: "Warehouse Manager",
    image:
      "/assets/industries-pages/industries-testimonial-images/boy-image61.webp",
    text: "Before using this system, we used to have mismatching inventory and late shipments, but with this system, our warehouse is now managed much more efficiently and organized.",
  },
  {
    id: "2",
    name: "Sloane Harrington",
    title: "Inventory Control Specialist",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image60.webp",
    text: "“We can now track every product movement in real time, which has greatly reduced stock errors and missing inventory.",
  },
  {
    id: "3",
    name: "Teagan Calloway",
    title: "Warehouse Operations Manager",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image61.webp",
    text: "Order processing is significantly faster now. Our staff can manage bulk shipments and dispatches without confusion.",
  },
  {
    id: "4",
    name: "Archer Stone",
    title: "Distribution Manager",
    image:
      "/assets/industries-pages/industries-testimonial-images/boy-image62.webp",
    text: "Installation was straightforward and our warehouse staff adapted to this system easily. Every day tracking of stock has become so much simpler.",
  },
  {
    id: "5",
    name: "Maddox Pierce",
    title: "Supply Chain Director",
    image:
      "/assets/industries-pages/industries-testimonial-images/boy-image63.webp",
    text: "We manage inventory across multiple storage locations, and this system keeps everything synchronized without extra manual work.",
  },
  {
    id: "6",
    name: "Waverly Stone",
    title: "Logistics Coordinator",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image62.webp",
    text: "Our receiving and stock checking has been much easier with the barcode scanning feature and operations are smoother each day.",
  },
  {
    id: "7",
    name: "Brynn Holloway",
    title: "Warehouse General Manager",
    image:
      "/assets/industries-pages/industries-testimonial-images/girl-image63.webp",
    text: "This warehouse POS system fits perfectly with the way we work. It is reliable, fast, and keeps our inventory accurate at all times.",
  },
];

export const WAREHOUSES_FAQS = [
  {
    id: "1",
    question:
      "Can the system track inventory in real time?",
    answer: "Yes, all stock movements are automatically recorded in real time, such as receiving, transfers, dispatches and returns updating the inventory automatically to keep the stock records accurate.",
  },
  {
    id: "2",
    question:
      "Does the system support barcode scanning?",
    answer: "Yes, the warehouse POS system allows you to use barcodes for quicker stock retrieval, inventory verification, incoming goods and order processing.",
  },
  {
    id: "3",
    question:
      "Can I manage multiple warehouse locations?",
    answer: "Yes, it is a multi-location warehouse management system. Owners and managers can track inventory, transfers, orders and warehouse performance in all their locations from one central dashboard.",
  },
  {
    id: "4",
    question: "How quickly can I set up the Owners Inventory for my warehouse?",
    answer: "Most warehouses will be up and running within hours. Product, SKU, supplier and stock categories can be imported in bulk so that teams can get started sooner.",
  },
  {
    id: "5",
    question:
      "Can different warehouse employees have different access levels?",
    answer: "Yes, warehouse workers, supervisors, accountants and managers can be given role-based permission, which helps them maintain security and control of the warehouse operations.",
  },
];

export const WAREHOUSES_KEY_FEATURES = [
  {
    id: "warehouses-billing",
    title: "Touchscreen Order & Billing",
    description:
      "Process customer orders quickly with customizable touchscreen menus and instant billing options.",
    imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
  },
  {
    id: "warehouses-stock-control",
    title: "Inventory and Stock Control",
    description:
      "Keep track of active product stock, SKU variants, and bundle packages. Avoid running out of best-sellers during high demand periods.",
    imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
  },
  {
    id: "warehouses-vendor-mgmt",
    title: "Distributor and Supplier Management",
    description:
      "Manage supplier brands, track purchase order costs, issue POs, and monitor delivery arrivals.",
    imageSrc:
      "/assets/features-page/featurescard-banners/purchases-banner.webp",
  },
  {
    id: "warehouses-variants",
    title: "SKU & Dimension Customization",
    description:
      "Configure product SKUs, dimensions, unit types, and categories as structured attributes attached to base product listings.",
    imageSrc:
      "/assets/features-page/featurescard-banners/inventory-banner.webp",
  },
  {
    id: "warehouses-loyalty",
    title: "Customer & Order Programs",
    description:
      "Streamline repeat orders with integrated customer accounts, order history, and targeted communication campaigns.",
    imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
  },
  {
    id: "warehouses-finances",
    title: "Shift Cash and Card Tracking",
    description:
      "Monitor order summaries, card processing, cash transactions, and shift handovers in real time.",
    imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
  },
  {
    id: "warehouses-ecommerce",
    title: "Online Ordering and Channel Sync",
    description:
      "Integrate online orders with your warehouse terminal, ensuring unified stock levels across all distribution channels.",
    imageSrc:
      "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
  },
];

export const WAREHOUSES_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Owners Inventory",
  paragraph: "",
  secondHeading: "Streamline and Scale Your Warehouse Operations",
  secondDescription: "Owners Inventory replaces inventory management, stock management, dispatch management, supplier coordination and reporting in one comprehensive warehouse point-of-sale solution. It supports warehouse teams to optimize their workflow, minimize manual tasks, and guarantee precise inventory management throughout the entire process.",
  whyChooseTitle: "Why Choose Owners Inventory Warehouse POS System?",
  whyChooseDescription: "Our software enables our warehouse owners to run their inventory, stock movement, order processing, supplier records and reporting without having to use multiple disconnected systems.",
};

export const WAREHOUSES_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Quick Setup",
    description: "Owners Inventory is easily programmable and doesn't need any high technical skills. Products, SKUs, warehouse sections, suppliers and stock categories can be added in bulk from excel or csv files or added quickly.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "All-in-One Platform",
    description: "It's a system that replaces individual software programmes for inventory management, order processing, dispatching, reporting and warehouse monitoring. The warehouse integrates all the operations related to receiving, transfers, stock corrections and shipments from a single platform.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "24/7 Support",
    description: "24-hours service is provided to keep the warehouse running round the clock. Whether it is during dispatch peak hours, stock audit or emergency stock management situations, there will always be someone to provide assistance.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Actionable Insights",
    description: "The system delivers real-time data on inventory, fast-moving items, inventory turns, pending orders, and the performance of the warehouse. These reports are useful for warehouse management personnel.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Built for Warehouse Operations",
    description:
      "The software is tailored for a warehouse environment that manages bulk inventories along with several storage areas, supplier deliveries and large volumes of dispatch operations. It helps streamline stock management and ensure the accuracy of inventory counts, especially during peak times, thereby making it a perfect warehouse POS system for everyday operations.",
    icon: "testWhychoseIcon5",
  },
  
];

export const WAREHOUSES_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph: "Owners Inventory connects to platforms like Shopify, Stripe, QuickBooks, Google Calendar, Mailchimp, and more business management platforms. All inventory, accounting, shipping and sales information is synced throughout all systems. This saves human reconciliation effort and boosts the accuracy of warehouse reporting, order management and financial records, online/offline.",
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
