# LiveCalls HTML/CSS Lernprojekt - Projektübersicht

## 📁 Projektstruktur

```
html/
├── .github/
│   └── ISSUE_TEMPLATE/          # Issue-Vorlagen für GitHub
│       ├── content.md
│       ├── style.md
│       └── bug.md
├── css/
│   ├── main.css                 # ✅ Erstellt - Globale Styles & Variablen
│   └── README.md                # ✅ Regeln für CSS
├── images/
│   └── README.md                # ✅ Regeln für Bilder
├── pages/
│   └── README.md                # ✅ Regeln für HTML-Seiten
├── example-issues/
│   └── EXAMPLE_ISSUES.md        # ✅ 12 fertige Beispiel-Issues
├── .gitignore                   # ✅ Git-Ignore-Regeln
├── CONTRIBUTING.md              # ✅ Beitragsrichtlinien
├── ISSUE_STRATEGY.md            # ✅ Issue-Strategie & Workflows
├── README.md                    # ✅ Haupt-Dokumentation
└── index.html                   # ✅ Startseite (Basis)
```

## ✅ Was wurde erstellt

### Dokumentation
1. **README.md** - Komplette Projektdokumentation mit:
   - Projektziel und Lernzielen
   - Git-Workflow für Anfänger
   - Schritt-für-Schritt Contribution-Guide
   - Regeln und Einschränkungen

2. **ISSUE_STRATEGY.md** - Detaillierte Issue-Strategie:
   - 6 Issue-Typen (Beginner, Intermediate, Content, Style, Refactor, Bug)
   - Issue-Templates und Beispiele
   - Workflow vom Claim bis zum Merge
   - Labels und Zeitlimits

3. **CONTRIBUTING.md** - Zusätzliche Richtlinien:
   - Code-Standards (HTML/CSS)
   - Commit-Konventionen
   - Review-Prozess
   - Testing-Checkliste

### Ordner-spezifische READMEs
1. **pages/README.md** - HTML-Regeln:
   - Dateinamen-Konventionen
   - HTML-Grundstruktur-Template
   - Relative Pfade
   - Semantisches HTML
   - Häufige Fehler

2. **css/README.md** - CSS-Regeln:
   - Datei-Organisation
   - CSS-Konventionen
   - Mobile First Approach
   - Best Practices
   - Breakpoints

3. **images/README.md** - Bild-Richtlinien:
   - Dateinamen und Formate
   - Dateigrößen-Limits
   - Alt-Text-Regeln
   - Optimierungs-Tools

### GitHub Integration
1. **Issue-Templates** (.github/ISSUE_TEMPLATE/):
   - content.md - Für neue Inhalte
   - style.md - Für CSS-Aufgaben
   - bug.md - Für Fehlerbehebungen

### Beispiel-Issues
1. **EXAMPLE_ISSUES.md** - 12 fertige Issues:
   - 7 Beginner-Issues
   - 5 Intermediate-Issues
   - Ausgeglichen zwischen Content und Style
   - Alle mit klaren Acceptance Criteria
   - Alle in 1-2 Stunden lösbar

### Starter-Code
1. **index.html** - Basis-Startseite
2. **css/main.css** - CSS mit:
   - Custom Properties (Variablen)
   - Universal Reset
   - Basis-Typografie
   - Container & Utility Classes

## 🎯 Nächste Schritte

### 1. Repository auf GitHub erstellen
```bash
cd /home/pascal/dev/livecalls/html
git init
git add .
git commit -m "Initial commit: Project structure and documentation"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/livecalls.git
git push -u origin main
```

### 2. GitHub Issues erstellen
Nutze die 12 Beispiel-Issues aus `example-issues/EXAMPLE_ISSUES.md`:
- Kopiere sie einzeln als GitHub Issues
- Setze passende Labels (beginner/intermediate, content/style)
- Weise sie bei Bedarf zu

### 3. Team einladen
- Repository-Settings → Collaborators → Leute einladen
- Erkläre den Workflow (siehe README.md)
- Zeige die Dokumentation

### 4. Erste Issues vergeben
Empfohlene Reihenfolge für absolute Anfänger:
1. Issue #1: Footer Copyright-Jahr aktualisieren (5-10 Min)
2. Issue #3: Button-Styles definieren (1h)
3. Issue #6: Hero-Section HTML erstellen (45 Min)
4. Issue #10: Footer erstellen (45 Min)

## 📊 Issue-Übersicht

Die 12 Beispiel-Issues decken ab:

### Beginner (🟢) - 7 Issues
- #1: Copyright-Jahr aktualisieren (10 Min)
- #2: Kontaktseite erstellen (1h)
- #3: Button-Styles (1h)
- #6: Hero-Section HTML (45 Min)
- #8: Über-uns Seite (1h)
- #10: Footer HTML (45 Min)
- #11: Footer Styling (1h)

### Intermediate (🟡) - 5 Issues
- #4: Navigation Header (1.5h)
- #5: Responsive Navigation-Styling (2h)
- #7: Hero-Section Styling (1.5h)
- #9: Formulareingaben stylen (1.5h)
- #12: CSS-Variablen definieren (1h)

## 🎓 Lernpfad-Vorschlag

### Woche 1: Basics
- Issue #1 (Copyright ändern)
- Issue #10 (Footer HTML)
- Issue #11 (Footer CSS)

### Woche 2: Strukturen
- Issue #6 (Hero HTML)
- Issue #3 (Buttons)
- Issue #2 (Kontaktseite)

### Woche 3: Fortgeschritten
- Issue #4 (Navigation HTML)
- Issue #5 (Navigation CSS)
- Issue #8 (Über-uns Seite)

### Woche 4: Styling & Details
- Issue #7 (Hero Styling)
- Issue #9 (Formular-Styling)
- Issue #12 (CSS-Variablen)

## 🔧 Anpassungen

### Labels in GitHub erstellen
```
beginner (Farbe: grün)
intermediate (Farbe: gelb)
content (Farbe: blau)
style (Farbe: lila)
refactor (Farbe: orange)
bug (Farbe: rot)
good-first-issue (Farbe: hellgrün)
help-wanted (Farbe: hellrot)
```

### Branch Protection (empfohlen)
Settings → Branches → Add rule für `main`:
- ✅ Require pull request reviews before merging
- ✅ Require approvals: 1
- ✅ Dismiss stale pull request approvals

## 💡 Tipps für Maintainer

1. **Erste Issue-Runde**: Starte mit 3-4 einfachen Issues
2. **Regelmäßige Reviews**: Schnelles Feedback motiviert
3. **Positive Kommunikation**: Lobe gute Ansätze
4. **Pair-Programming**: Biete Video-Calls für Hilfe an
5. **Wöchentliche Updates**: Zeige Fortschritt

## 📞 Support

Bei Fragen zur Projektstruktur:
- Alle Regeln sind in den jeweiligen README-Dateien
- Beispiele sind in EXAMPLE_ISSUES.md
- Workflow ist in README.md erklärt

## ✨ Features

- ✅ Komplett auf Deutsch
- ✅ Beginner-freundlich
- ✅ Realistische Tasks
- ✅ Klare Struktur
- ✅ Umfassende Dokumentation
- ✅ Issue-Templates
- ✅ 12 fertige Beispiel-Issues
- ✅ Git-Workflow für Anfänger
- ✅ Code-Standards definiert
- ✅ Review-Richtlinien

---

**Das Projekt ist bereit zum Start! 🚀**

Viel Erfolg mit deinem Lernprojekt!
