import { ReactNode } from "react";

type CalloutType = "blue" | "green" | "yellow" | "red" | "purple";

type CalloutProps = {
  type: CalloutType;
  title: string;
  children: ReactNode;
};

const styles: Record<CalloutType, string> = {
  blue: "border-l-[#5b8fff] bg-[#0b120f] text-[#d8ffd8]",
  green: "border-l-[#43e8b0] bg-[#0b120f] text-[#d8ffd8]",
  yellow: "border-l-[#ffd166] bg-[#121109] text-[#d8ffd8]",
  red: "border-l-[#ff6b6b] bg-[#140d0d] text-[#d8ffd8]",
  purple: "border-l-[#7c6aff] bg-[#100d14] text-[#d8ffd8]",
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
      className={`my-6 rounded-md border border-[#224022] border-l-4 p-5 ${styles[type]}`}
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
