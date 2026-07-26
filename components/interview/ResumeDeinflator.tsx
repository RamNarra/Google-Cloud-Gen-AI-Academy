"use client";

import React, { useState } from "react";
import { RESUME_DEINFLATOR_ITEMS, ResumeBulletItem } from "@/lib/resumeData";

interface ResumeDeinflatorProps {
  onSelectConceptModule: (moduleId: string) => void;
}

export default function ResumeDeinflator({ onSelectConceptModule }: ResumeDeinflatorProps) {
  const [selectedItemId, setSelectedItemId] = useState<string>(RESUME_DEINFLATOR_ITEMS[0].id);

  const selectedItem =
    RESUME_DEINFLATOR_ITEMS.find((item) => item.id === selectedItemId) ||
    RESUME_DEINFLATOR_ITEMS[0];

  return (
    <div className="rounded-3xl border border-[#224022] bg-[#050a06]/95 p-6 shadow-2xl backdrop-blur-xl">
      <div className="border-b border-[#224022] pb-4">
        <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-amber-300">
          Resume De-Inflator & Concept Map
        </span>
        <h2 className="mt-2 text-2xl font-bold text-white">Resume Project Survival Guide</h2>
        <p className="mt-1 text-xs text-[#92c592]">
          De-inflate fancy resume HR buzzwords into 3 simple, honest sentences you can speak with complete confidence.
        </p>
      </div>

      {/* Project Selection Tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {RESUME_DEINFLATOR_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItemId(item.id)}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
              selectedItemId === item.id
                ? "border border-amber-400 bg-amber-400 text-black shadow-lg"
                : "border border-[#224022] bg-[#0d160e] text-[#b8ffb8] hover:border-amber-400/40"
            }`}
          >
            {item.projectName}
          </button>
        ))}
      </div>

      {/* Project Inspection Container */}
      <div className="mt-6 flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Scary HR Version */}
          <div className="rounded-2xl border border-red-500/30 bg-red-950/20 p-5">
            <span className="font-mono text-[10px] uppercase font-bold text-red-400">
              ⚡ SCARY HR RESUME BULLET (WHAT THEY READ):
            </span>
            <p className="mt-2 font-mono text-xs italic leading-relaxed text-red-200">
              &ldquo;{selectedItem.scaryHrVersion}&rdquo;
            </p>
          </div>

          {/* Human Translation */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5">
            <span className="font-mono text-[10px] uppercase font-bold text-emerald-400">
              🌱 SIMPLE HUMAN STORY (WHAT IT ACTUALLY MEANS):
            </span>
            <p className="mt-2 text-sm font-medium leading-relaxed text-emerald-100">
              {selectedItem.humanTranslation}
            </p>
          </div>
        </div>

        {/* 1-Sentence Pitch & 30s Script */}
        <div className="rounded-2xl border border-[#224022] bg-[#09120b] p-6">
          <span className="font-mono text-[10px] uppercase font-bold text-[#43e8b0]">
            YOUR 30-SECOND SPOKEN ANSWER (BAND 5.5 ENGLISH):
          </span>
          <div className="mt-2 rounded-xl border border-[#1b2e1b] bg-[#050805] p-4 text-sm font-medium leading-relaxed text-[#ffffff]">
            {selectedItem.script30Sec}
          </div>

          <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-950/20 p-4">
            <span className="font-mono text-[10px] uppercase font-bold text-amber-300">
              1-SENTENCE ELEVATOR PITCH:
            </span>
            <p className="mt-1 text-xs font-semibold text-amber-100">
              &ldquo;{selectedItem.oneSentencePitch}&rdquo;
            </p>
          </div>
        </div>

        {/* Cross-Linked Concept Tree */}
        <div className="rounded-2xl border border-[#224022] bg-[#0a150c] p-5">
          <span className="font-mono text-[10px] uppercase font-bold text-[#43e8b0]">
            🔗 CROSS-LINKED BUILDING BLOCK CONCEPT MAP:
          </span>
          <p className="mt-1 text-xs text-[#81b581]">
            Click any underlying technical concept keyword to jump directly to its 5-mode learning module:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {selectedItem.crossLinkedModuleIds.map((modId) => (
              <button
                key={modId}
                onClick={() => onSelectConceptModule(modId)}
                className="rounded-xl border border-[#43e8b0]/40 bg-[#43e8b0]/10 px-3.5 py-1.5 font-mono text-xs font-bold text-[#43e8b0] transition hover:bg-[#43e8b0]/20 hover:scale-105"
              >
                ➔ Jump to Module ({modId})
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
