import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Hotel Inventory Management — UnifiedPlatform Section ─────────────
export const HOTEL_INVENTORY_UNIFIED_HEADING =
  "Challenges Holding Back Hotel Businesses";

export const HOTEL_INVENTORY_UNIFIED_PARAGRAPH =
  "Inventory management software is critical to the success of hotels as it directly affects guest satisfaction. Many hospitality businesses face significant challenges such as:";

export const HOTEL_INVENTORY_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Fragmented Inventory Across Departments",
    description:
      "Hotel management typically involves multiple departments, such as laundry, housekeeping, maintenance, and front desk. Each department keeps its own records without a central system. This leads to confusion, double entries, and lack of accountability.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Frequent Stock Shortages During Peak Operations",
    description:
      "In high-occupancy seasons, items such as towels, linens, cleaning products, and toiletries are quickly depleted. Hotels struggle to provide quality service without proper tracking and forecasting. This leads to poor customer experience and delays with room preparation.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Excess Stock and Purchasing Waste",
    description:
      "Overstocking slow-moving products is often the result of poor visibility. Storage costs increase, ties up working capital, and expired or unused stock directly affects profitability.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Spreadsheets and Manual Systems",
    description:
      "Some hotels are still using manual registers and spreadsheets. They are time-consuming to use, difficult to maintain, and subject to human errors. Data entry errors can cause major stock discrepancies.",
  },
  {
    id: "5",
    icon: "UnifiedIcon5",
    title: "No Real-time Stock Visibility",
    description:
      "Managers cannot accurately monitor current stock levels without real-time updates. It delays decisions and causes uncertainty about stock availability.",
  },
  {
    id: "6",
    icon: "UnifiedIcon6",
    title: "Poor Coordination Between Departments",
    description:
      "Inventory transfers and tracking usage become inconsistent when departments work independently. It leads to confusion, delays, and an inefficient use of resources.",
  },
  {
    id: "7",
    icon: "UnifiedIcon7",
    title: "Insufficient Data for Demand Forecasting",
    description:
      "Hoteliers often find it difficult to accurately predict their inventory requirements during periods of seasonal demand or fluctuations in occupancy. Data-driven insights allow for better purchasing decisions based on actual usage patterns rather than guesswork.",
  },
];

export const HOTEL_INVENTORY_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Real-Time Inventory synchronization",
    description:
      "Each stock movement, whether it is a transfer, a restocking, or usage, will be automatically updated in real-time. All departments will have the exact same data to work with, which reduces errors, and improves coordination.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Multi-Department Centralized Control",
    description:
      "Hotel inventory can be managed through a single system. It eliminates the requirement for multiple tracking systems, and provides consistency between departments.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Intelligent Demand Forecasting",
    description:
      "This system helps you to plan your inventory with greater accuracy by analyzing historical patterns of usage, occupancy, and seasonal trends. It reduces shortages as well as overstocking.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "Automatic Reordering System",
    description:
      "Set stock minimum thresholds on essential products. When stock levels drop below defined thresholds, the system will automatically notify you and suggest a reorder.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Department-Level Inventory Tracking",
    description:
      "To improve accountability, we assign inventory use to certain departments. This will allow you to monitor consumption more closely.",
  },
  {
    id: "6",
    icon: "whychoseIcon6",
    title: "Wastage & Consumption Monitoring",
    description:
      "Keep track of how much stock is used, lost, or wasted. It helps to identify waste and improve control.",
  },
  {
    id: "7",
    icon: "whychoseIcon7",
    title: "Improved Operational Efficiency",
    description:
      "Your staff will be able to focus on providing quality customer experiences by automating and reducing the manual tasks.",
  },
];

