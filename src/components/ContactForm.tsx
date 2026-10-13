"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    businessEmail: "",
    origin: "",
    destination: "",
    requirements: "",
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // Map standard element IDs to state keys
    const stateKey = id === "company-name" ? "companyName" :
      id === "business-email" ? "businessEmail" :
        id === "origin" ? "origin" :
          id === "destination" ? "destination" : "requirements";
    setFormData((prev) => ({ ...prev, [stateKey]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const data = {
      name: `Company: ${formData.companyName}`,
      email: formData.businessEmail,
      phone: "N/A",
      cargoDetails: `Origin: ${formData.origin}\nDestination: ${formData.destination}\nRequirements: ${formData.requirements}`,
    };

    try {
      const response = await fetch('/send_quote.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission failed', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-navy/5 border border-navy/10 rounded p-8 text-center text-navy animate-fade-in font-sans">
        <svg className="w-12 h-12 text-amber mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold font-display uppercase">Quote Request Registered</h3>
        <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
          Our Dar es Salaam commercial dispatch team has received your routing specifications and will reach out with a secured rate sheet.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company-name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Company Name</label>
          <input
            required
            id="company-name"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Tanzania Mining Corp"
            className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-1 focus:ring-amber/80 text-sm text-navy"
          />
        </div>
        <div>
          <label htmlFor="business-email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Business Email</label>
          <input
            required
            id="business-email"
            type="email"
            value={formData.businessEmail}
            onChange={handleChange}
            placeholder="e.g. logistics@company.com"
            className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-1 focus:ring-amber/80 text-sm text-navy"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="origin" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Origin Port/City</label>
          <input
            required
            id="origin"
            type="text"
            value={formData.origin}
            onChange={handleChange}
            placeholder="e.g. Dar es Salaam Port"
            className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-1 focus:ring-amber/80 text-sm text-navy"
          />
        </div>
        <div>
          <label htmlFor="destination" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Destination City</label>
          <input
            required
            id="destination"
            type="text"
            value={formData.destination}
            onChange={handleChange}
            placeholder="e.g. Mwanza Hub"
            className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-1 focus:ring-amber/80 text-sm text-navy"
          />
        </div>
      </div>
      <div>
        <label htmlFor="requirements" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Special Handling / Volume Requirements</label>
        <textarea
          required
          id="requirements"
          rows={4}
          value={formData.requirements}
          onChange={handleChange}
          placeholder="Describe cargo weight, volume, hazmat status, or special telemetry alerts needed..."
          className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-1 focus:ring-amber/80 text-sm text-navy"
        />
      </div>
      <div className="text-center pt-2">
        <button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded bg-navy text-white font-semibold hover:bg-navy-light disabled:opacity-50 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer">
          {status === 'loading' ? 'Sending Request...' : 'Request Secured Rate Sheet'}
        </button>
        {status === 'error' && (
          <p className="text-red-500 text-xs font-bold text-center mt-2">
            Failed to send request. Please try again or contact us directly.
          </p>
        )}
      </div>
    </form>
  );
}
