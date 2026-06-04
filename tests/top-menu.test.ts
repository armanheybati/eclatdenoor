import { describe, expect, it } from "vitest";
import { topMenuItems } from "../lib/top-menu";

describe("topMenuItems", () => {
  it("contains the requested top-right dropdown entries in order", () => {
    expect(topMenuItems.map((item) => item.label)).toEqual([
      "Login",
      "Aufklärungsbögen",
      "Fotodokumentation",
      "Allgemeine Hinweise zur Beachtung nach Therapie",
      "Terminvereinbarung",
    ]);
  });

  it("links every dropdown item to an in-page target", () => {
    expect(topMenuItems.every((item) => item.href.startsWith("#"))).toBe(true);
    expect(new Set(topMenuItems.map((item) => item.href)).size).toBe(topMenuItems.length);
  });
});
