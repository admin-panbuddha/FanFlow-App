# Worklow — Full Product & Platform Strategy

**Version:** 4.0
**Date:** March 20, 2026
**Prepared for:** PanBuddha
**Status:** Strategic Blueprint — Pre-MVP

---

## 1. Product Definition

**Worklow** is a mobile-first marketplace app that helps remote workers, digital nomads, and traveling professionals discover the best places to work from in any city — starting with Vancouver.

**The problem is specific:** when you land in a new city (or even your own), finding a place that's actually good for working is painful. Google Maps tells you a café exists. Yelp tells you the latte is good. Neither tells you if the WiFi holds a Zoom call, if there are outlets, or if you'll be squeezed at a two-person table for four hours.

**Worklow solves this with structured, curated, work-specific data** — not generic reviews. Every location is scored on the dimensions that matter to someone who needs to get work done: WiFi speed, seating comfort, noise level, outlet access, washroom availability, and overall work-friendliness.

**Positioning:** "Built for working, not browsing. Make a decision in 10 seconds."

**Critical architecture principle:** While the entry point is remote work, the platform is designed from day one to support multiple business types — coffee shops, restaurants, coworking spaces, bakeries, lounges, hotel lobbies, and any establishment that wants to promote offers or appear as a recommended location. The vendor category system is baked into the data model, not bolted on later. This means Worklow can start as "the best places to work" and expand into "the best local places, period" without a database migration or architecture rewrite.

**Why this wins against Google Maps, Yelp, and TripAdvisor:**

Google Maps is a navigation tool. Yelp is a food discovery tool. TripAdvisor is a tourism tool. None of them are built for the question "where should I work today?" Their review systems are unstructured — a five-star review might praise the espresso but say nothing about whether you can charge your laptop. Worklow replaces the 20-minute research spiral with a single screen that shows you exactly what you need, scored on axes that generic platforms don't even track. Structured data beats free-text reviews every time when the user has a specific need.

The dual-sided model creates defensibility: users contribute reviews, check-ins, and photos that make the data richer. Businesses pay to promote offers to a hyper-targeted audience that's already physically nearby and ready to spend money. The more users contribute, the more businesses want in. The more businesses offer deals, the more users engage. Classic marketplace flywheel.

---

## 2. MVP Scope

The MVP must prove two things: (1) users will use structured work data to choose where to work, and (2) businesses will pay for visibility in front of this audience. Everything else is growth-phase.

### User-Side MVP

- Browse a curated directory of 50–80 locations in Vancouver across multiple venue types (cafés, coworking spaces, restaurants, bakeries, lounges)
- Each location shows structured data: WiFi quality (rated), seating comfort (rated), outlet availability (yes/partial/no), noise level (quiet/moderate/lively), washroom access (public/customers/none), price range, hours, vendor category
- Filter by what matters: "has fast WiFi," "has outlets," "quiet," "open now," and by venue type
- View on map or list
- No account required to browse
- Optional account to save favorites and submit reviews

### Merchant-Side MVP

- Simple signup form: business name, email, phone, address, vendor category (café/coworking/restaurant/bakery/lounge/other), and a text field for offers
- Vendor category selection is required at signup — this drives how the listing appears, what structured fields are shown, and how offers are categorized
- Manual review by Worklow team before listing goes live (quality gate)
- No dashboard, no analytics — just "submit and we'll feature you"

### Explicitly Not in MVP

- AI recommendation engine
- Gamification beyond basic check-ins
- Push notification campaigns for merchants
- Automated merchant onboarding
- Complex analytics dashboard
- Multi-city support

**Goal:** Launch in Vancouver within 8 weeks. 50+ locations across at least 4 venue types. 10+ merchant partners. Validate demand before building infrastructure.

---

## 3. Consumer Experience

### Discovery Flow

The user opens Worklow and immediately sees a map view of nearby work-friendly spots, each with a work-friendliness score (1–10) visible on the pin. Pins can be color-coded or icon-coded by vendor category so users can visually scan for cafés vs. coworking spaces vs. restaurants at a glance. They can switch to list view sorted by distance, score, or "open now." Each listing card shows the essential info: name, vendor type, work score, distance, and one highlight ("Fast WiFi · Quiet · Outlets").

Tapping a listing opens the detail view with the full structured data grid, photos, user reviews (structured — not free-text paragraphs, but rated dimensions), and any active offers from the business. The user can check in, leave a review, or save the spot. The structured fields shown adapt slightly based on vendor category — a coworking space shows meeting room availability and day pass pricing, while a restaurant shows lunch specials and peak dining hours.

### The "10-Second Decision" Principle

Every screen is designed around one question: "Can I decide in 10 seconds?" The structured data grid is the core innovation — instead of reading through 47 Yelp reviews hoping someone mentions WiFi, the user sees a clean grid: WiFi ★★★★☆, Seating ★★★★★, Outlets: Yes, Noise: Moderate. Decision made.

### User Review Model

When a user reviews a location, they don't write a paragraph. They rate each work dimension on a 5-point scale and optionally add a one-sentence comment. This keeps reviews structured, comparable, and useful. Free-text noise is minimized while still allowing personal notes. Review dimensions can include category-specific fields — a restaurant review might include a "food quality" dimension alongside the work-specific ones.

### User Types

The primary personas are: the **daily remote worker** (same city, rotating between spots), the **digital nomad** (new city every few weeks, needs spots fast), and the **business traveler** (in town for 2–3 days, needs reliable WiFi for calls). Each has slightly different priorities but all share the same core need: "Where can I actually work?" As the platform expands beyond work-specific use cases, additional personas emerge: the **deal hunter** (looking for local offers), the **foodie explorer** (wants curated dining picks), and the **event visitor** (in town for a specific event, needs everything — work spots, food, experiences).

---

## 4. Merchant Experience

### Why Businesses Care

Cafés, coworking spaces, restaurants, bakeries, and lounges all share a common challenge: attracting the right customers at the right time. A café wants the remote worker who buys a coffee and orders lunch. A restaurant wants the lunch crowd between 11 and 2. A coworking space wants the day-pass buyer. A bakery wants morning foot traffic. Worklow delivers intent-filtered audiences — people who are already nearby and actively deciding where to go.

### Merchant Journey

**Phase 1 — Free listing.** Any business can be listed (curated by Worklow team or user-submitted). The business gets basic visibility for free. This builds initial supply across all vendor categories.

**Phase 2 — Claimed profile.** The business claims their listing, verifies ownership, and can update hours, add photos, and upload their menu. The onboarding flow adapts to their vendor category — a restaurant sees prompts for menu uploads and lunch specials, while a coworking space sees prompts for pricing tiers and amenity lists. Still free.

**Phase 3 — Promoted listing.** The business pays to boost visibility: appear higher in search results, get featured in "Top Picks," and display active offers prominently. Promotions can be targeted by user intent and vendor category.

**Phase 4 — Campaigns.** The business runs targeted promotions: "20% off after 2pm for Worklow users," push notifications to nearby users segmented by user preferences and vendor category, sponsored placement in weekly curated lists.

### Merchant Onboarding (MVP)

Keep it dead simple. A single form: business name, address, email, phone, vendor category (café / coworking / restaurant / bakery / lounge / other), and a text field for "any offer you'd like to promote." The Worklow team manually creates the listing, verifies the data, and adds structured scores from an in-person visit or user reports. No self-serve dashboard in MVP. The vendor category selection at signup is mandatory — it determines which structured fields apply to the listing and how the business appears in search results.

---

## 5. Gamification & Discount Redemption System

Gamification serves two purposes: (1) drive user-generated content that makes the platform better, and (2) close the loop between discovery, physical visits, and merchant value. The discount redemption system is the bridge — it turns digital engagement into measurable foot traffic, which is the single most important metric for merchant retention and monetization.

### The Full Loop

The core engagement cycle is: **Discovery → Navigation → Arrival → Check-In → Redemption → Reward → Review → Retention.** Every step generates data. Every step creates value for either the user, the merchant, or the platform. No step is wasted.

### Check-In System

Users check in when they arrive at a location. Check-ins are GPS-validated — the user must be physically near the venue (within ~100m) for the check-in button to activate. This prevents remote check-in abuse and ensures every check-in represents a real visit.

**Points:** 10 coins per check-in, max 1 per venue per day. Check-ins at venues with active offers earn 15 coins (incentivizes visiting venues with deals).

### Discount Redemption Flow

When a user checks in at a venue with an active offer, the system generates a **redemption token** — a unique QR code or short alphanumeric code. This token is proof that the user arrived via the platform and is eligible for the discount.

**Token rules:** Each token is tied to one user, one offer, and one check-in. Tokens expire 2 hours after generation. One token per offer per user (time-limited — same user can redeem the same offer again after 24 hours). The user shows the token to the merchant (visual verification at MVP, scan-based verification in post-MVP).

**Redemption points:** Successful redemption (merchant validates the token) earns 20 coins on top of the check-in reward. This creates a double incentive: check in (10–15 coins) + redeem (20 coins) = 30–35 coins per visit with a deal.

### Post-Redemption Engagement

After redeeming an offer, the user is prompted: "Leave a Google Review and unlock an extra reward." If the user confirms they left a review (honor system at MVP, link-tracking post-MVP), they receive a bonus 15 coins and optionally an extra discount (e.g., +10% on their next visit). This creates user-generated content on external platforms (Google Reviews), which increases the merchant's visibility outside of Worklow — a tangible benefit merchants can see and measure.

### Review System

Structured reviews (rating each work dimension) earn more points than check-ins because they're higher-value data.

**Points:** 25 coins per review, bonus 10 coins if the user adds a photo.

### Photo Contributions

User photos keep listings fresh and authentic. Photos of the workspace, outlets, seating areas, and menu are especially valuable.

**Points:** 15 coins per approved photo.

### Contributor Tiers & Badges

- **Explorer** (0–100 coins): Basic user. Can browse, review, check in. Badge: "Explorer" — unlocked after 5 check-ins.
- **Regular** (100–500 coins): Unlocks "trusted reviewer" badge. Reviews get priority display. Badge: "Regular" — unlocked after 20 check-ins.
- **Local Expert** (500–2000 coins): Unlocks exclusive deals from partner businesses. Name appears on location pages as a top contributor. Badge: "Local Pro" — unlocked at 50 check-ins + 10 reviews.
- **City Guide** (2000+ coins): Invitation to curate official Worklow picks. Early access to new features. Recognition on leaderboard. Badge: "Top Contributor" — unlocked with reviews + photos + consistent activity.

