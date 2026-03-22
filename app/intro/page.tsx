import { readFile } from "fs/promises";
import path from "path";

import { renderHtmlNotes } from "@/lib/renderHtmlNotes";

export default async function IntroNotesPage() {
  const html = await readFile(
    path.join(process.cwd(), "content", "intro-detailed.html"),
    "utf8",
  );

  return (
    <section className="mx-auto max-w-5xl">
      <div className="mb-4 inline-flex rounded-full border border-[#224022] bg-[#0f150f] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[#8cb78c]">
        Introductory Session - Full Notes
      </div>
      <div className="notes-shell">
        <article className="notes-article space-y-4 text-[17px] text-[#ededed]">
          {renderHtmlNotes(html)}
        </article>
      </div>
    </section>
  );
}
