import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // testMatch: ["tests/alert.test.ts"],
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retry-with-video",
    launchOptions:{
      // add delay, debugging whatever
      // slowMo: 1000
    }
  },
  retries: 0,
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "jsonReports/jsonReport.json",
      },
    ],
    [
      "html",
      {
        open: "never",
      },
    ],
  ],
};

export default config;
