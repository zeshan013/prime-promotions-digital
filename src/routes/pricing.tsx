import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingCard } from "@/components/PricingCard";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — PrimePromotionsLLC" },
      {
        name: "description",
        content:
          "Transparent pricing for digital marketing, Shopify, WordPress, and WooCommerce projects.",
      },
      { property: "og:title", content: "Pricing — PrimePromotionsLLC" },
      { property: "og:description", content: "Fixed-price plans for every service." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  const [active, setActive] = useState(SERVICES[0].slug);
  const current = SERVICES.find((s) => s.slug === active)!;
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-hero">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Pricing"
            title={<>Pick the plan that <span className="text-brand-gradient">fits your goal</span></>}
            description="No hidden fees. No surprise invoices. Switch or upgrade anytime."
          />
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="-mt-6 flex flex-wrap justify-center gap-2 rounded-full border border-border bg-card/60 p-1.5 mx-auto w-fit backdrop-blur-md">
          {SERVICES.map((s) => (
            <button
              key={s.slug}
              onClick={() => setActive(s.slug)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === s.slug
                  ? "bg-brand-gradient text-brand-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-center text-2xl font-bold md:text-3xl">{current.title}</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
            {current.description}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {current.plans.map((p) => (
              <PricingCard key={p.name} plan={p} />
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Need a custom scope? <a href="/contact" className="font-semibold text-brand">Tell us about your project →</a>
        </p>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
