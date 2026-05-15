import { createFileRoute } from "@tanstack/react-router";
import { MobileFrame } from "@/components/eatvisor/MobileFrame";
import { HomeScreen } from "@/components/eatvisor/HomeScreen";
import { MealsScreen } from "@/components/eatvisor/MealsScreen";
import { TrackScreen } from "@/components/eatvisor/TrackScreen";
import { ChatScreen } from "@/components/eatvisor/ChatScreen";
import { ProfileScreen } from "@/components/eatvisor/ProfileScreen";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* hero */}
      <header className="px-8 pt-16 pb-10 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="w-6 h-px bg-muted-foreground/50" /> Eatvisor
        </div>
        <h1 className="mt-5 text-4xl md:text-6xl font-medium leading-[1.05] max-w-3xl text-foreground">
          A calm, personal space for the way you eat, feel, and heal.
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
          Smart meal plans, gentle health tracking, and an AI coach that actually listens —
          designed to feel like a wellness companion, not a hospital app.
        </p>
      </header>

      <main className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          <MobileFrame label="01 — Home dashboard"><HomeScreen /></MobileFrame>
          <MobileFrame label="02 — Smart meal plan"><MealsScreen /></MobileFrame>
          <MobileFrame label="03 — Health tracking"><TrackScreen /></MobileFrame>
          <MobileFrame label="04 — AI health coach"><ChatScreen /></MobileFrame>
          <MobileFrame label="05 — Profile & goals"><ProfileScreen /></MobileFrame>
        </div>
      </main>

      <footer className="px-8 pb-12 text-center text-xs text-muted-foreground">
        Eatvisor — designed to feel human.
      </footer>
    </div>
  );
}
