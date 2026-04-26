import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Beauty Salon POS — UnifiedPlatform Section ──────────────────────────────
export const BEAUTY_SALON_UNIFIED_HEADING = "Challenges that Modern Beauty Salons and Spas Face";

export const BEAUTY_SALON_UNIFIED_PARAGRAPH ="Without an efficient POS system for beauty salons, businesses face challenges in managing services, product sales, and checkouts, ultimately making daily operations disorganized and affecting overall business performance.";

export const BEAUTY_SALON_UNIFIED_CARDS: UnifiedPlatformCard[] = [
   {
        id: "1",
        icon: "UnifiedIcon1",
        title: "Slow Payment Procedures",
        description:
            "During rushed hours, checkout counters become busy if the system is not quick and accurate. The staff is forced to handle every transaction manually, which delays payment processing and affects customer experience negatively.",
    },
    {
        id: "2",
        icon: "UnifiedIcon2",
        title: "Booking Gaps",
        description:
            "Long wait times and double bookings can frustrate customers. This can reduce sales. The Owners Inventory POS System can help reduce scheduling errors.",
    },
    {
        id: "3",
        icon: "UnifiedIcon3",
        title: "Supplier Coordination Issues",
        description:
            "It can be hard to keep track of suppliers and deliveries without a centralized system. The Owners Inventory POS System can help with supplier coordination issues.",
    },
    {
        id: "4",
        icon: "UnifiedIcon4",
        title: "Lack of Business Insights",
        description:
            "Without the reports, beauty salon owners have to guess which services are selling well and which are not. The Owners Inventory POS System can help with lack of sales insights.",
    },
    {
        id: "5",
        icon: "UnifiedIcon5",
        title: "Frequent Price Changes",
        description:
            "Prices at salons change all the time and updating them by hand can lead to mistakes. The Owners Inventory POS System can help with price changes.",
    },      
     {
        id: "6",
        icon: "UnifiedIcon6",
        title: "Limited Online Presence",
        description:
            "Many salons miss out on online bookings because they do not have digital integration. The Owners Inventory POS System can help with online presence.",
    },      
];

export const BEAUTY_SALON_WHY_CHOOSE_CARDS = [
    {
        id: "1",
        icon: "whychoseIcon1",
        title: "Fast Checkout Flow",
        description:
            "Our beauty salon POS speeds up checkout by quickly processing transactions. It ensures smooth payment handling, allowing staff to serve more customers efficiently.",
    },
    {
        id: "2",
        icon: "whychoseIcon2",
        title: "Unified Sales Tracking",
        description:
            "It records both service and product sales data, helping salons to track and manage everything effectively in one place. It helps maintain accurate records and prevent missing entries.",
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
        title: "Accurate Stock Updates",
        description:
            "Owners Inventory automatically updates stocks as products are sold. This helps beauty salons maintain accurate stock levels while reducing the chances of shortages and overuse of beauty products.",
    },
    {
        id: "5",
        icon: "whychoseIcon5",
        title: "Flexible Payment Handling",
        description:
            "It supports multiple payment methods, allowing salons to handle transactions smoothly and providing customers with a better service experience. It keeps the whole payment procedure fast and secure.",
    },
    {
        id: "6",
        icon: "whychoseIcon6",
        title: "Streamlined Daily Workflows",
        description:
            "The software lets you manage salon workflows from one system by combining necessary management tools. This helps manage operations in an organized way without relying on multiple systems or tools.",
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
            { listheading: "POS Counter Sales", listdescription: "At the salon counter, POS features let you handle services and product sales quickly and accurately. Each checkout is processed with instant billing and transaction recording.", listSubDescription: "This helps salon staff manage peak-hour customers efficiently while keeping daily sales data precisely documented and organized." },
            { listheading: "Digital Order Sync", listdescription: "When salon services or products are booked from external channels, the system updates records instantly. The payments and orders are recorded in real-time to ensure that the salon's POS reflects accurate inventory and sales data without manual errors or delays." },
            { listheading: "Unified Dashboard View", listdescription: "All salon management activities are displayed in one centralized dashboard. From checkout to transactions, everything is visible in real time.", listSubDescription: "The dashboard helps salon owners monitor operations, track performance, and manage daily business workflows without needing to switch between multiple tools or systems." },
        ]
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
        title: "Product Filters",
        description:
            "Products and services are organized by category in the POS. Staff can apply a filter by name or category to locate items quickly and keep checkout moving without delays.",
        imageSrc: "/assets/industries-pages/beauty-salon-pos/key-features-section/key-feature-card1.webp",
    },
    {
        id: 2,
        title: "Loyalty Points Management",
        description:
            "The system tracks clients' loyalty points against every profile and applies them at checkout without manual intervention, while the correct reward is correctly reflected in the transaction.",
        imageSrc: "/assets/industries-pages/beauty-salon-pos/key-features-section/key-feature-card2.webp",
    },
    {
        id: 3,
        title: "Flexible Discounts",
        description:
            "Service bundles, promotional offers, and price adjustments are handled inside the same billing screen, reducing the need to calculate anything separately before the client pays.",
        imageSrc: "/assets/industries-pages/beauty-salon-pos/key-features-section/key-feature-card3.webp",
    },
    {
        id: 4,
        title: "Out of Stock Alerts",
        description:
            "When any retail product runs out of stock, the system sends automatic alerts. It helps staff to be aware of what is available in the inventory before making any recommendations or providing a service.",
        imageSrc: "/assets/industries-pages/beauty-salon-pos/key-features-section/key-feature-card4.webp",
    },
    {
        id: 5,
        title: "Split Payments",
        description:
            "Clients paying with more than one method are processed within a single transaction. The system handles cash, card, and mobile wallet combinations accurately without requiring separate entries.",
        imageSrc: "/assets/industries-pages/beauty-salon-pos/key-features-section/key-feature-card5.webp",
    },
];

