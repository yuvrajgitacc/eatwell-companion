import { Home, Utensils, Activity, MessageCircle, User } from "lucide-react";

export function BottomNav({ active = "home" }: { active?: string }) {
  const items = [
    { id: "home", icon: Home, label: "Home" },
    { id: "meals", icon: Utensils, label: "Meals" },
    { id: "track", icon: Activity, label: "Track" },
    { id: "chat", icon: MessageCircle, label: "Coach" },
    { id: "profile", icon: User, label: "You" },
  ];
  return (
    <div className="absolute bottom-0 inset-x-0 px-3 pb-3 pt-2 bg-background/95 backdrop-blur border-t border-border/60">
      <div className="flex justify-between items-center px-2">
        {items.map(({ id, icon: Icon, label }) => {
          const isActive = id === active;
          return (
            <div key={id} className="flex flex-col items-center gap-1 py-1 px-3">
              <div className={`w-10 h-10 flex items-center justify-center rounded-2xl transition ${isActive ? "ev-gradient-sage text-primary-foreground" : "text-muted-foreground"}`}>
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.4 : 1.8} />
              </div>
              <span className={`text-[10px] font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
