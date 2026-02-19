import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <meta name="google-site-verification" content="CIvLSxFYDU-_qgrVlQV1g27znqLQZ5P5Sf5bf44fbvE" />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vj9pzbdqky");
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5LZ72NX8');
          `}
        </Script>
        <Script
          id="google-tag"
          src="https://www.googletagmanager.com/gtag/js?id=G-X86H4J4WQ4"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X86H4J4WQ4');
          `}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={`${onest.variable} ${inter.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LZ72NX8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ScrollToTop />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
