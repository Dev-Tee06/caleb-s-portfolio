"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white py-2 border-b border-gray-200 shadow-md" : "bg-white py-3"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo - Ensuring clear visibility */}
        <Link href="#home" className="flex items-center">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden">
            <Image src="/brand-logo.jpg" alt="CB" fill className="object-cover" priority />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm font-semibold tracking-wide uppercase text-gray-600 hover:text-black transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#contact" className="bg-black text-white text-sm font-bold tracking-wide uppercase py-2.5 px-6 rounded-none hover:bg-gray-800 transition-colors">
            Start a Project
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-black p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-2xl transition-all duration-300 ${mobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"}`}>
        <div className="p-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="block text-lg font-semibold tracking-wide uppercase text-gray-700 hover:text-black py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-6 border-t border-gray-200 mt-2">
              <Link 
                href="#contact" 
                className="block w-full bg-black text-white font-bold tracking-wide uppercase py-4 rounded-none hover:bg-gray-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

