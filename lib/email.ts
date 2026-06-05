import { waitlistConfig } from "@/lib/site-compliance-content";

type SendWaitlistDoubleOptInInput = {
  email: string;
  confirmUrl: string;
};

type SendWaitlistConfirmationResult = {
  provider: "resend";
  messageId: string;
};

const resendEndpoint = "https://api.resend.com/emails";

export function hasEmailProviderConfig() {
  return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL);
}

export async function sendWaitlistDoubleOptIn({ email, confirmUrl }: SendWaitlistDoubleOptInInput): Promise<SendWaitlistConfirmationResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const replyTo = process.env.RESEND_REPLY_TO_EMAIL ?? process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    throw new Error("RESEND_CONFIGURATION_MISSING");
  }

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email],
      reply_to: replyTo,
      subject: waitlistConfig.confirmationSubject,
      text: buildPlainTextConfirmation(confirmUrl),
      html: buildHtmlConfirmation(confirmUrl),
    }),
  });

  const payload = (await response.json().catch(() => ({}))) as { id?: string; message?: string; name?: string };

  if (!response.ok || !payload.id) {
    const providerMessage = payload.message || payload.name || "Resend konnte die Double-Opt-in-Mail nicht versenden.";
    throw new Error(`RESEND_DELIVERY_FAILED: ${providerMessage}`);
  }

  return { provider: "resend", messageId: payload.id };
}

function buildPlainTextConfirmation(confirmUrl: string) {
  return `${waitlistConfig.confirmationMessage}\n\nBitte bestätige deine Anfrage hier:\n${confirmUrl}\n\nDanach melden wir uns mit Pilotzugang, Preisen und Onboarding-Schritten.\n\nÉclat de Noor · MedAesthetic Manager`;
}

function buildHtmlConfirmation(confirmUrl: string) {
  return `
    <div style="font-family: Arial, sans-serif; background:#f5f0e8; padding:32px; color:#2a1b14;">
      <div style="max-width:620px; margin:0 auto; background:#fbf7f0; border-radius:28px; padding:28px; border:1px solid rgba(111,75,55,.18);">
        <p style="font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#8a563d; margin:0 0 16px;">Éclat de Noor</p>
        <h1 style="font-family: Georgia, 'Times New Roman', serif; font-weight:500; font-size:32px; line-height:1.08; margin:0 0 18px;">Bitte bestätige deine Anfrage.</h1>
        <p style="font-size:16px; line-height:1.7; color:#6f5a4d; margin:0 0 22px;">${waitlistConfig.confirmationMessage}</p>
        <a href="${confirmUrl}" style="display:inline-block; border-radius:999px; background:#3b261d; color:#ead6c1; padding:13px 22px; text-decoration:none; font-size:14px; font-weight:700;">Pilotzugang bestätigen</a>
        <p style="font-size:13px; line-height:1.7; color:#725746; margin:22px 0 0;">Falls der Button nicht funktioniert, kopiere diesen Link in deinen Browser:<br><span style="word-break:break-all;">${confirmUrl}</span></p>
      </div>
    </div>
  `;
}
