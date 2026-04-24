import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Furniture Inventory Management — UnifiedPlatform Section ─────────────
export const FURNITURE_INVENTORY_UNIFIED_HEADING = "Challenges Furniture Businesses Face Today";

export const FURNITURE_INVENTORY_UNIFIED_PARAGRAPH = "When processes are not automated, furniture businesses have to cope with daily operational difficulties that influence efficiency, profitability, and accuracy of inventory.";

export const FURNITURE_INVENTORY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
    {
        id: "1",
        icon: "UnifiedIcon1",
        title: "Stock Mismanagement",
        description:
            "Lack of an appropriate furniture inventory management system can cause stock errors. The problem of overstocking, understocking and misplaced items is common in businesses, and it affects the sales and customer satisfaction.",
    },
    {
        id: "2",
        icon: "UnifiedIcon2",
        title: "Slow Billing Process",
        description:
            "The conventional ways of billing may delay the process, particularly when the business is busy. Waiting lines creates bad customer experience and can result in loss of sales.",
    },
    {
        id: "3",
        icon: "UnifiedIcon3",
        title: "Multi-Location Complexity",
        description:
            "Furniture companies have a tendency to work in showrooms and warehouses. Lack of a centralized system makes it hard to manage stock across the locations, which results in a lack of consistent data and confusion.",
    },
    {
        id: "4",
        icon: "UnifiedIcon4",
        title: "Lack of Real-Time Insights",
        description:
            "It is hard to monitor the movement of inventory and sales trends without real-time data. This restricts making informed business decisions.",
    },
    {
        id: "5",
        icon: "UnifiedIcon5",
        title: "Product Variations and Pricing Errors",
        description:
            "Furniture pieces are available in various sizes, materials, and finishes. Handling pricing may lead to variations and errors in products and regional pricing.",
    },
    {
        id: "6",
        icon: "UnifiedIcon6",
        title: "Limited Online Integration",
        description:
            "Furniture companies that lack integrated online systems are losing a chance to increase their coverage. Online and offline sales management in isolation are inefficient.",
    },
    
];

export const FURNITURE_INVENTORY_WHY_CHOOSE_CARDS = [
    {
        id: "1",
        icon: "whychoseIcon1",
        title: "Real-Time Inventory Tracking",
        description:
            "The system automatically updates inventory with each sale, return, or restocking. This helps to maintain the right stock and to eliminate manual tracking.",
    },
    {
        id: "2",
        icon: "whychoseIcon2",
        title: "Fast and Efficient Billing",
        description:
            "Billing is more convenient and fast with the help of barcodes and smart searches. This saves time and enhances efficiency in checkout.",
    },
    {
        id: "3",
        icon: "whychoseIcon3",
        title: "Automated Price Management",
        description:
            "Immediately update product prices, discounts and offers in all locations. This guarantees uniformity and eradicates pricing mistakes.",
    },
    {
        id: "4",
        icon: "whychoseIcon4",
        title: "Data-Driven Insights",
        description:
            "Get access to sales, stock movement, and product performance reports. These are insights that can be used to enhance decision-making and profitability.",
    },
    {
        id: "5",
        icon: "whychoseIcon5",
        title: "Online Sales Integration",
        description: "Manage showroom and online sales in a single system. Real-time updating of inventory on all platforms.",
    },
    
];

