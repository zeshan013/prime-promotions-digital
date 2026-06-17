import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Globe, MessageCircle, ShoppingBag, Store, TrendingUp, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingCard } from "@/components/PricingCard";
import { SERVICES, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PrimePromotionsLLC — Digital Marketing, Shopify & WordPress Experts" },
      {
        name: "description",
        content:
          "Grow your business with PrimePromotionsLLC. Digital marketing, Shopify, WordPress, and WooCommerce services with transparent pricing.",
      },
      { property: "og:title", content: "PrimePromotionsLLC — Digital Growth Partner" },
      {
        property: "og:description",
        content:
          "Digital marketing, Shopify, WordPress, and WooCommerce services with transparent pricing.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const ICONS = { TrendingUp, ShoppingBag, Globe, Store } as const;

function HomePage() {
  const featured = SERVICES[0].plans;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="bg-hero relative overflow-hidden">
        <div className="container-page relative py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Zap className="h-3.5 w-3.5 text-brand" /> Trusted digital growth partner
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              Marketing & web that{" "}
              <span className="text-brand-gradient">actually converts</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              We build Shopify, WordPress, and WooCommerce stores and run full-funnel marketing
              to turn traffic into customers — with transparent pricing.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                See plans <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur-md hover:bg-card"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand" /> Fixed-price plans</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand" /> Fast delivery</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand" /> Dedicated support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="What we do"
          title={<>Services built for <span className="text-brand-gradient">growth</span></>}
          description="Four core service lines, each with transparent plans. Pick what fits — or combine them."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <Link
                key={s.slug}
                to="/services"
                className="group relative flex flex-col rounded-2xl glass-card p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-brand-foreground shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured pricing */}
      <section className="border-y border-border/60 bg-card/30 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Digital Marketing Plans"
            title={<>Pricing that scales <span className="text-brand-gradient">with you</span></>}
            description="Start small or go full-funnel. Monthly plans, cancel anytime."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <PricingCard key={p.name} plan={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-semibold hover:bg-card"
            >
              See all plans <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Why PrimePromotionsLLC"
          title={<>Senior talent. <span className="text-brand-gradient">Real results.</span></>}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "Conversion-first", d: "Every page and campaign is built around a measurable goal — not just visuals." },
            { t: "Transparent pricing", d: "Fixed plans, clear deliverables, no surprise invoices." },
            { t: "Fast turnaround", d: "Most stores and sites launch in 2–4 weeks. Marketing live in days." },
            { t: "All-in-one team", d: "Designers, developers, marketers, and strategists under one roof." },
            { t: "Direct WhatsApp line", d: "Talk to your team directly — no ticket queues, no chatbots." },
            { t: "Ongoing optimization", d: "We don't ship and disappear. Iteration is baked into every plan." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl glass-card p-6 shadow-card">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-gradient text-brand-foreground">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-10 text-center text-brand-foreground shadow-glow md:p-16">
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to grow your business?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-foreground/80">
            Tell us about your project. We'll reply within a few hours.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-background/90"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/30 px-6 py-3 text-sm font-semibold hover:bg-brand-foreground/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp now
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
