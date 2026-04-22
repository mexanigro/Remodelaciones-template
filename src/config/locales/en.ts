export const messagesEn = {
  lang: "en",
  dir: "ltr" as const,
  heroHighlight: "open your business",
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Why us", href: "#whyus" },
    { label: "Contact", href: "#contact" },
  ],
  buttons: {
    freeConsultation: "Free consultation",
    seeProjects: "View projects",
    contactNow: "Talk to us now",
  },
  hero: {
    beforeLabel: "Before",
    afterLabel: "After",
    beforeAlt: "Before renovation — space in progress",
    afterAlt: "After renovation — business ready to operate",
    sliderHint:
      "Drag the handle to compare: “Before” on the left, “After” on the right.",
    sliderCueBefore: "Left · Before",
    sliderCueAfter: "Right · After",
  },
  portfolio: {
    title: "Projects that speak for themselves",
    viewProject: "View project",
    typeLabelApertura: "New opening",
    typeLabelRemodelacion: "Renovation",
  },
  process: {
    titleStart: "From idea to open doors",
    titleHighlight: "in 4 steps",
    stepLabel: "Step",
  },
  testimonials: {
    titleStart: "What business owners",
    titleHighlight: "say about us",
  },
  whyUs: {
    titleStart: "Why",
    titleHighlight: "work with us",
    imageAlt: "Commercial interior after renovation",
  },
  floatingCta: {
    title: "Planning a new venue?",
    subtitle: "We’ll send a professional quote—no obligation.",
  },
  footer: {
    navTitle: "Navigate",
    contactTitle: "Contact",
    brandDescription:
      "Renovations and new openings for businesses. End-to-end planning and build so you can open faster.",
    copyright: "© 2026. All rights reserved.",
  },
  contactModal: {
    title: "Request a consultation",
    successTitle: "Request sent successfully",
    successSubtitle: "We’ll get back to you within 24 hours.",
    labels: {
      fullName: "Full name",
      whatsapp: "WhatsApp number",
      businessType: "Business type",
      serviceType: "Project type",
      area: "Area / neighbourhood",
    },
    placeholders: {
      fullName: "e.g. Jane Cohen",
      whatsapp: "e.g. +972 50-123-4567",
      area: "e.g. Tel Aviv, Ramat HaHayal",
    },
    serviceQuestion: "Is this a renovation or a new opening?",
    businessTypeOptions: [
      { value: "", label: "Choose…" },
      { value: "bar", label: "Bar" },
      { value: "cafeteria", label: "Café" },
      { value: "restaurant", label: "Restaurant" },
      { value: "retail", label: "Retail" },
      { value: "office", label: "Office" },
      { value: "other", label: "Other" },
    ],
    serviceOptions: {
      remodelacion: "Renovation",
      apertura: "New opening",
    },
    submit: "Send request",
    note: "We usually reply within 24 hours.",
  },
  a11y: {
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    sliderThumb: "Before and after comparison slider",
  },
} as const;
