import { readFile } from "fs/promises";
import path from "path";

import ToggleBar from "@/components/ToggleBar";
import { renderHtmlNotes } from "@/lib/renderHtmlNotes";

export default async function TrackOneNotesPage() {
  const html = await readFile(
    path.join(process.cwd(), "content", "track1-notes.html"),
    "utf8",
  );

  return (
    <section className="mx-auto max-w-4xl">
      <ToggleBar
        current="notes"
        notesHref="/track-1"
        cheatsheetHref="/track-1/cheatsheet"
      />
      <article className="space-y-4 text-[17px] text-[#d8e0f0]">
        {renderHtmlNotes(html)}
      </article>
    </section>
  );
}
