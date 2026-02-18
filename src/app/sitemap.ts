import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://ownersinventory.com";

    const mainRoutes = [
        "",
        "/about",
        "/contact",
        "/features",
        "/pricing",
        "/privacy-policy",
        "/terms-and-conditions",
        "/resources",
        "/resources/blog",
    ];

    const subFeatures = [
        "advancereports",
        "ecommerce",
        "facilities",
        "finance",
        "hr",
        "integrations",
        "inventory",
        "manufacturing",
        "marketing",
        "people",
        "pos",
        "products",
        "purchases",
        "reports",
        "sales",
        "tools",
    ];

    const routes = [
        ...mainRoutes.map((route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: route === "" ? 1 : 0.8,
        })),
        ...subFeatures.map((feature) => ({
            url: `${baseUrl}/features/${feature}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
    ];

    return routes;
}
