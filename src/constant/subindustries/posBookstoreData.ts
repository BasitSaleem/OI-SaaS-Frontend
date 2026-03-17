import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";

// ─── Bookstore POS — UnifiedPlatform Section ──────────────────────────────
export const BOOKSTORE_UNIFIED_HEADING = "Challenges That Bookstores Face Today";

export const BOOKSTORE_UNIFIED_PARAGRAPH =
    "With poor data, managing books, stationery, and suppliers becomes challenging for daily operations. Powerful tools are required to keep all titles visible, regularly updated, and ready to sell.";

export const BOOKSTORE_UNIFIED_CARDS: UnifiedPlatformCard[] = [
   {
        id: "1",
        icon: "stockConfusion",
        title: "Stock Confusion",
        description:
            "Many bookstores struggle with inaccurate or missing stock data. Small bookstores, many stores lose sales due to the inability to find books when needed. Employees tend to waste more time searching rather than selling.",
    },
    {
        id: "2",
        icon: "slowBilling",
        title: "Slow Billing",
        description:
            "Delays at checkout lower customer satisfaction and cause congestion at the most active times. Minor errors in manual billing also lead to confusion, particularly when working with ISBN codes.",
    },
    {
        id: "3",
        icon: "onlineMarketing",
        title: "Online Marketing Competitions",
        description:
            "Online stores offer faster purchasing and massive discounts. Physical bookstores are under pressure since customers demand equal speed and accuracy in stores.",
    },
    {
        id: "4",
        icon: "onlineVisibility",
        title: "Weak Sales Insights",
        description:
            "Most stores lack the knowledge related to authors, genres, or publishers that are the bestsellers. When reports are not complete or old, it makes the decisions more difficult.",
    },
    {
        id: "5",
        icon: "priceInconsistency",
        title: "Complex Discount Handling",
        description:
            "Promotions of World Book Day, author birthdays or new releases frequently occur in bookstores. Pricing by a manual discount planning process is inconsistent and slow to reprice across shelves.",
    },
    {
        id: "6",
        icon: "schoolRush",
        title: "Seasonal School Rush",
        description:
            "Bookstores dealing with school material are busy during the admission season. Cashiers waste time choosing several books manually, thereby slowing the whole process.",
    },
    {
        id: "7",
        icon: "customerPricing",
        title: "Mixed Customer Pricing",
        description:
            "Mixed customer types will need different pricing models. There are lots of stores that cannot keep the right prices for bulk purchasers and frequent readers.",
    },
];

export const BOOKSTORE_WHY_CHOOSE_CARDS = [
    {
        id: "1",
        icon: "stockConfusion",
        title: "Real-Time Stock Accuracy",
        description:
            "The inventory is automatically updated after each sale, return, or purchase. You can always tell the number of copies of each title.",
    },
    {
        id: "2",
        icon: "slowBilling",
        title: "Faster & Smoother Billing",
        description:
            "Barcode scanning by ISBN and smart search makes checkout quick and efficient even during rush hours",
    },
    {
        id: "3",
        icon: "supplierMisalignment",
        title: "Smart Supplier Management",
        description:
            "Track Publishers, distributors, purchase orders, and deliveries and receive low-stock notifications on popular books.",
    },
    {
        id: "4",
        icon: "whychoseIcon5",
        title: "Centralized Price Control",
        description:
            "Immediately update the price of books in all branches and sales channels without creating billing discrepancies.",
    },
    {
        id: "5",
        icon: "whychoseIcon4",
        title: "Data-Driven Decision Making",
        description:
            "Live reports show bestselling genres, top authors, seasonal demand trends, and profit margins to guide smarter purchasing.",
    },
    
];


export const BOOKSTORE_FEATURE_CARDS = [
    {
        id: "1",
        title: "Omni-Channel and Sales Integration",
        description:
            "stores and mobile sales to one synchronized platform. You are able to sell in the store using POS and at the same time online and all that is incorporated in a single system.",
        imageSrc: "/assets/industries-pages/bookstore-pos/bookstore-omini-chanel.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/pos",
        buttonColor: "var(--primary-purple)",
        list: [
            "POS Sales Management",
            "Ecommerce Operations and Sales Online",
            "Single Multi-Channel Control",
        ]
    },
    {
        id: "2",
        title: "Better Decision Reporting and Analytics",
        description:
            "Comprehensive reporting and analytics give bookstore owners clear insights into stock movement, sales trends, and profitability. This helps in smarter purchasing, reordering and optimization of books on time.",
        imageSrc: "/assets/industries-pages/bookstore-pos/bookstore-better-decision.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/products",
        buttonColor: "#1AD1B9",
        list: [
            "Real-time sales and inventory control.",
            "Forecast demand and schedule reorders.",
            "Determine slow moving titles and enhance stock turnover.",
        ]
    },
];


