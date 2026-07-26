"use client";

import React, { useState } from "react";

interface HeroAnimatedDiagramProps {
  type: string;
}

export default function HeroAnimatedDiagram({ type }: HeroAnimatedDiagramProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="my-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <span className="font-sans text-xs font-semibold uppercase tracking-wider text-blue-600">
          🎨 Hero Visual Animation Diagram
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 2))}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
          >
            ← Previous
          </button>
          <span className="font-mono text-xs text-slate-500">Step {activeStep + 1} / 3</span>
          <button
            onClick={() => setActiveStep((prev) => (prev < 2 ? prev + 1 : 0))}
            className="rounded-lg border border-blue-600 bg-blue-600 px-3 py-1 text-xs font-semibold text-white hover:bg-blue-700"
          >
            Next Step →
          </button>
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="relative mt-4 flex min-h-[220px] w-full items-center justify-center rounded-2xl bg-slate-50 p-6">
        {type === "rest-waiter" && (
          <div className="flex w-full flex-col items-center justify-around gap-4 sm:flex-row">
            <div className={`flex flex-col items-center rounded-2xl border p-4 transition ${activeStep === 0 ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/30 scale-105" : "border-slate-200 bg-white"}`}>
              <span className="text-3xl">📱</span>
              <span className="mt-2 text-xs font-bold text-slate-800">1. Client / Customer</span>
              <span className="text-[10px] text-slate-500">Makes Request</span>
            </div>

            <div className="text-blue-500 font-mono text-xs animate-pulse">➔ HTTP GET ➔</div>

            <div className={`flex flex-col items-center rounded-2xl border p-4 transition ${activeStep === 1 ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/30 scale-105" : "border-slate-200 bg-white"}`}>
              <span className="text-3xl">🤵</span>
              <span className="mt-2 text-xs font-bold text-slate-800">2. REST API Waiter</span>
              <span className="text-[10px] text-slate-500">Middleman API</span>
            </div>

            <div className="text-blue-500 font-mono text-xs animate-pulse">➔ Query ➔</div>

            <div className={`flex flex-col items-center rounded-2xl border p-4 transition ${activeStep === 2 ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/30 scale-105" : "border-slate-200 bg-white"}`}>
              <span className="text-3xl">🍳</span>
              <span className="mt-2 text-xs font-bold text-slate-800">3. Kitchen Server / DB</span>
              <span className="text-[10px] text-slate-500">Returns JSON Food</span>
            </div>
          </div>
        )}

        {type === "stack-plates" && (
          <div className="flex flex-col items-center gap-2">
            <div className={`w-48 rounded-xl border p-3 text-center transition ${activeStep === 0 ? "border-emerald-500 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/30" : "border-slate-200 bg-white text-slate-700"}`}>
              <span className="font-mono text-xs font-bold">Plate 3 [POP FIRST (LIFO)]</span>
            </div>
            <div className={`w-48 rounded-xl border p-3 text-center transition ${activeStep === 1 ? "border-blue-500 bg-blue-50 text-blue-800" : "border-slate-200 bg-white text-slate-700"}`}>
              <span className="font-mono text-xs font-bold">Plate 2</span>
            </div>
            <div className="w-48 rounded-xl border border-slate-200 bg-white p-3 text-center text-slate-700">
              <span className="font-mono text-xs font-bold">Plate 1 [Bottom]</span>
            </div>
          </div>
        )}

        {type === "tv-remote" && (
          <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row">
            <div className="flex flex-col items-center rounded-2xl border border-blue-500 bg-blue-50 p-5 shadow-sm">
              <span className="text-3xl">📺</span>
              <span className="mt-2 text-xs font-bold text-blue-900">Public Remote Buttons</span>
              <span className="mt-1 text-[11px] text-blue-700">+ volumeUp()</span>
            </div>
            <span className="text-xl text-slate-400">➔ Hides ➔</span>
            <div className="flex flex-col items-center rounded-2xl border border-slate-300 bg-slate-800 p-5 text-white shadow-sm">
              <span className="text-3xl">⚙️</span>
              <span className="mt-2 text-xs font-bold">Private Internal Wires</span>
              <span className="mt-1 font-mono text-[10px] text-slate-400">private double volume;</span>
            </div>
          </div>
        )}

        {type !== "rest-waiter" && type !== "stack-plates" && type !== "tv-remote" && (
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl">💡</span>
            <span className="mt-2 text-sm font-bold text-slate-800">Visual Flow Diagram</span>
            <span className="mt-1 text-xs text-slate-500">
              Step {activeStep + 1}: Conceptual data movement for this topic.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
