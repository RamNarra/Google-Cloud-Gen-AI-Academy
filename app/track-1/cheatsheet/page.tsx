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
      <div className="notes-shell">
        <article className="notes-article space-y-4 text-[14px] text-[#d8e0f0]">
          {renderHtmlNotes(html)}
        </article>
      </div>
    </section>
  );
}
