# Workafé App — Project Instructions

## What is this?
Workafé (technical name: Workafe) is a mobile-first PWA that helps remote workers discover work-friendly cafés nearby, check in via GPS, and earn rewards. Cafés offer perks and promotions to attract remote workers; users discover them on a map, navigate to the venue, check in, and redeem perks.

## Architecture
- **Backend:** Node.js + Express (serves API + static files)
- **Frontend:** Vanilla HTML/CSS/JS SPA (no framework — intentionally lightweight)
- **Data:** JSON files in `/data/` (one per city module)
- **Payments:** Business-side monetization (coming). Consumer app is free.
- **PWA:** Service worker + manifest for offline + installable
- **Deploy:** Railway via GitHub (Dockerfile)

## Key Files
- `server.js` — Express server, static files, SPA fallback
- `routes/events.js` — City/café listing + detail API
- `routes/purchase.js` — Deal claim + rewards endpoint
- `routes/store.js` — In-memory data store (MVP)
- `data/*.json` — City module content (cafés, perks)
- `public/index.html` — Single-page app with 7 views
- `public/js/app.js` — All SPA logic (navigation, categories, check-in flow)
- `public/css/main.css` — Theme variables (Warm Café: latte/forest/dark roast)
- `public/css/components.css` — UI component overrides
- `public/welcome.html` — Landing page

## Branding
- **Display name:** Workafé (with accent)
- **Technical name:** Workafe (no accent, for code/URLs/DB)
- **Company:** PANBUDDHA DIGITAL SOLUTIONS LIMITED
- **Primary:** #C8956C (Warm Latte)
- **Accent:** #4A8C6A (Sage Green)
- **Gold:** #D4A853 (Espresso Gold)
- **Background:** #1A1510 (Dark Roast)
- **Surface:** #2A2319 (Coffee Bean)
- **Text:** #F5EDE4 (Warm White)
- **Font:** Plus Jakarta Sans (headlines), Manrope (body)

## Core Concept
- Users open app → map view → see nearby work-friendly cafés
- Each café shows: WiFi quality, noise level, seating comfort, power outlets, current perks
- User selects café → detailed card → "Go there" → native navigation
- Upon arrival → GPS check-in → earn coins/rewards → redeem perks
- Optional: leave Google review → unlock bonus reward

## Adding a New City Module
1. Create `data/[city].json` using the Vancouver template structure
2. Fill in cafés for all categories: discover, food, drinks, activities, shopping
3. Add preview_deals (3 cafés shown on home)
4. Deploy — no code changes needed

## Development
```bash
npm install
cp .env.example .env  # Then fill in your keys
node server.js        # http://localhost:3000
```

## Deploy Pipeline
```
Edit in Cowork → Git push via railway-deploy skill → Railway auto-redeploys
```

## Rules
- NEVER commit .env files
- Keep each city module to 40–60 cafés max
- Every café needs: name, hook (1 sentence), vibe, amenities, distance, address
- Mobile-first always — max container width is 480px
- Use "Workafé" in UI, "Workafe" in code/URLs
- Footer must include "PANBUDDHA DIGITAL SOLUTIONS LIMITED"
- Never use "marketplace", "guaranteed", "verified" in UI copy
