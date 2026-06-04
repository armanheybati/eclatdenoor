import { describe, expect, it } from "vitest";
import { beforeAfterComparisons } from "../lib/medaesthetic-content";

describe("beforeAfterComparisons", () => {
  it("contains Botox, Filler, and Hyaluron before-after comparison demos", () => {
    expect(beforeAfterComparisons.map((item) => item.treatment)).toEqual(["Botox", "Filler", "Hyaluron"]);
  });

  it("describes before and after photos plus slider interaction", () => {
    for (const item of beforeAfterComparisons) {
      expect(item.beforeLabel).toContain("Vorher");
      expect(item.afterLabel).toContain("Nachher");
      expect(item.sliderLabel).toContain("Regler");
      expect(item.description).toMatch(/Before\/After|vorher|nachher/i);
    }
  });
});
