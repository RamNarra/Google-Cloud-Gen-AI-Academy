import { readFile } from "fs/promises";
import path from "path";

import ToggleBar from "@/components/ToggleBar";
import { renderHtmlNotes } from "@/lib/renderHtmlNotes";

export default async function TrackOneCheatsheetPage() {
  const html = await readFile(
    path.join(process.cwd(), "content", "track1-cheatsheet.html"),
    "utf8",
  );

  return (
    <section className="mx-auto max-w-5xl">
      <ToggleBar
        current="cheatsheet"
        notesHref="/track-1"
        cheatsheetHref="/track-1/cheatsheet"
      />
      <div className="mb-4 inline-flex rounded-full border border-[#2a2a2a] bg-[#121212] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[#a1a1aa]">
        Track 1 - Cheat Sheet
      </div>
      <div className="notes-shell">
        <article className="notes-article space-y-4 text-[14px] text-[#ededed]">
          {renderHtmlNotes(html)}
        </article>
      </div>
    </section>
  );
}
