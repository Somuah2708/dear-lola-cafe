# Café Website Template — Replication Guide

This is a Next.js 14 café website template. Follow this guide to clone it for a new café client in under a day.

---

## Stack
- **Framework**: Next.js 14 (App Router, static export)
- **Styling**: Tailwind CSS + custom globals.css utility classes
- **Animations**: Framer Motion
- **Fonts**: Playfair Display (headings) + Inter (body) via Google Fonts
- **Deployment**: Vercel (one-click from GitHub)

---

## Project Structure

```
src/
  app/
    layout.tsx        ← SEO metadata, fonts
    page.tsx          ← Section order
    globals.css       ← Utility classes (btn-primary, heading-lg, etc.)
  components/
    Navbar.tsx        ← Logo name, nav links
    Hero.tsx          ← Headline, tagline, hero image
    Experience.tsx    ← Brand story image + text, stats
    Menu.tsx          ← All menu categories + items with images
    Gallery.tsx       ← 8-image grid (uses md:row-span-2 for tall center image)
    About.tsx         ← About text, quote, image
    Community.tsx     ← 4 feature cards + image
    Reviews.tsx       ← 5 customer reviews
    Visit.tsx         ← Map embed, address, hours, phone, WhatsApp CTA
    InstagramFeed.tsx ← 6-image grid linking to Instagram
    Footer.tsx        ← Logo, nav, hours, contact, social links
```

---

## Step-by-Step: Adapting for a New Café

### 1. Research the café (30 min)
- Instagram handle → find bio, description, vibe
- Google the name → get address, phone, hours
- Look for menu (website, delivery apps, DM manager)
- Identify their brand colors (check logo, Instagram aesthetic)
- Download their actual images from Instagram (see image section below)

### 2. Update brand colors — `tailwind.config.ts`
This is the single most important design change. Every dark section, button, and text accent derives from these values.

```ts
colors: {
  coffee: {
    brown: "#______",   // dark primary — used for section BGs, buttons, headings
    dark:  "#______",   // darker variant (hover states)
    light: "#______",   // lighter variant
  },
  cream: {
    DEFAULT: "#______", // main light background
    dark:    "#______",
    light:   "#______",
  },
  sage: {
    DEFAULT: "#______", // medium accent (section labels)
    dark:    "#______",
    light:   "#______", // small uppercase labels — use brand accent color here
  },
}
```

Also update the scrollbar colors in `globals.css` to match.

**Color extraction tips:**
- Use the café's logo to identify their primary brand color
- Check their Instagram grid — warm tones? Cool/neutral? Moody or airy?
- For a French/refined look: soft greens, cream, warm amber
- For a moody speakeasy: deep charcoal, gold, burgundy
- For a tropical café: bright whites, coral, leafy green

### 3. Find and download images

**Essential images to replace (in `public/images/`):**
| File | What it shows | Size target |
|------|--------------|-------------|
| `hero-fallback.jpg` | Hero background — full screen | Wide/landscape |
| `about.jpg` | About section (portrait crop) | Portrait |
| `experience.jpg` | Experience section (portrait crop) | Portrait |
| `community.jpg` | Community/features section | Portrait |
| `gallery/*.jpg` | Gallery grid (8 images) | Square/portrait |
| `instagram/ig-*.jpg` | Instagram feed (6 images) | Square |
| `menu-*.jpg` | Menu item thumbnails | Small square |

**Where to get images:**
1. **Instagram CDN** — fetch the post page, extract `og:image` or `fbcdn` URLs, download with curl
2. **Unsplash** (free) — `https://images.unsplash.com/photo-{ID}?w=800&q=80&auto=format&fit=crop`
3. **Google Images** — search `[café name] interior food` then filter by size

**Pro tip:** Always view images before assigning them — check they match the food item/section they represent.

### 4. Update all text content — file by file

#### `src/app/layout.tsx`
```tsx
title: "CAFÉ NAME | Tagline"
description: "One sentence about the café"
keywords: [...]
```

