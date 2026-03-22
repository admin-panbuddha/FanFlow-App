/* ═══════════════════════════════════════════════════════════════
   WORKAFÉ — Find Your Perfect Work Café
   Views: Home | Map | Cafés | Detail | Success | Saved | Rewards
   ═══════════════════════════════════════════════════════════════ */

// ── STATE ─────────────────────────────────────────────────────
let currentEvent = null;
let allDeals = [];
let currentDeal = null;
let currentTab = 'all';
let savedDeals = JSON.parse(localStorage.getItem('workafe_saved') || '[]');
let deviceId = localStorage.getItem('workafe_device_id');
let leafletMap = null;
let mapMarkers = [];
let mapInitialized = false;

// Migrate old localStorage keys if present
if (!deviceId && localStorage.getItem('ff_device_id')) {
  deviceId = localStorage.getItem('ff_device_id');
  localStorage.setItem('workafe_device_id', deviceId);
}
if (savedDeals.length === 0 && localStorage.getItem('ff_saved')) {
  savedDeals = JSON.parse(localStorage.getItem('ff_saved') || '[]');
  localStorage.setItem('workafe_saved', JSON.stringify(savedDeals));
}

// Generate device ID on first visit
if (!deviceId) {
  deviceId = 'dev_' + Math.random().toString(36).substring(2, 15);
  localStorage.setItem('workafe_device_id', deviceId);
}

// ── DOM HELPERS ───────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function showView(viewId) {
  $$('.view').forEach(v => v.classList.remove('active'));
  const view = $(`#view-${viewId}`);
  if (view) view.classList.add('active');
  window.scrollTo(0, 0);

  // Update bottom nav active state
  $$('.bottom-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.nav === viewId);
  });

  // Initialize map when first shown
  if (viewId === 'map' && !mapInitialized) {
    setTimeout(() => initMap(), 100);
  }

  // Refresh data for specific views
  if (viewId === 'saved') renderSavedView();
  if (viewId === 'rewards') renderRewardsView();
}

