import Link from "next/link";
import { legalCopy } from "@/lib/site-compliance-content";

export const metadata = {
  title: "Datenschutzerklärung | Éclat de Noor",
  description: "Datenschutzerklärung, Cookie-Hinweise und DSGVO-Informationen für Éclat de Noor.",
};

export default function DatenschutzPage() {
  const copy = legalCopy.privacy;
  return (
    <main className="min-h-screen bg-[#f5f0e8] px-6 py-16 text-[#2a1b14]">
      <section className="mx-auto max-w-3xl rounded-3xl bg-[#fbf7f0]/90 p-8 shadow-warm">
        <Link className="text-sm font-semibold text-[#744532]" href="/">← Zurück zur Startseite</Link>
        <h1 className="font-editorial mt-8 text-5xl font-medium tracking-[-2.4px]">{copy.title}</h1>
        <p className="mt-5 rounded-2xl bg-[#ead8c4] p-4 text-sm leading-6 text-[#725746]">{copy.disclaimer}</p>
        <div className="mt-8 space-y-3">
          {copy.items.map((item) => <p className="rounded-2xl bg-white/55 p-4 shadow-border" key={item}>{item}</p>)}
        </div>
      </section>
    </main>
  );
}
