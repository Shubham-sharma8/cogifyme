# COGIFY Website (`cogify.me`)

The official marketing and product website for **COGIFY** and its flagship product, **EmDoc** (macOS Native PDF Workstation).

## Architecture & Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack, React 19)
- **Styling**: Tailwind CSS v4, Custom CSS Utilities, Glassmorphism, Modern Dark Theme
- **Typography**: Apple / Linear System Typography stack (`-apple-system, BlinkMacSystemFont, "SF Pro Display"`) for 100% offline, zero-network, sub-millisecond font rendering.
- **Motion & UI**: Framer Motion, Aceternity UI components (Spotlight, Background Beams, Bento Grid, Moving Border, Timeline, Sparkles, macOS Window Mockup)
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **SEO & Legal**: Dynamic `sitemap.ts`, `robots.ts`, OpenGraph metadata, public privacy policy (`/privacy`), terms of use (`/terms`), and dedicated air-gapped EmDoc privacy statement (`/emdoc/privacy`).

## Project Structure

```
website/
├── public/
│   └── brand/
│       └── emdoc-icon.png         # macOS 512@2x Retina App Icon
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with SEO and system fonts
│   │   ├── page.tsx               # Homepage assembling all sections
│   │   ├── globals.css            # Tailwind theme, grid/dot patterns, glassmorphism
│   │   ├── sitemap.ts             # XML Sitemap generator
│   │   ├── robots.ts              # Robots.txt generator
│   │   ├── privacy/page.tsx       # Public company privacy policy (/privacy)
│   │   ├── terms/page.tsx         # Public terms of use (/terms)
│   │   ├── emdoc/
│   │   │   └── privacy/page.tsx   # Dedicated EmDoc air-gapped privacy policy (/emdoc/privacy)
│   │   ├── products/
│   │   │   └── emdoc/page.tsx     # Deep-dive product page for EmDoc Workstation
│   │   ├── enterprise/page.tsx    # Enterprise capabilities & inquiry intake
│   │   ├── about/page.tsx         # Company manifesto, principles & timeline
│   │   ├── contact/page.tsx       # Contact form with live state validation
│   │   └── legal/
│   │       ├── privacy/page.tsx   # Re-exports /privacy
│   │       └── terms/page.tsx     # Re-exports /terms
│   ├── components/
│   │   ├── ui/                    # Aceternity UI components
│   │   │   ├── spotlight.tsx
│   │   │   ├── background-beams.tsx
│   │   │   ├── bento-grid.tsx
│   │   │   ├── moving-border.tsx
│   │   │   ├── timeline.tsx
│   │   │   ├── sparkles.tsx
│   │   │   └── macos-window.tsx   # Interactive Retina macOS window mockup
│   │   ├── navigation/            # Sticky floating glassmorphism navbar
│   │   ├── hero/                  # Hero section with spotlight & CTA
│   │   ├── products/              # EmDoc showcase & download modal
│   │   ├── company/               # Bento grid ("What We Build"), principles, roadmap
│   │   ├── enterprise/            # Enterprise capabilities
│   │   ├── cta/                   # High-impact closing CTA
│   │   └── footer/                # Comprehensive footer with legal links
│   ├── config/
│   │   └── site.ts                # Centralized site and EmDoc metadata
│   └── lib/
│       └── utils.ts               # clsx + tailwind-merge helper
```

## Configuration & Environment Variables

The website is designed with a centralized configuration system (`src/config/site.ts`).

To set a production binary download URL for EmDoc:

```bash
# In .env.local or your deployment environment:
NEXT_PUBLIC_EMDOC_DOWNLOAD_URL="https://releases.cogify.me/EmDoc-v0.1-macOS-Universal.dmg"
```

If `NEXT_PUBLIC_EMDOC_DOWNLOAD_URL` is omitted, the interactive Download Modal will gracefully provide a release descriptor package along with local build instructions.

## Running Locally

```bash
cd website

# Install dependencies
npm install

# Start development server
npm run dev

# Run production build (Turbopack)
npm run build

# Start production server
npm start
```

## Strict Project Rule Adherence

The existing macOS application (`pdf/` and `offline-pdf/`) remains completely untouched and isolated. All web assets, builds, and components reside strictly within `website/`.
