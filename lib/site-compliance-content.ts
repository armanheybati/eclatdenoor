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
  primaryCta: "Pilotzugang anfragen",
  emailFieldLabel: "Praxis-E-Mail-Adresse",
  confirmationSubject: "Bitte bestätige deine Éclat de Noor Anfrage",
  confirmationMessage:
    "Danke für deine Anfrage zum Pilotzugang. Bitte bestätige deine E-Mail-Adresse, damit wir deine Praxis kontaktieren dürfen.",
  formSuccessMessage: "Fast geschafft: Bitte bestätige deine Anfrage über den Link in deiner E-Mail.",
  privacyNote: "Wir nutzen deine Angaben ausschließlich zur Bearbeitung der Pilotanfrage und dokumentieren die Einwilligung zum Nachweis des Opt-ins.",
  consentLabel:
    "Ich stimme zu, dass Éclat de Noor meine Praxis-E-Mail zur Bearbeitung der Pilotzugang-Anfrage verarbeitet und mir eine Double-Opt-in-Bestätigung zusendet.",
} as const;

export const pricingNotice = "SaaS-Modell pro Praxis, monatlich oder jährlich; bei jährlicher Zahlung sind 20 % Rabatt vorgesehen.";

export const pilotOffer = {
  title: "Pilot-Angebot",
  description: "3 Monate kostenlos für ausgewählte Pilotpraxen — inklusive Onboarding, Feedback-Slots und priorisierter MVP-Einrichtung.",
} as const;

export const pricingPlans = [
  {
    name: "Starter",
    price: "49 €",
    description: "Für Solo-Praxen und kleine Medical-Beauty-Setups.",
    features: ["1 Behandler", "bis 100 Patienten", "5 GB Foto-Speicher", "Standard-Aufklärungsbögen", "Push-Reminder", "E-Mail-Support"],
  },
  {
    name: "Professional",
    price: "89 €",
    description: "Für wachsende Praxen mit mehreren Behandlern.",
    features: ["bis 3 Behandler", "bis 500 Patienten", "25 GB Foto-Speicher", "anpassbare Aufklärungsbögen", "SMS-Reminder-Kontingent", "E-Mail + Chat"],
  },
  {
    name: "Clinic",
    price: "149 €",
    description: "Für größere Praxen und Klinik-Workflows.",
    features: ["unbegrenzte Behandler", "unbegrenzte Patienten", "100 GB Foto-Speicher", "eigene Aufklärungsbögen", "SMS unbegrenzt", "Priority + Telefon"],
  },
] as const;

export const competitorComparison = {
  title: "Vergleich mit bestehenden Lösungen",
  note: "Faces kostenlos mit stark eingeschränktem Funktionsumfang; kostenpflichtige Erweiterungen nötig.",
  rows: [
    { criterion: "Echte Patienten-App", medaesthetic: "✓", pabau: "–", faces: "teilw.", rxphoto: "–" },
    { criterion: "DSGVO / DACH", medaesthetic: "✓", pabau: "teilw.", faces: "–", rxphoto: "–" },
    { criterion: "Auffrischungs-Reminder", medaesthetic: "✓", pabau: "–", faces: "–", rxphoto: "–" },
    { criterion: "Aufklärungsbögen digital", medaesthetic: "✓", pabau: "✓", faces: "✓", rxphoto: "–" },
    { criterion: "Fotodokumentation", medaesthetic: "✓", pabau: "✓", faces: "–", rxphoto: "✓" },
    { criterion: "Terminbuchung", medaesthetic: "✓", pabau: "✓", faces: "✓", rxphoto: "–" },
    { criterion: "Für kleine Praxen", medaesthetic: "✓", pabau: "–", faces: "✓", rxphoto: "✓" },
    { criterion: "Preis (Solo-Praxis/Monat)", medaesthetic: "49 €", pabau: "99 €+", faces: "kostenlos*", rxphoto: "79 $+" },
  ],
} as const;

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
    answer: "Das geplante SaaS-Modell startet bei 49 €/Monat pro Praxis. Für ausgewählte Pilotpraxen sind 3 Monate kostenlos vorgesehen.",
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
    question: "Android oder nur iOS?",
    answer: "Geplant ist zuerst eine webbasierte Lösung, die auf modernen iOS- und Android-Browsern nutzbar ist. Native Apps können später ergänzt werden, wenn Pilotpraxen sie wirklich benötigen.",
  },
  {
    question: "Wer haftet für die Aufklärungsbögen?",
    answer: "Die Praxis bleibt für medizinische Inhalte, Aufklärung und finale Freigabe verantwortlich. Éclat de Noor kann Vorlagen, Versionierung und Signaturstatus bereitstellen, ersetzt aber keine rechtliche oder ärztliche Prüfung.",
  },
  {
    question: "Wie werden Bestandsdaten migriert?",
    answer: "Für Pilotpraxen ist ein pragmatischer Import per strukturierter CSV/Excel-Datei geplant. Sensible Dokumente und Fotos werden nur nach abgestimmtem Datenschutz- und Löschkonzept übernommen.",
  },
  {
    question: "Werden echte App-Screenshots gezeigt?",
    answer: "Aktuell sind detaillierte Mockups eingebunden; echte Screenshots folgen mit der MVP-Oberfläche.",
  },
] as const;

export const roadmapItems = [
  { timeframe: "Q3 2026", title: "MVP", description: "Login, Fotodokumentation, Aufklärungsbögen, Reminder und Termin-CTA." },
  { timeframe: "Q4 2026", title: "Praxis-Dokumente", description: "Eigene Bögen, Versionierung, Signaturstatus und AVV-Download." },
  { timeframe: "Q1 2027", title: "PatientInnen-App", description: "Self-Service für Termine, Betroffenenrechte, Dokumente und Recall-Reminder." },
  { timeframe: "Q2 2027", title: "Integrationen", description: "Kalender, E-Mail/SMS/Push-Anbieter und optionale Analytics nach Consent." },
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
    price: "49",
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