export const FURNITURE_INVENTORY_FEATURE_CARDS: FeatureCardData[] = [
    {
        id: "1",
        title: "Omni-Channel Sales and Integration",
        description:
            "Owners Inventory connects multiple sales channels that furniture businesses use into one synchronized system. Stock levels, sales records, and order data stay consistent whether a transaction is performed in-store, online, or through a delivery platform.",
        subDescription: "This removes the need to manage separate systems and keeps operations streamlined without confusion.",
        imageSrc: "/assets/industries-pages/furniture-inventory-management-software/omini-chanel.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/inventory-management",
        buttonColor: "var(--primary-purple)",
        listVariant: "accordion",
        list: [
            { listheading: "POS Counter Sales", listdescription: "Sales processed at the counter are recorded in real time within the system. Real-time stock updates keep the records accurate throughout the sales procedures. It helps staff focus on other business operations instead of managing inventory manually.", listSubDescription: "This helps keep inventory counting accurate by recording exactly what was sold in the day." },
            { listheading: "Delivery and Online Integration", listdescription: "Orders placed through a website, delivery app, or online marketplace are captured automatically by the system. Inventory is updated when the order is confirmed, which prevents overselling. This reduces the requirement of manual order sync between platforms and the risk of fulfilling an order for an item that is no longer in stock." },
            { listheading: "Unified Dashboard", listdescription: "All inventory management activities appear in one central dashboard. The dashboard helps business owners monitor performance, track stock movements, and manage operations without the need to switch between systems.", listSubDescription: "It gives a clear understanding of business operations at any point during the day without relying on separate reports or multiple tools." },
        ]
    },
    {
        id: "2",
        title: "Better Analytics and Reporting",
        description: "The software converts daily sales and stock data into clear, understandable reports. It helps business owners identify best-selling items, slow-moving products, and sales patterns over time. These insights help businesses make better purchasing decisions, reduce unnecessary stock holding, and maintain consistent growth rates.",
        imageSrc: "/assets/industries-pages/furniture-inventory-management-software/better-decision.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/products",
        buttonColor: "#1AD1B9",
    },
];

export const FURNITURE_INVENTORY_KEY_FEATURES_CARDS = [
    {
        id: 1,
        title: "Smart Billing System",
        description: "Facilitate speedy transactions with barcode scanning and automated billing to provide a smooth customer experience.",
        imageSrc: "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card1.webp",
    },
    {
        id: 2,
        title: "Live Inventory Management",
        description: "Track furniture in real-time, and with size, material and design variation.",
        imageSrc: "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card2.webp",
    },
    {
        id: 3,
        title: "Purchase and Supplier Management",
        description: "Manage orders, deliveries by suppliers, and vendor relations in one platform.",
        imageSrc: "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card3.webp",
    },
    {
        id: 4,
        title: "Product Categorization",
        description:
            "Categorize furniture in terms of category, type or material to make inventory easier to manage.",
        imageSrc: "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card4.webp",
    },
    {
        id: 5,
        title: "Customer and Order Management",
        description:
            "Store customer information, track orders and delivery information.",
        imageSrc: "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card5.webp",
    },
    {
        id: 6,
        title: "Cost and Cash Flow Monitoring",
        description:
            "Monitor daily expenses and cash flow to ensure that your business is under financial control.",
        imageSrc: "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card4.webp",
    },
    {
        id: 7,
        title: "Multi-Store and Warehouse Management",
        description:
            "Manage different showrooms and warehouses using a centralized dashboard.",
        imageSrc: "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card5.webp",
    },
    {
        id: 8,
        title: "Advanced Reporting",
        description:
            "Create sales performance, inventory turnover, and product demand reports.",
        imageSrc: "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card4.webp",
    },
    {
        id: 9,
        title: "Role-Based Access Control",
        description:
            "Grant roles and permissions to employees to achieve system security and access control.",
        imageSrc: "/assets/industries-pages/furniture-inventory-management-software/key-features-section/key-features-card5.webp",
    },
    
];

