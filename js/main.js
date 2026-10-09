/**
 * Printing Point — Main Application Script
 *
 * Handles:
 * - EmailJS initialization and Quote/Enquiry form dispatch
 * - Global SPA view routing (Home, Products, Printing Services, Corporate Gifting, Solutions, About)
 * - Corporate Products sub-navigation and category views
 * - Printing Services interactive panels switcher
 * - Enquiry modal lifecycle (open, close, Escape key, overlay click)
 * - Pre-filled product enquiry from URL query parameter (?quote=...) and product cards
 * - Real-time client-side search and A-Z / Z-A sorting for product categories
 * - Infinite auto-scrolling customer review marquee
 */

/* ════════════════════════════════════════════════════════════
   1. EMAILJS INITIALIZATION
   ════════════════════════════════════════════════════════════ */
(function initEmailJS() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init('iWvcXhFH9YZ1vbcqC');
  }
})();

/* ════════════════════════════════════════════════════════════
   2. GLOBAL VIEW ROUTING (SPA)
   ════════════════════════════════════════════════════════════ */
/**
 * Switch active top-level view
 * @param {string} view - Target view id suffix ('home', 'Products', 'printing', 'gifting', 'solutions', 'about', 'contact')
 * @param {string} [sub] - Optional sub-section or sub-route
 */
/**
 * Update navbar catalog button visibility (completely hidden on Printing Services)
 * @param {string} [viewName]
 */
function updateNavbarCatalogVisibility(viewName) {
  var catBtn = document.getElementById('btn-navbar-catalog');
  if (!catBtn) return;
  var isPrinting = false;
  if (viewName) {
    isPrinting = (viewName === 'printing' || viewName.endsWith('-panel'));
  } else {
    var pView = document.getElementById('view-printing');
    if (pView && pView.classList.contains('active')) {
      isPrinting = true;
    } else if (window.location.hash) {
      var h = window.location.hash.toLowerCase();
      if (h === '#printing' || h.endsWith('-panel')) {
        isPrinting = true;
      }
    }
  }
  catBtn.style.display = isPrinting ? 'none' : '';
}

function gv(view, sub) {
  if (view === 'festive' || view === 'gifting') {
    openFestiveView();
    return;
  }

  // Printing Services is a true top-level architecture item, not a Products sub-section
  if (view === 'Products' && sub === 'printing') {
    view = 'printing';
    sub = null;
  }

  // Deactivate all views
  document.querySelectorAll('.view').forEach(function (v) {
    v.classList.remove('active');
  });

  var target = document.getElementById('view-' + view);
  if (!target) return;
  target.classList.add('active');

  // Ensure navbar catalog button is hidden in printing services and visible in other views
  updateNavbarCatalogVisibility(view);

  // Update navigation button active state
  document.querySelectorAll('.nbtn').forEach(function (b) {
    b.classList.remove('active');
  });
  var nb = document.getElementById('nb-' + view);
  if (nb) nb.classList.add('active');

  // Reset overview states when entering top-level main views
  if (view === 'Products') {
    closeAllViews();
  } else if (view === 'gifting') {
    closeAllGiftingViews();
  } else if (view === 'printing') {
    showMain();
  } else if (view === 'solutions' && sub) {
    openSolution(sub);
    return;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', '#' + view);
  }

  if (sub && view === 'Products') {
    gc(sub);
  }
}

/**
 * Switch Products sub-navigation section
 * @param {string} sec - Section id suffix ('corporate', 'bottles', etc.)
 */
function gc(sec) {
  document.querySelectorAll('.csec').forEach(function (s) {
    s.classList.remove('active');
  });
  document.querySelectorAll('.csnbtn').forEach(function (b) {
    b.classList.remove('active');
  });

  var bottlesBtn = document.getElementById('csn-bottles');
  if (bottlesBtn && sec !== 'bottles') {
    bottlesBtn.style.display = 'none';
  }

  var el = document.getElementById('cs-' + sec);
  var btn = document.getElementById('csn-' + sec);
  if (el) el.classList.add('active');
  if (btn) btn.classList.add('active');
}

/* ════════════════════════════════════════════════════════════
   3. CORPORATE PRODUCT CATEGORY SUB-VIEWS
   ════════════════════════════════════════════════════════════ */
var corporateViews = [
  'bottles-view',
  'mugs-sippers-view',
  'bags-view',
  'gift-sets-view',
  'notebooks-view',
  'leatherite-diaries-view',
  'powerbank-diaries-view',
  'theme-diaries-view',
  'electronics-view',
  'mobile-stands-view'
];

/**
 * Hide specific sub-view isolation and restore the main Products overview with All Products banner, category pills, and all sub-category products
 */
function closeAllViews() {
  var pv = document.getElementById('view-Products');
  if (pv) pv.classList.add('overview-mode');

  var banner = document.getElementById('p-overview-banner');
  if (banner) banner.style.display = 'flex';

  var disc = document.getElementById('p-discovery-section');
  if (disc) disc.style.display = 'block';

  // Do not split products category-wise on the overview page; keep them in their respective sub-categories
  corporateViews.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  if (typeof enhanceProductCards === 'function') {
    enhanceProductCards();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', '#Products');
  }
}

/**
 * Show a specific product category view and hide banner and other sub-categories
 * @param {string} viewId - Category view container ID
 */
function showView(viewId) {
  // Ensure view-Products is active
  document.querySelectorAll('.view').forEach(function (v) {
    v.classList.remove('active');
  });
  var pv = document.getElementById('view-Products');
  if (pv) {
    pv.classList.add('active');
    pv.classList.remove('overview-mode');
  }

  document.querySelectorAll('.nbtn').forEach(function (b) {
    b.classList.remove('active');
  });
  var nb = document.getElementById('nb-Products');
  if (nb) nb.classList.add('active');

  // Hide overview banner and category pills when viewing a specific sub-category page
  var banner = document.getElementById('p-overview-banner');
  if (banner) banner.style.display = 'none';

  var disc = document.getElementById('p-discovery-section');
  if (disc) disc.style.display = 'none';

  corporateViews.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.style.display = (id === viewId ? 'block' : 'none');
  });

  if (typeof enhanceProductCards === 'function') {
    enhanceProductCards();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', '#' + viewId);
  }
}

// Category helper opening functions
function openBottlesView() { showView('bottles-view'); }
function openMugsSippersView() { showView('mugs-sippers-view'); }
function openBagsView() { showView('bags-view'); }
function openGiftSetsView() { showView('gift-sets-view'); }
function openNotebooksView() { showView('notebooks-view'); }
function openLeatheriteDiariesView() { showView('leatherite-diaries-view'); }
function openPowerBankDiariesView() { showView('powerbank-diaries-view'); }
function openThemeDiariesView() { showView('theme-diaries-view'); }

