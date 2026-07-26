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
  const [isPlayingTTS, setIsPlayingTTS] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordSec, setRecordSec] = useState(0);
  const [feedbackTip, setFeedbackTip] = useState<string | null>(null);

  const totalSlides = 6;

  useEffect(() => {
    setSlideIndex(0);
    setIsPlayingTTS(false);
    setIsRecording(false);
    setRecordSec(0);
    setFeedbackTip(null);
  }, [lesson.id]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRecording) {
      interval = setInterval(() => setRecordSec((p) => p + 1), 1000);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRecording]);

  const toggleListenTTS = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Browser speech synthesis is not supported.");
      return;
    }

    if (isPlayingTTS) {
      window.speechSynthesis.cancel();
      setIsPlayingTTS(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(lesson.script30Sec.answerText);
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.lang = "en-US";

    utterance.onstart = () => setIsPlayingTTS(true);
    utterance.onend = () => setIsPlayingTTS(false);
    utterance.onerror = () => setIsPlayingTTS(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleStartRecord = () => {
    setRecordSec(0);
    setFeedbackTip(null);
    setIsRecording(true);
  };

  const handleStopRecord = () => {
    setIsRecording(false);
    if (recordSec < 10) {
      setFeedbackTip("⚠️ Try speaking continuously for 20 to 30 seconds.");
    } else if (recordSec > 35) {
      setFeedbackTip("⏱️ Keep it a bit shorter (under 30 seconds).");
    } else {
      setFeedbackTip("🎉 Great pacing! Clear duration and calm delivery. Ready for next chapter!");
    }
  };

  const handleNextSlide = () => {
    if (slideIndex < totalSlides - 1) {
      setSlideIndex((prev) => prev + 1);
    } else {
      onFinishLesson();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-white px-6 py-6 sm:px-12 sm:py-8 font-sans text-slate-900 selection:bg-blue-100">
      {/* Slide Top Navigation */}
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{lesson.icon}</span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
            Chapter {lesson.chapterNumber} of {totalLessons} — {lesson.shortTitle}
          </span>
        </div>

        <button
          onClick={onExit}
          className="rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-200"
        >
          ✕ Table of Contents
        </button>
      </div>

      {/* Slide Content Area (Centered 100vh Slide) */}
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center my-auto">
        {/* SLIDE 1: QUESTION */}
        {slideIndex === 0 && (
          <div className="flex flex-col items-center text-center animate-fadeIn">
            <span className="rounded-full bg-blue-50 px-3.5 py-1 font-mono text-xs font-bold text-blue-600">
              CORE CONCEPT QUESTION:
            </span>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              &ldquo;{lesson.question}&rdquo;
            </h2>
            <p className="mt-4 text-sm text-slate-500 max-w-md">
              Let&apos;s learn this fundamental concept from scratch using a simple story.
            </p>
          </div>
        )}

        {/* SLIDE 2: STORY */}
        {slideIndex === 1 && (
          <div className="flex flex-col items-center text-center animate-fadeIn">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
              REAL-LIFE STORY & ANALOGY
            </span>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              {lesson.analogyStory.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-700 max-w-xl">
              {lesson.analogyStory.text}
            </p>
            <div className="mt-6 rounded-2xl bg-blue-50/80 p-4 border border-blue-100 max-w-md">
              <span className="font-mono text-[10px] font-bold uppercase text-blue-700">
                KEY TAKEAWAY:
              </span>
              <p className="mt-1 text-xs font-semibold text-blue-950">
                {lesson.analogyStory.takeaway}
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 3: INTERACTIVE ANIMATION */}
        {slideIndex === 2 && (
          <div className="flex flex-col items-center text-center animate-fadeIn">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
              ILLUSTRATED CONCEPT ANIMATION
            </span>
            <div className="w-full">
              <HeroAnimatedDiagram type={lesson.diagramType} />
            </div>
          </div>
        )}

        {/* SLIDE 4: DEFINITION & COMMON MISTAKE */}
        {slideIndex === 3 && (
          <div className="flex flex-col gap-6 text-center animate-fadeIn">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
                SIMPLE BAND 5.5 ENGLISH EXPLANATION
              </span>
              <p className="mt-3 text-xl font-medium leading-relaxed text-slate-800">
                {lesson.simpleExplanation}
              </p>
            </div>

            {/* Common Mistake Warning Box */}
            <div className="mx-auto w-full max-w-lg rounded-2xl border border-amber-200 bg-amber-50 p-5 text-left">
              <span className="font-mono text-xs font-bold text-amber-800">
                ❌ COMMON MISTAKE TO AVOID:
              </span>
              <p className="mt-1 text-xs text-amber-900 font-medium leading-relaxed">
                {lesson.commonMistake}
              </p>
            </div>

            {/* One Picture Memory Summary */}
            <div className="mx-auto w-full max-w-lg rounded-2xl bg-slate-50 border border-slate-200 p-4 text-center">
              <span className="font-mono text-[10px] font-bold text-slate-500 uppercase">
                📸 ONE PICTURE MEMORY SUMMARY:
              </span>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                {lesson.onePictureSummary.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <span className="font-mono text-xs font-bold text-slate-800">{item}</span>
                    {idx < lesson.onePictureSummary.length - 1 && (
                      <span className="text-slate-400 font-bold">➔</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 5: SPOKEN INTERVIEW ANSWER */}
        {slideIndex === 4 && (
          <div className="flex flex-col items-center text-center animate-fadeIn">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
              30-SECOND INTERVIEW SPOKEN ANSWER
            </span>

            <div className="mt-4 w-full rounded-3xl border border-blue-200 bg-blue-50/50 p-6 shadow-sm">
              <div className="flex items-center justify-between text-xs text-blue-700 border-b border-blue-100 pb-2 font-mono font-bold">
                <span>EXPECTED INTERVIEW ANSWER:</span>
                <span>~{lesson.script30Sec.durationSec}s</span>
              </div>
              <p className="mt-4 text-lg font-medium leading-relaxed text-slate-900">
                {lesson.script30Sec.answerText}
              </p>
            </div>

            <div className="mt-6 w-full max-w-lg rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-center">
              <span className="font-mono text-xs font-bold text-emerald-800">
                ✅ INTERVIEW TIP:
              </span>
              <p className="mt-1 text-xs text-emerald-950 font-medium">
                {lesson.interviewTip}
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 6: PRACTICE SPEAKING */}
        {slideIndex === 5 && (
          <div className="flex flex-col items-center text-center animate-fadeIn">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
              LISTEN ➔ REPEAT ➔ VOICE PRACTICE
            </span>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={toggleListenTTS}
                className={`flex items-center gap-2 rounded-2xl px-6 py-3.5 text-xs font-bold transition shadow-sm ${
                  isPlayingTTS
                    ? "bg-amber-500 text-white animate-pulse"
                    : "border border-blue-600 bg-blue-50 text-blue-600 hover:bg-blue-100"
                }`}
              >
                {isPlayingTTS ? "🔊 Stop Listening" : "🎧 1. Listen to Model Answer"}
              </button>

              {!isRecording ? (
                <button
                  onClick={handleStartRecord}
                  className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-blue-700"
                >
                  🎤 2. Record & Repeat Answer
                </button>
              ) : (
                <button
                  onClick={handleStopRecord}
                  className="flex items-center gap-2 rounded-2xl bg-red-600 px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-red-700 animate-pulse"
                >
                  ⏹️ Stop (00:{recordSec < 10 ? `0${recordSec}` : recordSec})
                </button>
              )}
            </div>

            {feedbackTip && (
              <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-center text-xs font-bold text-emerald-800 w-full max-w-md">
                {feedbackTip}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Slide Bottom Controls */}
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between border-t border-slate-100 pt-4">
        {/* Slide Progress Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlideIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === slideIndex ? "w-8 bg-blue-600" : "w-2.5 bg-slate-200"
              }`}
            />
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={handleNextSlide}
          className="rounded-2xl bg-blue-600 px-7 py-3 font-sans text-xs font-extrabold text-white shadow-md transition hover:bg-blue-700"
        >
          {slideIndex === totalSlides - 1 ? "I Understand — Finish Chapter 🎉" : "Continue →"}
        </button>
      </div>
    </div>
  );
}
