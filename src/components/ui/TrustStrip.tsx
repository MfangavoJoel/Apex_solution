"use client";

import { useEffect, useState } from "react";

export default function TrustStrip() {
  const [vehicles, setVehicles] = useState(0);
  const [clearance, setClearance] = useState(0);
  const [corridors, setCorridors] = useState(0);

  useEffect(() => {
    // Vehicles count-up (0 -> 500)
    let vehStart = 0;
    const vehEnd = 500;
    const vehTimer = setInterval(() => {
      vehStart += 10;
      if (vehStart >= vehEnd) {
        setVehicles(vehEnd);
        clearInterval(vehTimer);
      } else {
        setVehicles(vehStart);
      }
    }, 15);

    // Clearance count-up (0 -> 99.8)
    let cltStart = 0;
    const cltEnd = 99.8;
    const cltTimer = setInterval(() => {
      cltStart += 2.2;
      if (cltStart >= cltEnd) {
        setClearance(cltEnd);
        clearInterval(cltTimer);
      } else {
        setClearance(parseFloat(cltStart.toFixed(1)));
      }
    }, 20);

    // Corridors count-up (0 -> 6)
    let corStart = 0;
    const corEnd = 6;
    const corTimer = setInterval(() => {
      corStart += 1;
      if (corStart >= corEnd) {
        setCorridors(corEnd);
        clearInterval(corTimer);
      } else {
        setCorridors(corStart);
      }
    }, 100);

    return () => {
      clearInterval(vehTimer);
      clearInterval(cltTimer);
      clearInterval(corTimer);
    };
  }, []);

  return (
    <section className="bg-slate-50 py-8 border-b border-slate-100 shadow-sm relative z-30 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-4 md:py-0">
            <span className="text-3xl sm:text-4xl font-display font-extrabold text-navy tabular-nums">
              {vehicles}+
            </span>
            <span className="mt-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Active Fleet Vehicles
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-4 md:py-0">
            <span className="text-3xl sm:text-4xl font-display font-extrabold text-navy tabular-nums">
              {clearance}%
            </span>
            <span className="mt-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
              On-Time Port Clearance
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-4 md:py-0">
            <span className="text-3xl sm:text-4xl font-display font-extrabold text-navy tabular-nums">
              {corridors}
            </span>
            <span className="mt-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Regional Corridors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
