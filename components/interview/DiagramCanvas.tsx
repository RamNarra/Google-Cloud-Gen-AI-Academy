"use client";

import React, { useState } from "react";
import { DiagramSpec } from "@/lib/interviewData";

interface DiagramCanvasProps {
  spec: DiagramSpec;
}

export default function DiagramCanvas({ spec }: DiagramCanvasProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const getNodeColor = (type?: string) => {
    switch (type) {
      case "actor":
        return "border-[#43e8b0] bg-[#43e8b0]/10 text-[#43e8b0]";
      case "class":
        return "border-cyan-400 bg-cyan-950/40 text-cyan-300";
      case "database":
        return "border-amber-400 bg-amber-950/40 text-amber-300";
      case "cloud":
        return "border-purple-400 bg-purple-950/40 text-purple-300";
      case "component":
        return "border-emerald-400 bg-emerald-950/40 text-emerald-300";
      default:
        return "border-blue-400 bg-blue-950/40 text-blue-300";
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#224022] bg-[#090e0a] p-5 shadow-2xl backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#224022]/60 pb-3">
        <div>
          <span className="rounded-md border border-[#43e8b0]/30 bg-[#43e8b0]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#43e8b0]">
            Interactive 3D / SVG Visualizer
          </span>
          <h3 className="mt-1 text-lg font-semibold text-[#e2ffe2]">{spec.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : spec.edges.length - 1))}
            className="rounded-lg border border-[#224022] bg-[#0d150e] px-3 py-1.5 text-xs text-[#b8ffb8] transition hover:border-[#43e8b0]"
          >
            ← Prev Step
          </button>
          <span className="font-mono text-xs text-[#629462]">
            Step {activeStep + 1} / {spec.edges.length}
          </span>
          <button
            onClick={() => setActiveStep((prev) => (prev < spec.edges.length - 1 ? prev + 1 : 0))}
            className="rounded-lg border border-[#224022] bg-[#0d150e] px-3 py-1.5 text-xs text-[#b8ffb8] transition hover:border-[#43e8b0]"
          >
            Next Step →
          </button>
        </div>
      </div>

      {/* Diagram Canvas Container */}
      <div className="relative min-h-[340px] w-full overflow-hidden rounded-xl border border-[#1b2e1b] bg-[#050805] p-6">
        <div className="absolute inset-0 bg-[radial-gradient(#152615_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

        {/* Nodes Grid */}
        <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spec.nodes.map((node, index) => {
            const isHighlighted = selectedNode === node.id;
            const isStepActive =
              spec.edges[activeStep]?.from === node.id || spec.edges[activeStep]?.to === node.id;

            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                className={`group relative cursor-pointer rounded-xl border p-4 transition-all duration-300 ${getNodeColor(
                  node.type
                )} ${
                  isStepActive ? "ring-2 ring-[#43e8b0] ring-offset-2 ring-offset-[#050805] scale-[1.02]" : ""
                } ${isHighlighted ? "shadow-[0_0_20px_rgba(67,232,176,0.3)]" : "opacity-90 hover:opacity-100"}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] opacity-70">Node #{index + 1}</span>
                  {node.type && (
                    <span className="rounded bg-black/40 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide">
                      {node.type}
                    </span>
                  )}
                </div>
                <h4 className="mt-2 text-sm font-bold text-[#ffffff]">{node.label}</h4>
                {node.sub && (
                  <pre className="mt-2 overflow-x-auto rounded bg-black/50 p-2 font-mono text-[11px] leading-relaxed text-[#c0eec0]">
                    {node.sub}
                  </pre>
                )}
                {isStepActive && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#43e8b0] text-[9px] font-bold text-black animate-pulse">
                    !
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Active Edge Flow Description */}
        {spec.edges[activeStep] && (
          <div className="relative z-10 mt-6 rounded-xl border border-[#43e8b0]/40 bg-[#0d1a0f]/90 p-4 backdrop-blur">
            <div className="flex items-center justify-between text-xs text-[#43e8b0]">
              <span className="font-mono font-semibold">Active Message / Flow:</span>
              <span className="font-mono">
                From: <span className="underline">{spec.edges[activeStep].from}</span> → To:{" "}
                <span className="underline">{spec.edges[activeStep].to}</span>
              </span>
            </div>
            <p className="mt-1 text-sm font-semibold text-[#ffffff]">
              👉 {spec.edges[activeStep].label || "Data flow step"}
            </p>
          </div>
        )}
      </div>

      <p className="text-xs leading-relaxed text-[#81b581]">{spec.description}</p>
    </div>
  );
}
