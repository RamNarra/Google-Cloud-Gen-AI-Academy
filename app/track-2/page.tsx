import { readFile } from "fs/promises";
import path from "path";

import { renderHtmlNotes } from "@/lib/renderHtmlNotes";

export default async function TrackTwoPage() {
  const html = await readFile(
    path.join(process.cwd(), "content", "track2-notes.html"),
    "utf8",
  );

  return (
    <section className="mx-auto max-w-5xl">
      <div className="mb-4 inline-flex rounded-full border border-[#2a3652] bg-[#101523] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[#8fa4d8]">
        Track 2 - Full Notes
      </div>
      <div className="notes-shell">
        <article className="notes-article space-y-4 text-[17px] text-[#dce3f0]">
          {renderHtmlNotes(html)}
        </article>
      </div>
    </section>
  );
}
