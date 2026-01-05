# Images Ordner

## Zweck

Dieser Ordner enthält alle Bilder und Grafiken für die Website.

## Regeln

### Dateinamen
- **Kleinbuchstaben**
- **Bindestriche** statt Leerzeichen
- **Beschreibend** und eindeutig
- **Keine Sonderzeichen** (außer Bindestrich)

```
✅ Gut:
- team-meeting-2024.jpg
- logo-transparent.png
- hero-background.jpg
- icon-phone.svg

❌ Schlecht:
- IMG_1234.jpg
- Bild 1.png
- team&office.jpg
- LOGO.PNG
```

### Dateiformate

| Format | Verwendung | Wann nutzen |
|--------|-----------|-------------|
| **JPG/JPEG** | Fotos, komplexe Bilder | Fotos von Menschen, Landschaften |
| **PNG** | Grafiken mit Transparenz | Logos, Icons mit transparentem Hintergrund |
| **SVG** | Vektorgrafiken | Icons, einfache Grafiken (skalieren ohne Qualitätsverlust) |
| **WebP** | Moderne Alternative | Bessere Kompression, nicht in diesem Projekt (zu fortgeschritten) |

### Dateigrößen

**Wichtig**: Große Bilder verlangsamen die Website!

**Richtlinien:**
- **Hero-Bilder**: max. 500 KB
- **Content-Bilder**: max. 200 KB
- **Thumbnails**: max. 50 KB
- **Icons/Logos**: max. 20 KB (oder SVG)

**Tools zur Komprimierung:**
- https://tinypng.com/
- https://squoosh.app/
- https://imageoptim.com/

### Bildgrößen (Dimensionen)

Schneide Bilder auf realistische Größen zu:

- **Hero/Header**: 1920 x 1080 px
- **Content-Bilder**: 1200 x 800 px
- **Thumbnails**: 400 x 300 px
- **Team-Fotos**: 500 x 500 px
- **Icons**: 64 x 64 px (oder SVG)

## Nutzung in HTML

### Basis
```html
<img src="../images/dateiname.jpg" alt="Beschreibender Text">
```

### Mit Bildunterschrift
```html
<figure>
  <img src="../images/team-meeting.jpg" alt="Team bei der Arbeit">
  <figcaption>Unser Team beim Brainstorming</figcaption>
</figure>
```

### Responsive Bilder (Fortgeschritten)
```html
<!-- Verschiedene Größen für verschiedene Bildschirme -->
<img 
  src="../images/hero.jpg" 
  srcset="../images/hero-small.jpg 600w,
          ../images/hero-medium.jpg 1200w,
          ../images/hero-large.jpg 1920w"
  sizes="(max-width: 600px) 600px,
         (max-width: 1200px) 1200px,
         1920px"
  alt="LiveCalls Hauptbild">
```

## 🎨 Alt-Text Regeln

Der `alt` Text ist **Pflicht** und beschreibt das Bild für:
- Screenreader (Barrierefreiheit)
- Suchmaschinen (SEO)
- Fallback wenn Bild nicht lädt

### Gute Alt-Texte

✅ **Beschreibend und informativ:**
```html
<img src="ceo-portrait.jpg" alt="Maria Schmidt, CEO von LiveCalls">
<img src="office.jpg" alt="Modernes Büro mit Glaswänden und Pflanzen">
<img src="product-demo.jpg" alt="Screenshot der LiveCalls App im Videocall">
```

❌ **Zu vage oder unnötig:**
```html
<img src="image1.jpg" alt="Bild">
<img src="photo.jpg" alt="Ein Foto">
<img src="logo.jpg" alt="Logo Logo Logo">
```

## Organisation

### Unterordner (bei vielen Bildern)
```
images/
├── logos/
│   ├── logo-primary.svg
│   └── logo-white.svg
├── team/
│   ├── maria-schmidt.jpg
│   └── john-doe.jpg
├── icons/
│   ├── icon-phone.svg
│   └── icon-email.svg
└── content/
    ├── office-entrance.jpg
    └── meeting-room.jpg
```

## Checkliste vor dem Commit

- [ ] Dateiname ist beschreibend und kleingeschrieben
- [ ] Bild ist komprimiert (richtige Dateigröße)
- [ ] Bild hat realistische Dimensionen
- [ ] Richtiges Format gewählt (JPG/PNG/SVG)
- [ ] Bild wird im Browser korrekt angezeigt
- [ ] Alt-Text ist vorhanden und beschreibend

## Tipps

1. **Lizenzfreie Bilder finden:**
   - https://unsplash.com/
   - https://pexels.com/
   - https://pixabay.com/

2. **Icons finden:**
   - https://heroicons.com/
   - https://feathericons.com/
   - https://icons8.com/

3. **SVG vs PNG für Icons:**
   - SVG: Skaliert perfekt, kleine Dateigröße
   - PNG: Besser für komplexe Grafiken

4. **Browser-DevTools nutzen:**
   - Rechtsklick auf Bild → "Untersuchen"
   - Siehst du die tatsächliche vs. angezeigte Größe

## Copyright & Lizenzen

**Wichtig**: Nutze nur Bilder, die du verwenden darfst!

- Eigene Fotos 
- Lizenzfreie Bilder (Unsplash, Pexels) 
- Bilder mit korrekter Lizenz 
- Google Bilder einfach kopieren 