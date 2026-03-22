/**
 * WORKAFÉ — MERCHANT CATEGORY REGISTRY
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all business types, browse categories, and tags.
 *
 * DESIGN PRINCIPLE:
 *   "Coffee" is a CATEGORY, not the product.
 *   This platform is a local business growth + discovery system.
 *   All category logic flows from this file — never hardcode categories elsewhere.
 *
 * TO ADD A NEW BUSINESS TYPE: add one entry to BUSINESS_TYPES.
 * TO ADD A NEW BROWSE CATEGORY: add one entry to BROWSE_CATEGORIES.
 * No other file needs to change.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── BUSINESS TYPES ────────────────────────────────────────────────────────────
// What a merchant registers as. Drives AI content tone and onboarding copy.
// Used in: vendor onboarding forms, merchant profiles, AI marketing engine.

const BUSINESS_TYPES = [
  {
    id: 'cafe',
    label: 'Café',
    plural: 'Cafés',
    icon: 'coffee',                      // Material Symbol
    emoji: '☕',
    tagline: 'Work-friendly café',
    ai_tone: 'warm, productive, cozy',
    ai_hook_style: 'remote work + community',
    sample_tags: ['wifi', 'quiet', 'power-outlets', 'remote-work', 'espresso'],
    browse_categories: ['drinks', 'food'],
  },
  {
    id: 'coffee_shop',
    label: 'Coffee Shop',
    plural: 'Coffee Shops',
    icon: 'local_cafe',
    emoji: '☕',
    tagline: 'Specialty coffee destination',
    ai_tone: 'artisan, craft, passionate',
    ai_hook_style: 'specialty coffee + craft',
    sample_tags: ['specialty-coffee', 'pour-over', 'beans', 'roastery'],
    browse_categories: ['drinks'],
  },
  {
    id: 'bakery',
    label: 'Bakery',
    plural: 'Bakeries',
    icon: 'bakery_dining',
    emoji: '🥐',
    tagline: 'Fresh baked daily',
    ai_tone: 'warm, homey, indulgent',
    ai_hook_style: 'fresh bakes + morning ritual',
    sample_tags: ['pastries', 'sourdough', 'morning', 'takeaway', 'gluten-free'],
    browse_categories: ['food'],
  },
  {
    id: 'restaurant',
    label: 'Restaurant',
    plural: 'Restaurants',
    icon: 'restaurant',
    emoji: '🍽️',
    tagline: 'Local dining destination',
    ai_tone: 'welcoming, generous, satisfying',
    ai_hook_style: 'local cuisine + community gathering',
    sample_tags: ['lunch', 'dinner', 'dine-in', 'takeout', 'patio'],
    browse_categories: ['food'],
  },
  {
    id: 'coworking',
    label: 'Coworking Space',
    plural: 'Coworking Spaces',
    icon: 'desk',
    emoji: '💼',
    tagline: 'Productive shared workspace',
    ai_tone: 'professional, focused, collaborative',
    ai_hook_style: 'productivity + professional community',
    sample_tags: ['hot-desk', 'meeting-rooms', 'wifi', 'quiet', 'monthly'],
    browse_categories: ['activities'],
  },
  {
    id: 'lounge',
    label: 'Lounge / Bar',
    plural: 'Lounges',
    icon: 'local_bar',
    emoji: '🍸',
    tagline: 'Relaxed social space',
    ai_tone: 'social, laid-back, vibrant',
    ai_hook_style: 'after-work + social',
    sample_tags: ['cocktails', 'happy-hour', 'social', 'evening'],
    browse_categories: ['drinks', 'activities'],
  },
  {
    id: 'shop',
    label: 'Local Shop',
    plural: 'Local Shops',
    icon: 'storefront',
    emoji: '🛍️',
    tagline: 'Independent local retailer',
    ai_tone: 'personal, curated, community-driven',
    ai_hook_style: 'local + handpicked',
    sample_tags: ['local', 'independent', 'curated', 'gifts'],
    browse_categories: ['shopping'],
  },
  {
    id: 'service',
    label: 'Service Provider',
    plural: 'Services',
    icon: 'spa',
    emoji: '✂️',
    tagline: 'Local service business',
    ai_tone: 'professional, personal, reliable',
    ai_hook_style: 'expertise + personal service',
    sample_tags: ['appointment', 'local', 'professional'],
    browse_categories: ['activities'],
  },
  {
    id: 'other',
    label: 'Other',
    plural: 'Businesses',
    icon: 'store',
    emoji: '📍',
    tagline: 'Local independent business',
    ai_tone: 'authentic, local, community-driven',
    ai_hook_style: 'local discovery',
    sample_tags: ['local', 'independent'],
    browse_categories: ['activities', 'shopping'],
  },
];

// ── BROWSE CATEGORIES ─────────────────────────────────────────────────────────
// What users browse by in the app map/discover UI.
// Separate from business_type — one business can span multiple browse categories.
// Used in: filter tabs, map chips, deal cards.

const BROWSE_CATEGORIES = [
  {
    id: 'all',
    label: 'All',
    icon: 'explore',           // Material Symbol
    color: '#C8956C',          // brand latte
    filter_all: true,
  },
  {
    id: 'food',
    label: 'Food',
    icon: 'restaurant',
    color: '#D4645A',          // coral
  },
  {
    id: 'drinks',
    label: 'Drinks',
    icon: 'local_cafe',
    color: '#C8956C',          // latte
  },
  {
    id: 'activities',
    label: 'Activities',
    icon: 'celebration',
    color: '#4A8C6A',          // sage
  },
  {
    id: 'shopping',
    label: 'Shopping',
    icon: 'shopping_bag',
    color: '#D4A853',          // gold
  },
  // ── FUTURE CATEGORIES (uncomment to activate — no other code change needed)
  // { id: 'wellness', label: 'Wellness', icon: 'spa', color: '#7B9E87' },
  // { id: 'cowork',   label: 'Cowork',   icon: 'desk', color: '#6B8CAE' },
];

// ── TAGS REGISTRY ─────────────────────────────────────────────────────────────
// Canonical tag definitions. Any merchant can carry any tag.
// Used in: merchant profiles, AI marketing context, future user filters.

const TAGS = {
  // Work-friendliness (relevant for cafés, coworking, restaurants)
  'wifi':           { label: 'Good WiFi',       icon: 'wifi',           group: 'work' },
  'quiet':          { label: 'Quiet',            icon: 'hearing',        group: 'work' },
  'power-outlets':  { label: 'Power Outlets',    icon: 'power',          group: 'work' },
  'remote-work':    { label: 'Remote Work',      icon: 'laptop_mac',     group: 'work' },
  'fast-wifi':      { label: 'Fast WiFi',        icon: 'wifi',           group: 'work' },

  // Food & Drink
  'espresso':       { label: 'Espresso',         icon: 'local_cafe',     group: 'drink' },
  'pour-over':      { label: 'Pour-over',        icon: 'local_cafe',     group: 'drink' },
  'specialty-coffee':{ label: 'Specialty Coffee',icon: 'local_cafe',     group: 'drink' },
  'pastries':       { label: 'Pastries',         icon: 'bakery_dining',  group: 'food' },
  'sourdough':      { label: 'Sourdough',        icon: 'bakery_dining',  group: 'food' },
  'brunch':         { label: 'Brunch',           icon: 'brunch_dining',  group: 'food' },
  'lunch':          { label: 'Lunch',            icon: 'restaurant',     group: 'food' },
  'dinner':         { label: 'Dinner',           icon: 'restaurant',     group: 'food' },
  'vegan':          { label: 'Vegan Options',    icon: 'eco',            group: 'food' },
  'gluten-free':    { label: 'Gluten-Free',      icon: 'no_food',        group: 'food' },

  // Vibe & Atmosphere
  'patio':          { label: 'Patio',            icon: 'deck',           group: 'vibe' },
  'cozy':           { label: 'Cozy',             icon: 'fireplace',      group: 'vibe' },
  'bright':         { label: 'Bright & Airy',    icon: 'light_mode',     group: 'vibe' },
  'evening':        { label: 'Evening Vibes',    icon: 'nights_stay',    group: 'vibe' },
  'social':         { label: 'Social',           icon: 'groups',         group: 'vibe' },

  // Practical
  'takeaway':       { label: 'Takeaway',         icon: 'takeout_dining', group: 'practical' },
  'dine-in':        { label: 'Dine-in',          icon: 'chair',          group: 'practical' },
  'appointment':    { label: 'By Appointment',   icon: 'event',          group: 'practical' },
  'local':          { label: 'Local Favourite',  icon: 'favorite',       group: 'practical' },
  'independent':    { label: 'Independent',      icon: 'store',          group: 'practical' },
};

// ── AI CONTENT TEMPLATES (category-aware) ─────────────────────────────────────
// Used by the AI Marketing engine to generate category-appropriate content.
// Each business type gets distinct copy hooks, hashtag clusters, and content angles.

const AI_CONTENT_TEMPLATES = {
  cafe: {
    hooks: [
      'The best office in Vancouver has no desk required.',
      'Your next great idea starts with the right seat.',
      'Work better. Sip better. Be here.',
    ],
    hashtag_clusters: [
      '#RemoteWork #WorkFromCafe #CoffeeShopVibes #VancouverCoffee #DigitalNomad',
      '#WFH #CafeLife #Vancouver #WorkafeCafe #ProductivityTips',
    ],
    content_angles: ['remote work tip', 'perk spotlight', 'morning routine', 'community story'],
  },
  bakery: {
    hooks: [
      'Fresh out of the oven. Every. Single. Morning.',
      'Some mornings just call for a warm croissant.',
      'Baked before you were awake.',
    ],
    hashtag_clusters: [
      '#Vancouver #Bakery #FreshBaked #MorningVibes #PastryLife',
      '#LocalBakery #Croissant #Sourdough #VancouverEats #BakeryLife',
    ],
    content_angles: ['daily fresh item', 'behind the scenes', 'seasonal special', 'community pick'],
  },
  restaurant: {
    hooks: [
      'The neighbourhood table you\'ve been looking for.',
      'Lunch is better when you actually enjoy it.',
      'Good food. Good company. Great neighbourhood.',
    ],
    hashtag_clusters: [
      '#Vancouver #LocalEats #VancouverFood #SupportLocal #FoodieVancouver',
      '#LunchBreak #LocalRestaurant #VancouverDining #EatLocal #FoodLover',
    ],
    content_angles: ['daily special', 'chef highlight', 'seasonal menu', 'community moment'],
  },
  coworking: {
    hooks: [
      'Your most productive day starts here.',
      'Finally — a desk worth showing up to.',
      'Where ideas happen and deadlines get met.',
    ],
    hashtag_clusters: [
      '#Vancouver #Coworking #RemoteWork #Productivity #WorkspaceGoals',
      '#DigitalNomad #CoworkingSpace #WFH #VancouverBusiness #StartupLife',
    ],
    content_angles: ['productivity tip', 'member spotlight', 'space feature', 'community event'],
  },
  shop: {
    hooks: [
      'Find something you can\'t get on Amazon.',
      'This is what local looks like.',
      'Curated with care. By people who actually live here.',
    ],
    hashtag_clusters: [
      '#Vancouver #ShopLocal #SupportLocal #IndieShop #Vancouver',
      '#LocalFirst #SmallBusiness #ShopSmall #VancouverShops',
    ],
    content_angles: ['new arrival', 'staff pick', 'story behind the product', 'local maker feature'],
  },
  default: {
    hooks: [
      'Your neighbourhood just got better.',
      'Good things are happening here.',
      'Local. Independent. Worth visiting.',
    ],
    hashtag_clusters: [
      '#Vancouver #SupportLocal #LocalBusiness #Community #ShopLocal',
    ],
    content_angles: ['business highlight', 'special offer', 'community story'],
  },
};

// ── EXPORTS ───────────────────────────────────────────────────────────────────
// Works in both Node.js (CommonJS) and browser (global assignment)

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BUSINESS_TYPES, BROWSE_CATEGORIES, TAGS, AI_CONTENT_TEMPLATES };
} else {
  window.MERCHANT_CONFIG = { BUSINESS_TYPES, BROWSE_CATEGORIES, TAGS, AI_CONTENT_TEMPLATES };
}
