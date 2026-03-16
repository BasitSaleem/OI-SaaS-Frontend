import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // If you use remote images, add allowed hosts here:
  // images: {
  //   remotePatterns: [
  //     { protocol: "https", hostname: "owner-inventory.s3.us-east-1.amazonaws.com" },
  //   ],
  // },
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
  async rewrites() {
    return [
      {
        source: "/videos-s3/:path*",
        destination: "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/:path*",
      },
    ];
  },
};

export default nextConfig;