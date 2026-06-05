"use client";

import { useMemo, useState } from "react";
import { waitlistConfig } from "@/lib/site-compliance-content";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const consentText = useMemo(() => waitlistConfig.consentLabel, []);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    if (!email.trim()) {
      setStatus("error");
      setMessage("Bitte eine gültige Praxis-E-Mail-Adresse eingeben.");
      return;
    }

    if (!consentAccepted) {
      setStatus("error");
      setMessage("Bitte die Datenschutz-Einwilligung bestätigen.");
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          consentAccepted,
          consentText,
          pageUrl: window.location.href,
        }),
      });
      const payload = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error ?? "Bitte E-Mail-Adresse und Datenschutz-Einwilligung prüfen.");
        return;
      }

      setStatus("success");
      setMessage(payload.message ?? waitlistConfig.formSuccessMessage);
      setEmail("");
      setConsentAccepted(false);
    } catch {
      setStatus("error");
      setMessage("Die Anfrage konnte nicht gesendet werden. Bitte Verbindung prüfen und erneut versuchen.");
    }
  }

  return (
    <form className="rounded-3xl bg-[#fbf7f0]/90 p-5 shadow-warm" onSubmit={submit}>
      <label className="text-sm font-semibold text-[#3b261d]" htmlFor="waitlist-email">
        {waitlistConfig.emailFieldLabel}
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          aria-describedby="waitlist-privacy waitlist-status"
          className="min-h-12 flex-1 rounded-full border border-[#6f4b37]/20 bg-white/70 px-4 text-sm outline-none transition focus:border-[#744532]"
          id="waitlist-email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="praxis@example.de"
          required
          type="email"
          value={email}
        />
        <button className="min-h-12 rounded-full bg-[#3b261d] px-6 text-sm font-semibold text-[#ead6c1] transition hover:bg-[#744532] disabled:cursor-not-allowed disabled:opacity-60" disabled={status === "loading"} type="submit">
          {status === "loading" ? "Wird gesendet …" : waitlistConfig.primaryCta}
        </button>
      </div>
      <label className="mt-4 flex items-start gap-3 rounded-2xl bg-[#ead8c4]/55 p-3 text-xs leading-5 text-[#725746]" htmlFor="waitlist-consent">
        <input
          checked={consentAccepted}
          className="mt-1 h-4 w-4 rounded border-[#6f4b37]/30 accent-[#744532]"
          id="waitlist-consent"
          name="consent"
          onChange={(event) => setConsentAccepted(event.target.checked)}
          required
          type="checkbox"
        />
        <span>{waitlistConfig.consentLabel}</span>
      </label>
      <p className="mt-3 text-xs leading-5 text-[#725746]" id="waitlist-privacy">{waitlistConfig.privacyNote}</p>
      {message ? (
        <p className={`mt-4 rounded-2xl p-3 text-sm leading-6 ${status === "success" ? "bg-[#ead8c4] text-[#3b261d]" : "bg-red-50 text-red-800"}`} id="waitlist-status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
