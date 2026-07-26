"use client";

import React from "react";
import { UserTopicState, calculateMasteryMetrics } from "@/lib/interview/spacedRepetition";
import { CONCEPT_NODES } from "@/lib/interview/concepts";

interface MasteryDashboardProps {
  userProgress: Record<string, UserTopicState>;
  onSelectConcept: (conceptId: string) => void;
}

export default function MasteryDashboard({
  userProgress,
  onSelectConcept,
}: MasteryDashboardProps) {
  const metrics = calculateMasteryMetrics(userProgress, CONCEPT_NODES.length);

  // Review Queue (topics with status 'revising' or 'panic')
  const reviewQueue = CONCEPT_NODES.filter((node) => {
    const st = userProgress[node.id]?.status || "revising";
    return st === "revising" || st === "panic";
  });

  return (
    <div className="rounded-3xl border border-[#224022] bg-[#050a06]/95 p-6 shadow-2xl backdrop-blur-xl">
      <div className="border-b border-[#224022] pb-4">
        <span className="rounded-full border border-[#43e8b0]/40 bg-[#43e8b0]/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#43e8b0]">
          Adaptive Learning Metrics
        </span>
        <h2 className="mt-2 text-2xl font-bold text-white">Interview Mastery & Spaced Repetition</h2>
      </div>

      {/* 3 Core Mastery Meters */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Memory Recall */}
        <div className="rounded-2xl border border-[#1b2e1b] bg-[#081109] p-5">
          <span className="font-mono text-[10px] uppercase font-bold text-[#43e8b0]">
            🧠 MEMORY RECALL MASTERY
          </span>
          <div className="mt-2 font-mono text-3xl font-bold text-white">
            {metrics.memoryMastery}%
          </div>
          <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-[#122214]">
            <div
              className="h-full bg-gradient-to-r from-[#43e8b0] to-emerald-400 transition-all duration-500"
              style={{ width: `${metrics.memoryMastery}%` }}
            />
          </div>
        </div>

        {/* Speaking Fluency */}
        <div className="rounded-2xl border border-[#1b2e1b] bg-[#081109] p-5">
          <span className="font-mono text-[10px] uppercase font-bold text-cyan-400">
            🎤 SPEAKING FLUENCY MASTERY
          </span>
          <div className="mt-2 font-mono text-3xl font-bold text-white">
            {metrics.speakingMastery}%
          </div>
          <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-[#122214]">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-500"
              style={{ width: `${metrics.speakingMastery}%` }}
            />
          </div>
        </div>

        {/* Follow-up Survival */}
        <div className="rounded-2xl border border-[#1b2e1b] bg-[#081109] p-5">
          <span className="font-mono text-[10px] uppercase font-bold text-amber-400">
            ❓ FOLLOW-UP SURVIVAL MASTERY
          </span>
          <div className="mt-2 font-mono text-3xl font-bold text-white">
            {metrics.followUpMastery}%
          </div>
          <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-[#122214]">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-500"
              style={{ width: `${metrics.followUpMastery}%` }}
            />
          </div>
        </div>
      </div>

      {/* Spaced Repetition Review Queue */}
      <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-950/10 p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-amber-400">
            ⏳ TODAY&apos;S SPACED REPETITION REVIEW QUEUE ({reviewQueue.length} ITEMS)
          </span>
          <span className="text-[11px] text-amber-200/80">Memory decay engine active</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {reviewQueue.map((node) => (
            <button
              key={node.id}
              onClick={() => onSelectConcept(node.id)}
              className="flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-950/40 px-3.5 py-1.5 font-mono text-xs font-bold text-amber-200 transition hover:bg-amber-900/50 hover:scale-105"
            >
              <span>{node.icon}</span>
              <span>{node.shortTitle}</span>
              <span className="text-[10px] opacity-75">➔ Review</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
