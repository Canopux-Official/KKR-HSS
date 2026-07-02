# Image Usage Guidelines

## Philosophy

Photography is the primary visual language. Real images of KKR's campus, students, faculty, and community replace all decorative graphics. Every image must be authentic, dignified, and purposefully composed.

**Rule:** No stock photography. Ever.

---

## Image Categories

| Category | Use | Treatment |
|----------|-----|-----------|
| Hero | Page headers, homepage | Full-bleed, high quality, natural light |
| Editorial | Inline with text | Contained, captioned, aspect-ratio locked |
| Portrait | Faculty, leadership, student stories | 3:4 ratio, dignified framing |
| Campus | Facilities, grounds, buildings | Wide format, architectural |
| Event | Ceremonies, activities, gatherings | Documentary style, candid |
| Detail | Textures, objects, academic materials | Close-up, editorial crop |

---

## Photography Standards

### Quality
- Minimum resolution: 2400px on longest edge (hero images)
- Format: JPEG for photos, PNG for graphics with transparency
- Optimization: WebP/AVIF via `next/image`
- Color: Natural, not over-saturated or filtered

### Composition
- Natural light preferred
- Clean backgrounds (not cluttered)
- Dignified student portrayals (not staged "stock" poses)
- Faculty photographed professionally
- Campus shots during golden hour when possible

### What to Avoid
- Stock photography (Shutterstock, Unsplash, etc.)
- Heavily filtered or Instagram-style images
- Low-resolution or blurry images
- Images with visible watermarks
- Group photos where individuals are unrecognizable
- Images that misrepresent the school

---

## Technical Implementation

### Next.js Image Component
```tsx
import Image from "next/image";

<Image
  src="/images/campus/main-building.jpg"
  alt="KKR Women's Higher Secondary School main building, Bhadrak"
  width={1200}
  height={800}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
  quality={85}
  className="object-cover"
  priority={isAboveFold}
/>
```

### Aspect Ratios

| Context | Ratio | CSS |
|---------|-------|-----|
| Hero | 16:9 or 3:2 | `aspect-video` or `aspect-[3/2]` |
| Editorial inline | 4:3 | `aspect-[4/3]` |
| Portrait | 3:4 | `aspect-[3/4]` |
| Wide campus | 2:1 | `aspect-[2/1]` |

### Loading Strategy
- Above-fold images: `priority={true}`
- Below-fold images: lazy loaded (default)
- Always specify `width` and `height` or use `fill` with aspect-ratio container
- Blur placeholder for large images: `placeholder="blur"`

---

## Alt Text Standards

Descriptive, contextual alt text for every image:

```
Good: "Students in the science laboratory during a chemistry practical session"
Bad:  "Students in lab"
Bad:  "Image 1"
Bad:  "" (empty, unless purely decorative)
```

### Decorative Images
If an image is purely decorative (rare), use empty alt:
```html
<img alt="" role="presentation" />
```

---

## Image Layouts

### Full-Bleed Hero
```
┌────────────────────────────────────────────┐
│                                            │
│           [Full-width photograph]          │
│                                            │
│  ┌──────────────────────┐                │
│  │ Page title overlay     │                │
│  └──────────────────────┘                │
└────────────────────────────────────────────┘
```
- Used sparingly: homepage, major landing pages
- Text overlay requires sufficient contrast (gradient scrim if needed)
- Scrim: `bg-gradient-to-t from-charcoal/60 to-transparent`

### Editorial Inline
```
┌──────────────────┬──────────────────┐
│                  │                  │
│   Text content   │   [Photograph]   │
│                  │   Caption below  │
│                  │                  │
└──────────────────┴──────────────────┘
```
- Image with caption (Figure component)
- Caption: `caption` typography, `stone` color

### Gallery Grid
```
┌────────┬────────┬────────┐
│        │        │        │
│  img   │  img   │  img   │
│        │        │        │
├────────┼────────┼────────┤
│        │        │        │
│  img   │  img   │  img   │
│        │        │        │
└────────┴────────┴────────┘
```
- 2 columns (mobile) → 3 columns (desktop)
- Consistent aspect ratio within gallery
- Lightbox on click (Phase 3)

---

## Image Hover Treatment

Subtle opacity reduction only:
```css
img:hover {
  opacity: 0.92;
  transition: opacity 150ms var(--ease-editorial);
}
```

No zoom, scale, or overlay effects.

---

## File Organization

```
public/images/
├── brand/
│   ├── logo.svg
│   ├── logo-reversed.svg
│   └── favicon.ico
├── campus/
│   ├── main-building.jpg
│   └── ...
├── academics/
│   └── ...
├── events/
│   └── ...
└── og/
    ├── default.jpg (Open Graph default)
    └── ...
```

### Naming Convention
```
[category]-[description]-[variant].jpg

Examples:
campus-main-building-exterior.jpg
academics-science-lab-students.jpg
events-annual-day-2025.jpg
portrait-principal.jpg
```

---

## Performance Budget

| Metric | Target |
|--------|--------|
| Hero image (LCP) | < 200KB (optimized) |
| Inline images | < 100KB each |
| Gallery thumbnails | < 50KB each |
| Total page images | < 1MB |

---

## Rights & Permissions

- Only use images with proper consent (student photo permissions)
- Maintain a permissions log for images featuring identifiable students
- Faculty portraits require individual approval
- Event photos: group consent where applicable

---

*Image components: `Image`, `Figure`, `Gallery`, `HeroImage` — see component library plan.*
