// app/projects/page.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = {
  'Live Products': [
    {
      name: "Agrosight AI",
      href: "/agrosight",
      image: "/images/shot3.png",
      stage: "Live",
      description: "AI crop disease detection platform — deployable on WhatsApp, web & offline for farmers and cooperatives."
    },
    {
      name: "AutoBooks AI",
      href: "/autobooks",
      image: "/images/autobooks.png",
      stage: "Live",
      description: "Automated AI accounting assistant for small businesses and B2B operations."
    },
    {
      name: "Voting DApp",
      href: "/voting",
      image: "/images/voting.png",
      stage: "Live",
      description: "Blockchain voting platform for agricultural cooperatives — transparent and tamper-proof."
    },
    {
      name: "UrbanScope Chain",
      href: "/urbanscope",
      image: "/images/urbanscope.png",
      stage: "Live",
      description: "Blockchain-backed land use approval system for urban development workflows."
    },
    {
      name: "ArdhiChain (SmartLands)",
      href: "/ardhichain",
      image: "/images/ardhichain.png",
      stage: "Live",
      description: "Land registry on Ethereum — mint and manage property NFTs securely."
    },
    {
      name: "Aminika Medical Services",
      href: "/aminika",
      image: "/images/aminika.png",
      stage: "Live",
      description: "Lightweight healthcare platform for appointment scheduling and patient data management."
    },
    {
      name: "Blog Platform",
      href: "/blog",
      image: "/images/blog.png",
      stage: "Live",
      description: "React + Strapi headless CMS — built for lean content publishing."
    }
  ],
  'In Active Development': [
    {
      name: "Rust DeFi Engine",
      href: "/rust-defi",
      image: "/images/defi.png",
      stage: "Alpha",
      description: "Rust-based DeFi engine with smart contracts and AI-powered analytics."
    },
    {
      name: "AutoBooks AI",
      href: "/autobooks",
      image: "/images/autobooks.png",
      stage: "MVP",
      description: "Automated AI accounting assistant for small businesses and B2B operations."
    },
  ],
  'Early R&D': [
    {
      name: "Smart Agrovet Webstore",
      href: "/store",
      image: "/images/agroshop.png",
      stage: "Prototype",
      description: "E-commerce platform for farm inputs with built-in AI crop diagnosis integration."
    },
  ]
};

export default function ProjectsPage() {
  return (
    <section className="projectsPag">
      <div className="her">
        <h1 className="projectsTitle">R&D Projects</h1>
        <p>Real work. Real traction. These are the projects we’re building, shipping, and evolving across AI, Blockchain, and Fullstack systems.</p>
      </div>

      {Object.keys(projects).map((category) => (
        <div key={category} className="categorySection">
          <h2>{category}</h2>
          <div className="projectsGrid">
            {projects[category as keyof typeof projects].map((project) => (
              <Link key={project.name} href={project.href} className="projectCard">
                <div className="projectImage">
                  <Image
                    src={project.image}
                    alt={project.name}
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
            ))}
          </div>
        </div>
      ))}

      <section className="ctaSection">
        <h2>Partner With Us</h2>
        <p>We work with founders, teams, and organizations to bring bold ideas to life. From prototype to production — let’s build something meaningful together.</p>
      </section>
      <div className="ctaSection sec">
        <Link href="/contact" className="ctaBtn">Get in Touch</Link>
      </div>

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
    </section>
  );
}
