import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";

// ─── Furniture Store POS — UnifiedPlatform Section ──────────────────────────────
export const FURNITURE_STORE_UNIFIED_HEADING = "Challenges Holding Back Furniture Stores";

export const FURNITURE_STORE_UNIFIED_PARAGRAPH =
    "Furniture stores have special operational issues, which influence sales, delivery, and profitability. The following are some of the problems that most stores face";

export const FURNITURE_STORE_UNIFIED_CARDS: UnifiedPlatformCard[] = [
   {
        id: "1",
        icon: "furnitureUnifiedIcon1",
        title: "Complex Inventory Tracking",
        description:
            "Almost 38% of furniture stores have mismatched inventory due to large products and multiple options. Stock movement always causes confusion between showrooms and warehouses. A specialized system is required to achieve accurate visibility.",
    },
    {
        id: "2",
        icon: "furnitureUnifiedIcon2",
        title: "Stock Inaccuracy",
        description:
            "Furniture products are available in various sizes, colors, materials, and variations. Tracking results in wrong stock quantities and lost items. This usually leads to overselling or lost sales.",
    },
    {
        id: "3",
        icon: "furnitureUnifiedIcon3",
        title: "Slow Billing & Order Processing",
        description:
            "Furniture purchases are usually customized, paid in installments, and scheduled. Paperwork,  handwritten invoices, and calculations slow down the checkout process and cause confusion.",
    },
    {
        id: "4",
        icon: "furnitureUnifiedIcon4",
        title: "Complex Variant Management",
        description:
            "Without a proper system, it gets difficult to deal with sofas, beds, tables, and cabinets of different finishes and sizes. Variant errors cause wrong deliveries and complaints from customers.",
    },
    {
        id: "5",
        icon: "furnitureUnifiedIcon5",
        title: "Delivery & Order Tracking Issues",
        description:
            "The delays and poor customer experience are caused by manual tracking of pending orders, delivery schedules, and installation status.",
    },
    {
        id: "6",
        icon: "furnitureUnifiedIcon6",
        title: "Supplier & Purchase Confusion",
        description:
            "Furniture stores deal with several manufacturers and suppliers. Lack of coordination leads to late delivery, stockouts, or overstocking.",
    },
     {
        id: "7",
        icon: "furnitureUnifiedIcon7",
        title: "Lack of Business Insights",
        description:
            "In the absence of appropriate reports, owners are unable to monitor the best-selling products, profit margins, or slow-moving inventory. Guesswork is used to make decisions.",
    },
    {
        id: "8",
        icon: "furnitureUnifiedIcon8",
        title: "Limited Online Presence",
        description:
            "Customers browse and compare furniture online, and go to stores. The stores lose potential buyers without digital integration.",
    },
   
];

export const FURNITURE_STORE_WHY_CHOOSE_CARDS = [
    {
        id: "1",
        icon: "whychoseIcon1",
        title: "Real-Time Inventory Accuracy",
        description:
            "Every sale, return or purchase is updated automatically in inventory. Stock, sizes, colors, and materials should always be accurately tracked.",
    },
    {
        id: "2",
        icon: "whychoseIcon2",
        title: "Faster Billing & Custom Order Management",
        description:
            "Create detailed invoices with variants, discounts, delivery charges, and installment plans in seconds.",
    },
    {
        id: "3",
        icon: "whychoseIcon3",
        title: "Variant & Multi-Unit Support",
        description:
            "Control products based on size, color, material, finish or model. Best for furniture stores with complex variations.",
    },
    {
        id: "4",
        icon: "whychoseIcon4",
        title: "Delivery & Installation Tracking",
        description:
            "Monitor delivery schedules, outstanding orders, and installations made on a single dashboard.",
    },
    {
        id: "5",
        icon: "whychoseIcon5",
        title: "Smart Supplier Management",
        description:
            "Keep track of the delivery times, pending orders, and installations on one dashboard to avoid delays and stock shortages.",
    },
    {
        id: "6",
        icon: "whychoseIcon6",
        title: "Data-Driven Decision Makin",
        description:
            "Live sales and stock reports will assist you in making decisions on high profit products, fast-moving products, and seasonal trends.",
    },
    
    
];


