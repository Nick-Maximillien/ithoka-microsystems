'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const servicesList = [
  {
    category: 'AI & Machine Learning',
    description:
      'Building intelligent systems — computer vision, NLP, autonomous decision systems, and predictive analytics. We help businesses leverage AI for real outcomes.',
    image: '/services/ai.png',
  },
  {
    category: 'Blockchain & DeFi',
    description:
      'Smart contract architecture, DApps, tokenomics design, decentralized governance, and NFT solutions — from prototype to production.',
    image: '/services/blockchain.png',
  },
  {
    category: 'Fullstack Development',
    description:
      'Modern web & mobile development using React/Next.js, Django/FastAPI, PostgreSQL, and cloud-native deployments.',
    image: '/services/fullstack.png',
  },
  {
    category: 'Consulting & Advisory',
    description:
      'Helping startups, SMEs, and governments translate ideas into technical architecture, strategies, and execution plans.',
    image: '/services/consulting.png',
  },
  {
    category: 'Remote Development & Integration',
    description:
      'Flexible collaboration — MVP builds, feature extensions, API integrations, DevOps support, and backend optimization for global clients.',
    image: '/services/remote.png',
  },
  {
    category: 'Team Augmentation & Maintenance',
    description:
      'Partnering with teams to scale products: code reviews, infrastructure hardening, CI/CD, mentoring, and long-term support.',
    image: '/services/team.png',
  },
];

const rndList = [
  {
    name: 'Farm AI',
    description:
      'AI-powered agricultural diagnostics microservice — computer vision for pests and diseases, built and deployed in-house.',
  },
  {
    name: 'AutoBooks AI',
    description:
      'Automated bookkeeping and insights engine designed for lean businesses, integrating AI and blockchain accounting primitives.',
  },
  {
    name: 'Ith ID',
    description:
      'A decentralized digital identity layer built for African businesses and individuals to control their data and interactions.',
  },
];

