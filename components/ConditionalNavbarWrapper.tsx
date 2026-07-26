"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

interface ConditionalNavbarWrapperProps {
  children: React.ReactNode;
}

export default function ConditionalNavbarWrapper({ children }: ConditionalNavbarWrapperProps) {
  const pathname = usePathname();
  const isInterviewRoute = pathname?.startsWith("/interview");

  if (isInterviewRoute) {
    return (
      <div className="min-h-screen w-full bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </div>
    );
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#43e8b0]/12 blur-3xl" />
        <div className="absolute right-[-8rem] top-1/4 h-96 w-96 rounded-full bg-[#5b8fff]/6 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-[#43e8b0]/8 blur-3xl" />
      </div>
      <Navbar />
      <main className="page-enter mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
