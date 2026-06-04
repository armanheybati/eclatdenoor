import { describe, expect, it } from "vitest";
import { consentCategories, waitlistConfig } from "../lib/site-compliance-content";

describe("consent and waitlist requirements", () => {
  it("defines a cookie consent model with necessary, analytics, and marketing categories", () => {
    expect(consentCategories.map((category) => category.id)).toEqual(["necessary", "analytics", "marketing"]);
    expect(consentCategories[0].required).toBe(true);
  });

  it("defines a waitlist form with confirmation email copy", () => {
    expect(waitlistConfig.primaryCta).toBe("Jetzt vormerken");
    expect(waitlistConfig.emailFieldLabel).toContain("E-Mail");
    expect(waitlistConfig.confirmationSubject).toContain("Éclat de Noor");
    expect(waitlistConfig.confirmationMessage).toContain("Bestätigung");
  });
});
