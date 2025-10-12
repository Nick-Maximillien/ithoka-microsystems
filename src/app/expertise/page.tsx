'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const skills = {
  AI: [
    { name: "Python", logo: "/logos/python.png", description: "Core language powering AI research, data pipelines, and automation." },
    { name: "PyTorch", logo: "/logos/pytorch.png", description: "Primary framework for training and deploying deep learning models." },
    { name: "Ultralytics YOLO", logo: "/logos/yolo.png", description: "Cutting-edge real-time object detection for applied computer vision." },
    { name: "Albumentations", logo: "/logos/albumentations.png", description: "High-performance data augmentation for robust image models." },
    { name: "Computer Vision", logo: "/logos/vision.png", description: "Extracting structured intelligence from the physical world." },
    { name: "Machine Learning", logo: "/logos/learning.png", description: "Predictive systems that learn and improve with data." },
    { name: "Data Annotation", logo: "/logos/label.png", description: "Efficient labeling workflows for AI model training and refinement." },
    { name: "Colab", logo: "/logos/colab.png", description: "Cloud GPUs for rapid experimentation and model prototyping." },
    { name: "OpenAI", logo: "/logos/openai.png", description: "Leveraging frontier models to build intelligent applications." },
    { name: "LLaMA", logo: "/logos/llama.png", description: "Deploying open-source LLMs for custom NLP solutions." },
    { name: "EasyOCR", logo: "/logos/ocr.png", description: "OCR for digitizing text from real-world imagery." },
    { name: "LangChain", logo: "/logos/langchain.png", description: "Framework for composing complex LLM-powered applications." },
    { name: "ResNet50", logo: "/logos/resnet.png", description: "Proven CNN architecture for accurate image classification." },
    { name: "AI for Good", logo: "/logos/good.png", description: "Using AI to solve agricultural, environmental, and social challenges." },
    { name: "Domain Precision", logo: "/logos/precision.png", description: "Custom-tailored AI solutions optimized for local contexts." }
  ],
  Blockchain: [
    { name: "Solidity", logo: "/logos/solidity.png", description: "Smart contract development for decentralized ecosystems." },
    { name: "Ethereum", logo: "/logos/ethereum.png", description: "Building resilient decentralized applications." },
    { name: "Web3.py", logo: "/logos/web3.png", description: "Python bridge for interacting with blockchain networks." },
    { name: "Rust", logo: "/logos/rust.png", description: "Memory-safe systems programming for high-performance on-chain and off-chain logic." },
    { name: "ICP", logo: "/logos/icp.png", description: "Building decentralized, autonomous services on the Internet Computer." },
    { name: "Smart Contracts", logo: "/logos/contract.png", description: "Automating trust through verifiable blockchain logic." },
    { name: "ethers.js", logo: "/logos/ethers.png", description: "JS library for secure and flexible Ethereum interactions." },
    { name: "Infura", logo: "/logos/infura.png", description: "Infrastructure layer for reliable blockchain connectivity." },
    { name: "Hardhat", logo: "/logos/hardhat.png", description: "Development and testing framework for EVM environments." },
    { name: "Remix", logo: "/logos/remix.png", description: "Lightweight IDE for rapid smart contract iteration." },
    { name: "Sepolia", logo: "/logos/sepolia.png", description: "Testnet used to safely deploy and debug smart contracts." },
    { name: "Base", logo: "/logos/base.png", description: "Layer 2 platform for scaling apps with low fees and high throughput." },
    { name: "Layer2", logo: "/logos/layer2.png", description: "Scalable architectures for next-gen decentralized systems." }
  ],
  Frontend: [
    { name: "Next.js", logo: "/logos/next.png", description: "Fullstack React framework for fast, modern web apps." },
    { name: "React", logo: "/logos/react.png", description: "Declarative UI library for building dynamic interfaces." },
    { name: "TypeScript", logo: "/logos/typescript.png", description: "Type-safe foundation for scalable, maintainable frontends." },
    { name: "JavaScript", logo: "/logos/js.png", description: "Core programming language of the web." },
    { name: "HTML", logo: "/logos/html.png", description: "Semantic structure for accessible, robust web content." },
    { name: "Tailwind CSS", logo: "/logos/tailwind.png", description: "Rapid UI development with a modern utility-first CSS framework." },
    { name: "CSS", logo: "/logos/css.png", description: "Precision styling for user interfaces." }
  ],
  Backend: [
    { name: "Django", logo: "/logos/django.png", description: "Python framework for secure, scalable backend APIs." },
    { name: "Rust", logo: "/logos/rust.png", description: "High-performance backend services for AI and DeFi workloads." },
    { name: "REST APIs", logo: "/logos/rest.png", description: "Reliable interfaces for connecting distributed systems." },
    { name: "PostgreSQL", logo: "/logos/postgres.png", description: "Battle-tested relational database for structured data." },
    { name: "Redis", logo: "/logos/redis.png", description: "Lightning-fast in-memory cache and datastore." },
    { name: "Twilio", logo: "/logos/twilio.png", description: "Programmable messaging and communication channels." },
    { name: "Messaging Integration", logo: "/logos/messaging.png", description: "Unified pipelines for WhatsApp, SMS, and real-time notifications." },
    { name: "FinTech", logo: "/logos/fintech.png", description: "AI-powered financial systems such as AutoBooks AI." }
  ],
  DevOps: [
    { name: "Docker", logo: "/logos/docker.png", description: "Containerization for predictable deployments and scaling." },
    { name: "Microservices", logo: "/logos/microservices.png", description: "Composable architecture for modular product development." },
    { name: "Render", logo: "/logos/render.png", description: "Cloud hosting for fast backend deployments." },
    { name: "Vercel", logo: "/logos/vercel.png", description: "Production-grade hosting for frontend apps." },
    { name: "Netlify", logo: "/logos/netlify.png", description: "Serverless deployment platform for lightweight apps." },
    { name: "Cloud Computing", logo: "/logos/cloud.png", description: "Elastic infrastructure to scale R&D and production systems." },
    { name: "Git & GitHub", logo: "/logos/github.png", description: "Version control and collaboration backbone of development." }
  ],
  Team: [
    { name: "Communication", logo: "/logos/comms.png", description: "Clear, structured technical and business communication." },
    { name: "Team Collaboration", logo: "/logos/team.png", description: "Building and shipping with lean, distributed teams." },
    { name: "Problem Solving", logo: "/logos/problem.png", description: "Structured, creative approaches to complex engineering problems." },
    { name: "Organization", logo: "/logos/organization.png", description: "Driving projects from concept to deployment with clarity."},
    { name: "Time Management", logo: "/logos/time.png", description: "Efficiently balancing R&D, delivery, and strategic work." },
    { name: "Adaptability", logo: "/logos/adaptability.png", description: "Rapidly learning and applying new technologies." },
    { name: "Networking", logo: "/logos/networking.png", description: "Building partnerships and meaningful professional relationships." },
    { name: "Mentorship", logo: "/logos/mentorship.png", description: "Empowering others to grow through technical guidance." },
    { name: "Social Entrepreneurship", logo: "/logos/social.png", description: "Using innovation to create local and global impact." },
    { name: "Rural Development Awareness", logo: "/logos/rural.png", description: "Grounded understanding of real-world agricultural and social systems." },
    { name: "Innovation Management", logo: "/logos/innovation.png", description: "Leading lean R&D processes from ideation to execution." },
    { name: "Product Development Awareness", logo: "/logos/product.png", description: "Understanding lifecycle and strategy of impactful tech products." }
  ]
};

