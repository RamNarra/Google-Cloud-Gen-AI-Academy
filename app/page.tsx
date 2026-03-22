import ProgressCard from "@/components/ProgressCard";

export default function HomePage() {
  return (
    <section className="space-y-8">
      <header className="rounded-xl border border-[#272a38] bg-[#13151c]/80 p-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#5b8fff]">
          Learning Dashboard
        </p>
        <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Google Cloud Gen AI Academy APAC 2026
        </h1>
        <p className="max-w-3xl text-lg text-[#c5cee8]">
          This workspace organizes complete learning notes and concise reference
          sheets for each session in the programme. It is designed for fast
          revision, clean navigation between full workshops and cheat sheets,
          and structured progress tracking across all tracks.
        </p>
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
