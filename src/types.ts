export type PageId = 'home' | 'repairs' | 'about' | 'reviews' | 'contact';

export interface BusinessInfo {
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  address: string;
  street: string;
  postalCode: string;
  city: string;
  arrondissement: string;
  phone: string;
  phoneRaw: string;
  website: string;
  serviceType: string;
  locationAdvantage: string;
  scheduleNotes: string[];
  googleMapsUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  symptoms: string[];
  diagnosticCheck: string;
  isFeatured?: boolean;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
}

export interface CommonProblem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedService: string;
  actionText: string;
}

export interface ReviewTheme {
  title: string;
  mentionCountPct: number;
  description: string;
  customerSentiment: string;
}
