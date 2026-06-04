import { NextResponse } from "next/server";
import { z } from "zod";
import { waitlistConfig } from "@/lib/site-compliance-content";

const waitlistSchema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  const parsed = waitlistSchema.safeParse(await request.json().catch(() => ({})));

  if (!parsed.success) {
    return NextResponse.json({ error: "Bitte eine gültige E-Mail-Adresse eingeben." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    email: parsed.data.email,
    subject: waitlistConfig.confirmationSubject,
    message: `${waitlistConfig.confirmationMessage} Bestätigungsmail für ${parsed.data.email} vorbereitet.`,
  });
}
