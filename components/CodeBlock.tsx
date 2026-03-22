import { ReactNode } from "react";

type CodeBlockProps = {
  language: string;
  children: ReactNode;
};

export default function CodeBlock({ language, children }: CodeBlockProps) {
  return (
    <div className="my-5 overflow-hidden rounded-md border border-[#224022] bg-[#081008]">
      <div className="border-b border-[#224022] bg-[#0b150b] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#8cb78c]">
        {language}
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-7 text-[#b8ffb8]">
        <code>{children}</code>
      </pre>
    </div>
  );
}
