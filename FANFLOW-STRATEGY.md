# FanFlow — Global Event App Strategy & MVP Launch Plan

> **⚠️ DEPRECATED (March 2026):** This strategy doc reflects the original $5.99 paywalled city guide model. FanFlow has since pivoted to a **free real-time local deals platform** where consumers browse and claim deals for free, and businesses pay for visibility. See the updated app and website for the current product direction.

---

## 1. Assumptions

- **Launch target:** Vancouver, FIFA World Cup 2026 (June–July 2026). ~3 months to build and soft-launch.
- **Team:** Small (1–3 people), moving fast, founder-led content curation.
- **Budget:** Bootstrap-friendly. No native app store launch for MVP — mobile-first PWA to skip App Store review cycles.
- **Content model:** Human-curated, not AI-generated or user-generated. Quality over quantity. 40–60 recommendations per event module is the sweet spot.
- **Currency:** USD globally at launch. Localized pricing comes later with Stripe regional pricing.
- **First 90 days goal:** 1,000 paid event pack purchases at $5.99 = $5,990 revenue + validated model.

---

## 2. Product Positioning

**One-sentence positioning:**
FanFlow is the instant city guide built for fans — curated picks, zero decision fatigue, ready before you land.

**Short product description (for users):**
Going to a city for a big event? FanFlow gives you the best places to eat, drink, explore, and experience — handpicked for fans, not tourists. Open the app, pick what you're in the mood for, and go. No scrolling. No reviews to read. Just great choices, fast.

**Why it wins in an event context:**
Generic tools (Google Maps, TripAdvisor, Yelp) are designed for *residents* and *general tourists*. They give you 200 options and let you drown. FanFlow gives you 8 great options, filtered for the event you're attending, the neighborhood you're in, and the time you have. It's the difference between a search engine and a concierge.

**Why someone pays $5.99 instantly:**
Because they're standing in an unfamiliar city, the match starts in 3 hours, and they need a place to eat near the stadium *right now*. $5.99 is less than a beer. The alternative is 20 minutes of Googling, reading conflicting reviews, and hoping they picked right. FanFlow eliminates that entirely. It's a convenience purchase — the same psychology as buying a city metro card instead of figuring out individual tickets.

---

## 3. FanFlow Platform Architecture

```
FanFlow (Master App)
│
├── Landing / Home Screen
│   └── Event cards — visual, tappable, one per active event
│
├── Region Selector (auto-detected or manual)
│   └── North America → South America → Europe → Asia (expand over time)
│
├── City Selector
│   └── Vancouver (MVP) → São Paulo → London → etc.
│
├── Event Selector
│   └── FIFA World Cup 2026 (MVP) → Carnival 2027 → etc.
│
└── Event Experience Module (the product)
    ├── Discover
    ├── Eat
    ├── Experience
    ├── Chill
    └── Plan
```

**What belongs in the master app:**
- Account / purchase history
- Region/city/event browsing and selection
- Free preview content (enough to hook, not enough to satisfy)
- Payment processing (Stripe)
- Push notification opt-in for new event packs

**What belongs inside each event module:**
- All curated content for that city+event
- The 5-tab navigation (Discover / Eat / Experience / Chill / Plan)
- "What should I do right now?" quick-pick feature
- Save/bookmark functionality
- Offline access to saved picks

**How structure stays consistent:**
Every event module uses the identical 5-tab framework. Only the *content* changes. The shell, navigation, card layout, and interaction patterns are templated. Adding a new city/event = filling a content template, not building new UI.

---

## 4. Event Module Design

Each event module is a mini-app with 5 tabs:

### Tab 1: Discover
**Purpose:** "Show me the best stuff happening right now."
**Content:** Top 10–15 curated activities, attractions, and things to do — sorted by proximity to event venues and time-relevance. Includes fan zones, pop-ups, watch parties, iconic landmarks worth hitting between matches.
**Decision speed:** Swipeable cards. Each card = photo + name + 1-line hook + distance + time needed. Tap for detail. Choose in under 10 seconds.

