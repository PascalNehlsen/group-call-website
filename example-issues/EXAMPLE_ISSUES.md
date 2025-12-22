# Beispiel-Issues

Aktuelle Beispiel-Issues (10 Stück) passend zur neuen Struktur der `index.html`. Jede Aufgabe ist auf **eine Datei** begrenzt und in 1–2 Stunden machbar.

---

## Issue #1: Navigation – Mobiles Layout

**Typ**: Style  
**Difficulty**: 🟢 Beginner  
**Zeit**: 1–1.5 Stunden

### Beschreibung
Die Navigation soll auf mobilen Geräten untereinander statt nebeneinander angezeigt werden.

### Datei
- `css/navigation.css` (neu erstellen)

### Aufgabe
1. Erstelle `css/navigation.css`
2. Desktop: `.navigation` mit Flexbox (Logo links, Menu rechts)
3. Mobile (max-width: 768px): Menü vertikal, zentriert, genug Abstand zwischen Links
4. Setze Grund-Spacing (Padding) für das Nav-Element

### Acceptance Criteria
- [ ] Navigation ist auf Desktop horizontal
- [ ] Navigation ist auf Mobile (<768px) vertikal
- [ ] Spacing ist konsistent (oben/unten, zwischen Links)
- [ ] Getestet bei 320px, 768px, 1024px
- [ ] CSS validiert

---

## Issue #2: Navigation – Aktiver Link & Fokus-Stil

**Typ**: Style  
**Difficulty**: 🟢 Beginner  
**Zeit**: 1 Stunde

### Beschreibung
Der aktive Menüpunkt und fokussierte Links sollen klar hervorgehoben werden.

### Datei
- `css/navigation.css` (selbe Datei wie Issue #1)

### Aufgabe
1. Style `.nav-menu a` (Grundzustand, Hover, Fokus)
2. Hebe `.active` mit Hintergrund/Farbe hervor
3. Füge sichtbaren Fokus-Ring (outline/box-shadow) hinzu

### Acceptance Criteria
- [ ] Aktiver Link klar erkennbar
- [ ] Fokus-Stil sichtbar per Tastatur (Tab)
- [ ] Hover ändert Farbe oder Hintergrund
- [ ] Kontrast ist ausreichend (mind. WCAG AA)
- [ ] CSS validiert

---

## Issue #3: Hero – Visuelles Styling

**Typ**: Style  
**Difficulty**: 🟡 Intermediate  
**Zeit**: 1.5 Stunden

### Beschreibung
Die Hero-Section braucht Layout, Abstände und einen leichten Hintergrund.

### Datei
- `css/hero.css` (neu erstellen)

### Aufgabe
1. Zentriere Inhalt (max-width, margin auto)
2. Füge großzügiges Padding hinzu (oben/unten)
3. Setze Hintergrundfarbe oder subtilen Verlauf
4. Style `.hero-points` als Liste mit Icons/Bullets und sauberem Spacing
5. Passe Schriftgrößen für Desktop/Mobile an

### Acceptance Criteria
- [ ] Inhalt ist zentriert und luftig
- [ ] Liste hat klares Spacing und Bullet-Style
- [ ] Responsive Typografie (kleinere Größen <768px)
- [ ] Hintergrund wirkt ruhig und lesbar
- [ ] CSS validiert

---

## Issue #4: Hero – Inhalt verfeinern

**Typ**: Content  
**Difficulty**: 🟢 Beginner  
**Zeit**: 45–60 Minuten

### Beschreibung
Feinschliff am Hero-Text: klarer Nutzen, prägnante Formulierungen, Buttons prüfen.

### Datei
- `index.html`

### Aufgabe
1. Überarbeite Überschrift und Lead-Text (max. 2 Sätze, klarer Nutzen)
2. Optimiere die drei Listenpunkte (kurz, ergebnisorientiert)
3. Stelle sicher, dass die beiden Buttons sinnvolle Texte haben
4. Prüfe, dass Links auf `pages/contact.html` und `pages/about.html` zeigen

### Acceptance Criteria
- [ ] Überschrift & Lead sind prägnant und fehlerfrei
- [ ] Drei Listenpunkte, jeweils ein Satz
- [ ] Buttons haben klare Call-to-Action-Texte
- [ ] Keine weiteren HTML-Strukturen verändert
- [ ] HTML validiert

---

## Issue #5: Feature-Cards Styling

**Typ**: Style  
**Difficulty**: 🟡 Intermediate  
**Zeit**: 1–1.5 Stunden

### Beschreibung
Die drei Feature-Karten sollen als responsives Grid dargestellt werden.

### Datei
- `css/features.css` (neu erstellen)

### Aufgabe
1. Erzeuge ein Grid `.feature-grid` mit 1 Spalte auf Mobile, 3 Spalten ab 1024px
2. Style `.feature-card` mit Hintergrund, Rahmen oder Schatten und Innenabstand
3. Setze ein konsistentes Spacing für Titel/Paragraphen
4. Füge sanften Hover-Effekt hinzu (z. B. Schatten oder leichte Bewegung)

### Acceptance Criteria
- [ ] 1 Spalte auf Mobile, 2 Spalten ab 768px, 3 Spalten ab 1024px
- [ ] Karten haben sauberes Padding und Abstand zueinander
- [ ] Hover-Effekt ist dezent und performant
- [ ] Text bleibt gut lesbar (Kontrast)
- [ ] CSS validiert

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
