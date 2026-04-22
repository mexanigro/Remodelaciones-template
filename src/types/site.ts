export type BusinessNiche = "remodelaciones";

export type StatItem = {
  value: string;
  label: string;
};

export type ProjectType = "Apertura" | "Remodelación";

export type ProjectCategory =
  | "cafeterias"
  | "bares"
  | "retail"
  | "oficinas";

export type Project = {
  id: number;
  title: string;
  type: ProjectType;
  category: ProjectCategory;
  days: string;
  size: string;
  mode: string;
  description: string;
  images: string[];
};

export type PortfolioFilter = {
  key: string;
  label: string;
};

export type Testimonial = {
  name: string;
  business: string;
  text: string;
  image: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: "MessageCircle" | "PenTool" | "Hammer" | "Key";
};

export type BrandConfig = {
  name: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroDescription: string;
  phone: string;
  email: string;
  address: string;
  instagram: string;
  facebook: string;
  twitter: string;
  whatsapp: string;
};

export type NichePreset = {
  brand: BrandConfig;
  stats: StatItem[];
  projects: Project[];
  filters: PortfolioFilter[];
  testimonials: Testimonial[];
  processSteps: ProcessStep[];
  whyUsItems: string[];
};

export type SiteConfig = NichePreset & {
  adminEmail: string;
  integrations: {
    leadWebhookUrl: string;
    analyticsId: string;
  };
};
