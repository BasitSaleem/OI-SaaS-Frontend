// ── Types ────────────────────────────────────────────────────────────────────

export interface BlogTOCItem {
  id: string;
  label: string;
}

export type TOCItem = BlogTOCItem;

export interface BlogHeroStat {
  percentage: string;
  description: string;
}

export interface BlogAuthorQuote {
  text: string;
  author: string;
  authorTitle: string;
  authorAvatar?: string;
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogResultMetric {
  heading: string;
  value: string;
  label: string;
}

// Content blocks inside a section
export interface ParagraphBlock { type: "paragraph"; content: string }
export interface SmallHeadingBlock { type: "smallHeading"; content: string }
export interface NumberedListBlock { type: "numberedList"; items: string[] }
export interface BulletListBlock { type: "bulletList"; items: string[] }
// Highlighted callout box (e.g. a "Practical range:" note).
// variant "default" = grey panel, "success" = green "Key insight" panel.
export interface CalloutBlock { type: "callout"; title?: string; content: string; variant?: "default" | "success" }
// Simple data table with a header row and body rows.
export interface TableBlock { type: "table"; columns: string[]; rows: string[][] }
// List where each item has a bold title + description, shown with a marker:
// "info" = info-circle icon, "number" = numbered circular badge.
export interface DetailListItem { title: string; content: string }
export interface DetailListBlock { type: "detailList"; marker?: "number" | "info"; items: DetailListItem[] }
// Budget breakdown cards — each card is a business type with labelled metrics
// (e.g. Hardware / Software / Processing / First-year). highlight styles the value.
export interface BudgetMetric { label: string; value: string; highlight?: boolean }
export interface BudgetCard { title: string; subtitle?: string; metrics: BudgetMetric[] }
export interface BudgetCardsBlock { type: "budgetCards"; cards: BudgetCard[] }

export type BlogBlock =
  | ParagraphBlock
  | SmallHeadingBlock
  | NumberedListBlock
  | BulletListBlock
  | CalloutBlock
  | TableBlock
  | DetailListBlock
  | BudgetCardsBlock;

export interface BlogSection {
  id: string;
  heading: string;
  mainHeading?: boolean;
  blocks: BlogBlock[];
  image?: string;
}

export interface BlogData {
  // Identity
  id: string;
  slug: string;

  // Hero
  blogImg: string;
  heading: string;
  tagline?: string;
  subtitle?: string;
  author: string;
  authorAvatar?: string;
  authorRole?: string;
  date: string;
  totalRead: string;
  status: "popular" | "recent";
  heroStats?: BlogHeroStat[];
   category?: string;

  // Overview / intro
  blogOverview: string;

  // Author quote / pull-quote
  authorQuote?: BlogAuthorQuote;

  // Table of contents
  tableOfContents: BlogTOCItem[];

  // Body sections
  sections: BlogSection[];

  // Key metrics strip
  resultMetrics?: BlogResultMetric[];

  // FAQs
  faqs?: BlogFAQ[];

  // Sidebar / footer
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  // Sidebar / footer
  relatedTopicIds?: string[];