export default function SkillsPage() {
  return (
    <main itemScope itemType="https://schema.org/WebPage">
      <header className="her">
        <h1 className="skillTitle" itemProp="headline">
          Tools Powering Our Work
        </h1>
        <p className="skillSubtitle" itemProp="description">
          Core technologies and practices powering Ithoka Microsystems — AI, Blockchain, Fullstack engineering, and innovation.
        </p>
      </header>

      {Object.keys(skills).map((category) => (
        <section key={category} className="categorySection" aria-labelledby={`heading-${category}`}>
          <header className="categoryHeader">
            <h2 id={`heading-${category}`} itemProp="about">{category}</h2>
          </header>
          <ul className="skillsGrid">
            {skills[category as keyof typeof skills].map((skill) => (
              <li key={skill.name} className="skillCard" itemScope itemType="https://schema.org/DefinedTerm">
                <div className="skillLogo">
                  <Image src={skill.logo} alt={`${skill.name} logo`} width={60} height={60} />
                </div>
                <p className="skillName" itemProp="name">{skill.name}</p>
                <p className="skillDesc" itemProp="description">{skill.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="ctaSection">
        <h2>Work With Us</h2>
        <p>Ready to collaborate or start a new project? Let’s build impactful solutions together.</p>
        <Link href="/contact" className="ctaBtn" aria-label="Contact Ithoka Microsystems to start a project">
          Get in Touch
        </Link>
      </section>

      {/* --- Structured Data --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Ithoka Microsystems Core Skills',
            description:
              'Technologies and practices that power Ithoka Microsystems — AI, Blockchain, Frontend, Backend, DevOps, and Team culture.',
            itemListElement: Object.entries(skills).flatMap(([, items], categoryIndex) =>
              items.map((skill, skillIndex) => ({
                '@type': 'ListItem',
                position: categoryIndex * 100 + skillIndex + 1,
                name: skill.name,
                description: skill.description,
                url: `https://ithoka.com/skills#${encodeURIComponent(skill.name)}`
              }))
            )
          })
        }}
      />

      <style jsx>{`
        .her {
          text-align: center;
          margin-bottom: 2rem;
        }
        .skillTitle {
          font-size: 2.5rem;
          color: #00aaff;
        }
        .skillSubtitle {
          font-size: 1.2rem;
          color: #ccc;
        }
        .categorySection {
          margin-bottom: 3rem;
        }
        .categoryHeader {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }
        .categoryHeader h2 {
          font-size: 2rem;
          color: #00aaff;
        }
        .skillsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1.5rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .skillCard {
          background-color: #111;
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .skillCard:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 170, 255, 0.3);
        }
        .skillName {
          margin-top: 0.5rem;
          font-weight: bold;
          color: #fff;
        }
        .skillDesc {
          font-size: 0.85rem;
          margin-top: 0.3rem;
          color: #ccc;
        }
        .ctaSection {
          text-align: center;
          margin-top: 40px;
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
      `}</style>
    </main>
  );
}
