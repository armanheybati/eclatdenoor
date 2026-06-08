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
  appointmentCalendarDemo,
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
  pilotOffer,
  pricingNotice,
  pricingPlans,
  competitorComparison,
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

      <section id="terminvereinbarung" data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">Terminvereinbarung mit Recall-Fenster</p>
            <h2 className="font-editorial mt-3 text-4xl font-medium tracking-[-2.2px] sm:text-5xl">
              Ayda bekommt den Reminder — und sieht sofort, wann die beste Auffrischungszeit ist.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#6f5a4d]">
            Der Kalender markiert das medizinisch sinnvolle Zeitfenster farblich, lässt Patientinnen aber bewusst freie Auswahl: empfohlene Slots, alternative freie Termine und belegte Praxiszeiten sind klar getrennt.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Card className="overflow-hidden bg-[#3b261d] text-[#fbf7f0]">
            <CardHeader className="border-b border-[#ead6c1]/12">
              <p className="font-mono text-xs uppercase text-[#ead6c1]/72">GIF-Storyboard · Reminder → Termin buchen</p>
              <CardTitle className="font-editorial text-4xl tracking-[-1.8px] text-white">Patientin {appointmentCalendarDemo.patientName}</CardTitle>
              <CardDescription className="text-white/70">{appointmentCalendarDemo.reminderText}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="calendar-gif-phone mx-auto max-w-sm rounded-[2.3rem] bg-[#f5f0e8] p-4 text-[#2a1b14] shadow-warm">
                <div className="calendar-reminder-card rounded-[1.7rem] bg-[#fbf7f0] p-4 shadow-border">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#744532] text-[#ead6c1]">
                      <BellRing className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Recall für {appointmentCalendarDemo.patientName}</p>
                      <p className="text-xs leading-5 text-[#725746]">{reminderPushExample.message}</p>
                    </div>
                  </div>
                </div>
                <div className="calendar-open-card mt-4 rounded-[1.9rem] bg-[#ead8c4] p-4 shadow-border">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs font-semibold uppercase text-[#8a563d]">Terminvereinbarung</p>
                      <p className="font-editorial text-2xl font-medium tracking-[-0.9px]">{appointmentCalendarDemo.monthLabel}</p>
                    </div>
                    <CalendarCheck className="h-6 w-6 text-[#744532]" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {appointmentCalendarDemo.days.slice(3, 9).map((day) => (
                      <button
                        aria-label={`${day.weekday}, ${day.date}. Juni: ${day.label}`}
                        className={`calendar-day rounded-2xl p-3 text-left shadow-border transition ${
                          day.state === "best"
                            ? "calendar-day-best bg-[#c89467] text-white"
                            : day.state === "busy"
                              ? "bg-[#d8ccc1] text-[#725746] opacity-70"
                              : day.state === "closed"
                                ? "bg-[#fbf7f0]/48 text-[#725746] opacity-60"
                                : "bg-[#fbf7f0] text-[#3b261d]"
                        }`}
                        key={`${day.weekday}-${day.date}`}
                        type="button"
                      >
                        <span className="block text-xs font-semibold">{day.weekday}</span>
                        <span className="block text-2xl font-bold tracking-[-0.8px]">{day.date}</span>
                        <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.12em] opacity-80">{day.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="calendar-confirm-card mt-4 rounded-[1.7rem] bg-[#3b261d] p-4 text-[#ead6c1] shadow-warm">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d8b28f]">Ayda wählt selbst</p>
                  <p className="mt-2 font-semibold text-white">{appointmentCalendarDemo.selectedSlot}</p>
                  <p className="mt-2 text-sm leading-6 text-[#ead6c1]/78">Terminwunsch wird an die Praxis gesendet und kann bestätigt werden.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#fbf7f0]/90">
            <CardHeader>
              <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">Farbcodierter Buchungskalender</p>
              <CardTitle>{appointmentCalendarDemo.treatment}: empfohlen, frei oder belegt.</CardTitle>
              <CardDescription>
                Das System schlägt den besten Auffrischungszeitraum vor, blockiert Ayda aber nicht: Sie kann auch einen anderen freien Termin auswählen.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {appointmentCalendarDemo.legend.map((item) => (
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#ead8c4]/60 px-3 py-2 text-xs font-semibold text-[#725746]" key={item.label}>
                    <span className="h-3 w-3 rounded-full shadow-border" style={{ backgroundColor: item.color }} />
                    {item.label}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {appointmentCalendarDemo.days.map((day) => (
                  <button
                    aria-label={`${day.weekday}, ${day.date}. Juni: ${day.label}`}
                    className={`rounded-2xl p-4 text-left shadow-border transition hover:-translate-y-0.5 ${
                      day.state === "best"
                        ? "bg-[#c89467] text-white shadow-warm"
                        : day.state === "busy"
                          ? "cursor-not-allowed bg-[#d8ccc1] text-[#725746] opacity-70"
                          : day.state === "closed"
                            ? "cursor-not-allowed bg-[#ead8c4]/48 text-[#725746] opacity-60"
                            : "bg-[#f1e4d4] text-[#3b261d] hover:bg-[#ead8c4]"
                    }`}
                    disabled={day.state === "busy" || day.state === "closed"}
                    key={`${day.weekday}-${day.date}`}
                    type="button"
                  >
                    <span className="block text-xs font-semibold">{day.weekday}</span>
                    <span className="block text-3xl font-bold tracking-[-1px]">{day.date}</span>
                    <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.12em] opacity-80">{day.label}</span>
                  </button>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {appointmentCalendarDemo.suggestedSlots.map((slot) => (
                  <button className="rounded-2xl bg-[#3b261d] p-4 text-left text-[#ead6c1] shadow-border transition hover:bg-[#744532]" key={slot.time} type="button">
                    <span className="block font-editorial text-2xl font-medium text-white">{slot.time} Uhr</span>
                    <span className="mt-2 block text-sm leading-6 text-[#ead6c1]/78">{slot.note}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
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

      <section data-scroll-reveal="topic" className="scroll-reveal mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#3b261d] p-6 text-[#ead6c1] shadow-warm sm:flex-row sm:items-center">
          <div>
            <p className="font-editorial text-2xl font-medium tracking-[-0.96px] text-white">Pilotpraxis werden?</p>
            <p className="mt-2 text-sm leading-6 text-[#ead6c1]/75">Sichere dir 3 Monate kostenlosen Pilotzugang und gib Feedback direkt in die MVP-Entwicklung.</p>
          </div>
          <a className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#ead6c1] px-6 text-sm font-bold text-[#3b261d] transition hover:bg-white" href="#waitlist">
            {waitlistConfig.primaryCta}
          </a>
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
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">Preismodell</p>
            <h2 className="font-editorial mt-3 text-4xl font-medium tracking-[-2.2px] sm:text-5xl">SaaS-Preise pro Praxis — klar planbar ab 49 €/Monat.</h2>
            <p className="mt-5 text-base leading-7 text-[#6f5a4d]">{pricingNotice}</p>
          </div>
          <Card className="max-w-md bg-[#3b261d] text-[#fbf7f0]">
            <CardHeader>
              <p className="font-mono text-xs uppercase text-[#ead6c1]/75">{pilotOffer.title}</p>
              <CardTitle className="text-white">3 Monate kostenlos</CardTitle>
              <CardDescription className="text-white/70">{pilotOffer.description}</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card className="bg-[#fbf7f0]/90" key={plan.name}>
              <CardHeader>
                <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">{plan.name}</p>
                <CardTitle className="font-editorial text-4xl tracking-[-1.8px]">{plan.price}<span className="font-sans text-sm font-medium tracking-normal text-[#725746]">/Monat</span></CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.features.map((feature) => (
                  <div className="flex items-start gap-3 text-sm leading-6 text-[#725746]" key={feature}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#744532]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 overflow-hidden bg-[#fbf7f0]/90">
          <CardHeader>
            <p className="font-mono text-xs font-medium uppercase text-[#8a563d]">Wettbewerbsvergleich</p>
            <CardTitle>{competitorComparison.title}</CardTitle>
            <CardDescription>Positionierung für kleine DACH-Praxen mit Patienten-App, DSGVO-Fokus, Reminder und Fotodokumentation.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-3xl shadow-border">
              <div className="min-w-[760px]">
                <div className="grid grid-cols-[1.35fr_repeat(4,1fr)] bg-[#3b261d] text-sm font-bold text-[#ead6c1]">
                  {['Kriterium', 'MedAesthetic', 'Pabau', 'Faces', 'RxPhoto'].map((heading) => (
                    <div className="border-r border-[#ead6c1]/18 p-3 last:border-r-0" key={heading}>{heading}</div>
                  ))}
                </div>
                {competitorComparison.rows.map((row) => (
                  <div className="grid grid-cols-[1.35fr_repeat(4,1fr)] border-t border-[#6f4b37]/12 text-sm text-[#2a1b14] odd:bg-white/38 even:bg-[#f1e4d4]/45" key={row.criterion}>
                    <div className="p-3 font-semibold">{row.criterion}</div>
                    {[row.medaesthetic, row.pabau, row.faces, row.rxphoto].map((value, index) => (
                      <div className={`p-3 text-center ${value === '✓' ? 'font-bold text-[#2f7d43]' : 'text-[#3b261d]'}`} key={`${row.criterion}-${index}`}>{value}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-[#725746]">* {competitorComparison.note}</p>
          </CardContent>
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
