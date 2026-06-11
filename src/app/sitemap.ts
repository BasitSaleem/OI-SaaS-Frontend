import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ownersinventory.com";

  const mainRoutes = [
    "",
    "/about",
    "/contact",
    "/features",
    "/pricing",
    // "/privacy-policy",
    // "/terms-and-conditions",
    "/resources",
    "/resources/blog",
  ];

  const subFeatures = [
    "advancereports",
    "ecommerce",
    "facilities",
    "accounts-and-finance",
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
    "sales-and-order",
    "tools",
  ];

  const industries = [
    "hardware-pos-system",
    "bakery-pos-system",
    "bookstore-pos-system",
    "retail-store-pos-system",
    "furniture-store-pos-system",
    "jewelry-store-pos-system",
    "grocery-store-pos-system",
    "clothing-store-pos-system",
    "clothing-inventory-management-software",
    "retail-store-inventory-management-software",
    "jewelry-inventory-management-software",
    "auto-parts-inventory-management-software",
    "ecommerce-store-inventory-management-software",
    "supermarket-pos-system",
    "restaurant-inventory-management-software",
    "healthcare-inventory-management-software",
    "hotel-inventory-management-software",
    "small-businesses-inventory-management-software",
    "beauty-salon-pos-system",
    "furniture-inventory-management-software",
    "construction-inventory-management-software",
    "coffee-shop-pos-system",
    "ice-cream-shop-pos-system",
    "candy-store-pos-system",
    "food-truck-pos-system",
    "sporting-goods-pos-system",
    "shoe-stores-pos-system",
    "convenience-store-pos-system",
    "barber-shop-pos-system",
    "pet-store-pos-system",
    "warehouses-pos-system",
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
    ...industries.map((industry) => ({
      url: `${baseUrl}/industries/${industry}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return routes;
}
