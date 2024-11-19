
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/integration/**/*.{cy,spec}.{js,ts}",
    pageLoadTimeout: 120000, // 120 saniye, yani 2 dakika
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: true,
      json: true
    }
  }
});
