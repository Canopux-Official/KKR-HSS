# Design Principles

## The Twelve Principles

These principles govern every design and development decision. When in doubt, return to this list.

---

### 1. Content Is the Interface
The website exists to communicate — not to showcase design tricks. Typography, photography, and whitespace carry the experience. UI chrome stays invisible.

### 2. Restraint Is Premium
Fewer colors, fewer animations, fewer components. Every element must earn its place. When tempted to add something, first try removing something.

### 3. Authenticity Over Aspiration
Use real photography, real achievements, real stories. Never fabricate statistics, testimonials, or rankings. Institutional trust is built on truth.

### 4. Heritage Informs, Trends Do Not
KKR has decades of educational service. Design choices should feel appropriate for an institution with history — not a startup founded yesterday.

### 5. Typography Leads
Large, confident editorial headings establish hierarchy. Body text is optimized for reading. Display type is used sparingly and with purpose.

### 6. White Space Is Structure
Generous margins and section padding are not wasted space — they are the architecture of premium design. Content must breathe.

### 7. Photography Over Decoration
Real images of campus, students, and community replace all illustrations, icon grids, and decorative graphics. No stock photography.

### 8. Accessibility Is Foundational
WCAG 2.1 AA is the floor. Keyboard navigation, screen reader support, color contrast, and reduced motion are non-negotiable.

### 9. Consistency Creates Trust
Design tokens, spacing scale, typography system, and component patterns ensure every page feels like part of one institution.

### 10. Mobile Is Not an Afterthought
Responsive design adapts the editorial experience — it does not degrade it. Touch targets, readable text, and navigable menus on all devices.

### 11. Performance Serves Everyone
Fast loading respects users on slow connections. Optimized images, minimal JavaScript, and server-side rendering are design decisions.

### 12. Timelessness Over Trends
No glassmorphism, no gradient heroes, no blob shapes, no animated counters. Design choices made today should feel appropriate in ten years.

---

## Decision Matrix

When evaluating any design or development choice:

| Question | If No → |
|----------|---------|
| Does it serve the content? | Remove it |
| Is it accessible? | Fix it before shipping |
| Does it use design tokens? | Refactor to use tokens |
| Would it feel dated in 5 years? | Find an alternative |
| Is it authentic to KKR? | Reconsider |
| Is it on the "avoid" list? | Do not implement |
| Does it exist on Harvard/Guildhall sites? | Not required, but a quality benchmark |
| Can it be simpler? | Simplify |

---

## Hierarchy of Concerns

When principles conflict, resolve in this order:

1. **Accessibility** — always wins
2. **Content clarity** — information must be findable and readable
3. **Institutional identity** — must feel like KKR
4. **Visual quality** — premium, editorial, restrained
5. **Performance** — fast, optimized
6. **Developer experience** — clean, maintainable code

---

## Application Examples

### Choosing a Section Layout
- **Principle 1 (Content):** What information needs to be communicated?
- **Principle 5 (Typography):** Heading scale matches section importance
- **Principle 6 (White Space):** Section padding follows spacing system
- **Principle 7 (Photography):** Image supports the narrative, not decorates

### Adding an Animation
- **Principle 2 (Restraint):** Is this animation necessary?
- **Principle 8 (Accessibility):** Does it respect reduced motion?
- **Principle 12 (Timeless):** Will this feel gimmicky in 2 years?

### Selecting a Color
- **Principle 2 (Restraint):** Is color needed here, or is typography sufficient?
- **Principle 9 (Consistency):** Is this a token color?
- **Principle 8 (Accessibility):** Does it pass contrast requirements?

---

## Anti-Pattern Quick Reference

| See This Urge | Apply This Principle |
|---------------|---------------------|
| Add a gradient background | #2 Restraint, #12 Timeless |
| Put icons beside headings | #1 Content, #7 Photography |
| Add animated statistics | #3 Authenticity, #12 Timeless |
| Use stock photos | #3 Authenticity, #7 Photography |
| Add more colors | #2 Restraint, #9 Consistency |
| Create feature card grid | #1 Content, #12 Timeless |
| Add glassmorphism | #2 Restraint, #12 Timeless |
| Skip alt text | #8 Accessibility |
| Use arbitrary spacing | #9 Consistency |
| Add a carousel | #2 Restraint, #8 Accessibility |

---

*These principles are immutable. They may be refined in language but not in intent.*
