# Copilot Instructions

## Project Overview

This is a **pure HTML/CSS educational project** — a landing page for a fictional "LiveCalls" video conferencing service. It is designed to teach Git workflows, code reviews, and web fundamentals. **No JavaScript (except one inline scroll handler) and no frameworks.**

## Architecture

```
index.html          ← Main entry point
css/
  main.css          ← Global reset, CSS variables, utilities — loaded first on every page
  navigation.css    ← Header & nav
  hero.css          ← Hero section
  features.css      ← Features grid
  cta.css           ← Call-to-action section
  footer.css        ← Footer
pages/              ← Subpages (about.html, contact.html, impressum.html, datenschutz.html)
images/logo/        ← Assets
```

Pages in `pages/` reference assets with `../` relative paths (e.g., `../css/main.css`, `../images/`).

## CSS Conventions

**CSS custom properties** are defined in `:root` in `main.css` — always use them for colors, spacing, and typography:

```css
/* Colors */
--primary-blue: #3498db;
--hero-dark-1: #2c3e50;

/* Spacing */
--spacing-xs: 0.25rem;  --spacing-sm: 0.5rem;
--spacing-md: 1rem;     --spacing-lg: 2rem;  --spacing-xl: 4rem;

/* Typography */
--font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", ...
```

**File naming:** lowercase with hyphens — `navigation.css`, `team-section.css`

**Class naming:** kebab-case — `.feature-card`, `.hero-actions`, `.footer-nav`

**No inline styles. No `!important`. Use relative units (rem, em, %).**

### Section pattern
```html
<section class="section-name">
  <div class="container">
    <h2>Title</h2>
    <!-- content -->
  </div>
</section>
```

### Button variants
```html
<a class="btn primary">Primary CTA</a>
<a class="btn ghost">Secondary</a>
```

### Responsive breakpoints
```css
@media (max-width: 1024px) { /* desktop → tablet */ }
@media (max-width: 768px)  { /* tablet */ }
@media (max-width: 480px)  { /* small tablet */ }
@media (max-width: 430px)  { /* mobile */ }
```

## HTML Conventions

- **2-space indentation**
- `<html lang="de">` — content is German
- Semantic elements: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`
- Single `<h1>` per page, strict heading hierarchy
- Every image requires an `alt` attribute; decorative elements get `aria-hidden="true"`
- Include a skip-link: `<a class="skip-link" href="#main-content">Zum Inhalt springen</a>`
- CSS load order in `<head>`: `main.css` first, then component stylesheets

## Image Guidelines

- Filename format: `lowercase-with-hyphens.jpg`
- Max sizes: hero ≤ 500 KB, content ≤ 200 KB, icons/logos ≤ 20 KB (prefer SVG)
- Preferred formats: JPG for photos, PNG for graphics, SVG for icons

## Git & Contribution Workflow

Commit message format:
```
type: Short description (max 50 chars)

- Detail point 1
- Detail point 2

Closes #IssueNumber
```

Types: `feat`, `fix`, `style`, `refactor`, `docs`

One person per file to avoid merge conflicts. One issue → one PR.
