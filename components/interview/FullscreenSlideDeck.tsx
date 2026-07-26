"use client";

import React, { useState, useEffect } from "react";
import { ChapterItem } from "@/lib/interview/journeyData";
import HeroAnimatedDiagram from "./HeroAnimatedDiagram";

interface FullscreenSlideDeckProps {
  lesson: ChapterItem;
  totalLessons: number;
  onFinishLesson: () => void;
  onExit: () => void;
}

export default function FullscreenSlideDeck({
  lesson,
  totalLessons,
  onFinishLesson,
  onExit,
}: FullscreenSlideDeckProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 5; // 5 Clean Kid-Friendly Slides (Voice recorder removed)

  useEffect(() => {
    setSlideIndex(0);
  }, [lesson.id]);

  const handleNextSlide = () => {
    if (slideIndex < totalSlides - 1) {
      setSlideIndex((prev) => prev + 1);
    } else {
      onFinishLesson();
    }
  };

  const handlePrevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    } else {
      onExit();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-white px-4 py-5 sm:px-10 sm:py-8 font-sans text-slate-900 selection:bg-blue-100 overflow-y-auto">
      {/* Slide Top Navigation Header */}
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl sm:text-4xl">{lesson.icon}</span>
          <div>
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600">
              Ch {lesson.chapterNumber} of {totalLessons} — {lesson.partTitle}
            </span>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
              {lesson.shortTitle}
            </h3>
          </div>
        </div>

        <button
          onClick={onExit}
          className="rounded-full bg-slate-100 px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-200 transition"
        >
          ✕ Table of Contents
        </button>
      </div>

      {/* Slide Content Area (5 Clean Kid-Friendly Slides) */}
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center my-auto py-6">
        {/* SLIDE 1: QUESTION */}
        {slideIndex === 0 && (
          <div className="flex flex-col items-center text-center animate-fadeIn">
            <span className="rounded-full bg-blue-50 px-4 py-2 font-mono text-xs sm:text-sm font-bold text-blue-700">
              CORE CONCEPT QUESTION:
            </span>
            <h2 className="mt-6 text-2xl sm:text-4xl font-black leading-snug text-slate-900">
              &ldquo;{lesson.question}&rdquo;
            </h2>
            <p className="mt-5 text-base sm:text-lg font-medium text-slate-600 max-w-lg">
              Let&apos;s understand this fundamental concept step by step using a simple story.
            </p>
          </div>
        )}

        {/* SLIDE 2: KID-FRIENDLY STORY & ANALOGY */}
        {slideIndex === 1 && (
          <div className="flex flex-col items-center text-center animate-fadeIn">
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600">
              REAL-LIFE STORY & ANALOGY
            </span>
            <h2 className="mt-3 text-xl sm:text-3xl font-extrabold text-slate-900">
              {lesson.analogyStory.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-800 font-normal max-w-xl text-left sm:text-center">
              {lesson.analogyStory.text}
            </p>
            <div className="mt-6 rounded-2xl bg-blue-50/90 p-5 border border-blue-200 max-w-md w-full text-center">
              <span className="font-mono text-xs sm:text-sm font-bold uppercase text-blue-800">
                KEY TAKEAWAY:
              </span>
              <p className="mt-2 text-sm sm:text-base font-bold text-blue-950">
                {lesson.analogyStory.takeaway}
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 3: ILLUSTRATED UML DIAGRAM */}
        {slideIndex === 2 && (
          <div className="flex flex-col items-center text-center animate-fadeIn">
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600">
              ILLUSTRATED CONCEPT DIAGRAM
            </span>
            <div className="w-full mt-3">
              <HeroAnimatedDiagram type={lesson.diagramType} />
            </div>
          </div>
        )}

        {/* SLIDE 4: DETAILED EXPLANATION & COMMON MISTAKE */}
        {slideIndex === 3 && (
          <div className="flex flex-col gap-6 text-center animate-fadeIn">
            <div>
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600">
                DETAILED KID-FRIENDLY EXPLANATION
              </span>
              <p className="mt-4 text-base sm:text-xl font-medium leading-relaxed text-slate-900 text-left sm:text-center">
                {lesson.simpleExplanation}
              </p>
            </div>

            {/* Common Mistake Warning Box */}
            <div className="mx-auto w-full max-w-lg rounded-2xl border border-amber-200 bg-amber-50 p-5 text-left">
              <span className="font-mono text-xs sm:text-sm font-bold text-amber-900">
                ❌ COMMON MISTAKE TO AVOID:
              </span>
              <p className="mt-1.5 text-sm sm:text-base text-amber-950 font-medium leading-relaxed">
                {lesson.commonMistake}
              </p>
            </div>

            {/* One Picture Memory Summary */}
            <div className="mx-auto w-full max-w-lg rounded-2xl bg-slate-50 border border-slate-200 p-4 text-center">
              <span className="font-mono text-xs font-bold text-slate-500 uppercase">
                📸 ONE PICTURE MEMORY SUMMARY:
              </span>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                {lesson.onePictureSummary.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <span className="font-mono text-xs sm:text-base font-bold text-slate-900">{item}</span>
                    {idx < lesson.onePictureSummary.length - 1 && (
                      <span className="text-slate-400 font-bold">➔</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 5: SPOKEN INTERVIEW ANSWER & TIP */}
        {slideIndex === 4 && (
          <div className="flex flex-col items-center text-center animate-fadeIn">
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600">
              30-SECOND INTERVIEW SPOKEN ANSWER
            </span>

            <div className="mt-4 w-full rounded-3xl border border-blue-200 bg-blue-50/60 p-6 shadow-sm">
              <div className="flex items-center justify-between text-xs sm:text-sm text-blue-800 border-b border-blue-200 pb-3 font-mono font-bold">
                <span>EXPECTED INTERVIEW ANSWER:</span>
                <span>~{lesson.script30Sec.durationSec}s</span>
              </div>
              <p className="mt-4 text-base sm:text-xl font-bold leading-relaxed text-slate-900">
                {lesson.script30Sec.answerText}
              </p>
            </div>

            <div className="mt-6 w-full max-w-lg rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-center">
              <span className="font-mono text-xs sm:text-sm font-bold text-emerald-900">
                ✅ INTERVIEW TIP:
              </span>
              <p className="mt-1.5 text-xs sm:text-base text-emerald-950 font-medium leading-relaxed">
                {lesson.interviewTip}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Slide Bottom Navigation Controls */}
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between border-t border-slate-100 pt-4">
        {/* Slide Progress Dots (5 Dots) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlideIndex(idx)}
              className={`h-3 rounded-full transition-all ${
                idx === slideIndex ? "w-7 sm:w-8 bg-blue-600" : "w-3 bg-slate-200"
              }`}
            />
          ))}
        </div>

        {/* Action Buttons: [ ← Back ] and [ Continue → ] */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handlePrevSlide}
            className="rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-6 py-3 sm:py-3.5 font-sans text-xs sm:text-base font-extrabold text-slate-800 hover:bg-slate-100 transition shadow-xs"
          >
            ← Back
          </button>
          <button
            onClick={handleNextSlide}
            className="rounded-2xl bg-blue-600 px-5 sm:px-8 py-3 sm:py-3.5 font-sans text-xs sm:text-base font-extrabold text-white shadow-md hover:bg-blue-700 transition"
          >
            {slideIndex === totalSlides - 1 ? "Finish Chapter 🎉" : "Continue →"}
          </button>
        </div>
      </div>
    </div>
  );
}
