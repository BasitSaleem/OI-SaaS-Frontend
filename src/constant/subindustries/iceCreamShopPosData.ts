import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Ice Cream Shop POS — UnifiedPlatform Section ──────────────────────────
export const ICE_CREAM_SHOP_UNIFIED_HEADING =
  "Challenges that Ice Cream Shop Owners Face Today";

export const ICE_CREAM_SHOP_UNIFIED_PARAGRAPH =
"Running a manual ice cream business causes several problems for operations which impact service quality, customer satisfaction and profitability. The following are the most frequently occurring issues that the ice cream shop owners encounter every day.";

export const ICE_CREAM_SHOP_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Slow Checkout During Rush Hours",
    description:
      "Long queues of customers during the weekends and evenings cause stress for employees. Without a robust point of sale solution, order and payment processing are delayed and inefficient, and become a source of customer frustration.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Difficulty Managing Flavor Inventory",
    description:
      "Unexpected inventory loss can affect ice cream flavors, cones, cups, syrups, and toppings. It is hard to keep an accurate track of stock levels when using manual methods. This often leads to delay in orders and confusion.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Order Errors and Customization Confusion",
    description:
      "There are also many combinations that can be personalized for ice cream orders, along with sizes and toppings. If there's no order management system in place, employees may overlook key details, causing errors in orders and resulting in wasted products.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Limited Customer Tracking",
    description:
      "A business cannot keep tabs on loyal customers, loyalty programs or favorite orders without any customer management software. Without a proper customer management system, repeat customers may not receive personalized service, loyalty rewards, or a consistent experience that encourages long-term retention.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "No Visibility into Staff Performance",
    description:
      "During hectic shifts, it can be hard to keep track of several employees, especially if they are working at different stations or shifts. It can become difficult to manage the entire group without proper staff tracking. ",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Lack of Business Reporting",
    description:
      "If there are not accurate reporting tools, the owners cannot determine what the best-selling flavors are, when the best business time is, or product performance. Without real-time data, there is a higher risk associated with making business decisions.",
  },
];

export const ICE_CREAM_SHOP_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Faster Order Processing",
    description:
      "We offer a solution that enables our ice cream shop POS software to handle orders efficiently during high-volume customer periods. The user-friendly checkout screen enables staff to pick flavors, toppings, and combinations without slowing the checkout counter.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Real-time Inventory Tracking",
    description:
      "All the orders for each scoop, topping, cone and retail item will be entered into the inventory management system automatically. Real-time stock management ensures accurate updates after each transaction, preventing the risk of stockouts during peak selling hours.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Accurate Order Customization",
    description:
      "Custom orders are easily managed using the POS system. Scoop sizes, additional toppings, waffle cones, syrups and combo deals can be added easily to an order from within the order screen, which helps to minimize errors.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Customer Loyalty Management",
    description:
      "Order history, preferences, and loyalty rewards are automatically captured in customer profiles. The loyalty program fosters repeat visits and can assist employees in delivering a more personalized customer experience.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Built-in Staff Monitoring",
    description:
      "The POS dashboard provides owners with a view of employee sales activity, performance, and transaction handling. Real-time operational tracking makes staff productivity management easier.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Real-time Reporting and Insights",
    description:
      "Powerful reporting tools provide detailed insights into sales performance, top-selling flavors, peak business hours, and inventory movement. Owners can make smarter business decisions using accurate POS data instead of estimates.",
  },
];

