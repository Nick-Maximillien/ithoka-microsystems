import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ithoka Microsystems | AI & Blockchain Consulting",
  description:
    "Official site of Ithoka Microsystems — A lean and agile AI & Blockchain engineering firm. Showcasing Agrosight AI, AutoBooks AI, blockchain solutions, and Rust DeFi engine.",
  keywords: [
    "AI",
    "Blockchain",
    "Consulting",
    "Agrosight",
    "AutoBooks AI",
    "Rust DeFi",
    "Kenya AI",
    "Ithoka Microsystems",
    "AI startup Africa",
    "Blockchain Kenya",
  ],
  authors: [{ name: "Nicholas Muthoki" }],
  openGraph: {
    title: "Ithoka Microsystems | AI & Blockchain Consulting",
    description:
      "AI & Blockchain Builder — Showcasing Agrosight, AutoBooks AI, blockchain solutions, and Rust DeFi engine.",
    url: "https://ithoka.com",
    siteName: "Ithoka Microsystems",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ithoka.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ithoka Microsystems — AI & Blockchain Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ithoka Microsystems | AI & Blockchain Consulting",
    description:
      "AI & Blockchain Builder — Showcasing Agrosight, AutoBooks AI, blockchain solutions, and Rust DeFi engine.",
    creator: "@nicholasmuthoki",
    images: ["https://ithoka.com/images/og-image.png"],
  },
  metadataBase: new URL("https://ithoka.com"),
  alternates: {
    canonical: "https://ithoka.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

// ✅ Add viewport and themeColor here
export function generateViewport() {
  return {
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#000000",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ithoka Microsystems",
    url: "https://ithoka.com",
    logo: "https://ithoka.vercel.app/images/logo.png",
    description:
      "AI & Blockchain engineering firm based in Kenya, building lean and decentralized systems.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+254700000000",
        contactType: "customer support",
        areaServed: "KE",
        availableLanguage: ["English", "Swahili"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/ithoka-microsystems",
      "https://twitter.com/ithokamicrosys",
      "https://github.com/Nick-Maximillien",
    ],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://ithoka.vercel.app",
    name: "Ithoka Microsystems",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ithoka.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ithoka.vercel.app",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
      </head>
      <body>
        <header role="banner">
          <nav aria-label="Primary Navigation">
            <Header />
          </nav>
        </header>
        <main className="min-h-screen" role="main">
          {children}
        </main>
        <footer role="contentinfo">
          <Footer />
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