function openNotebooksSubView(sub) {
  if (sub === 'leatherite' || sub === 'leatherite-diaries') {
    openLeatheriteDiariesView();
  } else if (sub === 'powerbank' || sub === 'powerbank-diaries') {
    openPowerBankDiariesView();
  } else if (sub === 'theme' || sub === 'theme-diaries') {
    openThemeDiariesView();
  } else {
    openNotebooksView();
  }
}
function openElectronicsView() { showView('electronics-view'); }
function openMobileStandsView() { showView('mobile-stands-view'); }

/* ════════════════════════════════════════════════════════════
   3B. FESTIVE / DIWALI GIFTING
   ════════════════════════════════════════════════════════════ */
var allGiftingViews = [
  'cg-festive-view'
];

/**
 * Open Festive / Diwali Gifting view
 */
function openFestiveView() {
  // Ensure view-gifting is active
  document.querySelectorAll('.view').forEach(function (v) {
    v.classList.remove('active');
  });
  var targetView = document.getElementById('view-gifting');
  if (targetView) targetView.classList.add('active');

  updateNavbarCatalogVisibility('festive');

  // Update nav button
  document.querySelectorAll('.nbtn').forEach(function (b) {
    b.classList.remove('active');
  });
  var nb = document.getElementById('nb-festive');
  if (nb) nb.classList.add('active');

  // Show the festive view container
  var fv = document.getElementById('cg-festive-view');
  if (fv) fv.style.display = 'block';

  if (typeof enhanceProductCards === 'function') {
    enhanceProductCards();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', '#festive-gifting');
  }
}

function openGiftingView(viewId) {
  openFestiveView();
}

function closeAllGiftingViews() {
  gv('home');
}

/* ════════════════════════════════════════════════════════════
   4. PRINTING SERVICES PANELS
   ════════════════════════════════════════════════════════════ */
var allPrintingPanels = [
  'vc-panel',
  'lb-panel',
  'env-panel',
  'id-panel',
  'df-panel',
  'sl-panel',
  'gt-panel'
];

/**
 * Show a specific printing service detail panel (no banner in sub-categories)
 * @param {string} panelId - The panel ID to display
 */
function openPrintPanel(panelId) {
  // Ensure view-printing is active and not in overview-mode
  document.querySelectorAll('.view').forEach(function (v) {
    v.classList.remove('active');
  });
  var pv = document.getElementById('view-printing');
  if (pv) {
    pv.classList.add('active');
    pv.classList.remove('overview-mode');
  }

  document.querySelectorAll('.nbtn').forEach(function (b) {
    b.classList.remove('active');
  });
  var nb = document.getElementById('nb-printing');
  if (nb) nb.classList.add('active');

  // Hide overview hero banner and category pills
  var banner = document.getElementById('print-overview-banner');
  if (banner) banner.style.display = 'none';

  var disc = document.getElementById('print-discovery-section');
  if (disc) disc.style.display = 'none';

  // Hide main grid
  var mainGrid = document.getElementById('printing-main-grid');
  if (mainGrid) mainGrid.style.display = 'none';

  // Hide all panels
  allPrintingPanels.forEach(function (id) {
    var p = document.getElementById(id);
    if (p) p.style.display = 'none';
  });

  // Show target panel
  var targetPanel = document.getElementById(panelId);
  if (targetPanel) {
    targetPanel.style.display = 'block';
  }

  updateNavbarCatalogVisibility('printing');

  if (typeof enhanceProductCards === 'function') {
    enhanceProductCards();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', '#' + panelId);
  }
}

// Backward-compatible alias
function showPanel(panelId) {
  openPrintPanel(panelId);
}

/**
 * Return to the main printing services grid (with banner and category pills)
 */
function showMain() {
  var pv = document.getElementById('view-printing');
  if (pv) {
    pv.classList.add('overview-mode');
  }

  // Restore overview hero banner and category pills
  var banner = document.getElementById('print-overview-banner');
  if (banner) banner.style.display = 'flex';

  var disc = document.getElementById('print-discovery-section');
  if (disc) disc.style.display = 'block';

  allPrintingPanels.forEach(function (id) {
    var p = document.getElementById(id);
    if (p) p.style.display = 'none';
  });

  var mainGrid = document.getElementById('printing-main-grid');
  if (mainGrid) mainGrid.style.display = 'block';

  updateNavbarCatalogVisibility('printing');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', '#printing');
  }
}

/* ════════════════════════════════════════════════════════════
   4B. SOLUTIONS VIEW NAVIGATION & HIGHLIGHTING
   ════════════════════════════════════════════════════════════ */
/**
 * Navigate to Solutions view and highlight a specific solution card
 * @param {string} solKey - e.g. 'onboarding', 'events', 'exhibitions', 'clients', 'festive', 'launches', 'office', 'bulk'
 */
function openSolution(solKey) {
  // Ensure view-solutions is active
  document.querySelectorAll('.view').forEach(function (v) {
    v.classList.remove('active');
  });
  var targetView = document.getElementById('view-solutions');
  if (targetView) targetView.classList.add('active');

  // Update nav button
  document.querySelectorAll('.nbtn').forEach(function (b) {
    b.classList.remove('active');
  });
  var nb = document.getElementById('nb-solutions');
  if (nb) nb.classList.add('active');

  if (!solKey) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  var cardId = solKey.startsWith('sol-') ? solKey : 'sol-' + solKey;
  var card = document.getElementById(cardId);
  if (card) {
    setTimeout(function () {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('solution-highlight');
      setTimeout(function () {
        card.classList.remove('solution-highlight');
      }, 2500);
    }, 200);
  }

  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', '#solutions-' + solKey.replace(/^sol-/, ''));
  }
}

/* ════════════════════════════════════════════════════════════
   5. ENQUIRY MODAL & PRODUCT PRE-FILL
   ════════════════════════════════════════════════════════════ */
/**
 * Open the enquiry modal dialog
 */
function openEQ() {
  var overlay = document.getElementById('eq-overlay');
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  var formWrap = document.getElementById('eq-form-wrap');
  if (formWrap) formWrap.style.display = 'block';

  var successWrap = document.getElementById('eq-success-wrap');
  if (successWrap) successWrap.style.display = 'none';

  var errBox = document.getElementById('eq-error');
  if (errBox) errBox.style.display = 'none';
}

/**
 * Close the enquiry modal dialog
 */
function closeEQ() {
  var overlay = document.getElementById('eq-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Close modal when user clicks backdrop outside modal dialog
 * @param {MouseEvent} e
 */
function eqOverlayClick(e) {
  if (e.target === document.getElementById('eq-overlay')) {
    closeEQ();
  }
}

// Close enquiry modal on Escape key press
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeEQ();
});

/**
 * Open enquiry modal pre-filled with a specific product name
 * @param {string} productName
 */
function openEQWithProduct(productName) {
  var msgField = document.getElementById('eq-msg');
  if (msgField) {
    msgField.value = 'Product Interested In: ' + productName;
  }
  openEQ();
}

/* ════════════════════════════════════════════════════════════
   6. ENQUIRY FORM VALIDATION & EMAILJS SUBMISSION
   ════════════════════════════════════════════════════════════ */
/**
 * Validate and submit enquiry form via EmailJS
 */
