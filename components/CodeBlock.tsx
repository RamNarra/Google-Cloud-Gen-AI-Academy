import { ReactNode } from "react";

type CodeBlockProps = {
  language: string;
  children: ReactNode;
};

export default function CodeBlock({ language, children }: CodeBlockProps) {
  return (
    <div className="my-5 overflow-hidden rounded-md border border-[#272a38] bg-[#111318]">
      <div className="border-b border-[#272a38] bg-[#161922] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#6a7290]">
        {language}
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-7 text-[#d8e0f0]">
        <code>{children}</code>
      </pre>
    </div>
  );
}
