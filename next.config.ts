import type { NextConfig } from "next";

// Swiper's side-effect CSS imports break Turbopack's CSS HMR in dev.
// In production (webpack) it's safe to tree-shake it normally.
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Remove X-Powered-By header — minor security hardening
  poweredByHeader: false,
  // If you use remote images, add allowed hosts here:
  // images: {
  //   remotePatterns: [
  //     { protocol: "https", hostname: "owner-inventory.s3.us-east-1.amazonaws.com" },
  //   ],
  // },
  images: {
    minimumCacheTTL: 31536000,
    // AVIF is 30-50% smaller than WebP; Next.js serves the best format the browser accepts
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // NOTE: `inlineCss: true` was removed — it stored the full CSS text inside
    // every page's client-reference-manifest (`entryCSSFiles`, ~750KB each) and
    // also inlined it into each page's HTML/RSC/segments. Across ~64 prerendered
    // pages that added ~60MB to `.next/server` and was crashing deployment.
    // CSS is now served as a normal shared <link> stylesheet from .next/static.
    // Tree-shakes these heavy packages so only imported symbols are bundled
    // Reduces JS parse/execution time (TBT improvement)
    optimizePackageImports: [
      "framer-motion",
      "gsap",
      "lucide-react",
      "react-icons",
      "@heroicons/react",
      // Swiper only in production: its side-effect CSS imports break Turbopack HMR in dev
      ...(isProduction ? ["swiper"] : []),
    ],
  },

  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/videos-s3/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
    ];
  },
  // Required to silence Turbopack warning (Next.js 16 default bundler)
  turbopack: {},

  async redirects() {
    return [
      {
        source: "/password/reset",
        destination: "https://app.ownersinventory.com/forgot-password",
        permanent: true,
      },
      {
        source: "/features/inventory-management",
        destination: "/features/inventory",
        permanent: true,
      },
      {
        source: "/features/finance",
        destination: "/features/accounts-and-finance",
        permanent: true,
      },
       {
        source: "/features/sales",
        destination: "/features/sales-and-order",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/videos-s3/:path*",
        destination:
          "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/:path*",
      },
    ];
  },
};

export default nextConfig;
