# Call 7: "Bei mir geht's doch!" - Pipeline rot

## Leitfrage

Was mache ich, wenn mein Code lokal funktioniert, aber GitHub Actions oder Deployment rot sind?

## Demo-Ablauf

1. App lokal ansehen:

```bash
npm install
npm run dev
```

2. Lokale Checks ausführen:

```bash
npm run lint
npm run validate
npm run format
npm run build
npm run check:links
npm run check:all
```

3. In GitHub Actions den roten Run öffnen.
4. Fehlgeschlagenen Job öffnen.
5. Fehlgeschlagenen Step öffnen.
6. Erste sinnvolle Fehlermeldung lesen.
7. Genau denselben Befehl lokal ausführen.
8. Fehler klein fixen.
9. Erneut lokal prüfen.
10. Pushen und Pipeline beobachten.

## Wichtige Scripts

- `npm run dev`: startet die Website lokal aus dem Repo.
- `npm run lint`: prüft HTML und CSS.
- `npm run validate`: prüft semantische HTML-Regeln.
- `npm run format`: prüft Prettier-Formatierung.
- `npm run build`: baut die statische Website nach `dist/`.
- `npm run preview`: startet die gebaute Website aus `dist/`.
- `npm run check:links`: baut die Seite, startet `preview` und prüft interne Links.
- `npm run check:all`: führt alle lokalen Checks aus.

## GitHub Actions

- `Quality Checks` läuft bei Pull Requests, Branch-Pushes und manuell.
- `Deploy to GitHub Pages` läuft bei Push auf `main` und manuell.
- Das Deployment wartet auf den Quality-Job.
- GitHub Pages deployed nur den Build-Output aus `dist/`.

## Vorbereitete Branches

- `feature/workflows`: grüner Basisstand für Scripts, CI und Deployment.
- `call-7/broken-link-check`: Demo-Branch mit roter Quality-Pipeline.
- `call-7/broken-pages-deploy`: Demo-Branch mit kaputtem GitHub-Pages-Deployment.

## Demo-Fehler 1: Check rot

Geeignet für den Einstieg, weil die Seite im Browser trotzdem normal wirken kann.

Beispiel:

```html
<a href="./pages/pricing.html">Preise</a>
```

Pipeline:

```bash
npm run check:links
```

Erwarteter Fehler:

```text
[404] /pages/pricing.html
```

Fix:

- Link auf eine existierende Seite ändern, oder
- Datei anlegen, oder
- bewusst aus dem Link-Check ausschließen, wenn es eine geplante Seite ist.

## Demo-Fehler 2: Deployment rot

Geeignet für den zweiten Teil, weil alle Code-Checks grün sein können, aber Deployment trotzdem fehlschlägt.

Beispiel in `.github/workflows/deploy.yml`:

```yaml
permissions:
  contents: read
  pages: write
```

Erwarteter Fehler:

```text
Error: Failed to get ID token
```

Fix:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

## Takeaway

1. Nicht panisch werden.
2. Fehlgeschlagenen Job öffnen.
3. Fehlgeschlagenen Step finden.
4. Erste sinnvolle Fehlermeldung lesen.
5. Den gleichen Befehl lokal ausführen.
6. Fehler klein eingrenzen.
7. Fixen.
8. Erneut lokal prüfen.
9. Pushen.
10. Pipeline erneut prüfen.
