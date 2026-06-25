"use client";

import dynamic from "next/dynamic";

// Both components are lazy-loaded with ssr:false here (inside a Client Component),
// which is allowed. Doing this from a Server Component (layout.tsx) is not.
const ToastProvider = dynamic(
  () => import("./ToastProvider"),
  { ssr: false }
);

const ThirdPartyScripts = dynamic(
  () => import("./ThirdPartyScripts"),
  { ssr: false }
);

export default function ClientProviders() {
  return (
    <>
      <ToastProvider />
      <ThirdPartyScripts />
    </>
  );
}
