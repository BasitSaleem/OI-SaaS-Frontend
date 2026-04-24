import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Restaurant Inventory Management — UnifiedPlatform Section ─────────────
export const RESTAURANT_INVENTORY_UNIFIED_HEADING = "Challenges Faced by Restaurants Today";

export const RESTAURANT_INVENTORY_UNIFIED_PARAGRAPH = "Restaurants deal with issues like complex inventory, multiple ingredients for recipes, different food costs, and manual procedures. Handling all of them without inventory management software increases the risk of food waste, low revenue, and an unorganized kitchen.";

export const RESTAURANT_INVENTORY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
    {
        id: "1",
        icon: "UnifiedIcon1",
        title: "Inaccurate Inventory Counts",
        description:
            "Manual counting of ingredients and kitchen items leads to errors, which result in shortages or overstock. Without a restaurant inventory management system, it becomes difficult to prevent disruptions in daily operations.",
    },
    {
        id: "2",
        icon: "UnifiedIcon2",
        title: "High Food Cost",
        description:
            "Fluctuating prices, waste, and overordering items causes high food costs. Lack of real-time tracking makes restaurants struggle to manage expenses and maintain profit margins.",
    },
    {
        id: "3",
        icon: "UnifiedIcon3",
        title: "Excess Food Waste",
        description:
            "Perishable ingredients get spoiled quickly without proper tracking of their expiry dates, which makes inventory processes inefficient and leads to wasted food.",
    },
    {
        id: "4",
        icon: "UnifiedIcon4",
        title: "Inefficient Menu Costing",
        description:
            "Calculating ingredient usage manually makes recipe costing inaccurate. This increases the risk of a higher cost of goods and incorrect menu pricing, which affects overall profitability.",
    },
    {
        id: "5",
        icon: "UnifiedIcon5",
        title: "Supplier and Purchase Delays",
        description:
            "Improper tracking of purchase orders from suppliers result in late deliveries, which cause a shortage of essential items. Supplier tracking becomes difficult for restaurant owners.",
    },
    {
        id: "6",
        icon: "UnifiedIcon6",
        title: "Manual Inventory Processing",
        description:
            "Counting and updating stock levels manually increases the chances of errors and leads to inefficient operations, unreliable costs, and overspending on labor working on inventory tasks.",
    },
];

export const RESTAURANT_INVENTORY_WHY_CHOOSE_CARDS = [
    {
        id: "1",
        icon: "whychoseIcon1",
        title: "Automated Inventory Tracking",
        description:
            "The software tracks every ingredient in real time, ensuring accurate counts across storage and kitchen areas. It saves the time of employees counting stock levels manually and lets them work on other tasks.",
    },
    {
        id: "2",
        icon: "whychoseIcon2",
        title: "Smart Food Cost Management",
        description:
            "Recipe-level costing and cost of goods analysis help restaurant owners control expenses. It allows managers to monitor ingredient usage, optimize purchases, and maintain consistent profitability.",
    },
    {
        id: "3",
        icon: "whychoseIcon3",
        title: "Waste Reduction Tools",
        description:
            "The alerts for expiry dates and older stock reports help restaurants use the ingredients before they spoil. This helps minimize food wastage.",
    },
    {
        id: "4",
        icon: "whychoseIcon4",
        title: "Streamlined Menu Costing",
        description:
            "The system calculates the exact ingredient usage per recipe. It helps restaurant price menus accurately, predict profit margins, and maintain consistent quality without guesswork.",
    },
    {
        id: "5",
        icon: "whychoseIcon5",
        title: "Purchase Order Automation",
        description:
            "Our inventory control software manages purchase orders and tracks supplier deliveries consistently to ensure that every essential ingredient is available in restaurants on time. It maintains accurate records of supplier details, delivery quality, and pricing.",
    },
    {
        id: "6",
        icon: "whychoseIcon6",
        title: "Eliminating Manual Inventory Errors",
        description:
            "By automating counting, transfers, and adjustments, the system reduces human mistakes and saves cost and effort while increasing revenue and overall business efficiency.",
    },
];

