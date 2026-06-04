type DatabaseConnectionSummary = {
  host: string;
  database: string;
  sslRequired: boolean;
  channelBindingRequired: boolean;
};

export function getDatabaseConnectionSummary(url: string | undefined): DatabaseConnectionSummary {
  if (!url) {
    return {
      host: "not-configured",
      database: "not-configured",
      sslRequired: false,
      channelBindingRequired: false,
    };
  }

  const parsed = new URL(url);

  return {
    host: parsed.hostname,
    database: parsed.pathname.replace(/^\//, "") || "not-configured",
    sslRequired: parsed.searchParams.get("sslmode") === "require",
    channelBindingRequired: parsed.searchParams.get("channel_binding") === "require",
  };
}

export const databaseConnectionSummary = getDatabaseConnectionSummary(process.env.DATABASE_URL);
