'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    name: "Agrosight AI",
    href: "/agrosight",
    image: "/images/shot3.png",
    description: "AI-powered crop disease detection platform deployable on WhatsApp, web, and offline."
  },
  {
    name: "AutoBooks AI",
    href: "/autobooks",
    image: "/images/autobooks.png",
    description: "Simple, smart accounting assistant powered by AI."
  },
  {
    name: "Rust DeFi Engine",
    href: "/in_progress",
    image: "/images/defi.png",
    description: "A light and fast Rust engine for decentralized finance."
  },
  {
    name: "Voting DApp",
    href: "/voting",
    image: "/images/voting.png",
    description: "Blockchain voting system for cooperatives and organizations."
  },
  {
    name: "UrbanScope Chain",
    href: "/urbanscope",
    image: "/images/urbanscope.png",
    description: "Land use approval system powered by blockchain."
  },
  {
    name: "ArdhiChain (SmartLands)",
    href: "/ardhichain",
    image: "/images/ardhichain.png",
    description: "Blockchain Land Registry – mint and manage property NFTs on Ethereum."
  },
  {
    name: "Aminika Medical Services",
    href: "/aminika",
    image: "/images/aminika.png",
    description: "Healthcare platform for appointments and patient data."
  },
  {
    name: "Smart Agrovet Webstore",
    href: "/store",
    image: "/images/agroshop.png",
    description: "E-commerce platform for farm inputs with AI crop support."
  },
  {
    name: "Blog Website",
    href: "/blog",
    image: "/images/blog.png",
    description: "Modern blog platform powered by React + Strapi."
  },
];

export default function HomePage() {
  return (
    <section className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <div className="heroContent">
          <h1>Ithoka Microsystems</h1>
          <h2 style={{ color: "#0052cc" }}>AI & Blockchain Studio</h2>
          <p>
            We are a small, focused team building smart, reliable systems using AI and blockchain. 
            From agritech to finance, we create practical solutions that help people, businesses, 
            and communities work smarter.
          </p>
          <div className="ctaButtons">
            <Link href="/projects" className="ctaBtn">See Our Work</Link>
            <Link href="/contact" className="ctaBtnOutline">Start a Project</Link>
          </div>
        </div>

        <div className="heroImag">
          <Image
            src="/images/logo.jpg"
            alt="Ithoka Microsystems"
            width={300}
            height={150}
            priority
            style={{ borderRadius: '20px' }}
          />
        </div>
      </div>

      {/* About Teaser */}
      <div className="aboutTeaser">
        <h3>About Us</h3>
        <p>
          Ithoka Microsystems is a lean technical studio focused on AI and blockchain. 
          We build useful tools, systems, and products that solve real problems for real people. 
          Whether you're just starting out or scaling up, we can help turn your ideas into working solutions.
        </p>
        <Link href="/about" className="learnMore">Learn More →</Link>
      </div>

      {/* Recent Projects */}
      <div className="recentProjects">
        <h3>Recent Work</h3>
        <div className="projectsGrid">
          {projects.map((project) => (
            <Link key={project.name} href={project.href} className="projectCard">
              <div className="projectImage">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={350}
                  height={350}
                  className="projectImg"
                  priority
                />
              </div>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
      </div>

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
    </section>
  );
}