### City Leaderboard

A monthly leaderboard of top contributors in each city. Resets monthly to keep competition fresh. Top 10 get featured and receive exclusive partner deals. Optional weekly challenges: "Check in at 3 new venues this week" → bonus 50 coins.

### What Not to Gamify

Don't gamify merchant interactions. Don't let coins be exchanged for money. Don't create pay-to-win mechanics. Keep it clean: real-world actions earn status and unlock better deals.

---

## 6. Data Model & Location Intelligence

### Location Data Schema

Every location in Worklow has two layers of data: **curated data** (set by the Worklow team or business owner) and **crowdsourced data** (aggregated from user reviews and check-ins).

**Core fields (all vendor types):**

- Name, address, coordinates, vendor_category, hours, price range
- WiFi quality (1–5, crowdsourced average)
- WiFi speed (Mbps, if tested)
- Seating comfort (1–5)
- Outlet availability (none / limited / plenty)
- Noise level (quiet / moderate / lively)
- Washroom access (public / customers only / none)
- Work-friendliness score (composite 1–10, weighted algorithm)
- Peak hours (from check-in data)
- Photos (user-submitted, moderated)
- Active offers (merchant-submitted)

**Category-specific extended fields** (stored as structured JSON, rendered based on vendor_category):

| Vendor Category | Extended Fields |
|---|---|
| café | specialty_drinks, food_menu, outdoor_seating, loyalty_program |
| coworking | day_pass_price, meeting_rooms, printer_access, locker_storage, membership_tiers |
| restaurant | cuisine_type, lunch_special, reservation_needed, group_friendly |
| bakery | morning_hours, pastry_selection, grab_and_go |
| lounge | alcohol_served, evening_hours, vibe_description |
| hotel_lobby | guest_only, lobby_cafe, business_center |

This approach keeps the core schema clean while allowing each vendor type to surface the fields that matter most to users looking at that type of location.

### Work-Friendliness Score Algorithm

The composite score (1–10) is calculated from weighted dimensions: WiFi (30%), Seating (20%), Outlets (15%), Noise (15%), Hours/Accessibility (10%), Value (10%). Weights can be tuned per user preference over time ("I care most about quiet") but the default weighting reflects what most remote workers prioritize.

### Location Intelligence (Post-MVP)

Once enough check-in and review data accumulates, Worklow can surface intelligent recommendations: "Quiet spots open right now near you," "Best WiFi in Gastown," "Trending this week." This is where the data becomes a moat — no competitor can replicate thousands of structured, work-specific data points built over months of user contributions. With vendor categories, recommendations become richer: "Best café for morning work," "Restaurants with lunch deals near your coworking space," "Lounges for after-work drinks with WiFi."

### Data Quality

Every user-submitted data point is validated against the aggregate. If one user rates WiFi 1/5 but 30 others rate it 4/5, the outlier is flagged. Businesses can dispute inaccurate data through their claimed profile. The Worklow team manually verifies top listings periodically.

---

## 7. Marketplace Strategy

### The Cold Start Problem

Every marketplace has a chicken-and-egg problem. Worklow solves it by making the consumer side useful without merchant participation. The curated directory of 50–80 locations with structured data is valuable even if zero businesses have signed up. Users come for the data. Businesses come for the users.

### Supply Strategy (Locations)

**Phase 1 (Pre-launch):** Worklow team personally visits and reviews 50+ locations in Vancouver across multiple vendor categories. This seeds the platform with high-quality, verified data. No dependency on users or merchants. Target mix: 25 cafés, 10 coworking spaces, 10 restaurants, 5 bakeries/lounges/other.

**Phase 2 (Post-launch):** Users submit new locations. Each submission is reviewed before going live. The gamification system incentivizes contributions.

**Phase 3 (Growth):** Businesses self-submit and claim profiles. AI assists with data extraction from existing sources (Google Maps hours, photos, etc.) to pre-populate fields.

### Demand Strategy (Users)

**Vancouver launch playbook:**

- Target remote worker communities: Vancouver digital nomad Facebook groups, Reddit r/vancouver and r/digitalnomad, coworking Slack channels
- Partner with 3–5 coworking spaces for cross-promotion
- Content marketing: "Best Places to Work in Vancouver" blog posts, Instagram content
- Launch week: featured in local tech newsletters (BetaKit, Daily Hive tech section)
- Referral program: invite a friend → both get access to exclusive deals

### Network Effects

The flywheel: More users → more reviews and check-ins → better data → more useful product → more users. Simultaneously: more users → larger audience for merchants → more merchants sign up → more deals for users → more users. Both loops reinforce each other.

### Geographic Expansion Model

Vancouver proves the model. Then: Toronto, Montreal, major US cities. Each new city requires the same seeding process (50+ curated locations across multiple vendor categories) before launch. This is operationally heavy but ensures quality. The playbook becomes faster each time as the team builds templates and processes.

---

## 8. Monetization Strategy

### Revenue Streams

**Tier 1 — Promoted Listings ($49–99/month)**

Business appears higher in search results and gets a "Promoted" badge. Includes basic analytics (views, clicks). This is the bread-and-butter revenue stream. Price may vary by vendor category — a coworking space with higher revenue per customer can justify a higher tier.

**Tier 2 — Featured Placement ($149–299/month)**

Business is featured in curated "Top Picks" lists, homepage spotlight, and weekly email digest. Includes advanced analytics and a custom offer displayed prominently. Placements can be category-specific ("Top Cafés This Week") or cross-category ("Best Spots Near BC Place").

**Tier 3 — Campaign Tools ($199–499/month)**

Full campaign suite: push notification campaigns to nearby users segmented by preference and vendor category interest, sponsored placements in specific categories, time-based promotions ("Happy Hour for Worklow users"), and detailed conversion analytics.

**One-Time Options:**

- Sponsored newsletter feature: $299
- Event promotion (pop-up, launch party): $199
- Custom branded content: $499

### Pricing Philosophy

Free tier must always exist (basic listing). Monetization is about amplification, not access. A business can be on Worklow for free forever. They pay to be louder, not to exist.

### Revenue Projections (Year 1, Vancouver Only)

Conservative: 30 paying merchants × $99/month average = ~$36K ARR. Moderate: 60 paying merchants × $149/month average = ~$107K ARR. Aggressive: 100 paying merchants × $199/month average = ~$239K ARR.

The real revenue unlocks at multi-city scale where the merchant base compounds. Multi-vendor support increases the addressable merchant base significantly — instead of only targeting cafés and coworking spaces, the platform can sign restaurants, bakeries, lounges, and other establishments.

---

## 9. AI Product Features

### Location Intelligence Engine

AI analyzes aggregated review data, check-in patterns, and external signals to generate recommendations. "Based on your past check-ins, you prefer quiet cafés with fast WiFi — here are 3 new spots you haven't tried." With vendor category data, the AI can cross-recommend: "You always work at café X in the morning — here's a lunch deal at the restaurant next door." This becomes more powerful as the dataset grows across vendor types.

### Structured Data Extraction

When a business claims their profile and uploads a menu or description, AI extracts structured data automatically: hours, price range, amenity mentions, cuisine type, and category-specific fields. A restaurant menu upload auto-populates cuisine_type, lunch_special, and price_range. A coworking space description auto-populates day_pass_price and available amenities. This reduces manual data entry and keeps listings current.

### Review Summarization

Instead of showing 50 individual reviews, AI generates a summary: "Users love the fast WiFi and spacious seating. Common complaints: limited outlets near the window seats. Best for: quiet focused work. Avoid during: lunch rush (12–1pm)." Summaries adapt to vendor category — a restaurant summary highlights food quality alongside work-friendliness.

### Content Ranking

AI ranks locations in search results using a model that weights: relevance to query, recency of reviews, check-in frequency, data completeness, vendor category match, and user preferences. This replaces simple distance-based sorting with genuinely useful recommendations.

### Spam and Quality Detection

AI flags suspicious reviews (duplicate text, bot patterns, review bombing), fake check-ins (GPS mismatch), and low-quality photos. Human moderators handle flagged content. The system learns from moderation decisions.

### Future: Predictive Availability

With enough check-in data, the system can predict crowd levels at different times: "This café is usually quiet on Tuesday afternoons but packed on Saturday mornings." This is a high-value feature that competitors can't easily replicate without the same data.

---

## 10. AI Agent Workflow System

### Purpose

The AI agent system automates merchant acquisition, onboarding, and retention workflows. It handles the repetitive operational work so a small team can manage hundreds of merchant relationships across multiple vendor categories.

### Workflow Map

```
DISCOVERY → OUTREACH → RESPONSE → ONBOARDING → ACTIVATION → RETENTION
```

**Discovery:** Identify target businesses in a city. Sources: Google Maps API (cafés, coworking spaces, restaurants, bakeries, lounges), local business directories, user-submitted locations. Discovery is segmented by vendor category so outreach can be prioritized and personalized.

**Outreach:** Automated initial contact. Personalized email based on business type, vendor category, and location. A coworking space gets a different pitch than a bakery — the value proposition is tailored to what that type of business cares about.

**Response Handling:** Track opens, clicks, replies. Auto-classify: interested / not interested / needs follow-up. Route interested leads to category-specific onboarding flows.

**Onboarding:** Guide the business through profile creation. The onboarding flow adapts to vendor category — different required fields, different prompts, different examples. AI pre-fills what it can from public data. Request missing category-specific info via automated email.

**Activation:** Business publishes their first offer or promotion. The offer creation flow is category-aware — a café is prompted for "WiFi + Coffee" bundles, a restaurant for lunch specials, a coworking space for day pass deals. System confirms listing is live and sends a welcome message.

**Retention:** Monthly engagement check. Businesses with low activity get re-engagement prompts tailored to their category. High performers get upsell offers relevant to their vendor type.

### Trigger Events

| Event | Action |
|---|---|
| New location added by user | Check if business exists in CRM. Tag with vendor category. If not in CRM, add to outreach queue with category-appropriate template. |
| Business opens outreach email | Wait 2 days. If no reply, send category-tailored follow-up. |
| Business clicks signup link | Fast-track to category-specific onboarding flow. |
| Business completes signup form | Auto-create listing draft with category fields. Send for review. |
| Business listing goes live | Send activation email with category-specific tips and offer suggestions. |
| Business has 0 offers after 14 days | Send "create your first offer" nudge with examples from their vendor category. |
| Business offer gets 50+ views | Send performance report. Suggest upgrade. |
| Business inactive for 30 days | Send re-engagement email with category benchmarks ("cafés in your area average 120 views/week"). |

