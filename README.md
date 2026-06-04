# eclatdenoor

Next.js-Webseite für Éclat de Noor, vorbereitet für Vercel Deployment und Neon Postgres über Prisma.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- shadcn/ui-inspirierte Komponenten (`Button`, `Badge`, `Card`)
- Prisma ORM
- Neon Postgres
- Vercel Deployment über GitHub + Deploy Hook

## Lokale Entwicklung

```bash
npm install
npm run db:generate
npm run dev
```

Die echten Secrets liegen lokal in `.env.local` und werden nicht committed. Für neue Umgebungen dient `.env.example` als Vorlage.

## Datenbank

Prisma-Schema: `prisma/schema.prisma`

Aktuelles Initialmodell:

- `Lead`

Nützliche Befehle:

```bash
npm run db:generate
npm run db:push
npm run db:studio
```

## Qualitätssicherung

```bash
npm run test
npm run typecheck
npm run build
```

## Sicherheit

- Keine Passwörter, Tokens, Kundendaten oder privaten Dokumente ins Repository committen.
- Secrets nur über `.env.local`, Vercel Environment Variables oder andere sichere Secret Stores verwalten.
- `.env`, `.env.*`, `.vercel/`, Keys und Zertifikate sind per `.gitignore` ausgeschlossen.
