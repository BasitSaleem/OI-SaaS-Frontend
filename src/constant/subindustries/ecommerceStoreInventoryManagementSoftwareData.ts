import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Ecommerce Store Inventory Management — UnifiedPlatform Section ─────────────
export const ECOMMERCE_INVENTORY_UNIFIED_HEADING = "Challenges Holding Back Ecommerce Businesses";

export const ECOMMERCE_INVENTORY_UNIFIED_PARAGRAPH = "Every day, ecommerce companies face a number of challenges that may slow growth or increase costs. These challenges can include:";

export const ECOMMERCE_INVENTORY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
    {
        id: "1",
        icon: "UnifiedIcon1",
        title: "Stock Mismatch Across Channels",
        description:
            "Businesses that sell eCommerce products usually do so on several platforms, such as websites and online marketplaces. It is difficult to update stock across all platforms without a system. It leads to confusion and mismatched inventories.",
    },
    {
        id: "2",
        icon: "UnifiedIcon2",
        title: "Overselling and Stockouts",
        description:
            "You may end up selling products that are out of stock if you don't update your stock in real-time. It can lead to order cancellations, unhappy customers and even brand damage. This can damage the reputation of your brand.",
    },
    {
        id: "3",
        icon: "UnifiedIcon3",
        title: "Manual Inventory Tracking",
        description:
            "Many businesses use manual methods or spreadsheets to keep track of inventory. It takes a lot of time, and the risk of error increases. Over time, small mistakes can result in large losses.",
    },
    {
        id: "4",
        icon: "UnifiedIcon4",
        title: "Predicting Demand",
        description:
            "It is difficult to predict which products are going to sell better without proper data. Overstocking of slow-selling items can lead to running out of fast-selling products.",
    },
    {
        id: "5",
        icon: "UnifiedIcon5",
        title: "Order Fulfillment Delays",
        description:
            "Handling manual orders slows picking, packaging, and shipping. It delays delivery and reduces customer satisfaction.",
    },
    {
        id: "6",
        icon: "UnifiedIcon6",
        title: "Centralized Control",
        description:
            "Separately managing orders, sales, and inventory makes it difficult to manage. It is difficult to grow your online business without a central system.",
    },
];

export const ECOMMERCE_INVENTORY_WHY_CHOOSE_CARDS = [
    {
        id: "1",
        icon: "whychoseIcon1",
        title: "Real-time Inventory Sync",
        description:
            "The system automatically updates the inventory after each sale, return, or any stock change. It keeps the stock in sync across platforms, and helps reduce overselling.",
    },
    {
        id: "2",
        icon: "whychoseIcon2",
        title: "Centralized Inventory Management",
        description:
            "All your orders, products, and stock can be managed from a single dashboard. It reduces confusion, and it saves you time. This system allows for central inventory management.",
    },
    {
        id: "3",
        icon: "whychoseIcon3",
        title: "Smart Demand Forecasting",
        description:
            "Our system analyzes past sales to provide you with information about demand. You can then restock at the best time. This system also allows you to forecast demand.",
    },
    {
        id: "4",
        icon: "whychoseIcon4",
        title: "Order Processing Automated",
        description:
            "Automated orders processing speeds up the fulfillment process and eliminates manual labor. It increases efficiency and improves customer satisfaction. Order processing is easy with the Owners Inventory System.",
    },
    {
        id: "5",
        icon: "whychoseIcon5",
        title: "Multi-Channel Integration",
        description:
            "We connect all of your marketplaces and eCommerce platforms. This allows inventory to be synced up in real-time. Multi-channel integration is easy with the Owners Inventory System.",
    },
    {
        id: "6",
        icon: "whychoseIcon6",
        title: "Data-Driven Decision Making",
        description:
            "Detailed reports will show you which products perform well  and which do not. You can make more informed decisions about pricing and purchases.",
    },
];

