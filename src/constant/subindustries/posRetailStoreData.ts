import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";

// ─── Retail Store POS — UnifiedPlatform Section ──────────────────────────────
export const RETAIL_STORE_UNIFIED_HEADING = "Industry-Specific Challenges";

export const RETAIL_STORE_UNIFIED_PARAGRAPH =
    "Small retailers have numerous daily challenges that hinder growth. These issues tend to decrease sales, increase errors, and complicate operations.";

export const RETAIL_STORE_UNIFIED_CARDS: UnifiedPlatformCard[] = [
   {
        id: "1",
        icon: "stockConfusion",
        title: "Inventory Mismanagement",
        description:
            "Small shops find it hard to keep stock in check. This usually results in overstocking, stockouts, and missed sales.",
    },
    {
        id: "2",
        icon: "slowBilling",
        title: "Slow Checkout Process",
        description:
            "Paper billing slows down the line. Customers become frustrated, and the shop becomes inefficient.",
    },
    {
        id: "3",
        icon: "onlineMarketing",
        title: "Lack of Sales Insights",
        description:
            "Online stores offer faster purchasing and massive discounts. Physical bookstores are under pressure since customers demand equal speed and accuracy in stores.",
    },
    {
        id: "4",
        icon: "onlineVisibility",
        title: "Employee Management Issues",
        description:
            "It becomes challenging to monitor performance and shifts among the staff. This results in poor productivity and misunderstanding.",
    },
    {
        id: "5",
        icon: "priceInconsistency",
        title: "Challenges in Managing Multiple Payments",
        description:
            "Small retailers have a disadvantage in terms of cash, card, and online payments. This causes delays and mistakes.",
    },
    {
        id: "6",
        icon: "schoolRush",
        title: "No Centralized Control",
        description:
            "In the absence of adequate equipment, owners are unable to track day-to-day operations. This complicates the expansion or running of the store remotely.",
    },
   
];

export const RETAIL_STORE_WHY_CHOOSE_CARDS = [
    {
        id: "1",
        icon: "stockConfusion",
        title: "Inventory Automation for Small Retailers",
        description:
            "Accurate inventory is key for retail. Our POS automatically updates stock in real time, preventing stockouts and overstocking while improving cash flow.",
    },
    {
        id: "2",
        icon: "slowBilling",
        title: "Fast Checkout POS",
        description:
            "Long checkout lines directly impact customer satisfaction. Our platform is a small business POS that uses barcode scanning, automated billing, and other features to complete transactions in seconds.",
    },
    {
        id: "3",
        icon: "supplierMisalignment",
        title: "Data-Driven Insights",
        description:
            "Our POS system converts transaction data into insights, showing daily sales, profit margins, product performance, and employee productivity.",
    },
    {
        id: "4",
        icon: "whychoseIcon5",
        title: "Staff Performance Tracking",
        description:
            "The POS tracks employee activity, sales, performance, and shifts, boosting accountability and highlighting top performers.",
    },
    {
        id: "5",
        icon: "whychoseIcon4",
        title: "Secure Payments & Centralized Control",
        description:
            "Our POS secures every transaction and stores data encrypted in the cloud, protecting financial and customer information.",
    },
    
];


