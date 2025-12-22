# LiveCalls HTML/CSS Lernprojekt

## 🎯 Projektziel

Dieses Projekt dient **ausschließlich zu Lernzwecken**. Das Ziel ist nicht, eine perfekte Website zu bauen, sondern praktische Erfahrung zu sammeln in:

- **Git-Workflow**: Arbeiten mit Branches, Commits, und Pull Requests
- **Code Reviews**: Konstruktives Feedback geben und empfangen
- **Teamarbeit**: In einer größeren Gruppe zusammenarbeiten
- **Projektstruktur**: Sauberen, wartbaren Code schreiben
- **HTML & CSS Grundlagen**: Semantisches HTML und modernes CSS

## 🚀 Schnellstart

1. **Repository forken**
   - Klicke oben rechts auf "Fork"
   - Damit erhältst du deine eigene Kopie des Projekts

2. **Lokal klonen**
   ```bash
   git clone https://github.com/DEIN-USERNAME/livecalls.git
   cd livecalls/html
   ```

3. **Im Browser öffnen**
   ```bash
   # Öffne index.html direkt im Browser
   # Oder nutze einen einfachen HTTP-Server:
   python3 -m http.server 8000
   # Dann öffne http://localhost:8000
   ```

## 📋 Regeln und Einschränkungen

### Technische Einschränkungen
- ✅ Nur HTML und CSS
- ❌ Kein JavaScript
- ❌ Keine Frameworks oder Libraries
- ❌ Keine Build-Tools oder Preprozessoren

### Arbeitsregeln
- **Eine Person = Eine Datei**: Um Merge-Konflikte zu vermeiden, arbeitet jede Person nur an einer Datei
- **Kleine Tasks**: Jedes Issue sollte in 1-2 Stunden lösbar sein
- **Ein Issue = Ein PR**: Jeder Pull Request löst genau ein Issue
- **Reviews sind Pflicht**: Mindestens eine Freigabe vor dem Merge

## 🤝 Wie du beitragen kannst

### 1. Issue auswählen

- Gehe zu den [Issues](../../issues)
- Suche ein unassigned Issue, das zu deinem Level passt
  - 🟢 **Beginner**: Grundlagen, erste Schritte
  - 🟡 **Intermediate**: Fortgeschrittene CSS, komplexere Layouts
- Kommentiere: "Ich übernehme das" und warte auf die Zuweisung

### 2. Branch erstellen

```bash
# Hole die neuesten Änderungen
git checkout main
git pull upstream main

# Erstelle einen neuen Branch
git checkout -b feature/issue-nummer-kurze-beschreibung
# Beispiel: git checkout -b feature/12-navigation-styling
```

### 3. Änderungen vornehmen

- Öffne die entsprechende Datei
- Mache deine Änderungen
- Teste im Browser (mehrere Browser wenn möglich)
- Achte auf sauberen, lesbaren Code

### 4. Committen

```bash
# Änderungen hinzufügen
git add dateiname.html

# Commit mit aussagekräftiger Nachricht
git commit -m "feat: Add navigation styling for mobile devices

- Add flexbox layout for nav items
- Implement responsive breakpoint at 768px
- Fix alignment issues

Closes #12"
```

**Commit-Message Format:**
```
typ: Kurze Beschreibung (max 50 Zeichen)

- Detaillierte Erklärung Punkt 1
- Detaillierte Erklärung Punkt 2

Closes #IssueNummer
```

**Typen:**
- `feat`: Neues Feature oder Inhalt
- `fix`: Bugfix oder Korrektur
- `style`: CSS-Änderungen, Formatierung
- `refactor`: Code-Umstrukturierung ohne Funktionsänderung
- `docs`: Dokumentation

### 5. Pull Request erstellen

```bash
# Push zu deinem Fork
git push origin feature/12-navigation-styling
```

