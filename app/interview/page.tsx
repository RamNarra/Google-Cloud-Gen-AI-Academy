"use client";

import React, { useState } from "react";
import { JOURNEY_LESSONS, LessonItem } from "@/lib/interview/journeyData";
import FullscreenSlideDeck from "@/components/interview/FullscreenSlideDeck";

export default function IsolatedInterviewHomePage() {
  const [activeLessonIndex, setActiveLessonIndex] = useState<number | null>(null);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);

  const currentLessonToResume =
    JOURNEY_LESSONS.find((l) => !completedLessonIds.includes(l.id)) ||
    JOURNEY_LESSONS[0];

  const activeLesson =
    activeLessonIndex !== null ? JOURNEY_LESSONS[activeLessonIndex] : null;

  return (
    <div className="flex min-h-screen w-full flex-col justify-center items-center bg-white px-6 py-12 font-sans text-slate-900 selection:bg-blue-100">
      {activeLesson ? (
        <FullscreenSlideDeck
          lesson={activeLesson}
          totalLessons={JOURNEY_LESSONS.length}
          onFinishLesson={() => {
            if (!completedLessonIds.includes(activeLesson.id)) {
              setCompletedLessonIds((prev) => [...prev, activeLesson.id]);
            }
            if (activeLessonIndex !== null && activeLessonIndex < JOURNEY_LESSONS.length - 1) {
              setActiveLessonIndex(activeLessonIndex + 1);
            } else {
              setActiveLessonIndex(null);
            }
          }}
          onExit={() => setActiveLessonIndex(null)}
        />
      ) : (
        <div className="mx-auto flex max-w-md flex-col items-center text-center animate-fadeIn">
          <span className="text-5xl">☀️</span>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Good Evening, Renuka.
          </h1>

          <p className="mt-3 text-base font-medium text-slate-500">
            Ready to prepare for your software engineer interview?
          </p>

          {/* Today's Recommended Topic */}
          <div className="mt-8 w-full rounded-3xl border border-blue-100 bg-blue-50/50 p-6 text-left shadow-xs">
            <div className="flex items-center justify-between text-xs font-bold text-blue-600">
              <span>TODAY&apos;S TOPIC</span>
              <span>⏱ {currentLessonToResume.estimatedMinutes} minutes</span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="text-3xl">{currentLessonToResume.icon}</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {currentLessonToResume.shortTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  &ldquo;{currentLessonToResume.interviewerQuestion}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Main Action Button */}
          <button
            onClick={() =>
              setActiveLessonIndex(
                JOURNEY_LESSONS.findIndex((l) => l.id === currentLessonToResume.id)
              )
            }
            className="mt-8 w-full rounded-2xl bg-blue-600 py-4 font-sans text-sm font-extrabold text-white shadow-lg transition hover:bg-blue-700 hover:scale-[1.02]"
          >
            Begin Journey →
          </button>

          {/* Minimal Journey Progress */}
          <div className="mt-10 flex flex-col items-center gap-2">
            <span className="font-mono text-xs font-semibold text-slate-400">
              Completed {completedLessonIds.length} of {JOURNEY_LESSONS.length} Steps
            </span>
            <div className="flex gap-1.5">
              {JOURNEY_LESSONS.map((l) => (
                <div
                  key={l.id}
                  className={`h-2 rounded-full transition-all ${
                    completedLessonIds.includes(l.id)
                      ? "w-4 bg-emerald-500"
                      : "w-2 bg-slate-200"
                  }`}
                />
              ))}
            </div>
            <p className="mt-1 text-[11px] text-slate-400">
              Don&apos;t worry. We learn one step at a time.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
