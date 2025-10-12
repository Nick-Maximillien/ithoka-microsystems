import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI & Blockchain Projects | Ithoka Microsystems",
  description:
    "Explore Ithoka Microsystems' live and in-development AI & Blockchain R&D projects — from Agrosight AI to UrbanScope Chain.",
  alternates: {
    canonical: "https://ithokamicrosystems.com/ai-blockchain-projects",
  },
  openGraph: {
    title: "AI & Blockchain Projects | Ithoka Microsystems",
    description:
      "Explore Ithoka Microsystems' live and in-development AI & Blockchain R&D projects — from Agrosight AI to UrbanScope Chain.",
    url: "https://ithokamicrosystems.com/ai-blockchain-projects",
    siteName: "Ithoka Microsystems",
    images: [
      {
        url: "https://ithokamicrosystems.com/images/shot3.png",
        width: 1200,
        height: 630,
        alt: "Ithoka Microsystems projects overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Blockchain Projects | Ithoka Microsystems",
    description:
      "Explore Ithoka Microsystems' live and in-development AI & Blockchain R&D projects — from Agrosight AI to UrbanScope Chain.",
    images: ["https://ithokamicrosystems.com/images/shot3.png"],
  },
};

// ✅ Move themeColor and viewport to this function
export function generateViewport() {
  return {
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#000000",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ithoka Microsystems",
    description: "AI & Blockchain systems firm focused on building lean, field-ready technology.",
    url: "https://ithokamicrosystems.com",
    logo: "https://ithokamicrosystems.com/images/logo.png",
    image: "https://ithokamicrosystems.com/images/shot3.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "Kenya",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254700000000",
      contactType: "customer support",
      areaServed: "KE",
    },
    sameAs: [
      "https://www.linkedin.com/company/ithoka-microsystems",
      "https://twitter.com/ithokamicrosys",
      "https://github.com/Nick-Maximillien",
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ithokamicrosystems.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://ithokamicrosystems.com/ai-blockchain-projects",
      },
    ],
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
