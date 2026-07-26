"use client";

import React, { useState } from "react";
import { InterviewModule } from "@/lib/interviewData";
import DiagramCanvas from "./DiagramCanvas";
import VoiceAnalyticsTrainer from "./VoiceAnalyticsTrainer";

interface ModuleViewerV2Props {
  module: InterviewModule;
  onSetConfidence: (id: string, status: "confident" | "revising" | "panic") => void;
  userConfidence: "confident" | "revising" | "panic" | undefined;
}

export default function ModuleViewerV2({
  module,
  onSetConfidence,
  userConfidence,
}: ModuleViewerV2Props) {
  const [activeMode, setActiveMode] = useState<"kid" | "story" | "diagram" | "script" | "followup">(
    "story"
  );
  const [difficulty, setDifficulty] = useState<"kid" | "beginner" | "interview" | "tech">(
    "interview"
  );
  const [isPanicActive, setIsPanicActive] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-[#224022] bg-[#060b07]/95 p-6 shadow-2xl backdrop-blur-xl">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#224022] pb-5">
        <div className="flex items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#43e8b0]/30 bg-[#43e8b0]/10 text-3xl">
            {module.icon}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#43e8b0]/30 bg-[#43e8b0]/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#43e8b0]">
                {module.category}
              </span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300">
                Memory Anchor: {module.memoryAnchorText}
              </span>
            </div>
            <h2 className="mt-1 text-2xl font-bold text-white">{module.title}</h2>
          </div>
        </div>

        {/* Confidence Meter Controls */}
        <div className="flex items-center gap-2 rounded-2xl border border-[#224022] bg-[#0d160e] p-1.5">
          <button
            onClick={() => onSetConfidence(module.id, "confident")}
            className={`rounded-xl px-3 py-1.5 font-mono text-xs font-bold transition ${
              userConfidence === "confident"
                ? "bg-emerald-400 text-black shadow"
                : "text-emerald-300 hover:bg-[#152417]"
            }`}
          >
            🟢 Confident
          </button>
          <button
            onClick={() => onSetConfidence(module.id, "revising")}
            className={`rounded-xl px-3 py-1.5 font-mono text-xs font-bold transition ${
              userConfidence === "revising"
                ? "bg-amber-400 text-black shadow"
                : "text-amber-300 hover:bg-[#152417]"
            }`}
          >
            🟡 Revising
          </button>
          <button
            onClick={() => onSetConfidence(module.id, "panic")}
            className={`rounded-xl px-3 py-1.5 font-mono text-xs font-bold transition ${
              userConfidence === "panic"
                ? "bg-red-500 text-white shadow"
                : "text-red-300 hover:bg-[#152417]"
            }`}
          >
            🔴 Panic Zone
          </button>
        </div>
      </div>

      {/* Emergency Panic Mode Button */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-red-500/30 bg-red-950/20 p-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚨</span>
          <div>
            <h4 className="text-xs font-bold text-red-300">Emergency Panic Shield</h4>
            <p className="text-[11px] text-red-200/80">
              Entering interview room in 2 minutes? Click to isolate top 3 bullet points only.
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsPanicActive(!isPanicActive)}
          className={`rounded-xl px-4 py-2 font-mono text-xs font-extrabold transition ${
            isPanicActive
              ? "bg-red-600 text-white animate-pulse"
              : "border border-red-500/50 bg-red-950/50 text-red-200 hover:bg-red-900/50"
          }`}
        >
          {isPanicActive ? "Exit Panic Shield" : "I FORGOT EVERYTHING 😭"}
        </button>
      </div>

      {/* Panic Shield View */}
      {isPanicActive && (
        <div className="rounded-2xl border-2 border-red-500 bg-[#140607] p-6 shadow-2xl">
          <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-red-400">
            EMERGENCY RECALL — ONLY REMEMBER THESE 3 THINGS:
          </span>
          <ul className="mt-3 flex flex-col gap-2">
            {module.panicMode3Points.map((pt, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 rounded-xl border border-red-500/20 bg-red-950/40 p-3 text-xs font-bold text-red-100"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
                  {idx + 1}
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Difficulty Slider Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#224022] bg-[#09120a] p-3">
        <span className="font-mono text-xs font-bold text-[#43e8b0]">
          DIFFICULTY LEVEL SLIDER:
        </span>
        <div className="flex items-center gap-2">
          {(["kid", "beginner", "interview", "tech"] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setDifficulty(lvl)}
              className={`rounded-xl px-3 py-1 font-mono text-xs font-bold uppercase transition ${
                difficulty === lvl
                  ? "bg-[#43e8b0] text-black shadow"
                  : "text-[#7aa67a] hover:bg-[#122214]"
              }`}
            >
              {lvl === "kid"
                ? "👶 Kid"
                : lvl === "beginner"
                ? "🌱 Beginner"
                : lvl === "interview"
                ? "🎯 Interview (Band 5.5)"
                : "⚙️ Technical"}
            </button>
          ))}
        </div>
      </div>

      {/* 5-Mode Tabs Bar */}
      <div className="flex flex-wrap gap-2 border-b border-[#224022] pb-3">
        <button
          onClick={() => setActiveMode("kid")}
          className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
            activeMode === "kid"
              ? "bg-[#43e8b0] text-black"
              : "border border-[#224022] bg-[#0b150c] text-[#b8ffb8] hover:border-[#43e8b0]/50"
          }`}
        >
          👶 10-Yr-Old Analogy
        </button>
        <button
          onClick={() => setActiveMode("story")}
          className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
            activeMode === "story"
              ? "bg-[#43e8b0] text-black"
              : "border border-[#224022] bg-[#0b150c] text-[#b8ffb8] hover:border-[#43e8b0]/50"
          }`}
        >
          📖 Story & Anchor
        </button>
        <button
          onClick={() => setActiveMode("diagram")}
          className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
            activeMode === "diagram"
              ? "bg-[#43e8b0] text-black"
              : "border border-[#224022] bg-[#0b150c] text-[#b8ffb8] hover:border-[#43e8b0]/50"
          }`}
        >
          🖼 Interactive Diagram
        </button>
        <button
          onClick={() => setActiveMode("script")}
          className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
            activeMode === "script"
              ? "bg-[#43e8b0] text-black"
              : "border border-[#224022] bg-[#0b150c] text-[#b8ffb8] hover:border-[#43e8b0]/50"
          }`}
        >
          🎤 30s Script
        </button>
        <button
          onClick={() => setActiveMode("followup")}
          className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
            activeMode === "followup"
              ? "bg-[#43e8b0] text-black"
              : "border border-[#224022] bg-[#0b150c] text-[#b8ffb8] hover:border-[#43e8b0]/50"
          }`}
        >
          ❓ Surprise Follow-up
        </button>
      </div>

      {/* Mode Content Views */}

      {/* Mode 1: Kid */}
      {activeMode === "kid" && (
        <div className="rounded-2xl border border-amber-400/30 bg-[#161206] p-6">
          <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400">
            EXPLAIN TO A 10-YEAR-OLD
          </span>
          <h3 className="mt-2 text-lg font-bold text-white">{module.fiveModes.kid.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-amber-100 font-medium">
            {module.fiveModes.kid.text}
          </p>
        </div>
      )}

      {/* Mode 2: Story & Anchor */}
      {activeMode === "story" && (
        <div className="flex flex-col gap-5">
          <div className="rounded-2xl border border-[#43e8b0]/30 bg-gradient-to-br from-[#0c1c0f] to-[#050b06] p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#43e8b0]">
                REAL-WORLD STORY
              </span>
              <span className="text-xl">{module.icon}</span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-white">{module.fiveModes.story.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#c0eec0]">
              {module.fiveModes.story.text}
            </p>
            <div className="mt-4 rounded-xl border border-[#43e8b0]/20 bg-[#43e8b0]/10 p-3.5">
              <span className="font-mono text-[10px] font-bold text-[#43e8b0]">KEY TAKEAWAY:</span>
              <p className="mt-1 text-xs font-semibold text-[#ffffff]">
                {module.fiveModes.story.takeaway}
              </p>
            </div>
          </div>

          {/* "Why?" Chain Section */}
          <div className="rounded-2xl border border-[#224022] bg-[#081109] p-5">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#43e8b0]">
              THE 5-STEP &ldquo;WHY?&rdquo; CHAIN:
            </span>
            <div className="mt-3 flex flex-col gap-2">
              <div className="rounded-xl border border-[#1b2e1b] bg-[#050805] p-3 text-xs">
                <span className="font-mono font-bold text-[#43e8b0]">1. What is it? ➔ </span>
                <span className="text-white">{module.whyChain.whatIsIt}</span>
              </div>
              <div className="rounded-xl border border-[#1b2e1b] bg-[#050805] p-3 text-xs">
                <span className="font-mono font-bold text-[#43e8b0]">2. Why use it? ➔ </span>
                <span className="text-white">{module.whyChain.whyUseIt}</span>
              </div>
              <div className="rounded-xl border border-[#1b2e1b] bg-[#050805] p-3 text-xs">
                <span className="font-mono font-bold text-[#43e8b0]">3. Problem it solves ➔ </span>
                <span className="text-white">{module.whyChain.problemItSolves}</span>
              </div>
              <div className="rounded-xl border border-[#1b2e1b] bg-[#050805] p-3 text-xs">
                <span className="font-mono font-bold text-[#43e8b0]">4. Where used? ➔ </span>
                <span className="text-white">{module.whyChain.whereDidYouUseIt}</span>
              </div>
              <div className="rounded-xl border border-[#1b2e1b] bg-[#050805] p-3 text-xs">
                <span className="font-mono font-bold text-[#43e8b0]">5. Real example ➔ </span>
                <span className="text-white">{module.whyChain.realWorldExample}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: Interactive Diagram */}
      {activeMode === "diagram" && (
        <div>
          <DiagramCanvas spec={module.fiveModes.diagramSpec} />
        </div>
      )}

      {/* Mode 4: 30-Second Script & Voice Analytics */}
      {activeMode === "script" && (
        <div className="flex flex-col gap-6">
          {/* Why Interviewer Asks Insight */}
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-4">
            <span className="font-mono text-[10px] uppercase font-bold text-cyan-400">
              💡 WHY THE INTERVIEWER IS ASKING THIS:
            </span>
            <p className="mt-1 text-xs text-cyan-100 font-medium">{module.whyInterviewerAsks}</p>
          </div>

          <VoiceAnalyticsTrainer
            question={module.fiveModes.script.question}
            expectedScript={module.fiveModes.script.answerText}
            targetDurationSec={module.fiveModes.script.durationSec}
          />
        </div>
      )}

      {/* Mode 5: Surprise Follow-up & Trap */}
      {activeMode === "followup" && (
        <div className="rounded-2xl border border-purple-500/30 bg-[#120818] p-6">
          <span className="font-mono text-[10px] uppercase font-bold text-purple-400">
            ❓ SURPRISE FOLLOW-UP QUESTION
          </span>
          <h3 className="mt-2 text-base font-bold text-white">
            &ldquo;{module.fiveModes.followUp.interviewerQuestion}&rdquo;
          </h3>

          <div className="mt-4 rounded-xl border border-purple-500/20 bg-purple-950/40 p-4">
            <span className="font-mono text-[10px] font-bold text-purple-300">
              BAND 5.5 SAFE RESPONSE:
            </span>
            <p className="mt-2 text-sm font-medium leading-relaxed text-purple-100">
              {module.fiveModes.followUp.answerText}
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-red-500/30 bg-red-950/40 p-4">
            <span className="font-mono text-[10px] uppercase font-bold text-red-400">
              ⚠️ TRAP WARNING (WHAT NOT TO SAY):
            </span>
            <p className="mt-1 text-xs text-red-200">{module.fiveModes.followUp.trapWarning}</p>
          </div>
        </div>
      )}
    </div>
  );
}
