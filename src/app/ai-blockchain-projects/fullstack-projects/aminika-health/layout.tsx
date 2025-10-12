import React, { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Aminika Medical Services | Healthcare Web Platform",
  description:
    "Aminika Medical Services provides accessible, affordable, high-quality healthcare. Modern patient management and appointment scheduling with a mobile-first web app.",
  keywords: [
    "Aminika Medical Services",
    "healthcare Kenya",
    "medical web app",
    "patient management system",
    "appointment booking platform",
    "Tatu City clinic",
    "Juja healthcare",
  ],
  openGraph: {
    title: "Aminika Medical Services | Healthcare Web Platform",
    description:
      "Accessible, affordable, and high-quality healthcare through modern digital experiences.",
    url: "https://your-domain.com/projects/aminika-medical",
    siteName: "Ithoka Microsystems",
    type: "website",
    images: [
      {
        url: "https://your-domain.com/images/aminika1.png",
        width: 1200,
        height: 630,
        alt: "Aminika Medical Services Web App Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aminika Medical Services",
    description:
      "Accessible, affordable, and high-quality healthcare through modern digital experiences.",
    images: ["https://your-domain.com/images/aminika1.png"],
    creator: "@yourhandle",
  },
  alternates: {
    canonical: "https://your-domain.com/projects/aminika-medical",
  },
};

export default function Layout({ children }: LayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aminika Medical Services",
    description:
      "Aminika Medical Services offers compassionate, professional healthcare with digital appointment booking and patient information management.",
    url: "https://aminika-medical.netlify.app",
    image: "https://your-domain.com/images/aminika1.png",
    telephone: "+254700123456",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tatu City, Ruiru-Kiambu Road",
      addressLocality: "Juja",
      addressRegion: "Kiambu",
      addressCountry: "Kenya",
    },
    openingHours: "Mo-Su 08:00-20:00",
    sameAs: [
      "https://www.facebook.com/aminikamedical",
      "https://twitter.com/aminika_medical",
      "https://www.instagram.com/aminikamedical",
    ],
    priceRange: "$$",
  };

  const reviewData = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "Aminika Medical Services",
    },
    ratingValue: "4.8",
    reviewCount: "250",
  };

  return (
    <>
      {children}
      <Script
        id="aminika-medical-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="aminika-medical-reviews"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewData),
        }}
      />
    </>
  );
}
