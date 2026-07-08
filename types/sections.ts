export interface ProductSystem {
  slug: string;
  name: string;
  description: string;
  productsHref: string;
  systemsHref: string;
}

export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
}

export interface ContactPoint {
  label: string;
  value: string;
  href: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  specs: ProductSpec[];
  packaging: string;
}

export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  visualLabel: string;
}
