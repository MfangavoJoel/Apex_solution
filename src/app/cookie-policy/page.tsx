import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexlogistics.com"),
  title: "Cookie Policy | APEX FREIGHTWAYS LIMITED",
  description: "Read the cookie policy of APEX FREIGHTWAYS LIMITED. Learn how our digital booking platforms and map telemetry tracking dashboard use cookies to optimize performance and security.",
};

export default function CookiePolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-navy font-sans">
      <Navbar />

      {/* COMPACT HERO */}
      <header className="relative bg-navy text-white min-h-[30vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-36 pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight uppercase">
            Cookie Policy
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
              1. What Are Cookies?
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Cookies are small text files placed on your computer, tablet, or smartphone by websites you visit. They are widely used to make websites work more efficiently, improve security, and provide statistical usage records to corporate systems administrators.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              2. How We Use Cookies
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              At <strong>APEX FREIGHTWAYS LIMITED</strong>, we use cookies across our digital portals to support operational features:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 border border-slate-100 bg-slate-50">
                <h4 className="text-sm font-bold text-navy uppercase tracking-wide">Essential Cookies</h4>
                <p className="mt-2 text-xs text-slate-500 font-light leading-relaxed">
                  Required to browse pages, utilize security filters, and remember modal open states (such as our Request Quote popups). These cookies cannot be turned off.
                </p>
              </div>
              <div className="p-5 border border-slate-100 bg-slate-50">
                <h4 className="text-sm font-bold text-navy uppercase tracking-wide">Functional Cookies</h4>
                <p className="mt-2 text-xs text-slate-500 font-light leading-relaxed">
                  Remember your inputs in our shipping calculator (e.g., origin/destination selections) and store active tracking ID queries in our telemetry page.
                </p>
              </div>
              <div className="p-5 border border-slate-100 bg-slate-50">
                <h4 className="text-sm font-bold text-navy uppercase tracking-wide">Analytics Cookies</h4>
                <p className="mt-2 text-xs text-slate-500 font-light leading-relaxed">
                  Record anonymous traffic patterns, page response times, and LCP render metrics, helping us optimize server loads during peak shipping periods.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              3. Third-Party Integrations
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Some features on our website rely on external partners who may also place cookies on your device:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-500 font-light space-y-2">
              <li><strong>Interactive Maps (Leaflet):</strong> Renders route tracking points and requires essential session state variables to draw coordinates.</li>
              <li><strong>Fonts & Graphics:</strong> Google Fonts integrations help speed up text layouts through local browser caches.</li>
              <li><strong>Social Media Links:</strong> LinkedIn or Facebook links inside our footer may drop analytics cookies if you interact with them.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              4. Managing & Disabling Cookies
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Most browsers allow you to block or delete cookies through their settings menus. To adjust cookie preferences, check your browser's instructions:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-navy uppercase text-center pt-2">
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 hover:bg-amber transition-colors duration-150 border border-slate-100">
                Google Chrome
              </a>
              <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 hover:bg-amber transition-colors duration-150 border border-slate-100">
                Apple Safari
              </a>
              <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 hover:bg-amber transition-colors duration-150 border border-slate-100">
                Mozilla Firefox
              </a>
              <a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 hover:bg-amber transition-colors duration-150 border border-slate-100">
                Microsoft Edge
              </a>
            </div>
            <p className="mt-4 text-xs text-rose-500 font-medium">
              Please note that disabling cookies may break essential features, such as our tracking search bar or the instant quote modal form.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-bold text-navy uppercase tracking-wide border-b border-slate-100 pb-2">
              5. Contact Compliance Office
            </h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              If you have any questions regarding our use of cookies or how we collect anonymous site telemetry metrics, please get in touch:
            </p>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded text-sm text-slate-600 font-light space-y-1 max-w-md">
              <span className="font-semibold text-navy block">APEX FREIGHTWAYS LIMITED</span>
              <span>Web Operations & Compliance Desk</span>
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