export const ECOMMERCE_INVENTORY_FEATURE_CARDS: FeatureCardData[] = [
    {
        id: "1",
        title: "Sales Integration and Omnichannel Marketing",
        description:
            "All platforms that you use to sell your products, such as your mobile app, eCommerce site, or marketplaces are connected into our system. You can manage all your products from a single place, without switching between tools. This software keeps all your orders, inventory, and sales data in sync so that your business is always accurate.",
        imageSrc: "/assets/industries-pages/ecommerce-store-inventory-management-software/omini-chanel.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/inventory-management",
        buttonColor: "var(--primary-purple)",
        listVariant: "accordion",
        list: [
            { listheading: "Ecommerce Sales Management", listdescription: "Manage your inventory and orders all from the same place. It is easy to keep track of daily transactions and product performance. It helps you run your online business smoothly." },
            { listheading: "Online Order Processing", listdescription: "Manage orders from beginning to end efficiently and accept secure payments. This system allows you to process orders faster, minimize delays and make sure that your customers receive their products on time. It builds customer trust and improves satisfaction." },
            { listheading: "Unified Multi-Channel Control", listdescription: "You can view your business performance, including orders and inventory in real-time across multiple platforms. It's easier to keep track of stock, prevent errors and make better business decisions. You can deliver an experience that is consistent and reliable to all your customers, no matter from where they are shopping. This ensures your eCommerce operation is organized, efficient, and fast." },
        ]
    },
    {
        id: "2",
        title: "Better Decision Reporting & Analytics",
        description:
            "We provide valuable insights into the eCommerce operation so that you can make better decisions.",
        imageSrc: "/assets/industries-pages/ecommerce-store-inventory-management-software/better-decision.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/products",
        buttonColor: "#1AD1B9",
        list: [
            { listheading: "Check out which products perform well"},
            { listheading: "Restock your inventory when necessary"},
            { listheading: "Reduce losses by identifying slow-moving items"},
        ]
    },
];

export const ECOMMERCE_INVENTORY_KEY_FEATURES_CARDS = [
    {
        id: 1,
        title: "Real-time Stock Tracking",
        description:
            "Automatically, stock levels are updated after each transaction. Your inventory will always be accurate. Stock tracking is easy with the Owners Inventory System.",
        imageSrc: "/assets/industries-pages/ecommerce-store-inventory-management-software/key-features-section/key-features-card1.webp",
    },
    {
        id: 2,
        title: "Order & Fulfillment Management",
        description:
            "From receiving orders to shipping them, you can do it all in one location. It makes order fulfillment more efficient and organized. Order management is easy with the Owners Inventory System.",
        imageSrc: "/assets/industries-pages/ecommerce-store-inventory-management-software/key-features-section/key-features-card2.webp",
    },
    {
        id: 3,
        title: "Multi-Channel Integration",
        description:
            "Integrate your websites, apps, and marketplaces into a single system. You can easily manage your sales channels. Integrating Owners Inventory is easy.",
        imageSrc: "/assets/industries-pages/ecommerce-store-inventory-management-software/key-features-section/key-features-card3.webp",
    },
    {
        id: 4,
        title: "Product & SKU Management",
        description:
            "Manage thousands of product categories and variants without confusion. Product management is easy with the Owners Inventory System.",
        imageSrc: "/assets/industries-pages/ecommerce-store-inventory-management-software/key-features-section/key-features-card4.webp",
    },
    {
        id: 5,
        title: "Location & Warehouse Management",
        description:
            "Track across different warehouses or storage facilities. It helps to improve organization and speed up delivery. Warehouse management is made easy with the Owners Inventory System.",
        imageSrc: "/assets/industries-pages/ecommerce-store-inventory-management-software/key-features-section/key-features-card5.webp",
    },
    {
        id: 6,
        title: "Customer Service",
        description:
            "Save customer information and history of orders. This system helps businesses manage customer data, improve services, and builds loyalty.",
        imageSrc: "/assets/industries-pages/ecommerce-store-inventory-management-software/key-features-section/key-features-card6.webp",
    },
    {
        id: 7,
        title: "Returns Management",
        description:
            "Keep your inventory up to date and manage returns with ease. Returns management is easy with the Owners Inventory System.",
        imageSrc: "/assets/industries-pages/ecommerce-store-inventory-management-software/key-features-section/key-features-card7.webp",
    },
    {
        id: 8,
        title: "Sales & Inventory Reports",
        description:
            "You can get detailed reports about your sales, inventory, and profit. Reporting is easy with the Owners Inventory System.",
        imageSrc: "/assets/industries-pages/ecommerce-store-inventory-management-software/key-features-section/key-features-card8.webp",
    },
    {
        id: 9,
        title: "Automated Alerts & Automation",
        description:
            "Automate the reordering of low-stock items and receive alerts. It prevents stockouts, and increases efficiency. Automation is a great feature of the Owners Inventory System.",
        imageSrc: "/assets/industries-pages/ecommerce-store-inventory-management-software/key-features-section/key-features-card9.webp",
    },
    {
        id: 10,
        title: "User Roles & Permissions",
        description:
            "Manage staff access for security and management. It is easy to assign user roles with the Owners Inventory System.",
        imageSrc: "/assets/industries-pages/ecommerce-store-inventory-management-software/key-features-section/key-features-card10.webp",
    },
];

