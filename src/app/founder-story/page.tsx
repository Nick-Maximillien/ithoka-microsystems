'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projectHighlights = [
  {
    category: 'AI',
    name: 'Agrosight AI',
    href: '/ai-blockchain-projects/ai-projects/agrosight-ai',
    image: '/images/shot3.png',
    description: 'Real-time crop disease detection platform deployable on WhatsApp, web, or offline.'
  },
  {
    category: 'Blockchain',
    name: 'Rust DeFi Engine',
    href: '/ai-blockchain-projects/blockchain-projects/rust-defi-engine',
    image: '/images/defi.png',
    description: 'Rust-based engine for building secure, scalable DeFi applications.'
  },
  {
    category: 'Fullstack / End-to-End',
    name: 'Smart Agrovet Webstore',
    href: '/ai-blockchain-projects/fullstack-projects/smart-agrovet-webstore',
    image: '/images/agroshop.png',
    description: 'E-commerce for farm inputs with built-in AI crop diagnosis.'
  },
];

export default function AboutPage() {
  return (
    <main
      className="aboutPage"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <header>
        <h1 itemProp="headline" style={{ textAlign: "center", padding: "5px" }}>
          About Ithoka Microsystems
        </h1>
        <p itemProp="description" style={{ padding: "15px" }}>
          Ithoka Microsystems is a lean AI & Blockchain systems firm focused on turning cutting-edge technology into practical, 
          field-ready tools. We design, train, and deploy intelligent and decentralized systems that solve real problems 
          in agriculture, finance, and governance. Our philosophy is simple — build smart, build lean, and deploy fast.
        </p>
      </header>

      <section aria-labelledby="core-capabilities" itemScope itemType="https://schema.org/ItemList">
        <h2 id="core-capabilities">Core Capabilities</h2>
        <ul>
          <li><strong>Artificial Intelligence:</strong> Computer vision, NLP, advisory engines, ML pipelines, offline & edge deployment</li>
          <li><strong>Blockchain:</strong> Smart contracts, Rust & Ethereum development, decentralized governance systems</li>
          <li><strong>End-to-End Systems:</strong> React/Next.js frontends, Django/FastAPI backends, scalable infrastructure</li>
        </ul>
      </section>

      <section aria-labelledby="representative-projects" itemScope itemType="https://schema.org/ItemList">
        <h2 id="representative-projects">Representative Projects</h2>
        <div className="projectsGrid">
          {projectHighlights.map((proj) => (
            <article
              key={proj.name}
              className="projectCard"
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <Link href={proj.href} className="projectLink" itemProp="url">
                <figure>
                  <Image
                    src={proj.image}
                    alt={proj.name}
                    width={300}
                    height={300}
                    className="projectImg"
                    priority
                  />
                  <figcaption>
                    <h4 itemProp="name">{proj.name}</h4>
                    <p itemProp="description">{proj.description}</p>
                    <span className="category" itemProp="about">{proj.category}</span>
                  </figcaption>
                </figure>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Our Approach</h2>
        <p>
          We keep our execution lean and focused. Every project begins with clarity — identifying the real pain points — then 
          moves toward clean, deployable solutions. We don’t build hype; we build reliable systems that work in the field. 
          Whether it’s an AI engine, blockchain protocol, or integrated platform, Ithoka Microsystems delivers measurable value.
        </p>
      </section>

      <section className="ctaSection" aria-labelledby="partner">
        <h2 id="partner">Partner With Us</h2>
        <p>
          We collaborate with startups, businesses, NGOs, and public institutions to design and deploy practical AI and blockchain solutions. 
          If you’re ready to build, test, or scale your next idea — we can help.
        </p>
        <Link href="/contact" className="ctaBtn">Get in Touch</Link>
      </section>

      {/* your style untouched */}
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

        .aboutPage {
          max-width: 960px;
          margin: auto;
          padding: 2rem 1rem;
        }

        header {
          text-align: center;
          margin-bottom: 2rem;
        }

        header h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        section {
          background: var(--card-bg);
          padding: 1.5rem;
          margin-bottom: 2rem;
          border-radius: 12px;
          box-shadow: 0 6px 14px var(--card-shadow);
          backdrop-filter: blur(6px);
        }

        h2 {
          color: var(--accent);
          border-left: 4px solid var(--accent);
          padding-left: 10px;
          margin-top: 0;
          margin-bottom: 1rem;
        }

        h4 {
          margin: 0.5rem 0;
        }

        p, li {
          font-size: 1rem;
          line-height: 1.6;
        }

        ul {
          padding-left: 1.5rem;
        }

        .projectsGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }

        .projectCard {
          background: var(--card-bg);
          border-radius: 12px;
          padding: 1rem;
          flex: 1 1 280px;
          max-width: 320px;
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .projectCard:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px var(--card-shadow);
        }

        figure {
          margin: 0;
        }

        .projectImg {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .category {
          display: inline-block;
          margin-top: 0.5rem;
          font-size: 0.85rem;
          color: var(--accent);
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

        @media (max-width: 768px) {
          .projectsGrid {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </main>
  );
}
