import type { Metadata } from "next";
import { DM_Mono, Lora } from "next/font/google";

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
        className={`${dmMono.variable} ${lora.variable} min-h-screen bg-[#0b0c10] text-[#d8e0f0]`}
      >
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