function showToast(message, type = 'info') {
  const container = $('#toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function formatDates(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  const sm = s.toLocaleString('default', { month: 'short' });
  const em = e.toLocaleString('default', { month: 'short' });
  return sm === em
    ? `${sm} ${s.getDate()}–${e.getDate()}, ${s.getFullYear()}`
    : `${sm} ${s.getDate()} – ${em} ${e.getDate()}, ${s.getFullYear()}`;
}

function getLevel(points) {
  if (points >= 500) return 'VIP';
  if (points >= 200) return 'Local Expert';
  if (points >= 50) return 'Regular';
  return 'Explorer';
}

function getNextLevel(points) {
  if (points >= 500) return 'Max level reached!';
  if (points >= 200) return `${500 - points} pts to VIP`;
  if (points >= 50) return `${200 - points} pts to Local Expert`;
  return `${50 - points} pts to Regular`;
}

function getLevelProgress(points) {
  if (points >= 500) return 1;
  if (points >= 200) return (points - 200) / 300;
  if (points >= 50) return (points - 50) / 150;
  return points / 50;
}

// ═══════════════════════════════════════════════════════════════
// HOME VIEW
// ═══════════════════════════════════════════════════════════════

async function loadHome() {
  try {
    const res = await fetch('/api/events');
    const events = await res.json();
    if (!events || events.length === 0) return;

    // Load the first (and currently only) event
    const eventRes = await fetch(`/api/events/${events[0].id}`);
    currentEvent = await eventRes.json();
    allDeals = currentEvent.deals || [];

    renderHomeView();
    updatePointsBanner();
  } catch (err) {
    console.error('Failed to load:', err);
  }
}

function renderHomeView() {
  if (!currentEvent) return;

  // Event hero card
  const heroEl = $('#event-hero');
  heroEl.innerHTML = `
    <div class="hero-gradient"></div>
    <div class="hero-content">
      <div class="hero-badge">LIVE EVENT</div>
      <h1 class="hero-city">${currentEvent.city}</h1>
      <p class="hero-event">${currentEvent.event_name}</p>
      <p class="hero-dates">${formatDates(currentEvent.dates.start, currentEvent.dates.end)}</p>
      <div class="hero-stats">
        <div class="hero-stat">
          <span class="hero-stat-value">${currentEvent.total_deals}</span>
          <span class="hero-stat-label">deals</span>
        </div>
        <div class="hero-stat-divider"></div>
        <div class="hero-stat">
          <span class="hero-stat-value">${currentEvent.trending_count}</span>
          <span class="hero-stat-label">trending</span>
        </div>
        <div class="hero-stat-divider"></div>
        <div class="hero-stat">
          <span class="hero-stat-value">FREE</span>
          <span class="hero-stat-label">for you</span>
        </div>
      </div>
    </div>
  `;

  // Trending deals (horizontal scroll)
  const trendingDeals = allDeals.filter(d => d.trending);
  const trendingEl = $('#trending-deals');
  trendingEl.innerHTML = trendingDeals.map(deal => `
    <div class="trending-card" data-deal-id="${deal.id}">
      <div class="trending-img">
        <span class="trending-badge">${deal.discount}</span>
      </div>
      <div class="trending-info">
        <h4 class="trending-name">${deal.name}</h4>
        <p class="trending-hook">${deal.hook.substring(0, 50)}...</p>
        <div class="trending-meta">
          <span class="trending-category">${deal.category}</span>
          <span class="trending-distance">${deal.distance}</span>
        </div>
      </div>
    </div>
  `).join('');

  trendingEl.querySelectorAll('.trending-card').forEach(card => {
    card.addEventListener('click', () => {
      const deal = allDeals.find(d => d.id === card.dataset.dealId);
      if (deal) openDetail(deal);
    });
  });

  // Nearby deals (vertical list — first 6)
  const nearbyEl = $('#nearby-deals');
  const nearbyDeals = allDeals.slice(0, 6);
  nearbyEl.innerHTML = nearbyDeals.map(deal => renderDealCard(deal)).join('');
  attachDealCardHandlers(nearbyEl);
}

function renderDealCard(deal) {
  const isSaved = savedDeals.some(d => d.id === deal.id);
  return `
    <div class="deal-card" data-deal-id="${deal.id}">
      <div class="deal-card-left">
        <div class="deal-card-img">
          <span class="deal-badge">${deal.discount}</span>
        </div>
      </div>
      <div class="deal-card-center">
        <h3 class="deal-card-name">${deal.name}</h3>
        <p class="deal-card-hook">${deal.hook}</p>
        <div class="deal-card-meta">
          <span class="deal-card-vibe">${deal.vibe}</span>
          <span class="deal-card-distance">
            <span class="material-symbols-outlined" style="font-size:14px">near_me</span>
            ${deal.distance}
          </span>
        </div>
      </div>
      <div class="deal-card-right">
        <button class="deal-save-btn ${isSaved ? 'active' : ''}" data-deal-id="${deal.id}">
          <span class="material-symbols-outlined">${isSaved ? 'bookmark' : 'bookmark_border'}</span>
        </button>
      </div>
    </div>
  `;
}

function attachDealCardHandlers(container) {
  container.querySelectorAll('.deal-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.deal-save-btn')) return;
      const deal = allDeals.find(d => d.id === card.dataset.dealId);
      if (deal) openDetail(deal);
    });
  });

  container.querySelectorAll('.deal-save-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const deal = allDeals.find(d => d.id === btn.dataset.dealId);
      if (deal) {
        toggleSave(deal);
        const icon = btn.querySelector('.material-symbols-outlined');
        const isSaved = savedDeals.some(d => d.id === deal.id);
        btn.classList.toggle('active', isSaved);
        icon.textContent = isSaved ? 'bookmark' : 'bookmark_border';
      }
    });
  });
}

async function updatePointsBanner() {
  try {
    const res = await fetch(`/api/purchase/points/${deviceId}`);
    const data = await res.json();
    const pts = data.points || 0;
    const homePoints = $('#home-points');
    const homeLevel = $('#home-level');
    if (homePoints) homePoints.textContent = pts;
    if (homeLevel) homeLevel.textContent = getLevel(pts);
  } catch (e) { /* silent */ }
}

// ═══════════════════════════════════════════════════════════════
// MAP VIEW — Leaflet + OpenStreetMap
// ═══════════════════════════════════════════════════════════════

