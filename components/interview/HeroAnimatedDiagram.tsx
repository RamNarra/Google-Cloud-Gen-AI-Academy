"use client";

import React, { useState } from "react";

interface HeroAnimatedDiagramProps {
  type: string;
}

export default function HeroAnimatedDiagram({ type }: HeroAnimatedDiagramProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="my-4 rounded-3xl border border-[#E2DCD0] bg-white p-5 shadow-sm">
      {/* Header Bar with Animation Controls */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-blue-700">
          📊 VISUAL ARCHITECTURE & SYSTEM DIAGRAM
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 2))}
            className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-800 hover:bg-slate-100 cursor-pointer"
          >
            ← Prev
          </button>
          <span className="font-mono text-xs font-bold text-slate-600">Step {activeStep + 1}/3</span>
          <button
            onClick={() => setActiveStep((prev) => (prev < 2 ? prev + 1 : 0))}
            className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-blue-700 shadow-xs cursor-pointer"
          >
            Next →
          </button>
        </div>
      </div>

      {/* SVG Canvas Container */}
      <div className="relative mt-4 flex min-h-[280px] w-full flex-col items-center justify-center rounded-2xl bg-[#FAF9F5] p-4 border border-slate-200/80">
        
        {/* 1. FSM PRODUCT SUITE & ENTERPRISE MULTI-TENANCY */}
        {(type === "fsm-store" || type === "software-app" || type === "multi-tenant-saas") && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              FSM Enterprise SaaS: Multi-Tenant Architecture & Data Isolation
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg">
              <div className={`rounded-xl border p-3 text-center transition-all ${activeStep === 0 ? "border-blue-600 bg-blue-50 ring-2 ring-blue-500/30 scale-105" : "border-slate-300 bg-white"}`}>
                <span className="text-2xl">🏢</span>
                <h5 className="text-xs font-black text-slate-900 mt-1">Tenant A (Global Co)</h5>
                <p className="text-[11px] font-mono text-blue-800 mt-1">Isolated Tenant Context</p>
              </div>

              <div className={`rounded-xl border p-3 text-center transition-all ${activeStep === 1 ? "border-blue-600 bg-blue-50 ring-2 ring-blue-500/30 scale-105" : "border-slate-300 bg-white"}`}>
                <span className="text-2xl">🏭</span>
                <h5 className="text-xs font-black text-slate-900 mt-1">Tenant B (Logistics Inc)</h5>
                <p className="text-[11px] font-mono text-blue-800 mt-1">Isolated Tenant Context</p>
              </div>

              <div className={`rounded-xl border p-3 text-center transition-all ${activeStep === 2 ? "border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500/30 scale-105" : "border-slate-300 bg-white"}`}>
                <span className="text-2xl">☁️</span>
                <h5 className="text-xs font-black text-slate-900 mt-1">Shared Cloud SaaS</h5>
                <p className="text-[11px] font-mono text-emerald-900 font-bold mt-1">100% Data Isolation</p>
              </div>
            </div>
          </div>
        )}

        {/* 2. SDLC 6-PHASE FLOWCHART */}
        {type === "sdlc-loop" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Software Development Life Cycle (SDLC) 6-Phase Process
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-md font-mono text-xs font-bold">
              <span className={`px-3 py-1.5 rounded-lg border ${activeStep === 0 ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-800 border-slate-300"}`}>1. Requirements</span>
              <span>➔</span>
              <span className={`px-3 py-1.5 rounded-lg border ${activeStep === 0 ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-800 border-slate-300"}`}>2. Design</span>
              <span>➔</span>
              <span className={`px-3 py-1.5 rounded-lg border ${activeStep === 1 ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-800 border-slate-300"}`}>3. Coding</span>
              <span>➔</span>
              <span className={`px-3 py-1.5 rounded-lg border ${activeStep === 1 ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-800 border-slate-300"}`}>4. Testing</span>
              <span>➔</span>
              <span className={`px-3 py-1.5 rounded-lg border ${activeStep === 2 ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-slate-800 border-slate-300"}`}>5. Deploy</span>
              <span>➔</span>
              <span className={`px-3 py-1.5 rounded-lg border ${activeStep === 2 ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-slate-800 border-slate-300"}`}>6. Maintain</span>
            </div>
          </div>
        )}

        {/* 3. AGILE SCRUM VS KANBAN BOARD */}
        {(type === "agile-loop" || type === "scrum-vs-kanban") && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Agile Scrum (2-Week Time-Boxed Sprints) vs Kanban (Continuous Flow & WIP Limits)
            </span>
            <div className="grid grid-cols-3 gap-2 w-full max-w-md text-center font-mono text-xs font-bold">
              <div className="rounded-xl border border-slate-300 bg-slate-100 p-2 text-slate-800">
                <span>To Do</span>
                <div className="mt-1 bg-white p-1.5 rounded border text-[11px] text-slate-700">Sprint Backlog</div>
              </div>
              <div className={`rounded-xl border p-2 ${activeStep === 1 ? "border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-500/30" : "border-slate-300 bg-slate-100 text-slate-800"}`}>
                <span>In Progress (WIP: 3)</span>
                <div className="mt-1 bg-blue-600 text-white p-1.5 rounded text-[11px]">WIP Limit Protection</div>
              </div>
              <div className={`rounded-xl border p-2 ${activeStep === 2 ? "border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/30" : "border-slate-300 bg-slate-100 text-slate-800"}`}>
                <span>Done</span>
                <div className="mt-1 bg-emerald-600 text-white p-1.5 rounded text-[11px]">QA Verified</div>
              </div>
            </div>
          </div>
        )}

        {/* 4. JAVA & JVM BYTECODE DIAGRAM */}
        {type === "jvm-coffee" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Java Compiler & JVM Execution Lifecycle
            </span>
            <div className="flex items-center justify-center gap-2 w-full max-w-md font-mono text-xs font-bold">
              <div className={`p-2.5 rounded-xl border text-center ${activeStep === 0 ? "bg-blue-50 border-blue-600 text-blue-950 scale-105" : "bg-white border-slate-300 text-slate-800"}`}>
                <span>App.java</span>
                <div className="text-[10px] text-slate-500">Source Code</div>
              </div>
              <span>➔</span>
              <div className="p-2.5 rounded-xl border border-slate-300 bg-slate-900 text-amber-300 text-center">
                <span>javac</span>
                <div className="text-[10px] text-slate-400">Compiler</div>
              </div>
              <span>➔</span>
              <div className={`p-2.5 rounded-xl border text-center ${activeStep === 2 ? "bg-emerald-50 border-emerald-600 text-emerald-950 scale-105" : "bg-white border-slate-300 text-slate-800"}`}>
                <span>App.class</span>
                <div className="text-[10px] text-emerald-800 font-bold">JVM Bytecode</div>
              </div>
            </div>
          </div>
        )}

        {/* 5. CLASSES & OBJECTS HEAP MEMORY */}
        {type === "cookie-class" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Class Blueprint vs Heap Memory Object Instance
            </span>
            <div className="flex flex-col sm:flex-row items-center justify-around gap-4 w-full max-w-md">
              <div className="p-3 rounded-xl border-2 border-slate-700 bg-slate-900 text-white text-center w-full sm:w-1/2">
                <span className="font-mono text-[10px] text-amber-300 font-bold">class User &#123;&#125;</span>
                <h5 className="text-xs font-extrabold mt-1">Class Blueprint</h5>
              </div>
              <span className="text-xs font-bold text-blue-600 font-mono">new User() ➔</span>
              <div className={`p-3 rounded-xl border text-center w-full sm:w-1/2 transition-all ${activeStep > 0 ? "border-emerald-600 bg-emerald-50 text-emerald-950 scale-105" : "border-slate-300 bg-white"}`}>
                <span className="text-2xl">🍪</span>
                <h5 className="text-xs font-extrabold mt-1">Heap Object</h5>
              </div>
            </div>
          </div>
        )}

        {/* 6. ENCAPSULATION TV REMOTE */}
        {type === "tv-remote" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Encapsulation: Public Getter/Setter Methods Protecting Private Fields
            </span>
            <div className="flex items-center justify-around gap-3 w-full max-w-md">
              <div className="p-3 rounded-xl border border-blue-600 bg-blue-50 text-blue-950 text-center flex-1">
                <span className="text-2xl">📺</span>
                <h5 className="text-xs font-extrabold mt-1">Public Getter/Setter</h5>
                <span className="font-mono text-[10px] font-bold text-blue-800">+ getVolume()</span>
              </div>
              <span className="text-xs font-bold text-slate-400">Protects ➔</span>
              <div className="p-3 rounded-xl border border-slate-700 bg-slate-900 text-white text-center flex-1">
                <span className="text-2xl">⚙️</span>
                <h5 className="text-xs font-extrabold mt-1">Private Field</h5>
                <span className="font-mono text-[10px] text-slate-300">private double volume;</span>
              </div>
            </div>
          </div>
        )}

        {/* 7. INHERITANCE PARENT-CHILD */}
        {type === "family-inherit" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Inheritance: Superclass ➔ extends ➔ Subclass
            </span>
            <div className="flex flex-col items-center gap-2 w-full max-w-sm">
              <div className="p-2.5 rounded-xl border-2 border-slate-700 bg-slate-900 text-white text-center w-full">
                <h5 className="text-xs font-extrabold">Parent Class (Superclass)</h5>
              </div>
              <span className="text-xs font-mono font-bold text-blue-700">extends ▲</span>
              <div className={`p-2.5 rounded-xl border text-center w-full transition-all ${activeStep > 0 ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold" : "border-slate-300 bg-white"}`}>
                <h5 className="text-xs font-extrabold">Child Class (Subclass)</h5>
                <span className="font-mono text-[10px] text-emerald-800">Reuses Parent Code</span>
              </div>
            </div>
          </div>
        )}

        {/* 8. POLYMORPHISM OVERLOADING VS OVERRIDING */}
        {type === "actor-poly" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Polymorphism: Overloading (Compile-Time) vs Overriding (Runtime)
            </span>
            <div className="grid grid-cols-2 gap-3 w-full max-w-md text-center">
              <div className={`p-3 rounded-xl border ${activeStep === 1 ? "border-blue-600 bg-blue-50 ring-2 ring-blue-500/30" : "border-slate-300 bg-white"}`}>
                <h5 className="text-xs font-extrabold text-slate-900">Overloading</h5>
                <span className="font-mono text-[10px] text-blue-800 block mt-1">Same Class</span>
                <span className="font-mono text-[10px] text-slate-600 block">Different Parameters</span>
              </div>
              <div className={`p-3 rounded-xl border ${activeStep === 2 ? "border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500/30" : "border-slate-300 bg-white"}`}>
                <h5 className="text-xs font-extrabold text-slate-900">Overriding</h5>
                <span className="font-mono text-[10px] text-emerald-900 font-bold block mt-1">Subclass</span>
                <span className="font-mono text-[10px] text-slate-600 block">@Override Parent Method</span>
              </div>
            </div>
          </div>
        )}

        {/* 9. ABSTRACTION INTERFACE */}
        {type === "car-abstract" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Abstraction: Interface Contract Hiding Internal Implementation
            </span>
            <div className="flex items-center justify-around gap-3 w-full max-w-md">
              <div className="p-3 rounded-xl border border-blue-600 bg-blue-50 text-blue-950 text-center flex-1">
                <span className="text-2xl">🚗</span>
                <h5 className="text-xs font-extrabold mt-1">Interface</h5>
                <span className="font-mono text-[10px] font-bold text-blue-800">public void turn();</span>
              </div>
              <span className="text-xs font-bold text-slate-400">Hides ➔</span>
              <div className="p-3 rounded-xl border border-slate-700 bg-slate-900 text-white text-center flex-1">
                <span className="text-2xl">🔧</span>
                <h5 className="text-xs font-extrabold mt-1">Hidden Engine</h5>
                <span className="font-mono text-[10px] text-slate-300">Fluid Dynamics</span>
              </div>
            </div>
          </div>
        )}

        {/* 10. ARRAYLIST VS LINKEDLIST VS STACK & QUEUE */}
        {(type === "stack-plates" || type === "queue-line" || type === "array-lockers" || type === "arraylist-vs-linkedlist") && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Data Structures: Contiguous Array vs LinkedList Nodes vs Stack (LIFO) / Queue (FIFO)
            </span>
            <div className="flex flex-col items-center gap-2">
              <div className={`w-64 rounded-xl border-2 p-2.5 text-center transition-all ${activeStep === 0 ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold scale-105" : "border-slate-300 bg-white text-slate-800"}`}>
                <span className="font-mono text-xs">Array [0..N]: Contiguous RAM • O(1) Index</span>
              </div>
              <div className={`w-64 rounded-xl border p-2.5 text-center transition-all ${activeStep === 1 ? "border-blue-600 bg-blue-50 text-blue-950 font-bold" : "border-slate-300 bg-white text-slate-800"}`}>
                <span className="font-mono text-xs">Node ➔ Node: LinkedList Pointers • O(1) Insert</span>
              </div>
              <div className="w-64 rounded-xl border border-slate-300 bg-slate-100 p-2.5 text-center text-slate-700">
                <span className="font-mono text-xs">LIFO Stack (push/pop) / FIFO Queue (poll)</span>
              </div>
            </div>
          </div>
        )}

        {/* 11. HASHMAP & HASHSET BUCKET ARCHITECTURE */}
        {type === "hashmap-mail" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              HashMap Bucket Array, hashCode() & Red-Black Tree Threshold (&gt; 8)
            </span>
            <div className="flex flex-col gap-2 w-full max-w-md">
              <div className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white p-2.5">
                <span className="rounded-lg bg-blue-600 px-2 py-1 font-mono text-xs font-bold text-white">Bucket [4]</span>
                <span className="font-mono text-xs text-slate-800 font-bold">&quot;Renuka&quot; ➔ 98%</span>
                <span className="font-mono text-xs text-blue-700 font-bold">➔ LinkedList Node</span>
              </div>
              <div className={`flex items-center gap-2 rounded-xl border p-2.5 transition-all ${activeStep === 1 ? "border-emerald-600 bg-emerald-50" : "border-slate-300 bg-white"}`}>
                <span className="rounded-lg bg-emerald-700 px-2 py-1 font-mono text-xs font-bold text-white">Bucket [7]</span>
                <span className="font-mono text-xs text-slate-800 font-bold">&quot;Java&quot; ➔ &quot;JVM&quot;</span>
                <span className="font-mono text-xs text-emerald-900 font-bold">➔ O(1) Fast Lookup</span>
              </div>
            </div>
          </div>
        )}

        {/* 12. TREES & BINARY SEARCH TREES (BST) */}
        {type === "tree-bst" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Binary Search Tree (BST): Left &lt; Root &lt; Right • In-Order Sorted Traversal
            </span>
            <div className="flex flex-col items-center gap-2 w-full max-w-sm font-mono text-xs font-bold">
              <div className="p-2 rounded-xl border border-blue-600 bg-blue-50 text-blue-950 text-center w-24">
                Root: [50]
              </div>
              <div className="flex items-center justify-between w-full px-4">
                <div className={`p-2 rounded-xl border text-center w-24 ${activeStep === 1 ? "border-emerald-600 bg-emerald-50 text-emerald-950" : "border-slate-300 bg-white"}`}>
                  Left: [30]
                </div>
                <div className={`p-2 rounded-xl border text-center w-24 ${activeStep === 2 ? "border-emerald-600 bg-emerald-50 text-emerald-950" : "border-slate-300 bg-white"}`}>
                  Right: [70]
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 13. RELATIONAL DB KEYS & JOINS */}
        {type === "sql-library" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Relational Database Schema: Primary Key ➔ Foreign Key ➔ INNER JOIN
            </span>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 w-full max-w-md font-mono text-xs font-bold">
              <div className="p-3 rounded-xl border border-slate-300 bg-white text-center flex-1 w-full">
                <span className="text-amber-800">🔑 Primary Key</span>
                <div className="text-[11px] text-slate-600 mt-1">Users.user_id</div>
              </div>
              <span>➔ JOIN ➔</span>
              <div className={`p-3 rounded-xl border text-center flex-1 w-full transition-all ${activeStep > 0 ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold" : "border-slate-300 bg-white"}`}>
                <span className="text-blue-800">🔗 Foreign Key</span>
                <div className="text-[11px] text-slate-600 mt-1">Orders.user_id</div>
              </div>
            </div>
          </div>
        )}

        {/* 14. REST CONTROLLERS & JSON PAYLOADS */}
        {type === "rest-waiter" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              REST Architecture: Client HTTP Request ➔ @RestController ➔ 200 OK JSON
            </span>
            <div className="flex w-full flex-col sm:flex-row items-center justify-between gap-2">
              <div className={`p-2.5 rounded-xl border text-center flex-1 w-full ${activeStep === 0 ? "border-blue-600 bg-blue-50" : "border-slate-300 bg-white"}`}>
                <span className="text-xl">📱</span>
                <h5 className="text-xs font-extrabold text-slate-900">Client</h5>
                <span className="font-mono text-[10px] text-blue-800 font-bold">GET /api/fsm</span>
              </div>
              <span className="text-xs font-mono font-bold text-blue-600">➔</span>
              <div className={`p-2.5 rounded-xl border text-center flex-1 w-full ${activeStep === 1 ? "border-blue-600 bg-blue-50" : "border-slate-300 bg-white"}`}>
                <span className="text-xl">⚡</span>
                <h5 className="text-xs font-extrabold text-slate-900">Controller</h5>
                <span className="font-mono text-[10px] text-slate-600">@RestController</span>
              </div>
              <span className="text-xs font-mono font-bold text-blue-600">➔</span>
              <div className={`p-2.5 rounded-xl border text-center flex-1 w-full ${activeStep === 2 ? "border-emerald-600 bg-emerald-50" : "border-slate-300 bg-white"}`}>
                <span className="text-xl">🛢️</span>
                <h5 className="text-xs font-extrabold text-slate-900">JSON Payload</h5>
                <span className="font-mono text-[10px] text-emerald-900 font-bold">200 OK Response</span>
              </div>
            </div>
          </div>
        )}

        {/* 15. SPRING BOOT 3-TIER ASSEMBLY LINE */}
        {type === "spring-factory" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Spring Boot 3-Tier Architecture: Controller ➔ Service ➔ Repository
            </span>
            <div className="grid grid-cols-3 gap-2 w-full max-w-md text-center font-mono text-xs font-bold">
              <div className={`p-2.5 rounded-xl border ${activeStep === 0 ? "border-blue-600 bg-blue-50" : "border-slate-300 bg-white"}`}>
                <h5 className="text-xs font-extrabold text-slate-900">@RestController</h5>
                <span className="text-[10px] text-slate-600 block mt-1">HTTP Router</span>
              </div>
              <div className={`p-2.5 rounded-xl border ${activeStep === 1 ? "border-blue-600 bg-blue-50" : "border-slate-300 bg-white"}`}>
                <h5 className="text-xs font-extrabold text-slate-900">@Service</h5>
                <span className="text-[10px] text-slate-600 block mt-1">Business Logic</span>
              </div>
              <div className={`p-2.5 rounded-xl border ${activeStep === 2 ? "border-emerald-600 bg-emerald-50" : "border-slate-300 bg-white"}`}>
                <h5 className="text-xs font-extrabold text-slate-900">@Repository</h5>
                <span className="text-[10px] text-emerald-900 font-bold block mt-1">JPA / Database</span>
              </div>
            </div>
          </div>
        )}

        {/* 16. MICROSERVICES & API GATEWAY */}
        {(type === "microservices-gateway" || type === "cloud-power") && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Microservices Architecture: API Gateway ➔ Decoupled Services & Redis Cache
            </span>
            <div className="flex flex-col sm:flex-row items-center justify-around gap-3 w-full max-w-md font-mono text-xs font-bold">
              <div className="p-3 rounded-xl border border-blue-600 bg-blue-50 text-blue-950 text-center flex-1 w-full">
                <span className="text-2xl">🌐</span>
                <h5 className="text-xs font-extrabold mt-1">API Gateway</h5>
                <span className="text-[10px] text-blue-800">Auth & Rate Limit</span>
              </div>
              <span>➔</span>
              <div className={`p-3 rounded-xl border text-center flex-1 w-full transition-all ${activeStep > 0 ? "border-emerald-600 bg-emerald-50 text-emerald-950 scale-105" : "border-slate-300 bg-white"}`}>
                <span className="text-2xl">⚡</span>
                <h5 className="text-xs font-extrabold mt-1">Microservices</h5>
                <span className="text-[10px] text-emerald-900 font-bold">+ Redis RAM Cache</span>
              </div>
            </div>
          </div>
        )}

        {/* 17. GIT & CI/CD PIPELINE */}
        {(type === "git-docs" || type === "ci-cd-pipeline") && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              DevOps CI/CD Pipeline: Feature Branch ➔ Automated Tests ➔ Production Deploy
            </span>
            <div className="flex items-center justify-around gap-2 w-full max-w-md font-mono text-xs font-bold">
              <div className="p-2.5 rounded-xl border border-slate-300 bg-white text-center">
                <span>🌿 Git Push</span>
                <div className="text-[10px] text-slate-500">PR Review</div>
              </div>
              <span>➔</span>
              <div className="p-2.5 rounded-xl border border-blue-600 bg-blue-50 text-blue-950 text-center">
                <span>⚙️ CI Build</span>
                <div className="text-[10px] text-blue-800">JUnit Tests</div>
              </div>
              <span>➔</span>
              <div className={`p-2.5 rounded-xl border text-center ${activeStep > 0 ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold" : "border-slate-300 bg-white"}`}>
                <span>🚀 CD Deploy</span>
                <div className="text-[10px] text-emerald-800">K8s Pods</div>
              </div>
            </div>
          </div>
        )}

        {/* 18. DOCKER & KUBERNETES */}
        {type === "docker-ship" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Docker Container Image Packaging vs Kubernetes Cluster Orchestration
            </span>
            <div className="flex flex-col sm:flex-row items-center justify-around gap-3 w-full max-w-md font-mono text-xs font-bold">
              <div className="p-3 rounded-xl border border-blue-600 bg-blue-50 text-blue-950 text-center flex-1 w-full">
                <span className="text-2xl">📦</span>
                <h5 className="text-xs font-extrabold mt-1">Docker Image</h5>
                <span className="text-[10px] text-blue-800">App + JRE Runtime</span>
              </div>
              <span>➔</span>
              <div className={`p-3 rounded-xl border text-center flex-1 w-full transition-all ${activeStep > 0 ? "border-emerald-600 bg-emerald-50 text-emerald-950 scale-105" : "border-slate-300 bg-white"}`}>
                <span className="text-2xl">🏗️</span>
                <h5 className="text-xs font-extrabold mt-1">Kubernetes</h5>
                <span className="text-[10px] text-emerald-900 font-bold">Auto-scaling Pods</span>
              </div>
            </div>
          </div>
        )}

        {/* 19. AI COPILOT CODE GENERATION */}
        {type === "ai-copilot" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              AI SDLC Integration: GitHub Copilot & Gemini Code Assist Autocomplete
            </span>
            <div className="flex items-center justify-around gap-2 w-full max-w-md font-mono text-xs font-bold">
              <div className="p-2.5 rounded-xl border border-slate-300 bg-white text-center flex-1">
                <span className="text-xl">📝</span>
                <h5 className="text-xs font-extrabold text-slate-900">Developer Context</h5>
                <span className="text-[10px] text-slate-500">// write unit test</span>
              </div>
              <span>➔</span>
              <div className="p-2.5 rounded-xl border border-blue-600 bg-blue-50 text-blue-950 text-center flex-1">
                <span className="text-xl">🤖</span>
                <h5 className="text-xs font-extrabold">GenAI Assistant</h5>
                <span className="text-[10px] text-blue-800">JUnit & Mockito Code</span>
              </div>
            </div>
          </div>
        )}

        {/* 20. RESUME STORIES: POLLARIS & INFOR */}
        {(type === "resume-story" || type === "pollaris-arch") && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Pollaris Architecture: Next.js 16 ➔ Share URL Token ➔ Firestore ACID Lock
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full max-w-lg font-mono text-xs font-bold text-center">
              <div className={`p-2.5 rounded-xl border ${activeStep === 0 ? "border-blue-600 bg-blue-50 text-blue-950 scale-105" : "border-slate-300 bg-white text-slate-800"}`}>
                <span className="text-xl">💻</span>
                <h5 className="text-xs font-extrabold mt-1">Next.js 16 Client</h5>
                <span className="text-[10px] text-blue-800 font-bold block mt-1">Share URL Token (16-char)</span>
              </div>
              <div className={`p-2.5 rounded-xl border ${activeStep === 1 ? "border-amber-600 bg-amber-50 text-amber-950 scale-105" : "border-slate-300 bg-white text-slate-800"}`}>
                <span className="text-xl">🔒</span>
                <h5 className="text-xs font-extrabold mt-1">Private Security Rules</h5>
                <span className="text-[10px] text-amber-800 font-bold block mt-1">Invitee Email Check</span>
              </div>
              <div className={`p-2.5 rounded-xl border ${activeStep === 2 ? "border-emerald-600 bg-emerald-50 text-emerald-950 scale-105" : "border-slate-300 bg-white text-slate-800"}`}>
                <span className="text-xl">🛡️</span>
                <h5 className="text-xs font-extrabold mt-1">Firestore Transaction</h5>
                <span className="text-[10px] text-emerald-900 font-bold block mt-1">1-Vote-Per-User ACID</span>
              </div>
            </div>
          </div>
        )}

        {/* 21. BEHAVIORAL STAR METHOD */}
        {type === "star-hr" && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              Behavioral STAR Method (Situation ➔ Task ➔ Action ➔ Result)
            </span>
            <div className="flex flex-wrap justify-center items-center gap-2 font-mono text-xs font-bold">
              <span className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-800">S: Situation</span>
              <span>➔</span>
              <span className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-800">T: Task</span>
              <span>➔</span>
              <span className="px-3 py-1.5 rounded-lg border border-blue-600 bg-blue-50 text-blue-950">A: Action</span>
              <span>➔</span>
              <span className="px-3 py-1.5 rounded-lg border border-emerald-600 bg-emerald-50 text-emerald-950">R: Result</span>
            </div>
          </div>
        )}

        {/* ROBUST FALLBACK FOR ANY OTHER DIAGRAM TYPE */}
        {![
          "fsm-store", "software-app", "multi-tenant-saas", "sdlc-loop", "agile-loop", "scrum-vs-kanban",
          "jvm-coffee", "cookie-class", "tv-remote", "family-inherit", "actor-poly", "car-abstract",
          "stack-plates", "queue-line", "array-lockers", "arraylist-vs-linkedlist", "hashmap-mail",
          "tree-bst", "sql-library", "rest-waiter", "spring-factory", "microservices-gateway",
          "cloud-power", "git-docs", "ci-cd-pipeline", "docker-ship", "ai-copilot", "resume-story",
          "pollaris-arch", "star-hr"
        ].includes(type) && (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-xs font-extrabold text-blue-800 uppercase">
              System Design & Architecture Flowchart
            </span>
            <div className="flex flex-col sm:flex-row items-center justify-around gap-3 w-full max-w-md font-mono text-xs font-bold">
              <div className="p-3 rounded-xl border border-slate-300 bg-white text-center flex-1 w-full">
                <span className="text-2xl">📥</span>
                <h5 className="text-xs font-extrabold mt-1">Input / Request</h5>
                <span className="text-[10px] text-slate-500">Client Call</span>
              </div>
              <span>➔</span>
              <div className={`p-3 rounded-xl border text-center flex-1 w-full transition-all ${activeStep > 0 ? "border-emerald-600 bg-emerald-50 text-emerald-950 scale-105" : "border-slate-300 bg-white"}`}>
                <span className="text-2xl">⚙️</span>
                <h5 className="text-xs font-extrabold mt-1">Processing Engine</h5>
                <span className="text-[10px] text-emerald-900 font-bold">Business Logic & DB</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
