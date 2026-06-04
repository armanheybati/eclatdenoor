import { ArrowUpRight, Database, Gem, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { databaseConnectionSummary } from "@/lib/env";

const features = [
  {
    icon: Gem,
    title: "Editorialer Luxus-Auftritt",
    description: "Ein ruhiger, präziser Startpunkt für eine Marke, die später mit Inhalt, Bildern und Angebot geschärft wird.",
  },
  {
    icon: Database,
    title: "Neon Postgres angebunden",
    description: "Prisma ist mit einer pooled und unpooled Neon-Verbindung vorbereitet — ideal für Vercel und Migrationen.",
  },
  {
    icon: ShieldCheck,
    title: "Sicherer Setup-Pfad",
    description: "Secrets bleiben lokal oder in Vercel Environment Variables. Das Repository enthält nur sichere Vorlagen.",
  },
];

const workflow = [
  ["Develop", "#0a72ef", "Next.js App Router, Tailwind und shadcn/ui-Komponenten."],
  ["Preview", "#de1d8d", "Vercel Preview Deployments für jede sichtbare Iteration."],
  ["Ship", "#ff5b4f", "Production Deployment über GitHub und den Vercel Hook."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-[-0.32px]">Éclat de Noor</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#4d4d4d] md:flex">
            <a className="transition hover:text-[#171717]" href="#system">System</a>
            <a className="transition hover:text-[#171717]" href="#database">Database</a>
            <a className="transition hover:text-[#171717]" href="#next">Next steps</a>
          </nav>
          <Button size="sm">Initial Build</Button>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24 sm:py-32">
        <div className="grid-fade absolute inset-0 -z-10 opacity-80" />
        <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-6">Next.js · Prisma · Neon · Vercel</Badge>
          <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-2.4px] sm:text-7xl sm:tracking-[-3.4px]">
            Ein präziser, moderner Startpunkt für Éclat de Noor.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-[#4d4d4d] sm:text-xl">
            Das Grundgerüst steht: App Router, shadcn-inspirierte UI-Komponenten, Neon Postgres über Prisma und ein Deployment-Pfad über Vercel.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg">
              Projekt ansehen <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="secondary">
              Setup dokumentiert
            </Button>
          </div>
        </div>
      </section>

      <section id="system" className="mx-auto grid max-w-6xl gap-4 px-6 py-12 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fafafa] shadow-border">
                <feature.icon className="h-5 w-5" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section id="database" className="mx-auto max-w-6xl px-6 py-16">
        <Card className="overflow-hidden">
          <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10">
              <p className="font-mono text-xs font-medium uppercase text-[#0068d6]">Database readiness</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-2.4px]">Prisma spricht mit Neon Postgres.</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#4d4d4d]">
                Die App liest keine Secrets im Client. Diese Übersicht zeigt nur nicht-sensitive Verbindungs-Metadaten aus der Server-Umgebung.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-[#fafafa] p-4 shadow-border">
                  <p className="font-mono text-xs uppercase text-[#666]">Host</p>
                  <p className="mt-2 break-words text-sm font-medium">{databaseConnectionSummary.host}</p>
                </div>
                <div className="rounded-lg bg-[#fafafa] p-4 shadow-border">
                  <p className="font-mono text-xs uppercase text-[#666]">Database</p>
                  <p className="mt-2 text-sm font-medium">{databaseConnectionSummary.database}</p>
                </div>
              </div>
            </div>
            <div className="bg-[#171717] p-8 text-white sm:p-10">
              <p className="font-mono text-xs uppercase text-white/50">Connection contract</p>
              <pre className="mt-6 overflow-x-auto rounded-lg bg-black/40 p-5 font-mono text-xs leading-6 text-white/80 shadow-border">
{`datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DATABASE_URL_UNPOOLED")
}`}
              </pre>
              <div className="mt-6 space-y-3 text-sm text-white/70">
                <p>SSL required: {databaseConnectionSummary.sslRequired ? "yes" : "no"}</p>
                <p>Channel binding: {databaseConnectionSummary.channelBindingRequired ? "required" : "not required"}</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section id="next" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mb-8 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase text-[#666]">Workflow</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-2.4px]">Bereit für die nächste inhaltliche Schärfung.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {workflow.map(([title, color, description]) => (
            <Card key={title}>
              <CardContent className="p-6">
                <p className="font-mono text-xs font-medium uppercase" style={{ color }}>{title}</p>
                <p className="mt-4 text-2xl font-semibold tracking-[-0.96px]">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
