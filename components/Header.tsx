
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-2">
      {NAV_LINKS.map(link => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            onClick={() => setIsOpen(false)}
            className={`font-semibold text-sm px-3 py-2 rounded-md transition-colors duration-300 ${
              activeSection === link.id
                ? 'text-cyan-400 bg-cyan-400/10'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 h-20 backdrop-blur-lg bg-slate-900/40 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 h-full flex justify-between items-center">
        <a href="#home" className="font-mono text-cyan-400 font-bold tracking-wide">
          KATLEGO MAKETE
        </a>
        <nav className="hidden md:block">
          {navLinks}
        </nav>
        <button
          className="md:hidden text-cyan-400 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl pb-6">
          <nav className="mx-auto max-w-6xl px-6">{navLinks}</nav>
        </div>
      )}
    </header>
  );
};

export default Header;
