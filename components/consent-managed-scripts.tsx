"use client";

import { useEffect } from "react";

const STORAGE_KEY = "eclat-consent-v1";

type Consent = {
  analytics?: boolean;
  marketing?: boolean;
};

export function ConsentManagedScripts() {
  useEffect(() => {
    function loadFromConsent() {
      const consent = readConsent();
      if (!consent) return;

      if (consent.analytics) {
        loadScript({
          id: "eclat-plausible-analytics",
          src: process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL ?? "https://plausible.io/js/script.js",
          dataset: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
            ? { domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN }
            : undefined,
        });
      }

      if (consent.marketing) {
        loadScript({
          id: process.env.NEXT_PUBLIC_MARKETING_SCRIPT_ID || "eclat-marketing-script",
          src: process.env.NEXT_PUBLIC_MARKETING_SCRIPT_URL,
        });
      }
    }

    loadFromConsent();
    window.addEventListener("eclat-consent", loadFromConsent);
    return () => window.removeEventListener("eclat-consent", loadFromConsent);
  }, []);

  return null;
}

function readConsent(): Consent | null {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) return null;

  try {
    return JSON.parse(saved) as Consent;
  } catch {
    return null;
  }
}

function loadScript({ id, src, dataset }: { id: string; src?: string; dataset?: Record<string, string> }) {
  if (!src || document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.defer = true;
  script.src = src;

  if (dataset) {
    for (const [key, value] of Object.entries(dataset)) {
      script.dataset[key] = value;
    }
  }

  document.head.appendChild(script);
}
