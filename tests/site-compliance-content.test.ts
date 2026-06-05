import { describe, expect, it } from "vitest";
import {
  contactDetails,
  competitorComparison,
  faqs,
  footerLinks,
  legalLinks,
  pilotOffer,
  pricingPlans,
  pricingNotice,
  roadmapItems,
  socialProof,
  softwareApplicationSchema,
  teamSection,
} from "../lib/site-compliance-content";

describe("site compliance and conversion content", () => {
  it("defines required legal links and footer links", () => {
    expect(legalLinks.map((link) => link.label)).toEqual([
      "Impressum",
      "Datenschutzerklärung",
      "Auftragsverarbeitungsvertrag (AVV)",
    ]);
    expect(footerLinks.map((link) => link.label)).toEqual([
      "Impressum",
      "Datenschutz",
      "Kontakt",
    ]);
  });

  it("contains conversion contact, pricing, team, social proof, FAQ, and roadmap content", () => {
    expect(contactDetails.email).toMatch(/@/);
    expect(pricingNotice).toMatch(/SaaS-Modell|Praxis/);
    expect(pilotOffer.description).toContain("3 Monate kostenlos");
    expect(pricingPlans.map((plan) => plan.price)).toEqual(["49 €", "89 €", "149 €"]);
    expect(competitorComparison.rows.length).toBeGreaterThanOrEqual(7);
    expect(teamSection.title).toMatch(/Über uns|Team/);
    expect(socialProof.testimonialPlaceholder).toMatch(/Pilotpraxis|sobald vorhanden/);
    expect(faqs.length).toBeGreaterThanOrEqual(5);
    expect(roadmapItems.length).toBeGreaterThanOrEqual(4);
  });

  it("provides SoftwareApplication schema data", () => {
    expect(softwareApplicationSchema["@type"]).toBe("SoftwareApplication");
    expect(softwareApplicationSchema.applicationCategory).toContain("Medical");
  });
});
