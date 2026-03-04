import { FeatureCategory, PricingPlan } from '../types';

export const hybridData: { plans: PricingPlan[]; categories: FeatureCategory[] } = {
    plans: [
        {
            id: 'pro',
            name: 'Pro',
            price: 210,
            yearlyPrice: 168,
            description: 'Ideal for growing businesses',
            color: '#38ACCC',
            bgColor: 'rgba(56, 172, 204, 0.1)',
            popular: true,
            features: [
                '5 Stores',
                '1 Online Store',
                '5 Warehouses',
                '5 Production Floors',
                "10 POS Terminal",
                'Accounts & Finance',
                'Unlimited Users',
                'Unlimited Products',
                'Unlimited Orders & Invoices',
                'Unlimited Purchases',
                'Onboarding Assistance & Email Support',
                'Live Chat & Phone Support',
            ]
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: 315,
            yearlyPrice: 252,
            description: 'For established businesses scaling up',
            color: '#5588DF',
            bgColor: 'rgba(85, 136, 223, 0.1)',
            features: [
                'Unlimited Stores',
                '1 Online Store',
                'Unlimited Warehouses',
                "Unlimited POS Terminal",
                'Unlimited Production Floors',
                'Accounts & Finance',
                'Unlimited Users',
                'Unlimited Products',
                'Unlimited Orders & Invoices',
                'Unlimited Purchases',
                'Onboarding Assistance & Email Support',
                'Live Chat & Phone Support',
                'Dedicated Account Manager'


            ]
        },
        {
            id: 'lets-talk',
            name: "Let's Talk",
            price: 0,
            color: '#1AD1B9',
            bgColor: 'rgba(26,209,185,0.1)',
            features: [],
            isCustom: true,
            description: 'Connect with our team to customize features tailored to your business, ensuring effortless growth and success.'
        }
    ],
    categories: [
        {
            name: 'Key Features',
            features: [
                { name: 'Stores', info: true, infoText: "Manage multiple stores from one dashboard.", basic: '5', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Warehouses', info: true, infoText: "Track stock across multiple warehouse locations.", basic: '5', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Production Floors', info: true, infoText: "Monitor manufacturing processes and raw material usage.", basic: '5', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Online Store', info: true, infoText: "Sell online with synced inventory and orders.", basic: '1', standard: '1', professional: '1', premium: '1' },
                { name: 'Accounts & Finance', info: true, infoText: "Automate accounting, expenses, and financial reporting.", basic: true, standard: true, professional: true, premium: true },
                { name: 'POS Terminal', info: true, infoText: "Fast billing with real-time inventory sync.", basic: '10', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
            ]
        },
        {
            name: 'Accounts & Finance',
            features: [
                { name: 'Income & Expense', info: true, infoText: "Monitor revenue and spending effortlessly.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Billing & Payments', info: true, infoText: "Automate invoices, payments & bill tracking.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Payables & Receivables', info: true, infoText: "Ensures smooth cash flow—critical for businesses.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Financial Insights & Reports', info: true, infoText: "Gain powerful reports & business analytics.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Balance Sheet & Trial Balance', info: true, infoText: "Summarizes financial health—important for compliance.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Chart of Accounts', info: true, infoText: "Supports structured financial management—essential for accountants.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Journal Entries & Reports', info: true, infoText: "Detailed financial transaction recording—used by finance teams.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Fixed Assets & Allocations', info: true, infoText: "Long-term asset management—more relevant for established businesses.", basic: true, standard: true, professional: true, premium: true }
            ]
        },
        {
            name: 'People',
            features: [
                { name: 'Users', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Customers', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Suppliers', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
            ]
        },
        {
            name: 'Products',
            features: [
                { name: 'Products', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Categories', basic: true, standard: true, professional: true, premium: true },
                { name: 'Brands', basic: true, standard: true, professional: true, premium: true },
                { name: 'Barcode & Serial Tracking', basic: true, standard: true, professional: true, premium: true },
                { name: 'Product Images', basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Product Import', info: true, infoText: "Import products in bulk with a easy way.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Price Update', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Sales & Orders',
            features: [
                { name: 'Point of Sale', basic: true, standard: true, professional: true, premium: true },
                { name: 'POS Terminal', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Invoices', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Quotations', basic: true, standard: true, professional: true, premium: true },
                { name: 'Sales Orders', basic: true, standard: true, professional: true, premium: true },
                { name: 'Sales Return', basic: true, standard: true, professional: true, premium: true },
                { name: 'Hold Sales', basic: true, standard: true, professional: true, premium: true },
                { name: 'Sample Sales', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Purchases',
            features: [
                { name: 'Purchase Orders', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Bulk Purchase', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Inventory Operations',
            features: [
                { name: 'Transfer Orders', info: true, infoText: "Move stock between warehouses or store locations.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Stock Issuing', info: true, infoText: "Log and monitor inventory released for internal use or sales.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Receiving', info: true, infoText: "Log incoming goods into inventory.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Adjustments', info: true, infoText: "Make real-time adjustments to product stock levels from one unified view.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Stock Adjustments', info: true, infoText: "Update large inventory quantities in seconds.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Alerts', info: true, infoText: "Get low stock notifications before shortages occur.", basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Ecommerce',
            features: [
                { name: 'Online Store', info: true, infoText: "Sell online with synced inventory and orders.", basic: '1', standard: '1', professional: '1', premium: '1' },
                { name: 'OJ Themes', info: true, infoText: "Choose professional themes to design your online store.", basic: 'Free/Paid', standard: 'Free/Paid', professional: 'Free/Paid', premium: 'Free/Paid' },
                { name: 'Orders', info: true, infoText: "Monitor and fulfill orders – placed online.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Discounts', info: true, infoText: "Apply promotional price reductions to products.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Campaigns', info: true, infoText: "Run marketing campaigns to boost your sales.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Custom Domain', info: true, infoText: "Use your own branded domain for your store.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Collections', info: true, infoText: "Manage customer records and order history in one place.", basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Manufacturing',
            features: [
                { name: 'Production Orders', info: true, infoText: "Manage the end-to-end production of goods.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Machines', info: true, infoText: "Manage your machinery from one centralized place.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Moulds', info: true, infoText: "Manage and track all product moulds efficiently.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Quality & Inspections', info: true, infoText: "Ensure products meet standards with regular inspections.", basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Analytics',
            features: [
                { name: 'Sales Reports', info: true, infoText: "Track sales performance and revenue trends instantly.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Purchases Reports', info: true, infoText: "Monitor procurement and supplier purchase history easily.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Inventory Reports', info: true, infoText: "Analyze stock levels and inventory movement efficiently.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Shifts', info: true, infoText: "Review employee shift schedules and work hours.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Commissions', info: true, infoText: "Calculate staff commissions accurately and automatically.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Daily Cash Report', info: true, infoText: "Get daily cash flow summaries at a glance.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Manufacturing', info: true, infoText: "Monitor production output and efficiency metrics quickly.", basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Human Resources',
            features: [
                { name: 'Employees', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Departments', basic: true, standard: true, professional: true, premium: true },
                { name: 'Designations', basic: true, standard: true, professional: true, premium: true },
                { name: 'Payslips', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Restaurant',
            features: [
                { name: 'Floors', info: true, infoText: "Structure your dining space with floor-level mapping for efficient table management.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Tables', info: true, infoText: "Assign and manage tables for restaurant service.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Decorations', info: true, infoText: "Analyze decoration orders and customization performance data.", basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Marketing',
            features: [
                { name: 'Coupons', basic: true, standard: true, professional: true, premium: true },
                { name: 'Loyalty', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'General Tools',
            features: [
                { name: 'Role-Based Permissions', info: true, infoText: "Provide user access based on their assigned roles.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Notifications', basic: true, standard: true, professional: true, premium: true },
                { name: 'Activity Log', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Support',
            features: [
                { name: 'Onboarding Assistance', basic: true, standard: true, professional: true, premium: true },
                { name: 'Email Support', basic: true, standard: true, professional: true, premium: true },
                { name: 'Live Chat Support', basic: true, standard: true, professional: true, premium: true },
                { name: 'Phone Support', basic: true, standard: true, professional: true, premium: true },
                { name: 'Dedicated Account Manager', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Integrations',
            features: [
                // { name: 'FBR', basic: true, standard: true, professional: true, premium: true },
                { name: 'API Calls/Day', info: true, infoText: "Number of API requests allowed per day for external integrations and automation.", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
                { name: 'Stripe', info: true, infoText: "Accept online payments securely via Stripe.", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
                { name: 'PayPal', info: true, infoText: "Enable PayPal as a payment method for your customers.", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
                { name: 'DHL', info: true, infoText: "Connect with DHL for automated shipping and courier management.", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
                { name: 'Leopard', info: true, infoText: "Integrate with Leopard Courier for local delivery tracking and dispatch.", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
                { name: 'Zapier', info: true, infoText: "Automate workflows by connecting your store with thousands of apps via Zapier.", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' },
                { name: 'Make', info: true, infoText: "Build advanced automation scenarios using Make (formerly Integromat).", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon' }
            ]
        }
    ]
};
