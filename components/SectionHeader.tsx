type SectionHeaderProps = {
  number: string;
  title: string;
};

export default function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <h2 className="mb-5 mt-14 flex items-center gap-3 text-3xl font-semibold text-white">
      <span className="rounded border border-[#5b8fff]/30 bg-[#5b8fff]/10 px-2.5 py-1 font-mono text-xs tracking-[0.12em] text-[#5b8fff]">
        {number}
      </span>
      <span className="leading-tight">{title}</span>
    </h2>
  );
}
