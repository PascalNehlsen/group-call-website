# Quick Reference - LiveCalls Lernprojekt

## 📂 Wichtigste Dateien

| Datei | Zweck |
|-------|-------|
| [README.md](README.md) | **START HIER** - Komplette Projektdokumentation |
| [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) | Projektübersicht & Nächste Schritte |
| [ISSUE_STRATEGY.md](ISSUE_STRATEGY.md) | Wie Issues funktionieren |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Code-Standards & Review-Prozess |
| [example-issues/EXAMPLE_ISSUES.md](example-issues/EXAMPLE_ISSUES.md) | 12 fertige Issues zum Kopieren |

## 🎯 Für Contributors

### Issue claimen
1. Gehe zu Issues
2. Finde ein unassigned Issue
3. Kommentiere: "Ich übernehme das"
4. Warte auf Assignment

### Code beitragen
```bash
# Branch erstellen
git checkout -b feature/issue-nummer-beschreibung

# Änderungen machen
# ...

# Committen
git add datei.html
git commit -m "feat: Beschreibung

Closes #12"

# Pushen
git push origin feature/issue-nummer-beschreibung

# Dann: PR auf GitHub erstellen
```

### Vor dem Commit
- [ ] Im Browser getestet
- [ ] HTML/CSS validiert
- [ ] README-Regeln befolgt
- [ ] Nur eine Datei geändert

## 🎓 Für Maintainer

### Projekt-Setup
```bash
cd /home/pascal/dev/livecalls/html
git init
git add .
git commit -m "Initial commit: Project structure and documentation"
git branch -M main
git remote add origin https://github.com/USERNAME/livecalls.git
git push -u origin main
```

### Issues erstellen
Kopiere aus [EXAMPLE_ISSUES.md](example-issues/EXAMPLE_ISSUES.md):
- 12 fertige Issues
- Verschiedene Schwierigkeitsgrade
- Klare Acceptance Criteria

### Labels erstellen (in GitHub)
```
🟢 beginner
🟡 intermediate
🔵 content
🟣 style
🟠 refactor
🔴 bug
```

## 📁 Ordnerstruktur

```
html/
├── css/              → Alle CSS-Dateien
├── images/           → Alle Bilder
├── pages/            → HTML-Seiten (außer index.html)
├── .github/          → GitHub Issue-Templates
└── example-issues/   → Fertige Beispiel-Issues
```

## 📝 Wichtigste Regeln

### HTML
- Semantische Tags (`nav`, `main`, `footer`)
- 2 Spaces Einrückung
- Immer `alt` bei Bildern
- Relative Pfade: `../css/main.css`

### CSS
- Mobile First
- CSS-Variablen nutzen: `var(--primary-color)`
- Klassen mit Bindestrichen: `nav-item`
- Kein `!important`

### Git
- Ein Issue = Ein PR
- Eine Person = Eine Datei
- Aussagekräftige Commits
- `Closes #Nummer` im Commit

## 🆘 Hilfe

| Problem | Lösung |
|---------|--------|
| Issue unklar? | Kommentiere im Issue |
| Git-Problem? | Siehe [README.md](README.md) Git-Workflow |
| Merge-Konflikt? | Frage im Issue |
| CSS funktioniert nicht? | Browser-DevTools (F12) |
| Validierung fehlgeschlagen? | validator.w3.org, jigsaw.w3.org/css-validator |

## 🔗 Wichtige Links

### Dokumentation
- [W3Schools HTML](https://www.w3schools.com/html/)
- [W3Schools CSS](https://www.w3schools.com/css/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Tools
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [TinyPNG (Bilder komprimieren)](https://tinypng.com/)

### Git
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Pull Request Guide](https://docs.github.com/en/pull-requests)

## 📊 Issue-Typen Übersicht

| Label | Was | Wer | Beispiel |
|-------|-----|-----|----------|
| 🟢 Beginner | Einfache Tasks | Anfänger | Copyright ändern |
| 🟡 Intermediate | Komplexere Tasks | Fortgeschrittene | Responsive Nav |
| 🔵 Content | HTML & Text | Alle | Neue Seite |
| 🟣 Style | CSS | Alle | Button-Styles |
| 🟠 Refactor | Code verbessern | Fortgeschrittene | Code aufräumen |
| 🔴 Bug | Fehler beheben | Alle | Link reparieren |

## ⚡ Schnellstart für Anfänger

1. **Tag 1**: Lies [README.md](README.md)
2. **Tag 2**: Claim Issue #1 (Copyright ändern)
3. **Tag 3**: Erstelle deinen ersten PR
4. **Tag 4**: Lerne aus dem Review
5. **Tag 5**: Nächstes Issue!

## 🎯 Lernziele

Nach 10 Issues kannst du:
- ✅ Mit Git und GitHub arbeiten
- ✅ HTML-Struktur erstellen
- ✅ CSS für Layouts nutzen
- ✅ Code reviewen
- ✅ Im Team arbeiten
- ✅ Pull Requests managen

---

**Projekt-Status**: ✅ Bereit zum Start  
**Dokumentation**: ✅ Vollständig  
**Beispiel-Issues**: ✅ 12 verfügbar  
**Templates**: ✅ Erstellt  

🚀 **Los geht's!**
