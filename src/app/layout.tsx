import type { Metadata } from "next";
import Script from "next/script";
import { Onest, Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
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
    icon: [
      {
        url: "/assets/favicon.svg",
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
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vj9pzbdqky");
          `}
        </Script>
        {/* Google Tag Manager - Consistently configured via GTM */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5LZ72NX8');
          `}
        </Script>
        <Script id="fb-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1435291848047613');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={`${onest.variable} ${inter.variable} antialiased`}
      >
        <ScrollLockProvider>
          <LenisProvider>
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
            <ToastContainer
              position="top-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </LenisProvider>
        </ScrollLockProvider>
      </body>
    </html>
  );
}
