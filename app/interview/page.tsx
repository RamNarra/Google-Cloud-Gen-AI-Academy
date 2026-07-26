"use client";

import React, { useState, useEffect } from "react";
import { CONCEPT_NODES, ConceptNode } from "@/lib/interview/concepts";
import { loadUserProgress, saveUserTopicState, UserTopicState } from "@/lib/interview/spacedRepetition";
import KnowledgeGraph from "@/components/interview/KnowledgeGraph";
import ModuleViewerV2 from "@/components/interview/ModuleViewerV2";
import ResumeDeinflator from "@/components/interview/ResumeDeinflator";
import InterviewerSim from "@/components/interview/InterviewerSim";
import MasteryDashboard from "@/components/interview/MasteryDashboard";
import WhiteboardCanvas from "@/components/interview/WhiteboardCanvas";
import { INTERVIEW_MODULES } from "@/lib/interviewData";

export default function AdaptiveInterviewPage() {
  const [selectedConceptId, setSelectedConceptId] = useState<string>("java-oop-encapsulation");
  const [activeTab, setActiveTab] = useState<"graph" | "resume" | "simulator" | "mastery">("graph");
  const [isEmergencyTomorrowMode, setIsEmergencyTomorrowMode] = useState<boolean>(false);
  const [userProgress, setUserProgress] = useState<Record<string, UserTopicState>>({});

  useEffect(() => {
    setUserProgress(loadUserProgress());
  }, []);

  const handleSetConfidence = (id: string, status: "confident" | "revising" | "panic") => {
    const updated = saveUserTopicState(id, status);
    setUserProgress(updated);
  };

  const selectedNode =
    CONCEPT_NODES.find((n) => n.id === selectedConceptId) || CONCEPT_NODES[0];

  const selectedLegacyModule =
    INTERVIEW_MODULES.find((m) => m.id === selectedConceptId) || INTERVIEW_MODULES[0];

  return (
    <div className="min-h-screen bg-[#030503] px-4 py-8 text-[#e2ffe2] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-[#224022] bg-gradient-to-r from-[#061208] via-[#0b1f11] to-[#040905] p-8 shadow-2xl">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#43e8b0]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[#43e8b0]/40 bg-[#43e8b0]/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#43e8b0]">
                  FSM Associate Software Engineer
                </span>
                <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-amber-300">
                  Adaptive Interview Coach
                </span>
              </div>
              <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Interview Prep & Knowledge Graph System
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-[#a5dda5]">
                Adaptive interview coach optimizing for understanding, recall, and speaking fluency in Band 5.5 English.
              </p>
            </div>

            {/* Emergency Mode Toggle */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-amber-500/40 bg-amber-950/30 p-4 text-center">
              <span className="font-mono text-[10px] font-bold text-amber-400">
                EMERGENCY MODE
              </span>
              <button
                onClick={() => setIsEmergencyTomorrowMode(!isEmergencyTomorrowMode)}
                className={`mt-2 rounded-xl px-5 py-2.5 font-mono text-xs font-extrabold shadow-lg transition ${
                  isEmergencyTomorrowMode
                    ? "bg-amber-400 text-black animate-pulse"
                    : "border border-amber-400/50 bg-amber-950/50 text-amber-200 hover:bg-amber-900/60"
                }`}
              >
                {isEmergencyTomorrowMode ? "⚡ INTERVIEW TOMORROW ACTIVE" : "⚡ INTERVIEW TOMORROW"}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="mt-8 flex flex-wrap gap-2 rounded-2xl border border-[#224022] bg-[#09120a] p-2">
          <button
            onClick={() => setActiveTab("graph")}
            className={`rounded-xl px-4 py-2 font-mono text-xs font-bold transition ${
              activeTab === "graph"
                ? "bg-[#43e8b0] text-black shadow-lg"
                : "text-[#b8ffb8] hover:bg-[#132415]"
            }`}
          >
            🗺️ Concept Knowledge Graph
          </button>
          <button
            onClick={() => setActiveTab("resume")}
            className={`rounded-xl px-4 py-2 font-mono text-xs font-bold transition ${
              activeTab === "resume"
                ? "bg-[#43e8b0] text-black shadow-lg"
                : "text-[#b8ffb8] hover:bg-[#132415]"
            }`}
          >
            📝 Resume De-Inflator & Interrogation
          </button>
          <button
            onClick={() => setActiveTab("simulator")}
            className={`rounded-xl px-4 py-2 font-mono text-xs font-bold transition ${
              activeTab === "simulator"
                ? "bg-[#43e8b0] text-black shadow-lg"
                : "text-[#b8ffb8] hover:bg-[#132415]"
            }`}
          >
            🎙️ Virtual Mock Simulator
          </button>
          <button
            onClick={() => setActiveTab("mastery")}
            className={`rounded-xl px-4 py-2 font-mono text-xs font-bold transition ${
              activeTab === "mastery"
                ? "bg-[#43e8b0] text-black shadow-lg"
                : "text-[#b8ffb8] hover:bg-[#132415]"
            }`}
          >
            📊 Mastery & Spaced Repetition
          </button>
        </div>

        {/* Tab 1: Knowledge Graph & Concept Viewer */}
        {activeTab === "graph" && (
          <div className="mt-6 flex flex-col gap-8">
            <KnowledgeGraph
              userProgress={userProgress}
              selectedConceptId={selectedConceptId}
              onSelectConcept={(id) => setSelectedConceptId(id)}
            />

            <ModuleViewerV2
              module={selectedLegacyModule}
              onSetConfidence={handleSetConfidence}
              userConfidence={userProgress[selectedConceptId]?.status}
            />

            <WhiteboardCanvas conceptTitle={selectedNode.shortTitle} />
          </div>
        )}

        {/* Tab 2: Resume De-Inflator */}
        {activeTab === "resume" && (
          <div className="mt-6">
            <ResumeDeinflator
              onSelectConceptModule={(modId) => {
                setSelectedConceptId(modId);
                setActiveTab("graph");
              }}
            />
          </div>
        )}

        {/* Tab 3: Virtual Simulator */}
        {activeTab === "simulator" && (
          <div className="mt-6">
            <InterviewerSim />
          </div>
        )}

        {/* Tab 4: Mastery Dashboard */}
        {activeTab === "mastery" && (
          <div className="mt-6">
            <MasteryDashboard
              userProgress={userProgress}
              onSelectConcept={(id) => {
                setSelectedConceptId(id);
                setActiveTab("graph");
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
