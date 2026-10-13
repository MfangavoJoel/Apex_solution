"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { openModal } = useQuoteModal();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return false; // The Home Exception: Never active by default on homepage
    return pathname === href;
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Tracking", href: "/tracking" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-full backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 font-sans px-4 py-2.5 md:px-8 md:py-4 ${
          isScrolled ? "bg-[#0B1121]/90" : "bg-[#0B1121]/70"
        }`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between">
            {/* Left: APEX Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="relative block h-10 w-[50px] md:h-14 md:w-[70px] hover:opacity-90 transition-opacity duration-200">
                <Image
                  src="/images/apex-logo-light.png"
                  alt="APEX Logo"
                  fill
                  priority
                  sizes="(max-width: 768px) 50px, 70px"
                  className="object-contain"
                />
              </Link>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative py-1 text-base font-normal tracking-wide transition-colors duration-200 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber after:transition-all after:duration-200 after:ease-in-out ${
                      active
                        ? "text-amber after:w-full"
                        : "text-white/90 hover:text-amber after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right: Solid Amber "Request Quote" CTA */}
            <div className="hidden md:block">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-full bg-amber text-navy hover:bg-amber-hover active:scale-95 transition-all duration-150 cursor-pointer"
              >
                Request Quote
              </button>
            </div>

            {/* Mobile Menu Icon Toggle */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded text-white hover:text-amber focus:outline-none transition-colors duration-150"
                aria-label="Open full-screen menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile: Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-50 bg-navy text-white font-sans flex flex-col justify-between p-8 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative block h-10 w-[50px] hover:opacity-90 transition-opacity duration-200"
          >
            <Image
              src="/images/apex-logo-light.png"
              alt="APEX Logo"
              fill
              sizes="50px"
              className="object-contain"
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            type="button"
            className="p-2 rounded text-white hover:text-amber focus:outline-none transition-colors duration-150"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links List */}
        <div className="flex flex-col space-y-6 my-auto text-left">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-light tracking-wide transition-colors duration-150 ${
                  active ? "text-amber" : "text-white hover:text-amber"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Sticky Mobile Overlay Bottom */}
        <div className="w-full">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openModal();
            }}
            className="block w-full text-center py-4 bg-amber text-navy font-bold rounded-none hover:bg-amber-hover transition-colors duration-150"
          >
            Request Quote
          </button>
        </div>
      </div>

      {/* Sticky Mobile Bottom Bar removed for better spacing and page flow */}
    </>
  );
}
