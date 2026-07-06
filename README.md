# LiveCalls HTML/CSS Lernprojekt

## Inhaltsverzeichnis

1. [Schnellstart](#schnellstart)
2. [Benutzung](#benutzung)

## Schnellstart

- Repo clonen

  ```bash
  git clone git@github.com:PascalNehlsen/group-call-website.git
  ```

- Ordner wechseln

  ```bash
  cd group-call-website
  ```

- Environment Datei erstellen

> [!CAUTION]
> Ändere die Werte der `.env` Datei

  ```bash
  cp example.env .env
  ```

- Installiere Abhängikeiten

  ```bash
  npm i
  ```

- Projekt starten

  ```bash
  npm run dev
  ```

- Projekt ist erreichbar unter:

  ```bash
  http://localhost:4173
  ```

## Projektziel

Dieses Projekt dient **ausschließlich zu Lernzwecken**. Das Ziel ist nicht, eine perfekte Website zu bauen, sondern praktische Erfahrung zu sammeln in:

- **Git-Workflow**: Arbeiten mit Branches, Commits, und Pull Requests
- **Code Reviews**: Konstruktives Feedback geben und empfangen
- **Teamarbeit**: In einer größeren Gruppe zusammenarbeiten
- **Projektstruktur**: Sauberen, wartbaren Code schreiben
- **HTML & CSS Grundlagen**: Semantisches HTML und modernes CSS

## Regeln und Einschränkungen

### Technische Einschränkungen
- ✅ Nur HTML und CSS
- ❌ Kein JavaScript
- ❌ Keine Frameworks oder Libraries

### Arbeitsregeln
- **Eine Person = Eine Datei**: Um Merge-Konflikte zu vermeiden, arbeitet jede Person nur an einer Datei
- **Kleine Tasks**: Jedes Issue sollte in 1-2 Stunden lösbar sein
- **Ein Issue = Ein PR**: Jeder Pull Request löst genau ein Issue
- **Reviews sind Pflicht**: Mindestens eine Freigabe vor dem Merge

## Wie du beitragen kannst

### 1. Issue auswählen

- Gehe zu den [Issues](../../issues)
- Suche ein unassigned Issue, das zu deinem Level passt
  - 🟢 **Beginner**: Grundlagen, erste Schritte
  - 🟡 **Intermediate**: Fortgeschrittene CSS, komplexere Layouts
- Kommentiere: "Ich übernehme das" und weise dich zu!
- Anschließend ist das Issue für dich reserviert und du kannst mit dem Schnellstart beginnen.

### Schnellstart

1. **Öffne dein Terminal in VSCode:**

   - Obere Toolbar
   - `Terminal` -> `Neues Terminal`

2. **Projekt lokal klonen mit SSH**

```bash
git clone git@github.com:pascalnehlsen/group-call-website.git
cd group-call-website
```

3. **Projekt lokal klonen mit HTTPS**

```bash
git clone https://github.com/pascalnehlsen/group-call-website.git
cd group-call-website
```

4. **Feature Branch erstellen**

```bash
git checkout -b <branch-typ>/<branch-thema>
```

5. **Änderungen vornehmen**

- Öffne die entsprechende Datei
- Mache deine Änderungen
- Teste im Browser (mehrere Browser wenn möglich)
- Achte auf sauberen, lesbaren Code

6. **Committen**

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
# Push zu deiner Feature Branch
git push feature/12-navigation-styling
```

- Gehe zum GitHub Repo
- Klicke `Pull Request` -> `New pull request` 
- Nehme als Base (links) den Branch `main` aus. Rechts deine erstellte und aktualisierte Feature Branch.
- Fülle die PR-Vorlage aus:
  - **Titel**: Klare Beschreibung der Änderung
  - **Beschreibung**: Was, warum, wie
  - **Closes #Nummer**: Verlinke das Issue
  - **Screenshots**: Bei visuellen Änderungen

### 6. Code Review

- Warte auf Feedback von anderen Teilnehmern
- Sei offen für Verbesserungsvorschläge
- Führe angeforderte Änderungen durch und:
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

## 🎓 Git-Workflow Cheatsheet

### Vor jedem neuen Issue

```bash
# Wechsle zu main
git checkout main

# Hole neueste Änderungen vom Original
git pull origin main

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
git push <branch-name>
```

## Häufige Fragen

**Q: Ich habe einen Merge-Konflikt. Was nun?**  
A: Melde dich im Issue oder frage einen Maintainer um Hilfe.

**Q: Darf ich mehrere Issues gleichzeitig bearbeiten?**  
A: Für den Anfang: Nein. Eins nach dem anderen. Später nach Absprache möglich.

**Q: Wie lange darf ich ein Issue behalten?**  
A: Maximal 7 Tage. Falls du mehr Zeit brauchst, kommuniziere das im Issue.

**Q: Darf ich selbst Issues erstellen?**  
A: Ja! Nutze dafür die Issue-Templates und beschreibe klar, was gemacht werden soll.

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

## Lizenz

Dieses Projekt dient ausschließlich zu Lernzwecken.

---

**Viel Erfolg und happy coding!**