export const FURNITURE_INVENTORY_WORKFLOW_DATA = {
    heading: "Workflows of Furniture Inventory Management Software",
    paragraph: "Owners Inventory follows the natural flow of how furniture businesses buy, manage, and sell products. It connects every workflow step with others to ensure operational accuracy. This gives business owners full visibility of management procedures.",
    steps: [
        {
            number: 1,
            title: "Product Catalog Setup",
            description: "You can add products in the system with categorization, such as variants, pricing, and opening stock quantities in the system. Every item is organized in one place. This makes it easy for your staff to find items in the store and manage everything accurately. It speeds up the sales process."
        },
        {
            number: 2,
            title: "Connect Sales Channels",
            description: "It links your POS, online store, and delivery platform to a single inventory system. All channels use the same stock. So sales from any source are recorded instantly without creating separate records, reducing the reliance on manual processes."
        },
        {
            number: 3,
            title: "Sales Processing and Stock Updates",
            description: "The system automatically adjusts inventory levels whenever sales occur. This ensures accurate tracking of inventory stock levels while helping businesses avoid human errors. It keeps operational activities streamlined by managing stock counts precisely while enhancing business growth."
        },
        {
            number: 4,
            title: "Stock Coordination",
            description: "Incoming orders are processed efficiently while inventory is being checked for availability, which helps furniture businesses fulfill orders on time and maintain proper coordination between stock levels and customer demands."
        },
        {
            number: 5,
            title: "Performance Review and Restock",
            description: "With built-in reports, it shows which products are selling well, which are slow-moving, and where your stock levels stand. It ensures accurate restock decisions and better order planning while helping businesses grow without guesswork and with fewer losses."
        },
       
    ]
};

export const FURNITURE_INVENTORY_TESTIMONIAL_DATA = {
    heading: "What Do Our Clients Say About Owners Inventory?",
    paragraph: "",
    secondHeading: "Bring Structure to Your Daily Operations",
    secondDescription: "Switch to our structured inventory management system that keeps everything organized and easy to handle. Our system improves how your business runs without adding complexity.",
    whyChooseTitle: "Why Choose Owners Inventory for Furniture Business Management?",
    whyChooseDescription: "Owners Inventory is built for furniture business owners who need accurate inventory control without complicated system setups and large IT teams. Our software is reliable, efficient, and designed to support real business operations.",
};

export const FURNITURE_INVENTORY_TESTIMONIALS = [
    {
        id: "1",
        name: "Hassan R",
        title: "Furniture Showroom Owner",
        image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
        text: "We were struggling to keep our inventory organized as our business grew. Owners Inventory gave us a structured way to handle stocks without making things complicated. It's simple to use and perfectly supports our operations efficiently.",
    },
    {
        id: "2",
        name: "Anabiya K",
        title: "Operations Manager",
        image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
        text: "Managing inventory across different product categories used to take a lot of time. With Owners Inventory, everything feels more streamlined now.",
    },
    {
        id: "3",
        name: "Rebecca S",
        title: "Business Manager",
        image: "/assets/features-page/testimonial-images/testinomial-girl4.webp",
        text: "The system helped us stay organized without adding extra workload. The system just perfectly fits our workflow",
    },
];

export const FURNITURE_INVENTORY_FAQS = [
    {
        id: "1",
        question: "How long does it take to set up inventory management software?",
        answer: "The setup time of Owners Inventory depends on your business size. However, it is easy to set up for most businesses. You can quickly add products and categories while tracking other operations."
    },
    {
        id: "2",
        question: "Can I manage different product types under one system?",
        answer: "Yes, our inventory software allows you to organize different product types with categories, making it easier to handle varied items within one system."
    },
    {
        id: "3",
        question: "Does the software support pricing management for products?",
        answer: "Yes, it allows you to update product pricing within the system. It helps maintain pricing consistency across stores and online platforms while ensuring accurate billing during checkout procedures."
    },
    {
        id: "4",
        question: "How does inventory software help during busy sales periods?",
        answer: "The software keeps stocks updated automatically, allowing businesses to handle high transaction volumes without losing track of inventory or creating confusion in records."
    },
    {
        id: "5",
        question: "Can I customize the system based on my business needs?",
        answer: "Our inventory management system offers flexibility. It allows businesses to adjust workflows, categories, and processes based on their unique operational requirements."
    },
];

