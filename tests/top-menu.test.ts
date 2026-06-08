import { describe, expect, it } from "vitest";
import { dsgvoRequirements, topMenuItems } from "../lib/top-menu";

describe("topMenuItems", () => {
  it("contains the requested top-right dropdown entries in order", () => {
    expect(topMenuItems.map((item) => item.label)).toEqual([
      "Login für ÄrztInnen",
      "Login für PatientInnen",
      "Aufklärungsbögen",
      "Fotodokumentation",
      "Reminder",
      "Terminvereinbarung",
      "Allgemeine Hinweise",
      "Datenschutz-Grundverordnung (DSGVO)",
    ]);
  });

  it("links every dropdown item to an in-page target", () => {
    expect(topMenuItems.every((item) => item.href.startsWith("#"))).toBe(true);
    expect(new Set(topMenuItems.map((item) => item.href)).size).toBe(topMenuItems.length);
  });

  it("has separate login anchors for medical practitioners and patients", () => {
    expect(topMenuItems.find((item) => item.label === "Login für ÄrztInnen")?.href).toBe("#login-aerztinnen");
    expect(topMenuItems.find((item) => item.label === "Login für PatientInnen")?.href).toBe("#login-patientinnen");
  });

  it("captures the DSGVO requirements for medical and cosmetic-medical data", () => {
    expect(dsgvoRequirements.map((item) => item.title)).toEqual([
      "Rechtsgrundlage",
      "Datenschutzbeauftragter",
      "Auftragsverarbeitung",
      "Datenspeicherort",
      "Löschkonzept",
      "Betroffenenrechte",
    ]);
    expect(dsgvoRequirements.map((item) => item.description).join(" ")).toContain("Art. 9 Abs. 2 lit. a DSGVO");
    expect(dsgvoRequirements.map((item) => item.description).join(" ")).toContain("Art. 28 DSGVO");
  });
});
