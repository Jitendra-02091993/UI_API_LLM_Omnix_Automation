import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/e2e',

  timeout: 30000,

  expect: {
    timeout: 5000,
  },

  retries: 0,

  workers: 21,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  use: {
    baseURL: 'https://webdriveruniversity.com/',

    headless: false,

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    actionTimeout: 0,

    navigationTimeout: 30000,
    
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Enable later when needed
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});