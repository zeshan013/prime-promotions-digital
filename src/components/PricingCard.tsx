import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import type { Plan } from "@/lib/site";

export function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1 ${
        plan.popular
          ? "bg-brand-gradient text-brand-foreground shadow-glow"
          : "glass-card shadow-card"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground border border-border">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <div className="mt-3 flex items-end gap-1">
        <span className="text-4xl font-extrabold">{plan.price}</span>
        {plan.cadence && (
          <span className={`text-sm ${plan.popular ? "text-brand-foreground/80" : "text-muted-foreground"}`}>
            {plan.cadence}
          </span>
        )}
      </div>
      <ul className="mt-6 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`mt-8 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
          plan.popular
            ? "bg-background text-foreground hover:bg-background/90"
            : "bg-brand-gradient text-brand-foreground hover:opacity-90"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}
