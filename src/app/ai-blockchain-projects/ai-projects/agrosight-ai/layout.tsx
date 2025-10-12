// app/projects/agrosight/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import React from "react";

export const metadata: Metadata = {
  title: "Agrosight AI Assistant | Rural Agriculture Computer Vision",
  description:
    "Agrosight AI is a computer vision assistant for rural agriculture. Diagnose crop diseases via WhatsApp, web, or offline. Built lean for farmers.",
  keywords: [
    "Agrosight AI",
    "Computer Vision",
    "Agriculture AI",
    "Crop Disease Detection",
    "WhatsApp AI Assistant",
    "Offline AI",
    "Kenya Agriculture",
    "Farm AI",
    "YOLOv8",
    "Ithoka Microsystems",
  ],
  openGraph: {
    title: "Agrosight AI Assistant | Rural Agriculture Computer Vision",
    description:
      "Agrosight brings AI crop diagnosis to rural farmers via WhatsApp and web — offline capable, fast, and locally adapted.",
    url: "https://ithoka.com/projects/agrosight",
    siteName: "Ithoka Microsystems",
    locale: "en_US",
    // changed from "product" (invalid in your environment) to "website"
    type: "website",
    images: [
      {
        url: "https://ithoka.com/images/shot1.png",
        width: 1200,
        height: 630,
        alt: "Agrosight AI Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrosight AI Assistant | Rural Agriculture Computer Vision",
    description:
      "Real-time crop disease diagnosis — WhatsApp + web + offline. Built by Ithoka Microsystems.",
    creator: "@nicholasmuthoki",
    images: ["https://ithoka.com/images/shot1.png"],
  },
  alternates: {
    canonical: "https://ithoka.com/projects/agrosight",
  },
  metadataBase: new URL("https://ithoka.com"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // LocalBusiness + Product + social proof JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ithoka.com/#org",
        "name": "Ithoka Microsystems",
        "url": "https://ithoka.com",
        "logo": "https://ithoka.com/images/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/ithoka-microsystems",
          "https://twitter.com/ithokamicrosys",
          "https://github.com/Nick-Maximillien"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://ithoka.com/projects/agrosight#localbusiness",
        "name": "Agrosight AI Assistant",
        "image": "https://ithoka.com/images/shot1.png",
        "url": "https://ithoka.com/projects/agrosight",
        "telephone": "+254700000000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Nairobi",
          "addressLocality": "Nairobi",
          "addressCountry": "KE"
        },
        "description":
          "Agrosight AI is an offline-first crop disease detection assistant for rural farmers, available via WhatsApp and web.",
        "sameAs": [
          "https://agrosight-ai.vercel.app",
          "https://github.com/Nick-Maximillien"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "ratingCount": "120"
        }
      },
      {
        "@type": "Product",
        "name": "Agrosight AI Assistant",
        "image": "https://ithoka.com/images/shot1.png",
        "description":
          "Agrosight AI — computer vision assistant for crop disease detection, optimized for low-connectivity and WhatsApp workflows.",
        "brand": {
          "@type": "Brand",
          "name": "Ithoka Microsystems"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://agrosight-ai.vercel.app",
          "price": "0.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  return (
    <div className="container">
      <Script
        id="agrosight-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </div>
  );
}
