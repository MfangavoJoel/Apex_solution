"use client";

import { useState, FocusEvent, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FormState {
  name: string;
  email: string;
  message: string;
  company: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    company: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Mini-FAQ questions & answers
  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "Our terminal dispatch desks and customs clearances operate 24/7/365 to process incoming manifests. Corporate sales and account management are available Monday to Friday, 8:00 AM to 5:00 PM EAT.",
    },
    {
      question: "Do you provide emergency heavy-lift transport?",
      answer: "Yes, we coordinate emergency low-loaders and out-of-gauge multi-axle trailers. Dispatch is typically organized within 24 hours of structural route approvals and compliance permits.",
    },
    {
      question: "How fast can you clear port customs?",
      answer: "For cargo pre-filed manifests, our licensed in-house customs brokers routinely secure customs releases and terminal gate clearance in under 12 hours from offloading.",
    },
  ];

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (name === "name") {
      if (!value.trim()) {
        newErrors.name = "Full name is required";
      } else {
        delete newErrors.name;
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        newErrors.email = "Work email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = "Invalid email address";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "message") {
      if (!value.trim()) {
        newErrors.message = "Message content is required";
      } else {
        delete newErrors.message;
      }
    }

    setErrors(newErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error dynamically when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormErrors];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Final validation checks
    const finalErrors: FormErrors = {};
    if (!formData.name.trim()) finalErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      finalErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      finalErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) finalErrors.message = "Message content is required";

    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      return;
    }

    setStatus('loading');

    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "N/A",
      cargoDetails: `Company: ${formData.company || "N/A"}\nMessage: ${formData.message}`,
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

  return (
    <div className="flex flex-col min-h-screen bg-white text-navy font-sans">
      {/* NAVBAR */}
      <Navbar />

      {/* SECTION 1: COMPACT HERO */}
      <header className="relative bg-navy text-white min-h-[35vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-36 pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight uppercase">
            Initiate Operations
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-2xl font-light leading-relaxed">
            Connect directly with our dispatch team or submit a freight inquiry below. We guarantee a response within 24 hours.
          </p>
        </div>
      </header>

      {/* SECTION 2: THE 50/50 SPLIT (CONTACT INFO & THE FORM) */}
      <main className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT COLUMN: DIRECT CHANNELS & FAQ */}
            <div className="space-y-12 text-left">
              <div>
                <h2 className="text-2xl font-display font-bold tracking-tight text-navy uppercase">
                  Direct Communications
                </h2>
                <p className="mt-3 text-slate-500 text-sm font-light leading-relaxed">
                  Routing requests are processed directly by our Tanzanian dispatcher network. Reach us directly for urgent shipments.
                </p>

                {/* Direct Channel Links */}
                <div className="mt-8 space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:operations@apexfreight.co.tz"
                    className="flex items-center space-x-4 p-4 bg-slate-50 border border-slate-100 hover:border-amber transition-all duration-150 group"
                  >
                    <div className="p-2.5 rounded-full bg-navy text-amber shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="truncate">
                      <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">Operational Email</span>
                      <span className="block text-sm sm:text-base font-bold text-navy group-hover:text-amber transition-colors duration-150">
                        operations@apexfreight.co.tz
                      </span>
                    </div>
                  </a>

                  {/* Direct Call */}
                  <a
                    href="tel:+255716390806"
                    className="flex items-center space-x-4 p-4 bg-slate-50 border border-slate-100 hover:border-amber transition-all duration-150 group"
                  >
                    <div className="p-2.5 rounded-full bg-navy text-amber shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">Direct Hotline</span>
                      <span className="block text-sm sm:text-base font-bold text-navy group-hover:text-amber transition-colors duration-150">
                        +255 716 390 806 (Direct Call)
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/255716390806"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-slate-50 border border-slate-100 hover:border-amber transition-all duration-150 group"
                  >
                    <div className="p-2.5 rounded-full bg-navy text-amber shrink-0">
                      {/* WhatsApp Icon */}
                      <svg className="w-5 h-5 fill-current text-amber" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.022-.08-.186-.618-.456-.75-.269-.133-1.597-.788-1.846-.879-.25-.09-.43-.134-.61.134-.181.269-.696.879-.853 1.058-.157.179-.315.2-.585.067-.27-.133-1.139-.42-2.17-1.34-1.02-.91-1.708-2.036-1.91-2.373-.203-.337-.021-.52.148-.687.153-.15.344-.403.516-.605.172-.202.229-.346.344-.576.115-.23.058-.431-.029-.604-.087-.174-.788-1.9-1.08-2.6-.285-.683-.574-.59-.788-.601-.202-.01-.433-.01-.663-.01-.23 0-.605.086-.921.433-.316.346-1.206 1.18-1.206 2.87 0 1.69 1.233 3.325 1.405 3.556.173.23 2.427 3.71 5.88 5.21 2.88 1.24 3.766 1.05 4.383.99.782-.077 1.597-.654 1.846-1.265.25-.61.25-1.133.175-1.265-.075-.133-.27-.213-.538-.346z" />
                        <path d="M12 .003C5.384.003.012 5.375.012 12c0 2.112.551 4.17 1.598 6.002L.002 24l6.166-1.616A11.95 11.95 0 0012 23.997c6.615 0 11.988-5.373 11.988-12c0-6.626-5.373-11.994-11.988-11.994zM12 21.993c-1.932 0-3.827-.518-5.485-1.503l-.393-.233-4.086 1.07 1.09-3.985-.257-.408A9.972 9.972 0 011.997 12c0-5.518 4.485-10.003 10.003-10.003 5.517 0 9.988 4.485 9.988 10.003 0 5.518-4.471 9.993-9.988 9.993z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">WhatsApp Portal</span>
                      <span className="block text-sm sm:text-base font-bold text-navy group-hover:text-amber transition-colors duration-150">
                        +255 716 390 806 (WhatsApp)
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Mini-FAQ Accordion */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-lg font-display font-bold text-navy uppercase mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div key={index} className="border-b border-slate-50 pb-3">
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                          className="flex justify-between items-center w-full py-2 text-left font-display font-bold text-navy text-sm focus:outline-none"
                        >
                          <span>{faq.question}</span>
                          <svg
                            className={`w-4 h-4 text-navy transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-32 mt-2" : "max-h-0"
                            }`}
                        >
                          <p className="text-xs text-slate-500 font-light leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: THE FRICTIONLESS FORM */}
            <div className="w-full">
              <div className="bg-white p-8 sm:p-10 shadow-xl rounded-lg border-none relative overflow-hidden">

                {status === 'success' ? (
                  /* Success State */
                  <div className="py-12 px-4 text-center flex flex-col items-center space-y-4 animate-fade-in">
                    <div className="h-16 w-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-display font-bold text-navy">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-slate-500 font-light max-w-sm leading-relaxed">
                      A regional APEX logistics coordinator has been assigned to your query and will contact you shortly.
                    </p>
                  </div>
                ) : (
                  /* Form Inputs */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-display font-bold text-navy uppercase text-left">
                      Dispatch Inquiry
                    </h3>

                    {/* Full Name */}
                    <div className="text-left">
                      <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 text-sm text-navy bg-slate-50 border rounded-none focus:outline-none focus:bg-white focus:border-navy transition-colors duration-150 ${errors.name ? "border-rose-400" : "border-slate-200"
                          }`}
                        placeholder="Joel Silas"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-500 font-semibold">{errors.name}</p>
                      )}
                    </div>

                    {/* Work Email */}
                    <div className="text-left">
                      <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 text-sm text-navy bg-slate-50 border rounded-none focus:outline-none focus:bg-white focus:border-navy transition-colors duration-150 ${errors.email ? "border-rose-400" : "border-slate-200"
                          }`}
                        placeholder="joel.silas@enterprise.co.tz"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-500 font-semibold">{errors.email}</p>
                      )}
                    </div>

                    {/* Company (Optional) */}
                    <div className="text-left">
                      <label htmlFor="company" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Company Name <span className="text-slate-300">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm text-navy bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:bg-white focus:border-navy transition-colors duration-150"
                        placeholder="Enterprise Ltd"
                      />
                    </div>

                    {/* Phone Number (Optional) */}
                    <div className="text-left">
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Phone Number <span className="text-slate-300">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm text-navy bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:bg-white focus:border-navy transition-colors duration-150"
                        placeholder="+255 700 000 000"
                      />
                    </div>

                    {/* Message */}
                    <div className="text-left">
                      <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Message Details <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 text-sm text-navy bg-slate-50 border rounded-none focus:outline-none focus:bg-white focus:border-navy transition-colors duration-150 ${errors.message ? "border-rose-400" : "border-slate-200"
                          }`}
                        placeholder="Outline origin, destination, and cargo weight details..."
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-rose-500 font-semibold">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-amber text-navy font-bold hover:bg-amber-hover disabled:opacity-50 active:scale-98 transition-all duration-150 tracking-wider text-xs uppercase cursor-pointer"
                    >
                      {status === 'loading' ? 'Sending Request...' : 'Send Dispatch Inquiry'}
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

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
