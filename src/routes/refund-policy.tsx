import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { RefreshCw, FileCheck, HelpCircle, Mail, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: `Refund Policy — ${SITE.name}` },
      {
        name: "description",
        content: `Refund and Cancellation Policy for digital marketing, Shopify, WordPress, and WooCommerce services by ${SITE.name}.`,
      },
      { property: "og:title", content: `Refund Policy — ${SITE.name}` },
      { property: "og:description", content: `Refund and Cancellation Policy for digital marketing, Shopify, WordPress, and WooCommerce services by ${SITE.name}.` },
    ],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  const lastUpdated = "June 17, 2026";

  return (
    <div className="relative min-h-screen pt-20 pb-24">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-violet/10 via-background to-background" />

      <div className="container-page max-w-4xl">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-violet/10 px-3 py-1 text-xs font-semibold text-brand-violet">
            <RefreshCw className="h-3 w-3" /> Returns & Terms
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Refund & Cancellation Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {lastUpdated} • Clear terms to ensure a mutually beneficial partnership.
          </p>
        </div>

        <div className="glass-card rounded-2xl border border-border/50 bg-card/30 p-8 md:p-12 space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
              <FileCheck className="h-5 w-5 text-brand-violet" /> 1. Commitment & Custom Services
            </h2>
            <p>
              At {SITE.name}, we provide tailored digital services, including custom Shopify setups, bespoke WordPress/WooCommerce developments, and professional digital marketing solutions. Because these services involve direct expert labor, immediate software registration, and custom assets, our refund eligibility is determined by the project stage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
              <RefreshCw className="h-5 w-5 text-brand-violet" /> 2. Refund Eligibility
            </h2>
            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div className="p-5 rounded-xl border border-border/40 bg-background/40">
                <h3 className="font-semibold text-foreground mb-2">Development Projects</h3>
                <p className="text-sm">
                  (Shopify, WordPress, WooCommerce builds)
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                  <li><strong>Before design/wireframe starts:</strong> 100% refund.</li>
                  <li><strong>During active design phase:</strong> Up to 50% partial refund depending on labor completed.</li>
                  <li><strong>After site is built or delivered:</strong> Non-refundable due to completed expert work.</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-border/40 bg-background/40">
                <h3 className="font-semibold text-foreground mb-2">Digital Marketing & SEO</h3>
                <p className="text-sm">
                  (Monthly retainers & recurring campaigns)
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                  <li><strong>Upcoming month fees:</strong> fully refundable if cancellation notice is given at least 7 days before the billing cycle.</li>
                  <li><strong>In-progress monthly services:</strong> Non-refundable as budgets, link builds, and labor are spent immediately.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
              <AlertTriangle className="h-5 w-5 text-brand-violet" /> 3. Cancellation Policy
            </h2>
            <p>
              You can cancel your monthly subscription (for Digital Marketing plans) at any time. To cancel, please contact your dedicated strategist or email us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-brand-violet hover:underline">
                {SITE.email}
              </a>{" "}
              at least 7 days prior to your next scheduled billing date. Upon cancellation, you will receive full access to all deliverables completed up to that billing cycle.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
              <HelpCircle className="h-5 w-5 text-brand-violet" /> 4. How to Request a Refund
            </h2>
            <p>
              If you believe you are eligible for a refund based on the criteria above, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Send an email request to{" "}
                <a href={`mailto:${SITE.email}`} className="text-brand-violet hover:underline font-semibold">
                  {SITE.email}
                </a>.
              </li>
              <li>Include your project name, invoice number, and a detailed description of your request.</li>
              <li>Our billing and quality assurance team will review the status of your project and reply with a resolution within 3 business days.</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
