'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const projects = [
  {
    name: "Agrosight AI",
    href: "/ai-blockchain-projects/ai-projects/agrosight-ai",
    image: "/images/shot3.png",
    description: "AI-powered crop disease detection platform deployable on WhatsApp, web, and offline."
  },
  {
    name: "AutoBooks AI",
    href: "/ai-blockchain-projects/ai-projects/autobooks-ai",
    image: "/images/autobooks.png",
    description: "Simple, smart accounting assistant powered by AI."
  },
  {
    name: "Rust DeFi Engine",
    href: "/in-progress",
    image: "/images/defi.png",
    description: "A light and fast Rust engine for decentralized finance."
  },
  {
    name: "Voting DApp",
    href: "/ai-blockchain-projects/blockchain-projects/voting-dapp",
    image: "/images/voting.png",
    description: "Blockchain voting system for cooperatives and organizations."
  },
  {
    name: "UrbanScope Chain",
    href: "/ai-blockchain-projects/blockchain-projects/urbanscope-chain",
    image: "/images/urbanscope.png",
    description: "Land use approval system powered by blockchain."
  },
  {
    name: "ArdhiChain (SmartLands)",
    href: "/ai-blockchain-projects/blockchain-projects/ardhi-chain",
    image: "/images/ardhichain.png",
    description: "Blockchain Land Registry – mint and manage property NFTs on Ethereum."
  },
  {
    name: "Aminika Medical Services",
    href: "/ai-blockchain-projects/fullstack-projects/aminika-health",
    image: "/images/aminika.png",
    description: "Healthcare platform for appointments and patient data."
  },
  {
    name: "Smart Agrovet Webstore",
    href: "/ai-blockchain-projects/fullstack-projects/ai-store",
    image: "/images/agroshop.png",
    description: "E-commerce platform for farm inputs with AI crop support."
  },
  {
    name: "Blog Website",
    href: "/ai-blockchain-projects/blockchain-projects/ai-blockchain-projects/fullstack-projects/blog",
    image: "/images/blog.png",
    description: "Modern blog platform powered by React + Strapi."
  },
];

export default function HomePage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ithoka Microsystems",
    "url": "https://ithoka.vercel.app", // Replace with your actual domain
    "logo": "https://ithoka.vercel.app/images/logo.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/nicholas-muthoki", 
      "https://github.com/Nick-Maximillien"
    ],
    "founder": "Nicholas Muthoki",
    "description": "Ithoka Microsystems is a lean AI & Blockchain studio focused on building practical, smart solutions for real-world problems."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ithoka Microsystems",
    "url": "https://ithoka.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ithoka.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([orgSchema, websiteSchema]),
          }}
        />
      </Head>

      {/* Hero Section */}
      <header className="hero">
        <div className="heroContent">
          <h1>Ithoka Microsystems</h1>
          <h2 style={{ color: "#0052cc" }}>AI &amp; Blockchain Studio</h2>
          <p>
            We are a small, focused team building smart, reliable systems using AI and blockchain.
            From agritech to finance, we create practical solutions that help people, businesses,
            and communities work smarter.
          </p>
          <div className="ctaButtons">
            <Link href="/ai-blockchain-projects" className="ctaBtn">Explore Our Projects</Link>
            <Link href="/contact" className="ctaBtnOutline">Start Your Project</Link>
          </div>
        </div>

        <figure className="heroImag">
          <Image
            src="/images/logo.jpg"
            alt="Ithoka Microsystems AI and Blockchain Studio Logo"
            width={300}
            height={150}
            priority
            style={{ borderRadius: '20px' }}
          />
        </figure>
      </header>

      <main>
        {/* About Teaser */}
        <section className="aboutTeaser" aria-labelledby="about-heading">
          <h3 id="about-heading">About Ithoka Microsystems</h3>
          <p style={{textAlign: "left"}}>
            Ithoka Microsystems is a lean technical studio focused on AI and blockchain.
            We build useful tools, systems, and products that solve real problems for real people.
            Whether you&apos;re just starting out or scaling up, we can help turn your ideas into working solutions.
          </p>
          <Link href="/founder-story" className="learnMore">Learn more about us →</Link>
        </section>

        {/* Recent Projects */}
        <section className="recentProjects" aria-labelledby="recent-projects-heading">
          <h3 id="recent-projects-heading">Recent Work</h3>
          <div className="projectsGrid">
            {projects.map((project) => (
              <article key={project.name} className="projectCard">
                <Link href={project.href} aria-label={`View details of ${project.name}`}>
                  <figure className="projectImage">
                    <Image
                      src={project.image}
                      alt={`${project.name} project preview`}
                      width={350}
                      height={350}
                      className="projectImg"
                      priority
                    />
                  </figure>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="ctaSection" aria-labelledby="work-with-us-heading">
          <h2 id="work-with-us-heading">Work With Us</h2>
          <p>
            Whether you are an individual, a small business, or a growing company —
            we can help bring your idea to life. No big team. No complicated process.
            Just clean, smart engineering and real results.
          </p>
          <div className="ctaSection sec">
            <Link href="/contact" className="ctaBtn">Get in Touch</Link>
          </div>
        </section>
      </main>

      <style jsx>{`
        .hero {
          border-color: white;
          padding-bottom: 50px;
          padding-top: 50px;
        }
        .aboutTeaser {
          margin-top: 10px;
          padding-top: 10px;
        }
        .recentProjects {
          margin-top: 10px;
          padding-top: 10px;
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
      `}</style>
    </>
  );
}
