import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";

// ─── Bakery POS — UnifiedPlatform Section ──────────────────────────────
export const BAKERY_UNIFIED_HEADING = "Challenges Bakeries Face Today";

export const BAKERY_UNIFIED_PARAGRAPH =
    "There are some unique challenges that come with running a successful bakery. Having high-demand, fast-moving products, and a million other variations mean you need a system that truly gets your workflow.";

export const BAKERY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
    {
        icon: "longQueue",
        title: "Long Queues During Peak Hours",
        description:
            "Morning rush, evening crowd, and weekend traffic often contribute to long lines. Slow billing is irritating to a point that your customer satisfaction rate will go down.",
    },
    {
        icon: "stockCounting",
        title: "Manual Stock Counting",
        description:
            "Most bakeries still track ingredients by hand. This results in errors, wastage and stockouts. Without knowledge in real-time, an owner can’t anticipate what needs to be restocked.",
    },
    {
        icon: "stockConfusion",
        title: "Product Variations",
        description:
            "Cakes, pastries, and breads are available in a variety of toppings, sizes and flavors. Putting lots of hard work and time to maintain it manually would be useless.",
    },
    {
        icon: "slowBilling",
        title: "Custom Orders and Pre-Bookings",
        description:
            "Event orders, birthday and wedding cakes need to be more detailed. Losing a note, forgetting details or missing deadlines can damage your reputation.",
    },
    {
        icon: "priceInconsistency",
        title: "Multiple Sales Channels",
        description:
            "Modern bakeries now have to handle walk-ins, takeaways, deliveries, online orders and also third-party app orders. As managing them separately creates chaos.",
    },
    {
        icon: "onlineVisibility",
        title: "Lack of Real-Time Report",
        description:
            "Without this type of analytics, bakeries have no way to understand which items sell best, what time their rush hours peak at, or how much inventory is ending up in the trash.",
    },
];

export const BAKERY_WHY_CHOOSE_CARDS = [
    {
        icon: "slowBilling",
        title: "Ultra-Fast Billing",
        description:
            "Our POS handles orders in seconds, letting cashiers quickly look up items, apply discounts, and complete payments efficiently during busy hours.",
    },
    {
        icon: "whychoseIcon2",
        title: "Ingredient-Level Tracking",
        description:
            "The POS tracks finished products and ingredients like flour, sugar, and butter in real time. Stock updates automatically after every sale to prevent shortages.",
    },
    {
        icon: "stockConfusion",
        title: "Menu & Variant Management",
        description:
            "Our system simplifies bakery menu management, letting you adjust cake sizes, flavors, toppings, pastries, breads, and specials quickly, update prices, or restructure categories effortlessly.",
    },
    {
        icon: "whychoseIcon5",
        title: "Custom Order & Pre-Order Module",
        description:
            "Manage special orders effortlessly with our module like custom messages, cake designs, sizes, flavors, delivery dates, customer notes, advance payments, and reminders all clearly organized.",
    },
    {
        icon: "whychoseIcon4",
        title: "Multi-Channel Sales Sync",
        description:
            "Our system combines all orders from walk-ins, takeaway, online, and delivery apps into one platform, preventing errors, avoiding double entries, and showing daily sales and efficiency clearly.",
    },
];


export const BAKERY_FEATURE_CARDS = [
    {
        title: "Omni-Channel & Sales Integration",
        description:
            "Modern bakeries sell through multiple channels, including in-store counters, online orders, and delivery platforms. Managing them separately can cause stock errors and inconsistent records. Owners Inventory connects all sales channels in one system, updating inventory instantly and giving bakery owners clear visibility of sales and stock from a single dashboard.",
        imageSrc: "/assets/industries-pages/bakery-pos/omini-chanel.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/pos",
        buttonColor: "var(--primary-purple)",
        list: [
            "POS Counter Sales",
            "Delivery and Online Integration",
            "Unified Multi-Channel Dashboard",
            "Smart Order Flow Across All Sales Channels",
            "Automated Sales and Stock Synchronization"
        ]
    },
    {
        title: "Better Analytics & Reporting",
        description:
            "Comprehensive analytics provides clear insight into trends in sales, ingredients consumption and profitability. You can determine which products sell best, identify peak times, and spot patterns of waste before it impacts your margins.",
        imageSrc: "/assets/industries-pages/bakery-pos/better-decision.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/products",
        buttonColor: "#1AD1B9",
        list: [
            "Security, Accuracy & Compliance",
            "Predict demand and schedule reorders.",
            "Determine revenue leakages and enhance profitability."
        ]
    },
];