export const BEAUTY_SALON_WORKFLOW_DATA = {
    heading: "Workflow of the Owners Inventory Salon POS System",
    paragraph: "The POS system for beauty salons follows a structured workflow that manages checkout, payment, and transaction processing in real time using advanced AI features. It ensures sales are recorded accurately while keeping inventory and billing fully synchronized across sales operations.",
    steps: [
        {
            number: 1,
            title: "Sales Entry Point",
            description: "The process begins at the POS machine, where any chosen product or service has been entered into the system. It triggers live transaction processing that ensures accurate recording of sales before billing."
        },
        {
            number: 2,
            title: "Bill Generation",
            description: "The system generates a bill following the addition of products or services. It precisely calculates the cost of services or products while generating the bill that will appear during the checkout process. This ensures the customer receives precise billing information before payment is initiated."
        },
        {
            number: 3,
            title: "Payment Completion",
            description: "Checkout involves processing the payment through different means, such as cash, debit card, or credit card. Each transaction is recorded instantly, which helps maintain financial records accurately and update the salon's daily sales records.",
        },
        {
            number: 4,
            title: "Stock Adjustment",
            description: "After payment confirmation, the system updates the inventory automatically. Every product that is used or sold is deducted from inventory in real time. This ensures that stock levels remain accurate, aligned with actual salon product usage. ",
        },
        {
            number: 5,
            title: "Reporting Summary Layer",
            description: "All completed transactions are compiled into structured reports within the beauty salon POS system. These insights help salon owners review sales performance, monitor revenue, and understand operational trends for better decision-making and control."
        },
        
    ]
};

export const BEAUTY_SALON_TESTIMONIALS = [
    {
        id: "1",
        name: "Hira M",
        title: "Beauty Salon Owner",
        image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
        text: "We used to experience lag in the checkouts during busy days. However, since implementing their salon POS system, the billing process has improved tremendously, and every transaction is now done with proper recordkeeping.",
    },
    {
        id: "2",
        name: "Jenna B",
        title: "Spa Owner",
        image: "/assets/features-page/testimonial-images/testinomial-girl4.webp",
        text: "It has enabled us to be organized and streamlined all our operations into one place. The system also makes our payment tracking more efficient and accurate.",
    },
    {
        id: "3",
        name: "Georgie K",
        title: "Beauty & Wellness Center Owner​",
        image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
        text: "Their salon POS software is user-friendly. Our team picked it up quickly, and now we are able to handle every salon management operation quickly.",
    },
    
];

export const BEAUTY_SALON_FAQS = [
    {
        id: "1",
        question: "Can the system handle both retail products and services separately?",
        answer: "Yes, the system allows salons to record services and product sales separately. It makes it easy to track performance for each category without mixing data."
    },
    {
        id: "2",
        question: "Does the system support discount handling during billing?",
        answer: "Discounts can be applied during billing to help salons manage promotions, special offers, or customer-specific pricing without disrupting the transaction flow."
    },
    {
        id: "3",
        question: "Can I track daily revenue without manual calculation?",
        answer: "The system automatically compiles daily sales, allowing salon owners to view revenue summaries without needing to calculate totals manually."
    },
    {
        id: "4",
        question: "Is it possible to manage multiple counters in one salon?",
        answer: "Yes, the POS system can support multiple billing counters. It allows salons to handle more customers simultaneously without creating data inconsistencies."
    },
    {
        id: "5",
        question: "Does the system require frequent maintenance or updates?",
        answer: "No, the system is designed to run smoothly without consistent manual maintenance. The software allows salon teams to focus on daily operations instead of system management."
    },
];

