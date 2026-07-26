"use client";

import React, { useRef, useState, useEffect } from "react";

interface WhiteboardCanvasProps {
  conceptTitle: string;
}

export default function WhiteboardCanvas({ conceptTitle }: WhiteboardCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#43e8b0");
  const [lineWidth, setLineWidth] = useState(3);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fill dark background
    ctx.fillStyle = "#050805";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#050805";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="rounded-2xl border border-[#224022] bg-[#070e08] p-5 shadow-2xl backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#224022]/60 pb-3">
        <div>
          <span className="rounded-md border border-[#43e8b0]/30 bg-[#43e8b0]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#43e8b0]">
            Interactive Whiteboard Canvas
          </span>
          <h3 className="mt-1 text-base font-bold text-white">Sketch Memory Model ({conceptTitle})</h3>
        </div>

        {/* Canvas Controls */}
        <div className="flex items-center gap-3">
          {/* Color Palette */}
          <div className="flex items-center gap-1">
            {["#43e8b0", "#22d3ee", "#fbbf24", "#f87171", "#ffffff"].map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`h-5 w-5 rounded-full border border-black transition ${
                  color === c ? "scale-125 ring-2 ring-white" : ""
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>

          <button
            onClick={clearCanvas}
            className="rounded-lg border border-[#224022] bg-[#0d160e] px-3 py-1 text-xs text-[#b8ffb8] hover:border-red-500 hover:text-red-400"
          >
            🧹 Clear
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-center overflow-hidden rounded-xl border border-[#1b2e1b]">
        <canvas
          ref={canvasRef}
          width={700}
          height={320}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          className="cursor-crosshair w-full max-w-full bg-[#050805]"
        />
      </div>
      <p className="mt-2 text-center text-[10px] text-[#629462]">
        💡 Draw your visual memory (e.g. Stack plates or UML boxes) to lock in understanding.
      </p>
    </div>
  );
}
