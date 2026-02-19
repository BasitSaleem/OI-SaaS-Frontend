import type { Metadata } from "next";
import { Onest, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/pages/navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

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
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${onest.variable} ${inter.variable} antialiased`}
      >
        <ScrollToTop />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