export const FURNITURE_INVENTORY_KEY_FEATURES = [
    {
        id: "furniture-business-billing",
        title: "Supply Order Management",
        description: "Speed up your procurement with integrated order processing and automatic stock updates for a smoother business experience.",
        imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
    },
    {
        id: "furniture-business-stock-control",
        title: "Real-Time Multi-Location Stock",
        description: "Know exactly what's in stock across all areas. Every item used is instantly updated in your inventory.",
        imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
    },
    {
        id: "furniture-business-vendor-mgmt",
        title: "Manufacturer & Vendor Management",
        description: "Keep track of all your suppliers, manage purchase orders, and monitor your shipment statuses effortlessly.",
        imageSrc: "/assets/features-page/featurescard-banners/purchases-banner.webp",
    },
    {
        id: "furniture-business-variants",
        title: "Item & Supply Tracking",
        description: "Manage different items, sizes, and categories in one easy-to-navigate catalog across all areas.",
        imageSrc: "/assets/features-page/featurescard-banners/inventory-banner.webp",
    },
    {
        id: "furniture-business-loyalty",
        title: "Customer & Record Management",
        description: "Build better customer care using integrated CRM tools to track history and supply needs.",
        imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
    },
    {
        id: "furniture-business-finances",
        title: "Financial & Compliance Reporting",
        description: "Monitor your business's financial health with detailed reports on spending, consumption, and operational expenses.",
        imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
    },
    {
        id: "furniture-business-integration",
        title: "Multi-Platform Logistics Integration",
        description: "Sync your logistics partners to manage all inventory and supply chains in one place.",
        imageSrc: "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
    },
];

export const FURNITURE_INVENTORY_TESTIMONIAL_FEATURES = [
    {
        id: "1",
        title: "Purpose-Built System",
        description: "The system fulfills the daily inventory management needs of furniture businesses, such as stock tracking, sales recording, and growth tracking.",
        icon: "testWhychoseIcon1",
    },
    {
        id: "2",
        title: "Quick Setup",
        description: "Furniture businesses can add their product catalogs, connect sales channels, and start tracking inventory. It allows you to carry on with existing operations without disruption.",
        icon: "testWhychoseIcon2",
    },
    {
        id: "3",
        title: "All-in-One Platform",
        description: "Owners Inventory eliminates the need for separate tools. It manages everything with one connected system, which helps keep business data consistent in one place.",
        icon: "testWhychoseIcon3",
    },
    {
        id: "4",
        title: "Scalable Platform",
        description: "As your business expands from small to enterprise-level, the system provides you with more features, such as handling more products, locations, and sales volumes without compromising accuracy and performance.",
        icon: "testWhychoseIcon4",
    },
    {
        id: "5",
        title: "Reliable Support",
        description: "The system provides operational support to furniture businesses, which helps them automate routine tasks and focus on main operations that effectively help them grow.",
        icon: "testWhychoseIcon5",
    },
    {
        id: "6",
        title: "Actionable Reporting",
        description: "The software uses advanced AI features for real-time updates of stocks, inventory, and sales management. These reports help business owners get visibility into all operations.",
        icon: "testWhychoseIcon6",
    },
    
];

export const FURNITURE_INVENTORY_TOOLS_DATA = {
    heading: "Integration and Tools",
    paragraph: "Owners Inventory integrates with platforms such as Shopify and WooCommerce. It can also connect with marketing tools, payment gateways, and other essential software required to manage a furniture business. It allows tools and platforms to work together in a connected system so business owners can manage different operations instantly.",
    tools: [
        { id: 1, name: "Shopify", image: "/assets/home-page-images/tools-section/shopify.svg" },
        { id: 2, name: "WooCommerce", image: "/assets/home-page-images/tools-section/woocomerce.svg" },
        { id: 3, name: "QuickBooks", image: "/assets/home-page-images/tools-section/quick-book.svg" },
        { id: 4, name: "Xero", image: "/assets/home-page-images/tools-section/xero.svg" },
        { id: 5, name: "Stripe", image: "/assets/home-page-images/tools-section/stripe.svg" },
       
    ],
};
