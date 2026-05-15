import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Barber Shop POS — UnifiedPlatform Section ──────────────────────────────
export const BARBER_SHOP_UNIFIED_HEADING = "Challenges that Barber Shop Owners Face Today";

export const BARBER_SHOP_UNIFIED_PARAGRAPH ="Managing the operations of a barber shop without the right POS software creates daily friction that affects client experience, staff performance, and overall business efficiency. Below are the real problems barbershop owners deal with every day.";

export const BARBER_SHOP_UNIFIED_CARDS: UnifiedPlatformCard[] = [
   {
        id: "1",
        icon: "UnifiedIcon1",
        title: "Disorganized Booking System",
        description:
            "Without a proper booking system, customer appointments overlap, and barbers spend time managing schedules instead of serving customers. Relying on manual bookings reduces control over operations.",
    },
    {
        id: "2",
        icon: "UnifiedIcon2",
        title: "Slow Payment Processing",
        description:
            "When payment processing is handled without a point of sale system, transactions slow down during peak hours. Clients waiting to make payments after an appointment creates unnecessary friction that affects the overall checkout experience.",
    },
    {
        id: "3",
        icon: "UnifiedIcon3",
        title: "No Real-time Inventory Visibility",
        description:
            "Retail products like pomades, clippers, and grooming supplies run out without warning. Lack of real-time inventory tracking makes it difficult for staff to identify if the required product is available when a customer is asking for it.",
    },
    {
        id: "4",
        icon: "UnifiedIcon4",
        title: "Weak Customer Management",
        description:
            "Client profiles built on memory or paper notes are not reliable. Without customer management software, barbers cannot track visit history, preferences, and loyalty program points. It makes every returning client feel like a first-time visitor.",
    },
    {
        id: "5",
        icon: "UnifiedIcon5",
        title: "No Control Over Staff",
        description:
            "Tracking individual barber performance, managing shifts, and monitoring who is handling which appointment is difficult without barber shop management software. It makes it difficult for owners to make staffing decisions.",
    },
    {
        id: "6",
        icon: "UnifiedIcon6",
        title: "Zero Insight into Business Performance",
        description:
            "Without a dashboard showing real-time insights, future decisions become risky because owners lack the data required to support them. Sales patterns, peak hours, and product availability remain invisible without the Barber POS.",
    },      
        
];

export const BARBER_SHOP_WHY_CHOOSE_CARDS = [
    {
        id: "1",
        icon: "whychoseIcon1",
        title: "Seamless Appointment Booking",
        description:
            "Our reliable barber appointment software helps avoid missed bookings. Walk-ins and scheduled clients are managed through the same dashboard, giving you a clean overview of the day without needing manual appointment updating.",
    },
    {
        id: "2",
        icon: "whychoseIcon2",
        title: "Faster Checkout Experience",
        description:
            "The barber shop POS processes every transaction 30% faster during peak hours. Whether clients pay by cash or card, the point-of-sale system handles it accurately without slowing down the counter during busy hours of the day.",
    },
    {
        id: "3",
        icon: "whychoseIcon3",
        title: "Real-time Inventory Management",
        description:
            "Inventory management inside POS tracks every retail product automatically. Inventory levels update with every sale, so staff always know what is available on the shelf without doing a manual checkup.",
    },
    {
        id: "4",
        icon: "whychoseIcon4",
        title: "Complete Client Service",
        description:
            "Every client profile stores visit history, grooming preferences, and loyalty program points precisely. By remembering what each client prefers, the barber POS software turns a regular visit into a personalized experience.",
    },
    {
        id: "5",
        icon: "whychoseIcon5",
        title: "Built-in Staff Management",
        description:
            "It  gives barber shop owners visibility into individual barber performance directly from a single dashboard. Tracking who handled which service, monitoring productivity, and making informed staffing decisions becomes effective ",
    },
    {
        id: "6",
        icon: "whychoseIcon6",
        title: "Accurate Reporting",
        description:
            "The POS data collected from every transaction is stored using powerful reporting tools that deliver real-time insights into sales trends, peak hours, and product sales. Business decisions are made from accurate numbers rather than estimates from guesswork.",
    },
];