export const FURNITURE_STORE_FEATURE_CARDS = [
    {
        id: "1",
        title: "Omni-Channel and Sales Integration",
        description:
            "Sell furniture in-store and online using the same system. Maintain consistent prices, live stock, and customer data on every platform. Your operations are synchronized across showroom and online sales without manual updates.",
        imageSrc: "/assets/industries-pages/furniture-store-pos/furniture-store-omini-chanel.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/pos",
        buttonColor: "var(--primary-purple)",
        list: [
            "POS Sales Management",
            "Ecommerce & Online Orders",
            "Centralized Multi-Channel Control",
        ]
    },
    {
        id: "2",
        title: "Better Reporting & Business Insights",
        description:
            "Our best point of sale software for small retailers provides clear insights into daily revenue, profit margins, and product performance.",
        imageSrc: "/assets/industries-pages/furniture-store-pos/furniture-store-why-chose-banner.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/products",
        buttonColor: "#1AD1B9",
        list: [
            "Identify fast and slow moving products.",
            "Forecast demand and plan smarter reorders",
            "Track sales, profit margins, and revenue trends in real time.",
        ]
    },
];


export const FURNITURE_STORE_KEY_FEATURES_CARDS = [
   
   {
        id: 1,
        title: "Custom Order & Advance Payment Tracking",
        description:
            "Track the balance due, advance payments, and delivery status of made-to-order furniture. Store all custom orders in a systematic manner between booking and final installation.",
        imageSrc: "/assets/industries-pages/furniture-store-pos/key-features-section/furniture-store-key-card1.webp",
    },
    {
        id: 2,
        title: "Fast & Accurate Billing",
        description:
            "Create professional invoices in a flash, with taxes, discounts, delivery fees, and partial payments. Speeds up the checkout process and retains complete pricing accuracy on each transaction.",
        imageSrc: "/assets/industries-pages/furniture-store-pos/key-features-section/furniture-store-key-card2.webp",
    },
    {
        id: 3,
        title: "Real-Time Inventory Tracking",
        description:
            "Stock updates automatically with every sale or purchase, reducing manual errors. Always be aware of what is available, what variants are available in what form and what is on display in the showroom.",
        imageSrc: "/assets/industries-pages/furniture-store-pos/key-features-section/furniture-store-key-card3.webp",
    },
    
    {
        id: 4,
        title: "Multi-Branch Management",
        description:
            "Operate several showroom stores with centralized inventory and sales control. Monitor performance, inventory, and pricing across all locations on one dashboard.",
        imageSrc: "/assets/industries-pages/furniture-store-pos/key-features-section/furniture-store-key-card4.webp",
    },
    {
        id: 5,
        title: "After-Sales Tracking",
        description:
            "Returns and warranties remain visible within the furniture store POS system. Conflicts are minimized since all the information is recorded.",
        imageSrc: "/assets/industries-pages/furniture-store-pos/key-features-section/furniture-store-key-card5.webp",
    },
    {
        id: 6,
        title: "Barcode Labels",
        description:
            "Large products remain trackable through label tools within the furniture POS software. There is no mishandling in showrooms or warehouses.",
        imageSrc: "/assets/industries-pages/furniture-store-pos/key-features-section/furniture-store-key-card6.webp",
    },
    {
        id: 7,
        title: "Performance Reports",
        description:
            "Stagnating and aging inventory isidentified with furniture store POS reporting. Knowledge helps in making improved buying and inventory choices.",
        imageSrc: "/assets/industries-pages/furniture-store-pos/key-features-section/furniture-store-key-card7.webp",
    },
    {
        id: 8,
        title: "Online Integration",
        description:
            "Sell furniture online and keep stock in your showroom and online. Ensure that inventory and price are synchronized across all  sales channels in real time.",
        imageSrc: "/assets/industries-pages/furniture-store-pos/key-features-section/furniture-store-key-card8.webp",
    },
      {
        id: 9,
        title: "Smart Sales & Reports",
        description:
            "Know product performance, profit margins, and stock valuation in real time. Determine the best-selling collections and those that are not selling to maximize on purchases.",
        imageSrc: "/assets/industries-pages/furniture-store-pos/key-features-section/furniture-store-key-card9.webp",
    },
    {
        id: 10,
        title: "Mobile POS",
        description:
            "Furniture mobile POS software allows showroom teams to access stock instantly. The deal is closed faster on the showroom floor.",
        imageSrc: "/assets/industries-pages/furniture-store-pos/key-features-section/furniture-store-key-card10.webp",
    },
    {
        id: 11,
        title: "Staff Roles",
        description:
            "Grant access control to sales personnel, managers and admins to enhance security. Secure confidential financial and inventory information and ensure uninterrupted teamwork.",
        imageSrc: "/assets/industries-pages/furniture-store-pos/key-features-section/furniture-store-key-card11.webp",
    },
    
];



