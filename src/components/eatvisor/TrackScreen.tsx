import { ArrowDownRight, ArrowUpRight, Plus } from "lucide-react";
import { BottomNav } from "./BottomNav";

export function TrackScreen() {
  const bars = [40, 55, 48, 62, 58, 70, 66];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="relative h-full overflow-y-auto pb-28">
      <div className="px-6 pt-2 pb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Health tracking</p>
          <h1 className="text-[24px] font-medium mt-1">Your progress</h1>
        </div>
        <button className="w-10 h-10 rounded-2xl ev-gradient-sage text-primary-foreground flex items-center justify-center">
          <Plus className="w-4.5 h-4.5" />
        </button>
      </div>

      <div className="px-5">
        <div className="rounded-3xl bg-card border border-border/40 p-5 ev-shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Weight</p>
              <p className="text-[28px] font-semibold mt-1">64.2<span className="text-sm text-muted-foreground font-normal"> kg</span></p>
            </div>
            <span className="text-xs flex items-center gap-1 text-primary bg-primary/10 px-2 py-1 rounded-full">
              <ArrowDownRight className="w-3 h-3" /> 1.8 kg this month
            </span>
          </div>
          <div className="mt-5 flex items-end gap-2 h-28">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full rounded-t-lg bg-gradient-to-t from-primary/70 to-primary/30" style={{ height: `${h}%` }} />
                <span className="text-[10px] text-muted-foreground">{days[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 px-5 mt-3">
        <MetricCard label="Blood sugar" value="106" unit="mg/dL" delta="-4" good />
        <MetricCard label="Blood pressure" value="118/76" unit="mmHg" delta="stable" good />
      </div>

      <div className="px-5 mt-5">
        <div className="rounded-3xl ev-gradient-warm p-5 border border-border/40">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60">Insight</p>
          <p className="text-sm font-medium text-foreground mt-2 leading-relaxed">
            Your morning sugar levels improved 12% since switching to fiber-rich breakfasts. Keep it up.
          </p>
        </div>
      </div>

      <BottomNav active="track" />
    </div>
  );
}

function MetricCard({ label, value, unit, delta, good }: { label: string; value: string; unit: string; delta: string; good?: boolean }) {
  return (
    <div className="rounded-2xl bg-card p-4 border border-border/40 ev-shadow-soft">
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <p className="text-lg font-semibold mt-1">{value} <span className="text-[11px] text-muted-foreground font-normal">{unit}</span></p>
      <span className={`mt-2 inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full ${good ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>
        {good ? <ArrowDownRight className="w-2.5 h-2.5" /> : <ArrowUpRight className="w-2.5 h-2.5" />} {delta}
      </span>
    </div>
  );
}
