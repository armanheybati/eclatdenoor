import { describe, expect, it } from "vitest";
import { reminderPushExample } from "../lib/medaesthetic-content";

describe("reminderPushExample", () => {
  it("contains a graphical push notification example for an example patient", () => {
    expect(reminderPushExample.patientName).toBe("Ayda Beispiel");
    expect(reminderPushExample.channel).toBe("Push-Up Nachricht");
    expect(reminderPushExample.title).toContain("Éclat de Noor");
    expect(reminderPushExample.message).toContain("Ayda");
    expect(reminderPushExample.message).toContain("Botox");
    expect(reminderPushExample.message).toContain("Auffrischung");
  });

  it("includes a patient-facing action and schedule context", () => {
    expect(reminderPushExample.actionLabel).toBe("Termin wählen");
    expect(reminderPushExample.timing).toMatch(/4–6 Monate/);
  });
});
