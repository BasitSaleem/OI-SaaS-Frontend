import type { Metadata } from "next";
import { Onest, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/pages/navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
// ClientProviders is a "use client" component that lazy-loads ToastProvider
// (react-toastify CSS) and ThirdPartyScripts (GTM/FB/Clarity) with ssr:false.
// ssr:false dynamic imports must live inside Client Components — not Server Components.
import ClientProviders from "@/components/providers/ClientProviders";

// Load fonts with optimized weights and display swap
const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Owners Inventory | Grow Faster with Smarter Tools",
  description: "Grow Faster with Smarter Inventory Tools. Experience the next generation of inventory management with Owners Inventory.",
  keywords: ["inventory management", "POS system", "business tools", "SaaS"],
  publisher: "Owners Inventory",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "https://d2qlv5xtew5ayb.cloudfront.net/assets/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

import { ScrollLockProvider } from "@/context/ScrollLockContext";
import LenisProvider from "@/components/pages/lenisProvider/LenixProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS prefetch for third-party origins — eliminates ~200ms lookup latency per domain */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preconnect for Google Fonts — opens TCP+TLS early so font bytes arrive faster */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <meta name="google-site-verification" content="CIvLSxFYDU-_qgrVlQV1g27znqLQZ5P5Sf5bf44fbvE" />
        <meta name="facebook-domain-verification" content="7gvuicd35m5xq653dyvp2anabgc7is" />
      </head>
      <body
        suppressHydrationWarning
        className={`${onest.variable} ${inter.variable} antialiased`}
      >
        <ScrollLockProvider>
          <LenisProvider>
            {/* GTM noscript fallback — no JS performance impact */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-5LZ72NX8"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              ></iframe>
            </noscript>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src="https://www.facebook.com/tr?id=1435291848047613&ev=PageView&noscript=1"
              />
            </noscript>
            <ScrollToTop />
            <Navbar />
            {children}
            {/* Lazy-loads ToastProvider (CSS) + ThirdPartyScripts (analytics) */}
            <ClientProviders />
          </LenisProvider>
        </ScrollLockProvider>
      </body>
    </html>
  );
}
