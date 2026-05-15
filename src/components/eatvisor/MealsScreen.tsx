import { Search, Leaf, X, Clock } from "lucide-react";
import { BottomNav } from "./BottomNav";
import breakfast from "@/assets/meal-breakfast.jpg";
import lunch from "@/assets/meal-lunch.jpg";

export function MealsScreen() {
  return (
    <div className="relative h-full overflow-y-auto pb-28">
      <div className="px-6 pt-2 pb-4">
        <p className="text-xs text-muted-foreground">Smart meal plan</p>
        <h1 className="text-[24px] font-medium mt-1">For your wellness goals</h1>
      </div>

      <div className="px-5">
        <div className="flex items-center gap-2 bg-secondary rounded-2xl px-4 py-3">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input placeholder="Search recipes, ingredients..." className="bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground" />
        </div>

        <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
          {["Diabetic-friendly", "Heart healthy", "PCOS", "Low sodium", "High protein"].map((c, i) => (
            <span key={c} className={`text-[11px] whitespace-nowrap px-3 py-1.5 rounded-full ${i === 0 ? "bg-foreground text-background" : "bg-secondary text-muted-foreground"}`}>{c}</span>
          ))}
        </div>
      </div>

      <div className="px-5 mt-5 space-y-3">
        <FoodCard img={breakfast} title="Avocado toast & poached egg" mins="12 min" tags={["Low GI", "Fiber-rich"]} />
        <FoodCard img={lunch} title="Quinoa harvest bowl" mins="20 min" tags={["High protein", "Anti-inflammatory"]} />
      </div>

      <div className="px-5 mt-6">
        <div className="rounded-3xl border border-border/60 bg-card p-5">
          <div className="flex items-center gap-2 text-foreground">
            <X className="w-4 h-4 text-destructive" />
            <h3 className="text-sm font-medium">Foods to avoid this week</h3>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {["Refined sugar", "White rice", "Fried snacks", "Sweetened drinks"].map((t) => (
              <span key={t} className="text-[11px] px-3 py-1.5 rounded-full bg-destructive/10 text-destructive/90">{t}</span>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground mt-3 leading-relaxed">
            Personalized for your blood sugar pattern. Coach Maya will revisit on your next consultation.
          </p>
        </div>
      </div>

      <BottomNav active="meals" />
    </div>
  );
}

function FoodCard({ img, title, mins, tags }: { img: string; title: string; mins: string; tags: string[] }) {
  return (
    <div className="rounded-3xl overflow-hidden bg-card ev-shadow-soft border border-border/40">
      <div className="relative h-32">
        <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
        <span className="absolute top-3 left-3 text-[10px] bg-background/90 backdrop-blur px-2.5 py-1 rounded-full flex items-center gap-1 text-foreground">
          <Clock className="w-3 h-3" /> {mins}
        </span>
      </div>
      <div className="p-4">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <div className="flex gap-2 mt-2">
          {tags.map((t) => (
            <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-accent/50 text-accent-foreground flex items-center gap-1">
              <Leaf className="w-2.5 h-2.5" /> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
