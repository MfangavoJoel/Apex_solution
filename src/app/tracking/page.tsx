"use client";

import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useQuoteModal } from "@/context/QuoteModalContext";
import dynamic from "next/dynamic";

const MapSimulation = dynamic(
  () => import("@/components/ui/MapSimulation"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[400px] w-full bg-slate-50 animate-pulse rounded-lg flex items-center justify-center text-slate-400 font-sans text-xs">
        Loading Map Coordinates...
      </div>
    ),
  }
);

export default function Tracking() {
  const [trackingId, setTrackingId] = useState("");
  const { openModal } = useQuoteModal();

  const handleTrackSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In development structural placeholder - does nothing
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-navy font-sans">
      {/* NAVBAR */}
      <Navbar />

      {/* SECTION 1: TRACKING HERO (THE GATEWAY) */}
      <header className="relative bg-navy text-white min-h-[45vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold text-amber tracking-widest uppercase">
            Asset Telemetry
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight uppercase">
            APEX CargoFlow Tracking
          </h1>
          <p className="mt-6 text-slate-300 text-sm sm:text-base font-light max-w-xl leading-relaxed">
            Enter your booking reference or container number for instant access to real-time vehicle coordinates, environmental telemetry, and border clearance ledger.
          </p>

          <form onSubmit={handleTrackSubmit} className="mt-8 w-full max-w-md flex flex-col sm:flex-row gap-3">
            <input
              required
              type="text"
              placeholder="e.g. APX-7090806"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="flex-grow px-4 py-3 rounded-none bg-white text-navy focus:outline-none border-0 text-sm font-semibold uppercase placeholder:normal-case placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-amber hover:bg-amber-hover active:scale-95 text-navy text-xs font-bold uppercase tracking-widest transition-all duration-150 rounded-none whitespace-nowrap cursor-pointer shadow-md"
            >
              Secure Query
            </button>
          </form>
        </div>
      </header>

      {/* SECTION 2: MAP SIMULATION DIVISION */}
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div>
            <span className="text-xs font-bold text-amber tracking-widest uppercase">
              Live Simulation
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-display font-bold tracking-tight text-navy uppercase">
              Telemetry Dispatch Simulator
            </h2>
            <p className="mt-4 text-slate-500 font-light text-sm max-w-xl mx-auto">
              Simulating transit of cargo coordinates along active freight corridors. The vehicle is currently reporting normal payload parameters.
            </p>
          </div>

          {/* Interactive Leaflet Map Simulation Area */}
          <MapSimulation />

          {/* Action Nudge */}
          <div>
            <a
              href="https://tracking.apexlogistics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-navy text-xs font-bold uppercase tracking-widest text-navy hover:bg-navy hover:text-white transition-all duration-150 rounded-none cursor-pointer"
            >
              See your truck
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: ACTION NUDGE */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-100 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber tracking-widest uppercase">
              Immediate Pricing
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-navy uppercase mt-2">
              Require transit pricing on this corridor?
            </h3>
            <p className="mt-2 text-slate-500 text-sm font-light leading-relaxed">
              Connect with our trade coordinators to evaluate freight forwarding rates and custom compliance clearance scheduling.
            </p>
          </div>
          <div>
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-semibold rounded bg-amber text-navy hover:bg-amber-hover active:scale-95 transition-all duration-150 shrink-0 cursor-pointer shadow-sm"
            >
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