### Tab 2: Eat
**Purpose:** "Where should I eat?"
**Content:** 12–15 restaurants and food spots, categorized by vibe: Quick Bite, Pre-Game Feast, Late Night, Local Must-Try. Each entry includes: photo, cuisine type, price range ($ / $$ / $$$), walking distance from key venues, and one opinionated sentence ("The best ramen within 10 min of BC Place").
**Decision speed:** Filter by vibe or price. Three taps max to a decision.

### Tab 3: Experience
**Purpose:** "What's the unforgettable thing I can only do here?"
**Content:** 8–10 unique, event-specific or city-specific experiences. Examples: seaplane over the harbor, craft brewery crawl in Gastown, Granville Island market morning, Grouse Mountain sunset. These are the Instagram moments.
**Decision speed:** Ranked list. #1 is the "if you do one thing" pick. No overthinking needed.

### Tab 4: Chill
**Purpose:** "I need to decompress between events."
**Content:** 8–10 low-key spots — best coffee shops, parks, waterfront walks, rooftop bars, quiet cafes. For the downtime between matches or after a long day.
**Decision speed:** Mood-based: "I want coffee," "I want fresh air," "I want a drink." One tap to filter.

### Tab 5: Plan
**Purpose:** "Let me save stuff and build a rough plan."
**Content:** Saved/bookmarked items from other tabs. Simple drag-to-reorder list. Optional: pre-built "Game Day Itinerary" templates (e.g., "3-Hour Pre-Match Plan" or "Rest Day Explorer").
**Decision speed:** Not about speed — about giving users a sense of control and reducing anxiety about missing out.

---

## 5. User Experience Flow

### Ideal User Journey

1. **Open app** → see a bold, visual home screen with the Vancouver FIFA event card front and center.
2. **Tap event card** → see a 3-screen preview: hero image, 3 sample picks, and a "Unlock Full Guide — $5.99" prompt.
3. **Purchase** → Stripe checkout (Apple Pay / Google Pay for one-tap). Instant unlock.
4. **Land inside the module** → default to Discover tab. See the top picks immediately.
5. **Choose something** → tap a card, read the 1-line hook, hit "Take Me There" (opens maps) or save it.

### The "Aha" Moment
The first time a user taps into the Discover tab and sees 10 perfect, event-relevant picks — with distances, vibes, and opinionated recommendations — and realizes they don't need to Google anything. That's the moment.

### Core Screens (MVP — max 5)

| Screen | What appears |
|---|---|
| **Home** | Event cards (Vancouver FIFA featured), region browse, "Coming Soon" teaser for future events |
| **Event Preview** | Hero image, 3 sample picks, social proof ("2,400 fans using this guide"), purchase CTA |
| **Event Module (tabbed)** | 5-tab navigation: Discover / Eat / Experience / Chill / Plan |
| **Detail Card** | Full recommendation: photo, description, address, hours, "Take Me There" button, save button |
| **My Saved** | Bookmarked items across all purchased event packs, organized by event |

### Navigation Model
- Bottom tab bar inside event modules (5 tabs).
- Home screen is a simple vertical scroll of event cards.
- No hamburger menus. No settings pages. No profile screens in MVP.
- Back button and close button are the only secondary navigation.

### Reducing Decision Fatigue
- Every list is capped at 15 items max. Most have 8–12.
- Every item has a 1-line opinionated hook — not a description, a *recommendation*.
- "Top Pick" badge on the #1 item in each tab.
- "Right Now" section at top of Discover tab — 3 picks based on time of day.

---

## 6. Content Strategy

### Why FanFlow Feels Better Than Free Tools

Google Maps gives you 200 restaurants sorted by rating. TripAdvisor gives you 50 reviews to read. FanFlow gives you 12 picks with one sentence each, chosen by someone who knows the city and the event context. The difference is **curation with opinion**.