export const ICE_CREAM_SHOP_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omnichannel Sales and Integration for Ice Cream Shops",
    description:
      "Owners Inventory links all sales points a shop uses into one. No matter if they are buying at the counter, ordering online, or seasonal retail items, everything is synchronized in one dashboard. Ice cream shop owners can use all of the sales channels without changing tools or manually updating records.",
    imageSrc: "/assets/industries-pages/ice-cream-shop-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Counter Sales",
        listdescription:
          "All counter sales (scoops, cones, toppings, drinks, and combos) are immediately recorded the moment the sale is made. The inventory is updated in real-time, meaning that there is a lower chance of running out of popular flavors during peak hours.",
        listSubDescription:
          "The purchase history and loyalty points are automatically added to the customer profiles. Reports show sales data as it happens, meaning there is no manual input that needs to be done after sales.",
      },
      {
        listheading: "Online Orders and Delivery Integration",
        listdescription:
          "Online ordering-enabled ice cream shops can link to their menu and stock with the same system that connects to the counter. All online orders automatically reduce stock levels from the real-time inventory.",
        listSubDescription:
          "This will help to avoid selling out of things such as limited-edition flavors, seasonal toppings, or specialty cones. It also guarantees that the customers only see products that are available, which helps to reduce order errors and improve customer satisfaction. reduce order errors and improve customer satisfaction. ",
      },
      {
        listheading: "Unified Multi-Channel Dashboard",
        listdescription:
          "All counter sales, online orders, deliveries, promotions, and retail product sales can be seen in a single central dashboard. Owners can see total revenue, inventory turnover and daily performance without having to switch between various systems.",
        listSubDescription:
          "This is a seamless solution that makes operations easier and removes the need for multiple applications to handle billing, inventory, and order fulfillment.",
      },
    ],
  },
  {
    id: "2",
    title: "Analytics and Reporting",
    description:
      "The POS system transforms daily sales data into structured reports showing top-selling flavors, peak business hours, and customer buying trends.",
    subDescription:
      "Owners can identify which flavors are most popular, which add-ons generate the highest profit, and when demand is highest. This helps in planning production, reducing waste, and improving overall profitability.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const ICE_CREAM_SHOP_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Quick Product Search",
    description:
      "Ice cream flavors, toppings, beverages, and retail products are searchable instantly through barcode scanning or category-based selection. Staff can add products to orders without delays.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "Combo and Custom Order Management",
    description:
      "Combo deals, multi-scoop orders, and fully customizable desserts are supported by the POS system. Personalized customer orders can be easily generated at checkout by staff.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Split Payments Processing",
    description:
      "Customers can use multiple payment methods in a single transaction. The POS system is configured to handle payments during busy service times.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Loyalty Program Integration",
    description:
      "Customer loyalty points are automatically added to an account after each purchase. All rewards and discounts are handled directly in the POS, without having to calculate them manually.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Role-Based Employee Access",
    description:
      "Cashiers, servers, and managers have role-based access as per their roles. Owners have complete control over pricing, and discounts, reports, and inventory permissions.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card5.webp",
  },
  {
    id: 6,
    title: "Multi-Location Management",
    description:
      "The owner of an ice cream shop with more than one store can keep an eye on the sales data, stocks, and the movement of the stocks across all the stores simultaneously and in real time from a single place.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card6.webp",
  },
  {
    id: 7,
    title: "Mobile-Friendly POS Interface",
    description:
      "The easy-to-use POS interface allows employees to make orders quickly with little training. The system works well for both dine-in and takeaway settings.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card7.webp",
  },
  {
    id: 8,
    title: "Detailed Sales Reporting",
    description:
      "Monitor POS performance with detailed sales reports to help make better business decisions, including popular menu items, daily trends, and customer purchasing habits.",
    imageSrc:
      "/assets/industries-pages/ice-cream-shop-pos/key-features-section/key-feature-card8.webp",
  },
];

export const ICE_CREAM_SHOP_WORKFLOW_DATA = {
  heading: "Workflow of Owners Inventory POS for Ice Cream Shops",
  paragraph:
    "Our POS system for ice cream shops is designed for a typical busy dessert counter. Whether they're creating a menu in the system, dealing with rush hour or monitoring sales for the day, nothing slows them down, becomes disorganized or causes them to worry about staff.",
  steps: [
    {
      number: 1,
      title: "Set Up Products, Flavors, and Menu Items",
      description:
        "Every ice cream flavor, topping, cone, drink and combo deal can be added to the POS system with pricing, categories, barcodes, and SKUs. Specials and time-limited offers can be changed rapidly as well.",
    },
    {
      number: 2,
      title: "Switch Between Walk-ins and Returning Customers",
      description:
        "The POS system integrates seamlessly with walk-in business and with repeat customers. It immediately displays loyalty points, for repeat customers.",
    },
    {
      number: 3,
      title: "Build and Confirm Custom Orders",
      description:
        "Ice cream orders may have more than one scoop of ice cream, toppings, syrups, waffle cones and add-ons. The POS system enables users to create orders completely customized in one screen. All selections automatically adjust the order in real time, including combo deals and special discounts.",
    },
    {
      number: 4,
      title: "Secure and Fast Payments",
      description:
        "Multiple payment options are available such as cash, card, and split payment. The customer may pay using multiple payment methods in a single transaction without putting a strain on the checkout process.",
    },
    {
      number: 5,
      title: "Review Sales, Inventory, and Shop Performance",
      description:
        "A comprehensive view of sales, top-selling flavors, topping popularity, and peak hours is available on the dashboard. Inventory is updated automatically with every sale and let the owner know about the stock levels in real-time.",
    },
  ],
};

