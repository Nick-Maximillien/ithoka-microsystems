'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function Onboard() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setSubmitted(true);
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        alert('Failed to send. Please try again later.');
      });
  };

  return (
    <main className="onboardPage">
      <div className="heade">
        <h1>Start Your Project</h1>
        <p style={{ color: "white", margin: "20px" }}>Fill in the details below and we will get back to you promptly.</p>
      </div>

      {!submitted ? (
        <form ref={formRef} onSubmit={handleSubmit} className="onboardForm">
          {/* name */}
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          {/* email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />

          {/* project fields */}
          <textarea
            name="projectType"
            placeholder="Project Type / Description"
            required
          ></textarea>

          <textarea
            name="techStack"
            placeholder="Tech Stack / Preferred Tools"
          ></textarea>

          <textarea
            name="goals"
            placeholder="Goals / Deliverables / Duration"
          ></textarea>

          <textarea
            name="budget"
            placeholder="Budget / Approx. Cost"
          ></textarea>

          <button type="submit" className="ctaBtn" style={{ margin: "20px 0" }}>
            Submit Your Project
          </button>
        </form>
      ) : (
        <div className="thankYou">
          <h2>Thank you!</h2>
          <p>Your project details have been sent. I will review them and get back to you shortly.</p>
          <div>
          <Link href="/" className="ctaBtn">Back to Home</Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .onboardPage {
          max-width: 800px;
          margin: auto;
          padding: 2rem 1rem;
          font-family: 'Segoe UI', Roboto, sans-serif;
        }

        .header {
          text-align: center;
          margin-bottom: 2rem;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 1rem;
          color: #555;
        }

        .onboardForm {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        input, textarea {
          width: 100%;
          padding: 0.8rem;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 1rem;
          resize: vertical;
        }

        textarea {
          min-height: 80px;
        }

        .ctaBtn {
          display: inline-block;
          padding: 10px 20px;
          border-radius: 6px;
          background: #1a73e8;
          color: white;
          font-weight: bold;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .ctaBtn:hover {
          background: #0052cc;
        }

        .thankYou {
          text-align: center;
          padding: 2rem;
          border-radius: 12px;
          background: #f0f8ff;
          color: #003366;
        }

        @media (max-width: 768px) {
          h1 { font-size: 1.8rem; }
        }
      `}</style>
    </main>
  );
}