export const FURNITURE_STORE_WORKFLOW_DATA = {
    heading: "Inventory Workflow of Owners Inventory",
    paragraph: "Our furniture store POS system simplifies every stage of inventory management. From supplier purchase to final customer delivery, every stock movement is tracked in one connected system.",
    steps: [
        {
            number: 1,
            title: "Inventory Procurement",
            description: "Prepare purchase orders with manufacturers and suppliers. Items are received with complete variant information. Maintain accurate records of costs, quantities, and supplier timelines for better planning."
        },
        {
            number: 2,
            title: "Stock Organization",
            description: "Categorize items by type, material, collection, or room category for easy tracking. Well-structured storage reduces confusion and improves showroom efficiency."
        },
        {
            number: 3,
            title: "Real-Time Inventory Tracking",
            description: "All movements are updated in real time in the system. You never have to check stock levels manually to get up-to-date levels."
        },
        {
            number: 4,
            title: "Order & Delivery Management",
            description: "Track customer orders between booking and final delivery and installation. Get rid of late deliveries and ensure that they are delivered in time and in orderly fashion."
        },
        {
            number: 5,
            title: "Returns & Damage Control",
            description: "Returned, exchanged, and damaged items are entered into the system appropriately. Ensure that there are good stock adjustments to avoid stock variances and losses."
        },
         {
            number: 6,
            title: "Reporting & Analysis",
            description: "Prepare stock value, pending delivery, profits, and seasonal demand trends reports to make sound decisions regarding buying and reducing inventory."
        },
       
    ]
};

export const FURNITURE_STORE_TESTIMONIALS = [
    {
        id: "1",
        name: "Ayesha",
        title: "Furniture Store Owner",
        image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
        text: "Before  Owners Inventory, it was always difficult to handle bulky products and custom orders. Monitoring of stock, deliveries, and product variations was time consuming and subject to mistakes. Using this furniture POS system, our team will be able to check the real-time stock, track deliveries, and manage variants, which will save a lot of time daily.",
    },
    {
        id: "2",
        name: "Ellen",
        title: "Interior Decor Owner",
        image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
        text: "We also have the mobile POS option, where our sales personnel are able to make sales on the showroom floor. The customers like instant quotes and invoices, and the transactions are fast, precise, and professional. This has made our store operations modern and enhanced the customer experience.",
    },
    {
        id: "3",
        name: "Sara",
        title: "Home Decor & Furniture Shop Owner​",
        image: "/assets/features-page/testimonial-images/testinomial-girl4.webp",
        text: "It is now easy to manage various locations. Stock transfers, custom orders, and deliveries are synchronized with three showrooms and a warehouse linked by the furniture store POS.",
    },
    {
        id: "4",
        name: "Bilal",
        title: "Modern Furniture Showroom Owner",
        image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
        text: "This has made the operations more efficient, reduced errors and provided us with complete visibility and control of all locations.",
    },
    
];

export const FURNITURE_STORE_FAQS = [
    {
        id: "1",
        question: "What is a POS system for a furniture store?",
        answer: "It is software that is utilized to process sales, inventory, deliveries, and custom orders. Big products, colors, sizes, and materials remain tracked correctly.Warehouses and showrooms are in real time contact."
    },
    {
        id: "2",
        question: "Is it able to manage several branches?",
        answer: "Yes, the furniture store POS system ensures that all locations are in sync. Reports, inventory and stock transfers remain in order across branches. Managers are able to observe all this on a single dashboard."
    },
    {
        id: "3",
        question: "Does it support mobile sales?",
        answer: "Yes, the furniture mobile POS software enables on-floor billing and quotations. Salespeople are able to monitor inventory and seal transactions in real time. Customers are offered prompt and precise invoices."
    },
    {
        id: "4",
        question: "Can it manage custom orders?",
        answer: "Yes, the POS system of furniture captures bespoke sizes, finishes and materials. Detailed information is provided to production teams. Error and confusion are minimized."
    },
    {
        id: "5",
        question: "Does it provide reports and analytics?",
        answer: "Yes, the furniture POS software generates sales, inventory, and performance reports. Products that are slow moving and those that are old can be traced easily. Owners can make better purchase decisions and stocking decisions."
    },
];

