import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  testDir: './src/e2e',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  
  // Add a retry specifically for CI environments to handle network flakes
  retries: process.env.CI ? 1 : 0,

  // Throttle workers in CI, but let it rip locally or use a specific env override
  workers: process.env.CI ? 4 : process.env.WORKERS ? Number(process.env.WORKERS) : undefined,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  use: {
    // Dynamically inject the base URL, falling back to your default
    baseURL: process.env.BASE_URL || 'https://rahulshettyacademy.com/',
    
    // Force headless mode in CI
    headless: process.env.CI ? true : false,
    
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
  ],
});