function initMap() {
  if (!currentEvent || mapInitialized) return;

  const center = currentEvent.venue_coords || { lat: 49.2768, lng: -123.1116 };
  leafletMap = L.map('map-container', {
    zoomControl: false,
    attributionControl: false
  }).setView([center.lat, center.lng], 14);

  // Dark tile layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
  }).addTo(leafletMap);

  // Add venue marker
  L.marker([center.lat, center.lng], {
    icon: L.divIcon({
      className: 'venue-marker',
      html: '<div class="venue-pin"><span class="material-symbols-outlined">stadium</span></div>',
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    })
  }).addTo(leafletMap);

  plotDealsOnMap(allDeals);
  mapInitialized = true;

  // Map filter chips
  $$('#map-filters .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      $$('#map-filters .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      const filtered = filter === 'all' ? allDeals : allDeals.filter(d => d.category === filter);
      plotDealsOnMap(filtered);
    });
  });
}

function plotDealsOnMap(deals) {
  // Clear existing markers
  mapMarkers.forEach(m => leafletMap.removeLayer(m));
  mapMarkers = [];

  const categoryColors = {
    food: '#D4645A',
    drinks: '#C8956C',
    activities: '#4A8C6A',
    shopping: '#D4A853'
  };

  deals.forEach(deal => {
    if (!deal.coords) return;

    const color = categoryColors[deal.category] || '#C8956C';
    const marker = L.marker([deal.coords.lat, deal.coords.lng], {
      icon: L.divIcon({
        className: 'deal-marker',
        html: `<div class="deal-pin" style="background:${color}">
          <span style="font-size:11px;font-weight:700;color:#1A1510">${deal.discount}</span>
        </div>`,
        iconSize: [60, 28],
        iconAnchor: [30, 14]
      })
    }).addTo(leafletMap);

    marker.on('click', () => {
      showMapPreview(deal);
    });

    mapMarkers.push(marker);
  });
}

function showMapPreview(deal) {
  const preview = $('#map-preview');
  $('#map-preview-badge').textContent = deal.discount;
  $('#map-preview-name').textContent = deal.name;
  $('#map-preview-hook').textContent = deal.hook;
  $('#map-preview-distance').textContent = deal.distance;
  $('#map-preview-vibe').textContent = deal.vibe;
  preview.style.display = 'block';

  $('#map-preview-go').onclick = () => {
    preview.style.display = 'none';
    openDetail(deal);
  };

  // Close preview when clicking map
  leafletMap.once('click', () => {
    preview.style.display = 'none';
  });
}

// ═══════════════════════════════════════════════════════════════
// DEALS BROWSE VIEW — Category Filters
// ═══════════════════════════════════════════════════════════════

