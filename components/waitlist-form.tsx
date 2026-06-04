"use client";

import { useState } from "react";
import { waitlistConfig } from "@/lib/site-compliance-content";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const payload = await response.json();
    if (!response.ok) {
      setStatus("error");
      setMessage(payload.error ?? "Bitte E-Mail-Adresse prüfen.");
      return;
    }
    setStatus("success");
    setMessage(payload.message ?? waitlistConfig.confirmationMessage);
    setEmail("");
  }

  return (
    <form className="rounded-3xl bg-[#fbf7f0]/90 p-5 shadow-warm" onSubmit={submit}>
      <label className="text-sm font-semibold text-[#3b261d]" htmlFor="waitlist-email">
        {waitlistConfig.emailFieldLabel}
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          className="min-h-12 flex-1 rounded-full border border-[#6f4b37]/20 bg-white/70 px-4 text-sm outline-none transition focus:border-[#744532]"
          id="waitlist-email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="praxis@example.de"
          required
          type="email"
          value={email}
        />
        <button className="min-h-12 rounded-full bg-[#3b261d] px-6 text-sm font-semibold text-[#ead6c1] transition hover:bg-[#744532]" disabled={status === "loading"} type="submit">
          {status === "loading" ? "Wird gesendet …" : waitlistConfig.primaryCta}
        </button>
      </div>
      <p className="mt-3 text-xs leading-5 text-[#725746]">{waitlistConfig.privacyNote}</p>
      {message ? (
        <p className={`mt-4 rounded-2xl p-3 text-sm leading-6 ${status === "success" ? "bg-[#ead8c4] text-[#3b261d]" : "bg-red-50 text-red-800"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
