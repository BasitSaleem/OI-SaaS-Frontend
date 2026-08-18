import { UnifiedPlatformCard } from "@/components/pages/landing-page/UnifiedPlatform";
import { FeatureCardData } from "@/components/pages/industries-page/IndustriesFeaturesSection";

// ─── Electronics POS — UnifiedPlatform Section ──────────────────────────────
export const ELECTRONICS_UNIFIED_HEADING =
  "Challenges That Modern Electronics Stores Face";

export const ELECTRONICS_UNIFIED_PARAGRAPH =
  "Electronics retail is operationally dense. High-value products, rapid product cycles, variant-heavy catalogs, and customer expectations around warranties and returns make daily operations harder than those of most retail segments.";

export const ELECTRONICS_UNIFIED_CARDS: UnifiedPlatformCard[] = [
  {
    id: "1",
    icon: "UnifiedIcon1",
    title: "Serial Numbers Without Unit-Level Tracking",
    description:
      "When you receive 20 units of the same laptop model, each one carries a unique serial number. If your electronics POS system only tracks quantity and not serial numbers, you lose the ability to confirm which exact unit was sold, process warranty claims accurately, or investigate return fraud. A customer coming back six months later with a defective unit has no recourse if your records don't trace back to a specific serial number.",
  },
  {
    id: "2",
    icon: "UnifiedIcon2",
    title: "Product Variants Creating Inventory Blind Spots",
    description:
      "A single smartphone model can exist in six storage tiers, four colors, and two network configurations. That's potentially 48 individual SKUs from one product. When those variants are tracked loosely or lumped under a parent SKU, stock counts become unreliable. You oversell configurations you don't have, and you over-order ones you're already sitting on.",
  },
  {
    id: "3",
    icon: "UnifiedIcon3",
    title: "Stock Visibility Gap",
    description:
      "Most electronics stores that sell both in-store and online are running two separate stock counts. A customer buys the last unit of a laptop in-store on a Saturday afternoon. That same unit still shows as available on the website. By Monday, there's a canceled order, a refund to process, and a customer who won't be back.",
  },
  {
    id: "4",
    icon: "UnifiedIcon4",
    title: "Purchase Orders vs Actual Stock",
    description:
      "Distributors substitute products more often than they should. You order 20 units of a 256GB model and receive 20 units of the 512GB instead. Without a system matching incoming stock against the original PO at the variant level, that discrepancy enters your inventory unchecked. You're now priced wrong, stocked wrong, and chasing a supplier dispute without documentation to back it up.",
  },
];

export const ELECTRONICS_WHY_CHOOSE_CARDS = [
  {
    id: "1",
    icon: "whychoseIcon1",
    title: "Serial Numbers Tied to Every Transaction",
    description:
      "Each item gets logged with its serial number from the moment it enters your inventory via a purchase order through to the point of sale. That record stays attached to the transaction, so warranty lookups, return verifications, and theft investigations are tied to a specific unit, not just a model.",
  },
  {
    id: "2",
    icon: "whychoseIcon2",
    title: "Full Variant Management Across SKUs",
    description:
      "Each configuration gets its own tracked SKU with its own stock count. You know exactly how many units you have of the 256GB midnight version versus the 128GB silver version. Restocking decisions become easier when the data is that specific.",
  },
  {
    id: "3",
    icon: "whychoseIcon3",
    title: "Counter Sales Update Online Stock Instantly",
    description:
      "When a sale is processed at the electronics POS, inventory updates immediately across all connected channels. Your online store, whether running through Shopify, WooCommerce, or Owners Inventory's built-in eCommerce module, reflects the same stock count as your physical floor.",
  },
  {
    id: "4",
    icon: "whychoseIcon4",
    title: "PO Receipt Matching",
    description:
      "When stock arrives from a supplier, the receiving workflow matches incoming units against the original purchase order. Quantities are confirmed, discrepancies are flagged, and your inventory count updates based on what was actually received.",
  },
  {
    id: "5",
    icon: "whychoseIcon5",
    title: "Multi-Location Inventory",
    description:
      "Stock levels across all your locations are visible from a single account. Transfer orders let you move inventory between stores. If one location is running low on a fast-moving product and another has surplus, you can act on it without making phone calls.",
  },
];

