import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import TrustStrip from "@/components/ui/TrustStrip";
import MapInfrastructure from "@/components/ui/MapInfrastructure";

// Statically import images for LCP optimization & native blur placeholders
import heroImg from "../../public/images/hero-aerial.jpg";
import controlTowerImg from "../../public/images/home-control-tower.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexlogistics.com"),
  title: "APEX FREIGHTWAYS LIMITED | Enterprise Logistics & Freight Forwarding Tanzania",
  description: "Secure, real-time telemetry-protected freight forwarding, customs clearance, and secure warehousing across Dar es Salaam, Mwanza, Dodoma, Arusha, Tanga, and Mbeya.",
  openGraph: {
    title: "APEX FREIGHTWAYS LIMITED | Enterprise Logistics & Freight Forwarding Tanzania",
    description: "Secure, real-time telemetry-protected freight forwarding, customs clearance, and secure warehousing across Tanzania.",
    type: "website",
    locale: "en_US",
    url: "https://apexlogistics.com",
    siteName: "APEX FREIGHTWAYS LIMITED",
    images: [
      {
        url: "/images/apex-logo-dark.png",
        width: 800,
        height: 600,
        alt: "APEX FREIGHTWAYS LIMITED Logo",
      },
    ],
  },
};

export default function Home() {
  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "APEX FREIGHTWAYS LIMITED",
    "image": "https://apexlogistics.com/images/apex-logo-dark.png",
    "@id": "https://apexlogistics.com/#organization",
    "url": "https://apexlogistics.com",
    "telephone": "+255716390806",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nelson Mandela Road, Plot 14",
      "addressLocality": "Dar es Salaam",
      "addressCountry": "TZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.8163,
      "longitude": 39.2778
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.linkedin.com/company/apex-logistics"
    ]
  };

  const pillars = [
    {
      title: "Road Freight",
      description: "Primary and secondary road haulage with GPS telemetry protection, ensuring safe border crossing and local compliance.",
      badge: "GPS Protected",
      align: "left",
      icon: (
        <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      title: "Sea & Air",
      description: "Direct ocean and air freight routing connecting global corridors into Tanzanian ports with continuous tracking.",
      badge: "Global Lanes",
      align: "center",
      icon: (
        <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M11 3.935V5.5A2.5 2.5 0 0013.5 8h.5" />
        </svg>
      )
    },
    {
      title: "Customs Clearance",
      description: "Pre-clearing documentation, duty processing, and tariff compliance managed by certified clearing agents.",
      badge: "Licensed Clearing",
      align: "left",
      icon: (
        <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Secure Warehousing",
      description: "High-security warehousing hubs offering cold-chain storage and real-time inventory management.",
      badge: "50,000 sq ft Capacity",
      align: "center",
      icon: (
        <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-navy font-sans">
      {/* JSON-LD Script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. CINEMATIC HERO (The 3-Second Hook) */}
      <header className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        {/* Cinematic Backdrop Image with blur placeholders */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="APEX heavy freight terminal in Tanzania"
            fill
            priority
            placeholder="blur"
            className="object-cover"
          />
          {/* 80% Deep Navy Overlay for instant legibility */}
          <div className="absolute inset-0 bg-navy/80 z-10" />
        </div>

        {/* Hero Copy (Strictly Centered) */}
        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-tight animate-fade-in">
            Your Cargo. Anywhere in Tanzania. On Time.
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
            Trusted freight, customs, and warehousing from the Port of Dar es Salaam to final-mile delivery in Arusha, Dodoma, and Mwanza.
          </p>

          {/* Centered CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded bg-amber text-navy hover:bg-amber-hover hover:-translate-y-0.5 active:scale-95 transition-all duration-150 cursor-pointer shadow-md"
            >
              Request Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-sm font-semibold rounded text-white bg-transparent hover:bg-white/[0.05] hover:border-white/80 hover:-translate-y-0.5 active:scale-95 transition-all duration-150 cursor-pointer"
            >
              Explore Our Fleet
            </a>
          </div>
        </div>
      </header>

      {/* 3. THE TRUST STRIP */}
      <TrustStrip />

      {/* 4. CORE PILLARS (Borderless with multi-layered low-opacity shadows) */}
      <section id="services" className="bg-white py-24 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-bold text-amber tracking-widest uppercase">
              Operational Competencies
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold tracking-tight text-navy uppercase">
              Core Supply Chain Infrastructure
            </h2>
            <p className="mt-4 text-slate-500 font-light text-base sm:text-lg">
              Operating secure assets across roadways, ocean lanes, cargo hubs, and custom checkpoints.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => {
              const isLeftAligned = pillar.align === "left";

              return (
                <div
                  key={index}
                  className={`flex flex-col bg-white p-8 hover-lift shadow-navy-tint shadow-navy-tint-hover transition-premium ${
                    isLeftAligned ? "items-start text-left" : "items-center text-center"
                  }`}
                >
                  {/* Alternating top indicators */}
                  {!isLeftAligned && (
                    <span className="text-[10px] font-bold text-amber tracking-widest uppercase mb-4 bg-amber/5 px-2.5 py-1 rounded">
                      {pillar.badge}
                    </span>
                  )}

                  <div className={`p-4 bg-slate-50 text-navy mb-6 rounded-none`}>
                    {pillar.icon}
                  </div>

                  <h3 className="text-xl font-display font-bold text-navy mb-4">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Alternating bottom indicators */}
                  {isLeftAligned && (
                    <div className="mt-auto pt-4 border-t border-slate-100 w-full flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {pillar.badge}
                      </span>
                      <svg className="w-4 h-4 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. GEOGRAPHIC INFRASTRUCTURE (Deep Navy Vector Map) */}
      <MapInfrastructure />

      {/* SECURE DISPATCH SPLIT SECTION */}
      <section id="about" className="relative bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Image (statically imported, blur placeholder) */}
            <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[450px]">
              <Image
                src={controlTowerImg}
                alt="APEX fleet control room ops"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover shadow-navy-tint"
              />
            </div>

            {/* Right Copy */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
              <span className="text-xs font-bold text-amber tracking-widest uppercase">
                Enterprise Logistics Network
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold tracking-tight text-navy uppercase">
                High-Trust Supply Chains
              </h2>
              <p className="mt-6 text-base text-slate-500 leading-relaxed font-light">
                APEX operates dedicated cargo assets connected across critical trade corridors. We bypass local friction through automated routing audits, pre-cleared port documentation, and certified warehousing hubs.
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded bg-navy text-white hover:bg-slate-800 hover:-translate-y-0.5 active:scale-95 transition-all duration-150 cursor-pointer shadow-md"
                >
                  Consult Cargo Experts
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (QUOTE REQUEST) */}
      <section id="contact" className="bg-slate-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-none shadow-navy-tint p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl font-display font-bold text-navy tracking-tight uppercase">
                Request a Cargo Quote
              </h2>
              <p className="mt-3 text-sm text-slate-500 font-light">
                Connect with our commercial dispatch team for bulk freight pricing or enterprise contract solutions.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <Footer />
    </div>
  );
}
