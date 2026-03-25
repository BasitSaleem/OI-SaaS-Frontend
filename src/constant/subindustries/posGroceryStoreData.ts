import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";

// ─── Grocery Store POS — UnifiedPlatform Section ──────────────────────────────
export const GROCERY_STORE_UNIFIED_HEADING = "Challenges Holding Back Grocery Stores";

export const GROCERY_STORE_UNIFIED_PARAGRAPH =
    "Grocery stores have operational difficulties that make profits lower and growth slow on a daily basis. The following are the typical problems that most grocery businesses encounter.";

export const GROCERY_STORE_UNIFIED_CARDS: UnifiedPlatformCard[] = [
   {
        id: "1",
        icon: "groceryUnifiedIcon1",
        title: "Stock Mismanagement",
        description:
            "Out-of-date products, lost goods and wrong counts cause extensive losses. Grocery stores handle thousands of moving goods daily. Paper tracking causes confusion and contraction, leading to reduced profits per year.",
    },
    {
        id: "2",
        icon: "groceryUnifiedIcon2",
        title: "Slow Checkout Lines",
        description:
            "Customers get frustrated by long queues at billing counters. Pricing processes and barcodes are manual and slow down transactions. Delays may cost stores 10-20 percent of potential sales during peak hours.",
    },
    {
        id: "3",
        icon: "groceryUnifiedIcon3",
        title: "Expiry & Wastage",
        description:
            "Goods that are perishable such as dairy, bakery, and frozen products need tight controls. Lack of effective tracking leads to stocking of expired goods on shelves which results in loss of revenue and high risk of non-compliance.",
    },
    {
        id: "4",
        icon: "groceryUnifiedIcon4",
        title: "Supplier & Reordering Confusion",
        description:
            "Procurement is complicated by the presence of a variety of distributors, fluctuating prices, and unreliable delivery times. Lack of coordination may lead to overstocking or stockouts.",
    },
    {
        id: "5",
        icon: "groceryUnifiedIcon5",
        title: "Price Fluctuations",
        description:
            "Grocery prices are subject to updates by suppliers and changes in the market. Paper-based updates increase billing mistakes and customer grievances.",
    },
    {
        id: "6",
        icon: "groceryUnifiedIcon6",
        title: "Limited Online Presence",
        description:
            "A lot of grocery stores are not utilizing online orders and delivery. Lack of integrated ecommerce means that they lose customers who would like their orders to be done digitally.",
    },
      
];

export const GROCERY_STORE_WHY_CHOOSE_CARDS = [
    {
        id: "1",
        icon: "whychoseIcon1",
        title: "Real-Time Inventory Updates",
        description:
            "Stock levels get updated immediately after each sale, returns, or purchase. This eliminates shortages and gives the right shelf availability.",
    },
    {
        id: "2",
        icon: "whychoseIcon2",
        title: "Fast Barcode Billing",
        description:
            "Rapid barcode scanning and intelligent search minimize the checkout time. Billing is always smooth and stress-free even in the rush hours.",
    },
    {
        id: "3",
        icon: "whychoseIcon3",
        title: "Expiry & Batch Tracking",
        description:
            "Track batch numbers and expiry dates easily. Get notifications on expired products and those that are about to expire to minimize wastage and enhance stock turnover.",
    },
    {
        id: "4",
        icon: "whychoseIcon4",
        title: "Smart Reordering",
        description:
            "Automatic low-stock alerts and purchase order management prevent stockouts. Suppliers and deliveries are well organized.",
    },
    {
        id: "5",
        icon: "whychoseIcon5",
        title: "Centralized Price Management",
        description:
            "Products are updated immediately in all counters and branches automatically and eradicate billing errors.",
    },
    {
        id: "6",
        icon: "whychoseIcon6",
        title: "Data-Driven Insights",
        description:
            "Real-time sales reports to make smarter purchasing choices on fast-moving, slow-moving and high-margin products.",
    },
    
    
];