export const ICE_CREAM_SHOP_TESTIMONIALS = [
  {
    id: "1",
    name: "Colton Murphy",
    title: "Gelato Parlor Owner",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image28.webp",
    text: "Before this system, our checkout lines during weekends would be chaotic, but now everything is organized, no chaos and quick.",
  },
  {
    id: "2",
    name: "Aubrey Reed",
    title: "Ice Cream Parlor Manager",
    image: "/assets/industries-pages/industries-testimonial-images/girl-image29.webp",
    text: "We would constantly lose track of our stock for toppings and cones, but now it is automated and accurate.",
  },
  {
    id: "3",
    name: "Tristan Coleman",
    title: "Dessert Shop Operator",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image29.webp",
    text: "Our customer service experience is definitely enhanced with the rapid order fulfillment of custom orders.",
  },
  {
    id: "4",
    name: "Brayden Reed",
    title: "Multi-Location Shop Owner",
    image: "/assets/industries-pages/industries-testimonial-images/boy-image30.webp",
    text: "We found the system to be very easy to set up, our staff learned the system quickly, and the control of daily sales and stock was noticed immediately.",
  },
];

export const ICE_CREAM_SHOP_FAQS = [
  {
    id: "1",
    question: "Does the POS support custom ice cream orders?",
    answer:
      "Yes, the system supports fully customized orders with scoops, flavors, toppings, syrups, and combo deals and does not slow down the checkout process.",
  },
  {
    id: "2",
    question: "Can I track inventory of flavors and toppings accurately?",
    answer:
      "Yes, each sale updates the inventory of flavors, cones, toppings and more, so you know at a glance if you have any left in the freezer.",
  },
  {
    id: "3",
    question: "Can I manage multiple ice cream shop locations?",
    answer:
      "Yes, the system does support multi-location management with owners able to watch sales, stock levels and performance in all branches from a single dashboard.",
  },
  {
    id: "4",
    question:
      "How quickly can I set up the Owners Inventory for my ice cream shop?",
    answer:
      "Most ice cream shops can set up the POS within hours. Menu items can be uploaded en masse and staff can begin using the system almost instantaneously.",
  },
  {
    id: "5",
    question: "Can different staff members have different access levels?",
    answer:
      "Yes, role-based access can be implemented to set permissions for cashiers, managers, and staff according to their respective roles, to better control and secure the transactions.",
  },
];

