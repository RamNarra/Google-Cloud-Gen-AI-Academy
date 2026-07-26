"use client";

import React, { useState } from "react";
import { InterviewModule } from "@/lib/interviewData";
import DiagramCanvas from "./DiagramCanvas";
import AudioPractice from "./AudioPractice";

interface ModuleViewerProps {
  module: InterviewModule;
}

export default function ModuleViewer({ module }: ModuleViewerProps) {
  const [activeTab, setActiveTab] = useState<
    "story" | "diagram" | "script" | "concepts" | "audio"
  >("story");

  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-[#224022] bg-[#060a07]/95 p-6 shadow-2xl backdrop-blur-xl">
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#224022] pb-5">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#43e8b0]/30 bg-[#43e8b0]/10 text-2xl">
            {module.icon}
          </span>
          <div>
            <span className="rounded-full border border-[#43e8b0]/30 bg-[#43e8b0]/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#43e8b0]">
              {module.category}
            </span>
            <h2 className="mt-1 text-xl font-bold text-[#ffffff]">{module.title}</h2>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-[#224022] bg-[#0d160e] p-1.5">
          <button
            onClick={() => setActiveTab("story")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "story"
                ? "bg-[#43e8b0] text-black shadow-lg"
                : "text-[#b8ffb8] hover:bg-[#152417]"
            }`}
          >
            💡 Visual Story
          </button>
          <button
            onClick={() => setActiveTab("diagram")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "diagram"
                ? "bg-[#43e8b0] text-black shadow-lg"
                : "text-[#b8ffb8] hover:bg-[#152417]"
            }`}
          >
            📐 3D & UML Diagram
          </button>
          <button
            onClick={() => setActiveTab("script")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "script"
                ? "bg-[#43e8b0] text-black shadow-lg"
                : "text-[#b8ffb8] hover:bg-[#152417]"
            }`}
          >
            💬 30s Script
          </button>
          <button
            onClick={() => setActiveTab("concepts")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "concepts"
                ? "bg-[#43e8b0] text-black shadow-lg"
                : "text-[#b8ffb8] hover:bg-[#152417]"
            }`}
          >
            📚 Concepts
          </button>
          <button
            onClick={() => setActiveTab("audio")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "audio"
                ? "bg-[#43e8b0] text-black shadow-lg"
                : "text-[#b8ffb8] hover:bg-[#152417]"
            }`}
          >
            🎙️ Audio Practice
          </button>
        </div>
      </div>

      {/* Tab 1: Visual Story & Analogy */}
      {activeTab === "story" && (
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-[#43e8b0]/30 bg-gradient-to-br from-[#0c1b0e] to-[#060c07] p-6">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#43e8b0]">
              REAL-WORLD ANALOGY STORY
            </span>
            <h3 className="mt-2 text-lg font-bold text-[#ffffff]">
              {module.fiveModes.story.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#cdeecd]">
              {module.fiveModes.story.text}
            </p>
            <div className="mt-5 rounded-xl border border-[#43e8b0]/20 bg-[#43e8b0]/10 p-4">
              <span className="font-mono text-[10px] uppercase font-bold text-[#43e8b0]">
                KEY TAKEAWAY TO REMEMBER:
              </span>
              <p className="mt-1 text-xs font-medium text-[#e2ffe2]">
                {module.fiveModes.story.takeaway}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Interactive 3D / SVG Diagram */}
      {activeTab === "diagram" && (
        <div>
          <DiagramCanvas spec={module.fiveModes.diagramSpec} />
        </div>
      )}

      {/* Tab 3: 30-Second Band 5.5 Script */}
      {activeTab === "script" && (
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-cyan-500/30 bg-[#071318] p-6">
            <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">
              EXPECTED INTERVIEWER QUESTION
            </span>
            <h3 className="mt-1 text-base font-bold text-white">
              &ldquo;{module.fiveModes.script.question}&rdquo;
            </h3>

            <div className="mt-4 rounded-xl border border-cyan-500/20 bg-[#0b212a] p-5">
              <div className="flex items-center justify-between text-xs text-cyan-300">
                <span className="font-mono font-semibold">
                  YOUR 30-SECOND ANSWER (BAND 5.5 ENGLISH):
                </span>
                <span className="font-mono">~{module.fiveModes.script.durationSec} Secs</span>
              </div>
              <p className="mt-3 text-sm font-medium leading-relaxed text-cyan-100">
                {module.fiveModes.script.answerText}
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-red-500/30 bg-red-950/30 p-4">
              <span className="font-mono text-[10px] uppercase font-bold text-red-400">
                ⚠️ WHAT NOT TO SAY (SAFETY WARNING):
              </span>
              <p className="mt-1 text-xs text-red-200">{module.fiveModes.script.whatNotToSay}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Key Concepts */}
      {activeTab === "concepts" && (
        <div className="flex flex-col gap-3">
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#43e8b0]">
            CORE CONCEPTS & DEFINITIONS
          </h3>
          {module.keyConcepts.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-[#1f3820] bg-[#0a120b] p-4">
              <h4 className="text-sm font-bold text-[#ffffff]">{item.term}</h4>
              <p className="mt-1 text-xs text-[#b8ffb8]">{item.definition}</p>
              <div className="mt-2 rounded bg-black/40 p-2 font-mono text-[11px] text-[#629462]">
                Example: {item.example}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 5: Audio Practice Trainer */}
      {activeTab === "audio" && (
        <div>
          <AudioPractice
            scriptQuestion={module.fiveModes.script.question}
            scriptAnswer={module.fiveModes.script.answerText}
            targetDurationSec={module.fiveModes.script.durationSec}
          />
        </div>
      )}
    </div>
  );
}
