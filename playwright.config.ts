import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'elements',
  testMatch: '*.e2e.spec.js',
  timeout: 6000,

  webServer: {
    command: 'npx @web/dev-server -p 8080 --app-root _site',
    port: 8080,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    viewport: { width: 1920, height: 1080 },
  },

  expect: {
    toMatchSnapshot: { threshold: 0.2 },
  },
};

export default config;
