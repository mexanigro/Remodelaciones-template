import { env } from "@/config/env";
import { remodelacionesPreset } from "@/config/presets/remodelaciones";
import type { BusinessNiche, NichePreset, SiteConfig } from "@/types/site";

const ACTIVE_NICHE: BusinessNiche = "remodelaciones";

const PRESETS: Record<BusinessNiche, NichePreset> = {
  remodelaciones: remodelacionesPreset,
};

export const siteConfig: SiteConfig = {
  ...PRESETS[ACTIVE_NICHE],
  adminEmail: env.adminEmail || "admin@mastertemplate.com",
  integrations: {
    leadWebhookUrl: env.leadWebhookUrl,
    analyticsId: env.analyticsId,
  },
};
