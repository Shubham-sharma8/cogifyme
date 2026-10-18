import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const openNextConfig = {
  ...defineCloudflareConfig(),
  buildCommand: "npx next build",
};

export default openNextConfig;
