import { describe, expect, it } from "vitest";
import { getDatabaseConnectionSummary } from "../lib/env";

describe("getDatabaseConnectionSummary", () => {
  it("summarizes a Neon postgres connection without leaking credentials", () => {
    const summary = getDatabaseConnectionSummary(
      "postgresql://user:secret@example.neon.tech/neondb?sslmode=require&channel_binding=require",
    );

    expect(summary).toEqual({
      host: "example.neon.tech",
      database: "neondb",
      sslRequired: true,
      channelBindingRequired: true,
    });
    expect(JSON.stringify(summary)).not.toContain("secret");
  });

  it("reports a missing url as unavailable", () => {
    expect(getDatabaseConnectionSummary(undefined)).toEqual({
      host: "not-configured",
      database: "not-configured",
      sslRequired: false,
      channelBindingRequired: false,
    });
  });
});
