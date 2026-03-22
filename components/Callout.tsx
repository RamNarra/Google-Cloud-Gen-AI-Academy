import { ReactNode } from "react";

type CalloutType = "blue" | "green" | "yellow" | "red" | "purple";

type CalloutProps = {
  type: CalloutType;
  title: string;
  children: ReactNode;
};

const styles: Record<CalloutType, string> = {
  blue: "border-l-[#5b8fff] bg-[#5b8fff]/10 text-[#d8e0f0]",
  green: "border-l-[#43e8b0] bg-[#43e8b0]/10 text-[#d8e0f0]",
  yellow: "border-l-[#ffd166] bg-[#ffd166]/10 text-[#d8e0f0]",
  red: "border-l-[#ff6b6b] bg-[#ff6b6b]/10 text-[#d8e0f0]",
  purple: "border-l-[#7c6aff] bg-[#7c6aff]/10 text-[#d8e0f0]",
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
      className={`my-6 rounded-md border border-[#272a38] border-l-4 p-5 ${styles[type]}`}
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
