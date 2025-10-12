'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Header() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).classList.contains('menuIcon')
      ) {
        setDropDownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className="header"
      style={{ position: 'sticky', top: 0, zIndex: 1000 }}
      role="banner"
    >
      <div className="row headerContainer">
        <div className="head">

          {/* Dropdown menu (mobile) */}
          <nav
            className="nav dropdown-nav"
            aria-label="Mobile Navigation Menu"
          >
            <ul className="theMenu">
              <li className="dropdown-container" style={{ position: 'relative' }}>
                <button
                  className="menu"
                  aria-haspopup="true"
                  aria-expanded={dropDownOpen}
                  aria-label="Toggle mobile menu"
                  onClick={() => setDropDownOpen(!dropDownOpen)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <Image
                    className="dropbtn menuIcon"
                    src="/images/menu.png"
                    alt="Open Menu"
                    width={35}
                    height={35}
                  />
                </button>

                {mounted && dropDownOpen &&
                  createPortal(
                    <ul
                      ref={dropdownRef}
                      className="dropdown-list"
                      style={{
                        position: 'absolute',
                        top: '70px',
                        right: '20px',
                        backgroundColor: 'white',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        listStyle: 'none',
                        padding: '10px 0',
                        minWidth: '180px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                        zIndex: 2000,
                      }}
                    >
                      <li className="menuItem"><Link href="/">Home</Link></li>
                      <li className="menuItem"><Link href="/founder-story">About Ithoka Microsystems</Link></li>
                      <li className="menuItem"><Link href="/ai-microservices">AI & Blockchain Services</Link></li>
                      <li className="menuItem"><Link href="/ai-blockchain-projects">Client & R&D Projects</Link></li>
                      <li className="menuItem"><Link href="/expertise">Technical Expertise</Link></li>
                      <li className="menuItem"><Link href="/team">Core Team</Link></li>
                      <li className="menuItem"><Link href="/contact">Contact Us</Link></li>
                    </ul>,
                    document.body
                  )
                }
              </li>
            </ul>
          </nav>

          {/* Inline menu (desktop) */}
          <nav
            className="nav inline-nav"
            aria-label="Primary Navigation Menu"
          >
            <ul className="inlineMenu">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/founder-story">About Ithoka Microsystems</Link></li>
              <li><Link href="/ai-microservices">AI & Blockchain Services</Link></li>
              <li><Link href="/ai-blockchain-projects">Client & R&D Projects</Link></li>
              <li><Link href="/expertise">Technical Expertise</Link></li>
              <li><Link href="/team">Core Team</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
