import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexlogistics.com"),
  title: "Terms of Use | APEX FREIGHTWAYS LIMITED",
  description: "Read the terms of use governing the APEX FREIGHTWAYS LIMITED corporate website, digital cargo booking portals, and freight forwarding tracking APIs.",
};

export default function TermsOfUse() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-navy font-sans">
      <Navbar />

      {/* COMPACT HERO */}
      <header className="relative bg-navy text-white min-h-[30vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-36 pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight uppercase">
            Terms of Use
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
              1. Introduction & Scope
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Welcome to the website of <strong>APEX FREIGHTWAYS LIMITED</strong> ("Company", "we", "us", or "our"). These Terms of Use govern your access to and use of our digital platforms, including our corporate website, freight rate estimation tools, GPS telemetry tracking interface, and online dispatch forms.
            </p>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              By accessing our website, using our route simulators, or submitting cargo specifications, you acknowledge that you have read, understood, and agree to be bound by these Terms and all applicable laws under the United Republic of Tanzania.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              2. Acceptable Use of Logistics Portals
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Our website is provided to facilitate enterprise logistics inquiries, border clearance coordination, and vehicle routing. You agree to use these services only for lawful commercial purposes related to shipping, freight, and cargo operations.
            </p>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              You are strictly prohibited from:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-500 font-light space-y-2">
              <li>Submitting fraudulent weight, volume, or hazardous cargo parameters on our Quote or Contact forms.</li>
              <li>Attempting to scrape, reverse engineer, or disrupt the GPS simulation or telemetry tracking dashboard APIs.</li>
              <li>Impersonating third-party shipping entities or port dispatchers.</li>
              <li>Using the platform to organize transits of prohibited materials under Tanzanian customs regulations.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              3. Accuracy of Cargo Information
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              When submitting details via our <strong>Quote Request</strong> modal or <strong>Contact Form</strong>, you represent that all information—including company name, route origin, route destination, and special handling instructions—is accurate and truthful. Cargo bookings are subject to physical verification at our Dar es Salaam and Tanga port terminals. Incorrect parameters may result in recalculations of rate cards or clearance delays.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              4. Intellectual Property
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              All content on this website, including but not limited to text, graphics, branding, the APEX logo mark, vector maps, interactive tracking code, and database layouts, is the exclusive intellectual property of APEX FREIGHTWAYS LIMITED. No portion of this site may be copied, reproduced, or distributed for commercial purposes without our express written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              5. Service Availability & Telemetry Disclaimer
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              While we strive to provide continuous website access and real-time telemetry simulation, digital services are provided on an "as-is" and "as-available" basis. Technical updates, network connectivity disruptions at border checkpoints, or maintenance may cause temporary system offline status. Actual telemetry tracking feeds are subject to satellite coverage and regional telecommunication infrastructure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              6. Limitation of Liability
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              APEX FREIGHTWAYS LIMITED, its directors, and operational employees shall not be liable for any indirect, incidental, or consequential damages resulting from website unavailability, shipping delays, customs hold-ups, or discrepancies between automated rate sheets and finalized freight contract pricing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              7. Governing Law & Jurisdiction
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              These Terms of Use and your relationship with APEX FREIGHTWAYS LIMITED are governed exclusively by the laws of the <strong>United Republic of Tanzania</strong>. Any legal action or dispute arising from the use of this website shall be settled in the competent courts of Dar es Salaam, Tanzania.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              8. Contact Corporate Relations
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              For any questions regarding these Terms of Use, intellectual property queries, or operational compliance matters, please reach our administrative desk:
            </p>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded text-sm text-slate-600 font-light space-y-1 max-w-md">
              <span className="font-semibold text-navy block">APEX FREIGHTWAYS LIMITED</span>
              <span>Legal & Compliance Office</span>
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
