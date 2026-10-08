/**
 * Printing Point — Master Product Database & Data Model
 * 
 * Phase 05-06: Product Data Master & Migration
 * Source of Truth: Website Master Plan (Section 7: Product Data Model)
 * 
 * Full standardized database of authentic B2B product items across all 7 corporate categories:
 * 1. Bottles & Flasks
 * 2. Mugs & Sippers
 * 3. Bags
 * 4. Gift Sets
 * 5. Notebooks & Pens
 * 6. Electronics
 * 7. Mobile Accessories & Keychains
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    var exp = factory();
    root.PRODUCTS_DATA = exp.PRODUCTS_DATA;
    root.PRODUCT_SCHEMA_DEFINITION = exp.PRODUCT_SCHEMA_DEFINITION;
    root.ProductDataMaster = exp;
  }
})(typeof self !== 'undefined' ? self : this, function () {

  /**
   * Section 7 Canonical Schema Specification
   */
  var PRODUCT_SCHEMA_DEFINITION = {
    id: { type: 'String', description: 'Unique identifier for the product (e.g., cat-slug-name-slug)' },
    slug: { type: 'String', description: 'URL-safe slug matching catalogue query param (?slug=...)' },
    productName: { type: 'String', description: 'Full marketing/catalogue product name' },
    category: { type: 'String', description: 'Top-level corporate product category' },
    subcategory: { type: 'String', description: 'Specific subcategory, form factor, or product type' },
    shortDescription: { type: 'String', description: '1-2 concise sentences summarizing value proposition and appeal' },
    longDescription: { type: 'String', description: 'In-depth description detailing construction, durability, and corporate use' },
    material: { type: 'String', description: 'Primary and secondary materials used in construction' },
    dimensions: { type: 'String', description: 'Physical dimensions (height, width, depth, diameter)' },
    capacity: { type: 'String', description: 'Volume, storage size, or rating capacity (category-appropriate)' },
    weight: { type: 'String', description: 'Unit weight in grams/kilograms' },
    coloursVariants: { type: 'Array<String>', description: 'List of available corporate stock or custom colorways/finishes' },
    keyFeatures: { type: 'Array<String>', description: '3-5 bulleted highlights of functional and design capabilities' },
    brandingMethods: { type: 'Array<String>', description: 'Verified branding techniques (laser engraving, screen print, UV print, etc.)' },
    customizationOptions: { type: 'String', description: 'Bespoke customization details (individual name personalization, custom packaging, etc.)' },
    moq: { type: 'String', description: 'Minimum Order Quantity with tier notes' },
    packaging: { type: 'String', description: 'Standard packaging and premium gift boxing options' },
    leadTime: { type: 'String', description: 'Reliable delivery timeframe post artwork approval' },
    idealFor: { type: 'Array<String>', description: 'Primary B2B target occasions and recipient use cases' },
    productImages: { type: 'Array<String>', description: 'Array of high-resolution product photography URLs' },
    brandingImages: { type: 'Array<String>', description: 'Array of sample branding demonstration photos' },
    packagingImages: { type: 'Array<String>', description: 'Array of box/packaging presentation photos' },
    tags: { type: 'Array<String>', description: 'Keywords and search terms for catalogue search and filtering' }
  };

  /**
   * Master Product Data Catalogue
   */
  var PRODUCTS_DATA = [
    // =========================================================================
    // 1. BOTTLES & FLASKS
    // =========================================================================
    {
      id: 'glass-bottle-bottles-flasks',
      slug: 'glass-bottle-bottles-flasks',
      productName: 'Glass Bottle',
      category: 'Bottles & Flasks',
      subcategory: 'Borosilicate Glass Water Bottle',
      shortDescription: 'Eco-friendly 500ml borosilicate glass water bottle with protective silicone/bamboo sleeve and leak-proof lid.',
      longDescription: 'Crafted from pure, high-grade borosilicate glass, this bottle keeps beverages tasting fresh without chemical leaching. Includes a non-slip protective sleeve and leak-proof stainless steel cap, ideal for wellness-focused corporate gifting.',
      material: 'Borosilicate Glass with Stainless Steel / Bamboo Cap & Silicone Sleeve',
      dimensions: '225 mm (H) x 65 mm (Dia)',
      capacity: '500 ml',
      weight: '310 g',
      coloursVariants: ['Transparent Clear', 'Frosted Matte White', 'Midnight Black Sleeve', 'Ocean Blue Sleeve'],
      keyFeatures: [
        '100% BPA-free thermal shock resistant borosilicate glass',
        'Leak-proof screw cap with food-grade silicone seal ring',
        'Ergonomic non-slip sleeve provides protective cushion and grip',
        'Odour and stain resistant, easy to clean wide-mouth design'
      ],
      brandingMethods: ['Laser Engraving on Cap', 'Screen Printing on Sleeve', 'UV Digital Print on Body'],
      customizationOptions: 'Laser etched recipient names on bamboo lid; custom Pantone color sleeve on orders over 250 units.',
      moq: '50 units (tier discounts at 250+ & 1000+ units)',
      packaging: 'Standard white tuck-in protective carton included; luxury rigid gift box optional.',
      leadTime: '5-7 business days post artwork approval',
      idealFor: [
        'Employee Wellness & Hydration Programs',
        'Executive & Client Appreciation Gifts',
        'Sustainability & Green Office Initiatives',
        'Conference & Seminar Delegate Kits'
      ],
      productImages: ['0080.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['glass bottle', 'bottles', 'flasks', 'borosilicate', 'eco friendly', 'drinkware', 'corporate gifting']
    },
    {
      id: 'insulated-stainless-steel-sports-bottle-bottles-flasks',
      slug: 'insulated-stainless-steel-sports-bottle-bottles-flasks',
      productName: 'Insulated Stainless Steel Sports Bottle',
      category: 'Bottles & Flasks',
      subcategory: 'Vacuum Insulated Sports Flask',
      shortDescription: 'Premium double-wall vacuum insulated 750ml stainless steel flask that keeps beverages cold for 24 hours or hot for 12 hours.',
      longDescription: 'Built from 304 food-grade stainless steel with copper-coated vacuum insulation technology. Sweat-proof powder-coated finish ensures a secure grip during sports, travel, and daily corporate commute.',
      material: '304 Food-Grade Stainless Steel (Inner & Outer)',
      dimensions: '265 mm (H) x 72 mm (Dia)',
      capacity: '750 ml',
      weight: '360 g',
      coloursVariants: ['Matte Midnight Black', 'Brushed Silver Steel', 'Corporate Royal Navy', 'Crimson Red'],
      keyFeatures: [
        'Double-wall vacuum insulation keeps drinks cold for 24 hours / hot for 12 hours',
        'Sweat-proof, condensation-free powder coated exterior',
        'Airtight leak-proof sports cap with integrated carrying loop',
        'Non-toxic, 100% BPA-free and rust-resistant construction'
      ],
      brandingMethods: ['Precision Laser Engraving', '360° Rotary UV Flatbed Print', 'Screen Print'],
      customizationOptions: 'Individual laser engraved employee names; custom corporate logo print wrap.',
      moq: '50 units (tier pricing at 250+ & 1000+ units)',
      packaging: 'Individually boxed in protective white box; custom gift sleeves available.',
      leadTime: '5-7 business days post artwork approval',
      idealFor: [
        'Employee Welcome & Onboarding Kits',
        'Sports Tournaments & Wellness Events',
        'Executive Offsite & Travel Merchandise',
        'Corporate Annual Day Giveaways'
      ],
      productImages: ['0087.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['sports bottle', 'insulated bottle', 'stainless steel', 'vacuum flask', 'bottles', 'flasks', 'drinkware']
    },
    {
      id: 'collapsible-silicone-water-bottle-bottles-flasks',
      slug: 'collapsible-silicone-water-bottle-bottles-flasks',
      productName: 'Collapsible Silicone Water Bottle',
      category: 'Bottles & Flasks',
      subcategory: 'Foldable Travel Water Bottle',
      shortDescription: 'Innovative 600ml collapsible food-grade silicone bottle that collapses to half its size for easy travel and outdoor events.',
      longDescription: 'Ideal for frequent travellers and active corporate teams, this bottle shrinks when empty for effortless packing. Made from flexible, non-toxic food-grade silicone with a sturdy stainless steel rim and carabiner clip.',
      material: 'Food-Grade Silicone (BPA-Free) with Stainless Steel Rim & Carabiner',
      dimensions: '230 mm (H) x 70 mm (Expanded) / 120 mm (H) Collapsed',
      capacity: '600 ml',
      weight: '180 g',
      coloursVariants: ['Charcoal Grey', 'Olive Green', 'Sky Blue', 'Blush Pink'],
      keyFeatures: [
        'Collapsible body saves 50% space when empty',
        '100% Food-grade BPA-free flexible silicone body',
        'Includes aluminum carabiner for attaching to backpacks',
        'Wide mouth accommodates ice cubes and easy cleaning'
      ],
      brandingMethods: ['Laser Engraving on Metal Cap', 'Screen Printing on Band'],
      customizationOptions: 'Custom packaging sleeve with event branding.',
      moq: '50 units',
      packaging: 'Individual kraft gift box packaging.',
      leadTime: '5-7 business days',
      idealFor: [
        'Outdoor Corporate Retreats & Trekking Trips',
        'Travel & Aviation Industry Giveaways',
        'Youth & Marathon Sponsorship Kits'
      ],
      productImages: ['0089.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['collapsible bottle', 'silicone bottle', 'travel bottle', 'bottles', 'flasks']
    },
    {
      id: 'reminder-water-bottle-bottles-flasks',
      slug: 'reminder-water-bottle-bottles-flasks',
      productName: 'Reminder Water Bottle',
      category: 'Bottles & Flasks',
      subcategory: 'Motivational Hydration Tracker Bottle',
      shortDescription: '1000ml motivational hydration tracker bottle with hourly time markers and leak-proof pop-up straw lid.',
      longDescription: 'Encourage healthy workplace hydration habits with hourly time markings and inspirational quotes printed directly on the matte frosted body. Features a push-button flip lid and comfortable wrist strap.',
      material: 'BPA-Free Tritan / Matte Frosted Polymer',
      dimensions: '280 mm (H) x 75 mm (Dia)',
      capacity: '1000 ml',
      weight: '210 g',
      coloursVariants: ['Gradient Purple-Teal', 'Frosted Black', 'Gradient Blue-Pink'],
      keyFeatures: [
        'Hourly time markers to track daily hydration targets',
        'One-click push button pop-up straw lid with safety lock',
        'Shatter-resistant, 100% BPA-free Tritan plastic body',
        'Durable wrist lanyard strap for effortless carrying'
      ],
      brandingMethods: ['Screen Print', 'UV Flatbed Printing'],
      customizationOptions: 'Custom corporate slogan or wellness logo added to markings.',
      moq: '50 units',
      packaging: 'Individual OPP bag & protective inner box.',
      leadTime: '5-7 business days',
      idealFor: [
        'Corporate Health & Wellness Campaigns',
        'Employee Birthday & Anniversary Gifts',
        'Gym & Fitness Brand Promotions'
      ],
      productImages: ['0093.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['reminder bottle', 'hydration tracker', 'motivational bottle', 'tritan bottle', 'bottles']
    },
    {
      id: 'stainless-steel-hip-flask-bottles-flasks',
      slug: 'stainless-steel-hip-flask-bottles-flasks',
      productName: 'Stainless Steel Hip Flask',
      category: 'Bottles & Flasks',
      subcategory: 'Pocket Hip Flask',
      shortDescription: 'Classic 230ml (8 oz) brushed stainless steel pocket hip flask with hinged captive screw cap for executive gifting.',
      longDescription: 'Slim curved contour designed to fit comfortably in jacket pockets or briefcases. Crafted from heavy-gauge stainless steel with precision laser welding to ensure leak-free performance.',
      material: '304 Brushed Stainless Steel',
      dimensions: '138 mm (H) x 93 mm (W) x 22 mm (D)',
      capacity: '230 ml (8 oz)',
      weight: '140 g',
      coloursVariants: ['Brushed Silver Metallic', 'Matte Black', 'Engraved Vintage Bronze'],
      keyFeatures: [
        'Contoured curved design fits snugly into pocket',
        'Hinged captive cap prevents lid loss',
        'Laser-welded seams guarantee leak-proof storage',
        'High-polish metallic surface ideal for crisp laser etching'
      ],
      brandingMethods: ['Precision Laser Engraving', 'Diamond Etching', 'Sublimation Print'],
      customizationOptions: 'Personalized monogramming for VIP & C-suite recipients.',
      moq: '50 units',
      packaging: 'Standard black gift box included.',
      leadTime: '4-6 business days',
      idealFor: [
        'Executive Leadership Appreciation Gifts',
        'Retirement & Milestone Commemorations',
        'High-End Corporate Hospitality Events'
      ],
      productImages: ['0083.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['hip flask', 'stainless steel flask', 'executive gift', 'flasks', 'bottles']
    },
    {
      id: 'stainless-steel-hip-flask-gift-set-bottles-flasks',
      slug: 'stainless-steel-hip-flask-gift-set-bottles-flasks',
      productName: 'Stainless Steel Hip Flask Gift Set',
      category: 'Bottles & Flasks',
      subcategory: 'Hip Flask & Shot Glasses Set',
      shortDescription: '4-piece executive gift set featuring leatherette-wrapped stainless steel flask, 2 matching shot cups, and stainless steel funnel in a presentation box.',
      longDescription: 'A classic celebratory corporate gift set. Features an 8oz stainless steel flask with stitched PU leather wrap, paired with two stainless steel shot glasses and a precision pouring funnel, presented in a velvet-lined gift box.',
      material: 'Stainless Steel with Stitched PU Leatherette Wrap',
      dimensions: 'Gift Box: 220 mm (L) x 170 mm (W) x 45 mm (H)',
      capacity: 'Flask: 230 ml (8 oz) + 2x 30ml Shot Cups',
      weight: '340 g (Full Set)',
      coloursVariants: ['Classic Brown Leatherette', 'Black Leatherette', 'Tan Cognac'],
      keyFeatures: [
        'Complete 4-piece set: Flask, 2 shot cups & stainless funnel',
        'Stitched PU leather wrap adds warmth and grip',
        'Velvet-padded rigid presentation box included',
        'Captive screw top lid ensures no lost caps'
      ],
      brandingMethods: ['Laser Engraving on Metal / Leather', 'Foil Stamping on Leather Wrap'],
      customizationOptions: 'Embossed company logo on leather wrap; custom inner lid message.',
      moq: '50 units',
      packaging: 'Velvet-lined presentation gift box.',
      leadTime: '5-7 business days',
      idealFor: [
        'Diwali & New Year Executive Hampers',
        'Dealer & Channel Partner Recognition',
        'Board Member & Speaker Token Gifts'
      ],
      productImages: ['0085.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['hip flask set', 'gift set', 'executive gifting', 'flasks', 'leather flask']
    },
    {
      id: 'premium-hip-flask-gift-box-set-bottles-flasks',
      slug: 'premium-hip-flask-gift-box-set-bottles-flasks',
      productName: 'Premium Hip Flask Gift Box Set',
      category: 'Bottles & Flasks',
      subcategory: 'Luxury Matte Black Flask Set',
      shortDescription: 'Luxury matte black hip flask set with custom die-cut foam insert, funnel, and 2 metal cups in a magnetic gift box.',
      longDescription: 'Deluxe black-edition corporate gift set. Stealth matte black powder coating across the flask and cups, nestled in high-density EVA foam inside a sleek magnetic-closure gift box.',
      material: 'Matte Black Coated 304 Stainless Steel & EVA Foam Box',
      dimensions: 'Box: 240 mm (L) x 180 mm (W) x 50 mm (H)',
      capacity: 'Flask: 240 ml (8 oz)',
      weight: '410 g',
      coloursVariants: ['Stealth Matte Black', 'Gunmetal Grey'],
      keyFeatures: [
        'Luxury stealth matte black finish',
        'Magnetic closure rigid presentation box',
        'Custom high-density EVA foam tray',
        'Includes flask, funnel, and 2 stainless shot cups'
      ],
      brandingMethods: ['Laser Engraving (Reveals Silver Metallic Logo)', 'UV Flatbed Print'],
      customizationOptions: 'Silver foil stamped logo on exterior magnetic box cover.',
      moq: '50 units',
      packaging: 'Magnetic hardboard gift box with sleeve.',
      leadTime: '5-7 business days',
      idealFor: ['VIP Client Gifting', 'CXO Appreciation', 'Festive Luxury Gifting'],
      productImages: ['flasks1.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['luxury flask', 'hip flask box', 'matte black flask', 'gift set', 'flasks']
    },
    {
      id: 'executive-hip-flask-and-bar-tool-gift-set-bottles-flasks',
      slug: 'executive-hip-flask-and-bar-tool-gift-set-bottles-flasks',
      productName: 'Executive Hip Flask & Bar Tool Gift Set',
      category: 'Bottles & Flasks',
      subcategory: '5-Piece Barware & Flask Set',
      shortDescription: 'Comprehensive 5-piece barware gift set featuring stainless steel flask, waiter corkscrew, bottle opener, funnel, and shot cup.',
      longDescription: 'An all-in-one barware gift set designed for corporate rewards and executive appreciation. Includes a heavy-duty stainless steel flask alongside professional bar tools housed in a tailored wooden/leatherette case.',
      material: 'Food-Grade Stainless Steel & Rosewood / PU Leatherette Box',
      dimensions: 'Box: 260 mm (L) x 210 mm (W) x 60 mm (H)',
      capacity: 'Flask: 230 ml (8 oz)',
      weight: '580 g',
      coloursVariants: ['Rosewood Wood Finish Box', 'Black PU Leather Box'],
      keyFeatures: [
        '5-piece barware collection: Flask, waiter key, bottle opener, funnel, cup',
        'Solid wood / leatherette keepsake storage case',
        'Precision laser etched branding on box and tools',
        'Ideal premium keepsake for senior leadership'
      ],
      brandingMethods: ['Laser Engraving on Box & Tools', 'Brass Plate Engraving'],
      customizationOptions: 'Brass plaque attached to box lid with laser engraved recipient name.',
      moq: '50 units',
      packaging: 'Keepsake wooden/leatherette gift box.',
      leadTime: '6-8 business days',
      idealFor: ['Leadership Milestone Awards', 'VIP Business Partner Gifts', 'Festive Celebration Packages'],
      productImages: ['flasks2.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['bar tool set', 'hip flask bar set', 'executive barware', 'gift set', 'flasks']
    },

    // =========================================================================
    // 2. MUGS & SIPPERS
    // =========================================================================
    {
      id: 'self-stirring-mug-mugs-sippers',
      slug: 'self-stirring-mug-mugs-sippers',
      productName: 'Self Stirring Mug',
      category: 'Mugs & Sippers',
      subcategory: 'Automatic Magnetic Stirring Mug',
      shortDescription: '380ml automatic self-stirring magnetic coffee mug for instant mixing of coffee, protein shakes, and hot chocolate at desk.',
      longDescription: 'Eliminate spoons with the push of a button! Uses a detachable magnetic rotor at the bottom of the stainless steel interior to instantly blend beverages. Double-wall thermal insulation keeps drinks warm.',
      material: '304 Stainless Steel Interior + ABS Outer Shell + Magnetic Rotor',
      dimensions: '140 mm (H) x 90 mm (Top Dia)',
      capacity: '380 ml',
      weight: '290 g',
      coloursVariants: ['Matte Black', 'Arctic White', 'Soft Pink', 'Metallic Silver'],
      keyFeatures: [
        'One-touch automatic magnetic stirring mechanism',
        'Double-wall thermal insulation maintains beverage temperature',
        'Detachable magnetic stirrer capsule for effortless cleaning',
        'Spill-resistant lid with sipping aperture'
      ],
      brandingMethods: ['Laser Engraving', 'Screen Print', 'UV Digital Print'],
      customizationOptions: 'Custom color-matched outer shell on bulk orders above 500 units.',
      moq: '50 units',
      packaging: 'Individual retail box with USB cable / batteries.',
      leadTime: '4-6 business days',
      idealFor: ['Desk Merchandise', 'Tech & Startup Employee Kits', 'Fun Corporate Contests'],
      productImages: ['0072.jpeg', '0073.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['self stirring mug', 'magnetic mug', 'coffee mug', 'mugs', 'sippers', 'tech mug']
    },
    {
      id: 'smart-temperature-mug-mugs-sippers',
      slug: 'smart-temperature-mug-mugs-sippers',
      productName: 'Smart Temperature Mug',
      category: 'Mugs & Sippers',
      subcategory: 'LED Touch Temperature Display Tumbler',
      shortDescription: '450ml smart vacuum tumbler featuring a touch-activated LED temperature display on the lid for real-time thermal monitoring.',
      longDescription: 'Touch the top of the lid to instantly view beverage temperature in Celsius. Double-wall vacuum insulation keeps drinks hot for 12 hours or cold for 24 hours without burning hands.',
      material: '304 Stainless Steel (Inner & Outer) + LED Touch Sensor Cap',
      dimensions: '225 mm (H) x 65 mm (Dia)',
      capacity: '450 ml',
      weight: '320 g',
      coloursVariants: ['Matte Charcoal Black', 'Rose Gold', 'Pearl White', 'Ocean Blue'],
      keyFeatures: [
        'Touch LED screen displays real-time temperature in °C',
        'Includes removable stainless steel tea infuser filter basket',
        'Double-wall vacuum insulation (12h Hot / 24h Cold)',
        'Leak-proof screw lid with long-life built-in battery'
      ],
      brandingMethods: ['Laser Engraving', '360° Rotary UV Print', 'Screen Print'],
      customizationOptions: 'Personalized employee name laser engraving along vertical body.',
      moq: '50 units',
      packaging: 'Sleek white cylindrical or rectangular box.',
      leadTime: '4-6 business days',
      idealFor: ['Executive Tech Kits', 'Diwali & New Year Gift Packs', 'Client Relationship Gifts'],
      productImages: ['0077.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['smart mug', 'temperature bottle', 'led tumbler', 'mugs', 'sippers', 'vacuum mug']
    },
    {
      id: 'glass-straw-sipper-mugs-sippers',
      slug: 'glass-straw-sipper-mugs-sippers',
      productName: 'Glass Straw Sipper',
      category: 'Mugs & Sippers',
      subcategory: 'Borosilicate Glass Tumbler with Straw',
      shortDescription: '400ml crystal clear borosilicate glass coffee tumbler with natural bamboo lid, protective silicone sleeve, and glass straw.',
      longDescription: 'Designed for iced coffees, smoothies, and desk hydration. High-grade borosilicate glass paired with a sustainable bamboo lid and reusable glass straw gives a clean, modern aesthetic.',
      material: 'Borosilicate Glass + Bamboo Lid + Food Grade Silicone Sleeve + Glass Straw',
      dimensions: '150 mm (H) x 78 mm (Dia)',
      capacity: '400 ml',
      weight: '310 g',
      coloursVariants: ['Clear Glass / Tan Sleeve', 'Clear Glass / Grey Sleeve', 'Amber Glass / Black Sleeve'],
      keyFeatures: [
        'Sustainably sourced natural bamboo lid with silicone gasket',
        'Includes reusable borosilicate glass straw',
        'Protective heat-resistant silicone sleeve for comfortable grip',
        'Wide mouth fits ice cubes and cold brew coffee'
      ],
      brandingMethods: ['Screen Printing on Sleeve', 'Laser Engraving on Bamboo Lid', 'Glass UV Print'],
      customizationOptions: 'Custom logo engraved on bamboo lid.',
      moq: '50 units',
      packaging: 'Individual eco kraft box.',
      leadTime: '5-7 business days',
      idealFor: ['Eco-Friendly Brand Campaigns', 'Gen-Z & Creative Workplace Gifting', 'Summer Event Promotions'],
      productImages: ['0074.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['glass sipper', 'bamboo lid mug', 'straw tumbler', 'mugs', 'sippers', 'eco drinkware']
    },
    {
      id: 'leather-sleeve-tumbler-mugs-sippers',
      slug: 'leather-sleeve-tumbler-mugs-sippers',
      productName: 'Leather Sleeve Tumbler',
      category: 'Mugs & Sippers',
      subcategory: 'Executive Leather Band Tumbler',
      shortDescription: '450ml double-wall tumbler encased in a textured PU leather heat sleeve with custom debossed corporate logo.',
      longDescription: 'Combines modern drinkware utility with executive leather craft. The removable PU leather cuff insulates hands while serving as a prominent canvas for foil debossing.',
      material: 'Stainless Steel / Glass Interior + PU Leather Cuff',
      dimensions: '165 mm (H) x 82 mm (Top Dia)',
      capacity: '450 ml',
      weight: '280 g',
      coloursVariants: ['Cognac Brown Leather', 'Obsidian Black Leather', 'Tan Leather'],
      keyFeatures: [
        'Removable stitched PU leather insulating sleeve',
        'Fits standard car cup holders and desk pads',
        'Spill-proof slide closure lid',
        'Double-wall thermal construction'
      ],
      brandingMethods: ['Blind Debossing on Leather', 'Gold/Silver Foil Stamping', 'Laser Engraving'],
      customizationOptions: 'Individual name heat-stamped onto leather band.',
      moq: '50 units',
      packaging: 'Premium presentation carton.',
      leadTime: '5-7 business days',
      idealFor: ['Executive Onboarding Kits', 'Financial & Consulting Firm Gifting', 'Leadership Offsites'],
      productImages: ['0075.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['leather tumbler', 'executive mug', 'mugs', 'sippers', 'tumbler']
    },
    {
      id: 'steel-coffee-tumbler-mugs-sippers',
      slug: 'steel-coffee-tumbler-mugs-sippers',
      productName: 'Steel Coffee Tumbler',
      category: 'Mugs & Sippers',
      subcategory: 'Insulated Desk Coffee Tumbler',
      shortDescription: '350ml ergonomic stainless steel desk mug with handle and spill-proof slider lid for hot coffee and tea.',
      longDescription: 'The ultimate daily workstation mug. Double-wall vacuum stainless steel body keeps coffee piping hot for hours while the cool-touch handle ensures easy drinking during long work calls.',
      material: '304 Stainless Steel + PP Plastic Lid',
      dimensions: '115 mm (H) x 88 mm (Dia)',
      capacity: '350 ml',
      weight: '240 g',
      coloursVariants: ['Matte Black', 'Brushed Steel', 'Navy Blue', 'Forest Green'],
      keyFeatures: [
        'Ergonomic cool-touch handle',
        'Vacuum insulation keeps coffee hot for 4+ hours',
        'Clear slider lid prevents desk spills',
        'Wide non-scratch rubberized base'
      ],
      brandingMethods: ['Laser Engraving', 'Screen Print', 'UV Color Print'],
      customizationOptions: 'Dual-sided print (Company logo + Employee name).',
      moq: '50 units',
      packaging: 'White box packaging.',
      leadTime: '4-6 business days',
      idealFor: ['Workplace Coffee Station Gifting', 'Remote Employee Welcome Kits', 'IT & Enterprise Teams'],
      productImages: ['0076.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['steel coffee mug', 'desk tumbler', 'insulated mug', 'mugs', 'sippers']
    },
    {
      id: 'insulated-travel-coffee-mug-mugs-sippers',
      slug: 'insulated-travel-coffee-mug-mugs-sippers',
      productName: 'Insulated Travel Coffee Mug',
      category: 'Mugs & Sippers',
      subcategory: 'Travel Coffee Tumbler',
      shortDescription: '500ml leak-proof stainless steel travel mug with push-button lock and 360-degree drink rim.',
      longDescription: 'Engineered for commuting professionals. Double-wall vacuum technology maintains beverage heat while the one-hand push button lid enables easy drinking on the go.',
      material: '304 Stainless Steel (Inner & Outer)',
      dimensions: '190 mm (H) x 70 mm (Dia)',
      capacity: '500 ml',
      weight: '310 g',
      coloursVariants: ['Matte Black', 'Matte White', 'Metallic Grey', 'Burgundy'],
      keyFeatures: [
        '100% leak-proof lockable push button cap',
        'Keeps liquids hot for 8h / cold for 16h',
        'Slim profile fits standard automotive cup holders',
        'Scratch-resistant powder coated finish'
      ],
      brandingMethods: ['Laser Engraving', 'Rotary UV Print'],
      customizationOptions: 'Vertical laser etch logo down the back.',
      moq: '50 units',
      packaging: 'Color gift box.',
      leadTime: '4-6 business days',
      idealFor: ['Field Sales Teams', 'Commuter Employee Packs', 'Corporate Offsite Travelers'],
      productImages: ['0079.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['travel mug', 'insulated tumbler', 'coffee flask', 'mugs', 'sippers']
    },
    {
      id: 'bluetooth-speaker-travel-tumbler-mugs-sippers',
      slug: 'bluetooth-speaker-travel-tumbler-mugs-sippers',
      productName: 'Bluetooth Speaker Travel Tumbler',
      category: 'Mugs & Sippers',
      subcategory: '2-in-1 Flask & Wireless Speaker',
      shortDescription: 'Innovative 500ml stainless steel vacuum flask with a detachable IPX4 water-resistant Bluetooth speaker base.',
      longDescription: 'Combine hydration and music! The bottom of this insulated flask unfastens into a standalone Bluetooth speaker. Perfect for picnics, outdoor team offsites, and travel.',
      material: '304 Stainless Steel Flask + ABS Bluetooth 5.0 Speaker Base',
      dimensions: '260 mm (H) x 73 mm (Dia)',
      capacity: '500 ml (Flask) / 3W Speaker output',
      weight: '420 g',
      coloursVariants: ['Matte Black', 'Royal Blue', 'Ruby Red'],
      keyFeatures: [
        'Detachable 3W Bluetooth 5.0 speaker with 4h playtime',
        'IPX4 water-resistant speaker construction',
        'Double-wall vacuum flask keeps drinks hot/cold for 12h',
        'Rechargeable via micro-USB / Type-C'
      ],
      brandingMethods: ['Laser Engraving on Bottle', 'Pad Printing on Speaker'],
      customizationOptions: 'Custom packaging sleeve and startup sound on speaker.',
      moq: '50 units',
      packaging: 'Premium tech retail box.',
      leadTime: '5-7 business days',
      idealFor: ['Tech & Product Team Incentives', 'Annual Corporate Hackathons', 'Youth Brand Promotions'],
      productImages: ['112.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['speaker tumbler', 'bluetooth flask', 'tech mug', 'mugs', 'sippers']
    },
    {
      id: 'travel-tumbler-mugs-sippers',
      slug: 'travel-tumbler-mugs-sippers',
      productName: 'Travel Tumbler',
      category: 'Mugs & Sippers',
      subcategory: 'Powder-Coated Ergonomic Tumbler',
      shortDescription: '480ml matte powder-coated ergonomic stainless steel tumbler with straw opening lid.',
      longDescription: 'Sleek, durable tumbler built for all-day office sipping. Features a textured matte exterior that stays dry and comfortable in hand.',
      material: '304 Stainless Steel + Tritan Lid',
      dimensions: '175 mm (H) x 85 mm (Top Dia)',
      capacity: '480 ml',
      weight: '270 g',
      coloursVariants: ['Powder Black', 'Powder White', 'Teal Green', 'Terracotta'],
      keyFeatures: [
        'Durable chip-resistant powder coated finish',
        'Dual drinking option lid (Straw port + Sip hole)',
        'Fits all standard automotive cup holders',
        'BPA-free & dishwasher safe body'
      ],
      brandingMethods: ['Laser Engraving', 'Screen Print'],
      customizationOptions: 'Custom Pantone body colors on 500+ units.',
      moq: '50 units',
      packaging: 'Standard gift box.',
      leadTime: '4-6 business days',
      idealFor: ['Office Refreshment Kits', 'Client Appreciation', 'Event Trade Shows'],
      productImages: ['114.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['travel tumbler', 'powder coat mug', 'mugs', 'sippers']
    },

    // =========================================================================
    // 3. BAGS
    // =========================================================================
    {
      id: 'executive-laptop-backpack-bags',
      slug: 'executive-laptop-backpack-bags',
      productName: 'Executive Laptop Backpack',
      category: 'Bags',
      subcategory: '15.6" Ergonomic Laptop Backpack',
      shortDescription: 'Water-resistant multi-compartment executive laptop backpack with USB charging port and luggage trolley strap.',
      longDescription: 'Designed for commuting professionals and frequent business travellers. Features high-density padded protection for 15.6" laptops, hidden anti-theft back pocket, ergonomic air-mesh straps, and an external USB port for on-the-go phone charging.',
      material: '900D Water-Repellent Ballistic Nylon / Polyester',
      dimensions: '450 mm (H) x 320 mm (W) x 160 mm (D)',
      capacity: '24 Litres (Fits up to 15.6" Laptops + 11" Tablets)',
      weight: '750 g',
      coloursVariants: ['Heather Grey', 'Obsidian Black', 'Navy Blue'],
      keyFeatures: [
        'Dedicated padded sleeve for 15.6" laptop & iPad/tablet',
        'External USB charging port pass-through',
        'Luggage pass-through trolley strap for suitcase attachment',
        'Breathable 3D mesh back padding and hidden theft-proof pocket'
      ],
      brandingMethods: ['Precision Embroidery', 'Leather Patch Embossing', 'Laser Etched Metal Plate'],
      customizationOptions: 'Custom branded zipper pullers and internal lining logo pattern.',
      moq: '50 units',
      packaging: 'Individual non-woven dust bag & polybag.',
      leadTime: '7-10 business days',
      idealFor: ['Employee Welcome & Onboarding Kits', 'Sales Team Offsite & Travel Rewards', 'Leadership Offsites'],
      productImages: ['0057.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['laptop backpack', 'executive bag', 'bags', 'travel backpack', 'onboarding kit']
    },
    {
      id: 'slim-laptop-sleeve-bags',
      slug: 'slim-laptop-sleeve-bags',
      productName: 'Slim Laptop Sleeve',
      category: 'Bags',
      subcategory: 'Padded Laptop Protective Sleeve',
      shortDescription: 'Ultra-slim padded laptop sleeve with soft fleece interior lining and accessory storage pouch for 13"-15.6" laptops.',
      longDescription: 'Minimalist executive protection. Crafted from spill-resistant fabric with 360-degree shockproof corner padding. Includes a front zipper pocket for charger cables, mouse, and pens.',
      material: 'Spill-Resistant Canvas Outer + Plush Fleece Inner Lining',
      dimensions: '385 mm (W) x 275 mm (H) x 20 mm (D)',
      capacity: 'Fits 13" / 14" / 15.6" Laptops',
      weight: '210 g',
      coloursVariants: ['Dark Grey', 'Charcoal Black', 'Navy Blue', 'Camel Tan'],
      keyFeatures: [
        '360° inner corner foam protection against drop impacts',
        'Plush scratch-free fleece interior lining',
        'Front zippered compartment for chargers and accessories',
        'Tuck-away carrying handle'
      ],
      brandingMethods: ['Embroidery', 'Screen Printing', 'Leatherette Patch Deboss'],
      customizationOptions: 'Custom color zipper pulls and leather badge.',
      moq: '50 units',
      packaging: 'Clear polybag.',
      leadTime: '5-7 business days',
      idealFor: ['Hybrid & Remote Employee Setup', 'IT Device Distribution Kits', 'Conference Delegate Merchandise'],
      productImages: ['0060.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['laptop sleeve', 'slim sleeve', 'bags', 'padded sleeve', 'laptop case']
    },
    {
      id: 'canvas-tote-bag-bags',
      slug: 'canvas-tote-bag-bags',
      productName: 'Canvas Eco Tote Bag',
      category: 'Bags',
      subcategory: 'Heavyweight Cotton Canvas Tote',
      shortDescription: 'Heavy-duty 350 GSM 100% organic cotton canvas tote bag with reinforced handles and inner zip pocket.',
      longDescription: 'Eco-conscious merchandise staple. Premium 350 GSM natural cotton canvas provides a spacious, plastic-free carrying bag for exhibition collateral, employee kits, and daily shopping.',
      material: '100% Natural Organic Cotton Canvas (350 GSM)',
      dimensions: '400 mm (H) x 360 mm (W) x 100 mm (Gusset)',
      capacity: '15 Litres',
      weight: '190 g',
      coloursVariants: ['Natural Off-White Canvas', 'Midnight Black', 'Navy Blue'],
      keyFeatures: [
        'Heavyweight 350 GSM durable canvas construction',
        'Reinforced cross-stitched shoulder handles',
        'Internal zippered pocket for phone and keys',
        '100% biodegradable and eco-friendly material'
      ],
      brandingMethods: ['Screen Printing', 'Digital Direct-to-Garment (DTG)', 'Heat Transfer'],
      customizationOptions: 'Full-bleed edge-to-edge custom print designs.',
      moq: '50 units',
      packaging: 'Bulk carton packed.',
      leadTime: '4-6 business days',
      idealFor: ['Exhibitions, Trade Shows & Events', 'Green Corporate Campaigns', 'Store Giveaways'],
      productImages: ['0063.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['canvas tote', 'eco bag', 'tote bag', 'bags', 'cotton tote']
    },
    {
      id: 'anti-theft-travel-backpack-bags',
      slug: 'anti-theft-travel-backpack-bags',
      productName: 'Anti-Theft Travel Backpack',
      category: 'Bags',
      subcategory: 'Security Travel Backpack',
      shortDescription: 'TSA-compliant anti-theft travel backpack with hidden zippers, cut-resistant fabric, and RFID-blocking card slots.',
      longDescription: 'Engineered for business travellers in bustling airports and transit. The main zippers are concealed against the wearer\'s back, preventing unauthorized access. Includes integrated RFID shielding for credit cards.',
      material: 'Cut-Resistant 1680D Polyester + Waterproof PVC Coating',
      dimensions: '460 mm (H) x 310 mm (W) x 150 mm (D)',
      capacity: '22 Litres',
      weight: '820 g',
      coloursVariants: ['Charcoal Black', 'Space Grey'],
      keyFeatures: [
        'Concealed rear zipper closures for complete theft deterrence',
        'Integrated RFID-blocking card pockets in shoulder straps',
        '180-degree lay-flat opening for security checkpoints',
        'Built-in USB external charging port'
      ],
      brandingMethods: ['Metal Badge Laser Etch', 'Reflective Heat Transfer Logo'],
      customizationOptions: 'Custom luggage tag attached.',
      moq: '50 units',
      packaging: 'Individual dust bag.',
      leadTime: '7-10 business days',
      idealFor: ['International Travel Teams', 'Leadership Travel Rewards', 'Annual Top Performer Awards'],
      productImages: ['0066.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['anti theft backpack', 'travel bag', 'security backpack', 'bags']
    },
    {
      id: 'vegan-leather-duffle-bag-bags',
      slug: 'vegan-leather-duffle-bag-bags',
      productName: 'Vegan Leather Duffle Bag',
      category: 'Bags',
      subcategory: 'Executive Overnight Travel Duffle',
      shortDescription: 'Premium handcrafted PU vegan leather weekend duffle bag with dedicated shoe compartment and detachable shoulder strap.',
      longDescription: 'Exude sophistication on short business trips and weekend getaways. Made from supple, water-resistant vegan leather with heavy metal hardware, reinforced handles, and a side-access ventilated shoe compartment.',
      material: 'High-Grade Grain PU Vegan Leather + Brass Hardware',
      dimensions: '520 mm (L) x 280 mm (W) x 260 mm (H)',
      capacity: '38 Litres',
      weight: '1150 g',
      coloursVariants: ['Rich Cognac Brown', 'Classic Black', 'Tan Mahogany'],
      keyFeatures: [
        'Separate side-zipper ventilated shoe compartment',
        'Water-resistant, easy-to-clean supple vegan leather',
        'Detachable padded shoulder strap & reinforced carry handles',
        'Heavy-duty YKK brass zippers and metallic feet'
      ],
      brandingMethods: ['Debossing (Heat Stamping)', 'Foil Stamping', 'Laser Etched Metal Plaque'],
      customizationOptions: 'Individual employee initials stamped on luggage tag.',
      moq: '50 units',
      packaging: 'Non-woven dust bag & protective carton.',
      leadTime: '8-12 business days',
      idealFor: ['Executive & VIP Leadership Gifts', 'Annual Milestone Awards', 'Festive Celebration Packages'],
      productImages: ['0069.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['duffle bag', 'leather duffle', 'travel bag', 'executive duffle', 'bags']
    },

    // =========================================================================
    // 4. GIFT SETS
    // =========================================================================
    {
      id: 'executive-welcome-kit-gift-sets',
      slug: 'executive-welcome-kit-gift-sets',
      productName: 'Executive Welcome Kit',
      category: 'Gift Sets',
      subcategory: '4-in-1 Onboarding Combo Set',
      shortDescription: 'Premium 4-piece corporate onboarding set containing temperature flask, PU diary, metal pen, and 10,000mAh power bank in a rigid box.',
      longDescription: 'Create an unforgettable first impression for new hires! This flagship combo includes four color-coordinated daily work essentials packaged neatly in custom die-cut foam inside a luxury hardboard presentation box.',
      material: 'Rigid Hardboard Magnetic Gift Box + EVA Foam Tray',
      dimensions: 'Box: 340 mm (L) x 280 mm (W) x 90 mm (H)',
      capacity: '4 Coordinated Merchandise Items',
      weight: '1250 g (Full Set)',
      coloursVariants: ['Executive Matte Black Set', 'Royal Navy Blue Set', 'Steel Grey Set'],
      keyFeatures: [
        'Complete 4-in-1 kit: Flask, Notebook, Metal Pen & Power Bank',
        'Color-matched aesthetic across all merchandise components',
        'Luxury magnetic closure box with custom foam cutouts',
        'Branded with corporate logo on all four items'
      ],
      brandingMethods: ['Laser Engraving on Bottle/Pen/Powerbank', 'Debossing / Foil Stamp on Notebook', 'Foil Stamping on Box Cover'],
      customizationOptions: 'Customized welcome letter card inserted into box lid.',
      moq: '50 units',
      packaging: 'Rigid gift box with sleeve.',
      leadTime: '6-8 business days',
      idealFor: ['New Employee Welcome & Onboarding', 'Client Partnership Announcements', 'Executive Festive Hampers'],
      productImages: ['0042.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['welcome kit', 'onboarding kit', 'gift set', 'combo set', 'executive gift']
    },
    {
      id: 'flask-and-pen-combo-set-gift-sets',
      slug: 'flask-and-pen-combo-set-gift-sets',
      productName: 'Flask & Pen Combo Set',
      category: 'Gift Sets',
      subcategory: '2-in-1 Executive Essentials Set',
      shortDescription: 'Elegant 2-piece corporate gift set featuring a matte black vacuum flask and matching executive rollerball metal pen.',
      longDescription: 'Sleek and impactful compact gift set. Combines a 500ml temperature retention flask with a smooth-writing heavy metal rollerball pen, presented in a black presentation box.',
      material: '304 Stainless Steel Flask + Metal Alloy Pen + Presentation Box',
      dimensions: 'Box: 280 mm (L) x 180 mm (W) x 75 mm (H)',
      capacity: '500 ml Flask + Rollerball Pen',
      weight: '520 g',
      coloursVariants: ['Matte Black', 'Brushed Silver', 'Navy Blue'],
      keyFeatures: [
        'Color-matched flask and metal pen',
        'Laser engraved corporate branding on both items',
        'Velvet-lined gift box packaging',
        'Practical daily utility for office and travel'
      ],
      brandingMethods: ['Laser Engraving', 'Screen Print'],
      customizationOptions: 'Personalized recipient name laser etched on pen clip.',
      moq: '50 units',
      packaging: 'Velvet padded presentation box.',
      leadTime: '4-6 business days',
      idealFor: ['Conference Delegate Rewards', 'Speaker Appreciation', 'Festive Client Token Gifts'],
      productImages: ['0045.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['flask pen set', 'gift set', 'combo set', 'corporate gift']
    },
    {
      id: 'festive-celebration-hamper-gift-sets',
      slug: 'festive-celebration-hamper-gift-sets',
      productName: 'Festive Celebration Hamper',
      category: 'Gift Sets',
      subcategory: 'Diwali & Holiday Gift Hamper',
      shortDescription: 'Luxury corporate festive hamper featuring gourmet dry fruits, copper/glass sipper, ambient desk lamp, and greeting card in a gift box.',
      longDescription: 'Celebrate Diwali, New Year, and corporate milestones with a rich blend of gourmet treats and long-lasting branded merchandise. Housed in an ornate rigid gift hamper box.',
      material: 'Ornate Rigid Gift Box + Satin Ribbon',
      dimensions: 'Box: 360 mm (L) x 300 mm (W) x 100 mm (H)',
      capacity: 'Multi-Item Gourmet & Merchandise Hamper',
      weight: '1650 g',
      coloursVariants: ['Gold & Crimson Royal Theme', 'Matte Navy & Gold Theme'],
      keyFeatures: [
        'Curated mix of premium treats and permanent branded items',
        'Includes custom foil-stamped corporate greeting card',
        'Ornate festive packaging with ribbon wrap',
        'Fully customizable item selection for tier budgets'
      ],
      brandingMethods: ['Foil Stamping on Box & Card', 'Laser Engraving on Merchandise'],
      customizationOptions: 'Bespoke item curation based on budget requirement.',
      moq: '50 units',
      packaging: 'Festive rigid hamper box.',
      leadTime: '7-10 business days',
      idealFor: ['Diwali & New Year Gifting', 'Annual Client Appreciation', 'Festive Staff Recognition'],
      productImages: ['0048.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['festive hamper', 'diwali hamper', 'gift set', 'holiday hamper', 'luxury gift']
    },
    {
      id: 'deluxe-onboarding-box-gift-sets',
      slug: 'deluxe-onboarding-box-gift-sets',
      productName: 'Deluxe Employee Onboarding Box',
      category: 'Gift Sets',
      subcategory: 'Complete Joining Experience Kit',
      shortDescription: 'Comprehensive 5-piece onboarding kit with laptop sleeve, stainless bottle, hardbound diary, metal pen, and lanyard ID badge.',
      longDescription: 'Turn day one into an inspiring brand experience! Contains everything a new employee needs for their workstation, formatted in a custom die-cut foam tray inside a branded hardboard box.',
      material: 'Hardboard Box + Velvet Foam Insert',
      dimensions: 'Box: 400 mm (L) x 320 mm (W) x 100 mm (H)',
      capacity: '5 Essential Workspace Products',
      weight: '1420 g',
      coloursVariants: ['Corporate Charcoal', 'Brand Navy', 'Custom Corporate Pantone'],
      keyFeatures: [
        '5-piece workspace onboarding kit',
        'Uniform branding across sleeve, bottle, notebook, pen, & lanyard',
        'Sturdy keepsake box reusable for desk storage',
        'Includes personalized welcome card'
      ],
      brandingMethods: ['Screen Print', 'Debossing', 'Laser Engraving'],
      customizationOptions: 'Full custom outer box print with company values.',
      moq: '50 units',
      packaging: 'Custom printed hardboard box.',
      leadTime: '7-10 business days',
      idealFor: ['Enterprise Onboarding Programs', 'HR Brand Experience Campaigns'],
      productImages: ['0051.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['onboarding box', 'employee kit', 'welcome box', 'gift set']
    },

    // =========================================================================
    // 5. NOTEBOOKS & PENS
    // =========================================================================
    {
      id: 'hardbound-corporate-journal-notebooks-pens',
      slug: 'hardbound-corporate-journal-notebooks-pens',
      productName: 'Hardbound Corporate Journal',
      category: 'Notebooks & Diaries',
      subcategory: 'A5 PU Leather Executive Journal',
      shortDescription: '192-page A5 hardbound PU leather corporate notebook with ribbon bookmark, elastic band closure, and pen loop.',
      longDescription: 'The classic corporate diary. Features 80 GSM fountain-pen friendly cream paper inside a smooth PU leather cover. Includes an expandable inner back pocket for loose notes and business cards.',
      material: 'PU Leather Hardcover + 80 GSM Acid-Free Cream Paper (192 Pages)',
      dimensions: 'A5 Size — 210 mm (H) x 148 mm (W) x 15 mm (D)',
      capacity: '192 Ruled / Grid / Blank Pages',
      weight: '320 g',
      coloursVariants: ['Executive Black', 'Navy Blue', 'Cognac Brown', 'Forest Green'],
      keyFeatures: [
        '192 pages of 80 GSM bleed-resistant cream paper',
        'Elastic band closure and ribbon page marker',
        'Integrated elastic pen loop on spine',
        'Expandable inner accordion pocket for receipts/cards'
      ],
      brandingMethods: ['Blind Debossing', 'Gold / Silver Foil Stamping', 'UV Screen Print'],
      customizationOptions: 'Custom printed tip-in inserts (company profile pages) bound into front of notebook.',
      moq: '50 units',
      packaging: 'Individual shrink wrap / white belly band.',
      leadTime: '4-6 business days',
      idealFor: ['Daily Office Workstation Use', 'Conference & Seminar Notebooks', 'Executive Offsite Kits'],
      productImages: ['0025.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['corporate journal', 'hardbound notebook', 'a5 diary', 'pu leather diary', 'notebooks', 'pens']
    },
    {
      id: 'pu-leather-notebook-pen-loop-notebooks-pens',
      slug: 'pu-leather-notebook-pen-loop-notebooks-pens',
      productName: 'PU Leather Notebook with Pen Loop',
      category: 'Notebooks & Diaries',
      subcategory: 'Textured Executive Organizer',
      shortDescription: 'Premium textured PU leather notebook with integrated magnetic clasp and metal accent pen loop.',
      longDescription: 'Sophisticated textured hardcover notebook designed for C-suite meetings and client notes. Includes a magnetic flap closure and refillable binder format option.',
      material: 'Textured Cross-Grain PU Leather Cover + 80 GSM Cream Paper',
      dimensions: '220 mm (H) x 160 mm (W)',
      capacity: '200 Pages',
      weight: '380 g',
      coloursVariants: ['Charcoal Grey', 'Tan Brown', 'Navy Blue'],
      keyFeatures: [
        'Magnetic flap closure with stainless steel accent plate',
        'Business card slots on inside front cover',
        'High-grade 80 GSM fountain pen friendly paper',
        'Sturdy lay-flat 180-degree binding'
      ],
      brandingMethods: ['Laser Engraving on Metal Plate', 'Blind Debossing'],
      customizationOptions: 'Personalized name laser engraved on metal clasp.',
      moq: '50 units',
      packaging: 'Individual kraft gift box.',
      leadTime: '5-7 business days',
      idealFor: ['Executive & Director Notebooks', 'Annual Corporate Diaries', 'Client Meeting Gifts'],
      productImages: ['0028.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['pu notebook', 'executive diary', 'organizer', 'notebooks']
    },
    {
      id: 'executive-metal-rollerball-pen-notebooks-pens',
      slug: 'executive-metal-rollerball-pen-notebooks-pens',
      productName: 'Executive Metal Rollerball Pen',
      category: 'Notebooks & Diaries',
      subcategory: 'Heavyweight Metal Rollerball Pen',
      shortDescription: 'Heavy-gauge brass body executive rollerball pen with smooth German ceramic roller refill and presentation case.',
      longDescription: 'Deliver a tactile writing experience. Perfectly balanced brass barrel with chrome trim, utilizing quick-drying German ceramic roller ball refills for skip-free writing.',
      material: 'Solid Brass Metal Alloy Barrel + Chrome Accents',
      dimensions: '138 mm (L) x 12 mm (Dia)',
      capacity: '0.7 mm Black Ceramic Roller Refill',
      weight: '42 g',
      coloursVariants: ['Matte Black with Gold Trim', 'Gloss Black with Chrome Trim', 'Brushed Silver'],
      keyFeatures: [
        'Solid weighted brass metal construction',
        'Smooth German ceramic 0.7mm black ink roller refill',
        'Durable pocket clip with tension spring',
        'Housed in a velvet-lined magnetic presentation box'
      ],
      brandingMethods: ['Precision Laser Engraving (Reveals Gold / Silver Base)', 'Pad Print'],
      customizationOptions: 'Individual employee name engraved on pen clip or cap.',
      moq: '50 units',
      packaging: 'Single pen velvet presentation box.',
      leadTime: '4-6 business days',
      idealFor: ['Contract Signing & VIP Gifts', 'Employee Service Awards', 'Executive Welcome Kits'],
      productImages: ['0031.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['metal pen', 'rollerball pen', 'executive pen', 'pens', 'notebooks']
    },
    {
      id: 'kraft-eco-notebook-set-notebooks-pens',
      slug: 'kraft-eco-notebook-set-notebooks-pens',
      productName: 'Kraft Eco Notebook & Pen Set',
      category: 'Notebooks & Diaries',
      subcategory: 'Recycled Spiral Notepad & Paper Pen',
      shortDescription: '100% recycled Kraft paper spiral notebook with matching paper barrel ballpoint pen and elastic band.',
      longDescription: 'Sustainable stationery solution. Made entirely from post-consumer recycled paper with soy-based ink ruling. Includes a matching eco-paper pen secured in an elastic loop.',
      material: '100% Recycled Kraft Cardstock + 70 GSM Recycled Paper (120 Pages)',
      dimensions: '180 mm (H) x 130 mm (W)',
      capacity: '120 Ruled Pages + Recycled Pen',
      weight: '160 g',
      coloursVariants: ['Natural Brown Kraft', 'Recycled Black', 'Natural White'],
      keyFeatures: [
        '100% recycled eco-friendly construction',
        'Includes matching biodegradable paper ballpoint pen',
        'Sturdy twin-wire spiral binding',
        'Elastic closure band keeps notes secure'
      ],
      brandingMethods: ['Screen Printing', 'Eco-Soy Ink Printing'],
      customizationOptions: 'Full cover custom print with sustainability slogans.',
      moq: '50 units',
      packaging: 'Bulk packed in recycled cartons.',
      leadTime: '3-5 business days',
      idealFor: ['ESG & Sustainability Campaigns', 'Seminar & Conference Notebooks', 'School & University Events'],
      productImages: ['0034.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['eco notebook', 'kraft diary', 'recycled pen', 'stationery', 'notebooks']
    },

    // =========================================================================
    // 6. ELECTRONICS
    // =========================================================================
    {
      id: 'v-1-slate-grey-power-bank-diary-organizer-electronics',
      slug: 'v-1-slate-grey-power-bank-diary-organizer',
      productName: "V-1 Slate Grey Power Bank Diary Organizer",
      category: 'Notebooks & Diaries',
      subcategory: "Power Bank Diaries",
      shortDescription: "Executive wireless charging diary organizer featuring a built-in 10,000mAh battery, 3-in-1 cables, and refillable A5 binder.",
      longDescription: "A flagship executive accessory designed for corporate leaders. Incorporates a high-density 10,000mAh lithium-polymer battery, 5W/10W Qi wireless charging surface on the cover, 3-in-1 integrated charging cables (Type-C, Lightning, Micro-USB), 6-ring stainless steel binder mechanism with 192 ruled writing pages, card holder pockets, and a matching metal executive pen in a luxury rigid gift box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Slate Grey Suede Leatherette", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-1/V-1 (1).jpeg", "Power Bank images/V-1/V-1 (2).jpeg", "Power Bank images/V-1/V-1 (3).jpeg", "Power Bank images/V-1/V-1 (4).jpeg", "Power Bank images/V-1/V-1 (5).jpeg", "Power Bank images/V-1/V-1 (6).jpeg", "Power Bank images/V-1/V-1 (7).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-1"]
    },
    {
      id: 'v-2-tan-brown-leatherette-power-bank-diary-organizer-electronics',
      slug: 'v-2-tan-brown-leatherette-power-bank-diary-organizer',
      productName: "V-2 Tan Brown Leatherette Power Bank Diary Organizer",
      category: 'Notebooks & Diaries',
      subcategory: "Executive Wireless Charging Power Bank Portfolio",
      shortDescription: "Sophisticated tan brown leatherette power bank diary with wireless charging pad and premium magnetic buckle closure.",
      longDescription: "Crafted with premium textured vegan leather, the V-2 features a built-in 10,000mAh power bank, surface wireless charger, integrated multi-device cables, and executive card organizer. Accompanied by a precision metallic ballpoint pen and packaged in an elegant presentation gift box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Classic Tan Brown Leatherette", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-2/V-2 (1).jpeg", "Power Bank images/V-2/V-2 (2).jpeg", "Power Bank images/V-2/V-2 (3).jpeg", "Power Bank images/V-2/V-2 (4).jpeg", "Power Bank images/V-2/V-2 (5).jpeg", "Power Bank images/V-2/V-2 (6).jpeg", "Power Bank images/V-2/V-2 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-2"]
    },
    {
      id: 'v-3-dual-tone-sand-and-espresso-power-bank-organizer-electronics',
      slug: 'v-3-dual-tone-sand-and-espresso-power-bank-organizer',
      productName: "V-3 Dual-Tone Sand & Espresso Power Bank Organizer",
      category: 'Notebooks & Diaries',
      subcategory: "Two-Tone Wireless Charging Power Bank Diary",
      shortDescription: "Contemporary two-tone executive diary with built-in 10,000mAh power bank, Qi wireless charging, and metallic branding plate.",
      longDescription: "Combining modern two-tone aesthetics with enterprise tech utility, the V-3 integrates a 10,000mAh battery with fast wireless charging. Features an engravable metallic center plate on the magnetic clasp, refillable 6-hole binder, built-in charging cables, and matching luxury pen.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Dual-Tone Sand Beige & Espresso Brown", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-3/V-3 (1).jpeg", "Power Bank images/V-3/V-3 (2).jpeg", "Power Bank images/V-3/V-3 (3).jpeg", "Power Bank images/V-3/V-3 (4).jpeg", "Power Bank images/V-3/V-3 (5).jpeg", "Power Bank images/V-3/V-3 (6).jpeg", "Power Bank images/V-3/V-3 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-3"]
    },
    {
      id: 'v-4-crimson-burgundy-executive-power-bank-diary-electronics',
      slug: 'v-4-crimson-burgundy-executive-power-bank-diary',
      productName: "V-4 Crimson Burgundy Executive Power Bank Diary",
      category: 'Notebooks & Diaries',
      subcategory: "Luxury Wireless Charging Power Bank Organizer",
      shortDescription: "Striking crimson burgundy finish power bank diary with gold-accented metal clasp and executive lacquer twist pen.",
      longDescription: "Exuding prestige and corporate distinction, the V-4 combines deep crimson leatherette with high-grade electronics. Features 10,000mAh power capacity, wireless charging on front cover, concealed 3-in-1 output cables, business organizer sleeves, and gold-trimmed lacquer pen in a luxury gift box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Crimson Burgundy Gloss Leatherette", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-4/V-4 (1).jpeg", "Power Bank images/V-4/V-4 (2).jpeg", "Power Bank images/V-4/V-4 (3).jpeg", "Power Bank images/V-4/V-4 (4).jpeg", "Power Bank images/V-4/V-4 (5).jpeg", "Power Bank images/V-4/V-4 (6).jpeg", "Power Bank images/V-4/V-4 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-4"]
    },
    {
      id: 'v-5-cognac-amber-wireless-power-bank-diary-electronics',
      slug: 'v-5-cognac-amber-wireless-power-bank-diary',
      productName: "V-5 Cognac Amber Wireless Power Bank Diary",
      category: 'Notebooks & Diaries',
      subcategory: "Executive Power Bank Organizer Notebook",
      shortDescription: "Rich cognac amber leatherette organizer featuring integrated 10,000mAh battery, wireless charging, and gold brushed square clasp.",
      longDescription: "Designed for executives on the move, the V-5 brings warmth and sophistication. Includes a 10,000mAh battery, front Qi wireless charging pad, 3-in-1 charging cables for universal device support, card slots, passport/phone pocket, and coordinating metallic pen.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Cognac Amber Vintage Leatherette", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-5/V-5 (1).jpeg", "Power Bank images/V-5/V-5 (2).jpeg", "Power Bank images/V-5/V-5 (3).jpeg", "Power Bank images/V-5/V-5 (4).jpeg", "Power Bank images/V-5/V-5 (5).jpeg", "Power Bank images/V-5/V-5 (6).jpeg", "Power Bank images/V-5/V-5 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-5"]
    },
    {
      id: 'v-6-matte-charcoal-black-power-bank-organizer-diary-electronics',
      slug: 'v-6-matte-charcoal-black-power-bank-organizer-diary',
      productName: "V-6 Matte Charcoal Black Power Bank Organizer Diary",
      category: 'Notebooks & Diaries',
      subcategory: "Stealth Executive Power Bank Portfolio Diary",
      shortDescription: "All-black minimalist executive power bank organizer with gunmetal D-ring clasp, wireless charging, and matte pen.",
      longDescription: "The epitome of corporate elegance, the V-6 features a textured matte black exterior with gunmetal hardware. Equipped with a 10,000mAh battery, Qi wireless charging, built-in output cords, refillable A5 binder pages, and matte black metal executive pen in a presentation case.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Matte Charcoal Black Leatherette", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-6/V-6 (1).jpeg", "Power Bank images/V-6/V-6 (2).jpeg", "Power Bank images/V-6/V-6 (3).jpeg", "Power Bank images/V-6/V-6 (4).jpeg", "Power Bank images/V-6/V-6 (5).jpeg", "Power Bank images/V-6/V-6 (6).jpeg", "Power Bank images/V-6/V-6 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-6"]
    },
    {
      id: 'v-7-rustic-terracotta-power-bank-diary-organizer-electronics',
      slug: 'v-7-rustic-terracotta-power-bank-diary-organizer',
      productName: "V-7 Rustic Terracotta Power Bank Diary Organizer",
      category: 'Notebooks & Diaries',
      subcategory: "Artisanal Wireless Charging Power Bank Diary",
      shortDescription: "Warm terracotta textured finish power bank organizer with wireless charging pad, metal buckle, and luxury writing pen.",
      longDescription: "Distinctive earthy tones meet high-tech functionality. The V-7 includes a 10,000mAh battery, wireless charging emblem, built-in universal charging cables, refillable binder notebook, organizational slots, and matching executive pen in a premium rigid box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Rustic Terracotta Grain Leatherette", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-7/V-7 (1).jpeg", "Power Bank images/V-7/V-7 (2).jpeg", "Power Bank images/V-7/V-7 (3).jpeg", "Power Bank images/V-7/V-7 (4).jpeg", "Power Bank images/V-7/V-7 (5).jpeg", "Power Bank images/V-7/V-7 (6).jpeg", "Power Bank images/V-7/V-7 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-7"]
    },
    {
      id: 'v-8-vintage-mahogany-power-bank-diary-organizer-electronics',
      slug: 'v-8-vintage-mahogany-power-bank-diary-organizer',
      productName: "V-8 Vintage Mahogany Power Bank Diary Organizer",
      category: 'Notebooks & Diaries',
      subcategory: "Classic Executive Power Bank Portfolio",
      shortDescription: "Deep mahogany brown leatherette diary with integrated 10,000mAh power bank, wireless charging, and magnetic closure.",
      longDescription: "Traditional executive style blended with digital age practicality. Features a 10,000mAh power bank, wireless phone charging, 3-in-1 built-in cords, multi-card wallet sleeves, refillable calendar notepad, and coordinating executive ballpoint pen in gift box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Vintage Mahogany Leatherette", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-8/V-8 (1).jpeg", "Power Bank images/V-8/V-8 (2).jpeg", "Power Bank images/V-8/V-8 (3).jpeg", "Power Bank images/V-8/V-8 (4).jpeg", "Power Bank images/V-8/V-8 (5).jpeg", "Power Bank images/V-8/V-8 (6).jpeg", "Power Bank images/V-8/V-8 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-8"]
    },
    {
      id: 'v-9-urban-taupe-power-bank-organizer-diary-electronics',
      slug: 'v-9-urban-taupe-power-bank-organizer-diary',
      productName: "V-9 Urban Taupe Power Bank Organizer Diary",
      category: 'Notebooks & Diaries',
      subcategory: "Contemporary Wireless Power Bank Notebook",
      shortDescription: "Modern neutral taupe organizer featuring built-in 10,000mAh power supply, Qi wireless charging, and executive pen set.",
      longDescription: "A sleek, versatile choice for corporate branding. Features 10,000mAh high-density power cell, wireless charging surface, integrated multi-device cables, A5 6-ring binder, business card organizer, and stylus pen in a bespoke gift box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Urban Taupe Matte Finish", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-9/V-9 (1).jpeg", "Power Bank images/V-9/V-9 (2).jpeg", "Power Bank images/V-9/V-9 (3).jpeg", "Power Bank images/V-9/V-9 (4).jpeg", "Power Bank images/V-9/V-9 (5).jpeg", "Power Bank images/V-9/V-9 (6).jpeg", "Power Bank images/V-9/V-9 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-9"]
    },
    {
      id: 'v-10-slate-and-ivory-two-tone-power-bank-portfolio-electronics',
      slug: 'v-10-slate-and-ivory-two-tone-power-bank-portfolio',
      productName: "V-10 Slate & Ivory Two-Tone Power Bank Portfolio",
      category: 'Notebooks & Diaries',
      subcategory: "Designer Wireless Charging Power Bank Portfolio",
      shortDescription: "Designer asymmetrical two-tone portfolio with circular metallic clasp, 10,000mAh battery, and wireless charging.",
      longDescription: "An architecturally inspired executive portfolio featuring an asymmetrical flap with circular emblem clasp. Offers 10,000mAh capacity, fast wireless charging, 3-in-1 cables, organizer slots, document pocket, and high-precision pen in a hardboard presentation box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Two-Tone Slate Grey & Ivory", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-10/V-10 (1).jpeg", "Power Bank images/V-10/V-10 (2).jpeg", "Power Bank images/V-10/V-10 (3).jpeg", "Power Bank images/V-10/V-10 (4).jpeg", "Power Bank images/V-10/V-10 (5).jpeg", "Power Bank images/V-10/V-10 (6).jpeg", "Power Bank images/V-10/V-10 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-10"]
    },
    {
      id: 'v-11-graphite-grey-wireless-charging-power-bank-diary-electronics',
      slug: 'v-11-graphite-grey-wireless-charging-power-bank-diary',
      productName: "V-11 Graphite Grey Wireless Charging Power Bank Diary",
      category: 'Notebooks & Diaries',
      subcategory: "Executive Power Bank Organizer Notebook",
      shortDescription: "Textured graphite grey power bank diary with built-in wireless charging, concealed cords, and gunmetal executive pen.",
      longDescription: "Engineered for seamless productivity. Features a 10,000mAh lithium-polymer battery, wireless phone charger on front cover, 3-in-1 built-in charging cables, 6-ring binder with premium ruled sheets, card slots, and matching gunmetal pen in luxury box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Graphite Grey Fine-Textured Leatherette", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-11/V-11 (1).jpeg", "Power Bank images/V-11/V-11 (2).jpeg", "Power Bank images/V-11/V-11 (3).jpeg", "Power Bank images/V-11/V-11 (4).jpeg", "Power Bank images/V-11/V-11 (5).jpeg", "Power Bank images/V-11/V-11 (6).jpeg", "Power Bank images/V-11/V-11 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-11"]
    },
    {
      id: 'v-14-carbon-ash-power-bank-organizer-diary-electronics',
      slug: 'v-14-carbon-ash-power-bank-organizer-diary',
      productName: "V-14 Carbon Ash Power Bank Organizer Diary",
      category: 'Notebooks & Diaries',
      subcategory: "Technical Executive Power Bank Diary",
      shortDescription: "Modern carbon ash grey power bank organizer with wireless charging pad, secure clasp, and executive ballpoint pen.",
      longDescription: "A robust everyday corporate companion. Combines a 10,000mAh battery with wireless charging, integrated cables for iOS & Android devices, refillable A5 binder pages, business card sleeves, and matching metal pen in gift packaging.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Carbon Ash Grey Texture", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-14/V-14 (1).jpeg", "Power Bank images/V-14/V-14 (2).jpeg", "Power Bank images/V-14/V-14 (3).jpeg", "Power Bank images/V-14/V-14 (4).jpeg", "Power Bank images/V-14/V-14 (5).jpeg", "Power Bank images/V-14/V-14 (6).jpeg", "Power Bank images/V-14/V-14 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-14"]
    },
    {
      id: 'v-15-midnight-smoke-power-bank-diary-organizer-electronics',
      slug: 'v-15-midnight-smoke-power-bank-diary-organizer',
      productName: "V-15 Midnight Smoke Power Bank Diary Organizer",
      category: 'Notebooks & Diaries',
      subcategory: "Sleek Wireless Charging Power Bank Notebook",
      shortDescription: "Subtle midnight smoke finish power bank organizer with fast wireless charging, 3-in-1 cables, and executive pen.",
      longDescription: "Refined dark grey styling for professional settings. Built with 10,000mAh power supply, Qi wireless transmitter, built-in output cords, refillable notepad binder, card pockets, and matching executive pen in a luxury rigid gift box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Midnight Smoke Grey Leatherette", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-15/V-15 (1).jpeg", "Power Bank images/V-15/V-15 (2).jpeg", "Power Bank images/V-15/V-15 (3).jpeg", "Power Bank images/V-15/V-15 (4).jpeg", "Power Bank images/V-15/V-15 (5).jpeg", "Power Bank images/V-15/V-15 (6).jpeg", "Power Bank images/V-15/V-15 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-15"]
    },
    {
      id: 'v-16-saddle-brown-leatherette-power-bank-diary-electronics',
      slug: 'v-16-saddle-brown-leatherette-power-bank-diary',
      productName: "V-16 Saddle Brown Leatherette Power Bank Diary",
      category: 'Notebooks & Diaries',
      subcategory: "Classic Leatherette Power Bank Portfolio",
      shortDescription: "Rich saddle brown vintage leatherette organizer with built-in 10,000mAh battery, wireless charging, and pen.",
      longDescription: "Classic leather aesthetics meet high-efficiency electronics. Features a 10,000mAh battery, front cover wireless charging, 3-in-1 cables, organizer pockets, refillable 6-ring binder, and matching metallic pen in presentation box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Saddle Brown Vintage Finish", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-16/V-16 (1).jpeg", "Power Bank images/V-16/V-16 (2).jpeg", "Power Bank images/V-16/V-16 (3).jpeg", "Power Bank images/V-16/V-16 (4).jpeg", "Power Bank images/V-16/V-16 (5).jpeg", "Power Bank images/V-16/V-16 (6).jpeg", "Power Bank images/V-16/V-16 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-16"]
    },
    {
      id: 'v-17-onyx-black-executive-power-bank-diary-organizer-electronics',
      slug: 'v-17-onyx-black-executive-power-bank-diary-organizer',
      productName: "V-17 Onyx Black Executive Power Bank Diary Organizer",
      category: 'Notebooks & Diaries',
      subcategory: "Flagship Wireless Charging Power Bank Diary",
      shortDescription: "Deep onyx black luxury power bank organizer with silver metallic lock clasp, wireless charging, and executive pen.",
      longDescription: "A top-tier gift for senior management and corporate VIPs. Features 10,000mAh capacity, front cover wireless charging pad, 3-in-1 built-in cords, multi-pocket card slots, chrome ring binder, and luxury metal pen in rigid gift packaging.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Deep Onyx Black Leatherette", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-17/V-17 (1).jpeg", "Power Bank images/V-17/V-17 (2).jpeg", "Power Bank images/V-17/V-17 (3).jpeg", "Power Bank images/V-17/V-17 (4).jpeg", "Power Bank images/V-17/V-17 (5).jpeg", "Power Bank images/V-17/V-17 (6).jpeg", "Power Bank images/V-17/V-17 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-17"]
    },
    {
      id: 'v-18-champagne-stone-power-bank-diary-organizer-electronics',
      slug: 'v-18-champagne-stone-power-bank-diary-organizer',
      productName: "V-18 Champagne Stone Power Bank Diary Organizer",
      category: 'Notebooks & Diaries',
      subcategory: "Minimalist Wireless Charging Power Bank Diary",
      shortDescription: "Elegant champagne stone finish organizer with built-in 10,000mAh power bank, Qi wireless charging, and pen set.",
      longDescription: "Sophisticated light neutral tone perfect for upscale branding. Includes 10,000mAh battery, wireless charging surface, built-in cables, refillable A5 binder with ruled pages, card organizer, and matching pen in presentation box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Champagne Stone Neutral Finish", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-18/V-18 (1).jpeg", "Power Bank images/V-18/V-18 (2).jpeg", "Power Bank images/V-18/V-18 (3).jpeg", "Power Bank images/V-18/V-18 (4).jpeg", "Power Bank images/V-18/V-18 (5).jpeg", "Power Bank images/V-18/V-18 (6).jpeg", "Power Bank images/V-18/V-18 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-18"]
    },
    {
      id: 'v-19-nordic-grey-dual-tone-power-bank-diary-electronics',
      slug: 'v-19-nordic-grey-dual-tone-power-bank-diary',
      productName: "V-19 Nordic Grey Dual-Tone Power Bank Diary",
      category: 'Notebooks & Diaries',
      subcategory: "Scandinavian Style Power Bank Portfolio",
      shortDescription: "Nordic-inspired two-tone grey power bank organizer with wireless charging pad, multi-cables, and executive pen.",
      longDescription: "Clean Scandinavian minimalist design paired with enterprise electronics. Features 10,000mAh capacity, Qi wireless charging, integrated 3-in-1 charging cables, card pockets, A5 notepad binder, and luxury pen in gift box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Nordic Grey Two-Tone Leatherette", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-19/V-19 (1).jpeg", "Power Bank images/V-19/V-19 (2).jpeg", "Power Bank images/V-19/V-19 (3).jpeg", "Power Bank images/V-19/V-19 (4).jpeg", "Power Bank images/V-19/V-19 (5).jpeg", "Power Bank images/V-19/V-19 (6).jpeg", "Power Bank images/V-19/V-19 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-19"]
    },
    {
      id: 'v-20-desert-camel-power-bank-diary-organizer-electronics',
      slug: 'v-20-desert-camel-power-bank-diary-organizer',
      productName: "V-20 Desert Camel Power Bank Diary Organizer",
      category: 'Notebooks & Diaries',
      subcategory: "Premium Wireless Charging Power Bank Diary",
      shortDescription: "Warm camel tan leatherette diary with circular metallic magnetic clasp, 10,000mAh battery, and wireless charging.",
      longDescription: "Striking contrast band and circular metal lock. Features 10,000mAh power bank, front cover wireless charging pad, 3-in-1 built-in charging cables, 6-ring chrome binder, organization pockets, and metallic ballpoint pen in rigid gift box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Desert Camel Tan with Ivory Band", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-20/V-20 (1).jpeg", "Power Bank images/V-20/V-20 (2).jpeg", "Power Bank images/V-20/V-20 (3).jpeg", "Power Bank images/V-20/V-20 (4).jpeg", "Power Bank images/V-20/V-20 (5).jpeg", "Power Bank images/V-20/V-20 (6).jpeg", "Power Bank images/V-20/V-20 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-20"]
    },
    {
      id: 'v-25-stealth-matte-black-power-bank-organizer-diary-electronics',
      slug: 'v-25-stealth-matte-black-power-bank-organizer-diary',
      productName: "V-25 Stealth Matte Black Power Bank Organizer Diary",
      category: 'Notebooks & Diaries',
      subcategory: "Monochrome Wireless Power Bank Portfolio",
      shortDescription: "Ultra-sleek monochrome black power bank diary with laser-engravable metal clasp, wireless charging, and matte pen.",
      longDescription: "Contemporary monochrome black styling. Includes high-efficiency 10,000mAh battery, wireless charging on cover, 3-in-1 concealed charging cables, refillable notepad, card slots, and matte black pen in custom presentation packaging.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Stealth Matte Black Ultra-Fine Grain", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-25/V-25 (1).jpeg", "Power Bank images/V-25/V-25 (2).jpeg", "Power Bank images/V-25/V-25 (3).jpeg", "Power Bank images/V-25/V-25 (4).jpeg", "Power Bank images/V-25/V-25 (5).jpeg", "Power Bank images/V-25/V-25 (6).jpeg", "Power Bank images/V-25/V-25 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-25"]
    },
    {
      id: 'v-31-heritage-walnut-leatherette-power-bank-diary-electronics',
      slug: 'v-31-heritage-walnut-leatherette-power-bank-diary',
      productName: "V-31 Heritage Walnut Leatherette Power Bank Diary",
      category: 'Notebooks & Diaries',
      subcategory: "Executive Wireless Charging Power Bank Diary",
      shortDescription: "Classic walnut brown leatherette organizer with built-in 10,000mAh power bank, Qi wireless charging, and pen.",
      longDescription: "Distinguished rich walnut leatherette exterior. Features 10,000mAh battery, Qi wireless charging surface, integrated multi-device cables, A5 6-ring binder, business card organizer, and executive metal ballpoint pen in gift box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Heritage Walnut Brown Leatherette", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-31/V-31 (1).jpeg", "Power Bank images/V-31/V-31 (2).jpeg", "Power Bank images/V-31/V-31 (3).jpeg", "Power Bank images/V-31/V-31 (4).jpeg", "Power Bank images/V-31/V-31 (5).jpeg", "Power Bank images/V-31/V-31 (6).jpeg", "Power Bank images/V-31/V-31 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-31"]
    },
    {
      id: 'v-32-tuscan-chestnut-wireless-power-bank-diary-organizer-electronics',
      slug: 'v-32-tuscan-chestnut-wireless-power-bank-diary-organizer',
      productName: "V-32 Tuscan Chestnut Wireless Power Bank Diary Organizer",
      category: 'Notebooks & Diaries',
      subcategory: "Artisan Wireless Charging Power Bank Portfolio",
      shortDescription: "Warm Tuscan chestnut leatherette diary with integrated 10,000mAh power bank, wireless charger, and luxury pen set.",
      longDescription: "Artisan brown leatherette with precision perimeter stitching. Equipped with 10,000mAh battery, wireless charging transmitter, 3-in-1 built-in output cords, card holder slots, refillable notepad, and matching executive pen in a luxury gift box.",
      material: "Premium Thermo PU Vegan Leatherette + Stainless Steel 6-Ring Binder",
      dimensions: 'Gift Box: 255 x 205 x 45 mm | Diary: 240 x 180 x 35 mm (A5)',
      capacity: '10,000 mAh Li-Polymer | 5W/10W Qi Wireless | 5V/2.4A Wired Output',
      weight: '820 g (Gift Box Set)',
      coloursVariants: ["Tuscan Chestnut Warm Brown", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Built-in 10,000mAh BIS-certified safety lithium-polymer battery",
        "Qi wireless fast charging surface built into front notebook cover",
        "Concealed 3-in-1 charging cables (Type-C, Lightning, Micro-USB)",
        "Refillable 6-ring stainless steel A5 binder with 192 ruled writing pages",
        "Business card organizer, document pocket, pen loop, and magnetic clasp",
        "Includes matching executive metal ballpoint pen in luxury rigid gift box"
      ],
      brandingMethods: ["Laser Engraving on Metal Clasp & Pen", "UV Flatbed Full-Color Digital Print on Cover", "Blind Debossing or Hot Gold/Silver Foil Stamping"],
      customizationOptions: "Custom metallic logo engraving on clasp; full-color custom box sleeve packaging; recipient name personalization.",
      moq: '50 units (tier discounts at 100+ & 500+ units)',
      packaging: "Luxury matte rigid presentation gift box with custom EVA foam insert included.",
      leadTime: '4-6 business days post artwork approval',
      idealFor: ["Executive & Leadership Appreciation Gifting", "Client & Channel Partner Annual Rewards", "New Employee Executive Welcome Kits", "Conferences, Board Meetings & Business Delegations"],
      productImages: ["Power Bank images/V-32/V-32 (1).jpeg", "Power Bank images/V-32/V-32 (2).jpeg", "Power Bank images/V-32/V-32 (3).jpeg", "Power Bank images/V-32/V-32 (4).jpeg", "Power Bank images/V-32/V-32 (5).jpeg", "Power Bank images/V-32/V-32 (6).jpeg", "Power Bank images/V-32/V-32 (8).jpeg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["power bank", "power bank diary", "wireless charger", "electronics", "executive gift", "organizer", "notebook power bank", "v-32"]
    },

    {
      id: 'fast-charging-power-bank-10000mah-electronics',
      slug: 'fast-charging-power-bank-10000mah-electronics',
      productName: '10,000mAh Fast Charging Power Bank',
      category: 'Notebooks & Diaries',
      subcategory: 'BIS-Certified Slim Power Bank',
      shortDescription: 'BIS-certified ultra-slim 10,000mAh dual USB power bank with 22.5W fast charging PD output and LED indicator.',
      longDescription: 'Keep devices powered throughout the workday. Built with high-density lithium-polymer battery cells inside an anodized aluminum shell. Features dual USB-A and Type-C Power Delivery (PD) fast charging.',
      material: 'Anodized Aluminum Alloy / ABS Flame-Retardant Casing',
      dimensions: '138 mm (L) x 68 mm (W) x 15 mm (H)',
      capacity: '10,000 mAh / 22.5W Max Fast Charging Output',
      weight: '220 g',
      coloursVariants: ['Metallic Silver', 'Matte Black', 'Corporate Blue'],
      keyFeatures: [
        'BIS Certified safety protection against over-voltage & short circuit',
        '22.5W Power Delivery (PD) fast charges smartphones to 50% in 30 mins',
        'Dual output: USB-A + Type-C input/output',
        '4-stage LED battery power level indicator'
      ],
      brandingMethods: ['Laser Engraving', 'Full-Color UV Flatbed Print', 'Screen Print'],
      customizationOptions: 'Custom packaging box with company tech branding.',
      moq: '50 units',
      packaging: 'Individual retail box with Type-C charging cable.',
      leadTime: '5-7 business days',
      idealFor: ['Employee Tech Bundles', 'Travel & Sales Team Equipment', 'Executive Milestone Rewards'],
      productImages: ['0005.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['power bank', '10000mah', 'fast charger', 'electronics', 'tech gifts']
    },
    {
      id: 'wireless-charging-pad-electronics',
      slug: 'wireless-charging-pad-electronics',
      productName: 'Wireless Charging Pad',
      category: 'Notebooks & Diaries',
      subcategory: '15W Qi Fast Wireless Charger',
      shortDescription: '15W Qi-certified fast wireless charging pad with aluminum base, non-slip rubber ring, and ambient LED status light.',
      longDescription: 'Declutter workstations with cable-free charging. Simply place any Qi-enabled smartphone or wireless earbuds on the pad for instant 15W fast charging. Features smart thermal control.',
      material: 'Aluminum Alloy Base + Acrylic / Fabric Top Surface',
      dimensions: '100 mm (Dia) x 7 mm (Thickness)',
      capacity: '15W Max Qi Wireless Charging Output',
      weight: '90 g',
      coloursVariants: ['Space Grey Aluminum', 'Matte Black', 'Fabric Grey'],
      keyFeatures: [
        '15W Qi-certified high-speed wireless charging',
        'Ultra-thin 7mm aluminum body for superior heat dissipation',
        'Foreign Object Detection (FOD) auto-shuts off if keys/coins are detected',
        'Soft LED halo breathing light indicator'
      ],
      brandingMethods: ['Laser Engraving on Aluminum', 'UV Print on Acrylic Top'],
      customizationOptions: 'Custom LED ring light color or glowing logo option.',
      moq: '50 units',
      packaging: 'Individual retail box with braided Type-C cable.',
      leadTime: '4-6 business days',
      idealFor: ['Desk Workstation Setup Kits', 'Tech Event Merchandise', 'Executive Office Decor'],
      productImages: ['0008.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['wireless charger', 'qi charger', 'charging pad', 'electronics', 'tech accessory']
    },
    {
      id: 'bluetooth-desktop-speaker-electronics',
      slug: 'bluetooth-desktop-speaker-electronics',
      productName: 'Bluetooth Desktop Speaker',
      category: 'Notebooks & Diaries',
      subcategory: 'Portable Wireless Metal Speaker',
      shortDescription: 'Compact 5W metal housing Bluetooth 5.0 speaker with deep bass radiator, built-in mic for hands-free calls, and 6h battery.',
      longDescription: 'Deliver rich, room-filling sound in a pocket-sized footprint. Heavy metal housing provides acoustic clarity and bass response. Supports Bluetooth 5.0, Micro SD cards, and hands-free call answering.',
      material: 'Machined Aluminum Alloy Casing + Metal Grille',
      dimensions: '70 mm (Dia) x 48 mm (H)',
      capacity: '5W RMS Speaker Driver / 600 mAh Battery (6h Playtime)',
      weight: '210 g',
      coloursVariants: ['Gunmetal Black', 'Silver Metallic', 'Rose Gold'],
      keyFeatures: [
        '5W RMS driver with passive bass radiator',
        'Bluetooth 5.0 with 10m wireless range',
        'Built-in noise-cancelling microphone for conference calls',
        'Heavy non-vibration rubber base pad'
      ],
      brandingMethods: ['Laser Engraving on Metal Body', 'Screen Print'],
      customizationOptions: 'Custom voice prompt on power up.',
      moq: '50 units',
      packaging: 'Clear display gift box.',
      leadTime: '5-7 business days',
      idealFor: ['Annual Day Giveaways', 'Employee Engagement Rewards', 'Client Tech Gifts'],
      productImages: ['0011.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['bluetooth speaker', 'wireless speaker', 'desktop speaker', 'electronics']
    },
    {
      id: 'multi-port-usb-hub-electronics',
      slug: 'multi-port-usb-hub-electronics',
      productName: 'Multi-Port USB 3.0 Hub',
      category: 'Notebooks & Diaries',
      subcategory: '4-in-1 Aluminum USB-C Hub',
      shortDescription: '4-in-1 aluminum USB-C hub expanding one port into 4x USB 3.0 5Gbps high-speed ports for laptops and MacBooks.',
      longDescription: 'Essential connectivity tool for modern laptops with limited ports. Converts a single Type-C or USB-A port into four high-speed USB 3.0 ports for mouse, keyboard, flash drives, and external hard drives.',
      material: 'Machined Aluminum Shell + Reinforced Braided Cable',
      dimensions: '95 mm (L) x 25 mm (W) x 10 mm (H)',
      capacity: '5Gbps Data Transfer Speed across 4 Ports',
      weight: '55 g',
      coloursVariants: ['Space Grey', 'Silver Metallic'],
      keyFeatures: [
        'Ultra-fast 5Gbps USB 3.0 transfer speed (10x faster than USB 2.0)',
        'Plug and play — no software drivers required',
        'Compact pocket size with heat-dissipating aluminum shell',
        'Compatible with Windows, macOS, Linux, & Android'
      ],
      brandingMethods: ['Laser Engraving', 'Pad Print'],
      customizationOptions: 'Custom branded cable tie strap.',
      moq: '50 units',
      packaging: 'Blister packaging / retail box.',
      leadTime: '4-6 business days',
      idealFor: ['IT Infrastructure & Workstation Supply', 'Remote Worker Accessories', 'Hackathon Kits'],
      productImages: ['0014.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['usb hub', 'type c hub', 'laptop adapter', 'electronics', 'tech gear']
    },

    // =========================================================================
    // 7. MOBILE ACCESSORIES & KEYCHAINS
    // =========================================================================
    {
      id: 'aluminum-desktop-phone-stand-mobile-stands',
      slug: 'aluminum-desktop-phone-stand-mobile-stands',
      productName: 'Aluminum Desktop Phone Stand',
      category: 'Mobile Accessories & Keychains',
      subcategory: 'Foldable Ergonomic Mobile Holder',
      shortDescription: 'Foldable dual-axis adjustable aluminum stand for smartphones and tablets with anti-scratch silicone padding.',
      longDescription: 'Promote ergonomic posture during video calls and daily desk work. Fully foldable flat for travel, featuring 270-degree rotation angles and anti-slip silicone cushions to hold phones securely.',
      material: 'Anodized Aluminum Alloy + Non-Slip Silicone Pads',
      dimensions: '100 mm (H) x 72 mm (W) x 85 mm (D Folded)',
      capacity: 'Holds smartphones & tablets up to 11 inches',
      weight: '140 g',
      coloursVariants: ['Silver Metallic', 'Space Grey', 'Matte Black'],
      keyFeatures: [
        'Dual 270-degree rotation axes for customizable viewing angles',
        'Foldable compact flat design fits easily in laptop bags',
        'Reserved charging cable cutout port for tidy desk charging',
        'Non-slip silicone padding protects device from scratches'
      ],
      brandingMethods: ['Precision Laser Engraving', 'Screen Print'],
      customizationOptions: 'Laser engraved company logo on front plate.',
      moq: '50 units',
      packaging: 'Individual white box.',
      leadTime: '3-5 business days',
      idealFor: ['Desktop Workstation Setup', 'Zoom/Teams Call Desk Accessories', 'Event Giveaways'],
      productImages: ['0018.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['phone stand', 'mobile holder', 'desktop stand', 'mobile accessories', 'keychains']
    },
    {
      id: 'engraved-leather-keychain-mobile-stands',
      slug: 'engraved-leather-keychain-mobile-stands',
      productName: 'Engraved Leather & Metal Keychain',
      category: 'Mobile Accessories & Keychains',
      subcategory: 'Executive Leather Ring Holder',
      shortDescription: 'Premium zinc alloy metal keychain with braided PU leather strap and laser-engraved metallic plate.',
      longDescription: 'High-utility everyday carry gift. Combines a heavy polished metal alloy keyring with stitched PU leather for holding car and office keys with executive elegance.',
      material: 'Zinc Alloy Chrome + Braided PU Leather Strap',
      dimensions: '120 mm (L) x 25 mm (W)',
      capacity: 'Holds up to 8 keys',
      weight: '45 g',
      coloursVariants: ['Black Leather / Chrome Metal', 'Brown Leather / Antique Brass', 'Navy / Gunmetal'],
      keyFeatures: [
        'Heavy-gauge spring keyring clip',
        'Braided wear-resistant PU leather strap',
        'Metallic plate optimized for deep laser engraving',
        'Rust-proof & tarnish-resistant alloy finish'
      ],
      brandingMethods: ['Laser Engraving', 'Leather Debossing'],
      customizationOptions: 'Dual-side laser engraving (Logo front + Phone/Name back).',
      moq: '50 units',
      packaging: 'Black velvet pouch / gift box.',
      leadTime: '3-5 business days',
      idealFor: ['Real Estate & Automotive Client Gifts', 'Dealer Network Tokens', 'Event Giveaways'],
      productImages: ['0020.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['leather keychain', 'metal keychain', 'keyring', 'keychains', 'mobile accessories']
    },
    {
      id: 'multi-tool-keyring-mobile-stands',
      slug: 'multi-tool-keyring-mobile-stands',
      productName: 'Multi-Tool Keyring',
      category: 'Mobile Accessories & Keychains',
      subcategory: '6-in-1 Stainless Steel Pocket Tool',
      shortDescription: 'Compact 6-in-1 stainless steel pocket tool featuring bottle opener, flathead/Phillips screwdrivers, ruler, and keyring.',
      longDescription: 'A versatile pocket tool for everyday quick fixes. Engineered from heat-treated 420 stainless steel into a key shape that attaches right onto existing keyrings.',
      material: 'Heat-Treated 420 Stainless Steel',
      dimensions: '70 mm (L) x 28 mm (W) x 3 mm (Thickness)',
      capacity: '6 Integrated Quick Tools',
      weight: '28 g',
      coloursVariants: ['Matte Black Steel', 'Brushed Silver Steel'],
      keyFeatures: [
        '6 functions: Bottle opener, flat driver, Phillips driver, ruler, wire stripper, wrench',
        'Heavy-duty 420 stainless steel construction will not bend',
        'Compact key silhouette clips directly onto standard keyrings',
        'TSA airport checkpoint safe'
      ],
      brandingMethods: ['Precision Laser Engraving'],
      customizationOptions: 'Custom card backing with brand story.',
      moq: '50 units',
      packaging: 'Individual backing card in polybag.',
      leadTime: '3-5 business days',
      idealFor: ['Industrial & Construction Company Gifts', 'Logistics & Field Force Giveaways', 'Outdoor Merchandise'],
      productImages: ['0022.jpeg'],
      brandingImages: [],
      packagingImages: [],
      tags: ['multi tool', 'keychain tool', 'bottle opener', 'keychains']
    },

    // =========================================================================
    // 8. FESTIVE & DIWALI GIFT SETS (DW SERIES)
    // =========================================================================
    {
      id: 'dw-001-eco-delight-festive-gift-set',
      slug: 'dw-001-eco-delight-festive-gift-set',
      productName: 'DW-001 Eco Delight Festive Gift Set',
      category: 'Corporate Gifting',
      subcategory: 'Festive Hampers & Drinkware',
      shortDescription: 'Premium festive hamper featuring a vacuum-insulated bottle, artisanal date bites 3-flavour pack, and an eco-friendly travel coffee cup.',
      longDescription: 'A thoughtful celebration package combining daily hydration, eco-conscious coffee commuting, and healthy artisanal treats. Elegantly housed in a custom festive gold-accented presentation box.',
      material: 'Stainless Steel + Wheat Straw Bio-Composite + Food Grade Packaging',
      dimensions: 'Gift Box: 320 mm x 240 mm x 95 mm',
      capacity: '500ml Flask + Date Bites Pack + 350ml Eco Cup',
      weight: '850 g',
      coloursVariants: ['Festive Gold & Navy Box', 'Matte Black Edition'],
      keyFeatures: [
        'Insulated Stainless Steel Temperature Bottle',
        'Date Bites Assorted Pack (3 Gourmet Flavours)',
        'Eco-Friendly Wheat Straw Coffee Cup with Grip',
        'Festive Presentation Box with Custom Branding Sleeve'
      ],
      brandingMethods: ['Laser Engraving on Bottle', 'Screen Print on Box', 'Foil Stamping'],
      customizationOptions: 'Custom logo engraving on bottle and bespoke festival greeting card included.',
      moq: '50 units',
      packaging: 'Luxury rigid presentation box with gold foil stamping.',
      leadTime: '3-5 business days',
      idealFor: ['Diwali Corporate Gifting', 'Client Appreciation', 'Employee Festive Rewards'],
      productImages: ['DW-001.jpeg', 'DW-001.1.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['festive', 'diwali', 'dw-001', 'hamper', 'gift set', 'dry fruits', 'bottle']
    },
    {
      id: 'dw-002-royal-treat-diwali-celebration-set',
      slug: 'dw-002-royal-treat-diwali-celebration-set',
      productName: 'DW-002 Royal Treat Diwali Celebration Set',
      category: 'Corporate Gifting',
      subcategory: 'Gourmet Dry Fruits & Festive Ambient Set',
      shortDescription: 'Luxurious Diwali gift set combining slow-roasted cashews, wholesome trail & protein mixes, an automatic glass mixing cup, and an aromatic glass candle.',
      longDescription: 'Curated for memorable festive celebrations, featuring gourmet dry fruits and nuts paired with an electric self-stirring mixing mug and a soothing scented glass candle.',
      material: 'Borosilicate Glass + Food-Grade Stainless Steel + Natural Soy Wax',
      dimensions: 'Gift Box: 340 mm x 260 mm x 100 mm',
      capacity: '3x 100g Treat Jars + 400ml Mixing Cup + 120g Candle',
      weight: '1150 g',
      coloursVariants: ['Royal Maroon & Gold', 'Midnight Navy'],
      keyFeatures: [
        'Premium Roasted Cashews, Trail Mix & Protein Mix',
        'Electric Self-Stirring Glass Mixing Cup with Wooden Lid',
        'Handcrafted Scented Glass Candle with Decorative Lid',
        'Hardbound Festive Gift Chest with Velvet Tray'
      ],
      brandingMethods: ['Laser Engraving on Wooden Lid', 'UV Print on Box', 'Gold Foil'],
      customizationOptions: 'Custom branded ribbon, corporate greeting letter, and personalized logo engraving.',
      moq: '50 units',
      packaging: 'Luxury hardbound festive keepsake box.',
      leadTime: '3-5 business days',
      idealFor: ['Executive Diwali Gifting', 'VIP Partner Hampers', 'Festive Celebration Kits'],
      productImages: ['DW-002.jpeg', 'DW-002.1.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['festive', 'diwali', 'dw-002', 'dry fruits', 'cashews', 'mixing cup', 'candle']
    },
    {
      id: 'dw-003-diamond-glow-festive-gift-set',
      slug: 'dw-003-diamond-glow-festive-gift-set',
      productName: 'DW-003 Diamond Glow Festive Gift Set',
      category: 'Corporate Gifting',
      subcategory: 'Dry Fruits, Ambient Lamp & Mixing Cup Set',
      shortDescription: 'Opulent celebration hamper equipped with oil-free roasted dry fruits, self-stirring mixing cup, luminous touch diamond crystal lamp, and an artisan glass candle.',
      longDescription: 'Bring warmth and illumination to Diwali with an exquisite acrylic diamond crystal touch lamp, aromatic candle, self-stirring beverage cup, and nutritious roasted dry fruits.',
      material: 'Faceted Crystal Acrylic + Glass + Food Grade Ingredients',
      dimensions: 'Gift Box: 360 mm x 280 mm x 105 mm',
      capacity: '3x Healthy Treat Jars + Diamond Lamp + Mixing Cup + Scented Candle',
      weight: '1300 g',
      coloursVariants: ['Festive Deep Emerald', 'Royal Sapphire Gold'],
      keyFeatures: [
        'Roasted Cashews (No Oil), Trail Mix & Protein Mix',
        'Rechargeable Touch Diamond Crystal Ambient Lamp (3 Light Modes)',
        'Automatic Glass Mixing Mug with Motorized Base',
        'Artisanal Fragrance Glass Candle'
      ],
      brandingMethods: ['UV Full-Color Print', 'Laser Etch on Lamp Base', 'Box Foil Emboss'],
      customizationOptions: 'Company logo on crystal lamp base and customized packaging wrap.',
      moq: '50 units',
      packaging: 'Premium magnetic-closure festive hamper box.',
      leadTime: '3-5 business days',
      idealFor: ['Corporate Diwali Hampers', 'Leadership Recognition', 'Dealer Incentives'],
      productImages: ['DW-003.jpeg', 'DW-003.1.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['festive', 'diwali', 'dw-003', 'crystal lamp', 'dry fruits', 'mixing cup', 'candle']
    },
    {
      id: 'dw-004-ambient-sound-festive-hamper',
      slug: 'dw-004-ambient-sound-festive-hamper',
      productName: 'DW-004 Ambient Sound Festive Hamper',
      category: 'Corporate Gifting',
      subcategory: 'Tech Audio, Ceramic Lamp & Gourmet Treats',
      shortDescription: 'Modern festive gift set combining artisanal paan shots, daily health seed mix, Quantron wireless Bluetooth speaker, and a warm ceramic table lamp.',
      longDescription: 'A balanced sensory celebration blending soulful music, soft ambient illumination, and delicious traditional after-meal refreshments.',
      material: 'Ceramic + ABS Bluetooth Speaker + Food Grade Treats',
      dimensions: 'Gift Box: 330 mm x 250 mm x 110 mm',
      capacity: 'Paan Shots 50g + Daily Health Mix 100g + Speaker + Ceramic Lamp',
      weight: '980 g',
      coloursVariants: ['Warm Terracotta & Gold', 'Midnight Obsidian'],
      keyFeatures: [
        'Quantron High-Bass Bluetooth 5.0 Wireless Speaker',
        'Minimalist Ceramic Table Lamp with Warm Dimmable LED',
        'Authentic Paan Shots (50g) & Daily Health Mix (100g)',
        'Deluxe Festival Gift Box with Silk Ribbon Accent'
      ],
      brandingMethods: ['Laser Engraving on Speaker', 'Pad Print on Ceramic Lamp', 'Foil Stamping'],
      customizationOptions: 'Brand name engraved on speaker grill and bespoke festive greeting insert.',
      moq: '50 units',
      packaging: 'Rigid protective festive gift box.',
      leadTime: '3-5 business days',
      idealFor: ['Modern Corporate Festive Gifting', 'Tech Company Employee Packs', 'Client Gestures'],
      productImages: ['DW-004.jpeg', 'DW-004.1.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['festive', 'diwali', 'dw-004', 'speaker', 'lamp', 'ceramic lamp', 'paan shots']
    },
    {
      id: 'dw-006-grand-festive-executive-kit',
      slug: 'dw-006-grand-festive-executive-kit',
      productName: 'DW-006 Grand Festive Executive Kit',
      category: 'Corporate Gifting',
      subcategory: 'Executive Tech, Wellness & Dry Fruits',
      shortDescription: 'Comprehensive 6-in-1 corporate festive hamper packed with premium cashews, spicy trail mix, LED reading lamp, TWS earbuds, portable humidifier, and insulated flask.',
      longDescription: 'The ultimate all-inclusive corporate festive hamper designed for top executives and valued partners, integrating daily productivity tools, smart wellness devices, and gourmet nuts.',
      material: 'Stainless Steel + Matte ABS + Borosilicate + Food Grade Nuts',
      dimensions: 'Gift Box: 400 mm x 300 mm x 110 mm',
      capacity: '6 Premium Items in Custom Cut Foam Cavities',
      weight: '1650 g',
      coloursVariants: ['Executive Navy & Gold', 'Signature Matte Black'],
      keyFeatures: [
        'Vacuum Insulated Thermal Flask & Ultrasonic Desktop Humidifier',
        'True Wireless Stereo (TWS) Earbuds with Digital Display',
        'Flexible Touch-Control LED Reading Lamp',
        'Premium Whole Cashews & Chatpata Masala Trail Mix'
      ],
      brandingMethods: ['Laser Engraving on Flask & Earbuds', 'UV Color Print', 'Foil Stamping'],
      customizationOptions: 'Individual name personalization on flask; custom branded exterior box sleeve.',
      moq: '50 units',
      packaging: 'Luxury oversized rigid chest with high-density EVA custom foam insert.',
      leadTime: '4-6 business days',
      idealFor: ['Executive Leadership Gifts', 'Key Account Diwali Hampers', 'Annual Corporate Awards'],
      productImages: ['DW-006.jpg', 'DW-006.1.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['festive', 'diwali', 'dw-006', 'executive hamper', 'tws', 'flask', 'humidifier', 'cashews']
    },
    {
      id: 'dw-007-tech-and-wellness-festive-hamper',
      slug: 'dw-007-tech-and-wellness-festive-hamper',
      productName: 'DW-007 Tech & Wellness Festive Hamper',
      category: 'Corporate Gifting',
      subcategory: 'Smart Gadgets, Hydration & Dry Fruits',
      shortDescription: 'Sophisticated executive gift combination featuring a touch LED lamp, desktop humidifier, insulated thermal bottle, noise-canceling earbuds, and gourmet dry fruits.',
      longDescription: 'A modern corporate gifting solution balancing health, ambience, productivity, and celebration with high-utility branded essentials.',
      material: 'Double-Wall Stainless Steel + Matte Polymer + Natural Dry Fruits',
      dimensions: 'Gift Box: 380 mm x 280 mm x 100 mm',
      capacity: '500ml Bottle + Humidifier + TWS + Lamp + Dry Fruits',
      weight: '1400 g',
      coloursVariants: ['Deep Royal Blue', 'Charcoal Gunmetal'],
      keyFeatures: [
        'Touch Dimmable LED Reading Lamp',
        'Compact Ultrasonic Desk Humidifier with USB Power',
        'Double-Wall Vacuum Insulated Water Bottle (500ml)',
        'Wireless Bluetooth Earbuds & Handpicked Grade-A Dry Fruits'
      ],
      brandingMethods: ['Laser Engraving', 'Digital UV Print', 'Screen Print'],
      customizationOptions: 'Precision logo engraving on bottle body and humidifier cap.',
      moq: '50 units',
      packaging: 'Premium presentation box with foam lining.',
      leadTime: '3-5 business days',
      idealFor: ['IT & Enterprise Client Gifting', 'Senior Management Diwali Packs', 'Festive Welcomes'],
      productImages: ['DW-007.jpeg', 'DW-007.1.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['festive', 'diwali', 'dw-007', 'tws', 'humidifier', 'lamp', 'bottle', 'dry fruits']
    },
    {
      id: 'dw-009-premium-symphony-diwali-hamper',
      slug: 'dw-009-premium-symphony-diwali-hamper',
      productName: 'DW-009 Premium Symphony Diwali Hamper',
      category: 'Corporate Gifting',
      subcategory: 'Sound, Scent, Drinkware & Dry Fruits',
      shortDescription: 'Deluxe 6-piece festival celebration package uniting rich dry fruits, wireless audio speaker, TWS earbuds, borosilicate bottle with wooden lid, scented candle, and insulated flask.',
      longDescription: 'An opulent 6-in-1 corporate festive hamper that delights every sense: gourmet nuts for taste, Bluetooth speaker and earbuds for sound, scented candle for aroma, and twin drinkware for daily use.',
      material: 'Borosilicate Glass + Stainless Steel + Soy Wax + ABS Audio',
      dimensions: 'Gift Box: 420 mm x 320 mm x 115 mm',
      capacity: '6 Deluxe Corporate Celebration Pieces',
      weight: '1750 g',
      coloursVariants: ['Imperial Gold & Navy', 'Burgundy Festive Deluxe'],
      keyFeatures: [
        'Wireless Bluetooth Audio Speaker & TWS Earbuds',
        'Borosilicate Glass Bottle with Bamboo Lid & Insulated Flask',
        'Handcrafted Soy Scented Candle in Glass Jar',
        'Premium Grade-A Dry Fruits Assortment'
      ],
      brandingMethods: ['Multi-Item Laser Engraving', 'Gold Foil Box Stamping', 'UV Full Color'],
      customizationOptions: 'Custom laser engraved logo across all hardware items and personalized gift card.',
      moq: '50 units',
      packaging: 'Oversized luxury rigid chest box with satin lining.',
      leadTime: '4-6 business days',
      idealFor: ['Chairman & MD Diwali Gifting', 'Flagship Corporate Hampers', 'Tier-1 Partner Gifts'],
      productImages: ['DW-009.jpeg', 'DW-009.1.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['festive', 'diwali', 'dw-009', 'symphony hamper', 'speaker', 'flask', 'candle', 'dry fruits']
    },
    {
      id: 'dw-010-imperial-festive-celebration-hamper',
      slug: 'dw-010-imperial-festive-celebration-hamper',
      productName: 'DW-010 Imperial Festive Celebration Hamper',
      category: 'Corporate Gifting',
      subcategory: 'Quad Dry Fruits, Power & Audio Luxe Hamper',
      shortDescription: 'Exquisite corporate Diwali hamper with 4 individual jars of premium dry fruits, 10,000mAh power bank, designer glass fragrance bottle, Bluetooth speaker, and table lamp.',
      longDescription: 'Distinguished and generous, DW-010 presents 4 individual luxury jars of dry fruits and nuts along with modern tech power, audio, and soothing home fragrances.',
      material: 'Glass Jars + Metallic ABS + Heavy-Gauge Rigid Board',
      dimensions: 'Gift Box: 420 mm x 340 mm x 110 mm',
      capacity: '4x Dry Fruit Jars (Cashew, Almond, Pista, Raisin) + 10k Power Bank + Speaker + Lamp + Diffuser',
      weight: '1900 g',
      coloursVariants: ['Royal Emperor Navy & Gold', 'Emerald & Champagne Gold'],
      keyFeatures: [
        '4 Designer Jars of Handpicked Gourmet Dry Fruits',
        '10,000mAh Fast Charging Dual USB Power Bank',
        'Glass Fragrance Diffuser Bottle with Decorative Cover',
        'Wireless Bluetooth Speaker & Rechargeable Table Lamp'
      ],
      brandingMethods: ['Laser Engraving on Power Bank & Speaker', 'Custom Jar Labels', 'Foil Stamping'],
      customizationOptions: 'Custom branded jar seals, engraved power bank, and gold foil embossed outer box.',
      moq: '50 units',
      packaging: 'Grand Master presentation chest with separate compartments.',
      leadTime: '4-6 business days',
      idealFor: ['High-Value Client Relationships', 'Board of Directors Gifting', 'Premium Corporate Hampers'],
      productImages: ['DW-010.jpeg', 'DW-010.1.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['festive', 'diwali', 'dw-010', 'imperial hamper', '4 jars dry fruits', 'power bank', 'speaker']
    },
    {
      id: 'dw-011-crystal-radiance-diwali-gift-set',
      slug: 'dw-011-crystal-radiance-diwali-gift-set',
      productName: 'DW-011 Crystal Radiance Diwali Gift Set',
      category: 'Corporate Gifting',
      subcategory: 'Artisan Sweets, Tech Accessories & Crystal Lamp',
      shortDescription: 'Vibrant festive collection featuring daily nut sweet box, roasted cashews, diamond crystal lamp, wireless neckband earphones, Zebronics power bank, and sleek glass bottle.',
      longDescription: 'Illuminate your festive gestures with a multi-faceted diamond touch lamp, premium Zebronics charging power bank, wireless neckband, pure glass water bottle, and authentic confection sweets.',
      material: 'Faceted Acrylic + Borosilicate Glass + Branded Tech Hardware',
      dimensions: 'Gift Box: 390 mm x 290 mm x 100 mm',
      capacity: 'Sweet Box + Cashews + Lamp + Neckband + Power Bank + Glass Bottle',
      weight: '1550 g',
      coloursVariants: ['Festive Deep Saffron', 'Royal Gold Accent'],
      keyFeatures: [
        'Daily Nut Gourmet Festive Confection Sweet Box',
        'Premium Grade Crunchy Roasted Cashew Nuts',
        'Multi-Faceted Diamond Crystal Touch Table Lamp',
        'Zebronics High-Capacity Power Bank & Magnetic Wireless Neckband'
      ],
      brandingMethods: ['Laser Engraving on Power Bank & Lid', 'UV Print', 'Foil Emboss'],
      customizationOptions: 'Company logo on power bank, glass bottle lid, and greeting card insert.',
      moq: '50 units',
      packaging: 'Deluxe festive gift box with velvet finish cavities.',
      leadTime: '3-5 business days',
      idealFor: ['Corporate Diwali Distribution', 'Distributor Appreciation Hampers', 'Team Festivities'],
      productImages: ['DW-011.jpeg', 'DW-011.1.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['festive', 'diwali', 'dw-011', 'crystal lamp', 'sweets', 'zebronics', 'power bank', 'neckband']
    },
    {
      id: 'dw-012-heritage-melody-festive-luxury-hamper',
      slug: 'dw-012-heritage-melody-festive-luxury-hamper',
      productName: 'DW-012 Heritage Melody Festive Luxury Hamper',
      category: 'Corporate Gifting',
      subcategory: 'Saregama Carvaan Mini, Audio, Power & Drinkware',
      shortDescription: 'The ultimate flagship corporate Diwali hamper spotlighting the Saregama Carvaan Mini (Hindi Retro), Borosil Hike tumbler, Quantron BT speaker, MagSafe power bank, diamond lamp, and sweets.',
      longDescription: 'The pinnacle of prestige gifting: features the iconic Saregama Carvaan Mini with 351 preloaded retro Hindi classics, paired with Borosil Hike thermal tumbler, MagSafe wireless charger, Quantron speaker, crystal lamp, and gourmet sweets.',
      material: 'Branded Retail Electronics + Stainless Steel + Acrylic + Confections',
      dimensions: 'Gift Box: 440 mm x 340 mm x 120 mm',
      capacity: '7 Crown Prestige Corporate Items',
      weight: '2200 g',
      coloursVariants: ['Imperial Royal Blue Velvet', 'Grand Gold Edition'],
      keyFeatures: [
        'Saregama Carvaan Mini (351 Preloaded Retro Hindi Hits, FM/BT/Aux)',
        'Borosil Hike Double-Wall Insulated Tumbler',
        'Quantron High-Bass Speaker & MagSafe Wireless Power Bank',
        'Diamond Crystal Ambient Lamp + Daily Nuts Sweet Box & Roasted Cashews'
      ],
      brandingMethods: ['Precision Laser Engraving on Tumbler & Power Bank', 'Metallic Foil Stamping'],
      customizationOptions: 'Bespoke corporate co-branding on packaging, greeting card, and drinkware.',
      moq: '50 units',
      packaging: 'Grand Master luxury chest with magnetic closure and padded velvet interior.',
      leadTime: '4-7 business days',
      idealFor: ['Executive Chairman Hampers', 'C-Suite & Key Stakeholder Diwali Gifts', 'Milestone Celebrations'],
      productImages: ['DW-012.jpeg', 'DW-012.1.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['festive', 'diwali', 'dw-012', 'carvaan mini', 'saregama', 'borosil', 'magsafe', 'luxury hamper']
    },
    {
      id: 'dw-013-executive-power-festive-gift-set',
      slug: 'dw-013-executive-power-festive-gift-set',
      productName: 'DW-013 Executive Power Festive Gift Set',
      category: 'Corporate Gifting',
      subcategory: 'Smart Mug, Tech Power, Audio & Gourmet Nuts',
      shortDescription: 'Dynamic 6-in-1 corporate festive gift set featuring healthy protein mix, premium cashew nuts, glass self-stirring mug, Bluetooth speaker, power bank, and 500ml insulated flask.',
      longDescription: 'Engineered for today\'s dynamic professionals, providing essential mobile power, wireless audio, motorized drink preparation, thermal beverage retention, and wholesome festive treats.',
      material: '304 Stainless Steel + Tempered Glass + High-Density ABS',
      dimensions: 'Gift Box: 400 mm x 300 mm x 105 mm',
      capacity: '6 High-Utility Modern Corporate Items',
      weight: '1600 g',
      coloursVariants: ['Midnight Onyx & Gold', 'Deep Corporate Blue'],
      keyFeatures: [
        'Glass Electric Self-Stirring Mug with Ergonomic Wooden Handle',
        'Slim Dual-Output High-Speed Power Bank & Bluetooth Speaker',
        '500ml Vacuum Insulated Temperature Flask',
        'Crunchy Roasted Cashews & Multi-Grain Healthy Protein Mix'
      ],
      brandingMethods: ['Laser Engraving on Flask, Mug & Power Bank', 'UV Color Print'],
      customizationOptions: 'Comprehensive brand logo alignment across all hardware and custom presentation sleeve.',
      moq: '50 units',
      packaging: 'Sturdy executive presentation hamper box with die-cut foam support.',
      leadTime: '3-5 business days',
      idealFor: ['Tech Sector Diwali Gifts', 'Managerial Recognition', 'Partner & Dealer Hampers'],
      productImages: ['DW-013.jpeg', 'DW-013.1.png'],
      brandingImages: [],
      packagingImages: [],
      tags: ['festive', 'diwali', 'dw-013', 'self stirring mug', 'power bank', 'speaker', 'flask', 'cashews']
    }
,
    // =========================================================================
    // V-501 Sapphire Blue Executive Leatherette Diary
    // =========================================================================
    {
      id: "v-501-sapphire-blue-executive-leatherette-diary-notebooks-pens",
      slug: "v-501-sapphire-blue-executive-leatherette-diary",
      productName: "V-501 Sapphire Blue Executive Leatherette Diary",
      category: "Notebooks & Diaries",
      subcategory: "Premium Textured Leatherette Diaries",
      shortDescription: "Royal sapphire blue fine-ribbed leatherette diary with magnetic flap closure, sleek gold accent clip, and 192 ruled pages.",
      longDescription: "Crafted from premium thermo-sensitive PU vegan leatherette in royal sapphire blue with vertical fine-ribbed grain. Features a secure magnetic flap closure enhanced with a gold accent metal bar, matching silk ribbon bookmark, and 192 ruled pages of 80 GSM natural shade paper. Designed for executive note-taking, annual planning, and corporate branding.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Natural Shade Paper",
      dimensions: "A5 Size: 215 x 148 x 20 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + 2027 Calendar Planner",
      weight: "380 g",
      coloursVariants: ["Royal Sapphire Blue with Gold Accent", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Vertical fine-ribbed textured vegan leatherette cover",
        "Magnetic flap closure with polished gold accent metal clip",
        "192 ruled pages on premium 80 GSM bleed-resistant ivory paper",
        "Integrated satin ribbon bookmark and pen loop holder",
        "Undated daily ruled layout with personal directory & monthly planner",
        "Includes luxury presentation box for corporate gifting"
],
      brandingMethods: ["Blind Debossing", "Hot Gold Foil Stamping", "UV Full-Color Printing", "Laser Engraving on Metal Clasp"],
      customizationOptions: "Debossed company logo on front cover; customized front flyleaf with corporate profile; hot foil gold lettering; personalized individual names.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Leatherite Diaries Images/V-501/01_main.jpg", "Leatherite Diaries Images/V-501/02_texture.jpg", "Leatherite Diaries Images/V-501/03_closure.jpg", "Leatherite Diaries Images/V-501/04_deboss.jpg", "Leatherite Diaries Images/V-501/05_back.jpg", "Leatherite Diaries Images/V-501/06_open.jpg", "Leatherite Diaries Images/V-501/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-501", "diary", "notebook", "leatherette", "sapphire blue", "gold clasp", "executive journal"]
    },
    // =========================================================================
    // V-503 Saddle Tan Leatherette Executive Organizer Diary
    // =========================================================================
    {
      id: "v-503-saddle-tan-leatherette-executive-organizer-diary-notebooks-pens",
      slug: "v-503-saddle-tan-leatherette-executive-organizer-diary",
      productName: "V-503 Saddle Tan Leatherette Executive Organizer Diary",
      category: "Notebooks & Diaries",
      subcategory: "Hardbound Stitched Leatherette Diaries",
      shortDescription: "Rich saddle tan leatherette notebook featuring an authentic stitched debossed executive badge and Smyth-sewn binding.",
      longDescription: "A classic executive journal crafted from warm saddle tan leatherette with perimeter saddle stitching. Highlighted by a center-stitched debossed executive leather badge (\"Executive Diary - Plan a Year\"). Smyth-sewn lay-flat binding allows effortless writing across all 192 ruled ivory pages. Includes year-at-a-glance planner, international dial codes, and satin bookmark.",
      material: "Saddle Tan PU Vegan Leatherette + 80 GSM Woodfree Ivory Paper",
      dimensions: "A5 Size: 215 x 150 x 20 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner",
      weight: "390 g",
      coloursVariants: ["Saddle Tan Brown", "Vintage Mahogany", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Classic saddle tan leatherette with reinforced perimeter stitching",
        "Stitched executive leatherette center badge for distinctive debossing",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 flat writing",
        "192 ruled pages with date headers and subject lines",
        "Year planner, calendar pages, and international dialing reference",
        "Durable matching brown bookmark ribbon"
],
      brandingMethods: ["Blind Debossing on Cover Badge", "Gold/Silver Foil Stamping", "Screen Printing", "Custom Insert Pages"],
      customizationOptions: "Company logo debossed inside center badge; custom multi-page full-color inserts for corporate achievements; personalized gift box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Leatherite Diaries Images/V-503/01_main.jpg", "Leatherite Diaries Images/V-503/02_texture.jpg", "Leatherite Diaries Images/V-503/03_closure.jpg", "Leatherite Diaries Images/V-503/04_deboss.jpg", "Leatherite Diaries Images/V-503/05_back.jpg", "Leatherite Diaries Images/V-503/06_open.jpg", "Leatherite Diaries Images/V-503/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-503", "diary", "notebook", "leatherette", "saddle tan", "executive diary", "annual planner"]
    },
    // =========================================================================
    // V-505 Honey Amber & Espresso Tri-Tone Geometric Diary
    // =========================================================================
    {
      id: "v-505-honey-amber-and-espresso-tri-tone-geometric-diary-notebooks-pens",
      slug: "v-505-honey-amber-and-espresso-tri-tone-geometric-diary",
      productName: "V-505 Honey Amber & Espresso Tri-Tone Geometric Diary",
      category: "Notebooks & Diaries",
      subcategory: "Designer Colorblock Executive Diaries",
      shortDescription: "Architectural tri-tone colorblocked diary in honey amber, espresso, and midnight black with a gunmetal magnetic clasp.",
      longDescription: "Contemporary geometric design combining three complementary shades of premium leatherette: honey amber, dark espresso, and deep midnight black. Secured by an asymmetric angled magnetic flap finished with a brushed gunmetal metallic closure bar. Features 192 ruled ivory pages with calendar headers and 2027 debossed date panel.",
      material: "Multi-Panel Thermo PU Vegan Leatherette + 80 GSM Ivory Paper",
      dimensions: "A5 Size: 220 x 150 x 22 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Year Planner",
      weight: "410 g",
      coloursVariants: ["Honey Amber / Espresso / Black Tri-Tone", "Bespoke Color Combinations on Bulk Orders"],
      keyFeatures: [
        "Artisan three-tone colorblocked geometric cover construction",
        "Asymmetrical magnetic flap with gunmetal accent clip",
        "192 ruled writing pages on smooth 80 GSM acid-free ivory sheets",
        "Built-in pen loop and business card inner slot",
        "Subtle blind debossed 2027 year header",
        "Lay-flat binding with contrasting silk bookmark ribbon"
],
      brandingMethods: ["Laser Engraving on Gunmetal Clasp", "Blind Debossing on Amber Section", "Gold Foil Stamping"],
      customizationOptions: "Corporate logo laser engraved on metal clasp bar; debossed logo on upper amber panel; custom box packaging.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Leatherite Diaries Images/V-505/01_main.jpg", "Leatherite Diaries Images/V-505/02_texture.jpg", "Leatherite Diaries Images/V-505/03_closure.jpg", "Leatherite Diaries Images/V-505/04_deboss.jpg", "Leatherite Diaries Images/V-505/05_back.jpg", "Leatherite Diaries Images/V-505/06_open.jpg", "Leatherite Diaries Images/V-505/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-505", "diary", "notebook", "tri-tone", "honey amber", "espresso", "magnetic clasp"]
    },
    // =========================================================================
    // V-506 Sand Beige & Charcoal Tri-Tone Geometric Diary
    // =========================================================================
    {
      id: "v-506-sand-beige-and-charcoal-tri-tone-geometric-diary-notebooks-pens",
      slug: "v-506-sand-beige-and-charcoal-tri-tone-geometric-diary",
      productName: "V-506 Sand Beige & Charcoal Tri-Tone Geometric Diary",
      category: "Notebooks & Diaries",
      subcategory: "Designer Colorblock Executive Diaries",
      shortDescription: "Modern tri-tone palette of sand beige, charcoal grey, and matte black with a brushed silver magnetic clasp.",
      longDescription: "Minimalist European elegance rendered in soft sand beige, charcoal grey, and midnight black. Features precision diagonal paneled stitching, an asymmetric magnetic wrap closure with a sleek brushed silver metal clip, and 192 ruled bleed-proof ivory writing pages. Perfect for high-profile executive gifting.",
      material: "Dual-Finish Nubuck & Smooth Vegan Leatherette + 80 GSM Ivory Paper",
      dimensions: "A5 Size: 220 x 150 x 22 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Year Planner",
      weight: "410 g",
      coloursVariants: ["Sand Beige / Charcoal / Black Tri-Tone", "Bespoke Colorways on Bulk Orders"],
      keyFeatures: [
        "Tri-panel modern geometric design with contrasting texture panels",
        "Asymmetric magnetic wrap flap with brushed silver clip",
        "192 ruled pages with date and day markers on 80 GSM paper",
        "Matching charcoal ribbon bookmark",
        "Internal document pocket and pen holder loop",
        "Lay-flat Smyth sewing for smooth writeability"
],
      brandingMethods: ["Laser Engraving on Silver Clasp", "Blind Debossing on Beige Panel", "Silver Foil Stamping"],
      customizationOptions: "Laser engraved insignia on silver clip; custom foil stamping on front; bespoke presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Leatherite Diaries Images/V-506/01_main.jpg", "Leatherite Diaries Images/V-506/02_texture.jpg", "Leatherite Diaries Images/V-506/03_closure.jpg", "Leatherite Diaries Images/V-506/04_deboss.jpg", "Leatherite Diaries Images/V-506/05_back.jpg", "Leatherite Diaries Images/V-506/06_open.jpg", "Leatherite Diaries Images/V-506/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-506", "diary", "notebook", "tri-tone", "sand beige", "charcoal", "silver clasp"]
    },
    // =========================================================================
    // V-507 Cognac Tan & Dark Mocha Dual-Tone Executive Diary
    // =========================================================================
    {
      id: "v-507-cognac-tan-and-dark-mocha-dual-tone-executive-diary-notebooks-pens",
      slug: "v-507-cognac-tan-and-dark-mocha-dual-tone-executive-diary",
      productName: "V-507 Cognac Tan & Dark Mocha Dual-Tone Executive Diary",
      category: "Notebooks & Diaries",
      subcategory: "Dual-Tone Debossed Executive Diaries",
      shortDescription: "Cognac tan and dark mocha two-tone leatherette diary with chevron debossed geometric header, pen loop, and magnetic clip.",
      longDescription: "Designed for corporate leaders, this two-tone organizer pairs rich cognac tan with deep mocha brown across a sharp diagonal seam. Embellished with an intricate chevron debossed pattern and 2027 header, paired with an integrated side pen loop and gloss black magnetic closure accent. Includes 192 ruled 80 GSM pages.",
      material: "Textured Thermo PU Leatherette + 80 GSM Natural Ivory Paper",
      dimensions: "A5 Size: 218 x 148 x 20 mm",
      capacity: "192 Ruled Pages (80 GSM Paper) + Calendar & Project Planner",
      weight: "395 g",
      coloursVariants: ["Cognac Tan & Dark Mocha", "Bespoke Corporate Dual-Tones on Bulk Orders"],
      keyFeatures: [
        "Two-tone diagonal paneling with precision perimeter stitching",
        "Intricate chevron geometric header deboss",
        "Glossy black metal accent magnetic clip",
        "Dedicated side elastic-reinforced leatherette pen loop",
        "192 ruled ivory pages with micro-perforated tear-off memo sheets",
        "Double-face satin bookmark ribbon"
],
      brandingMethods: ["Blind Debossing on Tan Panel", "Laser Engraving on Black Clip", "UV Color Print"],
      customizationOptions: "Company logo debossed beside chevron pattern; engraved pen set combo; customized gift sleeve.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Leatherite Diaries Images/V-507/01_main.jpg", "Leatherite Diaries Images/V-507/02_texture.jpg", "Leatherite Diaries Images/V-507/03_closure.jpg", "Leatherite Diaries Images/V-507/04_deboss.jpg", "Leatherite Diaries Images/V-507/05_back.jpg", "Leatherite Diaries Images/V-507/06_open.jpg", "Leatherite Diaries Images/V-507/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-507", "diary", "notebook", "dual-tone", "cognac tan", "mocha", "pen loop", "chevron"]
    },
    // =========================================================================
    // V-508 Slate Silver & Charcoal Dual-Tone Executive Diary
    // =========================================================================
    {
      id: "v-508-slate-silver-and-charcoal-dual-tone-executive-diary-notebooks-pens",
      slug: "v-508-slate-silver-and-charcoal-dual-tone-executive-diary",
      productName: "V-508 Slate Silver & Charcoal Dual-Tone Executive Diary",
      category: "Notebooks & Diaries",
      subcategory: "Dual-Tone Debossed Executive Diaries",
      shortDescription: "Slate silver and deep charcoal diagonal dual-tone leatherette diary with chevron debossing, pen loop, and magnetic clip.",
      longDescription: "Contemporary corporate styling featuring a diagonal split of slate silver grey and deep charcoal leatherette. Decorated with a high-definition chevron geometric deboss motif and 2027 calendar year header. Features an integrated pen loop, gloss black magnetic closure accent, and 192 ruled ivory pages.",
      material: "Textured Thermo PU Vegan Leatherette + 80 GSM Ivory Paper",
      dimensions: "A5 Size: 218 x 148 x 20 mm",
      capacity: "192 Ruled Pages (80 GSM Paper) + Project & Meeting Planner",
      weight: "395 g",
      coloursVariants: ["Slate Silver & Charcoal Grey", "Bespoke Corporate Colors on Bulk Orders"],
      keyFeatures: [
        "Diagonal dual-tone styling in executive monochrome grey and charcoal",
        "Chevron geometric debossing with 2027 year imprint",
        "Integrated pen loop holder and glossy black magnetic closure clip",
        "192 ruled writing pages on bleed-resistant 80 GSM paper",
        "Inner expandable document pocket on back cover",
        "Matching slate grey ribbon bookmark"
],
      brandingMethods: ["Blind Debossing on Silver Panel", "Silver Foil Stamping", "Laser Engraving on Metal Clip"],
      customizationOptions: "Corporate crest debossed on upper panel; branded ballpoint pen pairing; personalized name foil stamping.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Leatherite Diaries Images/V-508/01_main.jpg", "Leatherite Diaries Images/V-508/02_texture.jpg", "Leatherite Diaries Images/V-508/03_closure.jpg", "Leatherite Diaries Images/V-508/04_deboss.jpg", "Leatherite Diaries Images/V-508/05_back.jpg", "Leatherite Diaries Images/V-508/06_open.jpg", "Leatherite Diaries Images/V-508/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-508", "diary", "notebook", "dual-tone", "slate silver", "charcoal", "pen loop"]
    },
    // =========================================================================
    // V-509 Charcoal Slate Luxury Foil-Stamped Executive Diary
    // =========================================================================
    {
      id: "v-509-charcoal-slate-luxury-foil-stamped-executive-diary-notebooks-pens",
      slug: "v-509-charcoal-slate-luxury-foil-stamped-executive-diary",
      productName: "V-509 Charcoal Slate Luxury Foil-Stamped Executive Diary",
      category: "Notebooks & Diaries",
      subcategory: "Luxury Foil-Stamped Executive Diaries",
      shortDescription: "Charcoal slate leatherette diary with hot gold foil \"2027 One Year, Many Opportunities\" typography and black mirror clasp.",
      longDescription: "An inspirational executive journal in textured charcoal slate grey thermo PU leatherette. Features elegant dual-finish hot foil stamping (\"2027 One Year, Many Opportunities\") in metallic gold and debossed charcoal. Finished with a curved leatherette flap and a high-gloss black mirror bezel magnetic closure. Includes 192 ruled natural shade pages.",
      material: "Thermo PU Grain Leatherette + 80 GSM Natural Ivory Paper",
      dimensions: "A5 Size: 215 x 148 x 20 mm",
      capacity: "192 Ruled Pages (80 GSM Paper) + Motivational Monthly Dividers",
      weight: "390 g",
      coloursVariants: ["Charcoal Slate with Gold Foil", "Corporate Black", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Richly textured charcoal slate leatherette with premium perimeter stitching",
        "Hot gold foil & blind debossed typography header",
        "Curved magnetic closure tab with gloss black mirror bezel",
        "192 ruled pages with goal setting and monthly agenda templates",
        "Matching navy/charcoal satin bookmark ribbon",
        "Lay-flat Smyth sewn binding for smooth note taking"
],
      brandingMethods: ["Hot Gold Foil Stamping", "Laser Engraving on Mirror Clasp", "Blind Debossing"],
      customizationOptions: "Company logo stamped in metallic gold foil; custom corporate preface page; individual executive name personalization.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Leatherite Diaries Images/V-509/01_main.jpg", "Leatherite Diaries Images/V-509/02_texture.jpg", "Leatherite Diaries Images/V-509/03_closure.jpg", "Leatherite Diaries Images/V-509/04_deboss.jpg", "Leatherite Diaries Images/V-509/05_back.jpg", "Leatherite Diaries Images/V-509/06_open.jpg", "Leatherite Diaries Images/V-509/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-509", "diary", "notebook", "foil-stamped", "gold foil", "charcoal slate", "black mirror clasp"]
    },
    // =========================================================================
    // V-510 Espresso Mocha Luxury Foil-Stamped Executive Diary
    // =========================================================================
    {
      id: "v-510-espresso-mocha-luxury-foil-stamped-executive-diary-notebooks-pens",
      slug: "v-510-espresso-mocha-luxury-foil-stamped-executive-diary",
      productName: "V-510 Espresso Mocha Luxury Foil-Stamped Executive Diary",
      category: "Notebooks & Diaries",
      subcategory: "Luxury Foil-Stamped Executive Diaries",
      shortDescription: "Espresso mocha brown leatherette diary with metallic gold foil inspirational typography and curved black mirror clasp.",
      longDescription: "Sophisticated executive diary in deep espresso mocha brown leatherette with natural hide grain texture. Adorned with inspirational gold foil stamping (\"2027 One Year, Many Opportunities\"), a curved magnetic tab with black mirror bezel, and 192 ruled ivory pages with gold-tinted silk bookmark. Supplied in a premium corporate gift box.",
      material: "Espresso Mocha PU Leatherette + 80 GSM Natural Shade Paper",
      dimensions: "A5 Size: 215 x 148 x 20 mm",
      capacity: "192 Ruled Pages (80 GSM Paper) + Executive Calendar Planner",
      weight: "390 g",
      coloursVariants: ["Espresso Mocha Brown with Gold Foil", "Bespoke Corporate Shades on Bulk Orders"],
      keyFeatures: [
        "Deep espresso mocha thermo PU leatherette with subtle grain finish",
        "Metallic gold foil stamped inspirational typography",
        "Curved magnetic closure tab with reflective black mirror bezel",
        "192 ruled ivory pages with date, day, and weather indicators",
        "Contrasting ivory silk bookmark ribbon",
        "Includes rigid corporate presentation box"
],
      brandingMethods: ["Hot Gold Foil Stamping", "Blind Debossing", "Laser Engraving on Mirror Bezel"],
      customizationOptions: "Corporate brand crest in metallic gold foil; custom printed company milestone insert; personalized names.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Leatherite Diaries Images/V-510/01_main.jpg", "Leatherite Diaries Images/V-510/02_texture.jpg", "Leatherite Diaries Images/V-510/03_closure.jpg", "Leatherite Diaries Images/V-510/04_deboss.jpg", "Leatherite Diaries Images/V-510/05_back.jpg", "Leatherite Diaries Images/V-510/06_open.jpg", "Leatherite Diaries Images/V-510/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-510", "diary", "notebook", "espresso mocha", "gold foil", "black mirror clasp", "executive diary"]
    }
,
    // =========================================================================
    // V-094 Executive Hardbound Leatherette Diary
    // =========================================================================
    {
      id: "v_094-executive-hardbound-leatherette-diary-notebooks-diaries",
      slug: "v_094-executive-hardbound-leatherette-diary",
      productName: "V-094 Executive Hardbound Leatherette Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-094 Executive Hardbound Leatherette Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-094 Executive Hardbound Leatherette Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-094/01_main.jpg", "Notebooks 26-27 Images/V-094/02_texture.jpg", "Notebooks 26-27 Images/V-094/03_closure.jpg", "Notebooks 26-27 Images/V-094/04_deboss.jpg", "Notebooks 26-27 Images/V-094/05_colors.jpg", "Notebooks 26-27 Images/V-094/06_open.jpg", "Notebooks 26-27 Images/V-094/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-094", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-701 Artisan Magnetic Clasp Corporate Journal
    // =========================================================================
    {
      id: "v_701-artisan-magnetic-clasp-corporate-journal-notebooks-diaries",
      slug: "v_701-artisan-magnetic-clasp-corporate-journal",
      productName: "V-701 Artisan Magnetic Clasp Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-701 Artisan Magnetic Clasp Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-701 Artisan Magnetic Clasp Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-701/01_main.jpg", "Notebooks 26-27 Images/V-701/02_texture.jpg", "Notebooks 26-27 Images/V-701/03_closure.jpg", "Notebooks 26-27 Images/V-701/04_deboss.jpg", "Notebooks 26-27 Images/V-701/05_colors.jpg", "Notebooks 26-27 Images/V-701/06_open.jpg", "Notebooks 26-27 Images/V-701/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-701", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-702 Dual-Tone Contrast Executive Notebook
    // =========================================================================
    {
      id: "v_702-dual-tone-contrast-executive-notebook-notebooks-diaries",
      slug: "v_702-dual-tone-contrast-executive-notebook",
      productName: "V-702 Dual-Tone Contrast Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-702 Dual-Tone Contrast Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-702 Dual-Tone Contrast Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-702/01_main.jpg", "Notebooks 26-27 Images/V-702/02_texture.jpg", "Notebooks 26-27 Images/V-702/03_closure.jpg", "Notebooks 26-27 Images/V-702/04_deboss.jpg", "Notebooks 26-27 Images/V-702/05_colors.jpg", "Notebooks 26-27 Images/V-702/06_open.jpg", "Notebooks 26-27 Images/V-702/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-702", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-703 Prestige Debossed Annual Planner Diary
    // =========================================================================
    {
      id: "v_703-prestige-debossed-annual-planner-diary-notebooks-diaries",
      slug: "v_703-prestige-debossed-annual-planner-diary",
      productName: "V-703 Prestige Debossed Annual Planner Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-703 Prestige Debossed Annual Planner Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-703 Prestige Debossed Annual Planner Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-703/01_main.jpg", "Notebooks 26-27 Images/V-703/02_texture.jpg", "Notebooks 26-27 Images/V-703/03_closure.jpg", "Notebooks 26-27 Images/V-703/04_deboss.jpg", "Notebooks 26-27 Images/V-703/05_colors.jpg", "Notebooks 26-27 Images/V-703/06_open.jpg", "Notebooks 26-27 Images/V-703/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-703", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-704 Minimalist Soft-Touch Executive Notebook
    // =========================================================================
    {
      id: "v_704-minimalist-soft-touch-executive-notebook-notebooks-diaries",
      slug: "v_704-minimalist-soft-touch-executive-notebook",
      productName: "V-704 Minimalist Soft-Touch Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-704 Minimalist Soft-Touch Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-704 Minimalist Soft-Touch Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-704/01_main.jpg", "Notebooks 26-27 Images/V-704/02_texture.jpg", "Notebooks 26-27 Images/V-704/03_closure.jpg", "Notebooks 26-27 Images/V-704/04_deboss.jpg", "Notebooks 26-27 Images/V-704/05_colors.jpg", "Notebooks 26-27 Images/V-704/06_open.jpg", "Notebooks 26-27 Images/V-704/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-704", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-704A Signature Stitched Edge Corporate Journal
    // =========================================================================
    {
      id: "v_704a-signature-stitched-edge-corporate-journal-notebooks-diaries",
      slug: "v_704a-signature-stitched-edge-corporate-journal",
      productName: "V-704A Signature Stitched Edge Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-704A Signature Stitched Edge Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-704A Signature Stitched Edge Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-704A/01_main.jpg", "Notebooks 26-27 Images/V-704A/02_texture.jpg", "Notebooks 26-27 Images/V-704A/03_closure.jpg", "Notebooks 26-27 Images/V-704A/04_deboss.jpg", "Notebooks 26-27 Images/V-704A/05_colors.jpg", "Notebooks 26-27 Images/V-704A/06_open.jpg", "Notebooks 26-27 Images/V-704A/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-704a", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-706 Luxury Foil-Stamped Executive Organizer
    // =========================================================================
    {
      id: "v_706-luxury-foil-stamped-executive-organizer-notebooks-diaries",
      slug: "v_706-luxury-foil-stamped-executive-organizer",
      productName: "V-706 Luxury Foil-Stamped Executive Organizer",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-706 Luxury Foil-Stamped Executive Organizer featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-706 Luxury Foil-Stamped Executive Organizer is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-706/01_main.jpg", "Notebooks 26-27 Images/V-706/02_texture.jpg", "Notebooks 26-27 Images/V-706/03_closure.jpg", "Notebooks 26-27 Images/V-706/04_deboss.jpg", "Notebooks 26-27 Images/V-706/05_colors.jpg", "Notebooks 26-27 Images/V-706/06_open.jpg", "Notebooks 26-27 Images/V-706/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-706", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-707 Sleek Diagonal Pocket Business Diary
    // =========================================================================
    {
      id: "v_707-sleek-diagonal-pocket-business-diary-notebooks-diaries",
      slug: "v_707-sleek-diagonal-pocket-business-diary",
      productName: "V-707 Sleek Diagonal Pocket Business Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-707 Sleek Diagonal Pocket Business Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-707 Sleek Diagonal Pocket Business Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-707/01_main.jpg", "Notebooks 26-27 Images/V-707/02_texture.jpg", "Notebooks 26-27 Images/V-707/03_closure.jpg", "Notebooks 26-27 Images/V-707/04_deboss.jpg", "Notebooks 26-27 Images/V-707/05_colors.jpg", "Notebooks 26-27 Images/V-707/06_open.jpg", "Notebooks 26-27 Images/V-707/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-707", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-708 Contemporary Matte Grain Corporate Diary
    // =========================================================================
    {
      id: "v_708-contemporary-matte-grain-corporate-diary-notebooks-diaries",
      slug: "v_708-contemporary-matte-grain-corporate-diary",
      productName: "V-708 Contemporary Matte Grain Corporate Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-708 Contemporary Matte Grain Corporate Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-708 Contemporary Matte Grain Corporate Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-708/01_main.jpg", "Notebooks 26-27 Images/V-708/02_texture.jpg", "Notebooks 26-27 Images/V-708/03_closure.jpg", "Notebooks 26-27 Images/V-708/04_deboss.jpg", "Notebooks 26-27 Images/V-708/05_colors.jpg", "Notebooks 26-27 Images/V-708/06_open.jpg", "Notebooks 26-27 Images/V-708/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-708", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-709 Bespoke Handcrafted Executive Notebook
    // =========================================================================
    {
      id: "v_709-bespoke-handcrafted-executive-notebook-notebooks-diaries",
      slug: "v_709-bespoke-handcrafted-executive-notebook",
      productName: "V-709 Bespoke Handcrafted Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-709 Bespoke Handcrafted Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-709 Bespoke Handcrafted Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-709/01_main.jpg", "Notebooks 26-27 Images/V-709/02_texture.jpg", "Notebooks 26-27 Images/V-709/03_closure.jpg", "Notebooks 26-27 Images/V-709/04_deboss.jpg", "Notebooks 26-27 Images/V-709/05_colors.jpg", "Notebooks 26-27 Images/V-709/06_open.jpg", "Notebooks 26-27 Images/V-709/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-709", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-710 Executive Hardbound Leatherette Diary
    // =========================================================================
    {
      id: "v_710-executive-hardbound-leatherette-diary-notebooks-diaries",
      slug: "v_710-executive-hardbound-leatherette-diary",
      productName: "V-710 Executive Hardbound Leatherette Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-710 Executive Hardbound Leatherette Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-710 Executive Hardbound Leatherette Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-710/01_main.jpg", "Notebooks 26-27 Images/V-710/02_texture.jpg", "Notebooks 26-27 Images/V-710/03_closure.jpg", "Notebooks 26-27 Images/V-710/04_deboss.jpg", "Notebooks 26-27 Images/V-710/05_colors.jpg", "Notebooks 26-27 Images/V-710/06_open.jpg", "Notebooks 26-27 Images/V-710/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-710", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-711 Artisan Magnetic Clasp Corporate Journal
    // =========================================================================
    {
      id: "v_711-artisan-magnetic-clasp-corporate-journal-notebooks-diaries",
      slug: "v_711-artisan-magnetic-clasp-corporate-journal",
      productName: "V-711 Artisan Magnetic Clasp Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-711 Artisan Magnetic Clasp Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-711 Artisan Magnetic Clasp Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-711/01_main.jpg", "Notebooks 26-27 Images/V-711/02_texture.jpg", "Notebooks 26-27 Images/V-711/03_closure.jpg", "Notebooks 26-27 Images/V-711/04_deboss.jpg", "Notebooks 26-27 Images/V-711/05_colors.jpg", "Notebooks 26-27 Images/V-711/06_open.jpg", "Notebooks 26-27 Images/V-711/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-711", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-712 Dual-Tone Contrast Executive Notebook
    // =========================================================================
    {
      id: "v_712-dual-tone-contrast-executive-notebook-notebooks-diaries",
      slug: "v_712-dual-tone-contrast-executive-notebook",
      productName: "V-712 Dual-Tone Contrast Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-712 Dual-Tone Contrast Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-712 Dual-Tone Contrast Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-712/01_main.jpg", "Notebooks 26-27 Images/V-712/02_texture.jpg", "Notebooks 26-27 Images/V-712/03_closure.jpg", "Notebooks 26-27 Images/V-712/04_deboss.jpg", "Notebooks 26-27 Images/V-712/05_colors.jpg", "Notebooks 26-27 Images/V-712/06_open.jpg", "Notebooks 26-27 Images/V-712/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-712", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-713 Prestige Debossed Annual Planner Diary
    // =========================================================================
    {
      id: "v_713-prestige-debossed-annual-planner-diary-notebooks-diaries",
      slug: "v_713-prestige-debossed-annual-planner-diary",
      productName: "V-713 Prestige Debossed Annual Planner Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-713 Prestige Debossed Annual Planner Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-713 Prestige Debossed Annual Planner Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-713/01_main.jpg", "Notebooks 26-27 Images/V-713/02_texture.jpg", "Notebooks 26-27 Images/V-713/03_closure.jpg", "Notebooks 26-27 Images/V-713/04_deboss.jpg", "Notebooks 26-27 Images/V-713/05_colors.jpg", "Notebooks 26-27 Images/V-713/06_open.jpg", "Notebooks 26-27 Images/V-713/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-713", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-714 Minimalist Soft-Touch Executive Notebook
    // =========================================================================
    {
      id: "v_714-minimalist-soft-touch-executive-notebook-notebooks-diaries",
      slug: "v_714-minimalist-soft-touch-executive-notebook",
      productName: "V-714 Minimalist Soft-Touch Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-714 Minimalist Soft-Touch Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-714 Minimalist Soft-Touch Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-714/01_main.jpg", "Notebooks 26-27 Images/V-714/02_texture.jpg", "Notebooks 26-27 Images/V-714/03_closure.jpg", "Notebooks 26-27 Images/V-714/04_deboss.jpg", "Notebooks 26-27 Images/V-714/05_colors.jpg", "Notebooks 26-27 Images/V-714/06_open.jpg", "Notebooks 26-27 Images/V-714/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-714", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-715 Signature Stitched Edge Corporate Journal
    // =========================================================================
    {
      id: "v_715-signature-stitched-edge-corporate-journal-notebooks-diaries",
      slug: "v_715-signature-stitched-edge-corporate-journal",
      productName: "V-715 Signature Stitched Edge Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-715 Signature Stitched Edge Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-715 Signature Stitched Edge Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-715/01_main.jpg", "Notebooks 26-27 Images/V-715/02_texture.jpg", "Notebooks 26-27 Images/V-715/03_closure.jpg", "Notebooks 26-27 Images/V-715/04_deboss.jpg", "Notebooks 26-27 Images/V-715/05_colors.jpg", "Notebooks 26-27 Images/V-715/06_open.jpg", "Notebooks 26-27 Images/V-715/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-715", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-716 Luxury Foil-Stamped Executive Organizer
    // =========================================================================
    {
      id: "v_716-luxury-foil-stamped-executive-organizer-notebooks-diaries",
      slug: "v_716-luxury-foil-stamped-executive-organizer",
      productName: "V-716 Luxury Foil-Stamped Executive Organizer",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-716 Luxury Foil-Stamped Executive Organizer featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-716 Luxury Foil-Stamped Executive Organizer is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-716/01_main.jpg", "Notebooks 26-27 Images/V-716/02_texture.jpg", "Notebooks 26-27 Images/V-716/03_closure.jpg", "Notebooks 26-27 Images/V-716/04_deboss.jpg", "Notebooks 26-27 Images/V-716/05_colors.jpg", "Notebooks 26-27 Images/V-716/06_open.jpg", "Notebooks 26-27 Images/V-716/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-716", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-717 Sleek Diagonal Pocket Business Diary
    // =========================================================================
    {
      id: "v_717-sleek-diagonal-pocket-business-diary-notebooks-diaries",
      slug: "v_717-sleek-diagonal-pocket-business-diary",
      productName: "V-717 Sleek Diagonal Pocket Business Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-717 Sleek Diagonal Pocket Business Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-717 Sleek Diagonal Pocket Business Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-717/01_main.jpg", "Notebooks 26-27 Images/V-717/02_texture.jpg", "Notebooks 26-27 Images/V-717/03_closure.jpg", "Notebooks 26-27 Images/V-717/04_deboss.jpg", "Notebooks 26-27 Images/V-717/05_colors.jpg", "Notebooks 26-27 Images/V-717/06_open.jpg", "Notebooks 26-27 Images/V-717/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-717", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-718 Contemporary Matte Grain Corporate Diary
    // =========================================================================
    {
      id: "v_718-contemporary-matte-grain-corporate-diary-notebooks-diaries",
      slug: "v_718-contemporary-matte-grain-corporate-diary",
      productName: "V-718 Contemporary Matte Grain Corporate Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-718 Contemporary Matte Grain Corporate Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-718 Contemporary Matte Grain Corporate Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-718/01_main.jpg", "Notebooks 26-27 Images/V-718/02_texture.jpg", "Notebooks 26-27 Images/V-718/03_closure.jpg", "Notebooks 26-27 Images/V-718/04_deboss.jpg", "Notebooks 26-27 Images/V-718/05_colors.jpg", "Notebooks 26-27 Images/V-718/06_open.jpg", "Notebooks 26-27 Images/V-718/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-718", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-719 Bespoke Handcrafted Executive Notebook
    // =========================================================================
    {
      id: "v_719-bespoke-handcrafted-executive-notebook-notebooks-diaries",
      slug: "v_719-bespoke-handcrafted-executive-notebook",
      productName: "V-719 Bespoke Handcrafted Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-719 Bespoke Handcrafted Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-719 Bespoke Handcrafted Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-719/01_main.jpg", "Notebooks 26-27 Images/V-719/02_texture.jpg", "Notebooks 26-27 Images/V-719/03_closure.jpg", "Notebooks 26-27 Images/V-719/04_deboss.jpg", "Notebooks 26-27 Images/V-719/05_colors.jpg", "Notebooks 26-27 Images/V-719/06_open.jpg", "Notebooks 26-27 Images/V-719/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-719", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-720 Executive Hardbound Leatherette Diary
    // =========================================================================
    {
      id: "v_720-executive-hardbound-leatherette-diary-notebooks-diaries",
      slug: "v_720-executive-hardbound-leatherette-diary",
      productName: "V-720 Executive Hardbound Leatherette Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-720 Executive Hardbound Leatherette Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-720 Executive Hardbound Leatherette Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-720/01_main.jpg", "Notebooks 26-27 Images/V-720/02_texture.jpg", "Notebooks 26-27 Images/V-720/03_closure.jpg", "Notebooks 26-27 Images/V-720/04_deboss.jpg", "Notebooks 26-27 Images/V-720/05_colors.jpg", "Notebooks 26-27 Images/V-720/06_open.jpg", "Notebooks 26-27 Images/V-720/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-720", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-721 Artisan Magnetic Clasp Corporate Journal
    // =========================================================================
    {
      id: "v_721-artisan-magnetic-clasp-corporate-journal-notebooks-diaries",
      slug: "v_721-artisan-magnetic-clasp-corporate-journal",
      productName: "V-721 Artisan Magnetic Clasp Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-721 Artisan Magnetic Clasp Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-721 Artisan Magnetic Clasp Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-721/01_main.jpg", "Notebooks 26-27 Images/V-721/02_texture.jpg", "Notebooks 26-27 Images/V-721/03_closure.jpg", "Notebooks 26-27 Images/V-721/04_deboss.jpg", "Notebooks 26-27 Images/V-721/05_colors.jpg", "Notebooks 26-27 Images/V-721/06_open.jpg", "Notebooks 26-27 Images/V-721/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-721", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-722 Dual-Tone Contrast Executive Notebook
    // =========================================================================
    {
      id: "v_722-dual-tone-contrast-executive-notebook-notebooks-diaries",
      slug: "v_722-dual-tone-contrast-executive-notebook",
      productName: "V-722 Dual-Tone Contrast Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-722 Dual-Tone Contrast Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-722 Dual-Tone Contrast Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-722/01_main.jpg", "Notebooks 26-27 Images/V-722/02_texture.jpg", "Notebooks 26-27 Images/V-722/03_closure.jpg", "Notebooks 26-27 Images/V-722/04_deboss.jpg", "Notebooks 26-27 Images/V-722/05_colors.jpg", "Notebooks 26-27 Images/V-722/06_open.jpg", "Notebooks 26-27 Images/V-722/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-722", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-723 Prestige Debossed Annual Planner Diary
    // =========================================================================
    {
      id: "v_723-prestige-debossed-annual-planner-diary-notebooks-diaries",
      slug: "v_723-prestige-debossed-annual-planner-diary",
      productName: "V-723 Prestige Debossed Annual Planner Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-723 Prestige Debossed Annual Planner Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-723 Prestige Debossed Annual Planner Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-723/01_main.jpg", "Notebooks 26-27 Images/V-723/02_texture.jpg", "Notebooks 26-27 Images/V-723/03_closure.jpg", "Notebooks 26-27 Images/V-723/04_deboss.jpg", "Notebooks 26-27 Images/V-723/05_colors.jpg", "Notebooks 26-27 Images/V-723/06_open.jpg", "Notebooks 26-27 Images/V-723/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-723", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-724 Minimalist Soft-Touch Executive Notebook
    // =========================================================================
    {
      id: "v_724-minimalist-soft-touch-executive-notebook-notebooks-diaries",
      slug: "v_724-minimalist-soft-touch-executive-notebook",
      productName: "V-724 Minimalist Soft-Touch Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-724 Minimalist Soft-Touch Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-724 Minimalist Soft-Touch Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-724/01_main.jpg", "Notebooks 26-27 Images/V-724/02_texture.jpg", "Notebooks 26-27 Images/V-724/03_closure.jpg", "Notebooks 26-27 Images/V-724/04_deboss.jpg", "Notebooks 26-27 Images/V-724/05_colors.jpg", "Notebooks 26-27 Images/V-724/06_open.jpg", "Notebooks 26-27 Images/V-724/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-724", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-725 Signature Stitched Edge Corporate Journal
    // =========================================================================
    {
      id: "v_725-signature-stitched-edge-corporate-journal-notebooks-diaries",
      slug: "v_725-signature-stitched-edge-corporate-journal",
      productName: "V-725 Signature Stitched Edge Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-725 Signature Stitched Edge Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-725 Signature Stitched Edge Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-725/01_main.jpg", "Notebooks 26-27 Images/V-725/02_texture.jpg", "Notebooks 26-27 Images/V-725/03_closure.jpg", "Notebooks 26-27 Images/V-725/04_deboss.jpg", "Notebooks 26-27 Images/V-725/05_colors.jpg", "Notebooks 26-27 Images/V-725/06_open.jpg", "Notebooks 26-27 Images/V-725/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-725", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-726 Luxury Foil-Stamped Executive Organizer
    // =========================================================================
    {
      id: "v_726-luxury-foil-stamped-executive-organizer-notebooks-diaries",
      slug: "v_726-luxury-foil-stamped-executive-organizer",
      productName: "V-726 Luxury Foil-Stamped Executive Organizer",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-726 Luxury Foil-Stamped Executive Organizer featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-726 Luxury Foil-Stamped Executive Organizer is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-726/01_main.jpg", "Notebooks 26-27 Images/V-726/02_texture.jpg", "Notebooks 26-27 Images/V-726/03_closure.jpg", "Notebooks 26-27 Images/V-726/04_deboss.jpg", "Notebooks 26-27 Images/V-726/05_colors.jpg", "Notebooks 26-27 Images/V-726/06_open.jpg", "Notebooks 26-27 Images/V-726/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-726", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-728 Sleek Diagonal Pocket Business Diary
    // =========================================================================
    {
      id: "v_728-sleek-diagonal-pocket-business-diary-notebooks-diaries",
      slug: "v_728-sleek-diagonal-pocket-business-diary",
      productName: "V-728 Sleek Diagonal Pocket Business Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-728 Sleek Diagonal Pocket Business Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-728 Sleek Diagonal Pocket Business Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-728/01_main.jpg", "Notebooks 26-27 Images/V-728/02_texture.jpg", "Notebooks 26-27 Images/V-728/03_closure.jpg", "Notebooks 26-27 Images/V-728/04_deboss.jpg", "Notebooks 26-27 Images/V-728/05_colors.jpg", "Notebooks 26-27 Images/V-728/06_open.jpg", "Notebooks 26-27 Images/V-728/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-728", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-729 Contemporary Matte Grain Corporate Diary
    // =========================================================================
    {
      id: "v_729-contemporary-matte-grain-corporate-diary-notebooks-diaries",
      slug: "v_729-contemporary-matte-grain-corporate-diary",
      productName: "V-729 Contemporary Matte Grain Corporate Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-729 Contemporary Matte Grain Corporate Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-729 Contemporary Matte Grain Corporate Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-729/01_main.jpg", "Notebooks 26-27 Images/V-729/02_texture.jpg", "Notebooks 26-27 Images/V-729/03_closure.jpg", "Notebooks 26-27 Images/V-729/04_deboss.jpg", "Notebooks 26-27 Images/V-729/05_colors.jpg", "Notebooks 26-27 Images/V-729/06_open.jpg", "Notebooks 26-27 Images/V-729/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-729", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-730 Bespoke Handcrafted Executive Notebook
    // =========================================================================
    {
      id: "v_730-bespoke-handcrafted-executive-notebook-notebooks-diaries",
      slug: "v_730-bespoke-handcrafted-executive-notebook",
      productName: "V-730 Bespoke Handcrafted Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-730 Bespoke Handcrafted Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-730 Bespoke Handcrafted Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-730/01_main.jpg", "Notebooks 26-27 Images/V-730/02_texture.jpg", "Notebooks 26-27 Images/V-730/03_closure.jpg", "Notebooks 26-27 Images/V-730/04_deboss.jpg", "Notebooks 26-27 Images/V-730/05_colors.jpg", "Notebooks 26-27 Images/V-730/06_open.jpg", "Notebooks 26-27 Images/V-730/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-730", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-731 Executive Hardbound Leatherette Diary
    // =========================================================================
    {
      id: "v_731-executive-hardbound-leatherette-diary-notebooks-diaries",
      slug: "v_731-executive-hardbound-leatherette-diary",
      productName: "V-731 Executive Hardbound Leatherette Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-731 Executive Hardbound Leatherette Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-731 Executive Hardbound Leatherette Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-731/01_main.jpg", "Notebooks 26-27 Images/V-731/02_texture.jpg", "Notebooks 26-27 Images/V-731/03_closure.jpg", "Notebooks 26-27 Images/V-731/04_deboss.jpg", "Notebooks 26-27 Images/V-731/05_colors.jpg", "Notebooks 26-27 Images/V-731/06_open.jpg", "Notebooks 26-27 Images/V-731/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-731", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-732 Artisan Magnetic Clasp Corporate Journal
    // =========================================================================
    {
      id: "v_732-artisan-magnetic-clasp-corporate-journal-notebooks-diaries",
      slug: "v_732-artisan-magnetic-clasp-corporate-journal",
      productName: "V-732 Artisan Magnetic Clasp Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-732 Artisan Magnetic Clasp Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-732 Artisan Magnetic Clasp Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-732/01_main.jpg", "Notebooks 26-27 Images/V-732/02_texture.jpg", "Notebooks 26-27 Images/V-732/03_closure.jpg", "Notebooks 26-27 Images/V-732/04_deboss.jpg", "Notebooks 26-27 Images/V-732/05_colors.jpg", "Notebooks 26-27 Images/V-732/06_open.jpg", "Notebooks 26-27 Images/V-732/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-732", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-733 Dual-Tone Contrast Executive Notebook
    // =========================================================================
    {
      id: "v_733-dual-tone-contrast-executive-notebook-notebooks-diaries",
      slug: "v_733-dual-tone-contrast-executive-notebook",
      productName: "V-733 Dual-Tone Contrast Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-733 Dual-Tone Contrast Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-733 Dual-Tone Contrast Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-733/01_main.jpg", "Notebooks 26-27 Images/V-733/02_texture.jpg", "Notebooks 26-27 Images/V-733/03_closure.jpg", "Notebooks 26-27 Images/V-733/04_deboss.jpg", "Notebooks 26-27 Images/V-733/05_colors.jpg", "Notebooks 26-27 Images/V-733/06_open.jpg", "Notebooks 26-27 Images/V-733/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-733", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-734 Prestige Debossed Annual Planner Diary
    // =========================================================================
    {
      id: "v_734-prestige-debossed-annual-planner-diary-notebooks-diaries",
      slug: "v_734-prestige-debossed-annual-planner-diary",
      productName: "V-734 Prestige Debossed Annual Planner Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-734 Prestige Debossed Annual Planner Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-734 Prestige Debossed Annual Planner Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-734/01_main.jpg", "Notebooks 26-27 Images/V-734/02_texture.jpg", "Notebooks 26-27 Images/V-734/03_closure.jpg", "Notebooks 26-27 Images/V-734/04_deboss.jpg", "Notebooks 26-27 Images/V-734/05_colors.jpg", "Notebooks 26-27 Images/V-734/06_open.jpg", "Notebooks 26-27 Images/V-734/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-734", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-735 Minimalist Soft-Touch Executive Notebook
    // =========================================================================
    {
      id: "v_735-minimalist-soft-touch-executive-notebook-notebooks-diaries",
      slug: "v_735-minimalist-soft-touch-executive-notebook",
      productName: "V-735 Minimalist Soft-Touch Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-735 Minimalist Soft-Touch Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-735 Minimalist Soft-Touch Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-735/01_main.jpg", "Notebooks 26-27 Images/V-735/02_texture.jpg", "Notebooks 26-27 Images/V-735/03_closure.jpg", "Notebooks 26-27 Images/V-735/04_deboss.jpg", "Notebooks 26-27 Images/V-735/05_colors.jpg", "Notebooks 26-27 Images/V-735/06_open.jpg", "Notebooks 26-27 Images/V-735/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-735", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-736 Signature Stitched Edge Corporate Journal
    // =========================================================================
    {
      id: "v_736-signature-stitched-edge-corporate-journal-notebooks-diaries",
      slug: "v_736-signature-stitched-edge-corporate-journal",
      productName: "V-736 Signature Stitched Edge Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-736 Signature Stitched Edge Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-736 Signature Stitched Edge Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-736/01_main.jpg", "Notebooks 26-27 Images/V-736/02_texture.jpg", "Notebooks 26-27 Images/V-736/03_closure.jpg", "Notebooks 26-27 Images/V-736/04_deboss.jpg", "Notebooks 26-27 Images/V-736/05_colors.jpg", "Notebooks 26-27 Images/V-736/06_open.jpg", "Notebooks 26-27 Images/V-736/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-736", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-737 Luxury Foil-Stamped Executive Organizer
    // =========================================================================
    {
      id: "v_737-luxury-foil-stamped-executive-organizer-notebooks-diaries",
      slug: "v_737-luxury-foil-stamped-executive-organizer",
      productName: "V-737 Luxury Foil-Stamped Executive Organizer",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-737 Luxury Foil-Stamped Executive Organizer featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-737 Luxury Foil-Stamped Executive Organizer is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-737/01_main.jpg", "Notebooks 26-27 Images/V-737/02_texture.jpg", "Notebooks 26-27 Images/V-737/03_closure.jpg", "Notebooks 26-27 Images/V-737/04_deboss.jpg", "Notebooks 26-27 Images/V-737/05_colors.jpg", "Notebooks 26-27 Images/V-737/06_open.jpg", "Notebooks 26-27 Images/V-737/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-737", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-738 Sleek Diagonal Pocket Business Diary
    // =========================================================================
    {
      id: "v_738-sleek-diagonal-pocket-business-diary-notebooks-diaries",
      slug: "v_738-sleek-diagonal-pocket-business-diary",
      productName: "V-738 Sleek Diagonal Pocket Business Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-738 Sleek Diagonal Pocket Business Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-738 Sleek Diagonal Pocket Business Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-738/01_main.jpg", "Notebooks 26-27 Images/V-738/02_texture.jpg", "Notebooks 26-27 Images/V-738/03_closure.jpg", "Notebooks 26-27 Images/V-738/04_deboss.jpg", "Notebooks 26-27 Images/V-738/05_colors.jpg", "Notebooks 26-27 Images/V-738/06_open.jpg", "Notebooks 26-27 Images/V-738/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-738", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-739 Contemporary Matte Grain Corporate Diary
    // =========================================================================
    {
      id: "v_739-contemporary-matte-grain-corporate-diary-notebooks-diaries",
      slug: "v_739-contemporary-matte-grain-corporate-diary",
      productName: "V-739 Contemporary Matte Grain Corporate Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-739 Contemporary Matte Grain Corporate Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-739 Contemporary Matte Grain Corporate Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-739/01_main.jpg", "Notebooks 26-27 Images/V-739/02_texture.jpg", "Notebooks 26-27 Images/V-739/03_closure.jpg", "Notebooks 26-27 Images/V-739/04_deboss.jpg", "Notebooks 26-27 Images/V-739/05_colors.jpg", "Notebooks 26-27 Images/V-739/06_open.jpg", "Notebooks 26-27 Images/V-739/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-739", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-740 Bespoke Handcrafted Executive Notebook
    // =========================================================================
    {
      id: "v_740-bespoke-handcrafted-executive-notebook-notebooks-diaries",
      slug: "v_740-bespoke-handcrafted-executive-notebook",
      productName: "V-740 Bespoke Handcrafted Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-740 Bespoke Handcrafted Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-740 Bespoke Handcrafted Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-740/01_main.jpg", "Notebooks 26-27 Images/V-740/02_texture.jpg", "Notebooks 26-27 Images/V-740/03_closure.jpg", "Notebooks 26-27 Images/V-740/04_deboss.jpg", "Notebooks 26-27 Images/V-740/05_colors.jpg", "Notebooks 26-27 Images/V-740/06_open.jpg", "Notebooks 26-27 Images/V-740/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-740", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-741 Executive Hardbound Leatherette Diary
    // =========================================================================
    {
      id: "v_741-executive-hardbound-leatherette-diary-notebooks-diaries",
      slug: "v_741-executive-hardbound-leatherette-diary",
      productName: "V-741 Executive Hardbound Leatherette Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-741 Executive Hardbound Leatherette Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-741 Executive Hardbound Leatherette Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-741/01_main.jpg", "Notebooks 26-27 Images/V-741/02_texture.jpg", "Notebooks 26-27 Images/V-741/03_closure.jpg", "Notebooks 26-27 Images/V-741/04_deboss.jpg", "Notebooks 26-27 Images/V-741/05_colors.jpg", "Notebooks 26-27 Images/V-741/06_open.jpg", "Notebooks 26-27 Images/V-741/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-741", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-742 Artisan Magnetic Clasp Corporate Journal
    // =========================================================================
    {
      id: "v_742-artisan-magnetic-clasp-corporate-journal-notebooks-diaries",
      slug: "v_742-artisan-magnetic-clasp-corporate-journal",
      productName: "V-742 Artisan Magnetic Clasp Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-742 Artisan Magnetic Clasp Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-742 Artisan Magnetic Clasp Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-742/01_main.jpg", "Notebooks 26-27 Images/V-742/02_texture.jpg", "Notebooks 26-27 Images/V-742/03_closure.jpg", "Notebooks 26-27 Images/V-742/04_deboss.jpg", "Notebooks 26-27 Images/V-742/05_colors.jpg", "Notebooks 26-27 Images/V-742/06_open.jpg", "Notebooks 26-27 Images/V-742/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-742", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-744 Dual-Tone Contrast Executive Notebook
    // =========================================================================
    {
      id: "v_744-dual-tone-contrast-executive-notebook-notebooks-diaries",
      slug: "v_744-dual-tone-contrast-executive-notebook",
      productName: "V-744 Dual-Tone Contrast Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-744 Dual-Tone Contrast Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-744 Dual-Tone Contrast Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-744/01_main.jpg", "Notebooks 26-27 Images/V-744/02_texture.jpg", "Notebooks 26-27 Images/V-744/03_closure.jpg", "Notebooks 26-27 Images/V-744/04_deboss.jpg", "Notebooks 26-27 Images/V-744/05_colors.jpg", "Notebooks 26-27 Images/V-744/06_open.jpg", "Notebooks 26-27 Images/V-744/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-744", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-745 Prestige Debossed Annual Planner Diary
    // =========================================================================
    {
      id: "v_745-prestige-debossed-annual-planner-diary-notebooks-diaries",
      slug: "v_745-prestige-debossed-annual-planner-diary",
      productName: "V-745 Prestige Debossed Annual Planner Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-745 Prestige Debossed Annual Planner Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-745 Prestige Debossed Annual Planner Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-745/01_main.jpg", "Notebooks 26-27 Images/V-745/02_texture.jpg", "Notebooks 26-27 Images/V-745/03_closure.jpg", "Notebooks 26-27 Images/V-745/04_deboss.jpg", "Notebooks 26-27 Images/V-745/05_colors.jpg", "Notebooks 26-27 Images/V-745/06_open.jpg", "Notebooks 26-27 Images/V-745/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-745", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-746 Minimalist Soft-Touch Executive Notebook
    // =========================================================================
    {
      id: "v_746-minimalist-soft-touch-executive-notebook-notebooks-diaries",
      slug: "v_746-minimalist-soft-touch-executive-notebook",
      productName: "V-746 Minimalist Soft-Touch Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-746 Minimalist Soft-Touch Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-746 Minimalist Soft-Touch Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-746/01_main.jpg", "Notebooks 26-27 Images/V-746/02_texture.jpg", "Notebooks 26-27 Images/V-746/03_closure.jpg", "Notebooks 26-27 Images/V-746/04_deboss.jpg", "Notebooks 26-27 Images/V-746/05_colors.jpg", "Notebooks 26-27 Images/V-746/06_open.jpg", "Notebooks 26-27 Images/V-746/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-746", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-747 Signature Stitched Edge Corporate Journal
    // =========================================================================
    {
      id: "v_747-signature-stitched-edge-corporate-journal-notebooks-diaries",
      slug: "v_747-signature-stitched-edge-corporate-journal",
      productName: "V-747 Signature Stitched Edge Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-747 Signature Stitched Edge Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-747 Signature Stitched Edge Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-747/01_main.jpg", "Notebooks 26-27 Images/V-747/02_texture.jpg", "Notebooks 26-27 Images/V-747/03_closure.jpg", "Notebooks 26-27 Images/V-747/04_deboss.jpg", "Notebooks 26-27 Images/V-747/05_colors.jpg", "Notebooks 26-27 Images/V-747/06_open.jpg", "Notebooks 26-27 Images/V-747/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-747", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-749 Luxury Foil-Stamped Executive Organizer
    // =========================================================================
    {
      id: "v_749-luxury-foil-stamped-executive-organizer-notebooks-diaries",
      slug: "v_749-luxury-foil-stamped-executive-organizer",
      productName: "V-749 Luxury Foil-Stamped Executive Organizer",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-749 Luxury Foil-Stamped Executive Organizer featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-749 Luxury Foil-Stamped Executive Organizer is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-749/01_main.jpg", "Notebooks 26-27 Images/V-749/02_texture.jpg", "Notebooks 26-27 Images/V-749/03_closure.jpg", "Notebooks 26-27 Images/V-749/04_deboss.jpg", "Notebooks 26-27 Images/V-749/05_colors.jpg", "Notebooks 26-27 Images/V-749/06_open.jpg", "Notebooks 26-27 Images/V-749/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-749", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-750 Sleek Diagonal Pocket Business Diary
    // =========================================================================
    {
      id: "v_750-sleek-diagonal-pocket-business-diary-notebooks-diaries",
      slug: "v_750-sleek-diagonal-pocket-business-diary",
      productName: "V-750 Sleek Diagonal Pocket Business Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-750 Sleek Diagonal Pocket Business Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-750 Sleek Diagonal Pocket Business Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-750/01_main.jpg", "Notebooks 26-27 Images/V-750/02_texture.jpg", "Notebooks 26-27 Images/V-750/03_closure.jpg", "Notebooks 26-27 Images/V-750/04_deboss.jpg", "Notebooks 26-27 Images/V-750/05_colors.jpg", "Notebooks 26-27 Images/V-750/06_open.jpg", "Notebooks 26-27 Images/V-750/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-750", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-751 Contemporary Matte Grain Corporate Diary
    // =========================================================================
    {
      id: "v_751-contemporary-matte-grain-corporate-diary-notebooks-diaries",
      slug: "v_751-contemporary-matte-grain-corporate-diary",
      productName: "V-751 Contemporary Matte Grain Corporate Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-751 Contemporary Matte Grain Corporate Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-751 Contemporary Matte Grain Corporate Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-751/01_main.jpg", "Notebooks 26-27 Images/V-751/02_texture.jpg", "Notebooks 26-27 Images/V-751/03_closure.jpg", "Notebooks 26-27 Images/V-751/04_deboss.jpg", "Notebooks 26-27 Images/V-751/05_colors.jpg", "Notebooks 26-27 Images/V-751/06_open.jpg", "Notebooks 26-27 Images/V-751/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-751", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-752 Bespoke Handcrafted Executive Notebook
    // =========================================================================
    {
      id: "v_752-bespoke-handcrafted-executive-notebook-notebooks-diaries",
      slug: "v_752-bespoke-handcrafted-executive-notebook",
      productName: "V-752 Bespoke Handcrafted Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-752 Bespoke Handcrafted Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-752 Bespoke Handcrafted Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-752/01_main.jpg", "Notebooks 26-27 Images/V-752/02_texture.jpg", "Notebooks 26-27 Images/V-752/03_closure.jpg", "Notebooks 26-27 Images/V-752/04_deboss.jpg", "Notebooks 26-27 Images/V-752/05_colors.jpg", "Notebooks 26-27 Images/V-752/06_open.jpg", "Notebooks 26-27 Images/V-752/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-752", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-753 Executive Hardbound Leatherette Diary
    // =========================================================================
    {
      id: "v_753-executive-hardbound-leatherette-diary-notebooks-diaries",
      slug: "v_753-executive-hardbound-leatherette-diary",
      productName: "V-753 Executive Hardbound Leatherette Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-753 Executive Hardbound Leatherette Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-753 Executive Hardbound Leatherette Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-753/01_main.jpg", "Notebooks 26-27 Images/V-753/02_texture.jpg", "Notebooks 26-27 Images/V-753/03_closure.jpg", "Notebooks 26-27 Images/V-753/04_deboss.jpg", "Notebooks 26-27 Images/V-753/05_colors.jpg", "Notebooks 26-27 Images/V-753/06_open.jpg", "Notebooks 26-27 Images/V-753/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-753", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-754 Artisan Magnetic Clasp Corporate Journal
    // =========================================================================
    {
      id: "v_754-artisan-magnetic-clasp-corporate-journal-notebooks-diaries",
      slug: "v_754-artisan-magnetic-clasp-corporate-journal",
      productName: "V-754 Artisan Magnetic Clasp Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-754 Artisan Magnetic Clasp Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-754 Artisan Magnetic Clasp Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-754/01_main.jpg", "Notebooks 26-27 Images/V-754/02_texture.jpg", "Notebooks 26-27 Images/V-754/03_closure.jpg", "Notebooks 26-27 Images/V-754/04_deboss.jpg", "Notebooks 26-27 Images/V-754/05_colors.jpg", "Notebooks 26-27 Images/V-754/06_open.jpg", "Notebooks 26-27 Images/V-754/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-754", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-755 Dual-Tone Contrast Executive Notebook
    // =========================================================================
    {
      id: "v_755-dual-tone-contrast-executive-notebook-notebooks-diaries",
      slug: "v_755-dual-tone-contrast-executive-notebook",
      productName: "V-755 Dual-Tone Contrast Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-755 Dual-Tone Contrast Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-755 Dual-Tone Contrast Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-755/01_main.jpg", "Notebooks 26-27 Images/V-755/02_texture.jpg", "Notebooks 26-27 Images/V-755/03_closure.jpg", "Notebooks 26-27 Images/V-755/04_deboss.jpg", "Notebooks 26-27 Images/V-755/05_colors.jpg", "Notebooks 26-27 Images/V-755/06_open.jpg", "Notebooks 26-27 Images/V-755/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-755", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-756 Prestige Debossed Annual Planner Diary
    // =========================================================================
    {
      id: "v_756-prestige-debossed-annual-planner-diary-notebooks-diaries",
      slug: "v_756-prestige-debossed-annual-planner-diary",
      productName: "V-756 Prestige Debossed Annual Planner Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-756 Prestige Debossed Annual Planner Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-756 Prestige Debossed Annual Planner Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-756/01_main.jpg", "Notebooks 26-27 Images/V-756/02_texture.jpg", "Notebooks 26-27 Images/V-756/03_closure.jpg", "Notebooks 26-27 Images/V-756/04_deboss.jpg", "Notebooks 26-27 Images/V-756/05_colors.jpg", "Notebooks 26-27 Images/V-756/06_open.jpg", "Notebooks 26-27 Images/V-756/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-756", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-757 Minimalist Soft-Touch Executive Notebook
    // =========================================================================
    {
      id: "v_757-minimalist-soft-touch-executive-notebook-notebooks-diaries",
      slug: "v_757-minimalist-soft-touch-executive-notebook",
      productName: "V-757 Minimalist Soft-Touch Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-757 Minimalist Soft-Touch Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-757 Minimalist Soft-Touch Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-757/01_main.jpg", "Notebooks 26-27 Images/V-757/02_texture.jpg", "Notebooks 26-27 Images/V-757/03_closure.jpg", "Notebooks 26-27 Images/V-757/04_deboss.jpg", "Notebooks 26-27 Images/V-757/05_colors.jpg", "Notebooks 26-27 Images/V-757/06_open.jpg", "Notebooks 26-27 Images/V-757/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-757", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-758 Signature Stitched Edge Corporate Journal
    // =========================================================================
    {
      id: "v_758-signature-stitched-edge-corporate-journal-notebooks-diaries",
      slug: "v_758-signature-stitched-edge-corporate-journal",
      productName: "V-758 Signature Stitched Edge Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-758 Signature Stitched Edge Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-758 Signature Stitched Edge Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-758/01_main.jpg", "Notebooks 26-27 Images/V-758/02_texture.jpg", "Notebooks 26-27 Images/V-758/03_closure.jpg", "Notebooks 26-27 Images/V-758/04_deboss.jpg", "Notebooks 26-27 Images/V-758/05_colors.jpg", "Notebooks 26-27 Images/V-758/06_open.jpg", "Notebooks 26-27 Images/V-758/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-758", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-770 Luxury Foil-Stamped Executive Organizer
    // =========================================================================
    {
      id: "v_770-luxury-foil-stamped-executive-organizer-notebooks-diaries",
      slug: "v_770-luxury-foil-stamped-executive-organizer",
      productName: "V-770 Luxury Foil-Stamped Executive Organizer",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-770 Luxury Foil-Stamped Executive Organizer featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-770 Luxury Foil-Stamped Executive Organizer is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-770/01_main.jpg", "Notebooks 26-27 Images/V-770/02_texture.jpg", "Notebooks 26-27 Images/V-770/03_closure.jpg", "Notebooks 26-27 Images/V-770/04_deboss.jpg", "Notebooks 26-27 Images/V-770/05_colors.jpg", "Notebooks 26-27 Images/V-770/06_open.jpg", "Notebooks 26-27 Images/V-770/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-770", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-771 Sleek Diagonal Pocket Business Diary
    // =========================================================================
    {
      id: "v_771-sleek-diagonal-pocket-business-diary-notebooks-diaries",
      slug: "v_771-sleek-diagonal-pocket-business-diary",
      productName: "V-771 Sleek Diagonal Pocket Business Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-771 Sleek Diagonal Pocket Business Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-771 Sleek Diagonal Pocket Business Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-771/01_main.jpg", "Notebooks 26-27 Images/V-771/02_texture.jpg", "Notebooks 26-27 Images/V-771/03_closure.jpg", "Notebooks 26-27 Images/V-771/04_deboss.jpg", "Notebooks 26-27 Images/V-771/05_colors.jpg", "Notebooks 26-27 Images/V-771/06_open.jpg", "Notebooks 26-27 Images/V-771/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-771", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-773 Contemporary Matte Grain Corporate Diary
    // =========================================================================
    {
      id: "v_773-contemporary-matte-grain-corporate-diary-notebooks-diaries",
      slug: "v_773-contemporary-matte-grain-corporate-diary",
      productName: "V-773 Contemporary Matte Grain Corporate Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-773 Contemporary Matte Grain Corporate Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-773 Contemporary Matte Grain Corporate Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-773/01_main.jpg", "Notebooks 26-27 Images/V-773/02_texture.jpg", "Notebooks 26-27 Images/V-773/03_closure.jpg", "Notebooks 26-27 Images/V-773/04_deboss.jpg", "Notebooks 26-27 Images/V-773/05_colors.jpg", "Notebooks 26-27 Images/V-773/06_open.jpg", "Notebooks 26-27 Images/V-773/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-773", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-776 Bespoke Handcrafted Executive Notebook
    // =========================================================================
    {
      id: "v_776-bespoke-handcrafted-executive-notebook-notebooks-diaries",
      slug: "v_776-bespoke-handcrafted-executive-notebook",
      productName: "V-776 Bespoke Handcrafted Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-776 Bespoke Handcrafted Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-776 Bespoke Handcrafted Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-776/01_main.jpg", "Notebooks 26-27 Images/V-776/02_texture.jpg", "Notebooks 26-27 Images/V-776/03_closure.jpg", "Notebooks 26-27 Images/V-776/04_deboss.jpg", "Notebooks 26-27 Images/V-776/05_colors.jpg", "Notebooks 26-27 Images/V-776/06_open.jpg", "Notebooks 26-27 Images/V-776/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-776", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-778 Executive Hardbound Leatherette Diary
    // =========================================================================
    {
      id: "v_778-executive-hardbound-leatherette-diary-notebooks-diaries",
      slug: "v_778-executive-hardbound-leatherette-diary",
      productName: "V-778 Executive Hardbound Leatherette Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-778 Executive Hardbound Leatherette Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-778 Executive Hardbound Leatherette Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-778/01_main.jpg", "Notebooks 26-27 Images/V-778/02_texture.jpg", "Notebooks 26-27 Images/V-778/03_closure.jpg", "Notebooks 26-27 Images/V-778/04_deboss.jpg", "Notebooks 26-27 Images/V-778/05_colors.jpg", "Notebooks 26-27 Images/V-778/06_open.jpg", "Notebooks 26-27 Images/V-778/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-778", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-782 Artisan Magnetic Clasp Corporate Journal
    // =========================================================================
    {
      id: "v_782-artisan-magnetic-clasp-corporate-journal-notebooks-diaries",
      slug: "v_782-artisan-magnetic-clasp-corporate-journal",
      productName: "V-782 Artisan Magnetic Clasp Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-782 Artisan Magnetic Clasp Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-782 Artisan Magnetic Clasp Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-782/01_main.jpg", "Notebooks 26-27 Images/V-782/02_texture.jpg", "Notebooks 26-27 Images/V-782/03_closure.jpg", "Notebooks 26-27 Images/V-782/04_deboss.jpg", "Notebooks 26-27 Images/V-782/05_colors.jpg", "Notebooks 26-27 Images/V-782/06_open.jpg", "Notebooks 26-27 Images/V-782/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-782", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-785 Dual-Tone Contrast Executive Notebook
    // =========================================================================
    {
      id: "v_785-dual-tone-contrast-executive-notebook-notebooks-diaries",
      slug: "v_785-dual-tone-contrast-executive-notebook",
      productName: "V-785 Dual-Tone Contrast Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-785 Dual-Tone Contrast Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-785 Dual-Tone Contrast Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-785/01_main.jpg", "Notebooks 26-27 Images/V-785/02_texture.jpg", "Notebooks 26-27 Images/V-785/03_closure.jpg", "Notebooks 26-27 Images/V-785/04_deboss.jpg", "Notebooks 26-27 Images/V-785/05_colors.jpg", "Notebooks 26-27 Images/V-785/06_open.jpg", "Notebooks 26-27 Images/V-785/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-785", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-795 Prestige Debossed Annual Planner Diary
    // =========================================================================
    {
      id: "v_795-prestige-debossed-annual-planner-diary-notebooks-diaries",
      slug: "v_795-prestige-debossed-annual-planner-diary",
      productName: "V-795 Prestige Debossed Annual Planner Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-795 Prestige Debossed Annual Planner Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-795 Prestige Debossed Annual Planner Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-795/01_main.jpg", "Notebooks 26-27 Images/V-795/02_texture.jpg", "Notebooks 26-27 Images/V-795/03_closure.jpg", "Notebooks 26-27 Images/V-795/04_deboss.jpg", "Notebooks 26-27 Images/V-795/05_colors.jpg", "Notebooks 26-27 Images/V-795/06_open.jpg", "Notebooks 26-27 Images/V-795/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-795", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-796 Minimalist Soft-Touch Executive Notebook
    // =========================================================================
    {
      id: "v_796-minimalist-soft-touch-executive-notebook-notebooks-diaries",
      slug: "v_796-minimalist-soft-touch-executive-notebook",
      productName: "V-796 Minimalist Soft-Touch Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-796 Minimalist Soft-Touch Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-796 Minimalist Soft-Touch Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-796/01_main.jpg", "Notebooks 26-27 Images/V-796/02_texture.jpg", "Notebooks 26-27 Images/V-796/03_closure.jpg", "Notebooks 26-27 Images/V-796/04_deboss.jpg", "Notebooks 26-27 Images/V-796/05_colors.jpg", "Notebooks 26-27 Images/V-796/06_open.jpg", "Notebooks 26-27 Images/V-796/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-796", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-797 Signature Stitched Edge Corporate Journal
    // =========================================================================
    {
      id: "v_797-signature-stitched-edge-corporate-journal-notebooks-diaries",
      slug: "v_797-signature-stitched-edge-corporate-journal",
      productName: "V-797 Signature Stitched Edge Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-797 Signature Stitched Edge Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-797 Signature Stitched Edge Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-797/01_main.jpg", "Notebooks 26-27 Images/V-797/02_texture.jpg", "Notebooks 26-27 Images/V-797/03_closure.jpg", "Notebooks 26-27 Images/V-797/04_deboss.jpg", "Notebooks 26-27 Images/V-797/05_colors.jpg", "Notebooks 26-27 Images/V-797/06_open.jpg", "Notebooks 26-27 Images/V-797/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-797", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-798 Luxury Foil-Stamped Executive Organizer
    // =========================================================================
    {
      id: "v_798-luxury-foil-stamped-executive-organizer-notebooks-diaries",
      slug: "v_798-luxury-foil-stamped-executive-organizer",
      productName: "V-798 Luxury Foil-Stamped Executive Organizer",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-798 Luxury Foil-Stamped Executive Organizer featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-798 Luxury Foil-Stamped Executive Organizer is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-798/01_main.jpg", "Notebooks 26-27 Images/V-798/02_texture.jpg", "Notebooks 26-27 Images/V-798/03_closure.jpg", "Notebooks 26-27 Images/V-798/04_deboss.jpg", "Notebooks 26-27 Images/V-798/05_colors.jpg", "Notebooks 26-27 Images/V-798/06_open.jpg", "Notebooks 26-27 Images/V-798/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-798", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-801 Sleek Diagonal Pocket Business Diary
    // =========================================================================
    {
      id: "v_801-sleek-diagonal-pocket-business-diary-notebooks-diaries",
      slug: "v_801-sleek-diagonal-pocket-business-diary",
      productName: "V-801 Sleek Diagonal Pocket Business Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-801 Sleek Diagonal Pocket Business Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-801 Sleek Diagonal Pocket Business Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-801/01_main.jpg", "Notebooks 26-27 Images/V-801/02_texture.jpg", "Notebooks 26-27 Images/V-801/03_closure.jpg", "Notebooks 26-27 Images/V-801/04_deboss.jpg", "Notebooks 26-27 Images/V-801/05_colors.jpg", "Notebooks 26-27 Images/V-801/06_open.jpg", "Notebooks 26-27 Images/V-801/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-801", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-802 Contemporary Matte Grain Corporate Diary
    // =========================================================================
    {
      id: "v_802-contemporary-matte-grain-corporate-diary-notebooks-diaries",
      slug: "v_802-contemporary-matte-grain-corporate-diary",
      productName: "V-802 Contemporary Matte Grain Corporate Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-802 Contemporary Matte Grain Corporate Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-802 Contemporary Matte Grain Corporate Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-802/01_main.jpg", "Notebooks 26-27 Images/V-802/02_texture.jpg", "Notebooks 26-27 Images/V-802/03_closure.jpg", "Notebooks 26-27 Images/V-802/04_deboss.jpg", "Notebooks 26-27 Images/V-802/05_colors.jpg", "Notebooks 26-27 Images/V-802/06_open.jpg", "Notebooks 26-27 Images/V-802/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-802", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-803 Bespoke Handcrafted Executive Notebook
    // =========================================================================
    {
      id: "v_803-bespoke-handcrafted-executive-notebook-notebooks-diaries",
      slug: "v_803-bespoke-handcrafted-executive-notebook",
      productName: "V-803 Bespoke Handcrafted Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-803 Bespoke Handcrafted Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-803 Bespoke Handcrafted Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-803/01_main.jpg", "Notebooks 26-27 Images/V-803/02_texture.jpg", "Notebooks 26-27 Images/V-803/03_closure.jpg", "Notebooks 26-27 Images/V-803/04_deboss.jpg", "Notebooks 26-27 Images/V-803/05_colors.jpg", "Notebooks 26-27 Images/V-803/06_open.jpg", "Notebooks 26-27 Images/V-803/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-803", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-804 Executive Hardbound Leatherette Diary
    // =========================================================================
    {
      id: "v_804-executive-hardbound-leatherette-diary-notebooks-diaries",
      slug: "v_804-executive-hardbound-leatherette-diary",
      productName: "V-804 Executive Hardbound Leatherette Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-804 Executive Hardbound Leatherette Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-804 Executive Hardbound Leatherette Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-804/01_main.jpg", "Notebooks 26-27 Images/V-804/02_texture.jpg", "Notebooks 26-27 Images/V-804/03_closure.jpg", "Notebooks 26-27 Images/V-804/04_deboss.jpg", "Notebooks 26-27 Images/V-804/05_colors.jpg", "Notebooks 26-27 Images/V-804/06_open.jpg", "Notebooks 26-27 Images/V-804/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-804", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-805 Artisan Magnetic Clasp Corporate Journal
    // =========================================================================
    {
      id: "v_805-artisan-magnetic-clasp-corporate-journal-notebooks-diaries",
      slug: "v_805-artisan-magnetic-clasp-corporate-journal",
      productName: "V-805 Artisan Magnetic Clasp Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-805 Artisan Magnetic Clasp Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-805 Artisan Magnetic Clasp Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-805/01_main.jpg", "Notebooks 26-27 Images/V-805/02_texture.jpg", "Notebooks 26-27 Images/V-805/03_closure.jpg", "Notebooks 26-27 Images/V-805/04_deboss.jpg", "Notebooks 26-27 Images/V-805/05_colors.jpg", "Notebooks 26-27 Images/V-805/06_open.jpg", "Notebooks 26-27 Images/V-805/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-805", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-806 Dual-Tone Contrast Executive Notebook
    // =========================================================================
    {
      id: "v_806-dual-tone-contrast-executive-notebook-notebooks-diaries",
      slug: "v_806-dual-tone-contrast-executive-notebook",
      productName: "V-806 Dual-Tone Contrast Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-806 Dual-Tone Contrast Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-806 Dual-Tone Contrast Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-806/01_main.jpg", "Notebooks 26-27 Images/V-806/02_texture.jpg", "Notebooks 26-27 Images/V-806/03_closure.jpg", "Notebooks 26-27 Images/V-806/04_deboss.jpg", "Notebooks 26-27 Images/V-806/05_colors.jpg", "Notebooks 26-27 Images/V-806/06_open.jpg", "Notebooks 26-27 Images/V-806/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-806", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-807 Prestige Debossed Annual Planner Diary
    // =========================================================================
    {
      id: "v_807-prestige-debossed-annual-planner-diary-notebooks-diaries",
      slug: "v_807-prestige-debossed-annual-planner-diary",
      productName: "V-807 Prestige Debossed Annual Planner Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-807 Prestige Debossed Annual Planner Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-807 Prestige Debossed Annual Planner Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-807/01_main.jpg", "Notebooks 26-27 Images/V-807/02_texture.jpg", "Notebooks 26-27 Images/V-807/03_closure.jpg", "Notebooks 26-27 Images/V-807/04_deboss.jpg", "Notebooks 26-27 Images/V-807/05_colors.jpg", "Notebooks 26-27 Images/V-807/06_open.jpg", "Notebooks 26-27 Images/V-807/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-807", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-808 Minimalist Soft-Touch Executive Notebook
    // =========================================================================
    {
      id: "v_808-minimalist-soft-touch-executive-notebook-notebooks-diaries",
      slug: "v_808-minimalist-soft-touch-executive-notebook",
      productName: "V-808 Minimalist Soft-Touch Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-808 Minimalist Soft-Touch Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-808 Minimalist Soft-Touch Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-808/01_main.jpg", "Notebooks 26-27 Images/V-808/02_texture.jpg", "Notebooks 26-27 Images/V-808/03_closure.jpg", "Notebooks 26-27 Images/V-808/04_deboss.jpg", "Notebooks 26-27 Images/V-808/05_colors.jpg", "Notebooks 26-27 Images/V-808/06_open.jpg", "Notebooks 26-27 Images/V-808/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-808", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-809 Signature Stitched Edge Corporate Journal
    // =========================================================================
    {
      id: "v_809-signature-stitched-edge-corporate-journal-notebooks-diaries",
      slug: "v_809-signature-stitched-edge-corporate-journal",
      productName: "V-809 Signature Stitched Edge Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-809 Signature Stitched Edge Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-809 Signature Stitched Edge Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-809/01_main.jpg", "Notebooks 26-27 Images/V-809/02_texture.jpg", "Notebooks 26-27 Images/V-809/03_closure.jpg", "Notebooks 26-27 Images/V-809/04_deboss.jpg", "Notebooks 26-27 Images/V-809/05_colors.jpg", "Notebooks 26-27 Images/V-809/06_open.jpg", "Notebooks 26-27 Images/V-809/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-809", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-810 Luxury Foil-Stamped Executive Organizer
    // =========================================================================
    {
      id: "v_810-luxury-foil-stamped-executive-organizer-notebooks-diaries",
      slug: "v_810-luxury-foil-stamped-executive-organizer",
      productName: "V-810 Luxury Foil-Stamped Executive Organizer",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-810 Luxury Foil-Stamped Executive Organizer featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-810 Luxury Foil-Stamped Executive Organizer is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-810/01_main.jpg", "Notebooks 26-27 Images/V-810/02_texture.jpg", "Notebooks 26-27 Images/V-810/03_closure.jpg", "Notebooks 26-27 Images/V-810/04_deboss.jpg", "Notebooks 26-27 Images/V-810/05_colors.jpg", "Notebooks 26-27 Images/V-810/06_open.jpg", "Notebooks 26-27 Images/V-810/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-810", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-812 Sleek Diagonal Pocket Business Diary
    // =========================================================================
    {
      id: "v_812-sleek-diagonal-pocket-business-diary-notebooks-diaries",
      slug: "v_812-sleek-diagonal-pocket-business-diary",
      productName: "V-812 Sleek Diagonal Pocket Business Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-812 Sleek Diagonal Pocket Business Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-812 Sleek Diagonal Pocket Business Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-812/01_main.jpg", "Notebooks 26-27 Images/V-812/02_texture.jpg", "Notebooks 26-27 Images/V-812/03_closure.jpg", "Notebooks 26-27 Images/V-812/04_deboss.jpg", "Notebooks 26-27 Images/V-812/05_colors.jpg", "Notebooks 26-27 Images/V-812/06_open.jpg", "Notebooks 26-27 Images/V-812/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-812", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-813 Contemporary Matte Grain Corporate Diary
    // =========================================================================
    {
      id: "v_813-contemporary-matte-grain-corporate-diary-notebooks-diaries",
      slug: "v_813-contemporary-matte-grain-corporate-diary",
      productName: "V-813 Contemporary Matte Grain Corporate Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-813 Contemporary Matte Grain Corporate Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-813 Contemporary Matte Grain Corporate Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-813/01_main.jpg", "Notebooks 26-27 Images/V-813/02_texture.jpg", "Notebooks 26-27 Images/V-813/03_closure.jpg", "Notebooks 26-27 Images/V-813/04_deboss.jpg", "Notebooks 26-27 Images/V-813/05_colors.jpg", "Notebooks 26-27 Images/V-813/06_open.jpg", "Notebooks 26-27 Images/V-813/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-813", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-814 Bespoke Handcrafted Executive Notebook
    // =========================================================================
    {
      id: "v_814-bespoke-handcrafted-executive-notebook-notebooks-diaries",
      slug: "v_814-bespoke-handcrafted-executive-notebook",
      productName: "V-814 Bespoke Handcrafted Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-814 Bespoke Handcrafted Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-814 Bespoke Handcrafted Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-814/01_main.jpg", "Notebooks 26-27 Images/V-814/02_texture.jpg", "Notebooks 26-27 Images/V-814/03_closure.jpg", "Notebooks 26-27 Images/V-814/04_deboss.jpg", "Notebooks 26-27 Images/V-814/05_colors.jpg", "Notebooks 26-27 Images/V-814/06_open.jpg", "Notebooks 26-27 Images/V-814/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-814", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-815 Executive Hardbound Leatherette Diary
    // =========================================================================
    {
      id: "v_815-executive-hardbound-leatherette-diary-notebooks-diaries",
      slug: "v_815-executive-hardbound-leatherette-diary",
      productName: "V-815 Executive Hardbound Leatherette Diary",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-815 Executive Hardbound Leatherette Diary featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-815 Executive Hardbound Leatherette Diary is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-815/01_main.jpg", "Notebooks 26-27 Images/V-815/02_texture.jpg", "Notebooks 26-27 Images/V-815/03_closure.jpg", "Notebooks 26-27 Images/V-815/04_deboss.jpg", "Notebooks 26-27 Images/V-815/05_colors.jpg", "Notebooks 26-27 Images/V-815/06_open.jpg", "Notebooks 26-27 Images/V-815/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-815", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-816 Artisan Magnetic Clasp Corporate Journal
    // =========================================================================
    {
      id: "v_816-artisan-magnetic-clasp-corporate-journal-notebooks-diaries",
      slug: "v_816-artisan-magnetic-clasp-corporate-journal",
      productName: "V-816 Artisan Magnetic Clasp Corporate Journal",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-816 Artisan Magnetic Clasp Corporate Journal featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-816 Artisan Magnetic Clasp Corporate Journal is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-816/01_main.jpg", "Notebooks 26-27 Images/V-816/02_texture.jpg", "Notebooks 26-27 Images/V-816/03_closure.jpg", "Notebooks 26-27 Images/V-816/04_deboss.jpg", "Notebooks 26-27 Images/V-816/05_colors.jpg", "Notebooks 26-27 Images/V-816/06_open.jpg", "Notebooks 26-27 Images/V-816/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-816", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    },
    // =========================================================================
    // V-817 Dual-Tone Contrast Executive Notebook
    // =========================================================================
    {
      id: "v_817-dual-tone-contrast-executive-notebook-notebooks-diaries",
      slug: "v_817-dual-tone-contrast-executive-notebook",
      productName: "V-817 Dual-Tone Contrast Executive Notebook",
      category: "Notebooks & Diaries",
      subcategory: "Executive Notebooks & Diaries",
      shortDescription: "V-817 Dual-Tone Contrast Executive Notebook featuring premium vegan leatherette cover, 192 ruled writing pages, and bespoke corporate branding options.",
      longDescription: "The V-817 Dual-Tone Contrast Executive Notebook is crafted for modern professionals, enterprise onboarding, and high-impact corporate gifting. Features an A5 format with 192 ruled pages of bleed-resistant 80 GSM natural ivory paper, lay-flat binding, satin ribbon marker, and durable cover construction. Available with customized blind debossing, screen printing, or metallic foil stamping.",
      material: "Premium Thermo PU Vegan Leatherette + 80 GSM Bleed-Resistant Paper",
      dimensions: "A5 Size: 215 x 148 x 18 mm",
      capacity: "192 Ruled Pages (80 GSM Acid-Free Paper) + Annual Planner & Calendar",
      weight: "385 g",
      coloursVariants: ["Corporate Blue", "Classic Black", "Tan Brown", "Slate Grey", "Bespoke Pantone on Bulk Orders"],
      keyFeatures: [
        "Premium thermo-sensitive vegan leatherette cover for crisp debossing",
        "192 ruled pages on smooth 80 GSM bleed-resistant ivory paper",
        "Lay-flat Smyth sewn binding for comfortable 180\u00b0 writing angle",
        "Integrated satin bookmark ribbon and durable spine",
        "Year planner, calendar pages, and international dialing reference",
        "Available in individual presentation boxes or gift sets"
],
      brandingMethods: ["Blind Debossing", "Hot Foil Stamping (Gold/Silver)", "UV Digital Full-Color Printing", "Laser Engraving on Metal Accents"],
      customizationOptions: "Custom corporate logo debossed on front cover; customized front insert tip-in pages; personalized individual names; branded presentation box.",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days for branded production",
      productImages: ["Notebooks 26-27 Images/V-817/01_main.jpg", "Notebooks 26-27 Images/V-817/02_texture.jpg", "Notebooks 26-27 Images/V-817/03_closure.jpg", "Notebooks 26-27 Images/V-817/04_deboss.jpg", "Notebooks 26-27 Images/V-817/05_colors.jpg", "Notebooks 26-27 Images/V-817/06_open.jpg", "Notebooks 26-27 Images/V-817/07_angle.jpg"],
      brandingImages: [],
      packagingImages: [],
      tags: ["v-817", "notebook", "diary", "leatherette", "executive planner", "a5", "corporate gifting"]
    }
    ,{
      id: "b-001-executive-tri-color-notebook-flask-gift-set",
      slug: "b-001-executive-tri-color-notebook-flask-gift-set",
      name: "B-001 Executive Tri-Color Notebook & Flask Gift Set",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-B-001",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "A5 Debossed Geometric Diary",
      material: "Thermo PU Leatherette / Double-Wall 304 Stainless Steel / Metal",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Premium tri-color corporate welcome set in a custom-fitted presentation box. Includes a geometric debossed A5 thermo-PU executive journal with magnetic clasp, a double-wall vacuum insulated stainless steel temperature flask, and a matching precision metal ballpoint pen. Available in Black, White, and Forest Green colorways.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/B-001 (1).png" }
      ],
      primaryImage: "Gift Sets Images/B-001 (1).png",
      galleryImages: ["Gift Sets Images/B-001 (1).png", "Gift Sets Images/B-001 (2).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "eco-cork-executive-wellness-hydration-gift-hamper",
      slug: "eco-cork-executive-wellness-hydration-gift-hamper",
      name: "Eco-Cork Executive Wellness & Hydration Gift Hamper",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-01",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Embossed Natural Cork Journal",
      material: "Natural Cork / Borosilicate Glass / Stainless Steel",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Sustainable executive gift hamper featuring 100% natural cork finishes. Contains a leaf-embossed cork writing journal, matching cork-wrapped pen, borosilicate glass water bottle with cork sleeve and lanyard, insulated coffee tumbler with cork band, and a metallic cork keyring cardholder duo.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (1).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (1).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (1).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "emerald-saffron-luxury-executive-suite",
      slug: "emerald-saffron-luxury-executive-suite",
      name: "Emerald & Saffron Luxury 4-in-1 Executive Suite",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-02",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Fine Leatherette Cardholder",
      material: "Vegan Leather / Gold-Plated Alloy / Glass Cologne Flacon",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Ultra-sleek corporate accessory gift set presented in a rich emerald green gift casket. Features a gold-accented saffron vegan leather cardholder, matching stitched key fob, gold-trimmed slim ballpoint pen, and a signature pocket luxury cologne spray.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (2).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (2).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (2).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "teal-ochre-premium-executive-journal-combo",
      slug: "teal-ochre-premium-executive-journal-combo",
      name: "Teal & Ochre Premium Executive Journal Combo",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-03",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Contrast Band A5 Hardcover Journal",
      material: "Thermo PU Leatherette / Hardcover / Glass Flacon",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Modern corporate duo set combining an ochre orange A5 executive journal with a magnetic contrast closure band alongside a signature eau de parfum spray flacon, nestled in an emerald green presentation box.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (3).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (3).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (3).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "slate-monochrome-minimalist-desk-gift-set",
      slug: "slate-monochrome-minimalist-desk-gift-set",
      name: "Slate Monochrome Minimalist Desk Gift Set",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-04",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Slim Metal Business Card Holder",
      material: "Stainless Steel / Vegan Leather / Brass Alloy",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Clean, understated executive 3-piece gift set in deep charcoal slate. Features a stainless steel and textured faux leather business card case, a robust key fob, and a matte black rollerball pen.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (4).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (4).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (4).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "nordic-teal-hardbound-journal-keyring-set",
      slug: "nordic-teal-hardbound-journal-keyring-set",
      name: "Nordic Teal Hardbound Journal & Keyring Set",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-05",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Matte Hardcover A5 Journal",
      material: "Matte PU Hardcover / Zinc Alloy / Vegan Leather",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Refined Nordic blue-grey executive stationery duo featuring an A5 Smyth-sewn writing notebook with pen loop and page bookmark, accompanied by a heavy-duty dual-metal and leather keychain.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (5).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (5).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (5).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "dynamic-dual-drinkware-desk-essentials-kit",
      slug: "dynamic-dual-drinkware-desk-essentials-kit",
      name: "Dynamic Dual Drinkware & Desk Essentials Kit",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-06",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Matte Black Sports Sipper",
      material: "Double-Wall 304 Stainless Steel / Silicone / Aluminum",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "High-impact hydration combo kit containing a high-capacity matte black sports water bottle with high-visibility neon accent spout, a vacuum-insulated stainless steel coffee tumbler, a carabiner bottle-opener keyring, and an executive pen.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (6).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (6).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (6).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "silver-minimalist-executive-hydration-planner-set",
      slug: "silver-minimalist-executive-hydration-planner-set",
      name: "Silver Minimalist Executive Hydration & Planner Set",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-07",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "White Stainless Steel Flask",
      material: "Stainless Steel / Vegan Leather / 80 GSM Ivory Paper",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Contemporary corporate welcome kit presented in a steel blue rigid gift case. Contains a dual-tone grey executive diary with front slip pocket, a sleek white insulated drink bottle with loop lid, a matching leatherette keyring, and a ballpoint pen.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (7).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (7).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (7).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "artisan-natural-bamboo-cork-desk-combo",
      slug: "artisan-natural-bamboo-cork-desk-combo",
      name: "Artisan Natural Bamboo & Cork Desk Combo",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-08",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Bamboo Vacuum Travel Tumbler",
      material: "Natural Bamboo / Stainless Steel / PU Leather",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Eco-luxury corporate gift suite crafted with authentic sustainable bamboo and natural materials. Features a double-wall bamboo-clad insulated coffee tumbler, an artisan curved-flap leatherette journal, an analog desk clock, and a bamboo cardholder.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (8).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (8).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (8).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "heritage-saddle-tan-dual-portfolio-gift-box",
      slug: "heritage-saddle-tan-dual-portfolio-gift-box",
      name: "Heritage Saddle Tan Dual-Portfolio Gift Box",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-09",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Premium A5 Organizer Diary",
      material: "Thermo PU Vegan Leather / Zinc Alloy / Brushed Metal",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Executive 5-piece business travel set in rich saddle tan leatherette. Includes an A5 contrast-stitched executive diary, matching bi-fold travel wallet, metal card case, leather key fob, and a precision metal rollerball pen.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (9).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (9).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (9).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "midnight-black-onboarding-executive-kit",
      slug: "midnight-black-onboarding-executive-kit",
      name: "Midnight Black 4-Piece Onboarding Executive Kit",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-10",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "A5 Hardbound Notebook",
      material: "Matte PU / Double-Wall Stainless Steel / Aluminum",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Sleek all-black corporate essentials kit in a hinged presentation case with built-in carry handle. Features an A5 matte black journal, vacuum temperature flask, compact tech case, and metal ballpoint pen.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (10).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (10).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (10).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "monochrome-geometric-corporate-welcome-box",
      slug: "monochrome-geometric-corporate-welcome-box",
      name: "Monochrome Geometric Corporate Welcome Box",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-11",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Two-Tone Split Cover Notebook",
      material: "Dual-Tone PU / ABS Plastic / Metal",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Designer corporate welcome box featuring an architectural colorblocked grey and charcoal A5 notebook, a compact pocket power bank, matte metal keyring, and high-precision pen in an elegant slide-box.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (11).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (11).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (11).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "tech-master-executive-wireless-workstation-suite",
      slug: "tech-master-executive-wireless-workstation-suite",
      name: "Tech Master Executive Wireless Workstation Suite",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-12",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Slim Fast Power Bank",
      material: "Anodized Aluminum / Textured Polycarbonate",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "The ultimate tech gadget gift box for modern professionals. Includes a textured high-capacity power bank, wireless ergonomic dual-mode mouse, multi-port USB-C desktop hub charger, and high-speed metal swivel flash drive.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (12).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (12).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (12).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "signature-black-notebook-thermal-flask-combo",
      slug: "signature-black-notebook-thermal-flask-combo",
      name: "Signature Black Notebook & Thermal Flask Combo",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-13",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Matte Black Hardbound Journal",
      material: "Soft-Touch PU / 304 Stainless Steel / Brass",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Timeless corporate pairing in a luxury textured gift box. Contains a soft-touch matte black executive diary, smart vacuum insulated flask with gold accent rim, and a matching gold-trimmed metal pen.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (13).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (13).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (13).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "obsidian-executive-journal-vacuum-bottle-set",
      slug: "obsidian-executive-journal-vacuum-bottle-set",
      name: "Obsidian Executive Journal & Vacuum Bottle Set",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-14",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Vegan Leather A5 Diary",
      material: "Textured PU / Stainless Steel / Zinc Alloy",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "All-black luxury gift set featuring a textured charcoal-grey A5 planner with magnetic folio closure, double-wall stainless steel travel bottle, and matte black stylus pen.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (14).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (14).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (14).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "geometric-lattice-embossed-diary-tumbler-set",
      slug: "geometric-lattice-embossed-diary-tumbler-set",
      name: "Geometric Lattice Embossed Diary & Tumbler Set",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-15",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Laser-Etched Geometric Journal",
      material: "Lattice Embossed PU / Double-Wall Steel / Copper Pen Core",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Modern architectural styling corporate combo with a silver lattice debossed A5 executive notebook, matching insulated thermal travel mug, and a slim twist metal ballpoint pen.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (15).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (15).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (15).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "charcoal-fluted-executive-notebook-travel-mug-kit",
      slug: "charcoal-fluted-executive-notebook-travel-mug-kit",
      name: "Charcoal Fluted Executive Notebook & Travel Mug Kit",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-16",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Fluted Texture Hardcover Notebook",
      material: "Fluted Matte Polymer / 304 Stainless Steel",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Tactile luxury corporate gift set showcasing a vertical fluted matte notebook, stainless steel travel tumbler with insulated sip lid, and metal rollerball pen in a premium black presentation case.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (16).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (16).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (16).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "royal-azure-blue-journal-smart-flask-combo",
      slug: "royal-azure-blue-journal-smart-flask-combo",
      name: "Royal Azure Blue Journal & Smart Flask Combo",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-17",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Vibrant Royal Blue A5 Journal",
      material: "Thermo PU / 304 Stainless Steel / Metal Alloy",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Striking cobalt blue executive set featuring an A5 hardbound notebook with elastic closure and bookmark ribbon, double-wall smart vacuum thermal flask, and matching blue ballpoint pen.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (17).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (17).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (17).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "bespoke-pine-wood-box-azure-stationery-set",
      slug: "bespoke-pine-wood-box-azure-stationery-set",
      name: "Bespoke Pine Wood Box Azure Stationery Set",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-18",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Natural Wooden Presentation Casket",
      material: "Solid Pine Wood / Vegan Leather / Stainless Steel",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Heirloom-grade corporate presentation suite encased in solid natural pine wood. Contains an azure blue A5 executive diary, metal keychain with leather accent, and a precision metal ballpoint pen.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (18).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (18).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (18).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "citrus-ochre-executive-journal-coffee-mug-set",
      slug: "citrus-ochre-executive-journal-coffee-mug-set",
      name: "Citrus Ochre Executive Journal & Coffee Mug Set",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-19",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Vibrant Ochre PU Journal",
      material: "Thermo PU / Ceramic with Silicone Band / Metal",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Energetic and warm corporate welcome set in bright saffron ochre. Features an A5 soft-touch planner, insulated ceramic coffee tumbler with heat-resistant silicone sleeve, and an ochre metal pen.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (19).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (19).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (19).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "purity-white-thermos-flask-dual-cups-hamper",
      slug: "purity-white-thermos-flask-dual-cups-hamper",
      name: "Purity White Thermos Flask & Dual Cups Hamper",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-20",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Vacuum Insulated Stainless Flask",
      material: "Double-Wall Food Grade 304 Stainless Steel",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Hospitality and executive travel hydration kit in pristine gloss white. Features a 500ml double-wall vacuum insulated thermos flask accompanied by 2 matching stainless steel tea/coffee drinking cups.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (20).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (20).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (20).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "classic-stainless-steel-flask-twin-mug-suite",
      slug: "classic-stainless-steel-flask-twin-mug-suite",
      name: "Classic Stainless Steel Flask & Twin Mug Suite",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-21",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Matte Black Double-Wall Thermos",
      material: "304 Stainless Steel / Food-Grade Polypropylene",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Executive beverage gift box containing a 500ml double-wall thermal insulation flask and two ergonomic handled drinking cups, nested in a molded velvet-finish presentation tray.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (21).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (21).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (21).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "olive-green-fluted-journal-folding-desk-lamp-set",
      slug: "olive-green-fluted-journal-folding-desk-lamp-set",
      name: "Olive Green Fluted Journal & Folding Desk Lamp Set",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-22",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Textured Fluted Diary",
      material: "Textured PU / ABS Polymer / Metal Alloy",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Modern executive workstation gift set featuring an architectural olive green dual-texture journal, matching dark green twist pen, and a rechargeable multi-angle folding LED desk reading lamp.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (22).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (22).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (22).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "executive-luminary-desk-lamp-tech-hamper",
      slug: "executive-luminary-desk-lamp-tech-hamper",
      name: "Executive Luminary Desk Lamp & Tech Hamper",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-23",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Soft-Touch A5 Journal",
      material: "ABS / Hardcover Polymer / LED Components",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Premium corporate lighting & stationery combo kit. Includes an ivory white minimalist executive notebook, a folding LED desk lamp with charging cradle, and accessories in a magnetic black chest.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (23).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (23).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (23).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "smart-ergonomic-wearable-neck-fan-tech-combo",
      slug: "smart-ergonomic-wearable-neck-fan-tech-combo",
      name: "Smart Ergonomic Wearable Neck Fan & Tech Combo",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-24",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Bladeless Hands-Free Personal Neck Fan",
      material: "Medical Grade Silicone / ABS Plastic / Copper Motor",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Wellness and tech innovation corporate hamper containing a bladeless 360-degree personal wearable neck fan and a magnetic Qi-certified wireless charging pad in a padded presentation box.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (24).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (24).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (24).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "artisan-heritage-wooden-casket-corporate-hamper",
      slug: "artisan-heritage-wooden-casket-corporate-hamper",
      name: "Artisan Heritage Wooden Casket Corporate Hamper",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-25",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Handcrafted Solid Wood Chest",
      material: "Seasoned Walnut Wood / Thermo PU / Brass Hardware",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Prestige corporate gift chest crafted from seasoned solid walnut-finish timber with brass latch. Inside features a digital LED wooden desk clock with temperature display, saddle tan leather journal, and rollerball pen.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (25).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (25).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (25).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    }
    ,{
      id: "champagne-luxury-bluetooth-headphone-desk-fan-suite",
      slug: "champagne-luxury-bluetooth-headphone-desk-fan-suite",
      name: "Champagne Luxury Bluetooth Headphone & Desk Fan Suite",
      category: "Gift Sets",
      subCategory: "Corporate Gift Sets",
      sku: "PP-GS-GS-26",
      badge: "Premium Gift Set",
      featured: true,
      price: "Get Quote",
      moq: "50 units (tier discounts at 100+ & 500+ units)",
      leadTime: "5-7 business days",
      rating: 4.9,
      reviewCount: 28,
      inStock: true,
      capacity: "Premium Over-Ear Wireless Headphones",
      material: "Brushed Aluminum / Vegan Memory Foam / ABS",
      insulation: "Multi-item Corporate Gift Set",
      closure: "Presentation Box Packing",
      lidType: "Fitted Luxury Foam Cavity Tray",
      dimensions: "Custom Presentation Packaging",
      weight: "Varies by set configuration",
      features: [
        "Curated premium corporate merchandise suite",
        "Pre-approved for precision UV printing and laser engraving",
        "Rigid high-density presentation gift box packaging",
        "Custom branding available across all bundled items",
        "Strict MOQ 50 units with tier volume discounts"
      ],
      description: "Ultra-premium executive audio and comfort set in champagne gold. Features active noise-cancelling over-ear wireless Bluetooth headphones and a vintage-styled quiet desktop turbine fan in a gold-trimmed gift box.",
      colors: [
        { name: "Executive Corporate Finish", hex: "#1a2530", image: "Gift Sets Images/Gift Sets  (26).png" }
      ],
      primaryImage: "Gift Sets Images/Gift Sets  (26).png",
      galleryImages: ["Gift Sets Images/Gift Sets  (26).png"],
      brandingImages: [],
      packagingImages: [],
      tags: ["gift set", "corporate gifts", "welcome kit", "executive hamper", "merchandise set", "custom branding", "moq 50"]
    },
{
        "id": "ys-101-mercury",
        "slug": "ys-101-mercury-mugs-sippers",
        "productName": "YS-101 MERCURY Water Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "MERCURY premium corporate mugs & sippers with verified capacity of 350ml.",
        "longDescription": "Authentic MERCURY (YS-101) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Water Mug with Woodbase PP inside, offering 350ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Water Mug with Woodbase PP inside",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "350ml",
        "weight": "320 g",
        "coloursVariants": [
            "Orange",
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Water Mug with Woodbase PP inside",
            "Optimal capacity: 350ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-101_main.png",
            "Drinkware Images/YS-101_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-101",
            "MERCURY",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-102-spring",
        "slug": "ys-102-spring-mugs-sippers",
        "productName": "YS-102 SPRING Water Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "SPRING premium corporate mugs & sippers with verified capacity of 400ml.",
        "longDescription": "Authentic SPRING (YS-102) from Printing Point Drinkware Collection. Manufactured with Stainless SteelWater Mug with PP inside, offering 400ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless SteelWater Mug with PP inside",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "400ml",
        "weight": "320 g",
        "coloursVariants": [
            "Orange",
            "Black",
            "White"
        ],
        "keyFeatures": [
            "Premium construction: Stainless SteelWater Mug with PP inside",
            "Optimal capacity: 400ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-102_main.png",
            "Drinkware Images/YS-102_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-102",
            "SPRING",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-103-stark",
        "slug": "ys-103-stark-mugs-sippers",
        "productName": "YS-103 STARK Water Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "STARK premium corporate mugs & sippers with verified capacity of 450ml.",
        "longDescription": "Authentic STARK (YS-103) from Printing Point Drinkware Collection. Manufactured with Stainless SteelWater Mug withTEMPERATUREdisplay, offering 450ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless SteelWater Mug withTEMPERATUREdisplay",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "450ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless SteelWater Mug withTEMPERATUREdisplay",
            "Optimal capacity: 450ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-103_main.png",
            "Drinkware Images/YS-103_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-103",
            "STARK",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-104-fevic",
        "slug": "ys-104-fevic-mugs-sippers",
        "productName": "YS-104 FEVIC",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "FEVIC premium corporate mugs & sippers with verified capacity of 380ml.",
        "longDescription": "Authentic FEVIC (YS-104) from Printing Point Drinkware Collection. Manufactured with OuterPP inside SS with Suction Base, offering 380ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "OuterPP inside SS with Suction Base",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "380ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: OuterPP inside SS with Suction Base",
            "Optimal capacity: 380ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-104_main.png",
            "Drinkware Images/YS-104_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-104",
            "FEVIC",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-105-nova",
        "slug": "ys-105-nova-mugs-sippers",
        "productName": "YS-105 NOVA Insulated Flask",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "NOVA premium corporate mugs & sippers with verified capacity of 500ml.",
        "longDescription": "Authentic NOVA (YS-105) from Printing Point Drinkware Collection. Manufactured with Insulated Flask, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Insulated Flask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Insulated Flask",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-105_main.png",
            "Drinkware Images/YS-105_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-105",
            "NOVA",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-106-fuse",
        "slug": "ys-106-fuse-mugs-sippers",
        "productName": "YS-106 FUSE Tumbler",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "FUSE premium corporate mugs & sippers with verified capacity of 500ml.",
        "longDescription": "Authentic FUSE (YS-106) from Printing Point Drinkware Collection. Manufactured with Stainless SteelTumblerwithSuction Base, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless SteelTumblerwithSuction Base",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black",
            "Grey"
        ],
        "keyFeatures": [
            "Premium construction: Stainless SteelTumblerwithSuction Base",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-106_main.png",
            "Drinkware Images/YS-106_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-106",
            "FUSE",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-107-storm",
        "slug": "ys-107-storm-mugs-sippers",
        "productName": "YS-107 STORM Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "STORM premium corporate mugs & sippers with verified capacity of 500ml.",
        "longDescription": "Authentic STORM (YS-107) from Printing Point Drinkware Collection. Manufactured with Self Stirring Stainless Steel Mug, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Self Stirring Stainless Steel Mug",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "White"
        ],
        "keyFeatures": [
            "Premium construction: Self Stirring Stainless Steel Mug",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-107_main.png",
            "Drinkware Images/YS-107_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-107",
            "STORM",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-108-lucas",
        "slug": "ys-108-lucas-mugs-sippers",
        "productName": "YS-108 LUCAS Tumbler",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "LUCAS premium corporate mugs & sippers with verified capacity of 500ml.",
        "longDescription": "Authentic LUCAS (YS-108) from Printing Point Drinkware Collection. Manufactured with BambooTravelTumbler, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "BambooTravelTumbler",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "Bamboo Black"
        ],
        "keyFeatures": [
            "Premium construction: BambooTravelTumbler",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-108_main.png",
            "Drinkware Images/YS-108_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-108",
            "LUCAS",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-109-bond",
        "slug": "ys-109-bond-mugs-sippers",
        "productName": "YS-109 BOND Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "BOND premium corporate mugs & sippers with verified capacity of 5o0ml.",
        "longDescription": "Authentic BOND (YS-109) from Printing Point Drinkware Collection. Manufactured with Insulated Suction Mug, offering 5o0ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Insulated Suction Mug",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "5o0ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Insulated Suction Mug",
            "Optimal capacity: 5o0ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-109_main.png",
            "Drinkware Images/YS-109_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-109",
            "BOND",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-110-prism",
        "slug": "ys-110-prism-mugs-sippers",
        "productName": "YS-110 PRISM Tumbler",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "PRISM premium corporate mugs & sippers with verified capacity of 600ml.",
        "longDescription": "Authentic PRISM (YS-110) from Printing Point Drinkware Collection. Manufactured with VacumInsulated Tumbler, offering 600ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "VacumInsulated Tumbler",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "600ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: VacumInsulated Tumbler",
            "Optimal capacity: 600ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-110_main.png",
            "Drinkware Images/YS-110_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-110",
            "PRISM",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-111-minic",
        "slug": "ys-111-minic-mugs-sippers",
        "productName": "YS-111 MINIC Cup",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "MINIC premium corporate mugs & sippers with verified capacity of 350ml.",
        "longDescription": "Authentic MINIC (YS-111) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Cup, offering 350ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Cup",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "350ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Cup",
            "Optimal capacity: 350ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-111_main.png",
            "Drinkware Images/YS-111_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-111",
            "MINIC",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-112-saregama",
        "slug": "ys-112-saregama-mugs-sippers",
        "productName": "YS-112 SAREGAMA Water Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "SAREGAMA premium corporate mugs & sippers with verified capacity of 1200ml.",
        "longDescription": "Authentic SAREGAMA (YS-112) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Water MugwithBluetooth Speaker, offering 1200ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Water MugwithBluetooth Speaker",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "1200ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Water MugwithBluetooth Speaker",
            "Optimal capacity: 1200ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-112_main.png",
            "Drinkware Images/YS-112_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-112",
            "SAREGAMA",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-113-cuppa",
        "slug": "ys-113-cuppa-mugs-sippers",
        "productName": "YS-113 CUPPA",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "CUPPA premium corporate mugs & sippers with verified capacity of 900ml.",
        "longDescription": "Authentic CUPPA (YS-113) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Insulated Tumbler, offering 900ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Insulated Tumbler",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "900ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Insulated Tumbler",
            "Optimal capacity: 900ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-113_main.png",
            "Drinkware Images/YS-113_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-113",
            "CUPPA",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-114-bentley",
        "slug": "ys-114-bentley-mugs-sippers",
        "productName": "YS-114 BENTLEY Tumbler",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "BENTLEY premium corporate mugs & sippers with verified capacity of 1200ml.",
        "longDescription": "Authentic BENTLEY (YS-114) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Insulated Tumbler, offering 1200ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Insulated Tumbler",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "1200ml",
        "weight": "320 g",
        "coloursVariants": [
            "White"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Insulated Tumbler",
            "Optimal capacity: 1200ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-114_main.png",
            "Drinkware Images/YS-114_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-114",
            "BENTLEY",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-115-handler",
        "slug": "ys-115-handler-mugs-sippers",
        "productName": "YS-115 HANDLER Tumbler",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "HANDLER premium corporate mugs & sippers with verified capacity of 500ml.",
        "longDescription": "Authentic HANDLER (YS-115) from Printing Point Drinkware Collection. Manufactured with Stainless SteelTumbler, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless SteelTumbler",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless SteelTumbler",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-115_main.png",
            "Drinkware Images/YS-115_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-115",
            "HANDLER",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-116-stringer",
        "slug": "ys-116-stringer-mugs-sippers",
        "productName": "YS-116 STRINGER Tumbler",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "STRINGER premium corporate mugs & sippers with verified capacity of 500ml.",
        "longDescription": "Authentic STRINGER (YS-116) from Printing Point Drinkware Collection. Manufactured with Stainless SteelTumbler, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless SteelTumbler",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "Cream",
            "Pink",
            "Black",
            "Green"
        ],
        "keyFeatures": [
            "Premium construction: Stainless SteelTumbler",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-116_main.png",
            "Drinkware Images/YS-116_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-116",
            "STRINGER",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-117-grippy",
        "slug": "ys-117-grippy-mugs-sippers",
        "productName": "YS-117 GRIPPY Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "GRIPPY premium corporate mugs & sippers with verified capacity of 350ml.",
        "longDescription": "Authentic GRIPPY (YS-117) from Printing Point Drinkware Collection. Manufactured with Grip Suction Mug, offering 350ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Grip Suction Mug",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "350ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Grip Suction Mug",
            "Optimal capacity: 350ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-117_main.png",
            "Drinkware Images/YS-117_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-117",
            "GRIPPY",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-118-tulip",
        "slug": "ys-118-tulip-mugs-sippers",
        "productName": "YS-118 TULIP",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "TULIP premium corporate mugs & sippers with verified capacity of 400ml.",
        "longDescription": "Authentic TULIP (YS-118) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Insulated CanCooler, offering 400ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Insulated CanCooler",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "400ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Insulated CanCooler",
            "Optimal capacity: 400ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-118_main.png",
            "Drinkware Images/YS-118_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-118",
            "TULIP",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-119-espresso",
        "slug": "ys-119-espresso-mugs-sippers",
        "productName": "YS-119 ESPRESSO Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "ESPRESSO premium corporate mugs & sippers with verified capacity of 400ml.",
        "longDescription": "Authentic ESPRESSO (YS-119) from Printing Point Drinkware Collection. Manufactured with Insulated Mug Stainless Steel, offering 400ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Insulated Mug Stainless Steel",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "400ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Insulated Mug Stainless Steel",
            "Optimal capacity: 400ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-119_main.png",
            "Drinkware Images/YS-119_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-119",
            "ESPRESSO",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-120-swamp",
        "slug": "ys-120-swamp-mugs-sippers",
        "productName": "YS-120 SWAMP Tumbler",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "SWAMP premium corporate mugs & sippers with verified capacity of 500ml.",
        "longDescription": "Authentic SWAMP (YS-120) from Printing Point Drinkware Collection. Manufactured with Stainless SteelTumblerwithCork Base, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless SteelTumblerwithCork Base",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless SteelTumblerwithCork Base",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-120_main.png",
            "Drinkware Images/YS-120_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-120",
            "SWAMP",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-121-neptune",
        "slug": "ys-121-neptune-mugs-sippers",
        "productName": "YS-121 NEPTUNE",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "NEPTUNE premium corporate mugs & sippers with verified capacity of 500ml.",
        "longDescription": "Authentic NEPTUNE (YS-121) from Printing Point Drinkware Collection. Manufactured with Stainless Steel with Cork Base, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel with Cork Base",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black",
            "Orange"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel with Cork Base",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-121_main.png",
            "Drinkware Images/YS-121_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-121",
            "NEPTUNE",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-122-camper",
        "slug": "ys-122-camper-mugs-sippers",
        "productName": "YS-122 CAMPER Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "CAMPER premium corporate mugs & sippers with verified capacity of 600ml.",
        "longDescription": "Authentic CAMPER (YS-122) from Printing Point Drinkware Collection. Manufactured with Insulated Mug Stainless Steel, offering 600ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Insulated Mug Stainless Steel",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "600ml",
        "weight": "320 g",
        "coloursVariants": [
            "Green"
        ],
        "keyFeatures": [
            "Premium construction: Insulated Mug Stainless Steel",
            "Optimal capacity: 600ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-122_main.png",
            "Drinkware Images/YS-122_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-122",
            "CAMPER",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-123-jumbo",
        "slug": "ys-123-jumbo-mugs-sippers",
        "productName": "YS-123 JUMBO Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "JUMBO premium corporate mugs & sippers with verified capacity of 500ml.",
        "longDescription": "Authentic JUMBO (YS-123) from Printing Point Drinkware Collection. Manufactured with Insulated Mug with Temperature Display, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Insulated Mug with Temperature Display",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "Coffee",
            "Black",
            "Green"
        ],
        "keyFeatures": [
            "Premium construction: Insulated Mug with Temperature Display",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-123_main.png",
            "Drinkware Images/YS-123_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-123",
            "JUMBO",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-124-wheat",
        "slug": "ys-124-wheat-mugs-sippers",
        "productName": "YS-124 WHEAT Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "WHEAT premium corporate mugs & sippers with verified capacity of 400ml.",
        "longDescription": "Authentic WHEAT (YS-124) from Printing Point Drinkware Collection. Manufactured with Wheat Fiber Mug, offering 400ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Wheat Fiber Mug",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "400ml",
        "weight": "320 g",
        "coloursVariants": [
            "Cream"
        ],
        "keyFeatures": [
            "Premium construction: Wheat Fiber Mug",
            "Optimal capacity: 400ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-124_main.png",
            "Drinkware Images/YS-124_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-124",
            "WHEAT",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-125-cera",
        "slug": "ys-125-cera-mugs-sippers",
        "productName": "YS-125 CERA Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "CERA premium corporate mugs & sippers with verified capacity of 420ml.",
        "longDescription": "Authentic CERA (YS-125) from Printing Point Drinkware Collection. Manufactured with Ceramic Mug with Cork Base, offering 420ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Ceramic Mug with Cork Base",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "420ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Ceramic Mug with Cork Base",
            "Optimal capacity: 420ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-125_main.png",
            "Drinkware Images/YS-125_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-125",
            "CERA",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-126-mocha",
        "slug": "ys-126-mocha-mugs-sippers",
        "productName": "YS-126 MOCHA Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "MOCHA premium corporate mugs & sippers with verified capacity of 500ml.",
        "longDescription": "Authentic MOCHA (YS-126) from Printing Point Drinkware Collection. Manufactured with Insulated Mug with Temperature Display, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Insulated Mug with Temperature Display",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "Coffee",
            "Black",
            "Green"
        ],
        "keyFeatures": [
            "Premium construction: Insulated Mug with Temperature Display",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-126_main.png",
            "Drinkware Images/YS-126_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-126",
            "MOCHA",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-127-signia",
        "slug": "ys-127-signia-mugs-sippers",
        "productName": "YS-127 SIGNIA Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "SIGNIA premium corporate mugs & sippers with verified capacity of 400ml.",
        "longDescription": "Authentic SIGNIA (YS-127) from Printing Point Drinkware Collection. Manufactured with SS Coffee Mug, offering 400ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "SS Coffee Mug",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "400ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black",
            "Cream"
        ],
        "keyFeatures": [
            "Premium construction: SS Coffee Mug",
            "Optimal capacity: 400ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-127_main.png",
            "Drinkware Images/YS-127_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-127",
            "SIGNIA",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-128-ester",
        "slug": "ys-128-ester-mugs-sippers",
        "productName": "YS-128 ESTER Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "ESTER premium corporate mugs & sippers with verified capacity of 400 ml.",
        "longDescription": "Authentic ESTER (YS-128) from Printing Point Drinkware Collection. Manufactured with Wheat Fiber Mug with Bamboo Cap, offering 400 ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Wheat Fiber Mug with Bamboo Cap",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "400 ml",
        "weight": "320 g",
        "coloursVariants": [
            "Wheat"
        ],
        "keyFeatures": [
            "Premium construction: Wheat Fiber Mug with Bamboo Cap",
            "Optimal capacity: 400 ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-128_main.png",
            "Drinkware Images/YS-128_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-128",
            "ESTER",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-129-rubel",
        "slug": "ys-129-rubel-mugs-sippers",
        "productName": "YS-129 RUBEL Mug",
        "category": "Mugs & Sippers",
        "subcategory": "Mugs, Tumblers & Cups",
        "shortDescription": "RUBEL premium corporate mugs & sippers with verified capacity of 400ml.",
        "longDescription": "Authentic RUBEL (YS-129) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Mug with Cork Base, offering 400ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Mug with Cork Base",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "400ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Mug with Cork Base",
            "Optimal capacity: 400ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-129_main.png",
            "Drinkware Images/YS-129_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-129",
            "RUBEL",
            "mugs & sippers",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-201-picasso",
        "slug": "ys-201-picasso-bottles-flasks",
        "productName": "YS-201 PICASSO Glass Bottle",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "PICASSO premium corporate bottles & flasks with verified capacity of 1000ml.",
        "longDescription": "Authentic PICASSO (YS-201) from Printing Point Drinkware Collection. Manufactured with Glass Bottle with Silicone Cover, offering 1000ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Glass Bottle with Silicone Cover",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "1000ml",
        "weight": "320 g",
        "coloursVariants": [
            "Standard Corporate Colors"
        ],
        "keyFeatures": [
            "Premium construction: Glass Bottle with Silicone Cover",
            "Optimal capacity: 1000ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-201_main.png",
            "Drinkware Images/YS-201_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-201",
            "PICASSO",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-202-siquerac",
        "slug": "ys-202-siquerac-bottles-flasks",
        "productName": "YS-202 SIQUERAC Glass Bottle",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "SIQUERAC premium corporate bottles & flasks with verified capacity of 1000ml.",
        "longDescription": "Authentic SIQUERAC (YS-202) from Printing Point Drinkware Collection. Manufactured with Glass Bottle withSilicone Cover, offering 1000ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Glass Bottle withSilicone Cover",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "1000ml",
        "weight": "320 g",
        "coloursVariants": [
            "Standard Corporate Colors"
        ],
        "keyFeatures": [
            "Premium construction: Glass Bottle withSilicone Cover",
            "Optimal capacity: 1000ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-202_main.png",
            "Drinkware Images/YS-202_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-202",
            "SIQUERAC",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-203-revive",
        "slug": "ys-203-revive-bottles-flasks",
        "productName": "YS-203 REVIVE Bottle",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "REVIVE premium corporate bottles & flasks with verified capacity of 550ml.",
        "longDescription": "Authentic REVIVE (YS-203) from Printing Point Drinkware Collection. Manufactured with GlassBottlewithSilicone Cover, offering 550ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "GlassBottlewithSilicone Cover",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "550ml",
        "weight": "320 g",
        "coloursVariants": [
            "Standard Corporate Colors"
        ],
        "keyFeatures": [
            "Premium construction: GlassBottlewithSilicone Cover",
            "Optimal capacity: 550ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-203_main.png",
            "Drinkware Images/YS-203_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-203",
            "REVIVE",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-204-thirst",
        "slug": "ys-204-thirst-bottles-flasks",
        "productName": "YS-204 THIRST Glass Bottle",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "THIRST premium corporate bottles & flasks with verified capacity of 750 ml.",
        "longDescription": "Authentic THIRST (YS-204) from Printing Point Drinkware Collection. Manufactured with Glass Bottle with Cover, offering 750 ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Glass Bottle with Cover",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "750 ml",
        "weight": "320 g",
        "coloursVariants": [
            "Standard Corporate Colors"
        ],
        "keyFeatures": [
            "Premium construction: Glass Bottle with Cover",
            "Optimal capacity: 750 ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-204_main.png",
            "Drinkware Images/YS-204_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-204",
            "THIRST",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-205-sipsta",
        "slug": "ys-205-sipsta-bottles-flasks",
        "productName": "YS-205 SIPSTA Bottle",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "SIPSTA premium corporate bottles & flasks with verified capacity of 1000ml.",
        "longDescription": "Authentic SIPSTA (YS-205) from Printing Point Drinkware Collection. Manufactured with GlassBottlewithCover, offering 1000ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "GlassBottlewithCover",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "1000ml",
        "weight": "320 g",
        "coloursVariants": [
            "Standard Corporate Colors"
        ],
        "keyFeatures": [
            "Premium construction: GlassBottlewithCover",
            "Optimal capacity: 1000ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-205_main.png",
            "Drinkware Images/YS-205_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-205",
            "SIPSTA",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-206-saturn",
        "slug": "ys-206-saturn-bottles-flasks",
        "productName": "YS-206 SATURN Glass Bottle",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "SATURN premium corporate bottles & flasks with verified capacity of 450ml.",
        "longDescription": "Authentic SATURN (YS-206) from Printing Point Drinkware Collection. Manufactured with Glass Bottlewith Silicon Coverand Bamboo Cap, offering 450ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Glass Bottlewith Silicon Coverand Bamboo Cap",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "450ml",
        "weight": "320 g",
        "coloursVariants": [
            "Standard Corporate Colors"
        ],
        "keyFeatures": [
            "Premium construction: Glass Bottlewith Silicon Coverand Bamboo Cap",
            "Optimal capacity: 450ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-206_main.png",
            "Drinkware Images/YS-206_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-206",
            "SATURN",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-207-aura",
        "slug": "ys-207-aura-bottles-flasks",
        "productName": "YS-207 AURA Bottle",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "AURA premium corporate bottles & flasks with verified capacity of 450ml.",
        "longDescription": "Authentic AURA (YS-207) from Printing Point Drinkware Collection. Manufactured with GlassDoubleWall Bottle, offering 450ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "GlassDoubleWall Bottle",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "450ml",
        "weight": "320 g",
        "coloursVariants": [
            "Standard Corporate Colors"
        ],
        "keyFeatures": [
            "Premium construction: GlassDoubleWall Bottle",
            "Optimal capacity: 450ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-207_main.png",
            "Drinkware Images/YS-207_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-207",
            "AURA",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-208-pluto",
        "slug": "ys-208-pluto-bottles-flasks",
        "productName": "YS-208 PLUTO Bottle",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "PLUTO premium corporate bottles & flasks with verified capacity of 750ml.",
        "longDescription": "Authentic PLUTO (YS-208) from Printing Point Drinkware Collection. Manufactured with GlassBottlewithCover, offering 750ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "GlassBottlewithCover",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "750ml",
        "weight": "320 g",
        "coloursVariants": [
            "Standard Corporate Colors"
        ],
        "keyFeatures": [
            "Premium construction: GlassBottlewithCover",
            "Optimal capacity: 750ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-208_main.png",
            "Drinkware Images/YS-208_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-208",
            "PLUTO",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-209-bullet",
        "slug": "ys-209-bullet-bottles-flasks",
        "productName": "YS-209 BULLET Bottle",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "BULLET premium corporate bottles & flasks with verified capacity of 600ml.",
        "longDescription": "Authentic BULLET (YS-209) from Printing Point Drinkware Collection. Manufactured with GlassBottlewithSilicone Cover, offering 600ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "GlassBottlewithSilicone Cover",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "600ml",
        "weight": "320 g",
        "coloursVariants": [
            "Standard Corporate Colors"
        ],
        "keyFeatures": [
            "Premium construction: GlassBottlewithSilicone Cover",
            "Optimal capacity: 600ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-209_main.png",
            "Drinkware Images/YS-209_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-209",
            "BULLET",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-210-mirror",
        "slug": "ys-210-mirror-bottles-flasks",
        "productName": "YS-210 MIRROR Mug",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "MIRROR premium corporate bottles & flasks with verified capacity of 400ml.",
        "longDescription": "Authentic MIRROR (YS-210) from Printing Point Drinkware Collection. Manufactured with :Glass Mug with Cork Sleeve, offering 400ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": ":Glass Mug with Cork Sleeve",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "400ml",
        "weight": "320 g",
        "coloursVariants": [
            "Standard Corporate Colors"
        ],
        "keyFeatures": [
            "Premium construction: :Glass Mug with Cork Sleeve",
            "Optimal capacity: 400ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-210_main.png",
            "Drinkware Images/YS-210_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-210",
            "MIRROR",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-211-jumbo",
        "slug": "ys-211-jumbo-bottles-flasks",
        "productName": "YS-211 JUMBO Mug",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "JUMBO premium corporate bottles & flasks with verified capacity of 450ml.",
        "longDescription": "Authentic JUMBO (YS-211) from Printing Point Drinkware Collection. Manufactured with : Glass Mug with Handle, offering 450ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": ": Glass Mug with Handle",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "450ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: : Glass Mug with Handle",
            "Optimal capacity: 450ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-211_main.png",
            "Drinkware Images/YS-211_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-211",
            "JUMBO",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-212-silica",
        "slug": "ys-212-silica-bottles-flasks",
        "productName": "YS-212 SILICA Bottle",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "SILICA premium corporate bottles & flasks with verified capacity of 400ml.",
        "longDescription": "Authentic SILICA (YS-212) from Printing Point Drinkware Collection. Manufactured with GlassBottlewithPUCover, offering 400ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "GlassBottlewithPUCover",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "400ml",
        "weight": "320 g",
        "coloursVariants": [
            "Standard Corporate Colors"
        ],
        "keyFeatures": [
            "Premium construction: GlassBottlewithPUCover",
            "Optimal capacity: 400ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-212_main.png",
            "Drinkware Images/YS-212_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-212",
            "SILICA",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-213-atlas",
        "slug": "ys-213-atlas-bottles-flasks",
        "productName": "YS-213 ATLAS Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "ATLAS premium corporate bottles & flasks with verified capacity of 600ml.",
        "longDescription": "Authentic ATLAS (YS-213) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Flask with Grip, offering 600ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Flask with Grip",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "600ml",
        "weight": "320 g",
        "coloursVariants": [
            "Blue",
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Flask with Grip",
            "Optimal capacity: 600ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-213_main.png",
            "Drinkware Images/YS-213_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-213",
            "ATLAS",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-214-sinq",
        "slug": "ys-214-sinq-bottles-flasks",
        "productName": "YS-214 SINQ Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "SINQ premium corporate bottles & flasks with verified capacity of 500ml.",
        "longDescription": "Authentic SINQ (YS-214) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Flask, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Flask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Blue",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Flask",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-214_main.png",
            "Drinkware Images/YS-214_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-214",
            "SINQ",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-215-spring",
        "slug": "ys-215-spring-bottles-flasks",
        "productName": "YS-215 SPRING Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "SPRING premium corporate bottles & flasks with verified capacity of 500ml.",
        "longDescription": "Authentic SPRING (YS-215) from Printing Point Drinkware Collection. Manufactured with Stainless SteelFlaskwithWooden Cap, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless SteelFlaskwithWooden Cap",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless SteelFlaskwithWooden Cap",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-215_main.png",
            "Drinkware Images/YS-215_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-215",
            "SPRING",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-216-atlanta",
        "slug": "ys-216-atlanta-bottles-flasks",
        "productName": "YS-216 ATLANTA Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "ATLANTA premium corporate bottles & flasks with verified capacity of 500ml.",
        "longDescription": "Authentic ATLANTA (YS-216) from Printing Point Drinkware Collection. Manufactured with Stainless Steel WaterFlask andMug2in1, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel WaterFlask andMug2in1",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel WaterFlask andMug2in1",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-216_main.png",
            "Drinkware Images/YS-216_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-216",
            "ATLANTA",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-217-brumont",
        "slug": "ys-217-brumont-bottles-flasks",
        "productName": "YS-217 BRUMONT Insulated Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "BRUMONT premium corporate bottles & flasks with verified capacity of 600ml.",
        "longDescription": "Authentic BRUMONT (YS-217) from Printing Point Drinkware Collection. Manufactured with HalfBambooStainless Steel Insulated Flask, offering 600ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "HalfBambooStainless Steel Insulated Flask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "600ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: HalfBambooStainless Steel Insulated Flask",
            "Optimal capacity: 600ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-217_main.png",
            "Drinkware Images/YS-217_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-217",
            "BRUMONT",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-218-crest",
        "slug": "ys-218-crest-bottles-flasks",
        "productName": "YS-218 CREST Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "CREST premium corporate bottles & flasks with verified capacity of 500ml.",
        "longDescription": "Authentic CREST (YS-218) from Printing Point Drinkware Collection. Manufactured with Stainless SteelFlaskwithWoodBase, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless SteelFlaskwithWoodBase",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless SteelFlaskwithWoodBase",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-218_main.png",
            "Drinkware Images/YS-218_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-218",
            "CREST",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-219-thanos",
        "slug": "ys-219-thanos-bottles-flasks",
        "productName": "YS-219 THANOS Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "THANOS premium corporate bottles & flasks with verified capacity of 800ml.",
        "longDescription": "Authentic THANOS (YS-219) from Printing Point Drinkware Collection. Manufactured with Dual SiPSSFlask, offering 800ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Dual SiPSSFlask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "800ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Dual SiPSSFlask",
            "Optimal capacity: 800ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-219_main.png",
            "Drinkware Images/YS-219_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-219",
            "THANOS",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-220-tapman",
        "slug": "ys-220-tapman-bottles-flasks",
        "productName": "YS-220 TAPMAN Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "TAPMAN premium corporate bottles & flasks with verified capacity of 500ml.",
        "longDescription": "Authentic TAPMAN (YS-220) from Printing Point Drinkware Collection. Manufactured with Insulated Temperature Flask, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Insulated Temperature Flask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black",
            "Green"
        ],
        "keyFeatures": [
            "Premium construction: Insulated Temperature Flask",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-220_main.png",
            "Drinkware Images/YS-220_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-220",
            "TAPMAN",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-221-marvel",
        "slug": "ys-221-marvel-bottles-flasks",
        "productName": "YS-221 MARVEL Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "MARVEL premium corporate bottles & flasks with verified capacity of 800ml.",
        "longDescription": "Authentic MARVEL (YS-221) from Printing Point Drinkware Collection. Manufactured with Stainless SteelFlask, offering 800ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless SteelFlask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "800ml",
        "weight": "320 g",
        "coloursVariants": [
            "Pink",
            "Red",
            "Blue",
            "White",
            "Light Green",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless SteelFlask",
            "Optimal capacity: 800ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-221_main.png",
            "Drinkware Images/YS-221_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-221",
            "MARVEL",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-222-antigua",
        "slug": "ys-222-antigua-bottles-flasks",
        "productName": "YS-222 ANTIGUA Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "ANTIGUA premium corporate bottles & flasks with verified capacity of 500ml.",
        "longDescription": "Authentic ANTIGUA (YS-222) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Flask with Wooden Cap, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Flask with Wooden Cap",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Flask with Wooden Cap",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-222_main.png",
            "Drinkware Images/YS-222_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-222",
            "ANTIGUA",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-223-earth",
        "slug": "ys-223-earth-bottles-flasks",
        "productName": "YS-223 EARTH Insulated Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "EARTH premium corporate bottles & flasks with verified capacity of 500ml.",
        "longDescription": "Authentic EARTH (YS-223) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Insulated Flask, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Insulated Flask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Insulated Flask",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-223_main.png",
            "Drinkware Images/YS-223_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-223",
            "EARTH",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-224-earth",
        "slug": "ys-224-earth-bottles-flasks",
        "productName": "YS-224 EARTH Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "EARTH premium corporate bottles & flasks with verified capacity of 750ml.",
        "longDescription": "Authentic EARTH (YS-224) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Flask, offering 750ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Flask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "750ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Flask",
            "Optimal capacity: 750ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-224_main.png",
            "Drinkware Images/YS-224_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-224",
            "EARTH",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-225-traveller",
        "slug": "ys-225-traveller-bottles-flasks",
        "productName": "YS-225 TRAVELLER Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "TRAVELLER premium corporate bottles & flasks with verified capacity of 500ml.",
        "longDescription": "Authentic TRAVELLER (YS-225) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Flask with Mug, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Flask with Mug",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black",
            "Cream"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Flask with Mug",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-225_main.png",
            "Drinkware Images/YS-225_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-225",
            "TRAVELLER",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-226-sinet",
        "slug": "ys-226-sinet-bottles-flasks",
        "productName": "YS-226 SINET Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "SINET premium corporate bottles & flasks with verified capacity of 500ml.",
        "longDescription": "Authentic SINET (YS-226) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Flask with Grip, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Flask with Grip",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "Blue",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Flask with Grip",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-226_main.png",
            "Drinkware Images/YS-226_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-226",
            "SINET",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-227-pepper",
        "slug": "ys-227-pepper-bottles-flasks",
        "productName": "YS-227 PEPPER Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "PEPPER premium corporate bottles & flasks with verified capacity of 750ml.",
        "longDescription": "Authentic PEPPER (YS-227) from Printing Point Drinkware Collection. Manufactured with Stainless Steel FlaskwithHandle, offering 750ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel FlaskwithHandle",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "750ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel FlaskwithHandle",
            "Optimal capacity: 750ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-227_main.png",
            "Drinkware Images/YS-227_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-227",
            "PEPPER",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-228-mark",
        "slug": "ys-228-mark-bottles-flasks",
        "productName": "YS-228 MARK Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "MARK premium corporate bottles & flasks with verified capacity of 600ml.",
        "longDescription": "Authentic MARK (YS-228) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Flask with Handle, offering 600ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Flask with Handle",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "600ml",
        "weight": "320 g",
        "coloursVariants": [
            "Red",
            "Blue",
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Flask with Handle",
            "Optimal capacity: 600ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-228_main.png",
            "Drinkware Images/YS-228_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-228",
            "MARK",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-229-mark",
        "slug": "ys-229-mark-bottles-flasks",
        "productName": "YS-229 MARK Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "MARK premium corporate bottles & flasks with verified capacity of 800ml.",
        "longDescription": "Authentic MARK (YS-229) from Printing Point Drinkware Collection. Manufactured with Stainless Steel FlaskwithHandle, offering 800ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel FlaskwithHandle",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "800ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black",
            "Blue",
            "Green"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel FlaskwithHandle",
            "Optimal capacity: 800ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-229_main.png",
            "Drinkware Images/YS-229_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-229",
            "MARK",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-230-metallica",
        "slug": "ys-230-metallica-bottles-flasks",
        "productName": "YS-230 METALLICA Insulated Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "METALLICA premium corporate bottles & flasks with verified capacity of 800ml.",
        "longDescription": "Authentic METALLICA (YS-230) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Insulated Flask, offering 800ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Insulated Flask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "800ml",
        "weight": "320 g",
        "coloursVariants": [
            "Blue",
            "Black",
            "White"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Insulated Flask",
            "Optimal capacity: 800ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-230_main.png",
            "Drinkware Images/YS-230_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-230",
            "METALLICA",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-231-tulip",
        "slug": "ys-231-tulip-bottles-flasks",
        "productName": "YS-231 TULIP Insulated Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "TULIP premium corporate bottles & flasks with verified capacity of 750ml.",
        "longDescription": "Authentic TULIP (YS-231) from Printing Point Drinkware Collection. Manufactured with Insulated Flask, offering 750ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Insulated Flask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "750ml",
        "weight": "320 g",
        "coloursVariants": [
            "Green",
            "Brown",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Insulated Flask",
            "Optimal capacity: 750ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-231_main.png",
            "Drinkware Images/YS-231_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-231",
            "TULIP",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-232-amrut",
        "slug": "ys-232-amrut-bottles-flasks",
        "productName": "YS-232 AMRUT Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "AMRUT premium corporate bottles & flasks with verified capacity of 600ml.",
        "longDescription": "Authentic AMRUT (YS-232) from Printing Point Drinkware Collection. Manufactured with Stainless SteelFlask, offering 600ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless SteelFlask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "600ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless SteelFlask",
            "Optimal capacity: 600ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-232_main.png",
            "Drinkware Images/YS-232_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-232",
            "AMRUT",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-233-olympus",
        "slug": "ys-233-olympus-bottles-flasks",
        "productName": "YS-233 OLYMPUS Insulated Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "OLYMPUS premium corporate bottles & flasks with verified capacity of 400ml.",
        "longDescription": "Authentic OLYMPUS (YS-233) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Insulated Flask, offering 400ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Insulated Flask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "400ml",
        "weight": "320 g",
        "coloursVariants": [
            "Silver",
            "Metallic Grey",
            "Green"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Insulated Flask",
            "Optimal capacity: 400ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-233_main.png",
            "Drinkware Images/YS-233_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-233",
            "OLYMPUS",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-234-kity",
        "slug": "ys-234-kity-bottles-flasks",
        "productName": "YS-234 KITY Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "KITY premium corporate bottles & flasks with verified capacity of 350ml.",
        "longDescription": "Authentic KITY (YS-234) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Flask with Temperature Display, offering 350ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Flask with Temperature Display",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "350ml",
        "weight": "320 g",
        "coloursVariants": [
            "Pink",
            "Cream",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Flask with Temperature Display",
            "Optimal capacity: 350ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-234_main.png",
            "Drinkware Images/YS-234_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-234",
            "KITY",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-235-attach",
        "slug": "ys-235-attach-bottles-flasks",
        "productName": "YS-235 ATTACH Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "ATTACH premium corporate bottles & flasks with verified capacity of 400ml.",
        "longDescription": "Authentic ATTACH (YS-235) from Printing Point Drinkware Collection. Manufactured with SuctionFlask, offering 400ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "SuctionFlask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "400ml",
        "weight": "320 g",
        "coloursVariants": [
            "White",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: SuctionFlask",
            "Optimal capacity: 400ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-235_main.png",
            "Drinkware Images/YS-235_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-235",
            "ATTACH",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-236-fume",
        "slug": "ys-236-fume-bottles-flasks",
        "productName": "YS-236 FUME Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "FUME premium corporate bottles & flasks with verified capacity of 800ml.",
        "longDescription": "Authentic FUME (YS-236) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Flask, offering 800ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Flask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "800ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Flask",
            "Optimal capacity: 800ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-236_main.png",
            "Drinkware Images/YS-236_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-236",
            "FUME",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-237-wood",
        "slug": "ys-237-wood-bottles-flasks",
        "productName": "YS-237 WOOD Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "WOOD premium corporate bottles & flasks with verified capacity of 500ml.",
        "longDescription": "Authentic WOOD (YS-237) from Printing Point Drinkware Collection. Manufactured with BambooFlaskwithSSinside, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "BambooFlaskwithSSinside",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "Bamboo"
        ],
        "keyFeatures": [
            "Premium construction: BambooFlaskwithSSinside",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-237_main.png",
            "Drinkware Images/YS-237_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-237",
            "WOOD",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-238-elegance",
        "slug": "ys-238-elegance-bottles-flasks",
        "productName": "YS-238 ELEGANCE Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "ELEGANCE premium corporate bottles & flasks with verified capacity of 500ml.",
        "longDescription": "Authentic ELEGANCE (YS-238) from Printing Point Drinkware Collection. Manufactured with Stainless Steel Flask, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless Steel Flask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "Pink",
            "Green",
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless Steel Flask",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-238_main.png",
            "Drinkware Images/YS-238_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-238",
            "ELEGANCE",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-239-magnum",
        "slug": "ys-239-magnum-bottles-flasks",
        "productName": "YS-239 MAGNUM Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "MAGNUM premium corporate bottles & flasks with verified capacity of 500ml.",
        "longDescription": "Authentic MAGNUM (YS-239) from Printing Point Drinkware Collection. Manufactured with Stainless SteelFlaskwithHandleand Cork Base, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "Stainless SteelFlaskwithHandleand Cork Base",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "Black"
        ],
        "keyFeatures": [
            "Premium construction: Stainless SteelFlaskwithHandleand Cork Base",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-239_main.png",
            "Drinkware Images/YS-239_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-239",
            "MAGNUM",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    },
    {
        "id": "ys-240-picollo",
        "slug": "ys-240-picollo-bottles-flasks",
        "productName": "YS-240 PICOLLO Flask",
        "category": "Bottles & Flasks",
        "subcategory": "Bottles & Vacuum Flasks",
        "shortDescription": "PICOLLO premium corporate bottles & flasks with verified capacity of 500ml.",
        "longDescription": "Authentic PICOLLO (YS-240) from Printing Point Drinkware Collection. Manufactured with BambooTemperatureFlask, offering 500ml capacity. Engineered for corporate branding, executive gifting, and enterprise merchandise.",
        "material": "BambooTemperatureFlask",
        "dimensions": "Ergonomic Corporate Profile",
        "capacity": "500ml",
        "weight": "320 g",
        "coloursVariants": [
            "Standard Corporate Colors"
        ],
        "keyFeatures": [
            "Premium construction: BambooTemperatureFlask",
            "Optimal capacity: 500ml",
            "Spill-resistant lid and ergonomic design",
            "Laser engraving and screen printing compatible"
        ],
        "brandingMethods": [
            "Laser Engraving",
            "Screen Printing",
            "UV Print"
        ],
        "customizationOptions": "Precision laser engraving, corporate logo print, bespoke name personalization.",
        "moq": "50 units",
        "packaging": "Individual protective box; optional custom branded rigid gift box available.",
        "leadTime": "5\u20137 business days post artwork approval",
        "idealFor": [
            "Corporate Gifting & Welcome Kits",
            "Employee Wellness & Hydration Initiatives",
            "Conferences, Seminars & Trade Events"
        ],
        "productImages": [
            "Drinkware Images/YS-240_main.png",
            "Drinkware Images/YS-240_hover.png"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "YS-240",
            "PICOLLO",
            "bottles & flasks",
            "drinkware",
            "corporate gifting"
        ]
    }
,
{
    "id": "v-671-simply-more-theme-diary-notebooks-diaries",
    "slug": "v-671-simply-more-theme-diary",
    "productName": "V-671 Simply More Theme Diary",
    "category": "Notebooks & Diaries",
    "subcategory": "Theme Diaries",
    "shortDescription": "Executive A5 hardbound theme diary celebrating minimalism and focus with 344 lined acid-free pages and motivational cover typography.",
    "longDescription": "The V-671 Simply More Theme Diary is crafted around the ethos 'Simplicity creates space for greatness.' Featuring an Executive size format (245 x 180 mm), 344 lined acid-free pages, a tactile woven texture cover, satin ribbon page marker, and durable Smyth-sewn lay-flat binding. Ideal for high-impact executive onboarding and year-round corporate planning.",
    "material": "Premium Printed Hardbound Cover + 80 GSM Acid-Free Lined Paper",
    "dimensions": "Executive Size: 245 x 180 mm",
    "capacity": "344 Lined Pages (Acid-Free) + Year Planner",
    "weight": "420 g",
    "coloursVariants": [
        "Subtle Rose Sand & Wave Pattern",
        "Bespoke Corporate Editions on Bulk Orders"
    ],
    "keyFeatures": [
        "Executive size format (245 x 180 mm) with 344 acid-free lined pages",
        "Premium printed hardbound cover with tactile woven texture styling",
        "Inspirational 'Simply More' cover design with contrast spine accent",
        "Integrated satin bookmark ribbon and lay-flat Smyth-sewn binding",
        "Comprehensive year planner, monthly calendars, and notes sections"
    ],
    "brandingMethods": [
        "Custom Logo Foil Stamping",
        "UV Digital Color Print",
        "Custom Tip-In Pages"
    ],
    "customizationOptions": "Custom corporate insert pages, metallic foil logo stamping on cover, personalized recipient names.",
    "moq": "50 units (tier pricing at 100+ & 500+ units)",
    "packaging": "Individual shrink wrap packaging; custom rigid gift box optional.",
    "leadTime": "5\u20137 business days post artwork approval",
    "idealFor": [
        "Executive Leadership & Management Gifting",
        "Employee Annual Planning & Goal Setting",
        "Corporate Conferences & Year-End Hampers"
    ],
    "productImages": [
        "Theme Diaries Images/V-671/01_main.jpg",
        "Theme Diaries Images/V-671/02_texture.jpg",
        "Theme Diaries Images/V-671/03_closure.jpg",
        "Theme Diaries Images/V-671/04_deboss.jpg",
        "Theme Diaries Images/V-671/05_back.jpg",
        "Theme Diaries Images/V-671/06_open.jpg",
        "Theme Diaries Images/V-671/07_angle.jpg"
    ],
    "brandingImages": [],
    "packagingImages": [],
    "tags": [
        "v-671",
        "theme diary",
        "simply more",
        "notebooks & diaries",
        "executive diary",
        "planner",
        "corporate gifting"
    ]
},
{
    "id": "v-672-one-day-or-day-one-theme-diary-notebooks-diaries",
    "slug": "v-672-one-day-or-day-one-theme-diary",
    "productName": "V-672 One Day Or Day One Theme Diary",
    "category": "Notebooks & Diaries",
    "subcategory": "Theme Diaries",
    "shortDescription": "Inspiring corporate goal-setting theme diary crafted with elegant muted typography, botanical contour accents, and 344 acid-free pages.",
    "longDescription": "The V-672 One Day Or Day One Theme Diary motivates teams with the timeless question: 'One day or Day One? Start now. Your day one matters.' Designed in an Executive 245 x 180 mm profile with 344 acid-free lined pages, contrast teal spine detail, and lay-flat Smyth sewn binding.",
    "material": "Premium Printed Hardbound Cover + 80 GSM Acid-Free Lined Paper",
    "dimensions": "Executive Size: 245 x 180 mm",
    "capacity": "344 Lined Pages (Acid-Free) + Action Planner",
    "weight": "420 g",
    "coloursVariants": [
        "Teal Accent & Botanical Contour",
        "Bespoke Corporate Editions on Bulk Orders"
    ],
    "keyFeatures": [
        "Executive size format (245 x 180 mm) with 344 acid-free lined pages",
        "Motivational 'One Day or Day One' cover with tactile finish",
        "Sleek contrast spine with coordinated satin bookmark ribbon",
        "180\u00b0 lay-flat Smyth sewn binding for comfortable handwriting",
        "Dedicated Action Planner and monthly calendar layouts"
    ],
    "brandingMethods": [
        "Custom Logo Foil Stamping",
        "UV Digital Color Print",
        "Custom Tip-In Pages"
    ],
    "customizationOptions": "Custom logo stamping, front insert pages with executive welcome message, personalized employee names.",
    "moq": "50 units",
    "packaging": "Individual shrink wrap packaging; gift box optional.",
    "leadTime": "5\u20137 business days post artwork approval",
    "idealFor": [
        "New Hire Onboarding & Welcome Kits",
        "Employee Performance & Milestone Awards",
        "Offsite Strategy & Leadership Summits"
    ],
    "productImages": [
        "Theme Diaries Images/V-672/01_main.jpg",
        "Theme Diaries Images/V-672/02_texture.jpg",
        "Theme Diaries Images/V-672/03_closure.jpg",
        "Theme Diaries Images/V-672/04_deboss.jpg",
        "Theme Diaries Images/V-672/05_back.jpg",
        "Theme Diaries Images/V-672/06_open.jpg",
        "Theme Diaries Images/V-672/07_angle.jpg"
    ],
    "brandingImages": [],
    "packagingImages": [],
    "tags": [
        "v-672",
        "theme diary",
        "one day or day one",
        "notebooks & diaries",
        "executive diary",
        "planner"
    ]
},
{
    "id": "v-681-think-within-theme-diary-notebooks-diaries",
    "slug": "v-681-think-within-theme-diary",
    "productName": "V-681 Think Within Theme Diary",
    "category": "Notebooks & Diaries",
    "subcategory": "Theme Diaries",
    "shortDescription": "Contemporary sage green executive theme journal featuring stylized hourglass debossed motifs and reflective productivity quotes.",
    "longDescription": "The V-681 Think Within Theme Diary inspires introspective focus and continuous improvement ('Keep challenging yourself to think better, do better, and be better'). Engineered with 344 acid-free lined pages, brick red spine contrast, and durable hardbound construction.",
    "material": "Premium Printed Hardbound Cover + 80 GSM Acid-Free Lined Paper",
    "dimensions": "Executive Size: 245 x 180 mm",
    "capacity": "344 Lined Pages (Acid-Free) + Calendar Planner",
    "weight": "420 g",
    "coloursVariants": [
        "Sage Green & Terracotta Spine",
        "Bespoke Corporate Editions on Bulk Orders"
    ],
    "keyFeatures": [
        "Hourglass conceptual design celebrating the value of time and focus",
        "Executive 245 x 180 mm profile with 344 lined pages",
        "Textured matte finish with rich tactile feel",
        "Contrasting spine binding and durable ribbon bookmark",
        "High-grade ink-bleed resistant paper"
    ],
    "brandingMethods": [
        "Custom Logo Foil Stamping",
        "UV Digital Color Print",
        "Custom Tip-In Pages"
    ],
    "customizationOptions": "Custom foil logo, personalized names, bespoke corporate insert sheets.",
    "moq": "50 units",
    "packaging": "Individual shrink wrap packaging.",
    "leadTime": "5\u20137 business days",
    "idealFor": [
        "Corporate Strategy & Innovation Teams",
        "Annual Kickoff Meeting Handouts",
        "Executive Client Gifting"
    ],
    "productImages": [
        "Theme Diaries Images/V-681/01_main.jpg",
        "Theme Diaries Images/V-681/02_texture.jpg",
        "Theme Diaries Images/V-681/03_closure.jpg",
        "Theme Diaries Images/V-681/04_deboss.jpg",
        "Theme Diaries Images/V-681/05_back.jpg",
        "Theme Diaries Images/V-681/06_open.jpg",
        "Theme Diaries Images/V-681/07_angle.jpg"
    ],
    "brandingImages": [],
    "packagingImages": [],
    "tags": [
        "v-681",
        "theme diary",
        "think within",
        "notebooks & diaries",
        "executive diary"
    ]
},
{
    "id": "v-682-the-key-unlock-your-future-theme-diary-notebooks-diaries",
    "slug": "v-682-the-key-unlock-your-future-theme-diary",
    "productName": "V-682 The Key Unlock Your Future Theme Diary",
    "category": "Notebooks & Diaries",
    "subcategory": "Theme Diaries",
    "shortDescription": "Striking sapphire and electric blue corporate diary with circular tech-inspired cover detailing and 344 premium lined writing pages.",
    "longDescription": "The V-682 The Key Unlock Your Future Theme Diary is designed around future vision and forward momentum ('Focus today. Shine tomorrow'). Features bold cobalt and electric blue cover art with circuit-inspired concentric geometry, 344 acid-free pages, and ribbon marker.",
    "material": "Premium Printed Hardbound Cover + 80 GSM Acid-Free Lined Paper",
    "dimensions": "Executive Size: 245 x 180 mm",
    "capacity": "344 Lined Pages (Acid-Free) + Strategic Planner",
    "weight": "420 g",
    "coloursVariants": [
        "Electric Cobalt & Tech Blue",
        "Bespoke Corporate Editions on Bulk Orders"
    ],
    "keyFeatures": [
        "Tech-inspired concentric circular motif with gold-yellow focal accent",
        "Executive 245 x 180 mm format with 344 lined pages",
        "Contrast crimson spine with coordinated blue ribbon marker",
        "Lay-flat binding ideal for extensive desktop note taking",
        "Full calendar reference and project tracking templates"
    ],
    "brandingMethods": [
        "Custom Logo Foil Stamping",
        "UV Digital Color Print",
        "Custom Tip-In Pages"
    ],
    "customizationOptions": "Corporate emblem foil branding, custom full-color introductory inserts.",
    "moq": "50 units",
    "packaging": "Individual protective shrink wrap.",
    "leadTime": "5\u20137 business days",
    "idealFor": [
        "Technology, FinTech & Enterprise IT Teams",
        "Leadership Acceleration Programs",
        "Annual Hackathons & Innovation Challenges"
    ],
    "productImages": [
        "Theme Diaries Images/V-682/01_main.jpg",
        "Theme Diaries Images/V-682/02_texture.jpg",
        "Theme Diaries Images/V-682/03_closure.jpg",
        "Theme Diaries Images/V-682/04_deboss.jpg",
        "Theme Diaries Images/V-682/05_back.jpg",
        "Theme Diaries Images/V-682/06_open.jpg",
        "Theme Diaries Images/V-682/07_angle.jpg"
    ],
    "brandingImages": [],
    "packagingImages": [],
    "tags": [
        "v-682",
        "theme diary",
        "the key unlock your future",
        "notebooks & diaries",
        "tech diary"
    ]
},
{
    "id": "v-691-one-world-one-family-one-future-theme-diary-notebooks-diaries",
    "slug": "v-691-one-world-one-family-one-future-theme-diary",
    "productName": "V-691 One World One Family One Future Theme Diary",
    "category": "Notebooks & Diaries",
    "subcategory": "Theme Diaries",
    "shortDescription": "Diplomatic and institutional global vision diary featuring embossed world map cartography, earth motif emblem, and 344 acid-free pages.",
    "longDescription": "The V-691 One World One Family One Future Theme Diary celebrates global unity, sustainable development, and corporate social leadership ('Together as one world, we shape one destiny'). Features vintage parchment texture, world map silhouette, rich mahogany spine, and 344 pages.",
    "material": "Premium Printed Hardbound Cover + 80 GSM Acid-Free Lined Paper",
    "dimensions": "Executive Size: 245 x 180 mm",
    "capacity": "344 Lined Pages (Acid-Free) + International Planner",
    "weight": "420 g",
    "coloursVariants": [
        "Vintage Parchment Map & Mahogany Spine",
        "Bespoke Corporate Editions on Bulk Orders"
    ],
    "keyFeatures": [
        "World map cartography artwork representing unity and international vision",
        "Executive 245 x 180 mm size with 344 smooth writing pages",
        "Deep mahogany leatherette spine accent with matching burgundy ribbon",
        "World time zone reference and international dialing code tables",
        "Smyth-sewn lay-flat binding for comfortable 180\u00b0 writing"
    ],
    "brandingMethods": [
        "Custom Logo Foil Stamping",
        "UV Digital Color Print",
        "Custom Tip-In Pages"
    ],
    "customizationOptions": "Institutional crest foil debossing, customized vision statement insert pages.",
    "moq": "50 units",
    "packaging": "Individual protective wrapping.",
    "leadTime": "5\u20137 business days",
    "idealFor": [
        "International Delegations & Global Conferences",
        "CSR & ESG Annual Milestones",
        "Government & Public Sector Corporate Gifting"
    ],
    "productImages": [
        "Theme Diaries Images/V-691/01_main.jpg",
        "Theme Diaries Images/V-691/02_texture.jpg",
        "Theme Diaries Images/V-691/03_closure.jpg",
        "Theme Diaries Images/V-691/04_deboss.jpg",
        "Theme Diaries Images/V-691/05_back.jpg",
        "Theme Diaries Images/V-691/06_open.jpg",
        "Theme Diaries Images/V-691/07_angle.jpg"
    ],
    "brandingImages": [],
    "packagingImages": [],
    "tags": [
        "v-691",
        "theme diary",
        "one world one family",
        "notebooks & diaries",
        "global diary"
    ]
},
{
    "id": "v-692-beyond-growth-theme-diary-notebooks-diaries",
    "slug": "v-692-beyond-growth-theme-diary",
    "productName": "V-692 Beyond Growth Theme Diary",
    "category": "Notebooks & Diaries",
    "subcategory": "Theme Diaries",
    "shortDescription": "Futuristic corporate leadership planner with faceted stained-glass prism 'G' emblem, crisp architectural layout, and 344 acid-free pages.",
    "longDescription": "The V-692 Beyond Growth Theme Diary embodies high ambition ('Growth begins where comfort ends'). Designed with an ultra-clean white canvas, faceted rainbow prism monogram, vibrant cyan spine stripe, 344 lined pages, and silk bookmark ribbon.",
    "material": "Premium Printed Hardbound Cover + 80 GSM Acid-Free Lined Paper",
    "dimensions": "Executive Size: 245 x 180 mm",
    "capacity": "344 Lined Pages (Acid-Free) + Leadership Tracker",
    "weight": "420 g",
    "coloursVariants": [
        "Architectural White & Prism Monogram",
        "Bespoke Corporate Editions on Bulk Orders"
    ],
    "keyFeatures": [
        "Faceted geometric spectrum emblem symbolizing multifaceted growth",
        "Executive 245 x 180 mm proportions with 344 ruled pages",
        "Vibrant cyan spine stripe with coordinated white bookmark ribbon",
        "Bleed-resistant 80 GSM paper suitable for fountain and rollerball pens",
        "Smyth-sewn lay-flat binding"
    ],
    "brandingMethods": [
        "Custom Logo Foil Stamping",
        "UV Digital Color Print",
        "Custom Tip-In Pages"
    ],
    "customizationOptions": "Silver metallic foil logo stamping, custom corporate tip-in sheets.",
    "moq": "50 units",
    "packaging": "Individual shrink wrap packaging.",
    "leadTime": "5\u20137 business days",
    "idealFor": [
        "High-Performance Sales & Leadership Teams",
        "Scale-Up & Corporate Fast-Track Programs",
        "Annual Excellence Award Winners"
    ],
    "productImages": [
        "Theme Diaries Images/V-692/01_main.jpg",
        "Theme Diaries Images/V-692/02_texture.jpg",
        "Theme Diaries Images/V-692/03_closure.jpg",
        "Theme Diaries Images/V-692/04_deboss.jpg",
        "Theme Diaries Images/V-692/05_back.jpg",
        "Theme Diaries Images/V-692/06_open.jpg",
        "Theme Diaries Images/V-692/07_angle.jpg"
    ],
    "brandingImages": [],
    "packagingImages": [],
    "tags": [
        "v-692",
        "theme diary",
        "beyond growth",
        "notebooks & diaries",
        "leadership diary"
    ]
},
{
    "id": "v-971-wellness-with-you-theme-diary-notebooks-diaries",
    "slug": "v-971-wellness-with-you-theme-diary",
    "productName": "V-971 Wellness With You Theme Diary",
    "category": "Notebooks & Diaries",
    "subcategory": "Theme Diaries",
    "shortDescription": "Mindfulness and employee wellness theme diary featuring organic stone-sculpture artwork, tactile leatherette spine, and 344 acid-free pages.",
    "longDescription": "The V-971 Wellness With You Theme Diary advocates mental wellbeing and physical vitality ('A healthy outside starts from the inside'). Highlights organic stone sculpture human figurines, textured ivory cover, walnut leatherette spine, and 344 pages.",
    "material": "Premium Printed Hardbound Cover + 80 GSM Acid-Free Lined Paper",
    "dimensions": "Executive Size: 245 x 180 mm",
    "capacity": "344 Lined Pages (Acid-Free) + Wellness Tracker",
    "weight": "420 g",
    "coloursVariants": [
        "Warm Ivory & Walnut Spine",
        "Bespoke Corporate Editions on Bulk Orders"
    ],
    "keyFeatures": [
        "Organic wellness aesthetic highlighting work-life mindfulness",
        "Executive 245 x 180 mm profile with 344 lined pages",
        "Walnut brown textured leatherette spine with satin bookmark",
        "Daily habit and wellness tracking spaces",
        "180\u00b0 Smyth-sewn lay-flat binding"
    ],
    "brandingMethods": [
        "Custom Logo Foil Stamping",
        "UV Digital Color Print",
        "Custom Tip-In Pages"
    ],
    "customizationOptions": "Corporate wellness campaign branding, custom wellness pledge insert page.",
    "moq": "50 units",
    "packaging": "Individual shrink wrap packaging.",
    "leadTime": "5\u20137 business days",
    "idealFor": [
        "Corporate Wellness & Employee Care Initiatives",
        "HR Onboarding & Health Month Campaigns",
        "Healthcare, Wellness & Life Sciences Firms"
    ],
    "productImages": [
        "Theme Diaries Images/V-971/01_main.jpg",
        "Theme Diaries Images/V-971/02_texture.jpg",
        "Theme Diaries Images/V-971/03_closure.jpg",
        "Theme Diaries Images/V-971/04_deboss.jpg",
        "Theme Diaries Images/V-971/05_back.jpg",
        "Theme Diaries Images/V-971/06_open.jpg",
        "Theme Diaries Images/V-971/07_angle.jpg"
    ],
    "brandingImages": [],
    "packagingImages": [],
    "tags": [
        "v-971",
        "theme diary",
        "wellness with you",
        "notebooks & diaries",
        "wellness diary"
    ]
},
{
    "id": "v-972-live-blessed-theme-diary-notebooks-diaries",
    "slug": "v-972-live-blessed-theme-diary",
    "productName": "V-972 Live Blessed Theme Diary",
    "category": "Notebooks & Diaries",
    "subcategory": "Theme Diaries",
    "shortDescription": "Warm latte-toned gratitude diary with fine guilloche line art, botanical accent, 344 smooth writing pages, and motivational daily prompts.",
    "longDescription": "The V-972 Live Blessed Theme Diary grounds everyday corporate achievements in gratitude and purpose ('Live with gratitude. Grow with purpose'). Designed in soothing latte hues with circular sacred geometry line art, copper spine, and 344 pages.",
    "material": "Premium Printed Hardbound Cover + 80 GSM Acid-Free Lined Paper",
    "dimensions": "Executive Size: 245 x 180 mm",
    "capacity": "344 Lined Pages (Acid-Free) + Gratitude Planner",
    "weight": "420 g",
    "coloursVariants": [
        "Latte Sand & Copper Spine",
        "Bespoke Corporate Editions on Bulk Orders"
    ],
    "keyFeatures": [
        "Guilloche circular geometry with organic leaf accent",
        "Executive 245 x 180 mm sizing with 344 smooth writing pages",
        "Rich copper-toned spine binding with ivory ribbon marker",
        "Smyth-sewn lay-flat binding for comfortable journal entries",
        "Year planner and monthly calendar templates"
    ],
    "brandingMethods": [
        "Custom Logo Foil Stamping",
        "UV Digital Color Print",
        "Custom Tip-In Pages"
    ],
    "customizationOptions": "Rose gold or copper foil logo stamping, personalized tip-in pages.",
    "moq": "50 units",
    "packaging": "Individual protective shrink wrap.",
    "leadTime": "5\u20137 business days",
    "idealFor": [
        "Festive & Thanksgiving Corporate Hampers",
        "Year-End Appreciation Gifts for Key Clients",
        "Employee Work Anniversary Tokens"
    ],
    "productImages": [
        "Theme Diaries Images/V-972/01_main.jpg",
        "Theme Diaries Images/V-972/02_texture.jpg",
        "Theme Diaries Images/V-972/03_closure.jpg",
        "Theme Diaries Images/V-972/04_deboss.jpg",
        "Theme Diaries Images/V-972/05_back.jpg",
        "Theme Diaries Images/V-972/06_open.jpg",
        "Theme Diaries Images/V-972/07_angle.jpg"
    ],
    "brandingImages": [],
    "packagingImages": [],
    "tags": [
        "v-972",
        "theme diary",
        "live blessed",
        "notebooks & diaries",
        "gratitude diary"
    ]
},
{
    "id": "v-973-the-zen-life-theme-diary-notebooks-diaries",
    "slug": "v-973-the-zen-life-theme-diary",
    "productName": "V-973 The Zen Life Theme Diary",
    "category": "Notebooks & Diaries",
    "subcategory": "Theme Diaries",
    "shortDescription": "Harmonious workstation diary highlighting collaborative balance and calm productivity with woven textured spine and 344 lined pages.",
    "longDescription": "The V-973 The Zen Life Theme Diary encourages sustainable work rhythm ('Find balance, and everything else finds its place'). Features collaborative hands interlocking artwork, textured micro-dot embossing, warm camel spine, and 344 acid-free pages.",
    "material": "Premium Printed Hardbound Cover + 80 GSM Acid-Free Lined Paper",
    "dimensions": "Executive Size: 245 x 180 mm",
    "capacity": "344 Lined Pages (Acid-Free) + Work-Life Planner",
    "weight": "420 g",
    "coloursVariants": [
        "Camel Khaki & Micro-Dot Texture",
        "Bespoke Corporate Editions on Bulk Orders"
    ],
    "keyFeatures": [
        "Collaborative hands motif celebrating team harmony and balanced energy",
        "Executive 245 x 180 mm format with 344 ruled pages",
        "Textured camel leatherette spine with coordinated cream ribbon marker",
        "Lay-flat Smyth sewn binding for ease of writing",
        "Comprehensive monthly overview and goals sections"
    ],
    "brandingMethods": [
        "Custom Logo Foil Stamping",
        "UV Digital Color Print",
        "Custom Tip-In Pages"
    ],
    "customizationOptions": "Custom foil logo, executive introduction page, personalized names.",
    "moq": "50 units",
    "packaging": "Individual shrink wrap packaging.",
    "leadTime": "5\u20137 business days",
    "idealFor": [
        "Team Building & Culture Enhancement Programs",
        "Cross-Functional Department Offsites",
        "Employee Wellbeing Kits"
    ],
    "productImages": [
        "Theme Diaries Images/V-973/01_main.jpg",
        "Theme Diaries Images/V-973/02_texture.jpg",
        "Theme Diaries Images/V-973/03_closure.jpg",
        "Theme Diaries Images/V-973/04_deboss.jpg",
        "Theme Diaries Images/V-973/05_back.jpg",
        "Theme Diaries Images/V-973/06_open.jpg",
        "Theme Diaries Images/V-973/07_angle.jpg"
    ],
    "brandingImages": [],
    "packagingImages": [],
    "tags": [
        "v-973",
        "theme diary",
        "the zen life",
        "notebooks & diaries",
        "zen diary"
    ]
},
{
    "id": "v-976-slowly-but-surely-theme-diary-notebooks-diaries",
    "slug": "v-976-slowly-but-surely-theme-diary",
    "productName": "V-976 Slowly But Surely Theme Diary",
    "category": "Notebooks & Diaries",
    "subcategory": "Theme Diaries",
    "shortDescription": "Upward trajectory growth diary highlighting perseverance and progressive achievement with ascending ribbon path and amber spine.",
    "longDescription": "The V-976 Slowly But Surely Theme Diary celebrates steady persistence ('Growth starts when excuses end'). Cover design features silhouette climbers traversing an ascending ribbon path toward peak achievement, paired with amber spine, 344 acid-free pages, and ribbon marker.",
    "material": "Premium Printed Hardbound Cover + 80 GSM Acid-Free Lined Paper",
    "dimensions": "Executive Size: 245 x 180 mm",
    "capacity": "344 Lined Pages (Acid-Free) + Milestone Planner",
    "weight": "420 g",
    "coloursVariants": [
        "Warm Cream & Amber Spine",
        "Bespoke Corporate Editions on Bulk Orders"
    ],
    "keyFeatures": [
        "Ascending growth pathway artwork depicting perseverance and team ascent",
        "Executive 245 x 180 mm size with 344 acid-free lined pages",
        "Amber orange spine with matching bright ribbon bookmark",
        "Lay-flat Smyth sewn binding for smooth 180\u00b0 page turns",
        "Quarterly milestone tracking and project review sections"
    ],
    "brandingMethods": [
        "Custom Logo Foil Stamping",
        "UV Digital Color Print",
        "Custom Tip-In Pages"
    ],
    "customizationOptions": "Gold foil logo debossing, customized team milestone insert pages.",
    "moq": "50 units",
    "packaging": "Individual shrink wrap packaging.",
    "leadTime": "5\u20137 business days",
    "idealFor": [
        "Sales Target & Goal-Setting Kickoffs",
        "Annual Appraisal & Promotion Gifts",
        "Leadership Growth Mentorship Programs"
    ],
    "productImages": [
        "Theme Diaries Images/V-976/01_main.jpg",
        "Theme Diaries Images/V-976/02_texture.jpg",
        "Theme Diaries Images/V-976/03_closure.jpg",
        "Theme Diaries Images/V-976/04_deboss.jpg",
        "Theme Diaries Images/V-976/05_back.jpg",
        "Theme Diaries Images/V-976/06_open.jpg",
        "Theme Diaries Images/V-976/07_angle.jpg"
    ],
    "brandingImages": [],
    "packagingImages": [],
    "tags": [
        "v-976",
        "theme diary",
        "slowly but surely",
        "notebooks & diaries",
        "growth diary"
    ]
},
{
        "id": "gs-182-royal-peacock-6-partition-german-silver-box",
        "slug": "gs-182-royal-peacock-6-partition-german-silver-box",
        "productName": "GS-182 Royal Peacock 6-Partition German Silver Box",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver gs-182 royal peacock 6-partition german silver box by master artisans. Features 6 internal partitions \u2022 velvet lining \u2022 intricate peacock embossing.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. 6 Internal Partitions \u2022 Velvet Lining \u2022 Intricate Peacock Embossing. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "6 Internal Partitions \u2022 Velvet Lining \u2022 Intricate Peacock Embossing",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/GS-182/01_GS-182_1.jpeg",
            "German Silver Images/GS-182/02_GS-182_2.jpeg",
            "German Silver Images/GS-182/03_GS-182_3.jpeg",
            "German Silver Images/GS-182/04_GS-182_4.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "gs-182",
            "gs-182-royal-peacock-6-partition-german-silver-box"
        ]
    },
    {
        "id": "gs-185-floral-filigree-4-partition-german-silver-box",
        "slug": "gs-185-floral-filigree-4-partition-german-silver-box",
        "productName": "GS-185 Floral Filigree 4-Partition German Silver Box",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver gs-185 floral filigree 4-partition german silver box by master artisans. Features 4 removable partitions \u2022 hinged lid \u2022 intricate floral motifs.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. 4 Removable Partitions \u2022 Hinged Lid \u2022 Intricate Floral Motifs. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "4 Removable Partitions \u2022 Hinged Lid \u2022 Intricate Floral Motifs",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/GS-185/02_GS-185_1.png",
            "German Silver Images/GS-185/03_GS-185_2.jpeg",
            "German Silver Images/GS-185/04_GS-185_3.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "gs-185",
            "gs-185-floral-filigree-4-partition-german-silver-box"
        ]
    },
    {
        "id": "gs-801-new-silver-peacock-6-partition-dry-fruit-box",
        "slug": "gs-801-new-silver-peacock-6-partition-dry-fruit-box",
        "productName": "GS-801 New Silver Peacock 6-Partition Dry Fruit Box",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver gs-801 new silver peacock 6-partition dry fruit box by master artisans. Features 6 curved partitions \u2022 high polish silver \u2022 sculpted peacock handle.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. 6 Curved Partitions \u2022 High Polish Silver \u2022 Sculpted Peacock Handle. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "6 Curved Partitions \u2022 High Polish Silver \u2022 Sculpted Peacock Handle",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/GS-801/01_GS-801_1.jpeg",
            "German Silver Images/GS-801/02_GS-801_2.jpeg",
            "German Silver Images/GS-801/03_GS-801_3.jpeg",
            "German Silver Images/GS-801/04_GS-801_4.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "gs-801",
            "gs-801-new-silver-peacock-6-partition-dry-fruit-box"
        ]
    },
    {
        "id": "gs-2083-imperial-silver-big-dry-fruit-hamper-box",
        "slug": "gs-2083-imperial-silver-big-dry-fruit-hamper-box",
        "productName": "GS-2083 Imperial Silver Big Dry Fruit Hamper Box",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver gs-2083 imperial silver big dry fruit hamper box by master artisans. Features high capacity hamper box \u2022 velvet cushion lining \u2022 ornate claw feet.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. High Capacity Hamper Box \u2022 Velvet Cushion Lining \u2022 Ornate Claw Feet. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "High Capacity Hamper Box \u2022 Velvet Cushion Lining \u2022 Ornate Claw Feet",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/GS-2083/01_GS-2083_1.jpeg",
            "German Silver Images/GS-2083/02_GS-2083_2.jpeg",
            "German Silver Images/GS-2083/03_GS-2083_3.jpeg",
            "German Silver Images/GS-2083/04_GS-2083_4.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "gs-2083",
            "gs-2083-imperial-silver-big-dry-fruit-hamper-box"
        ]
    },
    {
        "id": "gs-2086m-royal-round-peacock-4-partition-hamper-box",
        "slug": "gs-2086m-royal-round-peacock-4-partition-hamper-box",
        "productName": "GS-2086M Royal Round Peacock 4-Partition Hamper Box",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver gs-2086m royal round peacock 4-partition hamper box by master artisans. Features circular 4-partition \u2022 domed peacock lid \u2022 hand-painted lavender enamel.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. Circular 4-Partition \u2022 Domed Peacock Lid \u2022 Hand-Painted Lavender Enamel. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "Circular 4-Partition \u2022 Domed Peacock Lid \u2022 Hand-Painted Lavender Enamel",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/GS-2086M/01_GS-2086M_1.jpeg",
            "German Silver Images/GS-2086M/02_GS-2086M_2.jpeg",
            "German Silver Images/GS-2086M/03_GS-2086M_3.jpeg",
            "German Silver Images/GS-2086M/04_GS-2086M_4.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "gs-2086m",
            "gs-2086m-royal-round-peacock-4-partition-hamper-box"
        ]
    },
    {
        "id": "gs-177-peacock-2-partition-handcrafted-sweet-box",
        "slug": "gs-177-peacock-2-partition-handcrafted-sweet-box",
        "productName": "GS-177 Peacock 2-Partition Handcrafted Sweet Box",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver gs-177 peacock 2-partition handcrafted sweet box by master artisans. Features 2 compartments \u2022 lavender enamel accent \u2022 dual peacock chasing.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. 2 Compartments \u2022 Lavender Enamel Accent \u2022 Dual Peacock Chasing. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "2 Compartments \u2022 Lavender Enamel Accent \u2022 Dual Peacock Chasing",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/GS-177/01_GS-177_1.jpeg",
            "German Silver Images/GS-177/02_GS-177_2.jpeg",
            "German Silver Images/GS-177/03_GS-177_3.jpeg",
            "German Silver Images/GS-177/04_GS-177_4.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "gs-177",
            "gs-177-peacock-2-partition-handcrafted-sweet-box"
        ]
    },
    {
        "id": "gs-0233-2-dry-fruit-open-bowls-with-matching-tray-set",
        "slug": "gs-0233-2-dry-fruit-open-bowls-with-matching-tray-set",
        "productName": "GS-0233 2 Dry Fruit Open Bowls with Matching Tray Set",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver gs-0233 2 dry fruit open bowls with matching tray set by master artisans. Features 2 ornate claw-foot bowls \u2022 intricate carved serving tray \u2022 mirror finish.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. 2 Ornate Claw-Foot Bowls \u2022 Intricate Carved Serving Tray \u2022 Mirror Finish. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "2 Ornate Claw-Foot Bowls \u2022 Intricate Carved Serving Tray \u2022 Mirror Finish",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/GS-0233/01_GS-0233_1.jpeg",
            "German Silver Images/GS-0233/02_GS-0233_2.jpeg",
            "German Silver Images/GS-0233/03_GS-0233_3.jpeg",
            "German Silver Images/GS-0233/04_GS-0233_4.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "gs-0233",
            "gs-0233-2-dry-fruit-open-bowls-with-matching-tray-set"
        ]
    },
    {
        "id": "gs-137a-single-peacock-elevated-pedestal-bowl",
        "slug": "gs-137a-single-peacock-elevated-pedestal-bowl",
        "productName": "GS-137A Single Peacock Elevated Pedestal Bowl",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver gs-137a single peacock elevated pedestal bowl by master artisans. Features pedestal foot \u2022 long peacock neck handle \u2022 golden yellow enamel foot.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. Pedestal Foot \u2022 Long Peacock Neck Handle \u2022 Golden Yellow Enamel Foot. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "Pedestal Foot \u2022 Long Peacock Neck Handle \u2022 Golden Yellow Enamel Foot",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/GS-137A/01_GS-137A_1.jpeg",
            "German Silver Images/GS-137A/02_GS-137A_2.jpeg",
            "German Silver Images/GS-137A/03_GS-137A_3.jpeg",
            "German Silver Images/GS-137A/04_GS-137A_4.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "gs-137a",
            "gs-137a-single-peacock-elevated-pedestal-bowl"
        ]
    },
    {
        "id": "gs-191-twin-peacock-metal-dry-fruit-boat-bowl",
        "slug": "gs-191-twin-peacock-metal-dry-fruit-boat-bowl",
        "productName": "GS-191 Twin Peacock Metal Dry Fruit Boat Bowl",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver gs-191 twin peacock metal dry fruit boat bowl by master artisans. Features twin peacock handles \u2022 boat shaped basin \u2022 pearl enamel interior.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. Twin Peacock Handles \u2022 Boat Shaped Basin \u2022 Pearl Enamel Interior. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "Twin Peacock Handles \u2022 Boat Shaped Basin \u2022 Pearl Enamel Interior",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/GS-191/01_GS-191_1.jpeg",
            "German Silver Images/GS-191/02_GS-191_2.jpeg",
            "German Silver Images/GS-191/03_GS-191_3.jpeg",
            "German Silver Images/GS-191/04_GS-191_4.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "gs-191",
            "gs-191-twin-peacock-metal-dry-fruit-boat-bowl"
        ]
    },
    {
        "id": "gs-3241-imperial-baroque-candle-stand-pair",
        "slug": "gs-3241-imperial-baroque-candle-stand-pair",
        "productName": "GS-3241 Imperial Baroque Candle Stand Pair",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver gs-3241 imperial baroque candle stand pair by master artisans. Features set of 2 candle pillars \u2022 fluted renaissance stem \u2022 weighted filigree base.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. Set of 2 Candle Pillars \u2022 Fluted Renaissance Stem \u2022 Weighted Filigree Base. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "Set of 2 Candle Pillars \u2022 Fluted Renaissance Stem \u2022 Weighted Filigree Base",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/GS-3241/01_GS-3241_1.jpeg",
            "German Silver Images/GS-3241/02_GS-3241_2.jpeg",
            "German Silver Images/GS-3241/03_GS-3241_3.jpeg",
            "German Silver Images/GS-3241/04_GS-3241_4.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "gs-3241",
            "gs-3241-imperial-baroque-candle-stand-pair"
        ]
    },
    {
        "id": "hm-6517-royal-enamelled-candy-sugar-box-with-spoon",
        "slug": "hm-6517-royal-enamelled-candy-sugar-box-with-spoon",
        "productName": "HM-6517 Royal Enamelled Candy & Sugar Box with Spoon",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver hm-6517 royal enamelled candy & sugar box with spoon by master artisans. Features hand-painted cloisonn\u00e9 enamel \u2022 crown knob \u2022 matched brass spoon.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. Hand-Painted Cloisonn\u00e9 Enamel \u2022 Crown Knob \u2022 Matched Brass Spoon. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "Hand-Painted Cloisonn\u00e9 Enamel \u2022 Crown Knob \u2022 Matched Brass Spoon",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/HM-6517/01_HM-6517_1.jpeg",
            "German Silver Images/HM-6517/02_HM-6517_2.jpeg",
            "German Silver Images/HM-6517/03_HM-6517_3.jpeg",
            "German Silver Images/HM-6517/04_HM-6517_4.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "hm-6517",
            "hm-6517-royal-enamelled-candy-sugar-box-with-spoon"
        ]
    },
    {
        "id": "hm-6525-heritage-peacock-candy-jar-with-lid",
        "slug": "hm-6525-heritage-peacock-candy-jar-with-lid",
        "productName": "HM-6525 Heritage Peacock Candy Jar with Lid",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver hm-6525 heritage peacock candy jar with lid by master artisans. Features teal blue enamel coating \u2022 peacock finial \u2022 compact serving jar.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. Teal Blue Enamel Coating \u2022 Peacock Finial \u2022 Compact Serving Jar. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "Teal Blue Enamel Coating \u2022 Peacock Finial \u2022 Compact Serving Jar",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/HM-6525/01_HM-6525_1.jpeg",
            "German Silver Images/HM-6525/02_HM-6525_2.jpeg",
            "German Silver Images/HM-6525/03_HM-6525_3.jpeg",
            "German Silver Images/HM-6525/04_HM-6525_4.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "hm-6525",
            "hm-6525-heritage-peacock-candy-jar-with-lid"
        ]
    },
    {
        "id": "hm-6531-royal-elephant-figurine-dry-fruit-candy-box",
        "slug": "hm-6531-royal-elephant-figurine-dry-fruit-candy-box",
        "productName": "HM-6531 Royal Elephant Figurine Dry Fruit & Candy Box",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver hm-6531 royal elephant figurine dry fruit & candy box by master artisans. Features caparisoned royal elephant \u2022 hinged trunk box \u2022 enamelled howdah.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. Caparisoned Royal Elephant \u2022 Hinged Trunk Box \u2022 Enamelled Howdah. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "Caparisoned Royal Elephant \u2022 Hinged Trunk Box \u2022 Enamelled Howdah",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/HM-6531/01_HM-6531_1.jpeg",
            "German Silver Images/HM-6531/02_HM-6531_2.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "hm-6531",
            "hm-6531-royal-elephant-figurine-dry-fruit-candy-box"
        ]
    },
    {
        "id": "rgs-025-square-embossed-small-candy-bowl",
        "slug": "rgs-025-square-embossed-small-candy-bowl",
        "productName": "RGS-025 Square Embossed Small Candy Bowl",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver rgs-025 square embossed small candy bowl by master artisans. Features square fluted profile \u2022 floral repouss\u00e9 work \u2022 traditional diwali decor.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. Square Fluted Profile \u2022 Floral Repouss\u00e9 Work \u2022 Traditional Diwali Decor. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "Square Fluted Profile \u2022 Floral Repouss\u00e9 Work \u2022 Traditional Diwali Decor",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/RGS-025/01_RGS-025_1.jpeg",
            "German Silver Images/RGS-025/02_RGS-025_2.jpeg",
            "German Silver Images/RGS-025/03_RGS-025_3.jpeg",
            "German Silver Images/RGS-025/04_RGS-025_4.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "rgs-025",
            "rgs-025-square-embossed-small-candy-bowl"
        ]
    },
    {
        "id": "gs-128-royal-lotus-petal-enamelled-german-silver-bowl",
        "slug": "gs-128-royal-lotus-petal-enamelled-german-silver-bowl",
        "productName": "GS-128 Royal Lotus Petal Enamelled German Silver Bowl",
        "category": "Festive / Diwali Gifting",
        "subcategory": "Handcrafted German Silver",
        "shortDescription": "Meticulously handcrafted German silver gs-128 royal lotus petal enamelled german silver bowl by master artisans. Features handcrafted lotus petals \u2022 enamelled inlay \u2022 anti-tarnish finish.",
        "longDescription": "An opulent festive centerpiece crafted from genuine German silver. Hand-finished with intricate floral and peacock chasing. Handcrafted Lotus Petals \u2022 Enamelled Inlay \u2022 Anti-Tarnish Finish. Elegantly packed for luxury corporate celebrations and Diwali executive gifting.",
        "material": "Imported German Silver Alloy with Protective Anti-Tarnish Coating",
        "dimensions": "Standard Luxury Tableware Dimensions",
        "capacity": "Dry Fruits, Sweets, Pooja & Decor",
        "weight": "350g \u2013 950g",
        "coloursVariants": [
            "Silver",
            "Gold Accent",
            "Enamel Finish"
        ],
        "keyFeatures": [
            "Handcrafted by skilled traditional metalwork artisans",
            "Handcrafted Lotus Petals \u2022 Enamelled Inlay \u2022 Anti-Tarnish Finish",
            "Anti-tarnish lacquer for long-lasting silver brilliance",
            "Luxurious velvet gift packaging available"
        ],
        "brandingMethods": [
            "Laser Engraving on Lid/Plate",
            "Brass Metal Inlay Plate on Gift Box"
        ],
        "customizationOptions": "Custom corporate logo engraving or greeting card insert.",
        "moq": "50 units",
        "packaging": "Velvet presentation gift box.",
        "leadTime": "3\u20135 business days",
        "idealFor": [
            "Diwali Luxury Hampers",
            "Client & Stakeholder Appreciation",
            "Executive Corporate Gifts"
        ],
        "productImages": [
            "German Silver Images/GS-128/01_GS-128_1.jpeg",
            "German Silver Images/GS-128/02_GS-128_2.jpeg",
            "German Silver Images/GS-128/03_GS-128_3.jpeg",
            "German Silver Images/GS-128/04_GS-128_4.jpeg"
        ],
        "brandingImages": [],
        "packagingImages": [],
        "tags": [
            "german silver",
            "festive gifting",
            "diwali gift",
            "handcrafted",
            "gs-128",
            "gs-128-royal-lotus-petal-enamelled-german-silver-bowl"
        ]
    }
  ];

  /**
   * Find product by canonical URL slug
   * @param {string} slug
   * @returns {Object|null}
   */
  function getProductBySlug(slug) {
    if (!slug) return null;
    var s = String(slug).toLowerCase().trim();
    for (var i = 0; i < PRODUCTS_DATA.length; i++) {
      var p = PRODUCTS_DATA[i];
      if (p && p.slug && String(p.slug).toLowerCase().trim() === s) {
        return p;
      }
    }
    return null;
  }

  /**
   * Find product by product name
   * @param {string} name
   * @returns {Object|null}
   */
  function getProductByName(name) {
    if (!name) return null;
    var n = String(name).toLowerCase().trim();
    for (var i = 0; i < PRODUCTS_DATA.length; i++) {
      var p = PRODUCTS_DATA[i];
      if (!p) continue;
      var pName = p.productName || p.name || "";
      if (pName && String(pName).toLowerCase().trim() === n) {
        return p;
      }
    }
    return null;
  }

  /**
   * Find product by unique ID
   * @param {string} id
   * @returns {Object|null}
   */
  function getProductById(id) {
    if (!id) return null;
    for (var i = 0; i < PRODUCTS_DATA.length; i++) {
      if (PRODUCTS_DATA[i].id === id) {
        return PRODUCTS_DATA[i];
      }
    }
    return null;
  }

  /**
   * Get all products in a given category
   * @param {string} categoryName
   * @returns {Array<Object>}
   */
  function getProductsByCategory(categoryName) {
    if (!categoryName) return [];
    var cat = String(categoryName).toLowerCase().trim();
    return PRODUCTS_DATA.filter(function (p) {
      return p && p.category && String(p.category).toLowerCase().trim() === cat;
    });
  }

  /**
   * Get all distinct category names present in the dataset
   * @returns {Array<string>}
   */
  function getAllCategories() {
    var seen = {};
    var list = [];
    for (var i = 0; i < PRODUCTS_DATA.length; i++) {
      var c = PRODUCTS_DATA[i].category;
      if (!seen[c]) {
        seen[c] = true;
        list.push(c);
      }
    }
    return list;
  }

  return {
    PRODUCTS_DATA: PRODUCTS_DATA,
    PRODUCT_SCHEMA_DEFINITION: PRODUCT_SCHEMA_DEFINITION,
    getProductBySlug: getProductBySlug,
    getProductByName: getProductByName,
    getProductById: getProductById,
    getProductsByCategory: getProductsByCategory,
    getAllCategories: getAllCategories
  };
});
