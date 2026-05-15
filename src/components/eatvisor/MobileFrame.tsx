import { ReactNode } from "react";

export function MobileFrame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-[380px] h-[800px] rounded-[3rem] bg-foreground/95 p-[10px] ev-shadow-card">
        <div className="relative w-full h-full rounded-[2.5rem] bg-background overflow-hidden">
          {/* notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/95 rounded-full z-30" />
          <div className="absolute inset-0 flex flex-col">
            {/* status bar */}
            <div className="flex justify-between items-center px-7 pt-3 pb-1 text-[11px] font-medium text-foreground/80 z-20">
              <span>9:41</span>
              <span className="flex gap-1 items-center">
                <span className="w-3.5 h-2 rounded-sm border border-foreground/60" />
              </span>
            </div>
            <div className="flex-1 overflow-hidden">{children}</div>
          </div>
        </div>
      </div>
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
    </div>
  );
}
