import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Healthcare Inventory Management — UnifiedPlatform Section ─────────────
export const HEALTHCARE_INVENTORY_UNIFIED_HEADING = "Challenges Healthcare Organizations Face Today";

export const HEALTHCARE_INVENTORY_UNIFIED_PARAGRAPH = "Managing healthcare inventory is complex because even small errors can impact patient care. Healthcare service providers face constant operational and compliance challenges, which make it difficult to have control over daily tasks.";

export const HEALTHCARE_INVENTORY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
    {
        id: "1",
        icon: "UnifiedIcon1",
        title: "Lack of Visibility",
        description:
            "Healthcare providers struggle to maintain real-time visibility of inventory across departments. This makes tracking essential medical supplies inefficient and leads to miscommunication or delayed decisions.",
    },
    {
        id: "2",
        icon: "UnifiedIcon2",
        title: "Frequent Stock outs",
        description:
            "Without proper inventory control, essential medical supplies can run out unexpectedly. It disrupts patient care and makes it difficult for staff to handle emergency situations.",
    },
    {
        id: "3",
        icon: "UnifiedIcon3",
        title: "Expiry and Batch Tracking Issues",
        description:
            "Managing expiry dates and batch numbers manually increases the risk of using outdated medical supplies, which affects patient safety and causes damage to the healthcare facility's reputation.",
    },
    {
        id: "4",
        icon: "UnifiedIcon4",
        title: "Overstocking and Wastage",
        description:
            "Over-ordering medical supplies due to poor demand insights leads to excess inventory and increasing storage costs. This also causes wastage of medical items and negatively impacts the financial performance of the supply chain.",
    },
    {
        id: "5",
        icon: "UnifiedIcon5",
        title: "Manual Errors",
        description:
            "Over-reliance on manual tracking methods increases the risk of incorrect data entries, misplaced stock, and inaccurate reporting, which makes overall healthcare inventory management unreliable.",
    },
    {
        id: "6",
        icon: "UnifiedIcon6",
        title: "Compliance and Audit Difficulties",
        description:
            "Healthcare providers must maintain detailed records for audits and ensure HIPAA compliance. Inconsistent tracking and documentation make compliance difficult and increase the risk of penalties or operational disruptions.",
    },
];

export const HEALTHCARE_INVENTORY_WHY_CHOOSE_CARDS = [
    {
        id: "1",
        icon: "whychoseIcon1",
        title: "Real-Time Inventory Updates",
        description:
            "The software tracks healthcare inventory across all departments in real-time with a centralized system. It allows managers to monitor stock movements and check the accurate availability of stocks.",
    },
    {
        id: "2",
        icon: "whychoseIcon2",
        title: "Batch and Expiry Tracking",
        description:
            "It tracks batch numbers and expiry dates of medical supplies consistently. It ensures only valid and safe stock is used by identifying expired items.",
    },
    {
        id: "3",
        icon: "whychoseIcon3",
        title: "Smart Stock Alerts",
        description:
            "It notifies staff before stock levels fall below critical limits. Automated alerts help maintain the availability of essential medicines and prevent unexpected shortages in emergency situations.",
    },
    {
        id: "4",
        icon: "whychoseIcon4",
        title: "Optimized Inventory Levels",
        description:
            "The system balances inventory levels with better usage understanding. It helps healthcare organizations avoid overstocking and reduce waste by keeping the right quantity of stock. This also controls the extra cost.",
    },
    {
        id: "5",
        icon: "whychoseIcon5",
        title: "Reduced Manual Errors",
        description:
            "Owners Inventory minimizes human errors with barcode-based tracking and AI automation features. It improves the accuracy of healthcare inventory management and reduces repetitive data entry tasks.",
    },
    {
        id: "6",
        icon: "whychoseIcon6",
        title: "Organized Inventory Reports",
        description:
            "The software maintains clear and structured inventory records with detailed tracking history and easy access that supports accurate internal checks and audit preparations.",
    },
];

