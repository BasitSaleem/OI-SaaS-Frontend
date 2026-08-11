"use client";

import { useState } from "react";

import LatestArticles from "@/components/pages/blog/LatestArticles";
import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";
import BlogHero from "@/components/pages/blog/BlogHero";
import TrendingNow from "@/components/pages/blog/TrendingNow";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
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