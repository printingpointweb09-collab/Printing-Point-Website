# Printing Point — Design System & Visual Guidelines

> **Document Purpose**: Definitive reference for the visual design language, design tokens, typography, component styling, layout grids, and responsive behaviors of **Printing Point**.

---

## 1. Brand Aesthetics & Visual Philosophy

Printing Point caters to Fortune 500 enterprises, prominent healthcare institutions, and demanding corporate procurement teams. The visual language conveys:
- **Heritage & Trust**: Grounded by deep imperial navy tones (`#0A1628`).
- **Luxury & Precision**: Elevated by refined metallic gold accents (`#C9A84C`).
- **Editorial Elegance**: Editorial serif headings (`Cormorant Garamond`) coupled with ultra-clean modern typography (`DM Sans`).
- **Clarity & Utility**: High contrast, legible specification tables, and frictionless call-to-actions.

---

## 2. Design Tokens (`css/tokens.css`)

### 2.1 Color Palette

```
┌─────────────────────────────────────────────────────────────────────────┐
│ Primary Navy Palette (Authority, Grounding, Depth)                      │
│ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐               │
│ │   --navy       │ │   --navy-mid   │ │  --navy-light  │               │
│ │   #0A1628      │ │   #0F2040      │ │   #1A3560      │               │
│ └────────────────┘ └────────────────┘ └────────────────┘               │
├─────────────────────────────────────────────────────────────────────────┤
│ Metallic Gold Accent Palette (Prestige, Craftsmanship, Focus)           │
│ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────┐ │
│ │   --gold       │ │  --gold-light  │ │  --gold-pale   │ │ --gold-dark│ │
│ │   #C9A84C      │ │   #E8C870      │ │   #F5E6B8      │ │   #9B7829  │ │
│ └────────────────┘ └────────────────┘ └────────────────┘ └────────────┘ │
├─────────────────────────────────────────────────────────────────────────┤
│ Neutral & Surface Palette (Legibility, Structure, Space)                │
│ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────┐ │
│ │   --white      │ │  --off-white   │ │  --grey-light  │ │ --grey-mid │ │
│ │   #FFFFFF      │ │   #F8F6F0      │ │   #E8E4DC      │ │   #B0A898  │ │
│ └────────────────┘ └────────────────┘ └────────────────┘ └────────────┘ │
│ ┌────────────────┐                                                      │
│ │  --grey-text   │                                                      │
│ │   #4A4640      │                                                      │
│ └────────────────┘                                                      │
└─────────────────────────────────────────────────────────────────────────┘
```

| Token Name | Hex Value | Usage Context |
|---|---|---|
| `--navy` | `#0A1628` | Primary dark page background, dark headers, deep text |
| `--navy-mid` | `#0F2040` | Section backgrounds, card containers, dropdown background |
| `--navy-light` | `#1A3560` | Subtle contrast borders, table dividers, secondary fills |
| `--gold` | `#C9A84C` | Brand accent, primary button fills, logo highlight, badges |
| `--gold-light` | `#E8C870` | Hover states, active links, glow highlights |
| `--gold-pale` | `#F5E6B8` | Light background tint, badge backgrounds, tag fills |
| `--gold-dark` | `#9B7829` | Text kickers and high-contrast text on light surfaces |
| `--white` | `#FFFFFF` | Text on dark surfaces, pure white card fills |
| `--off-white` | `#F8F6F0` | Light page background (e.g. detail view, light sections) |
| `--grey-light` | `#E8E4DC` | Subtle borders, dashed specification separators |
| `--grey-mid` | `#B0A898` | Secondary meta text, image placeholders |
| `--grey-text` | `#4A4640` | High-readability body copy on light backgrounds |

---

## 3. Typography Hierarchy

Fonts are imported from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### 3.1 Font Families
- **Display Serif (`--fd`)**: `'Cormorant Garamond', serif`
  - Used for: Brand logo text, page titles, section titles, hero headlines, card titles.
  - Characteristics: Traditional serif elegance, high aesthetic flair, luxury feel.
- **Body Sans-Serif (`--fb`)**: `'DM Sans', sans-serif`
  - Used for: Body copy, specifications, navigation links, buttons, form inputs.
  - Characteristics: Geometric clarity, robust legibility, modern corporate feel.

