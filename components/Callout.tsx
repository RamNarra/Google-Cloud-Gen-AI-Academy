import { ReactNode } from "react";

type CalloutType = "blue" | "green" | "yellow" | "red" | "purple";

type CalloutProps = {
  type: CalloutType;
  title: string;
  children: ReactNode;
};

const styles: Record<CalloutType, string> = {
  blue: "border-l-[#79a2ff] bg-[#121a2b] text-[#dce3f0]",
  green: "border-l-[#43e8b0] bg-[#0f1d1b] text-[#dce3f0]",
  yellow: "border-l-[#ffd166] bg-[#241f14] text-[#dce3f0]",
  red: "border-l-[#ff6b6b] bg-[#241516] text-[#dce3f0]",
  purple: "border-l-[#a780ff] bg-[#1d1528] text-[#dce3f0]",
};

const titleStyles: Record<CalloutType, string> = {
  blue: "text-[#5b8fff]",
  green: "text-[#43e8b0]",
  yellow: "text-[#ffd166]",
  red: "text-[#ff6b6b]",
  purple: "text-[#7c6aff]",
};

export default function Callout({ type, title, children }: CalloutProps) {
  return (
    <div
      className={`my-6 rounded-lg border border-[#2a3652] border-l-[3px] px-6 py-5 ${styles[type]}`}
    >
      <div
        className={`mb-2 font-mono text-[11px] uppercase tracking-[0.18em] ${titleStyles[type]}`}
      >
        {title}
      </div>
      <div className="text-[15px] leading-8">{children}</div>
    </div>
  );
}
