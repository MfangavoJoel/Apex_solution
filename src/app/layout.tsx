import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "APEX FREIGHTWAYS LIMITED | Enterprise Logistics & Fleet Management",
  description: "Precision logistics for East Africa. Secure freight, real-time telemetry, and absolute reliability.",
  keywords: ["Logistics", "Fleet Management", "Tanzania", "East Africa", "Freight", "CargoFlow", "Telemetry", "B2B Logistics", "APEX FREIGHTWAYS LIMITED"],
};

import { QuoteModalProvider } from "@/context/QuoteModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-navy">
        <QuoteModalProvider>{children}</QuoteModalProvider>
      </body>
    </html>
  );
}
