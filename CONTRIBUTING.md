# Contributing Guide

## Willkommen!

Danke, dass du zum LiveCalls Lernprojekt beitragen möchtest! Dieses Dokument ergänzt die [README.md](README.md) mit zusätzlichen Details.

## Bevor du startest

1. **Lies die Hauptdokumentation**: [README.md](README.md)
2. **Verstehe die Issue-Strategie**: [ISSUE_STRATEGY.md](ISSUE_STRATEGY.md)
3. **Schaue dir die Ordner-READMEs an**: [/pages](pages/README.md), [/css](css/README.md), [/images](images/README.md)

## Code-Standards

### HTML
- HTML5 Doctype
- Semantische Tags (`nav`, `main`, `footer`, etc.)
- 2 Spaces Einrückung
- Kleinbuchstaben für Tags und Attribute
- Immer `alt` Attribute bei Bildern
- Validierter Code (https://validator.w3.org/)

### CSS
- 2 Spaces Einrückung
- Klassen mit Bindestrichen (`nav-item`, nicht `navItem`)
- Mobile First Ansatz
- Nutze CSS-Variablen aus `main.css`
- Keine `!important` (außer absolut notwendig)
- Validierter Code (https://jigsaw.w3.org/css-validator/)

### Commits
```
typ: Kurze Beschreibung (max 50 Zeichen)

Optionale längere Beschreibung mit Details.

Closes #IssueNummer
```

**Typen:**
- `feat`: Neues Feature
- `fix`: Bugfix
- `style`: CSS-Änderungen
- `refactor`: Code-Umstrukturierung
- `docs`: Dokumentation

### Pull Requests

**Titel-Format:**
```
[Typ] Kurze Beschreibung
```

**Beispiele:**
- `[feat] Add contact page with form`
- `[style] Implement responsive navigation`
- `[fix] Correct broken image link in footer`

**PR-Beschreibung:**
```markdown
## Beschreibung
[Was wurde gemacht?]

## Related Issue
Closes #42

## Änderungen
- Punkt 1
- Punkt 2

## Screenshots (falls relevant)
[Bilder hinzufügen]

## Checklist
- [ ] Code ist getestet
- [ ] HTML/CSS validiert
- [ ] README-Regeln befolgt
- [ ] Nur eine Datei geändert
```

## Review-Prozess

### Als Reviewer
- Sei konstruktiv und freundlich
- Erkläre das "Warum" bei Änderungswünschen
- Lobe gute Lösungen
- Teste den Code im Browser
- Nutze GitHub's Review-Features

### Als Autor
- Nimm Feedback nicht persönlich
- Frage nach, wenn etwas unklar ist
- Implementiere angeforderte Änderungen zeitnah
- Bedanke dich für Reviews

## Häufige Review-Kommentare

### HTML
- "Nutze semantisches HTML" → `<div>` durch `<section>`, `<article>`, etc. ersetzen
- "Alt-Text fehlt" → Alle `<img>` brauchen `alt` Attribute
- "Inkonsistente Einrückung" → 2 Spaces überall

### CSS
- "Nutze CSS-Variablen" → `color: #007bff` → `color: var(--primary-color)`
- "Mobile First" → Basis-Styles für Mobile, dann Media Queries für größere Screens
- "Vermeide feste Pixel" → `width: 300px` → `width: 100%; max-width: 300px`

## Testing-Checkliste

Vor jedem PR:

### Browser-Tests
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (wenn möglich)

### Responsive Tests
- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)

### Validierung
- [ ] HTML validiert
- [ ] CSS validiert
- [ ] Keine Console-Errors (F12 → Console)

### Links & Assets
- [ ] Alle Links funktionieren
- [ ] Alle Bilder laden
- [ ] CSS wird korrekt geladen

## Hilfe bekommen

### Im Issue
Kommentiere direkt im Issue, wenn du:
- Fragen zur Aufgabe hast
- Auf Probleme stößt
- Mehr Zeit brauchst

### In Pull Requests
Nutze:
- Comments für Fragen zu spezifischen Zeilen
- Review-Requests um Feedback zu bitten
- Draft PRs für Work-in-Progress

### Discord/Slack (falls vorhanden)
Für allgemeine Fragen und Diskussionen.

## Gute erste Issues

Suche nach Labels:
- `good-first-issue`
- `beginner`
- `documentation`

## Was du NICHT tun solltest

❌ Ohne assigned Issue einen PR erstellen  
❌ Mehrere Dateien in einem PR ändern (außer absolut nötig)  
❌ Code kopieren ohne zu verstehen  
❌ Issues claimen und nicht bearbeiten  
❌ Review-Feedback ignorieren  

## Was du tun solltest

✅ Issues komplett lesen bevor du claimst  
✅ Im Issue kommunizieren  
✅ Um Hilfe bitten wenn nötig  
✅ Code testen bevor du pushst  
✅ Konstruktives Feedback geben  

---

**Happy Coding! 🚀**

Bei Fragen: Erstelle ein Issue mit dem Label `question`.
