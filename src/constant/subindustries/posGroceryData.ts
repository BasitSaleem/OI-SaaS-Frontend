import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";

// ─── Grocery Store POS — UnifiedPlatform Section ──────────────────────────────
export const GROCERY_UNIFIED_HEADING = "Challenges Holding Back Hardware Store";

export const GROCERY_UNIFIED_PARAGRAPH =
    "Hardware stores encounter numerous day-to-day challenges that decelerate growth and add expenses. Below are some of the challenges encountered by most store";

export const GROCERY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
    {
        icon: "/assets/unified-platform/unified-operations.svg",
        title: "Stock Confusion",
        description:
            "The problem of misplaced or miscounted items results in losses of up to 20% annually in many hardware stores. Products tend to resemble each other, and manual counts cause huge inaccuracies, there are invisible to maintain accurate inventory.",
    },
    {
        icon: "/assets/unified-platform/real-time-reporting.svg",
        title: "Slow Billing",
        description:
            "Overcrowded counters and paper-based receipts delay customer traffic. Delayed billing decreases sales at peak times and influences customer satisfaction. The delays cause the loss of 10-15% of potential sales among stores.",
    },
];

export const Grocery_WHY_CHOOSE_CARDS = [
    {
        icon: "/assets/features-page/purchases-page/why-chose/automated-buying.svg",
        title: "Real-Time Stock Accuracy",
        description:
            "Inventory updates instantly after every sale and purchase, reducing manual errors and keeping stock records accurate.",
    },
    {
        icon: "/assets/features-page/people-page/why-chose/scalable-for-growth.svg",
        title: "Faster & Smoother Billing",
        description:
            "Smart product search and barcode scanning saves time at checkout. Your billing counter remains efficient and free even at peak hours.",
    },
    {
        icon: "/assets/features-page/finance-page/why-chose/easy-to-use.svg",
        title: "Intelligent Supplier Management",
        description:
            "Owners Inventory tracks suppliers, purchase orders, and deliveries while sending automatic low stock alerts to prevent stock outs.",
    },
    {
        icon: "/assets/features-page/finance-page/why-chose/secure-reliable.svg",
        title: "Centralized Price Control",
        description:
            "Owners Inventory tracks suppliers, purchase orders, and deliveries with automatic low stock alerts to prevent stockouts.",
    },
    {
        icon: "/assets/features-page/finance-page/why-chose/secure-reliable.svg",
        title: "Instant System-Wide Updates",
        description:
            "Live sales and stock reports highlight fast & slow moving, and high profit items, helping owners plan purchases and pricing with insights.",
    },
];


export const GROCERY_FEATURE_CARDS = [
    {
        title: "Omni-Channel and Sales Integration",
        description:
            "Our inventory system links all the sales channels, including offline stores, online platforms, and mobile applications, to one and the same, synchronized platform. Our system will allow you to sell in-store using POS and online and all of it is integrated in a single platform.",
        imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/pos",
        buttonColor: "var(--primary-purple)",
        list: [
            "POS Sales Management",
            "Ecommerce Operations and Sales Online",
            "Single Multi-Channel Control"
        ]
    },
    {
        title: "Better Decision Reporting and Analytics",
        description:
            "Comprehensive reporting and analytics provide owners with a clear understanding of stock movement, sales trends, and profitability. This enables intelligent decision-making on purchases, reorders, and stock optimization.",
        imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/products",
        buttonColor: "#1AD1B9",
        list: [
            "Real-time sales and inventory analysis.",
            "Predict demand and schedule reorders.",
            "Determine revenue leakages and enhance profitability."
        ]
    },
];

