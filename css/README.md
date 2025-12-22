# CSS Ordner

## 🎨 Zweck

Dieser Ordner enthält alle CSS-Dateien des Projekts.

## 📋 Organisation

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

## 🎯 Regeln

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

2. **Struktur innerhalb der Datei**
   ```css
   /* ==================
      Variablen (optional in main.css)
      ================== */
   
   :root {
       --primary-color: #007bff;
       --text-color: #333;
   }
   
   /* ==================
      Haupt-Styles
      ================== */
   
   .navigation {
       /* ... */
   }
   
   .navigation-item {
       /* ... */
   }
   
   /* ==================
      Media Queries
      ================== */
   
   @media (max-width: 768px) {
       .navigation {
           /* ... */
       }
   }
   ```

3. **Einrückung und Formatierung**
   ```css
   /* 2 Spaces Einrückung */
   .beispiel {
     display: flex;
     flex-direction: column;
     gap: 1rem;
   }
   
   /* Eigenschaften alphabetisch oder nach Gruppen */
   .sortiert {
     /* Positionierung */
     position: relative;
     top: 0;
     
     /* Box Model */
     display: flex;
     width: 100%;
     padding: 1rem;
     margin: 0 auto;
     
     /* Visuelles */
     background-color: white;
     color: black;
     
     /* Text */
     font-size: 1rem;
     text-align: center;
   }
   ```

4. **Mobile First**
   - Basis-Styles für mobile Geräte
   - Media Queries für größere Bildschirme
   ```css
   /* Basis: Mobile */
   .container {
     width: 100%;
     padding: 1rem;
   }
   
   /* Tablet und größer */
   @media (min-width: 768px) {
     .container {
       width: 750px;
       padding: 2rem;
     }
   }
   
   /* Desktop */
   @media (min-width: 1024px) {
     .container {
       width: 960px;
     }
   }
   ```

5. **Kommentare**
   ```css
   /* Für größere Abschnitte */
   /* ==================
      Navigation
      ================== */
   
   /* Für einzelne Erklärungen */
   .navigation {
     /* Flexbox für horizontale Ausrichtung */
     display: flex;
   }
   ```

## 🚫 Was zu vermeiden ist

### ❌ Inline Styles
```html
<!-- NICHT SO -->
<div style="color: red; font-size: 20px;">Text</div>
```

### ❌ !important (außer absolut notwendig)
```css
/* Vermeide */
.text {
  color: red !important;
}
```

### ❌ Zu spezifische Selektoren
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

### ❌ Feste Pixel-Werte für alles
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

## ✅ Best Practices

### 1. CSS Custom Properties nutzen (in main.css)
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --spacing-small: 0.5rem;
  --spacing-medium: 1rem;
  --spacing-large: 2rem;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing-medium);
}
```

### 2. Responsive Units
```css
/* rem für Schriftgrößen */
body {
  font-size: 16px; /* Basis */
}

h1 {
  font-size: 2rem; /* 32px */
}

/* % oder vw/vh für Breiten */
.container {
  width: 90%;
  max-width: 1200px;
}
```

### 3. Flexbox und Grid
```css
/* Flexbox für eindimensionale Layouts */
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Grid für zweidimensionale Layouts */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

### 4. Transitions für sanfte Übergänge
```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: darkblue;
}
```

## ✅ Checkliste vor dem Commit

- [ ] Code ist eingerückt (2 Spaces)
- [ ] Klassennamen sind beschreibend
- [ ] Keine !important verwendet
- [ ] Mobile First beachtet
- [ ] Im Browser getestet (verschiedene Bildschirmgrößen)
- [ ] Kommentare für komplexe Abschnitte
- [ ] CSS validiert (https://jigsaw.w3.org/css-validator/)

## 📏 Breakpoints

Nutze diese Standard-Breakpoints für Konsistenz:

```css
/* Small devices (landscape phones) */
@media (min-width: 576px) { }

/* Medium devices (tablets) */
@media (min-width: 768px) { }

/* Large devices (desktops) */
@media (min-width: 1024px) { }

/* Extra large devices (large desktops) */
@media (min-width: 1200px) { }
```

## 💡 Tipps

- Öffne die Browser DevTools (F12) → Tab "Elements" → Rechts siehst du alle CSS-Regeln
- Teste verschiedene Bildschirmgrößen mit dem Device-Modus in den DevTools
- Nutze `/* TODO: ... */` Kommentare für unfertige Stellen
- Schaue dir CSS von anderen Seiten an (DevTools → Elements → Styles)
