# CSS Ordner

## Zweck

Dieser Ordner enthält alle CSS-Dateien des Projekts.

## Organisation

### Datei-Typen

1. **main.css** - Globale Styles
   - Wird auf **jeder** Seite eingebunden
   - Enthält: Reset, Variablen, Typography, Layout-Grundlagen
   - Wird als erstes eingebunden

2. **Komponenten-CSS** - Wiederverwendbare Elemente
   - `navigation.css` - Navigation Styling
   - `footer.css` - Footer Styling
   - `buttons.css` - Button Styles
   - Werden auf allen Seiten eingebunden, die sie nutzen

3. **Seiten-spezifisches CSS**
   - `about.css` - Nur für about.html
   - `contact.css` - Nur für contact.html
   - Wird als letztes eingebunden

### Einbindungs-Reihenfolge

```html
<!-- 1. Globale Styles -->
<link rel="stylesheet" href="../css/main.css">

<!-- 2. Komponenten (falls benötigt) -->
<link rel="stylesheet" href="../css/navigation.css">
<link rel="stylesheet" href="../css/footer.css">

<!-- 3. Seiten-spezifisch -->
<link rel="stylesheet" href="../css/about.css">
```

## Regeln

### Dateinamen
- Kleinbuchstaben
- Bindestriche statt Leerzeichen
- Endung: `.css`
- Beispiele: `main.css`, `navigation.css`, `team-section.css`

### CSS-Konventionen

1. **Klassennamen**
   - Kleinbuchstaben mit Bindestrichen
   - Beschreibend und semantisch
   - Deutsch oder Englisch (konsistent bleiben)
   ```css
   /* Gut */
   .navigation-item { }
   .hero-section { }
   .contact-form { }
   
   /* Schlecht */
   .navItem { }
   .div1 { }
   .red-text { }
   ```

## Was zu vermeiden ist

### Inline Styles
```html
<!-- NICHT SO -->
<div style="color: red; font-size: 20px;">Text</div>
```

### !important (außer absolut notwendig)
```css
/* Vermeide */
.text {
  color: red !important;
}
```

### Zu spezifische Selektoren
```css
/* Schlecht - zu spezifisch */
body div.container section.content article.post p.text {
  color: black;
}

/* Besser */
.post-text {
  color: black;
}
```

### Feste Pixel-Werte für alles
```css
/* Unflexibel */
.box {
  width: 350px;
  height: 200px;
  font-size: 16px;
}

/* Besser - flexibel */
.box {
  width: 100%;
  max-width: 350px;
  font-size: 1rem;
}
```

## Checkliste vor dem Commit

- [ ] Code ist eingerückt (2 Spaces)
- [ ] Klassennamen sind beschreibend
- [ ] Keine !important verwendet
- [ ] Im Browser getestet (verschiedene Bildschirmgrößen)
- [ ] Kommentare für komplexe Abschnitte
- [ ] CSS validiert (https://jigsaw.w3.org/css-validator/)

## Tipps

- Öffne die Browser DevTools (F12) → Tab "Elements" → Rechts siehst du alle CSS-Regeln
- Teste verschiedene Bildschirmgrößen mit dem Device-Modus in den DevTools
- Nutze `/* TODO: ... */` Kommentare für unfertige Stellen
- Schaue dir CSS von anderen Seiten an (DevTools → Elements → Styles)
