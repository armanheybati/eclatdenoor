import { createHash, randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { hasEmailProviderConfig, sendWaitlistDoubleOptIn } from "@/lib/email";
import { waitlistConfig } from "@/lib/site-compliance-content";

const waitlistSchema = z.object({
  email: z.string().trim().email(),
  consentAccepted: z.literal(true),
  consentText: z.string().min(20),
  pageUrl: z.string().url().optional(),
});

export async function POST(request: Request) {
  const parsed = waitlistSchema.safeParse(await request.json().catch(() => ({})));

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Bitte eine gültige E-Mail-Adresse eingeben und die Datenschutz-Einwilligung bestätigen." },
      { status: 400 },
    );
  }

  const email = parsed.data.email.toLowerCase();
  const token = randomBytes(32).toString("hex");
  const createdAt = new Date().toISOString();
  const confirmUrl = buildConfirmUrl(request, token);
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
  const ipHash = forwardedFor ? createHash("sha256").update(forwardedFor.split(",")[0].trim()).digest("hex") : null;
  const optInProof = {
    source: "website-waitlist",
    status: "pending_double_opt_in",
    token,
    createdAt,
    consentAccepted: true,
    consentText: parsed.data.consentText,
    pageUrl: parsed.data.pageUrl ?? getSiteUrl(request),
    userAgent,
    ipHash,
  };

  let leadId: string;

  try {
    const lead = await prisma.lead.create({
      data: {
        name: "Waitlist-Anmeldung",
        email,
        message: JSON.stringify(optInProof),
      },
    });
    leadId = lead.id;
  } catch (error) {
    console.error("waitlist_lead_create_failed", error);
    return NextResponse.json({ error: "Die Anfrage konnte gerade nicht gespeichert werden. Bitte später erneut versuchen." }, { status: 500 });
  }

  if (!hasEmailProviderConfig()) {
    return NextResponse.json(
      { error: "Die Anfrage wurde gespeichert, aber die Bestätigungsmail konnte gerade nicht versendet werden. Bitte später erneut versuchen." },
      { status: 503 },
    );
  }

  try {
    const delivery = await sendWaitlistDoubleOptIn({ email, confirmUrl });

    await prisma.lead.update({
      where: { id: leadId },
      data: {
        message: JSON.stringify({ ...optInProof, deliveryProvider: delivery.provider, deliveryMessageId: delivery.messageId }),
      },
    });

    return NextResponse.json({
      ok: true,
      email,
      provider: delivery.provider,
      subject: waitlistConfig.confirmationSubject,
      message: waitlistConfig.formSuccessMessage,
    });
  } catch (error) {
    console.error("waitlist_double_opt_in_email_failed", error);
    return NextResponse.json(
      { error: "Die Anfrage wurde gespeichert, aber die Bestätigungsmail konnte gerade nicht versendet werden. Bitte später erneut versuchen." },
      { status: 502 },
    );
  }
}

function buildConfirmUrl(request: Request, token: string) {
  const siteUrl = getSiteUrl(request);
  return `${siteUrl}/api/waitlist/confirm?token=${token}`;
}

function getSiteUrl(request: Request) {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return new URL(request.url).origin;
}
