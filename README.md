# Printing Point — Corporate Gifting & Commercial Printing Platform

Welcome to the official web platform for **Printing Point**, a premier corporate gifting and commercial printing partner based in Delhi/NCR, India.

---

## 🌟 Overview

Printing Point offers turnkey corporate merchandise and enterprise printing solutions trusted by leading organizations such as The Ashok, Sir Ganga Ram Hospital, JK MAXX Paints, Shapoorji Pallonji, and smartJoules.

This codebase is a **zero-dependency, high-performance static web application** architected with modular HTML5, modern CSS3 (design tokens), and vanilla ES6+ JavaScript.

---

## 📁 Project Structure

```
newpr/
├── index.html                 # Main Single Page Application (SPA) HTML
├── product-detail.html        # Dynamic Product Detail Template (hydrated via URL params)
├── css/
│   ├── tokens.css             # Authoritative Design Tokens (colors, fonts, transitions)
│   ├── style.css              # Main site stylesheet (layout, views, components, modal)
│   └── product-detail.css     # Dedicated product detail page styles
├── js/
│   ├── main.js                # Core SPA router, filtering, modal, and EmailJS handler
│   └── product-detail.js      # Detail page hydrator and WhatsApp CTA generator
├── assets/
│   └── images/
│       ├── clients/           # 16 client logos (The Ashok, Ganga Ram Hospital, etc.)
│       └── products/          # Extracted product photography
├── docs/                      # Dedicated documentation directory
│   ├── CONTEXT.md             # In-depth context for AI agents and developers
│   ├── ARCHITECTURE.md        # Technical architecture, DOM hierarchy, and data flow
│   └── DESIGN.md              # Design system, tokens, typography, and UI specs
├── CONTEXT.md                 # Agent context reference (root copy)
├── ARCHITECTURE.md            # Architecture documentation (root copy)
├── DESIGN.md                  # Design system documentation (root copy)
└── README.md                  # This file
```

---

## 🚀 Quick Start & Local Preview

Because this project is built with zero runtime or build dependencies, you can run it immediately with any local HTTP server:

### Option 1: Using Python 3 (Built-in)
```bash
# Start a local web server on port 8000
python3 -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 2: Using Node.js / npx
```bash
npx serve .
```

### Option 3: VS Code Live Server
Right-click `index.html` and select **"Open with Live Server"**.

---

## 📚 Documentation Reference

Detailed documentation is available in the following markdown files:

1. **[CONTEXT.md](file:///Users/kixel/developer/projects/newpr/CONTEXT.md)**
   - Comprehensive business background, client portfolio, and product catalog taxonomy.
   - User journeys, workflows, conventions, and operational guidelines for AI agents.

2. **[ARCHITECTURE.md](file:///Users/kixel/developer/projects/newpr/ARCHITECTURE.md)**
   - SPA view routing (`gv()`), category sub-navigation (`gc()`, `showView()`), and printing panel switcher.
   - Client-side search and A-Z/Z-A sorting engine.
   - EmailJS integration configuration (`service_ll189at`, `template_nzv0vxj`).
   - WhatsApp Click-to-Chat integration and GA4 analytics.

3. **[DESIGN.md](file:///Users/kixel/developer/projects/newpr/DESIGN.md)**
   - Complete color token matrix (`--navy`, `--gold`, `--off-white`, etc.).
   - Typography specifications (`Cormorant Garamond` + `DM Sans`).
   - UI component blueprints (buttons, product cards, category toolbar, modals, spec tables).
   - Responsive breakpoints and layout grids.

---

## 🤝 Contact & Client Inquiries

- **Phone / WhatsApp**: `+91 98104 72144`
- **Email**: `printingpoint76@yahoo.com`
- **Operating Region**: Delhi / NCR & Pan-India Corporate Delivery
