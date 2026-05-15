import { Mic, Image as ImageIcon, Send, Sparkles } from "lucide-react";
import { BottomNav } from "./BottomNav";
import coach from "@/assets/coach.jpg";

export function ChatScreen() {
  return (
    <div className="relative h-full flex flex-col">
      <div className="px-5 pt-2 pb-3 border-b border-border/40 flex items-center gap-3">
        <img src={coach} alt="AI coach" className="w-10 h-10 rounded-full object-cover" loading="lazy" />
        <div className="flex-1">
          <p className="text-sm font-medium flex items-center gap-1.5">Eatvisor AI <Sparkles className="w-3 h-3 text-primary" /></p>
          <p className="text-[11px] text-muted-foreground">Always here · Personalized to you</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
        <Bubble from="ai">Good morning, Aisha 🌿 How did you sleep?</Bubble>
        <Bubble from="me">Slept well, but feeling a little low energy.</Bubble>
        <Bubble from="ai">
          Got it. Try a warm lemon water and add a handful of soaked almonds with breakfast — gentle energy without spiking your sugar.
        </Bubble>
        <div className="flex gap-2 pl-1">
          {["Show me recipes", "Why almonds?", "Log my mood"].map((s) => (
            <span key={s} className="text-[11px] px-3 py-1.5 rounded-full bg-secondary text-foreground/80 border border-border/40">{s}</span>
          ))}
        </div>
      </div>

      <div className="px-4 pb-24 pt-2">
        <div className="flex items-center gap-2 bg-card rounded-full pl-4 pr-2 py-2 border border-border/60 ev-shadow-soft">
          <input placeholder="Ask your coach anything..." className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground" />
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground"><ImageIcon className="w-4 h-4" /></button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground"><Mic className="w-4 h-4" /></button>
          <button className="w-9 h-9 rounded-full ev-gradient-sage text-primary-foreground flex items-center justify-center">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      <BottomNav active="chat" />
    </div>
  );
}

function Bubble({ from, children }: { from: "ai" | "me"; children: React.ReactNode }) {
  if (from === "me") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[78%] px-4 py-2.5 rounded-3xl rounded-br-md bg-foreground text-background text-[13px] leading-relaxed">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="flex">
      <div className="max-w-[80%] px-4 py-2.5 rounded-3xl rounded-bl-md bg-secondary text-foreground text-[13px] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
