import type { Metadata } from "next";
import { DM_Mono, Lora } from "next/font/google";

import MaterialThemeProvider from "@/components/MaterialThemeProvider";
import ConditionalNavbarWrapper from "@/components/ConditionalNavbarWrapper";

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
  title: "FSM Software Engineer Interview Academy | Learn -> Speak -> Crack",
  description: "Minimalist, step-by-step interview preparation system for Associate Software Engineers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmMono.variable} ${lora.variable} min-h-screen antialiased`}
      >
        <MaterialThemeProvider>
          <ConditionalNavbarWrapper>{children}</ConditionalNavbarWrapper>
        </MaterialThemeProvider>
      </body>
    </html>
  );
}
