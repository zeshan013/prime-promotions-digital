import { createFileRoute } from "@tanstack/react-router";
import { Award, Heart, Rocket, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PrimePromotionsLLC" },
      {
        name: "description",
        content:
          "PrimePromotionsLLC is a digital agency helping brands launch, scale, and convert with marketing and ecommerce expertise.",
      },
      { property: "og:title", content: "About — PrimePromotionsLLC" },
      { property: "og:description", content: "Our story, values, and the team behind the work." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const stats = [
  { v: "300+", l: "Projects delivered" },
  { v: "120+", l: "Happy clients" },
  { v: "8+", l: "Years experience" },
  { v: "24/7", l: "Support coverage" },
];

const values = [
  { icon: Rocket, t: "Move fast", d: "We ship in weeks, not quarters. Speed compounds advantage." },
  { icon: Heart, t: "Care deeply", d: "Your business is your livelihood. We treat it like ours." },
  { icon: Award, t: "Senior quality", d: "Real specialists doing the work — never offshore handoffs." },
  { icon: Users, t: "Long-term partners", d: "Most clients stay for years. Iteration is the work." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-hero">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="About us"
            title={<>A digital partner, <span className="text-brand-gradient">not a vendor</span></>}
            description="We're a small, senior team of marketers, designers, and developers helping ambitious businesses launch and grow online."
          />
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl glass-card p-6 text-center shadow-card">
              <div className="text-3xl font-extrabold text-brand-gradient md:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Our story</h2>
            <p className="mt-4 text-muted-foreground">
              PrimePromotionsLLC was founded by a tight team of marketers and engineers who were
              tired of watching agencies overcharge and underdeliver. We built the company to do
              the opposite: fixed pricing, fast turnarounds, and senior people doing the work.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today we help businesses across the US and beyond — from new founders launching their
              first Shopify store to established brands scaling paid acquisition into seven figures.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl glass-card p-5 shadow-card">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-gradient text-brand-foreground">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-bold">{v.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
