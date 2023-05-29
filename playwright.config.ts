import { PlaywrightTestConfig } from '@playwright/test';

const defineConfig: PlaywrightTestConfig = {
  testMatch: ["tests/login.test.ts"]
  , use: {
    headless: false
  }
  ,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }],
  ["html", {
    open: "never"
  }]]
}

export default defineConfig;
