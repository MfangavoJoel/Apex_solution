"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import QuoteModal from "@/components/ui/QuoteModal";

interface QuoteModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    // Check if on the dedicated contact page
    if (typeof window !== "undefined" && window.location.pathname === "/contact") {
      // Simply scroll to the form fields on the contact page
      const contactForm = document.getElementById("name");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" });
        contactForm.focus();
      }
      return;
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={closeModal} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (context === undefined) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
