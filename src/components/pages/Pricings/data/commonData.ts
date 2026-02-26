import { FeatureCategory } from "../types";

export const commonFeatureCategories: FeatureCategory[] = [
    {
        name: 'Automation & Monitoring',
        features: [
            { name: 'Notifications', info: true, infoText: "Automatically receive updates for stock movements, sales, and purchases.", basic: false, standard: false, professional: true, premium: true },
            { name: 'Stock Alerts', info: true, infoText: "Get notified when stock runs low or is out.", basic: false, standard: false, professional: false, premium: true },
            { name: 'Activity Log', info: true, infoText: "View recent user actions and changes.", basic: false, standard: false, professional: false, premium: true },
            { name: 'Automations', info: true, infoText: "Set up workflow automations to save time.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' }
        ]
    },
    {
        name: 'Integration',
        features: [
            { name: 'API Calls/Day', info: false, infoText: "Number of staff or employees you can add as system users.", basic: '500/day', standard: '5,000/day', professional: '10,000/day', premium: '20,000/day' },
            { name: 'Stripe', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
            { name: 'PayPal', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
            { name: 'DHL', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
            { name: 'Leopard', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
            { name: 'Zapier', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
            { name: 'Make', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' }
        ]
    },
    {
        name: 'Support',
        features: [
            { name: 'Onboarding Assistance', info: true, infoText: "We walk you through everything—store settings, inventory, and integrations.", basic: 'Basic Guide Included', standard: 'Standard Walkthrough', professional: 'Standard Walkthrough + 2 Sessions', premium: 'Advanced Setup + 5 Sessions' },
            { name: 'Email Support', info: true, infoText: "Reach our support team via email.", basic: true, standard: true, professional: true, premium: true },
            { name: 'Live Chat Support', info: true, infoText: "Chat with our team for quick, real-time help.", basic: false, standard: true, professional: true, premium: true },
            { name: 'Phone Support', info: true, infoText: "Call us directly for urgent support needs.", basic: false, standard: false, professional: true, premium: true },
            { name: 'Dedicated Account Manager', info: true, infoText: "Get personalized service for your business.", basic: false, standard: false, professional: false, premium: true }
        ]
    }
];

export const PRICING_HERO_CONTENT = {
    title: "Start free. Scale anytime.",
    description: "Get full access to powerful inventory tools without upfront costs. Start managing smarter today and upgrade only when your business is ready — no contracts, no pressure.",
};
