import ProgressCard from "@/components/ProgressCard";

export default function HomePage() {
  return (
    <section className="space-y-8">
      <header className="hero-glow relative overflow-hidden rounded-3xl border border-[#224022] bg-gradient-to-br from-[#0f180f] via-[#0c130c] to-[#0a100a] p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:linear-gradient(120deg,transparent_20%,rgba(67,232,176,0.18)_35%,transparent_48%,rgba(91,143,255,0.08)_68%,transparent_82%)]" />
        <div className="relative">
          <p className="mb-4 inline-flex rounded-full border border-[#43e8b0]/30 bg-[#43e8b0]/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8ffb8]">
            Learning Dashboard
          </p>
          <h1 className="mb-5 text-4xl font-semibold leading-tight text-[#e7ffe7] sm:text-6xl">
            Google Cloud Gen AI Academy APAC 2026
          </h1>
          <p className="max-w-3xl text-lg text-[#c3e9c3] sm:text-xl">
            This workspace organizes complete learning notes and concise
            reference material for each session in the programme. It is designed
            for fast revision, clean navigation between workshop notes, and
            structured progress tracking across all tracks.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#43e8b0]/35 bg-[#43e8b0]/12 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#c9ffc9]">
              Material Theme
            </span>
            <span className="rounded-full border border-[#43e8b0]/35 bg-[#43e8b0]/12 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#c9ffc9]">
              Mobile Ready
            </span>
            <span className="rounded-full border border-[#43e8b0]/35 bg-[#43e8b0]/12 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#c9ffc9]">
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
        />
        <ProgressCard
          title="Track 1"
          status="In Progress"
          detailsHref="/track-1"
        />
        <ProgressCard
          title="Track 2"
          status="Coming Soon"
          detailsHref="/track-2"
        />
        <ProgressCard
          title="Track 3"
          status="Coming Soon"
          detailsHref="/track-3"
        />
      </div>
    </section>
  );
}
