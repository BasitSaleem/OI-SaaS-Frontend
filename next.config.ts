import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exclude native binaries and dev-only modules from Amplify deployment artifact
  outputFileTracingExcludes: {
    "*": [
      "node_modules/@swc/core-linux-x64-gnu/**",
      "node_modules/@swc/core-linux-x64-musl/**",
      "node_modules/@esbuild/linux-x64/**",
      "node_modules/webpack/**",
      "node_modules/terser/**",
    ],
  },
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
    // inlineCss removed — it embeds ~270KB of CSS into every page's HTML + RSC stream,
    // inflating 72 static pages by ~19MB total. CSS loads as a shared static file instead.
    // Tree-shakes these heavy packages so only imported symbols are bundled
    // Reduces JS parse/execution time (TBT improvement)
    optimizePackageImports: [
      "framer-motion",
      "gsap",
      "lucide-react",
      "react-icons",
      "@heroicons/react",
      // "swiper" intentionally excluded — its side-effect CSS imports break Turbopack HMR
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
