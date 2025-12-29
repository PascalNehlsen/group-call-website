# Pages Ordner

## Zweck

Dieser Ordner enthält alle HTML-Seiten **außer** der `index.html` (die liegt im Root-Verzeichnis).

## Regeln

### Dateinamen
- Kleinbuchstaben
- Bindestriche statt Leerzeichen
- Endung: `.html`
- Beispiele: `about.html`, `contact.html`, `team-members.html`

### HTML-Struktur

Jede Seite muss diese Grundstruktur haben:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seitentitel - LiveCalls</title>
    
    <!-- Globale Styles zuerst -->
    <link rel="stylesheet" href="../css/main.css">
    
    <!-- Seiten-spezifische Styles danach -->
    <link rel="stylesheet" href="../css/seitenname.css">
</head>
<body>
    <!-- Navigation (sollte auf allen Seiten gleich sein) -->
    <nav>
        <!-- ... -->
    </nav>
    
    <!-- Hauptinhalt -->
    <main>
        <!-- Dein spezifischer Content -->
    </main>
    
    <!-- Footer (sollte auf allen Seiten gleich sein) -->
    <footer>
        <!-- ... -->
    </footer>
</body>
</html>
```

### Wichtige Punkte

1. **Relative Pfade**: Da die Seiten im `/pages` Ordner liegen, nutze `../` für CSS und Bilder
   ```html
   <link rel="stylesheet" href="../css/main.css">
   <img src="../images/logo.png" alt="Logo">
   ```

2. **Semantisches HTML**: Nutze die richtigen Tags
   - `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`
   - `<h1>` nur einmal pro Seite
   - Überschriften hierarchisch: h1 → h2 → h3

3. **Accessibility**
   - Jedes `<img>` braucht ein `alt` Attribut
   - Links brauchen aussagekräftigen Text (nicht "hier klicken")
   - Formulare: `<label>` für jedes Input-Feld

4. **Navigation konsistent halten**
   - Die Navigation sollte auf allen Seiten identisch sein
   - Aktive Seite mit Klasse `active` markieren
   ```html
   <nav>
       <a href="../index.html">Home</a>
       <a href="about.html" class="active">Über uns</a>
       <a href="contact.html">Kontakt</a>
   </nav>
   ```

5. **Einrückung**
   - 2 Spaces pro Ebene (keine Tabs)
   - Konsistente Formatierung

## Checkliste vor dem Commit

- [ ] Seite öffnet sich ohne Fehler im Browser
- [ ] Alle Links funktionieren
- [ ] Alle Bilder werden angezeigt
- [ ] CSS wird korrekt geladen
- [ ] Navigation ist konsistent
- [ ] HTML ist valide (nutze https://validator.w3.org/)
- [ ] Responsive Design funktioniert (teste verschiedene Bildschirmgrößen)

## Tipps

- Kopiere eine bestehende Seite als Template für neue Seiten
- Teste die Links zwischen den Seiten
- Öffne die Seite in verschiedenen Browsern
- Nutze die Browser-DevTools (F12) zum Debuggen
