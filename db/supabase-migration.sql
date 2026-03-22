-- ═══════════════════════════════════════════════════
-- WORKAFE — Supabase Database Schema
-- Shared backend for Web (PWA) + Mobile (Expo) app
-- ═══════════════════════════════════════════════════

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── PROFILES ─────────────────────────────────────
-- Extends Supabase Auth users with app-specific data
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  email TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, display_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ── EVENTS ───────────────────────────────────────
-- Event modules (Vancouver FIFA, São Paulo Carnival, etc.)
CREATE TABLE IF NOT EXISTS events (
  id TEXT PRIMARY KEY,
  city TEXT NOT NULL,
  region TEXT NOT NULL,
  event_name TEXT NOT NULL,
  description TEXT,
  hero_image TEXT,
  venue TEXT,
  price_cents INTEGER DEFAULT 599,
  currency TEXT DEFAULT 'usd',
  date_start DATE,
  date_end DATE,
  is_active BOOLEAN DEFAULT true,
  is_coming_soon BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── PICKS ────────────────────────────────────────
-- Individual recommendations within an event module
CREATE TABLE IF NOT EXISTS picks (
  id TEXT PRIMARY KEY,
  event_id TEXT NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  tab TEXT NOT NULL CHECK (tab IN ('discover', 'eat', 'experience', 'chill')),
  name TEXT NOT NULL,
  hook TEXT NOT NULL,
  image TEXT,
  vibe TEXT,
  price_range TEXT,
  distance TEXT,
  address TEXT,
  hours TEXT,
  time_needed TEXT,
  is_top_pick BOOLEAN DEFAULT false,
  is_preview BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_picks_event ON picks(event_id);
CREATE INDEX IF NOT EXISTS idx_picks_tab ON picks(event_id, tab);

-- ── ITINERARY TEMPLATES ──────────────────────────
-- Pre-built plans (e.g., "3-Hour Pre-Match Plan")
CREATE TABLE IF NOT EXISTS itinerary_templates (
  id TEXT PRIMARY KEY,
  event_id TEXT NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  sort_order INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS itinerary_steps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  template_id TEXT NOT NULL REFERENCES itinerary_templates(id) ON DELETE CASCADE,
  time_label TEXT NOT NULL,
  action TEXT NOT NULL,
  pick_id TEXT REFERENCES picks(id) ON DELETE SET NULL,
  sort_order INTEGER DEFAULT 0
);

-- ── PURCHASES ────────────────────────────────────
-- Tracks who bought which event pack
CREATE TABLE IF NOT EXISTS purchases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  event_id TEXT NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  stripe_session_id TEXT,
  stripe_payment_intent TEXT,
  amount_cents INTEGER DEFAULT 599,
  currency TEXT DEFAULT 'usd',
  status TEXT DEFAULT 'completed' CHECK (status IN ('pending', 'completed', 'refunded')),
  device_token TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, event_id)
);

CREATE INDEX IF NOT EXISTS idx_purchases_user ON purchases(user_id);
CREATE INDEX IF NOT EXISTS idx_purchases_event ON purchases(event_id);

-- ── SAVED PICKS ──────────────────────────────────
-- User bookmarks, synced across web + mobile
CREATE TABLE IF NOT EXISTS saved_picks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  pick_id TEXT NOT NULL REFERENCES picks(id) ON DELETE CASCADE,
  event_id TEXT NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, pick_id)
);

CREATE INDEX IF NOT EXISTS idx_saved_user ON saved_picks(user_id);

-- ── PUSH SUBSCRIPTIONS ──────────────────────────
-- PWA push notification subscriptions
CREATE TABLE IF NOT EXISTS push_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  endpoint TEXT UNIQUE NOT NULL,
  p256dh TEXT NOT NULL,
  auth TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════════════════════════
-- ROW LEVEL SECURITY (RLS)
-- ═══════════════════════════════════════════════════

-- Events: anyone can read active events
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Events are viewable by everyone" ON events FOR SELECT USING (is_active = true);

-- Picks: anyone can read (content gating is done at API level based on purchase)
ALTER TABLE picks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Picks are viewable by everyone" ON picks FOR SELECT USING (true);

-- Itineraries: anyone can read
ALTER TABLE itinerary_templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Templates are viewable by everyone" ON itinerary_templates FOR SELECT USING (true);

ALTER TABLE itinerary_steps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Steps are viewable by everyone" ON itinerary_steps FOR SELECT USING (true);

-- Profiles: users can read/update their own
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Purchases: users can read their own
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own purchases" ON purchases FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Server can insert purchases" ON purchases FOR INSERT WITH CHECK (true);

-- Saved picks: users manage their own
ALTER TABLE saved_picks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own saved picks" ON saved_picks FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can save picks" ON saved_picks FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can unsave picks" ON saved_picks FOR DELETE USING (auth.uid() = user_id);

-- Push subscriptions: users manage their own
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own push subs" ON push_subscriptions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Anyone can subscribe" ON push_subscriptions FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can unsubscribe" ON push_subscriptions FOR DELETE USING (auth.uid() = user_id);
