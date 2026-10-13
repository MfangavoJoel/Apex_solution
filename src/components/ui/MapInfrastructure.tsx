"use client";

import dynamic from "next/dynamic";

const MapSimulation = dynamic(
  () => import("./MapSimulation"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[400px] w-full bg-slate-800/40 animate-pulse rounded-lg flex items-center justify-center text-slate-400 font-sans text-xs">
        Loading Map Coordinates...
      </div>
    ),
  }
);

export default function MapInfrastructure() {
  return (
    <section className="bg-navy py-24 sm:py-32 text-white relative overflow-hidden font-sans">
      {/* Decorative abstract grid pattern in background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold text-amber tracking-widest uppercase">
            Geographic Infrastructure
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold tracking-tight text-white uppercase">
            Strategically Positioned
          </h2>
          <p className="mt-4 text-slate-300 font-light text-base sm:text-lg">
            Operating secure trade assets and domestic hubs to move heavy freight across nationwide corridors without friction.
          </p>
        </div>

        {/* Dynamic Map Container */}
        <div className="w-full max-w-3xl mx-auto relative z-10">
          <MapSimulation />
        </div>
      </div>
    </section>
  );
}
