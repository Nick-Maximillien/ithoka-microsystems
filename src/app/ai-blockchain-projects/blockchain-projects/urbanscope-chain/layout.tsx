import { ReactNode } from "react";
import { Metadata } from "next";
import Script from "next/script";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "UrbanScope Chain | Ithoka Microsystems — Blockchain Urban Planning",
  description:
    "UrbanScope is a blockchain-based platform for approving and tracking urban land development proposals with transparency and traceability.",
  openGraph: {
    title: "UrbanScope Chain | Ithoka Microsystems",
    description:
      "A decentralized land use approval system for urban authorities. Approve and track development proposals securely on Ethereum.",
    url: "https://ithoka.africa/projects/urbanscope",
    siteName: "Ithoka Microsystems",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ithoka.africa/images/urbanscope.png",
        width: 1200,
        height: 630,
        alt: "UrbanScope Chain preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UrbanScope Chain | Ithoka Microsystems",
    description:
      "Blockchain urban planning platform for approving and tracking land development proposals with transparency.",
    site: "@Ithoka_AI",
    images: ["https://ithoka.africa/images/urbanscope.png"],
  },
  alternates: {
    canonical: "https://ithoka.africa/projects/urbanscope",
  },
};

export default function Layout({ children }: LayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "UrbanScope Chain",
    description:
      "A blockchain-based platform for approving and tracking urban land development proposals with transparency and traceability.",
    url: "https://ithoka.africa/projects/urbanscope",
    image: "https://ithoka.africa/images/urbanscope.png",
    author: {
      "@type": "Organization",
      name: "Ithoka Microsystems",
      url: "https://ithoka.africa",
    },
    sameAs: [
      "https://twitter.com/Ithoka_AI",
      "https://github.com/Nick-Maximillien/urbanscope",
      "https://www.linkedin.com/company/ithoka",
    ],
  };

  return (
    <div className="container">
      {children}
      <Script
        id="urbanscope-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