export const BAKERY_KEY_FEATURES_CARDS = [
    {
        id: 1,
        title: "Streamlined Processes",
        description:
            "From the counter to the kitchen, every area of your bakery becomes interconnected. Orders become smooth and easy to follow.",
        imageSrc: "/assets/industries-pages/bakery-pos/key-features-section/key-features-card1.webp",
    },
    {
        id: 2,
        title: "Decreased Manual Labor",
        description:
            "Spreadsheets, notebooks, and manual reports are no longer mandatory to keep track of operations. Everything updates on its own, saving hundreds of hours every month.",
        imageSrc: "/assets/industries-pages/bakery-pos/key-features-section/key-features-card2.webp",
    },
    {
        id: 3,
        title: "Smart Inventory Alerts",
        description:
            "There is no need for staff to guess whether an ingredient will run out or not. Your baking cycle is maintained as the system automatically notifies you in advance in case of ingredient shortage.",
        imageSrc: "/assets/industries-pages/bakery-pos/key-features-section/key-features-card3.webp",
    },
    {
        id: 4,
        title: "Increased Owner Visibility",
        description:
            "Our dashboard allows you to monitor the performance of your bakery from anywhere whether you are in the kitchen, at home, or on the road.",
        imageSrc: "/assets/industries-pages/bakery-pos/key-features-section/key-features-card4.webp",
    },
    {
        id: 5,
        title: "Operational Consistency",
        description:
            "Orders, inventory, sales, employees, and reports are all organized under one single platform. As a result customers become satisfied and operations run smoothly.",
        imageSrc: "/assets/industries-pages/bakery-pos/key-features-section/key-features-card5.webp",
    },
    
];



export const BAKERY_WORKFLOW_DATA = {
    heading: "Inventory Workflow of Owners Inventory",
    paragraph: "Owners Inventory automates your entire production and sales cycle. Every process, from purchasing raw materials through to managing counter sales and fulfilling cake orders are integrated into one system. Your entire workflow is now managed in real-time, without the need to juggle notebooks, worksheets and manual calculations.",
    steps: [
        {
            number: 1,
            title: "Ingredient Procurement",
            description: "A bakery’s success depends on the availability of ingredients. Owners' inventory helps generate purchase orders based on the current inventory levels. The quantities of ingredients that are delivered by suppliers are recorded. It tracks supplier interactions, allowing you to make informed purchase decisions."
        },
        {
            number: 2,
            title: "Stock Organization",
            description: "The bakery must track both the raw materials and final products. Owners Inventory lets you categorize your inventory by product type, ingredient, size, flavor, or season. The structure ensures that your billing and kitchen staff is always aware of what's available. Categorization clarity reduces confusion and speed up production."
        },
        {
            number: 3,
            title: "Automatic Deduction",
            description: "Recipe-based automated deduction is a powerful feature of our bakery POS software. Products on menus are related to ingredients. The system calculates precisely which ingredients were used to make an item. Stock adjustments are made automatically. It updates inventory level to ensure accurate stocks and prevent overuse."
        },
        {
            number: 4,
            title: "Allocate Custom Orders",
            description: "Planning and coordination are essential for custom cakes and events. When a preorder is placed, Owners Inventory records details, including the flavors, sizes, notes, delivery dates, and payment methods. All information is clearly documented, which eliminates the possibility of missing deadlines."
        },
        {
            number: 5,
            title: "Reporting & Analysis",
            description: "The system gives a detailed view of your bakery performance, beyond the daily operation. It monitors the production output, ingredient consumption trends, peak sales hour, and profitability.  Accurate reports help optimize pricing and adjust production volume, allowing decisions based on real data, not assumptions."
        },
       
    ]
};

export const BAKERY_TESTIMONIALS = [
    {
        name: "Sarah Mitchell",
        title: "Bakery Owner",
        image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
        text: "The POS system has made billing faster and more efficient. We no longer have to struggle at rush hour.",
    },
    {
        name: "James Carter",
        title: "Bakery Manager",
        image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
        text: "Managing cake orders has never been easier. Every detail is properly recorded, nothing gets overlooked.",
    },
    {
        name: "Oliver Smith",
        title: "Operations Manager",
        image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
        text: "Our bakery now has a clear view of its sales and stock. We can make confident purchasing and pricing decisions",
    },
    
];

export const BAKERY_FAQS = [
    {
        question: "Does our POS support custom orders as well?",
        answer: "Yes, your POS seamlessly handles custom orders. Sizes, notes, designs, and payments can be all recorded. It also lets you store templates for custom orders that are often requested."
    },
    {
        question: "Can I manage my ingredients individually?",
        answer: "Yes, of course. With every sale, each ingredient is automatically updated. To prevent storage during traffic hours, you can also set low-stock alerts."
    },
    {
        question: "Does the system work well for small bakeries?",
        answer: "Yes, it works well for both small and large setups. Because of its modular features, you can start small and grow big."
    },
    {
        question: "Do you provide support for several branches?",
        answer: "Absolutely, it is possible to oversee every branch from one single dashboard. You can quickly compare performance across locations with centralized reporting."
    },
];

