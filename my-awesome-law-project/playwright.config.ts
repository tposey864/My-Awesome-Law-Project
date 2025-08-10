import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  webServer: {
    command: 'npm start',
    port: 3000,
    timeout: 120000,
    reuseExistingServer: !process.env.CI,
  },
});
