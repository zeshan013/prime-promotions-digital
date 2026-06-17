import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Globe, ShoppingBag, Store, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PrimePromotionsLLC" },
      {
        name: "description",
        content:
          "Digital marketing, Shopify, WordPress, and WooCommerce services from PrimePromotionsLLC.",
      },
      { property: "og:title", content: "Services — PrimePromotionsLLC" },
      {
        property: "og:description",
        content: "Marketing, Shopify, WordPress and WooCommerce — explore what we deliver.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const ICONS = { TrendingUp, ShoppingBag, Globe, Store } as const;

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-hero">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Services"
            title={<>Everything you need to <span className="text-brand-gradient">launch & grow</span></>}
            description="Pick a single service or combine them into a full growth engine."
          />
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-8">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <div
                key={s.slug}
                className={`grid items-center gap-8 rounded-3xl glass-card p-8 md:p-12 lg:grid-cols-2 ${
                  i % 2 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-brand-foreground shadow-glow">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 text-3xl font-bold md:text-4xl">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground">{s.description}</p>
                  <Link
                    to="/pricing"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-glow hover:opacity-90"
                  >
                    View plans <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <ul className="grid gap-3">
                  {s.plans.flatMap((p) => p.features.slice(0, 3)).slice(0, 6).map((f, k) => (
                    <li key={k} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/40 p-4 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