export const GROCERY_STORE_FEATURE_CARDS = [
    {
        id: "1",
        title: "Omni-Channel and Sales Integration",
        description:
            "Our POS system for grocery stores links the entire sales channel, such as physical stores, online grocery websites, and mobile ordering apps, into a single synchronized system. Sell in-store and online without concern about stock mismatches, or stock with incorrect prices. All the updates are in one system and real time.Our POS system for grocery stores links the entire sales channel, such as physical stores, online grocery websites, and mobile ordering apps, into a single synchronized system. Sell in-store and online without concern about stock mismatches, or stock with incorrect prices. All the updates are in one system and real time.",
        imageSrc: "/assets/industries-pages/grocery-store-pos/jewelary-store-omini-chanel.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/pos",
        buttonColor: "var(--primary-purple)",
        list: [
            "POS Sales Management",
            "Ecommerce Operations and Online Sales",
            "Single Multi-Channel Control",
        ]
    },
    {
        id: "2",
        title: "Better Decision Reporting and Analytics",
        description:
            "High-level reporting systems give grocery stores owners clear information on the movement of the stocks, day-to-day sales, and gross margin. This will facilitate smarter buying and inventory management.",
        imageSrc: "/assets/industries-pages/grocery-store-pos/jewelary-store-better-decision.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/products",
        buttonColor: "#1AD1B9",
        list: [
            "Real-time sales and stock analysis help improve decisions.",
            "Inventory demand and reorder automation",
            "Determine wastages and enhance profit margins",
        ]
    },
];


export const GROCERY_STORE_KEY_FEATURES_CARDS = [
   
   {
        id: 1,
        title: "Fast & Accurate Billing",
        description:
            "Quick product search and barcode scanning increase the speed of the check out and customer satisfaction.",
        imageSrc: "/assets/industries-pages/grocery-store-pos/key-features-section/jewelary-store-key-card1.webp",
    },
    {
        id: 2,
        title: "Live Inventory Management",
        description:
            "All transactions are recorded in inventory and stock is always visible.",
        imageSrc: "/assets/industries-pages/grocery-store-pos/key-features-section/jewelary-store-key-card2.webp",
    },
    {
        id: 3,
        title: "Purchase & Supplier Management",
        description:
            "Make purchase orders, delivery tracking and multiple suppliers without confusion.",
        imageSrc: "/assets/industries-pages/grocery-store-pos/key-features-section/jewelary-store-key-card3.webp",
    },
    
    {
        id: 4,
        title: "Multi-Unit & Variant Support",
        description:
            "Sell products per unit, kg, gram, carton, or pack. Ideal when there are several packaging choices of the grocery products.",
        imageSrc: "/assets/industries-pages/grocery-store-pos/key-features-section/jewelary-store-key-card4.webp",
    },
    {
        id: 5,
        title: "Customer & Credit Management",
        description:
            "Keep customer information, loyalty programs and credit cards to develop long-term customer relationships.",
        imageSrc: "/assets/industries-pages/grocery-store-pos/key-features-section/jewelary-store-key-card5.webp",
    },
    {
        id: 6,
        title: "Expense & Cash Flow Tracking",
        description:
            "Monitor daily expenses and cash flow with complete financial transparency.",
        imageSrc: "/assets/industries-pages/grocery-store-pos/key-features-section/jewelary-store-key-card6.webp",
    },
    {
        id: 7,
        title: "Online Grocery Integration",
        description:
            "Operate your grocery store online with synchronized stock and prices. Accept payments online and handle delivery orders without any hassles.",
        imageSrc: "/assets/industries-pages/grocery-store-pos/key-features-section/jewelary-store-key-card7.webp",
    },
    {
        id: 8,
        title: "Multi-Branch Connectivity",
        description:
            "Control several grocery stores simultaneously with centralized control over inventory and sales.",
        imageSrc: "/assets/industries-pages/grocery-store-pos/key-features-section/jewelary-store-key-card8.webp",
    },
      {
        id: 9,
        title: "Smart Reports & Analytics",
        description:
            "Understand sales trends, stock value, and profit margins with easy-to-read reports.",
        imageSrc: "/assets/industries-pages/grocery-store-pos/key-features-section/jewelary-store-key-card9.webp",
    },
     {
        id: 10,
        title: "Staff Roles & Permissions",
        description:
            "Provide cashiers, supervisors and managers with secure access levels in order to secure sensitive data.",
        imageSrc: "/assets/industries-pages/grocery-store-pos/key-features-section/jewelary-store-key-card9.webp",
    },
    
];



