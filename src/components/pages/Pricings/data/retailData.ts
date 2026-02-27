import { FeatureCategory, PricingPlan } from '../types';

export const retailData: { plans: PricingPlan[]; categories: FeatureCategory[] } = {
    plans: [
        {
            id: 'basic',
            name: 'Basic',
            price: 25,
            yearlyPrice: 20,
            description: 'Perfect for small businesses getting started',
            color: '#1AD1B9',
            bgColor: 'rgba(26,209,185,0.1)',
            features: [
                '1 Store',
                '1 POS Terminal',
                'Unlimited Users',
                'Unlimited Products',
                'Unlimited Orders & Invoices',
                'Onboarding Assistance & Email Support'
            ]
        },
        {
            id: 'pro',
            name: 'Pro',
            price: 75,
            yearlyPrice: 60,
            description: 'Ideal for growing businesses',
            color: '#38ACCC',
            bgColor: 'rgba(56,172,204,0.1)',
            popular: true,
            features: [
                '3 Store',
                '6 POS Terminal',
                '1 Warehouse',
                'Unlimited Users',
                'Unlimited Products',
                'Unlimited Orders & Invoices',
                'Onboarding Assistance & Email Support'
            ]
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: 115,
            yearlyPrice: 92,
            description: 'For established businesses scaling up',
            color: '#5588DF',
            bgColor: 'rgba(85,136,223,0.1)',
            features: [
                '3 Store',
                '6 POS Terminal',
                '1 Warehouse',
                'Unlimited Users',
                'Unlimited Products',
                'Unlimited Orders & Invoices',
                'Onboarding Assistance & Email Support'
            ]
        }
    ],
    categories: [
        {
            name: 'Key Features',
            features: [
                { name: 'Stores', basic: '1', standard: '3', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'POS Terminal', basic: '1', standard: '6', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Warehouses', basic: 'Add-on', standard: '1', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Production Floors', basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Online Store', basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
                { name: 'Accounts & Finance', basic: 'Add-on', standard: 'Add-on', professional: 'Add-on', premium: 'Add-on' },
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
            name: 'Sales & Orders',
            features: [
                { name: 'Point of Sale', basic: true, standard: true, professional: true, premium: true },
                { name: 'POS Terminals', basic: '1', standard: '6', professional: 'Unlimited', premium: 'Unlimited' },
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
                { name: 'Transfer Orders', basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
                { name: 'Stock Issuing', basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Receiving', basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Adjustments', basic: true, standard: true, professional: true, premium: true },
                { name: 'Bulk Stock Adjustments', basic: true, standard: true, professional: true, premium: true },
                { name: 'Stock Alerts', basic: true, standard: true, professional: true, premium: true },
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
