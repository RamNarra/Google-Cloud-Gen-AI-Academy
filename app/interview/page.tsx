"use client";

import React, { useState } from "react";
import { TEXTBOOK_PARTS, TEXTBOOK_CHAPTERS, ChapterItem } from "@/lib/interview/journeyData";
import FullscreenSlideDeck from "@/components/interview/FullscreenSlideDeck";

export default function TextbookHomePage() {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number | null>(null);
  const [completedChapterIds, setCompletedChapterIds] = useState<string[]>([]);
  const [showTableOfContents, setShowTableOfContents] = useState(false);

  const currentChapterToResume =
    TEXTBOOK_CHAPTERS.find((ch) => !completedChapterIds.includes(ch.id)) ||
    TEXTBOOK_CHAPTERS[0];

  const activeChapter =
    activeChapterIndex !== null ? TEXTBOOK_CHAPTERS[activeChapterIndex] : null;

  return (
    <div className="flex min-h-screen w-full flex-col justify-center items-center bg-[#FAFAFA] px-6 py-12 font-sans text-slate-900 selection:bg-blue-100">
      {activeChapter ? (
        <FullscreenSlideDeck
          lesson={activeChapter}
          totalLessons={TEXTBOOK_CHAPTERS.length}
          onFinishLesson={() => {
            if (!completedChapterIds.includes(activeChapter.id)) {
              setCompletedChapterIds((prev) => [...prev, activeChapter.id]);
            }
            if (activeChapterIndex !== null && activeChapterIndex < TEXTBOOK_CHAPTERS.length - 1) {
              setActiveChapterIndex(activeChapterIndex + 1);
            } else {
              setActiveChapterIndex(null);
            }
          }}
          onExit={() => setActiveChapterIndex(null)}
        />
      ) : (
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center animate-fadeIn">
          {/* Textbook Cover Header */}
          <span className="text-6xl">📘</span>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Software Engineer Associate
          </h1>
          <h2 className="mt-1 text-xl font-bold text-blue-600">
            Interactive Illustrated Textbook
          </h2>

          <p className="mt-4 text-base font-medium text-slate-600 max-w-md">
            This interactive course will teach you everything from scratch. No prior programming experience required.
          </p>

          <div className="mt-3 flex items-center justify-center gap-4 text-xs font-semibold text-slate-500 font-mono">
            <span>⏱ 8–10 Hours</span>
            <span>•</span>
            <span>9 Parts</span>
            <span>•</span>
            <span>{TEXTBOOK_CHAPTERS.length} Chapters</span>
          </div>

          {/* Today's Recommended Chapter Box */}
          <div className="mt-8 w-full rounded-3xl border border-blue-200 bg-white p-6 text-left shadow-sm">
            <div className="flex items-center justify-between text-xs font-bold text-blue-600">
              <span>CURRENT CHAPTER</span>
              <span>⏱ {currentChapterToResume.estimatedMinutes} minutes</span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="text-3xl">{currentChapterToResume.icon}</span>
              <div>
                <span className="text-[11px] font-bold text-blue-700 font-mono">
                  {currentChapterToResume.partTitle}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {currentChapterToResume.title}
                </h3>
              </div>
            </div>

            <button
              onClick={() =>
                setActiveChapterIndex(
                  TEXTBOOK_CHAPTERS.findIndex((ch) => ch.id === currentChapterToResume.id)
                )
              }
              className="mt-6 w-full rounded-2xl bg-blue-600 py-4 font-sans text-sm font-extrabold text-white shadow-md transition hover:bg-blue-700 hover:scale-[1.01]"
            >
              Start Learning Chapter {currentChapterToResume.chapterNumber} →
            </button>
          </div>

          {/* Table of Contents Toggle */}
          <button
            onClick={() => setShowTableOfContents(!showTableOfContents)}
            className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900"
          >
            <span>{showTableOfContents ? "▲ Hide Table of Contents" : "▼ See Full Table of Contents"}</span>
          </button>

          {/* Full Table of Contents (Grouped by Parts) */}
          {showTableOfContents && (
            <div className="mt-6 w-full text-left flex flex-col gap-6 animate-fadeIn">
              {TEXTBOOK_PARTS.map((part) => {
                const partChapters = TEXTBOOK_CHAPTERS.filter((ch) => ch.partId === part.id);
                return (
                  <div key={part.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{part.icon}</span>
                      <h4 className="text-sm font-extrabold text-slate-900">{part.title}</h4>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{part.description}</p>

                    <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-3">
                      {partChapters.map((ch) => {
                        const globalIdx = TEXTBOOK_CHAPTERS.findIndex((c) => c.id === ch.id);
                        const isDone = completedChapterIds.includes(ch.id);

                        return (
                          <div
                            key={ch.id}
                            onClick={() => setActiveChapterIndex(globalIdx)}
                            className="cursor-pointer flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold hover:bg-blue-50/60 transition"
                          >
                            <span className="text-slate-800">
                              {isDone ? "✅" : "📄"} {ch.title}
                            </span>
                            <span className="text-blue-600 font-mono text-[11px]">Start →</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Minimal Progress Bar */}
          <div className="mt-10 flex flex-col items-center gap-2">
            <span className="font-mono text-xs font-semibold text-slate-400">
              Completed {completedChapterIds.length} of {TEXTBOOK_CHAPTERS.length} Chapters
            </span>
            <div className="flex gap-1.5 max-w-xs overflow-hidden">
              {TEXTBOOK_CHAPTERS.map((ch) => (
                <div
                  key={ch.id}
                  className={`h-2 w-2 rounded-full transition-all ${
                    completedChapterIds.includes(ch.id)
                      ? "bg-emerald-500"
                      : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
