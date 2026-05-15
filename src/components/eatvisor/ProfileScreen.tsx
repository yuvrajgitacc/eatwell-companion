import { ChevronRight, Heart, Utensils, Bell, Settings } from "lucide-react";
import { BottomNav } from "./BottomNav";
import coach from "@/assets/coach.jpg";

export function ProfileScreen() {
  return (
    <div className="relative h-full overflow-y-auto pb-28">
      <div className="px-6 pt-2 pb-5">
        <p className="text-xs text-muted-foreground">Profile</p>
        <h1 className="text-[24px] font-medium mt-1">You & your goals</h1>
      </div>

      <div className="mx-5 rounded-3xl bg-card border border-border/40 p-5 ev-shadow-soft flex items-center gap-4">
        <img src={coach} alt="" className="w-14 h-14 rounded-full object-cover" loading="lazy" />
        <div className="flex-1">
          <p className="text-base font-medium text-foreground">Aisha Khan</p>
          <p className="text-[11px] text-muted-foreground">Member since 2024 · Premium plan</p>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
      </div>

      <div className="px-5 mt-5">
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2 px-1">Preferences</p>
        <div className="rounded-3xl bg-card border border-border/40 divide-y divide-border/50 overflow-hidden">
          <Row icon={Heart} label="Medical conditions" value="Pre-diabetic" />
          <Row icon={Utensils} label="Dietary preference" value="Vegetarian" />
          <Row icon={Bell} label="Reminders" value="Daily · 8 AM" />
          <Row icon={Settings} label="Settings" value="" />
        </div>
      </div>

      <div className="px-5 mt-6">
        <div className="rounded-3xl ev-gradient-warm p-5 border border-border/40">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60">Your streak</p>
          <p className="text-2xl font-medium mt-1" style={{ fontFamily: "Fraunces, serif" }}>24 days of mindful eating 🌿</p>
          <p className="text-[11px] text-muted-foreground mt-2">Small steps, real change. We're proud of you.</p>
        </div>
      </div>

      <BottomNav active="profile" />
    </div>
  );
}

function Row({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3.5 text-left">
      <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
        <Icon className="w-4 h-4 text-foreground/70" />
      </div>
      <span className="flex-1 text-sm text-foreground">{label}</span>
      {value && <span className="text-xs text-muted-foreground mr-1">{value}</span>}
      <ChevronRight className="w-4 h-4 text-muted-foreground" />
    </button>
  );
}