export const RESTAURANT_INVENTORY_FEATURE_CARDS: FeatureCardData[] = [
    {
        id: "1",
        title: "Omni-Channel Sales Integration for Restaurants",
        description:
            "Owners Inventory connects all sales channels, which helps restaurant owners gain maximum visibility into inventory updates. It helps restaurants seamlessly operate across dine-in, takeaway, and delivery channels.",
        subDescription: "This keeps track of stocks accurately, prevents order duplication, and allows restaurants to manage complex operations of multiple platforms from a single system.",
        imageSrc: "/assets/industries-pages/restaurant-inventory-management-software/omini-chanel.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/inventory-management",
        buttonColor: "var(--primary-purple)",
        listVariant: "accordion",
        list: [
            { listheading: "POS Order Counter", listdescription: "Orders are linked directly to inventory usage. The system keeps a record of ingredient usage based on predefined recipes.", listSubDescription: "It keeps sales streamlined even in busy service hours, helping the kitchen and front-of-house teams stay aligned without delays or manual tracking errors." },
            { listheading: "Online Order and Delivery Sync ", listdescription: "Owners Inventory keeps your restaurant inventory aligned with every online and in-restaurant order. It reduces the required manual effort. As orders are processed, stocks get updates automatically to identify actual ingredient usage.", listSubDescription: "This maintains accurate and up-to-date inventory information across all sales and ordering channels." },
            { listheading: "Centralized Order Dashboard", listdescription: "It provides a centralized dashboard to track all restaurant activities. It allows store owners to monitor order flow, track restaurant performance, and manage purchase operations efficiently. This eliminates confusion caused by multiple systems.", listSubDescription: "It also maintains a smooth workflow between kitchen storage, sales, and inventory management." },
        ]
    },
    {
        id: "2",
        title: "Analytics and Reporting",
        description: "Owners Inventory transforms daily kitchen and inventory data into clear, usable insights. It tracks ingredient consumption, compares actual usage with expected patterns, and highlights cost variations across menu items. Restaurants can easily identify inefficiencies and adjust purchasing decisions. This structured reporting helps maintain consistent profitability.",
        imageSrc: "/assets/industries-pages/restaurant-inventory-management-software/better-decision.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/products",
        buttonColor: "#1AD1B9",
    },
];

export const RESTAURANT_INVENTORY_KEY_FEATURES_CARDS = [
    {
        id: 1,
        title: "Ingredient-level Inventory Tracking",
        description: "The system tracks inventory at the ingredient level across the kitchen and storage. It provides real-time visibility into stock levels and usage patterns. This helps restaurants manage inventory accurately and avoid unexpected shortages during service hours.",
        imageSrc: "/assets/industries-pages/restaurant-inventory-management-software/key-features-section/key-features-card1.webp",
    },
    {
        id: 2,
        title: "Recipe and Menu Costing",
        description: "Each menu item is aligned with its ingredient-level costing. Restaurants can track menu profitability and adjust pricing according to it. It maintains a consistent inventory across restaurant operations. The system calculates the cost of goods and supports better purchase decisions.",
        imageSrc: "/assets/industries-pages/restaurant-inventory-management-software/key-features-section/key-features-card2.webp",
    },
    {
        id: 3,
        title: "Vendor Management",
        description: "The dashboard of the system centralizes purchase orders and vendor management processes. It keeps track of supplier deliveries, invoices, and stock updates in one place. This ensures smooth procurement, reduces delays, and maintains accurate stock levels.",
        imageSrc: "/assets/industries-pages/restaurant-inventory-management-software/key-features-section/key-features-card3.webp",
    },
    {
        id: 4,
        title: "Stock Adjustment and Transfer",
        description:
            "Restaurant inventory is automatically updated after every usage and sale, which helps systems keep track of stock transfer between storage and the kitchen. This improves accuracy and keeps inventory data aligned with actual stock levels.",
        imageSrc: "/assets/industries-pages/restaurant-inventory-management-software/key-features-section/key-features-card4.webp",
    },
    {
        id: 5,
        title: "Reporting and Analytics",
        description:
            "The platform provides detailed and precise reports on inventory usage and sales data. It helps identify variances, track food cost trends, and monitor performance. It allows restaurants to take data-driven actions to improve efficiency and long-term profitability.",
        imageSrc: "/assets/industries-pages/restaurant-inventory-management-software/key-features-section/key-features-card5.webp",
    },
   
];

