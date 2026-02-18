import type { Metadata } from "next";
import { Geist, Geist_Mono, Onest, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/pages/navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

// Load fonts with CSS variable bindings
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${onest.variable} ${inter.variable} antialiased`}
      >
        <ScrollToTop />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