function submitEQ() {
  var btn = document.getElementById('eq-submit-btn');
  var errBox = document.getElementById('eq-error');
  if (errBox) errBox.style.display = 'none';

  var name = (document.getElementById('eq-name')?.value || '').trim();
  var company = (document.getElementById('eq-company')?.value || '').trim();
  var email = (document.getElementById('eq-email')?.value || '').trim();
  var phone = (document.getElementById('eq-phone')?.value || '').trim();
  var product = document.getElementById('eq-product')?.value || '';
  var qty = (document.getElementById('eq-qty')?.value || '').trim();

  var missing = [];
  if (!name) missing.push('Full Name');
  if (!company) missing.push('Company Name');
  if (!email) missing.push('Work Email');
  if (!phone) missing.push('Phone Number');
  if (!product) missing.push('Product Interest');
  if (!qty) missing.push('Estimated Quantity');

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    missing.push('Valid Work Email');
  }

  if (missing.length) {
    if (errBox) {
      errBox.textContent = 'Please complete the following required fields: ' + missing.join(', ') + '.';
      errBox.style.display = 'block';
    }
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Sending…';
  }

  var branding = document.getElementById('eq-branding')?.value || '';
  var msgBody = (document.getElementById('eq-msg')?.value || '').trim();

  var templateParams = {
    name: name,
    company: company,
    email: email,
    phone: phone,
    product: product,
    qty: qty,
    branding: branding || 'N/A',
    message: msgBody || 'No additional message provided.'
  };

  if (typeof emailjs === 'undefined') {
    if (errBox) {
      errBox.textContent = 'Email service is unavailable. Please email us directly at printingpoint76@yahoo.com';
      errBox.style.display = 'block';
    }
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Submit Enquiry';
    }
    return;
  }

  emailjs.send('service_ll189at', 'template_nzv0vxj', templateParams)
    .then(function () {
      if (btn) {
        btn.textContent = 'Sent Successfully!';
        btn.style.background = '#22c55e';
      }

      // Reset form fields
      var fieldIds = ['eq-name', 'eq-company', 'eq-email', 'eq-phone', 'eq-product', 'eq-qty', 'eq-branding', 'eq-msg'];
      fieldIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.value = '';
      });

      setTimeout(function () {
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Submit Enquiry';
          btn.style.background = '';
        }
        closeEQ();
      }, 3000);
    })
    .catch(function (error) {
      console.error('EmailJS Submission Error:', error);
      if (errBox) {
        errBox.textContent = 'Error: ' + (error?.text || error?.message || 'Unknown error') + '. Please email us directly at printingpoint76@yahoo.com';
        errBox.style.display = 'block';
      }
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Submit Enquiry';
      }
    });
}

/**
 * Validate and submit in-page Contact Us form via EmailJS
 */
function submitContactPageForm() {
  var btn = document.getElementById('cp-submit-btn');
  var errBox = document.getElementById('cp-error');
  if (errBox) errBox.style.display = 'none';

  var name = (document.getElementById('cp-name')?.value || '').trim();
  var company = (document.getElementById('cp-company')?.value || '').trim();
  var email = (document.getElementById('cp-email')?.value || '').trim();
  var phone = (document.getElementById('cp-phone')?.value || '').trim();
  var product = document.getElementById('cp-product')?.value || '';
  var qty = (document.getElementById('cp-qty')?.value || '').trim();

  var missing = [];
  if (!name) missing.push('Full Name');
  if (!company) missing.push('Company Name');
  if (!email) missing.push('Work Email');
  if (!phone) missing.push('Phone Number');
  if (!product) missing.push('Product Interest');
  if (!qty) missing.push('Estimated Quantity');

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    missing.push('Valid Work Email');
  }

  if (missing.length) {
    if (errBox) {
      errBox.textContent = 'Please complete the following required fields: ' + missing.join(', ') + '.';
      errBox.style.display = 'block';
    }
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Sending…';
  }

  var branding = document.getElementById('cp-branding')?.value || '';
  var msgBody = (document.getElementById('cp-msg')?.value || '').trim();

  var templateParams = {
    name: name,
    company: company,
    email: email,
    phone: phone,
    product: product,
    qty: qty,
    branding: branding || 'N/A',
    message: msgBody || 'No additional message provided.'
  };

  if (typeof emailjs === 'undefined') {
    if (errBox) {
      errBox.textContent = 'Email service is unavailable. Please email us directly at printingpoint76@yahoo.com';
      errBox.style.display = 'block';
    }
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Submit Enquiry';
    }
    return;
  }

  emailjs.send('service_ll189at', 'template_nzv0vxj', templateParams)
    .then(function () {
      var formWrap = document.getElementById('cp-form-wrap');
      var successWrap = document.getElementById('cp-success-wrap');
      if (formWrap) formWrap.style.display = 'none';
      if (successWrap) successWrap.style.display = 'block';

      // Reset form fields
      var fieldIds = ['cp-name', 'cp-company', 'cp-email', 'cp-phone', 'cp-product', 'cp-qty', 'cp-branding', 'cp-msg'];
      fieldIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.value = '';
      });
    })
    .catch(function (error) {
      console.error('EmailJS Contact Page Error:', error);
      if (errBox) {
        errBox.textContent = 'Error: ' + (error?.text || error?.message || 'Unknown error') + '. Please email us directly at printingpoint76@yahoo.com';
        errBox.style.display = 'block';
      }
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Submit Enquiry';
      }
    });
}

function resetContactPageForm() {
  var formWrap = document.getElementById('cp-form-wrap');
  var successWrap = document.getElementById('cp-success-wrap');
  var btn = document.getElementById('cp-submit-btn');
  if (formWrap) formWrap.style.display = 'block';
  if (successWrap) successWrap.style.display = 'none';
  if (btn) {
    btn.disabled = false;
    btn.textContent = 'Submit Enquiry';
  }
}

/* ════════════════════════════════════════════════════════════
   7. CORPORATEGYFT HOVER & CARD ENHANCEMENTS
   ════════════════════════════════════════════════════════════ */
/**
 * Contact sales for a specific product (opens WhatsApp direct chat)
 * @param {Event} [event]
 * @param {string} productName
 */
function contactSales(event, productName) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  var pName = productName || 'Corporate Product';
  var msg = encodeURIComponent("Hello Printing Point, I am interested in corporate pricing and customization for: " + pName);
  window.open("https://wa.me/919810472144?text=" + msg, "_blank");
}

/**
 * Trigger instant quote modal for a specific product
 * @param {Event} [event]
 * @param {string} productName
 */
function triggerInstantQuote(event, productName) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  openEQWithProduct(productName || 'Corporate Product');
}