function openDealsView(filterCategory) {
  if (!currentEvent) return;

  const tab = filterCategory || 'all';
  currentTab = tab;

  // Set event name
  const nameEl = $('#deals-event-name');
  if (nameEl) nameEl.textContent = `${currentEvent.city} — ${currentEvent.event_name}`;

  // Activate correct tab
  $$('#tab-bar .tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });

  renderDealsTab(tab);
  showView('deals');
}

function renderDealsTab(tab) {
  const content = $('#deals-content');
  const filtered = tab === 'all' ? allDeals : allDeals.filter(d => d.category === tab);

  if (filtered.length === 0) {
    content.innerHTML = `
      <div class="empty-state">
        <span class="material-symbols-outlined" style="font-size:48px;color:var(--on-surface-variant)">search_off</span>
        <p>No deals in this category yet.</p>
      </div>
    `;
    return;
  }

  content.innerHTML = `
    <div class="container">
      <p class="deals-count">${filtered.length} deal${filtered.length !== 1 ? 's' : ''} available</p>
      <div class="deals-list">
        ${filtered.map(deal => renderDealCard(deal)).join('')}
      </div>
      <div class="spacer-bottom"></div>
    </div>
  `;

  attachDealCardHandlers(content);
}

// ═══════════════════════════════════════════════════════════════
// DETAIL VIEW — Full Deal + Claim CTA
// ═══════════════════════════════════════════════════════════════

function openDetail(deal) {
  currentDeal = deal;
  const content = $('#detail-content');
  const isSaved = savedDeals.some(d => d.id === deal.id);

  // Update save icon in navbar
  const saveIcon = $('#detail-save-icon');
  if (saveIcon) saveIcon.textContent = isSaved ? 'bookmark' : 'bookmark_border';

  content.innerHTML = `
    <div class="detail-hero">
      <div class="detail-hero-gradient"></div>
      <div class="detail-discount-badge">${deal.discount}</div>
    </div>
    <div class="container">
      <div class="detail-header">
        <span class="detail-vibe-tag">${deal.vibe}</span>
        <span class="detail-category-tag">${deal.category}</span>
      </div>
      <h1 class="detail-name">${deal.name}</h1>

      <div class="detail-deal-box">
        <span class="material-symbols-outlined" style="color:var(--primary);font-size:20px">local_offer</span>
        <span class="detail-deal-text">${deal.discount_detail || deal.discount}</span>
      </div>

      <div class="detail-section">
        <p class="detail-hook">${deal.hook}</p>
      </div>

      <div class="detail-info-grid">
        <div class="detail-info-item">
          <span class="material-symbols-outlined">near_me</span>
          <div>
            <span class="detail-info-label">Distance</span>
            <span class="detail-info-value">${deal.distance}</span>
          </div>
        </div>
        <div class="detail-info-item">
          <span class="material-symbols-outlined">payments</span>
          <div>
            <span class="detail-info-label">Price Range</span>
            <span class="detail-info-value">${deal.price_range}</span>
          </div>
        </div>
        ${deal.hours ? `
        <div class="detail-info-item">
          <span class="material-symbols-outlined">schedule</span>
          <div>
            <span class="detail-info-label">Hours</span>
            <span class="detail-info-value">${deal.hours}</span>
          </div>
        </div>` : ''}
        ${deal.time_needed ? `
        <div class="detail-info-item">
          <span class="material-symbols-outlined">timer</span>
          <div>
            <span class="detail-info-label">Time Needed</span>
            <span class="detail-info-value">${deal.time_needed}</span>
          </div>
        </div>` : ''}
      </div>

      ${deal.address ? `
      <div class="detail-address">
        <span class="material-symbols-outlined">location_on</span>
        <span>${deal.address}</span>
      </div>` : ''}

      <div class="detail-cta-area">
        ${deal.address ? `
        <button class="btn btn-secondary btn-lg" id="detail-directions">
          <span class="material-symbols-outlined">directions</span>
          Directions
        </button>` : ''}
        <button class="btn btn-primary btn-lg btn-claim" id="detail-claim">
          <span class="material-symbols-outlined">local_offer</span>
          Claim This Deal
        </button>
      </div>

      <div class="spacer-bottom"></div>
    </div>
  `;

  // Directions button
  const dirBtn = content.querySelector('#detail-directions');
  if (dirBtn && deal.address) {
    dirBtn.addEventListener('click', () => {
      window.open(`https://maps.google.com/?q=${encodeURIComponent(deal.address)}`, '_blank');
    });
  }

  // Claim button
  content.querySelector('#detail-claim').addEventListener('click', () => claimDeal(deal));

  // Nav save button
  const navSaveBtn = $('#detail-save-btn');
  if (navSaveBtn) {
    navSaveBtn.onclick = () => {
      toggleSave(deal);
      const icon = $('#detail-save-icon');
      const nowSaved = savedDeals.some(d => d.id === deal.id);
      icon.textContent = nowSaved ? 'bookmark' : 'bookmark_border';
      showToast(nowSaved ? 'Deal saved!' : 'Deal removed from saved');
    };
  }

  showView('detail');
}

// ═══════════════════════════════════════════════════════════════
// CLAIM DEAL — Full flow with QR code
// ═══════════════════════════════════════════════════════════════

async function claimDeal(deal) {
  try {
    const res = await fetch('/api/purchase/claim', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        deviceId,
        promoId: deal.id,
        eventId: currentEvent?.id,
        dealName: deal.name,
        businessName: deal.name,
        category: deal.category,
        address: deal.address
      })
    });

    const data = await res.json();

    if (data.success) {
      showClaimSuccess(deal, data);
    } else {
      showToast('Failed to claim deal', 'error');
    }
  } catch (err) {
    console.error('Claim error:', err);
    showToast('Network error — try again', 'error');
  }
}