export const GROCERY_STORE_WORKFLOW_DATA = {
    heading: "Inventory Workflow of Owners Inventory",
    paragraph: "Our POS software is designed for grocery stores that facilitates seamless inventory between purchase and sale.",
    steps: [
        {
            number: 1,
            title: "Inventory Procurement",
            description: "Order goods with reputable suppliers according to the forecasts of the demand. Check received goods and then add them into the system."
        },
        {
            number: 2,
            title: "Organized Storage",
            description: "Classify products according to type, brand or expiry date. Labeling enhances better shelf management and eliminates confusion."
        },
        {
            number: 3,
            title: "Real-Time Tracking",
            description: "Any stock movement, sale, returns, or transfers is automatically updated in order to monitor them accurately."
        },
        {
            number: 4,
            title: "Supplier Coordination",
            description: "Track lead times, prices, and supplier performance to ensure timely replenishment."
        },
        {
            number: 5,
            title: "Order Processing",
            description: "Orders made online and in-store update stock immediately, and orders are fulfilled correctly."
        },
         {
            number: 6,
            title: "Reporting & Analysis",
            description: "Detailed reports are used in the analysis of fast selling goods, level of wastage and profit margins."
        },
       
    ]
};

export const GROCERY_STORE_TESTIMONIALS = [
    {
        id: "1",
        name: "Sana K.",
        title: "Grocery Store Owner",
        image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
        text: "The POS system has made our supermarket operations easy. Billing has become quicker, and the mistakes in the stock have been diminished considerably. Our daily sales are now handled with a lot of confidence.",
    },
    {
        id: "2",
        name: "Alice R.",
        title: "Interior Decor Owner",
        image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
        text: "This grocery POS helps to have everything in order and simplifies the restocking process. Our checkout time was immediately increased and customers are pleased with the quicker service.",
    },
    {
        id: "3",
        name: "Marie A.",
        title: "Home Decor & Grocery Shop Owner​",
        image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
        text: "Our products are thousands each day and we do not get mixed up. Reports enable us to make improved purchasing choices, minimize wastage, and have adequate stocks.",
    },
     {
        id: "4",
        name: "Sadaf Kanwal",
        title: "Home Decor & Grocery Shop Owner​",
        image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
        text: "Prior to the use of this system, the expiry items were stressful to manage. All the sales and stock updates are now being tracked flawlessly. It saves time, mistakes are minimized and it is much easier to run our grocery store.",
    },
  
    
];

export const GROCERY_STORE_FAQS = [
    {
        id: "1",
        question: "What is Grocery POS in Owners Inventory?",
        answer: "Grocery POS in Owners Inventory is a complete system designed to help grocery businesses manage billing, inventory, and products all in one place. Whether you run a small neighborhood shop or a large supermarket chain, it helps you track stock, manage prices, and handle checkout smoothly."
    },
    {
        id: "2",
        question: "Does the software automatically update stock?",
        answer: "Yes. The system updates your stock levels automatically and instantly every time a sale is made or new items are added through purchase. You don’t have to adjust anything manually, quantities are reduced or increased on their own, helping you avoid mistakes."
    },
    {
        id: "3",
        question: "Does it support discounts and promotions?",
        answer: "Absolutely. You can easily create and manage deals, combo offers, price drops, and percentage discounts whenever you want. The system applies them correctly during billing, making it simple to run promotions and attract more customers."
    },
    {
        id: "4",
        question: "Does it fit my store size?",
        answer: "Yes. Owners Inventory is built to work for all types of stores, from small grocery setups to multi-branch supermarkets. You can start with basic features and expand as your business grows."
    },
    {
        id: "5",
        question: "Can I import my existing product list?",
        answer: "Yes. You can bring all your current products into the system easily using Excel or CSV files. Thousands of items can be uploaded within minutes, so you don’t have to enter each product manually."
    },
];

