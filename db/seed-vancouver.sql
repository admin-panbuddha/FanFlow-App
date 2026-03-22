-- ═══════════════════════════════════════════════════
-- SEED DATA: Vancouver — FIFA World Cup 2026
-- ═══════════════════════════════════════════════════

-- Event
INSERT INTO events (id, city, region, event_name, description, hero_image, venue, price_cents, currency, date_start, date_end, is_active, sort_order)
VALUES (
  'vancouver-fifa-2026',
  'Vancouver',
  'North America',
  'FIFA World Cup 2026',
  'Real-time deals and discounts from local businesses during the World Cup.',
  '/images/vancouver-hero.jpg',
  'BC Place Stadium',
  599,
  'usd',
  '2026-06-12',
  '2026-07-19',
  true,
  1
);

-- Coming soon events (placeholders)
INSERT INTO events (id, city, region, event_name, description, price_cents, date_start, date_end, is_active, is_coming_soon, sort_order)
VALUES
  ('saopaulo-carnival-2027', 'São Paulo', 'South America', 'Carnival 2027', 'Real-time deals during Carnival.', 0, '2027-02-12', '2027-02-17', true, true, 2),
  ('london-uefa-2028', 'London', 'Europe', 'UEFA Euro 2028', 'Local deals during the Euros.', 0, '2028-06-10', '2028-07-10', true, true, 3),
  ('losangeles-fifa-2026', 'Los Angeles', 'North America', 'FIFA World Cup 2026', 'LA deals during the World Cup.', 0, '2026-06-12', '2026-07-19', true, true, 4);

-- ── DISCOVER TAB ─────────────────────────────────
INSERT INTO picks (id, event_id, tab, name, hook, image, vibe, price_range, distance, address, hours, time_needed, is_top_pick, is_preview, sort_order) VALUES
('d1', 'vancouver-fifa-2026', 'discover', 'Granville Island Public Market', 'Vancouver''s legendary market. Go for the chowder, stay for the chaos. Best before noon.', '/images/picks/granville.jpg', 'Local Icon', '$–$$', '15 min from BC Place', '1661 Duranleau St, Vancouver', '9am–7pm daily', '1.5–2 hours', true, true, 1),
('d2', 'vancouver-fifa-2026', 'discover', 'Stanley Park Seawall', 'The 10km waterfront loop. Rent a bike at Denman, ride the whole thing in 90 min.', '/images/picks/seawall.jpg', 'Outdoor', '$', '20 min from BC Place', 'Stanley Park, Vancouver', 'Open 24h', '1.5–3 hours', false, false, 2),
('d3', 'vancouver-fifa-2026', 'discover', 'FIFA Fan Festival (BC Place District)', 'The official fan zone — big screens, live music, beer gardens. Free entry, bring your jersey.', '/images/picks/fanfest.jpg', 'Event', 'Free–$$', 'At BC Place', 'BC Place District, Vancouver', 'Opens 4h before kickoff', '2–4 hours', false, false, 3),
('d4', 'vancouver-fifa-2026', 'discover', 'Gastown Steam Clock & District', 'Cobblestone streets, the whistling steam clock, and Vancouver''s best cocktail bars within 3 blocks.', '/images/picks/gastown.jpg', 'Neighbourhood', 'Free', '10 min from BC Place', 'Water St & Cambie St, Vancouver', 'Always open (shops 10am–6pm)', '1–2 hours', false, false, 4),
('d5', 'vancouver-fifa-2026', 'discover', 'Capilano Suspension Bridge', 'Walk 140m above the canyon floor. Touristy? Yes. Worth it? Absolutely.', '/images/picks/capilano.jpg', 'Must-Do', '$$$', '30 min from downtown', '3735 Capilano Rd, North Vancouver', '9am–7pm (summer)', '2–3 hours', false, false, 5),
('d6', 'vancouver-fifa-2026', 'discover', 'Science World', 'The giant golf ball on the waterfront. Surprisingly fun for adults. Great if it rains.', '/images/picks/scienceworld.jpg', 'Indoor', '$$', '5 min from BC Place', '1455 Quebec St, Vancouver', '10am–6pm', '1.5–2 hours', false, false, 6),
('d7', 'vancouver-fifa-2026', 'discover', 'English Bay Beach Sunset', 'The best free thing in Vancouver. Grab food, sit on the logs, watch the sun drop behind the islands.', '/images/picks/englishbay.jpg', 'Outdoor', 'Free', '15 min from BC Place', 'English Bay, Vancouver', 'Sunset is around 9pm in June/July', '1 hour', false, false, 7);

