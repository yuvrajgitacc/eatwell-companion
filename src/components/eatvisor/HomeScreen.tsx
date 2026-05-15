import { Bell, Droplet, Calendar, TrendingUp, Sparkles, Check, Sun } from "lucide-react";
import { BottomNav } from "./BottomNav";
import breakfast from "@/assets/meal-breakfast.jpg";
import lunch from "@/assets/meal-lunch.jpg";

export function HomeScreen() {
  return (
    <div className="relative h-full overflow-y-auto pb-28">
      {/* greeting header */}
      <div className="px-6 pt-2 pb-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5" /> Good morning
            </p>
            <h1 className="text-[26px] leading-tight font-medium text-foreground mt-1">Hi, Aisha</h1>
          </div>
          <div className="relative w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Bell className="w-4.5 h-4.5 text-foreground/70" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </div>
      </div>

      {/* daily message */}
      <div className="mx-5 rounded-3xl ev-gradient-sage p-5 text-primary-foreground ev-shadow-soft">
        <Sparkles className="w-4 h-4 opacity-80" />
        <p className="mt-2 text-[15px] leading-snug font-medium" style={{ fontFamily: "Fraunces, serif" }}>
          "Small, gentle choices today become tomorrow's strength."
        </p>
        <p className="text-[11px] opacity-70 mt-3">Daily wellness · Day 24 streak</p>
      </div>

      {/* stats row */}
      <div className="grid grid-cols-2 gap-3 px-5 mt-4">
        <div className="rounded-2xl bg-card p-4 ev-shadow-soft border border-border/40">
          <div className="flex items-center gap-2 text-muted-foreground text-[11px]">
            <Droplet className="w-3.5 h-3.5" /> Water
          </div>
          <p className="mt-2 text-xl font-semibold text-foreground">1.6<span className="text-sm text-muted-foreground font-normal"> / 2.5L</span></p>
          <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
            <div className="h-full w-[64%] rounded-full bg-primary/80" />
          </div>
        </div>
        <div className="rounded-2xl bg-card p-4 ev-shadow-soft border border-border/40">
          <div className="flex items-center gap-2 text-muted-foreground text-[11px]">
            <TrendingUp className="w-3.5 h-3.5" /> Calories
          </div>
          <p className="mt-2 text-xl font-semibold text-foreground">1240<span className="text-sm text-muted-foreground font-normal"> kcal</span></p>
          <p className="text-[11px] text-muted-foreground mt-2">on track for today</p>
        </div>
      </div>

      {/* today's meals */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-medium text-foreground">Today's plan</h2>
          <span className="text-xs text-muted-foreground">3 meals</span>
        </div>
        <div className="space-y-3">
          <MealRow img={breakfast} time="8:30 AM" name="Avocado toast & poached egg" tag="Breakfast" done />
          <MealRow img={lunch} time="1:00 PM" name="Quinoa harvest bowl" tag="Lunch" />
        </div>
      </div>

      {/* upcoming consult */}
      <div className="px-5 mt-6">
        <div className="rounded-3xl bg-accent/40 border border-accent/60 p-4 flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-background flex items-center justify-center">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Consultation with Dr. Maya</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">Tomorrow · 10:30 AM · Video call</p>
          </div>
          <button className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-foreground text-background">Join</button>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
}

function MealRow({ img, time, name, tag, done }: { img: string; time: string; name: string; tag: string; done?: boolean }) {
  return (
    <div className="flex items-center gap-3 p-2 pr-4 bg-card rounded-2xl ev-shadow-soft border border-border/40">
      <img src={img} alt={name} className="w-14 h-14 rounded-xl object-cover" loading="lazy" />
      <div className="flex-1">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{tag} · {time}</p>
        <p className="text-sm font-medium text-foreground mt-0.5 leading-snug">{name}</p>
      </div>
      <div className={`w-7 h-7 rounded-full flex items-center justify-center ${done ? "bg-primary text-primary-foreground" : "border border-border"}`}>
        {done && <Check className="w-3.5 h-3.5" />}
      </div>
    </div>
  );
}
