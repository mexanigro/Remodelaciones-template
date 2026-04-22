export const localeConfig = {
  lang: "he",
  dir: "rtl" as const,
  heroHighlight: "פותחים את העסק שלך",
  navLinks: [
    { label: "בית", href: "#hero" },
    { label: "פרויקטים", href: "#portfolio" },
    { label: "תהליך עבודה", href: "#process" },
    { label: "למה אנחנו", href: "#whyus" },
    { label: "צור קשר", href: "#contact" },
  ],
  buttons: {
    freeConsultation: "ייעוץ ראשוני ללא עלות",
    seeProjects: "לצפייה בפרויקטים",
    contactNow: "דברו איתנו עכשיו",
  },
  hero: {
    beforeLabel: "לפני",
    afterLabel: "אחרי",
    beforeAlt: "לפני השיפוץ - חלל בתהליך עבודה",
    afterAlt: "אחרי השיפוץ - עסק מוכן לפעילות",
    sliderHint:
      "גררו את המחוון כדי להשוות: בצד שמאל מוצג ״לפני״, בצד ימין מוצג ״אחרי״.",
    sliderCueBefore: "שמאל · לפני",
    sliderCueAfter: "ימין · אחרי",
  },
  portfolio: {
    title: "פרויקטים שמדברים בעד עצמם",
    viewProject: "צפה בפרויקט",
    typeLabelApertura: "פתיחה חדשה",
    typeLabelRemodelacion: "שיפוץ",
  },
  process: {
    titleStart: "מהרעיון לעסק פעיל",
    titleHighlight: "ב-4 שלבים",
    stepLabel: "שלב",
  },
  testimonials: {
    titleStart: "מה בעלי עסקים",
    titleHighlight: "אומרים עלינו",
  },
  whyUs: {
    titleStart: "למה",
    titleHighlight: "בוחרים בנו",
    imageAlt: "חלל עסקי מעוצב לאחר שיפוץ",
  },
  floatingCta: {
    title: "יש לך עסק חדש בתכנון?",
    subtitle: "נשמח לשלוח הצעת מחיר מקצועית ללא התחייבות.",
  },
  footer: {
    navTitle: "ניווט",
    contactTitle: "יצירת קשר",
    brandDescription:
      "שיפוצים ופתיחות לעסקים. תכנון וביצוע מקצה לקצה כדי שהעסק שלך יהיה מוכן לפעילות.",
    copyright: "© 2026. כל הזכויות שמורות.",
  },
  contactModal: {
    title: "בקשת ייעוץ ראשוני",
    successTitle: "הבקשה נשלחה בהצלחה!",
    successSubtitle: "נחזור אליך תוך פחות מ-24 שעות.",
    labels: {
      fullName: "שם מלא",
      whatsapp: "וואטסאפ",
      businessType: "סוג העסק",
      serviceType: "סוג הפרויקט",
      area: "אזור / שכונה",
    },
    placeholders: {
      fullName: "לדוגמה: יוסי כהן",
      whatsapp: "לדוגמה: 050-1234567",
      area: "לדוגמה: תל אביב, רמת החייל",
    },
    serviceQuestion: "האם מדובר בשיפוץ או פתיחה חדשה?",
    businessTypeOptions: [
      { value: "", label: "בחרו..." },
      { value: "bar", label: "בר" },
      { value: "cafeteria", label: "בית קפה" },
      { value: "restaurant", label: "מסעדה" },
      { value: "retail", label: "ריטייל" },
      { value: "office", label: "משרד" },
      { value: "other", label: "אחר" },
    ],
    serviceOptions: {
      remodelacion: "שיפוץ",
      apertura: "פתיחה חדשה",
    },
    submit: "שליחת בקשה",
    note: "נחזור אליך תוך פחות מ-24 שעות",
  },
} as const;
