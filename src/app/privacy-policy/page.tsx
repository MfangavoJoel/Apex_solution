import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexlogistics.com"),
  title: "Privacy Policy | APEX FREIGHTWAYS LIMITED",
  description: "Read the privacy policy of APEX FREIGHTWAYS LIMITED. Learn how we collect, protect, and process cargo manifest details, shipment routing, and corporate client communications.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-navy font-sans">
      <Navbar />

      {/* COMPACT HERO */}
      <header className="relative bg-navy text-white min-h-[30vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-36 pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight uppercase">
            Privacy Policy
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
              1. Information We Collect
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              At <strong>APEX FREIGHTWAYS LIMITED</strong>, we are committed to safeguarding corporate and individual shipping data. In the course of coordinating freight forwarding, customs clearances, and transport logistics, we collect information necessary to execute your transits:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-500 font-light space-y-2">
              <li><strong>Contact Information:</strong> Full name, company name, corporate email address, and phone number when submitting inquiries.</li>
              <li><strong>Shipment Details:</strong> Origin port/city, destination city, cargo specifications (weight, dimensions, volume), custom clearance requirements, and temperature-control instructions.</li>
              <li><strong>Telemetry Tracking Data:</strong> GPS coordinates, speed metrics, and cargo conditions recorded by our onboard vehicle telemetry units.</li>
              <li><strong>Website Interactions:</strong> IP address, device specifications, browser cookies, and page analytics.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              2. How Information Is Used
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              We process your operational data under strict confidentiality guidelines. Specifically, the collected data is used to:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-500 font-light space-y-2">
              <li>Generate custom freight rate cards and project clearances estimates.</li>
              <li>Prepare and file customs clearance manifests with the Tanzania Revenue Authority (TRA) and border checkpoint agencies.</li>
              <li>Maintain active GPS telemetry alerts on our client tracking portal for cargo security.</li>
              <li>Contact your supply chain coordinators with transport updates, port clearance receipts, and compliance logs.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              3. Data Security & Storage
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              All cargo records, manifest details, and client details are encrypted during transit using TLS/SSL security protocols. Stored data is hosted in secured environments with access limited to authorized supply chain dispatchers, terminal officers, and compliance checkers. While we take exhaustive measures, no digital data transmission can be guaranteed 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              4. Sharing with Third-Party Agencies
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              We do not sell or lease corporate data. However, logistics execution requires sharing information with key clearing partners and regulators:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-500 font-light space-y-2">
              <li><strong>Port & Customs Regulators:</strong> Port authorities, clearing agencies, and border border checkpoints to process legal manifests.</li>
              <li><strong>Subcontracted Carrier networks:</strong> Specialized haulers (e.g., heavy-haul convoy escorts) tasked with specific legs of your transit.</li>
              <li><strong>Technology Providers:</strong> Map routing APIs and SMS/WhatsApp notification channels used to send dispatch alerts.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              5. Data Retention Regulations
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Under Tanzanian customs and tax laws, commercial freight manifest data and customs receipts must be archived for a statutory period (typically 5 to 7 years). We retain shipping log data as mandated to satisfy local compliance audits, tax filings, and insurance liability policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              6. Compliance & Data Protection Laws
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Our privacy practices are designed to comply with the **Tanzania Personal Data Protection Act (Act No. 5 of 2022)**. You have the right to request access to corporate data records we store, request modifications to correct inaccuracies, or file inquiries regarding our telemetry storage protocols.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              7. Contact Data Officer
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              To request a review of your company data, update details, or speak to our data compliance officer, contact:
            </p>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded text-sm text-slate-600 font-light space-y-1 max-w-md">
              <span className="font-semibold text-navy block">APEX FREIGHTWAYS LIMITED</span>
              <span>Data Compliance Department</span>
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