export const ELECTRONICS_FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "1",
    title: "Omni-Channel Selling for Electronics Retailers",
    description:
      "Electronics customers buy in-store, online, and sometimes both within the same hour. Owners Inventory keeps your stock accurate across every channel so you're never confirming a sale you can't fulfill.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/omini-chanel.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/pos",
    buttonColor: "var(--primary-purple)",
    listVariant: "accordion",
    list: [
      {
        listheading: "POS Counter",
        listdescription:
          "Your electronics point of sale terminal handles sales, returns, and exchanges. It works offline if your connection drops, and syncs all transaction data when you're back online.",
      },
      {
        listheading: "Digital Order Sync",
        listdescription:
          "Online orders from your Shopify store, WooCommerce site, or Owners Inventory's built-in store flow into the platform automatically. You process online and in-store orders from the same dashboard.",
      },
      {
        listheading: "Unified Dashboard",
        listdescription:
          "Sales from every channel, stock levels across every location, and vendor order status in one place. One login. One view.",
      },
    ],
  },
  {
    id: "2",
    title: "Sales and Inventory Reporting Built for Electronics Retail",
    description:
      "Generic sales reports tell you what sold. Owners Inventory's reporting tells you what sold, which variant, at which location, through which channel, and what the margin looked like on that unit. Sales reports break down revenue by product, category, staff member, and payment type. Inventory reports show stock movement over any date range, including transfers, adjustments, and received stock. Commission tracking lets you attribute sales to individual staff members if your team earns on performance. For purchasing, you can see what was ordered, from whom, at what cost, and whether what arrived matched what was invoiced. According to Deloitte's 2023 retail industry outlook, electronics retailers that track margins at the variant level are better positioned to respond to distributor price changes without eroding profitability.",
    imageSrc: "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/better-decision.webp",
    buttonLabel: "View Details",
    buttonHref: "/features/products",
    buttonColor: "#1AD1B9",
  },
];

export const ELECTRONICS_KEY_FEATURES_CARDS = [
  {
    id: 1,
    title: "Offline POS Mode",
    description:
      "The POS terminal doesn't stop working when your internet does. Sales are processed and recorded locally, then synced back to the platform once connectivity is restored. For a busy electronics counter where a single transaction can be worth several hundred dollars, you can't afford to lose the ability to sell during even a brief outage.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card1.webp",
  },
  {
    id: 2,
    title: "IMEI and Device-Level Tracking",
    description:
      "Every mobile device, tablet, and connected product carries an IMEI or device identifier that's distinct from its barcode or model number. Owners Inventory lets you log that identifier at the unit level alongside the serial number. When a device is sold, the IMEI is tied to the transaction. If a returned device doesn't match the IMEI on the original receipt, you know before the return is processed.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card2.webp",
  },
  {
    id: 3,
    title: "Role-Based Staff Permissions",
    description:
      "Control exactly what each staff member can do inside the platform. Limit who can apply discounts, process returns, adjust stock counts, or access purchase records. If a pricing error or an unauthorized return shows up in your records, the activity log traces it to the specific user and time.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card3.webp",
  },
  {
    id: 4,
    title: "Trade-In and Buyback Processing",
    description:
      "If you buy used devices from customers, each trade-in can be logged as a received item with its own serial number, condition notes, and assigned value. The unit enters your inventory as a tracked product from the moment it's received. You know what you paid for it, what condition it was in, and what it sold for when it moved out.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card4.webp",
  },
  {
    id: 5,
    title: "Purchase Order and Vendor Management",
    description:
      "Create purchase orders directly in the platform and track them through to receipt. Vendor profiles store contact details, pricing agreements, and order history. When stock arrives, you receive it against the open PO, confirm quantities, and inventory updates automatically. If a supplier sends 18 units when you ordered 20, that discrepancy is recorded and surfaced for follow-up. Supplier invoices are matched at the same time, keeping accounts payable accurate without a separate reconciliation step.",
    imageSrc:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/electronics-pos/key-features-section/key-feature-card5.webp",
  },
];

