import type { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Voting DApp | Transparent Blockchain Elections",
  description:
    "A decentralized voting platform for agricultural cooperatives — secure, transparent, tamper-proof elections built on Ethereum.",
  keywords: [
    "Blockchain Voting",
    "Ethereum",
    "Decentralized App",
    "Smart Contracts",
    "Voting DApp",
    "Ithoka Microsystems",
    "Agriculture Governance",
  ],
  openGraph: {
    title: "Voting DApp | Transparent Blockchain Elections",
    description:
      "Decentralized blockchain voting platform for cooperatives, ensuring fair elections and immutable governance.",
    url: "https://ithoka.com/projects/voting",
    siteName: "Ithoka Microsystems",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ithoka.com/images/voting.png",
        width: 1200,
        height: 630,
        alt: "Voting DApp Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voting DApp | Transparent Blockchain Elections",
    description:
      "Blockchain-powered voting for agricultural cooperatives — built with Next.js, Solidity & MetaMask.",
    images: ["https://ithoka.com/images/voting.png"],
    creator: "@nicholasmuthoki",
  },
  alternates: {
    canonical: "https://ithoka.com/projects/voting",
  },
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ithoka Microsystems",
    url: "https://ithoka.com",
    logo: "https://ithoka.com/logo.png",
    image: "https://ithoka.com/images/voting.png",
    description:
      "A lean and agile AI & blockchain builder creating decentralized tools like the Voting DApp for transparent cooperative governance.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "Kenya",
    },
    sameAs: [
      "https://x.com/nicholasmuthoki",
      "https://github.com/Nick-Maximillien",
      "https://www.linkedin.com/in/nicholas-muthoki/",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "27",
    },
    review: [
      {
        "@type": "Review",
        author: "AgriCoop Kenya",
        reviewBody:
          "The Voting DApp made our leadership election transparent and trustless.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
      },
      {
        "@type": "Review",
        author: "Open Governance Initiative",
        reviewBody:
          "Excellent implementation of decentralized voting for real-world use.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
      },
    ],
  };

  return (
    <div className="container">
      {/* Invisible structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
}
