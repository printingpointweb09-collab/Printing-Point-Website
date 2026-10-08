/**
 * Printing Point — Product Detail Page Script
 *
 * Handles dynamic product hydration:
 * - Reads product slug, name, category, and image URL from URL query parameters
 * - Queries PRODUCTS_DATA master database from js/products-data.js
 * - Hydrates titles, descriptions, specifications grid, branding badges, commercial terms,
 *   image galleries, and related products
 * - Pre-populates WhatsApp chat and quote request CTAs
 */

document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug') || '';
  const fallbackName = params.get('name') || 'Product';
  const fallbackCategory = params.get('category') || 'Products';
  const fallbackImg = params.get('img') || '';

  // Look up product in Master Data
  let product = null;
  if (window.ProductDataMaster) {
    if (slug) {
      product = window.ProductDataMaster.getProductBySlug(slug);
    }
    if (!product && fallbackName) {
      product = window.ProductDataMaster.getProductByName(fallbackName);
    }
  }

  // DOM Elements
  const prodNameEl = document.getElementById('prodName');
  const catLabelEl = document.getElementById('catLabel');
  const crumbNameEl = document.getElementById('crumbName');
  const crumbCategoryEl = document.getElementById('crumbCategory');
  const mainImgEl = document.getElementById('mainImg');
  const prodShortDescEl = document.getElementById('prodShortDesc');
  const specsContainerEl = document.getElementById('specsContainer');
  const keyFeaturesListEl = document.getElementById('keyFeaturesList');
  const brandingMethodsTagsEl = document.getElementById('brandingMethodsTags');
  const customizationTextEl = document.getElementById('customizationText');
  const moqValEl = document.getElementById('moqVal');
  const leadTimeValEl = document.getElementById('leadTimeVal');
  const idealForListEl = document.getElementById('idealForList');
  const packagingTextEl = document.getElementById('packagingText');
  const galleryThumbsEl = document.getElementById('galleryThumbs');
  const relatedGridEl = document.getElementById('relatedGrid');
  const btnWhatsappEl = document.getElementById('btnWhatsapp');
  const btnQuoteEl = document.getElementById('btnQuote');
  const dataPendingEl = document.getElementById('dataPending');

  const productName = product ? product.productName : fallbackName;
  const productCategory = product ? product.category : fallbackCategory;
  const primaryImg = (product && product.productImages && product.productImages.length > 0) 
    ? product.productImages[0] 
    : (fallbackImg || 'pp-logo.jpeg');

  // Set Title & Breadcrumbs
  document.title = productName + ' — Printing Point';
  if (prodNameEl) prodNameEl.textContent = productName;
  if (catLabelEl) {
    catLabelEl.textContent = productCategory + (product && product.subcategory ? ' · ' + product.subcategory : '');
  }
  if (crumbNameEl) crumbNameEl.textContent = productName;
  if (crumbCategoryEl) {
    crumbCategoryEl.textContent = productCategory;
    crumbCategoryEl.href = 'index.html#p-discovery-section';
  }

  // Main Image
  if (mainImgEl) {
    mainImgEl.src = primaryImg;
    mainImgEl.alt = productName;
  }

  if (product) {
    if (dataPendingEl) dataPendingEl.style.display = 'block';

    // Short Description
    if (prodShortDescEl) {
      prodShortDescEl.textContent = product.shortDescription || product.longDescription;
    }

    // Specs Container
    if (specsContainerEl) {
      let specsHTML = '';
      if (product.material) specsHTML += `<div class="spec-row"><span>Material</span><span>${escapeHTML(product.material)}</span></div>`;
      if (product.dimensions) specsHTML += `<div class="spec-row"><span>Dimensions</span><span>${escapeHTML(product.dimensions)}</span></div>`;
      if (product.capacity) specsHTML += `<div class="spec-row"><span>Capacity / Size</span><span>${escapeHTML(product.capacity)}</span></div>`;
      if (product.weight) specsHTML += `<div class="spec-row"><span>Weight</span><span>${escapeHTML(product.weight)}</span></div>`;
      if (product.coloursVariants && product.coloursVariants.length > 0) {
        specsHTML += `<div class="spec-row"><span>Available Colors</span><span>${escapeHTML(product.coloursVariants.join(', '))}</span></div>`;
      }
      specsContainerEl.innerHTML = specsHTML || '<p>Standard specifications available on request.</p>';
    }

    // Key Features
    if (keyFeaturesListEl && product.keyFeatures && product.keyFeatures.length > 0) {
      keyFeaturesListEl.innerHTML = product.keyFeatures.map(f => `<li>${escapeHTML(f)}</li>`).join('');
    }

    // Branding Tags & Customization
    if (brandingMethodsTagsEl && product.brandingMethods && product.brandingMethods.length > 0) {
      brandingMethodsTagsEl.innerHTML = product.brandingMethods.map(b => `<span class="tag-badge">✓ ${escapeHTML(b)}</span>`).join('');
    }
    if (customizationTextEl && product.customizationOptions) {
      customizationTextEl.textContent = product.customizationOptions;
    }

    // Commercial Terms
    if (moqValEl && product.moq) moqValEl.textContent = product.moq;
    if (leadTimeValEl && product.leadTime) leadTimeValEl.textContent = product.leadTime;

    // Ideal For
    if (idealForListEl && product.idealFor && product.idealFor.length > 0) {
      idealForListEl.innerHTML = product.idealFor.map(item => `<li>${escapeHTML(item)}</li>`).join('');
    }

    // Packaging
    if (packagingTextEl && product.packaging) {
      packagingTextEl.textContent = product.packaging;
    }

    // Gallery Thumbnails
    if (galleryThumbsEl && product.productImages && product.productImages.length > 1) {
      galleryThumbsEl.innerHTML = product.productImages.map((imgUrl, idx) => `
        <img src="${escapeHTML(imgUrl)}" alt="${escapeHTML(productName)} view ${idx + 1}" class="thumb-img ${idx === 0 ? 'active' : ''}" onclick="switchMainImage('${escapeHTML(imgUrl)}', this)">
      `).join('');
    }

    // Related Products Grid
    if (relatedGridEl && window.ProductDataMaster) {
      const categoryProducts = window.ProductDataMaster.getProductsByCategory(product.category)
        .filter(p => p.id !== product.id)
        .slice(0, 4);

      if (categoryProducts.length > 0) {
        relatedGridEl.innerHTML = categoryProducts.map(rel => `
          <a class="rel-card" href="product-detail.html?slug=${encodeURIComponent(rel.slug)}&name=${encodeURIComponent(rel.productName)}&category=${encodeURIComponent(rel.category)}">
            <img class="rel-card-img" src="${rel.productImages && rel.productImages[0] ? rel.productImages[0] : 'pp-logo.jpeg'}" alt="${escapeHTML(rel.productName)}">
            <div class="rel-card-title">${escapeHTML(rel.productName)}</div>
            <div class="rel-card-moq">${escapeHTML(rel.moq || 'MOQ: 50 units')}</div>
          </a>
        `).join('');
      } else {
        relatedGridEl.style.display = 'none';
      }
    }
  }

  // Configure CTAs
  if (btnWhatsappEl) {
    const waText = encodeURIComponent('Hi Printing Point, I would like a quotation for: ' + productName);
    btnWhatsappEl.href = 'https://wa.me/919810472144?text=' + waText;
  }

  if (btnQuoteEl) {
    btnQuoteEl.addEventListener('click', function () {
      window.location.href = 'index.html?quote=' + encodeURIComponent(productName);
    });
  }
});

function switchMainImage(imgUrl, thumbEl) {
  const mainImgEl = document.getElementById('mainImg');
  if (mainImgEl) mainImgEl.src = imgUrl;

  const thumbs = document.querySelectorAll('.thumb-img');
  thumbs.forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
