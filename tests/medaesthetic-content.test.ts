import { describe, expect, it } from "vitest";
import {
  appRoles,
  compliancePoints,
  heroMetrics,
  mvpModules,
  productPillars,
  treatmentJourney,
} from "../lib/medaesthetic-content";

describe("MedAesthetic Manager landing content", () => {
  it("positions Éclat de Noor as a DACH medical-aesthetics practice manager", () => {
    const pillarText = productPillars.map((pillar) => `${pillar.title} ${pillar.description}`).join(" ");

    expect(pillarText).toContain("DSGVO");
    expect(pillarText).toContain("Botox");
    expect(pillarText).toContain("Hyaluron");
    expect(pillarText).toContain("Filler");
    expect(productPillars).toHaveLength(4);
  });

  it("covers both practice and patient roles", () => {
    expect(appRoles.map((role) => role.title)).toEqual(["Arzt / Praxisinhaber", "Patient"]);
    expect(appRoles[0].capabilities).toContain("Patientenprofile & Behandlungshistorie");
    expect(appRoles[1].capabilities).toContain("Digitale Unterzeichnung von Aufklärungsbögen");
  });

  it("keeps the MVP focused on the five core modules", () => {
    expect(mvpModules.map((module) => module.title)).toEqual([
      "Patientenprofile",
      "Before/After-Fotos",
      "Digitale Aufklärung",
      "Recall-Reminder",
      "Terminanfragen",
    ]);
  });

  it("documents compliance and treatment journey requirements", () => {
    expect(compliancePoints).toContain("EU-Hosting & AV-Verträge");
    expect(compliancePoints).toContain("Mandantentrennung je Praxis");
    expect(treatmentJourney).toHaveLength(4);
    expect(heroMetrics.some((metric) => metric.label.includes("Monate Recall"))).toBe(true);
  });
});
