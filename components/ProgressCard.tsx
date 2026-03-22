import Link from "next/link";

type ProgressCardProps = {
  title: string;
  status: "Completed" | "In Progress" | "Coming Soon";
  detailsHref: string;
  cheatsheetHref: string;
};

const badgeStyles: Record<ProgressCardProps["status"], string> = {
  Completed: "border-[#43e8b0]/30 bg-[#43e8b0]/10 text-[#43e8b0]",
  "In Progress": "border-[#ffd166]/30 bg-[#ffd166]/10 text-[#ffd166]",
  "Coming Soon": "border-[#6a7290]/30 bg-[#6a7290]/10 text-[#9ba3bf]",
};

export default function ProgressCard({
  title,
  status,
  detailsHref,
  cheatsheetHref,
}: ProgressCardProps) {
  const disabled = status === "Coming Soon";

  return (
    <article className="rounded-lg border border-[#272a38] bg-[#13151c] p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span
          className={`rounded border px-2 py-1 font-mono text-[11px] uppercase tracking-[0.12em] ${badgeStyles[status]}`}
        >
          {status}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link
          href={disabled ? "#" : detailsHref}
          aria-disabled={disabled}
          className={`rounded border px-4 py-2 text-center text-sm font-medium transition ${
            disabled
              ? "cursor-not-allowed border-[#3a3e4e] bg-[#1f2330] text-[#6a7290]"
              : "border-[#5b8fff]/30 bg-[#5b8fff]/10 text-[#d8e0f0] hover:bg-[#5b8fff]/20"
          }`}
        >
          Full Notes
        </Link>
        <Link
          href={disabled ? "#" : cheatsheetHref}
          aria-disabled={disabled}
          className={`rounded border px-4 py-2 text-center text-sm font-medium transition ${
            disabled
              ? "cursor-not-allowed border-[#3a3e4e] bg-[#1f2330] text-[#6a7290]"
              : "border-[#43e8b0]/30 bg-[#43e8b0]/10 text-[#d8e0f0] hover:bg-[#43e8b0]/20"
          }`}
        >
          Cheat Sheet
        </Link>
      </div>
    </article>
  );
}