### 3.2 Typographic Scales
- **Hero Title**: `clamp(36px, 5vw, 64px)` with `font-weight: 700` and line height `1.1`.
- **Category Header**: `clamp(30px, 3.4vw, 46px)` with `font-weight: 400` and strong accent tags.
- **Product Title**: `34px` / `clamp(26px, 3vw, 36px)` in `--fd` bold.
- **Section Kicker / Eyebrow**: `10px - 12px`, `letter-spacing: 0.12em - 0.18em`, `text-transform: uppercase`.
- **Body Regular**: `13.5px - 14.5px`, `line-height: 1.75`.
- **Button Labels**: `11px - 12.5px`, `letter-spacing: 0.08em - 0.12em`, `text-transform: uppercase`, `font-weight: 600`.

---

## 4. Component Design Patterns

### 4.1 Navigation Bar (`.nav`)
- **Container**: Sticky/fixed header with deep navy background (`--navy`) and subtle bottom border.
- **Brand Wordmark**:
  - `Printing` in white, `Point` highlighted in gold (`--gold`).
  - Font: `Cormorant Garamond`, `font-size: 22px`, `font-weight: 700`.
- **Links**: Gold on hover with subtle transition `var(--t)`.

### 4.2 Buttons
- **Primary CTA (`.btn-p` / `.btn-primary`)**:
  - Background: `var(--gold)`
  - Text: `var(--navy)`
  - Hover: Background becomes `var(--gold-light)`.
- **Outline CTA (`.btn-o` / `.btn-outline`)**:
  - Background: Transparent
  - Border: `1px solid var(--gold)` or `1px solid var(--navy)`
  - Hover: Inverts colors (background fills, text changes contrast).

### 4.3 Product Cards (`.prodcard`)
- **Structure**:
  - Clean image wrapper with fixed/proportional aspect ratio and `object-fit: contain` or `cover`.
  - Body container with product title in serif and a dedicated "Add to Enquiry" button.
- **Interactive Feedback**:
  - Elevates smoothly on hover with a subtle border and shadow transition.

### 4.4 Category Toolbar (`.pct-toolbar`)
- Flexible flexbox toolbar with:
  - **Count Badge** (`.pct-count`): All-caps counter of visible products.
  - **Search Field** (`.pct-search`): Input with focus gold ring `rgba(201, 168, 76, 0.8)`.
  - **Sort Select** (`.pct-sort`): Stylized dropdown matching search input dimensions.
  - **Empty State** (`.pct-empty`): Bordered feedback card informing when no products match search criteria.

### 4.5 Specifications Table (`.spec-row`)
- Key-value rows split horizontally with `justify-content: space-between`.
- Subtle dashed divider (`border-bottom: 1px dashed var(--grey-light)`).
- Key in subdued grey (`--grey-text`), value in bold (`font-weight: 600`).

### 4.6 Enquiry Modal (`#eq-overlay`)
- Centered modal dialog on a dark backdrop (`rgba(10, 22, 40, 0.75)`).
- Input fields with gold border focus and light placeholder styling.
- Responsive single-column on mobile, dual-column input layout on desktop.

### 4.7 Floating WhatsApp Badge (`.float-wa`)
- Fixed at the bottom-right corner (`bottom: 24px; right: 24px; z-index: 999`).
- WhatsApp brand green (`#25D366`) with smooth hover scale (`transform: scale(1.06)`).

---

## 5. Responsive Grid & Breakpoints

```
Breakpoints:
├── Mobile:          < 600px   (Single column layout, stacked toolbars, full-width inputs)
├── Tablet Portrait: 600px - 899px (2-column product grid, adjusted gap)
├── Tablet Land / Desktop: 900px - 1199px (3-column product grid, horizontal toolbars)
└── Large Desktop:   ≥ 1200px (Max wrapper width: 1120px / 1280px, optimized whitespace)
```

- **Product Grids**:
  - Mobile: `1fr` or `repeat(2, 1fr)`
  - Tablet: `repeat(2, minmax(0, 1fr))`
  - Desktop: `repeat(3, minmax(0, 1fr))`
- **Detail View Grid (`.wrap`)**:
  - Desktop: `0.9fr 1.1fr` (Gallery left, specs/CTA right)
  - Mobile / Tablet: `1fr` stacked

---

## 6. Motion & Transitions

- Global transition timing token:
  ```css
  --t: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  ```
- Used across:
  - Button hovers & color inversions
  - Card elevation & border glow
  - Modal fade-in and scale-in
  - Nav link underline transitions
