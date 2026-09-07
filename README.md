<<<<<<< Updated upstream
# landscapeideastips
Landscape Ideas Tips — AU garden &amp; landscape tips blog
=======
# Landscape Ideas Tips

> Practical Australian landscape & garden tips for the Mornington Peninsula and beyond

🌿 **Production site:** [landscapeideastips.com](https://landscapeideastips.com) (Cloudflare Pages - to be configured)

## About This Site

Landscape Ideas Tips is an authority tips blog providing practical advice on:
- Lawn care (mowing, edging, seasonal maintenance)
- Garden beds (mulching, planting, weed control)
- Hedges & pruning (techniques, timing, equipment)
- Seasonal maintenance (spring/autumn checklists)
- DIY vs hiring professionals

Content is Australian-focused with specific Peninsula insights where relevant.

## Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS
- **Content:** Content Collections (Markdown/MDX in `src/content/posts/`)
- **CMS:** Sveltia CMS (GitHub backend, at `/admin`)
- **Hosting:** Cloudflare Pages (static)

## Local Development

### Prerequisites

- Node.js 22.12+
- npm 10.9+

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Dev server runs at `http://localhost:4321`

## Content Management

### Via Sveltia CMS (Recommended)

1. Navigate to `/admin` in browser
2. Authenticate via GitHub OAuth (once configured)
3. Create/edit posts with visual editor
4. All changes commit directly to GitHub

**Note:** OAuth `base_url` needs Cloudflare Worker authentication handler (to be configured separately)

### Via Direct File Editing

Posts live in `src/content/posts/` as Markdown files:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO"
category: "Lawns" # or "Garden Beds" | "Hedges & Pruning" | "Seasonal" | "DIY vs Hire"
pubDate: 2024-03-15
featured: false
draft: false
image: "/images/your-image.jpg" # optional
---

Your post content here...
```

Filename format: `YYYY-MM-DD-slug.md`

## Categories

1. **Lawns** - Mowing, edging, seasonal lawn care
2. **Garden Beds** - Mulching, planting, irrigation, weed control
3. **Hedges & Pruning** - Trimming, techniques, timing
4. **Seasonal** - Spring/autumn maintenance, checklists
5. **DIY vs Hire** - When to DIY vs call professionals

## Project Structure

```
/
├── public/
│   ├── admin/              # Sveltia CMS
│   │   ├── index.html
│   │   └── config.yml
│   ├── images/             # Media uploads
│   ├── _redirects          # Cloudflare Pages redirects
│   └── favicon.svg
├── src/
│   ├── components/         # Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro
│   │   └── CategoryChip.astro
│   ├── content/
│   │   ├── config.ts       # Content collection schema
│   │   └── posts/          # Blog posts (10 seed posts included)
│   ├── layouts/
│   │   └── Layout.astro    # Base layout with SEO
│   ├── pages/
│   │   ├── index.astro     # Home page
│   │   ├── blog/
│   │   │   ├── index.astro       # Blog index
│   │   │   └── [slug].astro      # Post pages
│   │   ├── category/
│   │   │   └── [category].astro  # Category pages
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── rss.xml.js      # RSS feed
├── docs/
│   └── BUILD-BRIEF.md      # Project brief & guidelines
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Seed Content

10 comprehensive blog posts included (800-1400 words each):

1. How often to mow through Victorian seasons ⭐
2. Edging & line trimming techniques ⭐
3. Mulch depth and common mistakes ⭐
4. Hedge trimming basics
5. Garden bed weed control
6. Spring garden tidy checklist
7. Autumn lawn care Peninsula
8. When DIY stops - hire a gardener ⭐
9. Residential irrigation basics
10. Garden prep before guests/sale

⭐ = Featured on home page

## Deployment

### Cloudflare Pages

1. Connect repository: `jcostab/landscapeideastips`
2. Framework preset: **Astro**
3. Build command: `npm run build`
4. Build output: `dist`
5. Add custom domain: `landscapeideastips.com`
6. Configure DNS and www redirects in Cloudflare

### DNS Setup (Cloudflare)

- **Apex domain:** CNAME to Cloudflare Pages deployment
- **www subdomain:** Redirect to apex (handled in CF dashboard)

### CMS Authentication

Sveltia CMS requires GitHub OAuth. Set up Cloudflare Worker for OAuth flow:
- Worker script handles GitHub OAuth callback
- Update `public/admin/config.yml` with Worker URL as `base_url`
- See Sveltia documentation for Worker setup

## Partner CTAs

Posts include soft CTAs to Peninsula partners where relevant:

- **Mowing Magic** (mowingmagic.com.au) - Lawn care services
- **Peninsula Hard Yards** (peninsulahardyards.com.au) - Garden maintenance & landscaping

Each post links to ONE primary partner based on topic relevance. Disclosure statements included.

## Technical Features

- ✅ Static site generation (fast, secure, scalable)
- ✅ SEO optimized (metadata, sitemap, RSS, structured data)
- ✅ Mobile responsive (Tailwind CSS)
- ✅ Content collections with TypeScript schemas
- ✅ Sveltia CMS for non-technical content management
- ✅ Automated sitemap generation
- ✅ RSS feed at `/rss.xml`

## Contributing

When adding new content:

1. Follow existing content structure and frontmatter schema
2. Maintain category consistency
3. Include internal links to related posts where relevant
4. Add ONE appropriate CTA per post (Mowing Magic or Peninsula Hard Yards)
5. Use Australian English and terminology
6. Focus on practical, actionable advice

## Build Brief

See `docs/BUILD-BRIEF.md` for complete project guidelines, content strategy, and brand voice.

## Maintenance

- **Dependencies:** Keep Astro and Tailwind updated
- **Content:** Add new seasonal posts regularly
- **Links:** Check internal/external links periodically
- **Images:** Optimize before uploading to `/public/images`

## Support

- **Astro Docs:** https://docs.astro.build
- **Sveltia CMS:** https://github.com/sveltia/sveltia-cms
- **Cloudflare Pages:** https://developers.cloudflare.com/pages

---

**Repository:** https://github.com/jcostab/landscapeideastips  
**Built with:** Astro 5 + Tailwind CSS + Sveltia CMS  
**Hosted on:** Cloudflare Pages
>>>>>>> Stashed changes