export const BOOKSTORE_KEY_FEATURES_CARDS = [
    {
        id: 1,
        title: "Smart Book & Stationery Inventory Management",
        description:
            "The system keeps all books and stationery at the right level of stock. Stationery Inventory is also easy to manage as the dashboard shows different quantities and categories.",
        imageSrc: "/assets/industries-pages/bookstore-pos/key-features-section/bookstore-key-card1.webp",
    },
    {
        id: 2,
        title: "Quick and Simple Billing",
        description:
            "Barcode scanning and a clean billing screen make checkout quicker. Customers are fond of short queues and accurate receipts.",
        imageSrc: "/assets/industries-pages/bookstore-pos/key-features-section/bookstore-key-card2.webp",
    },
    {
        id: 3,
        title: "Author-Wise & Genre-Wise Sales Insights",
        description:
            "Using our Bookstore POS system, you can have the sales data organized by the author or genre. You will receive reports that will show the trending authors or most selling categories.",
        imageSrc: "/assets/industries-pages/bookstore-pos/key-features-section/bookstore-key-card3.webp",
    },
    {
        id: 4,
        title: "Organised Supplier & Purchase Management",
        description:
            "The purchase orders and suppliers are located in a single location. Store owners get a clear picture of costs, stock requirements, and order history.",
        imageSrc: "/assets/industries-pages/bookstore-pos/key-features-section/bookstore-key-card4.webp",
    },
    {
        id: 5,
        title: "Customer Profiles & Loyalty Tracking",
        description:
            "All the personal data and buying history of each customer are automatically saved. The store can easily offer loyalty points and customised offers.",
        imageSrc: "/assets/industries-pages/bookstore-pos/key-features-section/bookstore-key-card5.webp",
    },
    {
        id: 6,
        title: "Online Order & In-Store Syncing",
        description:
            "In the Bookstore POS Software, online and walk-in sales are connected. The stock is updated instantly, and hence there is no confusion between channels.",
        imageSrc: "/assets/industries-pages/bookstore-pos/key-features-section/bookstore-key-card6.webp",
    },
    {
        id: 7,
        title: "Real-Time Sales & Stock Reports",
        description:
            "You can access instant sales and stock reports for quick, informed decision-making.",
        imageSrc: "/assets/industries-pages/bookstore-pos/key-features-section/bookstore-key-card7.webp",
    },
    {
        id: 8,
        title: "Multi-Branch Connectivity",
        description:
            "One dashboard keeps all store branches up-to-date with sales, pricing, and stock changes.",
        imageSrc: "/assets/industries-pages/bookstore-pos/key-features-section/bookstore-key-card8.webp",
    },
    
];



export const BOOKSTORE_WORKFLOW_DATA = {
    heading: "Inventory Workflow of Owners Inventory",
    paragraph: "Our POS software in the bookstore automates inventory operations to be accurate and efficient, with all the book movements being traced between purchase and sale.",
    steps: [
        {
            number: 1,
            title: "Inventory Acquisition",
            description: "Books are ordered by publishers and distributors based on the demand forecasts. Verify quantities and conditions and add them to the system. This ensures that you only have the right and saleable inventory in your inventory books."
        },
        {
            number: 2,
            title: "Stock Organization & Storage",
            description: "Sort books into genres, authors, publishers or sections to identify them easily and handle them faster. Adequate organization saves time on search and enhances in-store shopping."
        },
        {
            number: 3,
            title: "Inventory Tracking",
            description: "Sales, returns and transfers are automatically updated in real time and the availability is correct. This avoids stock mismatch and assists in avoiding lost sales."
        },
        {
            number: 4,
            title: "Supplier & Purchasing",
            description: "Keep good records of suppliers, monitor lead times and purchase cycles. Improved management of suppliers will guarantee timely replenishment of the bestsellers."
        },
        {
            number: 5,
            title: "Order Fulfillment",
            description: "When a book is sold or reserved, the system updates stock immediately, reducing overselling. This will ensure that customers are always provided with the right information on availability."
        },
         {
            number: 6,
            title: "Reporting & Analysis",
            description: "Examine the trends in genres, authors, and prices to make improved stocking choices. Evidence-based information is used to maximize inventory investment and profit maximization."
        },
       
    ]
};

export const BOOKSTORE_TESTIMONIALS = [
    {
        id: "1",
        name: "Sarah M.",
        title: "City Bookstore",
        image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
        text: "Everything is easy with Owners Inventory Bookstore POS Software. Billing is quicker, and books remain organised. Now, Stationery Inventory Management is also very easy.",
    },
    {
        id: "2",
        name: "Ahmed R.",
        title: "Knowledge Hub",
        image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
        text: "The software assists us in tracking all titles and stationery. Our operations are smooth with multi-branch syncing and online order integration. Owners' Inventory is convenient and dependable.",
    },
    {
        id: "3",
        name: "Priya K.",
        title: "Read & Learn​",
        image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
        text: "Discounts, author-wise sales and Stationery Inventory Management have become easy to handle. The Bookstore POS Software offers simple to understand reports, which help us make superior decisions and plan our promotions better.",
    },
    {
        id: "4",
        name: "Daniel S.",
        title: "BookWorld​",
        image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
        text: "The POS Software of Owners Inventory Bookstore has transformed our bookstore. ISBN tracking, inventory updates and stationery management is not interrupted. Billing is fast and accurate even during peak school seasons. Our clients and employees like the more streamlined experience.",
    },
    
];

