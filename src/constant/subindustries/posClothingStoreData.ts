import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";

// ─── Clothing Store POS — UnifiedPlatform Section ──────────────────────────────
export const CLOTHING_STORE_UNIFIED_HEADING = "Challenges Faced by Clothing Stores";

export const CLOTHING_STORE_UNIFIED_PARAGRAPH ="";

export const CLOTHING_STORE_UNIFIED_CARDS: UnifiedPlatformCard[] = [
   {
        id: "1",
        icon: "clothingUnifiedIcon1",
        title: "Complicated Size & Color Variants",
        description:
            "When dealing with various sizes, colors, fits, and styles, confusion is likely to arise. In the absence of a proper system, stock counts become inaccurate, leading to lost sales and overstock.",
    },
    {
        id: "2",
        icon: "clothingUnifiedIcon2",
        title: "Slow Billing During Peak Hours",
        description:
            "Customers are frustrated by long queues and reduced conversion. Checkout is slowed down by manual item searches or slow POS systems, particularly when sales seasons occur.",
    },
    {
        id: "3",
        icon: "clothingUnifiedIcon3",
        title: "Frequent Returns & Exchanges",
        description:
            "Clothing stores are characterized by high returns and exchange rates. Lack of proper tracking leads to loss of items, clouded records, and loss of accuracy in revenue.",
    },
    {
        id: "4",
        icon: "clothingUnifiedIcon4",
        title: "Stock Mismatch Across Branches",
        description:
            "Improper inventory causes challenges in the movement of goods or handling of fast-moving products.",
    },
    {
        id: "5",
        icon: "clothingUnifiedIcon5",
        title: "Poor Visibility of Best-Selling Items",
        description:
            "In the absence of clear reporting, it is difficult to know which styles are working. This creates ineffective buying choices, increased dead stock, and lost opportunities.",
    },
    // {
    //     id: "6",
    //     icon: "clothingUnifiedIcon6",
    //     title: "Limited Online Presence",
    //     description:
    //         "A lot of Clothing stores are not utilizing online orders and delivery. Lack of integrated ecommerce means that they lose customers who would like their orders to be done digitally.",
    // },
      
];

export const CLOTHING_STORE_WHY_CHOOSE_CARDS = [
    {
        id: "1",
        icon: "whychoseIcon1",
        title: "Real-Time Stock Accuracy",
        description:
            "Enables to keep track of every size, color, and style without confusion. The accurate stock visibility prevents availability issues and ensures customers find what they need.",
    },
    {
        id: "2",
        icon: "whychoseIcon2",
        title: "Faster and Smoother Billing",
        description:
            "An easy-to-use POS interface and SKU barcode scanning make checkout faster and smoother, reducing queues and improving the in-store payment experience for customers.",
    },
    {
        id: "3",
        icon: "whychoseIcon3",
        title: "Intelligent Supplier Management",
        description:
            "Keeps clothing stores organized with supplier records, purchase orders, and delivery tracking. This helps maintain steady shipments of fast-moving items.",
    },
    {
        id: "4",
        icon: "whychoseIcon4",
        title: "Centralized Price Control",
        description:
            "This helps keep pricing consistent and manage promotional campaigns easily by allowing you to update prices, seasonal offers, and discounts across all branches from a centralized dashboard.",
    },
    {
        id: "5",
        icon: "whychoseIcon5",
        title: "Data-Driven Decision Making",
        description:
            "Owners POS makes it easy to understand styles that are trending or slowing down. Accurate sales reports allow you to plan purchases smarter and reduce unsold seasonal stock.",
    },
    {
        id: "6",
        icon: "whychoseIcon6",
        title: "Multi-Store Inventory Synchronization",
        description:
            "Manage inventory across multiple store locations from a single platform without discrepancies. This ensures consistent stock updates and smooth coordination between branches.",
    },
    
    
];


export const CLOTHING_STORE_FEATURE_CARDS = [
    {
        id: "1",
        title: "Omni-channel and Sales Integration",
        description:
            "The Owners POS updates inventory with every sale in real time. By connecting all the sales channels, such as physical stores, online platforms, and marketplaces, enables brands to operate under one system. This keeps stocks updated and provides a smooth shopping experience to customers. We provide:",
        imageSrc: "/assets/industries-pages/clothing-store-pos/jewelary-store-omini-chanel.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/pos",
        buttonColor: "var(--primary-purple)",
        list: [
            "POS Sales Management",
            "Ecommerce Operations and Sales Online",
            "Single Multichannel Control",
        ]
    },
    {
        id: "2",
        title: "Better Decisions with Reporting and Analytics",
        description:
            "Accurate POS reporting provides store owners with clear visibility into size-wise sales, color performance, style trends, and profitability, which allows them to improve stock management and margin control.",
        imageSrc: "/assets/industries-pages/clothing-store-pos/jewelary-store-better-decision.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/products",
        buttonColor: "#1AD1B9",
        list: [
            "Identify slow-moving stock pricing gaps and revenue leakages",
            "Forecast seasonal demands using past trends and sales history",
            "Real-time tracking of branch-level performance",
        ]
    },
];


