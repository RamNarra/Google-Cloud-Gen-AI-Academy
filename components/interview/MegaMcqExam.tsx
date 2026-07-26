"use client";

import React, { useState } from "react";
import { MEGA_MCQ_QUESTIONS, McqQuestion } from "@/lib/interview/megaMcqData";

export default function MegaMcqExam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, { selected: 'A' | 'B' | 'C' | 'D'; isCorrect: boolean }>>({});

  const currentQ: McqQuestion = MEGA_MCQ_QUESTIONS[currentIndex];
  const totalQuestions = MEGA_MCQ_QUESTIONS.length;

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;
    setSelectedOption(key);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    const isCorrect = selectedOption === currentQ.correctOption;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: { selected: selectedOption, isCorrect }
    }));
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      const prevAns = userAnswers[MEGA_MCQ_QUESTIONS[nextIdx].id];
      if (prevAns) {
        setSelectedOption(prevAns.selected);
        setIsSubmitted(true);
      } else {
        setSelectedOption(null);
        setIsSubmitted(false);
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      const prevAns = userAnswers[MEGA_MCQ_QUESTIONS[prevIdx].id];
      if (prevAns) {
        setSelectedOption(prevAns.selected);
        setIsSubmitted(true);
      } else {
        setSelectedOption(null);
        setIsSubmitted(false);
      }
    }
  };

  const handleJumpTo = (idx: number) => {
    setCurrentIndex(idx);
    const prevAns = userAnswers[MEGA_MCQ_QUESTIONS[idx].id];
    if (prevAns) {
      setSelectedOption(prevAns.selected);
      setIsSubmitted(true);
    } else {
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  // Calculate total score
  const totalAnswered = Object.keys(userAnswers).length;
  const totalCorrect = Object.values(userAnswers).filter((a) => a.isCorrect).length;

  return (
    <div className="mx-auto max-w-4xl rounded-3xl border border-[#E2DCD0] bg-white p-6 shadow-lg">
      
      {/* Top Header & Scoreboard */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-black uppercase text-amber-900">
            🏆 Chapter 40: Mega 100-Question Exam
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            Associate Software Engineer Interview Master MCQs
          </h2>
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-slate-900 px-4 py-2 text-white font-mono text-xs font-bold">
          <div>
            <span className="text-slate-400">Score: </span>
            <span className="text-emerald-400 font-extrabold">{totalCorrect}</span> / {totalAnswered}
          </div>
          <span className="text-slate-600">|</span>
          <div>
            <span className="text-slate-400">Progress: </span>
            <span className="text-blue-400 font-extrabold">{currentIndex + 1}</span> / 100
          </div>
        </div>
      </div>

      {/* Question Selector Navigator (Scrollable 1-100 grid) */}
      <div className="my-5 rounded-2xl bg-[#FAF9F5] p-3 border border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs font-extrabold text-slate-700 uppercase">
            📌 Jump to Question (1–100):
          </span>
          <select
            value={currentIndex}
            onChange={(e) => handleJumpTo(Number(e.target.value))}
            className="rounded-lg border border-slate-300 bg-white px-2 py-1 font-mono text-xs font-bold text-slate-800"
          >
            {MEGA_MCQ_QUESTIONS.map((q, idx) => (
              <option key={q.id} value={idx}>
                Q{q.id}: {q.category} {userAnswers[q.id] ? (userAnswers[q.id].isCorrect ? "✓" : "✗") : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Scrollable button bar for instant clicking */}
        <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
          {MEGA_MCQ_QUESTIONS.map((q, idx) => {
            const ans = userAnswers[q.id];
            let btnClass = "border-slate-300 bg-white text-slate-700 hover:bg-slate-100";
            if (ans) {
              btnClass = ans.isCorrect
                ? "bg-emerald-600 text-white border-emerald-600 font-bold"
                : "bg-rose-600 text-white border-rose-600 font-bold";
            } else if (idx === currentIndex) {
              btnClass = "bg-blue-600 text-white border-blue-600 font-bold ring-2 ring-blue-400/40";
            }
            return (
              <button
                key={q.id}
                onClick={() => handleJumpTo(idx)}
                className={`h-7 w-8 rounded-md border text-[11px] font-mono transition-all ${btnClass}`}
              >
                {q.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
        
        {/* Category Tag & Question Number */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold uppercase text-blue-700">
            {currentQ.category} • Question {currentQ.id} of 100
          </span>
          {isSubmitted && (
            <span
              className={`rounded-full px-3 py-1 font-mono text-xs font-extrabold ${
                selectedOption === currentQ.correctOption
                  ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                  : "bg-rose-100 text-rose-900 border border-rose-300"
              }`}
            >
              {selectedOption === currentQ.correctOption ? "✓ CORRECT ANSWER!" : "✗ INCORRECT ANSWER"}
            </span>
          )}
        </div>

        {/* Question Text */}
        <h3 className="mt-3 text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
          {currentQ.question}
        </h3>

        {/* Options List */}
        <div className="mt-5 flex flex-col gap-3">
          {currentQ.options.map((opt) => {
            const isSelected = selectedOption === opt.key;
            const isCorrectKey = currentQ.correctOption === opt.key;

            let optionBg = "border-slate-200 bg-slate-50 text-slate-800 hover:border-blue-400 hover:bg-blue-50/50";
            if (isSelected) {
              optionBg = "border-blue-600 bg-blue-50 text-blue-950 font-bold ring-2 ring-blue-500/30";
            }
            if (isSubmitted) {
              if (isCorrectKey) {
                optionBg = "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/40";
              } else if (isSelected && !isCorrectKey) {
                optionBg = "border-rose-600 bg-rose-50 text-rose-950 font-bold ring-2 ring-rose-500/40";
              } else {
                optionBg = "border-slate-200 bg-slate-100/60 text-slate-400 opacity-75";
              }
            }

            return (
              <button
                key={opt.key}
                onClick={() => handleSelectOption(opt.key)}
                disabled={isSubmitted}
                className={`flex items-center gap-3.5 rounded-xl border p-3.5 text-left text-sm transition-all ${optionBg}`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-black ${
                    isSubmitted && isCorrectKey
                      ? "bg-emerald-600 text-white"
                      : isSubmitted && isSelected && !isCorrectKey
                      ? "bg-rose-600 text-white"
                      : isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {opt.key}
                </span>
                <span className="flex-1 text-xs sm:text-sm font-medium">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Submit Button */}
        {!isSubmitted && (
          <div className="mt-5 flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className={`rounded-xl px-6 py-2.5 font-mono text-xs font-bold text-white transition-all ${
                selectedOption
                  ? "bg-blue-600 hover:bg-blue-700 shadow-md cursor-pointer"
                  : "bg-slate-300 cursor-not-allowed"
              }`}
            >
              Submit Answer ➔
            </button>
          </div>
        )}

        {/* Exhaustive Option-by-Option Explanation Drawer */}
        {isSubmitted && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-[#FAF9F5] p-5">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3 font-mono text-xs font-extrabold text-slate-900 uppercase">
              <span>💡 EXHAUSTIVE OPTION-BY-OPTION EXPLANATION</span>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              {currentQ.options.map((opt) => {
                const isCorrect = currentQ.correctOption === opt.key;
                const isUserChoice = selectedOption === opt.key;

                return (
                  <div
                    key={opt.key}
                    className={`rounded-xl border p-3.5 text-xs sm:text-sm transition-all ${
                      isCorrect
                        ? "border-emerald-500 bg-emerald-50/80 text-emerald-950"
                        : isUserChoice
                        ? "border-rose-400 bg-rose-50/80 text-rose-950"
                        : "border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-mono text-xs font-bold mb-1">
                      <span className={isCorrect ? "text-emerald-800" : isUserChoice ? "text-rose-800" : "text-slate-600"}>
                        Option {opt.key}: {isCorrect ? "✓ (CORRECT)" : "✗ (INCORRECT)"}
                      </span>
                      {isUserChoice && <span className="rounded bg-slate-200 px-1.5 py-0.5 text-[10px] text-slate-800">Your Selection</span>}
                    </div>
                    <p className="leading-relaxed font-sans">{currentQ.explanation[opt.key]}</p>
                  </div>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50 disabled:opacity-50"
              >
                ← Previous Question
              </button>
              <span className="font-mono text-xs font-bold text-slate-500">
                {currentIndex + 1} / 100
              </span>
              <button
                onClick={handleNext}
                disabled={currentIndex === totalQuestions - 1}
                className="rounded-xl bg-blue-600 px-5 py-2 text-xs font-bold text-white hover:bg-blue-700 shadow-sm disabled:opacity-50"
              >
                Next Question →
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
