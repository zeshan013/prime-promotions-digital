import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Shield, Eye, Lock, FileText, Globe } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${SITE.name}` },
      {
        name: "description",
        content: `Privacy Policy for ${SITE.name}. Read about how we collect, use, and protect your personal information.`,
      },
      { property: "og:title", content: `Privacy Policy — ${SITE.name}` },
      { property: "og:description", content: `Privacy Policy for ${SITE.name}. Read about how we collect, use, and protect your personal information.` },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const lastUpdated = "June 17, 2026";

  return (
    <div className="relative min-h-screen pt-20 pb-24">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/10 via-background to-background" />

      <div className="container-page max-w-4xl">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
            <Shield className="h-3 w-3" /> Trust & Security
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {lastUpdated} • This page is maintained by {SITE.name} to outline our data protection practices.
          </p>
        </div>

        <div className="glass-card rounded-2xl border border-border/50 bg-card/30 p-8 md:p-12 space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
              <Eye className="h-5 w-5 text-brand-blue" /> 1. Information We Collect
            </h2>
            <p>
              At {SITE.name}, we collect information to provide better services to all our clients. The types of personal information we collect include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact Details:</strong> Name, email address, phone/WhatsApp number, and business details when you inquire about our services.
              </li>
              <li>
                <strong>Project Information:</strong> Specifications, requirements, existing store details, and temporary access credentials (where required and explicitly shared) to execute marketing or development services.
              </li>
              <li>
                <strong>Technical & Usage Data:</strong> IP address, browser type, and anonymous usage data collected via standard cookies to improve our website experience.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
              <Lock className="h-5 w-5 text-brand-blue" /> 2. How We Use Your Information
            </h2>
            <p> We utilize the gathered information solely for operational and service-delivery purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Communicating with you via email or WhatsApp regarding project updates, proposals, and support.</li>
              <li>Designing, developing, and launching your WordPress, Shopify, or WooCommerce stores.</li>
              <li>Configuring and running digital marketing, SEO, and ad campaigns.</li>
              <li>Sending invoices, processing service payments, and managing customer relationships.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
              <FileText className="h-5 w-5 text-brand-blue" /> 3. Data Protection & Security
            </h2>
            <p>
              We implement industry-standard administrative, technical, and physical security measures to shield your personal details from unauthorized access, alteration, or disclosure.
            </p>
            <p className="text-sm bg-accent/30 border border-border/40 p-4 rounded-xl">
              <strong>Security Note:</strong> While we leverage secure platforms and cloud technologies to safeguard your projects, no online transfer or electronic storage method is 100% secure. We encourage you to never share main administrative passwords directly, but rather use role-based staff invites for platforms like Shopify and WordPress.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
              <Globe className="h-5 w-5 text-brand-blue" /> 4. Third-Party Services & Subprocessors
            </h2>
            <p>
              We do not sell or lease your personal information. To fulfill our contract, we share relevant project parameters only with reliable processors:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Hosting & Platforms:</strong> Shopify, WordPress, WooCommerce, and related secure cloud hosting providers.</li>
              <li><strong>Communication:</strong> WhatsApp, secure email routing services, and customer management tools.</li>
              <li><strong>Analytics:</strong> Standard analytics suites (such as Google Analytics) to measure website engagement.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-foreground">5. Your Data Rights</h2>
            <p>
              Depending on your location, you may have rights to access, update, correct, or request deletion of your personal details. If you wish to submit a privacy-related request, or have any security questions, please reach out to us directly at{" "}
              <a href={`mailto:${SITE.email}`} className="text-brand-blue hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