export const BEAUTY_SALON_KEY_FEATURES = [
    {
        id: "salon-billing",
        title: "Beauty Salon Billing",
        description: "Speed up your sales with integrated billing and custom item creation for a smoother client experience.",
        imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
    },
    {
        id: "salon-stock-control",
        title: "Real-Time Salon Stock",
        description: "Know exactly what’s in stock. Every item sold is instantly deducted from your inventory for both store and warehouse.",
        imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
    },
    {
        id: "salon-vendor-mgmt",
        title: "Manufacturer & Supplier Management",
        description: "Keep track of all your beauty salon manufacturers, manage purchase orders, and monitor your shipment statuses effortlessly.",
        imageSrc: "/assets/features-page/featurescard-banners/purchases-banner.webp",
    },
    {
        id: "salon-variants",
        title: "Item & Category Tracking",
        description: "Manage different product styles, materials, and categories in one easy-to-navigate catalog system.",
        imageSrc: "/assets/features-page/featurescard-banners/inventory-banner.webp",
    },
    {
        id: "salon-loyalty",
        title: "Client & Loyalty Management",
        description: "Build relationships with your beauty salon clients using integrated CRM tools to track their preferences and order history.",
        imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
    },
    {
        id: "salon-finances",
        title: "Financial Reporting",
        description: "Monitor your store’s financial health with detailed reports on sales, deposits, and operating expenses.",
        imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
    },
    {
        id: "salon-ecommerce",
        title: "Online Salon Integration",
        description: "Sync your physical store with your online beauty salon to manage all inventory and orders in one place.",
        imageSrc: "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
    },
];

export const BEAUTY_SALON_TESTIMONIAL_DATA = {
    heading: "What Our Clients Say?",
    paragraph: "", // Optional paragraph
    secondHeading: "Prevent Delays in Beauty Salon Operations",
    secondDescription: "Use our salon POS system that keeps every transaction organized, speeds up checkout, and helps your team handle daily operations with better consistency and control.",
    whyChooseTitle: "Why Choose Owners Inventory Salon POS Software?",
    whyChooseDescription: "Owners Inventory is built for beauty salons that need reliable billing and smooth daily operations. The system helps manage critical inventory management tasks and recordkeeping while improving daily workflows.",
};

export const BEAUTY_SALON_TESTIMONIAL_FEATURES = [
    {
        id: "1",
        title: "User-Friendly Interface",
        description: "It has an easy-to-use and friendly interface that helps salon staff to manage tasks without complex training or higher technical knowledge.",
        icon: "testWhychoseIcon1",
    },
    {
        id: "2",
        title: "No Longer Contracts",
        description: "Owners Inventory works on a flexible subscription model. You can start, stop, or upgrade anytime without committing to lengthy agreements that do not suit your budget.",
        icon: "testWhychoseIcon2",
    },
    {
        id: "3",
        title: "Dedicated Client Support",
        description: "Our support remains available in case of emergency guidance. We provide continuous support whenever any issue shows up during operations.",
        icon: "testWhychoseIcon3",
    },
    {
        id: "4",
        title: "Disruption-Free Setup",
        description: "The software is easy to set up, as it allows salons to be fully operational within hours. It loads products quickly through bulk import, and teams can start processing transactions without technical delays.",
        icon: "testWhychoseIcon4",
    },
    {
        id: "5",
        title: "Scales with Growth",
        description: "Our salon POS handles salons whether they operate from one location or scale expands to multiple. It can effectively handle increased service or product volume and more staff without complicated upgrades.",
        icon: "testWhychoseIcon5",
    },
   
];

export const BEAUTY_SALON_TOOLS_DATA = {
    heading: "Integration and Tools",
    paragraph: "Owners Inventory connects with the payment, accounting, and marketing tools your salon team already relies on. No switching between systems. No duplicate data entry. Just one connected workflow that keeps billing, client records, and financial reporting fully aligned.",
    tools: [
        { id: 1, name: "Shopify", image: "/assets/home-page-images/tools-section/shopify.svg" },
        { id: 2, name: "WooCommerce", image: "/assets/home-page-images/tools-section/woocomerce.svg" },
        { id: 3, name: "QuickBooks", image: "/assets/home-page-images/tools-section/quick-book.svg" },
        { id: 4, name: "Xero", image: "/assets/home-page-images/tools-section/xero.svg" },
        { id: 5, name: "Stripe", image: "/assets/home-page-images/tools-section/stripe.svg" },
    ],
};
