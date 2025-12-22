# Beispiel-Issues

Reihenfolge zum Abarbeiten (1 → 10). Jede Aufgabe betrifft **genau eine Datei**. Falls die Datei noch nicht existiert, wird sie in der Aufgabe klar genannt (neu erstellen).

---

## Issue #1: Navigation – Mobiles Layout

**Typ**: Style  
**Difficulty**: 🟢 Beginner  
**Zeit**: 1–1.5 Stunden

### Beschreibung
Navigation soll auf Mobile untereinander, auf Desktop nebeneinander laufen.

### Datei
- `css/navigation.css` (neu erstellen)

### Aufgabe
1. Erstelle `css/navigation.css`
2. Desktop: `.navigation` mit Flexbox (Logo links, Menü rechts)
3. Mobile (max-width: 768px): Menü vertikal, zentriert, genug Abstand
4. Grund-Spacing für das Nav-Element (Padding oben/unten)

### Acceptance Criteria
- [ ] Navigation Desktop: horizontal
- [ ] Navigation Mobile (<768px): vertikal
- [ ] Spacing konsistent
- [ ] Getestet bei 320px, 768px, 1024px
- [ ] CSS validiert

---

## Issue #2: Navigation – Aktiver Link & Fokus-Stil

**Typ**: Style  
**Difficulty**: 🟢 Beginner  
**Zeit**: 1 Stunde

### Beschreibung
Aktiver Menüpunkt und Tastatur-Fokus sollen klar sichtbar sein.

