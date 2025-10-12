import React, { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Services | Ithoka Microsystems — AI & Blockchain Consulting",
  description:
    "Explore Ithoka Microsystems' AI, blockchain, and fullstack engineering services. Lean, high-impact systems for startups, enterprises, and governments.",
  keywords: [
    "AI development",
    "Blockchain solutions",
    "Kenya AI",
    "DeFi",
    "Smart contracts",
    "MVP development",
    "consulting",
  ],
  alternates: {
    canonical: "https://ithokamicrosystems.com/services",
  },
  openGraph: {
    title: "Ithoka Microsystems — AI & Blockchain Services",
    description:
      "AI, Blockchain & Fullstack consulting and development. Lean engineering. Real outcomes.",
    url: "https://ithokamicrosystems.com/services",
    type: "website",
    images: [
      {
        url: "https://ithokamicrosystems.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ithoka Microsystems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ithokamicrosys",
    title: "Ithoka Microsystems — AI & Blockchain Services",
    description:
      "AI, Blockchain & Fullstack consulting and development. Lean engineering. Real outcomes.",
    images: ["https://ithokamicrosystems.com/og-image.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ithoka Microsystems",
    image: "https://ithokamicrosystems.com/og-image.png",
    "@id": "https://ithokamicrosystems.com",
    url: "https://ithokamicrosystems.com",
    telephone: "+254700000000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nairobi Innovation Hub",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.286389,
      longitude: 36.817223,
    },
    sameAs: [
      "https://x.com/ithokamicrosys",
      "https://github.com/Nick-Maximillien",
      "https://www.linkedin.com/in/nicholas-muthoki",
    ],
    serviceOffer: [
      "AI & Machine Learning",
      "Blockchain & DeFi",
      "Fullstack Development",
      "Consulting & Advisory",
      "Remote Development & Integration",
      "Team Augmentation & Maintenance",
    ].map((s) => ({
      "@type": "Service",
      name: s,
      provider: { "@type": "LocalBusiness", name: "Ithoka Microsystems" },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "27",
    },
    review: [
      {
        "@type": "Review",
        author: "Tech Founder",
        datePublished: "2025-08-12",
        reviewBody:
          "Brilliant AI engineering and blockchain integration. They delivered a working MVP fast.",
        name: "Excellent technical partner",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
      {
        "@type": "Review",
        author: "Startup CTO",
        datePublished: "2025-09-05",
        reviewBody:
          "They are lean, fast, and technically sharp. One of the best engineering partners we’ve worked with.",
        name: "Great collaboration experience",
        reviewRating: { "@type": "Rating", ratingValue: "4.8" },
      },
    ],
  };

  return (
    <>
      <Script
        id="structured-data-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container">{children}</div>
    </>
  );
}
