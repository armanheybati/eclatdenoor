# Access-Setup für eclatdenoor

Dieses Dokument hält fest, welche Zugänge für das Vercel-Webseitenprojekt sinnvoll sind. Es enthält bewusst **keine Secrets**.

## Bereits erledigt

- GitHub-Repository ist lokal geklont.
- SSH Deploy Key wurde erzeugt und im Repo als Deploy Key hinterlegt.
- Lokales Git-Remote nutzt SSH: `git@github.com:armanheybati/eclatdenoor.git`.
- Vercel Deploy Hook wurde lokal in `.env.local` gespeichert, aber nicht committed.
- Neon Postgres-Zugangsdaten wurden lokal in `.env.local` gespeichert, aber nicht committed.

## Vercel-Zugriff: empfohlene Optionen

### Option A — bevorzugt: Vercel-Projekt via GitHub verbinden

Du erstellst oder verbindest das Projekt in Vercel mit diesem GitHub-Repo.

Vorteile:

- Kein Vercel-Token muss an mich weitergegeben werden.
- Jeder Push auf den gewählten Branch kann automatisch deployen.
- Environment Variables bleiben direkt in Vercel.

Was ich dann brauche:

- Projektname in Vercel
- Team/Account-Slug, falls relevant
- Production Branch, vermutlich `main`
- Framework-Vorgabe, sobald entschieden: z. B. Next.js, Astro, SvelteKit, statisches HTML
- Falls du Preview Deployments aktivierst: Info, ob jeder Branch deployen darf

### Option B — Vercel Deploy Hook

Du erstellst in Vercel einen Deploy Hook und gibst mir nur die Hook-URL.

Vorteile:

- Eng begrenzter Zugriff: Ich kann Deployments triggern, aber keine Projekteinstellungen ändern.
- Gut, wenn ich nur nach Pushes ein Deployment auslösen soll.

Hinweis:

- Die Hook-URL ist ein Secret. Nicht committen.
- Wenn du sie hier teilst, behandle ich sie als vertraulich und schreibe sie nicht ins Repo.

### Option C — Vercel API Token

Nur nötig, wenn ich Vercel-Projekte, Env Vars oder Deployments aktiv per API/CLI verwalten soll.

Falls du diesen Weg willst, bitte nach Möglichkeit einen begrenzten Token verwenden.

Was zusätzlich nötig sein kann:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID` oder Team-ID
- `VERCEL_PROJECT_ID`, sobald das Projekt existiert

Auch diese Werte gehören nicht ins Repo.

## Zugangsdaten, die du mir geben kannst

Bitte keine normalen Passwörter schicken. Besser sind scoped Tokens, Einladungen oder Deploy Hooks.

Für den nächsten Schritt reichen wahrscheinlich:

1. Vercel-Zugriffsmethode: GitHub-Integration, Deploy Hook oder API Token
2. Gewünschter Projekt-/Domainname
3. Domain-Zugriff, falls eine eigene Domain verbunden werden soll
4. Gewünschter Tech-Stack, sobald entschieden
5. Environment Variables, falls die Website später externe Dienste nutzt

## Domains / DNS

Wenn eine eigene Domain verwendet wird, brauche ich später entweder:

- die konkreten DNS-Einträge, die du selbst setzt, oder
- Zugriff/Anweisungen für deinen DNS-Provider.

Typische Werte bei Vercel:

- Apex/root Domain: A Record auf `76.76.21.21`
- Subdomain `www`: CNAME auf `cname.vercel-dns.com`

Bitte vor Umsetzung in Vercel prüfen, weil Vercel die exakten DNS-Hinweise pro Domain anzeigt.

## Environment Variables

Für lokale Entwicklung gibt es eine Vorlage in `.env.example`.

Für Vercel sollten die echten Werte direkt in Vercel unter **Project Settings → Environment Variables** eingetragen werden. Für Next.js/Neon sind insbesondere relevant:

- `DATABASE_URL`
- `DATABASE_URL_UNPOOLED`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

Je nach späterem ORM/DB-Client reichen wahrscheinlich weniger Variablen; bis zur Stack-Entscheidung ist die breitere Neon/Vercel-kompatible Vorlage sinnvoll.

## Sicherheit

- `.env`, `.env.*`, `.vercel/`, Keys und Zertifikate sind per `.gitignore` ausgeschlossen.
- Secrets werden nicht in Markdown-Dateien dokumentiert.
- Wenn ein Secret versehentlich im Repo landet, muss es als kompromittiert gelten und rotiert werden.
- Da Secrets über Chat geteilt wurden, sollten sie rotiert werden, falls dieser Kanal oder Verlauf nicht als dauerhaft vertraulich gelten soll.
