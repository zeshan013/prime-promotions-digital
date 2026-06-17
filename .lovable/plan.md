
# PrimePromotionsLLC Portfolio Website

A modern, multi-page marketing site styled after primepromotionsllc.com (dark hero, bold typography, card-based pricing), but featuring digital services instead of IPTV.

## Pages (TanStack Start routes)

- `/` Home — hero, service highlights, featured pricing, testimonials, CTA
- `/services` — detailed list of all 4 service categories
- `/pricing` — full pricing tables for each service category (tabbed)
- `/about` — agency story, why choose us, stats
- `/contact` — contact form, WhatsApp button, email, business info

Shared header (logo + nav + "Chat on WhatsApp" CTA) and footer (contact info, quick links, socials) on every page. Each route has its own SEO `head()` (title, description, og tags).

## Services & Pricing

**Digital Marketing**
- Starter — $149/mo: SEO basics, 4 social posts/wk, monthly report
- Growth — $349/mo: SEO + Google Ads mgmt, 12 posts/wk, blog x2, analytics
- Pro — $699/mo: Full-funnel marketing, paid ads up to $2k spend, weekly reports

**Shopify Store**
- Basic Store — $499 one-time: 5 products, theme setup, payment + shipping config
- Standard Store — $999: 20 products, custom theme tweaks, apps, SEO
- Premium Store — $1,899: Unlimited products, custom design, conversion optimization, 30-day support

**WordPress Website**
- Starter — $399: 5-page site, responsive theme, basic SEO
- Business — $799: 10 pages, custom design, blog, contact forms, speed optimization
- Enterprise — $1,499: Unlimited pages, custom plugins, membership/LMS ready, 60-day support

**WooCommerce Store**
- Launch — $599: WooCommerce setup, 10 products, payment gateways
- Scale — $1,199: 30 products, custom checkout, abandoned cart, SEO
- Elite — $2,299: Full custom store, multi-currency, subscriptions, advanced analytics

(Numbers are placeholders — easy to edit later.)

## Contact

- WhatsApp: `+1 (406) 434-1408` — floating button + header CTA, links open `https://wa.me/14064341408`
- Email: `support@primepromotionllc.com` — `mailto:` links
- Contact form on `/contact` posts to a `mailto:` for now (no backend). If you want submissions saved or auto-emailed, we can enable Lovable Cloud later.

## Design Direction

Dark theme with a vibrant accent (electric blue/violet gradient), large headings, glassy pricing cards, subtle motion on scroll. Consistent semantic tokens defined in `src/styles.css`. No purple-on-white generic look.

## Technical Notes

- Route files under `src/routes/`: `index.tsx`, `services.tsx`, `pricing.tsx`, `about.tsx`, `contact.tsx`
- Reusable components in `src/components/`: `Header`, `Footer`, `WhatsAppFloat`, `PricingCard`, `ServiceCard`, `SectionHeading`
- Design tokens (colors, gradients, shadows) added to `src/styles.css` as oklch CSS variables
- No backend/database needed unless you want the contact form to persist submissions
- Per-route `head()` metadata for SEO; root has site-wide defaults

## Out of scope (for now)

- Real payment checkout (placeholder "Get Started" buttons → contact)
- CMS/admin for editing plans (edit in code)
- Blog system