export const HEALTHCARE_INVENTORY_FEATURE_CARDS: FeatureCardData[] = [
    {
        id: "1",
        title: "Omni-Channel and Sales Integration",
        description:
            "Owners Inventory connects healthcare providers across multiple sales and service channels. It maintains accurate records of whether medicines are issued from pharmacy counters, internal departments, or external requests. It updates stocks with every transaction. The system ensures medical supply records remain consistently accurate without duplication errors.",
        imageSrc: "/assets/industries-pages/healthcare-inventory-management-software/omini-chanel.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/inventory-management",
        buttonColor: "var(--primary-purple)",
        listVariant: "accordion",
        list: [
            { listheading: "POS Counter Sales", listdescription: "At healthcare counters, Owners Inventory enables fast and secure billing while providing accurate stock updates. Every payment is recorded in real time. This reduces manual errors in transaction recording and billing.", listSubDescription: "The system boosts healthcare services' speed and ensures staff have clear visibility of stock availability during patient interactions." },
            { listheading: "Digital Orders and External Request Handling", listdescription: "The system updates stock levels when orders are placed through digital platforms and external requests. Every issued supply is recorded in the system to prevent over-issuing. This maintains consistent stock levels across channels without manual effort or errors in inventory records." },
            { listheading: "Unified Dashboard", listdescription: "Our customizable healthcare inventory management software provides a single dashboard to monitor all activities. It ensures every department and order request stays synchronized. The dashboard displays information in an easy-to-understand way, which reduces confusion. You can manage every healthcare operation without switching between systems, which boosts productivity." },
        ]
    },
    {
        id: "2",
        title: "Insights and Performance Monitoring",
        description: "Owners Inventory provides accurate reports of your healthcare inventory usage. The insights help healthcare administrators understand demand patterns of medicines, which helps in restocking inventory according to consumer needs. Informed decision-making helps the healthcare business improve financial efficiency",
        imageSrc: "/assets/industries-pages/healthcare-inventory-management-software/better-decision.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/products",
        buttonColor: "#1AD1B9",
    },
];

export const HEALTHCARE_INVENTORY_KEY_FEATURES_CARDS = [
    {
        id: 1,
        title: "Inventory Insights",
        description: "It provides immediate insights into stock availability and usage patterns, helping healthcare teams manage medical supply inventory and prevent critical delays.",
        imageSrc: "/assets/industries-pages/healthcare-inventory-management-software/key-features-section/key-features-card1.webp",
    },
    {
        id: 2,
        title: "Barcode-based Tracking",
        description: "It tracks medical items accurately using barcode scanning, which helps staff find medicines within the right time and deliver better services to patients or customers.",
        imageSrc: "/assets/industries-pages/healthcare-inventory-management-software/key-features-section/key-features-card2.webp",
    },
    {
        id: 3,
        title: "Multi-location Inventory Control",
        description: "The multi-location system can manage and monitor medical inventory across multiple departments or facilities. It ensures the consistent availability of supplies at multiple locations.",
        imageSrc: "/assets/industries-pages/healthcare-inventory-management-software/key-features-section/key-features-card3.webp",
    },
    {
        id: 4,
        title: "Automated Stock Updates",
        description:
            "Inventory updates automatically with every transaction. The automated healthcare inventory system maintains accurate healthcare inventory records without manual intervention, reducing operational inefficiencies.",
        imageSrc: "/assets/industries-pages/healthcare-inventory-management-software/key-features-section/key-features-card4.webp",
    },
    {
        id: 5,
        title: "Smart Reporting System",
        description:
            "It generates clear reports on stock usage and inventory performance trends to ensure better restocking decisions for healthcare facility owners.",
        imageSrc: "/assets/industries-pages/healthcare-inventory-management-software/key-features-section/key-features-card5.webp",
    },
];