// Master secondary hover image pairing map for dual-image hover transition
var hoverImageMap = {
  // Bottles & Flasks
  '0080.png': '0087.png',
  '0087.png': '0080.png',
  '0089.jpeg': '0093.jpeg',
  '0093.jpeg': '0089.jpeg',
  '0083.jpeg': '0085.png',
  '0085.png': '0083.jpeg',
  'flasks1.png': 'flasks2.png',
  'flasks2.png': 'flasks1.png',
  // Mugs & Sippers
  '0072.jpeg': '0073.jpeg',
  '0073.jpeg': '0072.jpeg',
  '0077.png': '0074.png',
  '0074.png': '0077.png',
  '0075.jpeg': '0076.jpeg',
  '0076.jpeg': '0075.jpeg',
  '0079.png': '114.jpeg',
  '112.jpeg': '114.jpeg',
  '114.jpeg': '112.jpeg',
  // Bags
  'bags2.png': 'bag3.png',
  'bag3.png': 'bags2.png',
  'bag4.png': 'bag5.png',
  'bag5.png': 'bag4.png',
  'bags6.jpeg': 'bags7.jpeg',
  'bags1.webp': 'bags2.png',
  'bags7.jpeg': 'bags6.jpeg',
  // Gift Sets - wrong 2nd images removed; cards keep their authentic first image only
  // Festive & Diwali Gift Sets (DW Series)
  'DW-001.jpeg': 'DW-001.1.png',
  'DW-002.jpeg': 'DW-002.1.png',
  'DW-003.jpeg': 'DW-003.1.png',
  'DW-004.jpeg': 'DW-004.1.png',
  'DW-006.jpg': 'DW-006.1.png',
  'DW-007.jpeg': 'DW-007.1.png',
  'DW-009.jpeg': 'DW-009.1.png',
  'DW-010.jpeg': 'DW-010.1.png',
  'DW-011.jpeg': 'DW-011.1.png',
  'DW-012.jpeg': 'DW-012.1.png',
  'DW-013.jpeg': 'DW-013.1.png',
  // Notebooks
  'nb1.webp': 'nb2.jpeg',
  'nb2.jpeg': 'nb4.jpeg',
  'nb9.jpeg': 'nb7.jpeg',
  'nb4.jpeg': 'nb5.jpeg',
  'nb5.jpeg': 'nb6.jpeg',
  'nb6.jpeg': 'nb4.jpeg',
  'nb7.jpeg': 'nb8.jpeg',
  'nb8.jpeg': 'nb9.jpeg',
  // Electronics & Gadgets
  'sandclock.jpeg': 'tangentlamp.jpeg',
  'tangentlamp.jpeg': 'desklamps.jpeg',
  'plant.jpeg': '10.jpeg',
  '10.jpeg': '9.jpeg',
  '9.jpeg': '18.jpeg',
  'desklamps.jpeg': 'tangentlamp.jpeg',
  '18.jpeg': '9.jpeg',
  '36.jpeg': '18.jpeg',
  '22.jpeg': '23.jpeg',
  '23.jpeg': '22.jpeg',
  // Mobile Stands & Organizers
  'mb1.webp': 'mb2.webp',
  'mb2.webp': 'mb1.webp',
  'kc1.webp': 'kc2.webp',
  'kc2.webp': 'kc1.webp',
  'kc3.webp': 'kc4.webp',
  'kc4.webp': 'kc3.webp'
};

/**
 * Enhance all product cards with CorporateGyft hover swap, image zoom, and quick action bar
 */
