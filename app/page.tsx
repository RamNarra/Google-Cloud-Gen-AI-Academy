import ProgressCard from "@/components/ProgressCard";

export default function HomePage() {
  return (
    <section className="space-y-8">
      <header className="hero-glow relative overflow-hidden rounded-3xl border border-[#2a3042] bg-gradient-to-br from-[#1a1f31]/95 via-[#141a29]/95 to-[#101421]/95 p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:linear-gradient(120deg,transparent_20%,rgba(91,143,255,0.3)_35%,transparent_48%,rgba(67,232,176,0.2)_68%,transparent_82%)]" />
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
