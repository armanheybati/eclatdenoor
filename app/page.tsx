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
  Menu,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { ConsentManagedScripts } from "@/components/consent-managed-scripts";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WaitlistForm } from "@/components/waitlist-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  appRoles,
  beforeAfterComparisons,
  compliancePoints,
  heroMetrics,
  mvpModules,
  productPillars,
  reminderPushExample,
  treatmentJourney,
} from "@/lib/medaesthetic-content";
import { topMenuItems } from "@/lib/top-menu";
import {
  contactDetails,
  faqs,
  footerLinks,
  legalLinks,
  pricingNotice,
  roadmapItems,
  softwareApplicationSchema,
  teamSection,
  waitlistConfig,
} from "@/lib/site-compliance-content";

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
          <a className="ml-auto hidden rounded-full bg-[#3b261d] px-4 py-2 text-sm font-semibold text-[#ead6c1] shadow-border transition hover:bg-[#744532] sm:inline-flex" href="#waitlist">
            {waitlistConfig.primaryCta}
          </a>
          <details className="group relative ml-3">
            <summary className="flex h-10 cursor-pointer list-none items-center gap-2 rounded-full bg-[#ead8c4] px-4 text-sm font-medium text-[#3b261d] shadow-border transition hover:bg-[#ddc7ad] [&::-webkit-details-marker]:hidden">
              <Menu className="h-4 w-4" />
              Menü
            </summary>
            <div className="absolute right-0 top-12 z-50 max-h-[82vh] w-[min(92vw,430px)] space-y-3 overflow-y-auto rounded-3xl bg-[#f5f0e8] p-3 shadow-warm">
              {topMenuItems.map((item) => (
                <a
                  key={item.href}
                  className="block scroll-mt-24 rounded-2xl bg-[#fbf7f0]/82 p-5 text-left shadow-border transition hover:-translate-y-0.5 hover:bg-[#f1e4d4]"
                  href={item.href}
                >
                  <span className="block font-editorial text-lg font-medium tracking-[-0.48px] text-[#2a1b14]">{item.label}</span>
                  <span className="mt-2 block text-sm leading-6 text-[#725746]">{item.description}</span>
                </a>
              ))}
            </div>
          </details>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="grid-fade absolute inset-0 -z-10 opacity-70" />
        <div className="absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#d8b28f] blur-3xl" />
        <div className="absolute right-0 top-40 -z-10 h-64 w-64 rounded-full bg-[#c8a27b]/45 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6" aria-label="Éclat de Noor">
              <span className="sr-only">Éclat de Noor</span>
              <span className="brand-spellout font-editorial text-4xl font-medium tracking-[-1.8px] text-[#744532] sm:text-5xl" aria-hidden="true">
                {Array.from("Éclat de Noor").map((letter, index) => (
                  <span className="brand-spellout-letter" key={`${letter}-${index}`} style={{ animationDelay: `${index * 0.14}s` }}>
                    {letter === " " ? "\u00a0" : letter}
                  </span>
                ))}
              </span>
            </div>
            <h1 className="font-editorial text-balance text-5xl font-medium leading-[0.96] tracking-[-2.6px] sm:text-7xl sm:tracking-[-4px]">
              Von Aufklärung bis Auffrischung — ästhetische Behandlungen digital organisiert.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[#6f5a4d] sm:text-xl">
              MedAesthetic Manager bildet Botox-, Hyaluron- und Filler-Abläufe in einer schlanken Praxis- und Patienten-App ab: Fotodokumentation, digitale Aufklärung, Recall-Reminder und Termine — getrennt vom normalen Praxisalltag.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#3b261d] px-6 text-base font-medium text-[#ead6c1] shadow-border transition hover:bg-[#744532]" href="#waitlist">
                {waitlistConfig.primaryCta} <ArrowUpRight className="h-4 w-4" />
              </a>
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

      <section id="produkt" data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl px-6 py-16">
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

      <section id="login-aerztinnen" data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
        <div className="mb-8 max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">Navigation & Coming Soon</p>
          <h2 className="font-editorial mt-3 text-4xl font-medium tracking-[-2.2px] sm:text-5xl">Zugänge und Workflows werden sichtbar vorbereitet.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Card className="bg-[#fbf7f0]/82">
            <CardHeader>
              <CardTitle>Login für ÄrztInnen</CardTitle>
              <CardDescription>Coming Soon: Praxiszugang für Dokumentation, Aufklärung, Termine und Reminder.</CardDescription>
            </CardHeader>
          </Card>
          <Card id="login-patientinnen" className="scroll-mt-24 bg-[#fbf7f0]/82">
            <CardHeader>
              <CardTitle>Login für PatientInnen</CardTitle>
              <CardDescription>Coming Soon: Patientenportal für Formulare, Fotos, Hinweise und Terminaktionen.</CardDescription>
            </CardHeader>
          </Card>
          <Card id="aufklaerungsboegen" className="scroll-mt-24 bg-[#fbf7f0]/82">
            <CardHeader>
              <CardTitle>Aufklärungsbögen</CardTitle>
              <CardDescription>Digitale Bögen mit Versionsstand, Signaturstatus und DSGVO-Hinweisen.</CardDescription>
            </CardHeader>
          </Card>
          <Card id="allgemeine-hinweise" className="scroll-mt-24 bg-[#fbf7f0]/82">
            <CardHeader>
              <CardTitle>Allgemeine Hinweise</CardTitle>
              <CardDescription>Nachsorge-Hinweise nach Therapie als strukturierter PatientInnen-Flow.</CardDescription>
            </CardHeader>
          </Card>
          <Card id="terminvereinbarung" className="scroll-mt-24 bg-[#fbf7f0]/82">
            <CardHeader>
              <CardTitle>Terminvereinbarung</CardTitle>
              <CardDescription>Coming Soon: Termin-CTA und Kalenderintegration; aktuell über Waitlist/Kontakt.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section id="fotodokumentation" data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">Before/After-Fotos</p>
            <h2 className="font-editorial mt-3 text-4xl font-medium tracking-[-2.2px] sm:text-5xl">
              Botox, Filler und Hyaluron mit spielbarem Vorher/Nachher-Regler.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#6f5a4d]">
            Vorher- und Nachher-Fotos liegen direkt übereinander. Die Praxis oder PatientInnen können den Regler bewegen und die Veränderung elegant im direkten Vergleich sehen.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {beforeAfterComparisons.map((comparison) => (
            <BeforeAfterSlider key={comparison.treatment} comparison={comparison} />
          ))}
        </div>
      </section>

      <section id="reminder" data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">Reminder als animierte Nachricht</p>
            <h2 className="font-editorial mt-3 text-4xl font-medium tracking-[-2.2px] sm:text-5xl">
              Praxis sendet den Recall — die Patientin reagiert direkt im Smartphone-Flow.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#6f5a4d]">
              Das Reminder-System wirkt wie ein kleines GIF: Die Praxis-Nachricht kommt an, die Patientin liest sie und antwortet mit einer Terminaktion.
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm rounded-[3rem] bg-[#2a1b14] p-3 shadow-warm">
            <div className="relative min-h-[500px] overflow-hidden rounded-[2.4rem] bg-[#f5f0e8] p-5">
              <div className="mb-5 flex items-center justify-between text-xs font-semibold text-[#725746]">
                <span>{reminderPushExample.deviceTime}</span>
                <span>●●●</span>
              </div>

              <div className="reminder-gif-scene space-y-4" aria-label="Animiertes Reminder-GIF: Praxisnachricht kommt an und Patientin reagiert">
                <div className="rounded-[2rem] bg-[#ead8c4]/72 p-4 shadow-border">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7b28e] text-lg shadow-border">👩🏻</div>
                    <div>
                      <p className="text-sm font-semibold tracking-[-0.24px] text-[#2a1b14]">{reminderPushExample.patientName}</p>
                      <p className="text-xs text-[#725746]">Patientinnen-App · {reminderPushExample.treatment}</p>
                    </div>
                  </div>
                </div>

                <div className="reminder-practice-bubble rounded-3xl bg-[#fbf7f0]/95 p-4 shadow-warm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#744532] text-[#ead6c1]">
                      <BellRing className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold tracking-[-0.32px] text-[#2a1b14]">{reminderPushExample.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[#6f5a4d]">{reminderPushExample.message}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-[#ead8c4] p-3">
                    <span className="text-xs font-semibold text-[#744532]">{reminderPushExample.status}</span>
                    <span className="rounded-full bg-[#3b261d] px-3 py-1 text-xs font-semibold text-[#ead6c1]">{reminderPushExample.actionLabel}</span>
                  </div>
                </div>

                <div className="reminder-typing ml-auto flex w-max max-w-[78%] items-center gap-1 rounded-3xl bg-[#3b261d] px-4 py-3 text-[#ead6c1] shadow-warm" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-current" />
                  <span className="h-2 w-2 rounded-full bg-current" />
                  <span className="h-2 w-2 rounded-full bg-current" />
                </div>

                <div className="reminder-patient-bubble ml-auto max-w-[84%] rounded-[1.7rem] bg-[#3b261d] p-4 text-[#ead6c1] shadow-warm">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d8b28f]">{reminderPushExample.reactionLabel}</p>
                  <p className="mt-2 text-sm leading-6">{reminderPushExample.patientReply}</p>
                  <div className="mt-4 rounded-2xl bg-[#ead6c1] px-4 py-3 text-center text-xs font-bold text-[#3b261d]">
                    {reminderPushExample.actionLabel}
                  </div>
                </div>

                <div className="reminder-practice-note rounded-3xl bg-[#ead8c4]/70 p-4 text-sm leading-6 text-[#725746]">
                  Praxis-Cockpit: Reminder für {reminderPushExample.patientName} · {reminderPushExample.treatment} · nächster Recall geplant.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rollen" data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl px-6 py-16">
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

      <section id="mvp" data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl px-6 py-16">
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

      <section id="waitlist" data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">Conversion & Lead-Erfassung</p>
            <h2 className="font-editorial mt-3 text-4xl font-medium tracking-[-2.2px] sm:text-5xl">{waitlistConfig.primaryCta} und Pilotzugang sichern.</h2>
            <p className="mt-5 text-base leading-7 text-[#6f5a4d]">
              Trage deine Praxis-E-Mail ein. Die Vormerkung wird gespeichert und eine automatische Bestätigungsmail über den angebundenen E-Mail-Anbieter versendet.
            </p>
            <p className="mt-4 text-sm font-semibold text-[#744532]">Kontakt: <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></p>
          </div>
          <WaitlistForm />
        </div>
      </section>

      <section id="rechtliches" data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
        <div className="mb-8 max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">Rechtliches (Pflicht)</p>
          <h2 className="font-editorial mt-3 text-4xl font-medium tracking-[-2.2px] sm:text-5xl">Pflichtseiten, AVV und Consent sichtbar verlinkt.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {legalLinks.map((link) => (
            <a className="rounded-3xl bg-[#fbf7f0]/86 p-6 shadow-border transition hover:-translate-y-0.5 hover:bg-[#f1e4d4]" href={link.href} key={link.href}>
              <p className="font-editorial text-2xl font-medium tracking-[-0.96px]">{link.label}</p>
              <p className="mt-3 text-sm leading-6 text-[#725746]">Erstellt und verlinkt für Footer, Navigation und Compliance-Prüfung.</p>
            </a>
          ))}
        </div>
      </section>

      <section id="vertrauen" data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
        <Card className="bg-[#3b261d] text-white">
          <CardHeader>
            <CardTitle className="text-white">{teamSection.title}</CardTitle>
            <CardDescription className="text-white/70">{teamSection.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-3">
              {teamSection.bullets.map((bullet) => <p className="rounded-2xl bg-[#ead6c1]/8 p-3 text-sm text-white/82" key={bullet}>{bullet}</p>)}
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="preise" data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
        <Card className="bg-[#fbf7f0]/86">
          <CardHeader>
            <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">Preismodell</p>
            <CardTitle>Preise folgen / auf Anfrage</CardTitle>
            <CardDescription>{pricingNotice}</CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section id="faq" data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
        <div className="mb-8 max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">FAQ</p>
          <h2 className="font-editorial mt-3 text-4xl font-medium tracking-[-2.2px] sm:text-5xl">Häufige Fragen für Pilotpraxen.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <details className="rounded-3xl bg-[#fbf7f0]/86 p-5 shadow-border" key={faq.question}>
              <summary className="cursor-pointer font-semibold text-[#2a1b14]">{faq.question}</summary>
              <p className="mt-3 text-sm leading-6 text-[#725746]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="roadmap" data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
        <div className="mb-8 max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">Roadmap</p>
          <h2 className="font-editorial mt-3 text-4xl font-medium tracking-[-2.2px] sm:text-5xl">Was nach dem MVP kommt.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roadmapItems.map((item, index) => (
            <div className="rounded-3xl bg-[#fbf7f0]/86 p-6 shadow-border" key={item.title}>
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-xs font-semibold text-[#8a563d]">0{index + 1}</p>
                <span className="rounded-full bg-[#ead8c4] px-3 py-1 text-xs font-bold text-[#744532]">{item.timeframe}</span>
              </div>
              <p className="font-editorial mt-4 text-2xl font-medium tracking-[-0.96px]">{item.title}</p>
              <p className="mt-3 text-sm leading-6 text-[#725746]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="dsgvo" data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl scroll-mt-24 px-6 py-16 pb-24">
        <Card className="overflow-hidden bg-[#744532] text-white">
          <div className="p-8 sm:p-10 lg:p-12">
            <LockKeyhole className="h-9 w-9 text-[#ead6c1]" />
            <p className="mt-8 font-mono text-xs uppercase text-[#ead6c1]/80">Datenschutz-Grundverordnung (DSGVO)</p>
            <h2 className="font-editorial mt-3 max-w-4xl text-4xl font-medium tracking-[-2px] text-white">
              Medizinische und kosmetisch-medizinische Daten fallen unter Art. 9 DSGVO.
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-7 text-white/72">
              Sie gelten als besondere Kategorie personenbezogener Daten und erfordern erhöhte Schutzmaßnahmen. Éclat de Noor wird für DACH-Praxen positioniert: EU-Hosting, klare Mandantentrennung, verschlüsselte Dateiablage und keine Nutzung von Patientendaten für KI-Training.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {compliancePoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl bg-[#ead6c1]/8 p-3 text-sm leading-6 text-white/78 shadow-border">
                  <HeartPulse className="mt-0.5 h-4 w-4 shrink-0 text-[#ead6c1]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <footer className="border-t border-[#6f4b37]/15 bg-[#3b261d] px-6 py-10 text-[#ead6c1]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-editorial text-2xl font-medium tracking-[-0.96px]">Éclat de Noor</p>
            <p className="mt-2 text-sm text-[#ead6c1]/70">© {new Date().getFullYear()} Éclat de Noor. Alle Rechte vorbehalten.</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Badge className="w-max bg-[#ead6c1]/12 text-[#ead6c1] shadow-border">
              DSGVO-konforme Medical-Beauty-App für DACH-Praxen
            </Badge>
            <nav className="flex flex-wrap gap-4 text-sm font-semibold md:justify-end">
              {footerLinks.map((link) => <a className="hover:text-white" href={link.href} key={link.href}>{link.label}</a>)}
            </nav>
          </div>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <ScrollReveal />
      <ConsentManagedScripts />
      <CookieConsentBanner />
    </main>
  );
}
