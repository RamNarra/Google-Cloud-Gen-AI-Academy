"use client";

import React, { useState } from "react";
import { CONCEPT_NODES, ConceptNode } from "@/lib/interview/concepts";
import { UserTopicState } from "@/lib/interview/spacedRepetition";

interface KnowledgeGraphProps {
  userProgress: Record<string, UserTopicState>;
  selectedConceptId: string;
  onSelectConcept: (conceptId: string) => void;
}

export default function KnowledgeGraph({
  userProgress,
  selectedConceptId,
  onSelectConcept,
}: KnowledgeGraphProps) {
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const filteredNodes = CONCEPT_NODES.filter(
    (node) => filterCategory === "All" || node.category === filterCategory
  );

  return (
    <div className="rounded-3xl border border-[#224022] bg-[#060b07]/95 p-6 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#224022] pb-4">
        <div>
          <span className="rounded-full border border-[#43e8b0]/40 bg-[#43e8b0]/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#43e8b0]">
            Interactive Concept DAG
          </span>
          <h2 className="mt-2 text-xl font-bold text-white">Interview Concept Knowledge Graph</h2>
          <p className="mt-1 text-xs text-[#8cb48c]">
            Prerequisite links, danger risk ratings, and real interview probability.
          </p>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-1.5">
          {["All", "Java & OOP", "DSA", "Database", "Backend", "DevOps & AI"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`rounded-xl px-3 py-1 font-mono text-[11px] font-bold transition ${
                filterCategory === cat
                  ? "bg-[#43e8b0] text-black shadow"
                  : "border border-[#224022] bg-[#0c140d] text-[#b8ffb8] hover:border-[#43e8b0]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Visual DAG Nodes Container */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredNodes.map((node) => {
          const isSelected = node.id === selectedConceptId;
          const userState = userProgress[node.id];
          const status = userState?.status || "revising";

          const statusBadge =
            status === "confident"
              ? "🟢 Confident"
              : status === "panic"
              ? "🔴 Panic Zone"
              : "🟡 Revising";

          return (
            <div
              key={node.id}
              onClick={() => onSelectConcept(node.id)}
              className={`group relative cursor-pointer flex flex-col justify-between rounded-2xl border p-4 transition-all duration-300 ${
                isSelected
                  ? "border-[#43e8b0] bg-gradient-to-b from-[#0f2414] to-[#071309] shadow-[0_0_20px_rgba(67,232,176,0.25)] scale-[1.02]"
                  : "border-[#1b2e1b] bg-[#070c08] hover:border-[#43e8b0]/50 hover:bg-[#0a140d]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{node.icon}</span>
                  <span className="font-mono text-[10px] font-bold text-amber-300">
                    {"★".repeat(node.realInterviewProbability)}
                    {"☆".repeat(5 - node.realInterviewProbability)}
                  </span>
                </div>

                <h3 className="mt-2 text-sm font-bold text-white group-hover:text-[#43e8b0] transition">
                  {node.shortTitle}
                </h3>
                <p className="mt-1 font-mono text-[10px] text-[#629462]">
                  Danger: <span className="font-bold">{node.dangerLevel}</span>
                </p>

                {/* Prerequisite Tags */}
                {node.prerequisites.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {node.prerequisites.map((reqId) => (
                      <span
                        key={reqId}
                        className="rounded bg-[#122214] px-1.5 py-0.5 font-mono text-[9px] text-[#71a671]"
                      >
                        Prereq: {reqId}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[#1b2e1b] pt-2 text-[10px]">
                <span className="font-mono text-[#8cb48c]">{statusBadge}</span>
                <span className="font-mono text-[#43e8b0]">Open Node ➔</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
