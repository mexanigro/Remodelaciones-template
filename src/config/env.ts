import type { UiLanguage } from "./uiLanguage";
import { resolveUiLanguage } from "./uiLanguage";

type EnvValue = string | undefined;

const readEnv = (key: keyof ImportMetaEnv): string => {
  const value = import.meta.env[key] as EnvValue;
  return (value ?? "").trim();
};

export const env = {
  appUrl: readEnv("VITE_APP_URL"),
  adminEmail: readEnv("VITE_ADMIN_EMAIL"),
  leadWebhookUrl: readEnv("VITE_LEAD_WEBHOOK_URL"),
  analyticsId: readEnv("VITE_ANALYTICS_ID"),
  /** UI copy + `dir`: `he` (RTL) or `en` (LTR). Set `VITE_UI_LANGUAGE`. */
  uiLanguage: resolveUiLanguage() as UiLanguage,
};
