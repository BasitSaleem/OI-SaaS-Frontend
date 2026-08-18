# OI-SaaS-Frontend

**Public-facing marketing website for [Owners Inventory](https://ownersinventory.com)** — a SaaS inventory management and POS platform that helps business owners track stock, manage products, monitor sales, and get real-time inventory alerts.

Built with **Next.js 16 App Router**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **GSAP**.

---

## Table of Contents

- [About the Product](#about-the-product)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Commit Message Convention](#commit-message-convention)
- [Code Quality](#code-quality)
- [Deployment](#deployment)

---

## About the Product

**Owners Inventory** is a web, iOS, and Android SaaS application designed for small-to-medium businesses. The platform offers:

- 📦 **Inventory Management** — real-time stock tracking, alerts, and reporting
- 🛒 **POS System** — point-of-sale for retail, food, and service businesses
- 💰 **Sales & Orders** — order processing and sales analytics
- 📊 **Accounts & Finance** — financial reporting and expense tracking
- 👥 **HR & People** — employee and team management
- 🏭 **Manufacturing** — production and assembly workflows
- 🔗 **Integrations & E-commerce** — connect with third-party platforms
- 📣 **Marketing & Tools** — campaign tracking and business tools

This repository is the **marketing/landing-page frontend** — not the main application (which lives at `app.ownersinventory.com`).

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack in dev) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Fonts | Onest · Inter (via `next/font/google`) |
| Animations | [Framer Motion](https://www.framer.com/motion/) · [GSAP](https://gsap.com/) · [Lenis](https://lenis.darkroom.engineering/) (smooth scroll) |
| Forms | React Hook Form · Zod |
| Maps | React Leaflet |
| Phone Input | react-phone-number-input |
| Icons | Lucide React · React Icons · Heroicons |
| Sliders | Swiper |
| Notifications | React Toastify |
| reCAPTCHA | react-google-recaptcha |
| Analytics | Google Tag Manager · Facebook Pixel · Microsoft Clarity |
| SEO | JSON-LD schema (Organization, SoftwareApplication, FAQPage, Review) |
| Linting | ESLint 9 (Next.js + Tailwind CSS rules) |
| Commit Validation | Husky · Commitlint (Conventional Commits) |
| CDN | AWS CloudFront (`d2qlv5xtew5ayb.cloudfront.net`) |
| CI / CD | AWS Amplify |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- Git

### Installation

```bash
# 1. Clone the repository
git clone <repo-url>
cd OI-SaaS-Frontend

# 2. Install dependencies
#    Also runs `npm run prepare` which installs Husky git hooks automatically
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Fill in the required values (see Environment Variables section)
```

### Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).  
The dev server uses **Turbopack** for fast hot-module replacement.

---

## Project Structure

```
OI-SaaS-Frontend/
├── public/                        # Static assets
├── scripts/
│   └── strip-server-sourcemaps.mjs  # Removes server source maps post-build
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout — fonts, GTM, FB Pixel, Lenis
│   │   ├── globals.css            # Global styles & Tailwind base
│   │   ├── robots.ts              # Dynamic robots.txt
│   │   ├── sitemap.ts             # Dynamic XML sitemap
│   │   ├── not-found.tsx          # 404 page
│   │   ├── global-error.tsx       # Global error boundary
│   │   └── (landing-page)/        # Route group — all public marketing pages
│   │       ├── page.tsx           # Home  /
│   │       ├── about/             # /about
│   │       ├── features/          # /features  (+ 16 sub-feature pages)
│   │       ├── industries/        # /industries (+ 40 industry-specific pages)
│   │       ├── pricing/           # /pricing
│   │       ├── contact/           # /contact
│   │       ├── case-studies/      # /case-studies
│   │       ├── resources/         # /resources
│   │       ├── checkout/          # /checkout
│   │       ├── search/            # /search
│   │       ├── coming-soon/       # /coming-soon
│   │       ├── privacy-policy/    # /privacy-policy
│   │       └── terms-and-conditions/
│   ├── components/
│   │   ├── button/                # Button variants
│   │   ├── common-components/     # HeroSection, TrustedBySection, etc.
│   │   ├── dropdown/              # Dropdown menus
│   │   ├── form-fields/           # Reusable form field wrappers
│   │   ├── icons/                 # SVG icon components
│   │   ├── inputField/            # InputField, SelectField, PhoneInputField, TextArea
│   │   ├── models/                # Modal dialogs (ContactModal, ModalLayout)
│   │   ├── pages/                 # Page-level section components
│   │   │   ├── navbar/            # Site Navbar
│   │   │   ├── landing-page/      # Home page sections
│   │   │   ├── features/          # Features page sections
│   │   │   ├── industries/        # Industry page sections
│   │   │   └── lenisProvider/     # Lenis smooth-scroll wrapper
│   │   ├── providers/             # ClientProviders (Toast + Analytics, ssr:false)
│   │   ├── slider/                # Swiper-based sliders
│   │   ├── tabs/                  # Tab components
│   │   ├── toolTip/               # Tooltip component
│   │   └── wrappers/              # Layout wrappers
│   ├── constant/                  # All static data / copy
│   │   ├── landingPageData.ts     # Home page content, FAQs, industries list
│   │   ├── featuresPageData.ts    # Features page copy
│   │   ├── aboutData.tsx          # About page content
│   │   ├── contactData.tsx        # Contact page content
│   │   ├── pricingFaqData.ts      # Pricing FAQs
│   │   ├── privacyData.ts         # Privacy policy content
│   │   ├── termsData.ts           # Terms & conditions content
│   │   ├── caseStudiesData/       # Case study entries
│   │   ├── landingPage/           # Landing page sub-section data
│   │   ├── subfeatures/           # Per-feature page data
│   │   └── subindustries/         # Per-industry page data
│   ├── context/
│   │   └── ScrollLockContext.tsx  # Prevents body scroll when modals are open
│   ├── hooks/                     # Custom React hooks
│   └── utils/                     # Utility / helper functions
├── .husky/
│   ├── pre-commit                 # Runs before staging (placeholder)
│   └── commit-msg                 # Runs commitlint on every commit message
├── commitlint.config.js           # Commitlint rules (types, 72-char limit)
├── eslint.config.mjs              # ESLint config
├── next.config.ts                 # Next.js config (images, redirects, rewrites)
├── amplify.yml                    # AWS Amplify CI/CD config
└── package.json
```

---

## Pages & Routes

### Core Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, TrustedBy, Features tabs, Case Studies, Industries showcase, FAQs, CTA |
| `/about` | About Owners Inventory — company story and team |
| `/pricing` | Pricing plans and feature comparison |
| `/contact` | Contact form with Google reCAPTCHA |
| `/case-studies` | Customer success stories |
| `/resources` | Blog, guides, and learning resources |
| `/search` | Site-wide search |
| `/checkout` | Plan checkout flow |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms of service |
| `/coming-soon` | Upcoming feature teaser |

### Feature Pages (`/features/*`)

| Route | Module |
|---|---|
| `/features` | Features overview |
| `/features/inventory` | Inventory Management |
| `/features/pos` | Point of Sale |
| `/features/sales-and-order` | Sales & Order Management |
| `/features/accounts-and-finance` | Accounts & Finance |
| `/features/hr` | HR & People |
| `/features/manufacturing` | Manufacturing |
| `/features/ecommerce` | E-commerce |
| `/features/integrations` | Integrations |
| `/features/marketing` | Marketing |
| `/features/products` | Product Management |
| `/features/purchases` | Purchase Orders |
| `/features/reports` | Standard Reports |
| `/features/advancereports` | Advanced Reports |
| `/features/facilities` | Facilities Management |
| `/features/tools` | Business Tools |
| `/features/people` | People Management |

### Industry Pages (`/industries/*`)

40+ industry-specific landing pages, including:

| Industry | Industry |
|---|---|
| Retail Store POS | Grocery Store POS |
| Clothing Store POS | Convenience Store POS |
| Jewelry Store POS | Supermarket POS |
| Coffee Shop POS | Bakery POS |
| Restaurant Inventory | Hardware Store POS |
| Furniture Store POS | Electronics POS |
| Gym POS | Beauty Salon POS |
| Warehouse POS | Healthcare Inventory |
| Hotel Inventory | HVAC Inventory |
| Auto Parts Inventory | eCommerce Inventory |
| … and many more | |

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the dev server with Turbopack at `localhost:3000` |
| `npm run build` | Production build + strip server source maps |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the entire project |
| `npm install` | Install deps **and** set up Husky git hooks automatically |

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SITE_URL=https://ownersinventory.com
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

> **Never commit `.env.local`** — it is listed in `.gitignore`.

---

## Commit Message Convention

This project enforces the **[Conventional Commits](https://www.conventionalcommits.org/)** specification via **[Husky](https://typicode.github.io/husky/)** and **[Commitlint](https://commitlint.js.org/)**.

The `commit-msg` git hook runs automatically on every `git commit` and rejects non-conforming messages before the commit is recorded.

### Format

```
type(scope?): subject
```

| Part | Rule |
|---|---|
| `type` | Required · lowercase · one of the allowed types below |
| `scope` | Optional · lowercase · the area affected e.g. `navbar`, `pricing`, `contact` |
| `subject` | Required · imperative mood · no trailing period |
| **header** | **Must not exceed 72 characters total** |

### Allowed Types

| Type | When to use |
|---|---|
| `feat` | Adding a new feature or page section |
| `fix` | Fixing a bug |
| `refactor` | Restructuring code without changing behaviour |
| `update` | Updating content, config, or assets |
| `chore` | Maintenance tasks (dependencies, tooling, scripts) |
| `docs` | Documentation changes only |
| `style` | Formatting, whitespace, missing semicolons |
| `test` | Adding or updating tests |
| `perf` | Performance improvements |

### ✅ Valid Examples

```bash
git commit -m "feat(industries): add warehouse POS landing page"
git commit -m "fix(contact): resolve recaptcha token not sending"
git commit -m "refactor(navbar): extract mobile menu into component"
git commit -m "update(pricing): sync plan prices with new tiers"
git commit -m "chore: upgrade husky to v9 and update hooks"
git commit -m "style(hero): fix inconsistent section padding"
git commit -m "perf: lazy-load below-fold landing page sections"
git commit -m "docs: update README with industry routes table"
```

### ❌ Invalid — Will Be Rejected

```bash
git commit -m "updated navbar"         # ✖ no type
git commit -m "Feat: Add new page."    # ✖ uppercase type + trailing dot
git commit -m "WIP"                    # ✖ no type, no subject
git commit -m "fix(Contact): bug"      # ✖ scope must be lowercase
```

> **New contributors:** `npm install` installs Husky hooks automatically via the `prepare` script. No manual setup needed.

---

## Code Quality

| Tool | Config file | Purpose |
|---|---|---|
| ESLint 9 | [`eslint.config.mjs`](./eslint.config.mjs) | Next.js + Tailwind CSS lint rules |
| TypeScript | [`tsconfig.json`](./tsconfig.json) | Strict type checking |
| Commitlint | [`commitlint.config.js`](./commitlint.config.js) | Commit message validation |
| Husky | [`.husky/commit-msg`](./.husky/commit-msg) | Git hook runner |

```bash
# Run the linter
npm run lint
```

---

## Deployment

The project is deployed via **AWS Amplify**. Configuration is in [`amplify.yml`](./amplify.yml).

**Build command:** `npm run build`  
**Output directory:** `.next`

### Performance Optimisations

- **Turbopack** — used in development for fast HMR
- **Dynamic imports** — all below-fold home page sections are code-split
- **Image CDN** — all assets served from AWS CloudFront with 1-year cache headers
- **Video proxy** — S3 videos proxied via `/videos-s3/*` rewrite (avoids CORS)
- **Font optimisation** — Onest + Inter loaded via `next/font/google` with `display: swap`
- **DNS prefetch + preconnect** — added for GTM, Facebook, Clarity, and Google Fonts
- **Package tree-shaking** — `optimizePackageImports` enabled for Framer Motion, GSAP, Lucide, React Icons, Heroicons

### Redirects

| From | To | Type |
|---|---|---|
| `/password/reset` | `https://app.ownersinventory.com/forgot-password` | 301 |
| `/features/inventory-management` | `/features/inventory` | 301 |
| `/features/finance` | `/features/accounts-and-finance` | 301 |
| `/features/sales` | `/features/sales-and-order` | 301 |
| `/industries/warehouses-pos-system` | `/industries/warehouse-pos-system` | 301 |

---

## License

Private — All rights reserved © Owners Inventory.
