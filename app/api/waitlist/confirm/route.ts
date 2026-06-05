import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token")?.trim();

  if (!token || token.length < 32) {
    return confirmationPage("Ungültiger Bestätigungslink", "Bitte nutze den Link aus deiner E-Mail oder frage den Pilotzugang erneut an.", 400);
  }

  const lead = await prisma.lead.findFirst({
    where: {
      message: {
        contains: token,
      },
    },
    orderBy: { createdAt: "desc" },
  });

  if (!lead) {
    return confirmationPage("Bestätigungslink nicht gefunden", "Der Link ist abgelaufen oder wurde bereits ersetzt. Bitte frage den Pilotzugang erneut an.", 404);
  }

  let proof: Record<string, unknown> = {};
  try {
    proof = lead.message ? JSON.parse(lead.message) : {};
  } catch {
    proof = { rawMessage: lead.message };
  }

  if (proof.status === "confirmed_double_opt_in") {
    return confirmationPage("Pilotzugang bereits bestätigt", "Deine Anfrage ist bestätigt. Wir melden uns mit den nächsten Onboarding-Schritten.", 200);
  }

  await prisma.lead.update({
    where: { id: lead.id },
    data: {
      message: JSON.stringify({
        ...proof,
        status: "confirmed_double_opt_in",
        confirmedAt: new Date().toISOString(),
      }),
    },
  });

  return confirmationPage("Pilotzugang bestätigt", "Danke — deine Anfrage ist per Double-Opt-in bestätigt. Wir melden uns mit den nächsten Onboarding-Schritten.", 200);
}

function confirmationPage(title: string, body: string, status: number) {
  return new NextResponse(
    `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title} · Éclat de Noor</title>
  <style>
    body { margin:0; min-height:100vh; display:grid; place-items:center; background:#f5f0e8; color:#2a1b14; font-family:Arial, sans-serif; }
    main { width:min(92vw, 620px); border-radius:32px; background:#fbf7f0; padding:34px; box-shadow:rgba(72,45,31,.08) 0 18px 60px, rgba(72,45,31,.12) 0 0 0 1px; }
    p.kicker { color:#8a563d; font-size:12px; letter-spacing:.14em; text-transform:uppercase; font-weight:700; }
    h1 { font-family:Georgia, 'Times New Roman', serif; font-weight:500; font-size:clamp(32px, 7vw, 52px); line-height:1; margin:14px 0; }
    p { color:#725746; font-size:16px; line-height:1.7; }
    a { display:inline-flex; margin-top:18px; border-radius:999px; background:#3b261d; color:#ead6c1; padding:13px 20px; text-decoration:none; font-weight:700; }
  </style>
</head>
<body>
  <main>
    <p class="kicker">Éclat de Noor</p>
    <h1>${title}</h1>
    <p>${body}</p>
    <a href="/">Zurück zur Website</a>
  </main>
</body>
</html>`,
    { status, headers: { "content-type": "text/html; charset=utf-8" } },
  );
}
