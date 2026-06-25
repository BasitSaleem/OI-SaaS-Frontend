"use client";

import React, { use } from "react";
import ErrorPageContent from "@/components/pages/ErrorPageContent";

interface PageProps {
  searchParams: Promise<{ code?: string }>;
}

export default function ErrorPage({ searchParams }: PageProps) {
  const resolvedSearchParams = use(searchParams);
  const code = resolvedSearchParams.code ? parseInt(resolvedSearchParams.code, 10) : 404;

  return <ErrorPageContent code={code} />;
}