-- ── EAT TAB ──────────────────────────────────────
INSERT INTO picks (id, event_id, tab, name, hook, image, vibe, price_range, distance, address, hours, time_needed, is_top_pick, is_preview, sort_order) VALUES
('e1', 'vancouver-fifa-2026', 'eat', 'Japadog', 'The iconic Vancouver street dog — Japanese toppings on a gourmet hot dog. Line moves fast.', '/images/picks/japadog.jpg', 'Quick Bite', '$', '8 min walk from BC Place', '530 Robson St, Vancouver', '11am–10pm', '15 min', true, true, 1),
('e2', 'vancouver-fifa-2026', 'eat', 'Miku Restaurant', 'Aburi sushi that''ll ruin regular sushi for you forever. Waterfront views. Book ahead.', '/images/picks/miku.jpg', 'Pre-Game Feast', '$$$', '10 min walk from BC Place', '200 Granville St #70, Vancouver', '11:30am–10pm', '1–1.5 hours', false, false, 2),
('e3', 'vancouver-fifa-2026', 'eat', 'Meat & Bread', 'One thing done perfectly: the porchetta sandwich. Get there before 1pm or suffer.', '/images/picks/meatbread.jpg', 'Quick Bite', '$', '12 min walk from BC Place', '370 Cambie St, Vancouver', '11am–3:30pm', '20 min', false, false, 3),
('e4', 'vancouver-fifa-2026', 'eat', 'Tacofino', 'Started as a food truck in Tofino. The fish taco is the one. Trust.', '/images/picks/tacofino.jpg', 'Quick Bite', '$', '12 min from BC Place', '15 W Cordova St, Vancouver', '11am–9pm', '20 min', false, false, 4),
('e5', 'vancouver-fifa-2026', 'eat', 'The Flying Pig', 'Casual bistro, great cocktails, big portions. Perfect for a group of 6 who can''t agree on anything.', '/images/picks/flyingpig.jpg', 'Pre-Game Feast', '$$', '10 min from BC Place', '1168 Hamilton St, Vancouver', '11:30am–11pm', '1 hour', false, false, 5),
('e6', 'vancouver-fifa-2026', 'eat', 'Ramen Danbo', 'Fukuoka-style tonkotsu. Customize every element. The best ramen within 10 min of BC Place.', '/images/picks/danbo.jpg', 'Quick Bite', '$', '15 min from BC Place', '1833 West 4th Ave, Vancouver', '11am–10pm', '30 min', false, false, 6),
('e7', 'vancouver-fifa-2026', 'eat', 'La Taqueria', 'Tiny, loud, perfect. Authentic Mexican tacos — the al pastor is non-negotiable.', '/images/picks/lataqueria.jpg', 'Late Night', '$', '8 min from BC Place', '322 W Hastings St, Vancouver', '11am–11pm', '20 min', false, false, 7),
('e8', 'vancouver-fifa-2026', 'eat', 'Steamworks Brewing', 'Brewpub in a heritage building on the waterfront. Great pre-match fuel. The nachos are massive.', '/images/picks/steamworks.jpg', 'Pre-Game Feast', '$$', '10 min from BC Place', '375 Water St, Vancouver', '11am–midnight', '1 hour', false, false, 8);

-- ── EXPERIENCE TAB ───────────────────────────────
INSERT INTO picks (id, event_id, tab, name, hook, image, vibe, price_range, distance, address, hours, time_needed, is_top_pick, is_preview, sort_order) VALUES
('x1', 'vancouver-fifa-2026', 'experience', 'FlyOver Canada', 'A 4D flight ride across Canada — the 25-minute adrenaline hit between matches.', '/images/picks/flyover.jpg', 'Must-Do', '$$', '12 min from BC Place', '201 - 999 Canada Pl, Vancouver', '10am–9pm', '45 min', true, true, 1),
('x2', 'vancouver-fifa-2026', 'experience', 'Harbour Air Seaplane Tour', 'See Vancouver from 1,500 feet. 20-minute scenic flight. The Instagram moment of your trip.', '/images/picks/seaplane.jpg', 'Splurge', '$$$', '15 min from BC Place', '1055 Canada Pl, Vancouver', 'Tours every 30 min, 9am–sunset', '1 hour (incl. check-in)', false, false, 2),
('x3', 'vancouver-fifa-2026', 'experience', 'Craft Beer Crawl: Gastown to Yaletown', '5 breweries in walking distance. Start at Steamworks, end at Craft Beer Market. Pace yourself.', '/images/picks/beercrawl.jpg', 'Social', '$$', 'Starts 10 min from BC Place', 'Start: 375 Water St → End: 85 W 1st Ave', 'Afternoon is best (1pm–6pm)', '3–4 hours', false, false, 3),
('x4', 'vancouver-fifa-2026', 'experience', 'Grouse Mountain Gondola + Summit', '15-min gondola to the summit. Bears, ziplines, and a view that doesn''t feel real.', '/images/picks/grouse.jpg', 'Half-Day Trip', '$$$', '35 min from downtown', '6400 Nancy Greene Way, North Vancouver', '9am–10pm', '3–4 hours', false, false, 4),
('x5', 'vancouver-fifa-2026', 'experience', 'Deep Cove Kayak', 'Paddle through glass-calm water surrounded by mountains. Rent at the dock, no experience needed.', '/images/picks/deepcove.jpg', 'Outdoor', '$$', '40 min from downtown', '2156 Banbury Rd, North Vancouver', '9am–7pm', '2–3 hours', false, false, 5),
('x6', 'vancouver-fifa-2026', 'experience', 'Chinatown Night Market', 'Friday + Saturday nights only. Street food, bubble tea, live music. The vibe is unmatched.', '/images/picks/nightmarket.jpg', 'After Dark', '$', '12 min from BC Place', 'Keefer St, Vancouver', 'Fri–Sat 6pm–11pm', '1.5 hours', false, false, 6);

