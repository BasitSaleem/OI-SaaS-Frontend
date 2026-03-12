import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";

// ─── Hardware Store POS — UnifiedPlatform Section ──────────────────────────────
export const HARDWARE_UNIFIED_HEADING = "Challenges Holding Back Hardware Store";

export const HARDWARE_UNIFIED_PARAGRAPH =
    "Hardware stores encounter numerous day-to-day challenges that decelerate growth and add expenses. Below are some of the challenges encountered by most store";

export const HARDWARE_UNIFIED_CARDS: UnifiedPlatformCard[] = [
    {
        icon: "stockConfusion",
        title: "Stock Confusion",
        description:
            "The problem of misplaced or miscounted items results in losses of up to 20% annually in many hardware stores. Products tend to resemble each other, and manual counts cause huge inaccuracies. Owners are unable to maintain accurate inventory.",
    },
    {
        icon: "slowBilling",
        title: "Slow Billing",
        description:
            "Overcrowded counters and paper-based receipts delay customer traffic. Delayed billing decreases sales at peak times and influences customer satisfaction. The delays cause the loss of 10-15% of potential sales in many stores.",
    },
    {
        icon: "supplierMisalignment",
        title: "Supplier Misalignment",
        description:
            "Delays in delivery and shortages cause gaps in the shelves. Most hardware stores deal with various suppliers and it becomes confusing to keep track of all the suppliers. Inadequate coordination escalates the stockout rates by almost 30 percent.",
    },
    {
        icon: "dataGuesswork",
        title: "Data Guesswork",
        description:
            "Most owners make decisions without appropriate numbers and insights. Trends of profit, high movement, and slow moving stock are uncertain. This ambiguity results in revenue leakage of 15–25%.",
    },
    {
        icon: "priceInconsistency",
        title: "Price Inconsistency",
        description:
            "The price updates are not easy due to frequent changes in the market. The manual changes are time-consuming and usually result in wrong billing. These errors lead to customer complaints in stores.",
    },
    {
        icon: "onlineVisibility",
        title: "Lack of Online Visibility",
        description:
            "Most hardware stores are not able to draw customers online because of low digital presence. The lack of online presence limits the growth prospects and the overall sales potential since more customers are willing to search and order products online.",
    },
];

export const Hardware_WHY_CHOOSE_CARDS = [
    {
        icon: "whychoseIcon1",
        title: "Real-Time Stock Accuracy",
        description:
            "Inventory updates instantly after every sale and purchase, reducing manual errors and keeping stock records accurate.",
    },
    {
        icon: "whychoseIcon2",
        title: "Fast & Effortless Billing",
        description:
            "Smart product search and barcode scanning saves time at checkout. Your billing counter remains efficient and free even at peak hours.",
    },
    {
        icon: "whychoseIcon3",
        title: "Intelligent Supplier Management",
        description:
            "Owners Inventory tracks suppliers, purchase orders, and deliveries while sending automatic low stock alerts to prevent stock outs.",
    },
    {
        icon: "whychoseIcon4",
        title: "Centralized Price Control",
        description:
            "Owners Inventory tracks suppliers, purchase orders, and deliveries with automatic low stock alerts to prevent stockouts.",
    },
    {
        icon: "whychoseIcon5",
        title: "Instant System-Wide Updates",
        description:
            "Live sales and stock reports highlight fast & slow moving, and high profit items, helping owners plan purchases and pricing with insights.",
    },
];


