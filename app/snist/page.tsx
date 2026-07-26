"use client";

import { useState, Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import problemsData from "./problems.json";

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

// Exact C syntax highlighter for Monaco / VS Code dark modern theme
function highlightCCode(code: string) {
  if (!code) return "";
  
  // Escape HTML characters
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  
  // Comments: //... or /*...*/
  const comments: string[] = [];
  escaped = escaped.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/.*)/g, (match) => {
    comments.push(match);
    return `__COMMENT_PLACEHOLDER_${comments.length - 1}__`;
  });

  // Strings: "..." or '...'
  const strings: string[] = [];
  escaped = escaped.replace(/("(\\.|[^"\\])*")|('(\\.|[^'\\])*')/g, (match) => {
    strings.push(match);
    return `__STRING_PLACEHOLDER_${strings.length - 1}__`;
  });

  // Preprocessor directives: #include, #define, #ifdef, #endif
  escaped = escaped.replace(/(#\w+\b)/g, '<span class="text-[#c586c0]">$1</span>');
  // Highlight library names inside <...> in #include
  escaped = escaped.replace(/(&lt;\w+\.h&gt;)/g, '<span class="text-[#ce9178]">$1</span>');

  // Keywords
  const keywords = /\b(void|int|char|double|float|struct|typedef|return|if|else|while|for|break|continue|sizeof|malloc|free|switch|case|default|NULL)\b/g;
  escaped = escaped.replace(keywords, '<span class="text-[#569cd6]">$1</span>');

  // Common functions
  const functions = /\b(printf|scanf|main|exit|malloc|free|insert|delete|display|inorder|preorder|postorder|create|getnode|push|pop|isEmpty|search|createNode|height|leftRotate|rightRotate|getBalance|dfs|bfs|hash)\b/g;
  escaped = escaped.replace(functions, '<span class="text-[#dcdcaa]">$1</span>');

  // Numbers
  escaped = escaped.replace(/\b(\d+)\b/g, '<span class="text-[#b5cea8]">$1</span>');

  // Restore strings
  escaped = escaped.replace(/__STRING_PLACEHOLDER_(\d+)__/g, (_, idx) => {
    return `<span class="text-[#ce9178]">${strings[parseInt(idx)]}</span>`;
  });

  // Restore comments
  escaped = escaped.replace(/__COMMENT_PLACEHOLDER_(\d+)__/g, (_, idx) => {
    return `<span class="text-[#6a9955]">${comments[parseInt(idx)]}</span>`;
  });

  return escaped;
}

// Custom Markdown to HTML parser for problem statements
function markdownToHtml(md: string) {
  if (!md) return "";
  
  let html = md
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
    
  // Replace code blocks: ```text ... ```
  html = html.replace(/```(text|c)?([\s\S]*?)```/g, '<pre class="bg-[#151821] p-4 rounded border border-[#2d323e] font-mono text-xs my-3 overflow-x-auto text-[#b2ccd6]">$2</pre>');

  // Inline code: `code`
  html = html.replace(/`([^`\n]+)`/g, '<code class="bg-[#2e3238] px-1 py-0.5 rounded font-mono text-xs text-[#f43f5e]">$1</code>');

  // Headings: ### title
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-base font-bold text-white mt-5 mb-2">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-lg font-bold text-white mt-6 mb-2">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-xl font-bold text-white mt-8 mb-3">$1</h1>');

  // Bold: **text**
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-white">$1</strong>');
  
  // Italic: *text*
  html = html.replace(/\*([^*]+)\*/g, '<em class="italic text-gray-300">$1</em>');

  // Bullets: - item
  html = html.replace(/^\s*-\s+(.*$)/gim, '<li class="ml-4 list-disc my-1 text-gray-300">$1</li>');

  // Clean math equations
  html = html.replace(/\\leq/g, "≤")
             .replace(/\\geq/g, "≥")
             .replace(/\\le/g, "≤")
             .replace(/\\ge/g, "≥")
             .replace(/\\neq/g, "≠")
             .replace(/\\cdot/g, "·")
             .replace(/\$/g, ""); // strip raw math dollars

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]*)\)/g, '<img src="$2" alt="$1" class="my-4 max-w-full rounded border border-[#2d323e]" />');

  // Line breaks
  html = html.replace(/\n/g, "<br />");
  
  return html;
}

function SnistDashboardContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const activeProblemCode = searchParams.get("problem");
  const activeProblem = problemsData.find((p) => p.code === activeProblemCode) as Problem | undefined;
  
  // Group problems by cycle
  const cyclesMap: { [key: string]: Problem[] } = {};
  problemsData.forEach((p) => {
    if (!cyclesMap[p.cycle]) {
      cyclesMap[p.cycle] = [];
    }
    cyclesMap[p.cycle].push(p as Problem);
  });
  
  const cycleNames = [
    "Cycle 1", "Cycle 2", "Cycle 3", "Cycle 4", "Cycle 5", "Cycle 6", 
    "Cycle 7", "Cycle 8", "Cycle 9", "Cycle 10", "Cycle 11", "Cycle 12"
  ];
  
  // Accordion expanded state
  const [expandedCycles, setExpandedCycles] = useState<{ [key: string]: boolean }>({
    "Cycle 1": true
  });
  
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Syllabus drawer toggling
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [expandedSidebarCycles, setExpandedSidebarCycles] = useState<{ [key: string]: boolean }>({});

  // Dynamically set expanded active cycle in sidebar when activeProblem changes
  useEffect(() => {
    if (activeProblem) {
      setExpandedSidebarCycles((prev) => ({
        ...prev,
        [activeProblem.cycle]: true
      }));
    }
  }, [activeProblem]);

  // Inject styles to hide main header and override main padding/margin
  useEffect(() => {
    if (activeProblem) {
      const styleEl = document.createElement("style");
      styleEl.id = "snist-workspace-styles";
      styleEl.innerHTML = `
        header.sticky {
          display: none !important;
        }
        main.page-enter {
          max-width: 100vw !important;
          width: 100vw !important;
          padding: 0 !important;
          margin: 0 !important;
          transform: none !important;
          animation: none !important;
        }
        body {
          overflow: hidden !important;
        }
      `;
      document.head.appendChild(styleEl);
      return () => {
        const el = document.getElementById("snist-workspace-styles");
        if (el) el.remove();
      };
    }
  }, [activeProblem]);

  const toggleCycle = (cycle: string) => {
    setExpandedCycles((prev) => ({
      ...prev,
      [cycle]: !prev[cycle]
    }));
  };

  const selectProblem = (code: string | null) => {
    if (code) {
      router.push(`/snist?problem=${code}`);
    } else {
      router.push("/snist");
    }
  };

  const handleCopyCode = async (codeText: string) => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code", err);
    }
  };

  const filteredProblems = searchQuery
    ? (problemsData as Problem[]).filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.code.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Navigate next / prev problem
  const navigateProblem = (direction: "next" | "prev") => {
    if (!activeProblem) return;
    const idx = (problemsData as Problem[]).findIndex((p) => p.code === activeProblem.code);
    if (idx !== -1) {
      let targetIdx = direction === "next" ? idx + 1 : idx - 1;
      if (targetIdx >= 0 && targetIdx < problemsData.length) {
        selectProblem(problemsData[targetIdx].code);
      }
    }
  };

  // Get index status indicator arrays for the top progress bar in problem view
  const problemIndex = activeProblem
    ? (problemsData as Problem[]).findIndex((p) => p.code === activeProblem.code)
    : -1;

  // View: Problem page split view (Replicating CodeChef dark mode IDE exactly)
  if (activeProblem) {
    const currentCycleProblems = problemsData.filter((p) => p.cycle === activeProblem.cycle) as Problem[];
    const problemIndexInCycle = currentCycleProblems.findIndex((p) => p.code === activeProblem.code);

    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-[#1d1e23] text-gray-200 overflow-hidden font-sans select-none">
        {/* Top bar (exactly like CodeChef) */}
        <header className="flex h-[54px] shrink-0 items-center justify-between border-b border-[#2b3750]/70 bg-[#1d1e23] px-4 w-full">
          {/* Left section: Navigation tools */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => selectProblem(null)} 
              className="flex items-center justify-center p-1.5 hover:bg-[#2e3238] transition text-gray-400 hover:text-white rounded"
              title="Back to Course"
            >
              {/* Back Arrow SVG */}
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <button 
              onClick={() => setIsSyllabusOpen(!isSyllabusOpen)}
              className="flex items-center justify-center p-1.5 hover:bg-[#2e3238] transition text-gray-400 hover:text-white rounded"
              title="Toggle Syllabus"
            >
              {/* Hamburger Menu list icon */}
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Sun/Light mode icon (aesthetic) */}
            <button className="flex items-center justify-center p-1.5 hover:bg-[#2e3238] transition text-gray-400 hover:text-white rounded" title="Switch to Light Mode">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            </button>

            {/* Vertical Divider */}
            <div className="w-[1px] h-5 bg-[#2d323e] mx-1" />

            {/* Bookmark Icon */}
            <button className="flex items-center justify-center p-1.5 hover:bg-[#2e3238] transition text-gray-400 hover:text-white rounded" title="Add to bookmark">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>

          {/* Center section: Compile / Submit buttons */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 h-9 px-5 bg-white text-[#2a67b1] border border-[#2a67b1] rounded-[2px] font-sans text-sm font-semibold hover:bg-gray-50 transition cursor-pointer">
              {/* Play triangle icon */}
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Run</span>
            </button>
            <button className="flex items-center justify-center h-9 px-6 bg-[#2a67b1] text-white rounded-[2px] font-sans text-sm font-semibold hover:bg-[#1d5292] transition cursor-pointer">
              Submit
            </button>
          </div>

          {/* Right section: Problem navigation & progress */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigateProblem("prev")}
              disabled={problemIndex === 0}
              className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-white transition disabled:opacity-30 disabled:hover:text-gray-400 cursor-pointer disabled:cursor-not-allowed"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Prev module</span>
            </button>
            
            {/* Progress capsules segments */}
            <div className="flex gap-1.5 items-center px-1">
              {currentCycleProblems.map((p, idx) => {
                const isActive = p.code === activeProblem.code;
                const isSolved = true; // All are solved in problems.json
                return (
                  <span 
                    key={p.code} 
                    onClick={() => selectProblem(p.code)}
                    className={`h-[4px] w-8 rounded-full cursor-pointer transition-all ${
                      isActive ? "bg-[#3b82f6]" : isSolved ? "bg-[#2bbe62]/75 hover:bg-[#2bbe62]" : "bg-[#3a3d44]"
                    }`}
                    title={p.name}
                  />
                );
              })}
            </div>

            <button 
              onClick={() => navigateProblem("next")}
              disabled={problemIndex === problemsData.length - 1}
              className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-white transition disabled:opacity-30 disabled:hover:text-gray-400 cursor-pointer disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </header>

        {/* Workspace split columns & Sidebar */}
        <div className="flex flex-1 overflow-hidden relative">
          
          {/* Left narrow vertical sidebar (51px) */}
          <div className="w-[51px] shrink-0 border-r border-[#2b3852]/70 bg-[#1d1e23] flex flex-col justify-between items-center py-4">
            <div className="w-full flex flex-col items-center gap-1">
              {/* Problem Description Tab (Active) */}
              <div 
                className="flex items-center justify-center w-full h-[50px] cursor-pointer border-l-2 border-l-[#3b82f6] text-[#3b82f6] bg-[#2e3446]/20 transition-all"
                title="Problem Statement"
              >
                {/* Warning circle icon */}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Files Tab (Inactive) */}
              <div className="flex items-center justify-center w-full h-[50px] cursor-pointer border-l-2 border-l-transparent text-gray-500 hover:text-white hover:bg-white/[0.02] transition-all" title="Files">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>

              {/* Submissions Tab (Inactive) */}
              <div className="flex items-center justify-center w-full h-[50px] cursor-pointer border-l-2 border-l-transparent text-gray-500 hover:text-white hover:bg-white/[0.02] transition-all" title="Submissions">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>

              {/* Hints Tab (Inactive) */}
              <div className="flex items-center justify-center w-full h-[50px] cursor-pointer border-l-2 border-l-transparent text-gray-500 hover:text-white hover:bg-white/[0.02] transition-all" title="Hints & Solutions">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>

              {/* Discussions Tab (Inactive) */}
              <div className="flex items-center justify-center w-full h-[50px] cursor-pointer border-l-2 border-l-transparent text-gray-500 hover:text-white hover:bg-white/[0.02] transition-all" title="Discussions">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>

            {/* Bottom help tab */}
            <div className="w-full flex flex-col items-center">
              <div className="flex items-center justify-center w-full h-[50px] cursor-pointer text-gray-500 hover:text-white hover:bg-white/[0.02] transition-all" title="Help & Feedback">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Backdrop overlay for drawer */}
          {isSyllabusOpen && (
            <div 
              className="absolute inset-0 z-30 bg-black/40"
              onClick={() => setIsSyllabusOpen(false)}
            />
          )}

          {/* Syllabus Drawer (exactly like CodeChef) */}
          <div 
            className={`absolute inset-y-0 left-[51px] z-40 w-[380px] bg-[#1d1e23] border-r border-[#2b3852]/70 shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${
              isSyllabusOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#2b3852]/70 shrink-0">
              <div className="flex items-center gap-3">
                <img 
                  alt="learn-icon" 
                  src="https://cdn.codechef.com/images/self-learning/icons/snist-s2-dsa-practice-2026.svg" 
                  className="w-8 h-8 rounded"
                />
                <div>
                  <div className="font-bold text-sm text-white">Data Structures in C</div>
                  <div className="text-[10px] text-gray-400">Sreenidhi Institute of Science and Technology</div>
                </div>
              </div>
              <button 
                onClick={() => setIsSyllabusOpen(false)}
                className="p-1 hover:bg-[#2e3238] rounded text-gray-400 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Progress */}
            <div className="p-4 border-b border-[#2b3852]/50 bg-[#15161b] shrink-0">
              <div className="flex justify-between text-xs text-[#2bbe62] font-semibold mb-1">
                <span>100% Completed</span>
                <span>🏁</span>
              </div>
              <div className="h-1.5 w-full bg-[#1e293b] rounded-full overflow-hidden">
                <div className="h-full bg-[#2bbe62] rounded-full w-full" />
              </div>
            </div>

            {/* Syllabus Cycles accordion list */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-thin">
              {cycleNames.map((cycleName) => {
                const isExpanded = !!expandedSidebarCycles[cycleName];
                const cycleProblems = cyclesMap[cycleName] || [];
                
                return (
                  <div key={cycleName} className="border border-[#2b3852]/30 rounded-lg overflow-hidden bg-[#24262c]/30">
                    <div 
                      onClick={() => {
                        setExpandedSidebarCycles(prev => ({ ...prev, [cycleName]: !prev[cycleName] }));
                      }}
                      className="flex justify-between items-center p-3 hover:bg-[#2e3238]/40 cursor-pointer select-none border-b border-[#2b3852]/10"
                    >
                      <span className="font-semibold text-sm text-white">{cycleName}</span>
                      <svg 
                        className={`h-4 w-4 text-gray-400 transform transition-transform ${isExpanded ? "rotate-180" : ""}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {isExpanded && (
                      <div className="divide-y divide-[#2b3852]/20">
                        {cycleProblems.map((p) => {
                          const isActive = p.code === activeProblem.code;
                          return (
                            <div 
                              key={p.code}
                              onClick={() => {
                                selectProblem(p.code);
                                setIsSyllabusOpen(false);
                              }}
                              className={`flex items-center justify-between p-3 cursor-pointer transition ${
                                isActive ? "bg-[#2e3446]" : "hover:bg-[#24262c]/50"
                              }`}
                            >
                              <span 
                                className={`text-xs truncate max-w-[200px] ${
                                  isActive ? "text-white font-semibold" : "text-gray-300"
                                }`}
                                title={p.name}
                              >
                                {p.name}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="px-1.5 py-0.5 bg-[#2e3238] rounded text-[9px] text-gray-400 font-semibold font-mono">
                                  Coding
                                </span>
                                <span className="h-4 w-4 rounded-full bg-[#17a94e] flex items-center justify-center text-white text-[8px] font-bold">
                                  ✓
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Split Screen Columns: Statement on left (35%) and Monaco Editor on right (65%) */}
          <div className="flex-1 flex overflow-hidden">
            {/* Left panel: Problem statement (35% width) */}
            <div className="w-[35%] shrink-0 border-r border-[#2b3852]/70 bg-[#1d1e23] overflow-y-auto px-6 py-6 scrollbar-thin select-text">
              <h2 className="text-white text-lg font-bold font-sans mb-4">{activeProblem.name}</h2>
              
              <div 
                className="prose prose-invert prose-sm max-w-none text-gray-300 leading-relaxed font-sans"
                dangerouslySetInnerHTML={{ __html: markdownToHtml(activeProblem.statement) }}
              />

              {activeProblem.inputFormat && (
                <div className="mt-6 border-t border-[#2b3852]/30 pt-5">
                  <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">Input Format</h3>
                  <div 
                    className="text-sm text-gray-300 leading-relaxed font-sans"
                    dangerouslySetInnerHTML={{ __html: markdownToHtml(activeProblem.inputFormat) }}
                  />
                </div>
              )}

              {activeProblem.outputFormat && (
                <div className="mt-6 border-t border-[#2b3852]/30 pt-5">
                  <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">Output Format</h3>
                  <div 
                    className="text-sm text-gray-300 leading-relaxed font-sans"
                    dangerouslySetInnerHTML={{ __html: markdownToHtml(activeProblem.outputFormat) }}
                  />
                </div>
              )}

              {activeProblem.constraints && (
                <div className="mt-6 border-t border-[#2b3852]/30 pt-5">
                  <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">Constraints</h3>
                  <div 
                    className="text-sm text-gray-300 leading-relaxed font-sans"
                    dangerouslySetInnerHTML={{ __html: markdownToHtml(activeProblem.constraints) }}
                  />
                </div>
              )}

              {/* Thumbs up feedback box */}
              <div className="mt-8 border-t border-[#2b3852]/30 pt-6 flex items-center justify-between text-xs text-gray-400 select-none">
                <span>Did you like the problem?</span>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1 hover:text-white transition">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.757c1.27 0 2.227 1.083 2.148 2.348l-.857 13.714C19.967 27.273 18.91 28 17.705 28h-9.75c-1.127 0-2.09-.764-2.296-1.84L4.85 11.83C4.693 11.012 5.309 10 6.148 10H11v-4c0-2.21 1.79-4 4-4h.5c.828 0 1.5.672 1.5 1.5v3.5c0 1.657-1.343 3-3 3z" />
                    </svg>
                    <span>19</span>
                  </button>
                  <button className="hover:text-white transition">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 18H5.243c-1.27 0-2.227-1.083-2.148-2.348l.857-13.714C4.033 1.057 5.09 0 6.295 0h9.75c1.127 0 2.09.764 2.296 1.84l.809 4.33c.157.818-.459 1.83-1.298 1.83H13v4c0 2.21-1.79 4-4 4h-.5c-.828 0-1.5-.672-1.5-1.5V9c0-1.657 1.343-3 3-3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right panel: Editor Mockup (65% width) */}
            <div className="flex-1 flex flex-col bg-[#1f1f1f] overflow-hidden">
              {/* Editor tab header */}
              <div className="flex h-9 shrink-0 items-center justify-between border-b border-[#2b3852]/40 bg-[#181818] px-4 select-none">
                <div className="flex items-center gap-1.5 bg-[#1f1f1f] border-t-2 border-[#3b82f6] h-full px-4 text-xs font-semibold text-gray-200">
                  <span className="text-blue-400 font-mono font-bold">C</span>
                  <span>main.c</span>
                  <span className="ml-2 text-gray-500 cursor-pointer hover:text-white">×</span>
                </div>
                
                <button 
                  onClick={() => handleCopyCode(activeProblem.solutionCode)}
                  className="flex items-center gap-1.5 px-3 py-1 bg-[#2e3238] rounded text-[11px] text-gray-300 hover:text-white hover:bg-[#3e444d] transition font-mono"
                >
                  {copied ? (
                    <>
                      <svg className="h-3 w-3 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#22c55e]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      <span>Copy Solution</span>
                    </>
                  )}
                </button>
              </div>

              {/* Monaco code display */}
              <div className="flex-1 overflow-auto p-4 font-mono text-sm leading-6 text-[#d4d4d4] select-text">
                <pre className="block min-w-full">
                  <code>
                    {activeProblem.solutionCode.split("\n").map((line, idx) => (
                      <div key={idx} className="flex hover:bg-[#2e2e2e]/30 px-2 rounded">
                        <span className="w-8 shrink-0 select-none text-right text-[#858585] pr-3 mr-3 border-r border-[#3c3c3c]">
                          {idx + 1}
                        </span>
                        <span className="whitespace-pre" dangerouslySetInnerHTML={{ __html: highlightCCode(line) }} />
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard View (ditto duplicate of CodeChef homepage)
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 text-gray-200 font-sans">
      {/* CodeChef Main Top Banner with linear-gradient and grid lines */}
      <div className="relative mb-6 overflow-hidden rounded-2xl border border-[#2e3238] bg-gradient-to-b from-[#4079da] to-black p-6 text-white shadow-lg h-56 flex flex-col justify-between">
        
        {/* Radial grid square background lines replicated */}
        <div className="absolute inset-0 grid grid-cols-8 gap-0 opacity-10 select-none pointer-events-none">
          {Array.from({ length: 32 }).map((_, i) => (
            <div 
              key={i} 
              className="border-r border-b border-white/40 h-14 bg-white/[0.02] hover:bg-white/[0.08] transition-all"
            />
          ))}
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 h-full">
          <div className="flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center gap-3.5">
              {/* Rounded block representation for C language logo */}
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-[#4079da] border border-[#4079da]/30 text-3xl font-extrabold font-mono shadow-inner select-none">
                C
              </span>
              <div>
                <h1 className="text-2xl font-bold font-sans text-white leading-tight">Data Structures in C</h1>
                <p className="text-sm text-gray-400 mt-0.5">Lab problems based on Data structures in C</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-400 font-medium">
              <span>📚 12 Lessons</span>
              <span>⏱️ 10 Hours</span>
              <span>💡 31 Problems</span>
              <span>👥 1.8k Learners</span>
              <span>🎓 College Level</span>
            </div>

            <div className="space-y-1.5 w-full max-w-sm">
              <div className="flex justify-between text-xs text-[#2bbe62] font-semibold select-none">
                <span>Your Progress : 100% Completed</span>
                <span>🏁</span>
              </div>
              <div className="h-1.5 w-full bg-[#1e293b] rounded-full overflow-hidden">
                <div className="h-full bg-[#2bbe62] rounded-full w-full" />
              </div>
            </div>
          </div>

          <div className="self-end md:self-center">
            <button 
              onClick={() => selectProblem("CTLL")}
              className="rounded-lg bg-[#4079da] border border-[#4079da] hover:bg-[#2b59c3] text-white px-7 py-3 font-sans font-bold text-sm shadow-md transition duration-200"
            >
              Start Learning
            </button>
          </div>
        </div>
      </div>

      {/* Main Body Columns */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column: Accordion list of Cycles */}
        <div className="flex-1 space-y-4">
          
          {/* Header search bar */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search problems by name or code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-[#2e3238] bg-[#1d1e23] py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:border-[#4079da] focus:outline-none focus:ring-1 focus:ring-[#4079da] transition-all font-sans"
            />
            <span className="absolute left-3 top-3 text-gray-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>

          {/* Search Results if query exists */}
          {searchQuery && (
            <div className="rounded-xl border border-[#2e3238] bg-[#2e3238]/30 p-4 mb-4">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Search Results ({filteredProblems.length})</h2>
              {filteredProblems.length > 0 ? (
                <div className="divide-y divide-[#2e3238]">
                  {filteredProblems.map((p) => (
                    <div 
                      key={p.code}
                      onClick={() => selectProblem(p.code)}
                      className="py-2.5 flex items-center justify-between cursor-pointer group"
                    >
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#4079da] transition">{p.name}</div>
                        <div className="text-xs text-gray-500 font-mono mt-0.5">{p.cycle} &bull; {p.code}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="h-5 w-5 rounded-full bg-[#17a94e] flex items-center justify-center text-white text-[10px] font-bold">✓</span>
                        <span className="px-2 py-0.5 bg-[rgba(255,176,57,0.2)] rounded text-[10px] text-[#ffb039] font-semibold">Medium</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-500 py-2 font-mono">No matching problems found.</div>
              )}
            </div>
          )}

          {/* 12 Cycles Accordions (Matches CodeChef Card style `#2e3238` and border `#3a3d44`) */}
          {cycleNames.map((cycle, cycleIdx) => {
            const isExpanded = !!expandedCycles[cycle];
            const cycleProblems = cyclesMap[cycle] || [];
            
            return (
              <div 
                key={cycle} 
                className="overflow-hidden rounded-2xl border border-[#3a3d44] bg-[#2e3238] shadow"
              >
                {/* Accordion header */}
                <div 
                  onClick={() => toggleCycle(cycle)}
                  className="flex cursor-pointer items-center justify-between p-5 hover:bg-white/[0.02] border-b border-[#3a3d44]/30 transition select-none"
                >
                  <div className="flex items-center gap-4">
                    {/* Dark circular badge `#24262b` */}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#24262b] text-sm font-bold border border-[#3a3d44]/20">
                      {cycleIdx + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-white font-sans text-sm">{cycle}</h3>
                      <p className="text-[11px] text-[#2bbe62] font-semibold mt-0.5">100% Solved</p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    {isExpanded ? (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Problems table inside accordion */}
                {isExpanded && (
                  <div className="bg-[#1d1e23]/30 overflow-x-auto">
                    {cycleProblems.length > 0 ? (
                      <table className="w-full text-left text-xs font-sans">
                        <thead>
                          <tr className="border-b border-[#3a3d44] text-[10px] text-gray-400 uppercase tracking-wider bg-white/[0.01]">
                            <th className="px-6 py-3 font-semibold">Problem Name</th>
                            <th className="px-6 py-3 font-semibold text-center w-28">Status</th>
                            <th className="px-6 py-3 font-semibold text-center w-28">Difficulty</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#3a3d44]/35">
                          {cycleProblems.map((p) => (
                            <tr key={p.code} className="hover:bg-white/[0.02] transition">
                              <td className="px-6 py-3.5">
                                <span 
                                  onClick={() => selectProblem(p.code)}
                                  className="font-semibold text-[#4079da] hover:text-blue-400 hover:underline cursor-pointer transition text-sm"
                                >
                                  {p.name}
                                </span>
                              </td>
                              <td className="px-6 py-3.5 text-center">
                                {/* Green check circle status icon */}
                                <span className="inline-flex h-5 w-5 rounded-full bg-[#17a94e] items-center justify-center text-white text-[10px] font-bold select-none">
                                  ✓
                                </span>
                              </td>
                              <td className="px-6 py-3.5 text-center">
                                {/* Replicated orange or green difficulty badge */}
                                {p.name.toLowerCase().includes("easy") || p.code === "SNISTCLIST" || p.code.startsWith("XYZT0") || p.code.startsWith("BPT") || p.code.startsWith("SHELL") || p.code.startsWith("BST") || p.code.startsWith("BT") || p.code.startsWith("AVL") ? (
                                  <span className="inline-block px-2.5 py-1 bg-[rgba(103,230,151,0.2)] rounded-lg text-xs text-[#67e697] font-sans">
                                    Easy
                                  </span>
                                ) : (
                                  <span className="inline-block px-2.5 py-1 bg-[rgba(255,176,57,0.2)] rounded-lg text-xs text-[#ffb039] font-sans">
                                    Medium
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div className="p-5 text-center text-gray-500 font-mono select-none">
                        No problems in this cycle.
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Certificate Card (ditto replication) */}
        <div className="w-full lg:w-72 shrink-0 space-y-4 font-sans select-none">
          <div className="rounded-2xl border border-[#2e3446] bg-[#2e3238] p-5 shadow">
            {/* Mock certificate template container */}
            <div className="relative w-full h-36 rounded-lg overflow-hidden border border-gray-600/30 mb-4 bg-[#1e2025]">
              <img 
                src="https://cdn.codechef.com/images/roadmap/roadmap_cert_template.avif" 
                alt="Certificate Template" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center p-3">
                <span className="text-2xl mb-1">🏅</span>
                <span className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest">Certificate</span>
                <span className="text-white font-bold text-xs mt-1">Sreenidhi Institute of Science and Technology</span>
              </div>
            </div>
            
            <h3 className="font-bold text-white text-sm mb-1 text-center">Certification available</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-4 text-center">
              You did it! All lessons are complete. Your course certificate is now available.
            </p>
            <button className="w-full rounded-lg bg-[#335ba3] hover:bg-[#274885] text-white py-2.5 font-bold text-xs shadow transition duration-200">
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SnistDashboard() {
  return (
    <Suspense fallback={<div className="p-10 text-center font-mono text-gray-500">Loading dashboard...</div>}>
      <SnistDashboardContent />
    </Suspense>
  );
}
