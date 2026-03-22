import { ReactNode } from "react";

type CodeBlockProps = {
  language: string;
  children: ReactNode;
};

export default function CodeBlock({ language, children }: CodeBlockProps) {
  return (
    <div className="my-5 overflow-hidden rounded-md border border-[#2a3652] bg-[#0e1424]">
      <div className="border-b border-[#2a3652] bg-[#141b2f] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#8ea3cb]">
        {language}
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-7 text-[#cfe0ff]">
        <code>{children}</code>
      </pre>
    </div>
  );
}