export const ECOMMERCE_INVENTORY_WORKFLOW_DATA = {
    heading: "The Inventory Workflow for Owners Inventory",
    paragraph: "Our eCommerce inventory management software automates inventory tasks to simplify operations.",
    steps: [
        {
            number: 1,
            title: "Inventory Acquisition",
            description: "Demand is used to determine the addition of products from suppliers. The system records each product for tracking."
        },
        {
            number: 2,
            title: "Stock Organization & Storage",
            description: "The inventory is structured in such a way that it's easy to manage and find. Keep products well-organized to reduce handling time and improve overall efficiency."
        },
        {
            number: 3,
            title: "Inventory Tracking",
            description: "All platforms and warehouses are able to track stock in real-time. Instant updates are made to sales, returns, and transfers."
        },
        {
            number: 4,
            title: "Supplier & Purchasing",
            description: "To avoid shortages, manage suppliers, track delivery, and replenish products at the right time. Ensure smooth coordination with vendors to maintain a steady and reliable supply chain."
        },
        {
            number: 5,
            title: "Order Fulfillment",
            description: "All orders are accurately picked, packaged, and sent. It reduces errors and increases speed. Streamline your workflow to deliver orders faster and improve customer satisfaction."
        },
         {
            number: 6,
            title: "Reporting & Analysis",
            description: "We provide you with detailed information on sales, inventory levels and revenue. Use actionable insights to identify trends and make smarter business decisions."
        },
    ]
};

export const ECOMMERCE_INVENTORY_TESTIMONIALS = [
    {
        id: "1",
        name: "Emma Wilson",
        title: "Ecommerce Store Owner",
        image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
        text: "Our inventory has been synchronized across platforms. We no longer have stock problems.",
    },
    {
        id: "2",
        name: "Liam Khan",
        title: "Online Marketplace Seller",
        image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
        text: "Order processing has become faster and more precise. We have saved a great deal of time. Also managing multiple channels of sales is easy now. Everything is all in one place.",
    },
    {
        id: "3",
        name: "Sophia Gill",
        title: "D2C Brand Owner",
        image: "/assets/features-page/testimonial-images/testinomial-girl4.webp",
        text: "Our inventory is organized and clear. It has greatly improved our business operation.",
    },
   
];

export const ECOMMERCE_INVENTORY_FAQS = [
    {
        id: "1",
        question: "What is inventory management software for eCommerce?",
        answer: "The Ecommerce Inventory Management Software is an online system which helps manage orders and sales on different platforms. The software automatically tracks inventory, updates inventory levels and minimizes manual labor. It makes your online business run more efficiently."
    },
    {
        id: "2",
        question: "Is it able to handle multiple channels of sales?",
        answer: "The system can manage your mobile app, website, and marketplaces. Inventory is synced across platforms in real-time, so that you don't have to worry about issues such as overselling and stock mismatches."
    },
    {
        id: "3",
        question: "Does it make the job of staff easy?",
        answer: "The system is easy to use. Staff can learn to track orders, manage inventory, and make sales easily without needing any advanced technical knowledge. It saves time by reducing the training effort."
    },
    {
        id: "4",
        question: "Is it able to provide insights and reports?",
        answer: "The system does provide real-time information on stock, sales and performance. This information helps you to understand what products sell well, how often to stock up, and improve business decisions."
    },
    {
        id: "5",
        question: "Does the system allow multiple users to access it?",
        answer: "The system does include role-based security. You can give different permissions for staff like administrators, managers, and operators. This keeps data secure and only allows authorized users to access information."
    },
];