### Email Templates

**Initial Outreach (category-adaptive):**

For cafés — Subject: "Your café is popular with remote workers — want more of them?"
For restaurants — Subject: "Reach hundreds of hungry professionals near [Address]"
For coworking — Subject: "Worklow sends you qualified day-pass buyers — free to list"

Body adapts per category: Introduce Worklow. Mention that their location was discovered by users or identified as a fit. Explain the specific value for their business type. Offer free listing. CTA: "Claim your profile in 2 minutes."

**Follow-Up (Day 3):**

Subject: "Quick follow-up — free visibility for [Business Name]"

Body: Brief reminder. Social proof from their vendor category ("12 cafés in Gastown are already listed"). CTA: same signup link.

**Onboarding — Missing Info:**

Subject: "Almost there — we just need a few details"

Body: List specific missing fields based on their vendor category (hours, photos, WiFi info for cafés; pricing tiers and amenities for coworking spaces; menu and cuisine type for restaurants). Make it easy: reply to this email with the info, or use the form link.

**Activation Confirmation:**

Subject: "You're live on Worklow!"

Body: Confirm listing is active. Share direct link to their profile. Suggest creating a first offer with category-specific examples. Include quick stats on nearby user activity.

**Re-engagement:**

Subject: "[Business Name] had 340 views last month — here's how to convert them"

Body: Share real metrics benchmarked against their vendor category. Suggest creating a time-limited offer. Mention upgrade options.

### Automation vs. Human Review

**Fully automated:** Email sends, follow-up scheduling, CRM updates, basic analytics reports, check-in/review notifications, category-based template selection.

**Human review required:** Listing approval (quality gate), dispute resolution, outreach email personalization for high-value targets, escalated merchant issues, any communication that involves pricing negotiation, new vendor category creation.

### Anti-Spam Rules

- Maximum 3 outreach emails per business before marking as "not interested"
- Minimum 3 days between automated emails
- All emails include one-click unsubscribe
- No automated outreach to businesses that have previously declined
- Push notifications to users capped at 2 per day, 5 per week

### CRM Integration

Track every merchant interaction in a simple pipeline: Lead → Contacted → Interested → Onboarding → Active → Paying. Each record includes vendor_category. Pipeline analytics are segmented by category so the team can see which vendor types convert best and prioritize outreach accordingly.

---

## 11. Corporate Website Strategy

### Purpose

The website serves three functions: (1) explain what Worklow is, (2) drive app downloads, (3) convert businesses into partners. It must feel like a real company — not a side project. The messaging should frame Worklow as a local discovery platform, not a "coffee shop finder." The hero and value props should use language that naturally encompasses all venue types.

### Site Structure

**Homepage:**

- Hero: "Built for working, not browsing." Clear value prop. Dual CTAs immediately visible.
- Path split: [ I Want Better Places to Work ] / [ I Want to Promote My Business ]
- App showcase: phone mockup showing the structured data grid, map view with mixed venue type pins, and review interface
- How It Works: dual flow (Users: Browse → Filter → Decide in 10s / Businesses: Sign Up → Create Offers → Reach Workers)
- Social proof: number of locations, active users, cities, venue categories represented
- Business section: merchant value proposition with examples across vendor categories, dashboard preview, pricing tiers
- Marketplace scale: "Growing city by city" with a roadmap
- Final CTA: waitlist + dual buttons

**Business page (/business):**

- Dedicated landing page for merchant acquisition
- Pain point → solution narrative, with category-specific examples
- Pricing tiers with clear feature comparison
- Testimonials from early partners across multiple vendor types
- Signup form with vendor category selection

**About page:**

- Team, mission, story
- "Why we built this" narrative

**Blog:**

- "Best Places to Work in Vancouver" (SEO play)
- "Best Lunch Spots Near Coworking Spaces" (cross-category content)
- Remote work tips
- City guides (pre-launch content marketing for new cities)

### Design Direction

Dark premium theme consistent with the PanBuddha brand ecosystem. If Worklow has its own color identity, it should lean into professional warmth — perhaps deep navy backgrounds with warm amber/gold accents to differentiate from FanFlow's cyan/lime energy. The tone is professional but approachable. Not corporate, not startup-bro. Think: "the tool serious remote workers actually use."

### Tech Stack

Next.js + Tailwind CSS (consistent with existing PanBuddha projects). Railway for hosting. Shared Postgres database pattern. Same deploy workflow: Cowork → GitHub → Railway.

---

## 12. Vancouver Launch Strategy

### Pre-Launch (Weeks 1–4)

**Week 1–2:** Personally visit and review 30 locations in high-density areas: Downtown, Gastown, Kitsilano, Mount Pleasant, Commercial Drive. Cover multiple vendor categories per neighborhood — at minimum 2 cafés, 1 coworking space, and 1 restaurant per area. Photograph each. Score on all structured dimensions. This is the seed data.

**Week 3:** Build MVP app. 30+ locations loaded across 4+ vendor categories. Basic browse, filter, and map view working. No merchant features yet — all listings are curated by the team.

**Week 4:** Soft launch to 50 beta users from local remote worker communities. Collect feedback. Fix critical issues. Add 20+ more locations based on user suggestions.

### Launch (Weeks 5–6)

**Week 5:** Public launch. Announce in Vancouver remote worker groups (Reddit, Facebook, Slack). Post the "Best Places to Work in Vancouver" article. Reach out to local tech media.

**Week 6:** Begin merchant outreach. Target the 10 most popular locations (by check-in data) first, across multiple vendor categories. Offer free featured listing for 3 months. Goal: 10 signed merchant partners across at least 3 vendor types.

### Post-Launch (Weeks 7–12)

- Continue adding locations (target 80+ by week 12, across 5+ vendor categories)
- Activate gamification system
- Launch first paid merchant tier
- Begin content marketing cadence (1 blog post/week)
- Evaluate metrics: DAU, check-ins/day, reviews/week, merchant signups, category distribution

### Key Metrics for Vancouver Validation

- 500+ monthly active users by month 3
- 80+ listed locations across 5+ vendor categories
- 15+ claimed business profiles
- 5+ paying merchants
- 200+ user reviews submitted
- Average session: user finds a spot within 30 seconds
- At least 3 vendor categories with 10+ listings each

If these metrics are hit, begin planning Toronto expansion.

---

## 13. Risks

**Data bootstrapping is hard.** The product is only as good as its data. If the initial 50 locations have poor or inaccurate data, users won't trust the platform. Mitigation: personal visits and verification for every seed location. No shortcuts.

**Marketplace cold start.** Users won't come without locations. Businesses won't come without users. Mitigation: make the consumer side useful without any merchant participation. The curated directory is the hook.

**User-generated content quality.** If reviews are low-quality, spammy, or inaccurate, the platform loses its edge over Google Maps. Mitigation: structured reviews (rated dimensions, not free text) naturally produce higher-quality data. Moderation system catches outliers.

**Merchant churn.** If businesses don't see ROI, they cancel. Mitigation: start with free tier. Only convert to paid after demonstrating value (views, check-ins at their location). Monthly performance reports.

**Competition.** Google could add "work-friendly" filters tomorrow. Mitigation: Worklow's advantage is depth and specificity of data, plus community. Google does everything broadly. Worklow does one thing deeply. That specificity is hard to replicate in a general-purpose product.

**Geographic expansion risk.** Each new city requires significant seeding effort. If the team is small, expansion is slow. Mitigation: build the seeding playbook in Vancouver so it's repeatable. Consider local ambassadors/community managers for new cities.

**Vendor category sprawl.** Adding too many vendor types too fast can dilute the product's focus and confuse the user experience. Mitigation: start with 5–6 core categories that overlap with the remote work use case. Only add new categories when there's clear user demand and the data model already supports them (which it will, by design).

**Category-specific data gaps.** Some vendor types may have sparse data if few users visit them. A lounge with 2 reviews looks thin next to a café with 50. Mitigation: prioritize seeding the categories that matter most for the core use case. Thin categories can be hidden until they have enough data to be useful.

**Regulatory.** No significant regulatory risk for a review/recommendation platform. Standard data privacy compliance (PIPEDA in Canada, GDPR if expanding to EU).

---

## 14. Final Recommendation

**Build Worklow as a focused tool for remote workers, with a backend that supports multi-vendor expansion from day one.** The marketing says "best places to work." The architecture says "flexible multi-vendor local discovery platform." This means the user sees a curated, opinionated product. The database sees a scalable, category-aware data model. Both are true. Neither limits the other.

**Launch sequence:**

1. Seed 50+ Vancouver locations across 4+ vendor categories with verified, structured data (weeks 1–3)
2. Build and ship MVP — browse, filter, map, vendor category filtering (weeks 3–5)
3. Soft launch to beta users, iterate (weeks 5–6)
4. Public launch with content marketing push (week 7)
5. Begin merchant outreach to top 20 locations across multiple categories (weeks 7–8)
6. Activate gamification to drive user-generated content (week 9)
7. Launch first paid merchant tier (week 10)
8. Evaluate Vancouver metrics, including per-category health (week 12)
9. If validated, begin Toronto seeding (week 14)

**Critical success factors:**

- Data quality over quantity. 50 excellent listings beats 500 mediocre ones.
- Speed of decision. Every UI decision should be evaluated against "can the user decide in 10 seconds?"
- Merchant value proof. Don't charge merchants until you can show them real numbers.
- Community, not just content. The gamification system must create a sense of belonging, not just transaction.
- Multi-vendor by architecture, focused by marketing. The user doesn't need to know the system supports 12 vendor types. They just need to find a great place to work.

**What makes Worklow defensible long-term:** proprietary structured data on thousands of locations across multiple vendor categories, contributed by a community of users who trust the platform. No competitor can buy this dataset. It has to be built, one check-in and one review at a time. That's the moat.

---

## Addendum A — Multi-Vendor Architecture & Implementation Strategy

*Added: March 20, 2026 — Expands the original strategy with detailed multi-vendor platform architecture, Expo + Railway + PostgreSQL implementation guidance, and vendor category system design.*

---

### A1. Strategic Review

