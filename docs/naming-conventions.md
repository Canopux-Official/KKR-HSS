# Naming Conventions

## Philosophy

Consistent naming creates predictability. A developer should know where to find any file and what it contains from its name alone.

---

## Files & Folders

### Case Convention

| Context | Convention | Example |
|---------|-----------|---------|
| React components | PascalCase | `Button.tsx`, `SectionHeader.tsx` |
| Utilities / hooks | camelCase | `utils.ts`, `useReducedMotion.ts` |
| Types | camelCase or PascalCase | `design-tokens.ts` |
| CSS files | kebab-case | `tokens.css`, `globals.css` |
| Documentation | kebab-case | `color-system.md` |
| Config files | kebab-case or standard | `tailwind.config.ts` |
| Folders | kebab-case | `components/`, `design-tokens/` |
| Public assets | kebab-case | `main-building.jpg` |

### Component Files
```
src/components/ui/Button.tsx          # Simple component
src/components/ui/Button/
├── Button.tsx                        # Complex component with folder
├── Button.types.ts
└── index.ts
```

### Page Files (App Router)
```
src/app/about/page.tsx
src/app/about/our-story/page.tsx
src/app/academics/curriculum/page.tsx
```

---

## React Components

### Component Names
```typescript
// PascalCase, descriptive, noun-based
export function Button() {}
export function SectionHeader() {}
export function MobileMenu() {}
export function PullQuote() {}
```

### Props Interfaces
```typescript
// ComponentName + Props
interface ButtonProps {}
interface SectionHeaderProps {}
interface MobileMenuProps {}
```

### Event Handlers
```typescript
// handle + EventDescription
const handleMenuToggle = () => {};
const handleSubmit = () => {};
const handleKeyDown = () => {};
```

---

## CSS & Tailwind

### Custom Properties
```css
/* --category-name-variant */
--color-maroon
--color-maroon-light
--text-display-xl
--space-8
--grid-gutter
--duration-normal
--ease-editorial
```

### Utility Classes (globals.css)
```css
/* Descriptive, prefixed with purpose */
.container-editorial
.grid-editorial
.prose-editorial
.prose-editorial-wide
.skip-link
```

### Tailwind Extensions
```typescript
// Match token names in tailwind.config.ts
colors: { maroon: { DEFAULT: "var(--color-maroon)" } }
fontSize: { "display-xl": [...] }
spacing: { "8": "var(--space-8)" }
```

---

## TypeScript

### Types & Interfaces
```typescript
// PascalCase for types
type ColorToken = "maroon" | "gold" | ...;
type TypographyScale = "display-xl" | "heading-lg" | ...;
interface BreakpointConfig { ... }

// camelCase for constants
const BREAKPOINTS: Record<Breakpoint, BreakpointConfig> = {};
const SPACING_SCALE: Record<SpacingToken, string> = {};
```

### Enums
Avoid TypeScript enums — use union types or `as const` objects:
```typescript
// Preferred
const VARIANTS = ["primary", "secondary", "text"] as const;
type Variant = (typeof VARIANTS)[number];
```

---

## Images & Assets

### Image Files
```
[category]-[description]-[variant].[ext]

campus-main-building-exterior.jpg
academics-science-lab-students.jpg
events-annual-day-2025-stage.jpg
portrait-principal-formal.jpg
brand-logo.svg
brand-logo-reversed.svg
og-default.jpg
```

### Rules
- All lowercase
- Hyphen-separated
- No spaces or underscores
- No version numbers in filename (use git for versioning)
- Descriptive but concise (max 4 segments)

---

## Routes & URLs

```
/                           # Homepage
/about                      # About section
/about/our-story            # Sub-page
/academics
/academics/curriculum
/admissions
/admissions/how-to-apply
/campus-life
/campus-life/facilities
/news
/news/[slug]                # Dynamic news article
/contact
```

### Rules
- All lowercase
- Hyphen-separated (not camelCase or underscores)
- Max 3 levels deep
- No trailing slashes
- Semantic, readable URLs

---

## Git

### Branches
```
feature/component-button
feature/page-about
fix/navigation-focus-trap
docs/accessibility-update
```

### Commits
```
feat: add SectionHeader component
fix: correct mobile menu focus trap
docs: update typography scale
refactor: extract motion presets
style: adjust section padding tokens
```

Types: `feat`, `fix`, `docs`, `refactor`, `style`, `test`, `chore`

---

## Variables & Functions

```typescript
// camelCase for variables and functions
const isMenuOpen = false;
const primaryNavigation = [...];

function formatInstitutionName(): string {}
function prefersReducedMotion(): boolean {}
function cn(...inputs: ClassValue[]): string {}
```

### Boolean Variables
```typescript
// is/has/should prefix
const isOpen = true;
const hasError = false;
const shouldAnimate = !reducedMotion;
```

### Constants
```typescript
// SCREAMING_SNAKE_CASE for true constants
const MAX_PROSE_WIDTH = "42rem";
const ADMISSION_DEADLINE = new Date("2026-03-31");

// camelCase for configuration objects
const breakpoints = { ... };
const motionPresets = { ... };
```

---

## Documentation

```
docs/
├── FOUNDATION.md              # UPPERCASE for index/entry points
├── architecture.md            # kebab-case for all others
├── color-system.md
├── typography-system.md
└── ...
```

---

*Consistent naming is enforced through code review and ESLint configuration.*
