import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ithoka Microsystems — AI & Blockchain Engineering",
  description:
    "Get in touch with Ithoka Microsystems — AI & Blockchain consulting and engineering firm based in Nairobi, Kenya. Reach out for collaborations, R&D, or partnerships.",
  keywords: [
    "Ithoka Microsystems",
    "Contact",
    "AI Consulting Kenya",
    "Blockchain Solutions",
    "Nicholas Muthoki",
    "Agrosight",
    "AutoBooks AI",
  ],
  openGraph: {
    title: "Contact Ithoka Microsystems",
    description:
      "Ithoka Microsystems — AI & Blockchain consulting and engineering firm. Let's build the future of decentralized systems together.",
    url: "https://ithoka.vercel.app/contact",
    siteName: "Ithoka Microsystems",
    images: [
      {
        url: "https://ithoka.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ithoka Microsystems Contact Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ithoka Microsystems",
    description:
      "Reach out to Ithoka Microsystems for AI & Blockchain solutions. Nairobi, Kenya.",
    images: ["https://ithoka.vercel.app/og-image.png"],
  },
  alternates: {
    canonical: "https://ithoka.vercel.app/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
