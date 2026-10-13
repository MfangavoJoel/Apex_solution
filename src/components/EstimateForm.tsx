"use client";

import { useState } from "react";

export default function EstimateForm() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [cargoType, setCargoType] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin.trim() || !destination.trim() || !cargoType) return;
    
    // Simulate estimate calculation
    setResult(
      `Estimated Rate: $1,450 USD. Secure route routing from ${origin} to ${destination} available. Our dispatch team will confirm clearance SLAs.`
    );
  };

  return (
    <div className="w-full max-w-4xl mt-10">
      <form
        onSubmit={handleCalculate}
        className="flex flex-col lg:flex-row bg-white border border-slate-200/80 p-2 shadow-xl rounded-none w-full gap-2 lg:gap-0"
      >
        {/* Origin Field */}
        <div className="flex-grow flex flex-col px-4 py-2 border-b lg:border-b-0 lg:border-r border-slate-100">
          <label htmlFor="origin-input" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left">
            Origin Port/City
          </label>
          <input
            id="origin-input"
            type="text"
            required
            placeholder="e.g. Dar es Salaam Port"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="w-full bg-transparent text-navy focus:outline-none text-sm font-semibold mt-1"
          />
        </div>

        {/* Destination Field */}
        <div className="flex-grow flex flex-col px-4 py-2 border-b lg:border-b-0 lg:border-r border-slate-100">
          <label htmlFor="dest-input" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left">
            Destination City
          </label>
          <input
            id="dest-input"
            type="text"
            required
            placeholder="e.g. Mwanza Hub"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-transparent text-navy focus:outline-none text-sm font-semibold mt-1"
          />
        </div>

        {/* Cargo Type Select Field */}
        <div className="flex-grow flex flex-col px-4 py-2 border-b lg:border-b-0 lg:border-r border-slate-100 justify-center">
          <label htmlFor="cargo-select" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left">
            Cargo Type
          </label>
          <select
            id="cargo-select"
            required
            value={cargoType}
            onChange={(e) => setCargoType(e.target.value)}
            className="w-full bg-transparent text-navy focus:outline-none text-sm font-semibold mt-1 border-none cursor-pointer"
          >
            <option value="" disabled>Select Cargo Type</option>
            <option value="dry-van">Standard Dry Freight</option>
            <option value="reefer">Reefer (Cold-Chain)</option>
            <option value="flatbed">Oversized / Heavy Haul</option>
            <option value="hazmat">Hazardous Materials</option>
          </select>
        </div>

        {/* Action Button: Get Estimate */}
        <button
          type="submit"
          className="bg-amber text-navy font-bold text-sm tracking-wide px-8 py-4 lg:py-0 hover:bg-amber-hover transition-colors duration-250 ease-in-out whitespace-nowrap rounded-none flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
        >
          Get Estimate
        </button>
      </form>

      {/* Result Display Overlay */}
      {result && (
        <div className="mt-4 p-4 bg-navy text-white text-sm border-l-4 border-amber animate-fade-in text-center shadow-lg font-medium">
          {result}
        </div>
      )}
    </div>
  );
}