export const HOTEL_INVENTORY_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Inventory Management System For Hotels",
    description:
      "The platform connects all hotel departments, which ensures smooth coordination and improved resource management. The centralized system reduces confusion and improves communications, while increasing overall efficiency.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/hotel-inventory-management-software/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/inventory-management",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "Centralized Hotel Operations Management",
        listdescription:
          "To eliminate confusion and increase efficiency, manage all activities related to inventory from a single dashboard. A single source of information allows for better stock control and simplifies day-to-day operations.",
      },
      {
        listheading: "Housekeeping Supply Optimization",
        listdescription:
          "Assure that the housekeeping department has all of the necessary supplies, without any overstocking. Tracking helps to maintain standards of service and enhances the readiness of rooms.",
      },
      {
        listheading: "Maintenance of Inventory Tracking",
        listdescription:
          "Maintain a list of all the tools, parts, and materials needed for maintenance. It is important to ensure that the maintenance work does not get delayed because of missing stock.",
      },
      {
        listheading: "Real-time Operational Visibility",
        listdescription:
          "Take faster, more accurate, and timely decisions by gaining access to real-time information on the inventory levels in all departments and areas of storage. It improves operational planning and responsiveness.",
      },
    ],
  },
  {
    id: "2",
    title: "Better Decision Reporting & Analytics",
    description:
      "Our deep insight into hotel inventory management software operations will help you to make more informed and profitable decisions.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/hotel-inventory-management-software/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
    list: [
      { listheading: "Identify high-usage and expensive products" },
      { listheading: "Tracking accurately can help reduce waste" },
      { listheading: "Real data to optimize procurement cycles" },
      { listheading: "Budgeting and Forecasting Accuracy Improved" },
    ],
  },
];

export const HOTEL_INVENTORY_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Real-time Stock Tracking",
    description:
      "The inventory levels are updated automatically whenever an item is consumed, transferred, or restocked. This ensures complete accuracy, eliminates manual updating delays, and minimizes stock mismatches. Managers can instantly monitor stock level, allowing them to make more informed and faster decisions. The real-time tracking improves the coordination of departments, as everyone works with updated data.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/hotel-inventory-management-software/key-features-section/key-features-card1.webp",
  },
  {
    id: 2,
    title: "Housekeeping  Inventory Management",
    description:
      "It ensures uninterrupted service by tracking linens, towels, toiletries, and cleaning products, as well as room essentials. It helps the housekeeping team maintain optimal stock levels and avoid shortages at peak times. The system allows for tracking usage patterns by room or floor to improve planning and efficiency.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/hotel-inventory-management-software/key-features-section/key-features-card2.webp",
  },
  {
    id: 3,
    title: "Multi-Department Inventory System",
    description:
      "The unified system allows you to manage inventory in all departments including housekeeping, maintenance, and laundry. It eliminates the need to use separate tracking tools, and improves coordination among teams. The management can maintain full visibility and control over the whole operation while each department has access to relevant data.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/hotel-inventory-management-software/key-features-section/key-features-card3.webp",
  },
  {
    id: 4,
    title: "SKU-Based Inventory Organization",
    description:
      "The SKU is unique to each inventory item, which makes it easy to track and efficiently manage the stock. The structured approach helps reduce confusion when working with large quantities of items. This approach simplifies stock audits, reporting, and searching across locations.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/hotel-inventory-management-software/key-features-section/key-features-card4.webp",
  },
  {
    id: 5,
    title: "Warehouse & Storage Room Management",
    description:
      "Tracking inventory in multiple locations is possible, such as central warehouses and floor storage areas, or department-specific storage. It improves organisation and makes sure that the items can be easily accessed when required. This also reduces the time needed to search for items and minimizes delays.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/hotel-inventory-management-software/key-features-section/key-features-card5.webp",
  },
  {
    id: 6,
    title: "Purchase Order & Supplier Tracking",
    description:
      "Maintain consistent stock availability, manage suppliers, monitor timelines for delivery, track purchase orders, and keep track of purchase orders. This system records all vendor interactions to help you assess supplier performance and improve your procurement decisions. It ensures a reliable supply chain and avoids shortages at the last minute.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/hotel-inventory-management-software/key-features-section/key-features-card6.webp",
  },
  {
    id: 7,
    title: "Consumption & Usage Reports",
    description:
      "Create detailed reports in order to identify items with high consumption or costs. This information helps you reduce waste, improve stock levels, and optimize purchasing strategies. This leads to improved cost control and better inventory planning over time.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/hotel-inventory-management-software/key-features-section/key-features-card7.webp",
  },
  {
    id: 8,
    title: "Automatic Alerts and Notifications",
    description:
      "You will receive real-time notifications when stock levels are low, delayed replenishment, or abnormal consumption patterns. You can take action immediately before problems affect your operations. Automatic alerts help ensure critical products are available at all times and avoid service interruptions.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/hotel-inventory-management-software/key-features-section/key-features-card8.webp",
  },
  {
    id: 9,
    title: "Role-Based Access Control",
    description:
      "To ensure only authorized personnel can update or access inventory data, assign roles and permissions. It improves the security of data and ensures accountability, while also allowing team members to concentrate on their respective responsibilities.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/hotel-inventory-management-software/key-features-section/key-features-card9.webp",
  },
  {
    id: 10,
    title: "Inventory Transfer Tracking",
    description:
      "To maintain transparency, monitor the movements of stock between locations or departments. Each transfer is documented, which reduces the risk of misplacement or loss and ensures accurate stock tracking within the hotel.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/hotel-inventory-management-software/key-features-section/key-features-card10.webp",
  },
];

