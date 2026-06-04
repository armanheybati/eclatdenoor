export const heroMetrics = [
  { value: "4–6", label: "Monate Recall für Botox" },
  { value: "9–12", label: "Monate Recall für Filler" },
  { value: "2", label: "Rollen: Praxis & Patient" },
] as const;

export const productPillars = [
  {
    title: "Digitale Aufklärung",
    description:
      "Ausfüllbare Templates für Botox, Hyaluron und Filler mit elektronischer Signatur, Statuslogik und sicherem PDF-Archiv je Patient.",
  },
  {
    title: "Before/After-Fotodokumentation",
    description:
      "Standardisierte Fotoaufnahme mit Hilfslinien, chronologischer Verlaufsansicht und direkter Zuordnung zu Behandlung, Datum und Perspektive.",
  },
  {
    title: "Recall & Nachsorge",
    description:
      "Behandlungsspezifische Reminder für Auffrischungstermine, Vorsichtsmaßnahmen und Fotouploads — DSGVO-konform für den DACH-Markt gedacht.",
  },
  {
    title: "Schlanke Terminlogik",
    description:
      "Patienten stellen Terminanfragen, Praxen bestätigen Slots und automatische Erinnerungen reduzieren manuellen Praxisaufwand.",
  },
] as const;

export const appRoles = [
  {
    title: "Arzt / Praxisinhaber",
    description:
      "Das interne Cockpit für ästhetisch-medizinische Behandlungen — getrennt vom normalen Praxisalltag und ohne Klinik-System-Overhead.",
    capabilities: [
      "Patientenprofile & Behandlungshistorie",
      "Before/After-Fotos und Verlaufsdokumentation",
      "Aufklärungsbögen senden, prüfen und archivieren",
      "Reminder-Regeln und Auffrischungen verwalten",
      "Kalenderansicht und Terminanfragen bestätigen",
    ],
  },
  {
    title: "Patient",
    description:
      "Eine mobile-first Patienten-App für Vorbereitung, digitale Unterzeichnung, Verlaufskontrolle, Nachsorge und Wiederbuchung.",
    capabilities: [
      "Eigene Fotoaufnahme zur Verlaufskontrolle",
      "Einsicht in den eigenen Behandlungsverlauf",
      "Digitale Unterzeichnung von Aufklärungsbögen",
      "Erinnerungen an Auffrischung und Vorsichtsmaßnahmen",
      "Terminbuchung oder Terminanfrage direkt aus der App",
    ],
  },
] as const;

export const treatmentJourney = [
  {
    step: "01",
    title: "Vorbereitung",
    description: "Patient wird eingeladen, füllt den passenden Aufklärungsbogen aus und unterschreibt digital.",
  },
  {
    step: "02",
    title: "Behandlung",
    description: "Praxis dokumentiert Botox-, Hyaluron- oder Filler-Behandlung inklusive Areal, Notizen und Fotos.",
  },
  {
    step: "03",
    title: "Nachsorge",
    description: "Patient erhält Vorsichtsmaßnahmen wie kein Sport, keine Wärme und definierte Fotoupload-Reminder.",
  },
  {
    step: "04",
    title: "Recall",
    description: "Automatische Auffrischungserinnerungen sichern wiederkehrende Termine und Patientenbindung.",
  },
] as const;

export const mvpModules = [
  {
    title: "Patientenprofile",
    description: "Name, Kontakt, Behandlungshistorie, Dokumente, Fotos, Termine und Reminder-Status in einer fokussierten Medical-Beauty-Akte.",
  },
  {
    title: "Before/After-Fotos",
    description: "Upload, Kameraaufnahme, Tags wie Vorher/Nachher/Kontrolle und Side-by-Side-Vergleich für nachvollziehbare Verläufe.",
  },
  {
    title: "Digitale Aufklärung",
    description: "Templates für Botox, Hyaluron und Filler, elektronische Signatur, PDF-Erzeugung und revisionssichere Statusführung.",
  },
  {
    title: "Recall-Reminder",
    description: "Automatische Regeln für Kontrolltermine, Nachsorgehinweise und Auffrischungen mit manueller Anpassung durch die Praxis.",
  },
  {
    title: "Terminanfragen",
    description: "Schlanker MVP-Ablauf: Patient fragt an, Praxis bestätigt, Erinnerung wird automatisch ausgelöst.",
  },
] as const;

export const compliancePoints = [
  "EU-Hosting & AV-Verträge",
  "Mandantentrennung je Praxis",
  "Verschlüsselte Übertragung und Dateiablage",
  "Rollenbasierte Zugriffe für Praxis und Patient",
  "Audit-Logs für Formulare, Signaturen und Exporte",
  "Lösch- und Exportkonzept für Gesundheitsdaten",
  "Keine Nutzung von Patientendaten für KI-Training",
  "Rechtliche Prüfung der Templates bleibt bei der Praxis",
] as const;
