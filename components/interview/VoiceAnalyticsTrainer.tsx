"use client";

import React, { useState, useEffect, useRef } from "react";

interface VoiceAnalyticsTrainerProps {
  question: string;
  expectedScript: string;
  targetDurationSec: number;
}

export default function VoiceAnalyticsTrainer({
  question,
  expectedScript,
  targetDurationSec,
}: VoiceAnalyticsTrainerProps) {
  const [isPlayingTTS, setIsPlayingTTS] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [transcript, setTranscript] = useState("");

  const [wpm, setWpm] = useState<number | null>(null);
  const [fillerCount, setFillerCount] = useState<number>(0);
  const [longestPauseSec, setLongestPauseSec] = useState<number>(0);
  const [confidenceScore, setConfidenceScore] = useState<number | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const lastSpeechTimeRef = useRef<number>(Date.now());
  const maxPauseRef = useRef<number>(0);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onresult = (event: any) => {
          const now = Date.now();
          const pauseGap = (now - lastSpeechTimeRef.current) / 1000;
          if (pauseGap > maxPauseRef.current) {
            maxPauseRef.current = pauseGap;
          }
          lastSpeechTimeRef.current = now;

          let currentText = "";
          for (let i = 0; i < event.results.length; i++) {
            currentText += event.results[i][0].transcript + " ";
          }
          setTranscript(currentText.trim());
        };

        recognition.onerror = () => {
          setIsRecording(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  const toggleListenTTS = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Browser speech synthesis not supported.");
      return;
    }

    if (isPlayingTTS) {
      window.speechSynthesis.cancel();
      setIsPlayingTTS(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(expectedScript);
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.lang = "en-US";

    utterance.onstart = () => setIsPlayingTTS(true);
    utterance.onend = () => setIsPlayingTTS(false);
    utterance.onerror = () => setIsPlayingTTS(false);

    window.speechSynthesis.speak(utterance);
  };

  const startRecording = () => {
    setTranscript("");
    setWpm(null);
    setConfidenceScore(null);
    setElapsedTime(0);
    maxPauseRef.current = 0;
    lastSpeechTimeRef.current = Date.now();
    setIsRecording(true);

    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error(e);
      }
    }

    timerRef.current = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (timerRef.current) clearInterval(timerRef.current);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        console.error(e);
      }
    }

    // Analyze performance
    const words = transcript.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const durationMinutes = Math.max(elapsedTime, 1) / 60;
    const calculatedWpm = Math.round(wordCount / durationMinutes);
    setWpm(calculatedWpm);

    // Count filler words
    const fillerRegex = /\b(um|umm|uh|uhh|like|you know|basically|actually)\b/gi;
    const matches = transcript.match(fillerRegex);
    const fillers = matches ? matches.length : 0;
    setFillerCount(fillers);

    setLongestPauseSec(Math.round(maxPauseRef.current));

    // Calculate score
    let score = 90;
    if (calculatedWpm < 80) score -= 15; // Too slow
    if (calculatedWpm > 160) score -= 15; // Too fast
    if (fillers > 3) score -= fillers * 3;
    if (maxPauseRef.current > 4) score -= 15;
    if (wordCount < 15) score -= 25;

    setConfidenceScore(Math.max(score, 45));
  };

  return (
    <div className="rounded-2xl border border-[#224022] bg-[#08100a] p-6 shadow-2xl backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#224022]/60 pb-4">
        <div>
          <span className="rounded-md border border-[#43e8b0]/30 bg-[#43e8b0]/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#43e8b0]">
            AI Voice & Speech Analytics Engine
          </span>
          <h3 className="mt-1 text-lg font-bold text-[#ffffff]">Band 5.5 Speech Trainer</h3>
        </div>

        <button
          onClick={toggleListenTTS}
          className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-bold transition ${
            isPlayingTTS
              ? "border-amber-400 bg-amber-400/20 text-amber-300 animate-pulse"
              : "border-[#43e8b0]/50 bg-[#43e8b0]/10 text-[#43e8b0] hover:bg-[#43e8b0]/20"
          }`}
        >
          {isPlayingTTS ? "🔊 Stop Listening" : "🎧 Hear Model Answer"}
        </button>
      </div>

      <div className="mt-4 rounded-xl border border-[#1b2e1b] bg-[#050805] p-4">
        <span className="font-mono text-[10px] text-[#629462]">TARGET QUESTION:</span>
        <p className="mt-1 text-sm font-semibold text-[#ffffff]">&ldquo;{question}&rdquo;</p>
      </div>

      {/* Recording Control & Timer */}
      <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-[#224022] bg-[#050906] p-6 text-center">
        <div className="relative mb-3 flex h-20 w-20 items-center justify-center rounded-full border border-[#43e8b0]/30 bg-[#0d1a0f]">
          <span className="text-3xl">{isRecording ? "🎙️" : "🗣️"}</span>
          {isRecording && (
            <span className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping"></span>
          )}
        </div>

        <div className="font-mono text-2xl font-bold text-white">
          00:{elapsedTime < 10 ? `0${elapsedTime}` : elapsedTime}
          <span className="ml-2 text-xs font-normal text-[#629462]">
            / target ~{targetDurationSec}s
          </span>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {!isRecording ? (
            <button
              onClick={startRecording}
              className="rounded-xl border border-[#43e8b0] bg-[#43e8b0] px-6 py-3 text-xs font-bold text-black shadow-lg transition hover:bg-[#32c896]"
            >
              🎤 Start Speech Practice
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="rounded-xl border border-red-500 bg-red-600 px-6 py-3 text-xs font-bold text-white shadow-lg transition hover:bg-red-700"
            >
              ⏹️ Stop & Analyze Speech
            </button>
          )}
        </div>

        {/* Live Transcript */}
        {(transcript || isRecording) && (
          <div className="mt-5 w-full text-left rounded-xl border border-[#1b2e1b] bg-[#0a120b] p-4">
            <span className="font-mono text-[10px] text-[#629462]">LIVE TRANSCRIPT:</span>
            <p className="mt-1 font-mono text-xs text-[#b8ffb8] leading-relaxed">
              {transcript || "Speak clearly into your microphone..."}
            </p>
          </div>
        )}

        {/* Speech Analytics Dashboard */}
        {confidenceScore !== null && (
          <div className="mt-6 w-full rounded-2xl border border-[#43e8b0]/40 bg-[#0c1a0e] p-5 text-left">
            <div className="flex items-center justify-between border-b border-[#224022] pb-3">
              <span className="font-mono text-xs font-bold text-[#43e8b0]">
                SPEECH PERFORMANCE REPORT
              </span>
              <span
                className={`rounded-full px-3 py-1 font-mono text-xs font-extrabold ${
                  confidenceScore >= 80
                    ? "bg-emerald-400/20 text-emerald-300 border border-emerald-400/50"
                    : "bg-amber-400/20 text-amber-300 border border-amber-400/50"
                }`}
              >
                Confidence Score: {confidenceScore} / 100
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#1b2e1b] bg-[#060a07] p-3 text-center">
                <span className="font-mono text-[10px] text-[#629462]">SPEAKING SPEED</span>
                <div className="mt-1 font-mono text-lg font-bold text-white">
                  {wpm} <span className="text-xs font-normal text-[#629462]">WPM</span>
                </div>
                <span className="text-[10px] text-[#629462]">
                  {wpm && wpm >= 100 && wpm <= 140 ? "✅ Ideal pace" : "⚠️ Aim for 110 WPM"}
                </span>
              </div>

              <div className="rounded-xl border border-[#1b2e1b] bg-[#060a07] p-3 text-center">
                <span className="font-mono text-[10px] text-[#629462]">FILLER WORDS</span>
                <div className="mt-1 font-mono text-lg font-bold text-white">{fillerCount}</div>
                <span className="text-[10px] text-[#629462]">
                  {fillerCount <= 2 ? "✅ Clean delivery" : "⚠️ Reduce umm/uhh"}
                </span>
              </div>

              <div className="rounded-xl border border-[#1b2e1b] bg-[#060a07] p-3 text-center">
                <span className="font-mono text-[10px] text-[#629462]">LONGEST PAUSE</span>
                <div className="mt-1 font-mono text-lg font-bold text-white">
                  {longestPauseSec} <span className="text-xs font-normal text-[#629462]">Sec</span>
                </div>
                <span className="text-[10px] text-[#629462]">
                  {longestPauseSec <= 3 ? "✅ Good fluency" : "⚠️ Pause too long"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
