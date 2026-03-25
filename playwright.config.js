import { defineConfig } from "@playwright/test";

export default defineConfig({
  timeout: 60000,
  retries: 2,
  workers: 3,
  reporter: [["html"], ["list"]],
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
});
