import { ReactNode } from "react";

type StepItemProps = {
  number: string;
  children: ReactNode;
};

export default function StepItem({ number, children }: StepItemProps) {
  return (
    <div className="my-3 flex items-start gap-4">
      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#272a38] bg-[#1a1d27] font-mono text-xs text-[#5b8fff]">
        {number}
      </div>
      <div className="flex-1 text-[16px] leading-8 text-[#d8e0f0]">
        {children}
      </div>
    </div>
  );
}
