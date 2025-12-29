# Beispiel-Issues

Aktuelle Beispiel-Issues (10 Stück) passend zur neuen Struktur der `index.html`. Jede Aufgabe ist auf **eine Datei** begrenzt und in 1–2 Stunden machbar.

---

## Issue #6: CTA-Sektion hervorheben

**Typ**: Style  
**Difficulty**: 🟢 Beginner  
**Zeit**: 1 Stunde

### Beschreibung
Die CTA-Sektion soll als klarer Abschlussblock wirken.

### Datei
- `css/cta.css` (neu erstellen)

### Aufgabe
1. Zentriere Inhalt und begrenze Breite
2. Füge Hintergrundfarbe oder leichten Verlauf hinzu
3. Gib der Überschrift/P dem richtigen Abstand
4. Style den CTA-Button (nutze Klasse `btn primary` – Zusammenarbeit mit buttons.css ok)

### Acceptance Criteria
- [ ] CTA sticht visuell hervor
- [ ] Text und Button sind zentriert
- [ ] Genug Innenabstand oben/unten
- [ ] Funktioniert auf Mobile/Desktop
- [ ] CSS validiert

---

## Issue #7: Footer Layout & Spacing

**Typ**: Style  
**Difficulty**: 🟢 Beginner  
**Zeit**: 1 Stunde

### Beschreibung
Footer soll einen dunklen Hintergrund, sauberes Spacing und gut lesbare Links haben.

### Datei
- `css/footer.css` (neu erstellen)

### Aufgabe
1. Setze dunklen Hintergrund, hellen Text
2. Richte Inhalte mittig aus, begrenze Breite
3. Footer-Links nebeneinander mit Abstand (Flex oder Gap)
4. Hover/Fokus-Stil für Links

### Acceptance Criteria
- [ ] Hintergrund dunkel, Text hell
- [ ] Links horizontal angeordnet mit Abstand
- [ ] Hover/Fokus klar sichtbar
- [ ] Responsive (Stack bei <480px erlaubt)
- [ ] CSS validiert

---

## Issue #8: Typografie & Basis-Spacings

**Typ**: Style  
**Difficulty**: 🟡 Intermediate  
**Zeit**: 1 Stunde

### Beschreibung
`css/main.css` soll um Typografie-Feinschliff und Grund-Spacings ergänzt werden.

### Datei
- `css/main.css`

### Aufgabe
1. Setze Grundzeilenhöhe (line-height) und Paragraphen-Abstände neu
2. Definiere Abstände für h1–h3 (margin-bottom konsistent)
3. Ergänze Basis-Spacing-Utilities (z. B. `.section-padding` für Sektionen)
4. Passe Container-Width/Side-Padding bei großen und kleinen Screens an

### Acceptance Criteria
- [ ] Überschriften/Fließtext haben konsistente Abstände
- [ ] Container wirkt ausgeglichen auf Mobile/Desktop
- [ ] Neue Utility-Klasse dokumentiert als Kommentar
- [ ] CSS validiert

---

## Issue #9: Buttons vereinheitlichen

**Typ**: Style  
**Difficulty**: 🟢 Beginner  
**Zeit**: 1 Stunde

### Beschreibung
Ein zentrales Button-Stylesheet soll alle Buttons konsistent machen.

### Datei
- `css/buttons.css` (neu erstellen)

### Aufgabe
1. Definiere `.btn` Basis (Padding, Border-Radius, Font, Cursor)
2. Variante `.primary` (Hintergrund, Hover, Fokus)
3. Variante `.ghost` (Transparenter Hintergrund, Rahmen, Hover)
4. Transition für Hover/Fokus

### Acceptance Criteria
- [ ] `.btn`, `.btn.primary`, `.btn.ghost` existieren
- [ ] Hover/Fokus klar sichtbar
- [ ] Kontraste ausreichend
- [ ] Buttons in Hero/CTA sehen einheitlich aus
- [ ] CSS validiert

---

## Issue #10: FAQ-Abschnitt hinzufügen

**Typ**: Content  
**Difficulty**: 🟢 Beginner  
**Zeit**: 45–60 Minuten

### Beschreibung
Füge unterhalb der Feature-Sektion einen kleinen FAQ-Block ein.

### Datei
- `index.html`

### Aufgabe
1. Nach der Feature-Sektion einen `<section class="faq">` einfügen
2. Überschrift `Häufige Fragen`
3. Mindestens 3 Fragen mit kurzen Antworten (z. B. in `<article>` oder `<details>`)
4. Verwende semantisches HTML, keine zusätzlichen Klassen nötig

### Acceptance Criteria
- [ ] Abschnitt steht unter den Features, über der CTA
- [ ] Mindestens 3 Q&A-Paare vorhanden
- [ ] Semantisch sauber (z. B. h2/h3 + p oder details/summary)
- [ ] Keine weiteren Bereiche verändert
- [ ] HTML validiert

---

## Zusammenfassung

**Beginner**: #1, #2, #4, #6, #7, #9, #10 (7 Issues)  
**Intermediate**: #3, #5, #8 (3 Issues)  

Alle Issues sind:
- ✅ In 1–2 Stunden lösbar
- ✅ Auf eine Datei begrenzt
- ✅ Klar beschrieben mit Acceptance Criteria
- ✅ Unabhängig voneinander
