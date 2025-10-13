// app/projects/page.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const projects = {
  'Live Products': [
    {
      name: "Agrosight AI",
      href: "/ai-blockchain-projects/ai-projects/agrosight-ai",
      image: "/images/shot3.png",
      stage: "Live",
      description: "AI crop disease detection platform — deployable on WhatsApp, web & offline for farmers and cooperatives."
    },
    {
      name: "AutoBooks AI",
      href: "/ai-blockchain-projects/ai-projects/autobooks-ai",
      image: "/images/autobooks.png",
      stage: "Live",
      description: "Automated AI accounting assistant for small businesses and B2B operations."
    },
    {
      name: "Voting DApp",
      href: "/ai-blockchain-projects/blockchain-projects/voting-dapp",
      image: "/images/voting.png",
      stage: "Live",
      description: "Blockchain voting platform for agricultural cooperatives — transparent and tamper-proof."
    },
    {
      name: "UrbanScope Chain",
      href: "/ai-blockchain-projects/blockchain-projects/urbanscope-chain",
      image: "/images/urbanscope.png",
      stage: "Live",
      description: "Blockchain-backed land use approval system for urban development workflows."
    },
    {
      name: "ArdhiChain (SmartLands)",
      href: "/ai-blockchain-projects/blockchain-projects/ardhi-chain",
      image: "/images/ardhichain.png",
      stage: "Live",
      description: "Land registry on Ethereum — mint and manage property NFTs securely."
    },
    {
      name: "Aminika Medical Services",
      href: "/ai-blockchain-projects/fullstack-projects/aminika-health",
      image: "/images/aminika.png",
      stage: "Live",
      description: "Lightweight healthcare platform for appointment scheduling and patient data management."
    },
    {
      name: "Blog Platform",
      href: "/ai-blockchain-projects/fullstack-projects/blog",
      image: "/images/blog.png",
      stage: "Live",
      description: "React + Strapi headless CMS — built for lean content publishing."
    }
  ],
  'In Active Development': [
    {
      name: "Rust DeFi Engine",
      href: "/in-progress",
      image: "/images/defi.png",
      stage: "Alpha",
      description: "Rust-based DeFi engine with smart contracts and AI-powered analytics."
    },
    {
      name: "AutoBooks AI",
      href: "/ai-blockchain-projects/ai-projects/autobooks-ai",
      image: "/images/autobooks.png",
      stage: "MVP",
      description: "Automated AI accounting assistant for small businesses and B2B operations."
    },
  ],
  'Early R&D': [
    {
      name: "Smart Agrovet Webstore",
      href: "/ai-blockchain-projects/fullstack-projects/ai-store",
      image: "/images/agroshop.png",
      stage: "Prototype",
      description: "E-commerce platform for farm inputs with built-in AI crop diagnosis integration."
    },
  ]
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ithoka Microsystems",
    "description": "AI & Blockchain systems firm focused on building lean, field-ready technology.",
    "url": "https://ithoka.vercel.app",
    "logo": "https://ithoka.vercel.app/logos/logo.png",
    "image": "https://ithoka.vercel.app/images/shot3.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "Kenya"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254700000000",
      "contactType": "customer support",
      "areaServed": "KE"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ithoka-microsystems",
      "https://twitter.com/ithokamicrosys",
      "https://github.com/Nick-Maximillien"
    ]
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ithoka.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://ithoka.vercel.app/ai-blockchain-projects"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>AI & Blockchain Projects | Ithoka Microsystems</title>
        <meta
          name="description"
          content="Explore Ithoka Microsystems' live and in-development AI & Blockchain R&D projects — from Agrosight AI to UrbanScope Chain."
        />
        <link rel="canonical" href="https://ithoka.vercel.app/ai-blockchain-projects" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </Head>

      <main>
        <header className="her">
          <h1 className="projectsTitle">AI & Blockchain R&D Projects</h1>
          <p>
            Real work. Real traction. These are the projects we are building, shipping, and evolving across AI, Blockchain, and Fullstack systems.
          </p>
        </header>
        <div className="ctaButtons">
            <Link href="/onboard" className="ctaBtnOutline">Start Your Project</Link>
          </div>

        {Object.keys(projects).map((category) => (
          <section key={category} className="categorySection">
            <h2>{category}</h2>
            <div className="projectsGrid">
              {projects[category as keyof typeof projects].map((project) => (
                <article key={project.name} itemScope itemType="https://schema.org/SoftwareApplication">
                  <meta itemProp="name" content={project.name} />
                  <meta itemProp="description" content={project.description} />
                  <meta itemProp="applicationCategory" content="AI & Blockchain" />
                  <Link
                    href={project.href}
                    className="projectCard"
                    aria-label={`Learn more about ${project.name}`}
                    itemProp="url"
                  >
                    <div className="projectImage">
                      <Image
                        src={project.image}
                        alt={`${project.name} — ${project.stage} stage`}
                        width={300}
                        height={300}
                        className="projectImg"
                        priority
                      />
                    </div>
                    <div className="projectHeader">
                      <h3>{project.name}</h3>
                      <span className="stageTag">{project.stage}</span>
                    </div>
                    <p>{project.description}</p>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}

        <div className="ctaButtons">
                    <Link href="/onboard" className="ctaBtnOutline">Start Your Project</Link>
                  </div>

        <section className="ctaSection" itemScope itemType="https://schema.org/Organization">
          <h2>Partner With Ithoka Microsystems</h2>
          <p>
            We work with founders, teams, and organizations to bring bold ideas to life. From prototype to production — let’s build something meaningful together.
          </p>
          <div className="ctaSection sec">
            <Link href="/contact" className="ctaBtn" aria-label="Contact Ithoka Microsystems" itemProp="url">
              Contact Ithoka Microsystems
            </Link>
          </div>
        </section>
      </main>

      <style jsx>{`
        .projectsPag {
          background-color: #000;
          color: #fff;
          padding: 2rem 1rem;
          font-family: 'Segoe UI', sans-serif;
        }
        .projectsTitle {
          margin: 2rem;
        }
        .her {
          text-align: center;
          margin-bottom: 2rem;
        }
        .her h1 {
          font-size: 2.5rem;
          color: #00aaff;
        }
        .her p {
          font-size: 1.2rem;
          color: #ccc;
          max-width: 700px;
          margin: 0 auto;
        }
        .categorySection {
          margin-bottom: 3rem;
        }
        .categorySection h2 {
          color: #00aaff;
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        .projectsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .projectCard {
          background-color: #111;
          border-radius: 12px;
          overflow: hidden;
          padding: 1rem;
          transition: transform 0.3s, box-shadow 0.3s;
          text-decoration: none;
          color: #fff;
        }
        .projectCard:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 170, 255, 0.3);
        }
        .projectImage {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: 10px;
          margin-bottom: 1rem;
        }
        .projectImg {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .projectHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .stageTag {
          font-size: 0.8rem;
          padding: 4px 8px;
          border-radius: 6px;
          background: #00aaff;
          color: #000;
          font-weight: bold;
        }
        .projectCard h3 {
          color: #00aaff;
          margin: 0.5rem 0;
        }
        .projectCard p {
          color: #ccc;
          font-size: 0.95rem;
        }
        .ctaSection {
          text-align: center;
        }
        .ctaBtn {
          display: inline-block;
          margin-top: 1rem;
          padding: 10px 18px;
          border-radius: 6px;
          background: var(--accent, #00aaff);
          color: var(--foreground, #fff);
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
          .her h1 {
            font-size: 2rem;
          }
          .her p {
            font-size: 1rem;
          }
          .projectsGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
