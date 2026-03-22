import Link from "next/link";

type ProgressCardProps = {
  title: string;
  status: "Completed" | "In Progress" | "Coming Soon";
  detailsHref: string;
  cheatsheetHref: string;
};

const badgeStyles: Record<ProgressCardProps["status"], string> = {
  Completed: "border-[#43e8b0]/30 bg-[#43e8b0]/12 text-[#7af0c8]",
  "In Progress": "border-[#ffd166]/30 bg-[#ffd166]/12 text-[#ffe2a0]",
  "Coming Soon": "border-[#6a7290]/30 bg-[#6a7290]/12 text-[#a3acc8]",
};

export default function ProgressCard({
  title,
  status,
  detailsHref,
  cheatsheetHref,
}: ProgressCardProps) {
  const disabled = status === "Coming Soon";

  return (
    <article className="group rounded-2xl border border-[#2a3042] bg-gradient-to-b from-[#181d2b]/95 to-[#121624]/95 p-6 shadow-[0_8px_24px_rgba(5,8,14,0.35)] transition hover:-translate-y-0.5 hover:border-[#5b8fff]/30">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-white sm:text-2xl">
          {title}
        </h3>
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
              : "border-[#5b8fff]/30 bg-[#5b8fff]/10 text-[#d8e0f0] hover:border-[#5b8fff]/50 hover:bg-[#5b8fff]/20"
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
              : "border-[#43e8b0]/30 bg-[#43e8b0]/10 text-[#d8e0f0] hover:border-[#43e8b0]/50 hover:bg-[#43e8b0]/20"
          }`}
        >
          Cheat Sheet
        </Link>
      </div>
    </article>
  );
}
