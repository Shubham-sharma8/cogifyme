import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const openNextCacheDir = path.join(rootDir, ".open-next", "cache");
const openNextAssetsDir = path.join(rootDir, ".open-next", "assets");
const staticCacheTargetDir = path.join(openNextAssetsDir, "cdn-cgi", "_next_cache");
const nextServerAppDir = path.join(rootDir, ".next", "server", "app");
const middlewareHandlerPath = path.join(rootDir, ".open-next", "middleware", "handler.mjs");

// Helper to recursively find all .cache files
function walkCacheFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walkCacheFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".cache")) {
      results.push(fullPath);
    }
  }
  return results;
}

// 1. Clean and populate OpenNext static-assets incremental cache (.open-next/assets/cdn-cgi/_next_cache)
if (fs.existsSync(openNextCacheDir)) {
  if (fs.existsSync(staticCacheTargetDir)) {
    fs.rmSync(staticCacheTargetDir, { recursive: true, force: true });
  }
  fs.mkdirSync(path.dirname(staticCacheTargetDir), { recursive: true });
  fs.cpSync(openNextCacheDir, staticCacheTargetDir, { recursive: true, force: true });

  // Strip redundant duplicate `_full` segment from .cache files (cachedValue.rsc already stores it)
  // reducing .cache JSON size by ~30% and speeding up cold isolate JSON.parse()
  const cacheFiles = walkCacheFiles(staticCacheTargetDir);
  let savedBytes = 0;
  for (const file of cacheFiles) {
    try {
      const raw = fs.readFileSync(file, "utf8");
      const parsed = JSON.parse(raw);
      if (parsed?.segmentData && parsed.segmentData["/_full"] && parsed.rsc) {
        delete parsed.segmentData["/_full"];
        const compacted = JSON.stringify(parsed);
        savedBytes += raw.length - compacted.length;
        fs.writeFileSync(file, compacted, "utf8");
      }
    } catch {
      // ignore non-JSON cache entries
    }
  }
  console.log(
    `[SEO Static Cache] Populated ${cacheFiles.length} cache entries into .open-next/assets/cdn-cgi/_next_cache (trimmed ${Math.round(savedBytes / 1024)} KB of duplicate RSC payloads)`
  );
} else {
  console.warn("[SEO Static Cache] Warning: .open-next/cache directory not found");
}

// 2. Patch .open-next/middleware/handler.mjs to eliminate CPU spikes (Error 1102) & RSC/HTML cache collisions
if (fs.existsSync(middlewareHandlerPath)) {
  let handlerCode = fs.readFileSync(middlewareHandlerPath, "utf8");

  // 2a. Replace cryptographic MD5 over 200KB+ strings on every request with a 0-CPU fast fingerprint
  const md5Target = `const hash = (str) => createHash2("md5").update(str).digest("hex");`;
  const md5Replacement = `const hash = (str) => \`\${str.length.toString(36)}-\${str.charCodeAt(0) || 0}-\${str.charCodeAt(str.length >> 1) || 0}-\${str.charCodeAt(str.length - 1) || 0}\`;`;
  if (handlerCode.includes(md5Target)) {
    handlerCode = handlerCode.replace(md5Target, md5Replacement);
    console.log("[Edge CPU Patch] Replaced per-request MD5 hashing with O(1) fingerprint in middleware/handler.mjs");
  }

  // 2b. Prevent missing RSC segment prefetches (e.g. /_head) from falling back to the 6.4 MB server bundle,
  // and prevent CDN/browser disk cache from mixing up RSC (text/x-component) and HTML (text/html) responses.
  const bodyMissingTarget = `  if (body === void 0) {
    debug("Missing body in the cache entry, falling back to the server");
    return void 0;
  }`;
  const bodyMissingReplacement = `  if (body === void 0) {
    if (isDataRequest && typeof event.headers[NEXT_SEGMENT_PREFETCH_HEADER] === "string") {
      return {
        type: "core",
        statusCode: 404,
        body: emptyReadableStream(),
        isBase64Encoded: false,
        headers: {
          [CACHE_CONTROL_HEADER]: NO_STORE_CACHE_CONTROL,
          [NEXT_PRERENDER_HEADER]: "1",
          [NEXT_POSTPONED_HEADER]: "2",
          [OPEN_NEXT_CACHE_HEADER]: "HIT",
          vary: VARY_HEADER
        }
      };
    }
    debug("Missing body in the cache entry, falling back to the server");
    return void 0;
  }`;
  if (handlerCode.includes(bodyMissingTarget)) {
    handlerCode = handlerCode.replace(bodyMissingTarget, bodyMissingReplacement);
    console.log("[Edge CPU Patch] Patched RSC segment miss fast-404 in middleware/handler.mjs");
  }

  const headersTarget = `  fixCacheControlForError(headers, statusCode);`;
  const headersReplacement = `  if (isDataRequest) {
    headers[CACHE_CONTROL_HEADER] = NO_STORE_CACHE_CONTROL;
  } else {
    headers[CACHE_CONTROL_HEADER] = "public, max-age=0, must-revalidate";
  }
  fixCacheControlForError(headers, statusCode);`;
  if (handlerCode.includes(headersTarget)) {
    handlerCode = handlerCode.replace(headersTarget, headersReplacement);
    console.log("[Edge Cache Patch] Isolated RSC vs HTML Cache-Control headers in middleware/handler.mjs");
  }

  fs.writeFileSync(middlewareHandlerPath, handlerCode, "utf8");
}

// 3. Copy static metadata route bodies directly into .open-next/assets/
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
