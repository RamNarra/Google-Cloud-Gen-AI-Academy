import { ReactNode } from "react";

type StepItemProps = {
  number: string;
  children: ReactNode;
};

export default function StepItem({ number, children }: StepItemProps) {
  return (
    <div className="my-3 flex items-start gap-4">
      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#2a3652] bg-[#151c30] font-mono text-xs text-[#7cf3c6]">
        {number}
      </div>
      <div className="flex-1 text-[16px] leading-8 text-[#dce3f0]">
        {children}
      </div>
    </div>
  );
}
