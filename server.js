require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ── API Routes ───────────────────────────────────
app.use('/api/events', require('./routes/events'));
app.use('/api/purchase', require('./routes/purchase'));
app.use('/api/health', (req, res) => res.json({ status: 'ok', app: 'Workafe' }));

// ── Static HTML pages (before SPA fallback) ──────
app.get('/welcome', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
});
app.get('/vendor-marketing', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'vendor-marketing.html'));
});

// ── SPA Fallback ─────────────────────────────────
// All non-API routes serve the main app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ── Error handler ────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({ error: 'Something went wrong' });
});

// ── Start ────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n☕ Workafé running on http://localhost:${PORT}\n`);
});