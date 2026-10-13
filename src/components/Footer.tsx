import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-slate-300 font-sans border-t border-navy-light pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* LOGO ROW */}
        <div className="mb-12 border-b border-navy-light pb-8">
          <div className="relative h-12 w-[60px]">
            <Image
              src="/images/apex-logo-light.png"
              alt="APEX FREIGHTWAYS LIMITED Logo"
              fill
              sizes="60px"
              className="object-contain"
            />
          </div>
        </div>

        {/* 4-COLUMN RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-16">
          
          {/* Column 1 — Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors duration-150 block">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-400 hover:text-white transition-colors duration-150 block">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm text-slate-400 hover:text-white transition-colors duration-150 block">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors duration-150 block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 — Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms-of-use" className="text-sm text-slate-400 hover:text-white transition-colors duration-150 block">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-white transition-colors duration-150 block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-slate-400 hover:text-white transition-colors duration-150 block">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-sm text-slate-400 hover:text-white transition-colors duration-150 block">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <div className="space-y-3.5 text-sm text-slate-400">
              <span className="font-bold text-white block">APEX FREIGHTWAYS LIMITED</span>
              
              <a href="mailto:operations@apexfreight.co.tz" className="flex items-center gap-2.5 hover:text-white transition-colors duration-150 group">
                <svg className="w-4 h-4 text-amber shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate">operations@apexfreight.co.tz</span>
              </a>

              <a href="tel:+255716390806" className="flex items-center gap-2.5 hover:text-white transition-colors duration-150">
                <svg className="w-4 h-4 text-amber shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+255 716 390 806</span>
              </a>

              <div className="flex items-start gap-2.5">
                <svg className="w-4.5 h-4.5 text-amber shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Nelson Mandela Road, Plot 14, Dar es Salaam, Tanzania</span>
              </div>

              <div className="flex items-start gap-2.5">
                <svg className="w-4.5 h-4.5 text-amber shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  Monday – Friday<br />
                  08:00 – 17:00 EAT
                </span>
              </div>
            </div>
          </div>

          {/* Column 4 — Social / Follow Us */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Follow Us</h3>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              Stay connected with our global systems cargo updates and logistics corridor releases.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded bg-navy-light text-slate-400 hover:text-amber hover:bg-navy transition-all duration-150 cursor-pointer"
                aria-label="APEX LinkedIn Profile"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded bg-navy-light text-slate-400 hover:text-amber hover:bg-navy transition-all duration-150 cursor-pointer"
                aria-label="APEX Facebook Page"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded bg-navy-light text-slate-400 hover:text-amber hover:bg-navy transition-all duration-150 cursor-pointer"
                aria-label="APEX Instagram Feed"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded bg-navy-light text-slate-400 hover:text-amber hover:bg-navy transition-all duration-150 cursor-pointer"
                aria-label="APEX X (Twitter) Feed"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-navy-light text-xs text-slate-500 text-center space-y-2">
          <p>© {currentYear} APEX FREIGHTWAYS LIMITED. All Rights Reserved.</p>
          <p className="text-slate-600 font-light">
            Delivering reliable, technology-driven logistics solutions across East Africa.
          </p>
        </div>

      </div>
    </footer>
  );
}