export const ELECTRONICS_WORKFLOW_DATA = {
  heading: "Workflow of the Owners Inventory Electronics Store POS System",
  paragraph:
    "Here's how an electronics store operates from the moment stock arrives to the moment a device sells, with every unit tracked at each step.",
  steps: [
    {
      number: 1,
      title: "IMEIs and Serials Logged at Receiving",
      description:
        "A shipment arrives and each device is scanned individually. Serial numbers and IMEIs are logged against the purchase order as units come in. If a distributor sent a 512GB model instead of the 256GB you ordered, the discrepancy shows up at this step, before the wrong product enters your active inventory.",
    },
    {
      number: 2,
      title: "A Customer Asks for a Specific Variant",
      description:
        "A customer wants a particular phone in 128GB, blue, unlocked. The staff member searches by those attributes, sees one unit in stock, and confirms the IMEI before pulling it from the shelf. No guessing, no checking a separate spreadsheet.",
    },
    {
      number: 3,
      title: "Sale Closes With a Full Unit Record",
      description:
        "The variant is added to the sale, payment is processed, and the receipt is generated with the serial number and IMEI attached to the transaction. That record is retrievable instantly if the customer comes back with a warranty claim or a return.",
    },
    {
      number: 4,
      title: "Stock Updates Before Overselling Happens",
      description:
        "The moment that unit sells at the counter, the same SKU updates across your Shopify or WooCommerce store. If a web order for that exact configuration was placed seconds earlier, the system flags the conflict rather than confirming both sales.",
    },
    {
      number: 5,
      title: "A Trade-In Comes Across the Counter",
      description:
        "A customer brings in a used device. You log it as a received item with its serial number, condition, and the price you're paying. It enters inventory as a tracked unit from that moment. When it sells, the margin between what you paid and what you received is on record.",
    },
  ],
};

export const ELECTRONICS_TESTIMONIALS = [
  {
    id: "1",
    name: "Daniel Reyes",
    title: "Owner, Techline Electronics, Austin TX",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image84.webp",
    text: "We were tracking serial numbers in a spreadsheet that three people updated inconsistently. We had warranty claims we couldn't verify and returns we couldn't confirm. After switching to Owners Inventory, every unit is logged at receiving and tied to the sale. Our first warranty dispute after the switch took four minutes to resolve instead of a full afternoon of digging.",
  },
  {
    id: "2",
    name: "Emily Johnson",
    title: "Operations Manager, Voltage Retail, Chicago IL",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/girl-image84.webp",
    text: "We run two locations and a Shopify store. Before, we had no reliable way to know what stock we had where, and we'd oversell online twice a month at minimum. Owners Inventory synced everything. Overselling stopped in the first week. We now transfer stock between locations through the platform instead of driving units over without any record.",
  },
  {
    id: "3",
    name: "Marcus Webb",
    title: "Founder, CoreTech Store, Seattle WA",
    image:
      "https://d2qlv5xtew5ayb.cloudfront.net/assets/industries-pages/industries-testimonial-images/boy-image85.webp",
    text: "The variant management is what sold me. I carry about 35 laptop models, each with four or five configuration options. That's 150-plus SKUs to track. The old system lumped them together and the counts were always wrong. Now each variant has its own count, its own alert threshold, and its own reorder history. I stopped over-ordering slow configurations and stopped running out of the fast ones.",
  },
];

export const ELECTRONICS_FAQS = [
  {
    id: "1",
    question: "Can I track devices by IMEI, not just barcode or serial number?",
    answer:
      "IMEI logging is supported at the unit level. When a device comes in through a purchase order or a trade-in, you can record the IMEI alongside the serial number. Both get tied to the sale at checkout. If a customer returns a device, the IMEI on the unit gets checked against the original transaction before the return is processed.",
  },
  {
    id: "2",
    question:
      "A distributor sent the wrong model last month. Would the system have caught that?",
    answer:
      "It would have flagged it at receiving. When stock arrives, the receiving workflow matches incoming units against the original purchase order at the variant level. A 512GB unit arriving against a 256GB order shows as a discrepancy immediately. You decide whether to accept the substitution or reject it, and either way the record reflects what actually came in.",
  },
  {
    id: "3",
    question:
      "We carry refurbished devices alongside new stock. Can the system handle both in the same catalog?",
    answer:
      "Refurbished and new units can exist as separate variants under the same product, each with its own SKU, stock count, and pricing. A refurbished iPhone 14 and a new iPhone 14 are tracked independently. When a refurbished unit comes in through a trade-in or a supplier, it enters inventory as its own item with its own serial number and condition record.",
  },
  {
    id: "4",
    question:
      "We have over 200 SKUs across multiple brands. How long does setting up the POS system for an electronics store actually take?",
    answer:
      "Based on onboarding data from Owners Inventory customers, most electronics retailers with large catalogs are operational within a day. Products can be imported in bulk via CSV, and variants are built out from the parent product rather than entered one by one. If you're migrating from another system, the support team helps with the data transfer.",
  },
  {
    id: "5",
    question:
      "What happens when a customer returns a device we can't verify was sold by us?",
    answer:
      "The transaction record tied to that device's serial number and IMEI is the verification. If the unit in front of you doesn't match the record attached to the receipt, the system surfaces that before the return is approved. Staff don't need to make a judgment call. The mismatch is documented either way, so if a dispute follows, you have the record to back your decision.",
  },
];