export const BARBER_SHOP_FEATURE_CARDS: FeatureCardData[] = [
    {
        id: "1",
        title: "Omnichannel Sales and Integration for Barber Shop",
        description:
            "Owners Inventory connects every sales point a barber shop uses into one seamless system. Counter transactions, online payments, and retail product sales all feed into the same dashboard. Barber shop owners can manage every channel without switching between platforms or manually organizing records.",
        imageSrc: "/assets/industries-pages/barber-shop-pos/omini-chanel.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/pos",
        buttonColor: "var(--primary-purple)",
        listVariant: "accordion",
        list: [
            { listheading: "POS Counter Sales", listdescription: "Every service and retail product processed at the barber shop is recorded directly into the system as the transaction closes. Inventory levels are adjusted instantly. Client profiles are updated automatically, and the sales appear in reports without requiring anyone to enter data manually after the customer walks out." },
            { listheading: "Online Delivery and Integration", listdescription: "Retail grooming products sold through a connected online store pull from the same inventory management system used inside the barber shop.", listSubDescription: "When a product is sold online, the stock is reduced from the inventory. It reduces the risk of selling items that are out of stock or have already been purchased by another customer." },
            { listheading: "Unified Multi-Channel Dashboard", listdescription: "Counter sales, payments, service bookings, and retail transactions all appear together inside one centralized dashboard. Owners monitor daily revenue, inventory levels, and business performance through a single screen.", listSubDescription: "It reduces the need for separate tools to track multiple tasks, sales, items, or shop workflows." },
        ]
    },
    {
        id: "2",
        title: "Analytics and Reporting",
        description:
            "The POS system turns daily transactional data into structured and precise reporting. These reports show service revenue, product sales, and sales trends over time.",
        subDescription: "It helps owners to determine which services are consistently in demand, which retail products generate the strongest margins, and where quieter periods fall. This helps business owners make informed decisions.",
        imageSrc: "/assets/industries-pages/barber-shop-pos/better-decision.webp",
        buttonLabel: "View Details",
        buttonHref: "/features/products",
        buttonColor: "#1AD1B9",
         list: [
            { listheading: "Detect slow-moving services, unbalanced pricing, and leakage of revenue"},
            { listheading: "Predict peak hours based on the previous trends and past sales"},
            { listheading: "Monitor branch-level performance in real time"},
        ]
    },
];

export const BARBER_SHOP_KEY_FEATURES_CARDS = [
   {
        id: 1,
        title: "Barcode-Based Product Search",
        description:
            "Every grooming product and retail item in the barber shop is searchable by barcode or SKU directly inside the POS. Staff add items to a transaction instantly without typing the product name or scrolling through long lists of items.",
        imageSrc: "/assets/industries-pages/barber-shop-pos/key-features-section/key-feature-card1.webp",
    },
    {
        id: 2,
        title: "Loyalty Program Tracking",
        description:
            "The POS system automatically tracks clients' loyalty points with every transaction. The loyalty programs are updated in real time against each client profile without needing anyone to calculate rewards manually.",
        imageSrc: "/assets/industries-pages/barber-shop-pos/key-features-section/key-feature-card2.webp",
    },
    {
        id: 3,
        title: "Split Payment Processing",
        description:
            "Clients paying with more than one payment method are handled within a single transaction, which increases the efficiency of the overall checkout process.",
        imageSrc: "/assets/industries-pages/barber-shop-pos/key-features-section/key-feature-card3.webp",
    },
    {
        id: 4,
        title: "Role-Based Access Control",
        description:
            "With role-based access, every barber sees only what is relevant to their counter work while owners retain full control of financial data, discount settings, and inventory management.",
        imageSrc: "/assets/industries-pages/barber-shop-pos/key-features-section/key-feature-card4.webp",
    },
    {
        id: 5,
        title: "Multi-Location Stock Visibility",
        description:
            "Barber shops operating across multiple locations can track inventory levels and product sales from a centralized view. Owners can monitor stock movements at each branch in real time without needing to visit it themselves.",
        imageSrc: "/assets/industries-pages/barber-shop-pos/key-features-section/key-feature-card5.webp",
    },
    
];

