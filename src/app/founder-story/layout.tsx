import type { Metadata } from "next";
import Script from "next/script";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Ithoka Microsystems | AI & Blockchain Systems Studio",
  description:
    "Learn about Ithoka Microsystems — an AI and Blockchain studio building field-ready, decentralized systems for agriculture, finance, and governance.",
  keywords: [
    "Ithoka Microsystems",
    "AI Studio Kenya",
    "Blockchain Consulting",
    "Rust DeFi",
    "Agrosight AI",
    "Nicholas Muthoki",
  ],
  openGraph: {
    title: "About Ithoka Microsystems",
    description:
      "Ithoka Microsystems builds field-ready AI and blockchain systems for agriculture, finance, and governance.",
    url: "https://ithoka.vercel.app/about",
    siteName: "Ithoka Microsystems",
    images: [
      {
        url: "https://ithoka.vercel.app/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "Ithoka Microsystems Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ithoka Microsystems",
    description:
      "Building lean, intelligent systems for agriculture, finance, and governance.",
    creator: "@NickMaxMwangangi",
    images: ["https://ithoka.vercel.app/images/logo.jpg"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ithoka Microsystems",
    "url": "https://ithoka.vercel.app",
    "image": "https://ithoka.vercel.app/images/logo.jpg",
    "description":
      "Ithoka Microsystems is a lean AI and blockchain systems firm building real-world solutions in agriculture, finance, and governance.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE",
    },
    "founder": {
      "@type": "Person",
      "name": "Nicholas Muthoki",
      "jobTitle": "AI & Blockchain Engineer",
      "sameAs": [
        "https://github.com/Nick-Maximillien",
        "https://linkedin.com/in/nicholas-muthoki",
        "https://twitter.com/NickMaxMwangangi",
      ],
    },
    "sameAs": [
      "https://github.com/Nick-Maximillien",
      "https://linkedin.com/in/nicholas-muthoki",
      "https://twitter.com/NickMaxMwangangi",
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Blockchain",
      "Rust",
      "DeFi",
      "Agritech",
      "AI Consulting",
    ],
  };

  return (
    <>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container">{children}</div>
    </>
  );
}
