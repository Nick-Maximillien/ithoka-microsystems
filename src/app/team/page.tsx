'use client';

import Image from 'next/image';
import Head from 'next/head';

export default function TeamPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ithoka Microsystems',
    description:
      'A lean, high-agency AI and blockchain company building invisible intelligence and decentralized systems with precision.',
    url: 'https://ithoka.vercel.app',
    logo: 'https://ithoka.vercel.app/images/logo.png',
    image: 'https://ithoka.vercel.app/images/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KE',
    },
    sameAs: [
      'https://github.com/Nick-Maximillien',
      'https://www.linkedin.com/in/nicholas-muthoki-5642a7288',
      'https://twitter.com/moseszico',
    ],
    founder: [
      {
        '@type': 'Person',
        name: 'Nicholas Muthoki',
        jobTitle: 'Founder & Lead Engineer',
        url: 'https://nick-maximillien.vercel.app',
        sameAs: [
          'https://github.com/Nick-Maximillien',
          'https://www.linkedin.com/in/nicholas-muthoki-5642a7288',
        ],
      },
      {
        '@type': 'Person',
        name: 'Moses Zico',
        jobTitle: 'Blockchain Partner & Cofounder',
        url: 'https://zicoblocks.xyz',
        sameAs: [
          'https://github.com/zico-hubb',
          'https://twitter.com/moseszico',
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Meet the Team | Ithoka Microsystems</title>
        <meta
          name="description"
          content="Meet the core team behind Ithoka Microsystems — innovators building invisible intelligence and decentralized systems for the future."
        />
        <meta
          name="keywords"
          content="Ithoka Microsystems, Nicholas Muthoki, Moses Zico, AI, blockchain, Kenya, decentralized systems, team"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>

      <main className="teamPage" role="main">
        <header>
          <h1 className="teamHeading">Meet the Core Team</h1>
          <p className="teamSubtitle">
            A lean, high-agency team focused on building invisible intelligence and decentralized systems with precision.
          </p>
        </header>

        <section className="teamGrid" aria-label="Team Members">
          {/* NICHOLAS */}
          <article className="teamMember" itemScope itemType="https://schema.org/Person">
            <figure>
              <Image
                src="/images/nick.jpg"
                alt="Portrait of Nicholas Muthoki"
                width={180}
                height={180}
                className="profileImage"
                style={{ borderRadius: '100px' }}
              />
            </figure>
            <h2 className="memberName" itemProp="name">Nick Muthoki</h2>
            <p className="memberRole" itemProp="jobTitle">Founder & Lead Engineer</p>
            <p className="memberDesc" itemProp="description">
              Founder and driving force behind Ithoka Microsystems — shaping product vision, strategy, and execution.<br />
              Leads system architecture, AI development, and deployment while steering the long-term mission of building intelligent, decentralized infrastructure for Africa and beyond.
            </p>

            <ul className="contactLinks" aria-label="Contact Nick Muthoki">
              <li><a href="mailto:nicholasmuthoki@gmail.com" className="contactBtn" style={{ color: 'white' }}>Email</a></li>
              <li><a href="https://github.com/Nick-Maximillien" target="_blank" rel="noopener noreferrer" itemProp="sameAs">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/nicholas-muthoki-5642a7288" target="_blank" rel="noopener noreferrer" itemProp="sameAs">LinkedIn</a></li>
              <li><a href="https://nick-maximillien.vercel.app" target="_blank" rel="noopener noreferrer" itemProp="url">Portfolio</a></li>
            </ul>
          </article>

          {/* MOSES */}
          <article className="teamMember" itemScope itemType="https://schema.org/Person">
            <figure>
              <Image
                src="/images/zico.jpg"
                alt="Portrait of Moses Zico"
                width={180}
                height={180}
                className="profileImage"
                style={{ borderRadius: '100px' }}
              />
            </figure>
            <h2 className="memberName" itemProp="name">Moses Zico</h2>
            <p className="memberRole" itemProp="jobTitle">Blockchain Partner & Cofounder</p>
            <p className="memberDesc" itemProp="description">
              Cofounder and blockchain lead at Ithoka Microsystems — architecting decentralized infrastructure and asset logic.<br />
              Focused on integrating blockchain systems, smart contracts, and trustless architecture while advancing the company’s mission of digital dignity and autonomous networks for real-world impact.
            </p>

            <ul className="contactLinks" aria-label="Contact Moses Zico">
              <li><a href="mailto:mosesszico@gmail.com" className="contactBtn" style={{ color: 'white' }}>Email</a></li>
              <li><a href="https://github.com/zico-hubb" target="_blank" rel="noopener noreferrer" itemProp="sameAs">GitHub</a></li>
              <li><a href="https://twitter.com/moseszico" target="_blank" rel="noopener noreferrer" itemProp="sameAs">X</a></li>
              <li><a href="https://zicoblocks.xyz" target="_blank" rel="noopener noreferrer" itemProp="url">Portfolio</a></li>
            </ul>
          </article>
        </section>

        <style jsx>{`
          .teamPage {
            background-color: #000;
            color: #fff;
            padding: 3rem 1rem;
            text-align: center;
            font-family: 'Segoe UI', sans-serif;
          }

          .teamHeading {
            font-size: 2.5rem;
            color: #00aaff;
            margin-bottom: 0.5rem;
          }

          .teamSubtitle {
            color: #ccc;
            font-size: 1.2rem;
            margin-bottom: 3rem;
          }

          .teamGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            justify-items: center;
          }

          .teamMember {
            background-color: #111;
            border-radius: 16px;
            padding: 2rem 1rem;
            max-width: 320px;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .teamMember:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 170, 255, 0.3);
          }

          .profileImage {
            border-radius: 100px;
            object-fit: cover;
          }

          .memberName {
            font-size: 1.5rem;
            color: #fff;
            margin-top: 1rem;
          }

          .memberRole {
            color: #00aaff;
            font-size: 1rem;
            margin: 0.5rem 0;
          }

          .memberDesc {
            font-size: 0.9rem;
            color: #ccc;
            margin-bottom: 1rem;
          }

          .contactLinks {
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.8rem;
          }

          .contactLinks li a {
            color: #00aaff;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.2s ease;
          }

          .contactLinks li a:hover {
            color: #0052cc;
          }

          .contactBtn {
            background: #00aaff;
            color: #000;
            padding: 6px 12px;
            border-radius: 6px;
            font-weight: bold;
          }

          .contactBtn:hover {
            background: #0052cc;
            color: #fff;
          }

          @media (max-width: 768px) {
            .teamHeading {
              font-size: 2rem;
            }
            .teamSubtitle {
              font-size: 1rem;
            }
          }
        `}</style>
      </main>
    </>
  );
}
