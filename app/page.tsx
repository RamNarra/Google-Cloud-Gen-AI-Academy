import ProgressCard from "@/components/ProgressCard";

export default function HomePage() {
  return (
    <section className="space-y-8">
      <header className="hero-glow relative overflow-hidden rounded-3xl border border-[#2a3042] bg-gradient-to-br from-[#1a1f31]/95 via-[#141a29]/95 to-[#101421]/95 p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:linear-gradient(120deg,transparent_20%,rgba(91,143,255,0.3)_35%,transparent_48%,rgba(67,232,176,0.2)_68%,transparent_82%)]" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#7c6aff]/30 bg-[#7c6aff]/14 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 left-12 h-56 w-56 rounded-full border border-[#ff6b6b]/20 bg-[#ff6b6b]/12 blur-3xl" />
        <div className="relative">
          <p className="mb-4 inline-flex rounded-full border border-[#5b8fff]/30 bg-[#5b8fff]/12 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#d9e7ff]">
            Learning Dashboard
          </p>
          <h1 className="mb-5 text-4xl font-semibold leading-tight sm:text-6xl">
            Google Cloud Gen AI Academy APAC 2026
          </h1>
          <p className="max-w-3xl text-lg text-[#c5cee8] sm:text-xl">
            This workspace organizes complete learning notes and concise
            reference sheets for each session in the programme. It is designed
            for fast revision, clean navigation between full workshops and cheat
            sheets, and structured progress tracking across all tracks.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#5b8fff]/35 bg-[#5b8fff]/12 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#d9e7ff]">
              Material Theme
            </span>
            <span className="rounded-full border border-[#43e8b0]/35 bg-[#43e8b0]/12 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#c9ffe9]">
              Mobile Ready
            </span>
            <span className="rounded-full border border-[#ffd166]/35 bg-[#ffd166]/12 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#ffe6af]">
              Live Production
            </span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ProgressCard
          title="Introductory Session"
          status="Completed"
          detailsHref="/intro"
          cheatsheetHref="/intro/cheatsheet"
        />
        <ProgressCard
          title="Track 1"
          status="In Progress"
          detailsHref="/track-1"
          cheatsheetHref="/track-1/cheatsheet"
        />
        <ProgressCard
          title="Track 2"
          status="Coming Soon"
          detailsHref="/track-2"
          cheatsheetHref="/track-2"
        />
        <ProgressCard
          title="Track 3"
          status="Coming Soon"
          detailsHref="/track-3"
          cheatsheetHref="/track-3"
        />
      </div>
    </section>
  );
}