- Gehe auf GitHub zu deinem Fork
- Klicke "Compare & pull request"
- Fülle die PR-Vorlage aus:
  - **Titel**: Klare Beschreibung der Änderung
  - **Beschreibung**: Was, warum, wie
  - **Closes #Nummer**: Verlinke das Issue
  - **Screenshots**: Bei visuellen Änderungen

### 6. Code Review

- Warte auf Feedback
- Sei offen für Verbesserungsvorschläge
- Führe angeforderte Änderungen durch:
  ```bash
  # Änderungen vornehmen
  git add .
  git commit -m "fix: Address review comments"
  git push origin feature/12-navigation-styling
  ```

### 7. Merge

- Nach Approval wird ein Maintainer den PR mergen
- Dein Branch wird automatisch gelöscht
- Glückwunsch! 🎉

## 📁 Projektstruktur

```
html/
├── index.html              # Hauptseite
├── pages/                  # Alle weiteren HTML-Seiten
│   ├── about.html
│   ├── contact.html
│   └── ...
├── css/                    # Alle CSS-Dateien
│   ├── main.css           # Globale Styles
│   ├── navigation.css
│   ├── footer.css
│   └── ...
├── images/                 # Alle Bilder
│   ├── logo.png
│   └── ...
└── README.md              # Diese Datei
```

Siehe die README-Dateien in den einzelnen Ordnern für spezifische Regeln.

## 🎓 Git-Workflow Cheatsheet

### Erstmaliges Setup

```bash
# Fork klonen
git clone https://github.com/DEIN-USERNAME/livecalls.git
cd livecalls/html

# Upstream hinzufügen (Original-Repo)
git remote add upstream https://github.com/ORIGINAL-OWNER/livecalls.git

# Überprüfen
git remote -v
```

### Vor jedem neuen Issue

```bash
# Wechsle zu main
git checkout main

# Hole neueste Änderungen vom Original
git fetch upstream
git merge upstream/main

# Pushe zu deinem Fork
git push origin main

# Neuer Branch
git checkout -b feature/issue-nummer-beschreibung
```

### Änderungen hochladen

```bash
# Status checken
git status

# Dateien hinzufügen
git add dateiname.html

# Committen
git commit -m "feat: Beschreibung"

# Pushen
git push origin branch-name
```

### Branch aktualisieren

```bash
# Falls main sich geändert hat während du arbeitest
git checkout main
git pull upstream main
git checkout dein-branch
git rebase main
```

## 💡 Tipps für Anfänger

1. **Klein anfangen**: Wähle ein Beginner-Issue für den Start
2. **Fragen stellen**: Nutze die Kommentare im Issue oder PR
3. **Browser-DevTools nutzen**: F12 öffnet die Entwicklertools
4. **Code-Qualität**:
   - Einrückung: 2 Spaces
   - Sinnvolle Klassennamen (deutsch oder englisch, aber konsistent)
   - Kommentare für komplexe Abschnitte
5. **Testen**: Öffne die Seite in verschiedenen Browsern
6. **Review geben**: Schaue dir auch PRs von anderen an

## ❓ Häufige Fragen

**Q: Ich habe einen Merge-Konflikt. Was nun?**  
A: Melde dich im Issue oder frage einen Maintainer um Hilfe.

**Q: Darf ich mehrere Issues gleichzeitig bearbeiten?**  
A: Für den Anfang: Nein. Eins nach dem anderen. Später nach Absprache möglich.

**Q: Wie lange darf ich ein Issue behalten?**  
A: Maximal 7 Tage. Falls du mehr Zeit brauchst, kommuniziere das im Issue.

**Q: Darf ich selbst Issues erstellen?**  
A: Ja! Nutze dafür die Issue-Templates und beschreibe klar, was gemacht werden soll.

## 📞 Kontakt & Hilfe

- **Issues**: Für Fragen zu spezifischen Tasks
- **Discussions**: Für allgemeine Fragen
- **Maintainer**: @pascal (oder entsprechender Username)

## 📝 Lizenz

Dieses Projekt dient ausschließlich zu Lernzwecken.

---

**Viel Erfolg und happy coding! 🚀**
