export const contactDetails = {
  email: "kontakt@eclatdenoor.de",
  location: "DACH · EU/EWR Hosting geplant",
} as const;

export const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutzerklärung", href: "/datenschutz" },
  { label: "Auftragsverarbeitungsvertrag (AVV)", href: "/avv" },
] as const;

export const footerLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Kontakt", href: `mailto:${contactDetails.email}` },
] as const;

export const consentCategories = [
  {
    id: "necessary",
    label: "Notwendig",
    required: true,
    description: "Erforderlich für Sicherheit, Cookie-Auswahl und Grundfunktionen der Website.",
  },
  {
    id: "analytics",
    label: "Analyse",
    required: false,
    description: "Hilft, Ladezeit und Nutzung zu verstehen. Wird erst nach Zustimmung aktiviert.",
  },
  {
    id: "marketing",
    label: "Marketing",
    required: false,
    description: "Reserviert für spätere Kampagnen- oder Retargeting-Integrationen.",
  },
] as const;

export const waitlistConfig = {
  primaryCta: "Jetzt vormerken",
  emailFieldLabel: "E-Mail-Adresse",
  confirmationSubject: "Éclat de Noor Vormerkung bestätigt",
  confirmationMessage:
    "Bestätigung: Danke für deine Vormerkung. Wir melden uns mit Pilotzugang, Preisen und Onboarding-Schritten.",
  privacyNote: "Mit dem Absenden akzeptierst du die Datenschutzerklärung. Keine Weitergabe an Dritte.",
} as const;

export const pricingNotice = "Preise folgen – Pilotpraxen erhalten ein individuelles Angebot auf Anfrage.";

export const teamSection = {
  title: "Team / Über uns",
  description:
    "Éclat de Noor entsteht als spezialisiertes Produktkonzept für ästhetische Praxen: medizinisch sensibel, DSGVO-bewusst und bewusst schlank für Botox-, Filler- und Hyaluron-Workflows.",
  bullets: ["Medical-Beauty-Fokus", "DACH- und DSGVO-orientiert", "MVP-first statt Klinik-Monolith"],
} as const;

export const socialProof = {
  headline: "Vertrauen & Pilotpraxen",
  testimonialPlaceholder:
    "Pilotpraxis-Zitate folgen, sobald erste Praxen an Bord sind. Bis dahin wird kein Social Proof erfunden.",
  logoPlaceholder: "Vertraut von … sobald Pilotpraxen bestätigt sind.",
} as const;

export const faqs = [
  {
    question: "Was kostet Éclat de Noor?",
    answer: "Preise folgen. Für Pilotpraxen ist ein individuelles Angebot auf Anfrage vorgesehen.",
  },
  {
    question: "Wie schnell ist die Einrichtung möglich?",
    answer: "Das MVP ist auf ein schlankes Onboarding ausgelegt: Praxisprofil, Nutzerrollen, Dokumente und Reminder-Logik.",
  },
  {
    question: "Ist die Lösung DSGVO-konform?",
    answer: "Die Produktanforderung ist EU/EWR-Hosting, AVV, Mandantentrennung, Löschkonzept und keine KI-Nutzung von Patientendaten.",
  },
  {
    question: "Gibt es Support?",
    answer: "Für Pilotpraxen ist direkter Onboarding- und Produkt-Support vorgesehen.",
  },
  {
    question: "Welche Behandlungen werden unterstützt?",
    answer: "Der Fokus liegt zunächst auf Botox, Filler und Hyaluron inklusive Fotodokumentation, Aufklärung und Recall.",
  },
  {
    question: "Kann ich eigene Aufklärungsbögen nutzen?",
    answer: "Ja, die Roadmap sieht praxisindividuelle Dokumente und Versionierung vor.",
  },
  {
    question: "Werden echte App-Screenshots gezeigt?",
    answer: "Aktuell sind detaillierte Mockups eingebunden; echte Screenshots folgen mit der MVP-Oberfläche.",
  },
] as const;

export const roadmapItems = [
  { title: "MVP", description: "Login, Fotodokumentation, Aufklärungsbögen, Reminder und Termin-CTA." },
  { title: "Praxis-Dokumente", description: "Eigene Bögen, Versionierung, Signaturstatus und AVV-Download." },
  { title: "PatientInnen-App", description: "Self-Service für Termine, Betroffenenrechte, Dokumente und Recall-Reminder." },
  { title: "Integrationen", description: "Kalender, E-Mail/SMS/Push-Anbieter und optionale Analytics nach Consent." },
] as const;

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Éclat de Noor MedAesthetic Manager",
  applicationCategory: "MedicalBusinessSoftwareApplication",
  operatingSystem: "Web",
  description:
    "DSGVO-orientierte Praxis- und Patienten-App für Fotodokumentation, Aufklärung, Reminder und Terminprozesse in Medical Aesthetics.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/PreOrder",
    description: pricingNotice,
  },
} as const;

export const legalCopy = {
  impressum: {
    title: "Impressum",
    disclaimer:
      "Platzhalter-Impressum für die Produkt-/MVP-Seite. Vor Live-Vertrieb bitte durch rechtlich geprüfte Betreiberangaben ersetzen.",
    items: [
      "Éclat de Noor – MedAesthetic Manager",
      "Verantwortlich: Betreiberangaben folgen",
      `Kontakt: ${contactDetails.email}`,
      "Standort/Hosting: EU/EWR vorgesehen",
    ],
  },
  privacy: {
    title: "Datenschutzerklärung",
    disclaimer:
      "Diese Datenschutzerklärung beschreibt den geplanten Website- und Produktdatenfluss. Sie ersetzt keine anwaltliche Prüfung.",
    items: [
      "Verarbeitung von Kontakt- und Waitlist-Daten nur zur Anfragebearbeitung.",
      "Medizinische Daten gelten als besondere Kategorien personenbezogener Daten nach Art. 9 DSGVO.",
      "Analyse- und Marketing-Cookies werden nur nach Einwilligung aktiviert.",
      "Betroffenenrechte: Auskunft, Berichtigung, Löschung und Datenportabilität.",
    ],
  },
  avv: {
    title: "Auftragsverarbeitungsvertrag (AVV)",
    disclaimer:
      "AVV-Infoseite und Download-Hinweis für Praxen. Der finale Vertrag muss vor Vertragsabschluss bereitgestellt werden.",
    items: [
      "AVV nach Art. 28 DSGVO für App-Anbieter erforderlich.",
      "Unterauftragsverarbeiter, TOMs, Löschfristen und Datenstandorte werden dokumentiert.",
      "Download: AVV-Muster folgt mit dem Pilotpraxis-Onboarding.",
    ],
  },
} as const;
