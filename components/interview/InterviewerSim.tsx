"use client";

import React, { useState } from "react";
import { INTERVIEW_MODULES } from "@/lib/interviewData";
import VoiceAnalyticsTrainer from "./VoiceAnalyticsTrainer";

export default function InterviewerSim() {
  const [personality, setPersonality] = useState<
    "friendlyHR" | "seriousEngineer" | "strictSeniorEngineer"
  >("seriousEngineer");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSimActive, setIsSimActive] = useState(false);

  const activeQuestions = INTERVIEW_MODULES.slice(0, 5).map((mod) => ({
    moduleTitle: mod.shortTitle,
    question: mod.personalityQuestions[personality],
    scriptAnswer: mod.fiveModes.script.answerText,
    durationSec: mod.fiveModes.script.durationSec,
  }));

  const currentQ = activeQuestions[currentQuestionIndex];

  return (
    <div className="rounded-3xl border border-[#224022] bg-[#050a06]/95 p-6 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#224022] pb-5">
        <div>
          <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-purple-300">
            Real-Time Virtual Interview Simulator
          </span>
          <h2 className="mt-2 text-2xl font-bold text-white">15-Minute Mock Interview Room</h2>
        </div>

        {/* Personality Selector */}
        <div className="flex items-center gap-2 rounded-2xl border border-[#224022] bg-[#0d160e] p-1.5">
          <button
            onClick={() => setPersonality("friendlyHR")}
            className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
              personality === "friendlyHR"
                ? "bg-[#43e8b0] text-black"
                : "text-[#b8ffb8] hover:bg-[#152417]"
            }`}
          >
            🙂 Friendly HR
          </button>
          <button
            onClick={() => setPersonality("seriousEngineer")}
            className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
              personality === "seriousEngineer"
                ? "bg-[#43e8b0] text-black"
                : "text-[#b8ffb8] hover:bg-[#152417]"
            }`}
          >
            😐 Serious Engineer
          </button>
          <button
            onClick={() => setPersonality("strictSeniorEngineer")}
            className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
              personality === "strictSeniorEngineer"
                ? "bg-[#43e8b0] text-black"
                : "text-[#b8ffb8] hover:bg-[#152417]"
            }`}
          >
            😈 Strict Senior Engineer
          </button>
        </div>
      </div>

      {!isSimActive ? (
        <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-[#1b2e1b] bg-[#08100a] p-10 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-purple-400/40 bg-purple-400/10 text-4xl">
            🎙️
          </div>
          <h3 className="mt-4 text-xl font-bold text-white">Ready for your Mock Interview?</h3>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-[#92c592]">
            You will face 5 core questions under your chosen interviewer personality:{" "}
            <span className="font-bold text-[#43e8b0]">
              {personality === "friendlyHR"
                ? "🙂 Friendly HR"
                : personality === "seriousEngineer"
                ? "😐 Serious Engineer"
                : "😈 Strict Senior Engineer"}
            </span>
            . Answer out loud in Band 5.5 English!
          </p>

          <button
            onClick={() => setIsSimActive(true)}
            className="mt-6 rounded-2xl border border-[#43e8b0] bg-[#43e8b0] px-8 py-3.5 text-sm font-extrabold text-black shadow-xl transition hover:bg-[#32c896]"
          >
            ▶️ Begin 15-Minute Simulation
          </button>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-6">
          <div className="flex items-center justify-between rounded-xl border border-[#224022] bg-[#0a140c] p-4">
            <span className="font-mono text-xs font-bold text-[#43e8b0]">
              Question {currentQuestionIndex + 1} of {activeQuestions.length} ({currentQ.moduleTitle})
            </span>
            <div className="flex gap-2">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex((p) => Math.max(0, p - 1))}
                className="rounded-lg border border-[#224022] bg-[#0d160e] px-3 py-1 text-xs text-[#b8ffb8] disabled:opacity-40"
              >
                ← Prev Question
              </button>
              <button
                disabled={currentQuestionIndex === activeQuestions.length - 1}
                onClick={() => setCurrentQuestionIndex((p) => Math.min(activeQuestions.length - 1, p + 1))}
                className="rounded-lg border border-[#224022] bg-[#0d160e] px-3 py-1 text-xs text-[#b8ffb8] disabled:opacity-40"
              >
                Next Question →
              </button>
            </div>
          </div>

          <VoiceAnalyticsTrainer
            question={currentQ.question}
            expectedScript={currentQ.scriptAnswer}
            targetDurationSec={currentQ.durationSec}
          />
        </div>
      )}
    </div>
  );
}