export const ECOMMERCE_INVENTORY_KEY_FEATURES = [
    {
        id: "ecommerce-billing",
        title: "Ecommerce Order Management",
        description: "Speed up your online sales with integrated order processing and automatic stock updates for a smoother customer experience.",
        imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
    },
    {
        id: "ecommerce-stock-control",
        title: "Real-Time Multi-Platform Stock",
        description: "Know exactly what's in stock across all channels. Every order placed is instantly deducted from your inventory.",
        imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
    },
    {
        id: "ecommerce-vendor-mgmt",
        title: "Manufacturer & Supplier Management",
        description: "Keep track of all your product manufacturers, manage purchase orders, and monitor your shipment statuses effortlessly.",
        imageSrc: "/assets/features-page/featurescard-banners/purchases-banner.webp",
    },
    {
        id: "ecommerce-variants",
        title: "SKU & Variant Tracking",
        description: "Manage different product SKUs, sizes, colors, and variants in one easy-to-navigate catalog across all platforms.",
        imageSrc: "/assets/features-page/featurescard-banners/inventory-banner.webp",
    },
    {
        id: "ecommerce-loyalty",
        title: "Customer & Loyalty Management",
        description: "Build relationships with your online customers using integrated CRM tools to track their preferences and order history.",
        imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
    },
    {
        id: "ecommerce-finances",
        title: "Ecommerce Financial Reporting",
        description: "Monitor your ecommerce business's financial health with detailed reports on sales, refunds, and operating expenses.",
        imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
    },
    {
        id: "ecommerce-integration",
        title: "Multi-Platform Store Integration",
        description: "Sync your Shopify, WooCommerce, Amazon, and other stores to manage all inventory and orders in one place.",
        imageSrc: "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
    },
];

export const ECOMMERCE_INVENTORY_TESTIMONIAL_DATA = {
    heading: "What Do Our Clients Say About Owners Inventory?",
    paragraph: "",
    secondHeading: "Inventory Management Made Easy",
    secondDescription: "You can take full control over your online business inventory by using a system specifically designed for eCommerce. This system helps you grow and stay organized.",
    whyChooseTitle: "Why Choose Us?",
    whyChooseDescription: "Our system gives you complete control of your online inventory and business operations. This system is built to help you simplify daily tasks and reduce mistakes, while also helping your business grow more quickly with greater visibility.",
};

export const ECOMMERCE_INVENTORY_TESTIMONIAL_FEATURES = [
    {
        id: "1",
        title: "Simple Setup",
        description: "It is easy to install and does not affect your day-to-day operations. It is easy to get up and running without the need for technical knowledge or lengthy training.",
        icon: "testWhychoseIcon1",
    },
    {
        id: "2",
        title: "Reliable Performance",
        description: "Our system is able to handle high order volumes, multiple platforms and sales channels with ease. It ensures your business runs smoothly, even during busy periods.",
        icon: "testWhychoseIcon2",
    },
    {
        id: "3",
        title: "Clear Inventory Visibility",
        description: "It is always possible to see the stock levels and their locations. You can avoid unnecessary losses, confusion and stock mismatches by getting real-time updates.",
        icon: "testWhychoseIcon3",
    },
    {
        id: "4",
        title: "Reliable Reporting",
        description: "You can get detailed information about your inventory, sales, and profit. You can use these reports to better understand the performance of your business and make more informed decisions.",
        icon: "testWhychoseIcon4",
    },
    {
        id: "5",
        title: "Flexibility",
        description: "This system supports e-commerce companies of any size. It adapts to the needs of any business, whether it is a small shop or an established brand.",
        icon: "testWhychoseIcon5",
    },
    {
        id: "6",
        title: "Secure Access",
        description: "Only authorized users have access to certain features and data. Your business data is kept safe.",
        icon: "testWhychoseIcon6",
    },
    {
        id: "7",
        title: "Integration and Addons",
        description: "Our system integrates seamlessly with shipping platforms, accounting software, payment gateways, and eCommerce platforms. The integrations improve productivity and reduce the amount of manual work.",
        icon: "testWhychoseIcon7",
    },
];

export const ECOMMERCE_INVENTORY_TOOLS_DATA = {
    heading: "Integration and Tools",
    paragraph: "Our software is compatible with accounting systems, shipping systems, payment gateways and eCommerce platforms. The integrations improve productivity and reduce the amount of manual work.",
    tools: [
        { id: 1, name: "Shopify", image: "/assets/home-page-images/tools-section/shopify.svg" },
        { id: 2, name: "WooCommerce", image: "/assets/home-page-images/tools-section/woocomerce.svg" },
        { id: 3, name: "QuickBooks", image: "/assets/home-page-images/tools-section/quick-book.svg" },
        { id: 4, name: "Xero", image: "/assets/home-page-images/tools-section/xero.svg" },
        { id: 5, name: "Stripe", image: "/assets/home-page-images/tools-section/stripe.svg" },
    ],
};
