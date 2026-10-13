"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What are the typical customs clearance lead times at Dar es Salaam and Tanga ports?",
      answer: "Port clearance averages 24 to 48 hours for standard container cargo, provided pre-clearance filings are compiled in advance. APEX cleared manifests average under 12 hours from vessel offload to terminal gate release.",
    },
    {
      question: "How does APEX maintain temperature compliance for cold-chain pharmaceutical cargo?",
      answer: "We utilize primary reefer containers equipped with real-time temperature probes and backup GPS sensors. Any temperature variance exceeding +/- 0.5°C triggers an automated alert at our Dar es Salaam operations desk for instant intervention.",
    },
    {
      question: "Which transit corridors do you operate across Tanzania?",
      answer: "We service major nationwide corridors connecting the Dar es Salaam port to Dodoma, Mwanza, Arusha, Tanga, and Mbeya with dedicated APEX assets and local clearances.",
    },
    {
      question: "Does APEX offer comprehensive B2B cargo liability and transit insurance?",
      answer: "Yes, all bulk commercial freight carries standard carrier liability coverage. We offer extended cargo insurance protecting up to $500,000 USD per manifest to cover specialized logistics operations.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 font-sans text-left">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b border-slate-100 pb-4 transition-all duration-200"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full py-4 text-left font-display font-bold text-navy text-base sm:text-lg focus:outline-none group"
            >
              <span>{faq.question}</span>
              <span className={`ml-4 p-1.5 rounded-full bg-slate-50 text-navy transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                <svg className="w-5 h-5 text-navy group-hover:text-amber transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
