declare module "*.jsx" {
  import type { ComponentType } from "react";
  const component: ComponentType<Record<string, unknown>>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_APP_URL?: string;
  readonly VITE_ADMIN_EMAIL?: string;
  readonly VITE_LEAD_WEBHOOK_URL?: string;
  readonly VITE_ANALYTICS_ID?: string;
  /** `he` (default, RTL) | `en` (LTR) — controls UI strings, preset copy, `lang`/`dir` */
  readonly VITE_UI_LANGUAGE?: string;
}
