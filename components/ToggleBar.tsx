import Link from "next/link";

type ToggleBarProps = {
  current: "notes" | "cheatsheet";
  notesHref: string;
  cheatsheetHref: string;
};

export default function ToggleBar({
  current,
  notesHref,
  cheatsheetHref,
}: ToggleBarProps) {
  const toNotes = current === "cheatsheet";

  return (
    <div className="mb-8 flex justify-end">
      <div className="inline-flex rounded-full border border-[#2a3042] bg-[#151a27]/90 p-1 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
        <Link
          href={toNotes ? notesHref : cheatsheetHref}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition hover:-translate-y-0.5 ${
            toNotes
              ? "bg-[#5b8fff]/20 text-[#cfe0ff]"
              : "bg-[#43e8b0]/20 text-[#c6ffe9]"
          }`}
        >
          {toNotes ? "Switch to Full Notes" : "Switch to Cheat Sheet"}
        </Link>
      </div>
    </div>
  );
}