export const RETAIL_STORE_FEATURE_CARDS = [
    {
        id: "1",
        title: "Omni-Channel and Sales Integration",
        description:
            "stores and mobile sales to one synchronized platform. You are able to sell in the store using POS and at the same time online and all that is incorporated in a single system.",
        imageSrc: "/assets/industries-pages/retail-store-pos/retail-store-omini-chanel.webp",
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
            "Comprehensive reporting and analytics give retail-store owners clear insights into stock movement, sales trends, and profitability. This helps in smarter purchasing, reordering and optimization of books on time.",
        imageSrc: "/assets/industries-pages/retail-store-pos/retail-store-better-decision.webp",
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


export const RETAIL_STORE_KEY_FEATURES_CARDS = [
    {
        id: 1,
        title: "Smart Inventory Tracking",
        description:
            "Our best point of sale software for small retail businesses updates stock in real time. You always know what is in stock, what’s on sale, and what needs refilling.",
        imageSrc: "/assets/industries-pages/retail-store-pos/key-features-section/retail-store-key-card1.webp",
    },
    {
        id: 2,
        title: "Fast & Error-Free Billing",
        description:
            "Our best small business POS accelerates checkout through fast item scanning and proper billing. It saves waiting time and enhances customer satisfaction.",
        imageSrc: "/assets/industries-pages/retail-store-pos/key-features-section/retail-store-key-card2.webp",
    },
    {
        id: 3,
        title: "Clear Sales Reports & Insights",
        description:
            "Our POS system for small retail stores will provide easy-to-read reports. At a glance, you can view best-selling products, profitability, and daily sales.",
        imageSrc: "/assets/industries-pages/retail-store-pos/key-features-section/retail-store-key-card3.webp",
    },
    {
        id: 4,
        title: "Easy Staff Management",
        description:
            "Monitor employee performance, sales, and track shifts directly out of the POS. This will keep your team focused and effective.",
        imageSrc: "/assets/industries-pages/retail-store-pos/key-features-section/retail-store-key-card4.webp",
    },
    {
        id: 5,
        title: "Multiple Payment Options",
        description:
            "Receive cash, card, and digital payments within seconds. Easy payment processing enables a seamless checkout and reduces mistakes.",
        imageSrc: "/assets/industries-pages/retail-store-pos/key-features-section/retail-store-key-card5.webp",
    },
    {
        id: 6,
        title: "Centralized Control for Store Owners",
        description:
            "Sell, track inventory, and control costs from anywhere. The best POS system for a small retail shop lets you stay in control even when absent.",
        imageSrc: "/assets/industries-pages/retail-store-pos/key-features-section/retail-store-key-card6.webp",
    },
    {
        id: 7,
        title: "Customer Management & Loyalty",
        description:
            "Keep your customer information, order history, and preferences in a convenient place. Develop loyalty programs that will enable your small retail business to boost repeat sales.",
        imageSrc: "/assets/industries-pages/retail-store-pos/key-features-section/retail-store-key-card7.webp",
    },
    {
        id: 8,
        title: "Low-Stock Alerts",
        description:
            "Get real-time notifications about low stock. This avoids stockouts and enables small stores to replenish their stocks in good time.",
        imageSrc: "/assets/industries-pages/retail-store-pos/key-features-section/retail-store-key-card8.webp",
    },
      {
        id: 9,
        title: "Barcode & Label Printing",
        description:
            "Produce barcodes and price labels directly from of the POS. It maintains your inventory and enhances the precision of scanning.",
        imageSrc: "/assets/industries-pages/retail-store-pos/key-features-section/retail-store-key-card3.webp",
    },
    {
        id: 10,
        title: "Expense Tracking",
        description:
            "Enter expenses daily in a couple of clicks. This aspect provides small retailers with a clear picture of profits and expenditure.",
        imageSrc: "/assets/industries-pages/retail-store-pos/key-features-section/retail-store-key-card4.webp",
    },
    {
        id: 11,
        title: "Multi-Device Access",
        description:
            "Access POS systems in small retail stores, mobile, tablet, or desktop as it provides flexibility to operate the store anywhere.",
        imageSrc: "/assets/industries-pages/retail-store-pos/key-features-section/retail-store-key-card5.webp",
    },
    {
        id: 12,
        title: "Cloud Backup & Security",
        description:
            "All information remains secure in the cloud. Your store data is insured even in case devices are lost or damaged.",
        imageSrc: "/assets/industries-pages/retail-store-pos/key-features-section/retail-store-key-card6.webp",
    },
    {
        id: 13,
        title: "yeh data dalna hai",
        description:
            "Keep your customer information, order history, and preferences in a convenient place. Develop loyalty programs that will enable your small retail business to boost repeat sales.",
        imageSrc: "/assets/industries-pages/retail-store-pos/key-features-section/retail-store-key-card7.webp",
    },
    
];



export const RETAIL_STORE_WORKFLOW_DATA = {
    heading: "Inventory Workflow of Owners Inventory",
    paragraph: "Our POS software in the retail-store automates inventory operations to be accurate and efficient, with all the book movements being traced between purchase and sale.",
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

export const RETAIL_STORE_TESTIMONIALS = [
    {
        id: "1",
        name: "Sarah M.",
        title: "City Retail Store",
        image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
        text: "Everything is easy with Owners Inventory Retail Store POS Software. Billing is quicker, and books remain organised. Now, Stationery Inventory Management is also very easy.",
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
        text: "Discounts, author-wise sales and Stationery Inventory Management have become easy to handle. The Retail Store POS Software offers simple to understand reports, which help us make superior decisions and plan our promotions better.",
    },
    {
        id: "4",
        name: "Daniel S.",
        title: "BookWorld​",
        image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
        text: "The POS Software of Owners Inventory Retail Store has transformed our retail-store. ISBN tracking, inventory updates and stationery management is not interrupted. Billing is fast and accurate even during peak school seasons. Our clients and employees like the more streamlined experience.",
    },
    
];

export const RETAIL_STORE_FAQS = [
    {
        id: "faq-isbn-support",
        question: "Does the system support ISBN scanning?",
        answer: "Yes, our POS is fully compatible with barcode and ISBN scanners, making it easy to add and sell books quickly."
    },
    {
        id: "faq-manage-genres",
        question: "Can I manage different genres and categories?",
        answer: "Absolutely. You can create as many categories and sub-categories as you need to organize your retail-store effectively."
    },
    {
        id: "faq-online-store",
        question: "Does it integrate with my online retail-store?",
        answer: "Yes, we support integration with major e-commerce platforms like Shopify and WooCommerce to keep your stock synced."
    },
    {
        id: "faq-customer-history",
        question: "Can I track customer purchase history?",
        answer: "Yes, our system allows you to maintain customer profiles and view their past purchases and loyalty points."
    },
];

export const RETAIL_STORE_KEY_FEATURES = [
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
        description: "Keep track of your retail-store's finances with detailed sales and expense reports to ensure business growth.",
        imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
    },
    {
        id: "ecommerce-integration",
        title: "E-commerce Integration",
        description: "Seamlessly connect your physical retail-store with your online shop to manage all your sales from one platform.",
        imageSrc: "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
    },
];

export const RETAIL_STORE_TESTIMONIAL_DATA = {
    heading: "What Our Clients Say About Us?",
    paragraph: "", // Optional paragraph
    secondHeading: "All-in-One Inventory Solution for Retail Stores",
    secondDescription: "With a modern POS designed for bakeries, you can take full control over ingredients, sales and custom orders.",
    whyChooseTitle: "Why Choose Our System?",
    whyChooseDescription: "Owners' Inventory makes retail-store management simple, fast, and reliable. Every feature is built to help stores save time, reduce errors, and boost sales. From books to stationery, every item stays organised and accessible.",
};

export const RETAIL_STORE_TESTIMONIAL_FEATURES = [
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

export const RETAIL_STORE_TOOLS_DATA = {
    heading: "Integration and Tools",
    paragraph: "Contemporary inventory systems are integrated with POS, accounting software, CRM systems, and ecommerce. This enables the owners of the retail-stores to control inventory, sales, finances and customer information on a single dashboard.",
    tools: [
        { id: 1, name: "Shopify", image: "/assets/home-page-images/tools-section/shopify.svg" },
        { id: 2, name: "WooCommerce", image: "/assets/home-page-images/tools-section/woocomerce.svg" },
        { id: 3, name: "QuickBooks", image: "/assets/home-page-images/tools-section/quick-book.svg" },
        { id: 4, name: "Xero", image: "/assets/home-page-images/tools-section/xero.svg" },
        { id: 5, name: "Stripe", image: "/assets/home-page-images/tools-section/stripe.svg" },
    ],
};