function showClaimSuccess(deal, claimData) {
  // Set deal name
  $('#success-deal-name').textContent = deal.name;
  $('#success-code').textContent = claimData.code;
  $('#success-points').textContent = claimData.existing
    ? 'Already claimed — showing your code'
    : `+${claimData.points || 10} points earned!`;

  // Generate QR code
  const qrContainer = $('#qr-container');
  qrContainer.innerHTML = '';
  new QRCode(qrContainer, {
    text: JSON.stringify({ claimId: claimData.claimId, code: claimData.code }),
    width: 160,
    height: 160,
    colorDark: '#1A1510',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.M
  });

  // Directions button
  $('#success-directions').onclick = () => {
    if (deal.address) {
      window.open(`https://maps.google.com/?q=${encodeURIComponent(deal.address)}`, '_blank');
    }
  };

  // Done button
  $('#success-done').onclick = () => {
    showView('deals');
    openDealsView(currentTab);
  };

  // Close button
  $('#success-close').onclick = () => {
    showView('deals');
    openDealsView(currentTab);
  };

  showView('success');
  updatePointsBanner();
}

// ═══════════════════════════════════════════════════════════════
// SAVED VIEW — Bookmarks + Active Claims
// ═══════════════════════════════════════════════════════════════

function toggleSave(deal) {
  const index = savedDeals.findIndex(d => d.id === deal.id);
  if (index > -1) {
    savedDeals.splice(index, 1);
  } else {
    savedDeals.push(deal);
  }
  localStorage.setItem('workafe_saved', JSON.stringify(savedDeals));
}

async function renderSavedView() {
  const activeSavedTab = document.querySelector('.saved-tab-btn.active')?.dataset.savedTab || 'bookmarks';

  if (activeSavedTab === 'bookmarks') {
    renderBookmarks();
  } else {
    await renderClaims();
  }
}