export const RESTAURANT_INVENTORY_WORKFLOW_DATA = {
    heading: "Our Restaurant Inventory Management Software Workflow",
    paragraph: "Owners Inventory helps restaurants maintain a structured workflow for their day-to-day tasks and complex operations. It tracks every activity of your inventory. The system provides real-time, accurate updates using smart AI features. It reduces confusion, delays, and dependency on guesswork.",
    steps: [
        {
            number: 1,
            title: "Ingredient Procurement",
            description: "It creates purchase orders based on stock levels and demand. It tracks and keeps an accurate record of incoming inventory. The system ensures the timely delivery of essential kitchen items, supporting smooth operations."
        },
        {
            number: 2,
            title: "Stock Organization",
            description: "Every item in inventory is categorized by its name, storage areas, and kitchen sections, which helps staff find items quickly. This ensures real-time visibility across all stock locations. With a structured organization, our restaurant management software makes all operations smooth."
        },
        {
            number: 3,
            title: "Recipe-Based Deduction",
            description: "The items in the menus are linked with ingredient usage in the system. So when any order is processed, the inventory is deducted automatically based on recipes. This keeps stock levels accurate and shows real-time ingredient consumption without relying on manual calculation."
        },
        {
            number: 4,
            title: "Order and POS Processing",
            description: "Orders are recorded accurately and synced with inventory in real time to ensure accurate stock counts on reports. After every order, inventory is updated instantly without disrupting restaurant operations workflows."
        },
        {
            number: 5,
            title: "Reporting and Optimization",
            description: "The system generates reports on inventory usage, food costs, and variances, which help restaurants identify inefficiencies in different areas. The reports provide restaurant owners with accurate insights that support better decision-making. It also reduces waste and eliminates inefficiencies."
        },
        
    ]
};

export const RESTAURANT_INVENTORY_TESTIMONIALS = [
    {
        id: "1",
        name: "Liam C",
        title: "Restaurant Owner",
        image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
        text: "Inventory used to be something we checked at the end of the day. Now it's already updated while we are working. Their software has made things a lot easier without changing how our kitchen operates.",
    },
    {
        id: "2",
        name: "Noah B",
        title: "Food Delivery Partner",
        image: "/assets/features-page/testimonial-images/testinomial-boy3.webp",
        text: "We had issues with food cost inconsistency, especially across busy days. Since using the system, we have been able to track usage better and avoid unnecessary over-ordering. It definitely improved how we manage our stock.",
    },
    {
        id: "3",
        name: "Tessa J",
        title: "Café Owner",
        image: "/assets/features-page/testimonial-images/testinomial-girl4.webp",
        text: "What I like most is the clarity. We are not second-guessing stock levels or relying on manual notes anymore. It has led us to practical improvement.",
    },
];

export const RESTAURANT_INVENTORY_FAQS = [
    {
        id: "1",
        question: "How does Owners Inventory handle ingredient-level tracking?",
        answer: "The software tracks ingredient-level inventory based on recipe usage. It tracks usage accurately and provides visibility of what exactly is being used in the kitchen with advanced AI features."
    },
    {
        id: "2",
        question: "Can Owners Inventory track actual and theoretical food costs?",
        answer: "Yes, the system compares actual usage with theoretical usage based on recipes. This helps identify variances, control food cost, and reduce losses caused by overuse, waste, or untracked consumption."
    },
    {
        id: "3",
        question: "How does the system manage inventory across multiple locations?",
        answer: "With centralized control access, Owners Inventory provides visibility into stocks across multiple locations. It monitors inventory, tracks transfers, and provides consistent real-time updates from a single dashboard."
    },
    {
        id: "4",
        question: "How does Owners Inventory reduce dependency on manual counting?",
        answer: "Inventory is automatically updated through usage tracking. These features reduce the need for manual counting. It also improves accuracy across different restaurant operations."
    },
    {
        id: "5",
        question: "Is Inventory software of Owners Inventory suitable for a small restaurant?",
        answer: "Our system is suitable for restaurants of every size. It keeps both small and large inventories efficiently managed, simplifies routine operations, and improves accuracy in reports. It provides restaurant owners with better control over stock."
    },
];

