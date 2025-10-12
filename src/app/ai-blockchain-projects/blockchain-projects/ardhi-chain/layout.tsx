import { ReactNode } from "react";
import { Metadata } from "next";
import Script from "next/script";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "SmartLands (ArdhiChain) | Ithoka Microsystems — Blockchain Land Registry",
  description:
    "SmartLands (ArdhiChain) is a decentralized land registry DApp that lets admins mint and manage property NFTs with title metadata, secure transfers, and IPFS storage.",
  openGraph: {
    title: "SmartLands (ArdhiChain) | Ithoka Microsystems",
    description:
      "Blockchain-powered land registry: Mint and manage property NFTs with secure transfers and title metadata stored on IPFS.",
    url: "https://ithoka.africa/projects/ardhi-chain",
    siteName: "Ithoka Microsystems",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ithoka.africa/images/ardhichain1.png",
        width: 1200,
        height: 630,
        alt: "ArdhiChain UI Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Ithoka_AI",
    title: "SmartLands (ArdhiChain) | Ithoka Microsystems",
    description:
      "Mint and manage property NFTs on Ethereum with secure, decentralized title metadata.",
    images: ["https://ithoka.africa/images/ardhichain1.png"],
  },
  alternates: {
    canonical: "https://ithoka.africa/projects/ardhi-chain",
  },
};

export default function Layout({ children }: LayoutProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ithoka Microsystems",
    url: "https://ithoka.africa",
    logo: "https://ithoka.africa/logo.png",
    image: "https://ithoka.africa/images/ardhichain1.png",
    description:
      "Ithoka Microsystems builds AI and Blockchain-powered solutions including SmartLands (ArdhiChain), a decentralized land registry.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "KE",
      addressLocality: "Nairobi",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@ithoka.africa",
    },
    sameAs: [
      "https://twitter.com/Ithoka_AI",
      "https://github.com/Nick-Maximillien",
      "https://www.linkedin.com/company/ithoka",
    ],
  };

  const socialProofSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "SmartLands (ArdhiChain)",
    url: "https://ithoka.africa/projects/ardhi-chain",
    image: "https://ithoka.africa/images/ardhichain1.png",
    author: {
      "@type": "Organization",
      name: "Ithoka Microsystems",
    },
    sameAs: [
      "https://twitter.com/Ithoka_AI",
      "https://github.com/Nick-Maximillien/ardhiChain",
      "https://www.linkedin.com/company/ithoka",
    ],
  };

  return (
    <div className="container">
      {children}
      <Script
        id="json-ld-localbusiness"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="json-ld-social-proof"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialProofSchema) }}
      />
    </div>
  );
}