### How Recommendations Are Selected

For the MVP, the founder (or a small team) curates every pick manually using this framework:

1. **Event proximity** — Is it near venues, fan zones, or transit hubs?
2. **Vibe match** — Does it fit the energy of someone at a major sporting event?
3. **Quality floor** — Would you personally recommend it to a friend visiting?
4. **Uniqueness** — Does it offer something you can't get anywhere else?
5. **Practical fit** — Hours, price, accessibility all work for a short-stay visitor?

Each pick gets: 1 photo, 1 opinionated sentence, address, hours, price range, and a "vibe tag."

### Keeping Content High-Quality

- Cap every category at 15 items. If you can't confidently recommend it, it doesn't make the cut.
- Review and refresh picks 2 weeks before the event.
- No user-generated content in V1. Curation is the product.

### Content Reuse Across Cities/Events

The *structure* is 100% reusable. The 5-tab framework, card format, and content schema are identical everywhere. Only the actual recommendations change. This means:

- A content template (spreadsheet or JSON) defines every module.
- New city = fill the template with 40–60 picks, upload photos, done.
- Estimated time to build a new event module: 3–5 days of focused curation.

### Keeping the MVP Lightweight

No CMS needed for V1. Content lives in structured JSON files or a simple Markdown/data layer. A lightweight admin interface can come later. For MVP, the founder edits content directly in the codebase or a shared spreadsheet that gets exported to JSON.

---

## 7. Pricing and Paywall

### What Users Get for Free

- Browse all available events and cities
- See the event preview screen: hero image, 3 sample recommendations, event description
- Access the home screen and event browsing experience

### What's Behind the $5.99 Event Pack

- Full access to all 5 tabs and all 40–60 curated picks
- "Right Now" time-aware recommendations
- Save/bookmark functionality
- Pre-built itinerary templates
- Offline access to saved picks

### Where the Paywall Appears

After the user taps into an event and sees the preview screen. They see *just enough* to feel the quality (3 real picks with photos and hooks), then hit the unlock prompt. This is the optimal paywall moment because:

- They've already self-selected (they're going to this event).
- They've seen proof of quality (real, specific recommendations).
- The friction is low (Apple Pay / Google Pay one-tap).
- The price is impulse-friendly ($5.99 = less than a coffee and pastry).

### Preview Content Before Purchase

Show exactly 3 picks from the Discover tab — fully detailed, with photos and hooks. This proves the content is real, specific, and useful. Then blur or lock the remaining picks with a count: "Unlock 47 more curated picks for $5.99."

### Pricing Currency

USD globally at launch. Stripe handles conversion. Localized pricing (e.g., R$29.90 in Brazil) should be implemented when expanding to non-North American markets, but not for MVP.

---

## 8. MVP Build Recommendation

### Chosen approach: Mobile-first Progressive Web App (PWA)

**Why PWA wins for this MVP:**

- **No App Store approval delays.** FIFA is a fixed-date event. You can't afford a 2-week App Store review cycle.
- **One codebase.** Works on iOS and Android via the browser. No Swift, no Kotlin.
- **Instant updates.** Push a content fix and it's live in seconds. No app update required.
- **Installable.** Users can add it to their home screen. Feels like a native app.
- **Offline capable.** Service workers cache purchased content for offline use.
- **Stripe integration is simple.** No Apple/Google 30% cut on in-app purchases if sold via web.

### Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Frontend | **Next.js (React)** | Fast, SEO-friendly landing pages + app-like PWA experience |
| Styling | **Tailwind CSS** | Rapid UI development, consistent design system |
| Hosting | **Vercel** or **Railway** | Zero-config deploy, edge CDN, fast globally |
| Payments | **Stripe Checkout** | Apple Pay / Google Pay support, one-tap purchase |
| Data | **JSON files** or **Supabase** (lightweight) | No complex backend needed for static curated content |
| Auth | **None for MVP** | Purchase receipt = access token. No login required. |
| Offline | **Service Worker** | Cache purchased event pack content for offline access |