export const GROCERY_WORKFLOW_DATA = {
    heading: "Inventory Workflow of Owners Inventory",
    paragraph: "Our POS software for hardware store operations automatically updates stock levels, making inventory management effortless.",
    steps: [
        {
            number: 1,
            title: "Inventory Acquisition",
            description: "Owners begin by ordering products with reliable suppliers according to demand and inventory levels. New stock is thoroughly checked for quality and quantity. After verification, the products are entered into the inventory system so that they can be tracked properly."
        },
        {
            number: 2,
            title: "Stock Organization & Storage",
            description: "Products are kept in shelves, bins or warehouses based on type, size or category. It is easy to find things because they are well-labeled and organized. This minimizes mistakes, saves time for staff and eliminates confusion of stocks."
        },
        {
            number: 3,
            title: "Inventory Tracking",
            description: "All inventory movements, such as sales, transfers, and returns, are updated in real-time. This ensures that the owners are aware of the stock levels at any given time."
        },
    ]
};

export const GROCERY_TESTIMONIALS = [
    {
        name: "Sadia Noor",
        title: "Business Owner",
        image: "/assets/home-page-images/testimonial-section/testimonial-1.webp",
        text: "Owners Inventory POS has made a huge difference in our daily operations. Billing is faster, customers don't have to wait long, it's such a relief knowing that our shelves won't suddenly run out because the system keeps everything updated.",
    },
    {
        name: "Alexa Catherine",
        title: "Store Manager",
        image: "/assets/home-page-images/testimonial-section/testimonial-2.webp",
        text: "Managing multiple branches used to be stressful, but this system has simplified everything for us. The way it tracks all stores together is impressive. The automated product updates saves us so much time.",
    },
];

export const GROCERY_FAQS = [
    {
        question: "What is a POS system for a hardware store?",
        answer: "A hardware store POS system is software that helps manage sales, inventory, and customers in a hardware store. It makes sales work faster and stock billing simpler. Shops are able to take care of their daily work better than before."
    },
    {
        question: "Can this POS system handle large inventories?",
        answer: "Yes, our hardware store POS system is designed to handle thousands of items with ease. You can track stock levels, variants, and categories across multiple locations."
    },
    {
        question: "Is the system easy to use for staff?",
        answer: "Absolutely. We've designed the interface to be intuitive and user-friendly, requiring minimal training for your staff to get started."
    },
    {
        question: "Does it provide reports and insights?",
        answer: "Yes, you get comprehensive reports on sales trends, inventory movement, and profit margins, helping you make data-driven decisions."
    },
    {
        question: "Can multiple staff members use the system safely?",
        answer: "Yes, you can create multiple user accounts with different permission levels to ensure your data is secure while allowing your team to work efficiently."
    }
];

export const GROCERY_KEY_FEATURES = [
    {
        title: "Fast & Accurate Billing",
        description: "Checkout is fast with our hardware store POS searches by barcode and smart search. Customers will move faster and your counter will remain queue-free even during rush hours.",
        imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
    },
    {
        title: "Live Inventory Management",
        description: "Each sale assists automatically update the stock. This feature ensures that your POS software used in hardware stores is also accurate to ensure you are always aware of what is in stock.",
        imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
    },
    {
        title: "Purchases Management",
        description: "Generate purchase orders, delivery tracking, and supplier management through all records of your hardware store in POS software clean and easy to retrieve.",
        imageSrc: "/assets/features-page/featurescard-banners/purchases-banner.webp",
    },
    {
        title: "Multi-Unit & Variant Support",
        description: "Manage products sold by the unit, box, various sizes, and materials. It is clear when a hardware store has products with complicated variations.",
        imageSrc: "/assets/features-page/featurescard-banners/inventory-banner.webp",
    },
    {
        title: "Customer & Credit Management",
        description: "Retain customer information, shopping history, and open credit. Your hardware store POS system assists you in sustaining long-term customer relationships.",
        imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
    },
    {
        title: "Expense & Cash Flow Control",
        description: "Keep a record of every daily cost and keep a track of your cash counter in an easy way. It maintains financial transparency of your hardware business.",
        imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
    },
    {
        title: "Online Commerce",
        description: "Track low-stock, out-of-stock and overstocked items directly out of your POS. Your data is automatically updated in all parts of the.",
        imageSrc: "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
    },
];