-- ── CHILL TAB ────────────────────────────────────
INSERT INTO picks (id, event_id, tab, name, hook, image, vibe, price_range, distance, address, hours, time_needed, is_top_pick, is_preview, sort_order) VALUES
('c1', 'vancouver-fifa-2026', 'chill', 'Revolver Coffee', 'The best coffee in Vancouver, no debate. Exposed brick, rotating single-origin menu. Gastown gem.', '/images/picks/revolver.jpg', 'Coffee', '$', '10 min from BC Place', '325 Cambie St, Vancouver', '7:30am–6pm', '30 min–1 hour', true, false, 1),
('c2', 'vancouver-fifa-2026', 'chill', 'David Lam Park Waterfront', 'Quiet park on the seawall. Grab a coffee, sit by the water, recharge. 5 min from Yaletown.', '/images/picks/davidlam.jpg', 'Fresh Air', 'Free', '7 min from BC Place', '1300 Pacific Blvd, Vancouver', 'Open 24h', '30 min–1 hour', false, false, 2),
('c3', 'vancouver-fifa-2026', 'chill', 'Prohibition Lounge (Rosewood Hotel Georgia)', 'Hidden speakeasy in the basement of a heritage hotel. Dark leather, strong cocktails, jazz some nights.', '/images/picks/prohibition.jpg', 'Drink', '$$$', '10 min from BC Place', '801 W Georgia St, Vancouver', '5pm–1am', '1 hour', false, false, 3),
('c4', 'vancouver-fifa-2026', 'chill', 'Nemesis Coffee (Gastown)', 'Third-wave coffee with killer pastries. Window seats perfect for people-watching on Water Street.', '/images/picks/nemesis.jpg', 'Coffee', '$', '10 min from BC Place', '302 W Hastings St, Vancouver', '7am–5pm', '30 min', false, false, 4),
('c5', 'vancouver-fifa-2026', 'chill', 'Kitsilano Beach', 'Chill beach with mountain views and a heated saltwater pool. The local summer hangout.', '/images/picks/kitsbeach.jpg', 'Fresh Air', 'Free', '20 min from BC Place', '1499 Arbutus St, Vancouver', 'Open 24h (pool 7am–8:45pm)', '1–3 hours', false, false, 5),
('c6', 'vancouver-fifa-2026', 'chill', 'Storm Crow Alehouse', 'Nerdy pub with board games, themed cocktails, and zero pretension. Great for downtime with friends.', '/images/picks/stormcrow.jpg', 'Drink', '$$', '20 min from BC Place', '1619 W Broadway, Vancouver', '11am–midnight', '1–2 hours', false, false, 6);

-- ── ITINERARY TEMPLATES ──────────────────────────
INSERT INTO itinerary_templates (id, event_id, name, description, sort_order) VALUES
('t1', 'vancouver-fifa-2026', '3-Hour Pre-Match Plan', 'Arrive, eat, explore, get to the stadium — all timed perfectly.', 1),
('t2', 'vancouver-fifa-2026', 'Rest Day Explorer', 'No match today? Here''s how to see the best of Vancouver in one day.', 2);

INSERT INTO itinerary_steps (template_id, time_label, action, pick_id, sort_order) VALUES
('t1', '3h before', 'Arrive downtown. Drop bags at hotel/locker.', NULL, 1),
('t1', '2.5h before', 'Grab food at Japadog or Meat & Bread', 'e1', 2),
('t1', '2h before', 'Walk the Gastown district — Steam Clock, window shopping', 'd4', 3),
('t1', '1.5h before', 'Head to the FIFA Fan Festival zone', 'd3', 4),
('t1', '45min before', 'Walk to BC Place. Find your gate.', NULL, 5),
('t1', 'Kickoff', 'You''re in your seat. Let''s go.', NULL, 6),
('t2', '9am', 'Coffee at Revolver', 'c1', 1),
('t2', '10am', 'Granville Island Market — explore, taste, shop', 'd1', 2),
('t2', '12:30pm', 'Lunch at The Flying Pig in Yaletown', 'e5', 3),
('t2', '2pm', 'Rent bikes — ride the Stanley Park Seawall', 'd2', 4),
('t2', '4:30pm', 'FlyOver Canada ride at Canada Place', 'x1', 5),
('t2', '6pm', 'Craft beer at Steamworks in Gastown', 'e8', 6),
('t2', '8:30pm', 'English Bay sunset', 'd7', 7);
