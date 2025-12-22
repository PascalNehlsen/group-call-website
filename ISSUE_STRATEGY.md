# Issue-Strategie

## 🎯 Ziel

Issues sollen **klein, klar und eindeutig** sein. Jedes Issue sollte von einer Person in **1-2 Stunden** gelöst werden können.

## 📋 Issue-Typen

### 🟢 Beginner - Erste Schritte
**Zielgruppe**: Personen mit wenig HTML/CSS Erfahrung

**Typische Tasks:**
- Einfache HTML-Struktur erstellen
- Text-Inhalte hinzufügen oder ändern
- Basis-CSS für einzelne Elemente
- Kleine Styling-Anpassungen

**Beispiele:**
- Footer-Text aktualisieren
- Kontaktformular-HTML erstellen
- Button-Farbe ändern
- Überschriften-Stile definieren

### 🟡 Intermediate - Fortgeschritten
**Zielgruppe**: Personen mit Grundkenntnissen in HTML/CSS

**Typische Tasks:**
- Komplexere Layouts (Flexbox, Grid)
- Responsive Design implementieren
- Navigation erstellen
- Mehrere CSS-Properties kombinieren

**Beispiele:**
- Responsive Navigation erstellen
- Hero-Section mit Flexbox layouten
- Grid-basierte Galerie implementieren
- Formular-Validierung stylen (visuell)

### 🔵 Content - Inhalte
**Fokus**: HTML-Struktur und Inhalte, wenig Styling

**Typische Tasks:**
- Neue Seiten erstellen
- Texte schreiben/hinzufügen
- Bilder einbinden
- Semantisches HTML

**Beispiele:**
- "Über uns" Seite erstellen
- Team-Mitglieder Sektion hinzufügen
- FAQ-Liste erstellen

### 🟣 Style - CSS & Design
**Fokus**: Styling bestehender HTML-Strukturen

**Typische Tasks:**
- CSS für bestehende Elemente
- Farben und Typography
- Spacing und Alignment
- Hover-Effekte

**Beispiele:**
- Team-Cards stylen
- Footer gestalten
- Button-Styles erstellen
- Formular-Inputs stylen

### 🟠 Refactor - Code-Verbesserung
**Fokus**: Bestehenden Code verbessern (keine neuen Features)

**Typische Tasks:**
- Code aufräumen
- Klassennamen vereinheitlichen
- CSS optimieren
- HTML semantisch verbessern

**Beispiele:**
- Inline-Styles in CSS-Datei auslagern
- Doppelten CSS-Code zusammenführen
- Div-Suppe durch semantische Tags ersetzen

### 🔴 Bug - Fehler beheben
**Fokus**: Etwas funktioniert nicht

**Typische Tasks:**
- Kaputte Links reparieren
- CSS-Fehler korrigieren
- Fehlende Bilder ergänzen
- Layout-Probleme fixen

**Beispiele:**
- Navigation auf mobilen Geräten überlappt
- Bild wird nicht angezeigt
- Falscher Link in Footer

## 📝 Issue-Template

### Titel-Format
```
[TYP] Kurze, klare Beschreibung
```

**Beispiele:**
- `[Beginner] Footer-Copyright-Text aktualisieren`
- `[Intermediate] Responsive Navigation implementieren`
- `[Content] Team-Seite erstellen`
- `[Style] Button-Hover-Effekte hinzufügen`

### Issue-Beschreibung

Nutze dieses Template:

```markdown
## Beschreibung
[Was soll gemacht werden? 2-3 Sätze]

## Betroffene Datei(en)
- `pfad/zu/datei.html`
- `pfad/zu/datei.css`

## Aufgabe im Detail
[Schritt-für-Schritt was zu tun ist]

1. ...
2. ...
3. ...

## Acceptance Criteria
[Wann ist die Aufgabe fertig?]

- [ ] Kriterium 1
- [ ] Kriterium 2
- [ ] Im Browser getestet
- [ ] Code ist formatiert

## Hilfreiche Ressourcen
[Optional: Links zu Tutorials, Dokumentation]

- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Difficulty
🟢 Beginner / 🟡 Intermediate
```

## 🏷️ Labels

Nutze diese Labels für jedes Issue:

### Pflicht-Labels
- **Typ**: `beginner`, `intermediate`
- **Kategorie**: `content`, `style`, `refactor`, `bug`
- **Status**: `ready`, `in-progress`, `review`, `blocked`

### Optionale Labels
- `good-first-issue` - Perfekt für Neulinge
- `help-wanted` - Hilfe wird benötigt
- `priority-high` - Dringend
- `duplicate` - Issue existiert bereits
- `enhancement` - Verbesserungsvorschlag

## 📌 Issue-Workflow

### 1. Issue wird erstellt
- Maintainer erstellt Issue mit Template
- Typ und Labels werden gesetzt
- Status: `ready`

