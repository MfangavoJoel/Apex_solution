import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";

// Statically import logistics images to support native next/image blur placeholders
import servicesHeroImg from "../../../public/images/services-hero-bg.jpg";
import freightImg from "../../../public/images/service-freight.jpg";
import customsImg from "../../../public/images/service-customs.jpg";
import trackingImg from "../../../public/images/service-tracking.jpg";
import transportImg from "../../../public/images/service-transport.jpg";
import controlTowerImg from "../../../public/images/home-control-tower.jpg";
import heavyHaulImg from "../../../public/images/industry-mining.jpg";
import seaportImg from "../../../public/images/industry-construction.jpg";
import LastMileImg from "../../../public/images/about-mission.jpg";
import shipSpotlightImg from "../../../public/images/industry-retail.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexlogistics.com"),
  title: "Integrated Logistics Solutions | APEX FREIGHTWAYS LIMITED Services Hub",
  description: "From customs clearance to cross-border transport visibility, APEX FREIGHTWAYS LIMITED delivers operational logistics systems designed around speed, transparency, and accountability.",
};

export default function ServicesHub() {
  const serviceGrid = [
    {
      title: "Freight Forwarding",
      description: "Air and ocean freight routing designed to navigate global trade channels directly into major Tanzanian points.",
      image: freightImg,
      href: "/services/freight-forwarding",
    },
    {
      title: "Customs Clearance",
      description: "Certified customs agents handling pre-cleared manifests, duties compliance, and fast-track terminal releases.",
      image: customsImg,
      href: "/services/customs-clearance",
    },
    {
      title: "Cargo Tracking",
      description: "End-to-end GPS and temperature sensor telemetry offering operational managers active container coordinates.",
      image: trackingImg,
      href: "/services/cargo-tracking",
    },
    {
      title: "Inter-Regional Transport",
      description: "Dedicated long-haul trucking assets connecting coastal maritime hubs to inland commercial hubs.",
      image: transportImg,
      href: "/services/cross-border-transport",
    },
    {
      title: "Systems Integration",
      description: "Custom ERP integrations and telemetry API endpoints built for commercial trade coordinators.",
      image: controlTowerImg,
      href: "/services/systems-integration",
    },
    {
      title: "Heavy Lift Haulage",
      description: "Flatbeds and low-loaders engineered for mining equipment, industrial machinery, and oversized cargo.",
      image: heavyHaulImg,
      href: "/services/heavy-lift-haulage",
    },
    {
      title: "Seaport Hub Operations",
      description: "Terminal handling and bulk shipping clearances directly operating at Tanga and Dar es Salaam ports.",
      image: seaportImg,
      href: "/services/seaport-operations",
    },
    {
      title: "Last-Mile Distribution",
      description: "Localized freight dispatch and local warehouse fulfillment solutions servicing corporate commerce.",
      image: LastMileImg,
      href: "/services/last-mile-distribution",
    },
  ];

  const pipelineSteps = [
    {
      num: "01",
      name: "Planning",
      desc: "Route analysis, carrier allocation, and compliance scheduling.",
      icon: (
        <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      num: "02",
      name: "Filing",
      desc: "Pre-manifest documents compilation and customs pre-clearance upload.",
      icon: (
        <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      num: "03",
      name: "Clearance",
      desc: "Duty payment confirmation and terminal gate release processing.",
      icon: (
        <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      num: "04",
      name: "Transit",
      desc: "Primary haulage dispatch across selected regional trade corridors.",
      icon: (
        <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      ),
    },
    {
      num: "05",
      name: "Tracking",
      desc: "Live route telemetry updates and ETA predictions validation.",
      icon: (
        <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      num: "06",
      name: "Delivery",
      desc: "Offload confirmation, custody exchange, and delivery report log.",
      icon: (
        <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-navy font-sans">
      {/* FLOATING NAVBAR */}
      <Navbar />

      {/* SECTION 1: CINEMATIC HERO */}
      <header className="relative min-h-[70vh] flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <Image
            src={servicesHeroImg}
            alt="APEX seaport shipping cranes loading cargo"
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
            Integrated Logistics Solutions Engineered For Tanzanian Commerce
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
            From customs clearance to cross-border transport visibility, APEX delivers operational logistics systems designed around speed, transparency, and accountability.
          </p>
        </div>
      </header>

      {/* SECTION 2: THE UNIFIED SERVICES ARCHITECTURE (THE GRID) */}
      <section className="bg-white py-24 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-bold text-amber tracking-widest uppercase">
              Operations Directory
            </span>
            <h2 className="mt-4 text-3xl font-display font-bold tracking-tight text-navy uppercase">
              Divisional Logistics Grid
            </h2>
            <p className="mt-4 text-slate-500 font-light text-base">
              Eight unified segments operating under absolute performance metrics to move trade friction-free.
            </p>
          </div>

          {/* Grid Layout (4 Columns Desktop, stark white with low opacity navy shadow, hover lifts) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceGrid.map((card, index) => (
              <article
                key={index}
                className="flex flex-col bg-white hover-lift shadow-navy-tint shadow-navy-tint-hover transition-premium overflow-hidden border-none"
              >
                {/* Top Half: Crop Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Bottom Half */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-lg font-display font-bold text-navy">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-50">
                    <Link
                      href={card.href}
                      className="inline-flex items-center text-xs font-semibold text-amber hover:text-amber-hover transition-colors duration-150"
                    >
                      Explore Operations →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: HIGHLIGHTED CAPABILITIES (ZIGZAG SECTIONS) */}
      <section className="bg-white py-24 sm:py-32 border-t border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          
          {/* Spotlight Block 1: Left Copy, Right Image */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <span className="text-xs font-bold text-amber tracking-widest uppercase">
                Spotlight Division
              </span>
              <h3 className="text-3xl font-display font-bold text-navy tracking-tight uppercase">
                Freight Forwarding & Maritime Port Operations
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                APEX controls maritime cargo allocations from major international ports directly into Tanga and Dar es Salaam. We coordinate container tracking, vessel scheduling, and terminal discharge metrics.
              </p>
              
              {/* Stat Boxes */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-amber pl-4">
                  <span className="text-2xl font-display font-bold text-navy block">99.8%</span>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Release Accuracy</span>
                </div>
                <div className="border-l-2 border-amber pl-4">
                  <span className="text-2xl font-display font-bold text-navy block">24h</span>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Average Turnaround</span>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[450px]">
              <Image
                src={shipSpotlightImg}
                alt="APEX cargo containers ocean vessel loading"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover shadow-navy-tint"
              />
            </div>
          </div>

          {/* Spotlight Block 2: Left Image, Right Copy */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Image */}
            <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[450px]">
              <Image
                src={customsImg}
                alt="APEX customs clearing inspection agent"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover shadow-navy-tint"
              />
            </div>

            {/* Right Copy */}
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <span className="text-xs font-bold text-amber tracking-widest uppercase">
                Spotlight Division
              </span>
              <h3 className="text-3xl font-display font-bold text-navy tracking-tight uppercase">
                Border Customs Clearance
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Clear compliance hurdles across Tanzanian borders. Our certified customs brokerage team coordinates pre-clearance, duties evaluation, and port clearance to keep your shipments moving.
              </p>
              
              {/* Stat Boxes */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-amber pl-4">
                  <span className="text-2xl font-display font-bold text-navy block">100%</span>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Compliance Rate</span>
                </div>
                <div className="border-l-2 border-amber pl-4">
                  <span className="text-2xl font-display font-bold text-navy block">0</span>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Security Violations</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: THE OPERATIONAL PIPELINE (TIMELINE) */}
      <section className="bg-white py-24 sm:py-32 border-t border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-bold text-amber tracking-widest uppercase">
              Routing Workflow
            </span>
            <h2 className="mt-4 text-3xl font-display font-bold tracking-tight text-navy uppercase">
              Our Operational Logistics Process
            </h2>
            <p className="mt-4 text-slate-500 font-light text-base">
              A unified pipeline built around speed, control checkpoints, and telemetry audits.
            </p>
          </div>

          {/* Timeline UI (Horizontal on desktop, vertical on mobile) */}
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Connecting Dotted Line (Desktop only) */}
            <div className="absolute top-[38px] left-[8%] right-[8%] h-[1.5px] border-t-2 border-dashed border-slate-200 z-0 hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-6 relative z-10">
              {pipelineSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  {/* Step Icon Container */}
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-slate-50 border border-slate-100 group-hover:border-amber transition-all duration-200 z-10">
                    <span className="absolute top-1 right-2 text-[9px] font-bold text-slate-400 font-mono">
                      {step.num}
                    </span>
                    {step.icon}
                  </div>
                  
                  {/* Copy */}
                  <h4 className="mt-5 text-base font-bold text-navy font-display">
                    {step.name}
                  </h4>
                  <p className="mt-2 text-xs text-slate-500 font-light leading-relaxed max-w-[160px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: FAQ & FINAL CTA */}
      <section className="bg-white py-24 sm:py-32 border-t border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-bold text-amber tracking-widest uppercase">
              Operations Q&A
            </span>
            <h2 className="mt-4 text-3xl font-display font-bold tracking-tight text-navy uppercase">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Interactive Accordion */}
          <FAQAccordion />

          {/* Final CTA (Deep Navy rounded container inside the white section) */}
          <div className="mt-24 max-w-4xl mx-auto bg-navy rounded-2xl p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
            
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight">
                Ready to optimize your Tanzanian logistics?
              </h3>
              <p className="mt-4 text-slate-300 text-sm sm:text-base font-light max-w-md">
                Connect with our commercial dispatch team for bulk cargo pricing and transit schedules.
              </p>
              <div className="mt-8">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-semibold rounded bg-amber text-navy hover:bg-amber-hover active:scale-95 transition-all duration-150 cursor-pointer shadow-md"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