function renderBookmarks() {
  const list = $('#saved-list');
  if (savedDeals.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <span class="material-symbols-outlined" style="font-size:48px;color:var(--on-surface-variant)">bookmark_border</span>
        <p>No saved deals yet</p>
        <p class="empty-sub">Tap the bookmark icon on any deal to save it here.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = `<div class="deals-list">
    ${savedDeals.map(deal => renderDealCard(deal)).join('')}
  </div>`;
  attachDealCardHandlers(list);
}

async function renderClaims() {
  const list = $('#saved-list');
  try {
    const res = await fetch(`/api/purchase/claims/${deviceId}`);
    const data = await res.json();

    if (!data.claims || data.claims.length === 0) {
      list.innerHTML = `
        <div class="empty-state">
          <span class="material-symbols-outlined" style="font-size:48px;color:var(--on-surface-variant)">receipt_long</span>
          <p>No claims yet</p>
          <p class="empty-sub">Claim a deal to see it here with your redemption code.</p>
        </div>
      `;
      return;
    }

    list.innerHTML = data.claims.map(claim => `
      <div class="claim-card ${claim.status}">
        <div class="claim-status-dot"></div>
        <div class="claim-info">
          <h4>${claim.dealName}</h4>
          <p class="claim-business">${claim.address || claim.businessName}</p>
          <div class="claim-meta">
            <span class="claim-code">${claim.code}</span>
            <span class="claim-status-label">${claim.status === 'redeemed' ? 'Redeemed' : 'Active'}</span>
          </div>
        </div>
        <span class="material-symbols-outlined claim-status-icon">
          ${claim.status === 'redeemed' ? 'check_circle' : 'qr_code'}
        </span>
      </div>
    `).join('');
  } catch (e) {
    list.innerHTML = '<p style="padding:20px;color:var(--on-surface-variant)">Could not load claims.</p>';
  }
}

// ═══════════════════════════════════════════════════════════════
// REWARDS VIEW — Points, Level, Activity Feed
// ═══════════════════════════════════════════════════════════════

async function renderRewardsView() {
  try {
    const [pointsRes, claimsRes] = await Promise.all([
      fetch(`/api/purchase/points/${deviceId}`),
      fetch(`/api/purchase/claims/${deviceId}`)
    ]);
    const pointsData = await pointsRes.json();
    const claimsData = await claimsRes.json();

    const pts = pointsData.points || 0;
    const claims = claimsData.claims || [];
    const redeemed = claims.filter(c => c.status === 'redeemed').length;

    // Update points display
    $('#rewards-points').textContent = pts;
    $('#rewards-level').textContent = getLevel(pts);
    $('#rewards-next').textContent = getNextLevel(pts);

    // Animate ring
    const ring = $('#rewards-ring-progress');
    const progress = getLevelProgress(pts);
    const circumference = 2 * Math.PI * 52;
    ring.style.strokeDashoffset = circumference * (1 - progress);

    // Stats
    $('#stat-claims').textContent = claims.length;
    $('#stat-redeemed').textContent = redeemed;
    $('#stat-saved').textContent = savedDeals.length;

    // Activity feed
    const feed = $('#activity-feed');
    const history = pointsData.history || [];

    if (history.length === 0) {
      feed.innerHTML = `
        <div class="empty-state-sm">
          <p>Start claiming deals to earn points!</p>
        </div>
      `;
      return;
    }

    feed.innerHTML = history.slice(0, 10).map(item => `
      <div class="activity-item">
        <div class="activity-icon ${item.type}">
          <span class="material-symbols-outlined">
            ${item.type === 'claim' ? 'local_offer' : 'check_circle'}
          </span>
        </div>
        <div class="activity-info">
          <p class="activity-desc">${item.description}</p>
          <p class="activity-time">${new Date(item.timestamp).toLocaleDateString()}</p>
        </div>
        <span class="activity-points">+${item.points}</span>
      </div>
    `).join('');
  } catch (e) {
    console.error('Rewards load error:', e);
  }
}

// ═══════════════════════════════════════════════════════════════
// NOTIFICATIONS VIEW
// ═══════════════════════════════════════════════════════════════

async function renderNotifications() {
  try {
    const res = await fetch('/api/purchase/notifications');
    const data = await res.json();
    const list = $('#notifs-list');

    if (!data.notifications || data.notifications.length === 0) {
      list.innerHTML = `
        <div class="empty-state">
          <span class="material-symbols-outlined" style="font-size:48px;color:var(--on-surface-variant)">notifications_off</span>
          <p>No notifications yet</p>
          <p class="empty-sub">You'll see new deals and updates here.</p>
        </div>
      `;
      return;
    }

    list.innerHTML = data.notifications.map(n => `
      <div class="notif-card">
        <span class="material-symbols-outlined notif-icon">campaign</span>
        <div class="notif-info">
          <h4>${n.title}</h4>
          <p>${n.body}</p>
          <span class="notif-time">${new Date(n.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    `).join('');
  } catch (e) {
    console.error('Notifications error:', e);
  }
}

// ═══════════════════════════════════════════════════════════════
// NAVIGATION + INIT
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Bottom nav
  $$('.bottom-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = btn.dataset.nav;
      if (nav === 'home') showView('home');
      else if (nav === 'map') showView('map');
      else if (nav === 'deals') openDealsView('all');
      else if (nav === 'saved') showView('saved');
      else if (nav === 'rewards') showView('rewards');
    });
  });

  // Tab bar (deals view)
  $$('#tab-bar .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      currentTab = tab;
      $$('#tab-bar .tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
      renderDealsTab(tab);
    });
  });

  // Saved view tabs
  $$('.saved-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.saved-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSavedView();
    });
  });

  // Back buttons
  const detailBack = $('#detail-back');
  if (detailBack) detailBack.addEventListener('click', () => {
    if (currentTab) openDealsView(currentTab);
    else showView('home');
  });

  const notifsBack = $('#notifs-back');
  if (notifsBack) notifsBack.addEventListener('click', () => showView('home'));

  // Notification bell
  const notifBtn = $('#notif-btn');
  if (notifBtn) notifBtn.addEventListener('click', () => {
    renderNotifications();
    showView('notifs');
  });

  // "See All" buttons
  const seeAllTrending = $('#see-all-trending');
  if (seeAllTrending) seeAllTrending.addEventListener('click', () => openDealsView('all'));
  const seeAllDeals = $('#see-all-deals');
  if (seeAllDeals) seeAllDeals.addEventListener('click', () => openDealsView('all'));

  // Hero card click → deals
  const heroSection = $('#event-hero-section');
  if (heroSection) heroSection.addEventListener('click', () => openDealsView('all'));

  // PWA Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('SW registered'))
      .catch(err => console.warn('SW failed:', err));
  }

  // Load data
  loadHome();
});