### What to Build Now

- Landing page with event preview and purchase flow
- 5-tab event module with all curated content
- Stripe integration for $5.99 one-time purchase
- Purchase token stored in browser (cookie/localStorage) for access
- Basic analytics (Plausible or PostHog)

### What Waits Until Later

- User accounts and login
- Push notifications
- Admin CMS for content management
- Multiple simultaneous event modules
- Social features (sharing, friend activity)
- Native mobile apps

### What to Deliberately Exclude from MVP

- User reviews or ratings
- Search functionality (the whole point is you don't need to search)
- Booking/reservation integrations
- Chat or support
- Map view (just link to Google/Apple Maps)
- Multi-language support

---

## 9. Scalability Model

### Event Module Templating

Every event module follows an identical content schema:

```json
{
  "event": {
    "id": "vancouver-fifa-2026",
    "city": "Vancouver",
    "region": "North America",
    "event_name": "FIFA World Cup 2026",
    "dates": { "start": "2026-06-10", "end": "2026-07-19" },
    "hero_image": "url",
    "description": "short hook",
    "tabs": {
      "discover": [ ...items ],
      "eat": [ ...items ],
      "experience": [ ...items ],
      "chill": [ ...items ],
      "plan": { "templates": [ ...itineraries ] }
    }
  }
}
```

Each item follows the same card schema: name, photo, hook (1 sentence), address, hours, price_range, vibe_tags, distance_from_venue, time_needed.

### Adding New Cities/Events

1. Duplicate the content template.
2. Research and curate 40–60 picks (3–5 days of work).
3. Source photos (original or licensed).
4. Upload JSON + images. Deploy.
5. New event module is live.

No code changes required. The UI is identical — only the data changes.

### Reusable Parts

- Entire frontend shell and navigation (100% reused)
- Card components, detail views, tab structure (100% reused)
- Payment flow and access control (100% reused)
- Analytics and tracking (100% reused)
- Content schema and data format (100% reused)

### Keeping It Local While Staying Consistent

The structure is global. The voice is local. Each event module's 1-line hooks should feel like they were written by a friend who lives there. "Best poutine within stumbling distance of BC Place" feels Vancouver. "Melhor feijoada perto do Maracanã" feels Rio. Same format, different personality.

---

## 10. Social and Viral Funnel

### Content Pillars

1. **Pre-trip hype** — "You're going to Vancouver for FIFA? Here's what you need to know."
2. **Specific picks** — "The 3 best restaurants near BC Place, ranked."
3. **Game-day plans** — "Your perfect 3-hour pre-match plan in Vancouver."
4. **Hidden gems** — "Skip Robson Street. Do this instead."
5. **FOMO triggers** — "Don't leave Vancouver without doing this."

### Hook Strategy

Every piece of content follows the pattern: **Specific + Opinionated + Event-Tied.**

Examples:
- "Going to FIFA in Vancouver? Eat here, not there."
- "3 hours before kickoff. Here's your plan."
- "I spent a week finding the best food near BC Place. Here are the winners."
- "Skip the tourist traps. A local's guide to FIFA weekend in Vancouver."
- "The $12 meal every FIFA fan needs to try in Vancouver."

### CTA Strategy

Every post ends with one of:
- "Full guide in bio → FanFlow"
- "47 more picks like this → link in bio"
- "Don't Google it. We already did. → FanFlow"

### The Funnel

```
TikTok/Instagram post (hook + 3 picks)
    ↓
Bio link → FanFlow landing page
    ↓
Event preview (3 real picks shown free)
    ↓
"Unlock all 50 picks — $5.99" (Stripe one-tap)
    ↓
Instant access to full event module
```

### Viral Loop

**What gets shared:** The "Right Now" recommendation or a specific "hidden gem" pick — users screenshot or share the card directly.

**Who shares it:** A fan who just had a great experience at a FanFlow-recommended spot. They share the card on their Instagram story or send it to their group chat: "This place was amazing, found it on FanFlow."

**Why someone else installs or buys:** Their friend is also at FIFA, also needs dinner, and just saw proof that FanFlow actually works. Social proof from a real friend converts at 5–10x the rate of an ad.

**Mechanic:** Add a "Share this pick" button on every detail card that generates a branded image (restaurant photo + FanFlow logo + "Found on FanFlow"). When shared, it links back to the event preview page.

---

## 11. Differentiation

### FanFlow vs. the Alternatives

**Why not Google Maps?**
Google Maps gives you 200 results sorted by algorithm. You still have to read reviews, compare ratings, check hours, and wonder if the 4.2-star place is actually good or just has a lot of reviews. FanFlow gives you 12 picks with one opinionated sentence each. Decision made in 10 seconds vs. 10 minutes.

**Why not TripAdvisor?**
TripAdvisor is designed for people planning trips weeks in advance. It rewards thorough research. FanFlow is designed for someone standing in Vancouver *right now* who needs a recommendation *right now*. Different use case, different product.

**Why not free city guides?**
Free guides are generic, undated, and not tied to your specific event. They recommend "top 50 restaurants in Vancouver" without considering that you need something within walking distance of BC Place, open late, that can seat your group of 6 before the match. FanFlow is contextual.

### Three Sharp Examples Where FanFlow Wins

1. **It's 4pm, match at 7pm.** You want food near the stadium. Google Maps shows 87 restaurants. You spend 15 minutes reading reviews and still aren't sure. FanFlow: open Eat tab, filter "Pre-Game Feast," see 4 picks sorted by distance. Choose in 30 seconds.

2. **You have a free day between matches.** You could spend an hour Googling "things to do in Vancouver" and assembling a plan from 5 different blog posts. FanFlow: open the "Rest Day Explorer" itinerary template in the Plan tab. Done.

3. **Your friend asks "where should we go tonight?"** You could scroll through Instagram hashtags and hope for the best. FanFlow: open the Chill tab, tap "Late Night," share the top pick's card to your group chat. Hero moment.

---

## 12. 7-Day Build Plan

### Day 1: Foundation
- Set up Next.js project with Tailwind CSS
- Deploy to Vercel/Railway (empty shell, live URL)
- Set up project structure: pages, components, data layer
- Create content schema (JSON format for event modules)

### Day 2: Landing Page + Payment
- Build landing page: hero, value prop, event preview
- Integrate Stripe Checkout for $5.99 one-time purchase
- Build purchase confirmation → access token flow
- Test Apple Pay / Google Pay on mobile

### Day 3: Event Module Shell
- Build 5-tab navigation component
- Build recommendation card component (photo, hook, vibe tags, distance)
- Build detail view (full card with "Take Me There" + save)
- Wire up tab switching and basic state

### Day 4: Content + Data
- Curate first 20 picks (Discover + Eat tabs)
- Source photos for all 20 picks
- Build JSON data files and wire to components
- Test content rendering on mobile

### Day 5: Remaining Content + Features
- Curate remaining 20–30 picks (Experience, Chill, Plan tabs)
- Build "Right Now" time-aware section
- Build save/bookmark functionality (local storage)
- Build 2 pre-built itinerary templates

### Day 6: Polish + PWA
- Add service worker for offline support
- Add "Add to Home Screen" prompt
- Mobile responsive testing across devices
- Performance optimization (image lazy loading, caching)
- Add analytics (Plausible or PostHog)

### Day 7: QA + Soft Launch
- Full end-to-end testing: browse → preview → purchase → use
- Fix bugs and edge cases
- Prepare social media assets (3 teaser posts)
- Soft launch to friends/beta testers for feedback

---

## 13. 14-Day Launch Plan

### Week 1 (Days 1–7): Build + Soft Launch
- Days 1–7: Execute the 7-day build plan above.
- By end of Day 7: working product, live URL, 5–10 beta testers using it.

### Week 2 (Days 8–14): Content + Public Launch

**Day 8:** Incorporate beta feedback. Fix top 3 issues. Finalize all content.

**Day 9:** Create landing page optimized for social traffic (OG tags, mobile-first, fast load). Create the "Share this pick" card generator.

**Day 10:** Record 5 TikTok/Reels videos:
- "3 best restaurants near BC Place"
- "Your perfect FIFA game-day plan in Vancouver"
- "Skip the tourist traps — do this instead"
- "The hidden gem every FIFA fan needs"
- "Why I built this app" (founder story)

**Day 11:** Post first 2 videos (TikTok + Instagram simultaneously). Monitor engagement. Respond to every comment.

**Day 12:** Post video 3 + 4. Start Reddit engagement (r/vancouver, r/fifa, r/worldcup, r/travel). Post genuine value, not spam.

**Day 13:** Post video 5. Run first small ad test ($50 on Instagram) targeting "FIFA 2026" + "Vancouver travel" interests. Measure CPC to landing page.

**Day 14:** Analyze first week metrics. Double down on what's working. Adjust content strategy based on which posts drove the most landing page visits and conversions.

### Content Rollout Priority
1. TikTok/Reels (highest organic reach potential)
2. Instagram Stories (shareable, ephemeral urgency)
3. Reddit (targeted communities, high intent)
4. Twitter/X (event conversation threads)

### Assets Needed
- 5 short-form videos (15–30 seconds each)
- 10 Instagram carousel/story graphics
- 3 Reddit posts (genuine, value-first)
- Landing page with OG meta tags for social sharing
- "Share this pick" branded card template

---

## 14. Risks and Metrics

### Top 5 Risks

| Risk | Severity | Mitigation |
|---|---|---|
| **Low conversion from free preview to purchase** | High | Test different preview content. Show 3 picks, not 1. Add social proof ("2,400 fans using this"). A/B test CTA copy. If conversion stays under 2%, consider freemium model with premium "insider picks." |
| **Content quality doesn't feel worth $5.99** | High | Invest heavily in opinionated, specific hooks. Every pick must pass the "would I send this to a friend?" test. Get 5 locals to review before launch. Quality is the entire product. |
| **FIFA event timing pressure — not ready in time** | Medium | The 7-day build plan is aggressive but achievable. Cut scope ruthlessly. The Plan tab can launch with just 2 templates. Chill tab can have 6 picks instead of 10. Ship something great, not everything. |
| **Social content doesn't get traction** | Medium | Produce 5 videos before launch, post 1/day. If organic reach is low by Day 12, shift budget to paid ($200 Instagram ads targeting FIFA travelers). The content also serves as landing page social proof. |
| **Users buy once but don't open the app during the event** | Low | Send one push notification on match days: "Game day! Here's your pre-match plan." Keep the "Right Now" section genuinely useful and time-aware. |

### Top 3 Success Metrics

| Metric | Target (MVP) | Why It Matters |
|---|---|---|
| **Preview → Purchase conversion rate** | 8–12% | Proves the value proposition lands. If people who see the preview buy, the product-market fit is real. Below 5% = rethink pricing or preview content. |
| **Event module engagement (picks viewed per session)** | 5+ picks per session | Proves the content is useful and the UX works. If users only view 1–2 picks, the curation or navigation is failing. |
| **Paid event packs sold (first 30 days)** | 500+ | Proves the acquisition funnel works. At $5.99 × 500 = ~$3,000. Enough to validate the model and justify building the next event module. |

---

*Document generated: March 20, 2026*
*FanFlow — The instant city guide for fans.*
