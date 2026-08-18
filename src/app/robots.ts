import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const isStaging = process.env.NEXT_PUBLIC_APP_ENV === "staging" || host.includes("amplifyapp.com");

  if (isStaging) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/search"],
    },
    sitemap: "https://ownersinventory.com/sitemap.xml",
  };
}

