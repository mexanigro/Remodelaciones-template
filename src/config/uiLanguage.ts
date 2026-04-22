export type UiLanguage = "he" | "en";

/** Build-time UI language (`VITE_UI_LANGUAGE`). Default: he */
export function resolveUiLanguage(): UiLanguage {
  const raw = (
    import.meta.env.VITE_UI_LANGUAGE as string | undefined
  )?.trim()
    .toLowerCase();
  if (raw === "en") return "en";
  return "he";
}