The original Worklow strategy positioned the product around remote work and cafés. This was the right entry point for marketing but the wrong constraint for architecture. The refinement is this: **market it as a remote work tool, architect it as a multi-vendor local discovery platform.**

This is not scope creep. It is insurance against the single most common startup architecture mistake — building a data model that assumes one use case and then discovering, 6 months in, that the business needs to support more. Adding a `vendor_category` field to the businesses table on day one costs nothing. Retrofitting it after 500 businesses have been onboarded with a flat schema costs weeks.

The key insight: a coffee shop and a coworking space and a restaurant all have the same core relationship to the platform — they are venues that want visibility in front of nearby users. The differences between them (menu vs. day pass pricing, food quality vs. meeting room availability) are metadata variations, not structural differences. One data model handles all of them if you design for it.

### A2. Marketplace Model

Worklow is a dual-sided marketplace with a clear expansion path.

**Phase 1 (MVP):** "Best places to work in Vancouver." Supply is 5–6 venue types that overlap with the remote work use case. Demand is remote workers, digital nomads, business travelers. Monetization is merchant promotions.

**Phase 2 (Growth):** "Best local places in Vancouver." Supply expands to include more venue types — gyms, libraries, parks with WiFi, hotel business centers, event spaces. Demand broadens to include anyone looking for curated local recommendations. Monetization adds category-specific advertising and sponsored content.

**Phase 3 (Scale):** "The local discovery platform." Multi-city. Category marketplace where any type of local business can participate. User-generated content creates a self-sustaining data flywheel. Monetization includes enterprise partnerships, tourism board deals, and event-based bundles.

The vendor category system is what makes this progression possible without a rewrite. Every business is categorized from the moment it enters the system. Every offer is tagged. Every push notification is segmentable. Every analytics view is filterable.

### A3. Vendor Category System

**Core Categories (MVP launch):**

| Category Slug | Display Name | Primary User Intent |
|---|---|---|
| cafe | Café | Work + coffee |
| coworking | Coworking Space | Dedicated workspace |
| restaurant | Restaurant | Lunch/dinner while working or exploring |
| bakery | Bakery | Quick stop, morning work session |
| lounge | Lounge | Evening wind-down, casual meetings |
| other | Other | Catch-all for edge cases |

**How category flows through the system:**

**Business onboarding:** The signup form includes a required `vendor_category` dropdown. Selecting a category immediately adjusts the onboarding flow — different placeholder text, different required fields, different example offers. A café sees "Example: Free WiFi + 10% off for Worklow users." A restaurant sees "Example: $12 lunch special for Worklow users."

**Merchant dashboard (post-MVP):** The dashboard template adapts to vendor category. A coworking space sees metrics about day-pass inquiries. A restaurant sees peak dining hour data. The widget layout, suggested actions, and benchmark comparisons are all category-aware.

**Offer creation:** The offer builder prompts category-relevant offers. Cafés get prompted for WiFi bundles and loyalty deals. Restaurants get prompted for lunch specials and happy hour discounts. Coworking spaces get prompted for day pass promotions and meeting room deals.

**User-facing search and filters:** Users can filter by vendor category ("Show me only cafés" or "Show me all venue types"). Map pins can be visually coded by category. List views can be grouped by category or sorted across categories.

**Push notifications:** When a business runs a push campaign, the system can target users who have previously checked in at or favorited venues in that category. A restaurant's lunch special goes to users who browse restaurants. A coworking promo reaches users who check into coworking spaces.

**AI recommendations:** The recommendation engine uses vendor category as a ranking signal. "You usually work at cafés — but this coworking space 3 blocks away has a free day pass today." Cross-category recommendations increase discovery and merchant value.

**Analytics:** All merchant analytics are benchmarked against their vendor category. "Your café got 340 views last month — the average café in your area gets 280." This makes performance data meaningful and motivates upgrades.

### A4. Consumer Experience Impact

The vendor category system makes the consumer experience richer without making it more complex. Here is what the user sees:

**Map view:** Pins are color-coded or icon-coded by category. At a glance, users can distinguish cafés from coworking spaces from restaurants. Tapping a category icon in the filter bar toggles visibility.

**List view:** A segmented control at the top lets users choose "All," "Cafés," "Coworking," "Restaurants," etc. The list adapts — a café card shows WiFi score and outlet info prominently, while a restaurant card shows cuisine type and lunch deal.

**Detail view:** The structured data grid adapts to vendor category. Every venue shows the core work dimensions (WiFi, seating, outlets, noise). Category-specific fields appear below: a coworking space shows day pass pricing and meeting room info; a restaurant shows cuisine type and whether reservations are needed.

**Offers tab:** Users can browse offers across all categories or filter to their preferred type. "Show me only café deals" or "Show me everything nearby."

The critical principle: the user does not need to understand the vendor category system. They just see relevant, well-organized information. The categories work behind the scenes to make every screen feel tailored.

### A5. Merchant Experience Impact

**Onboarding adapts to category.** When a business selects "Restaurant" during signup, the form changes: the WiFi field becomes optional (it still exists, because remote workers care), but menu upload and cuisine type fields appear. When they select "Coworking," pricing tiers and amenity checklists appear. This reduces friction — businesses only see fields that make sense for their type.

**Offer templates are category-specific.** Instead of a blank "create an offer" field, the system suggests templates based on vendor category. A café sees: "Try: '15% off for Worklow users' or 'Free WiFi + coffee bundle.'" A restaurant sees: "Try: '$12 lunch special' or '2-for-1 happy hour.'" This dramatically increases offer creation rates because the merchant doesn't have to think from scratch.

**Performance benchmarks are category-specific.** A café with 200 views/month is performing well. A coworking space with 200 views/month might be underperforming. The dashboard shows category-relative benchmarks so merchants understand whether they're ahead or behind, and what they can do about it.

**Upsell paths are category-specific.** The AI agent workflow can suggest different upgrade paths based on what works for each category. Cafés convert well on featured placement. Restaurants convert well on push notification campaigns (lunch specials timed for 11 AM). Coworking spaces convert well on sponsored search results.

### A6. Push Notification & Segmentation Strategy

Push notifications are the highest-value merchant tool and the highest-risk feature for user retention. Over-notify and users disable permissions. Under-notify and merchants see no value.

**Segmentation dimensions:**

| Dimension | Source | Used For |
|---|---|---|
| Location (lat/long) | Expo location API | Nearby offers, geo-triggered deals |
| Vendor category preference | Check-in history, favorites | Category-targeted campaigns |
| Time of day patterns | Check-in timestamps | Morning café promos, lunch restaurant deals |
| User tier (Explorer/Regular/Expert/Guide) | Gamification system | Exclusive deals for high-value users |
| Recency | Last app open / check-in | Re-engagement vs. active user flows |

**Category-based notification rules:**

Café promotions: Send morning (7–10 AM) or early afternoon (1–3 PM), when remote workers are choosing where to go. Restaurant promotions: Send 30–60 minutes before typical meal times (11 AM for lunch, 5 PM for dinner). Coworking promotions: Send weekday mornings (8–10 AM) when freelancers are deciding whether to go to a coworking space or a café. Lounge promotions: Send late afternoon / early evening (4–6 PM).

**Hard limits:** 2 push notifications per user per day. 5 per week. Users can mute specific categories. If a user dismisses 3 notifications in a row from the same category, auto-mute that category and send a quiet prompt: "Want to keep getting [restaurant] deals?"

**Merchant campaign creation:** When a merchant creates a push campaign, they select timing (now / scheduled), target radius (500m / 1km / 2km), and the system auto-selects the user segment based on their vendor category and the targeting parameters. The merchant does not manually select segments — the system handles this. This keeps the campaign builder simple while making notifications relevant.

### A7. AI Agent Workflow Strategy (Category-Aware)

The AI agent workflows defined in Section 10 become significantly more effective when vendor category is a first-class input. Here is how each pipeline stage adapts:

**Discovery:** The agent scrapes Google Maps API with category-specific queries. "Cafés with WiFi in Vancouver" is a different search than "Coworking spaces in Vancouver" or "Restaurants with good reviews in Gastown." Each category produces a separate lead list with category-appropriate qualification criteria.

**Outreach:** Email templates are pre-built per vendor category. The subject line, value proposition, example offers, and social proof all adapt. A café hears about remote workers and WiFi. A restaurant hears about foot traffic and lunch specials. A coworking space hears about qualified day-pass leads. The AI selects the right template based on the lead's category.

**Onboarding:** The missing-info request email adapts to what fields are required for that category. A restaurant that didn't upload a menu gets nudged differently than a coworking space that didn't list pricing.

**Activation:** The "create your first offer" nudge includes category-specific examples and benchmarks. "Cafés that create an offer within the first week get 3x more views than those that wait."

**Retention:** Re-engagement messages use category benchmarks. "The average restaurant on Worklow gets 150 views/month. You're at 80. Here's how to boost that." The AI can also suggest cross-category opportunities: "Your restaurant is near 3 popular coworking spaces — a lunch deal could capture that audience."

**New trigger:** When a new vendor category is added to the system (e.g., "gym" or "library"), the agent automatically generates a prospecting list, drafts category-specific outreach templates, and queues them for human review before sending.

### A8. Backend Architecture Recommendations

**Architecture split:**

| Layer | Technology | Responsibility |
|---|---|---|
| Mobile app | Expo (React Native) | UI, location permissions, push token registration, map/list views, reviews, photos, gamification UI |
| Backend API | Node.js + Express on Railway | Auth/session APIs, venue/business/offer/review CRUD, push campaign logic, AI agent workflows, merchant onboarding, analytics |
| Database | PostgreSQL on Railway | All persistent data — users, businesses, venues, offers, reviews, photos, push tokens, gamification |
| Push service | Expo Push API → APNs/FCM | Notification delivery |
| File storage | Railway volume or S3-compatible | Photos, menu uploads |

**Key architectural principles:**

All business logic lives in the Railway backend, never in the Expo app. The mobile app is a thin client that renders data and captures input. This means vendor category logic, offer validation, push segmentation, and analytics computation all happen server-side. If the mobile app were to handle category logic, every schema change would require an app store update.

The vendor_category field is an enum that lives in the database and is enforced at the API level. Adding a new category means adding a value to the enum and creating the corresponding extended_fields template — no code changes in the mobile app.

