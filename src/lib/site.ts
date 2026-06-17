export const SITE = {
  name: "PrimePromotionsLLC",
  tagline: "Digital Growth Partner",
  whatsappDisplay: "+1 (406) 434-1408",
  whatsappLink: "https://wa.me/14064341408",
  email: "support@primepromotionllc.com",
};

export type Plan = {
  name: string;
  price: string;
  cadence?: string;
  features: string[];
  popular?: boolean;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string; // lucide icon name handled in component
  plans: Plan[];
};

export const SERVICES: ServiceCategory[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "SEO, ads & social that compound.",
    description:
      "Full-funnel marketing strategy combining SEO, paid media, and content to drive qualified traffic and measurable revenue.",
    icon: "TrendingUp",
    plans: [
      {
        name: "Starter",
        price: "$149",
        cadence: "/month",
        features: [
          "On-page SEO basics",
          "4 social posts / week",
          "Monthly performance report",
          "Email support",
        ],
      },
      {
        name: "Growth",
        price: "$349",
        cadence: "/month",
        popular: true,
        features: [
          "SEO + Google Ads management",
          "12 social posts / week",
          "2 blog articles / month",
          "Analytics dashboard",
          "Priority support",
        ],
      },
      {
        name: "Pro",
        price: "$699",
        cadence: "/month",
        features: [
          "Full-funnel strategy",
          "Paid ads (up to $2k spend)",
          "Weekly performance reports",
          "Dedicated strategist",
          "24/7 WhatsApp support",
        ],
      },
    ],
  },
  {
    slug: "shopify",
    title: "Shopify Store",
    short: "High-converting stores, launched fast.",
    description:
      "From a clean starter shop to a custom-designed flagship store with conversion optimization built in.",
    icon: "ShoppingBag",
    plans: [
      {
        name: "Basic Store",
        price: "$499",
        cadence: " one-time",
        features: [
          "Up to 5 products",
          "Premium theme setup",
          "Payment & shipping config",
          "Mobile responsive",
        ],
      },
      {
        name: "Standard Store",
        price: "$999",
        cadence: " one-time",
        popular: true,
        features: [
          "Up to 20 products",
          "Custom theme tweaks",
          "Essential apps installed",
          "On-page SEO",
          "14-day support",
        ],
      },
      {
        name: "Premium Store",
        price: "$1,899",
        cadence: " one-time",
        features: [
          "Unlimited products",
          "Custom design & branding",
          "Conversion optimization",
          "Speed optimization",
          "30-day support",
        ],
      },
    ],
  },
  {
    slug: "wordpress",
    title: "WordPress Website",
    short: "Flexible, fast, SEO-ready websites.",
    description:
      "Custom WordPress builds for businesses, blogs, and content sites — engineered for speed and easy editing.",
    icon: "Globe",
    plans: [
      {
        name: "Starter",
        price: "$399",
        cadence: " one-time",
        features: [
          "5-page website",
          "Responsive premium theme",
          "Contact form",
          "Basic SEO setup",
        ],
      },
      {
        name: "Business",
        price: "$799",
        cadence: " one-time",
        popular: true,
        features: [
          "10 custom pages",
          "Custom design",
          "Blog setup",
          "Speed optimization",
          "30-day support",
        ],
      },
      {
        name: "Enterprise",
        price: "$1,499",
        cadence: " one-time",
        features: [
          "Unlimited pages",
          "Custom plugins",
          "Membership / LMS ready",
          "Advanced SEO",
          "60-day support",
        ],
      },
    ],
  },
  {
    slug: "woocommerce",
    title: "WooCommerce Store",
    short: "Own your store. Scale on WordPress.",
    description:
      "Self-hosted WooCommerce stores with custom checkout, payment gateways, and advanced commerce features.",
    icon: "Store",
    plans: [
      {
        name: "Launch",
        price: "$599",
        cadence: " one-time",
        features: [
          "WooCommerce setup",
          "Up to 10 products",
          "Payment gateways",
          "Mobile responsive",
        ],
      },
      {
        name: "Scale",
        price: "$1,199",
        cadence: " one-time",
        popular: true,
        features: [
          "Up to 30 products",
          "Custom checkout",
          "Abandoned cart recovery",
          "SEO optimization",
          "30-day support",
        ],
      },
      {
        name: "Elite",
        price: "$2,299",
        cadence: " one-time",
        features: [
          "Full custom store",
          "Multi-currency support",
          "Subscriptions ready",
          "Advanced analytics",
          "60-day support",
        ],
      },
    ],
  },
];
