"use client";

import React, { useState, useEffect, useRef } from "react";

interface AudioPracticeProps {
  scriptQuestion: string;
  scriptAnswer: string;
  targetDurationSec: number;
}

export default function AudioPractice({
  scriptQuestion,
  scriptAnswer,
  targetDurationSec,
}: AudioPracticeProps) {
  const [isPlayingTTS, setIsPlayingTTS] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedTime, setRecordedTime] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Check SpeechRecognition browser API
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onresult = (event: any) => {
          let currentTranscript = "";
          for (let i = 0; i < event.results.length; i++) {
            currentTranscript += event.results[i][0].transcript;
          }
          setTranscript(currentTranscript);
        };

        recognition.onerror = () => {
          setIsRecording(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  const handleSpeakTTS = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Text-to-speech is not supported in your browser.");
      return;
    }

    if (isPlayingTTS) {
      window.speechSynthesis.cancel();
      setIsPlayingTTS(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(scriptAnswer);
    utterance.rate = 0.9; // Band 5.5 natural calm speaking rate
    utterance.pitch = 1.0;
    utterance.lang = "en-US";

    utterance.onstart = () => setIsPlayingTTS(true);
    utterance.onend = () => setIsPlayingTTS(false);
    utterance.onerror = () => setIsPlayingTTS(false);

    window.speechSynthesis.speak(utterance);
  };

  const startRecording = () => {
    setTranscript("");
    setFeedback(null);
    setRecordedTime(0);
    setIsRecording(true);

    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error(e);
      }
    }

    timerRef.current = setInterval(() => {
      setRecordedTime((prev) => prev + 1);
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

    // Generate feedback
    const wordCount = transcript.trim().split(/\s+/).length;
    if (wordCount < 10) {
      setFeedback("⚠️ Response was too short! Try speaking continuously for 20-30 seconds.");
    } else if (recordedTime > targetDurationSec + 15) {
      setFeedback("⏱️ Answer took a bit too long. Keep it crisp (under 35 seconds).");
    } else {
      setFeedback("🎉 Great job! Clear duration and steady pace. Repeat once more for confidence!");
    }
  };

  return (
    <div className="rounded-2xl border border-[#224022] bg-[#09110b] p-5 shadow-2xl backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#224022]/60 pb-3">
        <div>
          <span className="rounded-md border border-[#43e8b0]/30 bg-[#43e8b0]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#43e8b0]">
            Band 5.5 Speaking & Listening Hub
          </span>
          <h3 className="mt-1 text-base font-semibold text-[#e2ffe2]">Audio Trainer</h3>
        </div>

        {/* TTS Button */}
        <button
          onClick={handleSpeakTTS}
          className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-semibold transition ${
            isPlayingTTS
              ? "border-amber-400 bg-amber-400/20 text-amber-300 animate-pulse"
              : "border-[#43e8b0]/50 bg-[#43e8b0]/10 text-[#43e8b0] hover:bg-[#43e8b0]/20"
          }`}
        >
          {isPlayingTTS ? "🔊 Stop Listening" : "🎧 Listen to Model Answer"}
        </button>
      </div>

      {/* Target Question */}
      <div className="mt-4 rounded-xl border border-[#1b2e1b] bg-[#050805] p-4">
        <span className="font-mono text-[10px] text-[#629462]">INTERVIEWER QUESTION:</span>
        <p className="mt-1 text-sm font-semibold text-[#ffffff]">&ldquo;{scriptQuestion}&rdquo;</p>
      </div>

      {/* Voice Recording Controls */}
      <div className="mt-5 flex flex-col items-center justify-center rounded-xl border border-[#224022] bg-[#060a07] p-6 text-center">
        <div className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#0d180e] border border-[#43e8b0]/30">
          <span className="text-2xl">{isRecording ? "🎙️" : "🗣️"}</span>
          {isRecording && (
            <span className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping"></span>
          )}
        </div>

        <div className="font-mono text-xl font-bold text-[#ffffff]">
          00:{recordedTime < 10 ? `0${recordedTime}` : recordedTime}
          <span className="ml-2 text-xs font-normal text-[#629462]">
            / target ~{targetDurationSec}s
          </span>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {!isRecording ? (
            <button
              onClick={startRecording}
              className="rounded-xl border border-[#43e8b0] bg-[#43e8b0] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#34cb98]"
            >
              🎤 Start Speaking Practice
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="rounded-xl border border-red-500 bg-red-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-red-700"
            >
              ⏹️ Stop & View Transcript
            </button>
          )}
        </div>

        {/* Live Transcript Display */}
        {(transcript || isRecording) && (
          <div className="mt-4 w-full text-left rounded-lg border border-[#1b2e1b] bg-[#0a110a] p-4">
            <span className="font-mono text-[10px] text-[#629462]">LIVE TRANSCRIPT:</span>
            <p className="mt-1 font-mono text-xs text-[#b8ffb8] leading-relaxed">
              {transcript || "Listening... Start speaking in English..."}
            </p>
          </div>
        )}

        {/* Feedback message */}
        {feedback && (
          <div className="mt-4 w-full rounded-lg border border-[#43e8b0]/30 bg-[#43e8b0]/10 p-3 text-center text-xs font-medium text-[#b8ffb8]">
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
}