export const CLOTHING_STORE_KEY_FEATURES_CARDS = [
   
   {
        id: 1,
        title: "Complete Variant Management",
        description:
            "The clothing store POS system handles all sizes, colors, styles, and fabrics with utmost precision. Each variant is kept in a different track to keep your inventory always right.",
        imageSrc: "/assets/industries-pages/clothing-store-pos/key-features-section/clothing-store-key-card1.webp",
    },
    {
        id: 2,
        title: "Fast & Easy Billing",
        description:
            "The retail clothing stores' POS system processes checkouts at a faster rate through barcode scanning and smart item search. Lines are shorter and clients are able to have a quality shopping experience.",
        imageSrc: "/assets/industries-pages/clothing-store-pos/key-features-section/clothing-store-key-card2.webp",
    },
    {
        id: 3,
        title: "Real-Time Inventory Tracking",
        description:
            "Real-time inventory in available on all sizes and colors. This will assist you in decreasing inventory shortages and excess in every store.",
        imageSrc: "/assets/industries-pages/clothing-store-pos/key-features-section/clothing-store-key-card3.webp",
    },
    
    {
        id: 4,
        title: "Seamless Returns & Exchanges",
        description:
            "The POS systems of clothing stores deal with returns and size swaps readily. All the actions are documented well to prevent confusion or revenue loss.",
        imageSrc: "/assets/industries-pages/clothing-store-pos/key-features-section/clothing-store-key-card4.webp",
    },
    {
        id: 5,
        title: "Customer Profiles & Loyalty",
        description:
            "Record customer preferences, sizes, purchase history and loyalty points. This keeps the shoppers entertained and assists in boosting their repeat sales.",
        imageSrc: "/assets/industries-pages/clothing-store-pos/key-features-section/clothing-store-key-card5.webp",
    },
    {
        id: 6,
        title: "Multi-Branch Sync",
        description:
            "When you have more than one outlet, this system maintains pricing, inventory and sales across all branches. That is why most retailers refer to it as the best POS system in a retail clothing store.",
        imageSrc: "/assets/industries-pages/clothing-store-pos/key-features-section/clothing-store-key-card6.webp",
    },
    {
        id: 7,
        title: "E-Commerce Integration",
        description:
            "Integrate your online shop and POS to automatically update inventory. No longer manual work, mismatched stock, or duplication.",
        imageSrc: "/assets/industries-pages/clothing-store-pos/key-features-section/clothing-store-key-card7.webp",
    },
    {
        id: 8,
        title: "Smart Sales & Performance Reports",
        description:
            "See what sells best, what sells slowly, seasonal trends, and employee performance. Make sure your decisions are supported by facts, rather than conjecture.",
        imageSrc: "/assets/industries-pages/clothing-store-pos/key-features-section/clothing-store-key-card8.webp",
    },
      {
        id: 9,
        title: "Employee Control and Management",
        description:
            "Control employees, authorization, and monitoring of activities in the system. This aids in preventing misuse, enhances accountability and also gives a smooth running of the store.",
        imageSrc: "/assets/industries-pages/clothing-store-pos/key-features-section/clothing-store-key-card9.webp",
    },
     {
        id: 10,
        title: "Discount and Promotion Management",
        description:
            "Interchangeably make and implement discounts, seasonal rates, and promotional activities. This will aid in attracting the customers, increase sales and ensure that prices are the same in all stores.",
        imageSrc: "/assets/industries-pages/clothing-store-pos/key-features-section/clothing-store-key-card1.webp",
    },
    
];

