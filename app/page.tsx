import {
  ArrowUpRight,
  BellRing,
  CalendarCheck,
  Camera,
  CheckCircle2,
  ClipboardSignature,
  FileText,
  HeartPulse,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  appRoles,
  compliancePoints,
  heroMetrics,
  mvpModules,
  productPillars,
  treatmentJourney,
} from "@/lib/medaesthetic-content";

const pillarIcons = [ClipboardSignature, Camera, BellRing, CalendarCheck] as const;
const moduleIcons = [UsersRound, Camera, FileText, BellRing, CalendarCheck] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f0e8] text-[#2a1b14]">
      <header className="sticky top-0 z-50 border-b border-[#6f4b37]/15 bg-[#f5f0e8]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a className="flex items-center gap-3" href="#top" aria-label="Éclat de Noor Startseite">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3b261d] text-[#ead6c1] shadow-border">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <span className="block text-sm font-semibold tracking-[-0.32px]">Éclat de Noor</span>
              <span className="hidden text-xs text-[#725746] sm:block">MedAesthetic Manager</span>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#6f5a4d] lg:flex">
            <a className="transition hover:text-[#2a1b14]" href="#produkt">Produkt</a>
            <a className="transition hover:text-[#2a1b14]" href="#rollen">Rollen</a>
            <a className="transition hover:text-[#2a1b14]" href="#mvp">MVP</a>
            <a className="transition hover:text-[#2a1b14]" href="#dsgvo">DSGVO</a>
          </nav>
          <Button size="sm">Demo anfragen</Button>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="grid-fade absolute inset-0 -z-10 opacity-70" />
        <div className="absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#d8b28f] blur-3xl" />
        <div className="absolute right-0 top-40 -z-10 h-64 w-64 rounded-full bg-[#c8a27b]/45 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge className="mb-6 bg-[#fbf7f0]/85 text-[#744532] shadow-border">
              DSGVO-konforme Medical-Beauty-App für DACH-Praxen
            </Badge>
            <h1 className="font-editorial text-balance text-5xl font-medium leading-[0.96] tracking-[-2.6px] sm:text-7xl sm:tracking-[-4px]">
              Von Aufklärung bis Auffrischung — ästhetische Behandlungen digital organisiert.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[#6f5a4d] sm:text-xl">
              MedAesthetic Manager bildet Botox-, Hyaluron- und Filler-Abläufe in einer schlanken Praxis- und Patienten-App ab: Fotodokumentation, digitale Aufklärung, Recall-Reminder und Termine — getrennt vom normalen Praxisalltag.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg">
                Produktkonzept ansehen <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="secondary">
                Für Pilotpraxen vormerken
              </Button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl bg-[#fbf7f0]/82 p-4 shadow-border backdrop-blur">
                  <p className="text-3xl font-semibold tracking-[-1.2px] text-[#744532]">{metric.value}</p>
                  <p className="mt-1 text-xs font-medium leading-5 text-[#725746]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden border-[#6f4b37]/15 bg-[#fbf7f0]/88 shadow-warm backdrop-blur">
            <CardHeader className="border-b border-[#6f4b37]/15 bg-[#3b261d] text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase text-[#ead6c1]/80">Aesthetic Treatment OS</p>
                  <CardTitle className="font-editorial mt-2 text-3xl tracking-[-1.4px] text-white">Praxis-Cockpit</CardTitle>
                </div>
                <ShieldCheck className="h-8 w-8 text-[#ead6c1]" />
              </div>
              <CardDescription className="text-white/70">
                Patientin: Beispiel · Behandlung: Botox · Status: Aufklärung unterschrieben
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              {treatmentJourney.map((item) => (
                <div key={item.step} className="flex gap-4 rounded-2xl bg-[#f1e4d4] p-4 shadow-border">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ddc7ad] font-mono text-sm font-semibold text-[#744532]">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold tracking-[-0.32px]">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#6f5a4d]">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="produkt" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">Kernfunktionen</p>
          <h2 className="font-editorial mt-3 text-4xl font-medium tracking-[-2.2px] sm:text-5xl">
            Kein großes Klinik-System. Sondern der spezialisierte Flow für Medical Aesthetics.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {productPillars.map((pillar, index) => {
            const Icon = pillarIcons[index];
            return (
              <Card key={pillar.title} className="bg-[#fbf7f0]/82">
                <CardHeader>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ead8c4] text-[#744532] shadow-border">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{pillar.title}</CardTitle>
                  <CardDescription>{pillar.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="rollen" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 lg:grid-cols-2">
          {appRoles.map((role) => (
            <Card key={role.title} className="bg-[#3b261d] text-[#fbf7f0]">
              <CardHeader>
                <p className="font-mono text-xs uppercase text-[#ead6c1]/75">Nutzerrolle</p>
                <CardTitle className="font-editorial text-4xl tracking-[-2px] text-white">{role.title}</CardTitle>
                <CardDescription className="text-white/70">{role.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {role.capabilities.map((capability) => (
                    <div key={capability} className="flex items-start gap-3 rounded-2xl bg-[#ead6c1]/8 p-3 text-sm leading-6 text-[#fbf7f0]/82 shadow-border">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ead6c1]" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="mvp" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">MVP-Fokus</p>
            <h2 className="font-editorial mt-3 text-4xl font-medium tracking-[-2.2px] sm:text-5xl">
              Die erste Version bleibt bewusst schlank und zahlungsnah.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#6f5a4d]">
            Der stärkste Hebel ist nicht eine weitere Terminbuchung, sondern dokumentierte Behandlung plus automatischer Recall für wiederkehrende Umsätze.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {mvpModules.map((module, index) => {
            const Icon = moduleIcons[index];
            return (
              <Card key={module.title} className="bg-[#fbf7f0]/82">
                <CardContent className="p-6">
                  <Icon className="h-6 w-6 text-[#744532]" />
                  <p className="font-editorial mt-5 text-xl font-medium tracking-[-0.72px]">{module.title}</p>
                  <p className="mt-3 text-sm leading-6 text-[#6f5a4d]">{module.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="dsgvo" className="mx-auto max-w-7xl px-6 py-16 pb-24">
        <Card className="overflow-hidden bg-[#fbf7f0]/88">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[#744532] p-8 text-white sm:p-10">
              <LockKeyhole className="h-9 w-9 text-[#ead6c1]" />
              <p className="mt-8 font-mono text-xs uppercase text-[#ead6c1]/80">Compliance by design</p>
              <h2 className="font-editorial mt-3 text-4xl font-medium tracking-[-2px] text-white">
                Gesundheitsdaten, Fotos und Signaturen brauchen Vertrauen ab Tag eins.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/72">
                Éclat de Noor wird für DACH-Praxen positioniert: EU-Hosting, klare Mandantentrennung, verschlüsselte Dateiablage und keine Nutzung von Patientendaten für KI-Training.
              </p>
            </div>
            <div className="grid gap-3 p-8 sm:grid-cols-2 sm:p-10">
              {compliancePoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl bg-[#f1e4d4] p-4 text-sm font-medium leading-6 text-[#4b352b] shadow-border">
                  <HeartPulse className="mt-0.5 h-4 w-4 shrink-0 text-[#744532]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
