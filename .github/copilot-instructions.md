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

## Creating GitHub Issues for This Project

When creating issues for students, use the `gh` CLI or GitHub API via `curl` / Python's `urllib`. The repo is `PascalNehlsen/group-call-website`.

### How to identify good issues

Before writing issues, analyse the codebase across these categories:

1. **Broken links** — check all `href` values in `index.html` and `pages/` against actually existing files
2. **Duplicate CSS** — compare rules across all CSS files (a rule defined in two files is always a bug)
3. **Hardcoded values** — find hex colors or px values that should use the CSS variables from `main.css`
4. **Fixed dimensions** — `height: Npx` on sections is almost always a responsive bug; prefer `padding`
5. **Missing accessibility** — check for `:focus-visible` on every interactive element (links, buttons)
6. **Inconsistencies** — mixed `./css/` vs `css/` paths, inconsistent hover/focus behaviour across components
7. **Missing pages** — grep all `href` values and verify the target file exists

### Issue format (matches existing ISSUE_TEMPLATE)

Use the correct label:
- `bug` — something is broken or incorrect
- `enhancement` — something missing or improvable
- `good first issue` — suitable for absolute beginners (single file, < 1 hour)

Each issue body must follow this structure (mirrors `.github/ISSUE_TEMPLATE/`):

```markdown
## Beschreibung / Problem
2–3 sentences explaining the issue clearly.

## Betroffene Datei(en)
- `css/example.css`

## Aufgabe im Detail
1. Concrete step
2. Concrete step (include code snippets where helpful)

## Acceptance Criteria
- [ ] Specific, testable criterion
- [ ] Im Browser getestet
- [ ] CSS/HTML validiert

## Hilfreiche Ressourcen
- [Link text](URL)

## Difficulty
🟢 Beginner / 🟡 Intermediate
```

### Creating issues via Python + GitHub API

```python
import json, urllib.request, time

TOKEN = "ghp_..."  # Personal Access Token with repo scope
REPO  = "PascalNehlsen/group-call-website"
API   = f"https://api.github.com/repos/{REPO}/issues"

def create_issue(title, body, labels):
    data = json.dumps({"title": title, "body": body, "labels": labels}).encode()
    req  = urllib.request.Request(API, data=data, method="POST")
    req.add_header("Authorization", f"token {TOKEN}")
    req.add_header("Content-Type", "application/json")
    with urllib.request.urlopen(req) as resp:
        r = json.loads(resp.read())
        print(f"#{r['number']} {r['title']}")
    time.sleep(0.5)  # avoid rate limiting
```

### Existing labels
`bug`, `enhancement`, `good first issue`, `documentation`, `duplicate`, `help wanted`, `invalid`, `question`, `wontfix`
