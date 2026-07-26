"use client";

import React, { useState } from "react";
import { TEXTBOOK_PARTS, TEXTBOOK_CHAPTERS, ChapterItem } from "@/lib/interview/journeyData";
import FullscreenSlideDeck from "@/components/interview/FullscreenSlideDeck";

export default function RealTextbookPage() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number | null>(null);
  const [completedChapterIds, setCompletedChapterIds] = useState<string[]>([]);

  const currentChapterToResume =
    TEXTBOOK_CHAPTERS.find((ch) => !completedChapterIds.includes(ch.id)) ||
    TEXTBOOK_CHAPTERS[0];

  const activeChapter =
    activeChapterIndex !== null ? TEXTBOOK_CHAPTERS[activeChapterIndex] : null;

  return (
    <div className="min-h-screen w-full bg-[#F5F2EC] text-[#0F172A] font-sans selection:bg-amber-200 selection:text-slate-900 flex flex-col justify-center items-center px-4 py-8 sm:px-6 lg:px-8">
      {/* 1. CHAPTER READING DECK MODE */}
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
      ) : isBookOpen ? (
        /* 2. OPEN TEXTBOOK — TABLE OF CONTENTS MODE */
        <div className="mx-auto w-full max-w-4xl rounded-3xl border border-[#E2DCD0] bg-[#FAF8F5] p-5 sm:p-10 shadow-2xl animate-fadeIn">
          {/* Book Header Bar */}
          <div className="flex items-center justify-between border-b border-[#E2DCD0] pb-5">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl">📘</span>
              <div>
                <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-800">
                  ILLUSTRATED INTERACTIVE TEXTBOOK
                </span>
                <h2 className="text-xl sm:text-3xl font-black text-slate-900">
                  Table of Contents
                </h2>
              </div>
            </div>

            <button
              onClick={() => setIsBookOpen(false)}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition"
            >
              📕 Close Book
            </button>
          </div>

          {/* Resume Next Chapter Banner */}
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl">{currentChapterToResume.icon}</span>
              <div>
                <span className="font-mono text-xs font-bold text-amber-900 uppercase">
                  CONTINUE READING:
                </span>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-950">
                  {currentChapterToResume.title}
                </h4>
                <p className="text-xs sm:text-sm font-medium text-slate-700">
                  {currentChapterToResume.partTitle} • {currentChapterToResume.estimatedMinutes} mins
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                setActiveChapterIndex(
                  TEXTBOOK_CHAPTERS.findIndex((ch) => ch.id === currentChapterToResume.id)
                )
              }
              className="rounded-xl bg-amber-600 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-md hover:bg-amber-700 transition"
            >
              Open Chapter →
            </button>
          </div>

          {/* 10 Sections Book Structure */}
          <div className="mt-8 flex flex-col gap-6">
            {TEXTBOOK_PARTS.map((part) => {
              const partChapters = TEXTBOOK_CHAPTERS.filter((ch) => ch.partId === part.id);

              return (
                <div
                  key={part.id}
                  className="rounded-2xl border border-[#E2DCD0] bg-white p-5 sm:p-6 shadow-xs"
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <span className="text-2xl sm:text-3xl">{part.icon}</span>
                    <div>
                      <span className="font-mono text-xs font-bold text-amber-800 uppercase">
                        SECTION {part.partNumber}
                      </span>
                      <h3 className="text-base sm:text-xl font-extrabold text-slate-950">
                        {part.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-2.5">
                    {partChapters.map((ch) => {
                      const globalIdx = TEXTBOOK_CHAPTERS.findIndex((c) => c.id === ch.id);
                      const isDone = completedChapterIds.includes(ch.id);

                      return (
                        <div
                          key={ch.id}
                          onClick={() => setActiveChapterIndex(globalIdx)}
                          className="group cursor-pointer flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-amber-50/70 border border-slate-100/60"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs sm:text-sm text-slate-500 font-bold">
                              {isDone ? "✅" : `Ch.${ch.chapterNumber}`}
                            </span>
                            <span className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-amber-900 transition">
                              {ch.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs sm:text-sm text-slate-500">
                              {ch.estimatedMinutes}m
                            </span>
                            <span className="font-mono text-xs sm:text-sm font-bold text-amber-800 group-hover:translate-x-1 transition-transform">
                              Read →
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* 3. HARDCOVER TEXTBOOK COVER SCREEN */
        <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center animate-fadeIn">
          {/* Realistic Hardcover Book Visual */}
          <div className="relative w-full rounded-3xl border-l-[14px] border-amber-400 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-8 sm:p-12 shadow-2xl text-white">
            <div className="absolute top-6 right-6 font-mono text-xs uppercase font-bold tracking-widest text-amber-300 border border-amber-400/30 rounded-full px-3 py-1 bg-amber-400/10">
              FIRST EDITION • 2026
            </div>

            <div className="mt-8 flex flex-col items-center">
              <span className="text-6xl sm:text-7xl">📘</span>
              <span className="mt-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300">
                SOFTWARE ENGINEER ASSOCIATE
              </span>
              <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white uppercase leading-snug">
                The Interactive Illustrated Textbook
              </h1>
              <p className="mt-3 text-xs sm:text-base font-medium text-slate-300 max-w-xs sm:max-w-sm">
                From Absolute Zero to Enterprise SaaS & Interview Fluency.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 border-t border-slate-800 pt-6 font-mono text-xs sm:text-sm text-slate-300">
              <span>10 Sections</span>
              <span>•</span>
              <span>{TEXTBOOK_CHAPTERS.length} Chapters</span>
              <span>•</span>
              <span>IELTS Band 5.5</span>
            </div>

            {/* Main Action Button */}
            <button
              onClick={() => setIsBookOpen(true)}
              className="mt-8 w-full rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 py-4 sm:py-5 font-sans text-sm sm:text-base font-black uppercase tracking-wider text-slate-950 shadow-xl transition hover:from-amber-400 hover:to-amber-500 hover:scale-[1.02]"
            >
              📖 Open Textbook
            </button>
          </div>

          {/* Minimal Progress Bar */}
          <div className="mt-8 flex flex-col items-center gap-2">
            <span className="font-mono text-xs sm:text-sm font-semibold text-slate-600">
              Completed {completedChapterIds.length} of {TEXTBOOK_CHAPTERS.length} Chapters
            </span>
            <div className="flex gap-1.5 max-w-xs overflow-hidden">
              {TEXTBOOK_CHAPTERS.map((ch) => (
                <div
                  key={ch.id}
                  className={`h-2 w-2 rounded-full transition-all ${
                    completedChapterIds.includes(ch.id)
                      ? "bg-amber-500"
                      : "bg-slate-300"
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