export const RESTAURANT_INVENTORY_KEY_FEATURES = [
    {
        id: "restaurant-billing",
        title: "Restaurant Order Management",
        description: "Speed up your food sales with integrated order processing and automatic stock updates for a smoother customer experience.",
        imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
    },
    {
        id: "restaurant-stock-control",
        title: "Real-Time Multi-Platform Stock",
        description: "Know exactly what's in stock across all channels. Every order placed is instantly deducted from your inventory.",
        imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
    },
    {
        id: "restaurant-vendor-mgmt",
        title: "Manufacturer & Supplier Management",
        description: "Keep track of all your ingredient manufacturers, manage purchase orders, and monitor your shipment statuses effortlessly.",
        imageSrc: "/assets/features-page/featurescard-banners/purchases-banner.webp",
    },
    {
        id: "restaurant-variants",
        title: "Menu & Ingredient Tracking",
        description: "Manage different menu items, sizes, and ingredients in one easy-to-navigate catalog across all platforms.",
        imageSrc: "/assets/features-page/featurescard-banners/inventory-banner.webp",
    },
    {
        id: "restaurant-loyalty",
        title: "Customer & Loyalty Management",
        description: "Build relationships with your guests using integrated CRM tools to track their preferences and order history.",
        imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
    },
    {
        id: "restaurant-finances",
        title: "Financial Reporting",
        description: "Monitor your restaurant's financial health with detailed reports on sales, refunds, and operating expenses.",
        imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
    },
    {
        id: "restaurant-integration",
        title: "Multi-Platform Delivery Integration",
        description: "Sync your delivery partners to manage all inventory and orders in one place.",
        imageSrc: "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
    },
];

export const RESTAURANT_INVENTORY_TESTIMONIAL_DATA = {
    heading: "What Do Our Clients Say About Owners Inventory?",
    paragraph: "",
    secondHeading: "Stop Losing Money to Inventory Guesswork",
    secondDescription: "Every untracked ingredient and missed expiry date costs your restaurant real money. Owners Inventory gives you the visibility and control to stop the losses.",
    whyChooseTitle: "Why Choose Restaurant Inventory Management Software",
    whyChooseDescription: "Owners Inventory can efficiently handle all complex restaurant tasks. It offers accurate ingredient usage, inventory management, and food cost control. The system makes it easy to make better purchase decisions and boost overall operational efficiency.",
};

export const RESTAURANT_INVENTORY_TESTIMONIAL_FEATURES = [
    {
        id: "1",
        title: "Built for Restaurant Needs",
        description: "It manages daily operation of the restaurant perfectly, like counting inventory and managing recipe ingredients, while supporting efficient kitchen workflows and smooth serving.",
        icon: "testWhychoseIcon1",
    },
    {
        id: "2",
        title: "Effective Cost Control ",
        description: "With precise usage of items and automated inventory monitoring, it reduces overspending while controlling cost and boosting revenue generation.",
        icon: "testWhychoseIcon2",
    },
    {
        id: "3",
        title: "Real-Time Inventory Visibility",
        description: "Owners Inventory reduces the reliance on frequent manual inventory checks by providing real-time inventory visibility across the kitchen and storage.",
        icon: "testWhychoseIcon3",
    },
    {
        id: "4",
        title: "Reduce Waste and Losses",
        description: "It tracks ingredients' expiry dates and stock movement, which helps reduce waste and prevent item spoilage. It ensures better utilization of resources across daily restaurant operations.",
        icon: "testWhychoseIcon4",
    },
    {
        id: "5",
        title: "Simplify Inventory Processes",
        description: "Inventory processes such as stock counting, deliveries, and updates are simplified with easy-to-understand information and a unified dashboard, which helps manage multiple restaurant operations within one system.",
        icon: "testWhychoseIcon5",
    },
    {
        id: "6",
        title: "Supports Business Growth",
        description: "The system adjusts with increasing work, helping restaurants manage higher sales volume, larger inventories, and additional locations. It expands your business without losing control.",
        icon: "testWhychoseIcon6",
    },
];

export const RESTAURANT_INVENTORY_TOOLS_DATA = {
    heading: "Integration and Tools",
    paragraph: "Owners Inventory connects with essential restaurant-based tools to make the work environment efficient. It connects CRM, ERP, payment gateways, and accounting tools to ensure higher functionality, which helps boost customer satisfaction and business efficiency. It ensures seamless data flow between systems. Restaurants can manage orders, inventory, and financial records within one well-connected ecosystem.",
    tools: [
        { id: 1, name: "Shopify", image: "/assets/home-page-images/tools-section/shopify.svg" },
        { id: 2, name: "WooCommerce", image: "/assets/home-page-images/tools-section/woocomerce.svg" },
        { id: 3, name: "QuickBooks", image: "/assets/home-page-images/tools-section/quick-book.svg" },
        { id: 4, name: "Xero", image: "/assets/home-page-images/tools-section/xero.svg" },
        { id: 5, name: "Stripe", image: "/assets/home-page-images/tools-section/stripe.svg" },
    ],
};
