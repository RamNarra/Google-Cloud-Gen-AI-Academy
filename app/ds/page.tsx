"use client";

import { useState } from "react";
import problemsData from "../snist/problems.json";

interface Problem {
  cycle: string;
  code: string;
  name: string;
  statement: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string;
  solutionCode: string;
}

// Simple C code high-lighter
function highlightCCode(code: string) {
  if (!code) return "";
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  
  const comments: string[] = [];
  escaped = escaped.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/.*)/g, (match) => {
    comments.push(match);
    return `__COMMENT_PLACEHOLDER_${comments.length - 1}__`;
  });

  const strings: string[] = [];
  escaped = escaped.replace(/("(\\.|[^"\\])*")|('(\\.|[^'\\])*')/g, (match) => {
    strings.push(match);
    return `__STRING_PLACEHOLDER_${strings.length - 1}__`;
  });

  escaped = escaped.replace(/(#\w+\b)/g, '<span class="text-[#c586c0]">$1</span>');
  escaped = escaped.replace(/(&lt;\w+\.h&gt;)/g, '<span class="text-[#ce9178]">$1</span>');

  const keywords = /\b(void|int|char|double|float|struct|typedef|return|if|else|while|for|break|continue|sizeof|malloc|free|switch|case|default|NULL)\b/g;
  escaped = escaped.replace(keywords, '<span class="text-[#569cd6]">$1</span>');

  const functions = /\b(printf|scanf|main|exit|malloc|free|insert|delete|display|inorder|preorder|postorder|create|getnode|push|pop|isEmpty|search|createNode|height|leftRotate|rightRotate|getBalance|dfs|bfs|hash)\b/g;
  escaped = escaped.replace(functions, '<span class="text-[#dcdcaa]">$1</span>');

  escaped = escaped.replace(/\b(\d+)\b/g, '<span class="text-[#b5cea8]">$1</span>');

  escaped = escaped.replace(/__STRING_PLACEHOLDER_(\d+)__/g, (_, idx) => {
    return `<span class="text-[#ce9178]">${strings[parseInt(idx)]}</span>`;
  });

  escaped = escaped.replace(/__COMMENT_PLACEHOLDER_(\d+)__/g, (_, idx) => {
    return `<span class="text-[#6a9955]">${comments[parseInt(idx)]}</span>`;
  });

  return escaped;
}

export default function DSCodesPage() {
  // Filter problems for cycles 1-8
  const filteredProblems = (problemsData as Problem[]).filter((p) => {
    const cycleNum = parseInt(p.cycle.replace("Cycle ", ""));
    return cycleNum >= 1 && cycleNum <= 8;
  });

  // Group by cycle
  const cyclesMap: { [key: string]: Problem[] } = {};
  filteredProblems.forEach((p) => {
    if (!cyclesMap[p.cycle]) {
      cyclesMap[p.cycle] = [];
    }
    cyclesMap[p.cycle].push(p);
  });

  const cycleNames = ["Cycle 1", "Cycle 2", "Cycle 3", "Cycle 4", "Cycle 5", "Cycle 6", "Cycle 7", "Cycle 8"];

  // Copied states for individual problems
  const [copiedMap, setCopiedMap] = useState<{ [key: string]: boolean }>({});
  // Expanded states for individual code view
  const [expandedMap, setExpandedMap] = useState<{ [key: string]: boolean }>({});

  const handleCopyCode = async (key: string, codeText: string) => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopiedMap((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedMap((prev) => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const toggleExpand = (key: string) => {
    setExpandedMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="mx-auto w-full max-w-4xl py-6 px-4">
      {/* Hero section styling matching globals.css theme */}
      <div className="relative mb-8 overflow-hidden rounded-2xl border border-[#2a3652] bg-gradient-to-b from-[#11162a]/95 to-[#090c14]/95 p-6 shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(67,232,176,0.08),transparent_40%)] pointer-events-none" />
        <div className="relative z-10">
          <span className="rounded-full border border-[#43e8b0]/30 bg-[#43e8b0]/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#7cf3c6]">
            Google Cloud Gen AI Academy
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-4 mb-2 tracking-tight">
            Data Structures & Algorithms Repository
          </h1>
          <p className="text-[#c6d3ef] text-sm leading-relaxed max-w-2xl">
            Quick access to verified lab solutions in C for Cycles 1 through 8. Click any question to view the code, or click the copy button to copy it directly to your clipboard.
          </p>
        </div>
      </div>

      {/* Cycle by Cycle lists */}
      <div className="space-y-8">
        {cycleNames.map((cycleName, cycleIdx) => {
          const problems = cyclesMap[cycleName] || [];
          if (problems.length === 0) return null;

          return (
            <div key={cycleName} className="space-y-4">
              <h2 className="text-lg font-bold text-[#43e8b0] border-b border-[#2a3652] pb-2 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#151c30] text-xs border border-[#2a3652] text-gray-300">
                  {cycleIdx + 1}
                </span>
                {cycleName}
              </h2>

              <div className="grid gap-3">
                {problems.map((p, pIdx) => {
                  const qKey = `C${cycleIdx + 1}Q${pIdx + 1}`;
                  const isCopied = !!copiedMap[qKey];
                  const isExpanded = !!expandedMap[qKey];

                  return (
                    <div 
                      key={p.code} 
                      className="rounded-xl border border-[#2a3652] bg-gradient-to-b from-[#151c30] to-[#101626] overflow-hidden transition-all duration-200"
                    >
                      {/* Accordion header */}
                      <div className="flex items-center justify-between p-4 gap-4">
                        <div 
                          onClick={() => toggleExpand(qKey)}
                          className="flex-1 flex items-center gap-3 cursor-pointer select-none"
                        >
                          <span className="font-mono text-xs text-[#a5c0ff] bg-[#79a2ff]/10 border border-[#79a2ff]/20 px-2 py-0.5 rounded">
                            {qKey}
                          </span>
                          <span className="text-sm font-semibold text-gray-100 hover:text-[#43e8b0] transition duration-150">
                            {p.name.replace(/^Cycle \d+ Q\d+ - /, "").replace(/^C\d+Q\d+ - /, "").replace(/^C\d+ Q\d+ - /, "")}
                          </span>
                        </div>

                        {/* Copy button */}
                        <button
                          onClick={() => handleCopyCode(qKey, p.solutionCode)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition duration-200 cursor-pointer ${
                            isCopied
                              ? "bg-[#17a94e]/10 border-[#17a94e]/40 text-[#22c55e]"
                              : "bg-[#43e8b0]/5 border-[#43e8b0]/20 text-[#7cf3c6] hover:bg-[#43e8b0]/15 hover:border-[#43e8b0]/40"
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                              </svg>
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Expandable Code block */}
                      {isExpanded && (
                        <div className="border-t border-[#2a3652]/50 bg-[#0b0e17] p-4 font-mono text-xs leading-6 text-[#d4d4d4] overflow-x-auto select-text">
                          <pre className="block min-w-full">
                            <code>
                              {p.solutionCode.split("\n").map((line, lineIdx) => (
                                <div key={lineIdx} className="flex hover:bg-white/[0.02] px-2 rounded">
                                  <span className="w-8 shrink-0 select-none text-right text-gray-600 pr-3 mr-3 border-r border-[#2a3652]/30">
                                    {lineIdx + 1}
                                  </span>
                                  <span className="whitespace-pre" dangerouslySetInnerHTML={{ __html: highlightCCode(line) }} />
                                </div>
                              ))}
                            </code>
                          </pre>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