export const ELECTRONICS_TESTIMONIAL_DATA = {
  heading: "What Our Clients Say",
  paragraph: "",
  secondHeading: "Don't Wait Until a Stock Discrepancy Costs You a Sale",
  secondDescription:
    "Set up Owners Inventory in a day and run your first real shift on accurate data.",
  whyChooseTitle:
    "Why Electronics Stores Choose Owners Inventory Over Generic POS Software",
  whyChooseDescription:
    "Generic POS platforms weren't built for a category where a single product has 48 configurations, returns carry fraud risk, and warranty disputes need unit-level records.",
};

export const ELECTRONICS_TESTIMONIAL_FEATURES = [
  {
    id: "1",
    title: "Serial Number Tracking Stops Return Fraud",
    description: "Electronics have some of the highest return fraud rates in retail, according to the NRF's 2023 retail theft report. When a device is sold with its serial number and IMEI tied to the transaction, a customer can't swap in a different unit during a return. The record is already there, and staff don't need to make a judgment call.",
    icon: "testWhychoseIcon1",
  },
   {
    id: "2",
    title: "Try Free for 30 Days. No Contracts",
    description:
      "Committing to new POS software without testing it against your actual inventory is a risk most electronics retailers can't afford to take. A 30-day trial means you can run real purchase orders, log real serial numbers, and process real sales before deciding whether the platform fits how your store operates. Start on any plan, use it the way you'd use it day to day, and cancel anytime if it doesn't hold up. No contract locks you in before you've seen the fit.",
    icon: "testWhychoseIcon2",
  },
  {
    id: "3",
    title: "Live Support on Every Plan",
    description:
      "Every plan includes onboarding help and email support, so your team isn't figuring out variant setup or IMEI logging alone. Pro and Enterprise plans add live chat and phone support for when a question can't wait on an email reply. Based on onboarding data from Owners Inventory customers, most electronics retailers complete setup and run their first live shift within the same day.",
    icon: "testWhychoseIcon3",
  },
  {
    id: "4",
    title: "Real Support at Every Plan",
    description:
      "All plans include onboarding assistance and email support. Pro and Enterprise plans add live chat and phone support. Enterprise customers get a dedicated account manager. Based on onboarding data from Owners Inventory customers, most electronics retailers complete setup and run their first live shift within the same day.",
    icon: "testWhychoseIcon4",
  },
  {
    id: "5",
    title: "Warranty Lookups in Under a Minute",
    description:
      "When a customer comes in with a warranty claim, you need the original transaction, serial number, and purchase date. In Owners Inventory, that lookup takes under a minute. Search by serial number, customer name, or date. No spreadsheets, no paper receipts.",
    icon: "testWhychoseIcon5",
  },
];

export const ELECTRONICS_TOOLS_DATA = {
  heading: "Integrations That Connect Your Electronics Store to the Tools",
  paragraph:
    "Owners Inventory connects with the sales and accounting platforms your electronics store already uses. Device sales, accessory revenue, supplier costs, and payment records stay consistent across every connected system without manual data entry between them.",
  tools: [
    {
      id: 1,
      name: "Shopify",
      image:
        "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/shopify.svg",
    },
    {
      id: 2,
      name: "WooCommerce",
      image:
        "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/woocomerce.svg",
    },
    {
      id: 3,
      name: "QuickBooks",
      image:
        "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/quick-book.svg",
    },
    {
      id: 4,
      name: "Xero",
      image:
        "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/xero.svg",
    },
    {
      id: 5,
      name: "Stripe",
      image:
        "https://d2qlv5xtew5ayb.cloudfront.net/assets/home-page-images/tools-section/stripe.svg",
    },
  ],
};
