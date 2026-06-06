export const topMenuItems = [
  {
    label: "Login für ÄrztInnen",
    href: "#login-aerztinnen",
    description: "Zugang für PraxisinhaberInnen und behandelnde ÄrztInnen",
  },
  {
    label: "Login für PatientInnen",
    href: "#login-patientinnen",
    description: "Zugang zur Patienten-App und zum eigenen Behandlungsverlauf",
  },
  {
    label: "Aufklärungsbögen",
    href: "#aufklaerungsboegen",
    description: "Digitale Templates und Signatur",
  },
  {
    label: "Fotodokumentation",
    href: "#fotodokumentation",
    description: "Before/After und Verlauf",
  },
  {
    label: "Reminder",
    href: "#reminder",
    description: "Animierte Praxisnachricht mit Patientinnen-Reaktion",
  },
  {
    label: "Allgemeine Hinweise zur Beachtung nach Therapie",
    href: "#nachsorgehinweise",
    description: "Vorsichtsmaßnahmen nach Behandlung",
  },
  {
    label: "Terminkalender",
    href: "#terminkalender",
    description: "Farbige Auffrischungsfenster und freie Slot-Auswahl",
  },
  {
    label: "Datenschutz-Grundverordnung (DSGVO)",
    href: "#dsgvo",
    description: "Art. 9 DSGVO, AVV, EU/EWR-Speicherung und Betroffenenrechte",
  },
] as const;

export const dsgvoRequirements = [
  {
    title: "Rechtsgrundlage",
    description: "Art. 9 Abs. 2 lit. a DSGVO (ausdrückliche Einwilligung) + lit. h (Gesundheitsversorgung)",
  },
  {
    title: "Datenschutzbeauftragter",
    description: "Pflicht ab 10 Mitarbeitern mit Datenzugang (§ 38 BDSG) – Empfehlung: externer DSB",
  },
  {
    title: "Auftragsverarbeitung",
    description: "AVV-Vertrag mit App-Anbieter erforderlich (Art. 28 DSGVO)",
  },
  {
    title: "Datenspeicherort",
    description: "Ausschließlich EU/EWR – bevorzugt Deutschland",
  },
  {
    title: "Löschkonzept",
    description: "Dokumentierte Löschfristen nach Behandlungsende (min. 10 Jahre Aufbewahrungspflicht)",
  },
  {
    title: "Betroffenenrechte",
    description: "Auskunft, Berichtigung, Löschung, Datenportabilität – alles in-App lösbar",
  },
] as const;
