import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Isolate-level in-memory cache so repeated RSC segment prefetches and HTML
// requests on the same Worker isolate do not re-fetch or re-parse 200KB+ JSON
// cache files on every request.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isolateMemoryCache = new Map<string, any>();

const cachedStaticAssetsIncrementalCache = {
  name: staticAssetsIncrementalCache.name,
  async get(key: string, cacheType?: string) {
    const compositeKey = `${cacheType ?? "cache"}:${key}`;
    const hit = isolateMemoryCache.get(compositeKey);
    if (hit !== undefined) {
      return hit;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = await (staticAssetsIncrementalCache as any).get(key, cacheType);
    if (res && res.value) {
      const enriched = {
        ...res,
        shouldBypassTagCache: true,
      };
      if (isolateMemoryCache.size >= 100) {
        const oldestKey = isolateMemoryCache.keys().next().value;
        if (oldestKey) isolateMemoryCache.delete(oldestKey);
      }
      isolateMemoryCache.set(compositeKey, enriched);
      return enriched;
    }
    return res;
  },
  async set(key: string, value: unknown, cacheType?: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (staticAssetsIncrementalCache as any).set(key, value, cacheType);
  },
  async delete(key: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (staticAssetsIncrementalCache as any).delete(key);
  },
};

const openNextConfig = {
  ...defineCloudflareConfig({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    incrementalCache: () => cachedStaticAssetsIncrementalCache as any,
    enableCacheInterception: true,
  }),
  buildCommand: "npx next build",
};

export default openNextConfig;
