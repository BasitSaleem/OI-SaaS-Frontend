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
  strategyIntro?: string;
  strategySteps?: StrategyStep[];
  outcomesIntro?: string;
  outcomesHeading?: string;
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
      { percentage: "45%", description: "Reduction in operational work hours" },
      { percentage: "90%", description: "Surge in inventory accuracy" },
      { percentage: "30%", description: "Faster billing speed" },
    ],
    founderQuote: {
      heading: "The Beginning of Transformation",
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
    outcomes: [
      { id: "1", title: "Seamless Operations", icon: "outcomeIcon1", description: "Through Owners Inventory, Al-Asif managed to have a system where sales, inventory, and accounting went hand in hand. Manual errors were eliminated, and everything became smooth." },
      { id: "2", title: "Real-Time Visibility", icon: "outcomeIcon2", description: "Managers received real-time information regarding stocks, sales, and financial status. Decisions previously made in hours might be made in minutes, and the data was precise." },
      { id: "3", title: "Proper Inventory Control", icon: "outcomeIcon3", description: "Mismatches and shortages in the stocks were eradicated. All item movements, including purchase, sale, and returns, were monitored, enabling smarter planning and less loss." },
      { id: "4", title: "Streamlined Financials", icon: "outcomeIcon4", description: "Profit/loss statements, supplier balances, and expense reports were automated. The level of financial transparency was raised, making decision-making faster and more accurate." },
      { id: "5", title: "Enhanced Productivity", icon: "outcomeIcon5", description: "Employee processes became quicker. Billing, stock checks, and reporting were done easily, and the team was able to concentrate on customer service." },
      { id: "6", title: "Scalable Growth", icon: "outcomeIcon6", description: "The system was constructed to expand with Al-Asif. Without disturbing the operations, new products, branches or workflows could be easily added." },
    ],
    resultsHeading: "Results in Numbers",
    resultsSubheading: "How Their Operational Efficiency Increased The implementation of Owners Inventory POS transformed manual friction into high-performance digital operations.",
    resultMetrics: [
      { value: "5000+", label: "Items already organized digitally" },
      { value: "35%", label: "Less administrative labor" },
      { value: "90%", label: "Real-time stock tracking accuracy" },
      { value: "03", label: "Regions serving teams across the continent" },
      { value: "250+", label: "Active system users" },
      { value: "65%", label: "Faster monthly financial closings" },
      { value: "100%", label: "Automated profit and loss reporting" },
    ],
  },
  // {
  //   id: "2",
  //   companyName: "BrightHome",
  //   founderQuote: {
  //     overview: "BrightHome Appliances struggled with seasonal demand, delayed order fulfillment, and poor visibility across multiple warehouses. After reviewing their sales, inventory, and supply workflows, we built a system that brought everything into one place. It provided live stock updates, automated order handling, and clearer sales forecasts, helping them reduce overstock, improve delivery speed, and increase profitability during peak seasons.",
  //     text: "We started using Owners Inventory during our peak season, and it honestly changed the game. It gave us real-time visibility into every warehouse, so we could fill orders faster and cut down on overstock. The team found it easy to use, and it took the guesswork out of our daily decisions.",
  //     author: "Sarah Johnson",
  //     authorTitle: "Retail Pro COO",
  //   },
  //   image: "/assets/home-page-images/client-image-1.webp",
  //   backgroundImage: "/assets/home-page-images/isolation-mode.webp",
  //   ctaText: "Read Case Study",
  // },
  // {
  //   id: "3",
  //   companyName: "Tech Gear",
  //   founderQuote: {
  //     overview: "Tech Gear's manual, disconnected systems for sales, inventory, and finance were causing major delays and inaccuracies as they grew. We integrated their operations into one platform to automate billing, sync inventory in real time, and provide clear financial dashboards. This eliminated their data chaos, giving them reliable stock, faster fulfillment, and actionable insights for growth.",
  //     text: "Before this system we were always guessing with our stock and chasing billing errors. Now everything is in one place. We have live inventory, clean invoices and clear reports. It took the stress out of daily work. Now we can focus on growing the business.",
  //     author: "Mike Chen",
  //     authorTitle: "Tech Gear Founder",
  //   },
  //   image: "/assets/home-page-images/client-image-1.webp",
  //   backgroundImage: "/assets/home-page-images/isolation-mode.webp",
  //   ctaText: "Read Case Study",
  // },
  // {
  //   id: "4",
  //   companyName: "Urban Threads",
  //   founderQuote: {
  //     overview: "Urban Threads was struggling to synchronize manufacturing with sales, leading to chronic stock issues. We implemented a system that links factory data directly to their retail and online inventory. This provides a single, real-time view of production and demand, enabling them to correct stock imbalances and align output with actual customer orders.",
  //     text: "This system fixed our biggest headache. It finally connected our factory production to our actual sales. Now we make what we sell, and we've stopped wasting money on the wrong inventory.",
  //     author: "Emma Davis",
  //     authorTitle: "Urban Threads Director",
  //   },
  //   image: "/assets/home-page-images/client-image-1.webp",
  //   backgroundImage: "/assets/home-page-images/isolation-mode.webp",
  //   ctaText: "Read Case Study",
  // }
];