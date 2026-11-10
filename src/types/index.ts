export type WebsiteTemplateType = 'ecommerce' | 'company' | 'restaurant' | 'landing';

export type ThemePalette = 'emerald' | 'navy' | 'coral' | 'indigo' | 'charcoal';

export interface WebsiteConfig {
  template: WebsiteTemplateType;
  brandName: string;
  tagline: string;
  description: string;
  whatsappNumber: string;
  city: string;
  email: string;
  palette: ThemePalette;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  description: string;
  badge?: string;
  stock: number;
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'makanan' | 'minuman' | 'dessert' | 'signature';
  price: number;
  description: string;
  isSpicy?: boolean;
  isPopular?: boolean;
  prepTime: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

export interface CaseStudyItem {
  id: string;
  client: string;
  industry: string;
  title: string;
  impactMetric: string;
  impactLabel: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'indoor' | 'outdoor' | 'vip';
  notes?: string;
}

export interface LeadInquiry {
  name: string;
  company?: string;
  email: string;
  phone: string;
  budgetRange: string;
  serviceType: string;
  message: string;
}
