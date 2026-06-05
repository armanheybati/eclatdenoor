import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { hasEmailProviderConfig, sendWaitlistConfirmation } from "@/lib/email";
import { waitlistConfig } from "@/lib/site-compliance-content";

const waitlistSchema = z.object({
  email: z.string().trim().email(),
});

export async function POST(request: Request) {
  const parsed = waitlistSchema.safeParse(await request.json().catch(() => ({})));

  if (!parsed.success) {
    return NextResponse.json({ error: "Bitte eine gültige E-Mail-Adresse eingeben." }, { status: 400 });
  }

  const email = parsed.data.email.toLowerCase();

  try {
    await prisma.lead.create({
      data: {
        name: "Waitlist-Anmeldung",
        email,
        message: "Website-Waitlist: automatische Bestätigungsmail angefordert.",
      },
    });
  } catch (error) {
    console.error("waitlist_lead_create_failed", error);
    return NextResponse.json({ error: "Die Vormerkung konnte gerade nicht gespeichert werden. Bitte später erneut versuchen." }, { status: 500 });
  }

  if (!hasEmailProviderConfig()) {
    return NextResponse.json(
      {
        error:
          "Die Vormerkung wurde gespeichert, aber der E-Mail-Versand ist noch nicht konfiguriert. Bitte RESEND_API_KEY und RESEND_FROM_EMAIL in Vercel setzen.",
      },
      { status: 503 },
    );
  }

  try {
    const delivery = await sendWaitlistConfirmation({ email });

    return NextResponse.json({
      ok: true,
      email,
      provider: delivery.provider,
      subject: waitlistConfig.confirmationSubject,
      message: `${waitlistConfig.confirmationMessage} Bestätigungsmail wurde versendet.`,
    });
  } catch (error) {
    console.error("waitlist_confirmation_email_failed", error);
    return NextResponse.json(
      {
        error:
          "Die Vormerkung wurde gespeichert, aber die Bestätigungsmail konnte gerade nicht versendet werden. Bitte später erneut versuchen.",
      },
      { status: 502 },
    );
  }
}
