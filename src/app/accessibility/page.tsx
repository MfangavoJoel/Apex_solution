import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexlogistics.com"),
  title: "Accessibility Statement | APEX FREIGHTWAYS LIMITED",
  description: "Read the accessibility statement of APEX FREIGHTWAYS LIMITED. Learn about our commitment to WCAG 2.1 guidelines across our logistics tracking platforms and online portals.",
};

export default function Accessibility() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-navy font-sans">
      <Navbar />

      {/* COMPACT HERO */}
      <header className="relative bg-navy text-white min-h-[30vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-36 pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight uppercase">
            Accessibility
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-2xl font-light leading-relaxed">
            Effective Date: July 9, 2026 | APEX FREIGHTWAYS LIMITED Corporate Governance
          </p>
        </div>
      </header>

      {/* LEGAL CONTENT */}
      <main className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-left space-y-12">
          
          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              1. Our Commitment to Digital Inclusion
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              At <strong>APEX FREIGHTWAYS LIMITED</strong>, we are committed to ensuring digital accessibility for all visitors, including logistics managers, port dispatchers, and truck operators who use our telemetry and quote tracking interfaces. We continuously update our platforms to improve the user experience for everyone, regardless of physical ability or device constraint.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              2. Accessibility Standards & Guidelines
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              We target compliance with the **Web Content Accessibility Guidelines (WCAG) 2.1 Level AA** standards. These rules detail how to make web content more accessible for people with sensory, cognitive, and mobility impairments, as well as optimizing mobile accessibility for drivers checking shipping logs on the road.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              3. Built-In Accessibility Features
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Our site architecture includes several core enhancements to meet WCAG standards:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-500 font-light space-y-2">
              <li><strong>Semantic HTML:</strong> Use of modern HTML5 tags (such as `header`, `nav`, `main`, and `footer`) to ensure correct page structures for screen reader software.</li>
              <li><strong>Keyboard Navigation:</strong> All interactive elements, including contact text fields, rate-selection drop-downs, and modal close buttons, support standard keyboard `TAB` focus sequences.</li>
              <li><strong>High Color Contrast:</strong> We enforce verified text-to-background contrast parameters across our branding colors (Navy Blue, Amber, and slate grey) to support legibility on screens under sunlight.</li>
              <li><strong>Descriptive Alt Text:</strong> Static maps, truck images, and logo marks contain explicit descriptive labels for assistive screen software.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              4. Ongoing Auditing & Improvements
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              As web technologies and accessibility APIs advance, we regularly review our code configurations. We focus on enhancing our dynamic simulation elements (such as our telemetry maps and cargo schedules) to provide text fallback states and aria-compliant status updates during transit calculations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              5. Feedback & Reporting Issues
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              We welcome feedback regarding our site usability. If you encounter any barriers, struggle to access route telemetry maps, or find a button that doesn't support keyboard interactions, please report the details directly to our technical desk:
            </p>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded text-sm text-slate-600 font-light space-y-1 max-w-md">
              <span className="font-semibold text-navy block">APEX FREIGHTWAYS LIMITED</span>
              <span>Accessibility & Usability Team</span>
              <span>Email: <a href="mailto:operations@apexfreight.co.tz" className="text-navy font-semibold hover:text-amber transition-colors duration-150">operations@apexfreight.co.tz</a></span>
              <span>Hotline: +255 716 390 806</span>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
