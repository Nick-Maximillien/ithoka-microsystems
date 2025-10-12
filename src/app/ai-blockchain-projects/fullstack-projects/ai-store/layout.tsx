import type { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Smart Agrovet Webstore | E-Commerce for Modern Farmers",
  description:
    "Smart Agrovet is a mobile-first e-commerce platform for farm inputs, integrated with Agrosight AI — empowering farmers with easy access to tools, seeds, and diagnosis.",
  keywords: [
    "Smart Agrovet",
    "Farm e-commerce",
    "Agrosight AI",
    "Agriculture Kenya",
    "Online agrovet",
    "Django REST API",
    "Next.js",
    "Cloudinary",
  ],
  openGraph: {
    title: "Smart Agrovet Webstore | E-Commerce for Modern Farmers",
    description:
      "A next-generation agrovet platform with AI-powered integration for smart farming.",
    url: "https://ithoka.com/projects/smart-agrovet",
    siteName: "Ithoka Microsystems",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ithoka.com/images/smart-agrovet.png",
        width: 1200,
        height: 630,
        alt: "Smart Agrovet Webstore Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Agrovet Webstore | E-Commerce for Modern Farmers",
    description:
      "Mobile-first e-commerce platform for farm inputs integrated with Agrosight AI.",
    images: ["https://ithoka.com/images/smart-agrovet.png"],
    creator: "@nicholasmuthoki",
  },
  alternates: {
    canonical: "https://ithoka.com/projects/smart-agrovet",
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
    image: "https://ithoka.com/images/smart-agrovet.png",
    description:
      "Smart Agrovet is a modern agro-ecommerce platform integrated with AI for farm input distribution and smart farming.",
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
      ratingValue: "4.9",
      reviewCount: "41",
    },
    review: [
      {
        "@type": "Review",
        author: "Kenya Farmers Network",
        reviewBody:
          "Smart Agrovet revolutionized how we source farm inputs. Simple, fast, and trustworthy.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
      },
      {
        "@type": "Review",
        author: "GreenGrow Cooperative",
        reviewBody:
          "The integration with AI diagnosis makes this platform a game changer for rural farmers.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Farm Inputs (Seeds, Tools, Equipment)",
          image: "https://ithoka.com/images/agrovet-product.jpg",
          description: "Affordable, high-quality agricultural inputs for farmers.",
        },
        priceCurrency: "KES",
        price: "1000",
        availability: "https://schema.org/InStock",
      },
    ],
  };

  return (
    <div className="container">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
}