export const BAKERY_KEY_FEATURES = [
    {
        title: "Fast & Accurate Billing",
        description: "Checkout is fast with our bakery POS — search by ISBN, barcode, or title. Customers move faster and your counter remains queue-free even during rush hours.",
        imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
    },
    {
        title: "Live Inventory Management",
        description: "Each sale automatically updates the stock. This ensures that your bakery POS software is always accurate so you know what titles are in stock.",
        imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
    },
    {
        title: "Purchases Management",
        description: "Generate purchase orders, delivery tracking, and publisher management with all records of your bakery in POS software clean and easy to retrieve.",
        imageSrc: "/assets/features-page/featurescard-banners/purchases-banner.webp",
    },
    {
        title: "Multi-Category & Edition Support",
        description: "Manage books across genres, editions, and formats. Ideal for bakerys with large, varied catalogues.",
        imageSrc: "/assets/features-page/featurescard-banners/inventory-banner.webp",
    },
    {
        title: "Customer & Loyalty Management",
        description: "Retain customer information, purchase history, and loyalty points. Your bakery POS system helps sustain long-term customer relationships.",
        imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
    },
    {
        title: "Expense & Cash Flow Control",
        description: "Keep a record of every daily cost and track your cash counter with ease. It maintains financial transparency of your bakery business.",
        imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
    },
    {
        title: "Online Commerce",
        description: "Track low-stock, out-of-stock, and overstocked titles directly from your POS. Your data is automatically updated across all parts of the system.",
        imageSrc: "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
    },
];

export const BAKERY_TESTIMONIAL_DATA = {
    heading: "What Our Clients Say About Us?",
    paragraph: "", // Optional paragraph
    secondHeading: "Manage Your Bakery Effectively",
    secondDescription: "With a modern POS designed for bakeries, you can take full control over ingredients, sales and custom orders.",
    whyChooseTitle: "Why Choose Our System?",
    whyChooseDescription: "Owners Inventory was designed specifically to support bakery workflows. The system combines performance and simplicity so that you can concentrate on the baking process while it handles all the other operations.",
};

export const BAKERY_TESTIMONIAL_FEATURES = [
    {
        title: "Simple Setup",
        description: "Installing and configuring the system according to your bakery menu structure and ingredients is simple. It is easy to use and requires minimal training.",
        icon: "testWhychoseIcon1",
    },
    {
        title: "Reliable Performance",
        description: "The system is designed to perform well in busy environments. It works smoothly during morning rush hours and evening peak times. The billing process is fast and reliable, so customers can be served quickly.",
        icon: "testWhychoseIcon2",
    },
    {
        title: "Clear Inventory Control",
        description: "Each ingredient is accurately tracked in real-time. It is easy to know exactly what you have in stock and which products need replenishment.",
        icon: "testWhychoseIcon3",
    },
    {
        title: "Reliable Reporting",
        description: "Simple and easy to understand reports are available that show sales, profit, ingredients used, and peak times. This information helps you to make better pricing and buying decisions.",
        icon: "testWhychoseIcon4",
    },
    {
        title: "Flexibility & Scalability",
        description: "The system is flexible and adapts without any complexity to the growth of your business, whether you are a neighborhood baker or planning to expand to multiple locations.",
        icon: "testWhychoseIcon5",
    },
    {
        title: "Safe Access",
        description: "Permissions based on roles protect confidential business data. Each of the cashiers, chefs, and managers has their own access control, which ensures security and discipline.",
        icon: "testWhychoseIcon6",
    },
    {
        title: "Integration and Addons",
        description: "Integrates with accounting software, ecommerce, barcode scanners, and payment gateways. Add-ons like loyalty programs, SMS, multi-branch, and supplier portals for easy scaling.",
        icon: "testWhychoseIcon7",
    },
];

export const BAKERY_TOOLS_DATA = {
    heading: "Integration and Tools",
    paragraph: "Contemporary inventory solutions are compatible with POS, accounting, CRM, and e-commerce solutions. This enables bakery owners to control inventory, sales, finances, and customer data on one dashboard.",
    tools: [
        { id: 1, name: "Shopify", image: "/assets/home-page-images/tools-section/shopify.svg" },
        { id: 2, name: "WooCommerce", image: "/assets/home-page-images/tools-section/woocomerce.svg" },
        { id: 3, name: "QuickBooks", image: "/assets/home-page-images/tools-section/quick-book.svg" },
        { id: 4, name: "Xero", image: "/assets/home-page-images/tools-section/xero.svg" },
        { id: 5, name: "Stripe", image: "/assets/home-page-images/tools-section/stripe.svg" },
    ],
};
