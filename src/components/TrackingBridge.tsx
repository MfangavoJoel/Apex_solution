"use client";

import { useState } from "react";

export default function TrackingBridge() {
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    
    // Redirect to the CargoFlow telemetry subdomain passing the tracking ID
    const cargoFlowUrl = `https://cargoflow.apexlogistics.com/track?id=${encodeURIComponent(trackingId.trim())}`;
    window.location.href = cargoFlowUrl;
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mt-8">
      <div className="flex flex-col sm:flex-row shadow-lg rounded border border-navy-light/20 overflow-hidden bg-white">
        <label htmlFor="tracking-id-input" className="sr-only">
          Enter Tracking Number
        </label>
        <input
          id="tracking-id-input"
          type="text"
          placeholder="Enter Tracking Number (e.g. APX-987654)..."
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          className="flex-grow px-6 py-4 text-base text-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber/50 font-sans"
          required
        />
        <button
          type="submit"
          className="bg-amber text-navy font-semibold px-8 py-4 sm:py-0 hover:bg-amber-hover transition-colors duration-250 ease-in-out whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-amber/80 flex items-center justify-center gap-2 cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Track Cargo
        </button>
      </div>
      <p className="mt-3 text-xs text-white/70 text-center sm:text-left">
        Direct link to CargoFlow™ real-time telemetry engine.
      </p>
    </form>
  );
}