export const ICE_CREAM_SHOP_KEY_FEATURES = [
  {
    id: "ice-cream-shop-billing",
    title: "Touchscreen Order & Billing",
    description:
      "Process customer scoop and sundae orders quickly with customizable touchscreen menus and instant bill split options.",
    imageSrc: "/assets/features-page/featurescard-banners/pos-banner.webp",
  },
  {
    id: "ice-cream-shop-stock-control",
    title: "Tub and Cone Inventory Control",
    description:
      "Keep track of active tub count, topping supplies, and waffle cone boxes. Avoid running out of best-sellers during high demand.",
    imageSrc: "/assets/features-page/featurescard-banners/products-banner.webp",
  },
  {
    id: "ice-cream-shop-vendor-mgmt",
    title: "Dairy and Ingredient Suppliers",
    description:
      "Manage dairy distributors, track ingredient costs, issue purchase orders, and monitor cold shipment arrivals.",
    imageSrc:
      "/assets/features-page/featurescard-banners/purchases-banner.webp",
  },
  {
    id: "ice-cream-shop-variants",
    title: "Flavor & Modifier Customization",
    description:
      "Configure scoop sizes, dairy-free alternatives, toppings, and sauces as modifiers attached to base menu items.",
    imageSrc:
      "/assets/features-page/featurescard-banners/inventory-banner.webp",
  },
  {
    id: "ice-cream-shop-loyalty",
    title: "Customer & Loyalty Programs",
    description:
      "Drive repeat visits with integrated loyalty accounts, digital punch cards, and SMS promotion codes.",
    imageSrc: "/assets/features-page/featurescard-banners/people-banner.webp",
  },
  {
    id: "ice-cream-shop-finances",
    title: "Shift Cash and Card Tracking",
    description:
      "Monitor sales summaries, card processing, cash drawer entries, and shift cashier handovers in real time.",
    imageSrc: "/assets/features-page/featurescard-banners/finance-banner.webp",
  },
  {
    id: "ice-cream-shop-ecommerce",
    title: "Online Ordering and Pickup Sync",
    description:
      "Integrate online pickup orders with your counter terminal, ensuring unified stock levels for both channels.",
    imageSrc:
      "/assets/features-page/featurescard-banners/ecommerce-banner.webp",
  },
];

export const ICE_CREAM_SHOP_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say About Owners Inventory",
  paragraph: "",
  secondHeading: "Take Your Ice Cream Shop Business to the Next Level",
  secondDescription:
    "Owners Inventory is a complete solution for ordering, inventory management, and customer tracking; everything in one easy-to-use system for fast and efficient ice cream shop operations. It enables your team to provide customer service quicker without compromising without compromising business organization.",
  whyChooseTitle: "Why Choose Owners Inventory Ice Cream Shop POS System?",
  whyChooseDescription:
    "With our software, ice cream shop owners can handle orders, inventory, customer information and reporting without having to hire additional staff to manage their backend. It makes the operation of a fast-paced service easy, especially when speed, accuracy and stock control are essential. The system automates repetitive tasks and saves your team more time to serve customers.",
};

export const ICE_CREAM_SHOP_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Built for Ice Cream Shops",
    description:
      "The software is tailored for quick-service restaurant desserts that have numerous flavors, toppings, combos, and seasonal menus. It can handle high-volume rush hours, while maintaining order and quick service, making it the perfect ice cream shop POS system for daily use.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Quick Setup",
    description:
      "Owners Inventory can be set up easily, even without technical skills. Ice cream menus, flavors, cones, toppings, drinks, as well as combos may be added in seconds or imported in bulk from Excel or CSV files.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "All-in-One Platform",
    description:
      "The system replaces all the tools for billing, inventory tracking, online orders, and reporting separately. All transactions, whether they are counter sales, delivery orders, stock levels or the customers profile, are handled from a single place.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "24/7 Support",
    description:
      "Round-the-clock support for ensuring uninterrupted ice cream shop operations. Help can be provided at any time of day, whether it's a hectic weekend or the wee hours of night.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Actionable Insights",
    description:
      "The system gives real-time, accurate data on topping popularity, popular times for sales, sell-through, and which flavors are selling best.",
    icon: "testWhychoseIcon5",
  },
];

export const ICE_CREAM_SHOP_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Owners Inventory connects to various platforms such as Shopify, Stripe, QuickBooks, Google Calendar, Mailchimp, and other business tools. All sales, accounting, and marketing data remain synchronized across systems. This decreases the amount of manual reconciliation needed and helps to ensure accurate financial reporting on all sales channels, online and offline.",
  tools: [
    {
      id: 1,
      name: "Shopify",
      image: "/assets/home-page-images/tools-section/shopify.svg",
    },
    {
      id: 2,
      name: "WooCommerce",
      image: "/assets/home-page-images/tools-section/woocomerce.svg",
    },
    {
      id: 3,
      name: "QuickBooks",
      image: "/assets/home-page-images/tools-section/quick-book.svg",
    },
    {
      id: 4,
      name: "Xero",
      image: "/assets/home-page-images/tools-section/xero.svg",
    },
    {
      id: 5,
      name: "Stripe",
      image: "/assets/home-page-images/tools-section/stripe.svg",
    },
  ],
};
