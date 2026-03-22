// ═══════════════════════════════════════════════════════════════
// IN-MEMORY STORE — Workafé MVP
// Replace with Supabase/Postgres when real users arrive.
// The API contract stays the same — only this file changes.
// ═══════════════════════════════════════════════════════════════

const crypto = require('crypto');

// ── Data stores ─────────────────────────────────────────────
const claims = new Map();      // claimId → { userId, promoId, eventId, dealName, businessName, code, status, claimedAt, redeemedAt }
const userPoints = new Map();  // deviceId → { points, history[] }
const notifications = [];       // { id, title, body, promoId, eventId, createdAt }

// ── Helpers ─────────────────────────────────────────────────
function generateCode() {
  return 'PF-' + crypto.randomBytes(3).toString('hex').toUpperCase().slice(0, 6);
}

function generateId() {
  return crypto.randomBytes(8).toString('hex');
}

function getOrCreateUser(deviceId) {
  if (!userPoints.has(deviceId)) {
    userPoints.set(deviceId, { points: 0, history: [] });
  }
  return userPoints.get(deviceId);
}

// ── Claims ──────────────────────────────────────────────────
function createClaim(deviceId, promoId, eventId, dealName, businessName, category, address) {
  // Check if already claimed (not redeemed)
  for (const [, claim] of claims) {
    if (claim.userId === deviceId && claim.promoId === promoId && claim.status === 'claimed') {
      return { existing: true, claim };
    }
  }

  const claimId = generateId();
  const code = generateCode();
  const claim = {
    id: claimId,
    userId: deviceId,
    promoId,
    eventId,
    dealName,
    businessName: businessName || 'Local Business',
    category: category || 'general',
    address: address || '',
    code,
    status: 'claimed',    // claimed → redeemed → expired
    claimedAt: new Date().toISOString(),
    redeemedAt: null
  };

  claims.set(claimId, claim);

  // Award points for claiming
  const user = getOrCreateUser(deviceId);
  user.points += 10;
  user.history.push({
    type: 'claim',
    points: 10,
    description: `Claimed deal at ${businessName || dealName}`,
    timestamp: claim.claimedAt
  });

  return { existing: false, claim };
}

function redeemClaim(claimId, code) {
  const claim = claims.get(claimId);
  if (!claim) return { success: false, error: 'Claim not found' };
  if (claim.status === 'redeemed') return { success: false, error: 'Already redeemed' };
  if (claim.code !== code) return { success: false, error: 'Invalid code' };

  claim.status = 'redeemed';
  claim.redeemedAt = new Date().toISOString();

  // Award bonus points for redemption
  const user = getOrCreateUser(claim.userId);
  user.points += 25;
  user.history.push({
    type: 'redeem',
    points: 25,
    description: `Redeemed deal at ${claim.businessName || claim.dealName}`,
    timestamp: claim.redeemedAt
  });

  return { success: true, claim };
}

// Validate a code (business-side)
function validateCode(code) {
  for (const [, claim] of claims) {
    if (claim.code === code) {
      return claim;
    }
  }
  return null;
}

function getUserClaims(deviceId) {
  const result = [];
  for (const [, claim] of claims) {
    if (claim.userId === deviceId) result.push(claim);
  }
  return result.sort((a, b) => new Date(b.claimedAt) - new Date(a.claimedAt));
}

function getUserPoints(deviceId) {
  return getOrCreateUser(deviceId);
}

// ── Business Stats ──────────────────────────────────────────
function getBusinessStats(eventId) {
  let totalClaims = 0;
  let totalRedemptions = 0;
  const dealStats = {};

  for (const [, claim] of claims) {
    if (eventId && claim.eventId !== eventId) continue;
    totalClaims++;
    if (claim.status === 'redeemed') totalRedemptions++;

    if (!dealStats[claim.promoId]) {
      dealStats[claim.promoId] = { name: claim.dealName, claims: 0, redemptions: 0 };
    }
    dealStats[claim.promoId].claims++;
    if (claim.status === 'redeemed') dealStats[claim.promoId].redemptions++;
  }

  return {
    totalClaims,
    totalRedemptions,
    conversionRate: totalClaims > 0 ? Math.round((totalRedemptions / totalClaims) * 100) : 0,
    topDeals: Object.values(dealStats).sort((a, b) => b.claims - a.claims).slice(0, 10)
  };
}

// ── Notifications ───────────────────────────────────────────
function createNotification(title, body, promoId, eventId) {
  const notif = {
    id: generateId(),
    title,
    body,
    promoId: promoId || null,
    eventId: eventId || null,
    createdAt: new Date().toISOString()
  };
  notifications.unshift(notif);
  if (notifications.length > 100) notifications.pop(); // keep last 100
  return notif;
}

function getNotifications(limit = 20) {
  return notifications.slice(0, limit);
}

module.exports = {
  createClaim,
  redeemClaim,
  validateCode,
  getUserClaims,
  getUserPoints,
  getBusinessStats,
  createNotification,
  getNotifications,
  generateId
};
