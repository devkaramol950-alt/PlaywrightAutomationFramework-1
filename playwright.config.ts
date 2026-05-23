import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Test directory
  testDir: './tests',

  // Overall test timeout
  timeout: 60 * 1000,

  // Expect timeout
  expect: {
    timeout: 30000,
  },



  // Reporter
  reporter: [
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'results/junit-report.xml' }]
  ],

  // Shared settings for all projects
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'only-on-failure',
    testIdAttribute: 'data-test',  // set once
    trace:'on',  // collect trace when retrying the failed test

  },


  // Projects (browsers)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
 
  ],

});