export const HOTEL_INVENTORY_WORKFLOW_DATA = {
  heading: "Inventory Workflow Process for Owners Inventory",
  paragraph:
    "Our hotel inventory management software follows a structured and efficient workflow designed to simplify daily operations and maintain accurate stock control across all departments.",
  steps: [
    {
      number: 1,
      title: "Planning for Inventory Procurement",
      description:
        "Stock is planned based on seasonality, occupancy, and operational requirements. It is important to ensure that inventory levels are in line with the actual needs of your business. This will reduce both overstocking and understocking. Planning properly also maintains a balance of cost and availability.",
    },
    {
      number: 2,
      title: "Structured Storage & Categorization",
      description:
        "The inventory is organized by type and frequency of use, which makes it easy to find and manage the items. An organized storage system makes it easier to find items and saves time.",
    },
    {
      number: 3,
      title: "Live Monitoring and Updates",
      description:
        "The stock levels are updated continuously as the items are transferred or used, which ensures accurate tracking. The real-time transparency allows managers to react quickly to changes in inventory and ensure operational continuity.",
    },
    {
      number: 4,
      title: "Supplier Coordination & Reordering",
      description:
        "It avoids interruptions, manages vendor relationships, tracks delivery, and makes sure to restock on time. It helps to maintain a constant supply chain, and it improves communication with suppliers.",
    },
    {
      number: 5,
      title: "Internal Distribution & Usage Tracking",
      description:
        "The inventory is divided among departments and tracked, which ensures accountability. It is possible to identify departments that consume the most resources, and areas where improvements are needed.",
    },
    {
      number: 6,
      title: "Reporting, Insights & Optimization",
      description:
        "Analysis of inventory data can improve buying decisions, decrease waste, and optimize operations. Businesses can adapt to changes in demand and efficiency by using continuous monitoring and reporting.",
    },
  ],
};

export const HOTEL_INVENTORY_TESTIMONIAL_DATA = {
  heading: "What Do Our Clients Say About Owners Inventory?",
  paragraph: "",
  secondHeading: "Easy Hotel Inventory Management",
  secondDescription:
    "Get full control over your hotel's inventory using a modern system that is designed for hospitality operations. Increase accuracy, cut waste and streamline the entire supply chain, while maintaining high standards of service.",
  whyChooseTitle: "Why Choose Owners Inventory for Hotel Inventory Management?",
  whyChooseDescription:
    "Our inventory management software handles tasks efficiently where accuracy is crucial. It manages complex hotel inventory with structured workflows and reduces the chances of human errors by eliminating manual processes.",
};

export const HOTEL_INVENTORY_TESTIMONIALS = [
  {
    id: "1",
    name: "Asher Cox",
    title: "Supply Chain Manager",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image50.webp",
    text: "Real-time tracking has made a significant improvement in the coordination of housekeeping and maintenance.",
  },
  {
    id: "2",
    name: "Claire Ward",
    title: "Hotel Director",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image51.webp",
    text: "Our operations are now completely organized all thanks to their hotel inventory management software.",
  },
  {
    id: "3",
    name: "Finn Howard",
    title: "Facility Administrator",
    image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image51.webp",
    text: "With their help, we have significantly improved the cost-control and reduced waste in all departments.",
  },
];