export const HEALTHCARE_INVENTORY_WORKFLOW_DATA = {
    heading: "Inventory Workflow of Owners Inventory",
    paragraph: "Our healthcare inventory management system follows a simple workflow that helps healthcare teams manage inventory from procurement to usage. It ensures every medical supply is tracked accurately, reducing errors, improving visibility, and supporting smooth daily healthcare operations.",
    steps: [
        {
            number: 1,
            title: "Stock Entry and Setup",
            description: "Setup starts by adding items using a barcode or manual entry. Each item's details are recorded, such as batch number, expiry date, and quantity, which keeps healthcare inventory structured for accurate tracking and easy future management across different departments."
        },
        {
            number: 2,
            title: "Centralized Inventory",
            description: "All supplies and medical equipment are categorized and stored in their designated place. The centralized system sends real-time updates. The healthcare teams can efficiently view stock availability across locations, reducing confusion. It also boosts coordination by ensuring every department has access to accurate inventory information."
        },
        {
            number: 3,
            title: "Usage and Stock Deduction",
            description: "Whenever medical supplies are issued or used, the system deducts the used quantity from the inventory. This maintains accurate tracking of consumption, prevents manual errors, and ensures awareness of available resources."
        },
        {
            number: 4,
            title: "Alerts and Replenishment Management",
            description: "The system sends automatic alerts and notifications when item expiry dates are near or stock levels are low, which helps healthcare facilities reorder supplies and equipment on time to avoid shortages and wastage. It maintains the uninterrupted availability of essential healthcare inventory."
        },
        {
            number: 5,
            title: "Performance Tracking",
            description: "The healthcare inventory management reports help staff analyze demand patterns. It helps in procurement planning and provides better control over medical supplies for long-term operational efficiency and cost management."
        },
    ]
};

export const HEALTHCARE_INVENTORY_TESTIMONIAL_DATA = {
    heading: "What Do Our Clients Say About Owners Inventory?",
    paragraph: "",
    secondHeading: "Break Free from Operational Blind Spots",
    secondDescription: "Every expired drug and missing supply carries real risk. Get a free demo of Owners Inventory today and learn how it keeps healthcare operations accurate, compliant, and fully in control.",
    whyChooseTitle: "Why Choose Owners Inventory for Healthcare Inventory Management?",
    whyChooseDescription: "Our inventory management software handles tasks efficiently where accuracy is crucial. It manages complex healthcare inventory with structured workflows and reduces the chances of human errors by eliminating manual processes.",
};

export const HEALTHCARE_INVENTORY_TESTIMONIALS = [
    {
        id: "1",
        name: "Adeel K",
        title: "Clinical Director",
        image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
        text: "We needed something that could handle expiry tracking without making things complicated. Owners Inventory helped us organize our medical supplies properly. It's simple and reliable, which helped us prevent the mistakes we used to make with manual records.",
    },
    {
        id: "2",
        name: "Petric M",
        title: "Supply Chain Manager",
        image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
        text: "After using Owners Inventory, we finally have a system that keeps things structured. Stock handling is smoother now, and we don't have to double-check things anymore.",
    },
    {
        id: "3",
        name: "Oliver P",
        title: "Facility Administrator",
        image: "/assets/features-page/testimonial-images/testinomial-girl4.webp",
        text: "What I like the most about it is the control this software provides over inventory management. It fits into our workflows easily without slowing anything down, which was our biggest concern initially.",
    },
];

export const HEALTHCARE_INVENTORY_FAQS = [
    {
        id: "1",
        question: "How does your inventory software handle large inventory?",
        answer: "Owners Inventory handles large inventory by organizing data in a structured format, such as categorization based on medicine name, usage details, and purpose. It allows quick access, faster updates, and smoother handling of bulk medicine supplies."
    },
    {
        id: "2",
        question: "Is it possible to migrate existing inventory data into the system?",
        answer: "Yes, it supports data migrations from existing financial records, inventory details, and stock usage, which help healthcare teams continue operations without starting from scratch."
    },
    {
        id: "3",
        question: "How does the system help reduce inventory discrepancies?",
        answer: "It maintains consistent records and minimizes manual intervention. This helps our inventory management system reduce mismatches between physical stock and recorded data over time."
    },
    {
        id: "4",
        question: "Can multiple users access the system at the same time?",
        answer: "Yes, our inventory software supports multi-user access. It allows different team members to work collaboratively while maintaining data consistency and controlled usage."
    },
    {
        id: "5",
        question: "Does the software support inventory management for multiple locations?",
        answer: "Yes, the system manages healthcare inventory across multiple facilities. It provides full control and oversight of inventory in different branches through a centralized dashboard. It improves coordination between healthcare organizations in different locations."
    },
];

