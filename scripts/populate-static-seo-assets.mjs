import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const openNextCacheDir = path.join(rootDir, ".open-next", "cache");
const openNextAssetsDir = path.join(rootDir, ".open-next", "assets");
const staticCacheTargetDir = path.join(openNextAssetsDir, "cdn-cgi", "_next_cache");
const nextServerAppDir = path.join(rootDir, ".next", "server", "app");

// 1. Populate OpenNext static-assets incremental cache (.open-next/assets/cdn-cgi/_next_cache)
// so cacheInterceptor serves all pre-rendered pages from Cloudflare Static Assets in <0.5ms CPU
// without cold-booting server-functions/default/handler.mjs on every crawl request.
if (fs.existsSync(openNextCacheDir)) {
  fs.mkdirSync(path.dirname(staticCacheTargetDir), { recursive: true });
  fs.cpSync(openNextCacheDir, staticCacheTargetDir, { recursive: true, force: true });
  console.log("[SEO Static Cache] Populated .open-next/assets/cdn-cgi/_next_cache from .open-next/cache");
} else {
  console.warn("[SEO Static Cache] Warning: .open-next/cache directory not found");
}

// 2. Copy static metadata route bodies directly into .open-next/assets/
// so Cloudflare Edge Static Assets serves robots.txt, sitemap.xml, manifest.webmanifest,
// opengraph-image.png, and twitter-image.png with 0ms Worker CPU.
const staticRouteBodies = [
  { src: "robots.txt.body", dest: "robots.txt" },
  { src: "sitemap.xml.body", dest: "sitemap.xml" },
  { src: "manifest.webmanifest.body", dest: "manifest.webmanifest" },
  { src: "opengraph-image.png.body", dest: "opengraph-image.png" },
  { src: "twitter-image.png.body", dest: "twitter-image.png" },
];

for (const { src, dest } of staticRouteBodies) {
  const srcPath = path.join(nextServerAppDir, src);
  const destPath = path.join(openNextAssetsDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`[SEO Static Assets] Copied ${src} -> .open-next/assets/${dest}`);
  }
}
