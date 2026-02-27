import { FeatureCategory, PricingPlan } from '../types';

export const manufacturingData: { plans: PricingPlan[]; categories: FeatureCategory[] } = {
    plans: [
        {
            id: 'basic',
            name: 'Basic',
            price: 65,
            yearlyPrice: 52,
            description: 'Small production floors',
            color: '#1AD1B9',
            bgColor: 'rgba(26,209,185,0.1)',
            features: [
                '1 Production Floor',
                '1 Warehouse',
                '1 Store (For Invoicing)',
                'Unlimited Users',
                'Unlimited Orders & Invoices'
            ]
        },
        {
            id: 'pro',
            name: 'Pro',
            price: 115,
            yearlyPrice: 94,
            description: 'Expanding factories',
            color: '#38ACCC',
            bgColor: 'rgba(56,172,204,0.1)',
            popular: true,
            features: [
                '3 Production Floors',
                'Unlimited Warehouse',
                '1 Store (For Invoicing)',
                'Unlimited Users',
                'Unlimited Orders & Invoices'
            ]
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: 155,
            yearlyPrice: 124,
            description: 'Large scale manufacturing',
            color: '#5588DF',
            bgColor: 'rgba(85,136,223,0.1)',
            features: [
                'Unlimited Production Floors',
                'Unlimited Warehouse',
                '1 Store (For Invoicing)',
                'Unlimited Users',
                'Unlimited Orders & Invoices'
            ]
        }
    ],
    categories: [
        {
            name: 'Key Features',
            features: [
                { name: 'Production Floors', basic: '1', standard: '3', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Warehouses', basic: '1', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Stores (For Invoicing)', basic: '1', standard: '1', professional: '1', premium: '1' },
                { name: 'Online Store', basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Accounts & Finance', basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'POS Terminal', basic: '1', standard: '1', professional: '1', premium: '1' },
            ]
        },
        {
            name: 'Manufacturing',
            features: [
                { name: 'Production Orders', info: true, infoText: "Manage the end-to-end production of goods.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Machines', info: true, infoText: "Manage your machinery from one centralized place.", basic: true, standard: true, professional: true, premium: true },
                { name: 'Moulds', basic: true, standard: true, professional: true, premium: true },
                { name: 'Quality & Inspections', basic: true, standard: true, professional: true, premium: true },
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
                { name: 'Bulk Product Import', basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Price Update', basic: true, standard: true, professional: true, premium: true },
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
                { name: 'Transfer Orders', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Stock Issuing', basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Receiving', basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Adjustments', basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Stock Adjustments', basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Alerts', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Sales & Orders',
            features: [
                { name: 'Point of Sale', basic: true, standard: true, professional: true, premium: true },
                { name: 'Invoices', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Quotations', basic: true, standard: true, professional: true, premium: true },
                { name: 'Sales Orders', basic: true, standard: true, professional: true, premium: true },
            ]
        },
        {
            name: 'Analytics',
            features: [
                { name: 'Sales Reports', basic: true, standard: true, professional: true, premium: true },
                { name: 'Purchases Reports', basic: true, standard: true, professional: true, premium: true },
                { name: 'Inventory Reports', basic: true, standard: true, professional: true, premium: true },
                { name: 'Shifts', basic: true, standard: true, professional: true, premium: true },
                { name: 'Commissions', basic: true, standard: true, professional: true, premium: true },
                { name: 'Daily Cash Report', basic: true, standard: true, professional: true, premium: true },
                { name: 'Manufacturing', basic: true, standard: true, professional: true, premium: true },
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
                { name: 'Role-Based Permissions', basic: false, standard: true, professional: true, premium: true },
                { name: 'Notifications', basic: true, standard: true, professional: true, premium: true },
                { name: 'Activity Log', basic: false, standard: true, professional: true, premium: true },
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
            name: 'Integration',
            features: [
                // { name: 'FBR', basic: true, standard: true, professional: true, premium: true },
                   { name: 'API Calls/Day', info: true, infoText: "Number of API requests allowed per day for external integrations and automation.", basic: 'Coming Soon', standard: 'Coming Soon', professional: 'Coming Soon', premium: 'Coming Soon'  },
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
