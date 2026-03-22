const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Load all event JSON files from /data/
function loadEvents() {
  const dataDir = path.join(__dirname, '..', 'data');
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
  return files.map(f => {
    const raw = fs.readFileSync(path.join(dataDir, f), 'utf-8');
    return JSON.parse(raw);
  });
}

// GET /api/events — list all available events (preview data only)
router.get('/', (req, res) => {
  try {
    const events = loadEvents();
    const results = events.map(event => {
      const deals = event.deals || [];
      return {
        id: event.id,
        city: event.city,
        region: event.region,
        event_name: event.event_name,
        dates: event.dates,
        hero_image: event.hero_image,
        description: event.description,
        venue: event.venue,
        venue_coords: event.venue_coords,
        preview_deals: event.preview_deals || [],
        total_deals: deals.length,
        trending_count: deals.filter(d => d.trending).length,
        is_coming_soon: event.is_coming_soon || false
      };
    });

    res.json(results);
  } catch (err) {
    console.error('Events list error:', err.message);
    res.status(500).json({ error: 'Failed to load events' });
  }
});

// GET /api/events/:id — full event data with all deals
router.get('/:id', (req, res) => {
  try {
    const events = loadEvents();
    const event = events.find(e => e.id === req.params.id);

    if (!event) return res.status(404).json({ error: 'Event not found' });

    const deals = event.deals || [];

    res.json({
      id: event.id,
      city: event.city,
      region: event.region,
      event_name: event.event_name,
      dates: event.dates,
      hero_image: event.hero_image,
      description: event.description,
      venue: event.venue,
      venue_coords: event.venue_coords,
      preview_deals: event.preview_deals || [],
      total_deals: deals.length,
      trending_count: deals.filter(d => d.trending).length,
      deals
    });
  } catch (err) {
    console.error('Event detail error:', err.message);
    res.status(500).json({ error: 'Failed to load event' });
  }
});

module.exports = router;
