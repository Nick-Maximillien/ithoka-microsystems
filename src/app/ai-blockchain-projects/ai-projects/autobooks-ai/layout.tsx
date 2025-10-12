import React, { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AutoBooks AI | IFRS-Compliant AI Accounting Copilot for SMEs",
  description:
    "AutoBooks AI is an AI-powered accounting and financial copilot for SMEs. Automate bookkeeping, financial analysis, and reporting with IFRS compliance and real-time insights.",
  keywords: [
    "AutoBooks AI",
    "AI accounting",
    "IFRS for SMEs",
    "financial automation",
    "bookkeeping software",
    "Kenya fintech",
    "AI copilot",
    "real-time accounting insights",
  ],
  openGraph: {
    title: "AutoBooks AI | IFRS-Compliant AI Accounting Copilot",
    description:
      "AI-powered accounting and financial copilot for SMEs — real-time insights, document intelligence, and IFRS compliance.",
    url: "https://ithoka.com/projects/autobooks-ai",
    siteName: "Ithoka Microsystems",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ithoka.com/images/autobooks-og.png",
        width: 1200,
        height: 630,
        alt: "AutoBooks AI Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoBooks AI | IFRS-Compliant AI Accounting Copilot",
    description:
      "AI-powered accounting and financial copilot for SMEs — real-time insights, document intelligence, and IFRS compliance.",
    creator: "@nicholasmuthoki",
    images: ["https://ithoka.com/images/autobooks-og.png"],
  },
  alternates: {
    canonical: "https://ithoka.com/projects/autobooks-ai",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  // --- LocalBusiness + Product JSON-LD structured data ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ithoka Microsystems",
    image: "https://ithoka.com/images/autobooks-og.png",
    "@id": "https://ithoka.com",
    url: "https://ithoka.com/projects/autobooks-ai",
    telephone: "+254700000000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nairobi Innovation Hub",
      addressLocality: "Nairobi",
      postalCode: "00100",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.286389,
      longitude: 36.817223,
    },
    sameAs: [
      "https://twitter.com/nicholasmuthoki",
      "https://www.linkedin.com/in/nicholasmuthoki/",
      "https://github.com/Nick-Maximillien",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "AutoBooks AI",
        description:
          "AI-powered accounting and financial copilot for SMEs — IFRS-compliant, real-time insights, and document intelligence.",
        brand: "Ithoka Microsystems",
        url: "https://ithoka.com/projects/autobooks-ai",
        image: "https://ithoka.com/images/autobooks-og.png",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          price: "0",
          priceCurrency: "USD",
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "32",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "SME Founder" },
        reviewBody:
          "AutoBooks AI transformed how we manage accounts. Fast, accurate, and IFRS-compliant.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
    ],
  };

  return (
    <div className="container">
      {children}
      <Script
        id="json-ld-autobooks"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
