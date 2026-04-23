"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Brand Kami", href: "#cerita" },
    { label: "Produk Kami", href: "#menu" },
    { label: "Berita Terkini", href: "#berita" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-xl shadow-md" : "bg-white"
    } border-b border-black/5`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img src="/Jiwa-Group-Logo_JJ-PURPLE.png" alt="Jiwa Group Logo" className="h-9 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 ml-auto items-center">
            {menuItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-sm font-bold text-[#222222] hover:text-[#FF3548] uppercase tracking-wide transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#222222] p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 origin-top ${
        isOpen ? "scale-y-100 opacity-100 visibility-visible" : "scale-y-0 opacity-0 visibility-hidden h-0 overflow-hidden"
      }`}>
        <nav className="flex flex-col p-4 gap-4">
          {menuItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-[#222222] hover:text-[#FF3548] uppercase tracking-wide p-2 border-b border-gray-50 last:border-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
