import { FeatureCategory, PricingPlan } from '../types';

export const manufacturingData: { plans: PricingPlan[]; categories: FeatureCategory[] } = {
    plans: [
        {
            id: 'basic',
            name: 'Basic',
            price: 65,
            yearlyPrice: 52,
            description: 'Perfect for small businesses getting started',
            color: '#1AD1B9',
            bgColor: 'rgba(26,209,185,0.1)',
            features: [
                '1 Production Floor',
                '1 Warehouse',
                '1 Store (For Invoicing)',
                '1 POS Terminal',
                'Unlimited Users',
                'Unlimited Products',
                'Unlimited Orders & Invoices',
                'Unlimited Purchases',
                'Onboarding Assistance & Email Support'
            ]
        },
        {
            id: 'pro',
            name: 'Pro',
            price: 115,
            yearlyPrice: 92,
            description: 'Ideal for growing businesses',
            color: '#38ACCC',
            bgColor: 'rgba(56,172,204,0.1)',
            popular: true,
            features: [
                '3 Production Floor',
                'Unlimited Warehouse',
                '1 Store (For Invoicing)',
                '1 POS Terminal',
                'Unlimited Users',
                'Unlimited Products',
                'Unlimited Orders & Invoices',
                'Unlimited Purchases',
                'Onboarding Assistance & Email Support',
                'Live Chat & Phone Support'
            ]
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: 155,
            yearlyPrice: 124,
            description: 'For established businesses scaling up',
            color: '#5588DF',
            bgColor: 'rgba(85,136,223,0.1)',
            features: [
                'Unlimited Production Floor',
                'Unlimited Warehouse',
                '1 Store (For Invoicing)',
                '1 POS Terminal',
                'Unlimited Users',
                'Unlimited Products',
                'Unlimited Orders & Invoices',
                'Unlimited Purchases',
                'Onboarding Assistance & Email Support',
                'Live Chat & Phone Support',
                'Dedicated Account Manager'
            ]
        }
    ],
    categories: [
        {
            name: 'Key Features',
            features: [
                { name: 'Production Floors', info: true, infoText: "Monitor manufacturing processes and raw material usage.", basic: '1', standard: '3', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Warehouses', info: true, infoText: "Track stock across multiple warehouse locations.", basic: '1', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Stores (For Invoicing)', info: true, infoText: "Manage multiple stores from one dashboard.", basic: '1', standard: '1', professional: '1', premium: '1' },
                { name: 'Online Store', info: true, infoText: "Sell online with synced inventory and orders.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Accounts & Finance', info: true, infoText: "Automate accounting, expenses, and financial reporting.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'POS Terminal', info: true, infoText: "Fast billing with real-time inventory sync.", basic: '1', standard: '1', professional: '1', premium: '1' },
            ]
        },
        {
            name: 'Ecommerce',
            features: [
                { name: 'Online Store', info: true, infoText: "Sell online with synced inventory and orders.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'OJ Themes', info: true, infoText: "Choose professional themes to design your online store.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Orders', info: true, infoText: "Monitor and fulfill orders – placed online.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Discounts', info: true, infoText: "Apply promotional price reductions to products.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Campaigns', info: true, infoText: "Run marketing campaigns to boost your sales.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Custom Domain', info: true, infoText: "Use your own branded domain for your store.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Collections', info: true, infoText: "Manage customer records and order history in one place.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
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
            name: 'Accounts & Finance',
            features: [
                { name: 'Income & Expense', info: true, infoText: "Monitor revenue and spending effortlessly.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Billing & Payments', info: true, infoText: "Automate invoices, payments & bill tracking.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Payables & Receivables', info: true, infoText: "Ensures smooth cash flow—critical for businesses.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Financial Insights & Reports', info: true, infoText: "Gain powerful reports & business analytics.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Balance Sheet & Trial Balance', info: true, infoText: "Summarizes financial health—important for compliance.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Chart of Accounts', info: true, infoText: "Supports structured financial management—essential for accountants.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Journal Entries & Reports', info: true, infoText: "Detailed financial transaction recording—used by finance teams.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Fixed Assets & Allocations', info: true, infoText: "Long-term asset management—more relevant for established businesses.", basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' }
            ]
        },
        {
            name: 'Restaurant',
            features: [
                { name: 'Floors', info: true, infoText: "Structure your dining space with floor-level mapping for efficient table management.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Tables', info: true, infoText: "Assign and manage tables for restaurant service.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Decorations', info: true, infoText: "Customize your digital floor layout for ambiance.", basic: true, standard: true, professional: true, premium: true }
            ]
        },
        {
            name: 'People',
            features: [
                { name: 'Users', info: true, infoText: "Add team members and control their access with roles.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Customers', info: true, infoText: "Manage customer records and order history in one place.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Suppliers', info: true, infoText: "Track and manage all vendors efficiently.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
            ]
        },
        {
            name: 'Products',
            features: [
                { name: 'Products', info: true, infoText: "Add and manage all your products from a central place.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Categories', info: true, infoText: "Group products into categories for easier filtering.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Brands', info: true, infoText: "Assign brand names to products for better cataloging.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Barcode & Serial Tracking', info: true, infoText: "Track products using barcodes or serial numbers for accuracy.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Product Images', info: true, infoText: "Add images to improve visual product recognition.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Product Import', info: true, infoText: "Import products in bulk with a easy way.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Price Update', info: true, infoText: "Change pricing for many products at once.", basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Purchases',
            features: [
                { name: 'Purchase Orders', info: true, infoText: " Create and track orders placed to suppliers.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Bulk Purchase', info: true, infoText: "Simplify restocking with one-step bulk purchasing for any item mix.", basic: true, standard: true, professional: true, premium: true },
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
            name: 'Sales & Orders',
            features: [
                { name: 'Point of Sale', info: true, infoText: "Sell products directly with an intuitive POS system.", basic: true, standard: true, professional: true, premium: true },
                { name: 'POS Terminal', info: true, infoText: "Fast billing with real-time inventory sync.", basic: '1', standard: '1', professional: '1', premium: '1' },
                { name: 'Invoices', info: true, infoText: " Print & Share/Send professional invoices to customers with ease.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Quotations', info: true, infoText: "Prepare and send quotes to leads or existing customers.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Sales Orders', info: true, infoText: "Track confirmed customer orders.", basic: true, standard: true, professional: true, premium: true },
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
            name: 'General Tools',
            features: [
                { name: 'Role-Based Permissions', info: true, infoText: "Provide user access based on their assigned roles.", basic: false, standard: true, professional: true, premium: true },
                { name: 'Notifications', info: true, infoText: "Automatically receive updates for stock movements, sales, and purchases.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Activity Log', info: true, infoText: "View recent user actions and changes.", basic: false, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Support',
            features: [
                { name: 'Onboarding Assistance', basic: true, standard: true, professional: true, premium: true },
                { name: 'Email Support', basic: true, standard: true, professional: true, premium: true },
                { name: 'Live Chat Support', basic: false, standard: true, professional: true, premium: true },
                { name: 'Phone Support', basic: false, standard: true, professional: true, premium: true },
                { name: 'Dedicated Account Manager', basic: false, standard: false, professional: true, premium: true },
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
