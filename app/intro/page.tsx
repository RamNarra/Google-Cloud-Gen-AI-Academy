import { readFile } from "fs/promises";
import path from "path";

import ToggleBar from "@/components/ToggleBar";
import { renderHtmlNotes } from "@/lib/renderHtmlNotes";

export default async function IntroNotesPage() {
  const html = await readFile(
    path.join(process.cwd(), "content", "intro-detailed.html"),
    "utf8",
  );

  return (
    <section className="mx-auto max-w-5xl">
      <ToggleBar
        current="notes"
        notesHref="/intro"
        cheatsheetHref="/intro/cheatsheet"
      />
      <div className="notes-shell">
        <article className="notes-article space-y-4 text-[17px] text-[#d8e0f0]">
          {renderHtmlNotes(html)}
        </article>
      </div>
    </section>
  );
}
