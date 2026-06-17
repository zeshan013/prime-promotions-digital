import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PrimePromotionsLLC" },
      {
        name: "description",
        content: "Contact PrimePromotionsLLC by WhatsApp, email, or message form.",
      },
      { property: "og:title", content: "Contact — PrimePromotionsLLC" },
      { property: "og:description", content: "Reach us on WhatsApp or by email — fast replies." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-hero">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Contact"
            title={<>Let's <span className="text-brand-gradient">build something</span></>}
            description="Tell us about your project — we usually reply within a few hours."
          />
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl glass-card p-5 shadow-card transition-transform hover:-translate-y-0.5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ backgroundColor: "var(--whatsapp)" }}>
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">WhatsApp</div>
                <div className="font-semibold">{SITE.whatsappDisplay}</div>
                <div className="mt-1 text-xs text-muted-foreground">Tap to chat now</div>
              </div>
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="flex items-start gap-4 rounded-2xl glass-card p-5 shadow-card transition-transform hover:-translate-y-0.5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-brand-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-semibold break-all">{SITE.email}</div>
                <div className="mt-1 text-xs text-muted-foreground">24/7 — fast replies</div>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl glass-card p-5 shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-brand-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Working hours</div>
                <div className="font-semibold">Mon–Sat, 9am – 9pm</div>
                <div className="mt-1 text-xs text-muted-foreground">All time zones supported</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl glass-card p-6 shadow-card md:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-brand"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-brand"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium">Service interested in</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-brand"
              >
                <option value="">Select a service</option>
                <option>Digital Marketing</option>
                <option>Shopify Store</option>
                <option>WordPress Website</option>
                <option>WooCommerce Store</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-brand"
                placeholder="Tell us about your project, goals, and timeline..."
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground shadow-glow hover:opacity-90"
            >
              Send message <Send className="h-4 w-4" />
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              By submitting, you'll be sent to your email app with your message ready to send.
            </p>
          </form>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
