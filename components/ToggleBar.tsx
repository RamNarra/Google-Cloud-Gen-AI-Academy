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
      <div className="inline-flex rounded-md border border-[#272a38] bg-[#13151c] p-1">
        <Link
          href={toNotes ? notesHref : cheatsheetHref}
          className={`rounded px-3 py-1.5 text-sm ${
            toNotes
              ? "bg-[#5b8fff]/20 text-[#5b8fff]"
              : "bg-[#43e8b0]/20 text-[#43e8b0]"
          }`}
        >
          {toNotes ? "Switch to Full Notes" : "Switch to Cheat Sheet"}
        </Link>
      </div>
    </div>
  );
}