export const BOOKSTORE_FAQS = [
    {
        id: "faq-isbn-support",
        question: "Does the system support ISBN scanning?",
        answer: "Yes, our POS is fully compatible with barcode and ISBN scanners, making it easy to add and sell books quickly."
    },
    {
        id: "faq-manage-genres",
        question: "Can I manage different genres and categories?",
        answer: "Absolutely. You can create as many categories and sub-categories as you need to organize your bookstore effectively."
    },
    {
        id: "faq-online-store",
        question: "Does it integrate with my online bookstore?",
        answer: "Yes, we support integration with major e-commerce platforms like Shopify and WooCommerce to keep your stock synced."
    },
    {
        id: "faq-customer-history",
        question: "Can I track customer purchase history?",
        answer: "Yes, our system allows you to maintain customer profiles and view their past purchases and loyalty points."
    },
];

export const BOOKSTORE_KEY_FEATURES = [
    {
        id: "fast-book-billing",
        title: "Fast Book Billing",
        description: "Speed up your checkout process with barcode scanning. Search by title, author, or ISBN to handle morning rushes with ease.",
        imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
    },
    {
        id: "live-stock-control",
        title: "Live Stock Control",
        description: "Every book sold is automatically deducted from your inventory, giving you a real-time view of what's on your shelves.",
        imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
    },
    {
        id: "vendor-management",
        title: "Publisher & Vendor Management",
        description: "Maintain records of your publishers and suppliers. Generate purchase orders and track shipments with ease.",
        imageSrc: "/assets/features-page/featurescard-banners/purchases-banner.webp",
    },
    {
        id: "edition-tracking",
        title: "Edition & Format Tracking",
        description: "Manage different editions, formats, and conditions of books within a single, organized catalog.",
        imageSrc: "/assets/features-page/featurescard-banners/inventory-banner.webp",
    },
    {
        id: "loyalty-programs",
        title: "Loyalty & CRM",
        description: "Build strong relationships with your readers through loyalty programs and personalized offers based on their habits.",
        imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
    },
    {
        id: "financial-reporting",
        title: "Financial Reporting",
        description: "Keep track of your bookstore's finances with detailed sales and expense reports to ensure business growth.",
        imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
    },
    {
        id: "ecommerce-integration",
        title: "E-commerce Integration",
        description: "Seamlessly connect your physical bookstore with your online shop to manage all your sales from one platform.",
        imageSrc: "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
    },
];

export const BOOKSTORE_TESTIMONIAL_DATA = {
    heading: "What Our Clients Say About Us?",
    paragraph: "", // Optional paragraph
    secondHeading: "All-in-One Inventory Solution for Bookstores",
    secondDescription: "With a modern POS designed for bakeries, you can take full control over ingredients, sales and custom orders.",
    whyChooseTitle: "Why Choose Our System?",
    whyChooseDescription: "Owners' Inventory makes bookstore management simple, fast, and reliable. Every feature is built to help stores save time, reduce errors, and boost sales. From books to stationery, every item stays organised and accessible.",
};

export const BOOKSTORE_TESTIMONIAL_FEATURES = [
    {
        id: "1",
        title: "Accurate Stock Management",
        description: "Books and stationery always have a clear inventory level. Real-time updates helps in avoiding stock errors.",
        icon: "testWhychoseIcon1",
    },
    {
        id: "2",
        title: "Faster Billing & Checkout",
        description: "Customers like short queues and fast billing. The system manages ISBN codes and bundles easily.",
        icon: "testWhychoseIcon2",
    },
    {
        id: "3",
        title: "Data-Driven Decisions",
        description: "Detailed reports list sales by author, genre, or category. Real-time insights enable store owners to make smart decisions.",
        icon: "testWhychoseIcon3",
    },
    {
        id: "4",
        title: "Flexible Discounts & Pricing",
        description: "Special offers in terms of author, genre or publisher are not difficult to manage. Pricing in wholesale and retail may be different.",
        icon: "testWhychoseIcon4",
    },
    {
        id: "5",
        title: "Multi-Branch & Online Sync",
        description: "All the branches are connected, and the orders are synchronised online. Stock and sales updates are done in all the locations in real-time.",
        icon: "testWhychoseIcon5",
    },
    {
        id: "6",
        title: "Reliable Support & Training",
        description: "Our team is available 24/7. Onboarding and support make sure that stores run well on the first day.",
        icon: "testWhychoseIcon6",
    },
    {
        id: "7",
        title: "Secure & Stable Platform",
        description: "Offline mode ensures that sales are maintained even when WiFi is unavailable. The transactions and payments are not impacted.",
        icon: "testWhychoseIcon7",
    },
];

export const BOOKSTORE_TOOLS_DATA = {
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
