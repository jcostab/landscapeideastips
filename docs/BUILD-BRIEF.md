# Landscape Ideas Tips - Build Brief

## Site Purpose

**Landscape Ideas Tips** is an authority tips blog focused on practical Australian landscape and garden advice, with specific expertise in the Mornington Peninsula region.

**What it is:**
- Educational content about lawn care, garden beds, hedges, seasonal maintenance, and DIY decision-making
- Authoritative, helpful tips for Australian homeowners
- Peninsula-focused where appropriate, but broadly applicable across Victoria and Australia

**What it is NOT:**
- A local lawn care company competing for service keywords
- A doorway site with fake suburb service pages
- Affiliated with Lumomatics or thetechblogging

## Content Strategy

### Categories

1. **Lawns** - Mowing schedules, edging, maintenance, seasonal care
2. **Garden Beds** - Mulching, planting, weed control, irrigation
3. **Hedges & Pruning** - Trimming techniques, timing, equipment, when to hire
4. **Seasonal** - Spring/autumn checklists, seasonal prep and maintenance
5. **DIY vs Hire** - Honest guidance on when to tackle tasks yourself vs hiring professionals
6. **Hardscape** - Retaining walls, paving, pathways, structural landscape elements
7. **Outdoor Living** - Patios, decks, outdoor spaces, entertaining areas, lighting

### Content Approach

- **Practical and actionable** - Real advice people can use
- **Honest and transparent** - Including honest assessments of when to hire help
- **Australian-focused** - Climate, seasons, plant varieties, terminology
- **Peninsula-aware** - Local insights where relevant, without being exclusive

### Internal Linking

Posts should cross-link to related tips where relevant. This helps:
- User navigation between related topics
- SEO and site authority
- Establishing the site as a comprehensive resource

## Partner Integration (Soft CTAs)

Each post includes ONE soft call-to-action matching the topic to the appropriate Peninsula partner:

### Mowing Magic (mowingmagic.com.au)
**For:** Lawn-focused content (mowing, edging, regular maintenance, lawn care programs)

Example CTA context: "Professional lawn mowing, edging, and regular lawn care services"

### Peninsula Hard Yards (peninsulahardyards.com.au)
**For:** Garden maintenance, hedges, beds, irrigation, planting, one-off tidy-ups, landscaping

Example CTA context: "Expert hedge trimming, pruning, and garden maintenance services"

### CTA Placement

- **In-post CTA box** near the end of each blog post
- Styled distinctively (border, background) but not aggressive
- Disclosure statement included: "Disclosure: We share links to related local services that serve our readers in the Peninsula area."
- Natural language, not salesy

### CTA Rules

- **ONE primary beneficiary per post** based on topic
- Clear disclosure of relationship
- Never hidden or deceptive
- Adds value to the reader (genuinely relevant service suggestion)
- Not doorway spam - these are real educational posts with soft CTAs

## Brand Voice

- **Helpful and authoritative** - We know this stuff
- **Honest** - Including acknowledging limitations of DIY
- **Practical** - Focus on what works in real-world conditions
- **Respectful** - No judgment of homeowners who choose to hire help
- **Australian** - Using local terminology, seasons, plants

## SEO Approach

- **Quality content first** - Genuinely useful tips people search for
- **Proper metadata** - Titles, descriptions, structured properly
- **Internal linking** - Building site authority
- **No black hat tactics** - No keyword stuffing, doorway pages, or spam
- **Clean technical SEO** - Sitemap, proper URLs, structured data

## Design & UX

- **Clean, modern interface** using Tailwind CSS
- **Mobile-responsive** (critical for users researching on phones in their gardens)
- **Fast loading** - Static site generation via Astro
- **Easy navigation** - Category filtering, clear post structure
- **Professional appearance** - Authority brand, not DIY hobby site

## Sveltia CMS

- **Backend:** GitHub (repo: jcostab/landscapeideastips, branch: main)
- **Media:** public/images folder
- **OAuth:** Placeholder in config - Cloudflare Worker auth to be added later
- **Content model:** Matches Astro content collection schema exactly

## Deployment

- **Platform:** Cloudflare Pages
- **Domain:** landscapeideastips.com (to be attached)
- **Build:** Astro static site generation
- **DNS:** Managed in Cloudflare (www redirect, etc.)

## Content Pipeline

### Seed Content Completed (10 posts):
1. How often to mow through Victorian seasons
2. Edging & line trimming techniques
3. Mulch depth and common mistakes
4. Hedge trimming basics
5. Garden bed weed control
6. Spring garden tidy checklist
7. Autumn lawn care Peninsula
8. When DIY stops - hire a gardener
9. Residential irrigation basics
10. Garden prep before guests/sale

### AU Keyword Publishing Queue

The site now has a **living publishing queue** based on AU keyword research (Ahrefs, September 2026). See:

- **`docs/keyword-shortlist-au.md`** - Full keyword research with volumes, difficulty, intent analysis
- **`docs/keyword-queue.md`** - Locked publishing queue (40 items in 10 batches of 4)

The queue expands content into **hardscape** (retaining walls, paving, pathways) and **outdoor living** (patios, decks, entertaining areas), maintaining the same quality standards and partner CTA approach.

**Publishing approach:**
- Work through batches sequentially (4 items per batch)
- Quality over filler — no invented topics outside the queue
- AU English, Melbourne/Peninsula climate angles where natural
- ONE soft CTA per post (Mowing Magic or Peninsula Hard Yards based on topic)

## Metrics & Success

- **Primary:** Organic search traffic to useful content
- **Secondary:** Time on page, internal navigation, return visitors
- **Conversions:** Soft CTA clicks to partner services (tracked via UTM where appropriate)
- **Brand:** Building authority in landscape tips space

## Related Properties

- **Mowing Magic** - mowingmagic.com.au (lawn care services)
- **Peninsula Hard Yards** - peninsulahardyards.com.au (garden & landscape services)
- **This site is separate from:** Lumomatics, thetechblogging (no cross-promotion)

## Maintenance

- **Content updates:** Regular new posts added via Sveltia CMS
- **Seasonal refreshes:** Update seasonal posts annually
- **Link checking:** Periodic review of internal/external links
- **Technical:** Keep Astro and dependencies updated

---

**Last Updated:** March 2024  
**Repository:** https://github.com/jcostab/landscapeideastips