Category-specific extended fields are stored as JSONB in the businesses table, not as separate columns. This means adding a new category or new fields for an existing category never requires a schema migration. The API validates JSONB content against a schema defined per category in a config file.

### A9. PostgreSQL Schema Guidance

```sql
-- Core tables

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  points INTEGER DEFAULT 0,
  tier TEXT DEFAULT 'explorer'
    CHECK (tier IN ('explorer', 'regular', 'local_expert', 'city_guide')),
  push_token TEXT,
  push_enabled BOOLEAN DEFAULT true,
  preferred_categories TEXT[],  -- e.g. {'cafe', 'coworking'}
  city TEXT DEFAULT 'vancouver',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES users(id),
  name TEXT NOT NULL,
  slug TEXT UNIQUE,
  vendor_category TEXT NOT NULL
    CHECK (vendor_category IN (
      'cafe', 'coworking', 'restaurant',
      'bakery', 'lounge', 'hotel_lobby', 'other'
    )),
  address TEXT NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  city TEXT DEFAULT 'vancouver',
  phone TEXT,
  email TEXT,
  website TEXT,
  hours JSONB,             -- {"mon": {"open": "07:00", "close": "18:00"}, ...}
  price_range TEXT         -- '$', '$$', '$$$'
    CHECK (price_range IN ('$', '$$', '$$$', '$$$$')),
  extended_fields JSONB,   -- category-specific data (menu, day_pass_price, etc.)
  status TEXT DEFAULT 'pending'
    CHECK (status IN ('pending', 'active', 'claimed', 'suspended')),
  subscription_tier TEXT DEFAULT 'free'
    CHECK (subscription_tier IN ('free', 'promoted', 'featured', 'campaign')),
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE venues (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  wifi_quality NUMERIC(2,1),     -- 1.0 to 5.0, crowdsourced avg
  wifi_speed_mbps INTEGER,
  seating_comfort NUMERIC(2,1),
  outlet_availability TEXT
    CHECK (outlet_availability IN ('none', 'limited', 'plenty')),
  noise_level TEXT
    CHECK (noise_level IN ('quiet', 'moderate', 'lively')),
  washroom_access TEXT
    CHECK (washroom_access IN ('public', 'customers', 'none')),
  work_score NUMERIC(3,1),       -- composite 1.0–10.0
  total_checkins INTEGER DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  peak_hours JSONB,              -- derived from check-in data
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE offers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  offer_type TEXT DEFAULT 'discount'
    CHECK (offer_type IN ('discount', 'bundle', 'freebie', 'event', 'other')),
  discount_value TEXT,            -- e.g. '15%', '$5 off', 'BOGO'
  valid_from TIMESTAMPTZ DEFAULT now(),
  valid_until TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT true,
  requires_checkin BOOLEAN DEFAULT true,
  max_redemptions_per_user INTEGER DEFAULT 1,  -- per 24h window
  views INTEGER DEFAULT 0,
  claims INTEGER DEFAULT 0,
  redemptions INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE redemption_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  offer_id UUID REFERENCES offers(id) ON DELETE CASCADE,
  checkin_id UUID REFERENCES checkins(id),
  token_code TEXT NOT NULL UNIQUE,  -- short alphanumeric (e.g. 'WK-A7X3')
  qr_data TEXT,                     -- encoded QR payload
  status TEXT DEFAULT 'active'
    CHECK (status IN ('active', 'redeemed', 'expired')),
  expires_at TIMESTAMPTZ NOT NULL,  -- 2 hours after creation
  redeemed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  venue_id UUID REFERENCES venues(id) ON DELETE CASCADE,
  wifi_rating INTEGER CHECK (wifi_rating BETWEEN 1 AND 5),
  seating_rating INTEGER CHECK (seating_rating BETWEEN 1 AND 5),
  outlet_rating INTEGER CHECK (outlet_rating BETWEEN 1 AND 5),
  noise_rating INTEGER CHECK (noise_rating BETWEEN 1 AND 5),
  overall_rating INTEGER CHECK (overall_rating BETWEEN 1 AND 5),
  comment TEXT,           -- optional one-liner
  category_ratings JSONB, -- category-specific (e.g. {"food_quality": 4} for restaurants)
  flagged BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE photos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  venue_id UUID REFERENCES venues(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  caption TEXT,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE checkins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  venue_id UUID REFERENCES venues(id) ON DELETE CASCADE,
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, venue_id, (created_at::date))  -- max 1 per venue per day
);

CREATE TABLE push_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  token TEXT NOT NULL UNIQUE,
  platform TEXT CHECK (platform IN ('ios', 'android', 'web')),
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE push_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  target_radius_m INTEGER DEFAULT 1000,
  target_categories TEXT[],    -- user preferred categories to target
  scheduled_at TIMESTAMPTZ,
  sent_at TIMESTAMPTZ,
  total_sent INTEGER DEFAULT 0,
  total_opened INTEGER DEFAULT 0,
  status TEXT DEFAULT 'draft'
    CHECK (status IN ('draft', 'scheduled', 'sent', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE gamification_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  action TEXT NOT NULL
    CHECK (action IN ('checkin', 'review', 'photo', 'referral', 'redemption', 'google_review')),
  points INTEGER NOT NULL,
  venue_id UUID REFERENCES venues(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Key indexes
CREATE INDEX idx_businesses_category ON businesses(vendor_category);
CREATE INDEX idx_businesses_city ON businesses(city);
CREATE INDEX idx_businesses_location ON businesses USING gist (
  ll_to_earth(lat, lng)
);
CREATE INDEX idx_venues_work_score ON venues(work_score DESC);
CREATE INDEX idx_checkins_venue ON checkins(venue_id, created_at DESC);
CREATE INDEX idx_reviews_venue ON reviews(venue_id, created_at DESC);
CREATE INDEX idx_offers_business ON offers(business_id, is_active);
CREATE INDEX idx_redemptions_user ON redemption_tokens(user_id, status);
CREATE INDEX idx_redemptions_offer ON redemption_tokens(offer_id, status);
CREATE INDEX idx_redemptions_token ON redemption_tokens(token_code);
```

**Why this schema works for multi-vendor:**

The `vendor_category` on businesses is the backbone. Every query can filter, group, and benchmark by it. The `extended_fields` JSONB column holds category-specific data without schema changes — adding a new field for "coworking" spaces means updating a config file, not running ALTER TABLE. The `category_ratings` JSONB on reviews allows category-specific review dimensions to coexist with the core work-rating fields.

**Important: install the earthdistance and cube extensions** on the Railway Postgres instance for geographic queries:

```sql
CREATE EXTENSION IF NOT EXISTS cube;
CREATE EXTENSION IF NOT EXISTS earthdistance;
```

### A10. Expo App Implications

**Location permissions:** Request "when in use" at first app open for map and distance calculations. Request "always" only when the user enables check-in reminders or geo-triggered notifications. Expo's `expo-location` handles both.

**Push token registration:** On first app open, request push permission and register the token via Expo Push API. Store the token in the `push_tokens` table via the Railway API. Token refresh is handled automatically by Expo.

**Map/list UI:** Use `react-native-maps` for the map view. Pins are rendered with category-coded icons or colors. The list view uses a FlatList with category-segmented headers or a filter bar. All venue data is fetched from the Railway API — the app never queries the database directly.

**Reviews and photos:** The review form dynamically renders rating dimensions based on the venue's `vendor_category`. The Railway API returns the review schema for each category. Photo uploads go through the Railway API, which stores them in S3 or Railway volume and returns a URL.

**Gamification UI:** Points, tier, and leaderboard data are fetched from the Railway API. The app renders badges, progress bars, and leaderboard rankings. All point calculations happen server-side.

**Offline support:** Core venue data for the user's city can be cached locally using Expo's AsyncStorage or SQLite. This means the app is useful even without connectivity — the user can browse cached listings and see saved spots. Reviews and check-ins queue locally and sync when connectivity returns.

**Category filtering:** The filter bar in the app renders dynamically from a categories endpoint on the Railway API. This means adding a new vendor category requires zero mobile app changes — the API returns the updated category list and the app renders it.

### A11. Risks If Not Designed Properly Now

**If vendor_category is not in the schema from day one:** Every future feature that needs category awareness (push segmentation, offer templates, dashboard benchmarks, AI recommendations) will require a migration. If 500 businesses exist without categories, someone has to manually classify each one. This is the single most expensive technical debt to accumulate.

**If extended_fields is not JSONB:** Using fixed columns for category-specific data (e.g., `day_pass_price` as a column on the businesses table) means every new category or new field requires ALTER TABLE. With 12 categories and 5 fields each, that's 60 columns on one table — most of which are NULL for any given row. JSONB avoids this entirely.

**If push segmentation is not category-aware from the start:** Merchants will get poor results from un-targeted notifications. Users will get irrelevant notifications and disable push. Once push permissions are lost, they're nearly impossible to recover. Building segmentation later means retroactively tagging all push tokens with category preferences based on incomplete data.

**If the Expo app hardcodes category logic:** Every time a new category is added or a field changes, the app needs an update pushed through the App Store / Play Store. This creates a 2–7 day delay on every backend change. The app should fetch category schemas from the API and render dynamically.

**If the review schema is category-blind:** All reviews will have only work-specific dimensions. A restaurant review with no food quality dimension feels broken. Adding food quality later means either migrating all existing reviews or having inconsistent data.

**If analytics are not segmented by category from the start:** Merchants in different categories will see the same benchmarks, which are meaningless. "You got 200 views" means nothing without "the average café in your area gets 280." Retroactively building category-segmented analytics is painful because the event data needs to be re-aggregated.

### A12. Final Recommendation (Addendum)

The multi-vendor expansion does not change the launch strategy. It changes the architecture. Here is the implementation priority:

**Do now (before writing any code):**

1. Add `vendor_category` to the businesses table. This is non-negotiable.
2. Use JSONB for `extended_fields` on businesses and `category_ratings` on reviews.
3. Build the Railway API endpoints to be category-aware — filter, sort, and benchmark by category.
4. Make the Expo app fetch category schemas from the API, not hardcode them.
5. Design push notification campaigns with category-based segmentation from the first implementation.

**Do at MVP launch:**

6. Support 5–6 vendor categories with category-specific onboarding prompts and offer templates.
7. Render category-coded map pins and filterable list views.
8. Show category-specific structured data on venue detail screens.
9. Seed at least 3 venue types with 10+ listings each.

**Do post-launch (when data supports it):**

