"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const portfolioLinks = [
  { name: "Website Development", href: "/portfolio/website-development" },
  { name: "Video Editing",       href: "/portfolio/video-editing" },
  { name: "Animations",          href: "/portfolio/animations" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [mobileMenuOpen,   setMobileMenuOpen]   = useState(false);
  const [portfolioMenuOpen, setPortfolioMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trap focus in mobile menu & close on Escape
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
      "a, button, [tabindex]:not([tabindex='-1'])"
    );
    firstMobileLinkRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
      if (e.key === "Tab" && focusable && focusable.length) {
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home",      href: "/" },
    { name: "About",     href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Insights",  href: "/insights" },
    { name: "Contact",   href: "/contact" },
  ];

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  function close() {
    setMobileMenuOpen(false);
    setPortfolioMenuOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F6F2]/95 py-2 border-b border-[#101827]/10 shadow-md backdrop-blur-sm"
          : "bg-[#F7F6F2] py-3"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Caleb Oluwapelumi — Home">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-1 ring-[#101827]/10 bg-white">
            <Image src="/logo.jpg" alt="CB" fill className="object-cover" priority />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                {link.name === "Portfolio" ? (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setPortfolioMenuOpen((open) => !open)}
                      aria-expanded={portfolioMenuOpen}
                      aria-haspopup="true"
                      className={`nav-link-underline text-sm font-semibold tracking-[0.18em] uppercase transition-colors ${
                        isActive(link.href) ? "text-[#101827]" : "text-[#667085] hover:text-[#101827]"
                      }`}
                      data-active={isActive(link.href) ? "true" : undefined}
                    >
                      {link.name}
                    </button>
                    {/* Dropdown */}
                    <div
                      className={`absolute left-0 top-full mt-3 w-64 rounded-2xl border border-[#101827]/10 bg-white p-3 shadow-xl transition-all duration-200 ${
                        portfolioMenuOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      role="menu"
                    >
                      {portfolioLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setPortfolioMenuOpen(false)}
                          role="menuitem"
                          className={`block rounded-xl px-4 py-3 text-sm font-medium tracking-wide transition-colors ${
                            isActive(item.href)
                              ? "bg-[#101827] text-white"
                              : "text-[#182230] hover:bg-[#F7F6F2]"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`nav-link-underline text-sm font-semibold tracking-[0.18em] uppercase transition-colors ${
                      isActive(link.href) ? "text-[#101827]" : "text-[#667085] hover:text-[#101827]"
                    }`}
                    data-active={isActive(link.href) ? "true" : undefined}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="magnetic-btn bg-[#101827] text-[#F7F6F2] text-sm font-bold tracking-[0.18em] uppercase py-2.5 px-6 rounded-full hover:bg-[#22B8B0] hover:text-[#101827] transition-colors"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#101827] p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22B8B0] rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`lg:hidden absolute top-full left-0 w-full bg-[#F7F6F2] border-t border-[#101827]/10 shadow-2xl transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
        aria-hidden={!mobileMenuOpen}
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="p-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-2 text-center" role="list">
            {navLinks.map((link, i) => (
              <li key={link.name} style={{ transitionDelay: mobileMenuOpen ? `${i * 50}ms` : "0ms" }}>
                {link.name === "Portfolio" ? (
                  <div className="border border-[#101827]/10 rounded-2xl p-3 bg-white">
                    <Link
                      href={link.href}
                      ref={i === 0 ? firstMobileLinkRef : undefined}
                      className="block text-lg font-semibold tracking-[0.18em] uppercase text-[#101827] py-2"
                      onClick={close}
                    >
                      Portfolio
                    </Link>
                    <div className="mt-2 space-y-2">
                      {portfolioLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-sm font-medium tracking-[0.12em] uppercase text-[#667085] hover:text-[#101827] py-2 transition-colors"
                          onClick={close}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    ref={i === 0 ? firstMobileLinkRef : undefined}
                    className="block text-lg font-semibold tracking-[0.18em] uppercase text-[#667085] hover:text-[#101827] py-2 transition-colors"
                    onClick={close}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block w-full bg-[#101827] text-[#F7F6F2] font-bold tracking-[0.18em] uppercase py-4 rounded-full hover:bg-[#22B8B0] hover:text-[#101827] transition-colors text-center"
                onClick={close}
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