### 2. Issue wird geclaimed
- Contributor kommentiert: "Ich übernehme das"
- Maintainer assigned den Contributor
- Status: `in-progress`
- **Zeitlimit**: 7 Tage

### 3. Pull Request wird erstellt
- Contributor erstellt PR
- PR verlinkt das Issue (`Closes #42`)
- Status: `review`

### 4. Review & Merge
- Mindestens 1 Approval nötig
- Maintainer merged den PR
- Issue wird automatisch geschlossen
- Status: `closed`

## ⏱️ Zeitlimits

- **Claiming**: Issue reservieren durch Kommentar
- **Bearbeitungszeit**: Maximal 7 Tage
- **Inaktivität**: Nach 3 Tagen ohne Update → Reminder-Kommentar
- **Reassignment**: Nach 7 Tagen wird Issue wieder freigegeben

**Ausnahme**: Bei Problemen im Issue kommunizieren!

## 🚫 Nicht erlaubt

❌ Mehrere Issues gleichzeitig (für Anfänger)  
❌ Issues ohne Assignment bearbeiten  
❌ PR ohne zugehöriges Issue  
❌ Issues "horten" ohne zu arbeiten  

## ✅ Erlaubt und erwünscht

✅ Fragen im Issue stellen  
✅ Um Hilfe bitten  
✅ Mehr Zeit anfordern (mit Begründung)  
✅ Eigene Issues vorschlagen  
✅ Feedback geben  

## 📊 Issue-Kategorien Übersicht

| Kategorie | Fokus | Dateien | Schwierigkeit |
|-----------|-------|---------|---------------|
| **Content** | HTML, Text, Struktur | `.html` | 🟢 Meist Beginner |
| **Style** | CSS, Design | `.css` | 🟢🟡 Beginner-Intermediate |
| **Refactor** | Code-Qualität | `.html`, `.css` | 🟡 Meist Intermediate |
| **Bug** | Fehler beheben | Variabel | 🟢🟡 Unterschiedlich |

## 💡 Tipps für gute Issues

### Als Maintainer

1. **Sei spezifisch**: Genau beschreiben was zu tun ist
2. **Sei realistisch**: 1-2 Stunden pro Issue
3. **Biete Kontext**: Warum ist das wichtig?
4. **Gib Beispiele**: Screenshots, Code-Snippets
5. **Liste Ressourcen**: Hilfreiche Links

### Als Contributor

1. **Lies das Issue komplett** bevor du es claimst
2. **Frage bei Unklarheiten** bevor du anfängst
3. **Kommuniziere Status** im Issue
4. **Halte dich an Acceptance Criteria**
5. **Teste gründlich** vor dem PR

## 🎓 Gute Issue-Beispiele

### Beispiel 1: Beginner/Content
```markdown
## [Beginner] Footer Copyright-Jahr aktualisieren

### Beschreibung
Das Copyright-Jahr im Footer ist noch auf 2023. Es soll auf 2024 
aktualisiert werden.

### Betroffene Datei
- `index.html` (Zeile ~87)

### Aufgabe
1. Öffne `index.html`
2. Finde den Footer (ca. Zeile 87)
3. Ändere `© 2023` zu `© 2024`

### Acceptance Criteria
- [ ] Jahr ist auf 2024 aktualisiert
- [ ] Keine anderen Änderungen
- [ ] Im Browser getestet

### Difficulty
🟢 Beginner (5-10 Minuten)
```

### Beispiel 2: Intermediate/Style
```markdown
## [Intermediate] Responsive Navigation implementieren

### Beschreibung
Die Navigation soll auf mobilen Geräten (< 768px) untereinander 
statt nebeneinander angezeigt werden.

### Betroffene Datei
- `css/navigation.css`

### Aufgabe
1. Öffne `css/navigation.css`
2. Füge Media Query für max-width 768px hinzu
3. Ändere `.nav-items` von `flex-direction: row` zu `column`
4. Passe Spacing an (gap oder margin)
5. Teste in verschiedenen Bildschirmgrößen

### Acceptance Criteria
- [ ] Navigation ist auf mobilen Geräten vertikal
- [ ] Auf Desktop bleibt Navigation horizontal
- [ ] Spacing sieht gut aus
- [ ] Getestet bei 320px, 768px, 1024px Breite

### Hilfreiche Ressourcen
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)

### Difficulty
🟡 Intermediate (1-2 Stunden)
```

## 🔄 Issue-Review-Prozess

Bevor ein Issue erstellt wird, prüfen:

- [ ] Ist die Aufgabe klar beschrieben?
- [ ] Ist sie in 1-2 Stunden lösbar?
- [ ] Sind Dateien genannt?
- [ ] Sind Acceptance Criteria definiert?
- [ ] Sind Labels gesetzt?
- [ ] Passt es zu den Projekt-Constraints? (HTML/CSS only)
- [ ] Ist es unabhängig von anderen Issues?
- [ ] Ist nur eine Datei betroffen?

---

**Diese Strategie ist ein lebendes Dokument und kann angepasst werden!**
