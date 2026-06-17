import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-brand-foreground">
              P
            </span>
            PrimePromotionsLLC
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            A digital growth partner helping brands launch, scale, and convert with marketing,
            Shopify, WordPress, and WooCommerce expertise.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Get in touch</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4" /> {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PrimePromotionsLLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
