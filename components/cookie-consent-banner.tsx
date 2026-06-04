"use client";

import { useEffect, useState } from "react";
import { consentCategories } from "@/lib/site-compliance-content";

type ConsentState = Record<string, boolean>;

const STORAGE_KEY = "eclat-consent-v1";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(true);
  const [choices, setChoices] = useState<ConsentState>({ necessary: true, analytics: false, marketing: false });

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setVisible(true);
      return;
    }
    try {
      setChoices({ necessary: true, ...JSON.parse(saved) });
    } catch {
      setVisible(true);
    }
  }, []);

  function save(next: ConsentState) {
    const normalized = { necessary: true, analytics: Boolean(next.analytics), marketing: Boolean(next.marketing) };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    window.dispatchEvent(new CustomEvent("eclat-consent", { detail: normalized }));
    setChoices(normalized);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-4xl rounded-3xl bg-[#fbf7f0] p-5 shadow-warm">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-editorial text-2xl font-medium tracking-[-0.96px] text-[#2a1b14]">Cookie- & Consent-Einstellungen</p>
          <p className="mt-2 text-sm leading-6 text-[#6f5a4d]">
            Wir nutzen notwendige Cookies. Analyse oder Marketing wird erst nach deiner Zustimmung aktiviert.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {consentCategories.map((category) => (
              <label key={category.id} className="rounded-2xl bg-[#f1e4d4] p-3 text-sm text-[#3b261d] shadow-border">
                <span className="flex items-center gap-2 font-semibold">
                  <input
                    checked={category.required || Boolean(choices[category.id])}
                    disabled={category.required}
                    onChange={(event) => setChoices((current) => ({ ...current, [category.id]: event.target.checked }))}
                    type="checkbox"
                  />
                  {category.label}
                </span>
                <span className="mt-1 block text-xs leading-5 text-[#725746]">{category.description}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
          <button className="rounded-full bg-[#3b261d] px-5 py-3 text-sm font-semibold text-[#ead6c1]" onClick={() => save({ necessary: true, analytics: true, marketing: true })}>
            Alle akzeptieren
          </button>
          <button className="rounded-full bg-[#ead8c4] px-5 py-3 text-sm font-semibold text-[#3b261d]" onClick={() => save(choices)}>
            Auswahl speichern
          </button>
          <button className="rounded-full px-5 py-3 text-sm font-semibold text-[#725746]" onClick={() => save({ necessary: true, analytics: false, marketing: false })}>
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
