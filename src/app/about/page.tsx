import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Statically import about hero background
import aboutHeroImg from "../../../public/images/about-hero-bg.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexlogistics.com"),
  title: "Grounded Logistics Infrastructure | About APEX FREIGHTWAYS LIMITED",
  description: "Learn about APEX FREIGHTWAYS LIMITED's asset-backed corporate profile, operational milestones, safety commitments, and regional leadership directory.",
};

export default function About() {
  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      desc: "APEX Logistics systems established to service regional agricultural cargo routes.",
    },
    {
      year: "2018",
      title: "Fleet Expansion",
      desc: "Acquired primary long-haul vehicles, expanding transport capacity to Tanga.",
    },
    {
      year: "2021",
      title: "Border Integration",
      desc: "In-house clearing agency nodes opened at critical Tanzanian checkpoints.",
    },
    {
      year: "2025",
      title: "Consolidation",
      desc: "Merged Tanga and Dar es Salaam networks into a unified domestic corridor ledger.",
    },
  ];

  const leaders = [
    { initials: "JM", name: "James Mwangi", title: "Director of Port Operations" },
    { initials: "SK", name: "Sarah Kasinga", title: "Chief of Border Compliance" },
    { initials: "AM", name: "Abdi Musa", title: "Head of Fleet & Telemetry" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-navy font-sans">
      {/* 1. FLOATING NAVBAR */}
      <Navbar />

      {/* SECTION 1: THE AUTHORITY HERO */}
      <header className="relative min-h-[60vh] flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <Image
            src={aboutHeroImg}
            alt="APEX logistics fleet operations yard"
            fill
            priority
            placeholder="blur"
            className="object-cover"
          />
          {/* 70% Deep Navy Overlay */}
          <div className="absolute inset-0 bg-[#0B1121]/70 z-10" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Built on Precision. Driven by Infrastructure.
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
            APEX operates one of the most strictly controlled, asset-backed logistics networks across the Tanzanian corridor.
          </p>
        </div>
      </header>

      {/* SECTION 2: THE CORPORATE TIMELINE (MILESTONES) */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber tracking-widest uppercase">
              Corporate History
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-display font-bold tracking-tight text-navy uppercase">
              Operational Milestones
            </h2>
          </div>

          {/* Stepper Timeline UI */}
          <div className="relative w-full max-w-5xl mx-auto px-4 lg:px-0">
            {/* Desktop Horizontal Amber Line */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-amber z-0 hidden lg:block" />

            {/* Mobile Vertical Amber Line */}
            <div className="absolute top-[16px] bottom-[16px] left-[27px] w-[2px] bg-amber z-0 lg:hidden" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {milestones.map((ms, index) => (
                <div
                  key={index}
                  className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center pl-16 lg:pl-0 relative group"
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-[14px] lg:left-1/2 lg:-translate-x-1/2 top-0 h-7 w-7 rounded-full bg-amber border-4 border-white shadow-sm flex items-center justify-center z-10 font-mono text-[9px] font-bold text-navy">
                    {index + 1}
                  </div>

                  {/* Copy Info */}
                  <div className="space-y-2 lg:pt-10">
                    <span className="text-xl sm:text-2xl font-display font-extrabold text-navy block">
                      {ms.year}
                    </span>
                    <h4 className="text-base font-bold text-slate-800 tracking-tight">
                      {ms.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-xs mx-auto">
                      {ms.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INFRASTRUCTURE & SAFETY COMMITMENT */}
      <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-100 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Operational Footprint */}
            <div className="space-y-6 text-left">
              <span className="text-xs font-bold text-amber tracking-widest uppercase">
                Asset Backed
              </span>
              <h3 className="text-3xl font-display font-bold text-navy tracking-tight uppercase">
                Operational Footprint
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Unlike asset-light brokerages, APEX controls the core infrastructure of the cargo routing. We own and operate dry vans, heavy low-loaders, and temperature reefers directly. Our permanent clearing agents are stationed at major port checkpoints, supported by logistics staging yards located in Mwanza, Tanga, and Dar es Salaam.
              </p>
            </div>

            {/* Right Column: Safety Standards */}
            <div className="space-y-8 text-left bg-white border border-slate-100 p-8 shadow-sm rounded-none">
              <div>
                <span className="text-xs font-bold text-amber tracking-widest uppercase">
                  SLA Protection
                </span>
                <h3 className="text-2xl font-display font-bold text-navy tracking-tight uppercase mt-2">
                  Zero-Friction Standards
                </h3>
                <p className="mt-4 text-sm text-slate-500 font-light leading-relaxed">
                  We enforce structural vehicle inspections and strict load safety certifications. All transits remain protected under active GPS telemetry protocols and compliance logs to guarantee freight arrival parameters.
                </p>
              </div>

              {/* Row of 3 Icons */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {/* Icon 1: GPS Shield */}
                <div className="flex flex-col items-center text-center p-3 bg-slate-50">
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="mt-2 text-[9px] font-bold text-slate-500 uppercase tracking-wider">GPS Shield</span>
                </div>

                {/* Icon 2: Document Compliance */}
                <div className="flex flex-col items-center text-center p-3 bg-slate-50">
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="mt-2 text-[9px] font-bold text-slate-500 uppercase tracking-wider">Compliance</span>
                </div>

                {/* Icon 3: Fleet Maintenance */}
                <div className="flex flex-col items-center text-center p-3 bg-slate-50">
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="mt-2 text-[9px] font-bold text-slate-500 uppercase tracking-wider">Maintenance</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: LEADERSHIP DIRECTORY (NO FAKE PHOTOS) */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber tracking-widest uppercase">
              APEX Officers
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-display font-bold tracking-tight text-navy uppercase">
              Operational Leadership
            </h2>
          </div>

          {/* 3-Column Grid with initials circle placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {leaders.map((leader, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                
                {/* Initials Placeholder design with snappy lift hover */}
                <div className="h-24 w-24 rounded-full bg-navy text-amber flex items-center justify-center text-2xl font-bold font-display shadow-sm group-hover:-translate-y-1 transition-transform duration-150 ease-in-out cursor-default select-none">
                  {leader.initials}
                </div>

                <div className="mt-6 space-y-1">
                  <h4 className="text-base font-bold text-navy">
                    {leader.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-light uppercase tracking-wider">
                    {leader.title}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: THE FINAL CTA */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-100 relative z-10">
        <div className="max-w-4xl mx-auto bg-navy rounded-none p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl font-display font-bold tracking-tight uppercase">
              Partner with a logistics network that doesn't compromise.
            </h3>
            <p className="mt-3 text-slate-300 text-xs sm:text-sm font-light max-w-md">
              Review our infrastructure capacities and request the full corporate capabilities portfolio today.
            </p>
            <div className="mt-8">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-semibold rounded bg-amber text-navy hover:bg-amber-hover active:scale-95 transition-all duration-150 cursor-pointer"
              >
                Request Corporate Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