10. Build category-specific merchant dashboards with benchmarks.
11. Enable cross-category AI recommendations.
12. Add new vendor categories based on user demand (no code changes needed — just config).

The cost of building this way from the start is near zero — it is a few extra columns, a JSONB field, and an API parameter. The cost of not building this way is a full migration, manual reclassification of hundreds of businesses, and a mobile app update for every new category. Build it right once.

---

## Addendum B — Discount Redemption & Gamified Check-In System

*Added: March 20, 2026 — Defines the end-to-end flow from discount discovery to redemption, the token system, merchant analytics, trust/validation safeguards, and how this system transforms the platform into a measurable real-world engagement engine.*

---

### B1. System Overview

The discount redemption system is the mechanism that turns Worklow from a browse-and-discover app into a real-world engagement engine. Without it, the platform measures attention (views, clicks). With it, the platform measures action (visits, purchases, ROI). This is the difference between "nice to have" and "critical infrastructure" for merchant monetization.

The full loop: **Discovery → Navigation → Arrival → Check-In → Token Generation → Redemption → Reward → Review Prompt → Retention.** Every step is tracked. Every step generates value. The merchant can see exactly how many users discovered their offer, navigated to the venue, checked in, and redeemed. This closed-loop attribution is what Google Maps, Yelp, and every other discovery platform cannot provide.

### B2. User Flow (End-to-End)

**Step 1 — Discovery.** The user browses the app and sees offers on the map (icon badges on pins) or in curated lists. Offers are shown in context — alongside structured venue data, not on a separate "deals" screen. The user sees "15% off for Worklow users" right next to WiFi score and seating info. This integrates deals into the decision-making flow rather than making them a separate feature.

**Step 2 — Navigation.** The user taps an offer. The app opens native navigation using Google Maps or Apple Maps (deep link integration via Expo Linking API). The user is guided to the venue. The app tracks that navigation was initiated (analytics event: `offer_navigation_started`).

**Step 3 — Arrival & Check-In.** Once the user is within GPS proximity of the venue (~100 meters), the check-in button activates. The user taps "Check In." The system validates: (a) GPS coordinates match the venue location, (b) the user has not already checked in at this venue today, (c) the user has not already redeemed this specific offer within the cooldown window (default: 24 hours).

**Step 4 — Token Generation.** After a valid check-in at a venue with an active offer, the system generates a redemption token. The token is displayed on the user's screen as a QR code and a short alphanumeric code (e.g., "WK-A7X3"). The token includes: user ID, offer ID, check-in ID, timestamp, and expiration (2 hours from generation). The user sees: "Show this to your server to get 15% off."

**Step 5 — Redemption.** The user shows the token to the merchant. At MVP, the merchant validates visually — they see the code and confirm it looks legitimate. Post-MVP, the merchant can scan the QR code using the Worklow merchant app or a simple web-based scanner. Scanning marks the token as "redeemed" in the database.

**Step 6 — Reward Activation.** Upon check-in, the user receives check-in coins (10–15). Upon redemption confirmation, the user receives redemption coins (20). The user's total: 30–35 coins per successful visit-and-redeem cycle. This is the highest-earning action in the gamification system, which drives repeat behavior.

### B3. Post-Redemption Engagement

After a successful redemption, the app shows a celebration screen and then prompts: "Leave a Google Review for [Business Name] and unlock 15 bonus coins." The prompt includes a deep link to the Google Maps review page for that specific business.

If the user confirms they left a review (MVP: honor system with a "I left a review" button; post-MVP: link tracking or Google Places API check), they receive 15 bonus coins. Optionally, the merchant can configure an additional reward for Google reviewers — e.g., "+10% extra off next visit."

This creates a three-way win: the user gets coins, the merchant gets a Google Review (which improves their visibility on the largest discovery platform in the world), and Worklow gets credit for driving real business results.

### B4. Merchant Dashboard — Redemption Analytics

The merchant dashboard (post-MVP, but the data model supports it from day one) shows:

**Core metrics:**

- Offer views: how many users saw the offer in the app
- Navigation starts: how many users tapped to navigate to the venue
- Check-ins: how many users arrived and checked in
- Redemptions: how many tokens were generated and redeemed
- Conversion funnel: views → navigations → check-ins → redemptions (percentage at each step)
- Google Reviews driven: how many reviews were posted via the post-redemption prompt

**Derived metrics:**

- Cost per visit: if the merchant is paying for promotion, what is the effective cost per physical visit?
- Redemption rate: what percentage of check-ins result in a redemption?
- Repeat visitors: how many users came back more than once via Worklow?
- Revenue attribution: estimated revenue driven by Worklow redemptions (based on average transaction value × redemptions)

**Why this matters:** This dashboard is the single most important tool for merchant retention and upselling. When a café owner sees "47 people visited your shop via Worklow this month, 31 redeemed your offer, and 12 left Google Reviews," that is undeniable ROI. That is what makes them renew their subscription and upgrade their tier.

### B5. Trust & Validation System

**GPS proximity validation.** Check-ins require the user to be within ~100 meters of the venue. The system compares the user's current GPS coordinates (from Expo `expo-location`) against the venue's stored coordinates using the Haversine formula. If the distance exceeds the threshold, the check-in is rejected.

**One check-in per offer per cooldown window.** A user can only generate one redemption token per offer per 24-hour period. This prevents a user from redeeming the same "15% off" deal 5 times in one day.

**Token expiration.** Tokens expire 2 hours after generation. If the user checks in but doesn't redeem within 2 hours, the token becomes invalid. This prevents stockpiling tokens.

**Token uniqueness.** Each token code is unique and single-use. Once redeemed, it cannot be reused. The database enforces this with a UNIQUE constraint on `token_code` and a status transition from "active" to "redeemed."

**Merchant-side validation.** At MVP, validation is visual — the merchant sees the code on the user's screen and confirms it. Post-MVP, merchants can scan QR codes using a web-based scanner (no app install needed — just a URL that opens the camera). Scanning automatically marks the token as redeemed and updates analytics in real time.

**Fraud prevention.** The system flags suspicious patterns: users who check in at the same venue 50 times in a month, users who generate tokens but never redeem (potential location spoofing), users who redeem at impossible speeds (checked in at a café in Gastown and a restaurant in Kitsilano 2 minutes apart). Flagged accounts are reviewed manually.

### B6. Token Technical Specification

**Token format:** `WK-[4 random alphanumeric characters]` — e.g., `WK-A7X3`, `WK-9BKM`. Short enough to read aloud if the QR scanner fails. Collision probability is negligible at the scale of a city-level app (36^4 = ~1.6M combinations).

**QR code payload:** JSON encoded with: `{"token": "WK-A7X3", "offer_id": "uuid", "user_display": "CocoR.", "expires": "2026-03-20T16:30:00Z"}`. The merchant's scanner decodes this and validates against the API.

**Token lifecycle:**

1. **Created** — generated on check-in, status = "active"
2. **Redeemed** — merchant scans or confirms, status = "redeemed", `redeemed_at` timestamp set
3. **Expired** — 2-hour TTL passed without redemption, status = "expired" (handled by a scheduled job or lazy evaluation on next access)

**API endpoints:**

- `POST /api/checkin` — validates GPS, creates check-in, generates token if venue has active offer
- `GET /api/token/:code` — returns token details (for merchant scanner)
- `POST /api/token/:code/redeem` — marks token as redeemed (merchant action)
- `GET /api/merchant/analytics` — returns redemption funnel data

### B7. Coins Economy Design

The coin system needs to be balanced so that earning feels rewarding but coins maintain value.

**Earning rates:**

| Action | Coins | Frequency Limit |
|---|---|---|
| Check-in (no active offer) | 10 | 1 per venue per day |
| Check-in (venue has active offer) | 15 | 1 per venue per day |
| Offer redemption | 20 | 1 per offer per 24h |
| Structured review | 25 | 1 per venue per 7 days |
| Photo upload (approved) | 15 | 3 per venue per month |
| Google Review (confirmed) | 15 | 1 per venue per lifetime |
| Referral (friend signs up) | 50 | Unlimited |
| Weekly challenge bonus | 50 | 1 per week |

**Spending / unlocking:**

Coins are not currency — they are progression points. They unlock tier upgrades, exclusive deals (merchants can create "Local Expert only" offers), early access to new features, and leaderboard recognition. This avoids the regulatory and financial complexity of a redeemable currency while keeping the incentive structure strong.

### B8. Impact on Merchant Acquisition

The redemption system fundamentally changes the merchant sales pitch. Without it, the pitch is: "Get visibility in front of remote workers." With it, the pitch is: "We will send people to your door and prove it."

**Before redemption system:** "Your café was viewed 340 times last month on Worklow." — Merchant thinks: "So what? Did anyone actually come in?"

**After redemption system:** "47 people navigated to your café via Worklow. 31 checked in. 24 redeemed your 15% off offer. 12 left Google Reviews." — Merchant thinks: "That's real. What do I need to do to get more?"

This closed-loop attribution is the most powerful merchant retention and upselling tool the platform can build. It justifies paid tiers because the merchant can directly calculate ROI: "I paid $99/month and got 24 verified customers with an average spend of $15 = $360 in attributable revenue."

### B9. Impact on Platform Strategy

The redemption system transforms Worklow's strategic position. Without it, the platform is a review/discovery tool competing with Google Maps on a smaller dataset. With it, the platform is a **performance marketing channel for local businesses** — closer to a local-business version of Groupon's intent but with better UX, real-time delivery, and no deep discounting requirement.

The closed loop — Discovery → Visit → Redemption → Reward → Retention — creates three moats simultaneously:

1. **Data moat:** Every redemption generates a data point that no competitor has. Foot traffic attribution at the individual user level across hundreds of venues.
2. **Habit moat:** Users who earn coins and climb tiers develop a habit loop. The coins aren't exchangeable for money, but the status and exclusive deals feel valuable.
3. **Merchant moat:** Merchants who see verified ROI don't leave. They upgrade. And the longer they're on the platform, the more historical data they have, which makes leaving harder.

### B10. MVP vs. Post-MVP Feature Split

**MVP (launch with):**

- GPS-validated check-ins
- Token generation (QR + short code) on check-in at venues with active offers
- Visual token verification by merchant (show screen)
- Coin earning for check-ins, redemptions, reviews
- Basic tier progression (Explorer → Regular → Local Expert → City Guide)
- Post-redemption Google Review prompt (honor system)

