import Link from "next/link";

type ProgressCardProps = {
  title: string;
  status: "Completed" | "In Progress" | "Coming Soon";
  detailsHref: string;
};

const badgeStyles: Record<ProgressCardProps["status"], string> = {
  Completed: "border-[#43e8b0]/30 bg-[#43e8b0]/12 text-[#7af0c8]",
  "In Progress": "border-[#ffd166]/30 bg-[#ffd166]/12 text-[#ffe2a0]",
  "Coming Soon": "border-[#6a7290]/30 bg-[#6a7290]/12 text-[#a3acc8]",
};

const edgeStyles: Record<ProgressCardProps["status"], string> = {
  Completed: "from-[#43e8b0]/45 to-transparent",
  "In Progress": "from-[#ffd166]/45 to-transparent",
  "Coming Soon": "from-[#6a7290]/45 to-transparent",
};

export default function ProgressCard({
  title,
  status,
  detailsHref,
}: ProgressCardProps) {
  const disabled = status === "Coming Soon";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[#224022] bg-gradient-to-b from-[#101610] to-[#0a100a] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:border-[#43e8b0]/45">
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${edgeStyles[status]}`}
      />
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#43e8b0]/10 blur-3xl transition group-hover:bg-[#43e8b0]/18" />
      <div className="mb-5 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-[#e7ffe7] sm:text-2xl">
          {title}
        </h3>
        <span
          className={`rounded border px-2 py-1 font-mono text-[11px] uppercase tracking-[0.12em] ${badgeStyles[status]}`}
        >
          {status}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <Link
          href={disabled ? "#" : detailsHref}
          aria-disabled={disabled}
          className={`rounded border px-4 py-2 text-center text-sm font-medium transition ${
            disabled
              ? "cursor-not-allowed border-[#2b3a2b] bg-[#101710] text-[#6f8a6f]"
              : "border-[#43e8b0]/30 bg-[#43e8b0]/12 text-[#d8ffd8] hover:border-[#43e8b0]/55 hover:bg-[#43e8b0]/22"
          }`}
        >
          Full Notes
        </Link>
      </div>
    </article>
  );
}
