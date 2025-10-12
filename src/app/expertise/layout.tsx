// app/expertise/layout.tsx
import type { Metadata, Viewport } from 'next'
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Expertise | Ithoka Microsystems — AI & Blockchain Engineering',
  description:
    'Explore the technologies and expertise behind Ithoka Microsystems. From AI and Blockchain to DevOps and Innovation — we build intelligent, decentralized, scalable systems.',
  keywords: [
    'AI',
    'Blockchain',
    'Next.js',
    'Rust',
    'Django',
    'Web3',
    'Kenya AI',
    'Agrotech',
    'DeFi',
    'Software Engineering',
    'Ithoka Microsystems'
  ],
  openGraph: {
    title: 'Expertise | Ithoka Microsystems',
    description:
      'The technologies powering Ithoka Microsystems — AI, Blockchain, Fullstack, DevOps, Innovation.',
    url: 'https://ithoka.com/expertise',
    siteName: 'Ithoka Microsystems',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ithoka Microsystems Expertise'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expertise | Ithoka Microsystems',
    description:
      'The technologies powering Ithoka Microsystems — AI, Blockchain, Fullstack, DevOps, Innovation.',
    images: ['/images/og-image.png'],
    creator: '@ithoka'
  },
  alternates: {
    canonical: 'https://ithoka.com/expertise'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1
    }
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
}

// ✅ Move viewport & themeColor to a separate export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000'
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container" itemScope itemType="https://schema.org/WebPage">
      {children}

      {/* --- Breadcrumb structured data --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://ithoka.com'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Expertise',
                item: 'https://ithoka.com/expertise'
              }
            ]
          })
        }}
      />
    </div>
  )
}
