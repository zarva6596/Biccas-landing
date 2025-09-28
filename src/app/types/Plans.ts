export type Plan = {
  id: string;
  name: string;
  href: string;
  description: string;
  price: { monthly: number; annually: number };
  features: string[];
  ctaLabel: string;
};