**Post-MVP (add when validated):**

- QR scanner for merchants (web-based, no app needed)
- Automated token expiration job
- Full merchant analytics dashboard with conversion funnel
- Google Review verification via link tracking
- Weekly challenges and leaderboard
- "Local Expert only" exclusive offers
- Merchant-configurable bonus rewards for Google reviewers
- Fraud detection patterns

### B11. Strategic Impact Summary

This system closes the gap between digital engagement and real-world value. It transforms the platform from a content tool into an engagement engine that can prove, per-dollar, what it delivers for merchants. The full loop — Discovery → Visit → Redemption → Reward → Retention — is the operational backbone of a sustainable local marketplace.

Without this system, Worklow is a nice directory. With it, Worklow is a measurable marketing channel that local businesses will pay for because they can see exactly what they're getting.

---

## Addendum C — Platform Replication Framework

*Added: March 20, 2026 — Elevates the Worklow strategy into a reusable marketplace engine blueprint. Defines what stays constant, what changes per product, and how to launch future products without rebuilding architecture.*

---

### C1. Strategic Assessment

The Worklow strategy document, across its 14 core sections and two addenda, contains roughly 80% reusable platform infrastructure and 20% product-specific configuration. That ratio is excellent. The architecture was designed well — JSONB extended fields, vendor category enums, configurable review dimensions, and a category-aware API all naturally support product variants. What's missing is the explicit separation layer: a clear declaration of what is "engine" versus what is "skin."

Here is the assessment of each major system:

**Consumer flow** (Discovery → Filter → Detail → Check-In → Redeem → Review) — fully reusable. The flow is identical regardless of whether users are finding work spots, event guides, pet-friendly venues, or fitness studios. Only the filter labels, review dimensions, and marketing copy change.

**Provider/merchant flow** (Signup → Onboarding → Offer Creation → Dashboard → Campaigns) — fully reusable. The vendor category system already makes onboarding adaptive. The only product-specific elements are the category taxonomy, onboarding prompt text, and example offers.

**Backend architecture** (Expo + Railway + PostgreSQL) — fully reusable. The entire architecture split is product-agnostic. A new product would use the same codebase with different configuration files, not a different codebase.

**Database schema** — 95% reusable. The tables (users, businesses, venues, offers, reviews, photos, checkins, redemption_tokens, push_campaigns, gamification_log) are universal to any location-based marketplace. The only product-specific elements are: the CHECK constraint values on `vendor_category`, the JSONB schemas for `extended_fields` and `category_ratings`, and the review dimension column names.

**AI agent workflows** — fully reusable. The pipeline (Discovery → Outreach → Response → Onboarding → Activation → Retention) is product-agnostic. Only the email templates, category-specific prompts, and targeting queries change.

**Gamification and redemption** — fully reusable. The coin economy, tier system, check-in validation, token generation, and redemption flow are all product-agnostic. Only the tier names, coin rates, and badge labels change.

**Push notification segmentation** — fully reusable. The segmentation dimensions (location, category preference, time patterns, user tier, recency) apply to any product. Only the notification timing rules and category names change.

**Monetization tiers** — structurally reusable. The tier model (Free → Promoted → Featured → Campaign) works across products. Pricing and tier names may change.

**Corporate website** — structurally reusable. The page structure (Hero → Path Split → How It Works → Features → Business → CTA → Footer) is a proven dual-sided marketplace layout. Only the copy, colors, imagery, and domain change.

### C2. What Is Already Reusable

These systems can be extracted into a shared platform core with zero or near-zero modification:

**Database schema engine.** The PostgreSQL schema (users, businesses, venues, offers, reviews, photos, checkins, redemption_tokens, push_tokens, push_campaigns, gamification_log) is product-agnostic. The JSONB fields (`extended_fields`, `category_ratings`, `hours`, `peak_hours`) absorb all product-specific variation without schema changes.

**API layer.** Every endpoint — auth, venue CRUD, offer CRUD, review submission, check-in with GPS validation, token generation/redemption, push campaign management, gamification scoring, merchant analytics — is reusable. The API reads product configuration (vendor categories, review dimensions, coin rates) from a config file, not from hardcoded values.

**Expo app shell.** The core screens (Map View, List View, Detail View, Review Form, Check-In, Token Display, Profile/Gamification, Offer Browse) are structurally identical across products. Category filtering, dynamic review dimensions, and map pin rendering all pull configuration from the API.

**AI agent pipeline.** The 6-stage workflow (Discovery → Outreach → Response → Onboarding → Activation → Retention) and all trigger logic are reusable. Only the email templates and category-specific queries are product variables.

**Gamification engine.** Coin earning rules, tier progression, leaderboard, badge system, and weekly challenges are all structurally identical. Specific coin rates, tier thresholds, and badge names are config.

**Redemption system.** GPS validation, token generation, QR codes, expiration logic, merchant validation, and the full redemption analytics funnel are completely product-agnostic.

**Push notification system.** Segmentation logic, delivery scheduling, hard limits, category-based timing rules, and auto-mute are all reusable. Only the category names and optimal timing windows change.

**Corporate website template.** The Next.js + Tailwind structure with sections (Navbar, Hero, PathSplit, HowItWorks, Features, Stats, BusinessSection, FAQ, FinalCTA, Footer) is a reusable shell. Content, colors, and imagery are product variables.

### C3. What Is Still Too Product-Specific

These elements in the current document are written exclusively for Worklow and would need to be abstracted for reuse:

**Review dimensions.** The document hardcodes WiFi quality, seating comfort, outlet availability, noise level, and washroom access as review columns. These are Worklow-specific. A pet-friendly venue finder would need: pet policy, outdoor space, water bowls, off-leash areas. A fitness studio finder would need: class variety, equipment quality, locker rooms, parking. The schema needs review dimensions to be fully dynamic — either JSONB-only or generated from a product config that defines which dimensions exist and their display labels.

**Work-friendliness score algorithm.** The composite score with weights (WiFi 30%, Seating 20%, etc.) is Worklow-specific. Every product needs a composite score, but the dimensions and weights differ. The algorithm should read dimension weights from a product config.

**Vendor category taxonomy.** The current categories (café, coworking, restaurant, bakery, lounge, hotel_lobby) are Worklow-specific. Each product defines its own taxonomy. This is already handled well by the CHECK constraint pattern, but the document should explicitly call out that the taxonomy is a product variable, not a platform constant.

**Marketing copy and positioning.** "Built for working, not browsing" and "Vancouver in 10 Seconds" are Worklow-specific. Each product has its own positioning, taglines, and user-facing copy.

**Vancouver launch strategy.** The 12-week playbook references specific neighborhoods (Gastown, Kitsilano) and communities (r/digitalnomad). Each product needs its own launch playbook targeting its specific audience and geography.

**Token prefix.** `WK-` is Worklow-specific. Each product uses its own prefix (e.g., `FF-` for FanFlow, `PF-` for a pet-friendly product).

**Email templates.** The outreach, follow-up, onboarding, and re-engagement email templates reference remote workers and cafés. Each product needs category-aware templates written for its audience and vendor types.

### C4. What Is Missing for Platform Reuse

**A product configuration spec.** There is no single file or section that says: "To create a new product, define these 20 variables." This is the most critical missing piece. Without it, creating a new product means reading the entire 1000-line strategy and extracting the configurable parts manually.

**A shared codebase strategy.** The document doesn't address whether products share a monorepo, a forked repo, or a configurable single deployment. For a small team, the right answer is a single codebase with product configuration files — not separate repos per product.

**Multi-product account model.** The current schema assumes one product. If a user uses both Worklow and FanFlow, do they have one account or two? If a merchant lists on both platforms, do they manage two separate dashboards? The schema needs a `product_id` or `tenant_id` field, or each product needs an isolated database.

**Design token system.** The website and app have hardcoded Worklow colors. For reuse, the design system should be driven by a theme config: primary color, accent color, background, surface, font. The website already uses Tailwind CSS variables, which is the right pattern — it just needs to be explicitly documented as a product variable.

**Shared vs. isolated infrastructure.** The document doesn't specify whether products share a Railway instance, a database, or are fully isolated. For simplicity and cost, early products should share a Railway project with separate services. Each product gets its own database (not shared) to avoid cross-product data leakage and simplify per-product analytics.

### C5. Platform Replication Framework

This framework defines how to think about the system as a configurable marketplace engine and how to create future product variants.

#### The Three Layers

Every PanBuddha marketplace product consists of three layers:

**Layer 1 — Platform Core (shared, never changes per product)**

This is the engine. It includes: the PostgreSQL schema structure (table shapes, not content), the API endpoint patterns, the Expo app screen architecture, the gamification engine, the redemption token system, the push notification pipeline, the AI agent workflow stages, the merchant analytics funnel, and the corporate website section structure. Platform Core is maintained as a single codebase. Bug fixes and improvements propagate to all products.

**Layer 2 — Product Config (changes per product, defined once at creation)**

This is the product identity. It includes: product name, vendor category taxonomy, review dimensions and weights, composite score algorithm, coin economy rates, tier names and thresholds, badge definitions, token prefix, email template copy, marketing positioning, design tokens (colors, fonts), app store metadata, domain, and launch city. Product Config is stored in a single config directory per product. Creating a new product means creating a new config directory and populating its files.

**Layer 3 — Product Content (changes continuously after launch)**

This is the living data. It includes: seeded venue listings, curated picks, blog posts, merchant outreach lists, social media content, onboarding guides, and FAQ content. Product Content is created by the team for each product and evolves over time.

#### How to Create a New Product

Step 1: **Define the product config.** Copy the Worklow config directory. Rename it. Change every variable: name, categories, dimensions, weights, copy, colors, email templates. This takes 1–2 days of focused work.

Step 2: **Deploy the infrastructure.** Create a new Railway service pointing to the shared codebase with the new product config. Create a new PostgreSQL database. Run the schema migration (identical schema, different database). This takes 1 hour.

Step 3: **Build the website.** Fork the corporate website template. Replace copy, colors, and imagery using the product config values. Deploy to Railway. This takes 1–2 days.

