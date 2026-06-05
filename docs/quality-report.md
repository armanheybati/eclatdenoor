# Qualitätsnachweis – Éclat de Noor

Stand: 2026-06-05

## Lighthouse (lokal gegen Production Build)

Setup:

- `npm run build`
- `npm run start -- -p 3000`
- Lighthouse 13.3.0 gegen `http://127.0.0.1:3000`
- Chrome for Testing über Playwright-Download; fehlende NSS/NSPR Libraries lokal aus Ubuntu-Paketen extrahiert und per `LD_LIBRARY_PATH` geladen.

Ergebnis:

- Performance: 85
- Accessibility: 94
- SEO: 100

## Core Web Vitals / Lab-Werte

- LCP: 2.9 s
- CLS: 0
- FID: Field-only Metrik; in Lighthouse nicht direkt messbar.
- TBT als Lab-Proxy für Interaktivität/FID: 410 ms

Hinweis: Echte Core-Web-Vitals-Felddaten benötigen später reale Nutzerzugriffe, z. B. über Vercel Analytics, CrUX oder eine consent-konforme Analytics-Lösung.

## Before/After-Slider Touch-Bedienung

Umsetzung:

- Der Slider bleibt als nativer `input type="range"` erhalten.
- Zusätzlich reagiert die Bildfläche selbst auf Pointer Events.
- `touch-none` verhindert Scroll-Konflikte beim Ziehen auf Touchscreens.
- Der Slider-Wert wird anhand der X-Position innerhalb des Bildrahmens berechnet und auf 0–100 begrenzt.

Verifikation:

- TypeScript- und Production-Build-Prüfung sind erfolgreich.
- Lighthouse lief in mobiler Standard-Emulation.
- Ein Test auf echter physischer mobiler Hardware konnte in dieser Serverumgebung nicht durchgeführt werden, weil kein physisches Gerät angebunden ist. Dafür wurde die Implementierung technisch touch-fähig gemacht und bleibt per Browser/Device-Lab manuell prüfbar.
