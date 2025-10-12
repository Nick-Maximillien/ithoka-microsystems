'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerContainer">
        <p>
          &copy; {year} Ithoka Microsystems | All rights reserved.
        </p>
        <div className="footerLinks">
          <Link href="/founder-story">About</Link>
          <Link href="/ai-microservices">Services</Link>
          <Link href="/ai-blockchain-projects">Client and R&D Projects</Link>
          <Link href="/expertise">Expertise</Link>
          <Link href="/team">Core team</Link>
          <Link href="/contact">Contact us</Link>
        </div>
      </div>
    </footer>
  );
}
