
import type { Metadata } from "next";
import SearchPageContent from "@/components/pages/search-page/SearchPageContent";

// Search results are disabled from public discovery — the page/route stays
// live (linked internally is not required either), but shouldn't be indexed
// or crawled. Also disallowed in src/app/robots.ts.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {


  const params = await searchParams;

  return <SearchPageContent q={params.q ?? ""} />;
}