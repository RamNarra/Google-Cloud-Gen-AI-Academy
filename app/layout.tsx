import type { Metadata } from "next";
import { DM_Mono, Lora } from "next/font/google";

import MaterialThemeProvider from "@/components/MaterialThemeProvider";
import Navbar from "@/components/Navbar";

import "./globals.css";

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

const lora = Lora({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Google Cloud Gen AI Academy APAC 2026",
  description:
    "Structured notes, cheat sheets, and learning progress for the Google Cloud Gen AI Academy APAC 2026 programme.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmMono.variable} ${lora.variable} min-h-screen bg-[#0b0c10] text-[#d8e0f0] antialiased`}
      >
        <MaterialThemeProvider>
          <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#5b8fff]/20 blur-3xl" />
            <div className="absolute right-[-8rem] top-1/4 h-96 w-96 rounded-full bg-[#43e8b0]/10 blur-3xl" />
            <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-[#ffd166]/10 blur-3xl" />
          </div>
          <Navbar />
          <main className="page-enter mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            {children}
          </main>
        </MaterialThemeProvider>
      </body>
    </html>
  );
}
