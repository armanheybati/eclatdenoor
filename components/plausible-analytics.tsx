"use client";

import { useEffect } from "react";

const STORAGE_KEY = "eclat-consent-v1";

export function PlausibleAnalytics() {
  useEffect(() => {
    const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    if (!domain) return;

    function maybeLoad() {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const consent = JSON.parse(saved) as { analytics?: boolean };
      if (!consent.analytics || document.querySelector("script[data-domain]")) return;
      const script = document.createElement("script");
      script.defer = true;
      script.dataset.domain = domain;
      script.src = "https://plausible.io/js/script.js";
      document.head.appendChild(script);
    }

    maybeLoad();
    window.addEventListener("eclat-consent", maybeLoad);
    return () => window.removeEventListener("eclat-consent", maybeLoad);
  }, []);

  return null;
}
