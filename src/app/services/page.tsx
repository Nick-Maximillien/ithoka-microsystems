'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const servicesList = [
  {
    category: 'AI & Machine Learning',
    description: 'Building intelligent systems — computer vision, NLP, autonomous decision systems, and predictive analytics. We help businesses leverage AI for real outcomes.',
    image: '/services/ai.png',
  },
  {
    category: 'Blockchain & DeFi',
    description: 'Smart contract architecture, DApps, tokenomics design, decentralized governance, and NFT solutions — from prototype to production.',
    image: '/services/blockchain.png',
  },
  {
    category: 'Fullstack Development',
    description: 'Modern web & mobile development using React/Next.js, Django/FastAPI, PostgreSQL, and cloud-native deployments.',
    image: '/services/fullstack.png',
  },
  {
    category: 'Consulting & Advisory',
    description: 'Helping startups, SMEs, and governments translate ideas into technical architecture, strategies, and execution plans.',
    image: '/services/consulting.png',
  },
  {
    category: 'Remote Development & Integration',
    description: 'Flexible collaboration — MVP builds, feature extensions, API integrations, DevOps support, and backend optimization for global clients.',
    image: '/services/remote.png',
  },
  {
    category: 'Team Augmentation & Maintenance',
    description: 'Partnering with teams to scale products: code reviews, infrastructure hardening, CI/CD, mentoring, and long-term support.',
    image: '/services/team.png',
  },
];

const rndList = [
  {
    name: 'Farm AI',
    description: 'AI-powered agricultural diagnostics microservice — computer vision for pests and diseases, built and deployed in-house.',
  },
  {
    name: 'AutoBooks AI',
    description: 'Automated bookkeeping and insights engine designed for lean businesses, integrating AI and blockchain accounting primitives.',
  },
  {
    name: 'Ith ID',
    description: 'A decentralized digital identity layer built for African businesses and individuals to control their data and interactions.',
  },
];

export default function ServicesPage() {
  return (
    <main className="servicesPage">
      <div className="heade">
        <h1 className="servicesTitle">What We Do</h1>
        <p className="servicesSubtitle">
          <strong>Ithoka Microsystems</strong> is a lean, AI & blockchain native engineering firm.  
          We build, consult, and run deep R&D in-house — helping individuals, startups, and enterprises  
          turn complex problems into elegant, scalable systems.
        </p>
      </div>

      <section>
        <h2 className="offer">Core Services</h2>
        <div className="servicesGrid">
          {servicesList.map((service) => (
            <div key={service.category} className="serviceCard">
              <div className="serviceImage">
                <Image
                  src={service.image}
                  alt={service.category}
                  width={200}
                  height={150}
                  priority
                />
              </div>
              <h3>{service.category}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="offer">Internal R&D & Innovation Lab</h2>
        <p className="servicesSubtitle">
          We actively build our own AI and blockchain products.  
          These projects allow us to push the frontier, sharpen our craft, and create real-world impact.
        </p>
        <div className="servicesGrid">
          {rndList.map((project) => (
            <div key={project.name} className="serviceCard">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

       {/* CTA Section */}
            <div>
              <section className="ctaSection">
                <h2>Work With Us</h2>
                <p>
                  Whether you're an individual, a small business, or a growing company —
                  we can help bring your idea to life. No big team. No complicated process.
                  Just clean, smart engineering and real results.
                </p>
              </section>
              <div className="ctaSection sec">
                <Link href="/contact" className="ctaBtn">Get in Touch</Link>
              </div>
            </div>

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