function enhanceProductCards() {
  var cards = document.querySelectorAll('.prodcard');
  cards.forEach(function (card) {
    if (card.getAttribute('data-cg-enhanced') === 'true') return;
    card.setAttribute('data-cg-enhanced', 'true');

    var nameEl = card.querySelector('.prodcard-name');
    var rawName = nameEl ? nameEl.textContent.trim() : 'Corporate Product';
    var imgEl = card.querySelector('.prodcard-img');
    var primarySrc = imgEl ? (imgEl.getAttribute('src') || '') : '';
    var baseImg = primarySrc.split('/').pop().split('?')[0];

    // Determine category from parent view or printing panel
    var viewParent = card.closest('[id$="-view"]');
    var printPanel = card.closest('[id$="-panel"]');
    var isPrinting = !!card.closest('#view-printing') || !!printPanel;
    var catName = 'Corporate Gifts';
    if (printPanel) {
      var panelH3 = printPanel.querySelector('h3');
      catName = panelH3 ? panelH3.textContent.trim() : 'Printing Services';
    } else if (isPrinting) {
      catName = 'Printing Services';
    } else if (viewParent) {
      var h4 = viewParent.querySelector('h4') || viewParent.querySelector('.pct-kicker');
      if (h4) catName = h4.textContent.trim();
    }

    var prod = null;
    try {
      if (window.ProductDataMaster && typeof window.ProductDataMaster.getProductByName === 'function') {
        prod = window.ProductDataMaster.getProductByName(rawName);
      }
    } catch (e) {
      prod = null;
    }
    var slug = prod ? prod.slug : encodeURIComponent(rawName.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    var detailUrl = 'product-detail.html?slug=' + slug + '&name=' + encodeURIComponent(rawName) + '&category=' + encodeURIComponent(prod ? prod.category : catName) + '&img=' + encodeURIComponent(primarySrc);

    // Multi-image list support (data-images or ProductDataMaster.productImages)
    var rawImagesAttr = card.getAttribute('data-images');
    var cardImages = null;
    if (rawImagesAttr) {
      try {
        cardImages = JSON.parse(rawImagesAttr);
      } catch (err) {
        cardImages = null;
      }
    }
    if ((!cardImages || cardImages.length === 0) && prod && prod.productImages && prod.productImages.length > 1) {
      cardImages = prod.productImages;
    }

    // Pick secondary hover image
    var cardHover = card.getAttribute('data-hover-img');
    var secondarySrc = cardHover || (cardImages && cardImages.length > 1 ? cardImages[1] : (hoverImageMap[baseImg] || (prod && prod.productImages && prod.productImages.length > 1 ? prod.productImages[1] : primarySrc)));

    // In Gift Sets section, enforce keeping only the first image if there is no authentic 2nd image
    var isGiftSets = viewParent && (viewParent.id === 'gift-sets-view' || viewParent.id === 'gift-sets');
    if (isGiftSets && (!cardImages || cardImages.length <= 1) && (!cardHover || cardHover === primarySrc)) {
      secondarySrc = primarySrc;
    }

    // Create CorporateGyft-style thumbnail wrapper
    var thumb = document.createElement('div');
    thumb.className = 'prodcard-thumb';
    var thumbHTML = 
      '<img class="prodcard-img primary-img" src="' + primarySrc + '" alt="' + rawName + '" loading="lazy">' +
      '<img class="prodcard-img hover-img" src="' + secondarySrc + '" alt="' + rawName + ' - Alternate View" loading="lazy">';

    var cardCode = card.getAttribute('data-code');
    if (cardCode) {
      thumbHTML += '<div class="prodcard-badge">' + cardCode + '</div>';
    }

    if (cardImages && cardImages.length > 2) {
      thumbHTML += '<div class="prodcard-dots" aria-hidden="true">';
      for (var di = 0; di < cardImages.length; di++) {
        thumbHTML += '<span class="prodcard-dot' + (di === 0 ? ' active' : '') + '"></span>';
      }
      thumbHTML += '</div>';
    }

    thumbHTML += 
      '<div class="product-action product-action-dark">' +
        '<button type="button" class="btn-product btn-sales" data-prod="' + encodeURIComponent(rawName) + '" onclick="contactSales(event, decodeURIComponent(this.dataset.prod))" title="Talk to Sales">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>' +
          '<span>Talk to Sales</span>' +
        '</button>' +
        '<div class="btn-divider"></div>' +
        '<button type="button" class="btn-product btn-quote" data-prod="' + encodeURIComponent(rawName) + '" onclick="triggerInstantQuote(event, decodeURIComponent(this.dataset.prod))" title="Enquire Now">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>' +
          '<span>Enquire Now</span>' +
        '</button>' +
      '</div>';

    thumb.innerHTML = thumbHTML;

    if (imgEl) {
      imgEl.replaceWith(thumb);
    } else {
      card.insertBefore(thumb, card.firstChild);
    }

    // Attach multi-image hover cycling & horizontal mouse scrubbing
    if (cardImages && cardImages.length > 2) {
      var hoverImgEl = thumb.querySelector('.prodcard-img.hover-img');
      var dots = thumb.querySelectorAll('.prodcard-dot');
      var cycleInterval = null;
      var activeIdx = 1;
      var hasPreloaded = false;

      function setActiveImage(idx) {
        if (!hoverImgEl || !cardImages[idx]) return;
        activeIdx = idx;
        hoverImgEl.src = cardImages[idx];
        if (dots && dots.length > idx) {
          dots.forEach(function (dot, dIdx) {
            if (dIdx === idx) dot.classList.add('active');
            else dot.classList.remove('active');
          });
        }
      }

      function startCycling() {
        stopCycling();
        cycleInterval = setInterval(function () {
          var next = (activeIdx + 1) % cardImages.length;
          setActiveImage(next);
        }, 900);
      }

      function stopCycling() {
        if (cycleInterval) {
          clearInterval(cycleInterval);
          cycleInterval = null;
        }
      }

      card.addEventListener('mouseenter', function () {
        if (!hasPreloaded) {
          for (var p = 0; p < cardImages.length; p++) {
            var cacheImg = new Image();
            cacheImg.src = cardImages[p];
          }
          hasPreloaded = true;
        }
        setActiveImage(1);
        startCycling();
      });

      thumb.addEventListener('mousemove', function (ev) {
        var bounds = thumb.getBoundingClientRect();
        var posX = ev.clientX - bounds.left;
        var ratio = Math.max(0, Math.min(0.999, posX / bounds.width));
        var targetIndex = Math.floor(ratio * cardImages.length);
        if (targetIndex !== activeIdx) {
          setActiveImage(targetIndex);
        }
        stopCycling();
        clearTimeout(thumb._scrubTimeout);
        thumb._scrubTimeout = setTimeout(startCycling, 1400);
      });

      card.addEventListener('mouseleave', function () {
        stopCycling();
        clearTimeout(thumb._scrubTimeout);
        setActiveImage(0);
        if (hoverImgEl) {
          hoverImgEl.src = secondarySrc;
        }
        if (dots && dots.length > 0) {
          dots.forEach(function (dot, dIdx) {
            if (dIdx === 0) dot.classList.add('active');
            else dot.classList.remove('active');
          });
        }
      });
    }

    // Format body
    var body = card.querySelector('.prodcard-body');
    if (!body) {
      body = document.createElement('div');
      body.className = 'prodcard-body';
      card.appendChild(body);
    }

    // Add category kicker above product name
    var catEl = body.querySelector('.prodcard-cat');
    if (!catEl) {
      catEl = document.createElement('div');
      catEl.className = 'prodcard-cat';
      catEl.textContent = prod ? prod.category : catName;
      body.insertBefore(catEl, body.firstChild);
    }

    // Make product name clickable link
    if (nameEl) {
      nameEl.innerHTML = '<a href="' + detailUrl + '">' + rawName + '</a>';
    }

    // Specs
    var specEl = body.querySelector('.prodcard-specs');
    if (prod && specEl && (!specEl.textContent || specEl.textContent.trim() === '')) {
      var parts = [];
      if (prod.capacity) parts.push(prod.capacity.split('|')[0].trim());
      if (prod.material) {
        var matShort = prod.material.split('/')[0].split('+')[0].trim();
        if (matShort.length < 28) parts.push(matShort);
      }
      if (parts.length > 0) {
        specEl.textContent = parts.join(' • ');
      }
    }

    // Add dedicated "Enquire Now" button directly on the card
    var enquireBtn = body.querySelector('.prodcard-enquire-btn');
    if (!enquireBtn) {
      enquireBtn = document.createElement('button');
      enquireBtn.type = 'button';
      enquireBtn.className = 'prodcard-enquire-btn';
      enquireBtn.setAttribute('onclick', "triggerInstantQuote(event, '" + rawName.replace(/'/g, "\'") + "')");
      enquireBtn.setAttribute('title', 'Enquire Now for ' + rawName);
      enquireBtn.innerHTML = 
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>' +
        '<span>Enquire Now</span>';
      body.appendChild(enquireBtn);
    }

    // Meta row (Customizable + MOQ)
    var moqText = isPrinting ? 'MOQ: 100 units' : 'MOQ: 50 units';
    var metaEl = body.querySelector('.prodcard-meta') || body.querySelector('.prodcard-footer-meta');
    var metaHtml = 
      '<div class="prodcard-custom-badge">' +
        '<svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path fill="#b92c45" d="M5.9 4.13c-.615.023-1.183.286-1.6.739-.638.694-.657 1.426-.673 2.072-.015.598-.03 1.163-.492 1.821l-.607.862h1.054c.083 0 .165-.001.244-.004h7.44V8.527H7.128c.205-.17.384-.348.547-.525.464-.505.66-1.163.597-1.798l3.14-4.395c.18-.21.274-.477.263-.756-.011-.292-.136-.562-.35-.76-.215-.2-.494-.302-.786-.291-.29.01-.557.133-.756.344L6.08 4.13c-.06-.002-.12-.003-.18 0zm.97 3.131c-.496.539-1.133 1.044-2.366 1.211.193-.56.205-1.066.216-1.503.015-.583.025-.968.385-1.36.219-.237.516-.374.836-.387.32-.012.627.102.863.321.49.456.519 1.226.066 1.718zm3.7-6.155l.007-.004-.019.02L7.788 5c-.072-.09-.152-.176-.239-.257-.095-.09-.198-.169-.305-.24l3.325-3.397zM14 3.605v6.562c0 .905-.736 1.64-1.64 1.64H7.546v1.095h2.844v1.093H3.609v-1.093h2.844v-1.094H1.641c-.905 0-1.641-.736-1.641-1.64V3.604c0-.905.736-1.64 1.64-1.64H6.67l-1.07 1.093H1.64c-.302 0-.547.245-.547.547v6.562c0 .302.245.547.547.547h10.718c.302 0 .547-.245.547-.547V3.605c0-.302-.245-.547-.547-.547h-.495l.413-.579c.126-.153.228-.321.307-.499.799.11 1.416.796 1.416 1.625z"/></svg>' +
        '<span>Customizable</span>' +
      '</div>' +
      '<div class="prodcard-moq-badge">' + moqText + '</div>';

    if (metaEl) {
      metaEl.className = 'prodcard-footer-meta';
      metaEl.innerHTML = metaHtml;
      body.appendChild(metaEl);
    } else {
      metaEl = document.createElement('div');
      metaEl.className = 'prodcard-footer-meta';
      metaEl.innerHTML = metaHtml;
      body.appendChild(metaEl);
    }

    // Remove legacy bottom actions row or unstyled legacy button
    var oldActions = body.querySelector('.prodcard-actions');
    if (oldActions) {
      oldActions.remove();
    }
    var legacyBtns = body.querySelectorAll('.prodcard-btn');
    legacyBtns.forEach(function (lb) {
      lb.remove();
    });

    // Card click navigates to detail page (unless clicking on action buttons)
    card.addEventListener('click', function (e) {
      if (e.target.closest('.product-action') || e.target.closest('button')) {
        return;
      }
      window.location.href = detailUrl;
    });
  });
}

// Expose globally to window object
window.gv = gv;
window.gc = gc;
window.closeAllViews = closeAllViews;
window.showView = showView;
window.openBottlesView = openBottlesView;
window.openMugsSippersView = openMugsSippersView;
window.openBagsView = openBagsView;
window.openGiftSetsView = openGiftSetsView;
window.openNotebooksView = openNotebooksView;
window.openLeatheriteDiariesView = openLeatheriteDiariesView;
window.openPowerBankDiariesView = openPowerBankDiariesView;
window.openThemeDiariesView = openThemeDiariesView;
window.openNotebooksSubView = openNotebooksSubView;
window.openElectronicsView = openElectronicsView;
window.openMobileStandsView = openMobileStandsView;

window.allGiftingViews = allGiftingViews;
window.openFestiveView = openFestiveView;
window.openGiftingView = openGiftingView;
window.closeAllGiftingViews = closeAllGiftingViews;

window.allPrintingPanels = allPrintingPanels;
window.openPrintPanel = openPrintPanel;
window.showPanel = showPanel;
window.showMain = showMain;

window.openSolution = openSolution;
window.handleRoute = handleRoute;

window.contactSales = contactSales;
window.triggerInstantQuote = triggerInstantQuote;
window.enhanceProductCards = enhanceProductCards;

/**
 * Unified Hash and Route Resolver for SPA
 * @param {string} [rawHash]
 */
function handleRoute(rawHash) {
  var h = (rawHash || window.location.hash || '').replace('#', '').trim();
  if (!h) return;

  // 1. Top-level views
  if (['home', 'about', 'contact'].indexOf(h) !== -1) {
    gv(h);
    return;
  }
  if (h === 'Products' || h === 'products' || h === 'view-products' || h === 'view-Products') {
    gv('Products');
    return;
  }
  if (['festive', 'festive-gifting', 'cg-festive-view', 'gifting'].indexOf(h) !== -1) {
    openFestiveView();
    return;
  }
  if (h === 'printing') {
    gv('printing');
    return;
  }
  if (h === 'solutions') {
    gv('solutions');
    return;
  }

  // 2. Corporate Products sub-views
  if (h === 'powerbank-diaries' || h === 'powerbank-diaries-view') {
    openPowerBankDiariesView();
    return;
  }
  if (h === 'leatherite-diaries' || h === 'leatherite-diaries-view') {
    openLeatheriteDiariesView();
    return;
  }
  if (h === 'theme-diaries' || h === 'theme-diaries-view') {
    openThemeDiariesView();
    return;
  }
  if (h === 'notebooks' || h === 'notebooks-view') {
    openNotebooksView();
    return;
  }
  if (corporateViews.indexOf(h) !== -1) {
    showView(h);
    return;
  }

  // 3. Corporate Gifting sub-views
  if (allGiftingViews.indexOf(h) !== -1) {
    openGiftingView(h);
    return;
  }

  // 4. Printing panels
  if (allPrintingPanels.indexOf(h) !== -1) {
    openPrintPanel(h);
    return;
  }

  // 5. Solutions sub-items
  if (h.startsWith('solutions-') || h.startsWith('sol-')) {
    var key = h.replace('solutions-', '').replace('sol-', '');
    openSolution(key);
    return;
  }

  // Fallback if view element exists
  if (document.getElementById('view-' + h)) {
    gv(h);
  }
}

/* ════════════════════════════════════════════════════════════
   8. DOM INITIALIZATION & EVENT BINDINGS
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  // Check if arriving from product-detail page with "quote" query param
  var params = new URLSearchParams(window.location.search);
  var quoteProduct = params.get('quote');
  if (quoteProduct) {
    openEQWithProduct(quoteProduct);
    // Clean query param from URL so refresh does not re-open modal
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  // Handle deep-linking via query parameter (?view=contact) or hash (#contact)
  var viewParam = params.get('view');
  var hashParam = (window.location.hash || '').replace('#', '').trim();
  if (viewParam) {
    handleRoute(viewParam);
  } else if (hashParam) {
    handleRoute(hashParam);
  }

  window.addEventListener('hashchange', function () {
    handleRoute();
  });

  // Ensure navbar catalog visibility matches initial route
  updateNavbarCatalogVisibility();

  // Enhance product cards on initial load
  enhanceProductCards();

  // Duplicate review cards once for seamless CSS marquee infinite scroll
  var track = document.getElementById('reviewTrack');
  if (track) {
    var originalCards = Array.prototype.slice.call(track.children);
    originalCards.forEach(function (card) {
      var clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
  }

  // Phase 03: Product Category Search & Sort filtering
  document.querySelectorAll('.product-category-shell').forEach(function (shell) {
    var view = shell.closest('[id$="-view"]');
    var wrap = view && view.querySelector('.pct-products[data-category-template="true"]');
    if (!wrap) return;

    var grid = wrap.querySelector('.prodgrid');
    var search = shell.querySelector('.pct-search');
    var sort = shell.querySelector('.pct-sort');
    var count = shell.querySelector('.pct-count');
    var empty = wrap.nextElementSibling && wrap.nextElementSibling.classList.contains('pct-empty')
      ? wrap.nextElementSibling
      : null;

    if (!grid) return;

    var original = Array.prototype.slice.call(grid.querySelectorAll('.prodcard'));

    function render() {
      var q = (search?.value || '').trim().toLowerCase();
      var cards = original.filter(function (card) {
        var cardName = (card.querySelector('.prodcard-name')?.textContent || '').toLowerCase();
        var cardSpecs = (card.querySelector('.prodcard-specs')?.textContent || '').toLowerCase();
        var cardCode = (card.getAttribute('data-code') || '').toLowerCase();
        return !q || cardName.includes(q) || cardSpecs.includes(q) || cardCode.includes(q);
      });

      var mode = sort?.value;
      if (mode === 'az' || mode === 'za') {
        cards.sort(function (a, b) {
          var nameA = (a.querySelector('.prodcard-name')?.textContent || '').trim().toLowerCase();
          var nameB = (b.querySelector('.prodcard-name')?.textContent || '').trim().toLowerCase();
          return mode === 'az' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });
      } else {
        cards.sort(function (a, b) {
          return original.indexOf(a) - original.indexOf(b);
        });
      }

      original.forEach(function (card) {
        card.style.display = 'none';
      });

      cards.forEach(function (card) {
        card.style.display = '';
        grid.appendChild(card);
      });

      if (count) {
        count.textContent = cards.length + ' product' + (cards.length === 1 ? '' : 's');
      }

      if (empty) {
        empty.style.display = cards.length ? 'none' : 'block';
      }
    }

    if (search) search.addEventListener('input', render);
    if (sort) sort.addEventListener('change', render);
    render();
  });
});

/* ════════════════════════════════════════════════════════════
   10. CATEGORY PRODUCT CATALOGS SYSTEM
   ════════════════════════════════════════════════════════════ */

/**
 * Registry of product catalogs mapped by category and subcategory key.
 * Easily extensible: add any number of { title, file } items to any category.
 * When the user clicks "Download Product Catalog", all files in that category's array
 * will be automatically triggered for download.
 */
var CATEGORY_CATALOGS = {
  // Festive / Diwali Gifting (Multi-file catalog: Diwali Hampers + Luxury Gift Sets)
  'festive': [
    { title: 'Diwali Hampers Catalog 2026', file: 'catalogs/Diwali Hampers Catalog 2026.pdf' },
    { title: 'Luxury Gift Sets Catalog', file: 'catalogs/Luxury Gift Sets Catalog.pdf' }
  ],
  'cg-festive-view': [
    { title: 'Diwali Hampers Catalog 2026', file: 'catalogs/Diwali Hampers Catalog 2026.pdf' },
    { title: 'Luxury Gift Sets Catalog', file: 'catalogs/Luxury Gift Sets Catalog.pdf' }
  ],
  'view-gifting': [
    { title: 'Diwali Hampers Catalog 2026', file: 'catalogs/Diwali Hampers Catalog 2026.pdf' },
    { title: 'Luxury Gift Sets Catalog', file: 'catalogs/Luxury Gift Sets Catalog.pdf' }
  ],

  // Drinkware - Bottles & Flasks
  'bottles': [
    { title: 'Drinkware & Bottles Catalog', file: 'catalogs/Drinkware & Bottles Catalog.pdf' }
  ],
  'bottles-view': [
    { title: 'Drinkware & Bottles Catalog', file: 'catalogs/Drinkware & Bottles Catalog.pdf' }
  ],

  // Drinkware - Mugs & Sippers
  'mugs': [
    { title: 'Drinkware & Bottles Catalog', file: 'catalogs/Drinkware & Bottles Catalog.pdf' }
  ],
  'mugs-sippers-view': [
    { title: 'Drinkware & Bottles Catalog', file: 'catalogs/Drinkware & Bottles Catalog.pdf' }
  ],

  // Bags & Travel
  'bags': [
    { title: 'Bags & Travel Catalog 2026', file: 'catalogs/Bags Catalog 2026.pdf' }
  ],
  'bags-view': [
    { title: 'Bags & Travel Catalog 2026', file: 'catalogs/Bags Catalog 2026.pdf' }
  ],

  // Corporate Gift Sets
  'gift-sets': [
    { title: 'Corporate Gift Sets Catalog', file: 'catalogs/Corporate Gift Sets Catalog.pdf' },
    { title: 'Luxury Gift Sets Catalog', file: 'catalogs/Luxury Gift Sets Catalog.pdf' }
  ],
  'gift-sets-view': [
    { title: 'Corporate Gift Sets Catalog', file: 'catalogs/Corporate Gift Sets Catalog.pdf' },
    { title: 'Luxury Gift Sets Catalog', file: 'catalogs/Luxury Gift Sets Catalog.pdf' }
  ],

  // Notebooks & Diaries Overview
  'notebooks': [
    { title: 'Notebooks & Diaries Catalog', file: 'catalogs/Notebooks & Diaries Catalog.pdf' }
  ],
  'notebooks-view': [
    { title: 'Notebooks & Diaries Catalog', file: 'catalogs/Notebooks & Diaries Catalog.pdf' }
  ],

  // Leatherite Diaries
  'leatherite-diaries': [
    { title: 'Special Leatherite Diaries Catalog', file: 'catalogs/Leatherite Diaries Catalog.pdf' }
  ],
  'leatherite-diaries-view': [
    { title: 'Special Leatherite Diaries Catalog', file: 'catalogs/Leatherite Diaries Catalog.pdf' }
  ],

  // Power Bank Diaries
  'powerbank-diaries': [
    { title: 'Power Bank Diaries & Gadgets Catalog', file: 'catalogs/Power Bank Diaries & Gadgets Catalog.pdf' }
  ],
  'powerbank-diaries-view': [
    { title: 'Power Bank Diaries & Gadgets Catalog', file: 'catalogs/Power Bank Diaries & Gadgets Catalog.pdf' }
  ],

  // Theme Diaries
  'theme-diaries': [
    { title: 'Theme Diaries Catalog', file: 'catalogs/Theme Diaries Catalog.pdf' }
  ],
  'theme-diaries-view': [
    { title: 'Theme Diaries Catalog', file: 'catalogs/Theme Diaries Catalog.pdf' }
  ],

  // Electronics & Gadgets
  'electronics': [
    { title: 'Power Bank & Tech Gadgets Catalog', file: 'catalogs/Power Bank Diaries & Gadgets Catalog.pdf' }
  ],
  'electronics-view': [
    { title: 'Power Bank & Tech Gadgets Catalog', file: 'catalogs/Power Bank Diaries & Gadgets Catalog.pdf' }
  ],

  // Mobile Stands & Desk Accessories
  'mobile-stands': [
    { title: 'Desk & Mobile Accessories Catalog', file: 'catalogs/Printing Point Master Catalog.pdf' }
  ],
  'mobile-stands-view': [
    { title: 'Desk & Mobile Accessories Catalog', file: 'catalogs/Printing Point Master Catalog.pdf' }
  ],

  // Corporate Products Overview
  'Products': [
    { title: 'Printing Point Master Catalog', file: 'catalogs/Printing Point Master Catalog.pdf' }
  ],
  'view-Products': [
    { title: 'Printing Point Master Catalog', file: 'catalogs/Printing Point Master Catalog.pdf' }
  ],


  // Default fallback
  'default': [
    { title: 'Printing Point Master Catalog', file: 'catalogs/Printing Point Master Catalog.pdf' }
  ]
};

/**
 * Detect currently active category or subcategory key from the DOM
 */
function getCurrentActiveCategoryKey() {
  // Festive view
  var fView = document.getElementById('view-gifting');
  if (fView && fView.classList.contains('active')) {
    return 'festive';
  }

  // Printing view
  var pView = document.getElementById('view-printing');
  if (pView && pView.classList.contains('active')) {
    var printingPanels = ['vc-panel', 'lb-panel', 'env-panel', 'id-panel', 'df-panel', 'sl-panel', 'gt-panel'];
    for (var i = 0; i < printingPanels.length; i++) {
      var p = document.getElementById(printingPanels[i]);
      if (p && p.style.display !== 'none' && p.offsetParent !== null) {
        return printingPanels[i];
      }
    }
    return 'printing';
  }

  // Corporate Products view
  var prodView = document.getElementById('view-Products');
  if (prodView && prodView.classList.contains('active')) {
    if (typeof corporateViews !== 'undefined' && Array.isArray(corporateViews)) {
      for (var j = 0; j < corporateViews.length; j++) {
        var cv = document.getElementById(corporateViews[j]);
        if (cv && cv.style.display !== 'none' && cv.offsetParent !== null) {
          return corporateViews[j];
        }
      }
    }
    return 'Products';
  }

  return 'festive';
}

/**
 * Display a sleek Toast notification with download status and direct download links
 * @param {Array} catalogs - List of catalog objects { title, file }
 */
function showCatalogToast(catalogs) {
  var existing = document.getElementById('catalog-toast');
  if (existing) {
    existing.remove();
  }

  var count = catalogs.length;
  var countText = count > 1 ? count + ' Product Catalogs' : 'Product Catalog';

  var toast = document.createElement('div');
  toast.id = 'catalog-toast';
  toast.className = 'catalog-toast animate-in';

  var listHtml = catalogs.map(function (c) {
    var fname = c.file.split('/').pop();
    return '<div class="catalog-toast-item">' +
      '<span class="catalog-toast-badge">PDF</span>' +
      '<a href="' + encodeURI(c.file) + '" download="' + fname + '" target="_blank" class="catalog-toast-name" title="Click to download">' +
        (c.title || fname) +
      '</a>' +
      '<a href="' + encodeURI(c.file) + '" download="' + fname + '" target="_blank" class="catalog-toast-dl" title="Direct Download">⬇</a>' +
    '</div>';
  }).join('');

  toast.innerHTML =
    '<div class="catalog-toast-header">' +
      '<div class="catalog-toast-title">' +
        '<span class="catalog-toast-spinner"></span>' +
        '<span>Downloading ' + countText + '</span>' +
      '</div>' +
      '<button class="catalog-toast-close" onclick="this.closest(\'#catalog-toast\').remove()" aria-label="Close">&times;</button>' +
    '</div>' +
    '<div class="catalog-toast-body">' +
      listHtml +
    '</div>' +
    '<div class="catalog-toast-footer">Files will save directly to your Downloads folder.</div>';

  document.body.appendChild(toast);

  // Auto-remove after 7 seconds
  setTimeout(function () {
    if (toast && toast.parentNode) {
      toast.classList.add('animate-out');
      setTimeout(function () {
        if (toast && toast.parentNode) toast.remove();
      }, 400);
    }
  }, 7000);
}

/**
 * Download product catalog(s) for a specific category or the currently active view.
 * Staggers downloads by 450ms so modern browsers allow multiple file downloads without popup blocking.
 * @param {string} [categoryKey] - Key in CATEGORY_CATALOGS. If omitted, auto-detects from active view.
 */
function downloadCategoryCatalog(categoryKey) {
  if (!categoryKey) {
    categoryKey = getCurrentActiveCategoryKey();
  }

  // Printing Services has NO catalog option
  if (categoryKey === 'printing' || (categoryKey && categoryKey.endsWith('-panel'))) {
    return;
  }
  var pView = document.getElementById('view-printing');
  if (pView && pView.classList.contains('active')) {
    return;
  }

  var list = CATEGORY_CATALOGS[categoryKey] || CATEGORY_CATALOGS['default'];
  if (!list || list.length === 0) {
    list = CATEGORY_CATALOGS['default'];
  }

  // Display user feedback toast
  showCatalogToast(list);

  // Trigger sequential file downloads
  list.forEach(function (cat, index) {
    setTimeout(function () {
      var fname = cat.file.split('/').pop();
      var link = document.createElement('a');
      link.href = cat.file;
      link.download = fname;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      setTimeout(function () {
        if (link.parentNode) link.parentNode.removeChild(link);
      }, 3000);
    }, index * 450);
  });
}

// Make accessible to window
window.CATEGORY_CATALOGS = CATEGORY_CATALOGS;
window.getCurrentActiveCategoryKey = getCurrentActiveCategoryKey;
window.showCatalogToast = showCatalogToast;
window.downloadCategoryCatalog = downloadCategoryCatalog;
window.updateNavbarCatalogVisibility = updateNavbarCatalogVisibility;

/* ════════════════════════════════════════════════════════════
   HERO VIDEO BANNER CONTROLS
   ════════════════════════════════════════════════════════════ */
function toggleHeroVideoSound() {
  var vid = document.getElementById('heroVideo');
  var icon = document.getElementById('hvbSoundIcon');
  var label = document.getElementById('hvbSoundLabel');
  if (!vid) return;
  if (vid.muted) {
    vid.muted = false;
    if (icon) icon.textContent = '🔊';
    if (label) label.textContent = 'Sound On';
  } else {
    vid.muted = true;
    if (icon) icon.textContent = '🔇';
    if (label) label.textContent = 'Sound Off';
  }
}

function toggleHeroVideoPlay() {
  var vid = document.getElementById('heroVideo');
  if (!vid) return;
  if (vid.paused) {
    vid.play();
  } else {
    vid.pause();
  }
}

function initHeroVideoListeners() {
  var vid = document.getElementById('heroVideo');
  var pIcon = document.getElementById('hvbPlayIcon');
  var pLabel = document.getElementById('hvbPlayLabel');
  var sIcon = document.getElementById('hvbSoundIcon');
  var sLabel = document.getElementById('hvbSoundLabel');
  if (!vid) return;

  vid.addEventListener('play', function () {
    if (pIcon) pIcon.textContent = '⏸';
    if (pLabel) pLabel.textContent = 'Pause';
  });

  vid.addEventListener('pause', function () {
    if (pIcon) pIcon.textContent = '▶';
    if (pLabel) pLabel.textContent = 'Play';
  });

  vid.addEventListener('volumechange', function () {
    if (vid.muted || vid.volume === 0) {
      if (sIcon) sIcon.textContent = '🔇';
      if (sLabel) sLabel.textContent = 'Sound Off';
    } else {
      if (sIcon) sIcon.textContent = '🔊';
      if (sLabel) sLabel.textContent = 'Sound On';
    }
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroVideoListeners);
} else {
  initHeroVideoListeners();
}

function scrollToHomeCover() {
  var target = document.getElementById('home-about-section') || document.querySelector('.page.section');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

window.toggleHeroVideoSound = toggleHeroVideoSound;
window.toggleHeroVideoPlay = toggleHeroVideoPlay;
window.scrollToHomeCover = scrollToHomeCover;
