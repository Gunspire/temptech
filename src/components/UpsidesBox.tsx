import React from "react";

import { cn } from "../lib/cn";

type UpsidesBoxProps = {
  children: React.ReactNode;
  className?: string;
  label?: string;
};

export function UpsidesBox({
  children,
  className,
  label = "Upsides (demo-only — not visible on the live website)",
}: UpsidesBoxProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border-2 border-[#2C3B57]/20 bg-white shadow-sm",
        className
      )}
    >
      <div className="absolute -top-3 left-5 px-3 py-1 rounded-full border border-[#2C3B57]/20 bg-slate-50 text-[11px] font-extrabold text-[#2C3B57]">
        {label}
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}