Step 4: **Seed the data.** Follow the launch playbook (adapted for the new product's city and niche). Visit and review venues. Load seed data. This takes 2–4 weeks depending on city size.

Step 5: **Launch.** Follow the marketing playbook (adapted for the new audience). Begin merchant outreach using the product-specific email templates.

Total time from decision to launch: 4–6 weeks, assuming the platform core is already built and proven by Worklow.

#### Codebase Strategy

A single monorepo with product configs:

```
panbuddha-marketplace/
├── packages/
│   ├── api/                    # Shared Railway backend
│   ├── mobile/                 # Shared Expo app
│   └── website/                # Shared Next.js website template
├── products/
│   ├── worklow/
│   │   ├── config.json         # Product variables
│   │   ├── categories.json     # Vendor taxonomy
│   │   ├── dimensions.json     # Review dimensions + weights
│   │   ├── coins.json          # Gamification rates
│   │   ├── theme.json          # Design tokens
│   │   ├── emails/             # Email templates
│   │   └── content/            # Seed data, FAQs, copy
│   ├── fanflow/
│   │   ├── config.json
│   │   ├── ...
│   └── [future-product]/
│       ├── config.json
│       ├── ...
├── shared/
│   ├── schema.sql              # Base PostgreSQL schema
│   ├── migrations/             # Schema migrations
│   └── lib/                    # Shared utilities
└── deploy/
    ├── Dockerfile
    └── railway.json
```

The API, mobile app, and website all read from `products/{product_name}/` at runtime. The `PRODUCT_ID` environment variable determines which config to load. This means one codebase, one build pipeline, multiple products.

#### Database Strategy

Each product gets its own PostgreSQL database. Not shared. Reasons: (1) simpler per-product analytics, (2) no risk of cross-product data leakage, (3) each product can have different CHECK constraint values without conflict, (4) easier to shut down or migrate a single product. Railway supports multiple databases on a single Postgres instance, so cost is minimal.

The schema SQL is identical across products. The only differences are the CHECK constraint values (vendor categories, tier names, action types) which are generated from the product config at migration time.

#### Multi-Product User Identity

Two options, recommendation depends on scale:

**Option A (MVP, recommended): Isolated accounts.** Each product has its own user table. A person who uses both Worklow and FanFlow has two separate accounts. Simple. No cross-product complexity. Downside: users manage multiple logins.

**Option B (Scale): Shared identity.** A central `panbuddha_accounts` table with SSO. Users log in once and see a dashboard of their products. Merchant accounts can manage listings across multiple products. This is the right long-term architecture but premature for a 2-product portfolio.

Build Option A now. Migrate to Option B when the third product launches.

### C6. Product Variables Matrix

This matrix maps every configurable element across the platform. To create a new product, define a value for each row.

#### Identity Variables

| Variable | Worklow Value | Description |
|---|---|---|
| product_name | Worklow | Display name |
| product_slug | worklow | URL-safe identifier, env var key |
| tagline | "Built for working, not browsing" | Primary positioning statement |
| hero_headline | "Make a decision in 10 seconds" | Hero section headline |
| domain | worklow.panbuddha.ca | Product domain (or Railway auto URL) |
| token_prefix | WK | Redemption token prefix |
| app_store_name | Worklow | App Store / Play Store listing name |

#### Audience Variables

| Variable | Worklow Value | Description |
|---|---|---|
| primary_persona | Remote workers, digital nomads, business travelers | Core user audience |
| user_intent | "Where can I work today?" | The question the product answers |
| geographic_start | Vancouver, BC | Launch city |
| target_communities | r/digitalnomad, r/vancouver, coworking Slack groups | Launch marketing channels |

#### Vendor Variables

| Variable | Worklow Value | Description |
|---|---|---|
| vendor_categories | cafe, coworking, restaurant, bakery, lounge, hotel_lobby, other | Taxonomy of business types |
| category_display_names | {"cafe": "Café", "coworking": "Coworking Space", ...} | User-facing labels |
| category_icons | {"cafe": "☕", "coworking": "💻", ...} | Map pin / filter icons |
| extended_field_schemas | {"cafe": ["specialty_drinks", "outdoor_seating", ...], ...} | Per-category JSONB schemas |

#### Review & Scoring Variables

| Variable | Worklow Value | Description |
|---|---|---|
| review_dimensions | wifi_quality, seating_comfort, outlet_availability, noise_level, washroom_access | Structured review axes |
| dimension_labels | {"wifi_quality": "WiFi", "seating_comfort": "Seating", ...} | User-facing dimension names |
| dimension_types | {"wifi_quality": "1-5", "outlet_availability": "enum:none,limited,plenty", ...} | Data type per dimension |
| composite_score_name | work_score | Name of the composite metric |
| composite_score_label | "Work-Friendliness" | User-facing composite label |
| composite_weights | {"wifi_quality": 0.30, "seating_comfort": 0.20, ...} | Dimension weights for composite |

#### Gamification Variables

| Variable | Worklow Value | Description |
|---|---|---|
| coin_name | coins | Display name for reward points |
| coin_rates | {"checkin": 10, "checkin_with_offer": 15, "redemption": 20, ...} | Earning rates per action |
| tier_names | ["Explorer", "Regular", "Local Expert", "City Guide"] | Progression tier labels |
| tier_thresholds | [0, 100, 500, 2000] | Coin thresholds for each tier |
| badge_definitions | {"explorer": {"label": "Explorer", "trigger": "5 check-ins"}, ...} | Badge rules |

#### Design Variables

| Variable | Worklow Value | Description |
|---|---|---|
| color_primary | #E5A000 (warm amber) | Primary brand color |
| color_accent | #00E5FF (cyan) | Accent color |
| color_bg | #06080F | Background |
| color_surface | #121828 | Card / surface |
| color_text | #E2E8F0 | Body text |
| font_family | Inter | Primary font |
| theme_mode | dark | Light or dark theme |

#### Monetization Variables

| Variable | Worklow Value | Description |
|---|---|---|
| tier_names | ["Free", "Promoted", "Featured", "Campaign"] | Merchant subscription tiers |
| tier_pricing | [0, 99, 199, 399] | Monthly price per tier (CAD) |
| one_time_options | {"newsletter_feature": 299, "event_promo": 199} | One-time promotion pricing |

#### AI Agent Variables

| Variable | Worklow Value | Description |
|---|---|---|
| outreach_templates | {"cafe": {"subject": "...", "body": "..."}, ...} | Per-category outreach emails |
| followup_templates | {"day3": {"subject": "...", "body": "..."}} | Follow-up email sequences |
| onboarding_templates | {...} | Category-specific onboarding prompts |
| discovery_queries | {"cafe": "cafés with WiFi in {city}", ...} | Google Maps API search queries per category |
| anti_spam_rules | {"max_emails": 3, "min_interval_days": 3, ...} | Outreach limits |

#### Push Notification Variables

| Variable | Worklow Value | Description |
|---|---|---|
| daily_limit | 2 | Max push notifications per user per day |
| weekly_limit | 5 | Max per week |
| category_timing | {"cafe": ["07:00-10:00", "13:00-15:00"], ...} | Optimal send windows per category |
| auto_mute_threshold | 3 | Consecutive dismissals before auto-muting a category |

### C7. Hypothetical Product Variants

To prove the framework works, here are three future products defined purely by changing config values:

**PetSpot** — Find pet-friendly places in Vancouver.

- vendor_categories: dog_park, pet_cafe, vet_clinic, pet_store, restaurant_pet_friendly, hotel_pet_friendly
- review_dimensions: pet_policy, outdoor_space, water_bowls, leash_rules, other_pet_encounters
- composite_score_name: pet_score
- composite_score_label: "Pet-Friendliness"
- user_intent: "Where can I go with my dog?"
- token_prefix: PS

**FitLocal** — Find the best fitness spots near you.

- vendor_categories: gym, yoga_studio, crossfit_box, climbing_gym, pool, outdoor_fitness
- review_dimensions: equipment_quality, class_variety, cleanliness, locker_rooms, parking, crowd_level
- composite_score_name: fitness_score
- composite_score_label: "Fitness Rating"
- user_intent: "Where should I work out today?"
- token_prefix: FL

**StudyFlow** — Find the best study spots for students.

- vendor_categories: library, cafe, university_space, bookstore, coworking
- review_dimensions: quiet_level, desk_space, wifi_quality, outlet_availability, hours, food_nearby
- composite_score_name: study_score
- composite_score_label: "Study-Friendliness"
- user_intent: "Where can I study without distractions?"
- token_prefix: SF

Every one of these products uses the same database schema, the same API, the same Expo app, the same gamification engine, the same redemption system, the same push pipeline, the same AI agent workflows, and the same corporate website template. Only the config changes.

### C8. Implementation Priority for Platform Reuse

**Phase 1 (Now — during Worklow build):**

1. Extract all Worklow-specific values into a `products/worklow/config.json` instead of hardcoding them. This costs very little extra time during initial development and saves weeks later.
2. Make review dimensions dynamic in the API and Expo app. The venue detail screen and review form should render dimensions from config, not from hardcoded JSX.
3. Make the composite score algorithm read weights from config.
4. Make the vendor category CHECK constraint generated from config at migration time (or use a lookup table instead of CHECK).
5. Store email templates as files in the product directory, not as inline strings in the agent code.

**Phase 2 (After Worklow launch, before second product):**

6. Refactor the codebase into the monorepo structure described in C5.
7. Extract the website into a template that reads from product config.
8. Build a product creation script: `npm run create-product petspot` → copies config template, generates migration, creates Railway service.
9. Document the Product Variables Matrix as a fillable template.

**Phase 3 (Second product launch):**

10. Create the second product using the framework. Measure how long it takes versus Worklow's build time. Target: 4–6 weeks versus Worklow's 8–12 weeks.
11. Iterate on the framework based on what was harder than expected.

### C9. Final Recommendation

The Worklow strategy is already 80% platform-ready. The remaining 20% is a matter of discipline: extract hardcoded values into config files during the Worklow build instead of after. This is the single highest-leverage decision for long-term scalability.

The framework described here turns every future product from an 8–12 week build into a 4–6 week config-and-launch. The architecture stays constant. The database schema stays constant. The API stays constant. The gamification, redemption, push, and AI agent systems all stay constant. What changes is a collection of JSON files that define: who the audience is, what the vendor types are, what dimensions matter, what the copy says, and what the colors look like.

The mental model: PanBuddha is not building apps. PanBuddha is building a marketplace engine, and each app is a configured instance of that engine pointed at a different niche. Worklow is the first instance. It will not be the last.

---

*Document prepared by Claude for PanBuddha — March 2026*
