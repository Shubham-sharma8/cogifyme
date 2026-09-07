const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  const publicDir = path.join(__dirname, '..', 'public');
  const screenshotPath = path.join(publicDir, 'brand', 'EmDoc_home.png');
  const logoPath = path.join(publicDir, 'brand', 'logo_white.png');
  const outputPng = path.join(publicDir, 'og-image.png');
  const outputBrandPng = path.join(publicDir, 'brand', 'og-image.png');

  console.log('Generating high-converting 1200x630 OpenGraph card...');

  // 1. Resize screenshot of EmDoc macOS app to fit the right pane
  // Window dimensions: 640 x 420 with rounded corners
  const windowWidth = 630;
  const windowHeight = 410;

  const resizedScreenshot = await sharp(screenshotPath)
    .resize(windowWidth, windowHeight - 32, { fit: 'cover', position: 'top' })
    .toBuffer();

  // Create macOS window frame SVG with titlebar buttons
  const macWindowSvg = Buffer.from(`
    <svg width="${windowWidth}" height="${windowHeight}" viewBox="0 0 ${windowWidth} ${windowHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="windowClip">
          <rect x="0" y="0" width="${windowWidth}" height="${windowHeight}" rx="14" ry="14" />
        </clipPath>
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <!-- Window Frame Background -->
      <rect x="0" y="0" width="${windowWidth}" height="${windowHeight}" rx="14" ry="14" fill="#18181b" stroke="#3f3f46" stroke-width="1.5" />
      <!-- Window Header Bar -->
      <rect x="0" y="0" width="${windowWidth}" height="32" rx="14" ry="14" fill="#27272a" />
      <rect x="0" y="16" width="${windowWidth}" height="16" fill="#27272a" />
      <line x1="0" y1="32" x2="${windowWidth}" y2="32" stroke="#3f3f46" stroke-width="1" />
      <!-- macOS traffic lights -->
      <circle cx="20" cy="16" r="5.5" fill="#ef4444" />
      <circle cx="36" cy="16" r="5.5" fill="#f59e0b" />
      <circle cx="52" cy="16" r="5.5" fill="#10b981" />
      <text x="${windowWidth / 2}" y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica" font-size="11" font-weight="600" fill="#a1a1aa" text-anchor="middle">EmDoc PDF Workstation — Native macOS</text>
    </svg>
  `);

  // Composite screenshot into macOS frame
  const framedAppWindow = await sharp(macWindowSvg)
    .composite([
      {
        input: resizedScreenshot,
        top: 32,
        left: 0,
      },
    ])
    .png()
    .toBuffer();

  // 2. Prepare Logo
  const resizedLogo = await sharp(logoPath)
    .resize(60, 60, { fit: 'contain' })
    .toBuffer();

  // 3. Create Background SVG with Typography & Badges
  const canvasSvg = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#08090f" />
          <stop offset="50%" stop-color="#0e1322" />
          <stop offset="100%" stop-color="#06070b" />
        </linearGradient>
        <radialGradient id="glowIndigo" cx="25%" cy="30%" r="50%">
          <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#4f46e5" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="glowCyan" cx="80%" cy="70%" r="60%">
          <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.22" />
          <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Background Canvas -->
      <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
      <circle cx="300" cy="200" r="400" fill="url(#glowIndigo)" />
      <circle cx="950" cy="400" r="500" fill="url(#glowCyan)" />

      <!-- Subtle Grid Lines -->
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" stroke-width="1" />
      </pattern>
      <rect width="${width}" height="${height}" fill="url(#grid)" />

      <!-- Left Typography Container -->
      <g transform="translate(64, 70)">
        <!-- Top Category Pill -->
        <rect x="74" y="8" width="170" height="26" rx="13" fill="rgba(99, 102, 241, 0.2)" stroke="rgba(99, 102, 241, 0.4)" stroke-width="1" />
        <text x="159" y="25" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#a5b4fc" text-anchor="middle" letter-spacing="1">COGIFY APPS</text>

        <!-- Brand Name -->
        <text x="74" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800" fill="#ffffff" letter-spacing="-0.5">EmDoc</text>
        <text x="175" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="500" fill="#818cf8">for Mac</text>

        <!-- Big Punchy Headline -->
        <text x="0" y="115" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="800" fill="#ffffff" letter-spacing="-1">
          Next-Gen PDF Workstation
        </text>
        <text x="0" y="152" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="700" fill="#38bdf8" letter-spacing="-0.5">
          Fast. Air-Gapped. 100% Free.
        </text>

        <!-- Description Paragraph -->
        <text x="0" y="195" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" fill="#94a3b8" font-weight="400">
          The ultimate lightweight Adobe Acrobat Pro alternative.
        </text>
        <text x="0" y="217" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" fill="#94a3b8" font-weight="400">
          Zero subscriptions. Complete enterprise data sovereignty.
        </text>

        <!-- Key Specs Matrix -->
        <g transform="translate(0, 255)">
          <!-- Badge 1: 5.0 MB App Size -->
          <rect x="0" y="0" width="190" height="42" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
          <text x="14" y="18" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" fill="#94a3b8" font-weight="600" text-transform="uppercase">APP BINARY SIZE</text>
          <text x="14" y="34" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" fill="#10b981" font-weight="800">5.0 MB Native</text>

          <!-- Badge 2: ~45 MB RAM -->
          <rect x="204" y="0" width="190" height="42" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
          <text x="218" y="18" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" fill="#94a3b8" font-weight="600" text-transform="uppercase">RAM FOOTPRINT</text>
          <text x="218" y="34" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" fill="#38bdf8" font-weight="800">~45 MB Low Memory</text>

          <!-- Badge 3: 100% Offline -->
          <rect x="0" y="52" width="190" height="42" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
          <text x="14" y="70" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" fill="#94a3b8" font-weight="600" text-transform="uppercase">DATA PRIVACY</text>
          <text x="14" y="86" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" fill="#a855f7" font-weight="800">100% Air-Gapped</text>

          <!-- Badge 4: Free Forever -->
          <rect x="204" y="52" width="190" height="42" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
          <text x="218" y="70" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" fill="#94a3b8" font-weight="600" text-transform="uppercase">LICENSE MODEL</text>
          <text x="218" y="86" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" fill="#f59e0b" font-weight="800">Free Full Features</text>
        </g>

        <!-- Bottom URL & Creator credit -->
        <g transform="translate(0, 395)">
          <text x="0" y="24" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="600" fill="#e2e8f0">https://cogify.me/products/emdoc</text>
          <text x="0" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="500" fill="#64748b">Engineered by Cogify Technologies • Apple Silicon &amp; Intel</text>
        </g>
      </g>
    </svg>
  `);

  // 4. Composite everything onto the 1200x630 canvas
  const finalImageBuffer = await sharp(canvasSvg)
    .composite([
      // Logo at (64, 70)
      {
        input: resizedLogo,
        top: 70,
        left: 64,
      },
      // Framed App Window at (520, 110)
      {
        input: framedAppWindow,
        top: 110,
        left: 520,
      },
    ])
    .png({ quality: 90, compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync(outputPng, finalImageBuffer);
  fs.writeFileSync(outputBrandPng, finalImageBuffer);

  const stats = fs.statSync(outputPng);
  console.log(`✓ Successfully generated ${outputPng} (${(stats.size / 1024).toFixed(1)} KB)`);
  console.log(`✓ WhatsApp limit compliant (< 300 KB): ${(stats.size / 1024).toFixed(1)} KB`);
}

createOgImage().catch((err) => {
  console.error('Error generating OG image:', err);
  process.exit(1);
});
