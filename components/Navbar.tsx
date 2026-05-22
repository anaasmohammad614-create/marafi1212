'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#products', label: 'Products' },
  { href: '/#clients', label: 'Clients' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-primary/30 shadow-[0_0_10px_rgba(0,212,255,0.2)]">
            <Image src="/marafi-logo.jpeg" alt="MARAFI Logo" fill className="object-cover" />
          </div>
          <div>
            <div className="text-sm font-black tracking-widest text-white uppercase leading-none">MARAFI</div>
            <div className="text-[9px] text-primary/80 tracking-[0.2em] uppercase leading-none">Al Omran</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-primary transition-colors text-xs font-bold tracking-widest uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/#contact"
            className="bg-primary text-background text-xs font-black tracking-widest uppercase px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)]"
          >
            Get Quote
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-white/5 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-primary transition-colors text-sm font-bold tracking-widest uppercase py-2 border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-primary text-background text-xs font-black tracking-widest uppercase px-6 py-3 rounded-full text-center"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
