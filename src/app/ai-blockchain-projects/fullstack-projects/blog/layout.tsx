import React, { ReactNode } from "react";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "📚 Blog Website Case Study | React + Strapi CMS",
  description:
    "Modern blog platform built with React and Strapi CMS — optimized for content creators and businesses seeking a fast, SEO-friendly publishing solution.",
  openGraph: {
    title: "📚 Blog Website Case Study | React + Strapi CMS",
    description:
      "A clean, dynamic, and mobile-responsive blog platform powered by React and Strapi CMS.",
    url: "https://ithoka.vercel.app/ai-blockchain-projects/fullstack-projects/blog",
    siteName: "Nick Maximillien Portfolio",
    images: [
      {
        url: "https://ithoka.vercel.app/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Blog Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "📚 Blog Website Case Study | React + Strapi CMS",
    description:
      "A modern blog platform built with React and Strapi CMS for effortless publishing.",
    images: ["https://ithoka.vercel.app/logos/logo.png"],
    creator: "@your_twitter_handle",
  },
  alternates: {
    canonical: "https://ithoka.vercel.app/ai-blockchain-projects/fullstack-projects/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Website Case Study",
    description:
      "A modern blog platform built with React and Strapi CMS for effortless publishing.",
    url: "https://ithoka.vercel.app/ai-blockchain-projects/fullstack-projects/blog",
    publisher: {
      "@type": "LocalBusiness",
      name: "Nick Maximillien",
      url: "https://ithoka.vercel.app",
      image: "https://ithoka.vercel.app/logos/logo.png",
      sameAs: [
        "https://twitter.com/your_twitter_handle",
        "https://github.com/Nick-Maximillien",
        "https://www.linkedin.com/in/your_linkedin/",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://ithoka.vercel.app/ai-blockchain-projects/fullstack-projects/blog",
    },
    image: "https://ithoka.vercel.app/logos/logo.png",
    author: {
      "@type": "Person",
      name: "Nick Maximillien",
      url: "https://nick-maximillien.vercel.app",
    },
  };

  const socialProofData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nick Maximillien",
    url: "https://yourdomain.com",
    image: "https://yourdomain.com/profile-photo.jpg",
    sameAs: [
      "https://twitter.com/your_twitter_handle",
      "https://github.com/Nick-Maximillien",
      "https://www.linkedin.com/in/your_linkedin/",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "48",
    },
  };

  return (
    <>
      <Script
        id="structured-data-blog"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="structured-data-social"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialProofData) }}
      />
      <div className="container">{children}</div>
    </>
  );
}
