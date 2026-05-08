import { IndustryIconSet } from "@/components/icons/IndustryIconRegistry";

export interface HeroStats {
  percentage: string;
  description: string;
}

export interface Quote {
  heading?: string;
  text: string;
  author: string;
  authorTitle: string;
  overview: string;
}

export interface Challenge {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface StrategyStep {
  title: string;
  description: string;
}

export interface Outcome {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface ResultMetric {
  heading: string;
  value: string;
  label: string;
}

// Merged interface to support both the landing page slider and the new detail page schema
export interface CaseStudyData {
  id: string;
  image: string;
  backgroundImage: string;
  ctaText: string;
  
  // New schema fields
  slug?: string;
  companyName?: string;
  tagline?: string;
  subtitle?: string;
  heroStats?: HeroStats[];
  founderQuote?: Quote;
  challengesIntro?: string;
  challengesHead?: string;
  challenges?: Challenge[];
  challengesIconSet?: IndustryIconSet;
  strategyHead?: string;
  strategyIntro?: string;
  strategySteps?: StrategyStep[];
  outcomesIntro?: string;
  outcomesHeading?: string;
  outcomesBanner: string;
  outcomes?: Outcome[];
  outcomesIconSet?: IndustryIconSet;
  resultsHeading?: string;
  resultsSubheading?: string;
  resultMetrics?: ResultMetric[];
}

export const caseStudiesData: CaseStudyData[] = [
  {
    id: "1",
    image: "/assets/home-page-images/client-image-1.webp",
    backgroundImage: "/assets/home-page-images/isolation-mode.webp",
    ctaText: "Read Case Study",

    // New schema data
    slug: "al-asif",
    companyName: "AL-Asif",
    tagline: "The Digital Evolution",
    subtitle: "Transforming manual sales, inventory, and accounting into a unified, live system that drives efficiency and accuracy.",
    heroStats: [
      { percentage: "45%", description: "Reduction in Operational Work Hours" },
      { percentage: "90%", description: "Surge in Inventory Accuracy" },
      { percentage: "30%", description: "Faster Billing Speed" },
    ],
    founderQuote: {
      heading: "The Beginning of Al-Asif’s Transformation",
      overview: "Their business greatly relied on handwritten bills, manual record checks, and calculations in ledgers. There was a lack of structure and visibility in day-to-day activities. Stock shortages became a routine, delays on the billing side aggravated employees and clients alike, and the financial transparency always lagged. The management wanted precision, the workers wanted simplicity, and the whole business wanted a single point of truth, a single location where all things remained updated, interrelated, and free of errors.",
      text: "We require a single system to process our sales, inventory, and accounts correctly and immediately. We don't just want software; we want to eliminate manual effort.",
      author: "Faique Asif",
      authorTitle: "Al-Asif CEO",
    },
    challengesHead: "What Was Holding Them Back",
    challengesIntro: "Al-Asif faced a complex web of operational friction where manual data entry acted as a barrier to real-time growth.",
    challengesIconSet: "alAsifCasestudyIcons",
    challenges: [
      { id: "1", title: "Disconnected Daily Operations", icon: "challengeIcon1", description: "Sales, inventory, and accounting operated on different manual processes that didn't communicate. Each update was recorded separately, which increased the workload and caused discrepancies between departments." },
      { id: "2", title: "Manual Billing", icon: "challengeIcon2", description: "Handwritten invoices led to delayed reporting and frequent errors. Employees were forced to re-verify all sales, slowing down service during rush hours." },
      { id: "3", title: "Frequent Stock Mismatches", icon: "challengeIcon3", description: "Manual stock updates frequently showed the incorrect quantities. This created piles of stock, unexpected out-of-stock situations, and confusion between physical counts and records." },
      { id: "4", title: "Limited Financial Clarity", icon: "challengeIcon4", description: "Manual preparation of profit and loss statements was slow and inaccurate. The data was scattered in ledgers, making it impossible for management to gain visibility." },
      { id: "5", title: "No Real-Time Visibility", icon: "challengeIcon5", description: "The management lacked an immediate performance overview. Daily sales, stock, and cash flow had to be followed up on manually, and decisions were delayed." },
      { id: "6", title: "High Dependency on Manual Labour", icon: "challengeIcon6", description: "All processes relied on individuals, not procedures. One mistake would impact the stock level, accounting entries, or daily summaries and cause a series of errors." },
      { id: "7", title: "Difficulty Scaling Operations", icon: "challengeIcon7", description: "The manual structure was unable to match the increasing business demands. The system was not flexible or automated to support long-term growth and productivity." },
    ],
    strategyHead: "A Structured Path to Success",
    strategyIntro: "We engineered a systematic transition strategy designed to eliminate the manual bottlenecks and establish a foundation for digital precision.",
    strategySteps: [
      { title: "Workflow Assessment", description: "We started auditing how Al-Asif handled their sales, stock turnover, purchases, and financial accounting. We understood each process to identify where errors and time loss were occurring." },
      { title: "Inventory Diagnostics", description: "Our team monitored the tracking, updating, and reconciliation of the items. We traced the root causes of stock mismatches, delays in adjusting stock, and corrupt availability records." },
      { title: "Unified Framework", description: "We established an integrated system where sales, inventory, and accounting operate smoothly. All transactions were mapped to allow automatic updating of modules without manual entry." },
      { title: "Real-Time Precision", description: "Live precision became a fundamental concern. We implemented live updates for sales, purchases, and returns so that the stock quantity, valuation statements, and financial performance were reflected instantly." },
      { title: "Operational Simplicity", description: "We simplified interfaces to enable routine operations like billing, searching items, and stock checking to be quick and easy, minimizing reliance on manual calculations." },
      { title: "Role Management", description: "Introduced secure access levels to ensure clean operations. Admins have full visibility, while staff can only access the specific tools required for duties." },
      { title: "Growth Readiness", description: "We designed a flexible architecture capable of scaling as AL-Asif expands product lines or branches without operational interruption or technical debt." },
    ],
    outcomesIntro: "The transformation fundamentally changed how Al-Asif operates, ensuring the business is automated, accurate, and ready for future expansion.",
    outcomesHeading: "How Everything Changed",
    outcomesIconSet: "alAsifCasestudyIcons",
    outcomesBanner: "/assets/case-studies/outcome-banner.webp",
    outcomes: [
      { id: "1", title: "Seamless Operations", icon: "outcomeIcon1", description: "Through Owners Inventory, Al-Asif managed to have a system where sales, inventory, and accounting went hand in hand. Manual errors were eliminated, and everything became smooth." },
      { id: "2", title: "Real-Time Visibility", icon: "outcomeIcon2", description: "Managers received real-time information regarding stocks, sales, and financial status. Decisions previously made in hours might be made in minutes, and the data was precise." },
      { id: "3", title: "Proper Inventory Control", icon: "outcomeIcon3", description: "Mismatches and shortages in the stocks were eradicated. All item movements, including purchase, sale, and returns, were monitored, enabling smarter planning and less loss." },
      { id: "4", title: "Streamlined Financials", icon: "outcomeIcon4", description: "Profit/loss statements, supplier balances, and expense reports were automated. The level of financial transparency was raised, making decision-making faster and more accurate." },
      { id: "5", title: "Enhanced Productivity", icon: "outcomeIcon5", description: "Employee processes became quicker. Billing, stock checks, and reporting were done easily, and the team was able to concentrate on customer service." },
      { id: "6", title: "Scalable Growth", icon: "outcomeIcon6", description: "The system was constructed to expand with Al-Asif. Without disturbing the operations, new products, branches or workflows could be easily added." },
    ],
    resultsHeading: "How Their Operational Efficiency Increased",
    resultsSubheading: "The implementation of Owners Inventory POS transformed manual friction into high-performance digital operations.",
    resultMetrics: [
      { heading: "Items", value: "5000+", label: "Already Organized Digitally" },
      { heading: "Less", value: "35%", label: "Administrative Labor" },
      { heading: "real-time", value: "90%", label: "stock tracking accuracy" },
      { heading: "Regions", value: "03", label: "Serving Teams Across the Continent" },
      { heading: "Users", value: "250+", label: "Active System Users" },
      { heading: "Faster Closing", value: "65%", label: "Quick financials" },
      { heading: "Automation", value: "100%", label: "Profit & loss reports" },
    ],
  },
   {
    id: "2",
    image: "/assets/home-page-images/client-image-1.webp",
    backgroundImage: "/assets/home-page-images/isolation-mode.webp",
    ctaText: "Read Case Study",

    // New schema data
    slug: "bright-home",
    companyName: "BrightHome Transformation:",
    tagline: "Smarter Inventory, Faster Fulfillment",
    subtitle: "Connecting inventory, warehouse, and order systems into a single one real-time platform for better accuracy, faster operations, and scalable growth.",
    heroStats: [
      { percentage: "42%", description: " Reduction in Overstock" },
      { percentage: "38%", description: "Reduction in Order Processing Time" },
      { percentage: "100%", description: "Inventory Accuracy Across Warehouses" },
    ],
    founderQuote: {
      heading: "How BrightHome Took Control of Growth",
      overview: "BrightHome Appliances approached Owners Inventory at a time when their current systems were unable to accommodate the need to grow fast and seasonal surges. Isolated tools, paper-based tracking, and sluggish reporting were triggering delays in fulfillment and inventory errors in warehouses. They required one solid, trusting platform to have real-time visibility, simplify order processing, and be ready to expect peak sales seasons.",
      text: "Owners Inventory gave us one system to manage our inventory and orders in real time. It’s made everything much smoother and more accurate.",
      author: "Basit Saleem",
      authorTitle: "BrightHome CEO",
    },
    challengesHead: "When Growth Started Hurting Operations",
    challengesIntro: "When BrightHome Appliances started expanding, their gaps in operations were more apparent particularly in peak seasons. Instead of expected profit seasons turned into stressful periods of delays, mismanagement, and missed opportunities.",
    challengesIconSet: "alAsifCasestudyIcons",
    challenges: [
      { id: "1", title: "Seasonal Demand Pressure", icon: "challengeIcon1", description: "The demand increased within certain months, yet it was not matched with inventory planning. Appliances that sold fast cleared stock more quickly and the slow sellers accumulated, damaging sales and cash flow." },
      { id: "2", title: "Multi-Warehouse Visibility Lapses", icon: "challengeIcon2", description: "Inventory was distributed across various warehouses and lacked a single source of truth. There was a problem with teams not being able to find stock in real time, resulting in incorrect commitments and delivery failures." },
      { id: "3", title: "Order Fulfillment Delays", icon: "challengeIcon3", description: "Orders handling was not coordinated with systems. This led to delayed deliveries, missed delivery schedules, and more complaints among customers during peak season." },
      { id: "4", title: "Overstock & Dead Inventory", icon: "challengeIcon4", description: "BrightHome often overstocked some of the products without proper forecasting. Capital remained tied up in dead stock, and in-demand products were out of stock." },
      { id: "5", title: "Weak Reporting & Forecasting", icon: "challengeIcon5", description: "Tools and spreadsheets were used to maintain sales and inventory. The management had no clear understanding of how to forecast demand, plan procurement, or make business decisions in time." },
    ],
    strategyHead: "A Clear Plan For Complex Operations",
    strategyIntro: "To address the problems facing BrightHome, we worked on exploring their end-to-end operations. Our strategy was based on bringing clarity, control and scalability without disrupting business operations.",
    strategySteps: [
      { title: "Operational Assessment", description: "We did an in-depth analysis of the sales flow, inventory management, and warehouse operations of BrightHome. This assisted us in determining bottlenecks, inefficiencies, and gaps that led to delays and stock mismatches." },
      { title: "Demand Pattern Analysis", description: "Past sales information was examined to gain insight into seasonality and product flow. This also enabled us to strategize a way that could accommodate demand surges without overstocking or shortages." },
      { title: "Process Mapping", description: "We tracked stock flow within warehouses and sales channels. We plotted every step, and this helped find the point where automation and system-level control were required." },
      { title: "Data Centric Decision Framework", description: "We focused on centralized reporting and real-time insights. This ensured that the management made quick and informed decisions using the right and real-time information." },
      { title: "Technology Integration Strategy", description: "We connected the new system to BrightHome’s legacy sales platforms, accounting, and warehouse management systems. This eliminated data inconsistencies and created a data environment in which all processes were integrated." },
      { title: "Workflow Automation", description: "We removed manual work in the process and introduced workflow automation for inventory management, order management and reporting. This removed errors, made the process faster, and allowed staff to do other value-added tasks." },
      { title: "Team Enablement", description: "We provided BrightHome training on the new system and process changes. Tight processes, training, and support allowed staff to easily adopt the new system for future use." },
    ],
    outcomesHeading: "Clear Control, Measurable Impact",
    outcomesIntro: "Under the new system, BrightHome Appliances changed the way it managed inventory, orders and seasonal demand. Previously existing pain points became growth-supporting strengths.",
    outcomesIconSet: "alAsifCasestudyIcons",
    outcomesBanner: "/assets/case-studies/outcome-banner.webp",
    outcomes: [
      { id: "1", title: "Faster Order Fulfillment", icon: "outcomeIcon1", description: "Real-time visibility of the stock and the automated workflows led to a dramatic decrease in the order processing time. The customers were getting their appliances much quicker, even on peak seasons." },
      { id: "2", title: "Inventory Accurac", icon: "outcomeIcon2", description: "Inventory tracking of all warehouses in real time eradicated conjecture. The level of stock turned out to be dependable and minimised any mistakes and increased confidence in planning." },
      { id: "3", title: "Reduced Overstock", icon: "outcomeIcon3", description: "BrightHome experienced smarter forecasting, which allowed it to match purchase with actual demand. The inventory was reduced and this released the working capital and storage areas." },
      { id: "4", title: "Improved Seasonal Readiness", icon: "outcomeIcon4", description: "Sales peaks were no longer chaotic. BrightHome was ready to go into high demand times with the right products, in the right places." },
      { id: "5", title: "Stronger Profitability", icon: "outcomeIcon5", description: "The improved margins were a direct result of better stock control, fewer delays and improved sales fulfillment. Seasonal campaigns were more cost effective and predictable." },
      { id: "6", title: "Better Decision-Making", icon: "outcomeIcon6", description: "Centralised and real-time data and reporting enabled management to see the big picture. Decisions that were once intuitive  could be backed up with data, and were made quicker and with greater confidence." },
    ],
    resultsHeading: "Measurable Business Results",
    resultsSubheading: "BrightHome Appliances saw improvements in inventory, service level and profits after trusting Owners Inventory. Their results were tracked and measured to see actual business results.",
    resultMetrics: [
      { heading: "Inventory Accuracy", value: "100%", label: "Real-time synchronization across all warehouses" },
      { heading: "Reduction in Overstock", value: "42%", label: "Freed up warehouse capacity and funds" },
      { heading: "Faster Order Processing", value: "38%", label: "Automated workflows improved fulfillment speed" },
      { heading: "Fewer Late Deliveries", value: "35%", label: "Higher on-time delivery rate during busy times" },
      { heading: "more Stock Turnover", value: "30%", label: "Higher Stock Turnover of popular products" },
      { heading: "Fewer Order Cancellations", value: "25%", label: "Better stock availability across channels" },
      { heading: "Increase in Seasonal Sales", value: "22%", label: "Increased sales during peak times " },
    ],
  },
];