#### `src/components/Navbar.tsx` + `Hero.tsx`
- Replace `CAFÉ CLAIR` / `THEIA HOUSE` with new café name
- Update tagline in Hero.tsx

#### `src/components/About.tsx`
- Rewrite 3 paragraphs based on their Instagram bio + story
- Update the quote + attribution

#### `src/components/Experience.tsx`
- Update heading and 2 body paragraphs to match café's vibe
- Update stats (followers, years open, etc.)

#### `src/components/Menu.tsx`
- Update 6 categories (rename/add/remove as needed)
- Replace all menu items, descriptions, prices
- Map each item to an appropriate food image

#### `src/components/Community.tsx`
- Update 4 feature cards to match what this café actually offers
- (bookstore? events? outdoor patio? live music? co-working?)

#### `src/components/Reviews.tsx`
- Write 5 believable 5-star reviews mentioning specific dishes and the location

#### `src/components/Visit.tsx`
- Address, phone, hours, WhatsApp number
- Update Google Maps embed src:
  ```
  https://maps.google.com/maps?q=[ADDRESS]&t=m&z=15&output=embed
  ```

#### `src/components/InstagramFeed.tsx` + `Footer.tsx`
- Instagram handle (`@handle`)
- Social links
- Copyright name

### 5. Design differentiation (IMPORTANT — read this)
Every new café site MUST have a distinct visual design. Options to change:

**Layout shifts:**
- Swap Experience section to right-side image (change `order-*` classes)
- Make Hero text left-aligned instead of centered
- Change Gallery from 3-col to 2-col masonry
- Add a full-bleed quote/banner section between Menu and Gallery

**Typography:**
- Swap Playfair Display for another serif: `Cormorant Garamond`, `DM Serif Display`, `Bodoni Moda`
- Try a display sans-serif for headings: `Josefin Sans`, `Raleway`, `Libre Baskerville`
- Change letter-spacing/weight feel in `globals.css`

**Section backgrounds:**
- Alternate light/dark differently (e.g. dark hero, light experience, dark menu, light about)
- Use a full-bleed image section mid-page
- Try a textured/pattern overlay on one section

**Component design:**
- Menu cards: horizontal → vertical cards with larger images
- Gallery: standard grid → masonry / horizontal scroll
- Reviews: cards → large single quote with carousel
- Navbar: centered logo vs. left logo

---

## Deployment

### Push to GitHub
```bash
cd theia-coffee
git init  # if new repo
git add .
git commit -m "Initial Café Name site"
gh repo create cafe-name --public --source=. --push
```

### Deploy to Vercel
```bash
npx vercel --yes
```
Or connect the GitHub repo at vercel.com → "New Project" → import repo → deploy.

**Build settings (auto-detected by Vercel):**
- Framework: Next.js
- Build command: `npm run build`
- Output directory: `.next`

---

## Quick checklist before sharing with client

- [ ] All "THEIA HOUSE" / previous café name replaced everywhere
- [ ] Correct address, phone, hours in Visit section
- [ ] WhatsApp link uses correct number: `https://wa.me/233XXXXXXXXX`
- [ ] Google Maps embed shows correct location
- [ ] Instagram handle correct in feed + footer
- [ ] Menu prices in correct currency (GHS for Ghana)
- [ ] Hero image looks good on mobile (check at 390px width)
- [ ] Build passes: `npm run build` with no errors
- [ ] Site loads at localhost:3000 before pushing

---

## Reference: Café Clair Implementation

| Property | Value |
|----------|-------|
| Primary dark | `#2A4035` (deep forest green) |
| Accent | `#B07A2F` (warm amber — logo color) |
| Cream bg | `#F5F1EB` |
| Address | Opposite Lizzy Sports Complex, East Legon, Accra |
| Phone | +233 55 727 2727 |
| Instagram | @cafeclairgh |
| Hours | 8:00 AM – 10:00 PM daily |
| Vibe | French-refined, pâtisserie + restaurant + bar |
