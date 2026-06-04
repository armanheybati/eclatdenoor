export const topMenuItems = [
  {
    label: "Login",
    href: "#login",
    description: "Zugang für Praxis und Patient",
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
    label: "Allgemeine Hinweise zur Beachtung nach Therapie",
    href: "#nachsorgehinweise",
    description: "Vorsichtsmaßnahmen nach Behandlung",
  },
  {
    label: "Terminvereinbarung",
    href: "#terminvereinbarung",
    description: "Terminanfrage und Bestätigung",
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
