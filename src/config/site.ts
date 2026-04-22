import { env } from "@/config/env";
import { remodelacionesPresetEn } from "@/config/presets/remodelaciones.en";
import { remodelacionesPresetHe } from "@/config/presets/remodelaciones.he";
import type { BusinessNiche, NichePreset, SiteConfig } from "@/types/site";
import type { UiLanguage } from "@/config/uiLanguage";

const ACTIVE_NICHE: BusinessNiche = "remodelaciones";

const PRESETS: Record<BusinessNiche, Record<UiLanguage, NichePreset>> = {
  remodelaciones: {
    he: remodelacionesPresetHe,
    en: remodelacionesPresetEn,
  },
};

export const siteConfig: SiteConfig = {
  ...PRESETS[ACTIVE_NICHE][env.uiLanguage],
  adminEmail: env.adminEmail || "admin@mastertemplate.com",
  integrations: {
    leadWebhookUrl: env.leadWebhookUrl,
    analyticsId: env.analyticsId,
  },
};
