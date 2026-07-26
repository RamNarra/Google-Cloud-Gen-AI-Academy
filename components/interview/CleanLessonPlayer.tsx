"use client";

import React, { useState, useEffect } from "react";
import { ChapterItem } from "@/lib/interview/journeyData";
import HeroAnimatedDiagram from "./HeroAnimatedDiagram";

interface CleanLessonPlayerProps {
  lesson: ChapterItem;
  onNextLesson: () => void;
  onPrevLesson: () => void;
}

export default function CleanLessonPlayer({
  lesson,
  onNextLesson,
  onPrevLesson,
}: CleanLessonPlayerProps) {
  const [isPlayingTTS, setIsPlayingTTS] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordSec, setRecordSec] = useState(0);
  const [feedbackTip, setFeedbackTip] = useState<string | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordSec((prev) => prev + 1);
      }, 1000);
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
      setFeedbackTip("🎉 Great pacing! Clear duration and calm delivery. Ready for next step!");
    }
  };

  return (
    <div className="mx-auto max-w-3xl flex flex-col gap-8 pb-16">
      {/* Lesson Navigation Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <button
          onClick={onPrevLesson}
          className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900"
        >
          ← Back
        </button>
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
          Chapter {lesson.chapterNumber} — {lesson.shortTitle}
        </span>
        <button
          onClick={onNextLesson}
          className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
        >
          Next Chapter →
        </button>
      </div>

      {/* Target Question Hero */}
      <div className="rounded-3xl border border-blue-200 bg-blue-50/60 p-8 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-3xl">{lesson.icon}</span>
          <span className="font-mono text-xs font-bold uppercase text-blue-700">
            CONCEPT QUESTION:
          </span>
        </div>
        <h1 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          &ldquo;{lesson.question}&rdquo;
        </h1>
        <p className="mt-2 text-xs font-medium text-slate-600">
          Goal: Learn to understand and explain this concept in under {lesson.estimatedMinutes} minutes.
        </p>
      </div>

      {/* Step 1: Real-World Story */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
          STEP 1 — REAL-WORLD STORY
        </span>
        <h2 className="mt-3 text-xl font-bold text-slate-900">{lesson.analogyStory.title}</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-700">
          {lesson.analogyStory.text}
        </p>
        <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
          <span className="font-mono text-[10px] font-bold uppercase text-blue-700">
            KEY TAKEAWAY:
          </span>
          <p className="mt-1 text-xs font-semibold text-blue-950">
            {lesson.analogyStory.takeaway}
          </p>
        </div>
      </div>

      {/* Step 2: Hero Visual Animation */}
      <div>
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
          STEP 2 — VISUAL ANIMATION
        </span>
        <HeroAnimatedDiagram type={lesson.diagramType} />
      </div>

      {/* Step 3: Simple Explanation & Common Mistake */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col gap-5">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
            STEP 3 — SIMPLE EXPLANATION
          </span>
          <p className="mt-3 text-base font-medium leading-relaxed text-slate-800">
            {lesson.simpleExplanation}
          </p>
        </div>

        {/* Common Mistake Warning Box */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-xs">
            <span>❌ COMMON MISTAKE TO AVOID:</span>
          </div>
          <p className="mt-1 text-xs text-amber-900 leading-relaxed font-medium">
            {lesson.commonMistake}
          </p>
        </div>
      </div>

      {/* Step 4: 30-Second Spoken Answer */}
      <div className="rounded-3xl border border-blue-200 bg-blue-50/40 p-8 shadow-sm">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
          STEP 4 — WHAT TO SAY IN THE INTERVIEW
        </span>

        <div className="mt-4 rounded-2xl border border-blue-200 bg-white p-6 shadow-xs">
          <div className="flex items-center justify-between text-xs text-blue-600 border-b border-slate-100 pb-2">
            <span className="font-mono font-bold">YOUR 30-SECOND SPOKEN ANSWER (BAND 5.5 ENGLISH):</span>
            <span className="font-mono">~{lesson.script30Sec.durationSec}s</span>
          </div>
          <p className="mt-3 text-base font-medium leading-relaxed text-slate-800">
            {lesson.script30Sec.answerText}
          </p>
        </div>
      </div>

      {/* One Picture Memory Summary */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
          📸 ONE PICTURE MEMORY SUMMARY
        </span>
        <div className="mt-4 flex flex-wrap items-center justify-around gap-2 rounded-2xl bg-slate-50 p-6">
          {lesson.onePictureSummary.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 font-mono text-xs font-bold text-slate-800 shadow-xs">
                {item}
              </div>
              {idx < lesson.onePictureSummary.length - 1 && (
                <span className="text-slate-400 font-bold">➔</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step 5: Listen -> Repeat -> Record Practice */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm text-center">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
          STEP 5 — LISTEN ➔ REPEAT ➔ PRACTICE
        </span>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={toggleListenTTS}
            className={`flex items-center gap-2 rounded-2xl px-6 py-3 text-xs font-bold transition shadow-sm ${
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
              className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-blue-700"
            >
              🎤 2. Record & Repeat Answer
            </button>
          ) : (
            <button
              onClick={handleStopRecord}
              className="flex items-center gap-2 rounded-2xl bg-red-600 px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-red-700 animate-pulse"
            >
              ⏹️ Stop (00:{recordSec < 10 ? `0${recordSec}` : recordSec})
            </button>
          )}
        </div>

        {feedbackTip && (
          <div className="mt-5 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-center text-xs font-bold text-emerald-800">
            {feedbackTip}
          </div>
        )}
      </div>

      {/* Step 6: Interview Tip Reassurance & Action Button */}
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl">✅</span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700">
            INTERVIEW TIP
          </span>
        </div>
        <p className="mt-2 text-sm font-medium leading-relaxed text-emerald-900">
          {lesson.interviewTip}
        </p>

        <button
          onClick={onNextLesson}
          className="mt-6 w-full rounded-2xl bg-emerald-600 py-4 font-sans text-sm font-extrabold text-white shadow-lg transition hover:bg-emerald-700"
        >
          I Understand — Continue →
        </button>
      </div>
    </div>
  );
}