### Datei
- `css/navigation.css` (gleiche Datei wie Issue #1)

### Aufgabe
1. Style `.nav-menu a` (Basis, Hover, Fokus)
2. Hebe `.active` sichtbar hervor (Farbe oder Hintergrund)
3. Fokus-Ring (outline/box-shadow) für Tastatur-Navigation

### Acceptance Criteria
- [ ] Aktiver Link klar erkennbar
- [ ] Fokus per Tab sichtbar
- [ ] Hover ändert Farbe/Hintergrund
- [ ] Kontrast ausreichend (mind. WCAG AA)
- [ ] CSS validiert

---

## Issue #3: Hero – Visuelles Styling

**Typ**: Style  
**Difficulty**: 🟡 Intermediate  
**Zeit**: 1.5 Stunden

### Beschreibung
Hero-Section soll Layout, Abstände und dezenten Hintergrund bekommen.

### Datei
- `css/hero.css` (neu erstellen)

### Aufgabe
1. Zentriere Inhalt (max-width, margin auto)
2. Großzügiges Padding oben/unten
3. Hintergrundfarbe oder subtiler Verlauf
4. `.hero-points` als Liste mit sauberen Bullets/Spacing
5. Schriftgrößen responsive anpassen (kleiner <768px)

### Acceptance Criteria
- [ ] Inhalt zentriert und luftig
- [ ] Liste hat klares Spacing
- [ ] Typografie skaliert für Mobile
- [ ] Hintergrund bleibt gut lesbar
- [ ] CSS validiert

---

## Issue #4: Hero – Inhalt verfeinern

**Typ**: Content  
**Difficulty**: 🟢 Beginner  
**Zeit**: 45–60 Minuten

### Beschreibung
Formuliere Hero-Texte prägnant und prüfe die Links.

### Datei
- `index.html`

### Aufgabe
1. Überschrift + Lead maximal 2 Sätze, klarer Nutzen
2. Drei Listenpunkte kurz, ergebnisorientiert
3. Buttons: sinnvolle CTA-Texte, Links auf `pages/contact.html` und `pages/about.html`

### Acceptance Criteria
- [ ] Überschrift/Lead prägnant
- [ ] Drei Punkte, je ein Satz
- [ ] CTA-Texte klar, Links korrekt
- [ ] Keine weiteren Strukturen geändert
- [ ] HTML validiert

---

## Issue #5: Feature-Cards Styling

**Typ**: Style  
**Difficulty**: 🟡 Intermediate  
**Zeit**: 1–1.5 Stunden

### Beschreibung
Die drei Feature-Karten sollen als responsives Grid erscheinen.

### Datei
- `css/features.css` (neu erstellen)

### Aufgabe
1. `.feature-grid` als Grid: 1 Spalte Mobile, 2 Spalten ab 768px, 3 ab 1024px
2. `.feature-card` mit Hintergrund/Rahmen oder Schatten, Padding, Abstand
3. Konsistentes Spacing für h3 und p
4. Dezenter Hover-Effekt (Schatten/Bewegung)

### Acceptance Criteria
- [ ] Grid bricht wie beschrieben
- [ ] Karten haben sauberes Padding/Gap
- [ ] Hover dezent und performant
- [ ] Text gut lesbar (Kontrast)
- [ ] CSS validiert

---

## Issue #6: CTA-Sektion hervorheben

**Typ**: Style  
**Difficulty**: 🟢 Beginner  
**Zeit**: 1 Stunde

### Beschreibung
CTA-Sektion soll als klarer Abschlussblock wirken.

### Datei
- `css/cta.css` (neu erstellen)

### Aufgabe
1. Inhalt zentrieren, Breite begrenzen
2. Hintergrundfarbe oder leichter Verlauf
3. Abstände für h2/p setzen
4. CTA-Button mit Klasse `btn primary` stylen (darf buttons.css nutzen)

### Acceptance Criteria
- [ ] CTA sticht visuell hervor
- [ ] Text und Button zentriert
- [ ] Genug Innenabstand oben/unten
- [ ] Mobile/Desktop geprüft
- [ ] CSS validiert

---

## Issue #7: Footer Layout & Spacing

**Typ**: Style  
**Difficulty**: 🟢 Beginner  
**Zeit**: 1 Stunde

### Beschreibung
Footer braucht dunklen Hintergrund, sauberes Spacing und lesbare Links.

### Datei
- `css/footer.css` (neu erstellen)

### Aufgabe
1. Dunkler Hintergrund, heller Text
2. Inhalte mittig, Breite begrenzen
3. Links nebeneinander mit Abstand (Flex/Gap)
4. Hover/Fokus für Links

### Acceptance Criteria
- [ ] Hintergrund dunkel, Text hell
- [ ] Links horizontal mit Abstand (Stack bei <480px ok)
- [ ] Hover/Fokus sichtbar
- [ ] CSS validiert

---

## Issue #8: Typografie & Basis-Spacings

**Typ**: Style  
**Difficulty**: 🟡 Intermediate  
**Zeit**: 1 Stunde

### Beschreibung
`css/main.css` feinjustieren: Typografie und Grund-Abstände.

### Datei
- `css/main.css`

### Aufgabe
1. Zeilenhöhe und Paragraphen-Abstände setzen
2. h1–h3 Abstände vereinheitlichen
3. Utility `.section-padding` o. ä. ergänzen (kommentieren)
4. Container-Padding für große/kleine Screens anpassen

### Acceptance Criteria
- [ ] Überschriften/Fließtext konsistente Abstände
- [ ] Container wirkt ausgeglichen Mobile/Desktop
- [ ] Utility-Klasse dokumentiert
- [ ] CSS validiert

---

## Issue #9: Buttons vereinheitlichen

**Typ**: Style  
**Difficulty**: 🟢 Beginner  
**Zeit**: 1 Stunde

### Beschreibung
Zentrales Button-Stylesheet für konsistente Buttons.

### Datei
- `css/buttons.css` (neu erstellen)

### Aufgabe
1. `.btn` Basis (Padding, Radius, Font, Cursor)
2. `.btn.primary` (Hintergrund, Hover, Fokus)
3. `.btn.ghost` (Transparenter Hintergrund, Rahmen, Hover)
4. Transition für Hover/Fokus

### Acceptance Criteria
- [ ] `.btn`, `.btn.primary`, `.btn.ghost` existieren
- [ ] Hover/Fokus klar sichtbar
- [ ] Kontraste ausreichend
- [ ] Buttons in Hero/CTA wirken einheitlich
- [ ] CSS validiert

---

## Issue #10: FAQ-Abschnitt hinzufügen

**Typ**: Content  
**Difficulty**: 🟢 Beginner  
**Zeit**: 45–60 Minuten

### Beschreibung
FAQ-Block unter den Features ergänzen.

### Datei
- `index.html`

### Aufgabe
1. Unter den Features `<section class="faq">` einfügen
2. Überschrift `Häufige Fragen`
3. Mind. 3 Fragen + kurze Antworten (z. B. `<article>` oder `<details>`)
4. Semantisches HTML, keine zusätzlichen Klassen nötig

### Acceptance Criteria
- [ ] Abschnitt steht unter Features, über CTA
- [ ] Mind. 3 Q&A-Paare
- [ ] Semantisch sauber (h2/h3+p oder details/summary)
- [ ] Keine anderen Bereiche geändert
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
