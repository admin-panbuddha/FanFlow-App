// ═══════════════════════════════════════════════════════════════
// CLAIMS + REWARDS API — Workafé
// Handles: claim, redeem, validate, user points, notifications
// ═══════════════════════════════════════════════════════════════

const express = require('express');
const router = express.Router();
const store = require('./store');

// ── POST /api/purchase/claim ─────────────────────────────────
// User claims a deal
router.post('/claim', (req, res) => {
  const { deviceId, promoId, eventId, dealName, businessName, category, address } = req.body;

  if (!deviceId || !promoId) {
    return res.status(400).json({ success: false, error: 'Missing deviceId or promoId' });
  }

  const result = store.createClaim(deviceId, promoId, eventId, dealName, businessName, category, address);

  if (result.existing) {
    return res.json({
      success: true,
      existing: true,
      code: result.claim.code,
      claimId: result.claim.id,
      message: 'You already claimed this deal'
    });
  }

  res.json({
    success: true,
    existing: false,
    code: result.claim.code,
    claimId: result.claim.id,
    points: 10,
    message: 'Deal claimed! +10 points'
  });
});

// ── POST /api/purchase/redeem ────────────────────────────────
// Business validates and redeems a claim
router.post('/redeem', (req, res) => {
  const { claimId, code } = req.body;

  if (!claimId || !code) {
    return res.status(400).json({ success: false, error: 'Missing claimId or code' });
  }

  const result = store.redeemClaim(claimId, code);
  res.json(result);
});

// ── POST /api/purchase/validate ──────────────────────────────
// Business scans QR / enters code to check validity
router.post('/validate', (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ success: false, error: 'Missing code' });
  }

  const claim = store.validateCode(code);
  if (!claim) {
    return res.json({ valid: false, message: 'Code not found' });
  }

  res.json({
    valid: true,
    claim: {
      id: claim.id,
      dealName: claim.dealName,
      businessName: claim.businessName,
      status: claim.status,
      claimedAt: claim.claimedAt,
      redeemedAt: claim.redeemedAt
    }
  });
});

// ── GET /api/purchase/claims/:deviceId ───────────────────────
// Get user's claim history
router.get('/claims/:deviceId', (req, res) => {
  const claims = store.getUserClaims(req.params.deviceId);
  res.json({ claims });
});

// ── GET /api/purchase/points/:deviceId ───────────────────────
// Get user's points and activity
router.get('/points/:deviceId', (req, res) => {
  const data = store.getUserPoints(req.params.deviceId);
  res.json(data);
});

// ── GET /api/purchase/stats ──────────────────────────────────
// Business dashboard stats
router.get('/stats', (req, res) => {
  const { eventId } = req.query;
  const stats = store.getBusinessStats(eventId);
  res.json(stats);
});

// ── POST /api/purchase/notify ────────────────────────────────
// Business sends a notification
router.post('/notify', (req, res) => {
  const { title, body, promoId, eventId } = req.body;

  if (!title || !body) {
    return res.status(400).json({ success: false, error: 'Missing title or body' });
  }

  const notif = store.createNotification(title, body, promoId, eventId);
  res.json({ success: true, notification: notif });
});

// ── GET /api/purchase/notifications ──────────────────────────
// Get recent notifications
router.get('/notifications', (req, res) => {
  const limit = parseInt(req.query.limit) || 20;
  const notifs = store.getNotifications(limit);
  res.json({ notifications: notifs });
});

module.exports = router;