export default function ServicesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ithoka Microsystems',
    image: 'https://ithokamicrosystems.com/og-image.png',
    '@id': 'https://ithokamicrosystems.com',
    url: 'https://ithokamicrosystems.com',
    telephone: '+254700000000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nairobi Innovation Hub',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.286389,
      longitude: 36.817223,
    },
    sameAs: [
      'https://x.com/ithokamicrosys',
      'https://github.com/Nick-Maximillien',
      'https://www.linkedin.com/in/nicholas-muthoki',
    ],
    serviceOffer: servicesList.map((service) => ({
      '@type': 'Service',
      name: service.category,
      description: service.description,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Ithoka Microsystems',
      },
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '27',
    },
    review: [
      {
        '@type': 'Review',
        author: 'Tech Founder',
        datePublished: '2025-08-12',
        reviewBody:
          'Brilliant AI engineering and blockchain integration. They delivered a working MVP fast.',
        name: 'Excellent technical partner',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
      },
      {
        '@type': 'Review',
        author: 'Startup CTO',
        datePublished: '2025-09-05',
        reviewBody:
          'They’re lean, fast, and technically sharp. One of the best engineering partners we’ve worked with.',
        name: 'Great collaboration experience',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '4.8',
        },
      },
    ],
  };

  return (
    <main className="servicesPage" role="main">
      <Head>
        <title>Services | Ithoka Microsystems — AI & Blockchain Consulting</title>
        <meta
          name="description"
          content="Explore Ithoka Microsystems' AI, blockchain, and fullstack engineering services. Lean, high-impact systems for startups, enterprises, and governments."
        />
        <meta
          name="keywords"
          content="AI development, Blockchain solutions, Kenya AI, DeFi, Smart contracts, MVP development, consulting"
        />
        <link rel="canonical" href="https://ithokamicrosystems.com/services" />
        <meta property="og:title" content="Ithoka Microsystems — AI & Blockchain Services" />
        <meta
          property="og:description"
          content="AI, Blockchain & Fullstack consulting and development. Lean engineering. Real outcomes."
        />
        <meta property="og:url" content="https://ithokamicrosystems.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ithokamicrosystems.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <header className="heade">
        <h1 className="servicesTitle">What We Do</h1>
        <p className="servicesSubtitle">
          <strong>Ithoka Microsystems</strong> is a lean, AI & blockchain native engineering firm.
          We build, consult, and run deep R&D in-house — helping individuals, startups, and
          enterprises turn complex problems into elegant, scalable systems.
        </p>
      </header>

      <section aria-labelledby="core-services">
        <h2 id="core-services" className="offer">
          Core Services
        </h2>
        <div className="servicesGrid">
          {servicesList.map((service) => (
            <article
              key={service.category}
              className="serviceCard"
              itemScope
              itemType="https://schema.org/Service"
            >
              <figure className="serviceImage">
                <Image
                  src={service.image}
                  alt={`${service.category} — ${service.description.slice(0, 60)}...`}
                  width={200}
                  height={150}
                  priority
                />
              </figure>
              <h3 itemProp="name">{service.category}</h3>
              <p itemProp="description">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="rnd-section">
        <h2 id="rnd-section" className="offer">
          Internal R&D & Innovation Lab
        </h2>
        <p className="servicesSubtitle">
          We actively build our own AI and blockchain products. These projects allow us to push the
          frontier, sharpen our craft, and create real-world impact.
        </p>
        <div className="servicesGrid">
          {rndList.map((project) => (
            <article key={project.name} className="serviceCard">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <section className="ctaSection" aria-labelledby="cta-title">
          <h2 id="cta-title">Work With Us</h2>
          <p>
            Whether you are an individual, a small business, or a growing company — we can help bring
            your idea to life. No big team. No complicated process. Just clean, smart engineering
            and real results.
          </p>
        </section>
        <div className="ctaSection sec">
          <Link href="/contact" className="ctaBtn" aria-label="Contact Ithoka Microsystems">
            Get in Touch
          </Link>
        </div>
      </footer>

      <style jsx>{`
        :root {
          --background: #000000;
          --foreground: #ffffff;
          --accent: #0074d9;
          --card-bg: rgba(255, 255, 255, 0.05);
          --card-shadow: rgba(255, 255, 255, 0.1);
        }

        body {
          margin: 0;
          font-family: 'Segoe UI', Roboto, sans-serif;
          background: var(--background);
          color: var(--foreground);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .servicesPage {
          max-width: 960px;
          margin: auto;
          padding: 2rem 1rem;
        }

        .servicesTitle {
          text-align: center;
          padding: 20px;
        }

        .offer {
          text-align: center;
          padding: 20px;
        }

        .servicesSubtitle {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 1.1rem;
          color: #ccc;
        }

        h2 {
          color: var(--accent);
          border-left: 4px solid var(--accent);
          border-right: 4px solid var(--accent);
          padding-left: 10px;
          margin-top: 0;
          margin-bottom: 1rem;
        }

        h3 {
          margin: 0.5rem 0;
          font-size: 1.2rem;
          color: var(--accent);
        }

        section {
          margin-bottom: 2rem;
        }

        .servicesGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }

        .serviceCard {
          background: var(--card-bg);
          padding: 1rem;
          border-radius: 12px;
          flex: 1 1 280px;
          max-width: 320px;
          text-align: center;
          box-shadow: 0 6px 14px var(--card-shadow);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .serviceCard:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px var(--card-shadow);
        }

        .serviceCard p {
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .serviceImage {
          margin-bottom: 0.8rem;
          border-radius: 10px;
        }

        .ctaSection {
          text-align: center;
        }

        .ctaBtn {
          display: inline-block;
          margin-top: 1rem;
          padding: 10px 18px;
          border-radius: 6px;
          background: var(--accent);
          color: var(--foreground);
          text-decoration: none;
          font-weight: bold;
          transition: background 0.2s ease;
        }

        .ctaBtn:hover {
          background: #0052cc;
        }

        .sec {
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .servicesGrid {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </main>
  );
}