export const CLOTHING_STORE_WORKFLOW_DATA = {
    heading: "Inventory Workflow of Owners POS",
    paragraph: "Inventory workflows of our POS systems enable clothing stores to manage stock accurately and categorize by size and color.",
    steps: [
        {
            number: 1,
            title: "Inventory Acquisition",
            description: "When new clothing stocks enter the system, they are organized according to their variant details, such as colors, size, cost, and supplier information. This ensures that each item is registered correctly. POS inventory acquisitions prevent missing stock and pricing confusion."
        },
        {
            number: 2,
            title: "Stock Organization and Storage",
            description: "Inventory is organized into warehouses with effective management. Our software allows you to categorize the inventory based on style, season, and brand. This helps in handling large inventory volumes without internal confusion so the staff can locate items without wasting time."
        },
        {
            number: 3,
            title: "Inventory Tracking",
            description: "The POS system manages real-time stock movement. This provides inventory updates across all the branches in case of sale, return, and exchange. Our inventory tracking makes it easy for clothing stores to manage varied complexities and size-level mismatches."
        },
        {
            number: 4,
            title: "Supplier and Purchasing",
            description: "Clothing stores can monitor which suppliers delivered on time and which products generated higher sales with POS supplier records, purchase orders, and delivery timelines. This helps in making better restocking decisions for seasonal buying cycles."
        },
        {
            number: 5,
            title: "Order Fulfillment",
            description: "Customer orders are processed and handled accurately. The system ensures that the same variant that is selected by the customer is processed for delivery. This reduces billing errors and wrong item deliveries while lowering the exchange or return rate."
        },
         {
            number: 6,
            title: "Reporting and Analysis",
            description: "The owner's inventory generates accurate reports on best-selling styles, slow-moving stocks, seasonal trends, profit margins, and branch performance. These reports allow you to plan for restocking collections. This reduces dead stock and improves profitability."
        },
       
    ]
};

export const CLOTHING_STORE_TESTIMONIALS = [
    {
        id: "1",
        name: "Sana K.",
        title: "Clothing Store Owner",
        image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
        text: "This POS enabled us to bill faster and to handle our size and color changes without confusion. It is simple for our staff and quick for our customers.",
    },
    {
        id: "2",
        name: "Atif Aslam",
        title: "Interior Decor Owner",
        image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
        text: "We have a women's clothing shop, and stock management was a tense affair. The Owners Inventory’s POS has made our inventory up to date, our returns are hassle-free, and reports are clearer than ever. It has simplified our everyday tasks.",
    },
    {
        id: "3",
        name: "Mark R.",
        title: "Home Decor & Clothing Store Owner​",
        image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
        text: "We have several clothing stores, and manual synchronization of inventory between branches took hours daily. This POS system of Owners Inventory made it very clear. Our inventory is currently updated instantly, and the billing is instant even in the busy periods, and our staff has learned the system quite quickly. The insights and reports also allow us to know the styles that are working best. It has been a wonderful addition to our business.",
    },
     {
        id: "4",
        name: "Sadaf Kanwal",
        title: "Home Decor & Clothing Store Owner​",
        image: "/assets/features-page/testimonial-images/testinomial-girl4.webp",
        text: "We have hundreds of styles, sizes, and colors every season in our store, which makes it hard to be accurate. Everything seems to be organized after turning to the Owners' Inventory POS system. All our variants are traced, no confusion concerning exchanges, and customer profiles make us comprehend purchases preferences.",
    },
  
    
];

export const CLOTHING_STORE_FAQS = [
    {
        id: "1",
        question: "How does this POS system help with size and color variations?",
        answer: "All sizes, colors, and styles are individually tracked in our POS to keep your stock current. It is easy to know what is selling and what to restock. This minimizes mistakes and makes the management of inventory far easier for the apparel retailers."
    },
    {
        id: "2",
        question: "Can the system manage multiple branches?",
        answer: "Yes, all branches remain in full inventory, sales, pricing, and report sync. You can monitor stock in any store and transfer goods immediately when required. This assists the retailers with many stores in preventing stock mismatch and manual labor."
    },
    {
        id: "3",
        question: "Does the POS support returns and exchanges?",
        answer: "The system processes returns, size adjustments and exchanges with utmost clarity. All the actions are captured appropriately to ensure that nothing is left or lost. This simplifies the work of the staff and enhances customer experience."
    },
    {
        id: "4",
        question: "Can I connect my online store with this POS?",
        answer: "Yes, your online and retail inventory is automatically updated in real time. Orders, inventory and product status remain the same across platforms. This prevents duplicate records and overselling or inappropriate stock."
    },
    {
        id: "5",
        question: "Is the POS easy for staff to learn?",
        answer: "The interface is easy and clear. Your staff can learn it fast. It takes most of the teams less than a few hours to use it confidently. This saves time on training and keeps your store running."
    },
];

