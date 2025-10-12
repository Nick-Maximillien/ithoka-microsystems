'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import emailjs from '@emailjs/browser';

const contacts = [
  { name: 'Email', href: 'mailto:nicholasmuthoki@gmail.com', logo: '/images/email1.png' },
  { name: 'WhatsApp', href: 'https://agrosight-ai.vercel.app/message', logo: '/images/whatsapp.png' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nicholas-muthoki-5642a7288', logo: '/images/linkedIn1.png' },
  { name: 'Notion', href: 'https://www.notion.so/Nick-s-Lab', logo: '/images/notion.png' },
  { name: 'GitHub', href: 'https://github.com/Nick-Maximillien', logo: '/images/github.png' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send('service_iwhkx4m', 'template_2qxlrws', formData)
      .then(() => {
        alert('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => alert('Failed to send message. Try again later.'));
  };

  // ✅ JSON-LD structured data for Google Knowledge Graph
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ithoka Microsystems',
    image: 'https://ithoka.vercel.app/og-image.png',
    description:
      'Ithoka Microsystems — AI & Blockchain engineering firm offering consulting, fullstack development, and R&D innovation.',
    url: 'https://ithoka.vercel.app/contact',
    email: 'nicholasmuthoki@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KE',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi',
    },
    sameAs: [
      'https://www.linkedin.com/in/nicholas-muthoki-5642a7288',
      'https://github.com/Nick-Maximillien',
      'https://www.notion.so/Nick-s-Lab',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'nicholasmuthoki@gmail.com',
        contactType: 'customer support',
        areaServed: 'KE',
        availableLanguage: ['English', 'Swahili'],
      },
    ],
  };

  return (
    <main className="contactPag" role="main">
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="her">
        <h1 className="contactTitle">Contact</h1>
        <p className="contactSub">
          Get in touch via email or social links below. We usually respond as soon as possible.
        </p>
      </header>

      <section className="contactIcons" aria-label="Contact Methods">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer external"
            aria-label={`Contact us via ${contact.name}`}
          >
            <Image
              src={contact.logo}
              alt={`${contact.name} icon`}
              width={50}
              height={50}
            />
            <span>{contact.name}</span>
          </a>
        ))}
      </section>

      <section aria-labelledby="contact-form">
        <h2 id="contact-form" className="sr-only">Contact Form</h2>
        <form onSubmit={handleSubmit} aria-label="Contact Form">
          <h2>Send a Message</h2>

          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </label>

          <label htmlFor="message">
            Message
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </label>

          <input type="submit" value="Send" aria-label="Send message" />
        </form>
      </section>

      <footer>
        <blockquote>
          “The future belongs to those who believe in the beauty of their dreams.”
          <p className="founder">– Eleanor Roosevelt</p>
        </blockquote>
      </footer>

      <style jsx>{`
        .contactPag {
          background-color: #000;
          color: #fff;
          font-family: 'Segoe UI', sans-serif;
          padding: 2rem 1rem;
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
        }
        .contactTitle {
          padding: 1rem;
        }
        .contactSub {
          padding: 1rem;
        }
        .contactIcons {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
          margin-bottom: 2.5rem;
        }
        .contactIcons a {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: #fff;
          transition: transform 0.2s ease-in-out;
        }
        .contactIcons a:hover {
          transform: scale(1.05);
        }
        .contactIcons span {
          margin-top: 0.5rem;
          font-size: 0.9rem;
        }
        form {
          max-width: 600px;
          margin: auto;
          background-color: #111;
          padding: 2rem;
          border-radius: 12px;
        }
        form h2 {
          color: #00aaff;
          margin-bottom: 1rem;
        }
        label {
          display: block;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }
        input[type='text'],
        input[type='email'],
        textarea {
          width: 100%;
          padding: 0.75rem;
          margin-top: 0.25rem;
          border-radius: 5px;
          border: 1px solid #333;
          background-color: #222;
          color: #fff;
          font-family: inherit;
        }
        textarea {
          height: 120px;
          resize: vertical;
        }
        input[type='submit'] {
          background-color: #00aaff;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          margin-top: 1rem;
        }
        input[type='submit']:hover {
          background-color: #0088cc;
        }
        blockquote {
          margin-top: 3rem;
          text-align: center;
          font-style: italic;
          font-size: 1rem;
          color: #ccc;
        }
        .founder {
          font-weight: bold;
          margin-top: 0.5rem;
          color: #00aaff;
        }
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          .hero p {
            font-size: 1rem;
          }
          form {
            padding: 1rem;
          }
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
      `}</style>
    </main>
  );
}
