import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f0e8] px-6 text-[#2a1b14]">
      <section className="max-w-xl rounded-3xl bg-[#fbf7f0]/90 p-8 text-center shadow-warm">
        <p className="font-mono text-xs uppercase text-[#8a563d]">404</p>
        <h1 className="font-editorial mt-4 text-5xl font-medium tracking-[-2.4px]">Diese Seite ist noch nicht bereit.</h1>
        <p className="mt-4 text-base leading-7 text-[#6f5a4d]">Der gewünschte Bereich ist entweder umgezogen oder kommt bald.</p>
        <Link className="mt-8 inline-flex rounded-full bg-[#3b261d] px-5 py-3 text-sm font-semibold text-[#ead6c1]" href="/">
          Zur Startseite
        </Link>
      </section>
    </main>
  );
}
