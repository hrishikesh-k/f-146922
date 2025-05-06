'use client';

import Link from 'next/link';
import { useState } from 'react';

import LanguageSwitcher from '../LanguageSwitcher';
import ThemeSelector from '../ThemeSelector';

export default function MobileMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const onBlur = () => {
    setTimeout(() => {
      setMenuOpen(false);
    }, 100);
  };
  return (
    <div onBlur={onBlur} onMouseLeave={onBlur} className="flex content-center h-full">
      <button
        aria-label="open mobile menu"
        onClick={() => setMenuOpen(true)}
        className="cursor-pointer hover:opacity-60 transition"
      >
        <div className="bg-textColor w-8 h-1"></div>
        <div className="bg-textColor w-8 h-1 mt-1"></div>
        <div className="bg-textColor w-8 h-1 mt-1"></div>
      </button>

      {isMenuOpen && (
        <div className="fixed text-right fade-in w-40 top-13 right-0 bg-primary border-b-4 border-l-4 p-4">
          <div className="text-lg py-1 hover:opacity-80 transition">
            <Link aria-label="About section" onClick={onBlur} href="#about-section">
              About
            </Link>
          </div>
          <div className="text-lg py-1 hover:opacity-80 transition">
            <Link aria-label="Projects section" onClick={onBlur} href="#main-projects-section">
              Projects
            </Link>
          </div>
          <div className="text-lg py-1 hover:opacity-80 transition">
            <Link aria-label="Intranets section" onClick={onBlur} href="#intranets-section">
              Intranets
            </Link>
          </div>
          <div className="text-lg py-1 hover:opacity-80 transition">
            <Link aria-label="Skills section" onClick={onBlur} href="#skills-section">
              Skills
            </Link>
          </div>
          <div className="text-lg py-1 hover:opacity-80 transition">
            <Link aria-label="Experience section" onClick={onBlur} href="#experience-section">
              Experience
            </Link>
          </div>
          <div className="text-lg py-1 hover:opacity-80 transition">
            <Link aria-label="Design section" onClick={onBlur} href="#design-section">
              Design
            </Link>
          </div>
          <div className="text-lg py-1 hover:opacity-80 transition">
            <Link aria-label="Contact section" onClick={onBlur} href="#contact-section">
              Contact
            </Link>
          </div>
          <div className="flex gap-3 justify-center mb-3 mt-3">
            <ThemeSelector />
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </div>
  );
}
