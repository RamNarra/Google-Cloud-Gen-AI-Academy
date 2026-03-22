import { ReactNode } from "react";

type StepItemProps = {
  number: string;
  children: ReactNode;
};

export default function StepItem({ number, children }: StepItemProps) {
  return (
    <div className="my-3 flex items-start gap-4">
      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#224022] bg-[#0c140c] font-mono text-xs text-[#9cffc8]">
        {number}
      </div>
      <div className="flex-1 text-[16px] leading-8 text-[#d8ffd8]">
        {children}
      </div>
    </div>
  );
}