export const HOTEL_INVENTORY_FAQS = [
  {
    id: "1",
    question: "What is hotel inventory management software?",
    answer:
      "Hotel inventory management software is a system that helps track and manage inventory in real-time, including housekeeping materials, maintenance supplies, and operational stocks. It provides full visibility and reduces errors. All departments can access accurate data to make better decisions.",
  },
  {
    id: "2",
    question: "Can it manage different departments within a hotel or resort?",
    answer:
      "It supports several departments, including laundry, housekeeping, maintenance and storage so that the management can maintain full control over the hotel and have visibility into all departments. Each department has its own tracking system.",
  },
  {
    id: "3",
    question: "Can it reduce manual labor?",
    answer:
      "It automates stock tracking, alerts, reports, and reporting which reduces the need for manual spreadsheets and logs. This saves time, and minimizes human error in day-to-day operations.",
  },
  {
    id: "4",
    question: "Does it reduce the cost of inventory?",
    answer:
      "The system can help you make better purchasing decisions. It provides accurate data on usage and waste which ensures the correct stock levels are maintained, and reduces unnecessary expenditures caused by emergency purchases or overstocking.",
  },
  {
    id: "5",
    question: "Does it work for hotels having large chains?",
    answer:
      "It is designed for multi-location operation and fully scalable. A centralized inventory system allows large hotel chains to manage multiple properties while still maintaining control in each property.",
  },
];

export const HOTEL_INVENTORY_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Easy Setup",
    description:
      "Implementation is quick and minimally disruptive to your daily operations which allows you to quickly start using the software. The setup is simple and easy to follow, so that your team can quickly adapt without needing complex technical skills or lengthy training sessions. It ensures faster implementation and operational improvement.",
    icon: "testWhychoseIcon1",
  },
  {
    id: "2",
    title: "Reliable Performance",
    description:
      "Even during high demand periods and peak season, the system is able to handle multi-department inventory and large volumes of stock efficiently. It is designed to work consistently even under high pressure. This ensures that inventory operations are accurate and stable, regardless of the workload.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Real-time Visibility",
    description:
      "Know what is in stock, where it's located, and when to replenish it. The real-time view eliminates the guesswork, and enables managers to take quick and informed decisions. This reduces delays and prevents stock-related disruptions.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Advanced Reporting",
    description:
      "With detailed analytics, usage reporting, and performance insights, you can make better decisions. Our reporting tools help you understand inventory trends and identify waste, reduce costs, and improve planning.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Scalable Software",
    description:
      "The system is suitable for both small and large hotels. It can adapt to the growth of your business and can scale with you, whether it is a single location or multiple properties. It will not compromise performance or control.",
    icon: "testWhychoseIcon5",
  },
  {
    id: "6",
    title: "Secure Access Control",
    description:
      "Ensure data security by granting permissions based on roles and limiting access to different employees. It protects sensitive data while giving teams access to only what they need.",
    icon: "testWhychoseIcon6",
  },
  {
    id: "7",
    title: "Continuous Support",
    description:
      "We provide ongoing support for your system to make sure it runs at its best. Our team continuously updates the software to meet industry requirements, ensuring that you are always up-to-date with the latest tools and practices for hotel inventory management.",
    icon: "testWhychoseIcon7",
  },
];

export const HOTEL_INVENTORY_TOOLS_DATA = {
  heading: "Integration and Tools",
  paragraph:
    "Owners Inventory is integrated with accounting platforms, procurement systems, hotel management systems, and supplier systems. It reduces the manual workload, removes duplication of data, and streamlines operational workflows throughout your business.",
  tools: [
    {
      id: 1,
      name: "QuickBooks",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/quick-book.svg",
    },
    {
      id: 2,
      name: "Xero",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/xero.svg",
    },
    {
      id: 3,
      name: "Stripe",
      image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/stripe.svg",
    },
    //   { id: 4, name: "Shopify", image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/shopify.svg" },
    // { id: 5, name: "WooCommerce", image: "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/woocomerce.svg" },
  ],
};