export const HARDWARE_FEATURE_CARDS = [
    {
        title: "Omni-Channel and Sales Integration",
        description:
            "Our inventory system links all the sales channels, including offline stores, online platforms, and mobile applications, to one and the same, synchronized platform. Our system will allow you to sell in-store using POS and online and all of it is integrated in a single platform.",
        imageSrc: "/assets/industries-pages/pos-hardware/omini-chanel.webp",
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
        imageSrc: "/assets/industries-pages/pos-hardware/better-decision.webp",
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


export const POS_KEY_FEATURES_CARDS = [
    {
        id: 1,
        title: "Fast & Accurate Billing",
        description:
            "Checkout is fast with our hardware store POS searches by barcode and smart search. Customers will move faster and your counter will remain stress-free even during rush hours.",
        imageSrc: "/assets/industries-pages/pos-hardware/key-features-section/key-features-card1.webp",
    },
    {
        id: 2,
        title: "Live Inventory Management",
        description:
            "Each sale would automatically update the stock. This feature ensures that your POS software used in hardware stores is also accurate to ensure you are always aware of what is in stock.",
        imageSrc: "/assets/industries-pages/pos-hardware/key-features-section/key-features-card2.webp",
    },
    {
        id: 3,
        title: "Purchases Management",
        description:
            "Generate purchase orders, delivery tracking, and supplier management. It keeps all records of your hardware store in POS software clean and easy to retrieve.",
        imageSrc: "/assets/industries-pages/pos-hardware/key-features-section/key-features-card3.webp",
    },
    {
        id: 4,
        title: "Multi-Unit & Variant Support",
        description:
            "Manage products sold by the unit, box, various sizes, and materials. It is ideal when a hardware store has products with complicated variations.",
        imageSrc: "/assets/industries-pages/pos-hardware/key-features-section/key-features-card4.webp",
    },
    {
        id: 5,
        title: "Customer & Credit Management",
        description:
            "Retain customer information, shopping history, and open credit. Your hardware store POS system assists you in sustaining long-term customer relationships.",
        imageSrc: "/assets/industries-pages/pos-hardware/key-features-section/key-features-card5.webp",
    },
    {
        id: 6,
        title: "Expense & Cash Flow Control",
        description:
            "Keep a record of every daily cost and keep a track of your cash counter in an easy way. It maintains financial transparency of your hardware business.",
        imageSrc: "/assets/industries-pages/pos-hardware/key-features-section/key-features-card6.webp",
    },
    {
        id: 7,
        title: "Online Commerce",
        description:
            "Your hardware store gets the ability to run an online e-business with the same POS system. All products stay synced, and customers always see updated stock. This feature creates new sales channels without extra effort.",
        imageSrc: "/assets/industries-pages/pos-hardware/key-features-section/key-features-card7.webp",
    },
    {
        id: 8,
        title: "Unified Branches",
        description:
            "All branches stay connected through one hardware store POS system. Stock, sales, and pricing stay updated across every location. Owners get full control of every branch from a single dashboard.",
        imageSrc: "/assets/industries-pages/pos-hardware/key-features-section/key-features-card8.webp",
    },
    {
        id: 9,
        title: "Smart Sales & Stock Reports",
        description:
            "Gain clear understanding about sales, stock worth, moving fast, and profits. These reports will make you better decisions and expand your store.",
        imageSrc: "/assets/industries-pages/pos-hardware/key-features-section/key-features-card9.webp",
    },
    {
        id: 10,
        title: "Staff Permissions and User Roles",
        description:
            "Limit access to where necessary. This secures your hardware store POS and keeps your information secure.",
        imageSrc: "/assets/industries-pages/pos-hardware/key-features-section/key-features-card10.webp",
    },
];



export const HARDWARE_WORKFLOW_DATA = {
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

export const HARDWARE_TESTIMONIALS = [
    {
        name: "Sadia Noor",
        title: "Business Owner",
        image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
        text: "The POS system has simplified our day to day work. Billing is quick and stock is never wrong. This system is making Al-Asif run well.",
    },
    {
        name: "Alexa Catherine",
        title: "Store Manager",
        image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
        text: "This is the best POS that we have tried previously. It keeps our store in order and assists us in decision-making. Since we started using it, Bright Homes has experienced fewer errors and has increased its checkout speed.",
    },
    {
        name: "Oliver Smith",
        title: "Store Manager",
        image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
        text: "Our hardware store required a system that could manage thousands of objects and maintain all of them in order. This POS system provides precisely that. It is easy to use by the staff and provides a daily report.",
    },
    {
        name: "Amelia Evans",
        title: "Store Manager",
        image: "/assets/features-page/testimonial-images/testinomial-girl4.webp",
        text: "Before using this system, I was concerned about mistakes and wastage of time. At this point, all the sales and stock updates are monitored flawlessly. It saves time, minimizes errors, and makes the process of running the store less stressful. I would strongly suggest it to anyone who wants a reliable hardware store POS software.",
    },
];

export const HARDWARE_FAQS = [
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

export const HARDWARE_KEY_FEATURES = [
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

export const HARDWARE_TESTIMONIAL_DATA = {
    heading: "Client's Voices",
    paragraph: "", // Optional paragraph
    secondHeading: "Manage Your Inventory Efficiently",
    secondDescription: "Get complete control of your stock, sales and operations with a system that is geared towards modern business.",
    whyChooseTitle: "Why Choose Our System?",
    whyChooseDescription: "Our POS system for Hardware stores ensures transparent control, fast billing, and accurate inventory, making daily operations seamless.",
};

export const HARDWARE_TESTIMONIAL_FEATURES = [
    {
        title: "Easy Setup",
        description: "We have developed a user-friendly interface that is simple to learn and operate. Quick installation with minimal disruption to daily operations.",
        icon: "testWhychoseIcon1",
    },
    {
        title: "Reliable Performance",
        description: "The hardware store POS operates consistently when there are rush hours and high workloads. Your billing counters remain quick and steady during the day.",
        icon: "testWhychoseIcon2",
    },
    {
        title: "Clear Inventory",
        description: "All items remain structured in terms of units, sizes, variants and types. You will always have clean and correct inventory of your store.",
        icon: "testWhychoseIcon3",
    },
    {
        title: "Accurate Reporting",
        description: "Sales, stock value, profits, and the best items are reported in easy formats. It will make your choices more robust as all the details are retained in sight.",
        icon: "testWhychoseIcon4",
    },
    {
        title: "Flexible Features",
        description: "The POS system at the hardware store is compatible with numerous sub-industries and products. Your hardware company gets equipment that suits actual day-to-day requirements.",
        icon: "testWhychoseIcon5",
    },
    {
        title: "Safe Access",
        description: "Cashiers, managers, and admins have their data secured by staff permissions. Your store operates safely with restricted access to all roles.",
        icon: "testWhychoseIcon6",
    },
    {
        title: "Integration and Addons",
        description: "Integrates with accounting software, ecommerce, barcode scanners, and payment gateways. Add-ons like loyalty programs, SMS, multi-branch, and supplier for easy scaling.",
        icon: "testWhychoseIcon7",
    },
];

export const HARDWARE_TOOLS_DATA = {
    heading: "Integration and Tools",
    paragraph: "Contemporary inventory solutions are compatible with POS, accounting, CRM, and e-commerce solutions. This enables the owners to control inventory, sales, finances, and customer data on one dashboard.",
    tools: [
        { id: 1, name: "Shopify", image: "/assets/home-page-images/tools-section/shopify.svg" },
        { id: 2, name: "WooCommerce", image: "/assets/home-page-images/tools-section/woocomerce.svg" },
        { id: 3, name: "QuickBooks", image: "/assets/home-page-images/tools-section/quick-book.svg" },
        { id: 4, name: "Xero", image: "/assets/home-page-images/tools-section/xero.svg" },
        { id: 5, name: "Stripe", image: "/assets/home-page-images/tools-section/stripe.svg" },
    ],
};
