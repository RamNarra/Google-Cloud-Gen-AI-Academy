"use client";

import React, { useState } from "react";

interface HeroAnimatedDiagramProps {
  type: string;
}

export default function HeroAnimatedDiagram({ type }: HeroAnimatedDiagramProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="my-4 rounded-3xl border border-[#E2DCD0] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-blue-700">
          📊 UML DIAGRAM & VISUAL FLOW
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 2))}
            className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-800 hover:bg-slate-100"
          >
            ← Prev
          </button>
          <span className="font-mono text-xs font-bold text-slate-600">Step {activeStep + 1}/3</span>
          <button
            onClick={() => setActiveStep((prev) => (prev < 2 ? prev + 1 : 0))}
            className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-blue-700 shadow-xs"
          >
            Next →
          </button>
        </div>
      </div>

      {/* SVG Canvas Container */}
      <div className="relative mt-4 flex min-h-[260px] w-full flex-col items-center justify-center rounded-2xl bg-[#FAF9F5] p-4 border border-slate-200/80">
        
        {/* 1. UML SEQUENCE DIAGRAM FOR REST & SPRING BOOT */}
        {(type === "rest-waiter" || type === "spring-factory") && (
          <div className="w-full flex flex-col items-center gap-4">
            <span className="font-mono text-xs font-bold text-slate-500 uppercase">
              UML Sequence Diagram: REST API Request & Response Lifecycle
            </span>
            <div className="flex w-full flex-col sm:flex-row items-center justify-between gap-3 px-2">
              {/* Client */}
              <div className={`flex flex-col items-center rounded-xl border p-3 text-center transition-all w-full sm:w-1/4 ${activeStep === 0 ? "border-blue-600 bg-blue-50 ring-2 ring-blue-500/30 scale-105" : "border-slate-300 bg-white"}`}>
                <span className="text-2xl">📱</span>
                <span className="mt-1 text-xs font-extrabold text-slate-900">Client / Browser</span>
                <span className="text-[11px] font-mono text-blue-700 mt-1">GET /api/users/42</span>
              </div>

              <span className="text-xs font-mono text-blue-600 font-bold animate-pulse">➔ HTTP Request ➔</span>

              {/* Controller */}
              <div className={`flex flex-col items-center rounded-xl border p-3 text-center transition-all w-full sm:w-1/4 ${activeStep === 1 ? "border-blue-600 bg-blue-50 ring-2 ring-blue-500/30 scale-105" : "border-slate-300 bg-white"}`}>
                <span className="text-2xl">⚡</span>
                <span className="mt-1 text-xs font-extrabold text-slate-900">@RestController</span>
                <span className="text-[11px] font-mono text-slate-600 mt-1">Extracts @PathVariable</span>
              </div>

              <span className="text-xs font-mono text-blue-600 font-bold animate-pulse">➔ Service Call ➔</span>

              {/* Service & Repository */}
              <div className={`flex flex-col items-center rounded-xl border p-3 text-center transition-all w-full sm:w-1/4 ${activeStep === 2 ? "border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500/30 scale-105" : "border-slate-300 bg-white"}`}>
                <span className="text-2xl">🛢️</span>
                <span className="mt-1 text-xs font-extrabold text-slate-900">@Service + @Repository</span>
                <span className="text-[11px] font-mono text-emerald-800 mt-1">Returns 200 OK JSON</span>
              </div>
            </div>
          </div>
        )}

        {/* 2. UML CLASS DIAGRAM FOR INHERITANCE & POLYMORPHISM */}
        {(type === "cookie-class" || type === "car-poly" || type === "family-inherit" || type === "actor-poly" || type === "car-abstract") && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-bold text-slate-500 uppercase">
              UML Class Diagram: Inheritance & Polymorphism Hierarchy
            </span>
            <div className="flex flex-col items-center gap-3 w-full max-w-sm">
              {/* Parent Superclass */}
              <div className="w-full rounded-xl border-2 border-slate-700 bg-slate-900 p-3 text-center text-white shadow-md">
                <span className="font-mono text-[11px] text-amber-300 font-bold uppercase">&lt;&lt;abstract class&gt;&gt;</span>
                <h4 className="text-sm font-extrabold">Animal (Superclass)</h4>
                <div className="mt-1 border-t border-slate-700 pt-1 font-mono text-[11px] text-slate-300">
                  + abstract void makeSound();
                </div>
              </div>

              <span className="text-xs font-bold text-slate-500 font-mono">▲ extends (IS-A) ▲</span>

              {/* Subclasses */}
              <div className="flex w-full justify-between gap-3">
                <div className={`flex-1 rounded-xl border p-3 text-center transition-all ${activeStep === 1 ? "border-blue-600 bg-blue-50 ring-2 ring-blue-500/30" : "border-slate-300 bg-white"}`}>
                  <span className="text-xl">🐶</span>
                  <h5 className="text-xs font-extrabold text-slate-900">Dog (Subclass)</h5>
                  <span className="font-mono text-[10px] font-bold text-blue-700">@Override: Barks</span>
                </div>
                <div className={`flex-1 rounded-xl border p-3 text-center transition-all ${activeStep === 2 ? "border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500/30" : "border-slate-300 bg-white"}`}>
                  <span className="text-xl">🐱</span>
                  <h5 className="text-xs font-extrabold text-slate-900">Cat (Subclass)</h5>
                  <span className="font-mono text-[10px] font-bold text-emerald-800">@Override: Meows</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. STACK & QUEUE DATA STRUCTURE VISUALIZER */}
        {(type === "stack-plates" || type === "queue-line" || type === "array-lockers") && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-bold text-slate-500 uppercase">
              Data Structure Memory Layout (LIFO Stack vs FIFO Queue)
            </span>
            <div className="flex flex-col items-center gap-2">
              <div className={`w-56 rounded-xl border-2 p-3 text-center transition-all ${activeStep === 0 ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold scale-105" : "border-slate-300 bg-white text-slate-800"}`}>
                <span className="font-mono text-xs">Top Element [POP FIRST (LIFO)]</span>
              </div>
              <div className={`w-56 rounded-xl border p-3 text-center transition-all ${activeStep === 1 ? "border-blue-600 bg-blue-50 text-blue-950 font-bold" : "border-slate-300 bg-white text-slate-800"}`}>
                <span className="font-mono text-xs">Middle Element</span>
              </div>
              <div className="w-56 rounded-xl border border-slate-300 bg-slate-100 p-3 text-center text-slate-700">
                <span className="font-mono text-xs">Bottom Element [PUSHED FIRST]</span>
              </div>
            </div>
          </div>
        )}

        {/* 4. HASHMAP COLLISION HANDLING VISUALIZER */}
        {type === "hashmap-mail" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-bold text-slate-500 uppercase">
              HashMap Internals: Array Buckets + LinkedList Chaining
            </span>
            <div className="flex flex-col gap-2 w-full max-w-md">
              <div className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white p-2.5">
                <span className="rounded-lg bg-blue-600 px-2 py-1 font-mono text-xs font-bold text-white">Bucket [4]</span>
                <span className="font-mono text-xs text-slate-700">&quot;Renuka&quot; ➔ 98%</span>
                <span className="font-mono text-xs text-blue-600 font-bold">➔ LinkedList Node</span>
              </div>
              <div className={`flex items-center gap-2 rounded-xl border p-2.5 transition-all ${activeStep === 1 ? "border-emerald-600 bg-emerald-50" : "border-slate-300 bg-white"}`}>
                <span className="rounded-lg bg-emerald-700 px-2 py-1 font-mono text-xs font-bold text-white">Bucket [7]</span>
                <span className="font-mono text-xs text-slate-800 font-bold">&quot;Java&quot; ➔ &quot;JVM&quot;</span>
                <span className="font-mono text-xs text-emerald-800 font-bold">➔ O(1) Fast Index</span>
              </div>
            </div>
          </div>
        )}

        {/* 5. DEFAULT UML ARCHITECTURE FLOWCHART */}
        {type !== "rest-waiter" && type !== "spring-factory" && type !== "cookie-class" && type !== "car-poly" && type !== "family-inherit" && type !== "actor-poly" && type !== "car-abstract" && type !== "stack-plates" && type !== "queue-line" && type !== "array-lockers" && type !== "hashmap-mail" && (
          <div className="flex flex-col items-center text-center gap-3">
            <span className="text-4xl">📐</span>
            <span className="text-sm font-extrabold text-slate-900">UML System Architecture Diagram</span>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
              <span>Client Request</span>
              <span>➔</span>
              <span className="text-blue-700">Service API</span>
              <span>➔</span>
              <span className="text-emerald-700">Enterprise Database</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