export const FURNITURE_STORE_KEY_FEATURES = [
    {
        id: "furniture-billing",
        title: "Furniture Showroom Billing",
        description: "Speed up your showroom sales with integrated billing and custom item creation for a smoother client experience.",
        imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
    },
    {
        id: "furniture-stock-control",
        title: "Real-Time Furniture Stock",
        description: "Know exactly what’s in stock. Every item sold is instantly deducted from your inventory for both showroom and warehouse.",
        imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
    },
    {
        id: "furniture-vendor-mgmt",
        title: "Manufacturer & Supplier Management",
        description: "Keep track of all your furniture suppliers, manage purchase orders, and monitor your shipment statuses effortlessly.",
        imageSrc: "/assets/features-page/featurescard-banners/purchases-banner.webp",
    },
    {
        id: "furniture-variants",
        title: "Style & Material Tracking",
        description: "Manage different furniture styles, materials, and variants in one easy-to-navigate catalog system.",
        imageSrc: "/assets/features-page/featurescard-banners/inventory-banner.webp",
    },
    {
        id: "furniture-loyalty",
        title: "Client & Loyalty Management",
        description: "Build relationships with your furniture clients using integrated CRM tools to track their preferences and order history.",
        imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
    },
    {
        id: "furniture-finances",
        title: "Showroom Financial Reporting",
        description: "Monitor your showroom’s financial health with detailed reports on sales, deposits, and operating expenses.",
        imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
    },
    {
        id: "furniture-ecommerce",
        title: "Online Furniture Integration",
        description: "Sync your physical showroom with your online furniture store to manage all inventory and orders in one place.",
        imageSrc: "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
    },
];

export const FURNITURE_STORE_TESTIMONIAL_DATA = {
    heading: "What Our Clients Say About Us?",
    paragraph: "", // Optional paragraph
    secondHeading: "Manage Your Furniture Store Efficiently",
    secondDescription: "Gain complete control over your inventory, sales, custom orders, and deliveries with a system designed for modern furniture businesses.",
    whyChooseTitle: "Why Choose Our POS System?",
    whyChooseDescription: "Our furniture POS system helps to simplify, improve precision, and efficiency of furniture retailing.",
};

export const FURNITURE_STORE_TESTIMONIAL_FEATURES = [
    {
        id: "1",
        title: "Built for Furniture Stores",
        description: "The system is easy to work with big items, various sizes, and special orders. Warehouses and showrooms remain in touch.",
        icon: "testWhychoseIcon1",
    },
    {
        id: "2",
        title: "Real-Time Inventory",
        description: "Inventory, options and finishes are updated in real-time. Mistakes are minimized and managers can make decisions quicke",
        icon: "testWhychoseIcon2",
    },
    {
        id: "3",
        title: "Mobile POS Support",
        description: "Sales teams are able to sell on the showroom floor. Every customer receives a quote and invoice immediately",
        icon: "testWhychoseIcon3",
    },
    {
        id: "4",
        title: "Multi-Branch Control",
        description: "All store locations remain aligned with centralized management. Reports, stock and transfers are kept in order among the branches.",
        icon: "testWhychoseIcon4",
    },
    {
        id: "5",
        title: "Customer and Order Management",
        description: "The records of customer history, warranties, and custom orders remain in history. Individualized service is made easy and dependable.",
        icon: "testWhychoseIcon5",
    },
    {
        id: "6",
        title: "Detailed Reports and Analytics",
        description: "The stock performance and sales trends remain visible at any time. Planning and effective purchases become easier.",
        icon: "testWhychoseIcon6",
    },
    {
        id: "7",
        title: "Integration and Add-Ons",
        description: "Combined with accounting, ecommerce, barcode scanners and payment gateways. Scalable furniture store solution is achieved by add-ons such as loyalty programs, SMS alerts, multi-branch, delivery tracking, and supplier tools.",
        icon: "testWhychoseIcon7",
    },
    
];

export const FURNITURE_STORE_TOOLS_DATA = {
    heading: "Integration and Tools",
    paragraph: "Contemporary inventory systems are integrated with POS, accounting software, CRM systems, and ecommerce. This enables the owners of the bookstores to control inventory, sales, finances and customer information on a single dashboard.",
    tools: [
        { id: 1, name: "Shopify", image: "/assets/home-page-images/tools-section/shopify.svg" },
        { id: 2, name: "WooCommerce", image: "/assets/home-page-images/tools-section/woocomerce.svg" },
        { id: 3, name: "QuickBooks", image: "/assets/home-page-images/tools-section/quick-book.svg" },
        { id: 4, name: "Xero", image: "/assets/home-page-images/tools-section/xero.svg" },
        { id: 5, name: "Stripe", image: "/assets/home-page-images/tools-section/stripe.svg" },
    ],
};

