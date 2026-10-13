"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Statically import images for pre-rendering LCP efficiency & blur placeholders
import heroImg from "../../../public/images/contact-hero-bg.jpg";
import agricultureImg from "../../../public/images/industry-agriculture.jpg";
import fmcgImg from "../../../public/images/industry-retail.jpg";
import miningImg from "../../../public/images/industry-mining.jpg";
import energyImg from "../../../public/images/industry-construction.jpg";

export default function Industries() {
  const [activeTab, setActiveTab] = useState("agriculture");

  const sectors = [
    {
      id: "agriculture",
      tabLabel: "Agriculture & Commodities",
      title: "Temperature-Controlled Bulk Haulage for Agriculture",
      challenge: "Fluctuating seasonal yields and fragile, perishable crop commodities require immediate transit allocations and exact climate protection to reach ports without spoiling.",
      solution: "APEX supplies seasonal reefer containers equipped with real-time temperature tracking probes and priority dispatch routes. We clear agricultural permits at border checks in under 12 hours.",
      capabilities: [
        "GPS-monitored refrigerated cargo reefers",
        "Expedited transit corridors directly to Dar es Salaam Port",
        "Automated phyto-sanitary compliance certificate filing",
      ],
      image: agricultureImg,
      alt: "APEX agricultural cargo transportation",
    },
    {
      id: "manufacturing",
      tabLabel: "Manufacturing & FMCG",
      title: "Optimized Last-Mile Supply Chains for Manufacturing",
      challenge: "Manufacturing plants and Fast-Moving Consumer Goods (FMCG) retailers depend on steady, predictable raw material inflows and finished product outflows to maintain sales channels.",
      solution: "We provide high-frequency container routing and integrated warehousing staging yards. Our inventory telemetry interfaces directly with your enterprise resources planning systems.",
      capabilities: [
        "Scheduled daily distribution routing across major nationwide corridors",
        "Highway-adjacent staging hubs for distribution",
        "Seamless cargo APIs for real-time inventory count checks",
      ],
      image: fmcgImg,
      alt: "APEX retail manufacturing distribution fleet",
    },
    {
      id: "mining",
      tabLabel: "Mining & Metals",
      title: "Heavy-Lift Transport Infrastructure for Mining Operations",
      challenge: "Mining hubs are frequently located in remote, infrastructure-sparse areas, requiring massive heavy machinery inflows and bulk mineral outflows across difficult terrains.",
      solution: "APEX operates flatbeds, low-loaders, and heavy-duty multi-axle trailers. We coordinate specialized border clearance permissions and run convoy telemetry checks to ensure route safety.",
      capabilities: [
        "Multi-axle heavy-duty low-loaders for dump trucks",
        "Dedicated remote border clearances and escort logistics",
        "Heavy load structural route checks and bridge safety audits",
      ],
      image: miningImg,
      alt: "APEX heavy mining equipment trailer transit",
    },
    {
      id: "energy",
      tabLabel: "Energy & Infrastructure",
      title: "Critical Cargo Transport Solutions for Energy Project Sites",
      challenge: "Wind turbines, solar farms, and power grid projects depend on synchronized component deliveries to remote construction sites, where delays halt expensive engineering teams.",
      solution: "We specialize in project-site delivery sequencing. We coordinate clearing, transport, and laydown logistics to match your site crew schedules exactly, avoiding storage costs.",
      capabilities: [
        "Out-of-gauge (OOG) shipping and laydown management",
        "Clearance of specialized energy equipment duties",
        "Project-level scheduling tailored to developer benchmarks",
      ],
      image: energyImg,
      alt: "APEX energy infrastructure cargo delivery site",
    },
  ];

  const currentSector = sectors.find((s) => s.id === activeTab) || sectors[0];

  return (
    <div className="flex flex-col min-h-screen bg-white text-navy font-sans">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. COMPACT CINEMATIC HERO */}
      <header className="relative min-h-[45vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="APEX logistics cargo landscape"
            fill
            priority
            placeholder="blur"
            className="object-cover"
          />
          {/* Heavy 80% Navy Overlay */}
          <div className="absolute inset-0 bg-[#0B1121]/80 z-10" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            Industries Supported Across Tanzania
          </h1>
          <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-3xl font-light leading-relaxed">
            We engineer customized supply chain and compliance structures for the nation's most demanding economic sectors.
          </p>
        </div>
      </header>

      {/* 3. INTERACTIVE TAB CONTROLS */}
      <section className="bg-white border-b border-slate-100 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {sectors.map((sector) => {
              const isActive = activeTab === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveTab(sector.id)}
                  className={`px-5 py-3 text-xs sm:text-sm font-semibold tracking-wider transition-all duration-150 ease-in-out cursor-pointer rounded-none ${
                    isActive
                      ? "bg-amber text-navy border-transparent"
                      : "bg-transparent text-navy border border-navy hover:bg-slate-50"
                  }`}
                >
                  {sector.tabLabel}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC CONTENT AREA */}
      <main className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* 50/50 Split Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: The Pitch */}
            <div className="space-y-6 text-left">
              <span className="text-xs font-bold text-amber tracking-widest uppercase">
                Sector Showcase
              </span>
              <h2 className="text-3xl font-display font-bold text-navy tracking-tight uppercase leading-tight">
                {currentSector.title}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    The Challenge
                  </h4>
                  <p className="mt-1 text-sm text-slate-500 font-light leading-relaxed">
                    {currentSector.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    The APEX Solution
                  </h4>
                  <p className="mt-1 text-sm text-slate-500 font-light leading-relaxed">
                    {currentSector.solution}
                  </p>
                </div>
              </div>

              {/* Capabilities Bullets */}
              <div className="pt-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Key Capabilities
                </h4>
                <ul className="space-y-2.5">
                  {currentSector.capabilities.map((cap, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-slate-600 font-light">
                      <svg className="w-5 h-5 text-amber shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side: The Visual */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-lg overflow-hidden shadow-navy-tint">
              <Image
                src={currentSector.image}
                alt={currentSector.alt}
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </main>

      {/* 5. CLOSING NUDGE */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-100 relative z-10">
        <div className="max-w-4xl mx-auto bg-navy rounded-none p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl font-display font-bold tracking-tight uppercase">
              Don't see your sector? We build custom routing solutions.
            </h3>
            <p className="mt-3 text-slate-300 text-xs sm:text-sm font-light max-w-md">
              Connect with our project dispatch team to review customized clearance logistics and fleet assignments.
            </p>
            <div className="mt-8">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-semibold rounded bg-amber text-navy hover:bg-amber-hover active:scale-95 transition-all duration-150 cursor-pointer"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <Footer />
    </div>
  );
}
