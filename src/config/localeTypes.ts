import type { messagesEn } from "./locales/en";
import type { messagesHe } from "./locales/he";

/** Activo `he` o `en`: misma forma; al añadir claves, actualizar ambos `locales/*` */
export type LocaleConfig = typeof messagesHe | typeof messagesEn;