export const HEALTHCARE_INVENTORY_KEY_FEATURES = [
    {
        id: "healthcare-billing",
        title: "Supply Order Management",
        description: "Speed up your procurement with integrated order processing and automatic stock updates for a smoother clinical experience.",
        imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
    },
    {
        id: "healthcare-stock-control",
        title: "Real-Time Multi-Location Stock",
        description: "Know exactly what's in stock across all departments. Every item used is instantly updated in your inventory.",
        imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
    },
    {
        id: "healthcare-vendor-mgmt",
        title: "Medical Manufacturer & Vendor Management",
        description: "Keep track of all your medical suppliers, manage purchase orders, and monitor your shipment statuses effortlessly.",
        imageSrc: "/assets/features-page/featurescard-banners/purchases-banner.webp",
    },
    {
        id: "healthcare-variants",
        title: "Item & Supply Tracking",
        description: "Manage different medical items, sizes, and categories in one easy-to-navigate catalog across all departments.",
        imageSrc: "/assets/features-page/featurescard-banners/inventory-banner.webp",
    },
    {
        id: "healthcare-loyalty",
        title: "Patient & Record Management",
        description: "Build better patient care using integrated CRM tools to track history and supply needs.",
        imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
    },
    {
        id: "healthcare-finances",
        title: "Financial & Compliance Reporting",
        description: "Monitor your facility's financial health with detailed reports on spending, consumption, and operational expenses.",
        imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
    },
    {
        id: "healthcare-integration",
        title: "Multi-Platform Logistics Integration",
        description: "Sync your logistics partners to manage all inventory and supply chains in one place.",
        imageSrc: "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
    },
];

export const HEALTHCARE_INVENTORY_TESTIMONIAL_FEATURES = [
    {
        id: "1",
        title: "Simplified Inventory Structures",
        description: "It handles large volumes of varied medical supplies with structured categorization, making it easier for healthcare teams to organize large and complex inventories.",
        icon: "testWhychoseIcon1",
    },
    {
        id: "2",
        title: "Batch Level Control",
        description: "Our healthcare management software manages batch-level details to improve supply traceability and ensure better handling of medicines across departments.",
        icon: "testWhychoseIcon2",
    },
    {
        id: "3",
        title: "Reduced Manual Dependency",
        description: "It eliminates manual tracking and simplifies repetitive tasks, which helps staff focus on critical medical operations instead of managing inventory records.",
        icon: "testWhychoseIcon3",
    },
    {
        id: "4",
        title: "Flexible Across Setups",
        description: "The system adapts to clinics, pharmacies, and multi-departmental organizations without disrupting workflow and requiring major upgrades, which makes it a reliable solution.",
        icon: "testWhychoseIcon4",
    },
    {
        id: "5",
        title: "Improves Coordination",
        description: "Owners Inventory keeps inventory information aligned across teams, helping different medical departments work consistently. It also reduces miscommunications and keeps stocks updated.",
        icon: "testWhychoseIcon5",
    },
    {
        id: "6",
        title: "Built for Practical Use",
        description: "The software is easy to use in healthcare environments. It ensures teams can efficiently manage medical inventory without extensive training or technical expertise.",
        icon: "testWhychoseIcon6",
    },
];

export const HEALTHCARE_INVENTORY_TOOLS_DATA = {
    heading: "Integration and Tools",
    paragraph: "The software fits into existing healthcare systems without requiring changes. It can integrate with essential healthcare tools such as ERP, CRM, and payment gateways. It helps align current billing, procurement, and internal processes. The healthcare teams can continue operations smoothly with improved inventory control. This flexibility allows the POS to connect with tools, making it easy to adapt to the healthcare environment.",
    tools: [
        { id: 1, name: "Shopify", image: "/assets/home-page-images/tools-section/shopify.svg" },
        { id: 2, name: "WooCommerce", image: "/assets/home-page-images/tools-section/woocomerce.svg" },
        { id: 3, name: "QuickBooks", image: "/assets/home-page-images/tools-section/quick-book.svg" },
        { id: 4, name: "Xero", image: "/assets/home-page-images/tools-section/xero.svg" },
        { id: 5, name: "Stripe", image: "/assets/home-page-images/tools-section/stripe.svg" },
    ],
};