export const CLOTHING_STORE_KEY_FEATURES = [
    {
        id: "clothing-billing",
        title: "Clothing Showroom Billing",
        description: "Speed up your showroom sales with integrated billing and custom item creation for a smoother client experience.",
        imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
    },
    {
        id: "clothing-stock-control",
        title: "Real-Time Clothing Stock",
        description: "Know exactly what’s in stock. Every item sold is instantly deducted from your inventory for both showroom and warehouse.",
        imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
    },
    {
        id: "clothing-vendor-mgmt",
        title: "Manufacturer & Supplier Management",
        description: "Keep track of all your clothing manufacturers, manage purchase orders, and monitor your shipment statuses effortlessly.",
        imageSrc: "/assets/features-page/featurescard-banners/purchases-banner.webp",
    },
    {
        id: "clothing-variants",
        title: "Style & Material Tracking",
        description: "Manage different clothing styles, materials, and variants in one easy-to-navigate catalog system.",
        imageSrc: "/assets/features-page/featurescard-banners/inventory-banner.webp",
    },
    {
        id: "clothing-loyalty",
        title: "Client & Loyalty Management",
        description: "Build relationships with your clothing clients using integrated CRM tools to track their preferences and order history.",
        imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
    },
    {
        id: "clothing-finances",
        title: "Showroom Financial Reporting",
        description: "Monitor your showroom’s financial health with detailed reports on sales, deposits, and operating expenses.",
        imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
    },
    {
        id: "clothing-ecommerce",
        title: "Online Clothing Store Integration",
        description: "Sync your physical showroom with your online clothing store to manage all inventory and orders in one place.",
        imageSrc: "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
    },
];

export const CLOTHING_STORE_TESTIMONIAL_DATA = {
    heading: "What Our Clients Say About Us?",
    paragraph: "", // Optional paragraph
    secondHeading: "Manage Your Inventory Efficiently",
    secondDescription: "Manage every size, color, and style in real time while improving efficiency and reducing sales losses with Owners Inventory POS today.",
    whyChooseTitle: "Why Choose Our System?",
    whyChooseDescription: "Our POS system for clothing stores is built to solve real retail challenges such as slow billing, variant confusion, stock mismatch, and multi-branch management. It helps you work faster, stay organized, and sell more with confidence.",
};

export const CLOTHING_STORE_TESTIMONIAL_FEATURES = [
    {
        id: "1",
        title: "Made for Apparel Variants",
        description: "The system manages sizes, colors, styles, and fabrics with 100% accuracy. This makes it the best POS system for clothing stores that handle a huge variety of selections.",
        icon: "testWhychoseIcon1",
    },
    {
        id: "2",
        title: "Faster Billing & Better Customer Flow",
        description: "Fast checkout, barcode scanning, and intelligent product search save queue time. Your team bills at higher rates, your customers remain satisfied, and sales grow automatically.",
        icon: "testWhychoseIcon2",
    },
    {
        id: "3",
        title: "Accurate Stock in Every Branch",
        description: "Inventory is kept current regardless of the number of stores you have. Retailers believe that it is the best POS system for retail clothing stores since it avoids the confusion of stock.",
        icon: "testWhychoseIcon3",
    },
    {
        id: "4",
        title: "Built-In Customer Profiles",
        description: "Save sizes, shopping history, and preferences. This will assist in managing loyalty programs, targeted offers, and repeat sales campaigns.",
        icon: "testWhychoseIcon4",
    },
    {
        id: "5",
        title: "Real-Time Sales Insights",
        description: "Receive reports about the best sellers, slow movers, peak hours, and employee output. You buy smarter when you have reliable data to rely on.",
        icon: "testWhychoseIcon5",
    },
    {
        id: "6",
        title: "Simple, Clean & Easy for Staff",
        description: "The interface is simple and comprehensible even to the first-time user. The training period is minimal, and the error is minimized.",
        icon: "testWhychoseIcon6",
    },
    // {
    //     id: "7",
    //     title: "Integration and Addons",
    //     description: "Integrates with accounting applications, e-commerce applications, barcodes, and online payment gateways. Loyalty programs, SMS notifications, multi-branch management, and supplier tracking are some of the add-ons that facilitate easy expansion of the business.",
    //     icon: "testWhychoseIcon7",
    // },
    
];

export const CLOTHING_STORE_TOOLS_DATA = {
    heading: "Integration and Tools",
    paragraph: "Brands need integration tools that support more than just in-store billing. Our POS system integrates with e-commerce platforms, barcode scanners, payment gateways, and warehouse systems to keep operations centralized. These integrated tools reduce manual errors. The system ensures that inventory, sales, and financial data stay consistent across every branch and sales channel.",
    tools: [
        { id: 1, name: "Shopify", image: "/assets/home-page-images/tools-section/shopify.svg" },
        { id: 2, name: "WooCommerce", image: "/assets/home-page-images/tools-section/woocomerce.svg" },
        { id: 3, name: "QuickBooks", image: "/assets/home-page-images/tools-section/quick-book.svg" },
        { id: 4, name: "Xero", image: "/assets/home-page-images/tools-section/xero.svg" },
        { id: 5, name: "Stripe", image: "/assets/home-page-images/tools-section/stripe.svg" },
    ],
};

