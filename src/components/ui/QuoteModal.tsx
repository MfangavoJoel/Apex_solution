"use client";

import { useState, MouseEvent, FormEvent } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cargo: "",
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    // Only close if the click was directly on the backdrop container itself
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.cargo.trim()) {
      return;
    }

    setStatus('loading');

    const data = {
      name: formData.name,
      email: formData.email,
      phone: "N/A",
      cargoDetails: formData.cargo,
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

  const handleClose = () => {
    // Reset form states on close
    setFormData({ name: "", email: "", cargo: "" });
    setStatus('idle');
    onClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-[#0B1121]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl relative overflow-hidden p-6 sm:p-8 text-navy font-sans text-left">

        {/* Close Button Cross */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-navy transition-colors duration-150 p-1 rounded-full hover:bg-slate-50 focus:outline-none"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === 'success' ? (
          /* Success message state */
          <div className="py-8 text-center flex flex-col items-center space-y-4">
            <div className="h-14 w-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-display font-bold text-navy">
              Quote Request Submitted
            </h3>
            <p className="text-xs text-slate-500 font-light max-w-xs leading-relaxed">
              A regional logistics coordinator has been assigned to your query and will contact you shortly.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 px-6 py-2.5 bg-navy text-white text-xs font-semibold hover:bg-navy-light transition-colors duration-150"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Quote Request Form inputs */
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <h3 className="text-xl font-display font-bold text-navy uppercase tracking-wide">
                Request Quote
              </h3>
              <p className="text-xs text-slate-400 font-light mt-1">
                Fill out the required operational metrics to initiate a price estimate.
              </p>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="modal-name" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                id="modal-name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs text-navy bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:bg-white focus:border-navy transition-colors duration-150"
                placeholder="Joel Silas"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="modal-email" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                Work Email
              </label>
              <input
                type="email"
                id="modal-email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs text-navy bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:bg-white focus:border-navy transition-colors duration-150"
                placeholder="joel.silas@enterprise.co.tz"
              />
            </div>

            {/* Cargo details */}
            <div>
              <label htmlFor="modal-cargo" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                Cargo Details
              </label>
              <textarea
                id="modal-cargo"
                required
                rows={3}
                value={formData.cargo}
                onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs text-navy bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:bg-white focus:border-navy transition-colors duration-150 resize-none"
                placeholder="Describe weight, volume, origin, and destination..."
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full mt-2 py-3 bg-amber text-navy text-xs font-bold uppercase tracking-wider hover:bg-amber-hover active:scale-95 disabled:opacity-50 transition-colors duration-150 cursor-pointer"
            >
              {status === 'loading' ? 'Sending Request...' : 'Request Quote'}
            </button>
            {status === 'error' && (
              <p className="text-red-500 text-xs font-bold text-center mt-2">
                Failed to send request. Please try again or contact us directly.
              </p>
            )}
          </form>
        )}

      </div>
    </div>
  );
}
