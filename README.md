# eclatdenoor

Dieses Repository wird als Vercel-Projekt für eine Webseite aufgebaut.

Der konkrete Produkt-/Website-Zuschnitt wird noch gemeinsam festgelegt. Bis dahin dient dieses Repo als sauberer Startpunkt für Zugriff, Deployment-Setup und spätere Projektstruktur.

## Grundsätze

- Keine Passwörter, Tokens, Kundendaten oder privaten Dokumente ins Repository committen.
- Secrets nur über Plattformen wie Vercel Environment Variables, GitHub Secrets oder sichere direkte Übergabe verwalten.
- Deployments sollen später über Vercel + GitHub-Integration oder explizite Deploy-Hooks laufen.

## Aktueller Setup-Stand

- GitHub-Repo per SSH Deploy Key angebunden.
- Deploy Key ist repo-spezifisch und für Schreibzugriff vorgesehen.
- Lokaler Arbeitsordner von Parvaneh: `/home/hermes/parvaneh/eclatdenoor`.

## Nächste Entscheidungen

Siehe `docs/access-setup.md` für die Zugänge und Setup-Informationen, die noch benötigt werden.