export const GROCERY_STORE_KEY_FEATURES = [
    {
        id: "grocery-billing",
        title: "Grocery Showroom Billing",
        description: "Speed up your showroom sales with integrated billing and custom item creation for a smoother client experience.",
        imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
    },
    {
        id: "grocery-stock-control",
        title: "Real-Time Grocery Stock",
        description: "Know exactly what’s in stock. Every item sold is instantly deducted from your inventory for both showroom and warehouse.",
        imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
    },
    {
        id: "grocery-vendor-mgmt",
        title: "Manufacturer & Supplier Management",
        description: "Keep track of all your grocery suppliers, manage purchase orders, and monitor your shipment statuses effortlessly.",
        imageSrc: "/assets/features-page/featurescard-banners/purchases-banner.webp",
    },
    {
        id: "grocery-variants",
        title: "Style & Material Tracking",
        description: "Manage different grocery styles, materials, and variants in one easy-to-navigate catalog system.",
        imageSrc: "/assets/features-page/featurescard-banners/inventory-banner.webp",
    },
    {
        id: "grocery-loyalty",
        title: "Client & Loyalty Management",
        description: "Build relationships with your grocery clients using integrated CRM tools to track their preferences and order history.",
        imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
    },
    {
        id: "grocery-finances",
        title: "Showroom Financial Reporting",
        description: "Monitor your showroom’s financial health with detailed reports on sales, deposits, and operating expenses.",
        imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
    },
    {
        id: "grocery-ecommerce",
        title: "Online Grocery Integration",
        description: "Sync your physical showroom with your online grocery store to manage all inventory and orders in one place.",
        imageSrc: "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
    },
];

export const GROCERY_STORE_TESTIMONIAL_DATA = {
    heading: "What Our Clients Say About Owners Inventory?",
    paragraph: "", // Optional paragraph
    secondHeading: "Manage Your Grocery Store Efficiently",
    secondDescription: "Get full control of your inventory, billing, and daily operations using a POS system designed to suit the needs of the modern grocery retailers.",
    whyChooseTitle: "Why Choose Our System?",
    whyChooseDescription: "The grocery store POS system will allow you to bill fast, track inventory and conduct your day-to-day operations effectively and in a profitable manner.",
};

export const GROCERY_STORE_TESTIMONIAL_FEATURES = [
    {
        id: "1",
        title: "Easy Setup",
        description: "The interface is simple and easy to use. The installation is fast and the disruption to your day-to-day activities in the store is minimal.",
        icon: "testWhychoseIcon1",
    },
    {
        id: "2",
        title: "Reliable Performance",
        description: "It runs smoothly and it does not malfunction during peak hours and high customer traffic making the checkout counters fast and stable.",
        icon: "testWhychoseIcon2",
    },
    {
        id: "3",
        title: "Clear Inventory",
        description: "All perishable items are arranged and non-perishable goods according to category, batch and expiry date, and clean and correct inventory control.",
        icon: "testWhychoseIcon3",
    },
    {
        id: "4",
        title: "Accurate Reporting",
        description: "Get easy and straightforward reports on sales, stock value, profits and hot selling items. These insights will make you make better business decisions.",
        icon: "testWhychoseIcon4",
    },
    {
        id: "5",
        title: "Flexible Features",
        description: "The product is targeted at supermarkets, mini marts, and small grocery stores of any size across the neighborhood. The system is modifiable to your business needs.",
        icon: "testWhychoseIcon5",
    },
    {
        id: "6",
        title: "Safe Access",
        description: "Role-based permissions safeguard financial and inventory information. Having secure access is given to cashiers, managers and admins based on their responsibility.",
        icon: "testWhychoseIcon6",
    },
    {
        id: "7",
        title: "Integration and Addons",
        description: "Integrates with accounting applications, e-commerce applications, barcodes, and online payment gateways. Loyalty programs, SMS notifications, multi-branch management, and supplier tracking are some of the add-ons that facilitate easy expansion of the business.",
        icon: "testWhychoseIcon7",
    },
    
];

export const GROCERY_STORE_TOOLS_DATA = {
    heading: "Integration and Tools",
    paragraph: "Contemporary jewellery inventory systems fit perfectly well with POS, accounting packages, customer relationship management (CRM), barcode readers, and ecommerce. This enables the owners to have all inventory, sales, finances, and customer relationship under one dashboard.",
    tools: [
        { id: 1, name: "Shopify", image: "/assets/home-page-images/tools-section/shopify.svg" },
        { id: 2, name: "WooCommerce", image: "/assets/home-page-images/tools-section/woocomerce.svg" },
        { id: 3, name: "QuickBooks", image: "/assets/home-page-images/tools-section/quick-book.svg" },
        { id: 4, name: "Xero", image: "/assets/home-page-images/tools-section/xero.svg" },
        { id: 5, name: "Stripe", image: "/assets/home-page-images/tools-section/stripe.svg" },
    ],
};

