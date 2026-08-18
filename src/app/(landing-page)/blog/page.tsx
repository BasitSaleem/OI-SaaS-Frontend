"use client";

import { useState } from "react";

import LatestArticles from "@/components/pages/blog/LatestArticles";
import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import BlogHero from "@/components/pages/blog/BlogHero";
import TrendingNow from "@/components/pages/blog/TrendingNow";

import Script from "next/script";
import { blogData } from "@/constant/blogData/blogData";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://ownersinventory.com/blog/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ownersinventory.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://ownersinventory.com/blog" }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://ownersinventory.com/blog/#webpage",
        "url": "https://ownersinventory.com/blog",
        "name": "Blog | Owners Inventory",
        "description": "Guides, comparisons, and insights on POS systems, inventory management, and running a retail or wholesale business.",
        "isPartOf": { "@id": "https://ownersinventory.com/#website" },
        "breadcrumb": { "@id": "https://ownersinventory.com/blog/#breadcrumb" },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://ownersinventory.com/#organization",
        "name": "Owners Inventory",
        "url": "https://ownersinventory.com",
        "description": "Owners Inventory is an all-in-one business management platform for retail, wholesale, manufacturing, and ecommerce businesses. It combines POS, inventory management, purchasing, ecommerce, HR, and finance in one system.",
        "foundingDate": "2025",
        "areaServed": "Worldwide",
        "sameAs": [
          "https://www.facebook.com/ownersinventory/",
          "https://www.instagram.com/ownersinventory/",
          "https://www.linkedin.com/company/owners-inventory/"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "email": "sales@ownersinventory.com",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "Blog",
        "@id": "https://ownersinventory.com/blog/#blog",
        "name": "Owners Inventory Blog",
        "url": "https://ownersinventory.com/blog",
        "publisher": { "@id": "https://ownersinventory.com/#organization" },
        "blogPost": blogData.map((post) => ({
          "@type": "BlogPosting",
          "headline": post.heading,
          "url": `https://ownersinventory.com/blog/${post.id}`,
          "datePublished": post.date,
          "description": post.metaDescription || post.blogOverview.slice(0, 160)
        }))
      }
    ]
  };

  return (
    <>
      <Script
        id="blog-listing-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <BlogHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="lg:mt-[100px] md:mt-20 mt-16">
        <TrendingNow searchQuery={searchQuery} />
      </div>

      <div className="lg:mt-[100px] md:mt-20 mt-16">
        <LatestArticles searchQuery={searchQuery} />
      </div>

      <IndustriesCallToAction
        title="Stay Ahead with Smart Insights"
        description="Get expert inventory management tips, industry trends, and exclusive resources delivered straight to your inbox every week. No spam, just value."
        ctaDesc="Get Started Instantly"
      />
    </>
  );
};

export default Page;