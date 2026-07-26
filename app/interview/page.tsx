"use client";

import React, { useState } from "react";
import { JOURNEY_LESSONS, LessonItem } from "@/lib/interview/journeyData";
import CleanLessonPlayer from "@/components/interview/CleanLessonPlayer";

export default function CleanInterviewHomePage() {
  const [activeLessonIndex, setActiveLessonIndex] = useState<number | null>(null);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);

  const activeLesson =
    activeLessonIndex !== null ? JOURNEY_LESSONS[activeLessonIndex] : null;

  const currentLessonToResume =
    JOURNEY_LESSONS.find((l) => !completedLessonIds.includes(l.id)) ||
    JOURNEY_LESSONS[0];

  const toggleLessonComplete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedLessonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-10 font-sans text-slate-900 sm:px-6 lg:px-8">
      {activeLesson !== null ? (
        <CleanLessonPlayer
          lesson={activeLesson}
          onNextLesson={() => {
            if (!completedLessonIds.includes(activeLesson.id)) {
              setCompletedLessonIds((prev) => [...prev, activeLesson.id]);
            }
            if (activeLessonIndex !== null && activeLessonIndex < JOURNEY_LESSONS.length - 1) {
              setActiveLessonIndex(activeLessonIndex + 1);
            } else {
              setActiveLessonIndex(null);
            }
          }}
          onPrevLesson={() => {
            if (activeLessonIndex !== null && activeLessonIndex > 0) {
              setActiveLessonIndex(activeLessonIndex - 1);
            } else {
              setActiveLessonIndex(null);
            }
          }}
        />
      ) : (
        <div className="mx-auto max-w-4xl flex flex-col gap-10">
          {/* Welcome Header */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xs">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
              FSM Associate Software Engineer Prep
            </span>
            <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              👋 Hi Renuka!
            </h1>
            <p className="mt-2 text-base text-slate-600">
              Let&apos;s prepare for your interview one step at a time. Learn ➔ Speak ➔ Crack the Interview.
            </p>

            {/* Today's Recommended Step Card */}
            <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/60 p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase text-blue-600">
                  TODAY&apos;S STEP
                </span>
                <span className="font-mono text-xs font-semibold text-blue-600">
                  ⏱ {currentLessonToResume.estimatedMinutes} minutes
                </span>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-3xl">{currentLessonToResume.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {currentLessonToResume.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    &ldquo;{currentLessonToResume.interviewerQuestion}&rdquo;
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  setActiveLessonIndex(
                    JOURNEY_LESSONS.findIndex((l) => l.id === currentLessonToResume.id)
                  )
                }
                className="mt-6 w-full rounded-2xl bg-blue-600 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-blue-700"
              >
                Continue Step →
              </button>
            </div>

            {/* Progress Tracker Bar */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span>INTERVIEW JOURNEY PROGRESS</span>
                <span>
                  Completed {completedLessonIds.length} of {JOURNEY_LESSONS.length} Steps
                </span>
              </div>
              <div className="mt-2 flex gap-1.5">
                {JOURNEY_LESSONS.map((l) => (
                  <div
                    key={l.id}
                    className={`h-2.5 flex-1 rounded-full transition-all ${
                      completedLessonIds.includes(l.id) ? "bg-emerald-500" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-2 text-center text-xs text-slate-500">
                Don&apos;t worry. We learn one step at a time.
              </p>
            </div>
          </div>

          {/* 14-Step Interview Journey List */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900">🎓 Your Interview Journey</h2>
            <p className="mt-1 text-xs text-slate-500">
              Curriculum matching real technical interview order.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {JOURNEY_LESSONS.map((lesson, idx) => {
                const isCompleted = completedLessonIds.includes(lesson.id);

                return (
                  <div
                    key={lesson.id}
                    onClick={() => setActiveLessonIndex(idx)}
                    className="group cursor-pointer flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition hover:border-blue-200 hover:bg-blue-50/30"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => toggleLessonComplete(lesson.id, e)}
                        className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold transition ${
                          isCompleted
                            ? "border-emerald-500 bg-emerald-500 text-white"
                            : "border-slate-300 bg-white text-slate-400 hover:border-blue-500"
                        }`}
                      >
                        {isCompleted ? "✓" : idx + 1}
                      </button>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition">
                          {lesson.title}
                        </h4>
                        <span className="text-[11px] text-slate-500">
                          &ldquo;{lesson.interviewerQuestion}&rdquo;
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-slate-400">
                        {lesson.estimatedMinutes}m
                      </span>
                      <span className="font-mono text-xs font-bold text-blue-600">Start →</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