  // Colors (optional accent theming)
  primaryColor?: string;
  secondaryColor?: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const allBlogData: BlogData[] = [
  {
    id: "pos-system-cost",
    slug: "how-much-does-a-pos-system-cost",
    metaTitle: "POS System Cost Breakdown 2026 | Owners Inventory",
    metaDescription: "See what a POS system really costs in 2026: hardware, software, and processing fees, all broken down. Get real numbers so you can budget with confidence.",
    keywords: [
      "pos system cost",
      "how much does a pos system cost",
      "pos system pricing 2026",
      "pos hardware cost",
      "pos software cost",
      "payment processing fees",
      "point of sale system cost",
      "pos system cost for small business",
      "cheap pos system",
    ],
    blogImg: "https://d2qlv5xtew5ayb.cloudfront.net/assets/blog-images/first-blog.webp",
    heading: "How Much Does a POS System Cost? A Complete Pricing Breakdown for 2026",
    tagline: "Complete POS Pricing Guide",
    subtitle: "Every cost layer explained — hardware, software, processing fees, and the hidden charges most buyers miss.",
    author: "Sarah Mitchell",
    authorAvatar: "https://d2qlv5xtew5ayb.cloudfront.net/assets/blogs/Women13.webp",
    authorRole: "Inventory Consultant",
    date: "Aug 12, 2026",
    totalRead: "8 min read",
    status: "popular",
     category: "Inventory Management",
    primaryColor: "#1AD1B9",
    secondaryColor: "#795CF5",

    heroStats: [
      { percentage: "$148.5B", description: "Paid by U.S. Merchants in Processing Fees (2024)" },
      { percentage: "2.35%", description: "Average In-Person Visa/Mastercard Rate" },
      { percentage: "30-Day", description: "Free Trial with Owners Inventory" },
    ],

    blogOverview: "You're opening a retail store, a café, or maybe a second location, and at some point someone asks: \"So what's your POS going to run you?\" The honest answer is that there is no single number. POS system pricing is built in layers, and if you only look at the monthly software fee, you'll budget wrong.\n\nThis guide breaks down every cost component you'll actually encounter: hardware, software, payment processing, hidden fees, and what different industries typically spend. Every stat in this guide is sourced from authoritative financial and government sources. By the end, you'll know exactly what to plan for.",

    authorQuote: {
      text: "I wish I had this breakdown before signing my first POS contract. Understanding the 24-month total cost — not just the monthly fee — would have saved me thousands. Owners Inventory's bundled pricing made the math simple.",
      author: "James Thornton",
      authorTitle: "Owner, Thornton's Café & Retail",
      authorAvatar: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image61.webp",
    },

    tableOfContents: [
      { id: "three-core-costs", label: "The Three Core Costs" },
      { id: "hardware-cost", label: "POS Hardware Cost" },
      { id: "software-cost", label: "POS Software Cost" },
      { id: "processing-fees", label: "Payment Processing Fees" },
      { id: "cost-by-business-type", label: "POS System Cost by Business Type" },
      { id: "hidden-costs", label: "Hidden Costs Most Buyers Overlook" },
      { id: "how-to-compare", label: "How to Compare POS System Costs" },
      { id: "realistic-budget", label: "What a Realistic POS Budget Looks Like" },
      { id: "owners-inventory-fit", label: "Where Owners Inventory Fits" },
      { id: "faqs", label: "FAQs" },
      { id: "final-thoughts", label: "Final Thoughts" },
    ],

    sections: [
      {
        id: "three-core-costs",
        heading: "The Three Core Costs That Make Up Any POS System Price",
        mainHeading: true,
        blocks: [
          { type: "paragraph", content: "Every POS system comes down to three parts: hardware, software, and payment processing. Each bills differently. Together they determine your total cost of ownership." },
        ],
      },
      {
        id: "hardware-cost",
        heading: "POS Hardware Cost: What You're Paying Upfront",
        blocks: [
          { type: "paragraph", content: "Hardware is a one-time investment. What you need depends on your business type." },
          { type: "paragraph", content: "A basic card reader costs $49–$69, which is the entry point for food trucks, pop-ups, and solo operators. For a proper counter setup, a POS terminal cost runs $300–$800 for a touchscreen unit with a card reader. Add a receipt printer ($100–$300), a barcode scanner ($100–$300), and a cash drawer ($50–$150), and a complete single-register bundle lands between $800 and $1,200. [NerdWallet](https://www.nerdwallet.com/business/software/learn/credit-card-processing-fees) notes that small businesses consistently underestimate peripheral costs, which stack up faster than the terminal itself." },
          { type: "paragraph", content: "Specialty hardware adds more. A customer-facing display costs $200–$600. A kitchen display system (KDS) for restaurants runs $300–$800. Tablet-based setups using iPads are priced at $329–$799, not including software." },
          { type: "callout", title: "Practical range:", content: "A basic small business setup starts around $600. A full retail or restaurant POS hardware setup with multiple terminals reaches $3,000 to $10,000 or more." },
          { type: "paragraph", content: "Renting POS hardware for events or seasonal use starts at $349 per month, but lease structures typically tie you to a single processor and cost more over time than buying outright." },
        ],
      },
      {
        id: "software-cost",
        heading: "POS Software Cost: The Ongoing Monthly Expense",
        blocks: [
          { type: "paragraph", content: "POS software cost is almost always subscription-based in 2026. Most providers charge per month, per location, or per terminal. Here's how the tiers break down:" },
          { type: "smallHeading", content: "Free plans:" },
          { type: "paragraph", content: "Free plans are real options for simple operations. But free POS system plans almost always come with higher processing rates: you recover the software cost through every transaction." },
          { type: "smallHeading", content: "Entry-level paid plans:" },
          { type: "paragraph", content: "Entry-level paid plans run $15 to $50 per month. They cover basic inventory management, sales reporting, and standard checkout, suitable for single-location small businesses." },
          { type: "smallHeading", content: "Mid-tier plans:" },
          { type: "paragraph", content: "Mid-tier plans run $50-$150 per month per location. This covers advanced inventory tracking, employee management, loyalty tools, and integrations with QuickBooks or Xero. Most growing retailers and restaurants operate here." },
          { type: "smallHeading", content: "Enterprise plans:" },
          { type: "paragraph", content: "Enterprise plans start at $150 to $300+ per month per location. Multi-location franchises and high-volume retailers sit in this range." },
          { type: "paragraph", content: "One-time license models (where they still exist) run $2,000 to $10,000 upfront. Monthly subscription pricing is now the industry norm, with many providers offering 15–20% off for annual [billing](/pricing)." },
        ],
      },
      {
        id: "processing-fees",
        heading: "Payment Processing Fees: The Cost Per Transaction",
        blocks: [
          { type: "paragraph", content: "Processing fees never go away. Every card payment generates a fee split between the card network and your processor." },
          { type: "paragraph", content: "According to [Bankrate](https://www.bankrate.com/credit-cards/business/merchants-guide-to-credit-card-processing-fees/), average credit card processing fees for merchants fall between 1.5% and 3.5% per transaction. The Merchants Payments Coalition, cited by [Nav](https://www.nav.com/blog/credit-card-processing-fees/) and [The Motley Fool](https://www.fool.com/money/research/average-credit-card-processing-fees-costs-america/), puts the Visa and Mastercard in-person average at 2.35%. In 2024, U.S. merchants paid a record $148.5 billion in credit card processing fees." },
          {
            type: "table",
            columns: ["Transaction Type", "Rate Range"],
            rows: [
              ["In-person swipes, dips, and taps", "1.5% – 2.7%"],
              ["Card-not-present (online or keyed)", "2.9% – 3.5%"],
              ["Fixed per-transaction fee (some providers)", "$0.10 – $0.30"],
            ],
          },
          { type: "callout", variant: "success", title: "Key insight:", content: "At 2.35% on $50,000 in monthly card sales, you're paying roughly $1,175 per month in processing fees, which works out to $14,100 per year. That easily outpaces your software subscription regardless of plan tier, running anywhere from 4x an enterprise plan to well over 20x an entry-level one." },
          { type: "paragraph", content: "Interchange-plus pricing is more transparent than flat rates and usually cheaper at scale. NerdWallet notes flat-rate pricing is simpler but often costs more for businesses with high debit card volumes." },
        ],
      },
      {
        id: "cost-by-business-type",
        heading: "POS System Cost by Business Type",
        blocks: [
          { type: "smallHeading", content: "Retail POS System" },
          { type: "paragraph", content: "A retail POS system needs inventory management, barcode scanning, product variant tracking, and multi-location syncing. Hardware for a single register runs $1,000 to $3,000, plus $50 to $150 per month in software. Multi-location retail plans routinely run $150 to $300 per month per location once inventory syncing and reporting are included." },
          { type: "smallHeading", content: "Restaurant POS System" },
          { type: "paragraph", content: "Restaurants carry the highest hardware requirements. A full restaurant POS system setup, covering terminals, KDS, table management, and handheld devices, can run $2,000 to $5,000 in hardware before software. Quick-service restaurants adding self-order kiosks spend $1,000 to $5,000 per unit on top of that." },
          { type: "smallHeading", content: "Service-Based Businesses" },
          { type: "paragraph", content: "Salons, spas, and auto repair shops need appointment scheduling, staff commission tracking, and customer service history. Software costs run $50 to $150 per month. Hardware investment is lighter since these businesses rarely need barcode scanners or kitchen systems." },
          { type: "smallHeading", content: "Mobile and Pop-Up Businesses" },
          { type: "paragraph", content: "A tablet-based POS is sufficient for food trucks and market vendors. Total upfront setup stays under $1,000, with monthly software fees under $100. This is the cheapest POS system category by a significant margin." },
        ],
      },
      {
        id: "hidden-costs",
        heading: "Hidden Costs Most Buyers Overlook",
        blocks: [
          {
            type: "detailList",
            marker: "info",
            items: [
              { title: "Setup and installation fees", content: "Complex setups can cost $500 to $2,000 for professional configuration and staff training. Cloud-based systems are usually self-installed; restaurant and multi-location retail setups often aren't." },
              { title: "Contract lock-in penalties", content: "Two and three-year contracts with early exit fees are common. Leasing hardware looks affordable monthly but costs more in total than buying, and you don't own the equipment at the end of the term." },
              { title: "Add-on features", content: "Loyalty programs, gift cards, advanced reporting, and online ordering integration are frequently charged as extras. Always verify what's included before signing. A cash drawer ($50–$150) is worth budgeting for: the [Federal Reserve's 2026 Diary of Consumer Payment Choice](https://www.frbservices.org/news/press-releases/051126-findings-2026-diary-consumer-payment-choice) shows cash accounts for roughly 1 in 7 U.S. consumer payments, with more than 90% of consumers intending to keep using it." },
              { title: "PCI compliance fees", content: "According to [CardPaymentOptions](https://www.cardpaymentoptions.com/glossary/pci-compliance-fee/), \"most processors charge $79 to $120 per year for PCI DSS compliance tools.\" If you fail your annual self-assessment, you'll also pay a non-compliance penalty of $19.95–$49.95 per month." },
              { title: "Integration fees", content: "Connecting to accounting software, ecommerce platforms, or ERP systems often carries custom development costs." },
              { title: "Support tiers", content: "Basic email support is standard. Phone and priority support usually require a higher plan or a paid add-on." },
            ],
          },
        ],
      },
      {
        id: "how-to-compare",
        heading: "How to Compare POS System Costs Without Getting Misled",
        blocks: [
          {
            type: "detailList",
            marker: "number",
            items: [
              { title: "Price the 24-month total, not the monthly rate", content: "Add software, hardware, estimated processing fees, and setup costs across 24 months. That's your real comparison number." },
              { title: "Ask what's actually in each plan", content: "\"Inventory management\" means different things to different providers. Confirm whether it covers purchase orders, low-stock alerts, product variants, and multi-location tracking." },
              { title: "Check hardware compatibility", content: "Some systems require proprietary terminals. Open platforms that run on standard iPads or Android tablets give you flexibility and easier replacements." },
              { title: "Read the processing agreement separately", content: "A provider offering cheap POS system software may be recovering margin through a higher processing rate, as NerdWallet points out." },
              { title: "Use free trials", content: "Most reputable providers offer 7 to 30 day free trials. Test the system in your actual workflow before committing." },
            ],
          },
        ],
      },
      {
        id: "realistic-budget",
        heading: "What a Realistic POS Budget Looks Like",
        blocks: [
          { type: "paragraph", content: "Processing rates below use the Merchants Payments Coalition's 2.35% average for in-person Visa/Mastercard transactions (Nav, Bankrate)." },
          {
            type: "budgetCards",
            cards: [
              {
                title: "Solo operator",
                subtitle: "food truck, market booth, single-service provider",
                metrics: [
                  { label: "Hardware", value: "$50–$200" },
                  { label: "Software", value: "$0–$50/month" },
                  { label: "Processing", value: "~2.35% per transaction" },
                  { label: "First-year", value: "$700–$2,000", highlight: true },
                ],
              },
              {
                title: "Small retail shop or café",
                subtitle: "1–2 registers",
                metrics: [
                  { label: "Hardware", value: "$800–$1,500" },
                  { label: "Software", value: "$50–$100/month" },
                  { label: "Processing", value: "~2.35% per transaction" },
                  { label: "First-year", value: "$2,400–$5,000", highlight: true },
                ],
              },
              {
                title: "Restaurant or multi-location retailer",
                metrics: [
                  { label: "Hardware", value: "$2,000–$8,000+" },
                  { label: "Software", value: "$100–$300/month per location" },
                  { label: "Processing", value: "~2.35%–3% per transaction" },
                  { label: "First-year", value: "$7,000–$20,000+", highlight: true },
                ],
              },
            ],
          },
          { type: "paragraph", content: "These are derived estimates, not published benchmarks. Actual spend depends on transaction volume, number of terminals, integrations, and setup requirements." },
        ],
      },
      {
        id: "owners-inventory-fit",
        heading: "Where Owners Inventory Fits in the POS Cost Conversation",
        blocks: [
          { type: "paragraph", content: "Most POS providers charge separately for software, additional terminals, extra locations, and each module you add. Owners Inventory works differently. It's a B2B SaaS platform that combines POS, inventory management, ecommerce, purchasing, and finance into one plan, so you're not building your monthly POS fees from separate line items." },
          { type: "paragraph", content: "If your list includes multi-location support, warehouse management, and accounting integrations, the bundled structure changes the math. Assembling those from separate providers typically adds cost and complexity." },
          { type: "paragraph", content: "All plans include unlimited users, unlimited products, and unlimited orders. No contracts, with a 30-day free trial included. For full tier details and add-on pricing, visit the [Owners Inventory pricing](/pricing) page." },
        ],
      },
      {
        id: "faqs",
        heading: "Frequently Asked Questions",
        blocks: [
          {
            type: "detailList",
            marker: "info",
            items: [
              {
                title: "What is the average cost of a POS system for a small business?",
                content: "For a single-location business, realistic first-year costs fall between $2,400 and $5,000, covering hardware ($800–$1,500), software ($50–$100/month), and processing fees. High card transaction volume increases that figure significantly.",
              },
              {
                title: "Can I use a free POS system if I'm doing high card volume?",
                content: "Free plans recover costs through higher processing rates, often 2.7%–2.9% versus the 2.35% in-person average. On $500,000 in annual card sales, that gap costs $1,750–$2,750 extra per year. Above roughly $150,000–$200,000 in annual volume, a paid plan almost always wins on total cost.",
              },
              {
                title: "What's the difference between flat-rate and interchange-plus pricing, and which should I choose?",
                content: "Flat-rate charges one fixed percentage on every transaction, simple and predictable. Interchange-plus passes the actual card network cost through to you, then adds a small fixed markup. It costs less at scale, especially with high debit card volume. Under $10,000 monthly, flat-rate is fine. Above $20,000, interchange-plus is worth comparing.",
              },
              {
                title: "Is it better to buy or lease POS hardware?",
                content: "Buy. Leasing reduces upfront cost but typically costs more in total over two to three years, and you don't own the equipment at the end. Buying also gives you the freedom to switch processors without hardware constraints.",
              },
              {
                title: "What hidden costs do most buyers miss?",
                content: "PCI compliance fees ($79–$120/year per CardPaymentOptions), add-on charges for loyalty programs and advanced reporting, integration fees for third-party tools, setup fees, and contract cancellation penalties. These are rarely mentioned upfront and frequently appear on the first few invoices.",
              },
            ],
          },
        ],
      },
      {
        id: "final-thoughts",
        heading: "Final Thoughts",
        blocks: [
          { type: "paragraph", content: "Vendors lead with the number that looks most appealing. None of those figures reflect your total cost over 12 or 24 months. Always ask for a full itemization covering hardware, software, processing, and compliance fees before you sign anything." },
          { type: "paragraph", content: "If you want to avoid building your stack from separate tools and invoices, Owners Inventory bundles POS, inventory management, ecommerce, purchasing, and finance into one plan. Unlimited users, unlimited products, unlimited orders, no contracts, and a 30-day free trial included. It's worth comparing against whatever you're currently pricing out." },
        ],
      },
    ],

    resultMetrics: [
      { heading: "Processing Fees", value: "$148.5B", label: "Paid by U.S. Merchants in 2024" },
      { heading: "Average Rate", value: "2.35%", label: "In-Person Visa/Mastercard Average" },
      { heading: "Hardware Entry", value: "$49", label: "Cheapest Card Reader on the Market" },
      { heading: "Software Range", value: "$0–$300", label: "Monthly Software Cost Per Location" },
      { heading: "First-Year Budget", value: "$2,400+", label: "Realistic Small Business Total Cost" },
      { heading: "Free Trial", value: "30 Days", label: "Owners Inventory No-Contract Trial" },
    ],

    relatedTopicIds: [],
  },

  {
    id: "consignment-inventory",
    slug: "what-is-consignment-inventory",
    metaTitle: "What Is Consignment Inventory? A Guide for Retailers and Suppliers | Owners Inventory",
    metaDescription: "Consignment inventory explained: how it works, the five-stage process, accounting treatment, risks, and how to track it without losing money on unsold stock.",
    keywords: [
      "consignment inventory",
      "what is consignment inventory",
      "consignment inventory accounting",
      "consignment vs wholesale",
      "how does consignment inventory work",
      "consignment inventory tracking",
      "consignment inventory examples",
      "consignment inventory management software",
    ],
    // TODO: placeholder image — upload the real hero image to the CDN at
    // assets/blog-images/second-blog.webp (same bucket/path pattern as the first post).
    blogImg: "https://d2qlv5xtew5ayb.cloudfront.net/assets/blog-images/second-blog.webp",
    heading: "What Is Consignment Inventory? A Guide for Retailers and Suppliers",
    tagline: "Consignment Inventory Explained",
    subtitle: "How consignment works, what it costs versus buying stock outright, and how to track it before it turns into an accounting headache.",
    author: "Sarah Mitchell",
    authorAvatar: "https://d2qlv5xtew5ayb.cloudfront.net/assets/blogs/Women13.webp",
    authorRole: "Inventory Consultant",
    date: "Aug 24, 2026",
    totalRead: "7 min read",
    status: "recent",
    category: "Inventory Management",
    primaryColor: "#1AD1B9",
    secondaryColor: "#795CF5",

    heroStats: [
      { percentage: "$367B", description: "Projected Global Secondhand Apparel Market by 2029" },
      { percentage: "60/40", description: "Typical Retailer-Favored Commission Split" },
      { percentage: "30-Day", description: "Free Trial with Owners Inventory" },
    ],

    blogOverview: "An antique mall in North Carolina rents floor space to about 40 dealers. None get paid until a customer buys their dresser or their vintage typewriter. The mall owner never wrote a check for the merchandise on her floor. She just takes a cut when it sells.\n\nThat's consignment inventory in practice, and it shows up far beyond antique malls. Art galleries, furniture stores, children's resale shops, and gift shops all run some version of it. Understanding how it works, and where retailers get burned by it, matters before you sign an agreement with a supplier or a consignor.",

    tableOfContents: [
      { id: "what-is-it", label: "What Is Consignment Inventory?" },
      { id: "how-it-works", label: "How Does Consignment Inventory Work?" },
      { id: "vs-buying-outright", label: "Consignment vs. Buying Stock Outright" },
      { id: "examples", label: "Consignment Inventory Examples" },
      { id: "benefits", label: "The Benefits of Consignment Inventory" },
      { id: "risks", label: "The Risks You're Taking On" },
      { id: "tracking", label: "How to Keep Track of Consignment Inventory" },
      { id: "accounting", label: "Consignment Inventory Accounting" },
      { id: "owners-inventory-fit", label: "How Owners Inventory Supports This" },
      { id: "faqs", label: "FAQs" },
      { id: "conclusion", label: "Conclusion" },
    ],

    sections: [
      {
        id: "what-is-it",
        heading: "What Is Consignment Inventory?",
        mainHeading: true,
        blocks: [
          { type: "paragraph", content: "Consignment inventory is stock a retailer displays and sells for a supplier, who keeps legal ownership until a customer buys it. The retailer, called the consignee, doesn't pay for the item upfront. The supplier, called the consignor, only gets paid once the sale happens, usually as a percentage split or a flat commission." },
          { type: "paragraph", content: "If nothing sells, the retailer isn't stuck holding inventory it paid for. Most consignment agreements let unsold goods go back to the supplier after an agreed period, whether that's 60 days or six months." },
        ],
      },
      {
        id: "how-it-works",
        heading: "How Does Consignment Inventory Work?",
        blocks: [
          { type: "paragraph", content: "Five stages make up the process, and skipping one is usually where a consignment relationship goes sideways." },
          {
            type: "detailList",
            marker: "number",
            items: [
              { title: "Negotiate the terms.", content: "Before any product shows up on a shelf, the supplier and retailer agree on the commission split, the length of the consignment period, who pays for shipping, and who eats the cost if something gets damaged or stolen while it sits in the store. This gets written down, not agreed to over a handshake." },
              { title: "Deliver and log the goods.", content: "The supplier ships the inventory. The retailer checks it against the agreement, logs what came in, and displays it for sale. Ownership stays with the supplier the entire time it sits on the floor." },
              { title: "Sell it.", content: "A customer buys the item like they would anything else in the store. Nothing about the transaction looks different to them, since the consignment arrangement is invisible at checkout." },
              { title: "Settle up.", content: "The retailer keeps its commission and owes the rest to the supplier. Payment schedules vary. Some consignors get paid weekly, others monthly, and some only once a batch of items sells." },
              { title: "Close out the period.", content: "Whatever's left unsold at the end of the consignment period usually goes back to the supplier, unless the agreement says otherwise. Fast-moving items often get restocked before the period even ends." },
            ],
          },
        ],
      },
      {
        id: "vs-buying-outright",
        heading: "Consignment Inventory vs. Buying Stock Outright",
        blocks: [
          { type: "paragraph", content: "Wholesale purchasing and consignment inventory solve the same problem, getting product on your shelves, in opposite ways." },
          {
            type: "table",
            columns: ["Feature", "Consignment Inventory", "Wholesale Purchasing"],
            rows: [
              ["Upfront Cost", "$0, paid after the item sells", "Full cost paid on delivery"],
              ["Legal Ownership", "Supplier retains ownership", "Retailer owns immediately"],
              ["Financial Risk", "Low, mainly shelf-space risk, though damage and theft liability still apply", "Higher, unsold stock ties up cash you already spent"],
              ["Profit Margin", "Lower, smaller commission split", "Higher, full wholesale markup"],
            ],
          },
          { type: "paragraph", content: "The trade-off shows up in practice. Consignment works well for testing new product lines or working with local makers whose sales history you don't have yet. It's less appealing when a supplier offers thin splits, since you're doing the selling work for a smaller cut than a wholesale markup would give you." },
        ],
      },
      {
        id: "examples",
        heading: "Consignment Inventory Examples",
        blocks: [
          { type: "paragraph", content: "Stock in consignment looks different depending on what you sell, even though the mechanics stay the same. A used sporting goods store might take in golf clubs and kayaks from individual sellers, paying out once each item moves. A furniture consignment shop works similarly with couches and dining sets, often pricing items lower each month they sit unsold to move them faster." },
          { type: "paragraph", content: "Children's resale shops take in gently used clothing, strollers, and toys from parents on consignment, often running dozens of small consignor accounts at once since each parent might drop off a single bag of outgrown clothes. Art galleries and craft co-ops consign work from individual artists the same way, each with a different split and payout schedule." },
          { type: "paragraph", content: "Every one of these setups needs the same basic discipline: know what belongs to whom, know what's sold, and know what's owed." },
        ],
      },
      {
        id: "benefits",
        heading: "The Benefits of Consignment Inventory",
        blocks: [
          { type: "paragraph", content: "For a retailer, the appeal is straightforward. You add product variety without tying up cash in inventory that might not sell, and you can test unproven items or new vendors without the financial exposure of a wholesale order. A gift shop can carry local candle makers alongside its regular stock, and if the candles flop, the loss is a few weeks of shelf space, not a few hundred dollars of purchased inventory sitting in a back room." },
          { type: "callout", variant: "success", title: "Key insight:", content: "Say a shop takes in 30 candles from a local maker at $18 each, on a 60/40 split in the shop's favor. In the first month, 22 sell. That's $396 in sales, of which the shop keeps $237.60 and the maker gets $158.40. The remaining eight candles stay on the shelf, and the shop never had to spend a dollar buying them before finding out if customers wanted them." },
          { type: "paragraph", content: "Suppliers benefit too, particularly smaller ones. A new furniture maker gets retail placement without funding a wholesale order or building their own storefront. They also get real market feedback at no extra cost: if an item sells fast on consignment at one retailer, that's evidence it'll do well elsewhere." },
        ],
      },
      {
        id: "risks",
        heading: "The Risks You're Taking On",
        blocks: [
          { type: "paragraph", content: "Consignment shifts financial risk away from the retailer, but it doesn't remove risk entirely. If a consigned item gets damaged, stolen, or lost in your store, you're often on the hook even though you never owned it. Most consignment contracts spell out liability for this reason, and skipping that clause can be a costly mistake." },
          { type: "paragraph", content: "Tracking gets harder too. Consigned goods need to stay separate from stock you own outright, since each sale triggers a payment obligation to a different party and requires its own record. A retailer running paper logs or spreadsheets for consignment tends to lose track fast, especially once more than a handful of consignors are involved." },
          { type: "callout", title: "Legal wrinkle:", content: "Under Article 9 of the Uniform Commercial Code, a supplier's ownership claim on consigned goods is treated as a security interest, not an informal arrangement. That means if your business faces financial difficulty, a supplier who hasn't properly documented and filed that interest can end up competing with your other creditors for the same goods. It's worth having a lawyer review your consignment agreements, especially if you're running several consignor relationships." },
        ],
      },
      {
        id: "tracking",
        heading: "How to Keep Track of Consignment Inventory",
        blocks: [
          { type: "paragraph", content: "Not every consignor relationship is worth the tracking overhead a handful of low-value items generate. Retailers who consign selectively, favoring higher-value pieces or reliable consignors, spend less time reconciling and more time selling." },
          { type: "paragraph", content: "The retailers who manage consignment well also share a few habits. They put every agreement in writing before a single item hits the shelf, spelling out the split, the payout schedule, the consignment period, and who's liable for damage or loss." },
          { type: "paragraph", content: "They also separate consigned stock from owned inventory the moment it comes in, tagging each item by supplier so a sale automatically flags what's owed and to whom. Reconciling on a set schedule, whether that's weekly or monthly, catches discrepancies before they pile up into a dispute nobody can untangle six months later." },
          { type: "paragraph", content: "The secondhand and resale market has grown enough that this isn't a niche problem anymore. ThredUp's 2025 Resale Report projects the global secondhand apparel market will reach $367 billion by 2029, up from $256 billion in 2025, a pace faster than new apparel sales overall. Consignment and resale retailers are managing more volume every year, and manual tracking methods that worked for a handful of consignors stop working once that volume grows." },
        ],
      },
      {
        id: "accounting",
        heading: "Consignment Inventory Accounting",
        blocks: [
          { type: "paragraph", content: "The accounting treatment follows from who owns the goods. Since the supplier retains ownership until an item sells, consigned goods never sit on the retailer's books as owned inventory. They stay off the retailer's balance sheet while on the shelf, and stay on the supplier's books instead." },
          { type: "paragraph", content: "The transaction gets recorded once a sale happens. The retailer records the cash from the customer, plus a payable to the consignor for their share. Depending on the agreement, the retailer either books the full sale as revenue with the consignor's cut as an expense, or books only its net commission as revenue with the rest going straight to the payable. Either way, the goods never show up as an asset on the retailer's side." },
          { type: "paragraph", content: "This matters most at reconciliation and tax time. A retailer who books consigned goods as owned inventory overstates assets and throws off cost of goods sold and turnover reporting. A separate ledger code for consignment liability from day one avoids that cleanup." },
        ],
      },
      {
        id: "owners-inventory-fit",
        heading: "How Owners Inventory Supports This",
        blocks: [
          { type: "paragraph", content: "Owners Inventory handles consignment stock like any inventory that needs to stay traceable to its source. Products can be tagged by supplier and category, so consigned items stay visibly separate from stock you own outright, even on the same sales floor. Every supplier gets a profile under Vendor and Supplier Management, keeping agreement terms, contact details, and transaction history in one place." },
          { type: "paragraph", content: "When a consigned item sells, real-time inventory tracking updates the stock count immediately, and stock adjustments let you log intake, damage, or returns against the right supplier record. Sales and inventory reports, including commission tracking, show what's moved and what you owe each consignor, so reconciling doesn't mean digging through weeks of receipts." },
          { type: "paragraph", content: "For a single-location gift shop or antique booth running a handful of consignment relationships, the Basic plan covers the core tracking. Multi-location operations, like a furniture chain running consignment across several stores, fit better on the [Pro plan](/pricing), which adds multi-location inventory visibility." },
        ],
      },
      {
        id: "faqs",
        heading: "Frequently Asked Questions",
        blocks: [
          {
            type: "detailList",
            marker: "info",
            items: [
              {
                title: "How does a children's resale shop manage dozens of small consignors at once?",
                content: "A common approach is a tagging or account-number system, where each consignor gets a code attached to their items at intake, and sales automatically tie back to that code for payout. Without that system, tracking which bag of onesies belonged to which parent gets difficult fast.",
              },
              {
                title: "What happens to consigned items that never sell?",
                content: "Most agreements set a consignment period, often 60 to 90 days, after which unsold goods return to the supplier unless both sides agree to extend it. Some retailers negotiate markdown schedules instead, lowering the price a set percentage each month an item sits unsold before returning it.",
              },
              {
                title: "How is a consignment split usually structured for antiques and collectibles?",
                content: "Splits commonly range from 60/40 to 70/30 in the retailer's favor, though terms vary by location, item category, and how much floor space the piece requires. High-value pieces sometimes command a better rate for the consignor since the retailer's absolute dollar commission is still substantial even at a lower percentage.",
              },
              {
                title: "Can consignment and owned inventory be tracked in the same system?",
                content: "Yes, as long as the system lets you tag items by supplier or ownership type so a sale automatically routes to the right payout record. Managing consigned goods in a separate spreadsheet from your regular inventory system is a common source of tracking errors.",
              },
              {
                title: "Is consignment inventory included on my balance sheet as a retailer?",
                content: "No. Consigned goods stay on the supplier's books until they sell, since the supplier retains ownership the entire time the item sits in your store. What you do record is the commission liability once an item sells and the cash received from the customer. Your balance sheet reflects the revenue and the payable to the consignor, not the value of the goods themselves.",
              },
            ],
          },
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        blocks: [
          { type: "paragraph", content: "Consignment inventory lowers your upfront risk as a retailer, but it trades that risk for a tracking obligation you can't skip. A written agreement, separated stock records, and a regular reconciliation habit are what keep a handful of consignors from turning into an accounting headache." },
          { type: "paragraph", content: "Owners Inventory's supplier profiles and real-time tracking handle that separation for you, whether you're running three consignment relationships or thirty. Start a [30-day free trial](/pricing) to see how it fits your store, or check the [Owners Inventory pricing](/pricing) page for plan details." },
        ],
      },
    ],

    resultMetrics: [
      { heading: "Market Growth", value: "$367B", label: "Projected Secondhand Apparel Market by 2029" },
      { heading: "Typical Split", value: "60/40", label: "Common Retailer-Favored Commission Structure" },
      { heading: "Consignment Period", value: "60-90 Days", label: "Typical Window Before Unsold Goods Return" },
      { heading: "Upfront Cost", value: "$0", label: "Retailer Pays Nothing Until an Item Sells" },
      { heading: "Free Trial", value: "30 Days", label: "Owners Inventory No-Contract Trial" },
    ],

    relatedTopicIds: ["pos-system-cost"],
  },

  {
    id: "purchase-order-guide",
    slug: "what-is-a-purchase-order",
    metaTitle: "What Is a Purchase Order? A Complete Guide for Retailers | Owners Inventory",
    metaDescription: "What a purchase order is, what goes on one, how the five-stage process works, and the mistakes that cost retailers billions in overstock and stockouts.",
    keywords: [
      "purchase order",
      "what is a purchase order",
      "purchase order process",
      "purchase order vs invoice",
      "blanket purchase order",
      "how to create a purchase order",
      "purchase order management",
    ],
    // TODO: placeholder image — upload the real hero image to the CDN at
    // assets/blog-images/third-blog.webp (same bucket/path pattern as the earlier posts).
    blogImg: "https://d2qlv5xtew5ayb.cloudfront.net/assets/blog-images/third-blog.webp",
    heading: "What Is a Purchase Order? A Complete Guide for Retailers",
    tagline: "Purchase Orders Explained",
    subtitle: "What goes on a purchase order, how the process runs from creation to payment, and where retailers most often get it wrong.",
    author: "Sarah Mitchell",
    authorAvatar: "https://d2qlv5xtew5ayb.cloudfront.net/assets/blogs/Women13.webp",
    authorRole: "Inventory Consultant",
    date: "Aug 24, 2026",
    totalRead: "7 min read",
    status: "recent",
    category: "Purchasing",
    primaryColor: "#1AD1B9",
    secondaryColor: "#795CF5",

    heroStats: [
      { percentage: "$1.77T", description: "Global Cost of Overstock and Stockouts in 2023" },
      { percentage: "5 Stages", description: "From Order Creation to Paid Invoice" },
      { percentage: "30-Day", description: "Free Trial with Owners Inventory" },
    ],

    blogOverview: "A supplier shows up with a delivery, and the person signing for it has no record of what was ordered, at what price, or when it was supposed to arrive. That's the situation a purchase order exists to prevent. Most small retailers start by ordering stock over a phone call or a text message and never formalize the process. That's where problems start.\n\nThis guide covers what a purchase order is, what goes on one, how the process works from creation to payment, and where retailers most often get it wrong.",

    tableOfContents: [
      { id: "what-is-a-po", label: "What Is a Purchase Order?" },
      { id: "po-information", label: "What Goes on a Purchase Order" },
      { id: "how-it-works", label: "How Does a Purchase Order Work?" },
      { id: "types-of-po", label: "Types of Purchase Orders" },
      { id: "how-to-create", label: "How to Create a Purchase Order" },
      { id: "processing-payment", label: "Processing, Payment, and Accounting" },
      { id: "automating", label: "Automating Purchase Orders" },
      { id: "common-mistakes", label: "Common Purchase Order Mistakes" },
      { id: "owners-inventory-fit", label: "How Owners Inventory Supports This" },
      { id: "faqs", label: "FAQs" },
      { id: "conclusion", label: "Conclusion" },
    ],

    sections: [
      {
        id: "what-is-a-po",
        heading: "What Is a Purchase Order?",
        mainHeading: true,
        blocks: [
          { type: "paragraph", content: "A purchase order, usually shortened to PO, is a formal document a business sends to a supplier to request goods or services. It states what you're ordering, how much of it, what you've agreed to pay, and when you expect delivery. Once the supplier accepts it, the PO becomes a binding agreement, not just a request." },
          { type: "paragraph", content: "A purchase order is sometimes confused with a purchase requisition. A requisition is an internal request, a buyer or manager asking for approval to place an order. The purchase order is the external document that goes to the supplier once that approval is granted. Smaller retailers often skip the requisition step and go straight to creating the PO." },
          { type: "paragraph", content: "It's also different from an invoice. A purchase order goes out before goods ship, requesting them. An invoice comes back after goods ship, requesting payment. The two documents should match line by line. When they don't, that mismatch is usually the first sign something went wrong with an order." },
          { type: "paragraph", content: "Here's how the three documents compare side by side:" },
          {
            type: "table",
            columns: ["Document", "When It's Created", "Who Creates It", "What It's For"],
            rows: [
              ["Purchase Requisition", "Before ordering", "Internal buyer or manager", "Requests approval to place an order"],
              ["Purchase Order", "After approval, before shipping", "The retailer (buyer)", "Requests goods from a supplier at agreed terms"],
              ["Invoice", "After goods ship", "The supplier", "Requests payment for goods delivered"],
            ],
          },
        ],
      },
      {
        id: "po-information",
        heading: "What Information Goes on a Purchase Order",
        blocks: [
          { type: "paragraph", content: "A complete purchase order includes:" },
          {
            type: "bulletList",
            items: [
              "The vendor's name and contact details",
              "A unique purchase order number, the reference code both sides use to track the order",
              "Each item ordered, by SKU, with quantity and unit cost",
              "The agreed total cost",
              "The expected delivery date",
              "Payment terms",
              "Shipping and billing addresses",
            ],
          },
          { type: "paragraph", content: "Every field earns its place. Skip the delivery date and you can't flag a late shipment. Skip the per-item cost and you can't catch a supplier who quietly raises prices mid-order. The PO number matters more than it looks like it should, since it's what ties the order, the shipment, and the eventual invoice back to the same transaction." },
          { type: "paragraph", content: "Here's what a filled-in purchase order looks like in practice:" },
          {
            type: "table",
            columns: ["Field", "Example"],
            rows: [
              ["PO Number", "PO-1042"],
              ["Vendor", "Northgate Hardware Supply"],
              ["Item", "2\" Deck Screws, Box of 100 (SKU: DS-2IN-100)"],
              ["Quantity", "24 boxes"],
              ["Unit Cost", "$8.50"],
              ["Total Cost", "$204.00"],
              ["Expected Delivery", "10 business days from order date"],
              ["Payment Terms", "Net 30"],
            ],
          },
          { type: "paragraph", content: "That's a single-line order for simplicity. A real PO usually lists several items from the same vendor on one document, each with its own SKU, quantity, and cost, all rolling up to one total." },
        ],
      },
      {
        id: "how-it-works",
        heading: "How Does a Purchase Order Work?",
        blocks: [
          { type: "paragraph", content: "The process runs in five stages, whether you're managing it on paper or inside software." },
          {
            type: "detailList",
            marker: "number",
            items: [
              { title: "The order gets created.", content: "Someone determines that a product needs restocking and builds the PO with quantities, costs, and a delivery date. In a connected system, that trigger can be automated." },
              { title: "The supplier accepts it.", content: "Once the vendor confirms they can fulfill the order as written, the PO becomes a binding commitment on both sides." },
              { title: "The order ships.", content: "The supplier sends the goods according to the terms on the PO." },
              { title: "The order gets received.", content: "The shipment arrives and gets checked in against the original PO, item by item, not from memory or a rough estimate." },
              { title: "The invoice gets paid.", content: "The supplier's invoice is matched against the received PO. If quantities and pricing line up, payment goes out according to the agreed terms." },
            ],
          },
          { type: "paragraph", content: "Retailers who skip formal tracking usually lose the process somewhere between steps four and five. Without a document to check receiving against, a short shipment or a price change goes unnoticed until it shows up as a discrepancy in the books weeks later." },
        ],
      },
      {
        id: "types-of-po",
        heading: "Types of Purchase Orders",
        blocks: [
          { type: "paragraph", content: "Most small and mid-size retailers only need a standard PO: a single order, for a fixed quantity, at an agreed price, sent once. But a few variations exist, and larger or multi-location retailers run into them more often." },
          {
            type: "table",
            columns: ["Type", "Best For", "How Often Retailers Use It"],
            rows: [
              ["Standard PO", "A one-time order for specific items at a fixed price", "Covers most retail purchasing"],
              ["Blanket PO", "Ongoing volume with one supplier at a locked-in price over a set period", "Mainly multi-location or franchise operations"],
              ["Contract PO", "Larger, recurring purchases tied to a formal supplier contract", "Occasional, usually with a primary vendor"],
              ["Planned PO", "An order placed now for delivery on a specified future date", "Used for a seasonal push when you don't want the stock arriving too early"],
            ],
          },
          { type: "paragraph", content: "If you're running a single location, a standard PO covers nearly everything you'll do. The other types become relevant as you add locations or lock in supplier relationships that run for a full season or year." },
        ],
      },
      {
        id: "how-to-create",
        heading: "How to Create a Purchase Order",
        blocks: [
          {
            type: "numberedList",
            items: [
              "Check current stock before deciding on a quantity.",
              "Confirm pricing and availability with the supplier.",
              "Build the PO with a line for each item, including quantity, cost, and expected delivery date.",
              "Route it for internal approval if your business requires sign-off.",
              "Send it to the supplier and wait for confirmation.",
              "Receive the shipment against the original PO rather than from memory.",
            ],
          },
          { type: "paragraph", content: "The first and last steps carry the most weight, and they're also where a spreadsheet-based process tends to fall apart. A spreadsheet doesn't know your real-time stock level, and nothing forces someone to reconcile a shipment against the order once it lands." },
        ],
      },
      {
        id: "processing-payment",
        heading: "Purchase Order Processing, Payment, and Accounting",
        blocks: [
          { type: "paragraph", content: "Once a PO is accepted, it moves into a pending state until the goods arrive. Processing at this stage mainly means tracking status: supplier confirmation, shipment schedule, and any changes since the order was placed." },
          { type: "paragraph", content: "Payment terms dictate when the invoice gets paid relative to delivery. Whatever the terms, the invoice should be checked against the PO before payment goes out, not paid on trust." },
          {
            type: "table",
            columns: ["Term", "What It Means"],
            rows: [
              ["Due on Receipt", "Payment is expected as soon as the invoice arrives"],
              ["Net 15", "Payment is due 15 days after the invoice date, common with smaller suppliers"],
              ["Net 30", "Payment is due 30 days after the invoice date"],
              ["2/10 Net 30", "A 2% discount if paid within 10 days, otherwise the full amount is due in 30"],
              ["Net 60", "Payment is due 60 days after the invoice date, more common with larger or established suppliers"],
            ],
          },
          { type: "paragraph", content: "On the accounting side, the received PO is your source of truth for what you actually paid, and that cost data feeds directly into your cost of goods sold. Skip that connection and your COGS numbers end up built on estimates, distorting your margins until a reconciliation catches it." },
        ],
      },
      {
        id: "automating",
        heading: "Automating Purchase Orders",
        blocks: [
          { type: "paragraph", content: "For multi-location retailers especially, a PO placed for one store needs to reflect what every other location already has on hand, which is only possible if purchasing is connected to your live stock data. In a connected inventory system, purchase orders don't have to start from a blank form. When a product hits its reorder point, the system can generate a draft PO automatically, based on real stock data instead of a guess. You review it, adjust anything that needs adjusting, and send it." },
          { type: "paragraph", content: "This is also where purchase order management becomes inventory control. The PO, the receiving record, and the stock count update from the same event instead of three separate manual steps that can drift apart." },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Common Purchase Order Mistakes",
        blocks: [
          {
            type: "detailList",
            marker: "info",
            items: [
              { title: "Ordering without checking current stock.", content: "This is the single most common cause of overstock. Vendor-related issues, including ordering without accurate stock visibility, are a leading driver of both overstock and stockouts, and together they cost retailers an estimated $1.77 trillion worldwide in 2023, according to an IHL Group study reported by Retail TouchPoints." },
              { title: "Skipping the receiving check.", content: "Adding stock to your count the moment it arrives, without checking it against the PO, means a short shipment or a substituted item goes unnoticed." },
              { title: "Losing track of pending orders.", content: "Without a system tracking PO status, it's easy to forget what's already on order and reorder the same item twice, or assume stock is coming when the order never got confirmed." },
              { title: "Letting invoices go unmatched.", content: "Paying a supplier invoice without checking it against the original PO is how price increases and billing errors slip through." },
            ],
          },
        ],
      },
      {
        id: "owners-inventory-fit",
        heading: "How Owners Inventory Supports This",
        blocks: [
          { type: "paragraph", content: "Owners Inventory ties every purchase order to your live stock data and your vendor records, so orders get built from what you actually have on hand rather than a guess. Vendor management, purchase order management, and receiving all live inside the same platform as your inventory counts, so a PO, a shipment, and a stock update never fall out of sync with each other. Check the [Owners Inventory pricing](/pricing) page for plan details, or start a 30-day free trial to see the purchasing workflow with your own products." },
        ],
      },
      {
        id: "faqs",
        heading: "Frequently Asked Questions",
        blocks: [
          {
            type: "detailList",
            marker: "info",
            items: [
              { title: "What is a purchase order in simple terms?", content: "It's a formal request a business sends a supplier to order goods, listing what's needed, how much it costs, and when it should arrive. Once the supplier accepts it, it becomes a binding order." },
              { title: "What's the difference between a purchase order and an invoice?", content: "A purchase order is sent before goods ship, requesting them. An invoice is sent after, requesting payment. Matching the two catches pricing errors and short shipments before payment goes out." },
              { title: "Do small retailers really need formal purchase orders?", content: "Yes. Even a single-location store benefits from a paper trail for every order, since it's the only reliable way to catch a short shipment, a price change, or a missed delivery date." },
              { title: "What is a blanket purchase order?", content: "An agreement covering multiple orders over a set period at a locked-in price, more common for multi-location retailers with steady, high-volume supplier relationships than for single-store operations." },
              { title: "Can purchase orders update my inventory automatically?", content: "Only if your PO system and your inventory system are connected. Standalone spreadsheets require someone to manually update stock counts after every delivery, which is exactly where errors creep in." },
              { title: "What happens if a supplier invoice doesn't match the purchase order?", content: "That mismatch should stop payment until it's resolved. It usually means a quantity was short, a price changed, or the wrong item shipped." },
            ],
          },
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        blocks: [
          { type: "paragraph", content: "A purchase order is your record of what you ordered, your check against what actually arrived, and the source data behind your cost of goods sold. Treat it as paperwork and it disappears, easy to skip and easier to forget about until something goes wrong." },
          { type: "paragraph", content: "Connect it to your real stock data instead, and it keeps your ordering, receiving, and margins accurate at the same time. See how that works in practice on the [Owners Inventory pricing](/pricing) page, or start a free trial with your own supplier catalog." },
        ],
      },
    ],

    resultMetrics: [
      { heading: "Global Impact", value: "$1.77T", label: "Cost of Overstock and Stockouts Worldwide in 2023" },
      { heading: "PO Lifecycle", value: "5 Stages", label: "From Order Creation to Paid Invoice" },
      { heading: "Standard Terms", value: "Net 30", label: "Most Common Retailer Payment Term" },
      { heading: "Free Trial", value: "30 Days", label: "Owners Inventory No-Contract Trial" },
    ],

    relatedTopicIds: ["consignment-inventory", "pos-system-cost"],
  },
];

export const blogData: BlogData[] = allBlogData.filter(
  (b) => b.id !== "consignment-inventory" && b.id !== "purchase-order-guide"
);

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getBlogById(id: string): BlogData | undefined {
  return blogData.find((b) => b.id === id);
}

export function getBlogBySlug(slug: string): BlogData | undefined {
  return blogData.find((b) => b.slug === slug);
}