export const BARBER_SHOP_WORKFLOW_DATA = {
    heading: "Workflow of Owners Inventory POS",
    paragraph: "Our barber shop POS system follows the real pace of the day. Every step from opening the counter to closing the dashboard stays connected, precise, and visible without putting an extra burden on team members to multitask.",
    steps: [
        {
            number: 1,
            title: "Set Up Products or Services",
            description: "You can add every product, retail item, and service to the POS system with their name, prices, barcodes, and SKUs. Large catalogs load through bulk imports via Excel or CSV. It lets you organize everything accurately from day one, ensuring items are ready for billing without anyone memorizing prices or searching through unstructured lists."
        },
        {
            number: 2,
            title: "Switch Between Clients",
            description: "The software handles both walk-in visits and registered client profiles with the same checkout flow. It fetches the returning clients' history, preferences, and loyalty program balance when they visit. For new walk-ins, it creates a new client profile in seconds without any delays holding the barbershop counter during busy hours."
        },
        {
            number: 3,
            title: "Build and Confirm Transactions",
            description: "You can select services, scan grooming products, apply discounts, and adjust quantity inside a single billing screen. The barber shop point of sale system builds the complete summary in real time as the items are added. All charges are calculated accurately before the customer reaches the counter to make payment.",
        },
        {
            number: 4,
            title: "Secure Payments",
            description: "The software offers different payment methods and a split payment option. The transaction closes in seconds, and every payment processing record is saved automatically against the client profile. It reduces the reliance on manual data entry.",
        },
        {
            number: 5,
            title: "Review Performance and Manage Stock",
            description: "The dashboard of the POS shows the complete breakdown of product sales, service revenue, and inventory levels. Barber shop owners can see exactly what sold, what needs restocking, and how the shop performed. It turns daily POS data into smarter business decisions for the future."
        },
        
    ]
};

export const BARBER_SHOP_TESTIMONIALS = [
    {
        id: "1",
        name: "Marcus D",
        title: "Barber Shop Owner",
        image: "/assets/features-page/testimonial-images/testinomial-girl3.webp",
        text: "Closing the transaction used to take forever. Now everything reconciles automatically and we reduced checkout delays by nearly 40%.",
    },
    {
        id: "2",
        name: "Aisha T",
        title: "Grooming Shop Owner",
        image: "/assets/features-page/testimonial-images/testinomial-girl4.webp",
        text: "Stock shortages mid-week were a regular problem. Since switching to Owners Inventory, our tracking has become far more accurate.",
    },
    {
        id: "3",
        name: "James R",
        title: "Manager Barber Shop",
        image: "/assets/features-page/testimonial-images/testinomial-boy4.webp",
        text: "The client profile management changed everything. Returning clients feel recognized the moment they sit down.",
    },
     {
        id: "4",
        name: "Bilal K",
        title: "Grooming Business Owner",
        image: "/assets/features-page/testimonial-images/testinomial-boy5.webp",
        text: "The setup of the system was quicker than I expected. Our team felt comfortable using the POS on the very first day. We can now easily identify where the stock went and which barber handles the most clients per month.",
    },
    {
        id: "5",
        name: "Sophie M",
        title: "Grooming Shop Owner",
        image: "/assets/features-page/testimonial-images/testinomial-girl5.webp",
        text: "We carry over 50 grooming products. Tracking all of them was a terrible experience for us. This system handled our portfolio effortlessly without complicating things.",
    },
    {
        id: "6",
        name: "Omar F",
        title: "Manager Barber Shop",
        image: "/assets/features-page/testimonial-images/testinomial-boy6.webp",
        text: "Our payment processing is now faster, and clients don't have to wait. This alone made the switch worth it. We have saved 5 hours per week with efficient features of POS.",
    },
     {
        id: "7",
        name: "Rachel N",
        title: "Grooming Business Owner",
        image: "/assets/features-page/testimonial-images/testinomial-boy7.webp",
        text: "The POS fits how our barber shop runs. It is simple, fast, and reliable for everyday tasks.",
    },
    
];

export const BARBER_SHOP_FAQS = [
    {
        id: "1",
        question: "How does this POS system handle services and appointments?",
        answer: "Our POS system of grooming businesses tracks the individual services, stylists and appointment slots separately, ensuring that the schedule remains updated and reduces error."
    },
    {
        id: "2",
        question: "Is it able to handle multiple branches?",
        answer: "Yes, it is inventory, sales, prices and reports that remain synchronized in all branches. The transfer of products can take place on demand."
    },
    {
        id: "3",
        question: "Does the POS support online bookings?",
        answer: "Yes, the online bookings are integrated effectively. Everything is documented so as to make sure that nothing is lost."
    },
    {
        id: "4",
        question: "Is it possible to track retail sales?",
        answer: "Yes, our barber shop POS system has online and retail inventory updated in real time. This avoids duplication and over-selling."
    },
    {
        id: "5",
        question: "Is it easy for staff to learn?",
        answer: "Yes, the interface is simple. The employees can pick it up in several hours, thus saving training and not disrupting operations."
    },
];

export const BARBER_SHOP_KEY_FEATURES = [
    {
        id: "barber-shop-billing",
        title: "Barber Shop Billing",
        description: "Speed up your sales with integrated billing and custom service creation for a smoother client experience.",
        imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
    },
    {
        id: "barber-shop-stock-control",
        title: "Real-Time Product Stock",
        description: "Know exactly what’s in stock. Every item sold is instantly deducted from your inventory for both shop and warehouse.",
        imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
    },
    {
        id: "barber-shop-vendor-mgmt",
        title: "Product Supplier Management",
        description: "Keep track of all your grooming product manufacturers, manage purchase orders, and monitor your shipment statuses effortlessly.",
        imageSrc: "/assets/features-page/featurescard-banners/purchases-banner.webp",
    },
    {
        id: "barber-shop-variants",
        title: "Service & Product Tracking",
        description: "Manage different service types, products, and categories in one easy-to-navigate catalog system.",
        imageSrc: "/assets/features-page/featurescard-banners/inventory-banner.webp",
    },
    {
        id: "barber-shop-loyalty",
        title: "Client & Loyalty Management",
        description: "Build relationships with your barber shop clients using integrated CRM tools to track their preferences and visit history.",
        imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
    },
    {
        id: "barber-shop-finances",
        title: "Financial Reporting",
        description: "Monitor your shop’s financial health with detailed reports on sales, deposits, and operating expenses.",
        imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
    },
    {
        id: "barber-shop-ecommerce",
        title: "Online Booking Integration",
        description: "Sync your physical shop with your online booking site to manage all schedules and orders in one place.",
        imageSrc: "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
    },
];

export const BARBER_SHOP_TESTIMONIAL_DATA = {
    heading: "What Our Clients Say?",
    paragraph: "", // Optional paragraph
    secondHeading: "Keep Operations Under Control",
    secondDescription: "Owners’ Inventory POS system helps barber shops track all services, stylists, and retail products in real-time, enhances efficiency and reduces losses.",
    whyChooseTitle: "Why Choose Our POS System for Barber Shops?",
    whyChooseDescription: "Our POS barber shop resolves the actual business issues that include slow billing, scheduling conflicts, lack of stock match, and multi-branch management. It makes you work faster, organize and serve clients more confidently.",
};

export const BARBER_SHOP_TESTIMONIAL_FEATURES = [
    {
        id: "1",
        title: "Service Variants",
        description: "The system records service types, stylists, products, and categories correctly. It is the most appropriate POS system in barber shops with multiple offerings.",
        icon: "testWhychoseIcon1",
    },
    {
        id: "2",
        title: "Faster Billing",
        description: "Quick checkout and intelligent search minimizes queues. Your employees are efficient in their billing, clients are pleased and the sales increase.",
        icon: "testWhychoseIcon2",
    },
    {
        id: "3",
        title: "Easy for Staff",
        description: "The interface is clear and very easy. It becomes easily learned by the staff, mistakes are reduced, and training is minimal.",
        icon: "testWhychoseIcon3",
    },
    
    {
        id: "4",
        title: "Client Profiles",
        description: "Store preferences, visit history and stylist preferences in the barber shop POS systems. This assists in controlling loyalty schemes and frequent visits.",
        icon: "testWhychoseIcon4",
    },
    {
        id: "5",
        title: "Branch Operation Accuracy",
        description: "Schedules are constantly current in shops. This is the ideal POS system that owners use in barber shops because they avoid confusion in bookings.",
        icon: "testWhychoseIcon5",
    },

    {
        id: "6",
        title: "Sales Insights",
        description: "Receive popular service, stylist performance, peak hours and employee performance reports. With trustworthy information, smart decisions can be made.",
        icon: "testWhychoseIcon6",
    },
    
   
];

export const BARBER_SHOP_TOOLS_DATA = {
    heading: "Integration and Tools",
    paragraph: "The system connects with Shopify, Stripe, QuickBooks, Google Calendar, Mailchimp, and other marketing tools. Service records, product sales, and accounting data stay synchronized across all platforms so the barber shop runs from one connected system. It reduces the dependence on disconnected third-party tools and improves the accuracy of numbers in monthly business performance reports. It reduces the dependence on disconnected third-party tools and improves the accuracy of numbers in monthly business performance reports.",
    tools: [
        { id: 1, name: "Shopify", image: "/assets/home-page-images/tools-section/shopify.svg" },
        { id: 2, name: "WooCommerce", image: "/assets/home-page-images/tools-section/woocomerce.svg" },
        { id: 3, name: "QuickBooks", image: "/assets/home-page-images/tools-section/quick-book.svg" },
        { id: 4, name: "Xero", image: "/assets/home-page-images/tools-section/xero.svg" },
        { id: 5, name: "Stripe", image: "/assets/home-page-images/tools-section/stripe.svg" },
    ],
};
